// This page is for displaying badlist
import React from 'react';
import "../App.css";
function DisplayBadLIst(params) {
    return(
        <>
        <div class="col-md-6 p-3 text-center">
                    <h3>
                        <td>
                            {/* <input type="checkbox" onchange="selectedAll(this)" value="bad" unchecked> */}
                            </td>
                        Bad List
                        <button type="button" class="btn btn-danger" onclick="deleteSelected()" value="bad"><i
                                class="fa-solid fa-trash "></i></button>
                        <button type="button" class="btn btn-success" onclick="swapSelected(this)" value="bad"><i
                                class="fa-solid fa-arrow-left"></i></button>
                    </h3>

                    <hr />
                    <table class="table table-hover">
                        <tbody id="BadList">
                            
                            <tr>
                                <th scope="row">#</th>
                                <td>Task1</td>
                                <td>hours</td>
                                <td class="text-end">


                                    <button type="button" class="btn btn-success"><i
                                            class="fa-solid fa-arrow-left"></i></button>
                                    <button type="button" class="btn btn-danger"><i
                                            class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-danger" role="alert" id="saved">
                        You could have saved = 0 hours
                    </div>
                </div>
        </>
    )
}

export default DisplayBadLIst;