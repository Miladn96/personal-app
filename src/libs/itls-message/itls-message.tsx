import { ButtonGroup, IconButton } from "@mui/material";
import { MessagesModel } from "../../service/admin";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styled from "@emotion/styled";

export const ItlsMessage = (props: { message: MessagesModel, onDelete: Function }) => {
  const {
    message: { email, message, messageUid, name },
    onDelete,
  } = props;
  
  return (
    <MessageContainer>
      <TitleContainer>
        <MessageName>{name}</MessageName>
        <ButtonGroup>
          <IconButton size="small" style={{ height: "30px" }} onClick={() => onDelete(messageUid)}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </ButtonGroup>
      </TitleContainer>
      <MessageEmail>{email}</MessageEmail>
      <MessageContent>{message}</MessageContent>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  border: 1px solid #00000033;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 185px;
`;

const MessageName = styled.h3`
  margin: 0;
`;

const MessageEmail = styled.h5`
  margin: 0;
`;

const MessageContent = styled.p`
  margin: 0;
  overflow: auto;
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`
