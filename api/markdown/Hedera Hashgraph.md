public:: true

# Hedera Hashgraph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e76ae3a37b338306d2b993ec050cd4f073ae22075511f7cc0724afb2ab99ebdc",
  "@type": "Page",
  "vc:slug": "hedera-hashgraph",
  "title": "Hedera Hashgraph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-algorithm",
      "vc:label": "Consensus Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:byzantine-fault-tolerance",
      "vc:label": "Byzantine Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hedera Hashgraph"
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
  "@id": "urn:ngm:class:hedera-hashgraph",
  "@type": "Class",
  "label": "Hedera Hashgraph",
  "definition": "Hedera is a public distributed ledger that uses the hashgraph consensus algorithm based on gossip about gossip and virtual voting. It is governed by a council of organisations and uses the HBAR token.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-ledger-technology",
      "label": "Distributed Ledger Technology"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hedera-hashgraph:889709f06d06",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e76ae3a37b338306d2b993ec050cd4f073ae22075511f7cc0724afb2ab99ebdc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Algorithm]]",
      "resolved": "urn:visionflow:linked:consensus-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:linked:byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
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
  - Hedera is a public distributed ledger that uses the hashgraph consensus algorithm based on gossip about gossip and virtual voting. It is governed by a council of organisations and uses the HBAR token.

- ### Semantic Classification
  - owl-class:: blockchain:HederaHashgraph
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Distributed Ledger Technology]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Consensus Algorithm]], [[Byzantine Fault Tolerance]]
  - enables:: [[Cryptocurrency]]

- ### Content
  - Hedera Hashgraph is a public network that records transactions using a directed acyclic graph rather than a linear chain. Its hashgraph consensus spreads transaction information by gossip and reaches agreement through virtual voting, providing asynchronous Byzantine fault tolerant finality.
  - The network is overseen by the Hedera Governing Council, a group of organisations that run nodes and steer the platform, and it uses the HBAR cryptocurrency for fees and staking. It supports smart contracts, token issuance and a consensus service for ordered event logging.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
