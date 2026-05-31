public:: true

# Hash Time-Locked Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f47a8108d34ab8998ae72f108e920730fb7748442d176cc2e59a81d64b1e9f6f",
  "@type": "Page",
  "vc:slug": "hash-time-locked-contracts",
  "title": "Hash Time-Locked Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash",
      "vc:label": "Cryptographic Hash"
    },
    {
      "@id": "urn:visionflow:linked:timelock",
      "vc:label": "Timelock"
    },
    {
      "@id": "urn:visionflow:linked:atomic-swap",
      "vc:label": "Atomic Swap"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hash Time-Locked Contracts"
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
  "@id": "urn:ngm:class:hash-time-locked-contracts",
  "@type": "Class",
  "label": "Hash Time-Locked Contracts",
  "definition": "A type of smart contract that conditions a payment on the recipient revealing a cryptographic preimage before a deadline, enabling trustless conditional and cross-chain transfers.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contracts",
      "label": "Smart Contracts"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:timelock",
        "label": "Timelock"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hash-time-locked-contracts:542bd04bb6f5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f47a8108d34ab8998ae72f108e920730fb7748442d176cc2e59a81d64b1e9f6f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Hash]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Timelock]]",
      "resolved": "urn:visionflow:linked:timelock",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Atomic Swap]]",
      "resolved": "urn:visionflow:linked:atomic-swap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
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
  - A type of smart contract that conditions a payment on the recipient revealing a cryptographic preimage before a deadline, enabling trustless conditional and cross-chain transfers.

- ### Semantic Classification
  - owl-class:: blockchain:HashTimeLockedContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contracts]]
  - bridges-to:: [[Lightning Network]]
  - requires:: [[Cryptographic Hash]], [[Timelock]]
  - enables:: [[Atomic Swap]]

- ### Content
  - A hash time-locked contract, or HTLC, locks funds so they can be claimed only by presenting a value whose hash matches a committed digest, and only before a specified time. If the secret is not revealed in time, the funds can be refunded to the sender.
  - This hashlock and timelock combination enables atomic swaps between parties or chains and is fundamental to payment routing on the Lightning Network, where intermediaries forward payments without being able to steal the funds.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
