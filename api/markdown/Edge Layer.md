public:: true

# Edge Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:55e1bc311739948193db1bcea6c8bcf4ef45b4db49e3b3fdeafa3606c5d506cb",
  "@type": "Page",
  "vc:slug": "edge-layer",
  "title": "Edge Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:linked:hardware-layer",
      "vc:label": "Hardware Layer"
    },
    {
      "@id": "urn:visionflow:linked:edge-computing-layer",
      "vc:label": "Edge Computing Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:content-delivery-network",
      "vc:label": "Content Delivery Network"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
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
      "vc:value": "Edge Layer"
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
  "@id": "urn:ngm:class:edge-layer",
  "@type": "Class",
  "label": "Edge Layer",
  "definition": "The Edge Layer is the cross-cutting stratum at the periphery of a system, where it meets external devices, users, and data sources. It sits above local hardware and network resources and below the application workloads it serves close to origin. It contains edge gateways, local caches, and the boundary logic that mediates between core and periphery.",
  "domain": "edge",
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
      },
      {
        "@id": "urn:ngm:class:hardware-layer",
        "label": "Hardware Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-computing-layer",
        "label": "Edge Computing Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:edge-layer:b5e645327716",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:55e1bc311739948193db1bcea6c8bcf4ef45b4db49e3b3fdeafa3606c5d506cb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:linked:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware Layer]]",
      "resolved": "urn:visionflow:linked:hardware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Computing Layer]]",
      "resolved": "urn:visionflow:linked:edge-computing-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Delivery Network]]",
      "resolved": "urn:visionflow:linked:content-delivery-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
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
  - The Edge Layer is the cross-cutting stratum at the periphery of a system, where it meets external devices, users, and data sources. It sits above local hardware and network resources and below the application workloads it serves close to origin. It contains edge gateways, local caches, and the boundary logic that mediates between core and periphery.

- ### Semantic Classification
  - owl-class:: edge:EdgeLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Content Delivery Network]], [[Internet of Things]]
  - requires:: [[Network Layer]], [[Hardware Layer]]
  - enables:: [[Edge Computing Layer]], [[Application Layer]]

- ### Content
  - The Edge Layer is the system's outer boundary, the point at which it interfaces with users, devices, and the outside world. Typical members include edge gateways, content caches, ingress and protocol termination, and the boundary logic that filters and forwards traffic. It localises interaction to reduce distance to the core.
  - It requires the Network and Hardware Layers at the periphery to function, and it enables the Edge Computing Layer that runs workloads there and the Application Layer that serves users with lower latency. Decisions made here about what to cache or process locally shape responsiveness.
  - The layer bridges to content delivery networks and the Internet of Things, contexts where edge presence is decisive. Security at this boundary is critical because it is the most exposed part of the system.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
