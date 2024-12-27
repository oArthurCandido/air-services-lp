import React from "react";

type Hero1Props = {
    title?: string;
    titleSecondPart: string;
    description: string;
    cta1: string;
    cta2: string;
};

const Hero1: React.FC<Hero1Props> = ({ title = "Insira um título na chamada do componente.", titleSecondPart = "Se precisar, insira uma parte 2 no título, para remover passe um valor em branco", description, cta1 = "CTA 1", cta2 = "CTA 2" }) => {
    return (
        <header className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:py-32 lg:items-center">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-balance">
                        {title}
                        <span className="sm:block">{titleSecondPart}</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-3xl sm:text-xl/relaxed">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            {cta1}
                        </a>

                        <a
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            {cta2}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero1;