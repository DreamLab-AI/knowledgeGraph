public:: true

# Safe
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:841b88b8da0ef1191a57529ab116d30c86d62242d25e9fcf6559e27c4e750946",
  "@type": "Page",
  "vc:slug": "safe",
  "title": "Safe",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:account-abstraction",
      "vc:label": "Account Abstraction"
    },
    {
      "@id": "urn:visionflow:linked:gnosis-safe",
      "vc:label": "Gnosis Safe"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    },
    {
      "@id": "urn:visionflow:linked:multi-signature-wallet",
      "vc:label": "Multi-Signature Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Safe"
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
  "@id": "urn:ngm:class:safe",
  "@type": "Class",
  "label": "Safe",
  "definition": "A smart contract wallet platform on Ethereum and compatible chains, formerly Gnosis Safe, that provides multi-signature account management and programmable transaction approval.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-signature-wallet",
      "label": "Multi-Signature Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
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
  "@id": "urn:visionflow:annotation:link-resolutions:safe:8b3369944dd2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:841b88b8da0ef1191a57529ab116d30c86d62242d25e9fcf6559e27c4e750946"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Account Abstraction]]",
      "resolved": "urn:visionflow:linked:account-abstraction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gnosis Safe]]",
      "resolved": "urn:visionflow:linked:gnosis-safe",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Signature Wallet]]",
      "resolved": "urn:visionflow:linked:multi-signature-wallet",
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
  - A smart contract wallet platform on Ethereum and compatible chains, formerly Gnosis Safe, that provides multi-signature account management and programmable transaction approval.

- ### Semantic Classification
  - owl-class:: blockchain:Safe
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Multi-Signature Wallet]]
  - bridges-to:: [[Gnosis Safe]], [[Wallet]]
  - requires:: [[Smart Contract]], [[Ethereum]]
  - enables:: [[Account Abstraction]]

- ### Content
  - Safe is a widely deployed smart contract account framework that holds assets under configurable approval rules, typically requiring a threshold of signatures from a defined owner set before a transaction executes. It is commonly used by organisations, treasuries and DAOs to secure shared funds.
  - By moving wallet logic into a smart contract, Safe supports features such as batched transactions, spending policies and modular extensions, and it serves as a reference implementation for account abstraction patterns across EVM-compatible networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
