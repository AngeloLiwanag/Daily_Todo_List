import React from 'react';

const Input = ({list, setList}) =>{
    let task = {
        name: '',
        isComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    }

    const onClick = e => {
        setList([...list, task]);
        e.target.value = '';
    }

    return(
        <div className="container w-50">
            <input onChange={onChange} type="text" name="task" className="form-control m-2"/>
            <button onClick={onClick} className="btn btn-outline-primary btn-block m-2">ADD TASK</button>
        </div>
    )
}

export default Input;