public:: true

# Blockchain Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:blockchain-wallet",
  "@type": "Page",
  "title": "Blockchain Wallet",
  "vc:slug": "blockchain-wallet",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-wallet",
  "@type": "Class",
  "label": "Blockchain Wallet",
  "definition": "A blockchain wallet is software or hardware that manages the cryptographic keys used to control assets and identities on a blockchain. Rather than storing assets directly, a wallet stores private keys, derives public addresses, and signs transactions that authorise the movement of on-chain assets. Wallets range from custodial services that hold keys on a user's behalf to self-custody solutions where the user retains exclusive control.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:key-management",
      "label": "Key Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
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
  - A blockchain wallet is software or hardware that manages the cryptographic keys used to control assets and identities on a blockchain. Rather than storing assets directly, a wallet stores private keys, derives public addresses, and signs transactions that authorise the movement of on-chain assets. Wallets range from custodial services that hold keys on a user's behalf to self-custody solutions where the user retains exclusive control.
  - Related concepts: [[Private Key]] [[Self-Custody]] [[Hardware Wallet]] [[Blockchain]]
- ### Overview
  - A blockchain wallet provides the user-facing entry point to a blockchain network, abstracting key management and transaction construction behind an interface. The defining security trade-off is custody: self-custody wallets give users sole control of their keys and therefore full responsibility for their security, while custodial wallets delegate that responsibility to a third party. Hardware wallets isolate private keys on a dedicated device to reduce exposure to compromised hosts.
- ### Key aspects
  - Wallets generate and store private keys, often deriving many addresses from a single seed phrase.
  - Transactions are constructed locally and authorised with cryptographic signatures.
  - Custody models range from fully self-custodial to fully custodial, with differing security and recovery properties.
  - Hardware wallets keep keys offline, signing transactions without exposing the key to a connected computer.
- ### Applications
  - Holding and transferring cryptocurrencies and tokens.
  - Interacting with decentralised finance protocols and smart contracts.
  - Managing decentralised identity and on-chain credentials.
  - Securing high-value assets through cold storage and hardware isolation.
- ### Relationships
  - subClassOf:: [[Key Management]]
  - requires:: [[Private Key]]
  - requires:: [[Public Key Cryptography]]
  - requires:: [[Digital Signature]]
  - requires:: [[Seed Phrase]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Transaction Signing]]
  - partOf:: [[Decentralized Finance]]
  - bridgesTo:: [[Decentralized Finance]]
  - bridgesTo:: [[Smart Contract]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Hardware Wallet]]
  - relatedTo:: [[Self-Custody]]
  - relatedTo:: [[Custody]]
  - relatedTo:: [[Digital Asset]]
  - supports:: [[Blockchain Transaction]]
  - supports:: [[Asset Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
