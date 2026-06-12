public:: true

elevatedFrom:: [[lognet]]
# Distributed Logseq Knowledge Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f11b39f22536a656e33ae8a7644e74f4ccf41d2e6f22823e22072f831bac0648",
  "@type": "Page",
  "vc:slug": "distributed-logseq-knowledge-network",
  "title": "Distributed Logseq Knowledge Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "lognet"
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
  "@id": "urn:ngm:class:distributed-logseq-knowledge-network",
  "@type": "Class",
  "label": "Distributed Logseq Knowledge Network",
  "definition": "LogNet is a networked knowledge-management infrastructure layer that interconnects Logseq graph nodes, enabling cross-graph querying, link resolution, and distributed publishing of structured ontology pages. It provides the network substrate over which linked-data references between pages are resolved and semantic annotations are aggregated, acting as the connective tissue between individual Logseq knowledge graphs and wider ontology repositories.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "quality": 0.7,
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"},
      {"@id": "urn:ngm:class:dr-o-hare-writing-for-log-seq", "label": "Dr O'Hare Writing for LogSeq"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:network-topology", "label": "Network Topology"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:digital-ontology-repository", "label": "Digital Ontology Repository"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:lognet:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f11b39f22536a656e33ae8a7644e74f4ccf41d2e6f22823e22072f831bac0648"
  },
  "vc:resolutions": [],
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
  - LogNet is the network-layer infrastructure that binds Logseq knowledge graph pages into a coherent, queryable semantic web. It resolves wikilink references between pages, exposes structured ontology blocks (v2 json-ld) to downstream pipelines, and provides a distributed publishing mechanism so that annotated pages can be surfaced in graph visualisers, ontology browsers, and API consumers.

  In the NarrativeGoldmine context, LogNet acts as the deployment substrate for the ontology pipeline: enriched pages are parsed and their `relations` blocks are ingested as graph edges, enabling semantic search, knowledge-graph navigation, and audit trails of ontological provenance.

- ### Semantic Classification
  - owl-class:: infrastructure:Lognet
  - owl-role:: Concept

- ### Relationships
  - Supports knowledge graph construction and Logseq-based knowledge management; uses linked-data and network infrastructure as foundations.
  - Related to graph databases and digital ontology repositories that consume its structured output.

- ### Content
  - <iframe src="http://192.168.0.51:3000" style="width: 100%; height: 550px"></iframe>

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
