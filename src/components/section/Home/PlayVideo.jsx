import { Play } from 'lucide-react'
import React from 'react'

const PlayVideo = () => {
    return (
        <div className='relative flex h-40 w-40 items-center justify-center'>
            <svg
                className='absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]'
                viewBox='0 0 200 200'>
                <defs>
                    <path
                        id='circlePath'
                        d="
                    M 100,100
                    m -72,0
                    a 72,72 0 1,1 144,0
                    a 72,72 0 1,1 -144,0"
                    />
                </defs>

                <text
                    fill='white'
                    fontSize="16"
                    fontWeight="600"
                    letterSpacing="5"
                >
                    <textPath href="#circlePath" startOffset="0%">
                        Play Video • Play Video • Play Video • 
                    </textPath>
                </text>
            </svg>

            <div className="absolute inset-2 rounded-full border-2 border-white" />

            <button
                className="
                relative
                z-10
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-primary
                text-white
                transition-all
                duration-300
                hover:scale-110
                hover:bg-white
                hover:text-primary"
            >
                <Play
                    size={25}
                    fill="white"
                    className="ml-1 "
                />
            </button>
        </div>
    )
}

export default PlayVideo