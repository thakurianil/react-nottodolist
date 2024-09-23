import React from "react";
import "../App.css";
function DisplayBadLIst({ badList, onChangeType, onDeleteType }) {
  const totalBadHours = badList.reduce(
    (acc, value) => acc + parseFloat(value.hours),
    0
  );

  return (
    <>
      <div className="col-md-6 p-3 text-center">
        <h3>
          <span>
            <input
              type="checkbox"
            //   onChange={(e) => {

            //   }}
              value="bad"
              id="badCheckBox"
            />
          </span>
          Bad List
          <button
            type="button"
            className="btn btn-danger"
            // onClick={deleteSelectedBad}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-success"
            // onClick={swapSelectedBad}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </h3>

        <hr />
        <table className="table table-hover">
          <tbody id="BadList">
            {badList.map((value, index) => (
              <tr key={value.id}>
                <th scope="row">{value.id}</th>
                <td>{value.task}</td>
                <td>{value.hours}</td>
                <td className="text-end">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDeleteType(value.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => onChangeType(value.id)}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-danger" role="alert" id="saved">
          You could have saved = {totalBadHours} hours
        </div>
      </div>
    </>
  );
}

export default DisplayBadLIst;
