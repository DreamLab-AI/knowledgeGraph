public:: true

# Ethereum Account

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ethereum-account",
  "@type": "Page",
  "title": "Ethereum Account",
  "vc:slug": "ethereum-account",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum-account",
  "@type": "Class",
  "label": "Ethereum Account",
  "definition": "An Ethereum account is a state entity on the Ethereum blockchain identified by a 20-byte address and holding a balance, nonce, and optionally code and storage. There are two kinds: externally owned accounts controlled by a private key, and contract accounts controlled by their deployed smart-contract code. Accounts are the unit against which transactions are debited, gas is charged, and state transitions are applied.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ethereum",
      "label": "Ethereum"
    },
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:address",
        "label": "Address"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof Of Stake"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
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
  - An [[Ethereum]] account is the unit of state addressed by a 20-byte [[Address]].
  - Externally owned accounts are controlled by a [[Private Key]]; contract accounts by a [[Smart Contract]].
  - Each account carries a balance and a [[Nonce]] and is charged [[Gas]] for state changes.
- ### Overview
  - Account state lives in the world-state trie alongside balance, nonce, code hash, and storage root.
  - The nonce orders an account's outgoing transactions and prevents replay.
  - Contract accounts have no private key and act only when called by a transaction or another contract.
- ### Key aspects
  - Externally owned account: balance + nonce, signs transactions.
  - Contract account: balance + nonce + code + storage.
  - Address derivation from the public key for EOAs; from deployer address and nonce for contracts.
  - Account abstraction blurs the EOA/contract distinction via programmable validity.
- ### Applications
  - Holding and transferring Ether and tokens.
  - Deploying and interacting with smart contracts.
  - Identity and authorisation in decentralised applications.
  - Multi-signature and smart-contract wallets.
- ### Relationships
  - partOf:: [[Ethereum]]
  - partOf:: [[Ledger]]
  - requires:: [[Private Key]]
  - requires:: [[Address]]
  - requires:: [[Gas]]
  - hasPart:: [[Nonce]]
  - enables:: [[Transaction]]
  - enables:: [[Smart Contract]]
  - uses:: [[ECDSA]]
  - uses:: [[Key Management]]
  - relatedTo:: [[Wallet]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Proof Of Stake]]
  - dependsOn:: [[Blockchain]]
  - bridgesTo:: [[Account Abstraction]]
- ### Provenance
  - updated:: 2026-06-15
