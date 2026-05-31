public:: true

# QUIC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:90acc9bbd6148ef730da90f4a6a3d8080dcc5952910c25f2651f629cf022a5ae",
  "@type": "Page",
  "vc:slug": "quic",
  "title": "QUIC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "QUIC"
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
  "@id": "urn:ngm:class:quic",
  "@type": "Class",
  "label": "QUIC",
  "definition": "A transport layer network protocol built on UDP that provides multiplexed, encrypted, low-latency connections and forms the basis of HTTP/3.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:quic:387166e8d5e3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:90acc9bbd6148ef730da90f4a6a3d8080dcc5952910c25f2651f629cf022a5ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
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
  - A transport layer network protocol built on UDP that provides multiplexed, encrypted, low-latency connections and forms the basis of HTTP/3.

- ### Semantic Classification
  - owl-class:: distributed-systems:QUIC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Network Architecture]]
  - requires:: [[Communication Protocol]]
  - enables:: [[Scalability]]

- ### Content
  - QUIC is a transport protocol that runs over UDP and integrates connection establishment with cryptographic handshaking, reducing round trips compared with the traditional TCP and TLS sequence. It multiplexes independent streams over a single connection so that loss on one stream does not stall the others.
  - Originally developed at Google and later standardised by the IETF, QUIC underpins HTTP/3 and supports connection migration across changing network addresses, improving performance on mobile and lossy networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
