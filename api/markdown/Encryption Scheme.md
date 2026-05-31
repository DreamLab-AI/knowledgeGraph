public:: true

# Encryption Scheme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:encryption-scheme",
  "@type": "Page",
  "vc:slug": "encryption-scheme",
  "title": "Encryption Scheme",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:encryption-scheme",
  "@type": "Class",
  "label": "Encryption Scheme",
  "definition": "An Encryption Scheme is a cryptographic construction comprising key-generation, encryption, and decryption algorithms that together transform plaintext into ciphertext and back under a key. Schemes are categorised as symmetric (shared key, e.g. AES) or asymmetric (public/private key, e.g. RSA, ECC), and are evaluated by their security definitions such as semantic security. They are the building blocks of confidentiality in cryptographic protocols.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}, {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Encryption Scheme is a triple of key-generation, encryption, and decryption algorithms that converts plaintext to ciphertext under a key. It is a primitive of [[Cryptography]] required by higher-level [[Cryptographic Protocol]] designs.
- ### Content
  - Symmetric schemes such as AES use one shared key for speed, while asymmetric schemes such as RSA and elliptic-curve cryptography use key pairs to enable key exchange and signatures. Security is judged against formal notions like IND-CPA and IND-CCA, ensuring ciphertexts leak no useful information to adversaries.
