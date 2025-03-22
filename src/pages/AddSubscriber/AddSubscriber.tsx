import { useEffect, useState } from "react";
import { AddSubscriberForm } from "../../components";
import { Container, StatusText } from "../../styles/CommonStyles.styles";

const AddSubscriber = () => {
  const [statusElement, setStatusElement] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setStatusElement(null);
    }, 3000);
  }, [statusElement]);

  return (
    <Container>
      <AddSubscriberForm
        setStatusElement={setStatusElement}
        handlefinal={() => {}}
      />
      <StatusText>{statusElement}</StatusText>
    </Container>
  );
};

export default AddSubscriber;
