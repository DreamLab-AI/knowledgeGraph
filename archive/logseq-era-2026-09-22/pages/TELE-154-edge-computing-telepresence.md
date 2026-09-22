public:: true

# TELE-154-edge-computing-telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:21a8178a8b2f4445a24ab5013c2acb3fd3e942378187dd975e8373393d0bfb4e",
  "@type": "Page",
  "vc:slug": "tele-154-edge-computing-telepresence",
  "title": "TELE-154-edge-computing-telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
    },
    {
      "@id": "urn:visionflow:linked:content-delivery-network",
      "vc:label": "Content Delivery Network"
    },
    {
      "@id": "urn:visionflow:linked:low-latency",
      "vc:label": "Low Latency"
    },
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
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
      "vc:value": "TELE-154-edge-computing-telepresence"
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
  "@id": "urn:ngm:class:tele-154-edge-computing-telepresence",
  "@type": "Class",
  "label": "TELE-154-edge-computing-telepresence",
  "definition": "Edge computing for telepresence places processing such as encoding, rendering and reconstruction close to users at the network edge to reduce latency and bandwidth for immersive remote communication.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:edge-computing",
      "label": "Edge Computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-154-edge-computing-telepresence:eea905f843ab",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:21a8178a8b2f4445a24ab5013c2acb3fd3e942378187dd975e8373393d0bfb4e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:linked:edge-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Delivery Network]]",
      "resolved": "urn:visionflow:linked:content-delivery-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Low Latency]]",
      "resolved": "urn:visionflow:linked:low-latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
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
  - Edge computing for telepresence places processing such as encoding, rendering and reconstruction close to users at the network edge to reduce latency and bandwidth for immersive remote communication.

- ### Semantic Classification
  - owl-class:: metaverse:TELE154edgecomputingtelepresence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Cloud Computing]]
  - requires:: [[Edge Computing]], [[Content Delivery Network]]
  - enables:: [[Low Latency]]

- ### Content
  - Edge computing for telepresence moves compute-intensive tasks, such as media encoding, 3D reconstruction and rendering, onto servers located near the user rather than in distant data centres. Shortening the processing distance lowers round-trip latency and can reduce the volume of data sent across the wider network.
  - This pattern is combined with mobile networks and content delivery infrastructure to support volumetric and neural telepresence on devices with limited local processing. Trade-offs include the cost and management of distributed edge resources and the need to route sessions to the nearest capable node.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
