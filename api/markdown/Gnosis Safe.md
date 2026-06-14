public:: true

# Gnosis Safe
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:046877ac47542e340c646e76d414f03f31339dd55e45e80a9389d33107b4f892",
  "@type": "Page",
  "vc:slug": "gnosis-safe",
  "title": "Gnosis Safe",
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
      "@id": "urn:visionflow:linked:multisignature-wallet",
      "vc:label": "Multisignature Wallet"
    },
    {
      "@id": "urn:visionflow:linked:treasury-management",
      "vc:label": "Treasury Management"
    },
    {
      "@id": "urn:visionflow:linked:snapshot",
      "vc:label": "Snapshot"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gnosis Safe"
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
  "@id": "urn:ngm:class:gnosis-safe",
  "@type": "Class",
  "label": "Gnosis Safe",
  "definition": "Gnosis Safe, later rebranded as Safe, is a smart-contract wallet for Ethereum and compatible networks that requires multiple signatures to authorise transactions. Rather than relying on a single private key, it enforces a configurable threshold, such as three of five owners, before funds move or contract calls execute. It is widely used by decentralised autonomous organisations, projects and individuals to manage treasuries and reduce the risk of a single compromised key.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:bc-network-component",
    "label": "Network Component"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:spending-limit",
        "label": "Spending Limit"
      },
      {
        "@id": "urn:ngm:class:social-recovery-wallet",
        "label": "Social Recovery Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-4337",
        "label": "ERC-4337"
      },
      {
        "@id": "urn:ngm:class:erc-1271",
        "label": "ERC-1271 Contract Signature Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:module-pattern",
        "label": "Module Pattern"
      },
      {
        "@id": "urn:ngm:class:proxy-contract",
        "label": "Proxy Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      },
      {
        "@id": "urn:ngm:class:snapshot",
        "label": "Snapshot"
      },
      {
        "@id": "urn:ngm:class:institutional-custody",
        "label": "Institutional Custody"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:externally-owned-account",
        "label": "Externally Owned Account"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gnosis-chain",
        "label": "Gnosis Chain"
      },
      {
        "@id": "urn:ngm:class:safe-core-protocol",
        "label": "Safe Core Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:safe-smart-account",
      "label": "Safe Smart Account"
    },
    {
      "@id": "urn:ngm:class:safe-multisig",
      "label": "Safe Multisig"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gnosis-safe:06433cf4c172",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:046877ac47542e340c646e76d414f03f31339dd55e45e80a9389d33107b4f892"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multisignature Wallet]]",
      "resolved": "urn:visionflow:linked:multisignature-wallet",
      "kind": "StubLink"
    },
    {
      "raw": "[[Treasury Management]]",
      "resolved": "urn:visionflow:linked:treasury-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Snapshot]]",
      "resolved": "urn:visionflow:linked:snapshot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
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
  - Gnosis Safe, later rebranded as Safe, is a smart-contract wallet for Ethereum and compatible networks that requires multiple signatures to authorise transactions. Rather than relying on a single private key, it enforces a configurable threshold, such as three of five owners, before funds move or contract calls execute. It is widely used by decentralised autonomous organisations, projects and individuals to manage treasuries and reduce the risk of a single compromised key.

- ### Semantic Classification
  - owl-class:: blockchain:GnosisSafe
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Snapshot]], [[Decentralised Autonomous Organisation]]
  - requires:: [[Smart Contract]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Multisignature Wallet]], [[Treasury Management]]

- ### Content
  - A Safe is deployed as a smart contract that holds assets and records a set of owner addresses together with a signature threshold. Any transaction must collect enough owner signatures to meet the threshold before it can be executed on-chain, which distributes control and removes single points of failure.
  - The contract supports modules and guards that extend its behaviour, enabling features such as spending limits, recovery mechanisms and integration with governance tooling. This programmability lets organisations encode policies directly into the wallet rather than enforcing them off-chain.
  - Safe is commonly paired with off-chain governance platforms, where an approved proposal is executed by the multisignature wallet, and with DeFi protocols that require an institutional-grade custody arrangement. Its widespread use has made it a de facto standard for shared on-chain treasuries.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
