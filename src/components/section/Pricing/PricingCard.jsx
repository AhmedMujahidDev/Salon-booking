import { Check } from 'lucide-react'
import React from 'react'

const PricingCard = ({ plan }) => {
    return (
        <section className=''>
            <div className='container-custom '>
                <div className='grid grid-cols-1 gap-4 rounded-md border bg-white p-3 shadow-md md:grid-cols-[1fr_1.1fr]'>
                    <div className='rounded-lg border p-4'>
                        <div className='flex items-center justify-between border-b border-dashed pb-3'>
                            <h3 className='font-heading text-xl font-bold'>
                                {plan.name}
                            </h3>

                            {plan.recommended && (
                                <span className='rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white'>
                                    Recomended
                                </span>
                            )}
                        </div>

                        <div className='border-b border-dashed py-4'>
                            <h2 className='text-3xl font-bold'>
                                ${plan.price}
                                <span className="ml-1 text-xs font-normal">
                                    / User
                                </span>
                            </h2>

                            <p className='mt-2 text-sm text-gray-500'>
                                Save up to 30% by paying yearly
                            </p>
                        </div>

                        <p className="pt-4 text-sm text-gray-600">
                            {plan.description}
                        </p>
                    </div>
                    <div className="flex flex-col">

                        <h3 className="font-heading text-lg font-bold">
                            Includes
                        </h3>

                        <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

                            {plan.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                    <Check
                                        size={14}
                                        className="text-green-600"
                                    />

                                    <span>{feature}</span>
                                </div>
                            ))}

                        </div>

                        <button className="mt-6 w-full rounded bg-primary py-3 text-sm font-bold text-white transition hover:bg-orange-700">
                            Choose Plan
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingCard