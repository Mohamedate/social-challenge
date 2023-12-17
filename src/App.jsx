import Container from "./ui/Container";
import Followers from "./ui/Followers";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";
import OverViews from "./ui/OverViews";

function App() {
  return (
    <Main>
      <Container>
        <Header />
        <Followers />
        <OverViews />
      </Container>
      <Footer />
    </Main>
  );
}

export default App;
