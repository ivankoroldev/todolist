import React from "react";

import './ToDoListForm.scss';

class ToDoListForm extends React.Component {
    state = {
        inputValue: ''
    }

    handleValueChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleSubmit = () => {
        const newItem = {
            title: this.state.inputValue,
            id: Date.now(),
            createdAt: Date.now(),
            isCompleted: false
        }

        this.props.onAddItem(newItem);
        this.setState({inputValue: ''})
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    render() {
        return (
            <div className="todolist-form">
                <div className="todolist-form-title">
                    Add New Item
                </div>
                <div className="todolist-form-fields">
                    <input type="text"
                           placeholder='Name'
                           className='input'
                           value={this.state.inputValue}
                           onKeyDown={this.handleKeyDown}
                           onChange={this.handleValueChange}/>
                    <button className={'btn-primary ' + (!this.state.inputValue ? 'disabled' : '')}
                            onClick={this.handleSubmit}>Add New Item</button>
                </div>
            </div>
        )
    }
}

export default ToDoListForm
