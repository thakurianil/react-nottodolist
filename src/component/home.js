// this page is for displaying rendering all the component
import React from "react";
import Form from "./form";
import DisplayBadLIst from "./displayBadList";
import DisplayGoodLIst from "./displayGoodList";
import CalculateHours from "./calculateHours";
function Home() {

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12  text-center p-3">
            <h1>Not To do list</h1>
          </div>
        </div>
      </div>
      <div class="container border border-light rounded-5">
        <div class="row p-2 ">
          <Form />
        </div>
      </div>
      <div class="container mt-4">
        <div class="row p-1 ">
          <DisplayGoodLIst />
          <DisplayBadLIst />
        </div>
      </div>
      <CalculateHours />
    </>
  );
}

export default Home;
