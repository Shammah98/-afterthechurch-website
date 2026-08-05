import type { Metadata } from "next";
import StorySubmissionForm from "@/components/StorySubmissionForm";
import { contentWarningOptions, storyCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Share Your Story" };

const expandedSubmissionCategories = [
  ...storyCategories,
  "Health practitioner offering support",
  "Pastor or faith leader offering support",
  "Volunteer or community member offering support"
] as const;

const preparationSteps = [
  {
    title: "Draft without identifying details",
    text: "Begin with what happened and how it affected you. Names, exact locations, workplaces, schools and dates can be added later only if they are necessary."
  },
  {
    title: "Separate your information from another person’s",
    text: "Describe what you experienced or directly observed. Avoid exposing another survivor’s identity, medical information or private disclosure."
  },
  {
    title: "Choose the smallest public identity",
    text: "You can use a chosen name, hide the church or organisation, or publish as fully anonymous. More detail is not automatically more credible."
  },
  {
    title: "Treat media as optional",
    text: "A picture, audio file or video is never required. Check backgrounds, voices, uniforms, signs, metadata and other details that may identify people or places."
  }
];

export default function SharePage() {
  return (
    <>
      <section className="pageIntro narrowIntro">
        <p className="eyebrow">Share or offer support</p>
        <h1>You decide what is published, anonymised or deleted.</h1>
        <p className="lead">
          Survivors can share experiences, while qualified health practitioners,
          pastors, faith leaders and other support providers can submit practical
          guidance or offers of support. Every submission is privately moderated
          before publication. No public account or sign-in is required.
        </p>
      </section>

      <section className="submissionPreparation editorialSection" aria-labelledby="prepare-heading">
        <div className="sectionIntro">
          <p className="eyebrow">Before you enter the form</p>
          <h2 id="prepare-heading">You can prepare privately without committing to publication.</h2>
          <p>
            Nothing is sent until you use the final submit button. Support providers
            should clearly state their role, limits, location and whether they are
            offering general information or direct services. Do not present pastoral
            support as medical, psychological or legal treatment.
          </p>
        </div>

        <div className="reviewDetailGrid">
          {preparationSteps.map((step) => (
            <article key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviewProcess">
        <div className="sectionIntro">
          <p className="eyebrow">What happens after you submit</p>
          <h2>Review is for privacy, safety and credibility.</h2>
          <p>
            A trained member of the AfterTheChurch team reads each submission
            before publication. Offers of professional or pastoral support may
            require verification of identity, qualifications, safeguarding practice
            and any claims about services.
          </p>
        </div>

        <div className="reviewDetailGrid">
          <article><strong>What may be removed automatically</strong><p>Obvious passwords, verification codes, private addresses, phone numbers and hidden file metadata may be removed or blocked.</p></article>
          <article><strong>What requires your approval</strong><p>A change that alters meaning, softens criticism, removes a central allegation or changes how you describe your beliefs should not be made silently.</p></article>
          <article><strong>Professional and pastoral claims</strong><p>Credentials, service descriptions and contact details may be checked before publication. Approval does not constitute endorsement by AfterTheChurch.</p></article>
          <article><strong>Retention and withdrawal</strong><p>You can delete a submission through Manage Your Submissions. Rejected or withdrawn material is scheduled for deletion after 30 days.</p></article>
        </div>
      </section>

      <section className="formSection">
        <StorySubmissionForm
          categories={expandedSubmissionCategories}
          warnings={contentWarningOptions}
        />
      </section>
    </>
  );
}
