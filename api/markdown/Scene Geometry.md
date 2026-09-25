Scene geometry is the structured description of the spatial shape, surfaces, and arrangement of objects within a three-dimensional environment. It captures positions, depths, surface orientations, and connectivity needed to render, simulate, or reason about a scene. Accurate scene geometry underpins realistic lighting, occlusion, collision, and interaction in spatial computing and computer graphics applications.

### Overview

- Scene geometry encodes where surfaces are and how they are oriented, forming the substrate on which appearance, lighting, and physics are computed.
- It can be represented as meshes, point clouds, depth maps, or implicit surfaces, each trading fidelity against memory and editability.
- Reconstructing scene geometry from sensors requires depth estimation, photogrammetry, or SLAM to infer structure from observations.

### Key aspects

- Surface and volume representations such as meshes, point clouds, and implicit fields.
- Depth and occlusion relationships that determine visibility from a viewpoint.
- Spatial registration that aligns partial observations into a coherent global structure.
- Topological connectivity that supports collision, navigation, and physical simulation.

### Applications

- Realistic rendering, shadowing, and ambient occlusion in graphics engines.
- Augmented and mixed reality where virtual content must respect real-world surfaces.
- Robotics and navigation that rely on reconstructed geometry for planning and interaction.

### Provenance

