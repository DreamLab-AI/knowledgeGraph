
A shading model is a mathematical description of how a surface reflects and emits light, determining the colour and intensity seen at each point given the lighting and viewing geometry. It encapsulates a bidirectional reflectance distribution function together with parameters such as albedo, roughness and metalness. Shading models range from simple empirical formulations to physically based formulations grounded in energy conservation.

- ### Overview
  - Shading models answer the central rendering question: given the lights, the surface and the camera, what colour reaches the eye? They formalise reflection, scattering and emission as functions of material parameters and geometry.
  - Classic empirical models such as Lambert and Phong are computationally cheap but only loosely physical. Physically based shading models instead enforce energy conservation and reciprocity, yielding more consistent, realistic results across lighting conditions.
  - The chosen model defines the meaning of material authoring parameters like base colour, roughness and metalness, which is why interchange formats standardise on a small number of well-defined shading models.
- ### Key aspects
  - Reflectance function: a BRDF maps incoming to outgoing radiance per direction.
  - Parameterisation: albedo, roughness, metalness and normals drive appearance.
  - Energy conservation: physically based models never reflect more light than received.
  - Specular and diffuse terms: surfaces combine sharp highlights with broad scattering.
  - Real-time vs offline: trade-offs in fidelity against per-pixel cost.
- ### Mechanisms
  - Microfacet BRDF evaluation in fragment or compute shaders.
  - Texture sampling to vary material parameters across a surface.
  - Image-based lighting and global illumination to supply incident radiance.
  - Tone mapping to fit high-dynamic-range shading output to displays.
- ### Applications
  - Real-time rendering in game and XR engines.
  - Offline rendering for film and product visualisation.
  - Material authoring and interchange across content pipelines.
- ### Provenance

