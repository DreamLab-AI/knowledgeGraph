public:: true

# Proof Of Reserve

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:proof-of-reserve",
  "@type": "Page",
  "title": "Proof Of Reserve",
  "vc:slug": "proof-of-reserve",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-reserve",
  "@type": "Class",
  "label": "Proof Of Reserve",
  "definition": "Proof of reserve is a verification practice in which a custodian or exchange demonstrates that it holds assets sufficient to cover its customer liabilities. It typically combines an on-chain attestation of owned assets with a Merkle-tree commitment to the liability set, allowing users to verify inclusion of their balance without revealing others. Robust schemes also prove liabilities to establish solvency, often with auditor or zero-knowledge support.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:custodian",
        "label": "Custodian"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
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
  - [[Proof Of Reserve]] lets a [[Custodian]] or exchange prove it holds assets sufficient to back customer liabilities.
  - It pairs an on-chain [[Attestation]] of owned assets with a [[Merkle Tree]] commitment to balances.
  - It provides verifiable [[Transparency]] beyond a traditional [[Audit]].
- ### Overview
  - The asset side proves control of on-chain holdings via signatures or address attestations at a snapshot.
  - The liability side commits all user balances into a Merkle root, so each user can verify their own inclusion without seeing others.
  - Comparing total verified assets against committed liabilities establishes whether reserves cover obligations.
- ### Key aspects
  - On-chain asset attestation through controlled-address proofs.
  - Merkle commitment to the full liability set.
  - Per-user inclusion verification preserving privacy.
  - Solvency claims strengthened by auditors or [[Zero-Knowledge Proof]] techniques.
- ### Mechanisms
  - Address-ownership signatures or message attestations.
  - Merkle-tree construction over salted user balances.
  - Publication of the Merkle root and per-user inclusion paths.
  - Optional zero-knowledge proofs of non-negative liabilities.
- ### Applications
  - Solvency assurance for a [[Centralised Exchange]] after market stress.
  - Custodial transparency for institutional asset holders.
  - Regulatory and counterparty due-diligence support.
  - Continuous, verifiable alternatives to point-in-time [[Audit]].
- ### Relationships
  - dependsOn:: [[Merkle Tree]]
  - uses:: [[Cryptographic Proof]]
  - uses:: [[Attestation]]
  - relatedTo:: [[Audit]]
  - relatedTo:: [[Custodian]]
  - enables:: [[Transparency]]
  - supports:: [[Centralised Exchange]]
  - requires:: [[Attestation]]
  - implements:: [[Cryptographic Proof]]
  - bridgesTo:: [[Zero-Knowledge Proof]]
  - partOf:: [[Audit]]
  - standardizedBy:: [[Merkle Tree]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
