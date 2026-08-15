public:: true

# Tagged Hash

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:tagged-hash", "@type":"Page", "title":"Tagged Hash", "vc:slug":"tagged-hash", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tagged-hash",
  "@type": "Class",
  "label": "Tagged Hash",
  "definition": "A Tagged Hash is a domain-separated hash construction formalised in BIP-340 and used throughout Bitcoin's Taproot/Schnorr signature ecosystem, computed as SHA256(SHA256(tag) || SHA256(tag) || msg), where tag is a human-readable string identifying the protocol context. The double-hashing of the tag prefix creates a unique domain separator that prevents cross-protocol hash collisions — ensuring that a hash computed in one context (e.g. key tweaking) cannot be misinterpreted or replayed in another context (e.g. signature nonce generation). Tagged hashes improve security proofs and simplify protocol composition by making each domain's hash computationally distinct.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}, {"@id": "urn:ngm:class:bc-cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:domain-separation", "label": "Domain Separation"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"},
      {"@id": "urn:ngm:class:taproot", "label": "Taproot"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collision-resistance", "label": "Collision Resistance"},
      {"@id": "urn:ngm:class:security-proof", "label": "Security Proof"},
      {"@id": "urn:ngm:class:protocol-composition", "label": "Protocol Composition"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:bip-340-schnorr-keypair", "label": "BIP-340 Schnorr Keypair"},
      {"@id": "urn:ngm:class:taproot", "label": "Taproot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:commitment-scheme", "label": "Commitment Scheme"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:hmac", "label": "HMAC"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:key-tweaking", "label": "Key Tweaking"},
      {"@id": "urn:ngm:class:tapscript", "label": "Tapscript"}
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
  - A [[Tagged Hash]] is a domain-separated [[hash function]] construction — `SHA256(SHA256(tag) || SHA256(tag) || msg)` — formalised in [[BIP-340 Schnorr Keypair]] for use in Bitcoin's [[Taproot]] and [[Schnorr Signature]] protocols.
  - The pre-hashed tag prefix ensures hash outputs in one protocol context are computationally distinct from those in any other, preventing cross-context collisions and replay attacks.
  - Tagged hashes simplify formal [[Security Proof]] composition by making domain boundaries explicit and unforgeable.

- ### Overview
  - Tagged hashes were introduced in BIP-340 (Schnorr Signatures for secp256k1) as part of the Taproot upgrade (BIP-341, BIP-342) activated on Bitcoin in November 2021.
  - Prior to tagged hashes, Bitcoin protocols used ad-hoc prefixes or relied on context to disambiguate hash meanings, creating subtle attack surfaces.
  - The construction mirrors the HMAC approach of keyed MAC but uses a fixed tag rather than a secret key, making it deterministic and auditable.
  - Tags used in Bitcoin include "TapLeaf", "TapBranch", "TapTweak", "BIP0340/nonce", "BIP0340/aux", "BIP0340/challenge".
  - The double SHA256 of the tag is computed once and cached by implementations for efficiency.

- ### Key aspects
  - Construction: `tagged_hash(tag, msg) = SHA256(SHA256(tag) || SHA256(tag) || msg)`.
  - Domain separation: each distinct tag produces a distinct hash function over messages, preventing cross-domain collision.
  - Determinism: tagged hashes are fully deterministic given tag and message, enabling reproducible proofs.
  - Efficiency: implementations pre-compute and cache the `SHA256(SHA256(tag))` midstate for reuse.
  - Standardisation: BIP-340 defines the canonical tag strings for all Schnorr/Taproot use cases.

- ### Mechanisms
  - SHA-256 compression function applied to `SHA256(tag) || SHA256(tag)` yields a fixed 64-byte prefix independent of message.
  - Appending the variable-length message and computing outer SHA-256 produces the tagged hash output.
  - Key tweaking in Taproot: `P' = P + tagged_hash("TapTweak", P || script_root) * G` — embeds script commitment in public key.
  - Nonce generation in BIP-340 signing uses tagged hash with auxiliary randomness to prevent nonce reuse.

- ### Applications
  - Bitcoin Taproot key tweaking: encoding script trees into public keys without revealing them on-chain.
  - Schnorr signature nonce and challenge computation (BIP-340).
  - MAST (Merkelised Abstract Syntax Tree) leaf and branch hashing (BIP-341).
  - Silent Payments (BIP-352) scan key derivation.
  - Cross-input signature aggregation schemes under research for future Bitcoin upgrades.

- ### Relationships
  - dependsOn:: [[SHA-256]]
  - dependsOn:: [[Hash Function]]
  - dependsOn:: [[Cryptography]]
  - requires:: [[Domain Separation]]
  - uses:: [[Schnorr Signature]]
  - uses:: [[Taproot]]
  - enables:: [[Collision Resistance]]
  - enables:: [[Security Proof]]
  - enables:: [[Protocol Composition]]
  - partOf:: [[BIP-340 Schnorr Keypair]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Merkle Tree]]
  - relatedTo:: [[Commitment Scheme]]
  - contrastsWith:: [[HMAC]]
  - supports:: [[Key Tweaking]]
  - supports:: [[Tapscript]]

- ### Provenance
  - updated:: 2026-06-15
