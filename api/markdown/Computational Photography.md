public:: true

# Computational Photography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28b1c598ddabee92696abc238f4a386a13fb9bbc463c4ce452c248c4b045fed7",
  "@type": "Page",
  "vc:slug": "computational-photography",
  "title": "Computational Photography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Computational Photography"
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
  "@id": "urn:ngm:class:computational-photography",
  "@type": "Class",
  "label": "Computational Photography",
  "definition": "A set of techniques that use digital computation to extend or improve the capabilities of a camera beyond what its optics and sensor alone can capture. It combines multiple exposures, sensor data, and algorithms to form a final image.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:image-processing",
      "label": "Image Processing"
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
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
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
  "@id": "urn:visionflow:annotation:link-resolutions:computational-photography:08154070a170",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:28b1c598ddabee92696abc238f4a386a13fb9bbc463c4ce452c248c4b045fed7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:linked:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Processing]]",
      "resolved": "urn:visionflow:linked:image-processing",
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
  - A set of techniques that use digital computation to extend or improve the capabilities of a camera beyond what its optics and sensor alone can capture. It combines multiple exposures, sensor data, and algorithms to form a final image.

- ### Semantic Classification
  - owl-class:: computer-vision:ComputationalPhotography
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Image Processing]]
  - bridges-to:: [[Image Processing]]
  - requires:: [[Camera]]
  - enables:: [[Computer Vision]]

- ### Content
  - Computational photography includes methods such as high dynamic range imaging, multi-frame noise reduction, panorama stitching, and depth estimation from multiple lenses. These techniques are common in smartphone cameras, where small sensors and fixed optics are compensated for by software.
  - The field draws on optics, signal processing, and machine learning. Modern pipelines often fuse several frames captured in rapid succession and apply learned models to recover detail, correct colour, and simulate effects such as shallow depth of field.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
