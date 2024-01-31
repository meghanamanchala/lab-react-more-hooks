// eslint-disable-next-line no-unused-vars
import React from "react";

const Task = (props)=>{
    // eslint-disable-next-line react/prop-types
    const {task, index,dispatch}=
 props;
    // eslint-disable-next-line react/prop-types
    const {text,isHidden} = task;
    return(
        <div className="pink">
            <div >
            {
                isHidden?<h3>This content is hidden</h3>:
                <h3>Task:{text}</h3>   
            }
            </div>
            <button  onClick={()=>dispatch({type:"TOGGLE_TEXT",payload:index})}>Toggle</button>
        </div>
    )

}
export default Task;