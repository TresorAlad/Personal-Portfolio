import { useState } from "react";
import { certifications, type Certification } from "../data/portfolio-data";
import {
  CERTIFICATION_VISIBLE_ROWS,
  useCertificationGridColumns,
} from "../hooks/useCertificationGridColumns";

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <li className="certifications__card">
      <h3 className="certifications__title">{cert.title}</h3>
      <p className="certifications__meta">
        <span className="certifications__issuer">{cert.issuer}</span>
        <span className="certifications__date">{cert.date}</span>
      </p>

      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="certifications__link"
        >
          Verify
          <i className="ri-arrow-right-up-long-line" aria-hidden />
        </a>
      ) : (
        <span className="certifications__link certifications__link_placeholder" aria-hidden>
          &nbsp;
        </span>
      )}
    </li>
  );
}

export function SectionCertifications() {
  const [isExpanded, setIsExpanded] = useState(false);
  const columns = useCertificationGridColumns();
  const collapsedCount = columns * CERTIFICATION_VISIBLE_ROWS;

  if (certifications.length === 0) return null;

  const hasMore = certifications.length > collapsedCount;
  const visibleCerts = isExpanded
    ? certifications
    : certifications.slice(0, collapsedCount);

  return (
    <section className="certifications section" id="certifications">
      <h2 className="section__title">
        My <span>Certifications</span>
      </h2>

      <div className="certifications__container container grid">
        <ul className="certifications__grid">
          {visibleCerts.map((cert) => (
            <CertificationCard
              key={`${cert.title}-${cert.issuer}-${cert.date}`}
              cert={cert}
            />
          ))}
        </ul>

        {hasMore ? (
          <div className="certifications__more">
            <button
              type="button"
              className="button certifications__more-button"
              onClick={() => setIsExpanded((open) => !open)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <>
                  Show less <i className="ri-arrow-up-s-line" aria-hidden />
                </>
              ) : (
                <>
                  See more <i className="ri-arrow-down-s-line" aria-hidden />
                </>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}