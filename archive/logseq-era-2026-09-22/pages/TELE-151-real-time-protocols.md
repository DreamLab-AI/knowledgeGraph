public:: true

# TELE-151-real-time-protocols
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2585a94b8686304580db555e0b4d51dda8d519ac04f06ddb1a16315b7781493d",
  "@type": "Page",
  "vc:slug": "tele-151-real-time-protocols",
  "title": "TELE-151-real-time-protocols",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:low-latency",
      "vc:label": "Low Latency"
    },
    {
      "@id": "urn:visionflow:linked:web-rtc",
      "vc:label": "WebRTC"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-151-real-time-protocols"
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
  "@id": "urn:ngm:class:tele-151-real-time-protocols",
  "@type": "Class",
  "label": "TELE-151-real-time-protocols",
  "definition": "Real-time protocols are network communication standards designed to deliver time-sensitive media and data with low latency and predictable timing, accepting some loss in exchange for timeliness.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
      },
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-151-real-time-protocols:09c58dadae88",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2585a94b8686304580db555e0b4d51dda8d519ac04f06ddb1a16315b7781493d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Low Latency]]",
      "resolved": "urn:visionflow:linked:low-latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[WebRTC]]",
      "resolved": "urn:visionflow:linked:web-rtc",
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
  - Real-time protocols are network communication standards designed to deliver time-sensitive media and data with low latency and predictable timing, accepting some loss in exchange for timeliness.

- ### Semantic Classification
  - owl-class:: metaverse:TELE151realtimeprotocols
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Protocol]]
  - bridges-to:: [[WebRTC]]
  - requires:: [[Network Protocol]]
  - enables:: [[Low Latency]], [[WebRTC]]

- ### Content
  - Real-time protocols are networking standards built to transport interactive media and control data within strict timing bounds. They prioritise low and stable latency over guaranteed delivery, using mechanisms such as timestamps, sequence numbers and selective retransmission to manage jitter and loss.
  - Examples include the Real-Time Transport Protocol and the transport layer used by WebRTC, which carry audio, video and data for conferencing and telepresence. Forward error correction and congestion control are commonly added to maintain quality across varying network conditions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
