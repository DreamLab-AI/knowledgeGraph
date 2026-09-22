public:: true

# Freedom Of Expression

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:freedom-of-expression", "@type": "Page", "title": "Freedom Of Expression", "vc:slug": "freedom-of-expression", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:freedom-of-expression",
  "@type": "Class",
  "label": "Freedom Of Expression",
  "definition": "Freedom of expression is the right to hold opinions and to seek, receive and impart information and ideas without unwarranted interference. Recognised as a fundamental human right, it underpins democratic participation, accountability and open discourse, while being subject to narrowly defined limits. In digital governance it intersects with content moderation, censorship resistance and platform accountability.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-rights",
      "label": "Human Rights"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-rights",
        "label": "Digital Rights"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rule-of-law",
        "label": "Rule Of Law"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:surveillance",
        "label": "Surveillance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      },
      {
        "@id": "urn:ngm:class:rule-of-law",
        "label": "Rule Of Law"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The right to seek, receive and impart ideas, a core part of [[Human Rights]].
  - Foundational to accountable [[Governance]] and open discourse.
  - In digital contexts it interacts with [[Content Moderation]] and [[Censorship Resistance]].
- ### Overview
  - Protects opinion, speech, press and access to information.
  - Subject to narrow, lawful and proportionate limits.
  - Tensions arise online between protection, harm mitigation and platform power.
- ### Key aspects
  - Protects both the speaker and the audience's right to receive information.
  - Implemented through legal safeguards and institutional accountability.
  - Balanced against rights to safety, reputation and [[Privacy]].
  - Censorship-resistant infrastructure can preserve it under pressure.
- ### Applications
  - Press freedom and civic participation.
  - Platform policy and content-moderation design.
  - Censorship-resistant publishing and communication.
- ### Relationships
  - subClassOf:: [[Human Rights]]
  - partOf:: [[Human Rights]]
  - hasPart:: [[Digital Rights]]
  - implements:: [[Rule Of Law]]
  - supports:: [[Accountability]]
  - supports:: [[Data Sovereignty]]
  - requires:: [[Governance]]
  - contrastsWith:: [[Surveillance]]
  - bridgesTo:: [[Content Moderation]]
  - bridgesTo:: [[Censorship Resistance]]
  - relatedTo:: [[Privacy]]
  - relatedTo:: [[Human Rights]]
  - relatedTo:: [[Rule Of Law]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
