public:: true

# GPU Rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gpu-rendering",
  "@type": "Page",
  "vc:slug": "gpu-rendering",
  "title": "GPU Rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-rendering",
  "@type": "Class",
  "label": "GPU Rendering",
  "definition": "GPU rendering is the computation of images from 2D or 3D scene descriptions using the massively parallel processing units of a graphics processing unit rather than the CPU. By executing shading, rasterisation, and ray-tracing workloads across thousands of cores, it delivers real-time interactive graphics and accelerates offline rendering. It is foundational to game engines, visualisation, and digital-content creation tools.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:animation-software", "label": "Animation Software"}, {"@id": "urn:ngm:class:unreal-engine", "label": "Unreal Engine"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GPU rendering uses the parallel cores of a graphics card to compute images; it is required by [[Animation Software]] for fast viewport and final-frame output and by [[Unreal Engine]] for real-time interactive rendering.
- ### Content
  - Real-time GPU rendering rasterises geometry and runs programmable shaders per frame, while modern hardware adds dedicated ray-tracing and tensor cores for global illumination and AI denoising. Offline GPU renderers trade interactivity for physical accuracy, accelerating path tracing far beyond CPU-only pipelines. Throughput depends on memory bandwidth, VRAM capacity, and effective parallelism, making scene optimisation and level-of-detail management important.
