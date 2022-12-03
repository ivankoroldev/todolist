import React from "react";
import ToDoListForm from "../ToDoListForm";

import './ToDoList.scss';
import ToDoListItem from "../ToDoListItem";


class ToDoList extends React.Component {
    state = {
        toDoList: []
    }

    handleAddItem = (item) => {
        this.setState({
            toDoList: [...this.state.toDoList, item]
        })
    }

    handleRemoveItem = (id) => {
        this.setState({
            toDoList: this.state.toDoList.filter(item => item.id !== id)
        })
    }

    handleCompleteItem = (updatedItem) => {
        const updatedList = [...this.state.toDoList];
        const updatedIndex = updatedList.findIndex((item) => item.id === updatedItem.id);


        if (updatedIndex > -1) {
            updatedList[updatedIndex] = updatedItem;
        }

        this.setState({
            toDoList: [...updatedList]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="todolist-title">
                    My To Do list
                </div>
                <div>
                    <ToDoListForm onAddItem={this.handleAddItem}/>
                </div>
                <div>
                    {
                        this.state.toDoList.length ? (
                            <div className="todolist-wrap">
                                { this.state.toDoList
                                    .map((item, index) =>
                                        <ToDoListItem item={item}
                                                      key={item.id}
                                                      index={index}
                                                      onCompleteItem={this.handleCompleteItem}
                                                      onRemoveItem={this.handleRemoveItem}
                                        />
                                    )
                                }
                            </div>
                        ) : (
                            <div className='empty-state'>No items...</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ToDoList
