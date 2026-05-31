public:: true

# Lightning Service Provider
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98cf97c4cf4582b9c3d400d28780271337affa84ff03484871ae5e73992bf482",
  "@type": "Page",
  "vc:slug": "lightning-service-provider",
  "title": "Lightning Service Provider",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning",
      "vc:label": "Lightning"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:phoenix",
      "vc:label": "Phoenix"
    },
    {
      "@id": "urn:visionflow:linked:lightning-service-provider",
      "vc:label": "Lightning Service Provider"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-bitcoin-and-lightning-layer-specs-lsp",
      "vc:label": "https://github.com/BitcoinAndLightningLayerSpecs/lsp"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-lightning-engineering",
      "vc:label": "https://docs.lightning.engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lightning Service Provider"
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
  "@id": "urn:ngm:class:lightning-service-provider",
  "@type": "Class",
  "label": "Lightning Service Provider",
  "definition": "A Lightning Service Provider is a business that supplies channel liquidity and connectivity services to Lightning Network users. It helps wallets open channels and receive payments.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning",
        "label": "Lightning"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:phoenix",
        "label": "Phoenix"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lightning-service-provider:c7535a664511",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98cf97c4cf4582b9c3d400d28780271337affa84ff03484871ae5e73992bf482"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning]]",
      "resolved": "urn:visionflow:linked:lightning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Phoenix]]",
      "resolved": "urn:visionflow:linked:phoenix",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Service Provider]]",
      "resolved": "urn:visionflow:linked:lightning-service-provider",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://github.com/BitcoinAndLightningLayerSpecs/lsp]]",
      "resolved": "urn:visionflow:linked:https-github-com-bitcoin-and-lightning-layer-specs-lsp",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.lightning.engineering]]",
      "resolved": "urn:visionflow:linked:https-docs-lightning-engineering",
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
  - A Lightning Service Provider is a business that supplies channel liquidity and connectivity services to Lightning Network users. It helps wallets open channels and receive payments.

- ### Semantic Classification
  - owl-class:: blockchain:LightningServiceProvider
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Lightning Service Provider]]
  - requires:: [[Lightning]], [[Payment Channel]]
  - enables:: [[Phoenix]]

- ### Content
  - A Lightning Service Provider supplies inbound liquidity and channel management so that users, particularly on mobile wallets, can send and receive payments without operating their own routing infrastructure. It opens channels to users on demand.
  - These providers reduce the technical burden on end users by handling channel creation and liquidity provisioning, often for a fee. They form part of the infrastructure that makes Lightning practical for everyday wallets.

- ### Provenance
  - sources:: [[https://github.com/BitcoinAndLightningLayerSpecs/lsp]], [[https://docs.lightning.engineering]]
  - migration-date:: 2026-05-29T00:00:00Z
