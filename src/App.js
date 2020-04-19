import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Task from './components/Task'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Input list={list} setList={setList}/>
      {list.map((task, i) => (
        <Task task={task} list={list} setList={setList} index={i}/>
      ))}
    </div>
  );
}
 
export default App;
