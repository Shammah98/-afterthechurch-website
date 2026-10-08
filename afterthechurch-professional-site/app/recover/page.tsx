"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw, ShieldCheck } from "lucide-react";
import "./recover.css";

type Question = {
  id: string;
  label: string;
  group: "control" | "isolation" | "impact" | "safety";
  highPriority?: boolean;
};

const stages: { title: string; description: string; questions: Question[] }[] = [
  {
    title: "What was the environment like?",
    description: "Think about the religious group, leadership or community involved. You can skip anything.",
    questions: [
      { id: "disagreement", label: "I felt unable to question leaders or beliefs without fear of consequences.", group: "control" },
      { id: "boundaries", label: "I was made to feel guilty, sinful or disloyal for setting personal boundaries.", group: "control" },
      { id: "isolation", label: "I was discouraged from maintaining relationships or seeking advice outside the group.", group: "isolation" }
    ]
  },
  {
    title: "What impact has it had?",
    description: "There is no expected reaction. These questions are about how the experience affected you.",
    questions: [
      { id: "financial", label: "I felt pressured to give money, time or labour beyond what I freely wanted or could afford.", group: "control" },
      { id: "distress", label: "I experience fear, shame, anxiety or unwanted memories linked to what happened.", group: "impact" },
      { id: "trust", label: "It has become harder to trust my decisions, boundaries or sense of identity.", group: "impact" }
    ]
  },
  {
    title: "What about your safety now?",
    description: "Some questions mention medical neglect and violence. Skip them if you prefer.",
    questions: [
      { id: "relationships", label: "I fear being excluded, threatened or losing important relationships if I speak openly.", group: "isolation" },
      { id: "medical", label: "I was pressured to avoid necessary medical care or depend on promised faith healing instead.", group: "safety", highPriority: true },
      { id: "violence", label: "I experienced threats, unwanted sexual contact or physical violence connected to the group.", group: "safety", highPriority: true }
    ]
  }
];

const questions = stages.flatMap((stage) => stage.questions);
const choices = [
  { value: 0, label: "Never / not my experience" },
  { value: 1, label: "Sometimes" },
  { value: 2, label: "Often" },
  { value: -1, label: "Prefer not to answer" }
] as const;

const guidance = [
  {
    id: "control",
    title: "Rebuild the right to make your own choices",
    text: "Start with one small boundary that you choose. You do not need to defend it to a former leader or congregation.",
    href: "/resources/recognising-coercive-control",
    action: "Understand coercive control"
  },
  {
    id: "isolation",
    title: "Make room for relationships outside the group",
    text: "Consider one person who will listen without reporting back or pressuring you. Reconnection can happen slowly.",
    href: "/safety",
    action: "Explore safer next steps"
  },
  {
    id: "impact",
    title: "Take your emotional response seriously",
    text: "You may find it helpful to speak with an independent, trauma-informed professional who respects your beliefs or lack of belief.",
    href: "/resources",
    action: "Read recovery resources"
  },
  {
    id: "safety",
    title: "Put health and personal safety first",
    text: "If medical decisions, violence, sexual boundaries or threats are involved, seek independent professional or specialist advice. You do not have to confront the group first.",
    href: "/safety",
    action: "Review safety information"
  }
];

export default function RecoverPage() {
  const [stage, setStage] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [currentDanger, setCurrentDanger] = useState<"yes" | "no" | "skip">("skip");
  const [complete, setComplete] = useState(false);

  const answered = questions.filter((question) => responses[question.id] !== undefined && responses[question.id] >= 0);
  const score = answered.length
    ? Math.round((answered.reduce((total, question) => total + responses[question.id], 0) / (answered.length * 2)) * 100)
    : null;
  const priority = currentDanger === "yes" || questions.some((question) => question.highPriority && (responses[question.id] || 0) > 0);
  const identifiedGroups = new Set(questions.filter((question) => (responses[question.id] || 0) > 0).map((question) => question.group));
  const nextSteps = guidance.filter((item) => identifiedGroups.has(item.id));
  const signalText = score === null ? "No answers provided" : score < 34 ? "Fewer reported signals" : score < 67 ? "Several reported signals" : "Many reported signals";

  function reset() {
    setStage(0);
    setResponses({});
    setCurrentDanger("skip");
    setComplete(false);
  }

  return (
    <div className="recoverPage">
      <div className="recoverTop">
        <Link href="/" className="recoverBack"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
        <p className="recoverWordmark">RECOVER<span>.</span></p>
        <p className="eyebrow">A self-guided reflection space</p>
        <h1>Understand the harm. Find your next step.</h1>
        <p className="recoverIntro">Religious harm can affect more than belief. It may shape how safe you feel, how you relate to others and how much you trust yourself. You can explore these experiences without having to label yourself or tell anyone your story.</p>
        <div className="recoverPrivacy"><ShieldCheck size={19} aria-hidden="true" /><p><strong>Private by design:</strong> your answers remain on this page in your browser only. They are not submitted, saved to an account or sent to AfterTheChurch. Reloading or leaving clears them.</p></div>
      </div>

      {!complete ? (
        <section className="recoverAssessment" aria-labelledby="recover-step-title">
          <div className="recoverStepHeader">
            <span>Step {stage + 1} of {stages.length}</span>
            <span>About 3 minutes · every answer optional</span>
          </div>
          <div className="recoverProgress" role="progressbar" aria-label="Reflection progress" aria-valuemin={0} aria-valuemax={3} aria-valuenow={stage + 1}>
            <span style={{ width: ((stage + 1) / stages.length * 100) + "%" }} />
          </div>
          <h2 id="recover-step-title">{stages[stage].title}</h2>
          <p className="recoverStepHelp">{stages[stage].description}</p>
          <div className="recoverQuestions">
            {stages[stage].questions.map((question, index) => (
              <fieldset key={question.id} className="recoverQuestion">
                <legend><span>{stage * 3 + index + 1}.</span> {question.label}</legend>
                <div className="recoverOptions">
                  {choices.map((choice) => (
                    <label className={responses[question.id] === choice.value ? "recoverOption selected" : "recoverOption"} key={choice.value}>
                      <input
                        type="radio"
                        name={question.id}
                        value={choice.value}
                        checked={responses[question.id] === choice.value}
                        onChange={() => setResponses((before) => ({ ...before, [question.id]: choice.value }))}
                      />
                      <span>{choice.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          {stage === stages.length - 1 && (
            <fieldset className="recoverDanger">
              <legend>Do you feel in immediate danger or under an active threat now?</legend>
              <div className="recoverOptions">
                {([
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["skip", "Prefer not to answer"]
                ] as const).map(([value, label]) => (
                  <label className={currentDanger === value ? "recoverOption selected" : "recoverOption"} key={value}>
                    <input type="radio" name="immediate-danger" value={value} checked={currentDanger === value} onChange={() => setCurrentDanger(value)} />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              {currentDanger === "yes" && <p className="recoverSafetyPrompt">If you are in immediate danger, contact local emergency services or a trusted specialist now. <Link href="/safety">See safety guidance</Link>.</p>}
            </fieldset>
          )}
          <div className="recoverControls">
            <button type="button" className="recoverPrev" disabled={stage === 0} onClick={() => setStage((value) => Math.max(0, value - 1))}>Previous</button>
            <button type="button" className="button primary" onClick={() => stage === stages.length - 1 ? setComplete(true) : setStage((value) => value + 1)}>
              {stage === stages.length - 1 ? "View my reflection" : "Continue"} <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </section>
      ) : (
        <section className="recoverResults" aria-labelledby="recover-results-title">
          <p className="eyebrow">Your private reflection</p>
          <h2 id="recover-results-title">What your answers may be telling you</h2>
          <p className="recoverResultsIntro">These are patterns to explore, not a diagnosis or a judgment about your experience. Even one concerning event can matter, regardless of a total score.</p>

          <div className="recoverScore">
            <div className="recoverScoreTop">
              <div>
                <span>Self-reported harm signals</span>
                <h3>{signalText}</h3>
              </div>
              <strong>{score === null ? "—" : score + " / 100"}</strong>
            </div>
            <div className="recoverScoreTrack" role="img" aria-label={score === null ? "No reflection score" : "Reflection index " + score + " out of 100"}><span style={{ width: (score ?? 0) + "%" }} /></div>
            <p>{answered.length} of {questions.length} questions included. This descriptive index uses only the answers you selected, with Never = 0, Sometimes = 1 and Often = 2. It is not a validated clinical scale, a probability of harm or a measure of how serious your experience was.</p>
          </div>

          {priority && (
            <div className="recoverPriority">
              <h3>Safety deserves particular attention</h3>
              <p>You indicated an immediate threat or an experience involving violence, sexual boundaries or healthcare pressure. A low overall index should not minimise this. Consider independent medical, safeguarding or specialist support. In immediate danger, contact local emergency services.</p>
              <Link href="/safety">Open safety guidance <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          )}
          <div className="recoverNextSteps">
            <h3>{nextSteps.length ? "Possible next steps for you" : "Choose a next step at your own pace"}</h3>
            <div className="recoverGuidanceGrid">
              {(nextSteps.length ? nextSteps : [guidance[2], guidance[1]]).map((item) => (
                <article key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <Link href={item.href}>{item.action} <ArrowRight size={15} aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
          <div className="recoverControls">
            <button type="button" className="recoverPrev" onClick={() => { setComplete(false); setStage(2); }}>Review answers</button>
            <button type="button" className="button secondary" onClick={reset}><RotateCcw size={16} aria-hidden="true" /> Clear and start again</button>
          </div>
        </section>
      )}

      <section className="recoverAfter" aria-labelledby="recover-after-title">
        <p className="eyebrow">Beyond this reflection</p>
        <h2 id="recover-after-title">You decide what recovery looks like.</h2>
        <div className="recoverAfterLinks">
          <Link href="/stories">Read survivor stories <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/resources">Understand what happened <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link href="/safety">Explore independent support <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <details className="recoverSources">
          <summary>About the evidence and limitations</summary>
          <p>RECOVER is an original educational reflection tool informed by research on spiritual abuse and spiritual harm. It is not the validated Spiritual Harm and Abuse Scale or Spiritual Safety Scale, and its index has not been psychometrically validated. Do not use it to decide whether abuse occurred, to diagnose trauma or to determine whether a situation is safe.</p>
          <p>Further reading: <a href="https://doi.org/10.1111/jssr.12792" target="_blank" rel="noopener noreferrer">Koch &amp; Edstrom (2022), Spiritual Harm and Abuse Scale</a>; <a href="https://doi.org/10.1007/s10943-026-02734-y" target="_blank" rel="noopener noreferrer">Chong &amp; Tortez (2026), Spiritual Safety Scale</a>.</p>
        </details>
      </section>
    </div>
  );
}
