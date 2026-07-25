public:: true

# User-Centred Design

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:user-centred-design", "@type": "Page", "title": "User-Centred Design", "vc:slug": "user-centred-design", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-centred-design",
  "@type": "Class",
  "label": "User-Centred Design",
  "definition": "User-centred design is an iterative design methodology that grounds every stage of a system's development in the needs, behaviours and feedback of its intended users, typically through research, prototyping and usability testing. It treats user needs as the primary design constraint rather than an afterthought, in contrast to technology-first approaches. In interactive and spatial systems it shapes affordances, interaction patterns and accessibility provisions so that interfaces remain intuitive across diverse users and contexts.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:user-experience-design",
      "label": "User Experience Design"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:affordance",
        "label": "Affordance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ergonomics",
        "label": "Ergonomics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inclusive-design",
        "label": "Inclusive Design"
      },
      {
        "@id": "urn:ngm:class:assistive-technology-integration",
        "label": "Assistive Technology Integration"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:user-experience-design",
        "label": "User Experience Design"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- User-centred design is an iterative design methodology that grounds every stage of a system's development in the needs, behaviours and feedback of its intended users, typically through research, prototyping and usability testing. It treats user needs as the primary design constraint rather than an afterthought, in contrast to technology-first approaches. In interactive and spatial systems it shapes affordances, interaction patterns and accessibility provisions so that interfaces remain intuitive across diverse users and contexts.
- ### Relationships
	- uses:: [[Affordance]]
	- requires:: [[Ergonomics]]
	- enables:: [[Inclusive Design]]
	- enables:: [[Assistive Technology Integration]]
	- partOf:: [[User Experience Design]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
