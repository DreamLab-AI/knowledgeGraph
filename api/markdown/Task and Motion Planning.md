
Task and motion planning is an approach in robotics that combines high-level symbolic task planning with low-level geometric motion planning to produce fully executable robot plans. It jointly addresses what actions to perform and how to physically execute each movement, interleaving logical goal satisfaction with collision-free trajectory synthesis.

- ### Semantic Classification

- ### Content
  - Task and motion planning interleaves symbolic reasoning about the sequence of actions with geometric reasoning about feasible movements. A plan must satisfy both the logical goals of a task and the physical constraints of the robot and its environment.
  - The combined problem is challenging because choices at the task level affect whether motions are achievable, and vice versa. Methods search across both layers, checking that each proposed action can be realised by a collision-free motion.

- ### Provenance

