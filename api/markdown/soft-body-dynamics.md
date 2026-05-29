- ### Definition
  - Physics simulation of deformable objects like cloth, flesh, or elastic materials, modeling realistic deformation and dynamic behavior in virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:SoftBodyDynamics
  - owl-role:: Process
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Content
  Soft Body Dynamics encompasses techniques for simulating deformable materials in real time or near-real time. Common approaches include mass-spring systems (computationally cheap but prone to stiffness artefacts), position-based dynamics (PBD, widely used in games for cloth and hair), and finite element methods (FEM, more physically accurate but costlier). GPU-accelerated compute shaders enable interactive rates even for complex meshes, making soft body effects practical in XR and metaverse environments.

  Applications span character clothing and hair simulation, realistic injury or deformation feedback in training simulations, and environmental effects such as foliage movement or soft terrain. Integration with rigid body pipelines through constraint solvers allows hybrid scenes where deformable and non-deformable objects interact coherently, a requirement for high-fidelity embodied AI and digital twin simulations.

- ### Provenance
  - sources:: [[Physics Engine]], [[Game Physics]]
  - migration-date:: 2026-04-26T00:00:00Z