import { useState } from 'react'

function InputExample() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const onChangeName = (event) =>setName(event.target.value)
  const onChangeSurname = (event) =>setSurname(event.target.value)

  return (
    <div>
      Please enter any name
      <br></br>
      <input value={name} onChange = {onChangeName}/>     
      <hr />
      <br></br>
      Please enter any surname
      <br></br>
      <input value={surname} onChange = {onChangeSurname}/>     
      <hr />
      <br></br>

    </div>
  )
}

export default InputExample
