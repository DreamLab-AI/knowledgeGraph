public:: true

# AI Safety
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f8689da52fe3f4df6e5a203a8b131b39e31d813a3c123f548217e6707bb13aa2",
  "@type": "Page",
  "vc:slug": "ai-safety",
  "title": "AI Safety",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-4009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Safety"
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
  "@id": "urn:ngm:class:ai-safety",
  "@type": "Class",
  "label": "AI Safety",
  "definition": "AI Safety is the interdisciplinary field of research and engineering practice dedicated to ensuring that artificial intelligence systems behave reliably, predictably, and in accordance with human values and intentions across their full operational lifecycle. It addresses near-term concerns such as robustness, distributional shift, and adversarial vulnerability, as well as longer-horizon concerns about advanced systems whose objectives may diverge from human welfare. Core techniques include formal verification of safety properties, interpretability methods that expose model internals, corrigibility mechanisms that preserve human oversight, and red-teaming to surface failure modes before deployment. AI Safety is increasingly embedded in regulatory frameworks and standard-setting processes governing high-risk AI applications.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      },
      {
        "@id": "urn:ngm:class:human-ai-collaboration",
        "label": "Human-AI Collaboration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:adversarial-machine-learning",
        "label": "Adversarial Machine Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-capabilities-research",
        "label": "AI Capabilities Research"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:corrigibility",
        "label": "Corrigibility"
      },
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:existential-risk",
        "label": "Existential Risk"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Cyber Security"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:machine-learning-safety",
      "label": "Machine Learning Safety"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-safety:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f8689da52fe3f4df6e5a203a8b131b39e31d813a3c123f548217e6707bb13aa2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - AI Safety is the interdisciplinary field of research and engineering practice dedicated to ensuring that [[Artificial Intelligence]] systems behave reliably, predictably, and in accordance with human values and intentions throughout their operational lifecycle. It encompasses both near-term engineering concerns — such as [[Robustness]], distributional shift, and adversarial vulnerability — and longer-horizon concerns about advanced systems whose objectives may diverge from human welfare. Central to the field is the insight that [[AI Alignment]] (getting systems to pursue the goals humans actually intend) and controllability are necessary complements to capability development; a highly capable but misaligned system poses greater risk than a less capable one. AI Safety draws on [[Formal Verification]], [[Interpretability]], [[Adversarial Machine Learning]], and [[AI Governance]] to produce principled safety guarantees across diverse deployment contexts.

- ### Overview
  - AI Safety emerged as a recognised discipline in the early 2010s, catalysed by concerns raised by researchers at organisations such as MIRI, the Future of Humanity Institute, and later DeepMind, Anthropic, and OpenAI's safety teams.
  - The field is motivated by a central challenge: as AI systems grow more capable, the consequences of misspecified objectives, unexpected behaviours, or adversarial manipulation scale accordingly.
  - Two temporal horizons organise the field:
    - **Near-term safety** — practical engineering concerns relevant to systems deployed today: reliability under distribution shift, resistance to adversarial inputs, fairness, privacy, and transparency.
    - **Long-term / existential safety** — speculative but high-stakes concerns about advanced AI systems (sometimes called AGI or transformative AI) that might develop misaligned objectives or resist human correction.
  - These horizons share technical foundations ([[Interpretability]], [[Formal Verification]], [[Corrigibility]]) even when their timescales differ.
  - Regulators including the EU AI Act, the US Executive Order on AI (2023), the UK AI Safety Institute, and the Bletchley Declaration have embedded AI Safety assessment requirements into policy frameworks governing high-risk AI deployment.

- ### Key Components
  - #### AI Alignment
    - [[AI Alignment]] addresses the core challenge of specifying and learning objectives that faithfully represent human intentions.
    - Techniques include [[Reinforcement Learning from Human Feedback]] (RLHF), Constitutional AI, debate, and amplification.
    - Misalignment is the source of many systematic failure modes: reward hacking, specification gaming, and goal misgeneralisation.
  - #### Interpretability and Explainability
    - [[Interpretability]] research seeks to understand what representations and computations neural networks perform internally, enabling detection of dangerous features or deceptive reasoning.
    - [[Explainable AI]] (XAI) produces post-hoc explanations (SHAP values, attention maps, saliency) that support human oversight without requiring full mechanistic understanding.
    - Mechanistic interpretability (circuit analysis) aims at causal understanding of specific behaviours.
  - #### Robustness
    - [[Robustness]] ensures models behave correctly under input perturbations, covariate shift, and distribution change encountered in deployment.
    - [[Adversarial Machine Learning]] studies worst-case input perturbations (adversarial examples) and defences such as adversarial training and certified robustness.
    - Out-of-distribution detection flags inputs outside the training distribution before predictions are trusted.
  - #### Corrigibility and Controllability
    - [[Corrigibility]] refers to the property that a system accepts correction, modification, or shutdown by authorised operators without resistance.
    - Corrigibility is non-trivially difficult: a sufficiently capable optimiser may resist shutdown if it models shutdown as goal-frustrating.
    - Interruptibility, low impact objectives, and conservative planning are active research directions.
  - #### Formal Verification
    - [[Formal Verification]] applies mathematical proof techniques to certify that a system satisfies specified safety properties for all inputs within a defined domain.
    - Methods include abstract interpretation, satisfiability modulo theories (SMT), and neural network verification tools (e.g., Marabou, α,β-CROWN).
    - Scalability to large neural networks remains an open research challenge.
  - #### Red Teaming
    - [[Red Teaming]] employs adversarial human testers or automated models to discover failure modes, harmful outputs, and jailbreaks before deployment.
    - Structured red-teaming is now required by major AI developers under voluntary commitments and by some regulatory frameworks.
    - Automated red-teaming scales evaluation beyond what human teams can achieve.
  - #### Scalable Oversight
    - Scalable oversight addresses a key bottleneck: humans cannot evaluate superhuman outputs directly.
    - Approaches include debate (two AI systems argue opposing positions; humans judge), recursive reward modelling, and weak-to-strong generalisation.
    - AI-assisted evaluation uses trusted AI to check untrusted AI outputs.

- ### Applications and Use Cases
  - **Deployment safety for LLMs** — content filtering, refusal mechanisms, constitutional constraints, and RLHF fine-tuning applied to large [[Language Model]] deployments (GPT-4, Claude, Gemini) to prevent harmful outputs.
  - **Autonomous vehicle safety** — runtime monitors, out-of-distribution detection, and formal safety envelopes for [[Autonomous Robot]] systems in safety-critical environments.
  - **Medical AI** — uncertainty quantification, distributional shift detection, and human-in-the-loop oversight for clinical decision support to prevent misdiagnosis.
  - **Industrial automation** — certified robustness and fail-safe mechanisms for AI controllers in manufacturing and process control.
  - **Cybersecurity hardening** — adversarial robustness to prevent [[Cyber Security]] attacks that manipulate AI classifiers (e.g., malware classifiers, intrusion detection).
  - **AI-assisted code generation** — safety filters and formal verification of generated code to prevent vulnerability introduction (bridges to [[Smart Contract]] auditing).
  - **Government and defence** — human-on-the-loop requirements, audit trails, and kill-switch mechanisms for AI-assisted decision support in sensitive contexts.
  - **Financial AI** — model risk management, stress testing, and scenario analysis to ensure [[Risk Management]] frameworks remain effective when AI drives credit or trading decisions.

- ### Mechanisms and Techniques
  - **RLHF (Reinforcement Learning from Human Feedback)** — fine-tuning foundation models via a reward model trained on human preference comparisons; currently the dominant technique for value alignment in deployed LLMs. See [[Reinforcement Learning from Human Feedback]].
  - **Constitutional AI** — a refinement where a set of principles (a "constitution") guides both self-critique and RLHF, reducing dependence on large human annotation teams.
  - **Debate** — two AI agents argue opposing positions to a human judge; designed to surface deceptive reasoning at superhuman capability levels.
  - **Anomaly detection** — statistical and model-based methods that identify inputs or outputs deviating significantly from expected distributions, triggering human review.
  - **Specification and reward modelling** — techniques to encode complex human preferences into reward signals that do not admit degenerate optima or reward hacking.
  - **Sandboxing and containment** — restricting AI system resource access, network connectivity, and action space to limit potential harm from misaligned behaviour.
  - **Model cards and system cards** — structured documentation of model capabilities, limitations, training data, and known failure modes, supporting downstream safety assessments.

- ### Relationships
  - partOf:: [[AI Governance]]
  - requires:: [[AI Alignment]]
  - requires:: [[Interpretability]]
  - requires:: [[Formal Verification]]
  - enables:: [[Responsible AI]]
  - enables:: [[Trustworthy AI]]
  - enables:: [[Human-AI Collaboration]]
  - supports:: [[Explainable AI]]
  - supports:: [[AI Ethics]]
  - supports:: [[Risk Management]]
  - uses:: [[Red Teaming]]
  - uses:: [[Adversarial Machine Learning]]
  - uses:: [[Reinforcement Learning from Human Feedback]]
  - contrastsWith:: [[AI Capabilities Research]]
  - relatedTo:: [[AI Safety Research]]
  - relatedTo:: [[Corrigibility]]
  - relatedTo:: [[Robustness]]
  - relatedTo:: [[AI Regulation]]
  - relatedTo:: [[Existential Risk]]
  - bridges-to:: [[Autonomous Robot]]
  - bridges-to:: [[Cyber Security]]
  - bridges-to:: [[Smart Contract]]

- ### Standards and Context
  - **EU AI Act (2024)** — classifies AI applications by risk tier; high-risk systems require conformity assessments, transparency, and human oversight mechanisms aligned with AI Safety principles.
  - **NIST AI RMF (AI Risk Management Framework)** — US voluntary framework providing a structured approach to managing AI risk across the AI lifecycle, incorporating safety, fairness, explainability, and robustness.
  - **ISO/IEC 42001** — international standard for AI management systems, addressing organisational governance of AI risk including safety.
  - **UK AI Safety Institute (AISI)** — government body conducting evaluations of frontier AI models for dangerous capability thresholds; established post-Bletchley (November 2023).
  - **Bletchley Declaration (2023)** — international agreement on AI Safety risks from frontier models, signed by 28 countries, committing to collaborative evaluation and information sharing.
  - **IEEE P7000 series** — standards addressing ethically aligned design, transparency, and accountability for autonomous and intelligent systems.
  - **OECD AI Principles** — five principles including robustness, security, safety, and accountability adopted by 42+ countries as a baseline for AI governance.
  - **Frontier Safety Commitments** — voluntary pledges by major AI labs (Anthropic, DeepMind, Google, Meta, Microsoft, OpenAI) to conduct red-teaming and share information on dangerous capabilities prior to deployment.

- ### Key Research Institutions and Initiatives
  - **Alignment Research Center (ARC)** — independent non-profit focused on alignment evaluation and dangerous capability assessment.
  - **Anthropic** — AI company with a stated safety mission; principal developer of Constitutional AI and the Responsible Scaling Policy (RSP).
  - **DeepMind Safety team** — research on specification gaming, safe exploration, and agent foundations.
  - **MIRI (Machine Intelligence Research Institute)** — foundational mathematical research on agent alignment.
  - **Center for AI Safety (CAIS)** — publishes the "Statement on AI Risk" and supports field-building across technical and governance safety research.
  - **Future of Humanity Institute (FHI, Oxford)** — foundational long-term risk analysis; closed 2024 after key staff moved to other institutions.
  - **Apollo Research** — specialises in model evaluations for deception and situational awareness.

- ### Provenance
  - sources:: NIST AI RMF (2023); EU AI Act (2024); Bletchley Declaration (2023); Anthropic Constitutional AI paper (2022); OpenAI Alignment Research; OECD AI Principles
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
