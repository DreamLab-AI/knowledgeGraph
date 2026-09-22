public:: true

# Externally Owned Account

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:externally-owned-account",
  "@type": "Page",
  "title": "Externally Owned Account",
  "vc:slug": "externally-owned-account",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:externally-owned-account",
  "@type": "Class",
  "label": "Externally Owned Account",
  "definition": "An Externally Owned Account (EOA) is a type of Ethereum account controlled by a private key held outside the blockchain — typically by an end user via a wallet — as opposed to a contract account controlled by smart contract code. EOAs can initiate transactions, sign messages, and hold ether and tokens; they have no associated code. Every Ethereum transaction must originate from an EOA, making them the fundamental actor type in the Ethereum account model.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-wallet", "label": "Blockchain Wallet"}],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:blockchain-identity", "label": "Blockchain Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:off-chain-governance", "label": "Off Chain Governance"},
      {"@id": "urn:ngm:class:finance", "label": "Finance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:session-key", "label": "Session Key"},
      {"@id": "urn:ngm:class:blockchain-identity", "label": "Blockchain Identity"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-wallet", "label": "Blockchain Wallet"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
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
  - An [[Externally Owned Account]] (EOA) is an Ethereum account controlled by a private key managed by a user outside the protocol — via a [[Blockchain Wallet]] such as MetaMask — rather than by [[Smart Contract]] code.
  - EOAs initiate all transactions on the Ethereum network; contract accounts can only react to calls originating from EOA-initiated transactions.
  - [[Public Key Cryptography]] (secp256k1 ECDSA) underpins EOA control: the account address is derived from the public key, and ownership is proved by producing a valid signature over the transaction data.

- ### Overview
  - Ethereum distinguishes two account types: EOAs (controlled by private key) and contract accounts (controlled by code). EOAs have no code, only an ETH balance and a nonce.
  - The 20-byte EOA address is the Keccak-256 hash of the public key's last 20 bytes, providing a compact identity derived entirely from [[Cryptography]].
  - Loss of the private key means permanent loss of the account and all assets — a fundamental usability and [[Security]] challenge addressed by ERC-4337 account abstraction, which allows smart contract wallets to add recovery mechanisms.
  - EOAs sign transactions off-chain using [[Encryption]] primitives; signatures are verified by all network nodes when the transaction is broadcast.

- ### Key Aspects
  - The account nonce prevents replay attacks by requiring each EOA transaction to have a strictly increasing sequence number.
  - Gas fees for all Ethereum transactions must be paid by the originating EOA, which historically prevented smart contract wallets from paying their own gas (addressed by ERC-4337 Paymasters).
  - EIP-191 and EIP-712 define standards for EOA message signing used in off-chain authentication (sign-in with Ethereum) and typed data signing for DeFi protocols.
  - Hardware wallets store EOA private keys in tamper-resistant secure elements, reducing key compromise risk.

- ### Mechanisms
  - Transaction signing uses ECDSA over secp256k1: the private key signs a hash of the transaction fields, producing a (v, r, s) signature tuple.
  - Recovery of the signer's public key from the signature allows any node to verify EOA ownership without accessing the private key.
  - [[Off Chain Governance]] participation involves EOA holders signing governance votes or signalling messages off-chain, aggregated for on-chain execution.
  - [[Session Key]] delegation patterns (ERC-7715) allow EOAs to temporarily delegate limited signing authority to session keys for improved UX.

- ### Applications
  - End-user wallets for holding and transferring ETH, ERC-20 tokens, and NFTs.
  - [[Off Chain Governance]] voting via signed EIP-712 messages aggregated by Snapshot and similar platforms.
  - DeFi protocol interaction where EOAs approve token spending, submit swaps, and provide liquidity.
  - [[Digital Identity]] bootstrapping using sign-in with Ethereum (EIP-4361) to authenticate to web applications without a centralised identity provider.

- ### Relationships
  - subClassOf:: [[Blockchain Wallet]]
  - contrastsWith:: [[Smart Contract]]
  - contrastsWith:: [[Blockchain Identity]]
  - relatedTo:: [[Distributed Ledger]]
  - relatedTo:: [[Digital Identity]]
  - requires:: [[Public Key Cryptography]]
  - requires:: [[Encryption]]
  - enables:: [[Off Chain Governance]]
  - enables:: [[Finance]]
  - uses:: [[Session Key]]
  - dependsOn:: [[Cryptography]]
  - dependsOn:: [[Security]]
  - bridgesTo:: [[Governance]]

- ### Provenance
  - updated:: 2026-06-15
