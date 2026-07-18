import { experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function institutionMark(institution: string) {
  if (institution.includes("Irvine")) return "UCI";
  if (institution.includes("Santa Cruz")) return "UCSC";
  return "SWJTU";
}

export function ResearchExperience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Research Experience"
        />
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.institution}-${item.role}`}>
              <span className="experience-mark" aria-hidden="true">
                {institutionMark(item.institution)}
              </span>
              <div className="experience-heading">
                <h3>{item.institution}</h3>
                {item.ongoing && <span className="ongoing-badge">Ongoing</span>}
              </div>
              <p className="experience-meta">
                <time>{item.period}</time>
                <span aria-hidden="true">·</span>
                <span>{item.role}</span>
              </p>
              <div className="experience-facts">
                <p><strong>Research Area:</strong> {item.researchArea}</p>
                {item.project && <p><strong>Project:</strong> {item.project}</p>}
                <p><strong>Supervisor:</strong> {item.supervisor}</p>
                <p><strong>Location:</strong> {item.location}</p>
              </div>
              {item.tags && (
                <div className="tag-row" aria-label="Research methods and technologies">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              )}
              <details className="experience-details">
                <summary>Selected contributions</summary>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
