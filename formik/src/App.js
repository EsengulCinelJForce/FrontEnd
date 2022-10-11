import './App.css';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

function App() {

  const[form,setForm]=useState({okul :"", sınıf :""})

  const onChange = (e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }
        }
      >
        {
          ({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name='firstName' onChange={handleChange} />

              <br></br>
              <label htmlFor="lastName">Last Name</label>
              <input name='lastName' onChange={handleChange} />

              <br></br>

              <label htmlFor="email">Email</label>
              <input name='email' onChange={handleChange} />
              <br></br>




              <span>male</span>
              <input type="radio" name='gender' value="male" onChange={handleChange} required />
              <span>female</span>
              <input type="radio" name='gender' value="female" onChange={handleChange} />

              <br></br>
              <button type="submit">Submit</button>
              <br></br>


            </form>
          )
        }
      </Formik>
          <div>
            voleybol
          <input type="checkbox" name='hobi' value="voleybol"   />
          </div>
          <div>
            basketbol
          <input type="checkbox" name='hobi' value="basketbol"  />
          </div>

          <select name="country">
            <option value="Turkey"> Turkey</option> 
            <option value="England"> England</option> 
            <option value="USA"> USA</option> 
          </select>



          <br></br>
          Okul
          <input name='okul' onChange={onChange}></input>
          <br></br>
          Sınıf 
          <input name='sınıf' onChange={onChange}></input>

    </div>
  );
}

export default App;
