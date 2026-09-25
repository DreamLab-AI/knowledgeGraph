Soft Body Dynamics is the branch of physics simulation concerned with deformable objects — including cloth, flesh, elastic materials, vegetation, and fluids — that change shape in response to forces, collisions, and internal stresses. Unlike rigid body simulation, soft body methods must track per-vertex or per-element deformation states, typically using mass-spring networks, finite element methods (FEM), or position-based dynamics (PBD). It is essential for visual fidelity in real-time virtual environments, character animation, and embodied AI simulations.

### Semantic Classification

### Content

Soft Body Dynamics encompasses techniques for simulating deformable materials in real time or near-real time. Common approaches include mass-spring systems (computationally cheap but prone to stiffness artefacts), position-based dynamics (PBD, widely used in games for cloth and hair), and finite element methods (FEM, more physically accurate but costlier). GPU-accelerated compute shaders enable interactive rates even for complex meshes, making soft body effects practical in XR and metaverse environments.

Applications span character clothing and hair simulation, realistic injury or deformation feedback in training simulations, and environmental effects such as foliage movement or soft terrain. Integration with rigid body pipelines through constraint solvers allows hybrid scenes where deformable and non-deformable objects interact coherently, a requirement for high-fidelity embodied AI and digital twin simulations.

### Provenance

