public:: true

# NeRF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ne-rf",
  "@type": "Page",
  "vc:slug": "ne-rf",
  "title": "NeRF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ne-rf",
  "@type": "Class",
  "label": "NeRF",
  "definition": "Neural Radiance Field (NeRF) is a neural scene representation technique that encodes a continuous volumetric scene as a multi-layer perceptron mapping 3D coordinates and viewing directions to colour and density values, enabling photorealistic novel view synthesis from a sparse set of input images. Originally introduced by Mildenhall et al. in 2020, NeRF uses volumetric ray marching during rendering to integrate along rays through the implicit field, producing high-fidelity reconstructions without explicit geometry. It has catalysed a broad family of neural rendering methods spanning real-time variants, dynamic scenes, and large-scale outdoor capture.",
  "domain": "graphics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:neural-radiance-field", "label": "Neural Radiance Field"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:novel-view-synthesis", "label": "Novel View Synthesis"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:volumetric-capture", "label": "Volumetric Capture"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[NeRF]] (Neural Radiance Field) is a [[Neural Radiance Field]] scene representation that uses a [[Neural Network]] to map continuous 3D positions and ray directions to colour and volumetric density, enabling photorealistic [[Novel View Synthesis]] by integrating along rendered rays through the implicit field.

- ### Relationships
  - NeRF is a member of the broader [[Neural Radiance Fields]] family and employs [[Differentiable Rendering]] and [[Deep Learning]] optimisation to reconstruct scenes from multi-view images. It enables [[Novel View Synthesis]] and is closely related to [[Volumetric Capture]] pipelines. Downstream applications include [[Augmented Reality]] telepresence, digital twin construction, and [[Photorealistic Rendering]] for film and games. Its continuous implicit representation contrasts with explicit [[Point Cloud]] and mesh-based approaches.

- ### Content
  - NeRF was introduced in the 2020 ECCV paper "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis" by Mildenhall, Tancik, Barron, Ramamoorthi, and Ng. The technique departed from prior multi-view stereo and photogrammetry approaches by encoding scene geometry and appearance entirely within the weights of a multilayer perceptron, eliminating the need for explicit mesh or voxel grid representations. This enabled smooth, continuous reconstructions with fine specular detail that prior methods struggled to capture.

  - The original NeRF architecture maps (x, y, z, θ, φ) — three spatial coordinates and two viewing direction angles — to RGB colour and volumetric density (σ). A hierarchical volumetric ray marching renderer numerically integrates colour and transmittance along each ray using the predicted densities, producing a pixel colour differentiable with respect to the network weights. Training minimises photometric loss across held-out poses. Positional encoding via Fourier features overcomes spectral bias in MLPs, enabling the network to represent high-frequency scene detail.

  - NeRF has spawned hundreds of variants addressing its original limitations: Instant-NGP (2022) reduced training from hours to seconds using hash-encoded features; Nerfacto and nerfstudio provided accessible research frameworks; 3D Gaussian Splatting (2023) replaced the implicit MLP with explicit Gaussian primitives achieving real-time rendering at competitive quality. Applications span visual effects (used in major film productions), robotic navigation via implicit map representations, medical imaging reconstruction, heritage preservation, and avatars for [[Augmented Reality]] and [[Metaverse]] experiences.

  - As of 2024-2025, the field has largely transitioned toward 3D Gaussian Splatting and hybrid neural-explicit representations for real-time use cases, while NeRF-derived architectures remain dominant for high-fidelity offline rendering and generalisation to novel scenes from very few views. Foundation model-scale generalised NeRFs trained on internet-scale image datasets (e.g., ZeroNeRF, pixelNeRF) are enabling single-image 3D reconstruction, and integration with diffusion models is blurring the boundary between generation and reconstruction.

