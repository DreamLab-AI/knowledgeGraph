public:: true

# Lightning Network Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83e5641986490e79833612a4001441b421c944bc8f462c03bafc32193fdd898f",
  "@type": "Page",
  "vc:slug": "lightning-network-layer",
  "title": "Lightning Network Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:settlement-layer",
      "vc:label": "Settlement Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:content-layer",
      "vc:label": "Content Layer"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:hash-time-locked-contract",
      "vc:label": "Hash Time-Locked Contract"
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
      "vc:value": "Lightning Network Layer"
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
  "@id": "urn:ngm:class:lightning-network-layer",
  "@type": "Class",
  "label": "Lightning Network Layer",
  "definition": "The Lightning Network Layer is a second-layer stratum that enables fast, low-cost payments off the base settlement ledger through bidirectional payment channels. It sits above the Settlement Layer, on which it anchors and finally settles, and below the application and content strata that use instant payments. It contains payment channels, routing, and channel-state management.",
  "domain": "blockchain",
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
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      },
      {
        "@id": "urn:ngm:class:content-layer",
        "label": "Content Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lightning-network-layer:4211474ebf3e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:83e5641986490e79833612a4001441b421c944bc8f462c03bafc32193fdd898f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Settlement Layer]]",
      "resolved": "urn:visionflow:linked:settlement-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Layer]]",
      "resolved": "urn:visionflow:linked:content-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Time-Locked Contract]]",
      "resolved": "urn:visionflow:linked:hash-time-locked-contract",
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
  - The Lightning Network Layer is a second-layer stratum that enables fast, low-cost payments off the base settlement ledger through bidirectional payment channels. It sits above the Settlement Layer, on which it anchors and finally settles, and below the application and content strata that use instant payments. It contains payment channels, routing, and channel-state management.

- ### Semantic Classification
  - owl-class:: ln:LightningNetworkLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Payment Channel]], [[Hash Time-Locked Contract]]
  - requires:: [[Settlement Layer]]
  - enables:: [[Application Layer]], [[Content Layer]]

- ### Content
  - The Lightning Network Layer moves payments off-chain through channels so that transfers complete in milliseconds at negligible cost, settling to the base ledger only when channels open or close. Typical members include bidirectional payment channels, multi-hop routing, channel state and commitment management, and the dispute mechanisms that protect against stale states.
  - It requires the Settlement Layer as the anchor where channels are funded and final balances are recorded. It enables the Application and Content Layers that depend on instant micropayments, such as streaming and pay-per-use services.
  - The layer bridges to the payment channel and the hash time-locked contract, constructs that make trust-minimised off-chain routing possible. The security model here inherits finality from settlement while adding its own liveness and watchtower assumptions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
