public:: true

# Scorm

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:scorm",
  "@type": "Page",
  "title": "Scorm",
  "vc:slug": "scorm",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scorm",
  "@type": "Class",
  "label": "Scorm",
  "definition": "SCORM (Sharable Content Object Reference Model) is a set of technical standards for packaging and exchanging e-learning content so that courses run consistently across compliant learning management systems. It defines content packaging, run-time communication and sequencing so that a course can report completion, scores and time to the host platform. SCORM established interoperability for digital learning content and is a predecessor to xAPI.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:education-technology",
      "label": "Education Technology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:education-technology",
        "label": "Education Technology"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:learning-management-system",
        "label": "Learning Management System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:learning-analytics",
        "label": "Learning Analytics"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - SCORM (Sharable Content Object Reference Model) is a set of technical standards for packaging and exchanging e-learning content so that courses run consistently across compliant learning management systems.
  - Related concepts: [[Education Technology]] [[Interoperability]] [[Learning Management System]] [[Standards]] [[Metadata]]
- ### Overview
  - SCORM (Sharable Content Object Reference Model) is a set of technical standards for packaging and exchanging e-learning content so that courses run consistently across compliant learning management systems.
  - It defines content packaging, run-time communication and sequencing so that a course can report completion, scores and time to the host platform.
  - SCORM established interoperability for digital learning content and is a predecessor to xAPI.
  - It is modelled as a subclass of [[Education Technology]] within the spatial-computing domain.
- ### Key aspects
  - [[XML]] is a constituent or mechanism relevant to Scorm.
  - [[Metadata]] is a constituent or mechanism relevant to Scorm.
  - [[XML]] is a constituent or mechanism relevant to Scorm.
- ### Mechanisms
  - Scorm enables [[Data Interoperability]].
  - Scorm supports [[Learning Management System]].
  - Scorm is standardised in relation to [[Interoperability]].
  - Scorm is standardised in relation to [[Standards]].
- ### Applications
  - Applied in contexts involving [[Data Interoperability]].
  - Applied in contexts involving [[Learning Management System]].
  - Applied in contexts involving [[Learning Analytics]].
- ### Relationships
  - subClassOf:: [[Education Technology]]
  - partOf:: [[Education Technology]]
  - standardizedBy:: [[Interoperability]]
  - standardizedBy:: [[Standards]]
  - implements:: [[Metadata]]
  - implements:: [[XML]]
  - uses:: [[XML]]
  - supports:: [[Learning Management System]]
  - enables:: [[Data Interoperability]]
  - relatedTo:: [[Learning Analytics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
