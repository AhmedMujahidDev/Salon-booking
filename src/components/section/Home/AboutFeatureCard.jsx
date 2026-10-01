import React from 'react'

const AboutFeatureCard = ({
    icon: Icon,
    title,
    description,
    iconColor,
    layout = 'icon-top',
}) => {
    const layoutClass = {
        'icon-top': 'flex flex-col',
        'icon-left': 'flex items-center gap-4',
        'icon-right': 'flex flex-row-reverse items-start gap-4',
    }

    return (
        <div
            className={`
                rounded-md border border-gray-200 bg-white p-5 shadow-sm
                ${layoutClass[layout]}
            `}
        >
            <div
                className={`
                    flex h-16 w-16 shrink-0 items-center justify-center
                    rounded-full text-white
                    ${iconColor}
                `}
            >
                {Icon && <Icon size={30} />}
            </div>

            <div className={layout === 'icon-top' ? '' : 'flex flex-col'}>
                <h3 className='mt-5 text-2xl font-bold text-foreground'>
                    {title}
                </h3>

                <p className='mt-2 text-base leading-6 text-gray-600'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutFeatureCard