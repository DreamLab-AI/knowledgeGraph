public:: true

# AI Certification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b27982f67b1acf7ba90a9270897e4b1a0598224e26fa5e8dea59b40bca7e267",
  "@type": "Page",
  "vc:slug": "ai-certification",
  "title": "AI Certification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:certification",
      "vc:label": "Certification"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001",
      "vc:label": "ISO IEC 42001"
    },
    {
      "@id": "urn:visionflow:linked:trustworthy-ai",
      "vc:label": "Trustworthy AI"
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
  "@id": "urn:ngm:class:ai-certification",
  "@type": "Class",
  "label": "AI Certification",
  "definition": "AI certification is the formal attestation, by an accredited third party, that an artificial intelligence system or its governing management system conforms to defined requirements for safety, robustness, fairness, transparency, and risk management. Unlike generic conformity certification, it is scoped to AI-specific standards and hazards — data-quality and bias controls, model evaluation, human oversight, and lifecycle governance under frameworks such as ISO/IEC 42001. AI certification converts abstract commitments to trustworthy AI into auditable, marketable evidence, giving procurers, regulators, and the public a credible signal that a system has been independently assessed against recognised criteria rather than self-declared as compliant.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:certification",
    "label": "Certification"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-iec-42001",
        "label": "ISO IEC 42001"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "AI certification is the formal attestation, by an accredited third party, that an artificial intelligence system or its governing management system conforms to defined requirements for safety, robustness, fairness, transparency, and risk management. Unlike generic conformity certification, it is scoped to AI-specific standards and hazards — data-quality and bias controls, model evaluation, human oversight, and lifecycle governance under frameworks such as ISO/IEC 42001. AI certification converts abstract commitments to trustworthy AI into auditable, marketable evidence, giving procurers, regulators, and the public a credible signal that a system has been independently assessed against recognised criteria rather than self-declared as compliant."

- ### Semantic Classification
  - owl-class:: governance:AICertification
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Certification]]
  - requires:: [[Conformity Assessment]]
  - implements:: [[ISO IEC 42001]]
  - enables:: [[Trustworthy AI]]

- ### Content

  ## Definition

  **AI certification** is the AI-specific instance of certification: independent, accredited attestation that a system, product, or management framework meets stated requirements. What sets it apart from generic conformity certification is scope. General certification attests conformity to any specification; AI certification is bound to the hazards and controls peculiar to machine-learning systems — data governance and bias mitigation, model performance and robustness evaluation, explainability, human oversight, and continuous monitoring across a model's lifecycle.

  The mechanism draws on established conformity-assessment infrastructure — accreditation bodies, audit procedures, and certification marks — but applies it against AI-oriented standards. ISO/IEC 42001, the AI management-system standard, is a leading anchor, allowing an organisation to be certified for how it governs AI rather than only for a single model's outputs. This management-system approach mirrors the pattern of ISO 27001 for information security.

  By producing auditable evidence, AI certification operationalises trustworthy AI. It gives regulators a lever short of prescriptive law, gives procurers a due-diligence signal, and gives developers a defensible way to demonstrate responsible practice.

  ## Current Landscape

  AI certification is emerging rather than settled. The publication of ISO/IEC 42001 gave the field its first broadly applicable management-system standard to certify against, and accreditation bodies are building the schemes and auditor competencies needed to issue credible marks. In parallel, jurisdiction-specific regimes — notably the conformity-assessment obligations for high-risk systems under the EU AI Act — are shaping demand for both self-assessment and third-party certification routes. The open questions are practical: how to test statistical, evolving systems repeatably, how often certification must be renewed as models are updated, and how to prevent certification from becoming a box-ticking exercise divorced from real-world behaviour.
