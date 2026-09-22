public:: true

# Key Aggregation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:key-aggregation",
  "@type": "Page",
  "title": "Key Aggregation",
  "vc:slug": "key-aggregation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:key-aggregation",
  "@type": "Class",
  "label": "Key Aggregation",
  "definition": "Key Aggregation is a cryptographic technique that combines multiple individual public keys into a single aggregate public key, against which a combined signature can be verified as though produced by one signer. It is central to modern multi-signature schemes such as MuSig2, where several parties jointly produce one compact signature indistinguishable from a single-key signature. Key aggregation improves privacy, reduces on-chain footprint and lowers verification cost in distributed signing protocols.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Key Aggregation is a cryptographic technique that combines multiple individual public keys into a single aggregate public key, against which a combined signature can be verified as though produced by one signer. It is central to modern multi-signature schemes such as MuSig2, where several parties jointly produce one compact signature indistinguishable from a single-key signature. Key aggregation improves privacy, reduces on-chain footprint and lowers verification cost in distributed signing protocols.
  - Related core concepts: [[Cryptographic Protocol]] [[Multi-Signature]] [[Schnorr Signature]] [[Public-Key Cryptography]] [[Digital Signature]]
- ### Overview
  - Key aggregation exploits the linearity of Schnorr signatures to fold many signers into one verifier-facing key and signature. Naive aggregation is vulnerable to rogue-key attacks, so secure schemes weight each key with a hash-derived coefficient before combination. The result is a constant-size signature whose verification reveals nothing about the number of participants.
- ### Mechanisms
  - Linear combination: summing weighted public keys into a single aggregate key.
  - Rogue-key defence: deriving per-key aggregation coefficients to prevent adversarial key cancellation.
  - Nonce handling: secure multi-round or deterministic nonce generation as in MuSig2.
  - Signature compaction: producing one fixed-size signature regardless of signer count.
  - Verifier indistinguishability: aggregate signatures verify identically to single-signer ones.
- ### Applications
  - Bitcoin multi-signature wallets and Taproot spending paths.
  - Threshold custody and shared-control treasury arrangements.
  - Privacy-preserving collective authorisation in distributed protocols.
  - Reducing on-chain data and verification cost for joint transactions.
- ### Relationships
  - subClassOf:: [[Cryptographic Protocol]]
  - enables:: [[Multi-Signature]]
  - enables:: [[Schnorr Signature]]
  - requires:: [[Public-Key Cryptography]]
  - requires:: [[Digital Signature]]
  - uses:: [[Schnorr Signature]]
  - uses:: [[Cryptography]]
  - implements:: [[Cryptographic Protocol]]
  - supports:: [[Multi-Signature]]
  - supports:: [[Bitcoin]]
  - dependsOn:: [[Public-Key Cryptography]]
  - partOf:: [[Cryptographic Protocol]]
  - relatedTo:: [[Key Management]]
  - relatedTo:: [[Digital Signature]]
  - relatedTo:: [[Cryptography]]
  - bridgesTo:: [[Multi-Signature]]
  - contrastsWith:: [[Key Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
