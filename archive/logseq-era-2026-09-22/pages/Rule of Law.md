public:: true

# Rule of Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:327893e98fdef23dc4614baa940fd72ae5af65f84ca1524134926d09006b53cf",
  "@type": "Page",
  "vc:slug": "rule-of-law",
  "title": "Rule of Law",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0168"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Rule of Law"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rule-of-law",
  "@type": "Class",
  "label": "Rule of Law",
  "definition": "The constitutional and institutional principle that all persons, institutions, and entities—including AI systems and their operators—are accountable to laws that are publicly promulgated, equally enforced, independently adjudicated, and consistent with international human rights norms. Applied to AI governance, the rule of law requires legal certainty, non-arbitrary decision-making, procedural fairness, and effective remedies for AI-related harms.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    },
    {
      "@id": "urn:ngm:class:legal-framework",
      "label": "Legal Framework"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:legal-framework",
        "label": "Legal Framework"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      },
      {
        "@id": "urn:ngm:class:democratic-values",
        "label": "Democratic Values"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rule-of-law:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:327893e98fdef23dc4614baa940fd72ae5af65f84ca1524134926d09006b53cf"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The principle that all persons, institutions and entities, including AI systems and their operators, are accountable to laws that are publicly promulgated, equally enforced, independently adjudicated and consistent with international human rights norms.

- ### Semantic Classification
  - owl-class:: spatial-computing:RuleofLaw
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Requires [[Legal Framework]], [[Accountability]]
  - Supports [[Human Rights]], [[Democratic Values]], [[AI Ethics]]
  - Related to [[Compliance Framework]], [[AI Governance]]

- ### Content
  - The principle that all persons, institutions and entities, including AI systems and their operators, are accountable to laws that are publicly promulgated, equally enforced, independently adjudicated and consistent with international human rights norms.

  - # Anacyclosis
  - It’s interesting in the current global political moment to look briefly at Anacyclosis. This is a political theory attributed to the ancient Greek historian Polybius, which posits that political systems evolve in a cyclical manner. The theory is based on the observation that governments tend to progress through six stages, each corresponding to a specific form of governance: monarchy, tyranny, aristocracy, oligarchy, democracy, and ochlocracy (mob rule). These stages are organized into three pairs, with each pair consisting of a ’good’ form of governance and its corresponding ’bad’ form.
		- Monarchy (benign) -&gt; Tyranny (corrupt): Monarchy is the rule by a single individual, such as a king or queen, who is considered to be a wise and benevolent ruler. However, as the monarchy endures, there is a risk that the ruler becomes corrupted or that a less competent or tyrannical successor takes over. This leads to tyranny, the degenerate form of monarchy, where the ruler becomes oppressive and self-serving.
		- Aristocracy (benign) -&gt; Oligarchy (corrupt): To counter the tyranny, a group of nobles or elites may overthrow the tyrant and establish an aristocracy, which is the rule by a select group of individuals who are considered wise and virtuous. Over time, the aristocracy may become more focused on their own interests and power, leading to an oligarchy. This is the degenerate form of aristocracy, where a small group of elites control the government for their own benefit.
		- Democracy (benign) -&gt; Ochlocracy (corrupt): The populace, dissatisfied with the oppressive rule of the oligarchs, may rise up and establish a democracy, which is the rule by the majority of the people through voting and participation in the political process. Democracy has the potential to create a fair and representative system of governance. However, as the democratic process becomes more susceptible to demagoguery, populism, and factionalism, it can devolve into ochlocracy or mob rule, where the government is influenced or controlled by unruly masses.
  - According to Polybius, these stages form a continuous cycle, as one formof governance gives way to another, and each form eventually becomes corrupted and degenerates into its corresponding ’bad’ form. The theoryof anacyclosis suggests that political systems are inherently unstable,with each form of governance containing the seeds of its owndestruction.

  - # Government over-reach through bureaucracy
  - As an contextual example of the soft power which political apparatus uses to influence emergent human behaviour and their markets it is useful to look again to the USA. In 2013, the Obama Administration,faced with a divided Congress, resorted to using the banking system as a means to implement policy through non-traditional channels. This effort,known as Operation Choke Point, was a continuation of their success in cutting off the offshore online poker industry from banking services.Initially, the crackdown was aimed at the payday lending industry, but it soon expanded to include gun sales and adult entertainment, and eventually up to 30 different industries.
  - The rationale behind Operation Choke Point was to target banks that facilitated fraud, as indicated by a high ratio of fraud and disputes.However, the operation soon evolved into a redlining of industries basedon nothing more than the perceived risk of reputational harm. Financial institutions were investigated without any evidence of losses.Throughout the entire operation, there was no new legislation or written guidance issued. Banks were simply warned of increased regulatory scrutiny if they did not comply.
  - Major banks continue to deny services to industries such as firearms and fossil fuels, and they continue to assign higher risk ratings to industries that may face government criticism, even in the absence of any official guidance. This utilisation of the financial system as a means of driving change is seen by some as a legitimate, if not ideal, mechanism; as just one more type of market actor. Regardless of one’s political perspective, it is important to consider the moral hazard of bypassing traditional political channels and using bureaucratic mechanisms as a means of affecting change in the free market. It is important to consider how the power of these tactics might be used in the future by opposing political groups. For example, supporters of Operation Choke Point who were in favour of increased financial pressure on the oil and gas industry may not feel the same if the same techniques were applied to organizations like Planned Parenthood. From this perspective, the tactics used by Operation Choke Point can be seen as undemocratic, regardless of who is deploying them. Bringing this back to our study of new financial tooling in crypto we can look to recent events:
		- January: Some banks start to wind down activity in the crypto industry
		- January 21st: Binance announces its banking partner, Signature Bank, refuses to process Swift payments for less than $100,000
		- January 27th: Federal Reserve denies Custodia Bank’s application to access Federal Reserve System
		- January 27th: Federal Reserve denies Custodia Bank’s application for a master account
		- January 27th: Federal Reserve releases statement discouraging banks from holding crypto assets or issuing stable coins
		- January 27th: National Economic Council issues policy statement discouraging banks from transacting with crypto assets or maintaining exposure to rypto depositors
		- February 2nd: DOJ announces investigation into Silvergate Bank over dealings with FTX and Alameda Research
		- February 6th: Binance announces suspension of USD bank transfers to and from offshore exchange
		- February 8th: Binance announces search for another banking partner
		- February 7th: Fed’s policy statement enters Federal Register as a final rule
		- Two outstanding applications for National Trust Bank licenses from Anchorage and Paxos likely to be rejected by the OCC
		- Banking services becoming increasingly difficult for crypto firms, some startups will likely now not make the attempt
  - The SEC sought to use its tools to control and centralise the ‘ramps’ into and out of digital assets. Under Chair Gensler, the SEC proposed a Safeguarding Rule (early 2023) that would have required registered investment advisors to use qualified custodians for all assets including cryptocurrencies, and that custodians indemnify the full asset value for losses—a provision critics argued could kill the custody business across all asset classes. The proposal drew substantial industry opposition from commentators including Caitlin Long (Custodia Bank), who noted the indemnification requirement could damage custody across all asset classes (not just crypto), and from Sarah Brennan and Republicans on the House Financial Services Committee. **Update (2025):** The Gensler-era Safeguarding Rule was among fourteen rulemakings withdrawn by the SEC in 2025. In September 2025 the SEC Division of Investment Management issued a no-action letter confirming that state-chartered trust companies can serve as qualified custodians for crypto assets, resolving a key point of contention. The U.S. IRS also significantly expanded its tax enforcement capacity during this period. The earlier timeline of bank de-risking from crypto (Silvergate, Signature Bank closures, Binance banking disruptions) remains an accurate historical record of that regulatory moment.



		- ### The Social Cost of Inequality
		- However, in societies that prioritize equality, life improves for all citizens. Infant mortality falls, lifespans lengthen, and population health increases \[dorling, finland, ref\]. Access to education rises,enabling greater social mobility \[The Parenthood Effect on GenderInequality 2013 \]. With reduced poverty and homelessness, there is lesscrime and violence \[ref needed\].
  - As unelected technocrats, the WEF’s impact on global policy can be observed through these aspects:
		- Convening power: The WEF’s Davos meeting is a high-profile event that attracts prominent political figures, business executives, and other influential individuals. This ability to assemble people allows the WEF to initiate conversations on global issues, create networks, and establish connections among key players. These interactions can lead to ideas and initiatives that might eventually shape global policy.

  ## Source

  - **Primary**: OECD AI Principles 2024 (Principle 1.2 component)
  - **Related**: UN Rule of Law definition, Venice Commission standards, EU Treaty principles

  ## Context

  Rule of law constitutes a fundamental component of OECD's human-centred values principle, establishing that AI development and deployment must occur within legal frameworks that provide certainty, fairness, procedural justice and effective remedies.

  ## Key Components

  ### Legality
  - **Legal certainty**: Clear, accessible and predictable laws governing AI
  - **Non-arbitrariness**: AI-influenced decisions based on law, not discretion
  - **Legitimate purposes**: AI deployment serving lawful objectives
  - **Legal basis**: Proper authorisation for AI system use

  ### Equality Before Law
  - **Non-discrimination**: Equal application of law regardless of characteristics
  - **Equal access**: Comparable opportunity to legal protections and remedies
  - **Impartial application**: AI systems not creating privileged classes
  - **Fair treatment**: Procedural equality in AI-influenced processes

  ### Due Process
  - **Procedural fairness**: Established processes for AI-influenced decisions
  - **Right to be heard**: Opportunity to present information and arguments
  - **Independent review**: Impartial adjudication of disputes
  - **Reasoned decisions**: Justification for AI-influenced outcomes
  - **Right to appeal**: Mechanisms to challenge decisions

  ### Access to Justice
  - **Effective remedies**: Practical recourse for AI-related harms
  - **Judicial review**: Courts able to scrutinise AI system use
  - **Legal representation**: Support navigating AI-influenced proceedings
  - **Reasonable timeframes**: Timely resolution of disputes
  - **Enforcement**: Ability to implement judicial decisions

  ## Relationships

  - **Parent Concept**: Human-Centred Values (AI-0159)
  - **Related Terms**:
  - Human Rights (AI-0166)
  - Democratic Values (AI-0167)
  - Accountability (AI-0165)
  - Fairness (OECD) (AI-0160)
  - **Operationalised Through**: Legal frameworks, judicial review, conformity assessment

  ## AI-Specific Rule of Law Challenges

  ### Legal Certainty
  - **Technological complexity**: Difficulty defining clear rules for evolving technology
  - **Opacity**: Black-box systems obscuring legal compliance verification
  - **Unpredictability**: Continuously learning systems changing behaviour
  - **Transnational operation**: Cross-border AI complicating jurisdictional clarity

  ### Equal Application
  - **Algorithmic bias**: Systematic disparities in AI treatment of groups
  - **Digital divide**: Unequal capacity to contest or benefit from AI
  - **Resource asymmetry**: Power imbalances between AI operators and affected persons
  - **Technical expertise gaps**: Knowledge barriers preventing effective legal challenge

  ### Due Process
  - **Automated decisions**: Reduced human judgment and discretion
  - **Scale**: Mass automated processing challenging individual consideration
  - **Timing**: Real-time decisions limiting opportunity for input
  - **Explanation challenges**: Difficulty understanding basis for AI outcomes

  ### Effective Remedy
  - **Attribution problems**: Identifying responsible parties in complex AI systems
  - **Causation difficulties**: Proving AI caused specific harm
  - **Quantification**: Measuring intangible or distributed harms
  - **Standing**: Determining who has right to challenge AI decisions

  ## EU AI Act Rule of Law Framework

  The EU AI Act implements rule of law through:
  - **Legal clarity**: Defined requirements for AI system categories
  - **Conformity assessment**: Verification of legal compliance before deployment
  - **Market surveillance**: Enforcement of legal obligations
  - **Administrative fines**: Graduated penalties for violations
  - **Judicial remedies**: Right to challenge AI-influenced decisions

  ## Implementation Requirements

  ### For Providers
  - Compliance with applicable legal frameworks
  - Documentation enabling legal compliance verification
  - Cooperation with authorities and courts
  - Respect for intellectual property within legal bounds

  ### For Deployers
  - Lawful use within intended purpose and legal constraints
  - Respect for individual rights and procedural requirements
  - Cooperation with legal processes and investigations
  - Implementation of legally mandated safeguards

  ### For Regulators
  - Clear, accessible and consistent rule-making
  - Impartial and evidence-based enforcement
  - Transparent decision-making processes
  - Effective remedies for regulatory failings

  ## Sectoral Applications

  ### Criminal Justice
  - Presumption of innocence preservation
  - Prohibition on arbitrary detention
  - Right to fair trial protection
  - Proportionality in sentencing and bail

  ### Civil Proceedings
  - Equal access to civil justice
  - Procedural fairness in AI-assisted dispute resolution
  - Right to impartial tribunal
  - Enforcement of judgments

  ### Administrative Law
  - Legitimate purposes for governmental AI use
  - Procedural requirements for administrative decisions
  - Right to administrative review
  - Reasoned decision obligations

  ## 2024 Revision Emphasis

  OECD 2024 revision strengthened rule of law by:
  - Explicit enumeration alongside human rights and democracy
  - Emphasis on accountability to law rather than discretion
  - Connection to independent adjudication
  - Integration with international human rights norms

  ## Assessment Dimensions

  Rule of law compliance evaluated through:
  - Legal framework adequacy for AI governance
  - Consistency and predictability of law application
  - Accessibility and effectiveness of remedies
  - Independence and capacity of oversight institutions
  - Empirical outcomes for affected persons

  ## Related Standards

  - Venice Commission Rule of Law Checklist
  - UN Basic Principles on Independence of Judiciary
  - Bangalore Principles of Judicial Conduct
  - Council of Europe standards on access to justice

  ## See Also

  - Human Rights (AI-0166)
  - Democratic Values (AI-0167)
  - Accountability (AI-0165)
  - Conformity Assessment (EU AI Act)
  - Administrative Fine (EU AI Act)

  ---

  *Part of AI Grounded Ontology - OECD AI Principles Framework*
  *Aligned with UN, Council of Europe and EU rule of law standards*


  ## Academic Context

  - Brief contextual overview
  - The rule of law is a foundational principle in constitutional democracies, ensuring that all individuals, institutions, and entities—including AI systems and their operators—are subject to laws that are publicly promulgated, equally enforced, independently adjudicated, and consistent with international human rights norms
  - The principle is not static; it has evolved through centuries of jurisprudence, particularly in the UK, where it is deeply embedded in common law traditions and constitutional practice
  - In North England, cities such as Manchester, Leeds, Newcastle, and Sheffield have seen increasing engagement with rule of law principles, especially in the context of digital governance and public sector innovation

  - Key developments and current state
  - The rule of law remains a central topic in debates about democratic resilience, accountability, and the ethical deployment of technology
  - Recent years have seen a growing emphasis on the rule of law in relation to emerging technologies, including AI, where questions of transparency, accountability, and fairness are paramount

  - Academic foundations
  - The principle is rooted in the works of scholars such as Albert Dicey, Joseph Raz, Friedrich Hayek, and Trevor Allan, who have debated the balance between legal form and substantive content
  - Dicey’s classic formulation emphasises the supremacy of regular law over arbitrary power, while Raz and Hayek stress the importance of legal certainty and the protection of individual rights

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Many organisations, including government agencies, tech companies, and legal institutions, have adopted rule of law principles as part of their governance frameworks
  - Notable organisations and platforms
		- The UK government’s Office for Artificial Intelligence has integrated rule of law considerations into its AI governance strategy
		- The Law Society of England and Wales has published guidance on the rule of law in the context of digital transformation
		- In North England, the Greater Manchester Combined Authority has piloted initiatives to enhance transparency and accountability in local government, drawing on rule of law principles

  - UK and North England examples where relevant
  - Manchester’s Digital Innovation Hub has developed tools to monitor compliance with legal standards in public services
  - Leeds City Council has implemented a digital platform to improve access to legal information and support for residents
  - Newcastle’s Smart City programme includes measures to ensure that data-driven decision-making is subject to legal scrutiny
  - Sheffield’s local government has partnered with academic institutions to explore the application of rule of law principles in smart city technologies

  - Technical capabilities and limitations
  - Advances in AI and data analytics have enabled more sophisticated monitoring and enforcement of legal standards
  - However, challenges remain in ensuring that automated systems are transparent, explainable, and subject to independent review
  - There is ongoing debate about the extent to which AI systems can be held accountable under the rule of law, particularly when they operate in complex, dynamic environments

  - Standards and frameworks
  - The UK has adopted several standards and frameworks to support the rule of law, including the Human Rights Act 1998 and the Data Protection Act 2018
  - International frameworks, such as the United Nations Guiding Principles on Business and Human Rights, provide additional guidance on the application of rule of law principles in global contexts

  ## Research & Literature

  - Key academic papers and sources
  - Dicey, A. V. (1885). *Introduction to the Study of the Law of the Constitution*. London: Macmillan.
		- DOI: 10.1017/CBO9781139161758
  - Raz, J. (1979). *The Authority of Law: Essays on Law and Morality*. Oxford: Clarendon Press.
		- DOI: 10.1093/acprof:oso/9780198253494.001.0001
  - Hayek, F. A. (1960). *The Constitution of Liberty*. Chicago: University of Chicago Press.
		- DOI: 10.7208/chicago/9780226320847.001.0001
  - Allan, T. R. S. (2001). *Constitutional Justice: A Liberal Theory of the Rule of Law*. Oxford: Oxford University Press.
		- DOI: 10.1093/acprof:oso/9780198262453.001.0001
  - James, L., & van Zyl Smit, J. (2025). *The Rule of Law: What Is It and Why Does It Matter?* Constitution Unit Briefing. University College London.
		- URL: https://www.ucl.ac.uk/social-historical-sciences/constitution-unit/constitution-unit-publications/constitution-unit-briefings/rule-law-what-it-and-why-does-it-matter

  - Ongoing research directions
  - The intersection of rule of law principles with emerging technologies, particularly AI and blockchain
  - The role of public participation and civic engagement in strengthening the rule of law
  - The impact of globalisation and digitalisation on the application of rule of law principles in different jurisdictions

  ## UK Context

  - British contributions and implementations
  - The UK has a long history of upholding the rule of law, dating back to the Magna Carta of 1215
  - The principle is enshrined in the UK constitution and is a key focus of legal and political discourse
  - Recent initiatives, such as the Bingham Centre for the Rule of Law, have played a significant role in promoting and defending the rule of law in the UK

  - North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield have become centres of innovation in digital governance and public sector reform
  - These cities have hosted conferences, workshops, and collaborative projects focused on the rule of law and its application in the digital age

  - Regional case studies
  - Manchester’s Digital Innovation Hub has developed a suite of tools to monitor compliance with legal standards in public services, demonstrating the practical application of rule of law principles
  - Leeds City Council’s digital platform has improved access to legal information and support for residents, enhancing transparency and accountability
  - Newcastle’s Smart City programme has implemented measures to ensure that data-driven decision-making is subject to legal scrutiny, reflecting a commitment to the rule of law
  - Sheffield’s partnership with academic institutions has explored the application of rule of law principles in smart city technologies, highlighting the importance of interdisciplinary collaboration

  ## Future Directions

  - Emerging trends and developments
  - The increasing use of AI and data analytics in public services is likely to raise new challenges and opportunities for the rule of law
  - There is a growing recognition of the need for international cooperation to address the global dimensions of rule of law issues

  - Anticipated challenges
  - Ensuring that automated systems are transparent, explainable, and subject to independent review
  - Balancing the benefits of technological innovation with the need to protect individual rights and uphold legal standards

  - Research priorities
  - The development of robust frameworks for the ethical deployment of AI in public services
  - The exploration of new models of public participation and civic engagement in the digital age
  - The study of the impact of globalisation and digitalisation on the application of rule of law principles in different jurisdictions

  ## References

  1. Dicey, A. V. (1885). *Introduction to the Study of the Law of the Constitution*. London: Macmillan. DOI: 10.1017/CBO9781139161758
  2. Raz, J. (1979). *The Authority of Law: Essays on Law and Morality*. Oxford: Clarendon Press. DOI: 10.1093/acprof:oso/9780198253494.001.0001
  3. Hayek, F. A. (1960). *The Constitution of Liberty*. Chicago: University of Chicago Press. DOI: 10.7208/chicago/9780226320847.001.0001
  4. Allan, T. R. S. (2001). *Constitutional Justice: A Liberal Theory of the Rule of Law*. Oxford: Oxford University Press. DOI: 10.1093/acprof:oso/9780198262453.001.0001
  5. James, L., & van Zyl Smit, J. (2025). *The Rule of Law: What Is It and Why Does It Matter?* Constitution Unit Briefing. University College London. URL: https://www.ucl.ac.uk/social-historical-sciences/constitution-unit/constitution-unit-publications/constitution-unit-briefings/rule-law-what-it-and-why-does-it-matter
  6. British Institute of Human Rights. (2025). *Separation of Powers, Parliamentary Sovereignty & the Rule of Law*. URL: https://www.bihr.org.uk/get-informed/legislation-explainers/separation-of-powers-parliamentary-sovereignty-the-rule-of-law
  7. World Justice Project. (2025). *What is the Rule of Law?* URL: https://worldjusticeproject.org/about-us/overview/what-rule-of-law
  8. The Law Society. (2025). *The Rule of Law: What Does It Really Mean?* URL: https://www.lawsociety.org.uk/en/topics/human-rights/the-rule-of-law-what-does-it-really-mean
  9. LexisNexis UK. (2025). *The Rule of Law*. URL: https://www.lexisnexis.co.uk/about-us/rule-of-law


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
