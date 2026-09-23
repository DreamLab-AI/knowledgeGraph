
Shadow Mapping is a real-time computer graphics technique for rendering shadows by rendering the scene from the perspective of each light source into a depth texture (the shadow map), then comparing scene-point depth values against that map during the main render pass to determine visibility. It is the dominant method for dynamic shadows in games and real-time rendering engines due to its GPU efficiency and flexibility. Artefacts such as shadow acne and perspective aliasing are mitigated through techniques like bias adjustment, percentage-closer filtering, and cascaded shadow maps. The technique is fundamental to photorealistic rendering in spatial computing and XR applications.

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

- ### Provenance

