export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 lg:py-28"
    >
      <div className="wrap grid gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <h2
          id="about-title"
          className="text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.08] tracking-[-0.028em]"
        >
          About me
        </h2>

        <div className="grid max-w-[46rem] gap-6 text-xl leading-relaxed">
          <p>
            I started out curious about how computers, networks and software
            systems work, and learned by building small projects to see how
            applications are put together behind the screen.
          </p>
          <p className="text-muted">
            Since then I have moved into web development, networking and system
            infrastructure. I work with Next.js, React, Supabase and Flutter,
            troubleshoot hardware, and run self-hosted services at home on
            OPNsense and Pi-hole.
          </p>
          <p className="text-muted">
            I want to keep growing as a full-stack developer and build software
            that solves real problems for the people who use it.
          </p>
        </div>
      </div>
    </section>
  )
}
