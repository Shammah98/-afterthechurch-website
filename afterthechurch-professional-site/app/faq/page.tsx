import type { Metadata } from "next";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

const questions = [
  {
    q: "Do I need an account to read the website?",
    a: "No. Public resources, approved stories, safety information, privacy information and the About page remain available without registration."
  },
  {
    q: "Do I have to use my legal name?",
    a: "No. You may use a chosen name or pseudonym. A story can also be fully anonymous in public."
  },
  {
    q: "Does submitting a story guarantee publication?",
    a: "No. A reviewer checks privacy, consent, safeguarding and publication risk. Serious concerns may prevent or delay publication."
  },
  {
    q: "Can a reviewer change my wording?",
    a: "Obvious private contact details or dangerous technical material may be removed. A change that affects the meaning of your story should be sent to you for approval."
  },
  {
    q: "Can I remove my story later?",
    a: "Yes. From your account, you can temporarily unpublish an approved story or permanently delete the submission and current uploaded media."
  },
  {
    q: "Is AfterTheChurch therapy or legal advice?",
    a: "No. It is an educational and storytelling platform. Use qualified and independent professional services when needed."
  },
  {
    q: "Does Quick Exit clear my history?",
    a: "No. It immediately leaves the website, but browser history and other records may remain."
  }
];

export default function FaqPage() {
  return (
    <section className="narrowPage prosePage">
      <p className="eyebrow">Frequently asked questions</p>
      <h1>Clear answers before you provide information.</h1>

      <div className="faqList">
        {questions.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
