import { List, ListItem } from "../../../styles/CommonStyles.styles";
import { Subscriber } from "../../../types/Subscriber";
import { Title } from "./UserData.styles";

type UserDataProps = {
  subscriber: Subscriber;
};

const UserData = ({ subscriber }: UserDataProps) => {
  const { EmailAddress, Name } = subscriber;
  return (
    <>
      <Title>User Info</Title>
      <List>
        <ListItem>
          <span>Name:</span> {Name}
        </ListItem>
        <ListItem>
          <span>Email:</span> {EmailAddress}
        </ListItem>
      </List>
    </>
  );
};

export default UserData;
