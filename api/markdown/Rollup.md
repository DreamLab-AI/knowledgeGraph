public:: true

# Rollup
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f7082ae04f0ac70cb83b7c8aa6e23343df70b7a6660aea9ec8c1618544f2ce5",
  "@type": "Page",
  "vc:slug": "rollup",
  "title": "Rollup",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fraud-proof",
      "vc:label": "Fraud Proof"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
    },
    {
      "@id": "urn:visionflow:linked:zk-sync",
      "vc:label": "zkSync"
    },
    {
      "@id": "urn:visionflow:linked:polygon",
      "vc:label": "Polygon"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Rollup"
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
  "@id": "urn:ngm:class:rollup",
  "@type": "Class",
  "label": "Rollup",
  "definition": "A Rollup is a blockchain scaling technique that executes transactions off a base layer such as Ethereum while posting compressed transaction data and state commitments back to it for settlement and data availability. By batching many transactions and proving or asserting their validity on the main chain, rollups increase throughput and reduce fees while inheriting much of the base layer's security. Two main types exist: optimistic rollups, which assume validity and rely on fraud proofs during a challenge window, and zero-knowledge rollups, which post validity proofs verifying each batch. Rollups are central to Ethereum's layer-2 scaling strategy.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero Knowledge Proof"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      },
      {
        "@id": "urn:ngm:class:zk-sync",
        "label": "zkSync"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rollup:45fb8b4d6731",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2f7082ae04f0ac70cb83b7c8aa6e23343df70b7a6660aea9ec8c1618544f2ce5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Fraud Proof]]",
      "resolved": "urn:visionflow:linked:fraud-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Zero Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[zkSync]]",
      "resolved": "urn:visionflow:linked:zk-sync",
      "kind": "StubLink"
    },
    {
      "raw": "[[Polygon]]",
      "resolved": "urn:visionflow:linked:polygon",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - A Rollup is a blockchain scaling technique that executes transactions off a base layer such as Ethereum while posting compressed transaction data and state commitments back to it for settlement and data availability. By batching many transactions and proving or asserting their validity on the main chain, rollups increase throughput and reduce fees while inheriting much of the base layer's security. Two main types exist: optimistic rollups, which assume validity and rely on fraud proofs during a challenge window, and zero-knowledge rollups, which post validity proofs verifying each batch. Rollups are central to Ethereum's layer-2 scaling strategy.

- ### Semantic Classification
  - owl-class:: bc:Rollup
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Polygon]]
  - has-part:: [[Fraud Proof]], [[Zero Knowledge Proof]]
  - requires:: [[Ethereum Smart Contract Platform]]
  - enables:: [[Optimism]], [[Arbitrum]], [[zkSync]]

- ### Content
  - Rollups move the heavy work of executing transactions off the main chain while still anchoring their data and integrity to it. Transaction data is published to the base layer so that anyone can reconstruct the rollup's state, which is what allows the system to inherit security guarantees rather than depending solely on a separate validator set.
  - Optimistic rollups treat posted state transitions as valid by default and provide a window during which a fraud proof can challenge an incorrect result, after which the base layer re-executes the disputed computation. Zero-knowledge rollups instead attach a succinct cryptographic proof to each batch, letting the base layer verify correctness directly without a challenge period.
  - Within Ethereum's roadmap, rollups are the primary path to scaling, complemented by upgrades that lower the cost of posting data, such as proto-danksharding. The approach lets many application-specific and general-purpose layer-2 networks coexist while settling to a shared, secure base layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
