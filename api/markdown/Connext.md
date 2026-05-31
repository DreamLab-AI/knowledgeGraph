public:: true

# Connext
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de88a03f440ca3ec7b93292120b23d66b12ff9fa5ee5e56e9f1ab5e7f914a7e6",
  "@type": "Page",
  "vc:slug": "connext",
  "title": "Connext",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Connext"
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
  "@id": "urn:ngm:class:connext",
  "@type": "Class",
  "label": "Connext",
  "definition": "A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:connext:4a4ca0f18078",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:de88a03f440ca3ec7b93292120b23d66b12ff9fa5ee5e56e9f1ab5e7f914a7e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:linked:cross-chain-bridge",
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
  - A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian.

- ### Semantic Classification
  - owl-class:: blockchain:Connext
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Cross-Chain Bridge]]
  - requires:: [[Ethereum]], [[Liquidity Pool]]
  - enables:: [[Interoperability]]

- ### Content
  - Connext is a protocol for moving value and messages between Ethereum-compatible chains and Layer 2 rollups. It uses liquidity provided by routers together with a verification layer to transfer assets and trigger cross-chain contract calls, aiming to minimise trust in any single intermediary.
  - By coordinating local liquidity pools across networks, Connext supports cross-chain transfers and composable interactions that let applications span multiple chains while preserving the security assumptions of the underlying networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
