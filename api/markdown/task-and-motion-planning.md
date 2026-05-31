- ### Definition
  - Task and motion planning is an approach in robotics that combines high-level task planning with low-level motion planning to produce executable plans. It addresses both what to do and how to move.

- ### Semantic Classification
  - owl-class:: robotics:TaskandMotionPlanning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - bridges-to:: [[Pathfinding Algorithm]]
  - requires:: [[Planning]]
  - enables:: [[Robot Control]]

- ### Content
  - Task and motion planning interleaves symbolic reasoning about the sequence of actions with geometric reasoning about feasible movements. A plan must satisfy both the logical goals of a task and the physical constraints of the robot and its environment.
  - The combined problem is challenging because choices at the task level affect whether motions are achievable, and vice versa. Methods search across both layers, checking that each proposed action can be realised by a collision-free motion.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Motion_planning]], [[https://arxiv.org/abs/2010.01083]]
  - migration-date:: 2026-05-29T00:00:00Z