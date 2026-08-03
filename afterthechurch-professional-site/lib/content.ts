import type { ResourceArticle } from "./types";

export const storyCategories = [
  "Leaving a religious community",
  "Spiritual coercion",
  "Faith-healing experiences",
  "Financial pressure",
  "Family relationships",
  "Shunning and exclusion",
  "Campus or student ministries",
  "Leadership abuse",
  "Sexuality and identity",
  "Rebuilding belief",
  "Life after belief",
  "Boundaries and recovery"
] as const;

export const contentWarningOptions = [
  "Spiritual abuse",
  "Coercive control",
  "Threats of punishment or damnation",
  "Financial exploitation",
  "Sexual abuse",
  "Physical violence",
  "Forced confession",
  "Conversion practices",
  "Medical neglect",
  "Faith-healing claims",
  "Family rejection",
  "Shunning",
  "Suicide or self-harm",
  "Graphic religious teachings"
] as const;

export const resources: ResourceArticle[] = [
  {
    slug: "recognising-coercive-control",
    title: "Recognising coercive control in religious settings",
    deck:
      "A practical explanation of how ordinary spiritual language can be used to narrow someone’s choices, relationships and access to information.",
    category: "Understanding what happened",
    readingTime: 8,
    intensity: "moderate",
    warnings: ["Spiritual abuse", "Coercive control", "Threats of punishment or damnation"],
    image: "/images/woman-heart-sunset.jpg",
    imageAlt: "A person making a heart shape with their hands at sunset.",
    overview:
      "Coercive control is usually a pattern rather than one dramatic event. It may involve monitoring, threats, isolation, financial dependence, public correction, forced confession or pressure to treat a leader’s decisions as spiritually binding.",
    keyPoints: [
      "A belief can be freely chosen while the way it is enforced is coercive.",
      "Repeated fear, isolation and punishment can reduce meaningful consent.",
      "You do not have to settle every theological question before assessing whether conduct was harmful.",
      "Keeping notes privately may help you notice patterns without requiring an immediate confrontation."
    ],
    fullSections: [
      {
        heading: "Control often appears ordinary at first",
        paragraphs: [
          "A controlling environment may begin with requests that appear small: attend one more meeting, disclose a private struggle, reduce contact with a sceptical friend, or accept a leader’s interpretation without discussion. Any one request may seem explainable. The pattern matters.",
          "One question you can test privately is whether saying no remains a real option. Notice what happens when someone asks for time, privacy, outside advice or a different interpretation. Respectful communities can tolerate those choices without threatening a person’s belonging, salvation, relationships or safety."
        ]
      },
      {
        heading: "Fear can make agreement look voluntary",
        paragraphs: [
          "People may comply because they fear public humiliation, spiritual punishment, family rejection or losing their entire social world. Compliance under those conditions does not necessarily show free agreement.",
          "You may find it useful to separate the belief itself from the method used to secure obedience. This allows you to examine conduct without being forced to decide immediately what you believe about every doctrine."
        ]
      },
      {
        heading: "You can move slowly",
        paragraphs: [
          "Some survivors leave quickly. Others gather information, protect finances, rebuild outside relationships or speak with a specialist before changing anything. There is no single correct sequence.",
          "Where immediate danger is present, professional safeguarding or emergency support may be needed. Otherwise, smaller private steps can still matter."
        ]
      }
    ],
    practicalOptions: [
      "Write down one incident using only observable facts: what was requested, what happened after you hesitated, and what consequences were mentioned.",
      "Test one low-risk boundary with a person you trust, such as delaying a response or declining to explain a private decision.",
      "Store important documents, contacts and financial information somewhere the group cannot access.",
      "Speak with a counsellor, advocate or legal adviser who is independent of the religious organisation."
    ],
    furtherReading: [
      {
        label: "Questions to ask about consent",
        note: "A short checklist for distinguishing invitation, persuasion and coercion."
      },
      {
        label: "Planning contact with family",
        note: "Options for communicating with relatives when belief and belonging are closely linked."
      }
    ]
  },
  {
    slug: "faith-healing-and-medical-decisions",
    title: "Faith-healing claims and medical decisions",
    deck:
      "Ways to assess healing claims while protecting access to medical care and avoiding pressure to prove faith.",
    category: "Health and safety",
    readingTime: 7,
    intensity: "high",
    warnings: ["Faith-healing claims", "Medical neglect", "Threats of punishment or damnation"],
    image: "/images/friends-sunset.jpg",
    imageAlt: "A group of friends standing together in warm evening light.",
    overview:
      "Spiritual practices and medical treatment do not have to be treated as enemies. Harm can occur when someone is pressured to stop medication, conceal symptoms, reject follow-up care or interpret ongoing illness as personal failure.",
    keyPoints: [
      "A testimony is not the same as a medical diagnosis or verified outcome.",
      "Symptoms returning or continuing should not be hidden to protect a ministry’s reputation.",
      "Seeking medical care does not require anyone to abandon their spiritual beliefs.",
      "No person should be blamed for illness because they lacked faith, confessed incorrectly or felt afraid."
    ],
    fullSections: [
      {
        heading: "Claims should not replace clinical evidence",
        paragraphs: [
          "A person may sincerely report feeling better during a service while still needing examination, testing or follow-up care. Temporary changes in pain, stress or emotion do not establish that an underlying condition has resolved.",
          "A cautious option is to keep appointments and ask qualified clinicians what evidence would confirm improvement. This can be done without publicly challenging anyone or making an immediate statement about faith."
        ]
      },
      {
        heading: "Pressure after a claimed healing",
        paragraphs: [
          "Some people are told not to speak about symptoms, not to use medication, or to repeat positive statements whenever doubt appears. These demands can make it difficult to report deterioration and may create shame when recovery is incomplete.",
          "You may keep private records of symptoms, medication and medical advice. A trusted person outside the ministry can help preserve information when the environment discourages questions."
        ]
      }
    ],
    practicalOptions: [
      "Continue prescribed treatment unless a qualified clinician advises a change.",
      "Ask what objective test or follow-up would confirm the claimed improvement.",
      "Keep copies of medical records outside any church-controlled device or account.",
      "Seek urgent medical help when symptoms are severe, worsening or life-threatening."
    ],
    furtherReading: [
      {
        label: "Preparing for a medical appointment",
        note: "A private list of questions and records you may choose to bring."
      }
    ]
  },
  {
    slug: "financial-pressure-and-giving",
    title: "When giving stops feeling voluntary",
    deck:
      "A grounded look at fundraising, tithing, pledges, debt and spiritual pressure around money.",
    category: "Money and independence",
    readingTime: 6,
    intensity: "moderate",
    warnings: ["Financial exploitation", "Threats of punishment or damnation"],
    image: "/images/group-field.jpg",
    imageAlt: "A group walking along a path through a quiet field.",
    overview:
      "Generosity can be meaningful. It becomes unsafe when refusal brings threats, humiliation, loss of status, promises of guaranteed wealth or pressure to borrow money.",
    keyPoints: [
      "A donation is not freely given when the cost of refusal is fear, shame or exclusion.",
      "Guaranteed financial or healing outcomes deserve careful scrutiny.",
      "You may pause giving without first winning a theological argument.",
      "Independent financial advice can help separate urgent needs from spiritual pressure."
    ],
    fullSections: [
      {
        heading: "Notice the consequence of saying no",
        paragraphs: [
          "A request may be described as voluntary while leaders track who gave, publicly praise donors, connect giving to spiritual protection or imply that hardship follows reluctance. The label matters less than the actual consequences.",
          "Some survivors choose to create a temporary pause before making any large donation. Waiting twenty-four or forty-eight hours can reduce pressure and create space to consult someone independent."
        ]
      },
      {
        heading: "Debt changes the risk",
        paragraphs: [
          "Pressure to borrow, use credit, sell essential property or give money needed for food, housing or healthcare can create long-term harm. A spiritual promise does not remove the practical consequences of debt.",
          "A financial adviser or debt counsellor who is not connected to the organisation may help review options without debating your beliefs."
        ]
      }
    ],
    practicalOptions: [
      "Set a private cooling-off period before any donation above an amount you choose.",
      "Do not share banking passwords, verification codes or unrestricted account access.",
      "Ask for written information about how funds are used.",
      "Review debts and essential expenses with an independent adviser."
    ],
    furtherReading: [
      {
        label: "Documenting financial requests",
        note: "What records may be useful when you need advice later."
      }
    ]
  },
  {
    slug: "supporting-someone-still-inside",
    title: "Supporting someone who is still involved",
    deck:
      "Options for staying connected without escalating fear, demanding an immediate exit or turning every conversation into a debate.",
    category: "Helping someone else",
    readingTime: 5,
    intensity: "gentle",
    warnings: [],
    image: "/images/friends-sunset.jpg",
    imageAlt: "Friends standing with their arms around one another at sunset.",
    overview:
      "Direct attacks on a group or leader can sometimes increase defensiveness and isolation. Consistent, non-controlling contact may preserve an important route to outside support.",
    keyPoints: [
      "Ask about their experience rather than trying to win a debate.",
      "Keep invitations open even when they decline.",
      "Avoid making your support conditional on leaving.",
      "Take threats, stalking, medical danger and violence seriously."
    ],
    fullSections: [
      {
        heading: "Protect the relationship where possible",
        paragraphs: [
          "You might say, “You do not have to agree with me. I care about you, and I am available.” This can reduce the sense that every outside relationship requires choosing sides.",
          "Questions about specific experiences are often easier to answer than broad labels. For example: “What happens when someone disagrees?” or “Can members speak with former members without consequences?”"
        ]
      }
    ],
    practicalOptions: [
      "Maintain ordinary contact about work, food, music or daily life.",
      "Offer practical help without demanding disclosure.",
      "Keep a record of concerning incidents when safety may later need to be assessed.",
      "Contact appropriate safeguarding or emergency services when there is immediate danger."
    ],
    furtherReading: [
      {
        label: "Conversation prompts",
        note: "Non-accusatory questions that leave room for the person’s own observations."
      }
    ]
  }
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug) || null;
}
