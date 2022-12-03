import React from "react";

import './ToDoListItem.scss';

class ToDoListItem extends React.Component {
    handleRemove = (id) => {
        this.props.onRemoveItem(id)
    }

    handleComplete = (item) => {
        this.props.onCompleteItem({
            ...item,
            isCompleted: !item.isCompleted
        })
    }

    render() {
        const { item, index } = this.props;

        return (
            <div className={'todolist-item' + (item.isCompleted ? ' isCompleted' : '')}>
                <div className="item-content">
                    <b>{ index + 1 }</b>
                    <span className='item-content-name'>{ item.title }</span>
                </div>
                <div className="item-options">
                    <span className='btn-primary' onClick={() => this.handleRemove(item.id)}>Remove</span>
                    <span className='btn-primary' onClick={() => this.handleComplete(item)}>{ item.isCompleted ? 'Revert' : 'Complete' }</span>
                </div>
            </div>
        )
    }
}

export default ToDoListItem
