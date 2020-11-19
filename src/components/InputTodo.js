import React, { Component } from 'react'

class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="form-container">
                <input 
                    className="input-text"
                    type="text" 
                    placeholder="Add todo..." 
                    name="title"
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input className="input-submit" type="Submit" value="Submit" />
            </form>
        )
    }
}

export default InputTodo