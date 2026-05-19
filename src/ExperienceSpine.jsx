function sortPeriods(periods) {
  const future = periods.filter((p) => p.isFuture);
  const rest = periods.filter((p) => !p.isFuture).sort((a, b) => b.sortKey - a.sortKey);
  return [...rest, ...future];
}

function periodVisualStatus(period) {
  if (period.isFuture) return "upcoming";
  if (period.items?.some((i) => i.status === "current")) return "current";
  return "past";
}

export function ExperienceSpine({ periods: periodsProp }) {
  const periods = sortPeriods(periodsProp);

  return (
    <ol className="season-spine" aria-label="Experience timeline, newest first">
      {periods.map((period) => {
        const pStatus = periodVisualStatus(period);
        const multi = period.items.length > 1;

        return (
          <li
            key={period.id}
            className={`season-spine__period season-spine__item--${pStatus}`}
          >
            <span className="season-spine__node" aria-hidden="true" />
            <div className="season-spine__body">
              <div className="season-spine__period-head">
                <p className="season-spine__season">{period.window}</p>
                {multi ? (
                  <span className="season-spine__concurrent" title="More than one role in this window">
                    Parallel
                  </span>
                ) : null}
              </div>

              <div
                className={`season-spine__cluster ${multi ? "season-spine__cluster--multi" : ""}`}
              >
                {period.items.map((entry, index) => (
                  <div
                    className="season-spine__subitem"
                    key={`${period.id}-${entry.org}-${index}`}
                  >
                    <div className="season-spine__meta season-spine__meta--inline">
                      <p className="season-spine__kind">{entry.kind}</p>
                      {entry.status === "current" ? (
                        <span className="season-spine__live">Now</span>
                      ) : null}
                    </div>
                    <h4 className="season-spine__role">{entry.role}</h4>
                    <p className="season-spine__org">{entry.org}</p>
                    <p className="season-spine__where">{entry.location}</p>
                    <p className="season-spine__summary">{entry.summary}</p>

                    {entry.boxScore?.length > 0 && (
                      <dl className="season-spine__boxscore">
                        {entry.boxScore.map(({ label, value }) => (
                          <div key={label} className="season-spine__stat">
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {entry.quote ? (
                      <blockquote className="season-spine__quote">
                        <p>{entry.quote}</p>
                      </blockquote>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
