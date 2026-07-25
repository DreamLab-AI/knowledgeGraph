public:: true

# Transaction Signing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transaction-signing",
  "@type": "Page",
  "title": "Transaction Signing",
  "vc:slug": "transaction-signing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transaction-signing",
  "@type": "Class",
  "label": "Transaction Signing",
  "definition": "Transaction signing is the cryptographic process by which the holder of a private key authorises a blockchain transaction by producing a digital signature over its contents. The signature proves that the legitimate key holder approved the exact transaction without revealing the private key, and it binds the transaction to a specific account so that the network can verify authenticity and integrity. It is fundamental to self-custody, wallet security and the trustless validation of transactions.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
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
  - Transaction signing is the cryptographic process by which the holder of a private key authorises a blockchain transaction by producing a digital signature over its contents. The signature proves that the legitimate key holder approved the exact transaction without revealing the private key, and it binds the transaction to a specific account so that the network can verify authenticity and integrity. It is fundamental to self-custody, wallet security and the trustless validation of transactions.
  - Related: [[Cryptography]] [[Private Key]] [[Digital Signature]] [[ECDSA]]
- ### Overview
  - To sign a transaction, a wallet serialises the transaction data, hashes it, and applies an asymmetric signature scheme such as ECDSA over an elliptic curve using the account's private key. The resulting signature, together with the public key or recoverable parameters, lets any node verify that the holder of the corresponding key approved precisely this transaction and that nothing was altered. Because the private key never leaves the signer, hardware wallets and multi-signature schemes can perform signing in isolated environments to resist key theft.
- ### Mechanisms
  - Hashing and serialising the transaction payload
  - Asymmetric signature schemes (ECDSA, EdDSA)
  - Nonce handling and replay protection
  - Air-gapped and hardware-based signing
  - Multi-signature and threshold approval
  - Verification of authenticity and integrity
- ### Applications
  - Authorising on-chain transfers and contract calls
  - Self-custody via software and hardware wallets
  - Multi-signature treasury and custody workflows
  - Air-gapped cold-storage signing
  - Verifying transaction authorship across the network
- ### Relationships
  - subClassOf:: [[Cryptography]]
  - requires:: [[Private Key]]
  - requires:: [[Digital Signature]]
  - uses:: [[ECDSA]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Nonce]]
  - enables:: [[Smart Contract]]
  - enables:: [[Custody]]
  - implements:: [[Digital Signature]]
  - supports:: [[Multi-Signature Wallet]]
  - supports:: [[Hardware Wallet]]
  - dependsOn:: [[Cryptography]]
  - dependsOn:: [[Private Key]]
  - partOf:: [[Digital Wallet]]
  - relatedTo:: [[Hardware Wallet]]
  - relatedTo:: [[Digital Wallet]]
  - relatedTo:: [[Ethereum]]
  - bridgesTo:: [[Blockchain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
