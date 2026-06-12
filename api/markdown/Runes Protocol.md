public:: true

# Runes Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:725ebe8351b2e6392117fe2e7d38acf90e0f2ea23893c6359f80efe71a602754",
  "@type": "Page",
  "vc:slug": "runes-protocol",
  "title": "Runes Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:fungible-token",
      "vc:label": "Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:token-standard",
      "vc:label": "Token Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Runes Protocol"
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
  "@id": "urn:ngm:class:runes-protocol",
  "@type": "Class",
  "label": "Runes Protocol",
  "definition": "A protocol for issuing fungible tokens on Bitcoin that records token data within transaction outputs using the unspent transaction output model.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token-standard",
      "label": "Token Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:runes-protocol:0410f8c75f98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:725ebe8351b2e6392117fe2e7d38acf90e0f2ea23893c6359f80efe71a602754"
  },
  "vc:resolutions": [
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:linked:fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:linked:token-standard",
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
  - A protocol for issuing fungible tokens on Bitcoin that records token data within transaction outputs using the unspent transaction output model.

- ### Semantic Classification
  - owl-class:: blockchain:RunesProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token Standard]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[UTXO]]
  - enables:: [[Fungible Token]]

- ### Content
  - The Runes protocol encodes token issuance and transfers into Bitcoin transactions, attaching protocol messages that assign balances to outputs. It works with the unspent transaction output model rather than a separate account ledger.
  - Designed as a more efficient alternative to inscription-based token conventions, it aims to reduce the on-chain footprint of fungible tokens on Bitcoin while keeping balance tracking tied to spendable outputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
