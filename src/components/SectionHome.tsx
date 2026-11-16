import { siteConfig, socialLinks } from "../data/portfolio-data";
import { useHomeTextAnimation } from "../hooks/useHomeTextAnimation";
import { assetUrl } from "../lib/asset-url";

export function SectionHome() {
  const { profession1Ref, profession2Ref } = useHomeTextAnimation();
  const resumeHref = assetUrl(siteConfig.resumePath);
  const [nameLine1, nameLine2] = siteConfig.nameLines;
  const [titleLine1, titleLine2] = siteConfig.titleLines;

  return (
    <section className="home section section-top section-two">
      <div className="home__shadow" />
      <div className="home__container container grid">
        <div className="home__data">
          <h3 className="home__greeting">Hello, I&apos;m</h3>
          <h1 className="home__name">
            {nameLine1} <br />
            {nameLine2}
          </h1>
        </div>

        <div className="home__image">
          <div className="blob-animate" />
          <img
            src={assetUrl("assets/img/hero-profile1.png")}
            alt={`${siteConfig.name} profile`}
            className="home__profile"
          />
        </div>

        <div className="home__info">
          <h3 className="home__split">{siteConfig.heroTagline}</h3>
          <h2 className="home__profession-1" ref={profession1Ref}>
            {titleLine1}
          </h2>
          <h2 className="home__profession-2" ref={profession2Ref}>
            {titleLine2}
          </h2>
        </div>

        <div className="home__social">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
              aria-label={link.label}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>

        <a
          href={resumeHref}
          download
          target="_blank"
          rel="noreferrer"
          className="home__cv"
        >
          Resume <i className="ri-file-list-2-line" />
        </a>
      </div>
    </section>
  );
}
