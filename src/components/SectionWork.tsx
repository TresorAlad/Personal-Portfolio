import { useState } from "react";
import {
  educationItems,
  experienceItems,
  volunteeringItems,
  type ExperienceKind,
  type TimeCommitment,
  type WorkItem,
  type WorkMode,
} from "../data/portfolio-data";

type WorkTab = "experience" | "education" | "volunteering";

const workTabItems: Record<WorkTab, WorkItem[]> = {
  experience: experienceItems,
  education: educationItems,
  volunteering: volunteeringItems,
};

const kindLabels: Record<ExperienceKind, string> = {
  employment: "Employment",
  internship: "Internship",
  volunteering: "Volunteering",
};

const workModeLabels: Record<WorkMode, string> = {
  remote: "Remote",
  "on-site": "On-site",
  hybrid: "Hybrid",
};

const workModeIcons: Record<WorkMode, string> = {
  remote: "ri-global-line",
  "on-site": "ri-building-2-line",
  hybrid: "ri-home-office-line",
};

const timeCommitmentLabels: Record<TimeCommitment, string> = {
  "part-time": "Part time",
  "full-time": "Full time",
};

function WorkMeta({ item }: { item: WorkItem }) {
  const kind = item.kind ?? "employment";

  return (
    <div className="work__meta">
      <span className="work__tag work__tag_kind">{kindLabels[kind]}</span>
      {item.timeCommitment ? (
        <span className="work__tag work__tag_commitment">
          <i className="ri-time-line" aria-hidden />
          {timeCommitmentLabels[item.timeCommitment]}
        </span>
      ) : null}
      {item.workMode ? (
        <span className="work__tag work__tag_mode">
          <i className={workModeIcons[item.workMode]} aria-hidden />
          {workModeLabels[item.workMode]}
        </span>
      ) : null}
    </div>
  );
}

function WorkCard({
  item,
  showMeta,
}: {
  item: WorkItem;
  showMeta: boolean;
}) {
  const titleLines = item.title.split("\n");
  const yearLines = item.year.split("\n");

  return (
    <div className="work__card">
      <div className="work__data">
        <div>
          {showMeta ? <WorkMeta item={item} /> : null}
          <h1 className="work__title">
            {titleLines.length > 1 ? (
              <>
                {titleLines[0]} <br />
                {titleLines[1]}
              </>
            ) : (
              item.title
            )}
          </h1>
          <h3 className="work__subtitle">{item.subtitle}</h3>
        </div>
        <h2 className="work__year">
          {yearLines.length > 1 ? (
            <>
              {yearLines[0]}
              <br />
              {yearLines[1]}
            </>
          ) : (
            item.year
          )}
        </h2>
      </div>

      <p className="work__description">{item.description}</p>
    </div>
  );
}

export function SectionWork() {
  const [activeTab, setActiveTab] = useState<WorkTab>("experience");
  const items = workTabItems[activeTab];
  const showMeta = activeTab !== "education";

  return (
    <section className="work section" id="experience">
      <h2 className="section__title">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        <div className="work__tabs">
          <button
            type="button"
            className={`work__button ${activeTab === "experience" ? "work-active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience <i className="ri-briefcase-3-line" />
          </button>

          <button
            type="button"
            className={`work__button ${activeTab === "education" ? "work-active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education <i className="ri-graduation-cap-line" />
          </button>

          <button
            type="button"
            className={`work__button ${activeTab === "volunteering" ? "work-active" : ""}`}
            onClick={() => setActiveTab("volunteering")}
          >
            Volunteering <i className="ri-hand-heart-line" />
          </button>
        </div>

        <div className="work__area">
          <div className="work__line" />

          <div
            className="work__content work-active"
            data-content
            id={activeTab}
          >
            {items.length === 0 ? (
              <p className="work__description work__empty">
                No volunteering entries yet.
              </p>
            ) : (
              items.map((item) => (
                <WorkCard
                  key={`${item.title}-${item.subtitle}`}
                  item={item}
                  showMeta={showMeta}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
