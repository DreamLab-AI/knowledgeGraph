public:: true

# Tally
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:266b56f788e8f0db51ed5045a116eccc857da4c197a29be66b65064fcd4bf31e",
  "@type": "Page",
  "vc:slug": "tally",
  "title": "Tally",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:dao",
      "vc:label": "DAO"
    },
    {
      "@id": "urn:visionflow:linked:dao-tooling",
      "vc:label": "DAO Tooling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tally"
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
  "@id": "urn:ngm:class:tally",
  "@type": "Class",
  "label": "Tally",
  "definition": "A web platform and toolset for creating and managing on-chain decentralised autonomous organisations, providing interfaces for proposal creation, delegation and governance voting across widely used governance contract frameworks.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dao-tooling",
      "label": "DAO Tooling"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
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
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:on-chain-voting",
        "label": "On-Chain Voting"
      },
      {
        "@id": "urn:ngm:class:vote-delegation",
        "label": "Vote Delegation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:compound-governor-bravo",
        "label": "Governor Bravo"
      },
      {
        "@id": "urn:ngm:class:open-zeppelin-governor",
        "label": "OpenZeppelin Governor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:web3-wallet",
        "label": "Web3 Wallet"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Weighted Voting"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:snapshot",
        "label": "Snapshot"
      },
      {
        "@id": "urn:ngm:class:aragon",
        "label": "Aragon"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      },
      {
        "@id": "urn:ngm:class:timelock-controller",
        "label": "Timelock Controller"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tally-governance-platform",
      "label": "Tally Governance Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tally:b01e26d3f5a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:266b56f788e8f0db51ed5045a116eccc857da4c197a29be66b65064fcd4bf31e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO]]",
      "resolved": "urn:visionflow:linked:dao",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO Tooling]]",
      "resolved": "urn:visionflow:linked:dao-tooling",
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
  - A web platform and toolset for creating and managing on-chain decentralised autonomous organisations, providing interfaces for proposal creation, delegation and governance voting.

- ### Semantic Classification
  - owl-class:: governance:Tally
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DAO Tooling]]
  - bridges-to:: [[DAO]]
  - requires:: [[Decentralised Autonomous Organisation]], [[Governance Token]]
  - enables:: [[Governance]]

- ### Content
  - Tally provides a user interface for token-based governance, allowing communities to create proposals, delegate voting power and cast votes that are recorded on chain. It supports widely used governance contract frameworks and surfaces participation data and delegate profiles.
  - By abstracting the mechanics of on-chain voting, Tally lowers the barrier to running a decentralised autonomous organisation and helps coordinate decision-making among holders of a governance token.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
