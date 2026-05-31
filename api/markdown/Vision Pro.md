public:: true

# Vision Pro
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a40cfb060e186c395796e38339bdd9777462968fb72b0a51b3aa8902c8154e2d",
  "@type": "Page",
  "vc:slug": "vision-pro",
  "title": "Vision Pro",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:apple",
      "vc:label": "Apple"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality",
      "vc:label": "Mixed Reality"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vision Pro"
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
  "@id": "urn:ngm:class:vision-pro",
  "@type": "Class",
  "label": "Vision Pro",
  "definition": "A mixed reality headset developed by Apple, announced in 2023 and released in 2024. It blends digital content with the user's surroundings using high-resolution displays and eye, hand, and voice input.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mixed-reality",
      "label": "Mixed Reality"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vision-pro:b75a29532fa5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a40cfb060e186c395796e38339bdd9777462968fb72b0a51b3aa8902c8154e2d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Apple]]",
      "resolved": "urn:visionflow:linked:apple",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:linked:mixed-reality",
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
  - A mixed reality headset developed by Apple, announced in 2023 and released in 2024. It blends digital content with the user's surroundings using high-resolution displays and eye, hand, and voice input.

- ### Semantic Classification
  - owl-class:: metaverse:VisionPro
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Mixed Reality]]
  - bridges-to:: [[Apple]]
  - requires:: [[Spatial Computing]]
  - enables:: [[Augmented Reality]]

- ### Content
  - Apple Vision Pro is a head-mounted device that Apple describes as a spatial computer. It uses dual high-resolution displays, an array of cameras and sensors, and a passthrough mode that shows the surrounding environment with digital content overlaid.
  - Interaction relies on tracking of the eyes, hands, and voice rather than handheld controllers. It runs visionOS and was announced in June 2023, with a release in the United States in early 2024.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
