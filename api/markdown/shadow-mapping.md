- ### Definition
  - [[Shadow Mapping]] is a real-time graphics technique that renders a scene's depth from each light's perspective into a [[Depth Buffer]] (the shadow map).
  - During the main [[Rasterisation]] pass, each fragment's depth is compared against the shadow map to determine whether it is in shadow.
  - It contrasts with [[Ray Tracing]] (physically correct but expensive) and [[Shadow Volumes]] (stencil-based, geometry-intensive).
  - Cascaded shadow maps extend the technique to handle the depth range of large outdoor scenes in [[Virtual Reality]] and game environments.

- ### Overview
  - Shadow mapping was introduced by Lance Williams in 1978 and became dominant in real-time rendering during the GPU era.
  - Modern implementations use percentage-closer filtering (PCF) to soften shadow edges without requiring true area-light sampling.
  - Cascaded Shadow Maps (CSM) partition the view frustum into depth slices, each with a separately rendered shadow map, preserving quality across near and far distances.
  - Variance Shadow Maps (VSM) store depth moments in the shadow map, enabling GPU-accelerated blur for soft shadows.

- ### Key Aspects
  - **Shadow acne**: self-shadowing artefacts caused by depth precision limits; mitigated by depth bias and slope-scale bias.
  - **Peter-panning**: over-biasing causes shadows to detach from casters; requires careful bias tuning.
  - **Perspective aliasing**: shadow map texels project unequally across the scene; CSM and perspective warping reduce this.
  - **PCF filtering**: samples neighbouring shadow map texels to produce soft shadow penumbrae.
  - **Performance**: single-light shadow mapping requires one additional render pass; multiple lights scale linearly.

- ### Mechanisms
  - The [[Graphics Pipeline]] renders the scene geometry from the light's view-projection matrix, writing depth to a shadow map texture.
  - In the main pass, fragment positions are transformed into light space; depth comparison determines shadowing.
  - [[Shader]] code implements the depth comparison, bias correction, and optional PCF kernel.
  - [[Texture Mapping]] hardware accelerates bilinear depth fetches on modern [[Gpu]] architectures.

- ### Applications
  - Real-time shadow rendering in [[Game Engine]] (Unreal Engine, Unity) and [[Virtual Reality]] applications.
  - [[Augmented Reality]] scene integration where virtual objects must cast shadows consistent with real-world lighting.
  - Architectural visualisation and product rendering requiring interactive shadow previews.
  - Simulation and training environments demanding plausible, low-latency lighting.

- ### Relationships
  - contrastsWith:: [[Ray Tracing]]
  - contrastsWith:: [[Shadow Volumes]]
  - relatedTo:: [[Rasterisation]]
  - relatedTo:: [[Depth Buffer]]
  - relatedTo:: [[Global Illumination]]
  - relatedTo:: [[Real-Time Rendering]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Game Engine]]
  - hasPart:: [[Depth Buffer]]
  - hasPart:: [[Shader]]
  - uses:: [[Gpu]]
  - uses:: [[Texture Mapping]]
  - enables:: [[Photorealistic Rendering]]
  - enables:: [[Dynamic Lighting]]
  - dependsOn:: [[Graphics Pipeline]]

- ### Provenance
  - updated:: 2026-06-15