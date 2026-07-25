public:: true

# TELE-153-5g-telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e9584bb7628eb2e5f7df4f18ed714a702e2d84c3a35735d33b53eb5cb8412089",
  "@type": "Page",
  "vc:slug": "tele-153-5-g-telepresence",
  "title": "TELE-153-5g-telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:5-g-network",
      "vc:label": "5G Network"
    },
    {
      "@id": "urn:visionflow:linked:network-slicing",
      "vc:label": "Network Slicing"
    },
    {
      "@id": "urn:visionflow:linked:low-latency",
      "vc:label": "Low Latency"
    },
    {
      "@id": "urn:visionflow:linked:5-g",
      "vc:label": "5G"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-153-5g-telepresence"
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
  "@id": "urn:ngm:class:tele-153-5-g-telepresence",
  "@type": "Class",
  "label": "TELE-153-5g-telepresence",
  "definition": "5G telepresence is the delivery of real-time immersive communication over fifth-generation mobile networks, using their higher bandwidth and lower latency to support volumetric and high-resolution remote presence on mobile devices.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:5-g-network",
        "label": "5G Network"
      },
      {
        "@id": "urn:ngm:class:network-slicing",
        "label": "Network Slicing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-153-5-g-telepresence:b90a94c6bb80",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e9584bb7628eb2e5f7df4f18ed714a702e2d84c3a35735d33b53eb5cb8412089"
  },
  "vc:resolutions": [
    {
      "raw": "[[5G Network]]",
      "resolved": "urn:visionflow:linked:5-g-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Slicing]]",
      "resolved": "urn:visionflow:linked:network-slicing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Low Latency]]",
      "resolved": "urn:visionflow:linked:low-latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[5G]]",
      "resolved": "urn:visionflow:linked:5-g",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:linked:telepresence",
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
  - 5G telepresence is the delivery of real-time immersive communication over fifth-generation mobile networks, using their higher bandwidth and lower latency to support volumetric and high-resolution remote presence on mobile devices.

- ### Semantic Classification
  - owl-class:: metaverse:TELE1535gtelepresence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[5G]]
  - requires:: [[5G Network]], [[Network Slicing]]
  - enables:: [[Low Latency]]

- ### Content
  - 5G telepresence uses fifth-generation cellular networks to carry immersive communication streams such as volumetric video and high-resolution real-time media to mobile and untethered devices. The increased throughput and reduced round-trip latency of 5G make demanding telepresence formats feasible without a fixed connection.
  - Network slicing and edge computing are often combined with 5G to reserve capacity and reduce processing distance for these flows. Practical quality still depends on radio conditions, cell loading and the placement of edge resources relative to the user.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
