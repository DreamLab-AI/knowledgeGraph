public:: true

# Eclair
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:719a22c3492274348ba33849e02de4cdc8fefc0b3e8383560a3df6babcc2601f",
  "@type": "Page",
  "vc:slug": "eclair",
  "title": "Eclair",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Eclair"
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
  "@id": "urn:ngm:class:eclair",
  "@type": "Class",
  "label": "Eclair",
  "definition": "Eclair is an implementation of the Bitcoin Lightning Network protocol written in Scala and maintained by ACINQ.",
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
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
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
  "@id": "urn:visionflow:annotation:link-resolutions:eclair:0556a43b215a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:719a22c3492274348ba33849e02de4cdc8fefc0b3e8383560a3df6babcc2601f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - Eclair is an implementation of the Bitcoin Lightning Network protocol written in Scala and maintained by ACINQ.

- ### Semantic Classification
  - owl-class:: blockchain:Eclair
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - Eclair implements the Lightning Network specification, managing payment channels, routing, and gossip between nodes. It is developed by ACINQ and powers the company's Phoenix mobile wallet.
  - Along with implementations such as Core Lightning and LND, Eclair must follow the shared BOLT specifications so that nodes from different implementations can open channels and route payments with one another.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
