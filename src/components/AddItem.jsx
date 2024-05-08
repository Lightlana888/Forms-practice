import React from 'react';
import { useState } from 'react';
import styles from './addItem.module.css';


export default function AddItem() {


    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([]);

    const addItem = (e) => {
        e.preventDefault()
        setItems(prevItems => [...prevItems, newItem.toUpperCase()]);
        setNewItem("");
    }

    return (
        <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={addItem}>
                <input
                    type='text'
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className={styles.input}
                ></input>
            </form>
            <button
                type="submit"
                onClick={addItem}
                className={styles.button}
            >Submit</button>
            {items.map((item, index) => (
                <ul className={styles.list}>
                    <li key={index} className={styles.addedItem}>{item}</li></ul>
            ))}
        </div>
    )
}