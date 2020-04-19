import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Task from './components/Task'

function App() {
  // Here we are lifting up the state, seting the state to an empty array
  const [list, setList] = useState([]);

  return (
    <div className="App">

      {/* Here we are creating a Input Component to update and put an item into the array */}
      <Input list={list} setList={setList}/>

      {/* Here we are looping through the list with map */}
      {list.map((task, i) => (
        // Returning the new Task Component passing in task, list, setList, and the index
        <Task task={task} list={list} setList={setList} index={i}/>
      ))}

    </div>
  );
}
 
export default App;
