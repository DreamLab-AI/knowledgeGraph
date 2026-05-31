public:: true

# Pedersen Commitment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3d57a51ea2305882bfe0c69b4d9ee256a8d4b650ee1404e1e5ff5d6e7aa685f",
  "@type": "Page",
  "vc:slug": "pedersen-commitment",
  "title": "Pedersen Commitment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-commitment",
      "vc:label": "Cryptographic Commitment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Pedersen Commitment"
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
  "@id": "urn:ngm:class:pedersen-commitment",
  "@type": "Class",
  "label": "Pedersen Commitment",
  "definition": "A cryptographic commitment scheme that lets a party commit to a value while keeping it hidden, with the ability to reveal it later. It is both binding and information-theoretically hiding, and it is additively homomorphic.",
  "domain": "cryptography",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-commitment",
      "label": "Cryptographic Commitment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:pedersen-commitment:ca23ea684f43",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c3d57a51ea2305882bfe0c69b4d9ee256a8d4b650ee1404e1e5ff5d6e7aa685f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:linked:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Commitment]]",
      "resolved": "urn:visionflow:linked:cryptographic-commitment",
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
  - A cryptographic commitment scheme that lets a party commit to a value while keeping it hidden, with the ability to reveal it later. It is both binding and information-theoretically hiding, and it is additively homomorphic.

- ### Semantic Classification
  - owl-class:: cryptography:PedersenCommitment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Commitment]]
  - bridges-to:: [[Cryptographic Commitment]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Zero-Knowledge Proof]]

- ### Content
  - A Pedersen commitment to a value uses a blinding factor and two group generators, producing a commitment that reveals nothing about the value while binding the committer to it under the discrete logarithm assumption.
  - Its homomorphic property means commitments to two values can be combined into a commitment to their sum, which makes it useful in confidential transactions, range proofs, and various zero-knowledge protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
