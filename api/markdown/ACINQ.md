public:: true

# ACINQ
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2925ac2f637d4648c084891a1082c4d2fe5739d21ad79206dedcdb4315c37659",
  "@type": "Page",
  "vc:slug": "acinq",
  "title": "ACINQ",
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
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ACINQ"
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
  "@id": "urn:ngm:class:acinq",
  "@type": "Class",
  "label": "ACINQ",
  "definition": "ACINQ is a company that develops Lightning Network software, including an implementation of the protocol and a mobile Bitcoin wallet.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:acinq:6dcfd0b83e17",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2925ac2f637d4648c084891a1082c4d2fe5739d21ad79206dedcdb4315c37659"
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
  - ACINQ is a company that develops Lightning Network software, including an implementation of the protocol and a mobile Bitcoin wallet.

- ### Semantic Classification
  - owl-class:: blockchain:ACINQ
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Lightning Network]]
  - requires:: [[Bitcoin]]
  - enables:: [[Payment Channel]]

- ### Content
  - ACINQ maintains a Lightning Network node implementation and contributes to the development of the Lightning protocol specifications.
  - The company also provides a mobile wallet that uses the Lightning Network for Bitcoin payments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
