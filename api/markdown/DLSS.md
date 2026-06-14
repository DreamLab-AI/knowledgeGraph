public:: true

# DLSS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dlss",
  "@type": "Page",
  "vc:slug": "dlss",
  "title": "DLSS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dlss",
  "@type": "Class",
  "label": "DLSS",
  "definition": "DLSS (Deep Learning Super Sampling) is NVIDIA's family of AI-based rendering techniques that use neural networks running on dedicated tensor hardware to reconstruct high-resolution, high-frame-rate images from lower-resolution rendered inputs. By upscaling, accumulating temporal information, and generating intermediate frames, DLSS delivers image quality approaching or exceeding native rendering at a fraction of the GPU cost, enabling demanding effects such as real-time ray tracing to run smoothly. It exemplifies the integration of learned models into the real-time graphics pipeline.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technology", "label": "Rendering Technology"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:gpu", "label": "GPU"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - DLSS is NVIDIA's family of AI rendering techniques that use neural networks on tensor hardware to reconstruct high-resolution, high-frame-rate images from lower-resolution renders, including upscaling and frame generation.

- ### Relationships
  - DLSS is a subclass of [[Rendering Technology]] and uses [[Deep Learning]] models executed on [[GPU]] tensor cores. It enables higher-quality [[Real-Time Rendering]] at lower cost and relates to [[Neural Rendering]] research and the conventional [[Rendering Pipeline]] into which it integrates as a post-render reconstruction stage.

- ### Content
  - DLSS reframes a brute-force problem as a learning problem. Rendering at high resolution with modern effects is enormously expensive, and the cost scales steeply with pixel count and frame rate. Rather than render every pixel at full resolution, DLSS renders fewer pixels and uses a neural network to reconstruct the missing detail, exploiting the fact that the information needed is highly predictable from the rendered samples, motion vectors, and accumulated history of previous frames.

  - The approach evolved across generations. Early versions trained per-game; later super-resolution releases generalised to a single robust model that upscales from a low-resolution input using temporal accumulation, combining the current frame with motion-compensated samples from prior frames to recover sub-pixel detail and stability. Subsequent additions introduced frame generation, where the network synthesises entirely new intermediate frames between rendered ones to multiply perceived frame rate, and ray reconstruction, which denoises and reconstructs ray-traced lighting with a learned model.

  - The technique depends on dedicated tensor hardware that executes the neural inference fast enough to fit within a frame's millisecond budget, integrating the model as a stage in the rendering pipeline rather than an offline process. It also relies on engine cooperation — accurate motion vectors and depth, and correct handling of transparency and particles — which is why DLSS is integrated at the game-engine level rather than applied blindly to final images.

  - DLSS and its competitors mark a broader shift in graphics toward learned reconstruction. By trading a modest, well-targeted neural computation for a large reduction in conventional rendering work, these techniques have made real-time ray tracing and high-refresh, high-resolution gameplay practical on consumer hardware. The trade-offs — occasional temporal artefacts, latency introduced by frame generation, and dependence on vendor-specific hardware — define the active engineering frontier, but the underlying direction, blending neural models into the real-time pipeline, is now central to how interactive graphics advance.
