import React, { Suspense } from 'react';
import './App.scss';

import Navbar from './componenets/Navbar';
import Sidebar from './componenets/Sidebar';
import SearchForm from './componenets/SearchForm';
import LazyLoad from 'react-lazyload';

// import JobView from './componenets/JobView';

import getData from './services/data';
import { connect } from 'react-redux';

const JobView = React.lazy(() => import('./componenets/JobView'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <div className="row mainView container-fluid" style={{ marginTop: '4%' }}>
            <div className="col-md-3 col-lg-3" >  <Sidebar />         </div>
            <div className="col-md-8 col-lg-8" >  <SearchForm />         </div>
            <div className="col-md-1 col-lg-1"></div>
            <LazyLoad width={100} height={100} debounce={true} offsetVertical={500}  >
              <div className="col-12 col-lg-12" >  <JobView />         </div>
            </LazyLoad>

          </div>
        </Suspense>

        <div onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }} class="fabButton animated zoomIn" id="masterfab"><span>
            <i className="fa fa-arrow-up" aria-hidden="true"></i> </span></div>
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