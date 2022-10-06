import { useState, useEffect } from "react"
import React from 'react'

import List from "./List"
import Form from "./Form"
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
          fullname: "esengul", phone_number: "123"
        },
        {
          fullname: "cinel", phone_number: "456"
        },
        {
          fullname: "esen", phone_number: "789"
        }
      ]);
      //burda da güncel olarak değiştiğini görmek istediğim 
      useEffect(() => {
        console.log(contacts)
      }, [contacts]);
    
      return (
    
        <div className="contanier">
    
          <List  addContacts={setContacts}  contacts={contacts} />
    
          <Form addContacts={setContacts} contacts={contacts} />
        </div>
        //form componentine giden propslar  addContacts={setContacts} contacts={contacts}  part2
      );
}


export default Contacts
