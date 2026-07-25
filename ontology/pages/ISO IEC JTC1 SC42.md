public:: true

# ISO IEC JTC1 SC42
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:iso-iec-jtc1-sc42", "@type":"Page", "title":"ISO IEC JTC1 SC42", "vc:slug":"iso-iec-jtc1-sc42", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-iec-jtc1-sc42",
  "@type": "Class",
  "label": "ISO IEC JTC1 SC42",
  "definition": "ISO/IEC JTC 1/SC 42 is the joint ISO and IEC subcommittee responsible for international standardisation in the field of artificial intelligence. It develops foundational standards covering AI concepts and terminology, risk management, trustworthiness, data quality for machine learning, governance, and the AI system lifecycle. Its outputs, including ISO/IEC 22989 and ISO/IEC 23894, provide a common vocabulary and management framework that regulators and industry reference when assuring AI systems. SC 42 coordinates with national standards bodies and aligns with emerging AI regulation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:standards-body", "label": "Standards Body" }
  ],
  "relations": {
    "partOf": [
      { "@id": "urn:ngm:class:iso", "label": "ISO" }
    ],
    "standardizedBy": [
      { "@id": "urn:ngm:class:iso", "label": "ISO" }
    ],
    "produces": [
      { "@id": "urn:ngm:class:iso-iec-23894", "label": "ISO IEC 23894" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:ai-governance", "label": "AI Governance" },
      { "@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management" },
      { "@id": "urn:ngm:class:policy-framework", "label": "Policy Framework" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:standards", "label": "Standards" },
      { "@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF" },
      { "@id": "urn:ngm:class:governance", "label": "Governance" },
      { "@id": "urn:ngm:class:iso-iec-23894", "label": "ISO IEC 23894" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - ISO/IEC JTC 1/SC 42 is the international subcommittee that develops standards for [[Artificial Intelligence]]. It operates under the joint ISO/IEC technical committee JTC 1 and is the global focal point for AI standardisation.
  - Its work spans foundational [[Standards]] for terminology, [[AI Risk Management]], [[Trustworthy AI]], data quality, and the AI lifecycle, providing reference frameworks for [[AI Governance]].

- ### Overview
  - SC 42 gives industry and regulators a shared technical language and management structure for AI, reducing fragmentation across jurisdictions and sectors.
  - **Why it matters:** as AI regulation matures, harmonised international standards underpin conformity assessment, procurement requirements, and cross-border trust. SC 42 is the body producing those standards.
  - **How it works:**
    - Working groups draft standards through consensus among national member bodies.
    - Drafts pass through staged ballots before publication as International Standards.
    - Published standards are adopted nationally and referenced by regulators and certification schemes.
    - SC 42 liaises with adjacent committees and frameworks such as the [[NIST AI RMF]].

- ### Key aspects
  - **Foundational standards** — concepts and terminology that define a common AI vocabulary.
  - **Risk and trustworthiness** — guidance on managing AI risk and assuring properties such as robustness, transparency, and fairness.
  - **Data and lifecycle** — data-quality requirements for machine learning and management of the AI system lifecycle.
  - **Governance** — organisational management-system standards for AI.
  - **Liaison and alignment** — coordination with national bodies and regulatory frameworks including the EU AI Act.

- ### Applications
  - Conformity assessment and certification of AI systems against published standards.
  - Procurement and supplier requirements citing ISO/IEC AI standards.
  - Regulatory frameworks referencing SC 42 outputs to operationalise [[Trustworthy AI]].
  - Enterprise governance programmes adopting AI management-system standards.

- ### Relationships
  - subClassOf:: [[Standards Body]]
  - partOf:: [[ISO]]
  - standardizedBy:: [[ISO]]
  - produces:: [[ISO IEC 23894]]
  - enables:: [[AI Governance]]
  - enables:: [[Trustworthy AI]]
  - supports:: [[AI Risk Management]]
  - supports:: [[Policy Framework]]
  - relatedTo:: [[Standards]]
  - relatedTo:: [[NIST AI RMF]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[ISO IEC 23894]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
