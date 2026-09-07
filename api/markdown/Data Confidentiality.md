```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c947eabfedf5954c71c88189a4346139fc60dffef79f8308aa44b0dfdefcf45",
  "@type": "Page",
  "vc:slug": "data-confidentiality",
  "title": "Data Confidentiality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Confidentiality"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-confidentiality",
  "@type": "Class",
  "label": "Data Confidentiality",
  "definition": "The property that data is accessible only to those authorised to view it, protecting information from disclosure to unauthorised parties. It is one of the core objectives of information security.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-security",
      "label": "Information Security"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

- ### Definition
  - The property that data is accessible only to those authorised to view it, protecting information from disclosure to unauthorised parties. It is one of the core objectives of information security.

- ### Semantic Classification
  - owl-class:: information-security:DataConfidentiality
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Information Security]]
  - bridges-to:: [[Information Security]]
  - requires:: [[Cryptography]]
  - enables:: [[Privacy]]

- ### Content
  - Data confidentiality ensures that information is disclosed only to authorised users and systems. It is one part of the classic confidentiality, integrity, and availability triad of information security.
  - It is enforced through access controls, encryption of data at rest and in transit, and techniques such as trusted execution environments and secure key management.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
