
import Task from "./components/Task";
import list from "./data/list";

import { useState } from 'react';

import styles from './App.module.css';


function App() {

    const [state, setState] = useState('');
    const [id, setId] = useState(1);
    const [editingId, setEditingId] = useState(null);

    function handleOnClick(taskId) {
        setEditingId(taskId)
        console.log(taskId);
    }
    return (
    <main className={styles.main}>
        <h1 className={styles.mainTitle}>Your Tasks</h1>
        <ul className={styles.tasks}>
        {
            list.map(value => {
                return (
                <li key={value.id} onClick={e => handleOnClick(value.id)} className={styles.task}>
                    <h2 className={styles.title}>{value.title}</h2>
                    <p className={styles.text}>{value.text}</p>
                </li>
                )
                })
            }
        </ul>
        { state == 'adding' ?
            <Task state={state} setState={setState} id={id} setId={setId} /> : 
            <button onClick={e => setState('adding')} className={styles.addButton}>Add</button> 
        }
    </main>
  )
}

export default App
