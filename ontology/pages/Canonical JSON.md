public:: true

# Canonical JSON
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:canonical-json",
  "@type": "Page",
  "vc:slug": "canonical-json",
  "title": "Canonical JSON",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:canonical-json",
  "@type": "Class",
  "label": "Canonical JSON",
  "definition": "Canonical JSON is a normalised serialisation form of JSON that specifies a unique, deterministic byte-level representation for any given JSON value, enabling reliable hashing, digital signatures, and binary equality comparisons over JSON documents. Because RFC 8259 JSON permits equivalent representations that differ in whitespace, key ordering, and number formatting, canonical forms such as JCS (JSON Canonicalization Scheme, RFC 8785) and earlier proposals impose rules including lexicographic key sorting, no insignificant whitespace, and IEEE 754 double-precision serialisation for numbers. This determinism is essential in cryptographic contexts where the same logical object must produce the same digest regardless of which implementation serialised it.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:data-format", "label": "Data Format"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-format-standard", "label": "Data Format Standard"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Canonical JSON]] refers to any formally specified [[Data Format]] variant of JSON that eliminates representational ambiguity by mandating a single valid byte sequence for any given JSON value. The most widely adopted specification is JCS (JSON Canonicalization Scheme), published as RFC 8785 by the IETF in 2020. JCS rules require: UTF-8 encoding, no BOM, no insignificant whitespace, object keys serialised in ascending Unicode code-point order, and numbers serialised according to a specified algorithm for IEEE 754 double-precision values. Canonical JSON is a prerequisite wherever [[Cryptography]] operations — particularly [[Hash Function]] digests and digital signatures — must be reproducibly computed over JSON-structured data.

- ### Relationships
  - [[Canonical JSON]] is a specialised [[Data Format]] that uses [[Hash Function]] and [[Cryptography]] primitives to achieve integrity and authenticity guarantees over JSON documents. It is standardised through formal IETF processes (a [[Standards Body]]) and produces a [[Data Format Standard]] that promotes [[Interoperability]] across implementations. It is related to broader [[Interoperability Standard]] work in verifiable credentials, JSON-LD, and decentralised identity ecosystems where multiple parties must independently reproduce identical digests from shared documents.

- ### Content
  - The need for canonical JSON arose as JSON became the dominant data interchange format for web APIs and distributed systems in the 2010s, and cryptographic applications began to rely on JSON as their payload format. Early attempts at canonicalisation were ad hoc: projects such as Bitcoin's JSON-RPC layer and early OAuth 2.0 implementations each devised their own normalisation rules, leading to interoperability failures when different libraries produced different byte sequences for logically identical payloads.

  - RFC 8785 (JCS) resolved this fragmentation by defining a precise algorithm grounded in the ECMAScript `JSON.stringify` serialisation rules, which are themselves specified in terms of IEEE 754 double-precision formatting. The key ordering step uses a comparison of the UTF-16 code-unit sequences of key strings, reflecting ECMAScript's internal string representation. This choice — while somewhat unusual for a standard — ensures that any standards-compliant JavaScript engine can canonicalise JCS without additional logic, lowering implementation cost for browser-based applications.

  - Canonical JSON is widely used in the W3C Verifiable Credentials and Decentralised Identifiers (DIDs) ecosystem, where JSON-LD documents must be canonicalised (typically via the RDF Dataset Normalisation algorithm, URDNA2015) before signing with JSON Web Signatures or CBOR Object Signing and Encryption. The JOSE (JSON Object Signing and Encryption) family of specifications (RFC 7515-7519) implicitly relies on canonical encoding for JWS and JWE operations. Supply-chain security frameworks such as SLSA and in-toto also canonicalise JSON manifests before computing attestation digests.

  - As of 2024-2025, JCS has achieved stable adoption in identity, credential, and software-supply-chain tooling. Its primary competition is CBOR-based canonicalisation (dCBOR, RFC 8949 deterministic encoding), which is preferred in constrained IoT environments where binary efficiency matters. The emergence of post-quantum signature schemes increases the importance of canonical serialisation because multi-pass hash computation must be identical across all signers and verifiers; canonical JSON thus remains an active area of standards maintenance as new cryptographic algorithms are integrated into existing JSON-based protocols.