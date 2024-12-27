import React from 'react'
import { Card, CardContent, CardHeader, CardDescription, CardFooter, CardTitle } from '../ui/card';

export type CardTestimonialProps = {
    name: string;
    title: string;
    quote: string;
    img: string;
    };

const CardTestimonial: React.FC<CardTestimonialProps> = ({ name, title, quote, img }) => {
    return (
        <Card className="bg-white rounded-3xl shadow-lg p-4">
            <CardHeader>
                <img src={img} alt={name} className="w-12 h-12 rounded-full" />
            </CardHeader>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{title}</CardDescription>
                <CardDescription>{quote}</CardDescription>
            </CardContent>
            <CardFooter>⭐⭐⭐⭐⭐</CardFooter>
        </Card>
    );

}

export default CardTestimonial