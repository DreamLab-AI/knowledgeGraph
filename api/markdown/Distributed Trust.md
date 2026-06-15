public:: true

# Distributed Trust
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:distributed-trust",
  "@type": "Page",
  "title": "Distributed Trust",
  "vc:slug": "distributed-trust",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-trust",
  "@type": "Class",
  "label": "Distributed Trust",
  "definition": "Distributed trust is a model in which confidence in a system arises from the collective behaviour of many independent participants rather than from a single trusted authority. Through cryptography, consensus and economic incentives, no single party needs to be trusted for the system as a whole to behave correctly. It is the foundational principle behind blockchains and other decentralised infrastructures.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:consensus-mechanism",
      "label": "Consensus Mechanism"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralisation",
        "label": "Decentralisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trustless-transaction",
        "label": "Trustless Transaction"
      },
      {
        "@id": "urn:ngm:class:decentralisation",
        "label": "Decentralisation"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:web-of-trust",
        "label": "Web of Trust"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web-of-trust",
        "label": "Web of Trust"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Distributed Trust]] replaces a central authority with [[Cryptography]], [[Consensus Mechanism]]s and [[Byzantine Fault Tolerance]], enabling [[Trustless Transaction]]s on a [[Blockchain]].
- ### Overview
  - Distributed trust spreads the assurance of correctness across many participants so that compromising any minority cannot subvert the system.
  - It combines cryptographic verification, consensus over shared state, and incentives that reward honest behaviour.
  - The result is systems where strangers can transact and coordinate without a central intermediary.
- ### Mechanisms
  - Consensus protocols tolerant of faulty or adversarial nodes.
  - Cryptographic signatures and hashing to make tampering detectable.
  - Economic incentives and slashing to align participant behaviour.
  - Replicated, append-only ledgers that anyone can independently verify.
- ### Applications
  - Permissionless blockchains and cryptocurrencies.
  - Decentralised finance and trustless settlement.
  - Web-of-trust identity and reputation systems.
  - Tamper-evident provenance and supply-chain records.
- ### Relationships
  - partOf:: [[Blockchain]]
  - partOf:: [[Decentralisation]]
  - implements:: [[Consensus Mechanism]]
  - implements:: [[Byzantine Fault Tolerance]]
  - dependsOn:: [[Cryptography]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Digital Signature]]
  - enables:: [[Trustless Transaction]]
  - enables:: [[Decentralisation]]
  - enables:: [[Smart Contract]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Distributed Ledger]]
  - supports:: [[Decentralised Finance]]
  - supports:: [[Web of Trust]]
  - bridgesTo:: [[Web of Trust]]
  - bridgesTo:: [[Reputation System]]
  - contrastsWith:: [[Trust]]
  - relatedTo:: [[Immutability]]
  - relatedTo:: [[Provenance]]
  - relatedTo:: [[Identity]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
