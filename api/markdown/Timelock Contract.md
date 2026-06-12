public:: true

# Timelock Contract
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:daffdde5f7a5309c37b32a1e9f0b63a37b20d285c6a9bf8aec85cbb1c6d84f88",
  "@type": "Page",
  "vc:slug": "timelock-contract",
  "title": "Timelock Contract",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:hash-time-locked-contract",
      "vc:label": "Hash Time-Locked Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Timelock Contract"
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
  "@id": "urn:ngm:class:timelock-contract",
  "@type": "Class",
  "label": "Timelock Contract",
  "definition": "A smart contract or transaction condition that prevents funds or actions from being executed until a specified time or block height is reached. It is used to enforce delays and to coordinate conditional payments.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:timelock-contract:9553c2e43ecd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:daffdde5f7a5309c37b32a1e9f0b63a37b20d285c6a9bf8aec85cbb1c6d84f88"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Time-Locked Contract]]",
      "resolved": "urn:visionflow:linked:hash-time-locked-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - A smart contract or transaction condition that prevents funds or actions from being executed until a specified time or block height is reached. It is used to enforce delays and to coordinate conditional payments.

- ### Semantic Classification
  - owl-class:: blockchain:TimelockContract
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Ethereum Smart Contract Platform]]
  - requires:: [[Smart Contract]]
  - enables:: [[Hash Time-Locked Contract]]

- ### Content
  - A timelock restricts when a transaction or contract action can take effect, either until an absolute time or block height or for a relative period after an earlier event. Bitcoin provides this through opcodes such as CheckLockTimeVerify and CheckSequenceVerify.
  - Timelocks are building blocks for protocols such as hash time-locked contracts and payment channels, where a delay gives parties a window to respond before funds become spendable.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
