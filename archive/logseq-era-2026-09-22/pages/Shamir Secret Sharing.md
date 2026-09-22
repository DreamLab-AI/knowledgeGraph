public:: true

# Shamir Secret Sharing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0282631fdd60fd64dc6e5aedf592995fc813410eff68d09c8d2edb8c6395a9fd",
  "@type": "Page",
  "vc:slug": "shamir-secret-sharing",
  "title": "Shamir Secret Sharing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:modular-arithmetic",
      "vc:label": "Modular Arithmetic"
    },
    {
      "@id": "urn:visionflow:linked:threshold-cryptography",
      "vc:label": "Threshold Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:stark",
      "vc:label": "STARK"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Shamir Secret Sharing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shamir-secret-sharing",
  "@type": "Class",
  "label": "Shamir Secret Sharing",
  "definition": "Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:modular-arithmetic",
        "label": "Modular Arithmetic"
      },
      {
        "@id": "urn:ngm:class:finite-field",
        "label": "Finite Field"
      },
      {
        "@id": "urn:ngm:class:polynomial-interpolation",
        "label": "Polynomial Interpolation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Distributed Key Management"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multiparty Computation"
      },
      {
        "@id": "urn:ngm:class:key-recovery",
        "label": "Key Recovery"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:secret-sharing",
        "label": "Secret Sharing"
      },
      {
        "@id": "urn:ngm:class:information-theoretic-security",
        "label": "Information-Theoretic Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-key-storage",
        "label": "Decentralized Key Storage"
      },
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:verifiable-secret-sharing",
        "label": "Verifiable Secret Sharing"
      },
      {
        "@id": "urn:ngm:class:bip39",
        "label": "BIP39"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:stark",
        "label": "STARK"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:sss",
      "label": "SSS"
    },
    {
      "@id": "urn:ngm:class:threshold-secret-sharing",
      "label": "Threshold Secret Sharing"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shamir-secret-sharing:578d63ebcc40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0282631fdd60fd64dc6e5aedf592995fc813410eff68d09c8d2edb8c6395a9fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Modular Arithmetic]]",
      "resolved": "urn:visionflow:linked:modular-arithmetic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Threshold Cryptography]]",
      "resolved": "urn:visionflow:linked:threshold-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[STARK]]",
      "resolved": "urn:visionflow:linked:stark",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography Domain]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Shamir secret sharing splits a secret into shares so that any threshold number of them reconstructs it while fewer reveal nothing, using polynomial interpolation over a finite field.

- ### Semantic Classification
  - owl-class:: metaverse:ShamirSecretSharing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography Domain]]
  - bridges-to:: [[Cryptography]], [[STARK]]
  - requires:: [[Modular Arithmetic]]
  - enables:: [[Threshold Cryptography]]

- ### Content
  - The scheme encodes a secret as the constant term of a random polynomial of degree one less than the threshold, distributing point evaluations as shares. Any threshold subset interpolates the polynomial and recovers the secret, while smaller subsets learn nothing about it.
  - Shamir secret sharing underpins threshold cryptography, distributed key management and secure backup of keys. It relies on arithmetic over finite fields, connecting it to modular arithmetic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
