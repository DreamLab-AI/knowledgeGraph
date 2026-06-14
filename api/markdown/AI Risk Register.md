public:: true

# AI Risk Register
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6",
  "@type": "Page",
  "vc:slug": "ai-risk-register",
  "title": "AI Risk Register",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-31000",
      "vc:label": "ISO 31000"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
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
      "vc:value": "AI-0394"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Risk Register"
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
  "@id": "urn:ngm:class:ai-risk-register",
  "@type": "Class",
  "label": "AI Risk Register",
  "definition": "An AI Risk Register is a structured artefact that systematically documents, tracks, and manages identified risks associated with AI systems throughout their lifecycle. Each entry records a risk identifier, description, affected systems and stakeholders, likelihood and consequence ratings, overall risk level, assigned owner, current mitigation controls, residual risk, and review history. The register supports risk-based governance by enabling prioritisation of mitigation efforts, regulatory compliance demonstration, and continuous monitoring across technical, ethical, legal, operational, security, and societal risk categories.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:ai-risk-management",
      "label": "AI Risk Management"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-risk-register:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 31000]]",
      "resolved": "urn:visionflow:linked:iso-31000",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
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


### Definition

An AI Risk Register is a structured artefact that systematically documents, tracks, and manages identified risks associated with AI systems throughout their lifecycle. Each entry records a risk identifier, description, affected systems and stakeholders, likelihood and consequence ratings, overall risk level, assigned owner, current mitigation controls, residual risk, and review history. The register supports risk-based governance by enabling prioritisation of mitigation efforts, regulatory compliance demonstration, and continuous monitoring across technical, ethical, legal, operational, security, and societal risk categories.

### Relationships

The AI Risk Register is a subclass of both AI Governance and Ethics and AI Risk Management. It contains as parts an Audit Trail (providing an immutable history of risk status changes and decisions) and Risk Assessment (the process that feeds entries into the register). It requires AI Governance structures to authorise risk appetite thresholds, a Compliance Framework to map risks to regulatory obligations, and Accountability mechanisms to assign and enforce risk ownership. The register enables Compliance Monitoring by providing the authoritative risk inventory against which control effectiveness is measured, supports AI Safety by surfacing failure modes before deployment, and promotes Transparency with stakeholders. It supports the broader AI Governance Framework and Regulatory Compliance reporting. Related concepts include Fairness (whose violation constitutes a distinct ethical risk category), Bias (a primary technical and ethical risk driver), Explainability (both a mitigation tool and an independent risk dimension), and Risk Management as the enterprise-wide discipline it extends.

### Content

The AI Risk Register adapts established enterprise risk management practices — codified in ISO 31000 — to the distinctive characteristics of AI systems: model drift, distributional shift, opaque decision-making, and emergent behaviour that may not manifest until deployment at scale. Unlike conventional IT risk registers, AI risk registers must capture the dynamic nature of model behaviour over time, including performance degradation as input distributions evolve away from the training distribution and the risk of feedback loops where model outputs influence future training data.

Standard risk register schemas for AI follow a 5×5 likelihood-consequence matrix. Likelihood descriptors (rare, unlikely, possible, likely, almost certain) are calibrated to deployment context — a rare event in a high-volume autonomous system may still trigger thousands of adverse outcomes annually. Consequence descriptors (insignificant to catastrophic) span financial loss, physical harm, discriminatory outcome, reputational damage, and regulatory sanction. Risk level (the product cell) determines prioritisation: risks rated high or critical require formal treatment plans with defined owners, milestones, and budget; medium risks require monitoring; low risks may be accepted with periodic review.

ISO/IEC 23894:2023 provides AI-specific guidance for integrating risk management into the AI system lifecycle, mapping to ISO 31000 while addressing AI-distinctive concerns: explainability gaps that prevent risk owners from understanding why a failure occurred, data governance risks upstream of the model, and the challenge of defining acceptance criteria for probabilistic outputs. Regulatory frameworks impose additional mandatory register elements: the EU AI Act Article 9 requires a documented risk management system for high-risk AI applications that includes an identification and analysis of known and foreseeable risks, an estimation and evaluation of those risks, and an evaluation of residual risks after mitigation.

Operationally, the register is a living document embedded in a broader AI governance workflow. Risk identification workshops, red-team exercises, fairness audits, and bias detection analyses generate candidate entries. Risk owners — typically senior engineers, product managers, or compliance officers — are assigned at intake and are accountable for treatment progress. Integration with compliance monitoring dashboards enables real-time tracking of control effectiveness, and linkage to the audit trail ensures that every status change is logged with actor, timestamp, and rationale to satisfy regulatory audit requirements.

### Provenance

- sources:: ISO 31000, ISO/IEC 23894:2023
- migration-date:: 2026-04-26T00:00:00Z
