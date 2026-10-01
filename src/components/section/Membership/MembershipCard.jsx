import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const MembershipCard = ({ Membership }) => {
    return (
        <div className='h-full mt-10 flex flex-col justify-center items-center hover:'>{Membership.popular && (
            <span className=" rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
                Most popular
            </span>
        )}
            <div className="rounded-md border bg-white p-3 shadow-md">

                <div className="p-4">

                    <div className="flex flex-col items-center justify-between gap-4 pb-3">

                        <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-foreground hover:bg-primary sm:h-16 sm:w-16'>
                            <img
                                src={Membership.image}
                                alt={Membership.name}
                                className='h-7 w-7 object-contain sm:h-10 sm:w-10' />
                        </div>
                        <h3 className="font-heading text-xl font-bold">
                            {Membership.name}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center border-b border-dashed py-4">
                        <h2 className="text-3xl font-bold">
                            ${Membership.price}
                            <span className="ml-1 text-xs font-normal">
                                / Month
                            </span>
                        </h2>

                        <p className="pt-4 text-sm text-primary">
                            {Membership.description}
                        </p>
                    </div>

                    <div className="flex-1">
                        <h3 className="mt-6 font-heading text-lg font-bold">
                            Includes
                        </h3>

                        <div className="mt-3 space-y-3">
                            {Membership.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                    <ArrowUpRight
                                        size={14}
                                        className="text-primary"
                                    />

                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-foreground mt-6 w-full rounded py-3 text-sm font-bold text-white transition hover:bg-accent-foreground">
                            Join Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipCard