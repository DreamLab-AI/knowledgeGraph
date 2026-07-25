public:: true

# Gnosis Chain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0746ee656d22790d215444e079c808cb0b25a0171bce893604d08adb1952ed9",
  "@type": "Page",
  "vc:slug": "gnosis-chain",
  "title": "Gnosis Chain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:evm",
      "vc:label": "EVM"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:gnosis-safe",
      "vc:label": "Gnosis Safe"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gnosis Chain"
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
  "@id": "urn:ngm:class:gnosis-chain",
  "@type": "Class",
  "label": "Gnosis Chain",
  "definition": "An Ethereum-compatible blockchain secured by proof of stake, designed for low-cost transactions and used for payments, governance tooling, and application deployment.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gnosis-chain:f2ca93edcc31",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0746ee656d22790d215444e079c808cb0b25a0171bce893604d08adb1952ed9"
  },
  "vc:resolutions": [
    {
      "raw": "[[EVM]]",
      "resolved": "urn:visionflow:linked:evm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gnosis Safe]]",
      "resolved": "urn:visionflow:linked:gnosis-safe",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - An Ethereum-compatible blockchain secured by proof of stake, designed for low-cost transactions and used for payments, governance tooling, and application deployment.

- ### Semantic Classification
  - owl-class:: blockchain:GnosisChain
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Gnosis Safe]], [[Smart Contract]]
  - requires:: [[EVM]], [[Proof of Stake]]

- ### Content
  - Gnosis Chain is a network compatible with the Ethereum Virtual Machine and secured by a proof-of-stake validator set. It targets low and predictable fees, which makes it suitable for frequent transactions such as payments and community governance operations.
  - The chain runs the same contract tooling as Ethereum, allowing applications to be deployed with minimal change, and is associated with the Gnosis ecosystem including the Gnosis Safe multi-signature wallet. It uses a stable-value token for transaction fees to keep costs steady relative to volatile native assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
