import React, { useState } from 'react';
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
<input type="email" name="email" defaultValue={formState.name} />

function ContactForm() {
    const { name, email, message } = formState;
    
    <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
    </main>
    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
      }
      
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
    }
    
    export default ContactForm;