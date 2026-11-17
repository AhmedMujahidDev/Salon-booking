import { Check } from 'lucide-react'
import React from 'react'

const PricingCard = ({ plan }) => {
    return (
        <section className=''>
            <div className='container-custom'>
                <div className='grid grid-cols-1 gap-4 rounded-md border bg-background p-3 shadow-md md:grid-cols-[1fr_1.1fr]'>
                    <div className='rounded-lg border p-4'>
                        <div className='flex items-center justify-between border-b border-dashed pb-3'>
                            <h3 className='font-heading text-fluid-xl font-bold'>
                                {plan.name}
                            </h3>

                            {plan.recommended && (
                                <span className='rounded bg-destructive px-3 py-1 text-fluid-xs font-semibold text-primary-foreground'>
                                    Recomended
                                </span>
                            )}
                        </div>

                        <div className='border-b border-dashed py-4'>
                            <h2 className='text-fluid-3xl font-bold'>
                                ${plan.price}
                                <span className="ml-1 text-fluid-xs font-normal">
                                    / User
                                </span>
                            </h2>

                            <p className='mt-2 text-fluid-sm text-muted-foreground'>
                                Save up to 30% by paying yearly
                            </p>
                        </div>

                        <p className="pt-4 text-fluid-sm text-text-secondary">
                            {plan.description}
                        </p>
                    </div>
                    <div className="flex flex-col">

                        <h3 className="font-heading text-fluid-lg font-bold">
                            Includes
                        </h3>

                        <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

                            {plan.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-fluid-sm text-text-secondary"
                                >
                                    <Check
                                        size={14}
                                        className="text-success"
                                    />

                                    <span>{feature}</span>
                                </div>
                            ))}

                        </div>

                        <button className="mt-6 w-full rounded bg-primary py-3 text-fluid-sm font-bold text-primary-foreground transition hover:bg-brand-hover">
                            Choose Plan
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingCard