import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const ExpertCard = ({ employee }) => {
    const employees = Array.isArray(employee) ? employee : [employee]

    return (
        <div >
            {employees.map((expert) => (
                <div key={expert.name}>
                    <div className='group relative overflow-hidden rounded-lg'>
                        <img
                            src={expert.image}
                            alt={expert.name}
                            className='h-[500px] w-full object-cover transition duration-500 hover:scale-105 ' />

                        <div className='absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 translate-y-5 items-center gap-3 rounded-full bg-white/45 px-4 py-2 opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 '>
                            <a
                                href={expert.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-800 transition bg-white hover:bg-primary hover:text-white"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href={expert.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-800 transition bg-white hover:bg-primary hover:text-white"
                            >
                                <FaLinkedinIn size={20} />
                            </a>

                            <a
                                href={expert.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-800 transition bg-white hover:bg-primary hover:text-white"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className='mt-2 text-center'>
                        <h3
                            className={`font-heading text-2xl font-bold ${expert.bg === 'black' ? 'text-white' : 'text-black'
                                }`}
                        >
                            {expert.name}
                        </h3>

                        <p className={`mt-1 text-sm ${expert.bg === 'black' ? 'text-white' : 'text-gray-700'
                            }`}>
                            {expert.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpertCard