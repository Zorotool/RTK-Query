import React from "react";
import styles from './ContactItem.module.css';

function ContactItem({ contact, onDeleteContact }) {
    
    return (
        
        <li className={styles.item}>
                <p className={styles.contact}>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.idKey)} className={styles.button}>Delete</button>
                </li>
        
    )
};



export default ContactItem;