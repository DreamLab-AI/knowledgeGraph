- ### Definition
  - A physics simulation engine is software that computes the motion and interaction of objects according to physical laws, such as rigid body dynamics and collisions. It is used in games, robotics, and engineering.

- ### Semantic Classification
  - owl-class:: general:PhysicsSimulationEngine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Simulation]]
  - bridges-to:: [[3D Engine]]
  - requires:: [[Rigid Body Dynamics]]
  - enables:: [[Simulation Environment]]

- ### Content
  - A physics simulation engine integrates equations of motion over time to predict how objects move, collide, and respond to forces. It handles rigid bodies, constraints, and contact resolution, and some engines also model soft bodies and fluids.
  - These engines provide realistic behaviour for games and a testing ground for robotics, where control software can be evaluated before deployment. Accuracy and stability of the numerical methods affect how faithfully the simulation matches reality.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Physics_engine]], [[https://pybullet.org]]
  - migration-date:: 2026-05-29T00:00:00Z