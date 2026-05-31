public:: true

# Groth16
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2068b1bf960e9321948580fc9c60bdd5e3ceb0bf187a7541abd1cf907c160d7",
  "@type": "Page",
  "vc:slug": "groth-16",
  "title": "Groth16",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:zk-snark",
      "vc:label": "ZK-SNARK"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-primitive",
      "vc:label": "Cryptographic Primitive"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Groth16"
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
  "@id": "urn:ngm:class:groth-16",
  "@type": "Class",
  "label": "Groth16",
  "definition": "A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zk-snark",
      "label": "ZK-SNARK"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:groth-16:d39617a29849",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2068b1bf960e9321948580fc9c60bdd5e3ceb0bf187a7541abd1cf907c160d7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ZK-SNARK]]",
      "resolved": "urn:visionflow:linked:zk-snark",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Primitive]]",
      "resolved": "urn:visionflow:linked:cryptographic-primitive",
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
  - A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.

- ### Semantic Classification
  - owl-class:: cryptographic:Groth16
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[ZK-SNARK]]
  - bridges-to:: [[Cryptographic Primitive]]
  - requires:: [[Elliptic Curve Cryptography]], [[ZK-SNARK]]
  - enables:: [[Zero-Knowledge Proof]]

- ### Content
  - Groth16 is a succinct non-interactive argument whose proofs consist of only three group elements and are verified with a small fixed number of pairing checks. It is valued for very small proof sizes and fast verification.
  - The scheme requires a trusted setup that is specific to the circuit being proved, producing a structured reference string. It has been a common choice for privacy and scaling systems where minimal on-chain verification cost matters.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
