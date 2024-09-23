import React from 'react';

function CalculateHours(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="alert alert-success text-center"
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