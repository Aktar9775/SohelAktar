import React from "react";

interface Sponsor {
  name: string;
  logo: string; // image URL
  url?: string; // optional sponsor link
}

interface SponsorProps {
  sponsors: Sponsor[];
}

const Sponsor: React.FC<SponsorProps> = ({ sponsors }) => {
  return (
    <section className=" bg-gray-950 z-9 rounded-3xl mt-5 ">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Heading */}
        <span className="text-xl font-bold text-center  text-white rounded-3xl p-2  bg-gradient-to-r from-yellow-400 to-yellow-600">
          Our Sponsor
        </span>

        {/* Sponsors grid */}
        <div className="grid grid-cols gap-6 items-center text-white  ">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 space-x-3"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16"
              />

              <div className="flex flex-col">
                <span className="text-xl font-bold">Lian Softwares</span>
                <span className="text-sm text-gray-600">
                  Provide Marketing and IT Services
                </span>
              </div>
            </a>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Sponsor;
