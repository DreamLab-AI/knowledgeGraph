public:: true

# Verifiable Computation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fbc14cf315fc4929bacab41d8b0fc9852f795ee39e642f114588520c50c97f22",
  "@type": "Page",
  "vc:slug": "verifiable-computation",
  "title": "Verifiable Computation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-proof",
      "vc:label": "Cryptographic Proof"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:trusted-execution-environments",
      "vc:label": "Trusted Execution Environments"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Verifiable Computation"
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
  "@id": "urn:ngm:class:verifiable-computation",
  "@type": "Class",
  "label": "Verifiable Computation",
  "definition": "Techniques that let a party outsource a computation and receive a proof that the result is correct, allowing efficient verification without redoing the work. Proof systems such as SNARKs and STARKs make verification exponentially cheaper than re-execution, enabling trust-minimised delegation at scale.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-proof",
    "label": "Cryptographic Proof"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:arithmetic-circuit",
        "label": "Arithmetic Circuit"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Polynomial Commitment Scheme"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "SNARK"
      },
      {
        "@id": "urn:ngm:class:stark",
        "label": "STARK"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:trusted-execution-environments",
        "label": "Trusted Execution Environments"
      },
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Machine Learning Inference"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      },
      {
        "@id": "urn:ngm:class:succinct-argument",
        "label": "Succinct Argument"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:delegatable-computation",
      "label": "Delegatable Computation"
    },
    {
      "@id": "urn:ngm:class:certified-computation",
      "label": "Certified Computation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:verifiable-computation:a10bf0a9ab72",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fbc14cf315fc4929bacab41d8b0fc9852f795ee39e642f114588520c50c97f22"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Proof]]",
      "resolved": "urn:visionflow:linked:cryptographic-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trusted Execution Environments]]",
      "resolved": "urn:visionflow:linked:trusted-execution-environments",
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
  - Techniques that let a party outsource a computation and receive a proof that the result is correct, allowing efficient verification without redoing the work.

- ### Semantic Classification
  - owl-class:: cryptographic:VerifiableComputation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Proof]]
  - bridges-to:: [[Trusted Execution Environments]]
  - requires:: [[Cryptographic Proof]], [[Zero-Knowledge Proof]]
  - enables:: [[Scalability]]

- ### Content
  - Verifiable computation allows a client to delegate a computation to an untrusted server and then check, using a succinct proof, that the returned result is correct without re-executing the computation. Proof systems such as succinct non-interactive arguments make verification far cheaper than the original work.
  - The technique underpins scaling approaches that move computation off-chain while proving its integrity, as well as privacy-preserving applications where a result can be verified without revealing the inputs. Hardware-based attestation through trusted execution environments offers a complementary trust model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
