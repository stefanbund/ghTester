import React, {Component } from 'react';

class item extends Component { 
    
    render(){
        return(
            <React.Fragment >
            <td style={{ width: 10}} className="text-center">
            {this.props.index}
            </td>
            <td style={{width: 15}} className="text-center">
            <input type="checkbox"
            defaultChecked={this.props.item.isDone} onChange={() => this.props.fooDoneDone(this.props.item)} />
            </td>
            <td>
            {
               this.renderitem() 
            }
            </td>
            
            <td style={{width: 10}} className="text-center"><button onClick={ () => 
            this.props.fooDelete(this.props.item.id)} className="btn btn-danger btn-sm"> Delete Item!</button>
            </td>
            
            </React.Fragment>
            ); //look like, function like? 
    }
    
    renderitem(){
        let x = "";
        return x; //TODO
    }
}

export default item; 