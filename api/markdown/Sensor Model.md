A sensor model, also called an observation or measurement model, is a probabilistic description of how a robot's sensor readings relate to the underlying state of the world, expressing the likelihood of an observation given a hypothesised state. It captures sensor characteristics such as noise, resolution, range limits, and failure modes, allowing a robot to weight evidence appropriately when fusing measurements. Sensor models are central to Bayesian state estimation, where they form the update step that corrects predictions using incoming data.

### Overview

- In recursive state estimation the sensor model supplies the measurement-update (correction) step that refines a predicted belief.
- It complements the [[Motion Model]], which supplies the prediction step.
- Well-calibrated sensor models let a robot weight conflicting evidence during [[Sensor Fusion]].

### Mechanisms

- Characterise the sensor's noise distribution and systematic biases empirically.
- Express the conditional likelihood of readings given state, including beam, feature, or pixel-level models.
- Incorporate the likelihood into a [[Kalman Filter]] or [[Particle Filter]] update.
- Validate against ground truth and recalibrate as hardware drifts.

### Applications

- Robot [[Localisation]] against a known map.
- Simultaneous mapping and localisation in [[SLAM]].
- Multi-sensor [[Sensor Fusion]] and [[Robot Perception]].
- Building consistent maps via [[Mapping]].

### Provenance

