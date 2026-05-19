import { useCallback, useEffect, useState } from "react";
import { ProjectReel } from "./ProjectReel.jsx";
import { ExperienceSpine } from "./ExperienceSpine.jsx";
import { SiteNav } from "./SiteNav.jsx";
import {
  scoreboard,
  scoreboardMeta,
  matchStats,
  profileMetrics,
  skills,
  projectHighlights,
  education,
  experiencePeriods,
  tourStops,
  links,
  hero,
  bioSection,
  currentForm,
  drillsSection,
  tourSection,
  experienceFootnote,
  pageNav,
} from "./content.js";

function App() {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduce ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setBackToTopVisible(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = document.querySelectorAll(
      ".scoreboard, .court-panel, .center-court, .court-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: reduceMotion ? 0.05 : 0.18 }
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal");
      if (!reduceMotion) {
        target.style.transitionDelay = `${index * 60}ms`;
      }
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          if (!main) return;
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          main.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
          main.focus();
        }}
      >
        Skip to main content
      </a>
      <header className="scoreboard">
        <span className="tennis-ball-icon" aria-hidden="true">
          🎾
        </span>
        <div className="scoreboard__accent-line" aria-hidden="true" />
        <div className="scoreboard__identity">
          <p className="scoreboard__label">{scoreboard.label}</p>
          <p className="scoreboard__kicker">{scoreboard.kicker}</p>
          <h1>Sameer Sahai</h1>
          <p className="scoreboard__subcopy">{scoreboard.subcopy}</p>
          <p className="scoreboard__mood">{scoreboard.mood}</p>
        </div>

        <div className="scoreboard__meta">
          {scoreboardMeta.map(({ label, value, isLinks }) => (
            <div key={label}>
              <p className="scoreboard__label">{label}</p>
              {isLinks ? (
                <p>
                  <a href="#match-archive">Projects</a> / <a href="#education">Education</a> /{" "}
                  <a href={links.resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a> / <a href="#press-box">Contact</a>
                </p>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>
      </header>

      <section className="profile-strip" aria-label="Profile metrics">
        {profileMetrics.map(({ label, value }) => (
          <article className="metric-card" key={label}>
            <p className="metric-card__label">{label}</p>
            <p className="metric-card__value">{value}</p>
            <span className="metric-card__spark" aria-hidden="true">
              {label === "Primary Stack" && "⌘"}
              {label === "Strength" && "✦"}
              {label === "Style" && "✷"}
              {label === "Competitive Edge" && "🎾"}
            </span>
          </article>
        ))}
      </section>

      <SiteNav items={pageNav} />

      <main id="main-content" tabIndex={-1}>
        <section className="court court--landing" aria-labelledby="center-court-title">
          <div className="court__lines" aria-hidden="true"></div>
          <div className="court__net-pulse" aria-hidden="true"></div>
          <div className="court__corner-mark court__corner-mark--tl" aria-hidden="true"></div>
          <div className="court__corner-mark court__corner-mark--br" aria-hidden="true"></div>
          <div className="court__glow" aria-hidden="true"></div>

          <aside className="court-panel court-panel--stat court-panel--left">
            <p className="eyebrow">Build Profile ✦</p>
            <ul className="stat-list">
              {matchStats.map(({ label, value }) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
          </aside>

          <div className="center-court">
            <p className="eyebrow">Studio Overview ◎</p>
            <h2 id="center-court-title">{scoreboard.centerCourtTitle}</h2>
            <p className="lede">{hero.lede}</p>
            <div className="center-court__floating-notes" aria-hidden="true">
              <span>🔬 research</span>
              <span>⌘ ResuMAX</span>
              <span>🎾 tennis</span>
            </div>
            <div className="center-court__cta">
              <a className="button" href="#service-box">
                View Highlights
              </a>
              <a className="button button--ghost" href="#current-form">
                See Current Form
              </a>
            </div>
          </div>

          <aside className="court-panel court-panel--stat court-panel--right">
            <p className="eyebrow">Design Notes ★</p>
            <p className="panel-copy">{hero.designNotes}</p>
          </aside>
        </section>

        <section className="section-band section-band--highlights" id="service-box">
          <div className="section-shell">
            <div className="section-head">
              <div>
                <p className="eyebrow">Match Highlights</p>
                <h3>Featured projects with their own scoreboard</h3>
              </div>
              <p className="section-head__note">
                Scroll the tape like past matches—every project stays listed below so nothing hides
                behind the carousel.
              </p>
            </div>

            <ProjectReel projects={projectHighlights} />
            <div className="highlights-footer" aria-hidden="true">
              <span>Helm</span>
              <span>ResuMAX</span>
              <span>Skribbl.IO</span>
            </div>
          </div>
        </section>

        <section className="section-band section-band--bio" id="bio-spotlight">
          <div className="section-shell section-shell--split">
            <article className="court-card court-card--bio">
              <p className="eyebrow">Bio ♥</p>
              <h3>{bioSection.title}</h3>
              {bioSection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="bio-notes">
                {bioSection.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </article>

            <article className="court-card court-card--dark" id="current-form">
              <p className="eyebrow">Current Form ⚡</p>
              <h3>Right now</h3>
              <p>{currentForm.intro}</p>
              <div className="form-lines">
                {currentForm.lines.map(({ label, value }) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-band section-band--matches" id="match-archive">
          <div className="section-shell section-shell--matches">
            <article className="court-card court-card--wide court-card--matches experience-canvas">
              <div className="experience-canvas__grid">
                <aside className="education-card" id="education" aria-label="Education">
                  <p className="eyebrow">Education</p>
                  <h4 className="education-card__degree">{education.degree}</h4>
                  <p className="education-card__school">{education.school}</p>
                  {education.schoolSubtitle ? (
                    <p className="education-card__subtitle">{education.schoolSubtitle}</p>
                  ) : null}
                  <p className="education-card__window">{education.window}</p>
                  <p className="education-card__detail">{education.detail}</p>
                </aside>

                <div className="experience-canvas__main">
                  <div className="experience-toolbar" aria-hidden="true">
                    <span>Baseline</span>
                    <span className="experience-toolbar__sep" />
                    <span>Season spine</span>
                  </div>

                  <div className="section-head section-head--experience">
                    <div>
                      <p className="eyebrow">Season log ◎</p>
                      <h3>Experience—the long arc</h3>
                    </div>
                  </div>

                  <ExperienceSpine periods={experiencePeriods} />
                  {experienceFootnote ? (
                    <p className="season-spine__footnote">{experienceFootnote}</p>
                  ) : null}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-band section-band--training" id="skills-block">
          <div className="section-shell section-shell--split">
            <article className="court-card court-card--baseline">
              <p className="eyebrow">Training Block 🎾</p>
              <h3>Skills That Hold Up</h3>
              <div className="training-board">
                {skills.map((skill, index) => (
                  <div className="training-cell" key={skill}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{skill}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="court-card court-card--training-note">
              <p className="eyebrow">Current Drills ✷</p>
              <h3>What I&apos;m practicing</h3>
              <p>{drillsSection.intro}</p>
              <div className="drill-list">
                {drillsSection.lines.map(({ label, value }) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-band section-band--tour">
          <div className="section-shell section-shell--split">
            <article className="court-card court-card--offcourt" id="off-court">
              <p className="eyebrow">On Tour ✈️</p>
              <h3>Travel, places, and life outside the screen</h3>
              <p>{tourSection.intro}</p>
              <div className="tour-stamps">
                {tourStops.map((stop) => (
                  <span key={stop}>{stop}</span>
                ))}
              </div>
            </article>

            <article className="court-card court-card--press" id="press-box">
              <p className="eyebrow">Links ☏</p>
              <h3>Links and Contact</h3>
              <div className="press-links">
                <a href={links.resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={links.email}>Email</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <p>
          <span className="site-footer__name">Sameer Sahai</span> · B.S. Computer Science, UW
        </p>
        <p className="site-footer__line">
          © {new Date().getFullYear()} · Built with React & Vite
        </p>
      </footer>

      <button
        type="button"
        className={`back-to-top ${backToTopVisible ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-hidden={!backToTopVisible}
        tabIndex={backToTopVisible ? 0 : -1}
        aria-label="Back to top"
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}

export default App;
