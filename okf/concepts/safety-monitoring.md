---
okf_version: "0.2"
type: Class
title: Safety Monitoring
resource: urn:ngm:class:safety-monitoring
domain: robotics
description: Safety monitoring is the continuous supervision of a robotic or automated system to detect hazardous states, component degradation or human proximity and to trigger protective responses. It fuses proprioceptive and exteroceptive sensing with state estimation, anomaly detection and decision logic to enforce safety constraints independently of the nominal task controller. It underpins certified huma
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robot-safety
hasPart:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:real-time-monitoring
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:perception
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:observability
uses:
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:robot-safety
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:collision-avoidance
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:control-system
---

# Safety Monitoring

Safety monitoring is the continuous supervision of a robotic or automated system to detect hazardous states, component degradation or human proximity and to trigger protective responses. It fuses proprioceptive and exteroceptive sensing with state estimation, anomaly detection and decision logic to enforce safety constraints independently of the nominal task controller. It underpins certified human-robot collaboration and autonomous operation in shared workspaces.
