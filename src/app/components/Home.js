import React from "react";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Profile</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }
}

Home.propTypes = {
   name: React.PropTypes.string,
    age: React.PropTypes.number
};