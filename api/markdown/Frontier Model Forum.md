public:: true

# frontier model forum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c27adf579409c627d57e2e4620ac1f6e4d22708d1a3d0e458519ec1b838d280",
  "@type": "Page",
  "vc:slug": "frontier-model-forum",
  "title": "frontier model forum",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:frontier-model-forum",
  "@type": "Class",
  "label": "Frontier Model Forum",
  "definition": "The Frontier Model Forum (FMF) is an industry consortium founded in July 2023 by Anthropic, Google, Microsoft, and OpenAI to advance the safe and responsible development of frontier AI models — the most capable general-purpose AI systems at the frontier of performance. It operates as a collaborative, pre-competitive body focused on technical AI safety research, shared safety evaluations, red-teaming methodologies, and engagement with policymakers and civil society. The Forum functions as a bridge between frontier AI developers and regulatory bodies, aiming to establish shared technical standards and best practices without constituting a formal standards organisation or regulatory authority.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-policy", "label": "AI Policy"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"},
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:ai-safety-institute", "label": "AI Safety Institute"},
      {"@id": "urn:ngm:class:global-partnership-on-ai", "label": "Global Partnership on AI"},
      {"@id": "urn:ngm:class:oecd-ai-policy-observatory", "label": "OECD AI Policy Observatory"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:safety-evaluation", "label": "Safety Evaluation"},
      {"@id": "urn:ngm:class:capability-evaluation", "label": "Capability Evaluation"},
      {"@id": "urn:ngm:class:information-sharing", "label": "Information Sharing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"},
      {"@id": "urn:ngm:class:benchmarking", "label": "Benchmarking"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:responsible-scaling-policy", "label": "Responsible Scaling Policy"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ai-safety-institute", "label": "AI Safety Institute"},
      {"@id": "urn:ngm:class:partnership-on-ai", "label": "Partnership on AI"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-policy", "label": "AI Policy"},
      {"@id": "urn:ngm:class:international-ai-governance", "label": "International AI Governance"},
      {"@id": "urn:ngm:class:biosecurity", "label": "Biosecurity"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:ai-governance-ecosystem", "label": "AI Governance Ecosystem"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:fmf", "label": "FMF"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **Frontier Model Forum** (FMF) is an industry consortium established in July 2023 by [[Anthropic]], [[Google]], [[Microsoft]], and [[OpenAI]] to foster safe and responsible development of [[Frontier AI Models]] — the most capable general-purpose [[Large Language Models]] and related systems at the cutting edge of AI performance. It provides a pre-competitive, collaborative space for member organisations to share safety knowledge, co-develop technical evaluation methodologies, and coordinate on engagement with governments and [[Civil Society]] stakeholders. The Forum operates alongside, but independently from, formal regulatory bodies such as the [[AI Safety Institute]] and international organisations like the [[OECD AI Policy Observatory]] and the [[Global Partnership on AI]].

- ### Overview
  - The Frontier Model Forum emerged from growing concern that the most capable [[AI Systems]] — those with broad general-purpose capabilities across language, reasoning, code generation, and multimodal tasks — present qualitatively distinct risks compared to narrow AI applications.
  - Founding context
    - Announced 26 July 2023 with four founding members: [[Anthropic]], [[Google]], [[Microsoft]], and [[OpenAI]]
    - Formed in part to demonstrate voluntary industry leadership ahead of anticipated legislative intervention, including the EU AI Act and proposed US AI regulation
    - Joined subsequently by additional frontier AI developers and cloud providers, broadening membership beyond the initial four
  - Scope of focus
    - Specifically targets the frontier of AI capability — models that are large-scale, general-purpose, and at or near state-of-the-art on a wide range of tasks
    - Does not govern narrow AI systems, domain-specific models, or legacy AI applications
    - Concentrated on [[AI Safety]] risks including misuse potential (e.g., support for [[Weapons of Mass Destruction]] design), misalignment risks, and societal harms from deployment at scale
  - Organisational character
    - A voluntary, non-binding industry body — not a standards organisation in the ISO/IEEE sense
    - Member companies retain independent safety programmes and [[Responsible Scaling Policy]] commitments
    - Operates via working groups on technical safety, evaluation, and policy engagement

- ### Key Workstreams and Mechanisms
  - Technical AI Safety Research
    - Pooling resources and expertise to advance [[AI Safety Research]] in areas where cross-company collaboration yields faster progress than individual efforts
    - Focus areas include [[Interpretability]], robustness testing, and mechanistic understanding of model behaviour
  - Shared Safety Evaluations
    - A flagship goal of the Forum is developing a shared library of [[Safety Evaluation]] frameworks and [[Capability Evaluation]] tools
    - Evaluations target dangerous capability thresholds: e.g., uplift for [[Biosecurity]] (CBRN — chemical, biological, radiological, nuclear threats), [[Cybersecurity]] exploitation assistance, and persuasion/manipulation at scale
    - Enables consistent assessment methodology across different frontier models from different organisations
  - Red Teaming Coordination
    - Promoting and sharing methodologies for structured [[Red Teaming]] of frontier models before deployment
    - Facilitating cross-company sharing of red-team findings on safety-relevant model behaviours
    - Connects to government-affiliated red-team exercises organised through bodies like the [[AI Safety Institute]]
  - Policy Engagement
    - Engaging with national governments, international organisations, and regulatory bodies on [[AI Policy]] and [[AI Regulation]] frameworks
    - Providing technical input to legislative processes (e.g., EU AI Act, US Executive Orders on AI, UK AI Safety Summit outputs)
    - Interfacing with the [[OECD AI Policy Observatory]], the [[Global Partnership on AI]], the [[G7 Hiroshima AI Process]], and the [[UN AI Advisory Body]]
  - Knowledge Sharing on Best Practices
    - Publishing guidance on [[Responsible AI]] deployment practices, model cards, system cards, and safety documentation standards
    - Supporting development of shared vocabulary and taxonomies for AI risk levels — aligning with frameworks like the [[NIST AI Risk Management Framework]]
  - Information Sharing on Safety-Relevant Incidents
    - Facilitating confidential sharing of safety-relevant model behaviour findings between members, analogous to incident-sharing mechanisms in other critical industries

- ### Membership and Governance
  - Founding members: [[Anthropic]], [[Google]], [[Microsoft]], [[OpenAI]]
  - Subsequent members have included other major AI labs and cloud platform providers
  - Governed by a steering committee with representation from member organisations
  - Working groups operate on specific technical or policy topics, with defined deliverables
  - Open to frontier AI developers meeting criteria related to capability threshold and commitment to safety principles
  - Does not include open-source model developers as primary members by initial design, reflecting its focus on proprietary frontier development — a point of criticism from parts of the [[Open Source AI]] community

- ### Relationships to Other Governance Initiatives
  - The FMF occupies a distinct niche within the broader [[AI Governance]] ecosystem:
    - contrastsWith:: [[AI Safety Institute]] — government-led evaluation bodies (UK AISI, US AISI) with statutory powers, as opposed to the FMF's voluntary industry coordination role
    - contrastsWith:: [[Partnership on AI]] — broader multi-stakeholder body covering all AI (not just frontier), with NGO and academic members alongside industry
    - relatedTo:: [[OECD AI Policy Observatory]] — intergovernmental body producing AI policy guidance and standards; FMF engages but does not direct it
    - relatedTo:: [[Global Partnership on AI]] — international multistakeholder organisation; FMF feeds technical expertise into GPAI workstreams
    - relatedTo:: [[G7 Hiroshima AI Process]] — produced the Hiroshima Code of Conduct for advanced AI developers, which overlaps with FMF member commitments
    - bridgesTo:: [[International AI Governance]] — the FMF acts as a conduit between technical frontier AI labs and emerging international governance structures

- ### Relations (Semantic)
  - supports:: [[AI Safety]]
  - supports:: [[Responsible AI]]
  - supports:: [[AI Policy]]
  - relatedTo:: [[AI Alignment]]
  - relatedTo:: [[AI Regulation]]
  - relatedTo:: [[Red Teaming]]
  - relatedTo:: [[AI Safety Institute]]
  - relatedTo:: [[Global Partnership on AI]]
  - relatedTo:: [[OECD AI Policy Observatory]]
  - enables:: [[Safety Evaluation]]
  - enables:: [[Capability Evaluation]]
  - enables:: [[Information Sharing]]
  - uses:: [[Red Teaming]]
  - uses:: [[Interpretability]]
  - uses:: [[Benchmarking]]
  - implements:: [[AI Safety Research]]
  - implements:: [[Responsible Scaling Policy]]
  - contrastsWith:: [[AI Safety Institute]]
  - contrastsWith:: [[Partnership on AI]]
  - bridgesTo:: [[AI Policy]]
  - bridgesTo:: [[International AI Governance]]
  - bridgesTo:: [[Biosecurity]]
  - bridgesTo:: [[Cybersecurity]]
  - partOf:: [[AI Governance Ecosystem]]

- ### Standards and Context
  - The FMF does not itself produce formal standards but actively engages with standards-producing bodies:
    - [[NIST AI Risk Management Framework]] — FMF member commitments align with NIST AI RMF tiers for frontier model risk management
    - [[ISO/IEC JTC 1/SC 42]] — international AI standards committee; FMF technical work feeds into SC 42 discussions
    - [[EU AI Act]] — FMF member companies contributed technical expertise to the drafting of frontier model ("GPAI model") provisions, particularly Article 51 requirements for systemic risk models
    - [[UK AI Safety Summit (Bletchley)]] — November 2023 Bletchley Declaration co-signed by FMF member governments; FMF technical workstreams directly informed summit outputs
    - [[Seoul AI Summit]] — May 2024 follow-on to Bletchley; FMF contributions to frontier AI safety commitments
  - The FMF's evaluation library concept aligns with the [[Model Evaluation]] requirements in the EU AI Act for GPAI models with systemic risk

- ### Criticisms and Limitations
  - Self-regulatory concern: as a voluntary industry body, the FMF lacks enforcement mechanisms; critics argue it may function more as a reputational shield than a genuine safety mechanism
  - Membership gatekeeping: focus on proprietary frontier developers excludes [[Open Source AI]] organisations and academic safety researchers from governance
  - Competitive tension: even pre-competitive collaboration faces limits from competition law and commercial sensitivity, constraining depth of information sharing
  - Geopolitical gaps: dominated by US companies; Chinese frontier AI developers (e.g., Baidu, Alibaba, DeepSeek) are not members, limiting global coverage
  - Resource asymmetry: smaller AI developers and civil society voices have limited influence relative to the largest member organisations

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
