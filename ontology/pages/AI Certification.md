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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  AI certification is emerging rather than settled, but the accreditation infrastructure hardened considerably through 2025–26:

  - **ISO/IEC 42001:2023** (published December 2023) remains the anchor standard; it gained two companions in 2025 — ISO/IEC 42005:2025 (AI system impact assessment, May 2025) and ISO/IEC 42006:2025 (requirements for bodies certifying AI management systems, July 2025).
  - **Accredited certification is now real**: BSI became the first certification body worldwide accredited to certify ISO/IEC 42001, with dual UKAS and RvA accreditation announced in November 2025 and UKAS formally confirming its first AIMS accreditation grant on 15 January 2026. Seven certification bodies took part in the UKAS pilot, with a second tranche of about twelve more progressing applications.
  - **ISO/IEC 42001 does not equal EU AI Act conformity**: the European AI Office signalled in 2024 that the standard is not fully aligned with the Act, and it is not in the EU harmonisation pipeline. The first AI-specific harmonised standard, prEN 18286 (CEN-CENELEC JTC 21 quality-management standard for AI Act purposes), entered public enquiry on 30 October 2025 with final publication targeted for late 2026; only citation in the Official Journal will confer presumption of conformity.
  - **EU AI Act conformity assessment** (Article 43) mostly permits internal-control routes for Annex III high-risk systems, with notified-body assessment required for biometrics where harmonised standards are not applied — so third-party AI certification demand is currently driven more by procurement and assurance than by statute.

  The open questions remain practical: how to test statistical, evolving systems repeatably, how often certification must be renewed as models are updated, and how to prevent certification from becoming a box-ticking exercise divorced from real-world behaviour.

  **Sources**:
  - https://www.ukas.com/resources/latest-news/ukas-grants-first-aims-accreditation/
  - https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2025/november/bsi-becomes-the-first-certification-body-accredited-by-ukas-and-rva-to-deliver-certification-for-isoiec-42001/
  - https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-pren-18286-iso-42001-20260428-cs/
  - https://www.isaca.org/resources/news-and-trends/industry-news/2025/isoiec-42001-and-eu-ai-act-a-practical-pairing-for-ai-governance
