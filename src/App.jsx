import {
    profile,
    skills,
    projects,
    experience,
    education,
    interests,
} from "./data";

const nav = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
];

function Section({ id, title, children }) {
    return (
        <section
            id={id.toLowerCase()}
            className="mx-auto max-w-5xl px-6 py-20 scroll-mt-12"
        >
            <h2 className="mb-10 flex items-baseline gap-4 font-display text-3xl font-bold md:text-4xl">
                {title}
                <span className="h-px flex-1 bg-ink/20" />
            </h2>
            {children}
        </section>
    );
}

function Tag({ children }) {
    return (
        <span className="rounded-full border border-ink/25 px-3 py-1 font-mono text-xs">
            {children}
        </span>
    );
}

export default function App() {
    return (
        <>
            <header className="sticky top-0 z-10 border-b border-ink/10 bg-paper/85 backdrop-blur">
                <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                    <a href="#top" className="font-display text-lg font-bold">
                        BTM
                    </a>
                    <ul className="hidden gap-6 text-sm sm:flex">
                        {nav.map((n) => (
                            <li key={n}>
                                <a
                                    href={`#${n.toLowerCase()}`}
                                    className="hover:text-accent"
                                >
                                    {n}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main id="top">
                <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 md:pt-32">
                    <p className="mb-4 font-mono text-sm text-accent">
                        Hello, I'm
                    </p>
                    <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
                        {profile.name}
                    </h1>
                    <p className="mt-3 font-display text-2xl text-ink/70 md:text-3xl">
                        {profile.title}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="rounded bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent"
                        >
                            Get in touch
                        </a>
                        <a
                            href="CV.pdf"
                            download
                            className="rounded border border-ink px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper"
                        >
                            Download CV
                        </a>
                    </div>
                </section>

                <Section id="About" title="About">
                    <p className="max-w-3xl text-lg leading-relaxed">
                        {profile.summary}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                        {interests.map((i) => (
                            <Tag key={i}>{i}</Tag>
                        ))}
                    </ul>
                </Section>

                <Section id="Skills" title="Skills">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {Object.entries(skills).map(([group, items]) => (
                            <div key={group}>
                                <h3 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent">
                                    {group}
                                </h3>
                                <ul className="flex flex-wrap gap-2">
                                    {items.map((s) => (
                                        <Tag key={s}>{s}</Tag>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="Projects" title="Projects">
                    <div className="grid gap-6 md:grid-cols-3">
                        {projects.map((p) => (
                            <article
                                key={p.name}
                                className="flex flex-col rounded-lg border border-ink/15 bg-white/50 p-6 transition hover:-translate-y-1 hover:border-accent"
                            >
                                <h3 className="font-display text-xl font-bold">
                                    {p.name}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed">
                                    {p.aim}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-1.5">
                                    {p.tech.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </ul>
                                <p className="mt-auto pt-5 text-sm text-ink/70">
                                    <span className="font-semibold text-ink">
                                        Achievement:{" "}
                                    </span>
                                    {p.achievement}
                                </p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="Experience" title="Work Experience">
                    <ol className="space-y-8 border-l-2 border-ink/20 pl-6">
                        {experience.map((e) => (
                            <li key={e.company} className="relative">
                                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                                <h3 className="font-display text-xl font-bold">
                                    {e.role}
                                </h3>
                                <p>{e.company}</p>
                                <p className="font-mono text-sm text-ink/60">
                                    {e.period}
                                </p>
                            </li>
                        ))}
                    </ol>
                </Section>

                <Section id="Education" title="Education">
                    <div className="grid gap-6 md:grid-cols-2">
                        {education.map((e) => (
                            <div
                                key={e.degree}
                                className="rounded-lg border border-ink/15 p-6"
                            >
                                <h3 className="font-display text-lg font-bold">
                                    {e.degree}
                                </h3>
                                <p className="mt-1 text-sm">{e.school}</p>
                                <p className="mt-2 font-mono text-sm text-ink/60">
                                    {e.period}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="Contact" title="Contact">
                    <p className="mb-6 max-w-xl text-lg">
                        Open to new opportunities and conversations. Feel free
                        to reach out.
                    </p>
                    <ul className="space-y-2 font-mono text-sm">
                        <li>
                            <a
                                className="hover:text-accent"
                                href={`mailto:${profile.email}`}
                            >
                                ✉ {profile.email}
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-accent"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                in linkedin.com/in/mike-sovereignborn
                            </a>
                        </li>
                    </ul>
                </Section>
            </main>

            <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/60">
                © {new Date().getFullYear()} {profile.name}
            </footer>
        </>
    );
}
