public:: true

# Ethical Review Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:59127f1a3315446241a9d4024033d7197427f71b16df633f7a042f7e1f7d2fb3",
  "@type": "Page",
  "vc:slug": "ethical-review-process",
  "title": "Ethical Review Process",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-p7000",
      "vc:label": "IEEE P7000"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0393"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethical Review Process"
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
  "@id": "urn:ngm:class:ethical-review-process",
  "@type": "Class",
  "label": "Ethical Review Process",
  "definition": "An Ethical Review Process is a structured methodology for evaluating AI systems against ethical frameworks, organisational values, and societal norms, involving expert deliberation, stakeholder consultation, and documented decision-making to ensure responsible AI development and deployment. It applies consequentialist, deontological, and virtue-ethics frameworks to assess fairness, privacy, autonomy, safety, and accountability dimensions, producing approval, conditional approval, deferral, or rejection outcomes with documented rationale.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:ai-ethics-board", "label": "AI Ethics Board"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ai-ethics-checklist", "label": "AI Ethics Checklist"},
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ethical-review-process:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:59127f1a3315446241a9d4024033d7197427f71b16df633f7a042f7e1f7d2fb3"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE P7000]]",
      "resolved": "urn:visionflow:linked:ieee-p7000",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act Regulatory Instrument]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
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
  An Ethical Review Process is a structured methodology for evaluating AI systems against ethical frameworks, organisational values, and societal norms, involving expert deliberation, stakeholder consultation, and documented decision-making to ensure responsible AI development and deployment. It applies consequentialist, deontological, and virtue-ethics frameworks to assess fairness, privacy, autonomy, safety, and accountability dimensions, producing approval, conditional approval, deferral, or rejection outcomes with documented rationale.

- ### Relationships
  - requires:: [[AI Ethics Board]], [[Accountability]], [[Human Oversight]]
  - enables:: [[Responsible AI]], [[AI Safety]]
  - uses:: [[AI Ethics Checklist]], [[Fairness Metrics]], [[Bias Detection Methods]]
  - supports:: [[AI Governance]], [[Compliance Framework]]
  - relatedTo:: [[AI Risk Management]], [[Explainability]], [[Algorithmic Accountability]]

- ### Content
  The Ethical Review Process operates as a structured governance gate inserted into the AI development lifecycle. Organisations typically define review tiers based on risk classification: low-risk systems may undergo expedited review or self-certification against a checklist, while high-risk systems—as classified under the EU AI Act for applications in employment, credit, law enforcement, or critical infrastructure—require full deliberative review by a multidisciplinary ethics board. The review scope covers technical properties (fairness metrics, bias audit results, explainability provisions), operational properties (human oversight mechanisms, incident response plans), and societal properties (affected community impacts, redress availability).

  Methodologically, the process borrows from Research Ethics Committees and Institutional Review Boards in biomedical research, adapted for AI-specific challenges such as emergent behaviour, distributional shift, and the difficulty of prospectively specifying all failure modes. Tools employed include AI ethics checklists (structured question frameworks covering harms, benefits, and rights), bias detection analyses across protected attribute groups, explainability assessments evaluating whether system outputs can be interpreted by affected persons, and stakeholder consultations soliciting perspectives from communities likely to be impacted by deployment.

  Standards alignment is a key function: reviewers verify that AI systems satisfy applicable regulatory requirements (EU AI Act conformity assessments, ISO/IEC 42001 AI management system requirements, IEEE P7000 ethically aligned design principles) and that documentation supports audit. The process produces a decision record with explicit rationale, creating accountability traces that regulators or affected parties can examine in case of challenged outcomes.

  Ongoing monitoring obligations extend the review process beyond initial deployment. High-risk systems require periodic re-review when material changes occur—model updates, new use cases, changes in deployment population—and when monitoring reveals performance degradation against fairness or safety criteria. This continuous loop between operational monitoring data and the ethics review process creates an adaptive governance mechanism appropriate to the dynamic nature of deployed AI systems.

- ### Provenance
  - sources:: [[IEEE P7000]], [[ISO/IEC 42001:2023]], [[EU AI Act Regulatory Instrument]]
  - migration-date:: 2026-04-26T00:00:00Z
