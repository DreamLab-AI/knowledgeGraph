public:: true

# Privacy Disclosure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aadf2b37d49663223e408f59f7b8301da7c5632cb116229578e5c9297a52ffc3",
  "@type": "Page",
  "vc:slug": "privacy-disclosure",
  "title": "Privacy Disclosure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9665"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy Disclosure"
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
  "@id": "urn:ngm:class:privacy-disclosure",
  "@type": "Class",
  "label": "Privacy Disclosure",
  "definition": "The formal process by which platforms communicate to users what personal data is collected, how it is used, who it is shared with, and what rights users hold over it. In spatial computing and metaverse contexts, privacy disclosure must address novel data types including biometric signals, eye tracking, motion data, and behavioural analytics gathered in immersive environments.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:privacy-framework", "label": "Privacy Framework"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-disclosure:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aadf2b37d49663223e408f59f7b8301da7c5632cb116229578e5c9297a52ffc3"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - The formal process by which platforms communicate to users what personal data is collected, how it is used, who it is shared with, and what rights users hold over it. In spatial computing and metaverse contexts, privacy disclosure must address novel data types including biometric signals, eye tracking, motion data, and behavioural analytics gathered in immersive environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:PrivacyDisclosure
  - owl-role:: concept

- ### Relationships
  - **requires** [[Consent Management]] — meaningful disclosure must be paired with genuine consent mechanisms
  - **requires** [[Data Protection]] — data protection regulation defines the minimum content of privacy disclosures
  - **enables** [[Privacy By Design]] — proactive disclosure is a key pillar of privacy-by-design architecture
  - **enables** [[GDPR Compliance]] — GDPR Articles 13–14 mandate specific privacy disclosure obligations
  - **relatedTo** [[Privacy Framework]] — privacy frameworks define templates and standards for disclosure content
  - **relatedTo** [[Eye Tracking]] — eye-tracking data collected in XR devices is a sensitive disclosure subject
  - **supports** [[Accountability]] — transparent disclosure creates the evidentiary basis for regulatory accountability

- ### Content

  ## Overview

  Privacy Disclosure represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
