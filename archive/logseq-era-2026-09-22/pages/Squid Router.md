public:: true

# Squid Router
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8fe085446c7b23c3f0eefa1b83951999a6c9c01ee9b7822fe26f1ac094a8e871",
  "@type": "Page",
  "vc:slug": "squid-router",
  "title": "Squid Router",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:axelar",
      "vc:label": "Axelar"
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
      "vc:value": "Squid Router"
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
  "@id": "urn:ngm:class:squid-router",
  "@type": "Class",
  "label": "Squid Router",
  "definition": "Squid Router is a cross-chain liquidity and routing protocol built on the Axelar network that allows token swaps and transfers between different blockchains in a single transaction.",
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
        "@id": "urn:ngm:class:axelar",
        "label": "Axelar"
      },
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
  "@id": "urn:visionflow:annotation:link-resolutions:squid-router:9938899d0848",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8fe085446c7b23c3f0eefa1b83951999a6c9c01ee9b7822fe26f1ac094a8e871"
  },
  "vc:resolutions": [
    {
      "raw": "[[Axelar]]",
      "resolved": "urn:visionflow:linked:axelar",
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
  - Squid Router is a cross-chain liquidity and routing protocol built on the Axelar network that allows token swaps and transfers between different blockchains in a single transaction.

- ### Semantic Classification
  - owl-class:: blockchain:SquidRouter
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Cross-Chain Bridge]]
  - requires:: [[Axelar]], [[Interoperability]]

- ### Content
  - Squid Router uses the Axelar general message passing layer to coordinate swaps and bridging across chains. A user can start with one token on a source chain and receive a different token on a destination chain through a single user action.
  - The protocol combines decentralised exchange liquidity on each chain with cross-chain message passing, so routing logic selects swap paths on both the source and destination networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
