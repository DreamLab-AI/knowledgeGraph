public:: true

# Mpc Wallet

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mpc-wallet",
  "@type": "Page",
  "title": "Mpc Wallet",
  "vc:slug": "mpc-wallet",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mpc-wallet",
  "@type": "Class",
  "label": "Mpc Wallet",
  "definition": "An MPC wallet is a digital wallet whose private key is split into shares held by independent parties and never reconstructed in one place, so transactions are authorised through a multi-party computation protocol that jointly produces a signature. By distributing trust across devices or institutions, it removes the single seed phrase as a single point of failure while preserving a single on-chain address. MPC wallets contrast with traditional self-custody seed wallets and with on-chain multisignature schemes by keeping the threshold logic off-chain and chain-agnostic.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-wallet",
      "label": "Digital Wallet"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:multi-sig-governance",
        "label": "Multi Sig Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:distributed-key-generation",
        "label": "Distributed Key Generation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:secret-sharing",
        "label": "Secret Sharing"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
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
  - An MPC wallet is a digital wallet whose private key is split into shares held by independent parties and never reconstructed in one place, so transactions are authorised through a multi-party computation protocol that jointly produces a signature.
  - By distributing trust across devices or institutions, it removes the single seed phrase as a single point of failure while preserving a single on-chain address.
  - MPC wallets contrast with traditional self-custody seed wallets and with on-chain multisignature schemes by keeping the threshold logic off-chain and chain-agnostic.
  - Related core concepts: [[Digital Wallet]] [[Multi-Party Computation]] [[Threshold Signature Scheme]] [[Self-Custody]]
- ### Overview
  - MPC wallets keep the signing key as cryptographic shares, so a thief who compromises one device cannot move funds.
  - Because the threshold logic is off-chain, the same wallet works across chains with a single externally owned address.
  - Share refresh lets the wallet rotate key material without changing the public address or notifying the chain.
- ### Key aspects
  - Threshold signing where t-of-n shares co-sign without revealing each other's share.
  - Key generation via distributed key generation so no seed phrase ever exists.
  - Proactive share refresh to defend against gradual share compromise.
  - Policy engines layering spending limits and approvals on top of the cryptographic threshold.
- ### Applications
  - Institutional custody and exchange treasury management.
  - Consumer wallets offering social or device-based recovery.
  - DAO and team treasuries needing distributed authorisation.
- ### Relationships
  - enables:: [[Self-Custody]]
  - enables:: [[Multi Sig Governance]]
  - implements:: [[Multi-Party Computation]]
  - implements:: [[Threshold Signature Scheme]]
  - implements:: [[Distributed Key Generation]]
  - requires:: [[Threshold Cryptography]]
  - requires:: [[Key Management]]
  - uses:: [[Secret Sharing]]
  - uses:: [[Private Key]]
  - contrastsWith:: [[Multi-Signature Wallet]]
  - contrastsWith:: [[Hardware Security Module]]
  - bridgesTo:: [[Blockchain]]
  - bridgesTo:: [[Account Abstraction]]
  - relatedTo:: [[Digital Wallet]]
  - supports:: [[Decentralized Exchange]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
