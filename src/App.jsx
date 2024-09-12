
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import list from "./data/list";

import { useState } from 'react';

import styles from './App.module.css';


function App() {

    const [id, setId] = useState(1);
    const [state, setState] = useState(null);
    

    return (
        <main className={styles.main}>
            
            {
                state === null ?
                    <Tasks state={state} setState={setState} />
                :
                    <Task id={id} setId={setId} setState={setState} />
            }
        </main>
    )
}

export default App
