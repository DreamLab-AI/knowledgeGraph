public:: true

# Multi-Signature Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-signature-wallet",
  "@type": "Page",
  "vc:slug": "multi-signature-wallet",
  "title": "Multi-Signature Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-signature-wallet",
  "@type": "Class",
  "label": "Multi-Signature Wallet",
  "definition": "A multi-signature wallet is a cryptographic account on a blockchain network that requires M-of-N authorisation — where a minimum of M private key holders out of a total of N authorised signers must collectively sign a transaction before it is considered valid and broadcast to the network. This threshold scheme eliminates single points of failure in asset custody, distributing the risk of key compromise or loss across multiple independent parties or hardware devices. Multi-signature wallets are widely deployed for treasury management, DAO governance, and exchange hot wallets, and are implemented both as native Bitcoin script constructs and as smart contracts on EVM-compatible chains.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-wallet",
    "label": "Digital Wallet"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      },
      {
        "@id": "urn:ngm:class:multi-sig-governance",
        "label": "Multi Sig Governance"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:institutional-custody",
        "label": "Institutional Custody"
      },
      {
        "@id": "urn:ngm:class:social-recovery",
        "label": "Social Recovery"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      },
      {
        "@id": "urn:ngm:class:bip-11",
        "label": "BIP-11"
      },
      {
        "@id": "urn:ngm:class:pay-to-script-hash",
        "label": "Pay-to-Script-Hash"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:exchange-custody",
        "label": "Exchange Custody"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:single-key-wallet",
        "label": "Single-Key Wallet"
      },
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Signing Quorum"
      },
      {
        "@id": "urn:ngm:class:timelock-controller",
        "label": "Timelock Controller"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:multisig-wallet",
      "label": "Multisig Wallet"
    },
    {
      "@id": "urn:ngm:class:m-of-n-wallet",
      "label": "M-of-N Wallet"
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

- ### Definition
  - A [[Multi-Signature Wallet]] is a blockchain account requiring M-of-N cryptographic signatures from a defined set of key holders before a transaction can be executed, providing collaborative custody and resilience against key compromise for treasuries, [[DAO Governance]], and institutional asset management.

- ### Relationships
  - [[Multi-Signature Wallet]] extends the concept of a [[Digital Wallet]] by incorporating threshold [[Multi-Signature]] cryptography and robust [[Cryptographic Key Management]]. It relies on [[Smart Contract]] logic on EVM-compatible chains or native Bitcoin Script for on-chain enforcement of the signing quorum. It directly enables [[DAO Governance]] and [[Multi Sig Governance]] patterns by letting governance bodies collectively control treasury funds, and its security guarantees depend on sound [[Key Management]] practices distributed across independent signers. Related concepts include [[Blockchain Security]] and the [[Timelock Controller]], which is frequently paired with multi-sig wallets in governance architectures.

- ### Content
  - Multi-signature schemes were formalised in Bitcoin through BIP 11 (2011), which introduced the OP_CHECKMULTISIG opcode, and BIP 16 (Pay-to-Script-Hash) enabled the practical deployment of M-of-N wallets as standard transaction outputs. The concept predates blockchain technology — multi-party authorisation has been used in traditional banking and physical vault security for centuries — but blockchain implementations made it programmatically enforceable without a central administrator.

  - In EVM-based ecosystems, multi-sig wallets are typically implemented as smart contracts rather than protocol-level primitives. Gnosis Safe (now Safe{Wallet}) became the dominant implementation, accumulating hundreds of billions of dollars of assets under management. A transaction proposal is submitted on-chain or off-chain; each designated signer submits their cryptographic approval; when the M-of-N threshold is reached, the contract executes the transaction. Threshold signature schemes (TSS) such as FROST represent a more advanced variant where a single aggregated signature is produced, reducing on-chain costs and improving privacy compared to concatenated individual signatures.

  - Multi-sig wallets are essential infrastructure for: DAO treasuries (requiring governance consensus before fund movements); exchange custody (distributing hot-wallet signing keys across separate HSMs or air-gapped devices); protocol parameter management (preventing unilateral upgrades); and cross-border corporate accounts (ensuring legal co-signatories from multiple jurisdictions). They are often combined with Timelock Controllers to add a mandatory delay between approval and execution, giving token holders time to react to malicious proposals.

  - In 2024–2025, the Safe ecosystem processed over $100 billion in transactions and had over 7 million deployed contracts. Account abstraction standards (ERC-4337) have further blurred the line between multi-sig and programmable wallets, allowing arbitrary signing policies including social recovery, passkey authentication, and AI-assisted transaction screening. Hardware-based multi-party computation (MPC) wallets from custodians such as Fireblocks and Copper have made institutional-grade threshold custody accessible without requiring each signer to manage raw private keys.