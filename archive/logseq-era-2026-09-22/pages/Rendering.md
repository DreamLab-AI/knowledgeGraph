public:: true

# Rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-rendering",
  "@type": "Page",
  "vc:slug": "rendering",
  "title": "Rendering",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rendering",
  "@type": "Class",
  "label": "Rendering",
  "definition": "Rendering is the computational process of generating a two-dimensional image or display output from a scene description, encompassing geometry, materials, lighting, and camera parameters. Techniques range from real-time rasterisation on GPUs to offline ray tracing and neural rendering methods used in film and spatial computing applications. High-quality, low-latency rendering is critical for immersive virtual and augmented reality experiences.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:scene-representation", "label": "Scene Representation"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Rendering is the process of synthesising a visual image from a 3D scene description by computing the interaction of light with geometry and materials, forming the core of real-time graphics and spatial computing display pipelines.
