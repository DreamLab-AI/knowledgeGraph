public:: true

# Trustless Transaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:trustless-transaction",
  "@type": "Page",
  "title": "Trustless Transaction",
  "vc:slug": "trustless-transaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trustless-transaction",
  "@type": "Class",
  "label": "Trustless Transaction",
  "definition": "A trustless transaction is an exchange of value or commitments that completes correctly without either party having to trust the other or a central intermediary. Its guarantees come instead from cryptography, consensus and protocol design that make cheating detectable or impossible. Trustless transactions are a defining capability of blockchains and underpin atomic swaps, payment channels and smart-contract settlement.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction",
      "label": "Transaction"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-trust",
        "label": "Distributed Trust"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralisation",
        "label": "Decentralisation"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-trust",
        "label": "Distributed Trust"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double Spending"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
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
  - A [[Trustless Transaction]] relies on [[Distributed Trust]], a [[Consensus Mechanism]] and [[Cryptography]] to enable an [[Atomic Swap]] or [[Payment Channel]] without intermediaries.
- ### Overview
  - In a trustless transaction the protocol, not a person or institution, guarantees that the agreed exchange either completes or is safely aborted.
  - Cryptographic commitments and consensus prevent double-spending and unilateral reneging.
  - This shifts trust from counterparties and intermediaries to verifiable mathematics and economic incentives.
- ### Mechanisms
  - Digital signatures authorising spends without revealing private keys.
  - Consensus and finality preventing conflicting or reversed transactions.
  - Atomicity primitives such as hash-time-locked contracts.
  - Smart contracts encoding conditional, self-enforcing settlement.
- ### Applications
  - Cryptocurrency payments between unknown parties.
  - Cross-chain atomic swaps without a custodial exchange.
  - Off-chain payment channels for fast, low-cost settlement.
  - Decentralised finance lending, trading and escrow.
- ### Relationships
  - partOf:: [[Blockchain]]
  - partOf:: [[Distributed Ledger]]
  - dependsOn:: [[Distributed Trust]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Cryptography]]
  - implements:: [[Smart Contract]]
  - uses:: [[Digital Signature]]
  - uses:: [[Smart Contract]]
  - enables:: [[Atomic Swap]]
  - enables:: [[Payment Channel]]
  - enables:: [[Decentralised Finance]]
  - supports:: [[Decentralisation]]
  - supports:: [[Cryptocurrency]]
  - requires:: [[Byzantine Fault Tolerance]]
  - requires:: [[Immutability]]
  - bridgesTo:: [[Distributed Trust]]
  - relatedTo:: [[Double Spending]]
  - relatedTo:: [[Atomic Swap]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
