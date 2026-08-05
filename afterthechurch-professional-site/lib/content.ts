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
  title: "Faith-healing claims and medical decisions",
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
  image: "/images/faith-healing-service.jpg",
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
