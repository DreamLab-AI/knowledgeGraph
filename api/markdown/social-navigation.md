- ### Definition
  - Robot navigation strategies that account for social norms, human comfort, and contextual appropriateness when moving through human-populated environments.

- ### Semantic Classification
  - owl-class:: robotics:SocialNavigation
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Social Navigation goes beyond obstacle avoidance by treating the humans sharing a space as dynamic social agents with expectations about interpersonal distance, movement trajectories, and contextual cues. Hallway passing, doorway negotiation, and group approach scenarios each carry implicit behavioural scripts that socially aware robots must learn and respect to avoid alarming or obstructing people.

  Techniques include learning-based approaches (reinforcement learning with social reward functions), model-based prediction of pedestrian trajectories using social force models, and real-time re-planning with SLAM to maintain situational awareness in dynamic environments. Evaluation metrics combine traditional navigation efficiency (path length, time to goal) with human-centric measures such as minimum approach distance, jerk profiles, and subjective comfort ratings gathered in user studies.

- ### Provenance
  - sources:: [[HRI]], [[Mobile Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z