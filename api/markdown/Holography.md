public:: true

# Holography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:512c7b1f6a2fa6d1266eb05db9be5a8f1ab263b6299249cbbe5facca45e200ca",
  "@type": "Page",
  "vc:slug": "holography",
  "title": "Holography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:linked:holographic-display",
      "vc:label": "Holographic Display"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
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
      "vc:value": "Holography"
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
  "@id": "urn:ngm:class:holography",
  "@type": "Class",
  "label": "Holography",
  "definition": "A technique for recording and reconstructing the full wavefront of light, including both amplitude and phase, to reproduce three-dimensional images. It records the interference pattern between a reference beam and light scattered from an object.",
  "domain": "spatial-computing",
  "maturity": "established",
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
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:holographic-display",
        "label": "Holographic Display"
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
  "@id": "urn:visionflow:annotation:link-resolutions:holography:d47b58a99080",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:512c7b1f6a2fa6d1266eb05db9be5a8f1ab263b6299249cbbe5facca45e200ca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:linked:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Holographic Display]]",
      "resolved": "urn:visionflow:linked:holographic-display",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Processing]]",
      "resolved": "urn:visionflow:linked:image-processing",
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
  - A technique for recording and reconstructing the full wavefront of light, including both amplitude and phase, to reproduce three-dimensional images. It records the interference pattern between a reference beam and light scattered from an object.

- ### Semantic Classification
  - owl-class:: optics:Holography
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Image Processing]]
  - requires:: [[Camera]]
  - enables:: [[Holographic Display]]

- ### Content
  - Holography was developed by Dennis Gabor, who received the Nobel Prize in Physics in 1971 for the invention. It captures phase information that ordinary photography discards, which is why a hologram can present different views of a scene as the observer moves.
  - Optical holography records interference patterns on a photosensitive medium, while digital holography captures them on an image sensor and reconstructs the wavefront numerically. The latter underpins research into holographic displays and microscopy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
