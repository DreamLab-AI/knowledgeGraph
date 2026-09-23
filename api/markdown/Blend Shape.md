
A blend shape, also called a morph target, is a stored deformation of a 3D mesh that is blended with a base shape by a weighted interpolation of vertex positions. By combining multiple blend shapes at varying weights, animators produce smooth transitions between expressions and poses without altering the mesh topology. Blend shapes are central to facial animation, where subtle muscle movements are captured as named targets driven by animation rigs or performance capture.

- ### Overview
  - Blend shapes capture target poses of a mesh, such as a smile or a raised brow, as differences from a neutral base.
  - At render time, weights between zero and one mix several targets, producing continuous, controllable deformation.
  - Because topology stays constant, blend shapes preserve UVs and rigging, making them efficient for faces and soft deformations.
  - They are the workhorse of facial animation pipelines, often combined with skeletal rigs for full-body and head motion.
- ### Mechanisms
  - Vertex interpolation: per-vertex offsets blended linearly against the base mesh.
  - Weighted combination: multiple targets summed by independent weights to compose expressions.
  - Corrective targets: additional shapes that fix artefacts arising from combined deformations.
  - Rig binding: weights exposed as controls that animators or capture data drive over time.
  - Performance capture mapping: tracked facial markers mapped onto named blend shape weights.
- ### Applications
  - Realistic facial animation for film, games, and virtual production.
  - Driving expressive avatars in real-time social and immersive applications.
  - Lip-sync and viseme systems for speech-driven character animation.
  - Subtle soft-body deformations layered on top of skeletal rigs.
- ### Provenance

