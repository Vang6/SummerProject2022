import React from 'react';
import { issueCategory, issueStatus, issueSeverity } from '../constants';
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
    if (modfState.heading && modfState.desc && modfState.category && modfState.dateOfCreation && modfState.status && modfState.owner && modfState.assignTo && modfState.severity) {
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
    return <option value={issueCategory[key]}>{issueCategory[key]}</option>
  })
  const statusOptions = Object.keys(issueStatus).map(function (key) {
    return <option value={issueStatus[key]}>{issueStatus[key]}</option>
  })
  const severityOptions = Object.keys(issueSeverity).map(function (key) {
    return <option value={issueSeverity[key]}>{issueSeverity[key]}</option>
  })
  return (
    <div>
      <div className="container">
        <h3>Raise an Issue</h3>
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <div className="form-group">
                <label for="exampleFormControlInput1">Heading</label>
                <input type="text" onChange={commonHandler} className="form-control" id="exampleFormControlInput1" placeholder="heading"></input>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Select Severity</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  {severityOptions}
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Select Category</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  {categoryOptions}
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Describe Problem</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Set Status</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  {statusOptions}
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Date of Issue</label>
                <input type="date" onChange={commonHandler} className="form-control" id="issueDateOfCreation" value={state.dateOfCreation} placeholder="date"></input>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Raise</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Raise;