public:: true

# Social Network Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0cc9968822c7a172d586ddda8588870f9cf0f0b6065d40f8f9443faf6d9b40a",
  "@type": "Page",
  "vc:slug": "social-network-graph",
  "title": "Social Network Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9686"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Network Graph"
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
  "@id": "urn:ngm:class:social-network-graph",
  "@type": "Class",
  "label": "Social Network Graph",
  "definition": "A graph-theoretic representation of social relationships in which nodes denote individuals or entities and edges encode interactions, follows, or trust links. Social network graphs underpin recommendation systems, community detection, influence analysis, and decentralised identity federation protocols such as Nostr and ActivityPub.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:virtual-community-platform", "label": "Virtual Community Platform"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:federation-surface", "label": "Federation Surface"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-network-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0cc9968822c7a172d586ddda8588870f9cf0f0b6065d40f8f9443faf6d9b40a"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A graph-theoretic representation of social relationships in which nodes denote individuals or entities and edges encode interactions, follows, or trust links. Social network graphs underpin recommendation systems, community detection, influence analysis, and decentralised identity federation protocols such as Nostr and ActivityPub.

- ### Semantic Classification
  - owl-class:: spatial-computing:SocialNetworkGraph
  - owl-role:: concept

- ### Relationships
  - **uses**: Digital Identity, Nostr Protocol — each graph node is anchored to a verifiable identity, and Nostr provides a decentralised graph propagation mechanism.
  - **enables**: Identity Federation, Virtual Community Platform — the graph structure makes federated identity discovery and virtual community formation possible.
  - **relatedTo**: Knowledge Graph, Federation Surface — social network graphs share structural properties with knowledge graphs and expose a federation surface for cross-platform data exchange.

- ### Content

  ## Overview

  Social Network Graph represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
