import { Mail, MapPinCheck, Phone } from 'lucide-react'
import React from 'react'

const ContactDetail = () => {
  return (
    <section className='section-padding'>
      <div>
        <h3 className='font-bold text-3xl'>Need help? Contact us</h3>
        <p className='text-foreground'>If you have any questions or need assistance with Chat assist our dedicated team is here.</p>
      </div>

      <div className='flex gap-3 mt-6'>
        <div className='flex items-start gap-4'>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-foreground">
            <Phone color='white' />
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            Phone
          </h3>
          <p className="text-base mt-1 text-muted-foreground font-medium">
            +81649 48103 / +78301 71940
          </p>
        </div>
      </div>

      <div className='flex gap-3 mt-6'>
        <div className='flex items-start gap-4'>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-foreground">
            <Mail color='white' />
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            Email
          </h3>
          <p className="text-base mt-1 text-muted-foreground font-medium">
            info@example.com / corporate@example.com
          </p>
        </div>
      </div>

      <div className='flex gap-3 mt-6'>
        <div className='flex items-start gap-4'>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-foreground">
            <MapPinCheck color='white' />
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-foreground">
            Address
          </h3>
          <p className="text-base mt-1 text-muted-foreground font-medium">
            509 Rosewood Drive, California, United States
          </p>
        </div>
      </div>

      <div className="mt-10 w-full overflow-hidden rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
          className="h-[200px] w-full border-0 sm:h-[250px] lg:h-[300px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        />
      </div>
    </section>
  )
}

export default ContactDetail
