public:: true

# Surveillance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:surveillance",
  "@type": "Page",
  "title": "Surveillance",
  "vc:slug": "surveillance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:surveillance",
  "@type": "Class",
  "label": "Surveillance",
  "definition": "Surveillance is the systematic monitoring, observation and collection of information about people, behaviour or activities, typically by state authorities, corporations or other organisations. It encompasses physical observation, electronic interception, video monitoring and the aggregation of digital data trails. Surveillance practices raise significant questions about proportionality, oversight and the balance between security objectives and individual privacy and civil liberties.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:privacy-enhancing-technologies",
        "label": "Privacy-Enhancing Technology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:civil-liberties",
        "label": "Civil Liberties"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:ethics",
        "label": "Ethics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
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
  - [[Monitoring]] of people and activities
  - Tension with [[Privacy]] and [[Civil Liberties]]
  - Use of [[Facial Recognition]] technology
  - Governed by [[Data Governance]] frameworks
- ### Overview
  - Surveillance ranges from targeted, warrant-based investigation to mass, indiscriminate data collection.
  - It is conducted across physical spaces (cameras, sensors) and digital channels (communications interception, metadata).
  - Effective oversight, legal authorisation and accountability mechanisms are central to legitimate surveillance.
- ### Key aspects
  - Targeted versus mass surveillance distinctions
  - Legal authorisation and judicial oversight
  - Proportionality and necessity tests
  - Data retention and minimisation requirements
  - Chilling effects on free expression and assembly
- ### Applications
  - National security and counter-terrorism operations
  - Law enforcement criminal investigations
  - Workplace and corporate monitoring
  - Public space safety and crowd management
- ### Relationships
  - enables:: [[Monitoring]]
  - enables:: [[Observability]]
  - enables:: [[Data Collection]]
  - uses:: [[Facial Recognition]]
  - contrastsWith:: [[Privacy]]
  - contrastsWith:: [[Data Privacy]]
  - contrastsWith:: [[Privacy-Enhancing Technology]]
  - relatedTo:: [[Civil Liberties]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Ethics]]
  - requires:: [[Governance]]
  - requires:: [[Accountability]]
  - requires:: [[Transparency]]
  - supports:: [[Security]]
- ### Provenance
  - updated:: 2026-06-15
