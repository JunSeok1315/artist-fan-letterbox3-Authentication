import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setMember } from "../redux/modules/member";

function Tabs() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    dispatch(setMember(e.target.textContent));
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tab $activeMember={activeMember}>카리나</Tab>
      <Tab $activeMember={activeMember}>윈터</Tab>
      <Tab $activeMember={activeMember}>닝닝</Tab>
      <Tab $activeMember={activeMember}>지젤</Tab>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
`;
const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        color: black;
        background-color: yellow;
      `;
    }
    return css`
      color: white;
      background-color: black;
    `;
  }};
  font-size: 20px;
  width: 80px;
  text-align: center;
  padding: 12px 6px;
  border-radius: 12px;
  cursor: pointer;
`;

export default Tabs;
