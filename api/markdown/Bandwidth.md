public:: true

# Bandwidth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:54b7fc7d12a259d71aa5604b1917f796ecfc96213ce2abb00d0c2d85f0da8aff",
  "@type": "Page",
  "vc:slug": "bandwidth",
  "title": "Bandwidth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:video-streaming",
      "vc:label": "Video Streaming"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bandwidth"
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
  "@id": "urn:ngm:class:bandwidth",
  "@type": "Class",
  "label": "Bandwidth",
  "definition": "The maximum rate at which data can be transferred over a network path or communication channel, commonly measured in bits per second. In signal processing it also refers to the range of frequencies a channel can carry.",
  "domain": "networking",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bandwidth:2c7210c5b950",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:54b7fc7d12a259d71aa5604b1917f796ecfc96213ce2abb00d0c2d85f0da8aff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Video Streaming]]",
      "resolved": "urn:visionflow:linked:video-streaming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
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
  - The maximum rate at which data can be transferred over a network path or communication channel, commonly measured in bits per second. In signal processing it also refers to the range of frequencies a channel can carry.

- ### Semantic Classification
  - owl-class:: networking:Bandwidth
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Protocol]]
  - bridges-to:: [[Latency]]
  - enables:: [[Video Streaming]]

- ### Content
  - In networking, bandwidth describes the capacity of a link, typically expressed in bits per second, and sets an upper bound on throughput. It is distinct from latency, which measures delay rather than capacity.
  - In signal processing and communications, bandwidth refers to the width of a frequency band. Available bandwidth limits how much data services such as video streaming can deliver within a given time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
