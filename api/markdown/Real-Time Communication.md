public:: true

# Real-Time Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82fd72376ee7577dedef8f39d2770f137ae2d54601c4ce5fd1df00d4d455d720",
  "@type": "Page",
  "vc:slug": "real-time-communication",
  "title": "Real-Time Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:web-rtc",
      "vc:label": "WebRTC"
    },
    {
      "@id": "urn:visionflow:linked:video-compression",
      "vc:label": "Video Compression"
    },
    {
      "@id": "urn:visionflow:linked:wireless-connectivity",
      "vc:label": "Wireless Connectivity"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Real-Time Communication"
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
  "@id": "urn:ngm:class:real-time-communication",
  "@type": "Class",
  "label": "Real-Time Communication",
  "definition": "Real-time communication is the exchange of audio, video or data between parties with minimal delay, supporting interactive use such as calls and conferencing. Web-based real-time communication is commonly built on WebRTC.",
  "domain": "networking",
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
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      },
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
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
  "@id": "urn:visionflow:annotation:link-resolutions:real-time-communication:2c2eed253ca8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82fd72376ee7577dedef8f39d2770f137ae2d54601c4ce5fd1df00d4d455d720"
  },
  "vc:resolutions": [
    {
      "raw": "[[WebRTC]]",
      "resolved": "urn:visionflow:linked:web-rtc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Video Compression]]",
      "resolved": "urn:visionflow:linked:video-compression",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wireless Connectivity]]",
      "resolved": "urn:visionflow:linked:wireless-connectivity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
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
  - Real-time communication is the exchange of audio, video or data between parties with minimal delay, supporting interactive use such as calls and conferencing. Web-based real-time communication is commonly built on WebRTC.

- ### Semantic Classification
  - owl-class:: networking:RealTimeCommunication
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Wireless Connectivity]]
  - requires:: [[WebRTC]], [[Video Compression]]

- ### Content
  - Real-time communication delivers media and data with latency low enough for interaction, underpinning voice and video calls, conferencing and live collaboration. It relies on protocols for media transport, congestion control and synchronisation to keep delay and jitter within tolerable bounds.
  - On the web, WebRTC provides peer-to-peer audio, video and data channels directly between browsers, combined with codecs for efficient media compression. Network conditions, codec choice and signalling design all affect the quality of a real-time session.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
