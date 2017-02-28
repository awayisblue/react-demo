import React from 'react'
import styles from './styles.less'
let Section = ({children})=>{
    return <section className={styles.section}>
        {children}
            </section>
}
export default Section