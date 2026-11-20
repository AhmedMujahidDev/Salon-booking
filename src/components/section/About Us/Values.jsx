import { User, CalendarCheck2 } from 'lucide-react';

const Values = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex min-w-0 items-center gap-3 sm:gap-5'>
                        <User color="var(--primary-foreground)" size={70} className='size-12 shrink-0 rounded-full border-2 border-primary bg-primary p-2 sm:size-[60px] lg:size-[70px]' />
                        <div className='flex flex-col'>
                            <h3 className='text-primary-foreground text-fluid-4xl font-bold'>5,400+</h3>
                            <p className='text-primary-foreground mt-1'>Customer World Wide</p>
                        </div>
                    </div>

                    <div className='flex min-w-0 items-center gap-3 sm:gap-5'>
                        <div className='hidden h-12 w-0.5 bg-linear-to-b from-transparent via-accent-orange to-transparent lg:block'></div>
                        <CalendarCheck2 color="var(--primary-foreground)" size={70} className='size-12 shrink-0 rounded-full border-2 border-primary bg-primary p-2 sm:size-[60px] lg:size-[70px]' />
                        <div className='flex flex-col'>
                            <h3 className='text-primary-foreground text-fluid-4xl font-bold'>10+</h3>
                            <p className='text-primary-foreground mt-1'>Years of Experience</p>
                        </div>
                    </div>

                    <div className='flex min-w-0 items-center gap-3 sm:gap-5'>
                        <div className='hidden h-12 w-0.5 bg-linear-to-b from-transparent via-accent-orange to-transparent lg:block'></div>
                        <User color="var(--primary-foreground)" size={70} className='size-12 shrink-0 rounded-full border-2 border-primary bg-primary p-2 sm:size-[60px] lg:size-[70px]' />
                        <div className='flex flex-col'>
                            <h3 className='text-primary-foreground text-fluid-4xl font-bold'>15k+</h3>
                            <p className='text-primary-foreground mt-1'>Expert Stylist</p>
                        </div>
                    </div>

                    <div className='flex min-w-0 items-center gap-3 sm:gap-5'>
                        <div className='hidden h-12 w-0.5 bg-linear-to-b from-transparent via-accent-orange to-transparent lg:block'></div>
                        <User color="var(--primary-foreground)" size={70} className='size-12 shrink-0 rounded-full border-2 border-primary bg-primary p-2 sm:size-[60px] lg:size-[70px]' />
                        <div className='flex flex-col'>
                            <h3 className='text-primary-foreground text-fluid-4xl font-bold'>20k+</h3>
                            <p className='text-primary-foreground mt-1'>Signature Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values