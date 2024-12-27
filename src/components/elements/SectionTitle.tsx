import React from 'react'

type SectionTitleProps = {
    title: string;
    subtitle?: string;
    };

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className='text-center'>
            <h2 className='mb-4 sm:mb-6 lg:mb-8 text-xl sm:text-2xl lg:text-5xl font-bold'>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
        </div>
    );
};

export default SectionTitle