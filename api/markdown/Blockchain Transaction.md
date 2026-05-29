public:: true

# Blockchain Transaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:878ffdd88a80fa9e38e3367b1ef01ca82b5fa7eebb7a59af75ef45cef2071e73",
  "@type": "Page",
  "vc:slug": "blockchain-transaction",
  "title": "Blockchain Transaction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "vc:label": "IEEE (Institute of Electrical and Electronics Engineers)"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Blockchain Transaction"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-transaction",
  "@type": "Class",
  "label": "Blockchain Transaction",
  "definition": "A Blockchain Transaction is an atomic, cryptographically signed state-change operation recorded on a distributed ledger, representing value transfer, smart contract execution, or data mutation. Each transaction is validated by network nodes according to the active consensus algorithm, included in a block, and made immutable through chaining. Transaction structure, fee markets, and confirmation semantics vary across UTXO-based systems such as Bitcoin and account-based systems such as Ethereum.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:blockchain-transaction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:878ffdd88a80fa9e38e3367b1ef01ca82b5fa7eebb7a59af75ef45cef2071e73"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE (Institute of Electrical and Electronics Engineers)]]",
      "resolved": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A Blockchain Transaction is an atomic, cryptographically signed state-change operation recorded on a distributed ledger, representing value transfer, smart contract execution, or data mutation. Each transaction is validated by network nodes according to the active consensus algorithm, included in a block, and made immutable through chaining. Transaction structure, fee markets, and confirmation semantics vary across UTXO-based systems such as Bitcoin and account-based systems such as Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain/BlockchainTransaction
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[Blockchain]]
  - requires [[Consensus Algorithm]]
  - requires [[Digital Signature]]
  - requires [[Public-Key Cryptography]]
  - enables [[Smart Contract]]
  - enables [[Payment System]]
  - partOf [[Blockchain]]

- ### Content

  ## Definition

  Blockchain Transaction constitutes an atomic state change operation on a distributed ledger, representing the transfer of value, execution of smart contract functions, or modification of on-chain data structures. Each transaction comprises essential components including sender and recipient addresses derived from public key cryptography, digital signatures (ECDSA, EdDSA, Schnorr) providing cryptographic proof of authorization, nonce values preventing replay attacks, gas fees for execution resource allocation, and transaction payloads containing operation parameters. Bitcoin employs the UTXO (Unspent Transaction Output) model where transactions consume previous outputs and create new ones, enabling parallel validation but complicating state management. Ethereum utilizes an account-based model with global state tracking balances and contract storage, facilitating complex smart contract interactions but introducing sequential dependencies. Transaction structure includes Merkle tree organization for efficient verification, signature aggregation techniques (BLS signatures) for batch processing, and multi-signature schemes enabling collaborative authorization. Advanced transaction types include confidential transactions using Pedersen commitments and range proofs, atomic swaps enabling trustless cross-chain exchanges, and transaction batching mechanisms like rollups that compress multiple operations into single on-chain commitments. In 2026, transaction privacy increasingly leverages zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) and ring signatures, while transaction finality is enhanced through instant confirmation protocols and probabilistic settlement guarantees.

  #### References
  - Antonopoulos, A. M. (2017). "Mastering Bitcoin: Programming the Open Blockchain." O'Reilly Media. https://github.com/bitcoinbook/bitcoinbook
  - Wood, G. (2024). "Ethereum Yellow Paper: Technical Specification." https://ethereum.github.io/yellowpaper/paper.pdf
  - Maxwell, G. (2016). "Confidential Transactions." https://elementsproject.org/features/confidential-transactions
  - Ben-Sasson, E. et al. (2014). "Zerocash: Decentralized Anonymous Payments from Bitcoin." IEEE Symposium on Security and Privacy.
  - Herlihy, M. (2018). "Atomic Cross-Chain Swaps." ACM Symposium on Principles of Distributed Computing.
  - Mimblewimble Team. (2024). "Transaction Cut-Through and Privacy Enhancement." https://github.com/mimblewimble/grin

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]]
  - migration-date:: 2026-04-26T00:00:00Z
