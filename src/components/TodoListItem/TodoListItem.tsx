import React from 'react'
import { ToDoItem } from '../../redux/slices/sliceTypes/types'

const TodoListItem = ({ title, description, deadline }: ToDoItem) => {
    return (
        <div>
            <p>Title : {title}</p>
            <p>Description : {description}</p>
            <div>DeadLine : {deadline}</div>
        </div>
    )
}

export default TodoListItem;