// this page is for displaying rendering all the component
import Form from "./form";
import DisplayBadLIst from "./displayBadList";
import DisplayGoodLIst from "./displayGoodList";
function Home() {
  return (
    <>
      <Form />
      <DisplayGoodLIst />
      <DisplayBadLIst />
    </>
  );
}

export default Home;
