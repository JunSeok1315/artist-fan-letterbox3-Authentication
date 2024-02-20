import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Header></Header>
      <AddForm></AddForm>
      <LetterList></LetterList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
