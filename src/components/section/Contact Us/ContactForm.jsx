import React from 'react'

const ContactForm = () => {
  return (
    <section className='section-padding'>
      <div className='container-custom rounded border border-gray-300 bg-muted p-4 sm:p-10'>
        <form className='p-2' >
          <h2 className='mb-7 text-2xl font-bold'>Enquire Us</h2>
          <div>
            <label htmlFor="name" className='mb-2 block text-base font-semibold'>
              Name <span className="text-red-500">*</span>
              <input type="text"
                id="name"
                name="name"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-gray-300 px-4 outline-none focus:border-gray-500"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className='mb-2 block text-base font-semibold'>
              Email <span className="text-red-500">*</span>
              <input type="email"
                id="email"
                name="email"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-gray-300 px-4 outline-none focus:border-gray-500"
              />
            </label>
          </div>

          <div>
            <label htmlFor="subject" className='mb-2 block text-base font-semibold'>
              Subject <span className="text-red-500">*</span>
              <input type="text"
                id="subject"
                name="subject"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-gray-300 px-4 outline-none focus:border-gray-500"
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className='mb-2 block text-base font-semibold'>
              Message <span className="text-red-500">*</span>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                className="w-full rounded-md border bg-primary-foreground border-gray-300 px-4 py-3 outline-none focus:border-gray-500 resize-y"
              />
            </label>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded bg-[#1b1516] text-lg font-bold text-white transition hover:bg-accent-foreground cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm