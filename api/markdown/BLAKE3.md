public:: true

# BLAKE3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:blake3",
  "@type": "Page",
  "vc:slug": "blake3",
  "title": "BLAKE3",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blake3",
  "@type": "Class",
  "label": "BLAKE3",
  "definition": "BLAKE3 is a cryptographic hash function released in 2020 that achieves exceptional speed through a tree-hashing construction enabling unlimited parallelism across SIMD lanes and CPU cores, while simultaneously functioning as a keyed hash, a key derivation function, and an extendable-output function (XOF). It is derived from the BLAKE2 family, inheriting its ARX (add-rotate-XOR) ChaCha-based compression function, and extends it with a Bao-style binary tree that allows verified streaming and incremental hashing. BLAKE3 produces digests of arbitrary length (defaulting to 256 bits), is formally specified under a Creative Commons public-domain dedication, and is designed to be faster than SHA-256 on modern hardware by factors of five to ten on multi-core systems. Its unified API replaces the need for separate HMAC, HKDF, or KDF constructions.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blake2", "label": "BLAKE2"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"},
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - BLAKE3 is a high-performance [[Cryptographic Hash Function]] that uses an internally parallel [[Merkle Tree]] construction over a ChaCha-derived compression function to produce variable-length digests, while serving as a drop-in replacement for separate keyed MAC, key derivation, and extendable-output primitives.

- ### Relationships
  - BLAKE3 descends directly from [[BLAKE2]], inheriting its ChaCha-based ARX core and extending it with a tree structure that maps cleanly onto [[Hardware Acceleration]] via AVX-512, NEON, and GPU SIMD. The tree construction enables [[Content Addressing]] schemes — as used in systems like Bao and Iroh — and underpins [[Data Integrity]] verification through streaming Merkle proofs. It belongs to the broader class of [[Cryptographic Primitive]] and produces [[Cryptographic Hash]] outputs consumed by [[Cryptographic Verification]] pipelines across storage, networking, and blockchain domains.

- ### Content
  - BLAKE3 was published in January 2020 by Jack O'Connor, Jean-Philippe Aumasson, Samuel Neves, and Zooko Wilcox-O'Hearn, building on a lineage stretching from SHA-3 finalist BLAKE (2008) through BLAKE2 (2012). The motivation was to create a single hash function that replaced the fragmented ecosystem of SHA-256, SHA-3, HMAC-SHA-256, HKDF, and various KDFs with one specification that is simultaneously fast, secure, and versatile. The algorithm is placed in the public domain, making it freely usable without patent concerns.

  - Internally, BLAKE3 arranges input data in a binary tree where each leaf compresses a 1 KiB chunk using seven rounds of the BLAKE compression function, and interior nodes combine child digests using a single round. This structure allows all leaves to be hashed in parallel — on an 8-core machine with AVX-512, throughput can exceed 10 GB/s for large inputs. The root finalisation step optionally extends output to any length (XOF mode), enabling BLAKE3 to replace SHA-512 in contexts requiring longer outputs. For keyed hashing, a 256-bit key is injected into the initial state, providing secure MACs without a separate HMAC wrapper; for key derivation, a context string is hashed into the key slots, providing domain separation.

  - BLAKE3's significance lies in its consolidation of multiple cryptographic roles at speeds that remove hashing as a bottleneck in high-throughput systems. Content-addressed storage systems, package managers, and file synchronisation tools benefit from near-disk-speed hashing. The Iroh project (IPFS successor) adopted BLAKE3 as its default hash; several key derivation frameworks have migrated from HKDF-SHA-256; and post-quantum signature schemes that require fast hash-based MACs find BLAKE3 a natural fit. Its verified streaming property — where any portion of a large file can be verified against the root hash without fetching the entire file — is particularly valuable for distributed systems and incremental downloads.

  - As of 2024-2025, BLAKE3 has achieved broad adoption in the Rust ecosystem (via the `blake3` crate), Python, C, and WebAssembly bindings. It is the default hash in the Zig language's standard library and is used by Cloudflare's Workers runtime. While not yet an NIST standard, its security is considered sound under the same analytical framework as BLAKE2, which has withstood a decade of cryptanalysis. Active research targets its integration into post-quantum hybrid schemes and its use as the underlying hash in hash-based signature systems where performance is paramount.

