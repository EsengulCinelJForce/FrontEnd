import React from 'react'
import { useState } from "react";

                                            //propsların eklenmesi part2
function Form({addContacts, contacts}) {  //burada diğer componentten gelen propsları yazdık yine 
 
    const [form, setForm] = useState({ fullname: "", phone_number: "" })

    //bir fonk içeriği degiştiğinde state e atamasını yapabilmesi için
    //buradaki (e) gelen event
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); //burada bizim name ile dışardan girdiğimiz value'yu eşitledi.

    }

    const onSubmit =(e)=>{
       e.preventDefault(); //bununla durdurabilirim sayfa yenilenmiyor logu görebiliriz.
        

        if(form.fullname === "" || form.phone_number ===""){
            return false;
        }

        //part2

        addContacts([...contacts,form])  //eski bilgileri de koruyarak array e ekleme yaptık .
                                        //direkt form yazabildik çünkü yukarda zaten obje olarak almışım.
        console.log(form);

        setForm({fullname:"", phone_number:""})   //burada da resetleme yaptık. Her add işleminden sonra placeholder silincel

        //part2
    }
    return (
        //bu formun gideceği bir endpoint olabilir veriyi gönderebilir çekebilir 
        //o yüzden o sayfa yenileme işlemini durdurmamız lazım 17. satır
        <form onSubmit={onSubmit}> 
            <div>
                <input name="fullname" 
                       placeholder="full name" 
                       value={form.fullname}
                       onChange={onChangeInput}>
                       
                       </input>
            </div>
            <div>
                <input 
                name="phone_number" 
                placeholder="phone number"
                value={form.phone_number}
                onChange={onChangeInput}></input>
                
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
