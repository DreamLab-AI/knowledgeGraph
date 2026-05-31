public:: true

# Staking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c9ae4bee5dd5fb1f115974c5ce3fcacb636f0d72944ab7f54f168897cddfc3e",
  "@type": "Page",
  "vc:slug": "staking",
  "title": "Staking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:validator",
      "vc:label": "Validator"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:yield-farming",
      "vc:label": "Yield Farming"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-staking",
      "vc:label": "https://ethereum.org/en/staking/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Staking"
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
  "@id": "urn:ngm:class:staking",
  "@type": "Class",
  "label": "Staking",
  "definition": "The act of locking cryptocurrency as a stake to participate in a proof-of-stake network's validation process, earning rewards and risking penalties for misbehaviour. The staked amount aligns a validator's incentives with the network's correct operation.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:proof-of-stake",
      "label": "Proof of Stake"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
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
  "@id": "urn:visionflow:annotation:link-resolutions:staking:d9a998cac660",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c9ae4bee5dd5fb1f115974c5ce3fcacb636f0d72944ab7f54f168897cddfc3e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Validator]]",
      "resolved": "urn:visionflow:linked:validator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Security]]",
      "resolved": "urn:visionflow:linked:network-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:linked:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Yield Farming]]",
      "resolved": "urn:visionflow:linked:yield-farming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/staking/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-staking",
      "kind": "StubLink"
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
  - The act of locking cryptocurrency as a stake to participate in a proof-of-stake network's validation process, earning rewards and risking penalties for misbehaviour. The staked amount aligns a validator's incentives with the network's correct operation.

- ### Semantic Classification
  - owl-class:: blockchain:Staking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Proof of Stake]]
  - bridges-to:: [[Consensus Mechanism]], [[Yield Farming]]
  - requires:: [[Validator]], [[Proof of Stake]]
  - enables:: [[Network Security]]

- ### Content
  - Staking commits a quantity of a network's native asset to back a validator's right to propose and attest to blocks under proof of stake. Honest participation earns protocol rewards, while provable misbehaviour can result in slashing of the stake.
  - Holders who do not run validators can often delegate their assets to others or pool them, sharing in rewards. The total value staked is a measure of the economic security backing a proof-of-stake chain.

- ### Provenance
  - sources:: [[https://ethereum.org/en/staking/]]
  - migration-date:: 2026-05-29T00:00:00Z
