import React from 'react';

const Task = ({task, list, setList, index}) => {

    // When the onDelete event handler is clicked, this will filter through the array 'list' task, comparing that index to the rest of the indexs
    const onDelete = e => {
        setList(()=> {
            return list.filter(task => list.indexOf(task) !== index);
        })
    }

    // When the onChange event handler is called, it will grab find the task (list[index].isComplete) and make that value true
    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return(
        <div className="container">

            {/* if the task is not complete show task else line through */}
            {task.isComplete ? <h4><del>{task.name}</del></h4> : <h4>{task.name}</h4> }

            <div className="container">
                <label htmlFor="checkbox">Completed?</label>

                {/* Here we are calling the onChange event handler when changed*/}
                <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>

                {/* Here we are calling the onDelete event handler when clicked*/}
                <button onClick={onDelete} className="btn btn-sm btn-outline-danger">X</button>
            </div>

        </div>
    )
}

export default Task