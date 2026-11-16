import { siteConfig } from "../data/portfolio-data";
import { assetUrl } from "../lib/asset-url";

export function SectionAbout() {
  const resumeHref = assetUrl(siteConfig.resumePath);

  return (
    <section className="about section" id="about">
      <div className="about__shadow" />

      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            <span>{siteConfig.aboutTitleAccent}</span>
            <br />
            {siteConfig.aboutTitleMain}
          </h2>
          <p className="about__description">
            I&apos;m a <b>Jr. AI &amp; Data Engineer</b> passionate about experimenting
            with new <b>skills, data, and creativity.</b>
            Driven by learning and curiosity, I&apos;m always looking to explore
            machine learning, analytics, and modern engineering tools.
          </p>

          <a
            href={resumeHref}
            download
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Resume <i className="ri-file-list-2-line" />
          </a>
        </div>

        <div className="about__image">
          <div className="blob-animate" />
          <div className="blob-animate" />
          <img
            src={assetUrl("assets/img/home-perfil1.png")}
            alt={`${siteConfig.name} profile`}
            className="about__profile"
          />
        </div>
      </div>
    </section>
  );
}
