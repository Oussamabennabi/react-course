import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
function Form() {
  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "", 
      cfPassword: "", 
      checkbox:false
    }
  )
  function change(e) {
    const { name, value, checked, type } = e.target;

    
    
    setFormData(prevData => {
      return { 
        ...prevData, 
        [name]:type === "checkbox" ? checked:value
      }
    })
  }
  
  
  function handleSubmit(e) {
    e.preventDefault();
    const {password ,cfPassword,checkbox} = formData
    if (password === "") {
      alert(`please check your password and try again.`);

      return; 
    }
    if (password !== cfPassword  ) {
      alert(`please check your password and try again.`);
      return;
    } else {
      if (checkbox) {
        alert(`signed up successfuly thanks for sign in to our news `);
        
      } else { 
        alert(`signed up successfuly`);
      }
    }
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
              onChange={change} 
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}  
          />
        </label>
        
        <label>
          Password
          <input
              onChange={change}
              type="text"
              name="password"
              placeholder="Password" 
              value={formData.password}
          />
          </label>

        <label>
          Confirme Password
          <input
              onChange={change}
              type="text"
              name="cfPassword"
              placeholder="Confirme Password" 
              value={formData.cfPassword}
          />
        </label>
        <label className="checkbox">
          <input     
              name="checkbox"
              type="checkbox"
              checked={formData.checkbox}
              onChange={change}
          />
          I want to join the news letter
        </label>
          <button type="submit">Sign In</button>
        </form>
    </>
  )
}

ReactDOM.render(<Form />, document.getElementById('root'))