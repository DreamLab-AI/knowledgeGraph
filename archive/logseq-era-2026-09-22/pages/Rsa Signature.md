public:: true

# Rsa Signature

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:rsa-signature", "@type":"Page", "title":"Rsa Signature", "vc:slug":"rsa-signature", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:rsa-signature",
  "@type":"Class",
  "label":"RSA Signature",
  "definition":"An RSA signature is a digital signature scheme built on the RSA public-key cryptosystem, where a message digest is signed with the holder's private exponent and verified with the corresponding public exponent and modulus. Security rests on the difficulty of factoring large composite integers, and practical deployments use padding schemes such as PKCS#1 v1.5 or PSS together with a cryptographic hash function. RSA signatures are widely used for certificate authorities, code signing, and transport-layer authentication, though they produce larger keys and signatures than elliptic-curve alternatives.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"}],
    "requires":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},
      {"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},
      {"@id":"urn:ngm:class:code-signing","label":"Code Signing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:ecdsa","label":"ECDSA"},
      {"@id":"urn:ngm:class:post-quantum-cryptography","label":"Post-Quantum Cryptography"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptographic-signature","label":"Cryptographic Signature"},
      {"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:security","label":"Security"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- An RSA signature applies the RSA trapdoor to a hashed message, producing a value that anyone holding the [[Public-Key Cryptography]] public key can verify. It is a concrete instance of a [[Digital Signature]] that relies on a [[Cryptographic Hash Function]] and the hardness of integer factorisation.
- Verification proves both authenticity and integrity: only the private-key holder could have produced the signature over the given digest.
- ### Overview
- RSA, introduced in the late 1970s, remains one of the most widely deployed asymmetric primitives. Signing computes the signature from the message hash using the private exponent; verification raises the signature to the public exponent and compares against the recomputed hash.
- Padding is essential to security. Deterministic PKCS#1 v1.5 padding is still common for compatibility, while the probabilistic PSS padding offers stronger, provable security guarantees.
- Compared with elliptic-curve schemes, RSA signatures use substantially larger keys (commonly 2048 to 4096 bits) and larger signatures, but benefit from broad interoperability and fast verification.
- ### Mechanisms
- Key generation: choose two large primes, compute the modulus and totient, and derive matching public and private exponents.
- Hashing: reduce the message to a fixed-length digest using a collision-resistant hash function.
- Padding: encode the digest with PKCS#1 v1.5 or PSS to prevent forgery and malleability.
- Signing: apply the private exponent modulo the modulus to the padded digest.
- Verification: apply the public exponent, unpad, and compare to the recomputed digest.
- ### Applications
- TLS certificates and certificate authorities frequently use RSA signatures for chain-of-trust authentication.
- Code signing of software packages and firmware updates.
- Email security (S/MIME) and document signing.
- Legacy and interoperability contexts where elliptic-curve support is incomplete.
- ### Relationships
- partOf:: [[Public-Key Cryptography]]
- requires:: [[Cryptographic Hash Function]]
- requires:: [[Public-Key Cryptography]]
- uses:: [[Cryptographic Hash Function]]
- enables:: [[Digital Signature]]
- enables:: [[Code Signing]]
- supports:: [[Certificate Authority]]
- contrastsWith:: [[ECDSA]]
- contrastsWith:: [[Post-Quantum Cryptography]]
- relatedTo:: [[Cryptographic Signature]]
- relatedTo:: [[Key Exchange]]
- bridgesTo:: [[Security]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
