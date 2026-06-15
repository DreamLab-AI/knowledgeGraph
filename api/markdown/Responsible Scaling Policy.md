public:: true

# responsible scaling policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6f6771bd75cdc6a4dd0e29e0a06cdb29495111dbe8a59a7b1100e423de443b9",
  "@type": "Page",
  "vc:slug": "responsible-scaling-policy",
  "title": "responsible scaling policy",
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
  "@id": "urn:ngm:class:responsible-scaling-policy",
  "@type": "Class",
  "label": "Responsible Scaling Policy",
  "definition": "A Responsible Scaling Policy (RSP) is a voluntary self-regulatory commitment by a frontier AI developer that ties further capability scaling and deployment to measurable safety milestones. It specifies: the capability evaluation thresholds (often called AI Safety Levels) at which enhanced assessments must be completed before training or deploying a more capable model; the specific risk domains—particularly uplift to chemical, biological, radiological, nuclear, and cyberweapon development—that would trigger deployment restrictions or halts; and the technical and organisational safeguards required at each level. RSPs translate aspirational safety intentions into concrete, time-bound, falsifiable commitments, creating accountability mechanisms that operate ahead of formal government regulation.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-framework",
      "label": "AI Governance Framework"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:capability-evaluation",
        "label": "Capability Evaluation"
      },
      {
        "@id": "urn:ngm:class:third-party-audit",
        "label": "Third-Party Audit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:precautionary-principle",
        "label": "Precautionary Principle"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:frontier-models",
        "label": "Frontier Model"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "Mandatory AI Regulation"
      },
      {
        "@id": "urn:ngm:class:compute-governance",
        "label": "Compute Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:frontier-model-forum",
        "label": "Frontier Model Forum"
      },
      {
        "@id": "urn:ngm:class:ai-safety-institute",
        "label": "AI Safety Institute"
      },
      {
        "@id": "urn:ngm:class:ai-model-card",
        "label": "Model Card"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:biosecurity",
        "label": "Biosecurity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-safety-level-policy",
      "label": "AI Safety Level Policy"
    },
    {
      "@id": "urn:ngm:class:rsp",
      "label": "RSP"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A Responsible Scaling Policy (RSP) is a voluntary self-regulatory commitment issued by a [[Frontier Model]] developer that ties further capability scaling and deployment to measurable safety milestones. The policy specifies the capability thresholds—called [[AI Safety Level]]s—at which mandatory evaluations must be completed before training or releasing a more capable model; the specific risk domains, particularly [[CBRN Risk]] uplift involving chemical, biological, radiological, and nuclear weapons as well as [[Cyberweapon]] development, that would trigger deployment restrictions or training halts; and the organisational and technical safeguards required at each level. RSPs translate aspirational [[AI Governance and Ethics]] intentions into concrete, time-bound, falsifiable commitments that create accountability mechanisms analogous to self-imposed regulation, operating ahead of formal government mandates.

- ### Overview
  - Responsible Scaling Policies emerged from the recognition that voluntary safety intentions are only credible when they are specific, verifiable, and define clear decision rules rather than vague aspirational statements.
  - Anthropic published the first widely known RSP in September 2023, followed by similar commitments from other frontier labs. The concept draws inspiration from [[Biosafety Level Framework]]s used in life-sciences research, where each level carries defined procedural requirements proportionate to the hazard presented.
  - The policy functions as a **commitment device**: by publishing specific evaluation criteria before training begins, the developer creates reputational and, in some instantiations, contractual accountability that makes it harder to override safety gates under commercial pressure.
  - RSPs address a fundamental tension in [[AI Governance Framework]]: how to maintain [[Incremental Deployment]] flexibility while establishing hard limits that prevent catastrophic outcomes.
  - The policy domain is explicitly prospective—RSPs are designed to govern model generations that have not yet been trained, rather than retrofitted to existing deployments.

- ### Key Components
  - #### AI Safety Levels (ASLs)
    - Tiered capability-risk thresholds, each with defined evaluation triggers and required countermeasures.
    - ASL-1: current models with no meaningful uplift to catastrophic harm—standard deployment practices apply.
    - ASL-2: models that could meaningfully assist someone already seeking to cause harm, but not provide decisive uplift—enhanced internal monitoring required.
    - ASL-3: models capable of providing real [[CBRN Risk]] uplift to non-state actors—significantly restricted deployment, mandatory [[Red Teaming]], external safety evaluations required before release.
    - ASL-4 and beyond: models that could autonomously contribute to threats that nation-states would find difficult to counter—deployment halt pending development of adequate countermeasures.
  - #### Evaluation Triggers
    - Regular [[Capability Evaluation]] checkpoints scheduled at defined training compute intervals (e.g. every 4× increase in effective training compute).
    - Unscheduled evaluations triggered by unexpected capability jumps observed during training.
    - [[Uplift Evaluation]] specifically tests whether a model provides meaningful assistance to users attempting to develop biological, chemical, nuclear, or cyber weapons—the primary catastrophic risk categories.
  - #### Deployment Conditions
    - Passing evaluations is necessary but not sufficient: the developer must also have implemented required safeguards before deployment can proceed.
    - Required safeguards may include: [[Interpretability]] tooling capable of detecting deceptive alignment, enhanced cybersecurity for model weights, access restrictions, and deployment usage monitoring.
  - #### Governance and Verification
    - RSPs specify who has authority to approve escalation past safety gates (typically a safety committee with board-level visibility).
    - Some RSPs include provisions for [[Third-Party Audit]] by external safety organisations or governments, providing independent verification.
    - The UK [[AI Safety Institute]] and the US AI Safety Institute have both evaluated frontier models as part of independent verification analogous to RSP-specified evaluations.

- ### Mechanisms
  - **Pre-training evaluation gates**: assessments completed before large training runs begin, to determine whether the projected capability level would require enhanced safeguards.
  - **Pre-deployment evaluation gates**: evaluations completed on a trained model before any external access is granted—whether via API or product.
  - **Red teaming for uplift**: structured adversarial testing by [[Red Teaming]] specialists attempting to extract dangerous information or demonstrate uplift in CBRN or offensive cyber domains.
  - **Continuous monitoring**: post-deployment capability tracking to detect emergent capabilities that might change the model's ASL classification.
  - **Halt criteria**: explicit conditions under which training or deployment must stop until countermeasures are developed—the defining feature that distinguishes RSPs from aspirational safety statements.

- ### Applications and Use Cases
  - **Frontier lab self-governance**: Anthropic, Google DeepMind, and other frontier developers use RSP-equivalent frameworks to structure internal safety decision-making around their most capable models.
  - **Government engagement**: RSPs provide a concrete artefact for [[AI Safety Institute]] evaluators and policymakers to assess, request access to, and negotiate improvements upon—giving regulators a hook into voluntary safety processes.
  - **Investor and board accountability**: Published RSPs create visibility for investors, board members, and employees regarding the conditions under which the company will slow or halt scaling—strengthening internal governance.
  - **International coordination**: The [[Frontier Model Forum]] and bilateral AI safety agreements (e.g. the UK-US AI Safety MOU) reference RSP-style evaluation frameworks as a common vocabulary for cross-border safety coordination.
  - **Academic and civil-society scrutiny**: Published RSPs allow external researchers and NGOs to critique commitments, identify gaps, and propose improvements—contributing to iterative strengthening of voluntary standards.
  - **Industry norm-setting**: As more developers publish RSPs, common elements converge towards informal industry standards, potentially forming the basis for future mandatory [[AI Regulation]].

- ### Limitations and Criticisms
  - RSPs are self-regulated and lack legal enforcement mechanisms—a developer could revise or abandon its RSP without legal consequence.
  - The collective action problem: if one developer maintains stricter RSP commitments than competitors, it may face competitive disadvantage, creating pressure to weaken commitments over time.
  - Evaluation methodologies for uplift remain contested and imprecise—it is difficult to definitively establish whether a model provides "meaningful" uplift to a skilled adversary.
  - RSP thresholds may be set conservatively relative to actual risk (leading to unnecessary friction) or too permissively (leading to under-preparation for capability jumps).
  - The absence of [[Mandatory AI Regulation]] means that RSPs are the primary safety mechanism for the highest-capability models—a governance gap that critics argue should be filled by treaty-level obligations.
  - Transparency is limited: RSPs are published but the underlying evaluation results are typically not, making independent verification difficult.

- ### Relationships
  - requires:: [[Red Teaming]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Capability Evaluation]]
  - requires:: [[Third-Party Audit]]
  - enables:: [[AI Safety]]
  - enables:: [[Model Accountability]]
  - enables:: [[Incremental Deployment]]
  - implements:: [[AI Governance and Ethics]]
  - implements:: [[Precautionary Principle]]
  - uses:: [[Uplift Evaluation]]
  - uses:: [[Model Evals]]
  - uses:: [[Biosafety Level Framework]]
  - supports:: [[AI Alignment]]
  - supports:: [[Existential Risk Reduction]]
  - supports:: [[AI Regulation]]
  - dependsOn:: [[Frontier Model]]
  - dependsOn:: [[Interpretability]]
  - contrastsWith:: [[Mandatory AI Regulation]]
  - contrastsWith:: [[Compute Governance]]
  - relatedTo:: [[Frontier Model Forum]]
  - relatedTo:: [[AI Safety Institute]]
  - relatedTo:: [[Model Card]]
  - relatedTo:: [[CBRN Risk]]
  - relatedTo:: [[Deployment Policy]]
  - bridges-to:: [[Biosecurity]]
  - bridges-to:: [[Nuclear Non-Proliferation]]

- ### Standards and Context
  - Anthropic's RSP (September 2023, updated 2024) is the reference implementation that defined the ASL tier nomenclature.
  - Google DeepMind published its "Frontier Safety Framework" using broadly equivalent concepts (Critical Capability Levels) in mid-2024.
  - OpenAI's "Preparedness Framework" covers similar territory using risk tiers (low / medium / high / critical) and maps to deployment conditions.
  - The UK [[AI Safety Institute]] (DSIT) and the US AI Safety Institute (NIST-hosted) conduct pre-deployment evaluations of frontier models, providing a government analogue to RSP evaluation gates.
  - The Seoul AI Safety Summit (May 2024) commitments referenced RSP-style evaluations as a condition of responsible frontier development, and the resulting "Seoul Accord" was signed by the major frontier labs.
  - The [[Frontier Model Forum]] provides a venue for cross-lab sharing of evaluation methodologies, potentially harmonising ASL-equivalent tier definitions across organisations.
  - ISO/IEC JTC 1/SC 42 (Artificial Intelligence) is developing standards that may eventually encompass capability evaluation requirements analogous to RSP evaluation gates.
  - The EU AI Act's high-risk model provisions (applying to general-purpose AI models above a training compute threshold) create a regulatory obligation that partially overlaps with RSP evaluation requirements.

- ### Provenance
  - sources:: Anthropic RSP public documentation; Frontier Model Forum publications; UK AI Safety Institute pre-deployment evaluation reports; Seoul AI Summit outcome statements
  - updated:: 2026-06-13
