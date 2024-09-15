
import list from "../data/list";
import styles from './Task.module.css';
import { useState } from "react";


export default function Task( {id, setId, state, setState} ) {

    const [title, setTitle] = useState(list.has(id) ? list.get(id).title : '');
    const [text, setText] = useState(list.has(id) ? list.get(id).text : '');


    function handleEditing() {
        setState(null);

        list.set(id, {id: id, title: title ? title : `Title ${id}`, text: text ? text : `Text`})
    }

    function handleAdding() {
        setState(null);
        setId(id + 1);

        list.set(id, {id: id, title: title ? title : `Title ${id}`, text: text ? text : `Text`})
    }

    if (state === 'adding') {
        return (
                <div className={styles.background}>
                        <div className={styles.task}>
                            <input type="text" 
                                placeholder="Title" 
                                onChange={e => setTitle(e.target.value)} 
                                value={title}
                            />
                            <textarea className={styles.textArea} 
                                type="text" 
                                placeholder="Text" 
                                onChange={(e => setText(e.target.value))} 
                                cols={10} 
                                rows={20} 
                                value={text}
                            />
                            <button onClick={ () => handleAdding()} >Add</button>
                        </div>
                </div>
        )
    } else {
        return (
            <div className={styles.background}>
                        <div className={styles.task}>
                            <input type="text" 
                                placeholder="Title" 
                                onChange={e => setTitle(e.target.value)} 
                                value={title}
                            />
                            <textarea className={styles.textArea} 
                                type="text" 
                                placeholder="Text" 
                                onChange={(e => setText(e.target.value))} 
                                cols={10} 
                                rows={20} 
                                value={text}
                            />
                            <button onClick={ () => handleEditing()} >Edit</button>
                        </div>
                </div>
        )
    }
}