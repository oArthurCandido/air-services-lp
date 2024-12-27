import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import  CardTestimonial,{CardTestimonialProps}  from "@/components/elements/CardTestimonial"
  

type CarouselTestimonialsProps = {
    testimonials: CardTestimonialProps[];
    };

const CarouselTestimonials: React.FC<CarouselTestimonialsProps> = ({ testimonials }) => {
    return (
        <Carousel className='pt-8'>
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className='lg:basis-1/3'>
                        <CardTestimonial
                            name={testimonial.name}
                            title={testimonial.title}
                            quote={testimonial.quote}
                            img={testimonial.img}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselTestimonials