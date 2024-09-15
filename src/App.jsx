
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import list from "./data/list";

import { useState } from 'react';

import styles from './App.module.css';


function App() {

    const [state, setState] = useState(null);

    
    return (
        <main className={styles.main}>
            <Tasks state={state} setState={setState}/>
        </main>
    )
}

export default App
