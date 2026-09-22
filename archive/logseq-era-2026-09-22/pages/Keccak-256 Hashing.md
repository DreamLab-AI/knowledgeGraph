public:: true

# Keccak-256 Hashing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:keccak-256-hashing",
  "@type": "Page",
  "vc:slug": "keccak-256-hashing",
  "title": "Keccak-256 Hashing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:keccak-256-hashing",
  "@type": "Class",
  "label": "Keccak-256 Hashing",
  "definition": "Keccak-256 is a cryptographic hash function from the Keccak family, producing a fixed 256-bit digest using a sponge construction. It is the specific variant adopted by Ethereum, distinct from the later NIST-standardised SHA3-256 due to a difference in padding. Keccak-256 provides collision and preimage resistance for addresses, transaction hashes and message commitments in blockchain systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Keccak-256 is the sponge-construction cryptographic hash used across Ethereum, and is the [[Cryptographic Primitive]] that [[Snapshot Voting]] relies on to hash and verify off-chain governance messages.
- ### Content
  - The sponge design absorbs input into a large internal state and squeezes out a 256-bit digest, offering strong resistance to collisions and preimages. In off-chain voting platforms, Keccak-256 generates the deterministic message hashes that voters sign, allowing tamper-evident tallies to be verified on-chain without paying gas for every vote.
