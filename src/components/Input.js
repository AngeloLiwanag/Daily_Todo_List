import React from 'react';

const Input = ({list, setList}) =>{
    // Here were grabbing 'task' from the JSX
    let task = {
        name: '',
        isComplete: false
    };

    // When the event changes, so will the object's [key:value] pairing will change
    const onChange = e => {
        task.name = e.target.value; // targets the name key and sets the value to the changed input
    }


    // When the event is clicked, the state of the list will be updated
    const onClick = e => {
        setList([...list, task]); // using the spread opperator, we are pushing the object 'task' into that empty 'list' array
        e.target.value = ''; // now we are setting the name to a blank character
    }

    return(
        <div className="container w-50">

            {/* Here are are calling the 'onChange' event handler and naming the input feild as 'task' */}
            <input onChange={onChange} type="text" name="task" className="form-control m-2"/>

            {/* Here are are calling the 'onClick' */}
            <button onClick={onClick} className="btn btn-outline-primary btn-block m-2">ADD TASK</button>

        </div>
    )
}

export default Input;