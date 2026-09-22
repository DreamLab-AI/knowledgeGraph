public:: true

# AI Lifecycle Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:44dc2a30cf368b37385faf422fb4906747e94a4fa463e5512fa24e855364579f",
  "@type": "Page",
  "vc:slug": "ai-lifecycle-management",
  "title": "AI Lifecycle Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lifecycle-management",
      "vc:label": "Lifecycle Management"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "vc:label": "NIST AI Risk Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
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
  "@id": "urn:ngm:class:ai-lifecycle-management",
  "@type": "Class",
  "label": "AI Lifecycle Management",
  "definition": "AI lifecycle management is the governed oversight of an AI system across its whole existence — design, data acquisition, training, validation, deployment, operation, monitoring, retraining, and retirement — so that risk controls, documentation, and accountability travel with the system rather than stopping at release. It extends generic asset lifecycle management with AI-specific concerns: dataset provenance and drift, model versioning, performance and bias monitoring in production, incident response for model failures, and the stage-mapped risk activities that frameworks such as the NIST AI Risk Management Framework require.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:lifecycle-management",
    "label": "Lifecycle Management"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-monitoring",
        "label": "Model Monitoring"
      },
      {
        "@id": "urn:ngm:class:model-governance",
        "label": "Model Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nist-ai-risk-management-framework",
        "label": "NIST AI Risk Management Framework"
      },
      {
        "@id": "urn:ngm:class:data-lifecycle",
        "label": "Data Lifecycle"
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
  - "AI lifecycle management is the governed oversight of an AI system across its whole existence — design, data acquisition, training, validation, deployment, operation, monitoring, retraining, and retirement — so that risk controls, documentation, and accountability travel with the system rather than stopping at release. It extends generic asset lifecycle management with AI-specific concerns: dataset provenance and drift, model versioning, performance and bias monitoring in production, incident response for model failures, and the stage-mapped risk activities that frameworks such as the NIST AI Risk Management Framework require."

- ### Semantic Classification
  - owl-class:: governance:AiLifecycleManagement
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Lifecycle Management]]
  - part-of:: [[AI Governance]]
  - requires:: [[Model Monitoring]], [[Model Governance]]
  - related-to:: [[NIST AI Risk Management Framework]]

- ### Content

  ## Definition

  **AI lifecycle management** treats an AI system as an asset whose risks and obligations change at every stage of its existence, and organises controls accordingly. The lifecycle it governs typically runs: problem framing and design; data collection and preparation; model building and training; verification and validation; deployment; operation and monitoring; retraining or updating; and eventual decommissioning. At each stage it asks who is accountable, what evidence must be produced, and which risks must be measured and managed before the system moves on.

  The discipline is distinct from generic asset or digital-twin lifecycle management because AI systems fail in ways static assets do not. Their behaviour is learned from data, so dataset provenance, representativeness, and licensing become lifecycle artefacts; their performance degrades silently as the world drifts away from the training distribution, so production monitoring for accuracy, drift, and bias is a continuing obligation rather than a launch gate; and their updates (retraining, fine-tuning, prompt or policy changes) can change behaviour without any code deploy, so versioning and change control must cover models, data, and configuration together. Documentation instruments — model cards, data sheets, risk registers — accumulate along the lifecycle to keep the system auditable.

  Regulatory and framework pressure has made lifecycle management the backbone of AI governance. The [[NIST AI Risk Management Framework]] explicitly maps its Govern, Map, Measure, and Manage functions across lifecycle stages and requires lifecycle-aware risk treatment; ISO/IEC 42001 builds its AI management system around lifecycle processes (with ISO/IEC 5338 defining the lifecycle itself); and the EU AI Act imposes obligations — risk management, logging, post-market monitoring, serious-incident reporting — that only make sense as continuing lifecycle duties. In each case, the unit of governance is not the model artefact but the managed lifecycle around it.

  ## Current Landscape

  In practice, AI lifecycle management is implemented at the intersection of governance and engineering. [[MLOps]] platforms supply the mechanics — experiment tracking, model registries, CI/CD for models, monitoring, and rollback — while governance functions layer approval gates, bias and robustness evaluations, and documentation requirements on top. Enterprise adoption is being driven by audit and assurance demands: internal model-risk-management teams (extending practices from banking's SR 11-7 tradition), external conformity assessment under the EU AI Act, and certification against ISO/IEC 42001. The frontier challenges are lifecycle management for foundation models and generative systems — where the "training" stage is outsourced to a provider and downstream deployers inherit opaque risk — and for continuously learning or agentic systems, whose behaviour changes faster than periodic review cycles were designed to handle.

  Recent framework milestones:

  - **NIST AI 600-1** (Generative AI Profile of the AI RMF, released 26 July 2024) maps generative-AI-specific risks and actions onto the Govern/Map/Measure/Manage functions; in April 2026 NIST issued a concept note for a further AI RMF profile on trustworthy AI in critical infrastructure.
  - **ISO/IEC 42005:2025** (AI system impact assessment, published May 2025) and **ISO/IEC 42006:2025** (requirements for certification bodies, July 2025) rounded out the ISO/IEC 42001 lifecycle-governance stack; UKAS granted the first accredited ISO/IEC 42001 certification capability (to BSI) in January 2026.
  - **EU AI Act phasing**: GPAI provider obligations applied from 2 August 2025, with AI Office enforcement powers from 2 August 2026 — the date the Act's high-risk framework, including post-market monitoring and serious-incident reporting duties, also becomes broadly applicable.

  **Sources**:
  - https://www.nist.gov/itl/ai-risk-management-framework
  - https://airc.nist.gov/airmf-resources/crosswalks/
  - https://www.eccouncil.org/cybersecurity-exchange/responsible-ai-governance/eu-ai-act-nist-ai-rmf-and-iso-iec-42001-a-plain-english-comparison/
  - https://www.ukas.com/resources/latest-news/ukas-grants-first-aims-accreditation/
