
import list from "../data/list";
import { useState } from "react";

import plus from "../assets/plus.svg";
import styles from './Task.module.css';


export default function Task( props ) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    function handleAddition(e) {
        e.preventDefault();
        list.push({
            id: props.id,
            title: title == '' ? `Title ${props.id}` : title,
            text: text == '' ? `Text` : text,
        })
        props.setId(props.id + 1);
        list.forEach(value => console.log(value.text))

        props.setState('');
    }

    return (
        <>
            <div className={styles.adding}></div>
            <div className={styles.addTask}>
                <input className={styles.inputTitle} type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
                <textarea className={styles.textArea} value={text} onChange={e => setText(e.target.value)} rows={20} cols={10} placeholder="Text"/>
                
                <button className={styles.addButton} onClick={handleAddition}><img src={plus} alt="Add" width="40px"></img></button>
            </div>
        </>
    )
}