import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const[value, setValue] = useState(0)
    return(
        <>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)} className={styles.btn}>increment</button>
        </>
    )
}