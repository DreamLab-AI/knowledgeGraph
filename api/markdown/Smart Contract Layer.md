public:: true

# Smart Contract Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db9b4b264d607791381a95eefd991cd6dbb7b005ee78ca8a668a7163378fa01e",
  "@type": "Page",
  "vc:slug": "smart-contract-layer",
  "title": "Smart Contract Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:linked:consensus-layer",
      "vc:label": "Consensus Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance",
      "vc:label": "Decentralised Finance"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Smart Contract Layer"
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
  "@id": "urn:ngm:class:smart-contract-layer",
  "@type": "Class",
  "label": "Smart Contract Layer",
  "definition": "The Smart Contract Layer is the stratum that holds self-executing programmes whose logic runs deterministically against agreed state. In the canonical stack it sits above the Middleware Layer and below the Application Layer, turning a shared ledger into a programmable platform. It contains contract code, virtual machine execution semantics, and the state these contracts read and write.",
  "domain": "smart-contract",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:middleware-layer",
        "label": "Middleware Layer"
      },
      {
        "@id": "urn:ngm:class:consensus-layer",
        "label": "Consensus Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:smart-contract-layer:31be7be17e9b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:db9b4b264d607791381a95eefd991cd6dbb7b005ee78ca8a668a7163378fa01e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:linked:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Layer]]",
      "resolved": "urn:visionflow:linked:consensus-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance]]",
      "resolved": "urn:visionflow:linked:decentralised-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Smart Contract Layer is the stratum that holds self-executing programmes whose logic runs deterministically against agreed state. In the canonical stack it sits above the Middleware Layer and below the Application Layer, turning a shared ledger into a programmable platform. It contains contract code, virtual machine execution semantics, and the state these contracts read and write.

- ### Semantic Classification
  - owl-class:: arch:SmartContractLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Ethereum Virtual Machine]], [[Decentralised Finance]]
  - requires:: [[Middleware Layer]], [[Consensus Layer]]
  - enables:: [[Application Layer]]

- ### Content
  - The Smart Contract Layer executes deterministic programmes whose outputs every participant can independently verify. Typical members include contract bytecode, a deterministic virtual machine, gas accounting, and the persistent contract storage that records balances and rules. Execution is replicated so that all honest nodes reach the same result.
  - It requires the Middleware Layer to expose ledger access and the Consensus Layer to agree on the ordering of the transactions it processes. It enables the Application Layer above, where user-facing products compose these contracts into services.
  - The layer bridges to execution environments such as the Ethereum Virtual Machine and to application domains such as decentralised finance. Determinism and replicated execution are the properties that make its outputs trustworthy without a central operator.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
