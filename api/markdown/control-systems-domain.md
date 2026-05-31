- ### Definition
  - The Control Systems Domain classifies concepts concerning the regulation of dynamic systems towards desired behaviour using feedback and actuation. It covers modelling, stability, controller design and the sensing that closes the loop. As a sub-domain of the Robotics Domain it provides the theory by which physical and computational processes are kept on target despite disturbance.

- ### Semantic Classification
  - owl-class:: ctrl:ControlSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Robotics Domain]], [[Autonomous Systems Domain]]
  - has-part:: [[Feedback Loop]], [[Stability]], [[Controller Design]], [[State Estimation]], [[PID Control]]
  - requires:: [[Formal Methods Domain]]
  - enables:: [[Process Regulation]], [[Autonomous Operation]]

- ### Content
  - Control systems study how to drive a dynamic process towards a reference value by comparing measured output with the desired target and adjusting input accordingly. The feedback loop is the central construct, allowing a system to correct for disturbance and modelling error. Controller design selects the law that maps observed error to corrective action.
  - Stability is the foundational property, ensuring that the regulated system converges rather than oscillates or diverges. The domain provides frequency-domain and state-space methods for analysing and shaping system response, including settling time, overshoot and steady-state error. State estimation reconstructs unmeasured quantities from available sensors.
  - Control systems bridge to robotics, where they govern motion and manipulation, and to autonomous systems that combine control with decision-making. They draw on formal methods to verify that controllers meet safety and performance requirements.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z