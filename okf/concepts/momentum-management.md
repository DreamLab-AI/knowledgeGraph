---
okf_version: "0.2"
type: Class
title: Momentum Management
resource: urn:ngm:class:momentum-management
domain: space-science-and-systems
description: Momentum management keeps the angular momentum stored in spacecraft attitude actuators within a usable envelope. Reaction and momentum wheels exchange momentum internally with the spacecraft. They can reject a short disturbance or execute a slew, but cannot remove angular momentum from the closed spacecraft-wheel system. A persistent external torque therefore drives wheel speed and stored momentum
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
---

# Momentum Management

Momentum management keeps the angular momentum stored in spacecraft attitude actuators within a usable envelope. Reaction and momentum wheels exchange momentum internally with the spacecraft. They can reject a short disturbance or execute a slew, but cannot remove angular momentum from the closed spacecraft-wheel system. A persistent external torque therefore drives wheel speed and stored momentum towards a limit.[^nasa-actuators-2024]
