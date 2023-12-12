import  { useState } from 'react'

const Contact = () => {
const [form, setForm] = useState({name: '', email: '', message: ''});
const [isLoading, setIsLoading] = useState(false);

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.name})
};
const handleFocus = () => {};
const handleBlur = () => {};
const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true)
};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
            type='text'
            name='name'
            className='input'
            placeholder='Name'
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required/>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
            type='email'
            name='email'
            className='input'
            placeholder='johncena@gmail.com'
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required/>
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
            rows={4}
            name='message'
            className='textarea'
            placeholder='Let me know How can I help You!'
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required/>
          </label>
          <button 
          type='submit' 
          className='btn'
          onFocus={handleFocus} 
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending Message' : 'Send Message'}
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact