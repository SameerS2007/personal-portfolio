import { useCallback, useEffect, useRef, useState } from "react";

export function ProjectReel({ projects }) {
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const scrollToIndex = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    const node = slideRefs.current[clamped];
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [projects.length]);

  useEffect(() => {
    const root = viewportRef.current;
    if (!root || projects.length === 0) return;

    const slides = slideRefs.current.filter(Boolean);
    if (slides.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.55)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const idx = slides.indexOf(visible.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { root, rootMargin: "0px -12% 0px -12%", threshold: [0.45, 0.55, 0.65, 0.75] }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [projects.length]);

  useEffect(() => {
    const root = viewportRef.current;
    if (!root || projects.length === 0) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(activeRef.current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(activeRef.current + 1);
      }
    };

    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [projects.length, scrollToIndex]);

  const onPrev = () => scrollToIndex(active - 1);
  const onNext = () => scrollToIndex(active + 1);

  return (
    <div className="project-reel">
      <div className="project-reel__toolbar" aria-hidden="true">
        <span className="project-reel__tape-label">Match tape</span>
        <span className="project-reel__tape-holes" />
      </div>

      <div className="project-reel__controls">
        <p className="project-reel__counter" aria-live="polite">
          Game <strong>{active + 1}</strong> / {projects.length}
        </p>
        <div className="project-reel__arrows">
          <button
            type="button"
            className="project-reel__arrow"
            onClick={onPrev}
            disabled={active <= 0}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            className="project-reel__arrow"
            onClick={onNext}
            disabled={active >= projects.length - 1}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="project-reel__viewport"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects. Scroll horizontally, or use arrow keys when this area is focused."
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className={`court-card court-card--feature court-card--highlight court-card--reel ${
              index % 2 === 1 ? "alt-tone" : ""
            }`}
          >
            <div className="highlight-scoreboard" aria-hidden="true">
              <span>{project.event}</span>
              <span>
                {project.city} / {project.round}
              </span>
            </div>
            <div className="highlight-topline">
              <p className="eyebrow">Project reel {index % 2 === 0 ? "✦" : "⚡"}</p>
              <span className="highlight-badge">{project.score}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-lines">
              <div>
                <span>Matchup</span>
                <strong>{project.matchup}</strong>
              </div>
              <div>
                <span>Surface</span>
                <strong>{project.surface}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>{project.game}</strong>
              </div>
            </div>
            <div className="project-reel__outro">
              <span className="card-tag">{project.result}</span>
              {(project.codeUrl || project.liveUrl) && (
                <p className="project-reel__outlinks">
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      className="project-reel__out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.codeUrl && project.liveUrl ? (
                    <span className="project-reel__outsep" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="project-reel__out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  ) : null}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="project-reel__dots" role="group" aria-label="Jump to project">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-current={active === index ? "true" : undefined}
            className={`project-reel__dot ${active === index ? "is-active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Show project ${index + 1}: ${project.title}`}
          />
        ))}
      </div>

      <nav className="project-reel__toc" aria-label="All projects">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={`project-reel__toc-item ${active === index ? "is-active" : ""}`}
            onClick={() => scrollToIndex(index)}
          >
            <span className="project-reel__toc-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-reel__toc-title">{project.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
