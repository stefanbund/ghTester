import React, {Component} from 'react';

class dataManager extends Component { 
 state = {}; //manipulate, add to, update, delete from the state
 
 
 handleChange = (e) => {
  //update the local component's state
  //TODO
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

export default dataManager;