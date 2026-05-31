public:: true

# secp256k1 Elliptic Curve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:secp256k1-elliptic-curve",
  "@type": "Page",
  "vc:slug": "secp256k1-elliptic-curve",
  "title": "secp256k1 Elliptic Curve",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:secp256k1-elliptic-curve",
  "@type": "Class",
  "label": "secp256k1 Elliptic Curve",
  "definition": "secp256k1 is a specific elliptic curve defined over a 256-bit prime field, standardised by the SEC and chosen for its efficient, verifiable parameters. It underpins ECDSA and Schnorr signatures used by Bitcoin, Nostr, and many other systems for key generation and digital signing. Its near-rigid, low-entropy parameters reduce concern about hidden weaknesses.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-cryptographic-primitive", "label": "Blockchain Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sovereign-keyset", "label": "Sovereign Keyset"},
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - secp256k1 is the elliptic curve whose keypairs and signatures are required by a [[Sovereign Keyset]] and by the [[Nostr Protocol]] for identity and signing.
- ### Content
  - The curve's structure permits fast scalar multiplication and the GLV endomorphism optimisation, and its support for Schnorr signatures enables key and signature aggregation. Security rests on the hardness of the elliptic-curve discrete-logarithm problem over the curve's prime-order group.
