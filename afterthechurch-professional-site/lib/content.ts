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
    "A research-informed guide to recognising patterns that use religious authority, fear, belonging and dependence to narrow a person’s freedom.",
  category: "Understanding what happened",
  readingTime: 22,
  intensity: "moderate",
  warnings: [
    "Spiritual abuse",
    "Coercive control",
    "Threats of punishment or damnation",
    "Forced confession",
    "Shunning"
  ],
  image: "/images/coercive.png",
  imageAlt: "Coercive control by clergy.",
  overview:
    "Coercive control is not defined by one difficult sermon, one disagreement or one strict rule. It is a repeated pattern that gradually makes another person more dependent, less able to refuse and more afraid of the consequences of acting independently. In religious settings, control can become especially powerful when ordinary authority is presented as divine authority, disagreement is treated as spiritual danger, and belonging to the community is tied to salvation, family, housing, work, education or identity. The most useful question is not simply whether a group is strict. It is whether people can question, seek outside advice, protect private information, maintain relationships and leave without retaliation.",
  keyPoints: [
    "Coercive control is a pattern and a context, not merely a collection of isolated incidents.",
    "Religious belief can be freely chosen while the way leaders enforce it is coercive.",
    "The central issue is not whether a community has rules, but whether meaningful refusal remains possible.",
    "Fear of damnation, shunning, public humiliation or losing one’s entire social world can make compliance appear voluntary.",
    "Control often works through several systems at once: relationships, information, confession, money, time, health and identity.",
    "A person may remain because the cost of leaving is severe, not because the environment is safe or because they lack intelligence.",
    "Symptoms after leaving can include grief, shame, anxiety, hypervigilance, identity confusion and spiritual struggle, but no single reaction proves a diagnosis.",
    "Documentation, boundary-setting and leaving plans should be adapted to risk; direct confrontation is not always the safest first step.",
    "Recovery is not measured by whether someone keeps, changes or leaves their faith. The aim is restored agency, safety and freedom of conscience.",
    "Healthy religious authority permits questions, protects privacy, accepts outside accountability and does not punish people for leaving."
  ],
  fullSections: [
    {
      heading: "Begin with the pattern, not the label",
      paragraphs: [
        "The term coercive control was developed mainly through research on domestic abuse, where it describes an ongoing course of conduct used to dominate another person and restrict everyday autonomy. The pattern may include intimidation, isolation, surveillance, humiliation, economic restriction, threats and rules backed by punishment. The important feature is cumulative impact: conduct that appears minor in isolation can become powerful when it is repeated, coordinated and connected to serious consequences.",
        "Researchers have increasingly applied this pattern-based approach to spiritual abuse and religious coercion. Mulvihill, Aghtaie, Matolcsi and Hester describe religious coercive control as a totalising use of belief and doctrine that can shape a victim-survivor’s relationships, identity, decision-making and access to help. Oakley and Kinmond similarly describe spiritual abuse as a systematic pattern of coercive and controlling behaviour in a religious context or carried out with a religious rationale.",
        "This does not mean that every strict, traditional or demanding community is abusive. A single unpopular decision, a doctrinal disagreement or an expectation shared by consenting adults is not enough on its own. The assessment becomes more serious when expectations are enforced through fear, dependency, secrecy, monitoring, punishment or the removal of realistic alternatives."
      ]
    },
    {
      heading: "The difference between influence and coercion",
      paragraphs: [
        "All communities influence their members. Families, universities, workplaces, political movements and religious groups teach values and encourage particular behaviour. Influence becomes coercive when it is combined with pressure that substantially weakens a person’s ability to choose, refuse, obtain independent information or leave.",
        "A useful distinction is whether the person receives enough information to understand the request, has time to consider it, can consult people outside the authority structure and can say no without disproportionate punishment. Consent is weakened when refusal is followed by threats of divine rejection, loss of family contact, public exposure, removal from housing or employment, reputational attacks, financial penalties or organised shunning.",
        "The presence of religious commitment does not cancel the need for consent. A person may sincerely believe in sacrifice, obedience, generosity or communal discipline while still being manipulated by how those ideals are applied. Examining the method used to secure compliance does not require the person to reject the belief itself."
      ]
    },
    {
      heading: "Why sacred authority can intensify ordinary control",
      paragraphs: [
        "Religious authority can carry meanings that ordinary leadership does not. A leader may be understood not simply as a teacher or administrator, but as a representative of God, a uniquely anointed messenger, a spiritual parent or the gatekeeper to blessing, healing and belonging. When that position is used to demand obedience, disagreement can feel larger than disagreement with another average person.",
        "Control becomes more powerful when leaders claim privileged access to God’s intentions for another person. Statements such as “God told me what you must do,” “touch not the anointed,” or “your resistance proves rebellion” can remove normal routes of evaluation. The member is encouraged to treat the leader’s interpretation as evidence about the member’s motives, spiritual condition or future.",
        "This creates an epistemic problem: the authority defines what is true, interprets every objection and decides whether the objection itself proves guilt. A system becomes difficult to correct when criticism is automatically reclassified as pride, bitterness, demonic influence, disloyalty or evidence that the critic was never genuine."
      ]
    },
    {
      heading: "Control often begins with reasonable-looking requests",
      paragraphs: [
        "Coercive environments do not always begin with dramatic commands. The first expectations may appear caring or ordinary: attend one more meeting, meet regularly with a mentor, share a private struggle, volunteer during a busy season, avoid a supposedly harmful influence or accept temporary guidance while feeling uncertain.",
        "The pattern may develop through gradual escalation. A request becomes an expectation; the expectation becomes a test of loyalty; the test becomes a rule; and breaking the rule becomes evidence of spiritual failure. Because each step is only slightly more demanding than the last, the person may adapt before recognising how much freedom has been lost.",
        "One practical question is whether boundaries move in only one direction. In a healthy relationship, trust can lead to greater freedom and mutual respect. In a controlling relationship, increased involvement often produces increased access to the person’s time, money, relationships, body, private information and decisions."
      ]
    },
    {
      heading: "Fear can make agreement look voluntary",
      paragraphs: [
        "A person may appear to agree while acting under intense psychological or social threat. Religious threats can concern eternal punishment, demonic attack, loss of divine protection, illness, harm to children, failed relationships or exclusion from the only community the person trusts. Even when no physical force is used, the anticipated consequences can be overwhelming.",
        "Public agreement is therefore not always evidence of free agreement. People may smile, testify, volunteer, donate or defend leaders because visible conformity reduces immediate danger. They may also repeat the group’s explanation because alternative language has not yet become available to them.",
        "This is one reason survivor accounts can change over time. A person may initially describe an event as discipline, correction or sacrifice and later understand it as humiliation, exploitation or abuse. Later recognition does not necessarily mean the account is invented; cumulative harm is often easier to identify after distance, safety and independent information become available."
      ]
    },
    {
      heading: "Isolation changes what feels possible",
      paragraphs: [
        "Isolation is not limited to physically preventing contact. It can be created by teaching members that outsiders are spiritually dangerous, incapable of understanding, morally corrupt or controlled by hostile forces. Former members may be presented only as cautionary examples, so speaking with them feels like betrayal or contamination.",
        "The group can also become the centre of friendship, childcare, employment, education, housing, marriage prospects, healthcare advice and social status. When many parts of life depend on one institution, leaving is not a simple change of opinion. It may mean losing an entire social world at once.",
        "Research on people leaving high-cost religious groups describes grief, fear, guilt, shame, loneliness and the difficult task of building a new identity. Studies of former Jehovah’s Witnesses also connect ostracism and prior commitment with post-exit self-esteem and wellbeing. These findings help explain why remaining, returning or leaving gradually can be understandable responses to dependency rather than evidence that the harm was insignificant."
      ]
    },
    {
      heading: "Information control does not require a complete ban",
      paragraphs: [
        "Information can be controlled by making certain sources emotionally or spiritually costly to access. Members may technically be free to read criticism, but are warned that doing so shows rebellion, opens them to deception or places their salvation at risk. Leaders may pre-emptively describe every outside allegation as persecution, jealousy or an attack on God’s work.",
        "A closed information system also controls interpretation. Positive events are credited to the group, while negative events are blamed on individual failure, insufficient faith or outside enemies. Failed predictions, harmful outcomes or contradictory evidence are repeatedly explained in ways that protect the authority structure.",
        "Healthy communities can explain why they disagree with criticism without forbidding members from examining it. They can acknowledge uncertainty, correct errors and allow people to compare interpretations. A group becomes less safe when it must control not only behaviour but also which questions may be asked and which evidence may be considered."
      ]
    },
    {
      heading: "Confession and accountability can become surveillance",
      paragraphs: [
        "Voluntary confession or pastoral care can be meaningful when confidentiality, informed consent and appropriate boundaries are respected. It becomes coercive when disclosure is demanded, recorded, shared without permission or used later to enforce compliance.",
        "An asymmetry is especially concerning when ordinary members must reveal intimate details while leaders remain protected from scrutiny. Information about sexuality, relationships, mental health, finances, immigration status or family conflict can create leverage. A person who fears exposure may comply with demands that they would otherwise reject.",
        "Warning signs include being required to report private conversations, provide account passwords, disclose doubts, obtain permission for ordinary decisions or accept questioning by several leaders without an advocate. Another warning sign is when confidentiality is promised but exceptions are defined so broadly that leaders can share almost anything among themselves."
      ]
    },
    {
      heading: "Humiliation and shunning regulate the whole community",
      paragraphs: [
        "Public correction affects more than the individual being corrected. It teaches everyone watching what may happen if they question, disclose harm or leave. Testimonies, disciplinary announcements, prayer requests and sermons may reveal enough private information for the community to identify and stigmatise a person even when a name is not used.",
        "Shunning can function as both punishment and deterrence. The loss of ordinary greetings, family contact, friendship, employment or community recognition communicates that belonging depends on compliance. Research on religious exit shows that social exclusion can complicate identity transition and psychological wellbeing.",
        "A community does not need to issue a written shunning policy for the effect to occur. Leaders may create the same outcome by labelling someone unsafe, divisive, deceived or spiritually dead, and then allowing members to infer that contact would endanger their own standing."
      ]
    },
    {
      heading: "Money, labour and time can be instruments of dependence",
      paragraphs: [
        "Financial exploitation may involve more than direct theft. Members can be pressured to tithe, make pledges, fund special projects, purchase access to events, work without reasonable limits or give money needed for food, housing, education or healthcare. Promises of guaranteed prosperity, healing or protection can increase the pressure.",
        "Time control can also weaken independence. A schedule filled with services, prayer meetings, outreach, volunteering, training and leader access leaves less time for sleep, education, outside friendships and private reflection. Exhaustion can reduce the mental space required to evaluate what is happening.",
        "The relevant question is not whether generosity or volunteering exists, but how refusal is treated. Freely chosen giving allows a person to know where money goes, pause without shame and protect essential needs. Coercive giving attaches spiritual danger, status loss or public judgement to saying no."
      ]
    },
    {
      heading: "Control may reach health, relationships and the body",
      paragraphs: [
        "Religious coercion can shape decisions about medication, therapy, reproductive healthcare, sexuality, marriage, divorce, disability, gender expression and contact with professionals. A leader may have a legitimate pastoral opinion, but that opinion becomes dangerous when it replaces qualified care or is enforced through threats and dependency.",
        "Members may be told that symptoms prove weak faith, that treatment is disloyal, or that disclosing abuse will damage the ministry. Others may be pressured to remain in violent relationships, undergo unwanted counselling, marry a chosen person or suppress information about sexual orientation or gender identity.",
        "A safe community recognises the limits of religious leadership. It does not present pastoral authority as medical, psychological or legal expertise. It supports access to independent professionals and does not punish members for obtaining a second opinion."
      ]
    },
    {
      heading: "Institutional betrayal can deepen the original harm",
      paragraphs: [
        "Sometimes the most damaging response occurs after a person reports misconduct. Institutional betrayal describes failures by organisations that people depend upon, including failures to prevent harm, respond fairly, protect complainants or acknowledge wrongdoing. A 2024 scoping review found a growing empirical literature on the individual costs of institutional betrayal across settings.",
        "In religious organisations, betrayal may include protecting a respected leader, discouraging reports to external authorities, destroying or withholding records, investigating the complainant more aggressively than the allegation, or presenting institutional reputation as a spiritual priority. Recent research with adult victim-survivors of pastor sexual exploitation describes abandonment, shunning, moral injury and post-abuse coercive control when churches protected leaders rather than survivors.",
        "Internal processes are not automatically unsafe, but they require independence, clear safeguarding duties, conflict-of-interest management and protection against retaliation. A process controlled by close colleagues, relatives or subordinates of the accused may reproduce the same power imbalance it claims to investigate."
      ]
    },
    {
      heading: "Why intelligent and capable people can become trapped",
      paragraphs: [
        "Coercive control does not depend on stupidity, weakness or a particular personality. People join communities for normal reasons: faith, purpose, friendship, family, healing, identity, service, certainty or hope. Harmful dynamics often emerge after trust, commitment and dependency have already formed.",
        "The person may also have real positive experiences in the group. Friendship, music, ritual, service and spiritual meaning can coexist with exploitation. This mixture can make the situation harder to understand because recognising harm may feel like denying every good memory or betraying people who still matter.",
        "Practical losses also matter. A person may risk family rejection, homelessness, immigration problems, unemployment, loss of education, custody conflict or exposure of private information. Asking “Why did you stay?” overlooks the more useful question: “What made leaving costly, dangerous or difficult to imagine?”"
      ]
    },
    {
      heading: "Possible effects during involvement and after leaving",
      paragraphs: [
        "People respond differently. Possible reactions include persistent fear, shame, guilt, grief, sleep disturbance, intrusive memories, emotional numbness, difficulty making decisions, mistrust, hypervigilance, depression, anxiety, dissociation, physical stress symptoms and confusion about identity or belief. Some experience relief and increased freedom; many experience relief and grief at the same time.",
        "Spiritual harm may affect a person who keeps their faith, changes tradition, becomes uncertain or no longer believes. Prayer, scripture, worship music, religious clothing, titles or buildings may become distressing reminders. For others, spirituality remains a source of strength but must be separated from the abusive authority structure.",
        "The phrase religious trauma is increasingly used, but reactions should not be reduced to a single informal syndrome. “Religious trauma syndrome” is not a standard diagnosis in major diagnostic systems. A qualified clinician should assess symptoms rather than assuming that every difficult religious experience produces PTSD or complex PTSD."
      ]
    },
    {
      heading: "How to assess a situation without forcing a conclusion",
      paragraphs: [
        "It can be useful to describe observable behaviour before deciding which label applies. Record what was requested, who had authority, what information was available, what happened after hesitation, what consequences were stated or implied, and how the pattern affected daily life.",
        "Ask whether rules are clear and applied consistently, whether leaders can be questioned, whether private information is protected, whether finances are transparent and whether complaints can reach genuinely independent people. Consider whether members can maintain outside relationships, obtain professional advice and leave without organised retaliation.",
        "Also ask what changed in you. Did you stop seeing people you trusted, alter work or education, hide symptoms, surrender financial control, constantly report your activities or become afraid of ordinary disagreement? The effect of a pattern can be important even when each individual instruction can be explained away."
      ]
    },
    {
      heading: "Documentation should support safety, not increase risk",
      paragraphs: [
        "A private chronology can help reveal patterns and support later conversations with a clinician, advocate, safeguarding professional or lawyer. Useful records may include dates, exact words, messages, financial requests, disciplinary actions, witnesses and changes in access to family, work, healthcare or money.",
        "Documentation is not always safe. Shared devices, cloud accounts, location services, family phone plans and browser histories may be monitored. Before collecting material, consider whether discovery could increase danger. A specialist service can help think through digital safety and secure storage.",
        "Do not obtain records illegally, impersonate someone, access accounts without permission or put yourself at risk to gather proof. Laws differ between countries, and recording conversations may be restricted. Legal advice should come from a qualified person in the relevant jurisdiction."
      ]
    },
    {
      heading: "Leaving is a process, not a test of courage",
      paragraphs: [
        "Some people leave immediately. Others reduce involvement, rebuild outside relationships, secure documents, protect finances or seek professional advice before making visible changes. There is no universal sequence, and direct confrontation is not always the safest first action.",
        "Risk can increase when an authority senses loss of control. Retaliation may include urgent meetings, love-bombing, threats, unwanted visits, public allegations, financial pressure, family mobilisation or attempts to obtain private information. A plan can include where to stay, who to contact, how to secure accounts and what to do if harassment escalates.",
        "Where there is violence, stalking, child abuse, medical danger, forced confinement or an immediate risk of self-harm, local emergency and specialist safeguarding services may be necessary. This website cannot assess an individual emergency."
      ]
    },
    {
      heading: "Recovery often begins by restoring ordinary choice",
      paragraphs: [
        "Coercive control narrows options, so recovery should not reproduce that pattern. Helpful support offers choices, explains limits, asks permission and respects the survivor’s pace. The aim is not to replace one authority with another or require a predetermined religious conclusion.",
        "Rebuilding may involve sleep, healthcare, financial stability, ordinary friendships, education, hobbies and decisions that are not treated as spiritual tests. Small acts of choice can feel unexpectedly difficult after long periods of permission-seeking. Difficulty deciding does not mean incapacity; it may reflect a nervous system and identity adapting to greater freedom.",
        "Research on religious exit suggests that new supportive group identities can assist recovery, although social identity is complex and no single community will be right for everyone. Peer support may reduce isolation, while trauma-informed therapy can help with fear, shame, grief and boundaries. A therapist should be able to discuss religion without defending the institution, attacking the survivor’s faith or forcing deconversion."
      ]
    },
    {
      heading: "What spiritual safety can look like",
      paragraphs: [
        "A healthy religious community can hold strong beliefs without demanding total control. Members know which expectations are required and which are optional. They can ask questions, take time, seek outside advice and disagree without being humiliated or threatened.",
        "Leadership is accountable through structures that do not depend solely on the leader’s friends or subordinates. Safeguarding concerns can reach external authorities where necessary. Finances, conflicts of interest, confidentiality limits and complaint procedures are explained clearly.",
        "People retain meaningful privacy, bodily autonomy, access to healthcare, family relationships and control over ordinary life decisions. Leaving may be painful, but it does not trigger organised retaliation. The strongest test of a community’s respect for freedom is often how it treats the person who says no."
      ]
    },
    {
      heading: "Research limits and legal caution",
      paragraphs: [
        "The research base on spiritual abuse is growing but remains smaller than the literature on domestic coercive control. Reviews note inconsistent definitions, limited longitudinal evidence and an overrepresentation of Christian and Western settings. Findings should therefore inform careful assessment rather than produce automatic conclusions about every religious group.",
        "The legal meaning of coercive control varies. In some jurisdictions, offences apply only to intimate partners or family members and may not cover control by a church, leader or wider group. Conduct may still fall under other laws concerning harassment, stalking, fraud, assault, safeguarding, discrimination, privacy or professional misconduct.",
        "This article provides education, not a diagnosis or legal judgement. A label can help organise experience, but the reader does not need to prove that a community fits a particular category before taking fear, loss of autonomy or retaliation seriously."
      ]
    }
  ],
  practicalOptions: [
    "Describe one incident using observable facts: what was requested, who requested it, what happened when you hesitated and which consequences were mentioned.",
    "Create a private timeline only if it is safe to do so. Include messages, financial requests, disciplinary actions, witnesses and changes in your daily life.",
    "Review account security, shared devices, cloud storage, location sharing and recovery-email settings before storing sensitive information.",
    "Identify one person or service that is genuinely independent of the organisation and does not report back to its leaders.",
    "Preserve access to identification, medication, money, transport, housing information and important contact details.",
    "Delay large donations or commitments long enough to review them outside the immediate pressure of a meeting or service.",
    "Ask for written policies on safeguarding, confidentiality, complaints, discipline, finances and conflicts of interest.",
    "Notice whether low-risk boundaries are respected, but do not test a boundary when retaliation, violence, stalking, homelessness or medical danger is possible.",
    "Seek medical, psychological, financial or legal advice from qualified professionals who are independent of the religious organisation.",
    "When preparing to reduce contact or leave, consider practical risks such as housing, employment, immigration, custody, digital surveillance and family retaliation.",
    "Build ordinary life outside the group gradually through work, study, hobbies, healthcare, friendships or peer support.",
    "Allow your beliefs to remain unresolved. Safety and autonomy do not require an immediate decision about faith.",
    "In immediate danger, contact emergency or specialist safeguarding services where you live."
  ],
  furtherReading: [
    {
      label: "Home Office (2023), Controlling or Coercive Behaviour: Statutory Guidance Framework",
      note:
        "An official pattern-based account of coercive control, cumulative harm, monitoring, isolation, economic restriction and the narrowing of autonomy. Its legal scope is domestic relationships in England and Wales, so it should not be presented as automatically applying to religious groups."
    },
    {
      label: "Mulvihill, Aghtaie, Matolcsi and Hester (2023)",
      note:
        "UK victim-survivor experiences of intimate partner spiritual abuse and religious coercive control. The study explains how doctrine and spiritual authority can become part of a wider control system and create barriers to help-seeking."
    },
    {
      label: "Oakley and Kinmond, work on spiritual abuse",
      note:
        "Foundational UK research and practice writing that defines spiritual abuse as a systematic pattern of coercive and controlling behaviour in a religious context or with a religious rationale."
    },
    {
      label: "Perry (2024), Religious/Spiritual Abuse, Meaning-Making, and Posttraumatic Growth",
      note:
        "A scoping review of research on how survivors make meaning after religious or spiritual abuse. It also demonstrates how limited and developing the evidence base remains."
    },
    {
      label: "Christl, Tran Pham, Rosenthal and DePrince (2024)",
      note:
        "A scoping review of 37 empirical studies on institutional betrayal, useful for understanding how organisational failures can compound interpersonal harm."
    },
    {
      label: "Björkmark, Nynäs and Koskinen (2022)",
      note:
        "A qualitative study of 18 people who left high-cost religious groups in Finland, describing social loss, identity disruption, guilt, shame, fear and the process of rebuilding life."
    },
    {
      label: "Ransom, Monk, Qureshi and Heim (2021)",
      note:
        "A study of 554 former Jehovah’s Witnesses examining ostracism, prior commitment, identity transition, self-esteem and wellbeing after exit."
    },
    {
      label: "Chong and Tortez (2026), Spiritual Safety Scale",
      note:
        "An emerging attempt to measure whether Christian communities allow spiritual practice without coercion, manipulation or emotional abuse. Because it is new and context-specific, it should complement rather than replace careful assessment."
    }
  ]
},
  {
  slug: "faith-healing-and-medical-decisions",
  title: "Faith-healing claims vs medical decisions",
  deck:
    "A medically grounded, psychologically informed and theologically careful guide to evaluating healing claims without dismissing faith or risking necessary care.",
  category: "Health and safety",
  readingTime: 24,
  intensity: "high",
  warnings: [
    "Faith-healing claims",
    "Medical neglect",
    "Threats of punishment or damnation",
    "Spiritual abuse"
  ],
  image: "/images/laid.jpg",
  imageAlt:
    "A public faith-healing service in which a minister places a hand on a participant’s forehead while other people observe.",
  overview:
    "Prayer, hope and medical care do not have to be treated as enemies. A person may experience comfort, reduced pain, renewed hope or an unexpected improvement during a religious service, and that experience can be meaningful. But a testimony is not the same as a diagnosis, and feeling better is not always the same as an underlying disease being cured. Safe discernment asks what condition was originally diagnosed, what evidence confirmed it, what changed, how long the change lasted, whether treatment continued, and whether independent clinicians verified the result. The greatest danger arises when a healing claim is used to pressure someone to stop medication, conceal symptoms, refuse follow-up care or blame themselves when illness continues.",
  keyPoints: [
    "A sincere testimony may describe a real experience without proving that a disease was medically cured.",
    "Pain, fatigue, movement, breathlessness and other symptoms can change through expectation, attention, stress, natural fluctuation and the social context of a healing service.",
    "Symptom relief is valuable, but it should not be confused with objective change in infection, cancer, organ damage, diabetes, epilepsy or another underlying condition.",
    "Reliable verification requires a clear diagnosis before the claimed healing, appropriate objective testing afterwards, sufficient follow-up and independent clinical review.",
    "Continuing symptoms do not prove weak faith, hidden sin, fear, negative confession or spiritual failure.",
    "Prayer can be used alongside evidence-based treatment, rehabilitation, medication and medical follow-up.",
    "Stopping treatment abruptly can be dangerous. Medication changes should be made with a qualified clinician who understands the condition and the specific drug.",
    "A ministry should not suppress unsuccessful outcomes, pressure people to testify or use selected stories as proof that everyone can expect the same result.",
    "Children and dependent adults require particular protection because another person’s belief must not remove access to necessary medical care.",
    "A Christian theology of healing can affirm prayer while also recognising medicine, human limitation, unanswered prayer, suffering and the future hope of complete restoration."
  ],
  fullSections: [
    {
      heading: "Faith and medicine are not natural enemies",
      paragraphs: [
        "Many people experience illness through medical, relational, cultural and spiritual meanings at the same time. Research on patient preferences shows that a substantial proportion of patients would welcome respectful discussion of spirituality in some clinical situations, although preferences differ and no patient should be pressured into religious conversation. Good care can therefore take faith seriously without allowing spiritual claims to replace diagnosis, informed consent or evidence-based treatment.",
        "The useful distinction is not between a religious person and a scientific person. It is between care that respects reality and care that asks someone to deny it. Prayer may offer comfort, meaning, courage, community and hope. Medicine may offer diagnosis, monitoring, symptom relief, rehabilitation and treatments shown to improve outcomes. These functions can support one another.",
        "A conflict emerges when a leader claims that seeking treatment shows unbelief, that medication blocks divine healing or that ongoing symptoms must be hidden to preserve a testimony. At that point, faith is no longer simply supporting the patient; it is being used to control access to information and care."
      ]
    },
    {
      heading: "Begin by separating experience, symptom and diagnosis",
      paragraphs: [
        "A healing testimony usually begins with an experience: pain reduced, movement became easier, fear lifted, strength returned or a person felt different during prayer. The experience may be completely sincere. The next question is what the experience can reasonably establish.",
        "A symptom is what a person feels or notices, such as pain, dizziness, fatigue, weakness, nausea, tremor or shortness of breath. A diagnosis is a clinical explanation supported by history, examination, testing and professional judgement. Symptoms can improve while the underlying disease remains. A person with asthma may feel less breathless while inflammation persists; someone with cancer may experience reduced pain without tumour regression; a person with diabetes may feel energetic while blood glucose remains unsafe.",
        "This distinction is not intended to belittle symptom improvement. Relief from pain or fear matters. It simply prevents one kind of improvement from being used as proof of another. A medically responsible testimony should state clearly what changed and what has not yet been tested."
      ]
    },
    {
      heading: "Why immediate improvement can feel dramatic",
      paragraphs: [
        "Healing services often combine expectation, music, focused attention, touch, public encouragement, emotional arousal and the authority of a trusted leader. These conditions can alter how the brain processes pain, effort, movement and bodily threat. Placebo research shows that context and expectation can produce genuine changes in patient-reported symptoms, particularly pain and nausea, although placebo interventions do not generally produce large objective changes across diseases.",
        "This does not mean that the person is pretending. Pain and many functional symptoms are shaped by complex interactions among nerves, attention, expectation, learning, stress and the brain’s interpretation of bodily signals. A reduction in symptoms can be biologically real even when it does not mean that tissue damage, infection or another underlying pathology has disappeared.",
        "Adrenaline and emotional activation can also temporarily increase strength, reduce pain awareness and change motor performance. A person may stand, bend or walk differently in the moment and later experience a return of symptoms. The return does not show that they lost faith; it may show that the immediate context changed or that the underlying condition was never resolved."
      ]
    },
    {
      heading: "Placebo effects are real, but they have limits",
      paragraphs: [
        "The word placebo is often used as an insult, as though an improvement must be either supernatural or imaginary. That is a false choice. Placebo effects refer to changes associated with the meaning, expectation and context surrounding care rather than the specific biological action of a treatment. They can involve measurable brain and neurochemical processes, especially in pain.",
        "At the same time, systematic reviews have not found important clinical effects of placebo interventions in general. Effects are more consistent for subjective outcomes than for objective disease markers. A person may therefore report real relief while scans, blood tests, pathology or long-term outcomes remain unchanged.",
        "The ethical lesson is not to dismiss the person. It is to be precise. A ministry may say that someone reported less pain after prayer. It should not convert that report into a claim that cancer, paralysis, infection or organ disease was cured without appropriate evidence."
      ]
    },
    {
      heading: "Natural history and regression to the mean can be mistaken for a miracle",
      paragraphs: [
        "Many illnesses fluctuate. Symptoms become worse, then improve; relapses are followed by quieter periods; viral illnesses resolve; inflammation varies; and some conditions respond gradually to treatment. People are most likely to seek dramatic help when symptoms are at their worst. Even without a new intervention, the next measurement may be closer to the person’s usual level. This is called regression to the mean.",
        "If prayer occurs at the worst point and improvement follows, the timing can make the prayer appear to be the sole cause. The same problem affects testimonials for medicines, supplements, diets and alternative treatments. Without comparison groups, reliable diagnosis and follow-up, timing alone cannot establish causation.",
        "Rare spontaneous remissions are also documented in medicine, including some cancers. Their rarity makes them scientifically interesting, but an unusual recovery does not by itself identify its cause. A credible investigation asks whether treatment, immune processes, an incorrect initial diagnosis, incomplete records or natural disease variation could also explain the outcome."
      ]
    },
    {
      heading: "What responsible verification actually requires",
      paragraphs: [
        "A strong healing claim begins with clear evidence that the condition existed. A statement such as “the doctor said I might have cancer” is not equivalent to pathology confirming a specific cancer. A report of paralysis may refer to several very different neurological, musculoskeletal or functional conditions. Accurate verification needs the original diagnosis, the tests used, the date, the severity and the expected course.",
        "The outcome must then be tested with methods appropriate to that condition. A tumour claim may require imaging, pathology and oncology review. Diabetes requires glucose measurements over time rather than a temporary sense of wellbeing. Epilepsy requires careful clinical follow-up because the absence of a seizure during a short period does not establish cure. Hearing and vision claims require standardised testing, not only a response on a stage.",
        "Follow-up matters. Some symptoms improve for minutes, days or months and then return. A responsible report distinguishes immediate, short-term and sustained outcomes. It also records whether medication, surgery, physiotherapy or another treatment continued, because improvement cannot automatically be attributed to prayer alone when several interventions occurred together.",
        "Independent review is essential. Verification should not be performed only by clinicians employed by, financially connected to or publicly committed to the ministry making the claim. Consent and privacy must also be protected. Medical records should not be displayed publicly without informed permission, and people should not be pressured to reveal diagnoses in order to validate a leader."
      ]
    },
    {
      heading: "Why selected testimonies can mislead even when they are true",
      paragraphs: [
        "Public ministries usually present successes, not the full number of people prayed for. If ten people improve and hundreds do not, showing only the ten creates a distorted impression of effectiveness. This is selection bias. The audience cannot estimate the true rate of improvement without knowing how many people were treated, how outcomes were defined and how unsuccessful cases were followed.",
        "Confirmation bias can then strengthen the story. Improvements are attributed to prayer, while non-improvements are explained by timing, hidden sin, lack of faith or the claim that healing has occurred spiritually but is not yet visible. A system that treats every possible outcome as confirmation cannot be meaningfully tested.",
        "Testimonies can still have pastoral value when they are presented honestly. The ethical problem begins when stories are used as medical evidence, fundraising tools or pressure on sick people to reproduce the same outcome."
      ]
    },
    {
      heading: "Pressure to testify can change what people report",
      paragraphs: [
        "A person in a highly emotional service may be asked repeatedly whether pain has reduced, whether they can move further or whether they believe they are healed. The safest answer may be the one the room expects. Social approval, fear of disappointing the leader and relief at being publicly recognised can influence the response without deliberate lying.",
        "Memory is also reconstructive. After repeated retelling, a gradual improvement may become an instant cure, an uncertain diagnosis may become a confirmed disease and a temporary change may be remembered as permanent. Video editing can remove hesitation, later relapse or the parts of the conversation that make the case less dramatic.",
        "A trauma-informed approach gives the person time, privacy and permission to say “I do not know yet.” It does not demand immediate certainty. It also makes room for someone to revise a testimony later without shame."
      ]
    },
    {
      heading: "When symptoms return, shame can become a second injury",
      paragraphs: [
        "Some people are taught that they must maintain healing through faith, positive confession or refusal to acknowledge symptoms. When pain or illness returns, they may hide it, delay care and interpret the recurrence as evidence that they failed spiritually.",
        "Psychological research distinguishes positive religious coping, such as seeking meaning, support and connection, from negative religious coping, such as feeling punished or abandoned by God, viewing illness as demonic condemnation or experiencing conflict with a religious community. Negative religious coping and spiritual struggle are associated with greater psychological distress in multiple studies.",
        "The person needs accurate care rather than blame. A recurrence may reflect the natural course of disease, an incomplete response, an incorrect diagnosis or a temporary change in symptoms. It does not establish moral failure. A ministry that cannot tolerate honest follow-up places its reputation above the patient."
      ]
    },
    {
      heading: "Stopping medication can create risks that are not immediately visible",
      paragraphs: [
        "Some medicines can be stopped safely; others require gradual reduction or close monitoring. Abrupt withdrawal from corticosteroids, anti-seizure medicines, insulin, psychiatric medication, anticoagulants or certain heart medicines can lead to serious harm. The risk depends on the drug, dose, duration, condition and individual patient.",
        "Feeling well is not sufficient evidence that treatment is no longer needed. Many treatments work precisely by keeping symptoms and disease markers controlled. Stopping them may allow the illness to return before the person feels warning signs.",
        "The safe rule is simple: do not change or stop prescribed treatment because of a public declaration of healing. Take the claim to the clinician responsible for the condition, explain what happened and ask what testing and monitoring would be needed before any change. A good clinician should listen respectfully even if they do not share the patient’s theology."
      ]
    },
    {
      heading: "Mental illness and functional symptoms require particular care",
      paragraphs: [
        "Depression, psychosis, bipolar disorder, trauma-related conditions, epilepsy and functional neurological disorder can all be mislabelled as demonic activity or insufficient faith. This may delay assessment and expose people to frightening or physically forceful practices.",
        "Functional neurological symptoms are genuine disorders of nervous-system functioning. Symptoms such as weakness, non-epileptic attacks, tremor or altered movement can be strongly influenced by attention, expectation and context, but they are not simply invented. A dramatic response during prayer does not prove deception, possession or permanent cure. Proper neurological and psychological assessment remains important.",
        "Faith communities can support recovery through companionship, practical help and hope. They should not replace qualified mental-health care, restrain people, shame them for symptoms or promise that prayer alone will prevent relapse."
      ]
    },
    {
      heading: "Children and dependent adults require stronger safeguards",
      paragraphs: [
        "Adults with decision-making capacity may refuse treatment, even when others consider the decision unwise. Children and dependent adults are different because they may not be able to understand the risk or resist the authority of caregivers and religious leaders.",
        "A widely cited retrospective study reviewed 172 child deaths associated with religion-motivated withholding of medical care between 1975 and 1995. The authors judged that most involved conditions with a high expected survival rate if treated. The study has limitations and does not establish the current frequency of such deaths, but it demonstrates the potential consequences when prayer is used in place of available care.",
        "Belief should never be used to deny a child urgent assessment, antibiotics, insulin, surgery, seizure treatment or other necessary care. Safeguarding duties and legal rules differ by country, but immediate risk to a child should be taken to local medical, emergency or child-protection services."
      ]
    },
    {
      heading: "What controlled research on prayer can and cannot answer",
      paragraphs: [
        "Researchers have attempted randomised trials of distant intercessory prayer. The large STEP trial in coronary-bypass patients did not find that receiving intercessory prayer improved uncomplicated recovery. A Cochrane review of ten trials involving 7,646 participants found no clear overall difference in death, general clinical state, readmission or rehospitalisation.",
        "These studies do not prove or disprove God. They test whether a defined prayer intervention produces outcomes measurable under trial conditions. Theology may hold that prayer is relational, not a technique that human beings can control or test on demand. Scientific restraint and theological restraint therefore point in the same direction: clinical trials should not be overstated, and neither should stage testimonies.",
        "The most defensible conclusion is that prayer may remain meaningful to believers, but it should not be presented as a reliably demonstrated substitute for medical care."
      ]
    },
    {
      heading: "A Christian theological framework does not require denial of medicine",
      paragraphs: [
        "The New Testament presents healing as a sign of compassion and the kingdom of God, but it does not teach that every faithful person will be immediately cured in this life. Paul describes an affliction that was not removed despite prayer, Epaphroditus became seriously ill, and Trophimus was left sick. These passages resist the claim that persistent illness automatically reveals unbelief.",
        "Christian scripture also contains ordinary forms of care. Luke is called a physician. The Good Samaritan treats wounds and arranges continuing care. First Timothy refers to using wine for a stomach complaint, while James combines prayer, communal care and anointing with oil. Christians interpret these texts differently, but they do not support a simple opposition between trusting God and receiving treatment.",
        "John 9 rejects the assumption that disability must be traced to an individual’s sin. The book of Job also warns against confident explanations that blame a sufferer. A healing theology becomes harmful when it turns illness into a verdict on character.",
        "Classical Christian hope is ultimately eschatological: complete restoration is connected with resurrection and the renewal of creation, not a promise that every disease will disappear before death. This allows Christians to pray boldly while speaking honestly about uncertainty, mortality and unanswered prayer."
      ]
    },
    {
      heading: "Theological problems with guaranteed healing",
      paragraphs: [
        "A guarantee changes prayer into a transaction: correct belief, words, giving or submission are presented as conditions that force a particular outcome. When the outcome fails, responsibility is transferred from the claimant to the sick person.",
        "This can make the doctrine impossible to falsify and pastorally cruel. The minister receives credit for every improvement, while the patient receives blame for every failure. Such a structure protects authority rather than truth.",
        "A more responsible theology can affirm that God may heal, that medicine may be one means of care, that suffering is not proof of divine rejection and that the community’s duty continues whether healing occurs or not. The person who remains ill should receive more support, not less."
      ]
    },
    {
      heading: "Ethical standards for churches and healing ministries",
      paragraphs: [
        "A ministry that prays for healing should state clearly that prayer is not a medical diagnosis or a direction to stop treatment. Leaders should never advise medication changes unless they are appropriately licensed and acting within professional competence.",
        "Claims should be described accurately: reported symptom improvement, preliminary test result, confirmed remission or sustained recovery are not interchangeable. Unsuccessful and uncertain outcomes should not be erased. Any verification process should be independent, consent-based and open about its limitations.",
        "People should not be touched without permission, pushed, restrained, exposed publicly or asked to perform movements that could worsen injury. Interpreters, disability access and the right to stop participation should be available.",
        "Fundraising should be separated from promises of healing. No one should be told that a donation, seed, pledge or purchase will secure recovery. Complaints and adverse events should be recorded and reviewed through a safeguarding process independent of the public leader."
      ]
    },
    {
      heading: "How clinicians can respond without ridiculing belief",
      paragraphs: [
        "Patients may avoid clinicians when they expect mockery. A respectful clinician can ask what the healing experience meant, what the patient believes changed and whether anyone advised them to alter treatment. This provides important safety information without beginning a theological argument.",
        "Many patients want spirituality to be acknowledged in care, but preferences vary. Clinicians can ask permission before discussing it and offer chaplaincy or another spiritual-care referral when appropriate. Their role is to explain medical evidence, risks and options while respecting the patient’s values.",
        "Respect does not require agreement with an unverified claim. It means taking the person seriously, checking the condition carefully and helping them make decisions without humiliation or coercion."
      ]
    },
    {
      heading: "A practical verification checklist",
      paragraphs: [
        "Before accepting or publishing a healing claim, ask: What exact condition was diagnosed? Who diagnosed it? Which tests confirmed it? Are the original records available? What treatment was already being used? What changed immediately after prayer? Which objective tests changed afterwards? How long has the improvement lasted?",
        "Then ask: Did medication or rehabilitation continue? Could the condition naturally fluctuate? Was the initial diagnosis uncertain? Has an independent specialist reviewed the records? Has the patient consented to publication? Are unsuccessful follow-ups also recorded?",
        "The purpose is not to eliminate mystery or demand certainty before anyone can be grateful. It is to protect sick people from decisions based on evidence that is weaker than it appears."
      ]
    },
    {
      heading: "Recovery after a harmful healing experience",
      paragraphs: [
        "A person may grieve several things at once: health, trust in leaders, confidence in prayer, lost money, delayed treatment and the public identity created by a testimony. They may also feel embarrassed for having believed or for encouraging others. Shame is understandable, but responsibility belongs most heavily to those who claimed authority and suppressed uncertainty.",
        "Helpful recovery may include medical reassessment, obtaining records, trauma-informed therapy, financial advice, speaking with trusted people outside the ministry and deciding whether the person wants spiritual support from a safer community. No single theological conclusion should be required.",
        "The goal is not to turn every survivor into a sceptic or every believer into a defender. It is to restore the person’s ability to observe reality, ask questions, receive care and make choices without fear."
      ]
    }
  ],
  practicalOptions: [
    "Continue prescribed treatment unless the clinician responsible for that treatment advises a change.",
    "Ask the clinician what objective evidence would be needed to confirm improvement in your specific condition.",
    "Request copies of the original diagnosis, test results, medication list and follow-up plan.",
    "Keep a private symptom record including dates, severity, treatment and changes after the healing event.",
    "Do not perform painful or risky movements on stage to prove that healing occurred.",
    "Tell a clinician promptly if symptoms return, worsen or change, even if you previously gave a public testimony.",
    "Seek urgent medical care for severe breathing difficulty, chest pain, stroke symptoms, major bleeding, loss of consciousness, a prolonged seizure, suicidal intent or another emergency.",
    "Ask whether the ministry records unsuccessful outcomes and long-term follow-up, not only immediate testimonies.",
    "Do not sign broad consent forms or release private medical records under emotional pressure.",
    "For medication questions, speak with a doctor or pharmacist rather than relying on a minister’s general instruction.",
    "For children, obtain qualified medical assessment promptly and do not delay necessary treatment while waiting for a spiritual outcome.",
    "Choose spiritual support that permits honest reporting of symptoms and does not blame illness on fear, sin or insufficient faith.",
    "When a claim may become public, ask for time to verify it before your name, image or medical information is shared."
  ],
  furtherReading: [
    {
      label: "Hróbjartsson and Gøtzsche — Placebo interventions for all clinical conditions",
      note:
        "Cochrane review examining placebo effects across clinical conditions. It found no important clinical effect in general, while noting possible effects on patient-reported outcomes such as pain and nausea. DOI: 10.1002/14651858.CD003974.pub3."
    },
    {
      label: "Benson et al. — STEP trial of intercessory prayer",
      note:
        "Multicentre randomised trial in coronary-artery bypass patients. Receiving intercessory prayer did not improve uncomplicated recovery. American Heart Journal 2006;151:934–942. DOI: 10.1016/j.ahj.2005.05.028."
    },
    {
      label: "Roberts, Ahmed and Davison — Intercessory prayer for ill health",
      note:
        "Cochrane review of ten randomised trials involving 7,646 participants. It found no clear overall benefit for death, general clinical state or readmission. DOI: 10.1002/14651858.CD000368.pub3."
    },
    {
      label: "Asser and Swan — Child fatalities from religion-motivated medical neglect",
      note:
        "Retrospective review of 172 child deaths from 1975–1995 in which medical care was withheld because of reliance on faith healing. Pediatrics 1998;101:625–629. DOI: 10.1542/peds.101.4.625."
    },
    {
      label: "Kaptchuk, Hemond and Miller — Placebos in chronic pain",
      note:
        "Review of evidence, mechanisms and ethics of placebo effects in chronic pain, including predictive-processing explanations and the role of therapeutic context. BMJ 2020;370:m1668. DOI: 10.1136/bmj.m1668."
    },
    {
      label: "Cowden et al. — Religious and spiritual struggles in chronic illness",
      note:
        "Longitudinal study finding reciprocal associations between religious or spiritual struggle and psychological distress among adults with chronic health conditions. Journal of Clinical Psychology 2022;78:544–558. DOI: 10.1002/jclp.23232."
    },
    {
      label: "Ano and Vasconcelles — Religious coping and psychological adjustment",
      note:
        "Meta-analysis distinguishing forms of religious coping and their associations with adjustment to stress. Journal of Clinical Psychology 2005;61:461–480. DOI: 10.1002/jclp.20049."
    },
    {
      label: "Best, Butow and Olver — Patient preferences for spiritual discussion",
      note:
        "Systematic review of 54 studies involving 12,327 patients. Many welcomed spiritual discussion in some circumstances, but preferences were varied and patient consent remained important. Patient Education and Counseling 2015;98:1320–1328."
    },
    {
      label: "Tangen — Healing in the Pentecostal tradition: a Scandinavian perspective",
      note:
        "Theological and historical analysis of Pentecostal healing in Norway and Sweden, including classical Pentecostalism, Word of Faith teaching and later charismatic movements. Journal of Pentecostal and Charismatic Christianity 2021;41:124–140."
    },
    {
      label: "Thomas — Christ the Physician",
      note:
        "A Christian theological account of bodily and spiritual healing that treats medicine and sacramental care as compatible while locating complete healing in the resurrection. The Linacre Quarterly 2024;91:243–253. DOI: 10.1177/00243639231189328."
    }
  ]
},


{
  slug: "financial-pressure-and-giving",
  title: "When giving stops feeling voluntary",
  deck:
    "A research-informed guide to distinguishing generosity from financial pressure, coercion and exploitation in religious communities.",
  category: "Money and independence",
  readingTime: 24,
  intensity: "moderate",
  warnings: [
    "Financial exploitation",
    "Coercive control",
    "Threats of punishment or damnation",
    "Spiritual abuse"
  ],
  image: "/images/prosperity.jpg",
  imageAlt: "A money being exchanged.",
  overview:
    "Generosity can be meaningful, joyful and central to a person’s faith. It becomes unsafe when leaders or communities make refusal spiritually frightening, socially costly or financially dangerous. A donation is not fully voluntary when someone is told that giving will guarantee healing, protection, promotion or wealth; when reluctance is treated as rebellion; when amounts are publicly compared; when people are pushed to borrow; or when essential needs are sacrificed to protect a ministry’s reputation. The most useful question is not simply whether a church teaches tithing or asks for money. It is whether people receive clear information, have time to decide, can protect food, housing, healthcare and dependants, and can say no without humiliation, threats or exclusion.",
  keyPoints: [
    "Religious giving can be sincere and freely chosen while particular fundraising methods are coercive.",
    "The central issue is not whether a church asks for money, but whether meaningful refusal remains possible.",
    "Social pressure, public recognition and information about what others give can increase donations even when the donor would prefer not to give.",
    "A promise of guaranteed wealth, healing or protection in exchange for money should be treated as a high-risk claim rather than normal fundraising.",
    "Pressure to borrow, use credit, sell essential property or give money needed for food, housing, education or healthcare creates a serious risk of harm.",
    "Economic abuse research shows that restricting, exploiting or sabotaging access to resources can damage mental health, independence and long-term financial security.",
    "A donor should be able to ask how money is governed, audited and spent without being treated as disloyal or spiritually immature.",
    "Financial transparency is not a lack of faith. It is part of responsible stewardship and accountability.",
    "Christian traditions disagree about tithing, but New Testament teaching repeatedly connects giving with willingness, proportion, care for others and freedom from compulsion.",
    "Recovery may involve pausing donations, reviewing debt, restoring access to accounts and separating personal faith from pressure imposed by an institution."
  ],
  fullSections: [
    {
      heading: "Generosity and coercion are not the same thing",
      paragraphs: [
        "Religious communities often fund worship, pastoral care, education, relief work, buildings and salaries through voluntary donations. Many people give because generosity expresses gratitude, solidarity, worship or responsibility toward others. The existence of fundraising is therefore not evidence of abuse.",
        "The problem begins when the method used to secure money substantially narrows the donor’s freedom. A request may become coercive when refusal is followed by threats, humiliation, loss of status, public exposure, spiritual fear or damage to important relationships. The words “voluntary offering” do not settle the question if the practical consequences of saying no are severe.",
        "It is also important to assess patterns rather than one uncomfortable moment. An awkward appeal, a sermon someone disagrees with or a strong recommendation is not automatically financial abuse. Concern increases when pressure is repeated, escalates over time, targets vulnerability, requires secrecy or is supported by a wider system of control."
      ]
    },
    {
      heading: "What economic abuse research can contribute",
      paragraphs: [
        "Most formal research on economic abuse concerns intimate partner violence rather than churches. That literature describes behaviours that interfere with another person’s ability to acquire, use or maintain economic resources. Examples include controlling access to money, creating debt, sabotaging employment, exploiting labour and preventing financial independence.",
        "Reviews by Stylianou, Postmus and colleagues, and later researchers consistently describe economic abuse as a distinct form of harm that can produce financial hardship, reduce autonomy and worsen psychological wellbeing. It often occurs alongside other controlling behaviours rather than as an isolated financial disagreement.",
        "This literature cannot simply be transferred from family violence to every religious setting. A church does not have the same relationship to a member as an intimate partner. However, the underlying questions remain useful: who controls the resources, who benefits, what happens when the person refuses, and does the pattern increase dependence while reducing realistic alternatives?"
      ]
    },
    {
      heading: "Religious authority can make an ordinary request feel absolute",
      paragraphs: [
        "A request from a fundraiser is different from a request presented as the will of God. If a leader claims unique spiritual authority, the donor may experience refusal as disobedience not merely to another person but to God. That changes the emotional weight of the decision.",
        "Religious coercive-control research describes how doctrine and sacred authority can be used to manipulate, isolate and silence. The same structure can appear in financial demands when leaders claim that they know the amount God requires, that hesitation reveals rebellion or that questioning the appeal places a person outside divine protection.",
        "A safe community distinguishes pastoral interpretation from divine certainty. Leaders may teach their beliefs about generosity, but they should not claim private access to God’s instructions for another person’s bank account."
      ]
    },
    {
      heading: "Social pressure can increase giving without increasing freedom",
      paragraphs: [
        "Behavioural-economics research shows that some donations are motivated not only by altruism but by the discomfort of saying no. In a major field experiment, DellaVigna, List and Malmendier found that giving fell when households were given an easy way to avoid a face-to-face request. This suggests that social pressure can produce donations that the person would not otherwise choose.",
        "Other experiments show that public recognition and information about what others have donated can increase contributions. Shang and Croson found that mentioning a high previous donation increased giving in a public-radio campaign. Karlan and McConnell found that the promise of public recognition increased giving largely through social-image concerns.",
        "These findings do not mean that public offerings or donor acknowledgements are always wrong. They show why methods such as calling people forward, reading out amounts, displaying names, comparing groups or asking who will “match” a large gift can alter behaviour through reputation and conformity. A responsible fundraiser should make it genuinely easy to decline."
      ]
    },
    {
      heading: "Public giving can turn generosity into a loyalty test",
      paragraphs: [
        "In some communities, donors receive visible honour, leadership access, titles, seating, invitations or public praise. Recognition may be intended as gratitude, but it can create a hierarchy in which money becomes evidence of spirituality and belonging.",
        "The reverse can also occur. People who give less may be described as fearful, selfish, immature or uncommitted. If attendance records, giving histories or pledge levels are used to decide who receives pastoral attention or ministry opportunities, a donation becomes more than support for a cause. It becomes a condition of full membership.",
        "Healthy recognition does not expose amounts without consent, shame non-donors or imply that wealth proves spiritual superiority. The community should be able to honour service and generosity without turning financial capacity into moral status."
      ]
    },
    {
      heading: "Suggested amounts and public examples can become anchors",
      paragraphs: [
        "People often use the first number presented to them as a reference point. In fundraising, suggested amounts can be helpful because they reduce uncertainty. They can also create pressure when the amount is framed as the minimum acceptable proof of faith.",
        "A leader may announce that “everyone should give at least” a certain sum, describe a previous donor’s amount, or invite progressively larger pledges while the audience is watching. Research on social information shows that people adjust giving toward the amounts they believe others give.",
        "The ethical question is whether the number is guidance or a disguised command. A safe appeal makes clear that zero is an acceptable choice, avoids using unusually large gifts as a standard and does not equate the size of a donation with the size of someone’s faith."
      ]
    },
    {
      heading: "Urgency can prevent considered consent",
      paragraphs: [
        "Some appeals are genuinely urgent. A sudden disaster, a person facing eviction or an immediate community need may require rapid action. Urgency becomes manipulative when it is manufactured to stop people from checking facts, discussing the decision with family or reviewing their finances.",
        "Common tactics include insisting that the opportunity will disappear before the service ends, asking people to transfer money while emotions are high, discouraging them from leaving the room, or presenting delay as disobedience. Music, repetition, public expectation and fear may further reduce reflective decision-making.",
        "A cooling-off period is a simple safeguard. Large or unusual gifts should normally be considered outside the emotional setting in which they were requested. A legitimate need can survive reasonable questions."
      ]
    },
    {
      heading: "Prosperity promises turn giving into a financial transaction",
      paragraphs: [
        "Prosperity theology takes several forms, but some versions teach that giving money activates a predictable return of wealth, health, employment, protection or promotion. The donor is encouraged to treat an offering as a seed that God is obligated to multiply.",
        "Ethnographic research in African Pentecostal settings shows that this teaching can create intense pressure on people with limited income. A 2024 study of young Pentecostals in Harare described congregants hustling, gambling or seeking additional money so they could tithe and remain visible within a prosperity-oriented religious economy. Other scholarship connects prosperity preaching with transactional understandings of salvation and personal responsibility for financial outcomes.",
        "The problem is not hope or prayer for provision. It is presenting a spiritual claim as a reliable investment product. A ministry cannot responsibly promise a measurable financial return that it cannot verify, control or refund."
      ]
    },
    {
      heading: "When the promised return fails, blame often moves to the donor",
      paragraphs: [
        "A guaranteed-return message is protected from failure when every outcome is reinterpreted. If money arrives, the teaching is confirmed. If it does not, the donor may be told to wait, give again, confess differently, remove doubt or examine hidden sin.",
        "This structure places credit for success with the leader or doctrine while placing responsibility for failure on the person who sacrificed. It can encourage repeated giving because the donor fears that stopping before the breakthrough would waste everything already given.",
        "Failure may therefore produce more than financial loss. It can produce shame, anxiety, spiritual confusion and distrust of one’s own judgement. The person may believe that poverty proves moral or religious inadequacy rather than recognising that the promise itself was unreliable."
      ]
    },
    {
      heading: "Debt changes the ethical seriousness",
      paragraphs: [
        "Giving from available income is different from borrowing. Credit cards, payday loans, personal loans and money borrowed from relatives carry future obligations that remain even when the expected blessing does not arrive.",
        "Research on coerced debt in abusive relationships demonstrates how manipulation can create long-term financial entrapment. Although a religious appeal is a different context, pressure to open credit, sign a loan, guarantee another person’s debt or donate borrowed money should be treated as a major warning sign.",
        "A spiritual promise does not remove interest, default fees, damaged credit, repossession or family conflict. No leader should tell a person to ignore these consequences as evidence of faith."
      ]
    },
    {
      heading: "Essential needs should not be treated as spiritual competition",
      paragraphs: [
        "People may be encouraged to give money reserved for rent, food, medication, school fees, transport, utilities or support for dependants. The sacrifice may be praised as extraordinary faith, especially when the donor is poor.",
        "Sacrifice is meaningful only when it is truly chosen and when the person understands the consequences. An institution with greater resources should not romanticise deprivation imposed on people who already lack security.",
        "A useful boundary is that donations should not predictably endanger housing, healthcare, nutrition, childcare or another person’s basic welfare. A community that receives from someone in crisis should also be prepared to help meet that person’s needs."
      ]
    },
    {
      heading: "Unpaid labour also has economic value",
      paragraphs: [
        "Financial exploitation is not limited to cash. Members may provide extensive unpaid labour, professional services, transport, food, accommodation, childcare or equipment. Volunteering can be freely chosen and deeply valuable, but it can also become compulsory.",
        "Concern increases when leaders expect constant availability, punish people who reduce hours, demand professional work without agreement or use volunteers to support private businesses and personal lifestyles. Exhaustion can also undermine paid employment, education and family care.",
        "A healthy organisation defines roles, expenses, supervision, safeguarding and the difference between charitable service and work that should be paid. A spiritual title should not erase ordinary labour rights or ethical obligations."
      ]
    },
    {
      heading: "Transparency determines whether trust can be tested",
      paragraphs: [
        "Donors cannot make an informed decision when they do not know who controls the money, which entity receives it or how it will be used. Appeals should identify the legal organisation, purpose of the collection and whether the money is restricted to that purpose.",
        "Financial statements, governance structures, conflicts of interest, senior compensation and related-party transactions should be available at an appropriate level of detail. Transparency does not require publishing every confidential record, but it should allow meaningful accountability.",
        "Warning signs include one leader controlling collection, spending and reporting; large cash movements without records; family members occupying all oversight roles; unexplained transfers between ministries and private businesses; or repeated refusal to answer basic questions."
      ]
    },
    {
      heading: "A testimony is not an audit",
      paragraphs: [
        "Stories about lives changed by a ministry may show real social value. They do not establish that all donations are managed properly. A powerful testimony can draw attention away from governance questions that remain necessary.",
        "Similarly, visible buildings, large events and expensive media prove that money was spent, not that it was spent lawfully, efficiently or for the purpose donors understood. Financial stewardship requires records and independent review, not only evidence of activity.",
        "Donors should be able to distinguish between impact reporting, financial reporting and promotional storytelling. Each answers a different question."
      ]
    },
    {
      heading: "Vulnerability requires more care, not more pressure",
      paragraphs: [
        "Illness, bereavement, migration stress, unemployment, disability, loneliness and crisis can increase reliance on trusted spiritual leaders. These conditions do not remove a person’s capacity, but they may make high-pressure appeals especially harmful.",
        "Current fundraising standards in the United Kingdom, for example, state that fundraisers should not put undue pressure on people, should stop when asked and should take additional care with donors in vulnerable circumstances. The legal details differ by country, but the ethical principle is broader: vulnerability should lead to protection rather than intensified solicitation.",
        "A leader who knows that someone is frightened, cognitively impaired, recently bereaved or desperate for healing should not use that knowledge to secure a larger gift."
      ]
    },
    {
      heading: "Why capable people may continue giving",
      paragraphs: [
        "People do not give under pressure because they are unintelligent. They may trust the leader, love the community, believe the cause is good or have previously received genuine support. The harmful request is often embedded in a relationship containing many positive experiences.",
        "Leaving or refusing may threaten friendships, identity, family harmony, employment or access to spiritual care. A donor may also fear admitting that earlier sacrifices did not produce the promised outcome.",
        "Previous commitment can make another donation feel easier than revising the entire story. This is sometimes described through sunk-cost reasoning or cognitive dissonance: the mind tries to preserve meaning after a costly decision. Understanding this process should reduce shame, not create another accusation."
      ]
    },
    {
      heading: "Questions that help assess whether giving is voluntary",
      paragraphs: [
        "Begin with observable facts. Who made the request? What amount was suggested? What reason was given? How much time was allowed? Was the appeal made privately or in front of others? What happened when someone declined?",
        "Then examine the consequences. Was the person threatened with poverty, illness, divine punishment, demonic attack, loss of status or exclusion? Were donors promised a specific return? Were non-donors identified, contacted repeatedly or denied opportunities?",
        "Finally, examine the organisation. Are accounts independently reviewed? Can members see how funds are used? Are leaders subject to conflict-of-interest rules? Can a donor ask questions or withdraw a pledge without retaliation?"
      ]
    },
    {
      heading: "Documentation can restore clarity",
      paragraphs: [
        "A private record can help separate memory from repeated institutional explanations. Useful details include dates, exact wording, requested amounts, payment methods, witnesses, screenshots, receipts and any consequences after hesitation.",
        "Keep bank statements, loan agreements and messages somewhere the organisation cannot access. Do not obtain records illegally or put yourself at risk. Recording laws and privacy rules differ between countries.",
        "Documentation may support conversations with a debt adviser, lawyer, regulator, safeguarding professional or therapist. It may also simply help the person see the pattern clearly without committing to any formal complaint."
      ]
    },
    {
      heading: "Pausing can be a responsible first step",
      paragraphs: [
        "A person does not have to resolve every theological question before pausing donations. A temporary pause can create space to review essential expenses, debts, subscriptions, standing orders and previous commitments.",
        "The pause can be private. Direct confrontation may not be wise when housing, employment, immigration status, family relationships or safety depend on the organisation.",
        "A financial adviser or debt counsellor independent of the church can help establish what is affordable. A therapist familiar with spiritual abuse may help with guilt, fear and decision-making without telling the person what to believe."
      ]
    },
    {
      heading: "Christian giving is not meant to erase consent",
      paragraphs: [
        "Christian traditions differ over whether the Old Testament tithe remains a binding percentage for Christians. That disagreement should be acknowledged rather than hidden behind claims that only one interpretation is faithful.",
        "The New Testament repeatedly describes giving in language of willingness and proportion. In 2 Corinthians 9:7, Paul says giving should not be reluctant or under compulsion. In 2 Corinthians 8:12, acceptability is connected to what a person has rather than what they do not have. First Corinthians 16:2 describes setting aside an amount in keeping with income.",
        "Acts 5 also assumes that property and its proceeds remained under the owner’s control; the moral issue in the story is deception, not refusal to donate everything. First Timothy places serious weight on providing for one’s household. These texts make it difficult to defend a system that treats every available resource as automatically owed to a leader."
      ]
    },
    {
      heading: "The widow’s offering should not be used as a weapon",
      paragraphs: [
        "The story of the widow who gives two small coins is often used to praise sacrificial generosity. Christians interpret the passage in different ways. Some emphasise the widow’s devotion; others place it beside Jesus’ condemnation of religious leaders who “devour widows’ houses” and read it as exposure of an exploitative system.",
        "Because the passage is debated, it should not be used as a simple command that poor people must surrender their last resources to institutions with greater wealth. Whatever interpretation is preferred, the surrounding warning against exploitation must remain visible.",
        "A sermon that praises the widow while ignoring leaders’ duty to protect widows reverses the moral direction of the text."
      ]
    },
    {
      heading: "Prosperity theology should be tested by its treatment of the poor",
      paragraphs: [
        "Academic critiques of prosperity theology argue that some forms turn faith into a transaction and interpret wealth as evidence of spiritual success. This can shift attention away from structural inequality, honest work, mutual care and the church’s duty toward people in need.",
        "Theological research on 2 Corinthians 8 notes that Paul honours the agency of poor donors while also adjusting expectations to each person’s capacity. The collection is directed toward relieving need and creating a form of equality, not enriching the collector.",
        "A responsible theology of generosity can encourage courage and sacrifice without guaranteeing profit. It should judge success not by the wealth of leaders but by truthfulness, justice, care for vulnerable people and freedom from compulsion."
      ]
    },
    {
      heading: "What ethical fundraising in a church can look like",
      paragraphs: [
        "The purpose, recipient and legal entity are clearly identified. Donors receive enough information to understand how funds will be used. Restricted appeals explain what happens if more money is raised than needed.",
        "People can give privately, decline, change a pledge or ask questions without being shamed. Suggested amounts are optional. Large gifts receive a cooling-off period, especially when the donor is vulnerable or the gift could affect essential needs.",
        "Leaders do not promise guaranteed financial or medical returns. Accounts are reviewed by people independent of those spending the money. Conflicts of interest, compensation and related-party payments are disclosed.",
        "Pastoral care does not depend on giving history. The organisation has a complaints process, protects whistleblowers and reports suspected fraud or safeguarding concerns to appropriate external authorities."
      ]
    },
    {
      heading: "Research and legal limits",
      paragraphs: [
        "Direct empirical research on financial coercion inside religious organisations remains smaller than the literature on economic abuse in intimate relationships and charitable giving generally. The available evidence supports careful pattern-based assessment, not automatic conclusions about every church or doctrine.",
        "The legal status of a donation, pledge, fundraising statement or religious organisation varies by country. Conduct may involve charity law, consumer protection, fraud, undue influence, safeguarding, tax, employment, privacy or debt law, but this article cannot determine whether a particular case is unlawful.",
        "A person does not need to prove a criminal offence before taking financial harm seriously. At the same time, public allegations should be based on evidence and framed accurately. Qualified local advice is necessary when legal action, debt liability or regulatory reporting is being considered."
      ]
    }
  ],
  practicalOptions: [
    "Create a private cooling-off rule, such as waiting forty-eight hours before any unusual donation or pledge.",
    "List essential expenses first: housing, food, healthcare, transport, education, taxes, debt payments and dependants.",
    "Do not borrow, use credit or guarantee another person’s debt to meet a spiritual expectation.",
    "Pause standing orders or recurring payments while reviewing what you can afford.",
    "Ask for the organisation’s legal name, registration number, financial statements and purpose of the appeal.",
    "Ask whether the donation is restricted to a specific project and what happens if the target is exceeded.",
    "Do not share banking passwords, verification codes, payment cards or unrestricted account access.",
    "Keep receipts, pledge forms, messages, recordings where lawful and copies of fundraising materials.",
    "Review large gifts with a person who is independent of the organisation and unaffected by its leadership.",
    "Use a qualified debt adviser, accountant or financial counsellor when donations have contributed to arrears or borrowing.",
    "If a leader contacts you repeatedly, state your boundary in writing and keep the response.",
    "Protect access to identification, bank accounts, employment income and important financial documents.",
    "When reducing giving may trigger retaliation, plan around housing, work, family contact, immigration and digital safety before announcing the decision.",
    "Request correction or removal if your name, amount or testimony was published without informed consent.",
    "Report suspected fraud or misuse to the appropriate bank, police, charity regulator or professional authority in your country.",
    "Allow your theology to remain unresolved while you stabilise your finances. Pausing a payment does not require an immediate decision about faith."
  ],
  furtherReading: [
    {
      label: "Stylianou (2018) — Economic Abuse Within Intimate Partner Violence",
      note:
        "A review of definitions, measurement, consequences and interventions concerning economic abuse. Violence and Victims 33(1):3–22. DOI: 10.1891/0886-6708.VV-D-16-00112."
    },
    {
      label: "Postmus, Hoge, Breckenridge, Sharp-Jeffs and Chung (2020)",
      note:
        "A multicountry review of economic abuse definitions and measures across 46 peer-reviewed studies. Trauma, Violence, & Abuse 21(2):261–283. DOI: 10.1177/1524838018764160."
    },
    {
      label: "DellaVigna, List and Malmendier (2012) — Social Pressure in Charitable Giving",
      note:
        "A field experiment showing that easier avoidance of face-to-face solicitation reduced giving, supporting the role of social pressure. Quarterly Journal of Economics 127(1):1–56. DOI: 10.1093/qje/qjr050."
    },
    {
      label: "Shang and Croson (2009) — Social Information and Charitable Contributions",
      note:
        "A field experiment finding that information about previous high donations increased contributions. Economic Journal 119(540):1422–1439. DOI: 10.1111/j.1468-0297.2009.02267.x."
    },
    {
      label: "Karlan and McConnell (2014) — Public Recognition and Giving",
      note:
        "Experimental evidence that public recognition can increase gifts through social-image motives. Journal of Economic Behavior & Organization 106:402–412. DOI: 10.1016/j.jebo.2014.06.013."
    },
    {
      label: "Mulvihill, Aghtaie, Matolcsi and Hester (2023)",
      note:
        "Research on spiritual abuse and religious coercive control, including the use of doctrine and sacred authority to manipulate and isolate. Criminology & Criminal Justice. DOI: 10.1177/17488958221112057."
    },
    {
      label: "Lazarus, Tickner and Button (2025) — Pulpit, Power, and Predation",
      note:
        "A qualitative analysis of public discourse about unethical financial exploitation by charismatic faith leaders and the use of spiritual trust for personal gain. DOI: 10.1177/20503032251381309."
    },
    {
      label: "Taru and McNeill (2024) — “Faith it, till you make it”",
      note:
        "An ethnographic study of prosperity gospel and financial pressure among young Pentecostal Christians in Harare. African Studies Review. Open access through Cambridge University Press."
    },
    {
      label: "Wrenn (2019) — Consecrating Capitalism",
      note:
        "An economic and cultural critique of the United States prosperity gospel and its promise that faith and giving guarantee health and wealth. Journal of Economic Issues 53(2):425–432. DOI: 10.1080/00213624.2019.1594528."
    },
    {
      label: "Barclay (2023) — Rich Poverty: 2 Corinthians 8.1–15",
      note:
        "A New Testament study of poverty, generosity, agency and giving according to capacity in Paul’s Jerusalem collection. New Testament Studies 69(3):243–257. DOI: 10.1017/S002868852200039X."
    },
    {
      label: "Fundraising Regulator — Code of Fundraising Practice",
      note:
        "Current UK standards stating that fundraising should not place undue pressure on people, should respect requests to end contact and should take additional care with donors in vulnerable circumstances."
    },
    {
      label: "Charity Commission — Fundraising guidance",
      note:
        "Official guidance on lawful, ethical and transparent fundraising, trustee responsibility and the need to protect public trust. Legal application is jurisdiction-specific."
    }
  ]
},

  
  {
    slug: "supporting-someone-still-inside",
    title: "Supporting someone who is still involved",
    deck:
      "An evidence-informed guide to preserving connection, supporting independent judgement and planning safely without taking control away from the person.",
    category: "Helping someone else",
    readingTime: 20,
    intensity: "moderate",
    warnings: [
      "Spiritual abuse",
      "Coercive control",
      "Threats of punishment or damnation",
      "Medical neglect",
      "Family rejection",
      "Shunning",
      "Suicide or self-harm"
    ],
    image: "/images/friends-sunset.jpg",
    imageAlt: "Friends standing with their arms around one another at sunset.",
    overview:
      "When someone remains in a high-control religious environment, the task of a friend or family member is not to win an argument or manufacture an immediate exit. It is to preserve a trustworthy relationship, support the person’s capacity to observe and choose, reduce practical isolation and respond proportionately to risk. Research specific to helping current members of high-control religious groups remains limited, so this guide does not pretend that one protocol has been proven for every setting. It integrates findings from studies of religious exit and ostracism, coercive control, informal social support, survivor-centred care, motivational interviewing and psychological reactance. The common ethical principle is restoration of agency: support should widen the person’s real options rather than replace one controlling authority with another.",
    keyPoints: [
      "Treat continued contact as part of the safety infrastructure. Isolation can increase dependence on the group and make later help-seeking more difficult.",
      "Do not require the person to accept labels such as cult, abuse or trauma before you take their observations seriously.",
      "Ask about concrete patterns: what happens after disagreement, whether private information remains private, and whether refusal or outside advice is genuinely allowed.",
      "Use autonomy-supportive language. Forceful demands can evoke anger and counter-argument, especially when identity, family and belonging are already under threat.",
      "Listen for ambivalence instead of treating it as dishonesty. A person can value faith, relationships or purpose while also recognising fear, exploitation or harm.",
      "Offer practical options in small, reversible steps: a ride, a meal, secure document storage, an independent appointment or a place to make a private call.",
      "Do not create a surprise confrontation, expose doubts to leaders or contact the group on the person’s behalf without consent unless an immediate safeguarding duty requires action.",
      "Leaving can involve heightened retaliation, shunning, financial loss or medical risk. A safe plan is more useful than a deadline.",
      "Use safer communication practices when monitoring is possible. A message that looks supportive to you may create danger if another person reads it.",
      "Take immediate danger, stalking, violence, child abuse, forced sexual activity, serious medical neglect and credible suicide or homicide threats seriously and seek appropriate specialist or emergency help.",
      "Remain steady if the person changes their mind, returns or defends the group. Non-linear change does not prove that the concern was invented.",
      "Know your limits. A supporter can be reliable without becoming the person’s investigator, therapist, lawyer or sole emergency service."
    ],
    fullSections: [
      {
        heading: "Begin with the evidence—and its limits",
        paragraphs: [
          "There is no large clinical trial showing a single best method for helping a person who remains in a high-control religious group. The literature is distributed across several neighbouring fields. Studies of people leaving high-cost religious communities describe fear, guilt, grief, identity disruption and the loss of an entire social world. Research on religious shunning shows that exit can threaten belonging, self-esteem, family relationships and practical stability. Research on coercive control demonstrates why a pattern of surveillance, isolation, dependency and punishment can restrict choice even when physical force is absent.",
          "Evidence from intimate partner violence cannot simply be copied into a religious context. A congregation is not the same as an intimate relationship, and not every demanding religion is coercive. The comparison is useful only where mechanisms overlap: dependency, monitoring, retaliation, restricted information, economic pressure, threats and the systematic narrowing of realistic alternatives. This guide therefore uses mechanism-based reasoning rather than diagnosing a group from its doctrine or intensity.",
          "The evidence base also has sampling limits. Research on religious exit often relies on particular communities, online recruitment, retrospective accounts and cross-sectional designs. Informal-support research is stronger in domestic-abuse settings but remains uneven across cultures, genders and minority groups. Responsible practice means using the findings as provisional guidance, checking them against the person’s circumstances and avoiding promises that a particular conversation will cause change."
        ]
      },
      {
        heading: "Why belonging can be both meaningful and constraining",
        paragraphs: [
          "A religious community may provide faith, friendship, family continuity, childcare, housing, employment, education, identity, status, purpose and a language for interpreting the world. These benefits can be real even when serious harm is also present. Asking someone to leave may therefore sound less like an invitation to safety and more like a demand to surrender their entire social and moral world.",
          "Studies of former Jehovah’s Witnesses and other high-cost religious groups describe exit as an identity transition rather than a single decision. Ransom and colleagues found associations among ostracism, prior commitment, post-exit identification, self-esteem and well-being. Björkmark and colleagues’ qualitative research similarly describes living between two worlds, with fear, sorrow, relational loss and existential disruption. These findings do not predict what one individual will do, but they explain why apparent hesitation may be rational under conditions of high social cost.",
          "A useful question is not, “Why will they not leave?” but, “What would leaving currently cost, what risks would it create, and which alternatives are actually available?” That shift prevents the supporter from mistaking constraint for consent or ambivalence for weakness."
        ]
      },
      {
        heading: "Preserve the relationship as a bridge to the outside world",
        paragraphs: [
          "Informal social support is repeatedly associated with better mental-health and safety outcomes in abuse research, although intervention studies vary in quality. Reviews by Sylaska and Edwards and by Ogbe and colleagues show that responses from friends, family and community networks can influence disclosure, help-seeking and well-being. The practical implication is not that a friend can solve coercion. It is that a reliable relationship can keep information, emotional validation and material help within reach.",
          "Ordinary contact matters. Continue talking about food, work, children, music, sport, study and shared memories rather than making every exchange an assessment of the group. This communicates that the relationship is not conditional on adopting your interpretation. It also gives the person a social identity outside the organisation without requiring them to renounce the identity they still hold.",
          "Reliability is more useful than intensity. Keep manageable promises, avoid dramatic declarations you cannot sustain, and do not disappear after a difficult conversation. A simple message such as, “We do not have to agree about everything. I care about you, and the invitation remains open,” can preserve access without pretending that your concerns have vanished."
        ]
      },
      {
        heading: "Understand why forceful persuasion may fail",
        paragraphs: [
          "Psychological reactance theory predicts that people may resist messages perceived as threats to freedom. Recent meta-analytic evidence across persuasion studies finds that high freedom-threatening language increases anger, negative thoughts and reactance compared with less controlling language. This does not mean that every direct statement backfires or that dangerous conduct should be described vaguely. It means that commands such as “You must leave now” can become part of the person’s struggle to defend autonomy, identity or belonging.",
          "A direct attack on the person’s beliefs may also activate identity protection. If the group has already taught that outsiders are hostile, deceived or persecutory, ridicule can appear to confirm the warning. The supporter then becomes evidence for the group’s narrative rather than a source of independent information.",
          "Use clear but choice-preserving language: “I am concerned by what happened after you said no. Would you be willing to tell me how you understood it?” or “I see this differently, but you decide what you do next. If you want options, I will help you examine them.” Autonomy support is not neutrality about harm; it is a way of separating honest concern from control."
        ]
      },
      {
        heading: "Use a structured listening method",
        paragraphs: [
          "The World Health Organization teaches the LIVES framework for first-line support after violence: Listen, Inquire about needs and concerns, Validate, Enhance safety and connect with Support. It was designed for health workers and intimate partner violence, not religious exit, but its sequence offers a disciplined alternative to interrogation. Listen before interpreting. Ask what the person needs. Validate the experience without claiming facts you cannot know. Consider safety. Offer support that the person can choose.",
          "Motivational interviewing provides another useful discipline: ask open questions, affirm effort and values, reflect what you hear and summarise without turning the summary into a verdict. Evidence for motivational interviewing with survivors of intimate partner violence is promising but not definitive; for example, Saftlas and colleagues’ randomised trial did not produce conventionally significant effects on its main change outcomes. Use the conversational principles modestly, not as a technique for covertly engineering a decision.",
          "A practical sequence is: ask permission, explore, reflect, clarify options and agree on one next step. For example: “Would it be all right if I ask about the meeting?” “What happened when you disagreed?” “It sounds as though you value the community and also felt afraid of the consequences.” “Would information, transport or simply more time be useful?” “What, if anything, would you like me to do before we speak again?”"
        ]
      },
      {
        heading: "Ask questions that make patterns observable",
        paragraphs: [
          "Broad labels invite broad defences. Specific questions help the person examine how power operates. Ask: “Can you say no without losing status, relationships or access to necessities?” “Who can challenge a leader’s decision, and what happened the last time someone tried?” “Are you allowed to seek independent medical, legal or psychological advice?” “What information must members disclose, who can see it and can consent be withdrawn?”",
          "Other useful questions concern alternatives and proportionality: “What would happen if you attended less often?” “Can you keep relationships with former members?” “Are financial requests transparent, voluntary and reversible?” “Does correction apply to leaders as well as ordinary members?” “Are accusations investigated independently?” “Can you leave without being threatened, publicly exposed or cut off from family?”",
          "Do not fire these questions in a single session. Choose one or two that arise naturally from what the person has already described. After asking, tolerate silence. The aim is not to obtain a confession but to support observation. If they defend the group, reflect the value beneath the defence—loyalty, faith, gratitude, fear of unfair judgement—before returning to the concrete event."
        ]
      },
      {
        heading: "Validate experience without forcing an interpretation",
        paragraphs: [
          "Validation means recognising the person’s experience and the logic of their response. It does not require agreement with every conclusion. You might say, “Being publicly corrected after sharing something private sounds frightening,” or “It makes sense that you feel torn when your family and faith are both involved.”",
          "Avoid premature certainty: “You have been brainwashed,” “Everyone there is evil,” or “Nothing good you experienced was real.” Such statements can erase the person’s agency and positive memories, and they may be factually broader than the evidence permits. They also create a false choice between acknowledging harm and preserving meaningful parts of the person’s history.",
          "Use the person’s language where possible. If they say pressure, fear, punishment or loss of choice, begin there. Labels can be introduced as optional tools: “Some researchers call repeated patterns like monitoring, isolation and punishment coercive control. Does that concept help describe any part of your experience, or not?”"
        ]
      },
      {
        heading: "Build practical independence before demanding a decision",
        paragraphs: [
          "Autonomy requires more than confidence. It depends on real resources: private information, money, transport, documents, healthcare, housing, communication and relationships. A person may understand the harm clearly and still lack a safe alternative. Practical support should therefore expand options in small, reversible steps.",
          "Possible offers include storing copies of identification or important records with consent, paying directly for an independent professional appointment, providing transport without requiring a full disclosure, identifying a neutral place to meet, helping the person open an account only they can access, or keeping a spare set of essential items. Do not take possession of documents, money or devices in a way that makes the person dependent on you.",
          "Ask before acting and define the boundary of the offer. “I can keep a sealed copy of these documents until you ask for them,” is clearer than, “I will handle everything.” Whenever legal, immigration, child-protection, medical or financial issues are involved, encourage advice from an appropriately qualified professional who is independent of both the group and the supporter."
        ]
      },
      {
        heading: "Plan for safety without imposing a deadline",
        paragraphs: [
          "Safety planning is useful even when a person does not intend to leave. Research on survivor-centred safety planning emphasises context, culture, available resources and the person’s own risk assessment. A plan may cover a safe contact, transport, medication, emergency money, documents, children or dependants, a temporary place to stay and instructions about whom to contact under defined conditions.",
          "Agree on a code word or ordinary-looking phrase that has one specific meaning, such as “call me,” “come and get me,” or “contact emergency services.” Confirm how long the agreement remains active and what to do if the person cannot answer. Do not invent a secret plan that they have not accepted.",
          "Avoid surprise interventions, group confrontations or contact with leaders. Disclosure of doubt can lead to intensified monitoring, confession demands, discipline, shunning or loss of practical support. If immediate danger is absent, the person should usually control when and how information is shared. Where a child or vulnerable adult may be at risk, or where professional reporting duties apply, obtain specialist safeguarding advice and explain any limits to confidentiality."
        ]
      },
      {
        heading: "Treat digital safety as part of the plan",
        paragraphs: [
          "Assume that phones, email, cloud accounts, vehicles, shared calendars and social media may be visible to other people until you know otherwise. Technology-safety guidance warns that abrupt changes to passwords, settings or devices can alert a controller and may escalate risk. A safer device or account is helpful only if using it does not itself create suspicion.",
          "Ask which channel is safe and what language is safe to send. Do not text labels such as abuse, cult, escape plan or police unless the person has confirmed that the device and previews are private. Disable unnecessary message previews only with their agreement. Consider whether location sharing, family accounts, browser synchronisation, shared phone plans, connected cars or recovery email addresses expose activity.",
          "Documentation can reveal patterns and support later professional action, but it must be the person’s choice and stored safely. Record dates, exact words, witnessed conduct, financial requests, injuries or medical consequences without embellishment. Never obtain evidence by illegal access, impersonation or covert methods that create additional danger. Specialist technology-safety or legal advice is preferable when monitoring or stalking is suspected."
        ]
      },
      {
        heading: "Know when the response must become urgent",
        paragraphs: [
          "A calm, autonomy-supportive approach does not mean minimising danger. Seek urgent local help when there is immediate risk of serious violence, forced sexual activity, abduction, stalking with escalation, access to weapons combined with threats, credible homicide or suicide plans, serious medical neglect, abuse of a child, or a person who cannot protect themselves. The exact legal duties and emergency pathways depend on location.",
          "Ask direct questions when risk is disclosed: “Are you in immediate danger?” “Has anyone threatened to kill you, themselves or another person?” “Are weapons accessible?” “Is a child or dependent person unsafe?” “Do you need urgent medical care?” Asking clearly does not create the danger; it helps determine the appropriate response.",
          "Whenever possible, involve the person in the call and explain what information will be shared. If immediate action is required without consent, disclose only what responders need, avoid broadcasting the concern to the religious community and document why the situation met the emergency threshold."
        ]
      },
      {
        heading: "Respond steadily if they remain, return or change their account",
        paragraphs: [
          "Change under coercive conditions is often non-linear. People may disclose concern, retract it, defend the group, leave, return or maintain selected relationships after departure. This can reflect fear, dependency, grief, new information, continuing belief or a realistic assessment of costs. It does not automatically mean manipulation or bad faith.",
          "Avoid punishment disguised as a boundary: “Do not contact me unless you leave.” A genuine boundary names what you can or cannot do without controlling their decision: “I cannot give money to the organisation, but I can buy groceries,” or “I cannot participate in meetings with that leader, but I can meet you elsewhere.”",
          "After departure, do not expect immediate relief or ideological agreement. Former members may need help with housing, employment, healthcare, education, parenting, grief, identity and ordinary routines. Respect whether they retain faith, change tradition, become uncertain or leave belief entirely. Recovery should not be measured by convergence with the supporter’s worldview."
        ]
      },
      {
        heading: "Protect the supporter’s judgement and capacity",
        paragraphs: [
          "Supporting someone through prolonged uncertainty can produce anger, fear, exhaustion and an urge to take over. Those reactions are understandable, but unexamined urgency can recreate the controlling pattern. Use your own confidential support, professional consultation or counselling without exposing identifying information unnecessarily.",
          "Decide what you can offer sustainably. You may provide one weekly call, emergency transport within defined hours or help finding independent services. You may decline secrecy that places a child at risk, financial involvement with the group, direct confrontation or responsibility for monitoring the person around the clock.",
          "Keep the support network wider than one relationship when the person agrees. A resilient plan may include trusted relatives, friends, healthcare professionals, advocates, legal advisers, safeguarding services and practical community resources. No single supporter should become the new gatekeeper through whom every decision must pass."
        ]
      },
      {
        heading: "A cautious synthesis of what the research supports",
        paragraphs: [
          "Across these literatures, the most defensible approach is relational, autonomy-supportive and safety-aware. Preserve access to trustworthy relationships. Ask about observable patterns rather than demanding a label. Validate experience without claiming certainty. Expand concrete options. Plan for risk collaboratively. Use specialist help where the consequences exceed your competence.",
          "The research does not justify a guarantee that gentle language will produce insight, that continued contact will prevent harm or that leaving is always safer at a particular moment. Nor does it justify silence when danger is immediate. Evidence-informed support is not passive: it is disciplined action calibrated to agency, dependency, context and risk.",
          "The standard is not whether the person follows your advice. The standard is whether your involvement increases truthful information, realistic options, safety and freedom of conscience while reducing isolation and unnecessary coercion."
        ]
      }
    ],
    practicalOptions: [
      "Send one low-pressure message that preserves connection: “No reply is required. I care about you, and the invitation remains open.”",
      "Ask permission before discussing the group: “Would you rather talk about this now, another time or not today?”",
      "Use one concrete question about behaviour instead of a global label: “What happened after you said no?”",
      "Reflect ambivalence accurately: “Part of you values the community, and part of you is worried about how disagreement is treated.”",
      "Offer a small, reversible form of help such as transport, food, a private place to call or an independent appointment.",
      "Agree on a safe communication channel, message wording and code phrase; do not assume a device is private.",
      "With consent, prepare copies of identification, medication information, key contacts and essential records in a secure location.",
      "Write down only what you directly witnessed or were told, with dates and exact wording; store it where it will not create risk.",
      "Map possible losses before any exit: housing, income, education, childcare, family contact, immigration status, healthcare and community.",
      "Identify independent professional options without booking, reporting or contacting anyone on the person’s behalf unless authorised.",
      "Set clear supporter boundaries that describe your actions rather than dictate theirs.",
      "If danger may be immediate, ask directly about violence, weapons, stalking, medical risk, child safety and suicide or homicide threats, then use appropriate local emergency or safeguarding services."
    ],
    furtherReading: [
      {
        label: "Ransom, Monk, Qureshi and Heim (2020), Life After Social Death",
        note: "A quantitative social-identity study of 554 former Jehovah’s Witnesses examining ostracism, exit type, commitment, identity transition, self-esteem and well-being. Pastoral Psychology, 70, 53–69. DOI: 10.1007/s11089-020-00935-0."
      },
      {
        label: "Ransom, Monk and Heim (2021), Grieving the Living",
        note: "A qualitative social-identity analysis of post-Jehovah’s Witness life and the relational consequences of ostracism. PLOS ONE, 16(7), e0254848. DOI: 10.1371/journal.pone.0254848."
      },
      {
        label: "Björkmark, Koskinen and Koirikivi (2021), Living Between Two Different Worlds",
        note: "A qualitative study of leaving a high-cost religious group, including fear, guilt, sorrow, relational loss and existential disruption. Journal of Religion and Health, 61, 4721–4737. DOI: 10.1007/s10943-021-01397-1."
      },
      {
        label: "Sylaska and Edwards (2014), Disclosure of Intimate Partner Violence to Informal Social Support Network Members",
        note: "A major review of disclosure and help-seeking through friends, family and other informal relationships. Trauma, Violence, & Abuse, 15(1), 3–21. DOI: 10.1177/1524838013496335."
      },
      {
        label: "Ogbe and colleagues (2020), Social-support interventions for survivors of intimate partner violence",
        note: "A systematic review of interventions intended to improve social support or mental-health outcomes. PLOS ONE, 15(6), e0235177. DOI: 10.1371/journal.pone.0235177."
      },
      {
        label: "McKenzie, Hegarty, Palmer and Tarzia (2022), Walking on Eggshells",
        note: "A qualitative study of how friends understand and navigate their role when supporting young women experiencing intimate partner violence. Journal of Interpersonal Violence, 37(9–10), NP7502–NP7527. DOI: 10.1177/0886260520967745."
      },
      {
        label: "Sorrentino and colleagues (2020), Mental Health Care in the Context of Intimate Partner Violence",
        note: "A qualitative study supporting flexible, validating and client-centred care that respects survivors’ right to determine their own interests. Psychiatric Services, 71(11), 1155–1161. DOI: 10.1176/appi.ps.202000041."
      },
      {
        label: "Saftlas and colleagues (2014), Motivational Interviewing and Intimate Partner Violence",
        note: "A randomised trial that illustrates both the promise and the uncertainty of motivational interviewing with survivors; the main between-group findings were not statistically significant. Journal of Women’s Health, 23(2), 101–109. DOI: 10.1089/jwh.2013.4456."
      },
      {
        label: "Li and colleagues (2026), Message Effects on Psychological Reactance",
        note: "Meta-analyses of 33 studies found that highly freedom-threatening language increased anger, negative cognition and reactance compared with less controlling language. Human Communication Research, 52(1), 38–62."
      },
      {
        label: "World Health Organization (2019), Caring for Women Subjected to Violence",
        note: "The LIVES framework—Listen, Inquire, Validate, Enhance safety and Support—provides a structured model for first-line, survivor-centred response. ISBN: 978-92-4-151710-2."
      },
      {
        label: "Safety Net Project, Documentation Tips for Survivors of Technology Abuse",
        note: "Practical guidance on documenting patterns of monitoring and technology-facilitated abuse without overlooking the risks created by evidence collection."
      },
      {
        label: "Evidence boundary",
        note: "Most intervention evidence comes from intimate partner violence and specific high-cost religious communities. It should inform careful judgement, not be treated as proof that every religious setting or every person follows the same pattern."
      }
    ]
  },
{
  "slug": "a-letter-to-you-dealing-with-suicidal-thoughts",
  "title": "A letter to you who is dealing with suicidal thoughts",
  "deck": "A personal letter of care, followed by practical steps and verified contacts for getting through the next few minutes safely.",
  "category": "Immediate support",
  "readingTime": 6,
  "intensity": "high",
  "warnings": [
    "Suicide or self-harm"
  ],
  "image": "/images/reasons-to-stay.jpg",
  "imageAlt": "An orange sunset over the sea with small boats and the words Reasons to stay",
  "overview": "If you might act on suicidal thoughts now, have a plan or access to a way of harming yourself, or cannot keep yourself safe, move away from anything you could use, go where another person is present and call urgent support now. In Norway, call 113 for acute suicide risk or 116 117 for urgent out-of-hours medical help. In the United States and its territories, call or text 988. Elsewhere, use your local emergency number or FindAHelpline. The letter below offers companionship; it is not a substitute for crisis care.",
  "keyPoints": [
    "You do not have to solve your whole life today. The immediate task is to make the next few minutes safer.",
    "If you may act now, call emergency services and move towards another person. Do not remain alone while waiting for help.",
    "Put distance between you and anything you could use to hurt yourself; ask another person to hold or secure it.",
    "Tell someone plainly what is happening. A short message is enough: “I am not safe alone right now. Please stay with me and help me get urgent support.”",
    "In Norway, 113 is for acute suicide risk and 116 117 is the out-of-hours medical service for urgent situations that are not immediately life-threatening.",
    "In the United States and its territories, the 988 Suicide & Crisis Lifeline is available by call or text.",
    "Strong suicidal urges can change in intensity. Delay action, reduce access to means and let another person help carry the next decision.",
    "This letter is peer encouragement, not medical treatment. Professional and emergency support matter."
  ],
  "fullSections": [
    {
      "heading": "Before you read the letter",
      "paragraphs": [
        "If you think you may act on suicidal thoughts now, have made a plan, have access to a method, have already hurt yourself or cannot promise your immediate safety, treat this as an emergency. Move away from anything you could use to harm yourself, go to a shared or public place if you can do so safely, and call emergency services. Do not stay alone while help is on the way.",
        "You do not need to explain everything perfectly. You can say: “I am having suicidal thoughts and I am afraid I may act on them. I need help staying safe right now.” If speaking is difficult, show someone that sentence or send it as a message."
      ]
    },
    {
      "heading": "A letter from one human to another",
      "paragraphs": [
        "Hey friend,",
        "I want to send you love at a time when you need to know that someone out there is thinking of you. You are not alone, and you are needed in this world. Take a deep breath. Stay with us for this moment.",
        "You are the only you in the world. That is rare, amazing and worth protecting. Right now may feel too hard. Give this moment a little space. It may look like a mountain, but you do not have to climb the whole mountain today. Take only the next safe step.",
        "One thought that helped me was this: none of us knows what is waiting on the other side of this moment. Stay long enough to find out. Take the next step up the mountain and let someone help carry the weight.",
        "Please do not let the darkness make the decision for you today. There can be days when you genuinely laugh again. A wave of happiness may reach you in a way you cannot picture right now, and you may look back on today and recognise the strength it took to stay.",
        "You may one day become a light for someone else—not because suffering was necessary, but because you learned how precious it is to be met with care in the dark. For now, focus only on making the next hour safer. Be gentle with yourself. You are worthy of help, rest, safety and every joyful thing this life can still hold.",
        "With heartfelt love and strength, from one human to another."
      ]
    },
    {
      "heading": "For the next ten minutes",
      "paragraphs": [
        "Choose one action that reduces danger rather than trying to create a perfect plan. Hand medication, weapons, car keys or other means to someone trustworthy; move to a staffed or shared place; unlock the door for a responder; or call a person and ask them to come to you.",
        "Then narrow time. Drink some water, place both feet on the floor and name five things you can see. Breathe out a little longer than you breathe in. These steps do not solve the cause of the pain; they create time for the intensity to shift and for help to reach you.",
        "Avoid alcohol or drugs while the risk is high because they can reduce judgement and increase impulsivity. Ask another person to remain with you and make the next call together."
      ]
    },
    {
      "heading": "Get support beyond this page",
      "paragraphs": [
        "In Norway, Helsenorge advises calling 113 in acute suicide risk. If the situation is urgent but not immediately life-threatening, call the out-of-hours medical service on 116 117. You can also contact your GP when it is safe to wait for regular care.",
        "In the United States and its territories, call or text 988 for the Suicide & Crisis Lifeline. In other countries, call your local emergency number or use FindAHelpline to identify a verified service where you are.",
        "A website cannot assess your condition, monitor your safety or replace a qualified clinician. Use the contacts on this page and the AfterTheChurch safety page to reach a person who can respond in real time."
      ]
    }
  ],
  "practicalOptions": [
    "Move out of isolation: sit beside a trusted person, go to a staffed reception area or ask someone to come to you.",
    "Create distance from anything you could use to hurt yourself. Give it to someone else, leave the area or ask emergency services to help secure it.",
    "Send this exact message if words are hard: “I am not safe alone right now. Please stay with me and help me get urgent support.”",
    "Call 113 in Norway for acute suicide risk, 116 117 for urgent out-of-hours medical help, or your local emergency number.",
    "In the United States and its territories, call or text 988 to reach a crisis counsellor.",
    "Delay irreversible decisions. Commit only to the next ten minutes, then repeat while another person helps you.",
    "Avoid alcohol and non-prescribed drugs while the risk is high.",
    "Write down one safe person, one safe place and one number to call; keep the list where you can reach it quickly.",
    "Open the AfterTheChurch safety page for additional crisis, healthcare and survivor-support contacts."
  ],
  "furtherReading": [
    {
      "label": "Helsenorge: Advice if you have suicidal thoughts",
      "note": "Official Norwegian health guidance on acute suicide risk, talking to someone and obtaining professional help.",
      "href": "https://www.helsenorge.no/en/psykisk-helse/suicidal-thoughts-and-suicide/how-to-help-yourself/"
    },
    {
      "label": "Helsenorge: Help if you are struggling with mental health",
      "note": "Official information on 113, the 116 117 out-of-hours medical service and routes into mental healthcare in Norway.",
      "href": "https://www.helsenorge.no/en/psykisk-helse/help-if-you-are-struggling-with-mental-health/"
    },
    {
      "label": "988 Suicide & Crisis Lifeline",
      "note": "Free, confidential crisis support by call, text or chat in the United States and its territories, available 24 hours a day.",
      "href": "https://988lifeline.org/"
    },
    {
      "label": "FindAHelpline",
      "note": "A directory for finding crisis and emotional-support services by country. In immediate danger, use the emergency number where you are.",
      "href": "https://findahelpline.com/"
    },
    {
      "label": "AfterTheChurch safety contacts",
      "note": "The site’s practical directory of emergency, medical, abuse and survivor-support options.",
      "href": "/safety"
    }
  ]
}
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug) || null;
}
