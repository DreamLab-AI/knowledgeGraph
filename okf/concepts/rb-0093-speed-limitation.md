---
okf_version: "0.2"
type: Class
title: rb 0093 speed limitation
resource: urn:ngm:class:rb-0093-speed-limitation
domain: robotics
description: "Speed limitation is a collaborative robotics safety function that restricts the maximum velocity of robot joints or the tool centre point to a defined safe threshold, as specified by ISO/TS 15066 and ISO 10218. It is a key mechanism for enabling safe human-robot collaboration in shared workspaces by ensuring robot motion cannot exceed speeds that would cause unacceptable injury risk upon contact. "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
requires:
  - urn:ngm:class:rb-0072-encoder
  - urn:ngm:class:rb-0055-velocity-control
supports:
  - urn:ngm:class:rb-0007-collaborative-robot
standardizedBy:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:rb-0087-safety-standard
relatedTo:
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0103-collaborative-operation
---

# rb 0093 speed limitation

Speed limitation is a collaborative robotics safety function that restricts the maximum velocity of robot joints or the tool centre point to a defined safe threshold, as specified by ISO/TS 15066 and ISO 10218. It is a key mechanism for enabling safe human-robot collaboration in shared workspaces by ensuring robot motion cannot exceed speeds that would cause unacceptable injury risk upon contact. Speed limitation operates continuously or is activated when a human is detected within a monitored zone.
