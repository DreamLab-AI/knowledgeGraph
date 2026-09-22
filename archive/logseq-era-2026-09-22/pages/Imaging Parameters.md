public:: true

# Imaging Parameters
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0cd495a4bda28dc20de04bcb01cd3926fbcc4963da3eddb3a24e8ec0b0b59667",
  "@type": "Page",
  "vc:slug": "imaging-parameters",
  "title": "Imaging Parameters",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9634"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Imaging Parameters"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:imaging-parameters",
  "@type": "Class",
  "label": "Imaging Parameters",
  "definition": "Imaging Parameters are the configurable settings—such as exposure time, aperture, ISO, focal length, white balance, and sensor gain—that govern how a camera or depth sensor captures light and produces a digital image. In spatial computing pipelines, correct imaging parameter calibration is essential for photogrammetric reconstruction, volumetric capture, and computer-vision model accuracy across varying lighting conditions.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:camera-parameters", "label": "Camera Parameters"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:image-classification", "label": "Image Classification"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:imaging-parameters:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0cd495a4bda28dc20de04bcb01cd3926fbcc4963da3eddb3a24e8ec0b0b59667"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Imaging Parameters are the configurable settings—such as exposure time, aperture, ISO, focal length, white balance, and sensor gain—that govern how a camera or depth sensor captures light and produces a digital image. In spatial computing pipelines, correct imaging parameter calibration is essential for photogrammetric reconstruction, volumetric capture, and computer-vision model accuracy across varying lighting conditions.

- ### Semantic Classification
  - owl-class:: spatial-computing:ImagingParameters
  - owl-role:: concept

- ### Relationships
  - partOf [[Camera]]
  - relatedTo [[Camera Parameters]]
  - relatedTo [[Photogrammetry]]
  - enables [[Image Classification]]
  - enables [[Real-Time Rendering]]

- ### Content

  ## Overview

  Imaging Parameters define the physical and digital settings that shape raw sensor output. In XR and volumetric capture systems, imaging parameters must be tightly coordinated across multi-camera rigs to ensure consistent exposure and colour balance for reconstruction algorithms. Automated exposure control and HDR capture are increasingly important for handling the wide dynamic range encountered in outdoor spatial-computing deployments.

  #### Related Concepts
  - [[Camera]]
  - [[Camera Parameters]]
  - [[Photogrammetry]]
  - [[Image Classification]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
