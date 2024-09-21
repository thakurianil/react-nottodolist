// This page is for displaying goodlist
import React from 'react';
function DisplayGoodLIst(params) {
    return(

        <>
                <div class="col-md-6 p-3 text-center">
                    <h3>
                        <td>
                            {/* <input type="checkbox" onchange="selectedAll(this)" value="entry" id="checkBox"> */}
                            </td>
                        Entry List
                        <button type="button" class="btn btn-danger" onclick="deleteSelected()" value="entry"><i
                                class="fa-solid fa-trash"></i></button>
                        <button type="button" class="btn btn-success" onclick="swapSelected(this)" value="entry"><i
                                class="fa-solid fa-arrow-right"></i></button>
                    </h3>

                    <hr />
                    <table class="table table-hover">
                        <tbody id="EntryList">

                            <tr>
                                <th scope="row">#</th>
                                <td>Task1</td>
                                <td>hours</td>
                                <td class="text-end">

                                    <button type="button" class="btn btn-danger"><i
                                            class="fa-solid fa-trash"></i></button>
                                    <button type="button" class="btn btn-success"><i
                                            class="fa-solid fa-arrow-right"></i></button>
                                </td>
                            </tr> 
                        </tbody>
                    </table>


                </div>
     </>
    )
};

export default DisplayGoodLIst;