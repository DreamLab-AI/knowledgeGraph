public:: true

# Signature Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:signature-algorithm",
  "@type": "Page",
  "vc:slug": "signature-algorithm",
  "title": "Signature Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signature-algorithm",
  "@type": "Class",
  "label": "Signature Algorithm",
  "definition": "A signature algorithm is a cryptographic scheme comprising key generation, signing, and verification procedures that lets a holder of a private key produce a value provably tied to a message, which anyone with the public key can verify. It provides authenticity, integrity, and non-repudiation, with families including RSA, ECDSA, EdDSA, and Schnorr. It is the cryptographic primitive underpinning digital signatures.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-signatures", "label": "Digital Signatures"}, {"@id": "urn:ngm:class:digital-signature-verification", "label": "Digital Signature Verification"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A signature algorithm defines key generation, signing, and verification so that a private-key holder can produce a verifiable, non-repudiable tag over a message. It is the primitive required by [[Digital Signatures]] and by [[Digital Signature Verification]].
- ### Content
  - Schemes differ in key size, signature size, speed, and security assumptions: RSA relies on integer factoring, while ECDSA, EdDSA, and Schnorr rely on elliptic-curve discrete logs. Post-quantum candidates such as lattice- and hash-based signatures are being standardised to resist quantum attacks on current discrete-log schemes.
