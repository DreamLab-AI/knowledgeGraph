public:: true

# Ethereum Smart Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d25911f56450f1c42d190cb87565f623b945a855b136ff9efea9aa876d792b6b",
  "@type": "Page",
  "vc:slug": "ethereum-smart-contracts",
  "title": "Ethereum Smart Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:erc-20",
      "vc:label": "ERC-20"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Smart Contracts"
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
  "@id": "urn:ngm:class:ethereum-smart-contracts",
  "@type": "Class",
  "label": "Ethereum Smart Contracts",
  "definition": "Programs deployed to the Ethereum blockchain that execute deterministically on the Ethereum Virtual Machine and maintain state enforced by network consensus.",
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
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-smart-contracts:1020d2482994",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d25911f56450f1c42d190cb87565f623b945a855b136ff9efea9aa876d792b6b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ERC-20]]",
      "resolved": "urn:visionflow:linked:erc-20",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - Programs deployed to the Ethereum blockchain that execute deterministically on the Ethereum Virtual Machine and maintain state enforced by network consensus.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumSmartContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Ethereum Virtual Machine]], [[Solidity]]
  - enables:: [[ERC-20]]

- ### Content
  - Ethereum smart contracts are account-bound programs whose code and storage live on-chain. They run on the Ethereum Virtual Machine, with each operation metered in gas paid by the transaction sender.
  - Contracts are commonly written in Solidity and compiled to bytecode for execution. Their deterministic execution and shared state allow standards such as ERC-20 to define interoperable tokens and applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
