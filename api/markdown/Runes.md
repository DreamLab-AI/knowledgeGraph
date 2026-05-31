public:: true

# Runes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3545c9d3ad395efbb5fb21d0cfa7b6ae950fe5ef9bd25561ce870a561ce2cd75",
  "@type": "Page",
  "vc:slug": "runes",
  "title": "Runes",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-ordinals",
      "vc:label": "Bitcoin Ordinals"
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
      "vc:value": "Runes"
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
  "@id": "urn:ngm:class:runes",
  "@type": "Class",
  "label": "Runes",
  "definition": "Runes is a protocol for issuing fungible tokens directly on the Bitcoin blockchain, using the transaction model and recorded in the witness data. It launched at the Bitcoin halving in April 2024.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-network",
        "label": "Bitcoin Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:runes:b4f0a22144cf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3545c9d3ad395efbb5fb21d0cfa7b6ae950fe5ef9bd25561ce870a561ce2cd75"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Ordinals]]",
      "resolved": "urn:visionflow:linked:bitcoin-ordinals",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
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
  - Runes is a protocol for issuing fungible tokens directly on the Bitcoin blockchain, using the transaction model and recorded in the witness data. It launched at the Bitcoin halving in April 2024.

- ### Semantic Classification
  - owl-class:: blockchain:Runes
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Bitcoin Ordinals]]
  - requires:: [[Bitcoin Network]]
  - enables:: [[Token]]

- ### Content
  - Runes is a fungible token protocol for Bitcoin created by the developer behind Ordinals, designed to issue and transfer tokens using Bitcoin's unspent transaction output model. Token operations are encoded in transaction outputs, with issuance and balances tracked by indexers that follow the protocol rules.
  - Launched at the April 2024 halving, Runes offered a more efficient alternative to earlier token standards on Bitcoin and drove substantial transaction activity and fees. It sits alongside Ordinals inscriptions as part of a wave of asset issuance on the Bitcoin base layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
