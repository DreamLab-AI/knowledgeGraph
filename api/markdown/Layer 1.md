public:: true

# Layer 1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:29a6effe54c83991003cd33f87eec45a4b62f9ea041a955810873ceae8d79aa1",
  "@type": "Page",
  "vc:slug": "layer-1",
  "title": "Layer 1",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Layer 1"
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
  "@id": "urn:ngm:class:layer-1",
  "@type": "Class",
  "label": "Layer 1",
  "definition": "The base settlement layer of a blockchain network where consensus and final transaction ordering occur, as distinct from protocols built on top of it.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer 2 Networks"
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
  "@id": "urn:visionflow:annotation:link-resolutions:layer-1:922badbaf192",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:29a6effe54c83991003cd33f87eec45a4b62f9ea041a955810873ceae8d79aa1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - The base settlement layer of a blockchain network where consensus and final transaction ordering occur, as distinct from protocols built on top of it.

- ### Semantic Classification
  - owl-class:: blockchain:Layer1
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Distributed Ledger]]
  - requires:: [[Consensus Protocol]]
  - enables:: [[Layer 2 Networks]]

- ### Content
  - A Layer 1 is the underlying chain that maintains its own state, runs a consensus mechanism, and provides finality for the transactions it records. Bitcoin and Ethereum are common examples of Layer 1 networks.
  - Layer 1 security and data availability act as the trust anchor for protocols built above them. Scaling at this layer is constrained by the need for many nodes to validate every transaction, which motivates the use of Layer 2 networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
