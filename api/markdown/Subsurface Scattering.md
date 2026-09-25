Subsurface scattering is a light-transport phenomenon in which light penetrates the surface of a translucent material, scatters within it, and exits at a different point, producing the soft, diffuse glow characteristic of skin, wax, marble, and milk. In computer graphics it is modelled as part of global illumination to render such materials realistically, since a purely surface-level reflectance model cannot capture the way light bleeds beneath and through them. Approaches range from physically based diffusion and path-traced volumetric scattering to fast screen-space and pre-integrated approximations used in real-time rendering. It is essential to photorealistic depiction of organic and semi-transparent matter.

- Subsurface scattering is the transport of light beneath a translucent surface, where it scatters internally and re-emerges elsewhere, giving materials like skin and wax their soft glow. It is a component of [[Global Illumination]] essential to [[Physically Based Rendering]].
- Capturing it requires modelling light below the surface rather than only the surface reflectance described by a [[BRDF]].

### Overview

- When light strikes a translucent medium, only part reflects at the surface; the rest enters, bounces among the material's internal structure, and exits at nearby points, softening shadows and shading.
- A pure surface model cannot reproduce this, so renderers add a volumetric or diffusion term that accounts for the spread of light inside the material.
- Methods trade fidelity for speed, from path-traced volumetric scattering in offline rendering to pre-integrated and screen-space approximations driving believable skin in [[Real-Time Rendering]].

### Mechanisms

- Diffusion approximations of multiple internal scattering events.
- Bidirectional surface scattering distribution functions (BSSRDF).
- Screen-space and pre-integrated [[Shader]] approximations for real time.
- Path-traced volumetric scattering for offline photorealism.

### Applications

- Realistic skin, eyes, and faces in characters.
- Foliage, wax, marble, jade, and food rendering.
- Medical and scientific visualisation of tissue.
- Material authoring within a [[Rendering Pipeline]].

### Provenance

