public:: true

# ZK-SNARK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:139ed6b7bd7576c1b5dfdd562d3ee6a61de775ffb45c2dd77763a535309ec5ce",
  "@type": "Page",
  "vc:slug": "zk-snark",
  "title": "ZK-SNARK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:groth-16",
      "vc:label": "Groth16"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ZK-SNARK"
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
  "@id": "urn:ngm:class:zk-snark",
  "@type": "Class",
  "label": "ZK-SNARK",
  "definition": "A Zero-Knowledge Succinct Non-Interactive Argument of Knowledge is a proof that a statement is true while revealing nothing else, producing a small proof that is fast to verify.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zero-knowledge-proof",
      "label": "Zero-Knowledge Proof"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:groth-16",
        "label": "Groth16"
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
  "@id": "urn:visionflow:annotation:link-resolutions:zk-snark:4a358ba9abd9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:139ed6b7bd7576c1b5dfdd562d3ee6a61de775ffb45c2dd77763a535309ec5ce"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Groth16]]",
      "resolved": "urn:visionflow:linked:groth-16",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
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
  - A Zero-Knowledge Succinct Non-Interactive Argument of Knowledge is a proof that a statement is true while revealing nothing else, producing a small proof that is fast to verify.

- ### Semantic Classification
  - owl-class:: cryptographic:ZKSNARK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Groth16]]

- ### Content
  - A ZK-SNARK lets a prover convince a verifier that they know a witness satisfying some relation, without interaction and without disclosing the witness. The proof is succinct, meaning its size and verification time are small relative to the computation.
  - Many constructions require a trusted setup that produces public parameters, and security typically rests on assumptions over elliptic curve pairings. ZK-SNARKs are widely applied in privacy systems and validity rollups.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
