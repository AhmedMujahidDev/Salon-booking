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
                rounded-md border border-border bg-background p-5 shadow-sm
                ${layoutClass[layout]}
            `}
        >
            <div
                className={`
                    flex h-16 w-16 shrink-0 items-center justify-center
                    rounded-full text-primary-foreground
                    ${iconColor}
                `}
            >
                {Icon && <Icon size={30} />}
            </div>

            <div className={layout === 'icon-top' ? '' : 'flex flex-col'}>
                <h3 className='mt-5 text-fluid-2xl font-bold text-foreground'>
                    {title}
                </h3>

                <p className='mt-2 text-fluid-base leading-6 text-text-secondary'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutFeatureCard