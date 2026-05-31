public:: true

# Edge Computing Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cf75cda1681225c01ff46e0e71c2661530738672f13963d13d0797f2747e864e",
  "@type": "Page",
  "vc:slug": "edge-computing-layer",
  "title": "Edge Computing Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware-layer",
      "vc:label": "Hardware Layer"
    },
    {
      "@id": "urn:visionflow:linked:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:linked:inference-layer",
      "vc:label": "Inference Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Edge Computing Layer"
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
  "@id": "urn:ngm:class:edge-computing-layer",
  "@type": "Class",
  "label": "Edge Computing Layer",
  "definition": "The Edge Computing Layer is the stratum that places computation and storage near the source of data, away from centralised facilities. It sits above the Hardware and Network strata at the periphery and below the application and inference workloads it hosts locally. It contains edge nodes, local schedulers, and the synchronisation logic that links edge to core.",
  "domain": "edge-computing",
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
        "@id": "urn:ngm:class:hardware-layer",
        "label": "Hardware Layer"
      },
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inference-layer",
        "label": "Inference Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:edge-computing-layer:4efabf62b5d6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cf75cda1681225c01ff46e0e71c2661530738672f13963d13d0797f2747e864e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware Layer]]",
      "resolved": "urn:visionflow:linked:hardware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:linked:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Layer]]",
      "resolved": "urn:visionflow:linked:inference-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:linked:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Edge Computing Layer is the stratum that places computation and storage near the source of data, away from centralised facilities. It sits above the Hardware and Network strata at the periphery and below the application and inference workloads it hosts locally. It contains edge nodes, local schedulers, and the synchronisation logic that links edge to core.

- ### Semantic Classification
  - owl-class:: edge:EdgeComputingLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Latency]], [[Distributed Computing]]
  - requires:: [[Hardware Layer]], [[Network Layer]]
  - enables:: [[Inference Layer]], [[Application Layer]]

- ### Content
  - The Edge Computing Layer runs workloads close to where data originates to reduce latency, bandwidth, and dependence on a central site. Typical members include edge servers and gateways, local schedulers, on-device inference runtimes, and store-and-forward synchronisation with the core. It trades centralised scale for proximity.
  - It requires the Hardware Layer at the periphery and the Network Layer that links edge sites to one another and to the core. It enables low-latency Inference and Application workloads that cannot tolerate a round trip to a distant data centre.
  - The layer bridges to latency and distributed computing, concerns that justify and constrain edge placement. Consistency and resource limits at the edge determine which workloads can responsibly be pushed outward.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
