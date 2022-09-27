import React from "react";

class AddContant extends React.Component {

    state = {
        name:"",
        email:"",
    };
 
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email ===""){
            alert("ALl field are mandatoryy");
            return
        }
        this.props.addContentHandler(this.state);
        this.setState({name:"", email:""})
    }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label for="">Name</label>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>

                    <div className="field">
                        <label for="">Email</label>
                        <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />
                    </div>

                    <button className="ui button blue" type="submit">Add</button>
                </form>
            </div>

        )
    }
}

export default AddContant;