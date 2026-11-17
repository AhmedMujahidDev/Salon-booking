import React from 'react'

const ContactForm = () => {
  return (
    <section className='section-padding'>
      <div className='container-custom rounded border border-border-strong bg-muted p-4 sm:p-10'>
        <form className='p-2' >
          <h2 className='mb-7 text-fluid-2xl font-bold'>Enquire Us</h2>
          <div>
            <label htmlFor="name" className='mb-2 block text-fluid-base font-semibold'>
              Name <span className="text-destructive">*</span>
              <input type="text"
                id="name"
                name="name"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-border-strong px-4 outline-none focus:border-border-strong"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className='mb-2 block text-fluid-base font-semibold'>
              Email <span className="text-destructive">*</span>
              <input type="email"
                id="email"
                name="email"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-border-strong px-4 outline-none focus:border-border-strong"
              />
            </label>
          </div>

          <div>
            <label htmlFor="subject" className='mb-2 block text-fluid-base font-semibold'>
              Subject <span className="text-destructive">*</span>
              <input type="text"
                id="subject"
                name="subject"
                required
                className="h-[52px] w-full rounded-md border bg-primary-foreground border-border-strong px-4 outline-none focus:border-border-strong"
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className='mb-2 block text-fluid-base font-semibold'>
              Message <span className="text-destructive">*</span>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                className="w-full rounded-md border bg-primary-foreground border-border-strong px-4 py-3 outline-none focus:border-border-strong resize-y"
              />
            </label>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded bg-foreground text-fluid-lg font-bold text-primary-foreground transition hover:bg-accent-foreground cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm