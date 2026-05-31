public:: true

# Transport Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a29b26b4663a589cccceda0db7036d0742a9df0e30ac7737ddfe70e576e9bae",
  "@type": "Page",
  "vc:slug": "transport-layer",
  "title": "Transport Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:linked:protocol-layer",
      "vc:label": "Protocol Layer"
    },
    {
      "@id": "urn:visionflow:linked:integration-layer",
      "vc:label": "Integration Layer"
    },
    {
      "@id": "urn:visionflow:linked:transmission-control-protocol",
      "vc:label": "Transmission Control Protocol"
    },
    {
      "@id": "urn:visionflow:linked:congestion-control",
      "vc:label": "Congestion Control"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:ietf-internet-engineering-task-force",
      "vc:label": "IETF (Internet Engineering Task Force)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Transport Layer"
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
  "@id": "urn:ngm:class:transport-layer",
  "@type": "Class",
  "label": "Transport Layer",
  "definition": "The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.",
  "domain": "transport",
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
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:protocol-layer",
        "label": "Protocol Layer"
      },
      {
        "@id": "urn:ngm:class:integration-layer",
        "label": "Integration Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:transport-layer:281d0eef6210",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a29b26b4663a589cccceda0db7036d0742a9df0e30ac7737ddfe70e576e9bae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:linked:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Protocol Layer]]",
      "resolved": "urn:visionflow:linked:protocol-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Integration Layer]]",
      "resolved": "urn:visionflow:linked:integration-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transmission Control Protocol]]",
      "resolved": "urn:visionflow:linked:transmission-control-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Congestion Control]]",
      "resolved": "urn:visionflow:linked:congestion-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IETF (Internet Engineering Task Force)]]",
      "resolved": "urn:visionflow:linked:ietf-internet-engineering-task-force",
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
  - The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.

- ### Semantic Classification
  - owl-class:: net:TransportLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transmission Control Protocol]], [[Congestion Control]]
  - requires:: [[Network Layer]]
  - enables:: [[Protocol Layer]], [[Integration Layer]]

- ### Content
  - The Transport Layer turns the best-effort delivery of the network beneath it into channels with defined reliability and ordering between endpoints. Typical members include segmentation and reassembly, acknowledgement and retransmission, flow and congestion control, and connection lifecycle management. It is concerned with end-to-end conversations rather than individual hops.
  - It requires the Network Layer to route packets toward their destination, and it enables the Protocol and Integration Layers that assume an orderly, reliable byte stream or datagram service. The guarantees chosen here, reliable or unreliable, shape what higher layers must handle themselves.
  - The layer bridges to the Transmission Control Protocol and congestion control, mechanisms that share network capacity fairly and recover from loss. Latency and throughput characteristics established here are inherited by every conversation above.

- ### Provenance
  - sources:: [[IETF (Internet Engineering Task Force)]]
  - migration-date:: 2026-05-29T00:00:00Z
