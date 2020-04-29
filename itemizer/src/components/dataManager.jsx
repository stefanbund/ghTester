import React, {Component} from 'react';

class DataManager extends Component { 
    state = {
     defaultValue : "",
     value : this.props.dataManagerValue
    }; //manipulate, add to, update, delete from the state
 
 handleChange = (e) => {
      //update the local component's state
      this.setState({
       value: e.target.value
      });
 }
 
 clearInput = () => {
       //clear existing value inside a text box
       document.getElementById("itemValue").value = ""; //empty
       //update local component state
       this.setState({value:""});
 }
 
 dataManager = () => {
  this.props.foodataManager(this.state.value);
  this.clearInput(); //clear existing values once we update the value of the state
 }
 
 render(){
     return(
      <div className="input-group mb-3">
      <input type="text" className="form-control" id="itemValue" placeholder="item"
      onChange={this.handleChange} />
      
      <div className="input-group-append">
      <button onClick={this.dataManager} className="btn btn-outline-secondary" type="button" 
      id="button-addon2"> Add New To-Do Item</button>
      </div>
      </div>
      ); //put out integrated html and data in here
 }
}

export default DataManager;