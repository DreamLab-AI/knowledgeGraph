public:: true

# Open Access

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:open-access",
  "@type": "Page",
  "title": "Open Access",
  "vc:slug": "open-access",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-access",
  "@type": "Class",
  "label": "Open Access",
  "definition": "Open access is the practice of making scholarly and other knowledge outputs freely available online without subscription or most copyright and licensing barriers. It aims to maximise the dissemination, reuse and impact of research by removing paywalls and granting broad reuse rights. Open access is a core component of the wider open science and open data movements.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-data",
      "label": "Open Data"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-sharing",
        "label": "Knowledge Sharing"
      },
      {
        "@id": "urn:ngm:class:knowledge-transfer",
        "label": "Knowledge Transfer"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      },
      {
        "@id": "urn:ngm:class:scientific-research",
        "label": "Scientific Research"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:creative-commons",
        "label": "Creative Commons"
      },
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:intellectual-property",
        "label": "Intellectual Property"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:intellectual-property",
        "label": "Intellectual Property"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:academic-research",
        "label": "Academic Research"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:knowledge-sharing",
        "label": "Knowledge Sharing"
      },
      {
        "@id": "urn:ngm:class:academic-research",
        "label": "Academic Research"
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
  - Open access is the practice of making scholarly and other knowledge outputs freely available online without subscription or most copyright and licensing barriers. It aims to maximise the dissemination, reuse and impact of research by removing paywalls and granting broad reuse rights. Open access is a core component of the wider open science and open data movements.
  - Related concepts: [[Open Data]] [[Open Science]] [[Creative Commons]] [[Peer Review]] [[Knowledge Sharing]]
- ### Overview
  - Open Access is situated within the [[Open Data]] area of the governance domain.
  - It connects a number of established concepts in the knowledge graph, anchoring edges that previously referenced it without a defining page.
- ### Key aspects
  - Open Data (partOf)
  - Open Data (implements)
  - Creative Commons (uses)
  - Peer Review (uses)
- ### Mechanisms
  - Operates through its relationships with [[Open Data]] and [[Open Science]].
  - Provides capabilities consumed by dependent and enabled classes listed under Relationships.
- ### Applications
  - Supports [[Knowledge Sharing]]
  - Supports [[Knowledge Transfer]]
  - Supports [[Open Science]]
  - Supports [[Scientific Research]]
- ### Relationships
  - subClassOf:: [[Open Data]]
  - partOf:: [[Open Data]]
  - enables:: [[Knowledge Sharing]]
  - enables:: [[Knowledge Transfer]]
  - supports:: [[Open Science]]
  - supports:: [[Scientific Research]]
  - uses:: [[Creative Commons]]
  - uses:: [[Peer Review]]
  - implements:: [[Open Data]]
  - dependsOn:: [[Intellectual Property]]
  - contrastsWith:: [[Intellectual Property]]
  - bridgesTo:: [[Academic Research]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Knowledge Sharing]]
  - relatedTo:: [[Academic Research]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
