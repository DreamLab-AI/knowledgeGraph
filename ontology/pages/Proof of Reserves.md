public:: true

# Proof of Reserves
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:proof-of-reserves",
  "@type": "Page",
  "title": "Proof of Reserves",
  "vc:slug": "proof-of-reserves",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-reserves",
  "@type": "Class",
  "label": "Proof of Reserves",
  "definition": "Proof of reserves is a cryptographic auditing technique by which a custodial entity, such as a cryptocurrency exchange or stablecoin issuer, demonstrates that it holds sufficient assets to cover its customer liabilities. The asset side is typically attested by publishing on-chain wallet ownership, while the liability side is committed using a Merkle tree so that individual customers can verify their balance is included without exposing the full ledger. More advanced schemes combine these with zero-knowledge proofs to prove solvency while preserving the confidentiality of total liabilities and individual balances.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether"
      },
      {
        "@id": "urn:ngm:class:usdc",
        "label": "USDC"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      },
      {
        "@id": "urn:ngm:class:centralized-exchange",
        "label": "Centralized Exchange"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:reserve-asset",
        "label": "Reserve Asset"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Proof of reserves is a cryptographic auditing technique by which a custodial entity, such as a cryptocurrency exchange or stablecoin issuer, demonstrates that it holds sufficient assets to cover its customer liabilities. The asset side is typically attested by publishing on-chain wallet ownership, while the liability side is committed using a Merkle tree so that individual customers can verify their balance is included without exposing the full ledger. More advanced schemes combine these with zero-knowledge proofs to prove solvency while preserving the confidentiality of total liabilities and individual balances.
  - Related core concepts: [[Merkle Tree]] [[Stablecoin]] [[Zero-Knowledge Proof]] [[Blockchain]]
- ### Overview
  - Proof of reserves lets a custodian prove it holds enough assets to back customer liabilities without requiring trust in a single auditor.
  - Assets are evidenced by demonstrating control of on-chain addresses; liabilities are committed via a Merkle tree of customer balances.
  - Each customer can independently confirm inclusion of their balance in the committed liability set using a Merkle proof.
- ### Mechanisms
  - Asset attestation: signed messages or movements prove ownership of reserve wallets at a point in time.
  - Liability commitment: a Merkle tree aggregates all customer balances into a single root hash published for verification.
  - Inclusion proofs: a customer verifies their leaf hashes up to the published root, confirming their balance was counted.
  - Privacy-preserving variants: zero-knowledge proofs can demonstrate solvency without revealing total liabilities or individual balances.
- ### Applications
  - Stablecoin issuers demonstrating full collateral backing.
  - Centralised cryptocurrency exchanges proving customer-fund solvency.
  - Digital-asset custodians providing verifiable accountability.
  - Regulatory and market-confidence reporting for custodial platforms.
- ### Relationships
  - hasPart:: [[Merkle Tree]]
  - hasPart:: [[Merkle Proof]]
  - hasPart:: [[Cryptographic Proof]]
  - partOf:: [[Blockchain]]
  - requires:: [[Custody]]
  - requires:: [[Transparency]]
  - uses:: [[Hash Function]]
  - uses:: [[Cryptographic Hash]]
  - uses:: [[Zero-Knowledge Proof]]
  - supports:: [[Stablecoin]]
  - relatedTo:: [[Tether]]
  - relatedTo:: [[USDC]]
  - relatedTo:: [[Digital Asset Custody]]
  - relatedTo:: [[Centralized Exchange]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Reserve Asset]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
