import React from 'react';
import { useSelector } from 'react-redux';
import './jobs.scss';

let filterResult = (input, jobs) => {
  let tempArr = jobs.filter((val) => {
    input = input.toLowerCase();
    let desc = (val['Job Description']).toLowerCase();
    let title = (val['Business Title']).toLowerCase();
    console.log("desc ", desc, input, title)
    return (desc.includes(input)) || (title.includes(input))
  });
  return tempArr;
}

export default function JobView() {
  let finalData = [];
  const inputData = useSelector(state => state)
  let jobsData = inputData.inputs.jobDetails;
  if (inputData.inputs.inputText.length > 0) {
    finalData = filterResult(inputData.inputs.inputText, jobsData);
  }
  else {
    finalData = jobsData;
  }
  return (
    <>
      <div className="offset-lg-5 offset-md-5 col-lg-6 col-md-6">
        <h3>Total Jobs : {finalData.length}</h3>
      </div>

      {
        finalData && finalData.length > 0 &&
        finalData.map((val, i) => {
          return (
            <div key={i} className="card-body col-lg-10 col-md-10">
              <h5 className="card-title">{val['Business Title']}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Job ID {val['Job ID']} | Division/Work Unit :{val['Division/Work Unit']}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Agency {val['Agency']} | Job Category :{val['Job Category']}
              </h6>
              <p className="card-text">
                Job Description : {val['Job Description'].substring(0, 400)}...</p>
              <button style={{ marginLeft: 5 }} className="btn btn-dark" type="button">See Details</button>
              <button style={{ marginLeft: 5 }} className="btn btn-dark" type="button">Apply Now</button>
            </div>
          )
        })
      }
    </>


  )
}