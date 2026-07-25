public:: true

# Merkle Patricia Trie

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:merkle-patricia-trie", "@type":"Page", "title":"Merkle Patricia Trie", "vc:slug":"merkle-patricia-trie", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:merkle-patricia-trie",
  "@type":"Class",
  "label":"Merkle Patricia Trie",
  "definition":"A Merkle Patricia Trie is a cryptographically authenticated key-value data structure that combines a Patricia (radix) trie for compact prefix-keyed storage with Merkle hashing for tamper-evident integrity. Each node is referenced by the hash of its contents, so a single root hash commits to the entire dataset and any change propagates to the root. It is the data structure Ethereum uses to store account state, transactions, and receipts, enabling compact Merkle proofs of inclusion.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:merkle-tree","label":"Merkle Tree"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},{"@id":"urn:ngm:class:merkle-proof","label":"Merkle Proof"}],
    "dependsOn":[{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}],
    "requires":[{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}],
    "uses":[{"@id":"urn:ngm:class:data-structure","label":"Data Structure"},{"@id":"urn:ngm:class:persistence","label":"Persistence"}],
    "implements":[{"@id":"urn:ngm:class:account-model","label":"Account Model"}],
    "enables":[{"@id":"urn:ngm:class:merkle-proof","label":"Merkle Proof"},{"@id":"urn:ngm:class:verification","label":"Verification"}],
    "supports":[{"@id":"urn:ngm:class:ethereum","label":"Ethereum"},{"@id":"urn:ngm:class:evm","label":"EVM"}],
    "partOf":[{"@id":"urn:ngm:class:ethereum","label":"Ethereum"}],
    "contrastsWith":[{"@id":"urn:ngm:class:merkle-dag","label":"Merkle DAG"}],
    "relatedTo":[{"@id":"urn:ngm:class:nonce","label":"Nonce"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A **Merkle Patricia Trie** is a cryptographically authenticated [[Data Structure]] that fuses a Patricia (radix) trie with Merkle hashing.
- It is a specialised [[Merkle Tree]] in which each node is addressed by the [[Cryptographic Hash Function]] of its contents, so a single root hash commits to all stored data.
- It is the structure [[Ethereum]] uses to store account state, enabling compact [[Merkle Proof]]s of inclusion.
- ### Overview
- A plain Patricia trie stores key-value pairs by their shared key prefixes, compressing chains of single-child nodes for efficiency.
- The Merkle layer replaces ordinary child pointers with the cryptographic hashes of child nodes, turning the trie into a Merkle structure whose root hash uniquely fingerprints the whole dataset.
- Any modification to a value changes the hash of its node and every ancestor up to the root, making tampering detectable and giving a stable commitment to a snapshot of state.
- Ethereum uses Merkle Patricia Tries for its world state, per-account storage, transactions, and receipts; clients can prove a single account balance or storage slot with a path of hashes rather than the full state.
- The structure thus provides both efficient updates and succinct verification, central to light-client and stateless-verification designs.
- ### Mechanisms
- Prefix compression: a radix/Patricia trie collapses single-child paths.
- Node typing: branch, extension, and leaf nodes encode the key path and values.
- Merkle hashing: each node is keyed by the hash of its serialised contents.
- Root commitment: one state root hash commits to the entire dataset.
- Proofs: a [[Merkle Proof]] supplies the hash path needed to verify one entry.
- ### Applications
- Storing the Ethereum world state and per-contract storage in the [[EVM]].
- Light clients verifying account balances without full state.
- Generating inclusion proofs for [[Verification]] of state or transactions.
- Authenticating [[Smart Contract]] storage and transaction receipts.
- ### Relationships
- hasPart:: [[Cryptographic Hash Function]]
- hasPart:: [[Merkle Proof]]
- dependsOn:: [[Cryptographic Hash Function]]
- requires:: [[Cryptographic Hash Function]]
- uses:: [[Data Structure]]
- uses:: [[Persistence]]
- implements:: [[Account Model]]
- enables:: [[Merkle Proof]]
- enables:: [[Verification]]
- supports:: [[Ethereum]]
- supports:: [[EVM]]
- partOf:: [[Ethereum]]
- contrastsWith:: [[Merkle DAG]]
- relatedTo:: [[Nonce]]
- relatedTo:: [[Smart Contract]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
