
import list from "../data/list";
import styles from './Task.module.css';
import { useState } from "react";


export default function Task( {id, setId, setState} ) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    return (
        <>
            <div className={styles.task}>
                <div>
                    <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                    <textarea type="text" placeholder="Text" onChange={(e => setText(e.target.value))}/>

                    <button onClick={e => {
                        setState(null);
                        setId(id + 1);

                        list.set(id, {
                            title: title ? title : `Title ${id}`,
                            text: text ? text : `Text ${id}`
                        });
                    }}>
                        Add1
                    </button>
                </div>
            </div>
        </>
    )
}