
import list from "../data/list";
import styles from "./Tasks.module.css";


import Masonry from 'react-masonry-css';
import Task from "./Task";

import classnames from 'classnames';
import { useState } from "react";

export default function Tasks( {state, setState} ) {

    const [id, setId] = useState(1);
    const [editingId, setEditingId] = useState(null);

    const breakpointCols = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2,
        300: 1,
      };

    function handleAdding() {
        setState('adding');
    }

    if (state === null) {
        return (
            <>
            
            <h1 className={styles.mainTitle}>Your Tasks</h1>
            <Masonry 
                className={ classnames(styles.masonry_tasks, { [styles.disabled]: state === 'editing'})} 
                breakpointCols={breakpointCols}
                gutter={0}>
            
                    {Array.from(list).map( ([value, key]) => 
                        <div key={key.id} className={styles.task} onClick={ e => 
                            {
                                setState('editing');
                                setEditingId(key.id);
                            }}>

                            <h2>{key.title}</h2>
                            {
                                key.text.split('\n').map( (value, ind) => (<p className={styles.text} key={ind}>{value} <br /></p>))
                            }
                        </div>
                    )}
            </Masonry>
            <button onClick={handleAdding} className={styles.addButton}>Add</button>
        
            </>
            )
    } else if (state === 'adding') {
        return (
            <>
                <Task id={id} setId={setId} state={state} setState={setState}/>
            </>
        )
    } else {
        return <Task id={editingId} setId={setEditingId} state={state} setState={setState}/>;
    }

}