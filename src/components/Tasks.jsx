
import list from "../data/list";
import styles from "./Tasks.module.css";

import classnames from 'classnames';


export default function Tasks( {state, setState} ) {

    return (
        <div className={ classnames(styles.tasks, { [styles.disabled]: state === 'editing'})}>
            <h1 className={styles.mainTitle}>Your Tasks</h1>
            <ul className={styles.list}>
                {Array.from(list).map( ([value, key]) => 
                    <li key={value} className={styles.task}>
                        <h2>{key.title}</h2>
                        {key.text.split('\n').map( (value, index) => (<p key={index}>{value} <br /></p>))}
                    </li>
                )
                }
            </ul>   
            <button onClick={e => setState('editing')} className={styles.addButton}>Add</button>
        </div>
    )

}