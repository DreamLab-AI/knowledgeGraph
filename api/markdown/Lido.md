public:: true

# Lido
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:00a69ae37337ef2aafb5a6a584976cd38a5b701d501bff8de0799830ce89bbad",
  "@type": "Page",
  "vc:slug": "lido",
  "title": "Lido",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:validator-node",
      "vc:label": "Validator Node"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:linked:lido-dao",
      "vc:label": "Lido DAO"
    },
    {
      "@id": "urn:visionflow:linked:liquid-proof-of-stake",
      "vc:label": "Liquid Proof of Stake"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lido"
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
  "@id": "urn:ngm:class:lido",
  "@type": "Class",
  "label": "Lido",
  "definition": "A liquid staking protocol that stakes users' assets with network validators and issues a transferable token representing the staked position and its accruing rewards, enabling holders to participate in DeFi while their principal remains staked.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquid-proof-of-stake",
      "label": "Liquid Proof of Stake"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      },
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
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      },
      {
        "@id": "urn:ngm:class:collateralization",
        "label": "Collateralization"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:lido-dao",
        "label": "Lido DAO"
      },
      {
        "@id": "urn:ngm:class:steth",
        "label": "stETH"
      },
      {
        "@id": "urn:ngm:class:node-operator-registry",
        "label": "Node Operator Registry"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:liquid-staking-token",
        "label": "Liquid Staking Token"
      },
      {
        "@id": "urn:ngm:class:reward-distribution",
        "label": "Reward Distribution"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:solo-staking",
        "label": "Solo Staking"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:centralized-exchange",
        "label": "Centralized Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralization"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:liquid-staking-protocol",
      "label": "Liquid Staking Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lido:fa4f1b2d3559",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:00a69ae37337ef2aafb5a6a584976cd38a5b701d501bff8de0799830ce89bbad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Validator Node]]",
      "resolved": "urn:visionflow:linked:validator-node",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lido DAO]]",
      "resolved": "urn:visionflow:linked:lido-dao",
      "kind": "StubLink"
    },
    {
      "raw": "[[Liquid Proof of Stake]]",
      "resolved": "urn:visionflow:linked:liquid-proof-of-stake",
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
  - A liquid staking protocol that stakes users' assets with network validators and issues a transferable token representing the staked position and its accruing rewards.

- ### Semantic Classification
  - owl-class:: blockchain:Lido
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Liquid Proof of Stake]]
  - bridges-to:: [[Lido DAO]]
  - requires:: [[Proof of Stake]], [[Validator Node]]
  - enables:: [[Liquidity Provision]]

- ### Content
  - Lido lets holders stake assets toward network security without running validator infrastructure themselves. Deposited assets are delegated across a set of node operators, and in return the protocol mints a liquid staking token that represents the deposit and the staking rewards it earns.
  - Because the staking token is transferable, holders can use it in other applications such as lending markets and liquidity pools while their underlying assets remain staked. This separates the act of securing the network from the immobilisation of capital, at the cost of introducing smart contract risk and reliance on the protocol's chosen operator set.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
