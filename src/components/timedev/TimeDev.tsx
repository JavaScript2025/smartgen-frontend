import { useState } from "react";
import {GithubLogoIcon, LinkedinLogoIcon
} from "@phosphor-icons/react";

function TimeDev() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const devs = [
    {
      name: "Junior Lima",
      role: "Desenvolvedor Fullstack",
      img: "https://github.com/limaojunio.png",
      github: "https://github.com/limaojunio",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Inglyd Miranda",
      role: "Desenvolvedora Fullstack",
      img: "https://github.com/inglyd.png",
      github: "https://github.com/inglyd/",
      linkedin: "https://www.linkedin.com/in/inglyd/",
    },
    {
      name: "Felipe Emanuel",
      role: "Desenvolvedor Fullstack",
      img: "https://github.com/Felipemanuell.png",
      github: "https://github.com/Felipemanuell",
      linkedin: "https://www.linkedin.com/in/felipemanuel/",
    },
    {
      name: "João Evangelista",
      role: "Desenvolvedor Fullstack",
      img: "https://avatars.githubusercontent.com/u/88002997?v=4",
      github: "https://github.com/Evangelista96",
      linkedin: "https://linkedin.com/in/joao-evangelista-44828b189",
    },
    {
      name: "João Ferreira",
      role: "Fullstack Developer",
      img: "https://i.pravatar.cc/300?img=14",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      name: "Carolaine Gonçalves",
      role: "Desenvolvedora Fullstack",
      img: "https://i.pravatar.cc/300?img=45",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
  ];

  return (
    <section className="bg-gray-200">
      <div className="container mx-auto">
        <div className="px-8 py-8 lg:py-11">

          <h2 className="text-2xl font-semibold md:text-5xl lg:w-1/2 lg:leading-[130%]">
            Nosso Time de Desenvolvedores
          </h2>

          {/* CARROSSEL */}
          <div
            className="mt-8 flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {devs.map((dev, index) => (
              <div
                key={index}
                className={`
                  group min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
                  bg-white rounded-2xl p-4 flex flex-col items-center
                  transition-all duration-300
                  hover:scale-[1.03] hover:shadow-xl

                  ${hoverIndex !== null && hoverIndex !== index ? "brightness-[60%]" : ""}
                `}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-24 h-24 rounded-full object-cover border border-gray-300"
                />

                <h3 className="mt-4 font-semibold text-lg text-center">{dev.name}</h3>
                <p className="text-sm text-gray-600 text-center">{dev.role}</p>

                {/* ÍCONES */}
                <div className="flex gap-4 mt-4">
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">
                    <GithubLogoIcon size={22} />
                  </a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">
                    <LinkedinLogoIcon size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default TimeDev;