import React, { useEffect } from 'react'
import { useState } from "react"
function List({ contacts, addContacts }) {
    //part 3 filtreleme
    const [filterText, setFilterText] = useState("")

    const filtered = contacts.filter((item) => { //burada filter fonk kullandık ve item ise arrayden dönenler demek
        //burada ismini de yazsa telefon no da yazsa onu göstermemiz lazım kullanıcıya
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        );
    });
    console.log("filtered", filtered)

    useEffect(() => {
        if (filterText !== "") {


            addContacts(contacts.filter((item) => { //burada filter fonk kullandık ve item ise arrayden dönenler demek
                //burada ismini de yazsa telefon no da yazsa onu göstermemiz lazım kullanıcıya
                return Object.keys(item).some((key) =>
                    item[key]
                        .toString()
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                );
            }))
        }else{
            
            addContacts([
                {
                  fullname: "esengul", phone_number: "123"
                },
                {
                  fullname: "cinel", phone_number: "456"
                },
                {
                  fullname: "esen", phone_number: "789"
                }
              ])
        }
    }, [filterText])


    return (
        <div>
            <input
                placeholder="Filter contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}></input>


            <ul className="list">
                {
                    contacts.map((contacts, index) => (
                        <li key={index}>{contacts.fullname}</li>
                    ))
                }
            </ul>


        </div>
    )
}

export default List
