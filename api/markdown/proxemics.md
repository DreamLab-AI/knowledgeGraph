- ### Definition
  - Study and application of spatial relationships between humans and robots, including personal space, social distance, and comfort zones for effective human-robot interaction.

- ### Semantic Classification
  - owl-class:: robotics:Proxemics
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Proxemics as a discipline was established by anthropologist Edward T. Hall in the 1960s, who categorised the space around individuals into four zones: intimate (0–45 cm), personal (45 cm–1.2 m), social (1.2–3.6 m), and public (beyond 3.6 m). These boundaries vary across cultures, contexts, and individual preferences, making them probabilistic guidelines rather than hard constraints for robot designers.

  In social robotics and service robot deployments, proxemics informs both the planning of approach paths (how a robot navigates to a person) and the management of shared workspace (how a robot positions itself relative to bystanders). Robots that violate proxemic norms — by entering the intimate zone unexpectedly or maintaining uncomfortably close parallel paths — are rated as less trustworthy and less competent in user studies, regardless of their task performance. Integrating proxemics into motion planners typically involves adding socially-aware cost terms to trajectory optimisation, often derived from Gaussian potential fields centred on detected human positions.

- ### Provenance
  - sources:: [[HRI]], [[Social Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z