public:: true

# BitVM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c213de2647f5ebea9fcffbc72a8f539ddc071b6132c209cfe2a4370e617c2b3b",
  "@type": "Page",
  "vc:slug": "bit-vm",
  "title": "BitVM",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:fraud-proof",
      "vc:label": "Fraud Proof"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:https-bitvm-org",
      "vc:label": "https://bitvm.org"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-bit-vm-bit-vm",
      "vc:label": "https://github.com/BitVM/BitVM"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BitVM"
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
  "@id": "urn:ngm:class:bit-vm",
  "@type": "Class",
  "label": "BitVM",
  "definition": "BitVM is a proposed approach for expressing complex computations that can be verified on Bitcoin without changing its consensus rules. It uses fraud proofs and challenge-response interactions.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
      "label": "Bitcoin Script"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bit-vm:c3fe1d3cdbbb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c213de2647f5ebea9fcffbc72a8f539ddc071b6132c209cfe2a4370e617c2b3b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fraud Proof]]",
      "resolved": "urn:visionflow:linked:fraud-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://bitvm.org]]",
      "resolved": "urn:visionflow:linked:https-bitvm-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/BitVM/BitVM]]",
      "resolved": "urn:visionflow:linked:https-github-com-bit-vm-bit-vm",
      "kind": "StubLink"
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
  - BitVM is a proposed approach for expressing complex computations that can be verified on Bitcoin without changing its consensus rules. It uses fraud proofs and challenge-response interactions.

- ### Semantic Classification
  - owl-class:: blockchain:BitVM
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Script]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Taproot]], [[Fraud Proof]]
  - enables:: [[Layer 2 Scaling]]

- ### Content
  - BitVM is a scheme for committing to arbitrary computations off-chain and resolving disputes on-chain through a challenge-response game. A party that makes a false claim about a computation can be proven wrong using a fraud proof posted to Bitcoin.
  - The design aims to expand what can be built on Bitcoin without altering its base protocol, supporting constructions such as bridges and more expressive contracts. It relies on existing script capabilities and the Taproot upgrade.

- ### Provenance
  - sources:: [[https://bitvm.org]], [[https://github.com/BitVM/BitVM]]
  - migration-date:: 2026-05-29T00:00:00Z
