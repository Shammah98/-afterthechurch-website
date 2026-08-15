import type { ResourceArticle } from "./types";
import { reportingGraphicDataUri } from "./reporting-graphic";

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
    slug: "preparing-to-report-harm-in-a-church-charity",
    title: "Preparing to report harm in a church charity",
    deck:
      "A practical guide to preparing evidence, protecting yourself and understanding what the Charity Commission can and cannot do — especially if you are still attending the organisation.",
    category: "Reporting and safeguarding",
    readingTime: 14,
    intensity: "moderate",
    warnings: ["Spiritual abuse", "Coercive control", "Sexual abuse", "Shunning"],
    image: "/images/coercive.png",
    imageAlt: "A person considering how to document and report harmful conduct safely.",
    illustration: {
      src: reportingGraphicDataUri,
      alt: "Illustrated harm-reduction graphic about reporting, support, consequences and community safety.",
      caption:
        "Reporting and support are not the same thing. Before making a report, think about safety, consequences, evidence and what support will still be available afterwards.",
      credit:
        "Illustration supplied by the site editor; associated with the Mandatory Reporting is Not Neutral project and Shannon Perez-Darby. Attribution does not replace any permission required for republication."
    },
    overview:
      "Reporting harm connected to a church can feel very different from making an ordinary complaint. You may still worship there, have friends or family inside, depend on the community, or fear that leaders will discover what you are doing. If the church is a registered charity in England or Wales, the Charity Commission may be relevant when the concern involves serious harm, misconduct, mismanagement or failures in how trustees protect people. The Commission is not a general complaints service and it does not decide whether an individual allegation of abuse is true. Its focus is how the charity is run and whether trustees have met their duties. Preparing carefully can help you protect yourself, organise the evidence and explain why the concern is regulatory rather than simply a personal disagreement.",
    keyPoints: [
      "Check that the organisation is a registered charity and that the issue falls within the Charity Commission's role.",
      "If you are still attending, think about personal, digital, financial and social safety before confronting anyone or announcing that you intend to report.",
      "Build a simple timeline: what happened, when, who was present, what you reported internally and what happened afterwards.",
      "Preserve evidence lawfully and store it somewhere the organisation cannot access.",
      "Explain the wider governance or safeguarding issue, not only how upsetting the experience was.",
      "If you did not complain internally because you feared retaliation or because leaders were part of the concern, explain that clearly.",
      "Criminal conduct, immediate danger and child or adult safeguarding concerns may need to be reported to police, social services or another specialist authority as well.",
      "Avoid sending unnecessary sensitive personal information. The Commission advises people not to send medical records unless they are essential to the concern.",
      "The Commission may record a concern without opening a full investigation, and complex cases can take time.",
      "If you work or volunteer for the charity, the Charity Commission also has a whistleblowing route for serious wrongdoing."
    ],
    fullSections: [
      {
        heading: "Start by asking whether this is a regulatory concern",
        paragraphs: [
          "A painful experience is important, but the Charity Commission does not investigate every dispute involving a charity. Its current guidance says concerns are more likely to fall within its role when they involve serious harm to people who come into contact with the charity, significant illegality, misuse of charitable resources, misconduct or mismanagement, or conduct that seriously damages public trust in charities.",
          "For safeguarding concerns, the Commission looks mainly at what trustees did: whether appropriate policies existed, whether concerns were handled properly, whether people were protected and whether relevant authorities were contacted. It does not act as the body that decides whether an individual allegation of abuse is true."
        ]
      },
      {
        heading: "If you are still attending, safety comes before disclosure",
        paragraphs: [
          "You do not have to confront leaders before you are ready. If the organisation has a history of shunning, public discipline, gossip, monitoring or retaliation, consider what could happen if your concern becomes known. Think about housing, employment, money, transport, medication, family relationships and access to people outside the church.",
          "Digital safety matters too. Use an account and device that other members cannot access. Review shared passwords, cloud storage, location sharing, browser synchronisation and recovery email addresses. Evidence is useful only if collecting or storing it does not create a new risk."
        ]
      },
      {
        heading: "Create a factual timeline before trying to tell the whole story",
        paragraphs: [
          "Traumatic or confusing experiences are rarely remembered like a neat report. Start with a basic chronology instead. Record dates or approximate dates, events, people present, exact words where you remember them, what action followed, and whether the behaviour repeated.",
          "Separate observation from interpretation. 'A leader told me in front of the group that I was rebellious after I raised a complaint' is an observable event. 'They wanted to destroy me' may describe how it felt, but it is harder for a regulator to assess. Both matter; keeping them distinct makes the report easier to understand."
        ]
      },
      {
        heading: "Preserve evidence without turning your life into an investigation",
        paragraphs: [
          "Useful evidence can include emails, messages, written complaints, safeguarding policies, meeting notes, financial requests, public statements, responses from leaders and reports already made to other agencies. Keep original files where possible and make a separate working copy for organising them.",
          "Do not obtain evidence through illegal access, impersonation or risky confrontation. You also do not need to collect everything before asking for advice. A short, well-organised set of documents can be more useful than hundreds of unrelated screenshots."
        ]
      },
      {
        heading: "Explain why the issue is bigger than a personal disagreement",
        paragraphs: [
          "A regulator needs to understand the connection between your experience and the charity's governance. Ask what the trustees knew, what systems were supposed to protect people, whether complaints were discouraged, whether leaders protected one another, whether private information was misused, or whether similar concerns appear to have affected other people.",
          "You do not need to prove a conspiracy or label the organisation a cult. Describe the behaviour and the institutional response. A pattern of ignored complaints, retaliation, inadequate safeguarding, financial pressure or leaders operating without meaningful accountability can be explained without making claims that go beyond the evidence."
        ]
      },
      {
        heading: "Internal reporting is not always the safest first step",
        paragraphs: [
          "The Charity Commission asks whether you contacted the charity and what happened. If you did not, it also allows you to explain why. If the people who would receive the complaint are part of the concern, or if earlier complaints resulted in humiliation, retaliation or exposure, say so plainly.",
          "Where an internal route appears reasonably safe, a written complaint can create a useful record. Keep a copy, ask for acknowledgement and note what response you receive. Do not feel pressured to attend a closed meeting alone if you believe the setting is unsafe; consider asking for written communication or an independent supporter."
        ]
      },
      {
        heading: "Some concerns need another authority as well",
        paragraphs: [
          "The Charity Commission is not the police, a court, a medical regulator or a local safeguarding authority. If the concern involves alleged crime, immediate danger, sexual assault, abuse of a child, serious threats, fraud or another specialist issue, a different authority may have the primary investigative role.",
          "Parallel reporting is not duplication when the organisations have different responsibilities. The Charity Commission may consider how trustees managed the risk while police or safeguarding agencies consider the underlying conduct."
        ]
      },
      {
        heading: "Protect privacy and expect a process rather than an instant resolution",
        paragraphs: [
          "The Commission asks reporters to avoid unnecessary personal data and specifically warns against sending sensitive information such as medical records unless it is essential. Redact information that does not help establish the concern, especially details about other survivors who have not consented to being identified.",
          "The Commission says it will try to protect a reporter's identity, but evidence or allegations can sometimes make the source obvious and information may sometimes have to be shared by law. Plan around that possibility. It may record a concern without taking further action, and where it does investigate, the process can take time."
        ]
      }
    ],
    practicalOptions: [
      "Check the Charity Commission register and save the charity's exact legal name and registration number.",
      "Write a one-page chronology before writing a long narrative.",
      "Create a separate document called 'Why this is a serious regulatory concern' and connect the events to safeguarding, trustee oversight, misconduct or mismanagement.",
      "Store evidence outside church-controlled devices, accounts or cloud storage.",
      "Keep copies of complaints you made internally and the responses you received.",
      "If you have not complained internally, write down the reason, including any fear of retaliation or conflict of interest.",
      "Remove unnecessary medical, sexual, family or identifying details from evidence before sending it unless they are genuinely needed.",
      "List any other organisations already contacted and the outcome so far.",
      "If you are a worker or volunteer, read the Charity Commission's whistleblowing guidance before choosing a reporting route.",
      "If you are in immediate danger or a child or adult at risk may be unsafe, use the appropriate emergency or safeguarding route rather than waiting for a charity-regulation response."
    ],
    furtherReading: [
      {
        label: "Charity Commission — Raising a concern with the Charity Commission (CC47)",
        note:
          "Current guidance for England and Wales on what the Commission deals with, what it does not investigate, what information to provide and how concerns are prioritised.",
        url: "https://www.gov.uk/government/publications/raising-a-concern-with-the-charity-commission-cc47/raising-a-concern-with-the-charity-commission-cc47"
      },
      {
        label: "Charity Commission — Safeguarding and protecting people for charities and trustees",
        note:
          "Explains trustee responsibilities for protecting beneficiaries, staff, volunteers and other people who come into contact with a charity.",
        url: "https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees"
      },
      {
        label: "Charity Commission — Report serious wrongdoing at a charity as a worker or volunteer",
        note:
          "Guidance on the whistleblowing route for serious wrongdoing and the limits of the Commission's role.",
        url: "https://www.gov.uk/guidance/report-serious-wrongdoing-at-a-charity-as-a-worker-or-volunteer"
      }
    ]
  },
  {
    slug: "recognising-coercive-control",
    title: "Recognising coercive control in religious settings",
    deck:
      "A plain-language, research-informed guide to recognising when spiritual authority, fear and belonging begin to narrow a person's real freedom.",
    category: "Understanding what happened",
    readingTime: 13,
    intensity: "moderate",
    warnings: ["Spiritual abuse", "Coercive control", "Threats of punishment or damnation", "Forced confession", "Shunning"],
    image: "/images/coercive.png",
    imageAlt: "An illustration representing coercive control by religious authority.",
    overview:
      "A strict church is not automatically an abusive church. The question is what happens when you disagree, say no, ask for privacy, seek outside advice or try to leave. Coercive control is best understood as a pattern: repeated behaviour that makes a person more dependent, more afraid of consequences and less able to make ordinary choices freely. In religious settings, the pressure can feel especially powerful when a leader's wishes are presented as God's wishes, private information becomes leverage, or belonging is tied to salvation, family, housing, work or identity.",
    keyPoints: [
      "Look for a pattern rather than one difficult sermon or disagreement.",
      "The issue is not whether a community has rules; it is whether meaningful refusal remains possible.",
      "Fear of shunning, damnation, public humiliation or losing an entire social world can make compliance look voluntary.",
      "Private confession becomes unsafe when information is demanded, shared without consent or later used to control behaviour.",
      "Time, money, relationships, health decisions and information can all become parts of the same control system.",
      "People may stay because leaving is costly or frightening, not because they are weak or unaware.",
      "Direct confrontation is not always the safest first step when retaliation is possible.",
      "Recovery does not require a person to keep, change or abandon their faith. The central goal is restored agency and safety."
    ],
    fullSections: [
      {
        heading: "Begin with what happens after you say no",
        paragraphs: [
          "All communities influence their members. Influence becomes more concerning when disagreement is followed by punishment, threats, humiliation, surveillance, isolation or loss of essential relationships. The pattern matters more than the label.",
          "A useful test is simple: can you ask questions, take time to think, talk to people outside the group and refuse a request without disproportionate consequences? If the answer is repeatedly no, the environment deserves closer examination."
        ]
      },
      {
        heading: "Sacred authority can make ordinary pressure feel absolute",
        paragraphs: [
          "A request from a pastor may carry more weight than a request from an ordinary manager or friend. If a leader is presented as uniquely anointed, spiritually parental or able to speak directly for God, disagreement can feel like rebellion against God rather than disagreement with another human being.",
          "Concern increases when leaders interpret every objection themselves: doubt becomes demonic influence, criticism becomes bitterness, leaving becomes betrayal, and the leader's own conduct becomes difficult to question. A healthy authority structure allows criticism to be heard without redefining the critic as the problem."
        ]
      },
      {
        heading: "Isolation can be social, informational and emotional",
        paragraphs: [
          "Isolation does not always mean someone physically stops you seeing other people. It can happen when outsiders are described as dangerous, former members are treated as contaminated, or criticism is dismissed in advance as persecution.",
          "When the church also provides friendship, work, housing, study, childcare, marriage prospects or family belonging, leaving can mean losing several parts of life at once. That helps explain why people may recognise harm and still remain involved for a long time."
        ]
      },
      {
        heading: "Confession, accountability and care need boundaries",
        paragraphs: [
          "Pastoral care can be meaningful when disclosure is voluntary, confidentiality is clear and the person can stop. It becomes coercive when intimate information is demanded, circulated among leaders, used in sermons or later brought up to enforce obedience.",
          "Information about sexuality, mental health, money, immigration, relationships or family conflict can create enormous leverage. A safer organisation explains who can access information, what the limits of confidentiality are and how consent can be withdrawn."
        ]
      },
      {
        heading: "Control can reach money, time, health and relationships",
        paragraphs: [
          "Repeated pressure to donate, volunteer, attend meetings, avoid certain people, reject treatment or obtain permission for ordinary decisions can reduce independence even when each request appears small by itself.",
          "The legal offence of controlling or coercive behaviour in England and Wales applies to personally connected intimate partners or family members, not automatically to churches. The Home Office framework is therefore useful for understanding patterns and evidence, but it should not be presented as proof that a religious leader has committed that specific offence. Other laws or safeguarding duties may still be relevant."
        ]
      },
      {
        heading: "Distance can change how an experience makes sense",
        paragraphs: [
          "People sometimes describe an event as discipline, sacrifice or spiritual correction while they are inside a group and understand it differently later. That change in language does not automatically make the later account unreliable. Patterns are often easier to see after fear and dependency reduce.",
          "After leaving, people may experience grief, relief, shame, anger, anxiety, mistrust or confusion about faith. These reactions vary and should not be turned into a diagnosis without proper assessment. Recovery can include rebuilding ordinary routines, relationships and confidence in making decisions."
        ]
      }
    ],
    practicalOptions: [
      "Write down one incident using observable facts: what was requested, what happened when you hesitated and what consequence followed.",
      "Create a private timeline only if storing it will not create risk.",
      "Review shared accounts, devices, location sharing and password recovery settings.",
      "Identify one person or professional who is genuinely independent of the organisation.",
      "Keep access to identification, medication, money, transport and important contact details.",
      "Ask for written safeguarding, confidentiality, complaints and financial policies.",
      "Do not test a boundary when retaliation, violence, homelessness or medical danger is possible.",
      "Allow your beliefs to remain unresolved while you work on safety and independence."
    ],
    furtherReading: [
      {
        label: "Home Office — Controlling or coercive behaviour: statutory guidance framework",
        note:
          "Official England and Wales guidance explaining repeated patterns, serious effects, evidence and support. Its criminal-law scope is intimate partners and family relationships, so it should not be automatically applied to church leadership.",
        url: "https://www.gov.uk/government/publications/controlling-or-coercive-behaviour-statutory-guidance-framework"
      },
      {
        label: "Mulvihill, Aghtaie, Matolcsi and Hester (2023)",
        note:
          "Research examining spiritual abuse and religious coercive control and the way doctrine can interact with wider systems of control.",
        url: "https://doi.org/10.1177/17488958221112057"
      },
      {
        label: "Björkmark, Koskinen and Koirikivi — Living Between Two Different Worlds",
        note:
          "Qualitative research on the social, emotional and identity consequences of leaving a high-cost religious group.",
        url: "https://doi.org/10.1007/s10943-021-01397-1"
      }
    ]
  },
  {
    slug: "faith-healing-and-medical-decisions",
    title: "Faith-healing claims and medical decisions",
    deck:
      "A careful guide to holding on to hope without turning a testimony into medical proof or putting necessary treatment at risk.",
    category: "Health and safety",
    readingTime: 12,
    intensity: "high",
    warnings: ["Faith-healing claims", "Medical neglect", "Threats of punishment or damnation", "Spiritual abuse"],
    image: "/images/laid.jpg",
    imageAlt: "A public faith-healing service where a minister prays for a participant.",
    overview:
      "Prayer, medicine and hope do not have to be enemies. A person can sincerely feel less pain, move more easily or experience deep emotional relief during prayer. That experience can matter without proving that an underlying disease has been cured. The safest approach separates what the person felt from what has been medically verified. A healing claim becomes dangerous when someone is pressured to stop medication, avoid tests, hide returning symptoms or blame themselves when illness continues.",
    keyPoints: [
      "A sincere testimony can describe a real experience without proving that a disease was cured.",
      "Symptom relief and objective change in an underlying condition are not the same thing.",
      "Strong verification starts with a clear diagnosis before the claimed healing and appropriate testing afterwards.",
      "Follow-up matters because some symptoms naturally fluctuate or return after an emotionally intense event.",
      "Do not stop prescribed medicine because of a healing claim without speaking to the clinician responsible for that treatment.",
      "Ongoing illness does not prove weak faith, hidden sin or spiritual failure.",
      "A ministry should be able to record uncertainty and unsuccessful outcomes, not only success stories.",
      "Children and dependent adults require particular protection because another person's belief should not remove necessary medical care."
    ],
    fullSections: [
      {
        heading: "Faith can be respected without asking anyone to deny reality",
        paragraphs: [
          "For many people, prayer offers comfort, meaning, courage and community during illness. Respecting that does not require clinicians or families to accept an unverified medical claim. Good care can make room for spiritual meaning while still using diagnosis, monitoring and evidence-based treatment.",
          "The problem begins when a spiritual authority says that treatment shows unbelief, medication blocks healing, or acknowledging symptoms will cancel a miracle. Those claims can make honest medical follow-up feel spiritually dangerous."
        ]
      },
      {
        heading: "Separate experience, symptom and diagnosis",
        paragraphs: [
          "A person may genuinely experience less pain, improved movement, reduced fear or more energy. Symptoms are what a person feels or notices. A diagnosis is a clinical explanation supported by history, examination and testing. One can change without the other.",
          "This distinction is not meant to dismiss relief. It protects the person from making a high-risk decision based on evidence that does not establish what they were told it establishes."
        ]
      },
      {
        heading: "Why an immediate change can feel dramatic",
        paragraphs: [
          "Healing services often combine expectation, music, focused attention, social support, touch, adrenaline and the authority of a trusted leader. These conditions can change pain, effort, movement and the way bodily sensations are experienced. Placebo research also shows that context and expectation can affect some patient-reported symptoms.",
          "That does not mean someone is pretending. It means an immediate improvement can be real while the cause remains uncertain and an underlying condition may still need treatment."
        ]
      },
      {
        heading: "Responsible verification takes time",
        paragraphs: [
          "Ask what exact condition was diagnosed, what tests confirmed it, what treatment had already been used, what changed after prayer and what objective test changed afterwards. The right evidence depends on the condition.",
          "A responsible report also asks how long the improvement lasted and whether medication, surgery, physiotherapy or other treatment continued. Independent clinical review is stronger than verification carried out only by people connected to the ministry making the claim."
        ]
      },
      {
        heading: "Medication decisions belong with qualified healthcare professionals",
        paragraphs: [
          "Some medicines can cause serious problems if stopped abruptly. NHS guidance repeatedly advises people not to stop prescribed medication without first speaking to the relevant doctor or clinician. The exact risk depends on the medicine and condition.",
          "If you believe you have been healed, you can still ask for medical reassessment. Verification does not insult faith. It can protect you from withdrawal effects, relapse or an untreated condition."
        ]
      },
      {
        heading: "When symptoms return, shame should not become a second injury",
        paragraphs: [
          "People who have testified publicly may feel trapped when symptoms return. They may fear embarrassing the ministry, disappointing family or admitting that the outcome was uncertain. Some are told they lost the healing through fear or negative confession.",
          "Returning symptoms need care, not blame. Recovery after a harmful healing experience may involve medical reassessment, obtaining records, therapy, financial advice and deciding what kind of spiritual support still feels safe."
        ]
      }
    ],
    practicalOptions: [
      "Continue prescribed treatment unless the clinician responsible for it advises a change.",
      "Ask what objective evidence would confirm improvement in your specific condition.",
      "Keep copies of diagnosis, test results, medication lists and follow-up plans.",
      "Tell a clinician if symptoms return or worsen, even if you previously gave a public testimony.",
      "Do not perform painful or risky movements to prove a healing in front of an audience.",
      "Do not release private medical records under emotional pressure.",
      "For a child or dependent adult, obtain appropriate medical assessment without delaying necessary treatment for a spiritual outcome.",
      "Choose spiritual support that allows honest reporting of symptoms and uncertainty."
    ],
    furtherReading: [
      {
        label: "NHS — Herbal medicines and complementary therapies",
        note:
          "Current NHS guidance includes the general safety advice not to stop prescribed medicines without first talking to a doctor.",
        url: "https://www.nhs.uk/tests-and-treatments/herbal-medicines-and-complementary-therapies/"
      },
      {
        label: "Hróbjartsson and Gøtzsche — Placebo interventions for all clinical conditions",
        note:
          "Cochrane review of placebo effects across clinical conditions, including the difference between patient-reported and objective outcomes.",
        url: "https://doi.org/10.1002/14651858.CD003974.pub3"
      },
      {
        label: "Benson et al. — Study of the Therapeutic Effects of Intercessory Prayer",
        note:
          "Randomised multicentre trial in coronary-artery bypass patients; intercessory prayer did not improve uncomplicated recovery.",
        url: "https://doi.org/10.1016/j.ahj.2005.05.028"
      },
      {
        label: "Asser and Swan — Child fatalities from religion-motivated medical neglect",
        note:
          "A retrospective review examining child deaths in which medical care was withheld because of reliance on faith healing.",
        url: "https://doi.org/10.1542/peds.101.4.625"
      }
    ]
  },
  {
    slug: "financial-pressure-and-giving",
    title: "When giving stops feeling voluntary",
    deck:
      "A practical guide to telling the difference between generosity and financial pressure, especially when faith, fear or belonging are being used to influence the decision.",
    category: "Money and independence",
    readingTime: 11,
    intensity: "moderate",
    warnings: ["Financial exploitation", "Coercive control", "Threats of punishment or damnation", "Spiritual abuse"],
    image: "/images/prosperity.jpg",
    imageAlt: "Money being exchanged during a discussion about religious giving.",
    overview:
      "Giving can be joyful, meaningful and central to a person's faith. It becomes unsafe when saying no brings spiritual fear, public shame, repeated pressure or financial danger. The key question is not whether a church teaches tithing or asks for donations. Ask whether you receive clear information, have time to decide, can protect food, housing, healthcare and dependants, and can decline without being treated as disloyal or spiritually defective.",
    keyPoints: [
      "Fundraising is not automatically coercive; the method and consequences of refusal matter.",
      "Promises that money will guarantee healing, wealth, promotion or protection should be treated as high-risk claims.",
      "Pressure to borrow, use credit or sacrifice essential needs creates a serious risk of harm.",
      "Public comparison, repeated appeals and manufactured urgency can make a donation feel less voluntary.",
      "A donor should be able to ask where money goes and who oversees it without being shamed.",
      "UK fundraising standards prohibit undue pressure and require particular care where a person may be vulnerable.",
      "Christian traditions disagree about tithing, but New Testament giving is repeatedly connected with willingness and capacity rather than compulsion.",
      "Pausing donations can be a practical safety step without requiring an immediate decision about faith."
    ],
    fullSections: [
      {
        heading: "Generosity and coercion can exist in the same room",
        paragraphs: [
          "A church can do useful work and still use harmful fundraising methods. A donor can believe deeply in generosity and still be pressured. The existence of sincere faith does not settle whether a particular request was freely chosen.",
          "Look at what happens after hesitation. Is there space to think, speak with family and check finances, or is delay described as disobedience? Can a person give nothing without being singled out?"
        ]
      },
      {
        heading: "Spiritual promises can turn money into a loyalty test",
        paragraphs: [
          "A request becomes heavier when it is presented as a direct instruction from God. Some people are told that a specific gift will unlock healing, wealth, marriage, immigration success or protection from harm.",
          "No fundraiser can responsibly guarantee those outcomes. A safe religious community can teach its beliefs about giving without claiming private access to God's instructions for another person's bank account."
        ]
      },
      {
        heading: "Urgency and public pressure change the decision",
        paragraphs: [
          "People give differently when they are watched, when amounts are announced or when it is difficult to leave a face-to-face request. Fundraising research shows that social pressure and public recognition can affect donation behaviour.",
          "Suggested amounts and public examples are not always wrong, but they become concerning when zero is not treated as an acceptable choice or when donors are made to fear humiliation, exclusion or spiritual consequences."
        ]
      },
      {
        heading: "Essential needs come before proving faith",
        paragraphs: [
          "Pressure to borrow, sell essential property or give money needed for rent, food, healthcare, education or dependants can create long-term harm. A donation should not predictably place a household's basic welfare at risk.",
          "If giving has contributed to debt or arrears, pausing donations and speaking to an independent debt adviser can be a responsible first step. You do not need to resolve every theological question before stabilising your finances."
        ]
      },
      {
        heading: "Transparency lets trust be tested",
        paragraphs: [
          "Donors should know the legal organisation receiving the money, the purpose of the appeal and how funds are governed. Visible buildings, large events and testimonies show activity; they are not substitutes for accounts, oversight and conflict-of-interest controls.",
          "Warning signs include one leader controlling collection, spending and reporting, unexplained transfers to private interests, or repeated refusal to answer basic governance questions."
        ]
      },
      {
        heading: "Ethical fundraising makes refusal genuinely possible",
        paragraphs: [
          "The current UK Code of Fundraising Practice says fundraising should not place undue pressure on people, be unreasonably persistent or take advantage of trust, lack of knowledge, apparent need for care or vulnerable circumstances.",
          "A healthy appeal is clear about purpose, allows private decision-making, accepts no as an answer and separates pastoral care from giving history."
        ]
      }
    ],
    practicalOptions: [
      "Use a cooling-off rule for unusual gifts, such as waiting forty-eight hours before paying.",
      "List rent, food, healthcare, transport, education, taxes, debt and dependants before deciding what is affordable.",
      "Do not borrow or use credit to meet a spiritual expectation.",
      "Ask for the organisation's legal name, registration number and financial statements.",
      "Keep receipts, pledge forms and fundraising messages.",
      "Review large gifts with someone independent of the organisation.",
      "Pause recurring payments while you review your finances if necessary.",
      "If reducing giving may trigger retaliation, plan around housing, employment, family contact and digital safety before announcing the decision."
    ],
    furtherReading: [
      {
        label: "Fundraising Regulator — Code of Fundraising Practice",
        note:
          "Current UK standards require fundraising to be legal, open, honest and respectful and prohibit undue pressure and unreasonably persistent approaches.",
        url: "https://www.fundraisingregulator.org.uk/code"
      },
      {
        label: "Fundraising Regulator — Donors in vulnerable circumstances",
        note:
          "Current guidance on helping donors make informed decisions and avoiding the exploitation of trust or vulnerability.",
        url: "https://www.fundraisingregulator.org.uk/about-fundraising/resources/donors-vulnerable-circumstances"
      },
      {
        label: "DellaVigna, List and Malmendier — Social Pressure in Charitable Giving",
        note:
          "A field experiment examining how the ability to avoid a face-to-face request changes donation behaviour.",
        url: "https://doi.org/10.1093/qje/qjr050"
      },
      {
        label: "Mulvihill, Aghtaie, Matolcsi and Hester (2023)",
        note:
          "Research on spiritual abuse and religious coercive control, useful for understanding how sacred authority can interact with financial pressure.",
        url: "https://doi.org/10.1177/17488958221112057"
      }
    ]
  },
  {
    slug: "supporting-someone-still-inside",
    title: "Supporting someone who is still involved",
    deck:
      "How to stay connected, widen someone's options and respond to risk without replacing one controlling relationship with another.",
    category: "Helping someone else",
    readingTime: 12,
    intensity: "moderate",
    warnings: ["Spiritual abuse", "Coercive control", "Medical neglect", "Family rejection", "Shunning", "Suicide or self-harm"],
    image: "/images/friends-sunset.jpg",
    imageAlt: "Friends standing with their arms around one another at sunset.",
    overview:
      "When someone you care about remains in a high-control religious environment, it is natural to want to get them out immediately. But pressure from a friend can sometimes feel like another person trying to take control. A more useful goal is to remain trustworthy, help the person observe what is happening, widen their practical choices and respond seriously when there is immediate danger. You do not have to pretend the situation is harmless, and you do not have to win every argument to be useful.",
    keyPoints: [
      "Keep ordinary contact alive; isolation can increase dependence on the group.",
      "Do not require the person to use labels such as cult, abuse or trauma before you listen.",
      "Ask about specific behaviour: what happened after they disagreed, refused or sought outside advice.",
      "Use language that preserves choice rather than issuing ultimatums whenever immediate danger is absent.",
      "Offer small, practical forms of independence such as transport, food, a private call or an independent appointment.",
      "Do not expose someone's doubts to leaders or arrange a surprise confrontation.",
      "Assume messages or devices may be monitored until you know otherwise.",
      "Take violence, stalking, child abuse, forced sexual activity, serious medical neglect and credible suicide or homicide threats seriously.",
      "People may leave, return or defend the group. Non-linear change does not make the earlier concern unreal.",
      "A supporter can be reliable without becoming the person's therapist, investigator, lawyer or sole emergency service."
    ],
    fullSections: [
      {
        heading: "Preserve the relationship before trying to win the argument",
        paragraphs: [
          "A religious community may provide faith, friendship, family, work, housing, purpose and identity. Asking someone to leave can sound like asking them to lose an entire world at once. That does not make the harm acceptable; it explains why change may be slow.",
          "Continue ordinary conversation about work, food, music, study, family and everyday life. A relationship that is not conditional on agreement can remain a bridge to information and help later."
        ]
      },
      {
        heading: "Ask about behaviour rather than forcing a label",
        paragraphs: [
          "Broad statements such as 'you are in a cult' often invite a broad defence. Specific questions are easier to examine: What happened after you said no? Who is allowed to challenge the leader? Can you seek independent medical or legal advice? Can former members remain friends?",
          "Listen to the answer before explaining what you think it means. A person can value parts of the community and still be harmed by other parts. Ambivalence is not dishonesty."
        ]
      },
      {
        heading: "Use support that protects agency",
        paragraphs: [
          "WHO's LIVES approach was designed for first-line support after violence: Listen, Inquire about needs, Validate, Enhance safety and connect with Support. It was not developed specifically for religious groups, but its survivor-centred sequence is useful because it starts with the person's needs rather than the helper's need for certainty.",
          "You can say, 'I am concerned about what happened, but you decide what you do next. If you want to look at options, I will help.' Supporting agency does not mean pretending harmful conduct is acceptable."
        ]
      },
      {
        heading: "Build practical independence in small steps",
        paragraphs: [
          "A person may understand the problem and still lack money, housing, transport, documents or private communication. Practical help can create real alternatives without demanding an immediate exit.",
          "Offer clearly bounded help: a ride, groceries, a place to make a private call, help finding an independent professional or secure copies of important documents with consent. Avoid taking control of their money, documents or decisions."
        ]
      },
      {
        heading: "Plan around digital safety and possible retaliation",
        paragraphs: [
          "Do not assume a phone, email account, family plan or cloud service is private. Ask what channel and wording are safe. Sudden password or device changes can sometimes alert a controlling person, so changes should be planned rather than automatic.",
          "Avoid contacting leaders behind the person's back, exposing doubts publicly or arranging a surprise intervention. Leaving can sometimes increase monitoring, shunning or other retaliation, so a practical plan is more useful than a deadline."
        ]
      },
      {
        heading: "Know when the situation is urgent — and know your limits",
        paragraphs: [
          "A choice-preserving approach is not a reason to minimise immediate danger. Where there is serious violence, forced sexual activity, stalking with escalation, abuse of a child, severe medical neglect or credible suicide or homicide threats, use appropriate emergency or safeguarding services in the person's location.",
          "Supporting someone can become exhausting. Decide what you can offer sustainably and involve a wider network when the person agrees. You can care deeply without becoming the only person responsible for keeping them safe."
        ]
      }
    ],
    practicalOptions: [
      "Send a low-pressure message that preserves contact without requiring a reply.",
      "Ask permission before discussing the religious group.",
      "Use one concrete question about behaviour instead of a global label.",
      "Offer one small, reversible form of practical help.",
      "Agree on a safe communication channel and wording if monitoring may be possible.",
      "Map possible losses before an exit: housing, income, education, healthcare, family contact and immigration status.",
      "Do not report or contact people on the person's behalf unless they authorise it or an immediate safeguarding duty requires action.",
      "Set supporter boundaries that describe what you can do rather than dictate what the other person must do."
    ],
    furtherReading: [
      {
        label: "World Health Organization — LIVES first-line support",
        note:
          "WHO guidance on listening, inquiring about needs, validating, enhancing safety and connecting survivors with support.",
        url: "https://www.who.int/news-room/feature-stories/detail/the-power-of-listening--the-power-of-the-lives-approach"
      },
      {
        label: "WHO — Caring for women subjected to violence training curriculum",
        note:
          "Training material on survivor-centred communication, first-line support and safety. It is designed for violence against women rather than religious-exit situations, so the principles should be adapted carefully.",
        url: "https://www.who.int/publications-detail-redirect/9789241517102"
      },
      {
        label: "Ransom, Monk, Qureshi and Heim — Life After Social Death",
        note:
          "Research on ostracism, identity transition and wellbeing among former Jehovah's Witnesses.",
        url: "https://doi.org/10.1007/s11089-020-00935-0"
      },
      {
        label: "Björkmark, Koskinen and Koirikivi — Living Between Two Different Worlds",
        note:
          "Qualitative research describing fear, guilt, sorrow and relational loss after leaving a high-cost religious group.",
        url: "https://doi.org/10.1007/s10943-021-01397-1"
      }
    ]
  }
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug) || null;
}
