import React from 'react';
import { connect } from 'react-redux';
import './jobs.scss';

// let filterResult = (input, jobs) => {
//   let tempArr = jobs.filter((val) => {
//     input = input.toLowerCase();
//     let desc = (val['Job Description']).toLowerCase();
//     let title = (val['Business Title']).toLowerCase();
//     console.log("desc ", desc, input, title)
//     return (desc.includes(input)) || (title.includes(input))
//   });
//   return tempArr;
// }

// export default function JobView() {
//   let finalData = [];
//   const inputData = useSelector(state => state)
//   let jobsData = inputData.inputs.jobDetails;
//   if (inputData.inputs.inputText.length > 0) {
//     finalData = filterResult(inputData.inputs.inputText, jobsData);
//   }
//   else {
//     finalData = jobsData;
//   }
//   return (



//   )
// }

class JobView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobData: [],
      inputData:''
    }
  }
filterResult = (input, jobs) => {
  let tempArr = jobs.filter((val) => {
    input = input.toLowerCase();
    let desc = (val['Job Description']).toLowerCase();
    let title = (val['Business Title']).toLowerCase();
    console.log("desc ", desc, input, title)
    return (desc.includes(input)) || (title.includes(input))
  });
  return tempArr;
}
  static getDerivedStateFromProps(props, state) {
    if (props.jobData !== state.jobData || props.inputData !== state.inputData) {
      return {
        inputData : props.inputData,
        jobData: props.jobData.length > 0 ? props.jobData.filter((val) => {
          let input = props.inputData.toLowerCase();
          let desc = (val['Job Description']).toLowerCase();
          let title = (val['Business Title']).toLowerCase();
          console.log("desc ", desc, input, title)
          return (desc.includes(input)) || (title.includes(input))
        }) 
        : [],
        
      };
    }
    return null;
  }
  render() {
    return (
      <>
        <div className="offset-lg-5 offset-md-5 col-lg-7 col-md-7">
          <h3>Total Jobs : {this.state.jobData.length}</h3>
        </div>
        <div className="row">
          {
            this.state.jobData && this.state.jobData.length > 0 &&
            this.state.jobData.map((val, i) => {
              let jobDesc = val['Job Description'].length >= 75
                ? val['Job Description'].substring(0, 75) + "..."
                : val['Job Description'];
              return (
                <div key={i} className="col-lg-3 col-md-3">
                  <div key={i} className="card-body">
                    <h5 className="card-title">{val['Business Title']}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Job ID {val['Job ID']} | Division/Work Unit :{val['Division/Work Unit']}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Agency {val['Agency']} | Job Category :{val['Job Category']}
                    </h6>
                    <p className="card-text">
                      Job Description : {jobDesc}</p>
                    <div className="card-buttons">
                      <button className="btn btn-dark" type="button">See Details 
                      <i class="fa fa-list" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-dark" type="button">Apply Now 
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <button className="btn btn-block btn-dark"
          onClick={() => this.props.setJobViewCount()}> Show More
        <i class="fa fa-spinner" aria-hidden="true"></i>
        </button> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobData: state.inputs.jobDetails,
    inputData : state.inputs.inputText,
    showJobCount: state.inputs.jobShowCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setJobViewCount: () => { dispatch({ type: 'JOB_SHOW_COUNT', payload: 8 }) },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobView)