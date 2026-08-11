public:: true

# Alignment Research
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:740cdc86fd1813d7d13a67474f48c0e04bf663d3efa26d66c9d1615e429715ac",
  "@type": "Page",
  "vc:slug": "alignment-research",
  "title": "Alignment Research",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-research",
      "vc:label": "Artificial Intelligence Research"
    },
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:artificial-general-intelligence",
      "vc:label": "Artificial General Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:alignment-research",
  "@type": "Class",
  "label": "Alignment Research",
  "definition": "The research programme dedicated to ensuring that increasingly capable AI systems reliably pursue their designers' and society's intended goals, spanning empirical techniques such as reinforcement learning from human feedback, constitutional AI, scalable oversight and mechanistic interpretability, alongside theoretical work on agent foundations, corrigibility, deceptive alignment and mesa-optimisation; a field whose importance scales with model capability and which anchors the safety agendas of frontier laboratories and a growing academic community.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:artificial-intelligence-research",
    "label": "Artificial Intelligence Research"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "Artificial General Intelligence"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The research programme dedicated to ensuring that increasingly capable AI systems reliably pursue their designers' and society's intended goals, spanning empirical techniques such as reinforcement learning from human feedback, constitutional AI, scalable oversight and mechanistic interpretability, alongside theoretical work on agent foundations, corrigibility, deceptive alignment and mesa-optimisation; a field whose importance scales with model capability and which anchors the safety agendas of frontier laboratories and a growing academic community."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AlignmentResearch
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Research]]
  - enables:: [[AI Alignment]]
  - related-to:: [[AI Safety]]

- ### Content

  ## Definition

  **Alignment research** is the branch of [[Artificial Intelligence Research]] that asks how to make powerful optimising systems do what we actually want — not merely what we literally specified, and not what a proxy objective happens to reward. The problem decomposes into outer alignment (choosing an objective that captures human intent, despite the difficulty of specifying values) and inner alignment (ensuring the trained system actually pursues that objective rather than a correlated proxy learned during training, the failure mode analysed as mesa-optimisation). Both matter because capable systems exhibit instrumental pressures — resource acquisition, self-preservation, avoiding shutdown — that make small goal misspecifications compound as capability grows.

  The empirical wing of the field has produced the techniques that shape today's deployed assistants: reinforcement learning from human feedback (RLHF) and its variants (DPO, RLAIF), Anthropic's constitutional AI, red-teaming and adversarial evaluation, and mechanistic interpretability, which reverse-engineers the circuits and features inside networks so that claims about what a model "wants" can be grounded in its internals. Scalable-oversight research (debate, recursive reward modelling, weak-to-strong generalisation) tackles the core difficulty that humans cannot directly evaluate outputs of systems more capable than themselves. The theoretical wing — agent foundations, corrigibility, decision theory — studies alignment properties that should hold in the limit of capability, motivated by scenarios involving [[Artificial General Intelligence]].

  Alignment research is narrower than [[AI Safety]], which also covers misuse, robustness and systemic risk, and it is the enabling discipline for [[AI Alignment]] as an achieved property of systems: the field exists precisely because that property does not arrive by default.

  ## Current Landscape

  Frontier laboratories — Anthropic, OpenAI, Google DeepMind — maintain dedicated alignment teams, publish safety frameworks tying deployment decisions to capability evaluations, and fund external work; independent organisations (Redwood Research, MIRI, Apollo Research) and the UK AI Security Institute add evaluation and theory capacity.

  - **UK AISI's Alignment Project**: launched in 2025 as a global fund, it grew from an initial £15m+ to £27m and welcomed its first cohort of 60 grantees, making the UK a significant public funder of alignment research; AISI's own agenda now targets ensuring the *honesty* of systems as they scale past AGI toward superintelligence.
  - **Frameworks tied to capability thresholds**: Anthropic ships Claude models under ASL-3 mitigations (Constitutional Classifiers plus safety fine-tuning) per its Responsible Scaling Policy (updated May 2025); OpenAI runs its Preparedness Framework (updated April 2025) with a board-level Safety & Security Committee after the Superalignment team dissolved; Google DeepMind updated its Frontier Safety Framework in September 2025, adding a harmful-manipulation risk domain.
  - **Interpretability going operational**: sparse-autoencoder feature dictionaries have crossed from research into deployed tooling; Dario Amodei's 2025 essay "The Urgency of Interpretability" targets reliable problem-detection tools by 2027.
  - **Empirical misalignment demonstrations (2024–2025)**: alignment faking and in-context scheming in frontier models, plus weak-to-strong generalisation as an oversight testbed, are now standard evidence in safety-case sketches.
  - **Governance context**: the EU AI Act's general-purpose AI obligations applied from 2 August 2025, and a network of AI Safety/Security Institutes (UK, US, EU, Korea, Japan, Canada, Singapore) now coordinates pre-deployment evaluations. The field remains talent-constrained, and verifying honesty and detecting deceptive alignment before deployment are still regarded as unsolved.

  **Sources**:
  - https://www.aisi.gov.uk/blog
  - https://www.aisi.gov.uk/research-agenda
  - https://www.anthropic.com/responsible-scaling-policy/roadmap
  - https://www.aisi.gov.uk/frontier-ai-trends-report
