import React from "react";
import Header from "../elements/Header";

type Hero2Props = {
  title?: string;
  subtitle?: string;
  cta1?: string;
  cta2?: string;
};

const Hero2: React.FC<Hero2Props> = ({
  title = "Insira um título na chamada do componente.",
  subtitle = "Insira um subtítulo na chamada do componente.",
  cta1 = "CTA 1",
  cta2 = "CTA 2",
}) => {
  return (
    <>
      <Header></Header>
      <div className="relative bg-[url(/images/banner.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r "></div>
        <div className="relative mx-auto max-w-screen-xl px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-48 lg:pb-40 sm:px-6 lg:flex  lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-white sm:text-xl/relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:opacity-80 focus:outline-none focus:ring active:opacity-60 sm:w-auto"
              >
                {cta1}
              </a>
              {cta2 && (
                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  {cta2}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
