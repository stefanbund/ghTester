import React, { Component }  from 'react';
// eslint-disable-next-line
import Item from './item';
// eslint-disable-next-line
import DataManager from './dataManager';

class Items extends Component { 
    
 state = {
    items : [ 
     {
       id: 1,
       value: "item 1",
       isDone: false
     },
     {
      id: 2,
      value: "item 2",
      isDone: true
     },
     {
      id: 3, 
      value: "item 3",
      isDone: false
     }
    ]
 }; //object, 
 
 getTime(){             //provide a timestamp for the item
     let d = new Date();
     var n = d.getTime();
     return n ; //readable timestamp
 }
 
 handleDelete = item => {
     //manipulate state
     const items = this.state.items.filter((t) => {
      return t.id !== item
     });
     this.setState({items});
 }
 
 handleDone = item => {
     //when finished with update
     const items = [...this.state.items];
     items.map((t) => {
      if(t.id === item.id) {
       t.isDone = !t.isDone;
      }
       return t; 
     });
     this.setState({items});
 }
 
 addNewItem = value => { //called from the dataManager
     if(value){
      const items = [...this.state.items];
      items.push(
        {
         id: this.getTime(),
         value: value, 
         isDone: false
        }
       );
       this.setState({dataManagerValue: ", items"})
     }else{ //if the user leaves it blank
      console.log("Please add text to your new item");
     }
 }
 
 render(){
     return (
         <table className="table">
         <tbody>
          {this.state.items.map((item, index) => (
          <tr key={item.id}>
            <Item index={index+1} item={item}
             fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
           </tr>
          ))}
          
          <tr>
           <td colSpan="4" className="text-center">
             <DataManager foodataManager={this.addNewItem}
               dataManagerValue={this.state.dataManagerValue} />
          </td>
            </tr>
            </tbody>
            </table>
         );
  }
    
}

export default Items; 