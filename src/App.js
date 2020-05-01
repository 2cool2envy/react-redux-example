import React from 'react';
import './App.scss';

import Navbar from './componenets/Navbar';
import Sidebar from './componenets/Sidebar';
import SearchForm from './componenets/SearchForm';
import JobView from './componenets/JobView';

import getData from './services/data';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    try {
      let resp = await getData();
      console.log("resp :", resp);
      this.props.addJobsData(resp)
    }
    catch (err) {
      console.error("Error :", err);
    }
   
  }
  render() {

    return (
      <>
        <Navbar />
        <div className="row container-fluid" style={{ marginTop: '4%' }}>
          <div className="col-md-3 col-lg-3" >  <Sidebar />         </div>
          <div className="col-md-8 col-lg-8" >  <SearchForm />         </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-12 col-lg-12" >  <JobView />         </div>
        </div>
        
        {/* end of main div */}

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addJobsData: (text) => { dispatch({ type: 'SET_JOBS', payload: text }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// https://www.kaggle.com/new-york-city/new-york-city-current-job-postings