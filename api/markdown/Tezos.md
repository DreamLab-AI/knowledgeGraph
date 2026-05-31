public:: true

# Tezos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e1b182a2295cb100a7062fdb4c02c3e236315a89ec72ab2b6906268b8e644238",
  "@type": "Page",
  "vc:slug": "tezos",
  "title": "Tezos",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquid-proof-of-stake",
      "vc:label": "Liquid Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tezos"
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
  "@id": "urn:ngm:class:tezos",
  "@type": "Class",
  "label": "Tezos",
  "definition": "A proof-of-stake Layer 1 blockchain with on-chain governance that allows the protocol to amend itself through a formal voting process.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-1",
      "label": "Layer 1"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquid-proof-of-stake",
        "label": "Liquid Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tezos:afefb91b3856",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e1b182a2295cb100a7062fdb4c02c3e236315a89ec72ab2b6906268b8e644238"
  },
  "vc:resolutions": [
    {
      "raw": "[[Liquid Proof of Stake]]",
      "resolved": "urn:visionflow:linked:liquid-proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
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
  - A proof-of-stake Layer 1 blockchain with on-chain governance that allows the protocol to amend itself through a formal voting process.

- ### Semantic Classification
  - owl-class:: blockchain:Tezos
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 1]]
  - bridges-to:: [[Consensus Protocol]]
  - requires:: [[Liquid Proof of Stake]]
  - enables:: [[Smart Contract]]

- ### Content
  - Tezos secures its ledger using a liquid proof-of-stake consensus in which token holders can delegate their stake to validators known as bakers. Validation rights and rewards are distributed in proportion to stake.
  - Its distinguishing feature is on-chain governance: proposed protocol changes are voted on by stakeholders and, if accepted, applied automatically without a hard fork. This makes the ledger self-amending.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
