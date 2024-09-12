
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import list from "./data/list";

import { useState } from 'react';

import styles from './App.module.css';


function App() {

    const [id, setId] = useState(1);
    const [state, setState] = useState(null);
    const [title, setTitle] = useState('');
    const [text, settext] = useState('');

    return (
    <main className={styles.main}>
        
        {
            state === null ?
            <>
                <h1 className={styles.mainTitle}>Your Tasks</h1>
                    <Tasks setState={setState} state={state} />
            
                <button onClick={e => setState('adding')} className={styles.addButton}>Add</button> 
            </>
            :
            <div >
                <div>
                    <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                    <textarea type="text" placeholder="Text" onChange={(e => settext(e.target.value))}/>

                    <button onClick={e => {
                        setState(null);
                        setId(id + 1);

                        list.set(id, {
                            id: id,
                            title: title ? title : `Title ${id}`,
                            text: text ? text : `Text ${id}`
                        });
                    }}>
                        Add1
                    </button>
                </div>
            </div>
        }
    </main>
  )
}

export default App
