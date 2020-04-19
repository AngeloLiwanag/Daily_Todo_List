import React from 'react';

const Task = ({task, list, setList, index}) => {
    const onDelete = e => {
        setList(()=> {
            return list.filter(task => list.indexOf(task) !== index);
        })
    }

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return(
        <div className="container">
            {task.isComplete ? <h4><del>{task.name}</del></h4> : <h4>{task.name}</h4> }
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                <button onClick={onDelete}className="btn btn-sm btn-outline-dange">X</button>
            </div>
        </div>
    )
}

export default Task