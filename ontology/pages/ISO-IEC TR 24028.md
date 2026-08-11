public:: true

# ISO/IEC TR 24028
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab598f21d63a582ae9c026aab253ee37184db5c4ec83a033e9a6ca88afb95767",
  "@type": "Page",
  "vc:slug": "iso-iec-tr-24028",
  "title": "ISO/IEC TR 24028",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-tr-24027",
      "vc:label": "ISO-IEC TR 24027"
    },
    {
      "@id": "urn:visionflow:linked:ai-trustworthiness",
      "vc:label": "AI Trustworthiness"
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
  "@id": "urn:ngm:class:iso-iec-tr-24028",
  "@type": "Class",
  "label": "ISO/IEC TR 24028",
  "definition": "ISO/IEC TR 24028 is a technical report, published by ISO/IEC JTC 1/SC 42, that provides an overview of trustworthiness in artificial intelligence. It surveys the properties that make AI systems trustworthy — reliability, robustness, resilience, safety, transparency, explainability, controllability, and privacy — and catalogues the threats to trustworthiness and the mitigation approaches available across the AI lifecycle. As a foundational overview it frames the vocabulary and concerns that later, more specific standards build upon. It is a distinct deliverable from ISO/IEC TR 24027, which addresses bias in AI systems and AI-aided decision making; the two carry different numbers and cover different subjects within the same SC 42 programme.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:technical-standard",
    "label": "Technical Standard"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO-IEC"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-trustworthiness",
        "label": "AI Trustworthiness"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:iso-iec-tr-24027",
        "label": "ISO-IEC TR 24027"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
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
  - "ISO/IEC TR 24028 is a technical report, published by ISO/IEC JTC 1/SC 42, that provides an overview of trustworthiness in artificial intelligence. It surveys the properties that make AI systems trustworthy — reliability, robustness, resilience, safety, transparency, explainability, controllability, and privacy — and catalogues the threats to trustworthiness and the mitigation approaches available across the AI lifecycle. As a foundational overview it frames the vocabulary and concerns that later, more specific standards build upon. It is a distinct deliverable from ISO/IEC TR 24027, which addresses bias in AI systems and AI-aided decision making; the two carry different numbers and cover different subjects within the same SC 42 programme."

- ### Semantic Classification
  - owl-class:: standards:IsoIecTr24028
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - part-of:: [[ISO-IEC]]
  - enables:: [[AI Trustworthiness]]
  - contrasts-with:: [[ISO-IEC TR 24027]]

- ### Content

  ## Definition

  **ISO/IEC TR 24028** is the technical report that maps the landscape of trustworthiness in artificial intelligence. Produced by SC 42, the ISO/IEC subcommittee for AI, it sets out what trustworthiness means for AI systems, breaking it into properties such as reliability, robustness, resilience, safety, transparency, explainability, controllability, and privacy, and then examining the vulnerabilities that undermine each and the engineering and governance measures that address them.

  Its role in the standards ecosystem is foundational rather than prescriptive: as a technical report it informs and frames rather than certifies, giving developers and later standards a shared vocabulary and a structured account of the problem space. Downstream management-system and evaluation standards draw on the concepts it consolidates.

  The report is a separate deliverable from **ISO/IEC TR 24027**. They are neighbours in the same SC 42 catalogue but not the same document: 24028 is the broad trustworthiness overview, while 24027 is scoped specifically to bias in AI systems and AI-aided decision making. Different numbers denote different subjects, and conflating them would collapse two distinct standards.

  ## Technical Details

  Within the SC 42 body of work, TR 24028 sits alongside companion deliverables including TR 24027 (bias), TR 24029 (robustness assessment of neural networks), and the ISO/IEC 23894 risk-management guidance and ISO/IEC 42001 management-system standard. Being a Type 3 technical report, it is informative — it conveys collected knowledge and does not itself contain requirements against which a system can be certified. Its contribution is conceptual coherence: it establishes the trustworthiness properties and threat taxonomy that make later normative standards and conformity-assessment schemes legible, and it is frequently cited as the entry point for organisations orienting themselves to AI trustworthiness before adopting the more actionable standards in the family.

  ## Current Landscape

  - ISO/IEC TR 24028 was published in **May 2020** (43 pages, edition 1, status "International Standard published" [60.60]) by ISO/IEC JTC 1/SC 42, the AI subcommittee whose secretariat is held by ANSI; it was the first AI-trustworthiness deliverable in the SC 42 programme.
  - The report defines trustworthiness as the "ability to meet stakeholders' expectations in a verifiable way" and surveys approaches to transparency, explainability and controllability; engineering pitfalls and their associated threats and mitigations; and ways to assess and achieve availability, resiliency, reliability, accuracy, safety, security and privacy of AI systems.
  - As an informative report it carries no normative references and cannot itself be certified against; it has since been operationalised by later SC 42 standards — notably the risk-management guidance ISO/IEC 23894:2023 and the certifiable management-system standard ISO/IEC 42001:2023, which draw on its vocabulary.
  - It remains the standard entry point cited by organisations orienting themselves to AI trustworthiness before adopting the more actionable standards in the family, and is frequently referenced in mappings to regulatory regimes such as the EU AI Act.

  **Sources**:
  - https://www.iso.org/standard/77608.html
  - https://www.iso.org/news/ref2530.html
  - https://iec.ch/public/miscfiles/sbp/jtc1-sc42.pdf
