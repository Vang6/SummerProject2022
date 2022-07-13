import React from 'react';
import { HttpClient, API_BOOK } from '../services';
const Issues= function(){
  const[state, setState]= React.useState([]);
  HttpClient.get(`${API_BOOK.ROOT}${API_BOOK.issues}`).then(function(data){
    setState(data);
  }).catch(function(error){

  })
    return(

        <div>
        <div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Date of Notified</th>
                    <th scope="col">Status</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Severity</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    state.map(function(issue){
                      return <tr>
                        <td>{issue._id}</td>
                        <td>{issue.heading}</td>
                        <td>{issue.desc}</td>
                        <td>{issue.category}</td>
                        <td>{issue.dateOfCreation}</td>
                        <td>{issue.status}</td>
                        <td>{issue.owner}</td>
                        <td>{issue.severity}</td>
                        <td><button></button></td>
                      </tr>

                    })
                  }
                </tbody>
              </table>
        </div>
    </div>
     );
};
export default Issues;