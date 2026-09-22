public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b32a323ef15535c33d5e65af2e95bc778ca0d87493749fe4d2d88533b007fc2a",
  "@type": "Page",
  "vc:slug": "sc-display-and-rendering",
  "title": "Display and Rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:sc-display-and-rendering",
  "label": "Display and Rendering",
  "definition": "Taxonomy hub for display and rendering technologies within spatial computing, encompassing the pipelines, hardware, and algorithms that transform scene geometry into visual output for AR, VR, and mixed reality experiences. This category bridges hardware display devices with software rendering techniques, covering both real-time and offline methods optimised for immersive perceptual fidelity.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"},
      {"@id": "urn:ngm:class:foveated-rendering", "label": "Foveated Rendering"},
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:display-hardware", "label": "Display Hardware"},
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:rasterization", "label": "Rasterization"},
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"},
      {"@id": "urn:ngm:class:vr-rendering-engine", "label": "VR Rendering Engine"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:ai-upscaling-and-super-resolution", "label": "AI Upscaling and Super-Resolution"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
