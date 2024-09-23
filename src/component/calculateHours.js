import React from 'react';

function CalculateHours(props) {
  return (
    <div class="container">
      <div class="row">
        <div
          class="alert alert-success text-center"
          role="alert"
          id="allocated"
        >
          The total hours allocated = {props.totalHours} hours
        </div>
      </div>
    </div>
  );
}
export default CalculateHours;