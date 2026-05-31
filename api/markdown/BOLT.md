public:: true

# BOLT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9a874c8f94e3d269227e1c269ed1816e24edfe9226c0a43af1cdc13e713e0e9",
  "@type": "Page",
  "vc:slug": "bolt",
  "title": "BOLT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning",
      "vc:label": "Lightning"
    },
    {
      "@id": "urn:visionflow:linked:bolt-11",
      "vc:label": "BOLT11"
    },
    {
      "@id": "urn:visionflow:linked:bolt-12",
      "vc:label": "BOLT12"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-lightning-bolts",
      "vc:label": "https://github.com/lightning/bolts"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-00-introduction-md",
      "vc:label": "https://github.com/lightning/bolts/blob/master/00-introduction.md"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BOLT"
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
  "@id": "urn:ngm:class:bolt",
  "@type": "Class",
  "label": "BOLT",
  "definition": "BOLT, the Basis of Lightning Technology, is the set of specifications that define how Lightning Network implementations interoperate. The documents cover channels, routing, and messaging.",
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bolt-11",
        "label": "BOLT11"
      },
      {
        "@id": "urn:ngm:class:bolt-12",
        "label": "BOLT12"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bolt:d0b3cba71f72",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9a874c8f94e3d269227e1c269ed1816e24edfe9226c0a43af1cdc13e713e0e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning]]",
      "resolved": "urn:visionflow:linked:lightning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BOLT11]]",
      "resolved": "urn:visionflow:linked:bolt-11",
      "kind": "StubLink"
    },
    {
      "raw": "[[BOLT12]]",
      "resolved": "urn:visionflow:linked:bolt-12",
      "kind": "StubLink"
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
    },
    {
      "raw": "[[https://github.com/lightning/bolts]]",
      "resolved": "urn:visionflow:linked:https-github-com-lightning-bolts",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/lightning/bolts/blob/master/00-introduction.md]]",
      "resolved": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-00-introduction-md",
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
  - BOLT, the Basis of Lightning Technology, is the set of specifications that define how Lightning Network implementations interoperate. The documents cover channels, routing, and messaging.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Payment Channel]]
  - requires:: [[Lightning]]
  - enables:: [[BOLT11]], [[BOLT12]]

- ### Content
  - BOLT is the collection of specification documents that describe the Lightning Network protocol, including how nodes open and close channels, route payments, and format messages. They allow independent implementations to work together.
  - The specifications are maintained as open documents and revised as the protocol evolves. They define the wire formats and procedures that implementations must follow to remain compatible, including the invoice formats BOLT11 and BOLT12.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts]], [[https://github.com/lightning/bolts/blob/master/00-introduction.md]]
  - migration-date:: 2026-05-29T00:00:00Z
