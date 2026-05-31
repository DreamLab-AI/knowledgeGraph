public:: true
alias:: Cryptographic Hash Functions

# cryptographic hash function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:294331f69a3d317a97028c31eab8e95153de3066fb5d0b5b5f0e35a6315b690d",
  "@type": "Page",
  "vc:slug": "cryptographic-hash-function",
  "title": "cryptographic hash function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-hash-function",
  "@type": "Class",
  "label": "Cryptographic Hash Function",
  "definition": "A Cryptographic Hash Function is a deterministic algorithm that maps arbitrary-length input data to a fixed-length output digest of fixed size, such that it is computationally infeasible to reverse the mapping, find two inputs producing the same digest (collision resistance), or derive the input from the digest alone (preimage resistance). Hash functions such as SHA-256 and Keccak-256 underpin blockchain data integrity, Merkle tree construction, and digital signature schemes. They are a foundational primitive for proof-of-work consensus, address derivation, and commitment schemes across distributed ledger systems.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "BC Cryptographic Primitive"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:collision-resistance", "label": "Collision Resistance"},
      {"@id": "urn:ngm:class:preimage-resistance", "label": "Preimage Resistance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:keccak-256", "label": "Keccak-256"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Cryptographic Hash Function is a deterministic algorithm that maps arbitrary-length input data to a fixed-length output digest of fixed size, such that it is computationally infeasible to reverse the mapping, find two inputs producing the same digest (collision resistance), or derive the input from the digest alone (preimage resistance). Hash functions such as SHA-256 and Keccak-256 underpin blockchain data integrity, Merkle tree construction, and digital signature schemes. They are a foundational primitive for proof-of-work consensus, address derivation, and commitment schemes across distributed ledger systems.

- ### Semantic Classification
  - owl-class:: cryptographic-hash-function:Cryptographic Hash Function
  - owl-role:: Concept

- ### Relationships
  - enables [[Merkle Tree]]
  - enables [[Digital Signature]]
  - requires [[Collision Resistance]]
  - requires [[Preimage Resistance]]
  - relatedTo [[SHA-256]]
  - relatedTo [[Keccak-256]]

- ### Content
  - Cryptographic hash functions are deterministic one-way functions central to modern cryptographic systems. Given an input of arbitrary length, they produce a fixed-size digest — commonly 256 bits for algorithms such as SHA-256 (used in Bitcoin) and Keccak-256 (used in Ethereum). Three security properties are essential: preimage resistance (it is infeasible to reverse the digest to recover any input), second-preimage resistance (given an input, it is infeasible to find a distinct input with the same digest), and collision resistance (it is infeasible to find any two distinct inputs with the same digest).
  - In blockchain systems, hash functions serve multiple roles. They link blocks in a chain: each block header contains the hash of the preceding block header, creating tamper-evident linkage. Merkle trees use repeated hashing to enable efficient and secure verification of membership in large transaction sets. Mining in proof-of-work consensus requires finding a nonce such that the block header's hash falls below a target threshold. Address derivation in Ethereum applies Keccak-256 to a public key to produce the account address. Commitment schemes use hash functions to bind a party to a value without revealing it, supporting zero-knowledge protocols and sealed-bid auctions.
  - The BLAKE2 family offers high-throughput alternatives optimised for software implementations, while SHA-3 (standardised by NIST) provides an alternative security foundation. Quantum computing is a long-term concern: Grover's algorithm reduces the effective security of an n-bit hash to n/2 bits, motivating interest in larger output sizes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
