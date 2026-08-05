import type { Metadata } from "next";
import StorySubmissionForm from "@/components/StorySubmissionForm";
import { contentWarningOptions, storyCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Share Your Story" };

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
        <p className="eyebrow">Share your story</p>
        <h1>You decide what is published, anonymised or deleted.</h1>
        <p className="lead">
          Review the process before entering any personal information. Story
          submission requires an account so you can later check status, change
          privacy, request corrections, unpublish or delete the material.
        </p>
      </section>

      <section className="submissionPreparation editorialSection" aria-labelledby="prepare-heading">
        <div className="sectionIntro">
          <p className="eyebrow">Before you enter the form</p>
          <h2 id="prepare-heading">You can prepare privately without committing to publication.</h2>
          <p>
            Nothing is sent until you use the final submit button. You can first
            write in a private place, remove identifying details and decide what
            purpose sharing would serve for you.
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
          <h2>Review is for privacy and safety, not to judge your experience.</h2>
          <p>
            A trained member of the AfterTheChurch team reads each submission
            before publication. Reviewers should be trained to identify
            accidental identification, immediate safeguarding concerns,
            defamation risk, graphic material and information belonging to
            another survivor.
          </p>
        </div>

        <div className="reviewDetailGrid">
          <article>
            <strong>What may be removed automatically</strong>
            <p>
              Obvious passwords, verification codes, private addresses, phone
              numbers and hidden file metadata may be removed or blocked.
            </p>
          </article>
          <article>
            <strong>What requires your approval</strong>
            <p>
              A change that alters meaning, softens criticism, removes a central
              allegation or changes how you describe your beliefs should not be
              made silently.
            </p>
          </article>
          <article>
            <strong>Identifiable allegations</strong>
            <p>
              Naming individuals or organisations may require additional factual,
              legal and safety review. Publication is not guaranteed.
            </p>
          </article>
          <article>
            <strong>Retention and withdrawal</strong>
            <p>
              You can delete a submission from your account. Rejected or withdrawn
              material is scheduled for deletion after 30 days by the cleanup job.
            </p>
          </article>
        </div>
      </section>

      <section className="submissionChoice editorialSection">
        <div className="sectionIntro">
          <p className="eyebrow">If you are not ready</p>
          <h2>Not submitting is also a valid choice.</h2>
          <p>
            You can keep a private account for yourself, speak with an independent
            professional, return later or decide that this platform is not the right
            place. Your recovery does not depend on making your experience public.
          </p>
        </div>

        <div className="reviewSteps">
          <article>
            <strong>Pause before naming people</strong>
            <p>Consider safety, evidence, privacy and independent legal advice before publishing identifiable allegations.</p>
          </article>
          <article>
            <strong>Choose what remains unwritten</strong>
            <p>You do not owe the public graphic details, theology, forgiveness, certainty or a complete ending.</p>
          </article>
          <article>
            <strong>Use your own pace</strong>
            <p>A short summary can be enough. You can return to the longer account only when and if you choose.</p>
          </article>
          <article>
            <strong>Keep emergency information out of the form</strong>
            <p>This form is not monitored as a crisis service. Use appropriate local emergency or safeguarding support for immediate danger.</p>
          </article>
        </div>
      </section>

      <section className="formSection">
        <StorySubmissionForm
          categories={storyCategories}
          warnings={contentWarningOptions}
        />
      </section>
    </>
  );
}
