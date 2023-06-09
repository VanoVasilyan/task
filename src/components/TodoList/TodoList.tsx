import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewTodoItem } from '../../redux/slices/todoItemSlice';
import uniqid from 'uniqid';
import { ToDoItem } from '../../redux/slices/sliceTypes/types';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    const dispatch = useDispatch();
    const todoItems = useSelector((state: any) => state.itemsReducer);
    const uniqID = uniqid();

    const initialState = {
        id: '',
        title: '',
        description: '',
        deadline: ''
    }
    const [itemState, setItemState] = useState<ToDoItem>(initialState)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (itemState.title && itemState.description && itemState.deadline) {
            dispatch(createNewTodoItem({ ...itemState, id: uniqID }))
        }
    }

    const handleOnChange = (e: any) => {
        setItemState({ ...itemState, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <div>
                        <span>Title</span>
                        <input onChange={handleOnChange} required name='title' type="text" />
                    </div>
                </label>
                <label>
                    <div>
                        <span>Description</span>
                        <input onChange={handleOnChange} required name='description' type="text" />
                    </div>
                </label>
                <label>
                    <div>
                        <span>DeadLine</span>
                        <input onChange={handleOnChange} required name='deadline' type="text" />
                    </div>
                </label>
                <button type='submit'>Submit</button>
            </form>
            <div>
                {todoItems.length ? todoItems.map((todoItems: ToDoItem) => <TodoListItem key={todoItems.id} {...todoItems} />) : null}
            </div>
        </div>
    )
}

export default TodoList