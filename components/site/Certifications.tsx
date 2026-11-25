import Image from "next/image"

import { certificates } from "@/lib/site"
import Lightbox from "./Lightbox"
import SectionHeading from "./SectionHeading"

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="border-y border-line bg-surface py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading
          id="certifications-title"
          title="Certifications"
          lead="Five Certiport IT Specialist certifications and two workshop certificates. Open one to read it in full."
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <li key={certificate.title}>
              <Lightbox
                shots={[
                  {
                    src: certificate.image,
                    alt: `${certificate.title} certificate issued by ${certificate.issuer}`,
                  },
                ]}
                title={certificate.title}
                className="group block w-full cursor-zoom-in text-left"
              >
                <span className="block overflow-hidden rounded-xl border border-line bg-paper transition-[border-color,box-shadow,transform] duration-300 ease-out-quint group-hover:-translate-y-0.5 group-hover:border-ink/25 group-hover:shadow-[0_16px_36px_-20px_rgb(17_17_17/0.22)]">
                  <Image
                    src={certificate.image}
                    alt=""
                    sizes="(min-width: 80rem) 17rem, (min-width: 64rem) 22vw, (min-width: 48rem) 30vw, 45vw"
                    placeholder="blur"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-out-quint group-hover:scale-[1.025]"
                  />
                </span>
                <span className="mt-4 block font-display text-lg leading-snug font-medium tracking-[-0.01em]">
                  {certificate.title}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-muted">
                  {certificate.issuer}
                </span>
                <span className="sr-only">. View the certificate</span>
              </Lightbox>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
