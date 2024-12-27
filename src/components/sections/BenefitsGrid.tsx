import React from 'react'
import CardIconText, {CardIconTextProps} from '@/components/elements/CardIconText'


type BenefitsGridProps = {
    benefits: CardIconTextProps[];
    }

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {benefits.map((benefit, index) => (
                <CardIconText
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                />
            ))}
        </div>
    );
}

export default BenefitsGrid