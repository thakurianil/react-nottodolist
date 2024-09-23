// This page is for displaying goodlist
import React from "react";
function DisplayGoodLIst({ goodList, onChangeType, onDeleteType }) {
  return (
    <>
      <div className="col-md-6 p-3 text-center">
        <h3>
          <span>
            <input
              type="checkbox"
              //   onChange={(e) => {/* handle select all logic */}}
              value="entry"
              id="checkBox"
            />
          </span>
          Entry List
          <button
            type="button"
            className="btn btn-danger"
            // onClick={deleteSelected}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-success"
            // onClick={swapSelected}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </h3>

        <hr />
        <table className="table table-hover">
          <tbody id="EntryList">
            {goodList.map((value, index) => (
              <tr key={index}>
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
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayGoodLIst;
