public:: true

# AI Safety Institute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff8d961a9f4ee081d973ccefa3397b539c027c3d6bd2aa73fb50cda1c4e71131",
  "@type": "Page",
  "vc:slug": "ai-safety-institute",
  "title": "AI Safety Institute",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:frontier-ai",
      "vc:label": "Frontier AI"
    },
    {
      "@id": "urn:visionflow:linked:existential-ai-risk",
      "vc:label": "Existential AI Risk"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Safety Institute"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-safety-institute",
  "@type": "Class",
  "label": "AI Safety Institute",
  "definition": "An AI Safety Institute (AISI) is a state-backed organisation established to evaluate, test, and research the capabilities and safety risks of advanced AI systems, particularly frontier models. Such bodies conduct pre-deployment and post-deployment evaluations, develop standardised benchmarks for dangerous capability elicitation, and advise governments on AI risk policy. The UK established the world's first AISI in November 2023 at the Bletchley Park AI Safety Summit; the US, Japan, Canada, and other nations subsequently established counterpart bodies. The UK later renamed its institute the AI Security Institute (DSIT) to reflect an expanded emphasis on national-security-relevant AI risks.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-security-institute",
      "label": "AI Security Institute"
    },
    {
      "@id": "urn:ngm:class:aisi",
      "label": "AISI"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:government-ai-policy",
        "label": "Government AI Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:ai-policy",
        "label": "AI Policy"
      },
      {
        "@id": "urn:ngm:class:international-ai-coordination",
        "label": "International AI Coordination"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:frontier-ai",
        "label": "Frontier AI"
      },
      {
        "@id": "urn:ngm:class:ai-evaluation",
        "label": "AI Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:capability-evaluation",
        "label": "Capability Evaluation"
      },
      {
        "@id": "urn:ngm:class:benchmarking",
        "label": "Benchmarking"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-risk-assessment",
        "label": "AI Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-ethics-board",
        "label": "AI Ethics Board"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:existential-ai-risk",
        "label": "Existential AI Risk"
      },
      {
        "@id": "urn:ngm:class:ai-safety-summit",
        "label": "AI Safety Summit"
      },
      {
        "@id": "urn:ngm:class:bletchley-declaration",
        "label": "Bletchley Declaration"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:national-security",
        "label": "National Security"
      },
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ]
  },
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-safety-institute:04928641530e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff8d961a9f4ee081d973ccefa3397b539c027c3d6bd2aa73fb50cda1c4e71131"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Frontier AI]]",
      "resolved": "urn:visionflow:linked:frontier-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Existential AI Risk]]",
      "resolved": "urn:visionflow:linked:existential-ai-risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An AI Safety Institute (AISI) is a government-backed research and evaluation body charged with assessing the capabilities and risks of [[Frontier AI]] systems, developing safety testing methodologies, and informing national [[AI Policy]] and international [[AI Governance]] frameworks. The United Kingdom launched the world's first AISI at the [[AI Safety Summit]] held at Bletchley Park in November 2023; the United States, Japan, Canada, Singapore, and the European Union subsequently established counterpart or affiliated bodies. These institutes occupy a unique institutional niche: they operate with regulatory-adjacent authority while maintaining close technical dialogue with [[Large Language Model]] developers, enabling pre-deployment evaluations that independent academic labs lack the access to conduct.

- ### Overview
  - AI Safety Institutes emerged from growing recognition that [[Frontier AI]] models — particularly large, general-purpose systems — can exhibit dangerous emergent capabilities that neither developers nor regulators fully anticipate before deployment.
  - Traditional standards bodies and ethics review processes were not designed for the pace or complexity of modern [[Foundation Model]] development, creating a gap that AISIs are designed to fill.
  - AISIs act as neutral technical intermediaries: they receive access to models from developers before or at release, run structured evaluations, and report findings to governments and (in some cases) the public.
  - The UK AISI was created under the Department for Science, Innovation and Technology (DSIT) and subsequently renamed the AI Security Institute to signal an expanded remit covering national-security-relevant AI capabilities.
  - The US AI Safety Institute was established within the National Institute of Standards and Technology (NIST), building on NIST's existing [[AI Risk Management Framework]] (AI RMF).
  - International coordination occurs through the Seoul AI Safety Summit (2024) and subsequent forums, which have produced a network of AISIs sharing evaluation methodologies.

- ### Key Components
  - #### Capability Evaluation
    - [[Capability Evaluation]] is the central activity: testing a model's ability to assist with tasks that could cause harm if misused, such as synthesis of biological or chemical agents, cyber-attack planning, or persuasion at scale.
    - Evaluations use structured [[Red Teaming]] — adversarial prompting by human experts or automated pipelines — to probe for dangerous capabilities that standard benchmarks do not capture.
    - [[Benchmarking]] against agreed thresholds allows consistent comparison across model versions and developers.
  - #### Safety Research
    - AISIs conduct or commission basic [[AI Safety]] research into [[Interpretability]], [[Robustness]], and [[AI Alignment]] techniques.
    - Research outputs are intended to feed back into both government policy and the scientific community, accelerating the development of safer training and deployment practices.
  - #### Policy Interface
    - AISIs translate technical findings into policy-relevant language for ministers, legislators, and international bodies.
    - They inform [[AI Regulation]] proposals, contribute to standards development at bodies such as ISO/IEC JTC 1/SC 42, and participate in multi-lateral agreements such as the [[Bletchley Declaration]].
  - #### International Network
    - The Seoul AI Safety Summit (May 2024) formalised a network of national AISIs agreeing to share evaluation tools and results.
    - Bilateral agreements between the UK and US AISIs enabled joint evaluations, including shared red-teaming of frontier models.
    - The network functions as a distributed [[International AI Coordination]] mechanism for AI risk, analogous in some respects to the International Atomic Energy Agency's role for nuclear technology.

- ### Mechanisms
  - **Pre-deployment access agreements**: AISIs negotiate voluntary or (where legislation enables) mandatory pre-deployment access to model weights or API access, allowing evaluation before public release.
  - **Structured elicitation protocols**: Evaluators use standardised prompting strategies, [[Jailbreak]] catalogues, and uplift-measurement frameworks to estimate the real-world harm potential of dangerous capability clusters.
  - **Tiered disclosure**: Findings are shared with the model developer, then — subject to sensitivity classification — with the government and public, balancing transparency against misuse risk.
  - **Horizon scanning**: AISIs monitor [[Emergent Behaviour]] in training runs and published research to anticipate future capability jumps before models are widely deployed.

- ### Applications and Use Cases
  - **Biosecurity uplift testing**: Evaluating whether a frontier model provides meaningful assistance to someone attempting to create dangerous biological agents, informing both developer mitigations and export-control decisions.
  - **Cyber-offence capability assessment**: Measuring a model's ability to write novel exploit code, lower barriers to cyber-attacks, or automate vulnerability discovery beyond what open-source tools already provide.
  - **Autonomous agent risk**: Testing [[AI Agent]] architectures for risks arising from long-horizon task completion, tool use, and self-replication potential.
  - **Societal-scale persuasion**: Assessing whether models enable disinformation, large-scale influence operations, or manipulation of democratic processes at a new scale.
  - **Model cards and transparency reports**: Some AISIs contribute to or validate the accuracy of [[Model Card]] disclosures made by AI developers.
  - **Policy stress-testing**: Running tabletop exercises with government departments to identify gaps in emergency response frameworks for AI-related incidents.

- ### Relationships
  - partOf:: [[AI Governance]], [[Government AI Policy]]
  - enables:: [[AI Alignment]], [[AI Policy]], [[International AI Coordination]]
  - requires:: [[Frontier AI]], [[AI Evaluation]]
  - uses:: [[Red Teaming]], [[Capability Evaluation]], [[Benchmarking]], [[Interpretability]]
  - supports:: [[AI Risk Assessment]], [[Responsible AI]], [[AI Regulation]]
  - contrastsWith:: [[AI Ethics Board]]
  - relatedTo:: [[Existential AI Risk]], [[AI Safety Summit]], [[Bletchley Declaration]], [[Large Language Model]]
  - bridges-to:: [[National Security]], [[Standards Body]]
  - is-subclass-of:: [[AI Safety]]

- ### Standards and Context
  - **NIST AI RMF**: The US AISI operates within the NIST [[AI Risk Management Framework]], which provides a voluntary structured approach to managing AI risk across organisations. The AI RMF 1.0 (2023) is the primary reference document.
  - **ISO/IEC JTC 1/SC 42**: The international [[Standards Body]] responsible for AI standards. AISIs feed into working groups developing standards for AI trustworthiness, bias, and robustness (ISO/IEC 42001, 23894, 24028).
  - **Bletchley Declaration (2023)**: The founding international statement signed at the UK AI Safety Summit, committing 28 countries to cooperation on AI safety. AISIs are the institutional vehicle for operationalising this commitment.
  - **Seoul Communiqué (2024)**: Established the formal network of national AISIs and committed to information-sharing on model evaluations.
  - **EU AI Act**: Classifies certain frontier models as "general-purpose AI models with systemic risk" and mandates evaluations; AISIs may provide evaluation infrastructure or methodological guidance for compliance.
  - **Voluntary commitments**: Major AI developers (Anthropic, Google DeepMind, Meta, Microsoft, OpenAI) have made voluntary pre-deployment access commitments to AISIs, foreshadowing potential mandatory frameworks.

- ### Key Instantiations
  - **UK AI Security Institute** (formerly AISI): Operates within DSIT; led technical evaluations of GPT-4, Gemini, Claude, and Llama-class models. Published evaluation methodology reports and contributed to the AI Seoul Summit process.
  - **US AI Safety Institute** (NIST): Established following the Biden Executive Order on AI (October 2023). Conducts evaluations in partnership with AI developers; publishes guidance on red-teaming and risk management.
  - **Japan AI Safety Institute** (AISI-J): Launched in 2024 under the Ministry of Economy, Trade and Industry (METI).
  - **Canada AISI**: Established under Innovation, Science and Economic Development Canada; participates in the international AISI network.
  - **Singapore AI Safety Institute**: Part of Singapore's national AI strategy, focused on evaluations relevant to South-East Asian deployment contexts.

- ### Criticisms and Open Questions
  - **Voluntary access**: Without mandatory pre-deployment access, AISIs depend on developer cooperation, raising questions about capture risk and completeness of evaluations.
  - **Scope creep vs. focus**: Expanding mandates (from safety to security to societal harms) risk diluting technical depth.
  - **Resource asymmetry**: State institutes face significant resource constraints relative to the compute and talent available to frontier AI developers.
  - **Transparency trade-offs**: Publishing evaluation findings in detail may enable misuse of the dangerous capabilities being documented.
  - **Definitional ambiguity**: "Safety" and "security" are contested terms; different AISIs prioritise existential-risk scenarios differently from near-term harms.

- ### Provenance
  - sources:: UK AISI founding announcement (DSIT, Nov 2023); NIST AI RMF 1.0 (2023); Seoul AI Safety Summit Communiqué (2024); Bletchley Declaration (2023); ISO/IEC JTC 1/SC 42 working documents
  - updated:: 2026-06-13
