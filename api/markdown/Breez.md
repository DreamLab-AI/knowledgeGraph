public:: true

# Breez
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82f126bfe64012bc1ed8d3be9827fd0aa14687b3640fb112e84563ee5adb9c66",
  "@type": "Page",
  "vc:slug": "breez",
  "title": "Breez",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Breez"
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
  "@id": "urn:ngm:class:breez",
  "@type": "Class",
  "label": "Breez",
  "definition": "Breez is a company that develops a non-custodial Lightning Network wallet and software development kit for Bitcoin payments.",
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
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:breez:3fb1101c01cc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82f126bfe64012bc1ed8d3be9827fd0aa14687b3640fb112e84563ee5adb9c66"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
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
  - Breez is a company that develops a non-custodial Lightning Network wallet and software development kit for Bitcoin payments.

- ### Semantic Classification
  - owl-class:: blockchain:Breez
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Self-Custody]]
  - requires:: [[Bitcoin]]
  - enables:: [[Payment Channel]]

- ### Content
  - Breez provides a non-custodial wallet and developer tooling for integrating Lightning Network payments into applications.
  - Its software lets users send and receive Bitcoin over payment channels while retaining control of their own keys.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
