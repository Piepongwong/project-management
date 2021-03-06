import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json'

class Signup extends Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        let newUser = this.state
        axios({
               method: "post",
               url: `${config.api}/users`, 
               data: newUser,
               withCredentials: true,
            })
            .then((response)=> {
                debugger
                console.log("Success")
                this.props.loggedIn({loggedIn: true, user: response.data})
                this.props.history.push("/profile")
            })
            .catch((err)=> {
                console.log("Error error")
            })
    }

    render() {

        return(
            <>
            <form onSubmit={this.handleSubmit}>
               <div className="field">
                    <div className="label">Firstname</div>
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="text" name="firstname" placeholder="firstname" value={this.state.firstname}/>
                    </div>
               </div>
               <div className="field">
                   <div className="label">Lastname</div>
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="text" name="lastname" placeholder="lastname" value={this.state.lastname} />
                    </div>
               </div>
               <div className="field">
                   <div className="label">Username</div>
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="text" name="username" placeholder="username" value={this.state.username}/>
                    </div>
               </div>
               <div className="field">
                   <div className="label">Password</div>
                    <div className="control">
                        <input className="input" placeholder="password" onChange={this.handleChange} name="password" type="password" value={this.state.password}/>
                    </div>
               </div>
               <div className="field">
                    <div className="control">
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
            </>


        )
    }
}

export default Signup