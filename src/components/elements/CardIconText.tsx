import React from 'react'
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components//ui/card';

export type CardIconTextProps = {
  icon: string;
  title: string;
  description: string;
  };

const CardIconText: React.FC<CardIconTextProps> = ({ icon, title, description }) => {
    return (
        <Card className="bg-white rounded-3xl shadow-lg p-4">
            <CardHeader>
                <img src={icon} alt={title} className="w-12 h-12 rounded-full" />
            </CardHeader>
            <CardContent>
                <CardTitle className='pb-2'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
}

export default CardIconText