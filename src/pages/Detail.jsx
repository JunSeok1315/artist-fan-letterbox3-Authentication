import Avatar from "components/common/Avatar";
import Button from "components/common/Button";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getFormattedDate } from "util/date";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetter, editLetter } from "../redux/modules/letters";

function Detail() {
  // const { letters, setLetters } = useContext(LetterContext);
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letters);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );

  const onDeleteBtn = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;

    dispatch(deleteLetter(id));
    navigate("/");
  };
  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    dispatch(editLetter({ id, editingText }));
    setIsEditing(false);
    setEditingText("");
  };

  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="홈으로"></Button>
        </HomeBtn>
      </Link>
      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large"></Avatar>
            <Nickname>{nickname}</Nickname>
          </AvatarAndNickname>
          <time>{getFormattedDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To: {writedTo}</ToMember>
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            ></Textarea>
            <BtnsWrapper>
              <Button
                text="취소"
                onClick={() => {
                  setIsEditing(false);
                }}
              ></Button>
              <Button text="완료" onClick={onEditDone}></Button>
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <BtnsWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)}></Button>
              <Button text="삭제" onClick={onDeleteBtn}></Button>
            </BtnsWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const DetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: gray;
  color: white;
  padding: 12px;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarAndNickname = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Nickname = styled.span`
  font-size: 32px;
`;

const ToMember = styled.span`
  font-size: 32px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
  resize: none;
  color: white;
`;

export default Detail;
