public:: true

# Operational Transformation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:59299c267d0d88a6d2dec23b86ea103f429c5adb260c8e566e7a67a58d1dfb67",
  "@type": "Page",
  "vc:slug": "operational-transformation",
  "title": "Operational Transformation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:crdt",
      "vc:label": "CRDT"
    },
    {
      "@id": "urn:visionflow:linked:conflict-resolution",
      "vc:label": "Conflict Resolution"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Operational Transformation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operational-transformation",
  "@type": "Class",
  "label": "Operational Transformation",
  "definition": "A concurrency control technique for collaborative editing that transforms concurrent operations against each other so that all replicas converge to the same consistent state.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaboration-tools",
        "label": "Collaboration Tools"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:operational-transformation:6cee00f3b9bc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:59299c267d0d88a6d2dec23b86ea103f429c5adb260c8e566e7a67a58d1dfb67"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CRDT]]",
      "resolved": "urn:visionflow:linked:crdt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conflict Resolution]]",
      "resolved": "urn:visionflow:linked:conflict-resolution",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A concurrency control technique for collaborative editing that transforms concurrent operations against each other so that all replicas converge to the same consistent state.

- ### Semantic Classification
  - owl-class:: distributed-systems:OperationalTransformation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[CRDT]], [[Conflict Resolution]]
  - requires:: [[Distributed Systems]]
  - enables:: [[Collaboration Tools]]

- ### Content
  - Operational transformation (OT) allows multiple users to edit a shared document concurrently by representing changes as operations and transforming each incoming operation against operations that have already been applied locally. This adjustment preserves user intent and ensures replicas converge.
  - OT underpins many real-time collaborative editors. It requires careful handling of operation ordering and transformation functions, and it is often contrasted with conflict-free replicated data types, which achieve convergence through commutative data structures rather than transformation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
