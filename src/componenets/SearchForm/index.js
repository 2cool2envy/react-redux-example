import React from 'react';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSearch = (event) => {
    let val = event.target.value

    if (val.length > 1) {
      console.log("val : ", val);
      this.props.changeInput(val)
    }
    else {
      this.props.changeInput('')
      return false;
    }
  }

  render() {
    return (
      <form >
        <div className="row input-group col-12">
          <input onChange={this.onSearch} type="text" id="searchText" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button onClick={() => {
              document.getElementById('searchText').value = '';
              this.props.changeInput('');
            }}
              className="btn btn-dark" type="button"> 
              Reset  
               <i class=" fa fa-reply" aria-hidden="true"></i> 
                  
              </button>
          </div>
        </div>

        <br />

        {/* <div className="row">
          <div className="col-lg-4 col-md-4">
            <select className="form-control form-control-sm">
              <option>Small select</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-4">
            <select className="form-control form-control-sm">
              <option>Small select</option>
            </select>
          </div>

          <div className="col-lg-4 col-md-4">
            <button className="btn" >Reset</button>
          </div>

        </div> */}
      </form>

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
    changeInput: (text) => { dispatch({ type: 'SET_INPUT', payload: text }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
