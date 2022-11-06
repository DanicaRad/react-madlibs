import { useState } from "react";

const NewMadlibForm = ({makeMadlib}) => {
  const [formData, setFormData] = useState({name: "", adjective: "", noun: ""});

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData, 
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    makeMadlib({...formData});
    setFormData({name: "", adjective: "", noun: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="adjective">adjective</label>
        <input
          id='adjective'
          type='text'
          name='adjective'
          value={formData.adjective}
          onChange={handleChange}
        />
        <label htmlFor="noun">noun</label>
        <input
          id='noun'
          type='text'
          name='noun'
          value={formData.noun}
          onChange={handleChange}
        />
        <button>Make Madlib!</button>
      </form>
    </div>
  );
};
export default NewMadlibForm;