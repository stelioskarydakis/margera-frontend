import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Header, Wrapper } from "./AddSubcriberForm.styles";
import {
  InputElement,
  SubmitButton,
  TextError,
} from "../../../styles/CommonStyles.styles";
import {
  addSubscriberAsync,
  fetchSubscribers,
} from "../../../redux/subscribersSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

type AddSubscriberFormProps = {
  handlefinal: () => void;
  sortField?: string;
  orderdirection?: string;
  page?: number;
  pagesize?: number;
  setStatusElement: (status: string | null) => void;
};

const AddSubscriberForm = ({
  handlefinal,
  sortField = "email",
  orderdirection = "asc",
  page = 1,
  pagesize = 10,
  setStatusElement,
}: AddSubscriberFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .max(250, "Name cannot exceed 250 characters")
      .test("no-whitespace", "Name cannot be just empty spaces", (value) =>
        value ? value.trim() !== "" : true
      ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .max(250, "Email cannot exceed 250 characters")
      .test("no-whitespace", "Email cannot be just empty spaces", (value) =>
        value ? value.trim() !== "" : true
      )
      .test(
        "valid-domain",
        "Email must contain a valid domain (e.g., .com)",
        (value) => (value ? /\.[a-z]{2,}$/.test(value) : true)
      ),
  });

  const handleSubmit = async (
    values: { name: string; email: string },
    {
      setSubmitting,
      resetForm,
      setStatus,
    }: FormikHelpers<{ name: string; email: string }>
  ) => {
    setStatus("");

    try {
      const actionResult = await dispatch(addSubscriberAsync(values));

      if (addSubscriberAsync.fulfilled.match(actionResult)) {
        setStatus("Subscriber added! Soon the data will be updated.");
        setStatusElement("Subscriber added!");
        resetForm();
      } else {
        const errorMessage = "There was an error adding the subscriber.";
        setStatus(errorMessage);
        setStatusElement(errorMessage);
      }
    } catch (error) {
      console.error("Error adding subscriber:", error);
      const errorMessage = "There was an error adding the subscriber.";
      setStatus(errorMessage);
      setStatusElement(errorMessage);
    } finally {
      dispatch(
        fetchSubscribers({
          page,
          pagesize,
          sortField,
          orderdirection,
        })
      );
      handlefinal();
    }

    setSubmitting(false);
  };

  return (
    <Wrapper>
      <Header>Add Subscriber</Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ isSubmitting, isValid }) => {
          return (
            <Form>
              <Field
                as={InputElement}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component={TextError} />

              <Field
                as={InputElement}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component={TextError} />

              <SubmitButton type="submit" disabled={isSubmitting || !isValid}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default AddSubscriberForm;
