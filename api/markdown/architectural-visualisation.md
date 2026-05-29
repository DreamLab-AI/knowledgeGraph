- ### Definition
  - Architectural visualisation is the discipline of producing photorealistic or stylised two- and three-dimensional representations of proposed buildings, interiors, and urban environments to communicate design intent to clients, planners, and the public before construction. It combines techniques from 3D modelling, physically based rendering, and real-time graphics to produce still images, animations, and interactive walkthroughs. Advances in real-time rendering engines and spatial computing have extended the discipline to include immersive virtual reality experiences and augmented reality overlays on physical construction sites.

- ### Semantic Classification
  - owl-class:: architectural-visualisation:Architectural Visualisation
  - owl-role:: Concept

- ### Relationships
  - uses [[Real-Time Rendering]]
  - uses [[3D Model]]
  - relatedTo [[BIM Virtual Model]]
  - relatedTo [[Augmented Reality]]
  - enables [[Digital Twin]]

- ### Content
  - Architectural visualisation has undergone a significant technical shift from offline CPU-based ray tracing — where a single high-quality frame could take hours to render — to GPU-accelerated real-time rendering in engines such as Unreal Engine and Unity. Path tracing, a physically based algorithm that simulates light transport by tracing probabilistic paths from the camera, now runs interactively on modern hardware, enabling clients to explore proposed buildings with lighting, materials, and furniture in real time rather than waiting for overnight render farms.
  - The workflow typically begins with a BIM (Building Information Modelling) model in software such as Revit or ArchiCAD, which is exported and optimised for the rendering environment: geometry is decimated, materials are replaced with render-ready PBR (physically based rendering) shaders, and scene lighting is configured using HDRI skies or physically simulated artificial lights. Scanned or procedurally generated vegetation, people, and vehicles populate the scene to ground the design in realistic context.
  - Emerging applications include virtual reality design reviews where architects and clients navigate full-scale digital models wearing VR headsets, and augmented reality site visualisation where proposed structures are overlaid on live construction photos or video feeds using geospatial alignment. Generative AI is beginning to accelerate the production of material variations, interior decoration concepts, and façade alternatives, shortening the pre-design exploration phase.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z