import { CardIconTextProps } from "@/components/elements/CardIconText";
import SectionTitle from "@/components/elements/SectionTitle";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CarouselTestimonials from "@/components/sections/CarouselTestimonials";
import Hero2 from "@/components/sections/Hero2";
import TextImageContent from "@/components/sections/TextImageContent";
import { TextImageContentProps } from "@/components/sections/TextImageContent";
import { promises as fs } from "fs";

type PageProps = {
  section1: {
    title: string;
    titleSecondPart: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  content: TextImageContentProps[];
  benefits: CardIconTextProps[];
};

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/page.json",
    "utf8"
  );

  const data = JSON.parse(file) as PageProps;

  const randomPicture = (index: number) => {
    const random = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${random + index}/1600/900`;
  };



  return (
    <>
      <Hero2
        title={data.section1?.title}
        cta1={data.section1?.cta1}
        cta2={data.section1?.cta2}
        subtitle={data.section1?.subtitle}
      />
      <section id="services" className="pb-0">
        <SectionTitle title="Serviços" subtitle="Conheça nossos serviços" />
        {data.content &&
          data.content.map((content, index) => (
            <TextImageContent
              key={index}
              {...content}
              rtl={index % 2 == 0}
              className={(index % 2 == 1 ? "bg-slate-50" : "") + " "  + "py-10 sm:py-12 lg:py-16"}
              src={content.src || randomPicture(index)}
            />
          ))}
      </section>
      <section id="benefits" className="bg-slate-50">
        <SectionTitle title="Benefícios" subtitle="Veja os benefícios de trabalhar conosco" />
        <div className="md:max-w-screen-md lg:max-w-screen-xl mx-auto px-16 pt-8">
          <BenefitsGrid benefits={data.benefits} />
        </div>
      </section>
      <section id="testimonials"  >
        <div className="md:max-w-screen-md lg:max-w-screen-xl mx-auto px-16">
          <SectionTitle title="Depoimentos" subtitle="Veja o que nossos clientes estão dizendo" />
          <CarouselTestimonials
            testimonials={[
              {
                name: "John Doe",
                title: "CEO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/men/62.jpg",
              },
              {
                name: "Jane Doe",
                title: "CTO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/women/62.jpg",
              },{
                name: "John Doe",
                title: "CEO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/men/62.jpg",
              },
              {
                name: "Jane Doe",
                title: "CTO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/women/62.jpg",
              },{
                name: "John Doe",
                title: "CEO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/men/62.jpg",
              },
              {
                name: "Jane Doe",
                title: "CTO",
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
                img: "https://randomuser.me/api/portraits/women/62.jpg",
              },
            ]}
          
          />
        </div>
      </section>
      <footer className="h-32 bg-primary"></footer>
    </>
  );
}
