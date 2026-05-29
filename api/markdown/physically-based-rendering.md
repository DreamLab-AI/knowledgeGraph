- ### Definition
  - Physically Based Rendering (PBR) is a rendering methodology that simulates the physical behaviour of light interacting with materials by adhering to real-world optical principles such as energy conservation, microfacet theory, and the reflectance equation. PBR uses parameterised material models — typically albedo, metallic, roughness, and normal maps — to produce consistent, predictable visual results across varied lighting conditions. It is the standard material workflow for real-time 3D engines used in games, metaverse platforms, and digital twin visualisation.

- ### Semantic Classification
  - owl-class:: infrastructure:PhysicallyBasedRendering
  - owl-role:: Concept

- ### Relationships
  - requires [[Shader]]
  - requires [[Rendering Pipeline]]
  - enables [[Real-Time Rendering]]
  - enables [[3D Asset]]
  - relatedTo [[Ray Tracing]]
  - relatedTo [[Rendering Technique]]

- ### Content

  ## Overview

  Physically Based Rendering (PBR) is a rendering methodology that simulates the physical behaviour of light interacting with surfaces using principles derived from geometric optics and radiometry. The core PBR workflow parameterises surface materials through a small, physically meaningful set of maps — albedo (base colour), metallic (conductor vs. dielectric), roughness (surface micro-geometry), and normal (surface orientation perturbation) — which together drive bidirectional reflectance distribution function (BRDF) evaluation at each pixel. This approach produces materials that respond consistently and predictably to changes in lighting, enabling artists to design assets under one lighting condition and be confident they will appear correct in any environment. PBR has become the standard material workflow in game engines (Unreal Engine, Unity), metaverse platforms, and digital twin visualisation tools, and is embedded in the glTF 2.0 standard's material model, ensuring PBR assets are portable across conformant renderers.

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z