import type { Metadata } from "next";
import StorySubmissionForm from "@/components/StorySubmissionForm";
import { contentWarningOptions, storyCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Share Your Story" };

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

      <section className="formSection">
        <StorySubmissionForm
          categories={storyCategories}
          warnings={contentWarningOptions}
        />
      </section>
    </>
  );
}
