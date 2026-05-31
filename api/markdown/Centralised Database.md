public:: true

# Centralised Database
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7988b71a4f42f670cd1f37ba742c2d044f9ebed1709595c39d8b9b47272528dc",
  "@type": "Page",
  "vc:slug": "centralised-database",
  "title": "Centralised Database",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-storage",
      "vc:label": "Decentralised Storage"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Centralised Database"
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
  "@id": "urn:ngm:class:centralised-database",
  "@type": "Class",
  "label": "Centralised Database",
  "definition": "A database in which data is stored and managed at a single location or under a single controlling authority, in contrast to distributed or decentralised storage.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:centralised-database:bfe6dd8e6fa1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7988b71a4f42f670cd1f37ba742c2d044f9ebed1709595c39d8b9b47272528dc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Storage]]",
      "resolved": "urn:visionflow:linked:decentralised-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
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
  - A database in which data is stored and managed at a single location or under a single controlling authority, in contrast to distributed or decentralised storage.

- ### Semantic Classification
  - owl-class:: general:CentralisedDatabase
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Decentralised Storage]], [[Distributed Systems]]

- ### Content
  - A centralised database concentrates data storage and administration in one system or under one organisation. This simplifies consistency, access control and querying, since a single authority maintains the canonical state, and it remains the dominant model for many applications.
  - The trade-off is a single point of control and failure: the operator can alter or restrict access, and an outage or compromise affects all users. This contrasts with decentralised storage approaches that distribute data and control across many independent nodes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
