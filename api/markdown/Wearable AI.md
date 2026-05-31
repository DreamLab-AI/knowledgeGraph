public:: true

# Wearable AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dbc68f421713b4f4545cf16dac2f0388a67d3bad91d3593154d0fdf4aa5f9aa0",
  "@type": "Page",
  "vc:slug": "wearable-ai",
  "title": "Wearable AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:narrow-ai",
      "vc:label": "Narrow AI"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing-domain",
      "vc:label": "Spatial Computing Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Wearable AI"
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
  "@id": "urn:ngm:class:wearable-ai",
  "@type": "Class",
  "label": "Wearable AI",
  "definition": "Wearable AI refers to body-worn devices that run or stream machine learning to sense context, recognise speech and imagery, and present information, often through glasses, earbuds or wrist devices.",
  "domain": "metaverse",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing-domain",
      "label": "Spatial Computing Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:wearable-ai:29758d504972",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dbc68f421713b4f4545cf16dac2f0388a67d3bad91d3593154d0fdf4aa5f9aa0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:linked:edge-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Narrow AI]]",
      "resolved": "urn:visionflow:linked:narrow-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Domain]]",
      "resolved": "urn:visionflow:linked:spatial-computing-domain",
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
  - Wearable AI refers to body-worn devices that run or stream machine learning to sense context, recognise speech and imagery, and present information, often through glasses, earbuds or wrist devices.

- ### Semantic Classification
  - owl-class:: metaverse:WearableAI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Spatial Computing Domain]]
  - bridges-to:: [[Computer Vision]], [[Narrow AI]]
  - requires:: [[Edge Computing]]
  - enables:: [[Augmented Reality]]

- ### Content
  - Wearable AI combines onboard sensors with local and cloud inference to provide assistance such as live transcription, visual recognition and contextual prompts. Constraints on power, thermals and latency push much processing toward edge computing.
  - Smart glasses are a leading form factor, blending computer vision and language models with augmented reality overlays. The category connects edge computing, perception and immersive display.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
