public:: true

# secp256k1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:383b27532153f353fa4cc689239f7365dfe924ebcf67807eb6916307a4e2701e",
  "@type": "Page",
  "vc:slug": "secp256k1",
  "title": "secp256k1",
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
  "@id": "urn:ngm:class:secp256k1",
  "@type": "Class",
  "label": "secp256k1",
  "definition": "secp256k1 is a Koblitz elliptic curve defined by the equation y\u00b2 = x\u00b3 + 7 over the 256-bit prime field Fp (where p = 2\u00b2\u2075\u2076 \u2212 2\u00b3\u00b2 \u2212 977), standardised in SEC 2 by the Standards for Efficient Cryptography Group (SECG). It is the cryptographic foundation of Bitcoin and Ethereum, where it underpins the Elliptic Curve Digital Signature Algorithm (ECDSA) used to authenticate transactions and derive public keys from private keys. secp256k1's specific choice of parameters enables unusually efficient computation via the Frobenius endomorphism, making scalar multiplication faster than on comparably secure non-Koblitz curves such as NIST P-256.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:ecdsa", "label": "ECDSA"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - secp256k1 is a Koblitz elliptic curve defined by the equation y² = x³ + 7 over the 256-bit prime field Fp (where p = 2²⁵⁶ − 2³² − 977), standardised in SEC 2 by the Standards for Efficient Cryptography Group (SECG). It is the cryptographic foundation of Bitcoin and Ethereum, where it underpins the Elliptic Curve Digital Signature Algorithm (ECDSA) used to authenticate transactions and derive public keys from private keys. secp256k1's specific choice of parameters enables unusually efficient computation via the Frobenius endomorphism, making scalar multiplication faster than on comparably secure non-Koblitz curves such as NIST P-256.

- ### Semantic Classification
  - owl-class:: secp256k1:secp256k1
  - owl-role:: Concept

- ### Relationships
  - uses [[Elliptic Curve Cryptography]]
  - uses [[ECDSA]]
  - enables [[Digital Signature]]
  - enables [[Cryptographic Keys]]
  - relatedTo [[Public-Key Cryptography]]

- ### Content
  - In Bitcoin, every transaction output is locked to a public key derived from a randomly chosen 256-bit private key via scalar multiplication on secp256k1 (pubkey = privkey × G, where G is the generator point). Transaction authorisation requires the holder to produce a valid ECDSA signature over the transaction hash using the corresponding private key. The Schnorr signature scheme was added in Bitcoin via the Taproot upgrade (BIP 340), also using secp256k1, offering smaller signature sizes and native multi-signature aggregation through MuSig.
  - Ethereum uses secp256k1 for the same ECDSA-based account authentication, additionally deriving 20-byte Ethereum addresses from the Keccak-256 hash of the public key's 64 uncompressed bytes. The Ethereum secp256k1 library is also used to verify recoverable signatures in the ecrecover precompile, which is widely used in smart contract authentication patterns and EIP-712 structured data signing.
  - The curve was chosen for Bitcoin partly due to perceived regulatory concerns around NIST-recommended curves (NIST P-256, P-384), whose generation parameters lacked transparent derivation and attracted speculation about backdoors. secp256k1's parameters are verifiably derived with minimal unexplained structure. The curve is also used in the Nostr protocol for keypairs and event signatures, and in Schnorr-based threshold signature schemes used by blockchain bridges and custody providers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
