public:: true

# Bitcoin Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2df37b38e45e8b527354446c87ac15d6a12a982e9ff1b32fa669d0ed99e709b8",
  "@type": "Page",
  "vc:slug": "bitcoin-protocol",
  "title": "Bitcoin Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:block-reward",
      "vc:label": "Block Reward"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitcoin Protocol"
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
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-protocol",
  "@type": "Class",
  "label": "Bitcoin Protocol",
  "definition": "The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitcoin-protocol:6bfaaf5ae1a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2df37b38e45e8b527354446c87ac15d6a12a982e9ff1b32fa669d0ed99e709b8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Block Reward]]",
      "resolved": "urn:visionflow:linked:block-reward",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Block Reward]]
  - requires:: [[Consensus Protocol]], [[UTXO]]
  - enables:: [[Bitcoin Script]]

- ### Content
  - The Bitcoin protocol specifies the structure of transactions and blocks, the unspent transaction output model for tracking ownership, and the proof-of-work rule by which nodes agree on a single transaction history.
  - Validation rules are enforced independently by every full node, and the longest valid chain by accumulated work is treated as canonical. The protocol also defines issuance through the block reward and its periodic halving.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
