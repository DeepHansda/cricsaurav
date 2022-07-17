import React from 'react';
import './table.css'
function Table(){
    return(
        <div className="table">
            <div className="table-heading">
                <h2>Top 15 Fantasy Cricket Apps List To Download</h2>
            </div>
            <div className="table-container">
            <table className="main-table">
            <thead className="table-head">
                <tr>
                    <th>number</th>
                    <th>apps</th>
                    <th>download</th>
                    <th>referral</th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td>1</td>
                    <td>vs code</td>
                    <td>download</td>
                    <td>sdfsd233</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>vs code</td>
                    <td>download</td>
                    <td>sdfsd233</td>
                </tr><tr>
                    <td>3</td>
                    <td>vs code</td>
                    <td>download</td>
                    <td>sdfsd233</td>
                </tr>
            </tbody>

            </table>
            </div>
           
        </div>
    )
}

export default Table;