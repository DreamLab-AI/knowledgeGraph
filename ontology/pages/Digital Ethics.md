public:: true

# Digital Ethics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d89b67e7447e5d7c5453bf4f0b06ce4ea790967c36b1be1a14b77a4d5f2cc243",
  "@type": "Page",
  "vc:slug": "digital-ethics",
  "title": "Digital Ethics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:ethics", "vc:label": "Ethics"},
    {"@id": "urn:visionflow:linked:ai-ethics", "vc:label": "AI Ethics"},
    {"@id": "urn:visionflow:linked:value-sensitive-design", "vc:label": "Value-Sensitive Design"},
    {"@id": "urn:visionflow:linked:ieee-7000", "vc:label": "IEEE 7000"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-ethics",
  "@type": "Class",
  "label": "Digital Ethics",
  "definition": "The branch of applied ethics that examines how digital technologies — data collection, algorithms, platforms, connected devices, and AI systems — affect human values such as autonomy, privacy, fairness, dignity, and wellbeing, and that develops principles, design methods, and governance instruments to align technology development with those values. It underpins frameworks including the EU HLEG Ethics Guidelines for Trustworthy AI and value-based engineering standards such as IEEE 7000.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ethics",
    "label": "Ethics"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:value-sensitive-design", "label": "Value-Sensitive Design"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ethical-design-standard", "label": "Ethical Design Standard"},
      {"@id": "urn:ngm:class:ieee-7000", "label": "IEEE 7000"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:digital-governance", "label": "Digital Governance"}
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
  - "The branch of applied ethics that examines how digital technologies — data collection, algorithms, platforms, connected devices, and AI systems — affect human values such as autonomy, privacy, fairness, dignity, and wellbeing, and that develops principles, design methods, and governance instruments to align technology development with those values. It underpins frameworks including the EU HLEG Ethics Guidelines for Trustworthy AI and value-based engineering standards such as IEEE 7000."

- ### Semantic Classification
  - owl-class:: governance:DigitalEthics
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Ethics]]
  - has-part:: [[AI Ethics]]
  - uses:: [[Value-Sensitive Design]]
  - related-to:: [[IEEE 7000]]

- ### Content

  ## Definition

  **Digital ethics** is applied [[Ethics]] for the digital sphere: the systematic study of the moral problems raised by data, algorithms, and the practices and infrastructures built on them. Luciano Floridi's influential formulation divides the field into the ethics of data (generation, recording, sharing, and use of personal and non-personal data), the ethics of algorithms (the behaviour of increasingly autonomous computational artefacts), and the ethics of practices (the responsibilities of the people and organisations that design, deploy, and regulate digital systems).

  The field is broader than [[AI Ethics]], which it contains as its most prominent subfield: digital ethics also addresses privacy and surveillance, platform power and the attention economy, digital divides and accessibility, online manipulation and dark patterns, cybersecurity duties, and the environmental footprint of computing. Its distinctive move is to treat these not merely as compliance questions but as questions of value: what kinds of digital environments respect autonomy, enable human flourishing, and distribute benefits and burdens fairly.

  Digital ethics has become operational through design methodologies and standards. [[Value-Sensitive Design]] and participatory approaches translate stakeholder values into requirements; value-based engineering standards such as [[IEEE 7000]] give organisations a repeatable process for eliciting ethical concerns and tracing them into system design; and policy frameworks — most visibly the EU High-Level Expert Group's Ethics Guidelines for Trustworthy AI, with its requirements of human agency, transparency, fairness, and accountability — carry digital-ethics principles into [[Digital Governance]] and regulation.

  ## Current Landscape

  - **From principles to practice**: after a wave of ethics principle documents (2016–2020), effort has shifted to implementation — ethics review boards, impact assessments (DPIA, ALTAI, algorithmic impact assessments), and auditable design standards.
  - **Standardisation**: IEEE 7000-series standards (value-based engineering, transparency, algorithmic bias, children's data), ISO/IEC work on AI trustworthiness, and CEN-CENELEC harmonised standards supporting the EU AI Act.
  - **Institutionalisation**: chief ethics officers, research-ethics processes for data science, and government advisory bodies (the UK's Centre for Data Ethics and Innovation, now the Responsible Technology Adoption Unit) embed the discipline organisationally.
  - **Critique**: "ethics washing" — adopting ethical language without enforcement — remains a live concern, strengthening the argument for binding regulation to complement voluntary ethics frameworks.
  - **Frontier topics**: generative AI provenance and consent, neurotechnology and mental privacy, immersive-environment conduct, and the ethics of autonomous agents acting on users' behalf.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
