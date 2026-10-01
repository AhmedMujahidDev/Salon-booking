import React from "react"

import logo1 from "../../../assets/images/brand-img-1.png"
import logo2 from "../../../assets/images/brand-img-2.png"
import logo3 from "../../../assets/images/brand-img-3.png"
import logo4 from "../../../assets/images/brand-img-4.png"
import logo5 from "../../../assets/images/brand-img-5.png"
import logo6 from "../../../assets/images/brand-img-6.png"

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
]

const AboutLogos = () => {
  // Duplicate logos for infinite marquee
  const marqueeItems = [...logos, ...logos]

  return (
    <section className="pt-8 sm:pt-12 lg:pt-16">
      <div className="container-custom overflow-hidden">

        <div className="marquee-track flex w-max items-center whitespace-nowrap">

          {marqueeItems.map((item, index) => (
            <div
              key={`${index}`}
              className="flex items-center"
            >
              {/* Logo */}
              <div className="flex h-24 w-40 items-center justify-center px-6">
                <img
                  src={item}
                  alt={`Brand logo ${index + 1}`}
                  className="
                    max-h-20
                    max-w-full
                    object-contain
                    opacity-80
                    transition
                    duration-300
                    hover:opacity-100
                  "
                />
              </div>

            </div>
          ))}

        </div>

        <style>{`
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee-scroll 25s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </section>
  )
}

export default AboutLogos