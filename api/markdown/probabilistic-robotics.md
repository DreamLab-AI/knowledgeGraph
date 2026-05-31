- ### Definition
  - Probabilistic robotics is an approach to robot perception and control that represents uncertainty explicitly using probability distributions, and reasons about state and action through Bayesian estimation.

- ### Semantic Classification
  - owl-class:: robotics:ProbabilisticRobotics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Particle Filter]]
  - requires:: [[Bayesian Inference]], [[Probability Theory]]
  - enables:: [[Localization]], [[SLAM]]

- ### Content
  - Probabilistic robotics models sensor noise, actuation error and incomplete knowledge as probability distributions over robot and world state, rather than assuming exact values. Estimation algorithms such as Bayes filters update these distributions as measurements and control inputs arrive.
  - This framework underlies modern localisation, mapping and tracking methods, where maintaining and propagating uncertainty is essential to reliable behaviour. Particle filters and Kalman-family filters are common concrete realisations of its principles.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z