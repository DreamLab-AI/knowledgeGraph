- ### Definition
  - Predictive tracking is the estimation of a user's future head or body pose from recent motion so that rendering can be aligned to where the user will be, reducing perceived latency.

- ### Semantic Classification
  - owl-class:: metaverse:TELE157predictivetracking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Inertial Measurement Unit]]
  - requires:: [[Kalman Filter]], [[Sensor Fusion]]
  - enables:: [[Low Latency]]

- ### Content
  - Predictive tracking forecasts a user's pose a short time ahead based on recent position, velocity and acceleration measurements, so that the rendered frame matches the user's actual position when it is displayed. It is used in head-mounted displays to compensate for the delay between sensing motion and presenting an image.
  - The technique typically combines inertial measurement unit data with optical tracking through filters such as Kalman filters. Accurate short-horizon prediction lowers motion-to-photon latency and reduces the sensory mismatch that contributes to discomfort in immersive systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z