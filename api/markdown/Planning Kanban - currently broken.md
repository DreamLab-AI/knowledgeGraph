public:: true

# Planning Kanban - currently broken
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b45bf9bf06bf230599a6798c0e3b02733001f739ae742e6e61eadced69c537d",
  "@type": "Page",
  "vc:slug": "planning-kanban-currently-broken",
  "title": "Planning Kanban - currently broken",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:kno-where",
      "vc:label": "KnoWhere"
    },
    {
      "@id": "urn:visionflow:linked:nlw-education-discord",
      "vc:label": "NLW education discord"
    },
    {
      "@id": "urn:visionflow:linked:pete-woodbridge",
      "vc:label": "Pete Woodbridge"
    },
    {
      "@id": "urn:visionflow:linked:training-material",
      "vc:label": "Training Material"
    },
    {
      "@id": "urn:visionflow:owl:class:parents-guide-to-ai",
      "vc:label": "ParentsGuideToAI"
    },
    {
      "@id": "urn:visionflow:owl:class:player-two",
      "vc:label": "PlayerTwo"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Planning Kanban - currently broken"
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
  "@id": "urn:ngm:class:planning-kanban-currently-broken",
  "@type": "Class",
  "label": "Planning Kanban - currently broken",
  "definition": "Planning Kanban - currently broken is a technology infrastructure concept and a type of Projects.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    },
    {
      "@id": "urn:ngm:class:projects",
      "label": "Projects"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:planning-kanban-currently-broken:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4b45bf9bf06bf230599a6798c0e3b02733001f739ae742e6e61eadced69c537d"
  },
  "vc:resolutions": [
    {
      "raw": "[[KnoWhere]]",
      "resolved": "urn:visionflow:linked:kno-where",
      "kind": "StubLink"
    },
    {
      "raw": "[[NLW education discord]]",
      "resolved": "urn:visionflow:linked:nlw-education-discord",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pete Woodbridge]]",
      "resolved": "urn:visionflow:linked:pete-woodbridge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Training Material]]",
      "resolved": "urn:visionflow:linked:training-material",
      "kind": "StubLink"
    },
    {
      "raw": "[[ParentsGuideToAI]]",
      "resolved": "urn:visionflow:owl:class:parents-guide-to-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PlayerTwo]]",
      "resolved": "urn:visionflow:owl:class:player-two",
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
  - Planning Kanban - currently broken is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PlanningKanbanCurrentlyBroken
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{renderer :kboard-query, High level Projects View, progress, TODO, DOING, DONE, cover, 260px}}
  - {{query (and [[PlayerTwo]] (property :progress))}}
  - {{query (and [[KnoWhere]] (property :progress))}}
  - {{query (and [[Training Material]] (property :progress))}}
  - {{query (and [[Pete Woodbridge]] (property :progress))}}
  - {{query (and [[ParentsGuideToAI]] (property :progress))}}
  - {{query (and [[NLW education discord]] (property :progress))}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
