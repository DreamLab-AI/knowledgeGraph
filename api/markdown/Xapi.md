public:: true

# Xapi

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:xapi",
  "@type": "Page",
  "title": "Xapi",
  "vc:slug": "xapi",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:xapi",
  "@type": "Class",
  "label": "Xapi",
  "definition": "xAPI (the Experience API, also known as Tin Can API) is an e-learning interoperability specification that captures learning experiences as actor-verb-object statements sent to a Learning Record Store. Unlike SCORM, it records learning that occurs outside a single course or platform, including informal, mobile and simulation-based activity. xAPI underpins rich learning analytics by providing a flexible, standardised data model.",
  "domain": "spatial-computing",
  "maturity": "established",
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
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:learning-management-system",
        "label": "Learning Management System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:learning-analytics",
        "label": "Learning Analytics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:adaptive-learning",
        "label": "Adaptive Learning"
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
  - xAPI (the Experience API, also known as Tin Can API) is an e-learning interoperability specification that captures learning experiences as actor-verb-object statements sent to a Learning Record Store.
  - Related concepts: [[Education Technology]] [[Interoperability]] [[Learning Analytics]] [[Standards]] [[Data Interoperability]]
- ### Overview
  - xAPI (the Experience API, also known as Tin Can API) is an e-learning interoperability specification that captures learning experiences as actor-verb-object statements sent to a Learning Record Store.
  - Unlike SCORM, it records learning that occurs outside a single course or platform, including informal, mobile and simulation-based activity.
  - xAPI underpins rich learning analytics by providing a flexible, standardised data model.
  - It is modelled as a subclass of [[Education Technology]] within the spatial-computing domain.
- ### Key aspects
  - [[Metadata]] is a constituent or mechanism relevant to Xapi.
  - [[Data Interoperability]] is a constituent or mechanism relevant to Xapi.
  - [[Metadata]] is a constituent or mechanism relevant to Xapi.
- ### Mechanisms
  - Xapi enables [[Learning Analytics]].
  - Xapi is standardised in relation to [[Interoperability]].
  - Xapi is standardised in relation to [[Standards]].
- ### Applications
  - Applied in contexts involving [[Learning Analytics]].
  - Applied in contexts involving [[Adaptive Learning]].
- ### Relationships
  - subClassOf:: [[Education Technology]]
  - partOf:: [[Education Technology]]
  - standardizedBy:: [[Interoperability]]
  - standardizedBy:: [[Standards]]
  - implements:: [[Data Interoperability]]
  - implements:: [[Metadata]]
  - contrastsWith:: [[Learning Management System]]
  - enables:: [[Learning Analytics]]
  - uses:: [[Metadata]]
  - relatedTo:: [[Adaptive Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
