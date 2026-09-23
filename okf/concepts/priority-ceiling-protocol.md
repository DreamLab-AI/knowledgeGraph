---
okf_version: "0.2"
type: Class
title: Priority Ceiling Protocol
resource: urn:ngm:class:priority-ceiling-protocol
domain: infrastructure
description: The priority ceiling protocol is a real-time scheduling and resource-access protocol that prevents unbounded priority inversion and deadlock among tasks sharing mutually exclusive resources. Each resource is assigned a ceiling equal to the highest priority of any task that may lock it, and a task may acquire a resource only if its priority exceeds the ceilings of all currently locked resources. It
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:real-time
---

# Priority Ceiling Protocol

The priority ceiling protocol is a real-time scheduling and resource-access protocol that prevents unbounded priority inversion and deadlock among tasks sharing mutually exclusive resources. Each resource is assigned a ceiling equal to the highest priority of any task that may lock it, and a task may acquire a resource only if its priority exceeds the ceilings of all currently locked resources. It bounds blocking time, enabling provable schedulability in hard real-time systems.
