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

      <section className="formSection">
        <StorySubmissionForm
          categories={expandedSubmissionCategories}
          warnings={contentWarningOptions}
        />
      </section>
    </>
  );
}
