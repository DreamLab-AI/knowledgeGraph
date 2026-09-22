public:: true

# Real-Time Rendering Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-rendering-engine",
  "@type": "Page",
  "vc:slug": "real-time-rendering-engine",
  "title": "Real-Time Rendering Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-rendering-engine",
  "@type": "Class",
  "label": "Real-Time Rendering Engine",
  "definition": "A real-time rendering engine generates images from 3D scene descriptions fast enough to sustain interactive frame rates, typically 30 to 120+ frames per second. It coordinates GPU rasterisation or ray tracing, shading, lighting, and post-processing within a fixed per-frame time budget. It is the visual core of game engines, virtual production, and immersive metaverse experiences.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metaverse-content-pipeline", "label": "Metaverse Content Pipeline"},
      {"@id": "urn:ngm:class:virtual-production-volume", "label": "Virtual Production Volume"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A real-time rendering engine produces interactive-rate imagery from 3D scenes within a fixed frame budget. It is required by a [[Metaverse Content Pipeline]] and by a [[Virtual Production Volume]] for live in-camera VFX.
- ### Content
  - Modern engines combine deferred or forward rendering, physically based shading, and increasingly hardware ray tracing with denoising. Maintaining frame-rate stability demands level-of-detail, culling, and GPU-driven pipelines. In virtual production, the engine drives LED walls in sync with camera tracking for real-time, photoreal backgrounds.
