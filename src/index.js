import React from 'react';
import ReactDOM from 'react-dom';

function Form() {
  
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      comments: "",
      ischecked: true,
      employment: "",
      colors:""
    }
  );
  console.log(formData.colors)
  function change(event) {
    const {name,value,checked,type} = event.target;
    
    setFormData(prevData => {
      return {
        ...prevData,
        [name]:type === "checkbox"  ? checked : value
      }
    })
  }
  
  return (
    <div>
      <form id="form" >
          {/* <button type="submit">Submit</button>
        <label htmlFor="first-name"></label>
        <input
            onChange={change} 
            placeholder="First Name"
            id="first-name"
            type="text"
            name="firstName"
            value={formData.firstName}
            
        />
          <label htmlFor="last-name"></label>
        <input
            onChange={change}
            id="last-name"
            type="text"
            name="lastName"
            placeholder="Last Name" 
            value={formData.lastName}
            />

          <input 
              
              id="checkbox"
              name="ischecked"
              checked={formData.ischecked}
              type="checkbox"
              onChange={change}
              
        />
          <textarea
                  value={formData.comments}
                  onChange={change}
                  name="comments" 
        /> */}
        
        <label>

        <label htmlFor="colors">
          What's your fsvorite color.
        </label>
        <input
          type="radio"
          name="employment"
          id="employed"
          value="employed"
          onChange={change}
        />
        employed
        </label>

        <label>
        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          onChange={change}
        />
        full-time
        </label>

        <label>
        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          onChange={change}
        />
          part-time
        </label>

        <br />
        <select
          id="colors"
          value={formData.colors }
          onChange={change}
          name="colors"
        >
          {/* <option value="choose a color"   >choose a color</option> */}
          <option value="red" >red</option>
          <option value="blue">blue</option>
          <option value="orange">orange</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="purpul">purpul</option>
          <option value="black">black</option>
        </select>
        </form>
    </div>
  )
}

ReactDOM.render(<Form />, document.getElementById('root'))