public:: true

elevatedFrom:: [[Planning Kanban - currently broken]]
# Knowledge Graph Kanban Board
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b45bf9bf06bf230599a6798c0e3b02733001f739ae742e6e61eadced69c537d",
  "@type": "Page",
  "vc:slug": "knowledge-graph-kanban-board",
  "title": "Knowledge Graph Kanban Board",
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
  "@id": "urn:ngm:class:knowledge-graph-kanban-board",
  "@type": "Class",
  "label": "Knowledge Graph Kanban Board",
  "definition": "A Kanban-style project planning board within a Logseq knowledge graph that aggregates query-driven progress views across active projects. It uses embedded block queries to surface tasks tagged with progress properties, enabling at-a-glance visibility of TODO, DOING, and DONE states across linked project pages such as PlayerTwo and ParentsGuideToAI.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    },
    {
      "@id": "urn:ngm:class:active-research-projects-registry",
      "label": "Projects"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:active-research-projects-registry", "label": "Projects"},
      {"@id": "urn:ngm:class:player-two", "label": "Player Two"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:decentralised-agent-coordination-initiative", "label": "Agentic Alliance"}
    ]
  },
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
  - A Kanban-style project planning board within a Logseq knowledge graph that aggregates query-driven progress views across active projects. It uses embedded block queries to surface tasks tagged with progress properties, enabling at-a-glance visibility of TODO, DOING, and DONE states across linked project nodes such as PlayerTwo and ParentsGuideToAI.

- ### Semantic Classification
  - owl-class:: infrastructure:PlanningKanbanCurrentlyBroken
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Active Research Projects Registry]], [[Player Two]]
  - uses: [[Automated Planning]]
  - relatedTo: [[Multi-Agent Systems]], [[Decentralised Agent Coordination Initiative]]

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
