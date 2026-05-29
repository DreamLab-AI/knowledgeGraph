public:: true

# debug linked node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0147eff340723608d01bc726227612a3cf3682243a0c7dea3cd47249ace8bc9e",
  "@type": "Page",
  "vc:slug": "debug-linked-node",
  "title": "debug linked node",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:debug-test-page",
      "vc:label": "Debug Test Page"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "debug linked node"
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
  "@id": "urn:ngm:class:debug-linked-node",
  "@type": "Class",
  "label": "debug linked node",
  "definition": "A debug linked node is a diagnostic artefact within a knowledge graph or ontology system — a placeholder page that is deliberately linked to from another node in order to verify that the wikilink resolution, graph edge creation, and link-traversal mechanisms are functioning correctly. It serves as a test fixture for the ontology pipeline, confirming that bidirectional link references are parsed, stored as edges, and retrievable through graph queries.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:software-testing", "label": "Software Testing"},
      {"@id": "urn:ngm:class:node", "label": "Node"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:lognet", "label": "lognet"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:debug-linked-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0147eff340723608d01bc726227612a3cf3682243a0c7dea3cd47249ace8bc9e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Debug Test Page]]",
      "resolved": "urn:visionflow:owl:class:debug-test-page",
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
  - A debug linked node is a deliberately minimal ontology page created to exercise and verify the link-resolution and edge-creation subsystems of a knowledge graph pipeline. By linking to this node from a test page, developers can confirm that wikilink parsing, URN resolution, and graph edge persistence all operate correctly end-to-end.

  In automated ontology enrichment workflows, such nodes also serve as regression fixtures: if the pipeline ever fails to create an edge pointing to this node, the failure is immediately detectable through graph-query assertions, making it a lightweight but effective canary for pipeline health.

- ### Semantic Classification
  - owl-class:: infrastructure:DebugLinkedNode
  - owl-role:: Concept

- ### Relationships
  - Used in software testing of knowledge graph construction pipelines; related to the Node concept and linked-data infrastructure.
  - Part of the broader knowledge graph; depends on lognet for link resolution.

- ### Content
  - This is a node linked to [[Debug Test Page]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
