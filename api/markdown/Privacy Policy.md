public:: true

# privacy policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d92443f92af063b1a5ec8f2261488c1e02a9457e023c14e4e948b1c61a3231d6",
  "@type": "Page",
  "vc:slug": "privacy-policy",
  "title": "privacy policy",
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
  "@id": "urn:ngm:class:privacy-policy",
  "@type": "Class",
  "label": "Privacy Policy",
  "definition": "A privacy policy is a formal legal disclosure document through which an organisation communicates to data subjects the categories of personal data it collects, the purposes and legal bases for processing, data retention periods, third-party sharing arrangements, and the rights available to individuals under applicable regulations. Privacy policies are mandated by data protection frameworks such as the EU General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and the California Consumer Privacy Act (CCPA). They must be written in clear, accessible language, kept up to date, and linked prominently at the point of data collection to constitute valid notice under most regulatory regimes.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-protection-regulation", "label": "Data Protection Regulation"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:privacy-framework", "label": "Privacy Framework"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A privacy policy is a formal legal disclosure document through which an organisation communicates to data subjects the categories of personal data it collects, the purposes and legal bases for processing, data retention periods, third-party sharing arrangements, and the rights available to individuals under applicable regulations. Privacy policies are mandated by data protection frameworks such as the EU General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and the California Consumer Privacy Act (CCPA). They must be written in clear, accessible language, kept up to date, and linked prominently at the point of data collection to constitute valid notice under most regulatory regimes.

- ### Semantic Classification
  - owl-class:: privacy-policy:Privacy Policy
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Data Protection Regulation]]
  - relatedTo [[GDPR Compliance]]
  - supports [[Consent Management]]
  - supports [[Data Governance]]
  - implements [[Privacy Framework]]

- ### Content
  - A privacy policy fulfils the transparency obligations imposed by data protection law: under GDPR Articles 13 and 14, controllers must inform data subjects at the point of collection (or within one month if data is obtained indirectly) of the legal basis for processing, the data retention period, whether data will be transferred internationally, and the identity of the data protection officer if one is appointed. Failure to provide adequate notice constitutes a breach that can attract regulatory enforcement action and fines.
  - In practice, privacy policies are often layered: a short-form notice at the point of collection provides key information, while the full policy document provides exhaustive detail. Machine-readable policy encoding—using vocabularies such as the ODRL (Open Digital Rights Language) or DPV (Data Privacy Vocabulary)—enables automated consent management systems to process and enforce policy terms, supporting scalable data governance across large organisations.
  - The intersection of privacy policy with AI systems is increasingly prominent: AI Act obligations require transparency about automated decision-making, including profiling with significant effects on individuals, supplementing GDPR's Article 22 rights. AI-generated content and training data sourced from personal data introduce additional considerations around data minimisation and purpose limitation. Organisations deploying AI systems must therefore ensure their privacy policies accurately reflect new data flows introduced by AI components, including inference logging, model training on user data, and third-party model API usage.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
