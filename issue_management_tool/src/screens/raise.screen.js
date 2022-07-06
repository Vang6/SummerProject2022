import React from 'react';
import { issueCategory, issueStatus, issueSeverity } from '../constants';
import { HttpClient, API_BOOK } from '../services';
const Raise = function () {

  const [state, setState] = React.useState({
    heading: '',
    desc: '',
    category: issueCategory.TECHNICAL,
    dateOfCreation: '01-01-2022',
    status: issueStatus.CREATED,
    owner: '',
    assignTo: null,
    severity: issueSeverity.HIGH
  });
  const checkValidity = (modfState) => {
    if (modfState.heading
      && modfState.desc
      && modfState.category
      && modfState.dateOfCreation
      && modfState.status
      //&& modfState.owner
      //&& modfState.assignTo
      && modfState.severity) {
      modfState.valid = true;
    }
    else {
      modfState.valid = false;
    }
    return modfState;
  };
  const commonHandler = (e) => {
    let modfState = {};
    switch (e.target.id) {
      case 'issueHeading':
        modfState = { ...state, ...{ heading: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueDesc':
        modfState = { ...state, ...{ desc: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueCategory':
        modfState = { ...state, ...{ category: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueDateOfCreation':
        modfState = { ...state, ...{ dateOfCreation: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueStatus':
        modfState = { ...state, ...{ status: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueOwner':
        modfState = { ...state, ...{ owner: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueAssignTo':
        modfState = { ...state, ...{ assignTo: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      case 'issueSeverity':
        modfState = { ...state, ...{ severity: e.target.value } };
        modfState = checkValidity(modfState);
        setState(modfState);
        break;
      default: console.log('default');
    }
    console.log(state);
  }

  const categoryOptions = Object.keys(issueCategory).map(function (key) {
    return <option key={key} value={issueCategory[key]}>{issueCategory[key]}</option>
  })
  const statusOptions = Object.keys(issueStatus).map(function (key) {
    return <option key={key} value={issueStatus[key]}>{issueStatus[key]}</option>
  })
  const severityOptions = Object.keys(issueSeverity).map(function (key) {
    return <option key={key} value={issueSeverity[key]}>{issueSeverity[key]}</option>
  })
  const raiseRequest = (e) => {
    e.preventDefault();
    const payload = {
      category: state.category,
      dateOfCreation: state.dateOfCreation,
      desc: state.desc,
      heading: state.heading,
      severity: state.severity,
      status: state.status,
    }
    HttpClient.post(`${API_BOOK.ROOT}${API_BOOK.raiseIssue}`, payload).then(function(data){
      console.log(data);    
    }).catch(function(error){
      console.log(error);
    })
  }
  return (
    <div>
      <div className="container">
        <h3>Raise an Issue</h3>
        <form onSubmit={raiseRequest}>
          <div className='row'>
            <div className='col-md-6'>
              <div className="form-group">
                <label>Heading</label>
                <input type="text" onChange={commonHandler} className="form-control" id="issueHeading" value={state.heading} placeholder="heading"></input>
              </div>
              <div className="form-group">
                <label>Select Severity</label>
                <select className="form-control" onChange={commonHandler} value={state.severity} id="issueSeverity">
                  {severityOptions}
                </select>
              </div>
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" id="issueCategory" onChange={commonHandler} value={state.category}>
                  {categoryOptions}
                </select>
              </div>
              <div className="form-group">
                <label>Describe Problem</label>
                <textarea onChange={commonHandler} value={state.desc} className="form-control" id="issueDesc" rows="3"></textarea>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="form-group">
                <label>Set Status</label>
                <select className="form-control" id="issueStatus" onChange={commonHandler} value={state.status}>
                  {statusOptions}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Issue {state.dateOfCreation}</label>
                <input type="date" onChange={commonHandler} className="form-control" id="issueDateOfCreation" value={state.dateOfCreation} placeholder="date"></input>
              </div>
              <div className="form-group">
                <button disabled={!state.valid} className="btn btn-primary">Raise</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Raise;
