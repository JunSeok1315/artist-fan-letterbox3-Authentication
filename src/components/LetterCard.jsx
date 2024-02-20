import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Avatar from "./common/Avatar";
import { getFormattedDate } from "util/date";

function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <Avatar src={letter.avatar}></Avatar>
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NicknameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Content = styled.p`
  background-color: gray;
  border-radius: 12px;
  padding: 12px;
  margin-left: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default LetterCard;
