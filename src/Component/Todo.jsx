// eslint-disable-next-line no-unused-vars
import React, { useReducer } from 'react';
import { useRef } from 'react';
import Task from './Task';
import './Todo.css'
const initialState = [
    {
        text: "demo text-1",
        isHidden: false,

    },

];
const reducerFn = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    text: action.payload,
                    isHidden: false,
                }
            ]
        case "TOGGLE_TEXT":
            return state.map((el, i) => {
                return i === action.payload ? { ...el, isHidden: !el.isHidden } : el;

            });
        default:
            return state;
    }
};
const Todo = () => {

    const [todos, dispatch] = useReducer(reducerFn, initialState);
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }
    return (
        <div >
            <div>
                <input type="text" placeholder="What is on Your mind?" style={{ width: "50%", height: "20px", padding: "2px 5px" }}
                    ref={inputRef}
                    onKeyDown={(event) => {
                        if (event.key == "Enter") {
                            dispatch({
                                type: "ADD_TASK", payload:
                                    event.target.value
                            })
                            event.target.value=""
                        }
                      
                    }}
                />
            </div>
            <div>
                {
                    todos.map((el, i) => (<Task Key={i} task={el} dispatch={dispatch} index={i} />
                    ))
                }
            </div>
            <div>
                <button  className="go" onClick={focus}>get back to input</button>
            </div>
        </div>
    )
}
export default Todo;