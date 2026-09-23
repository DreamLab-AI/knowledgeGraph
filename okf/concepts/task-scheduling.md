---
okf_version: "0.2"
type: Class
title: Task Scheduling
resource: urn:ngm:class:task-scheduling
domain: distributed-systems
description: "The process of deciding which tasks run on which computational resources and when, subject to constraints such as priorities, deadlines, dependencies, and resource capacity. Task scheduling appears at every scale of computing: operating-system schedulers multiplex threads across CPU cores, real-time schedulers such as rate-monotonic and earliest-deadline-first guarantee that control loops meet har"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:resource-allocation
enables:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:parallel-processing
uses:
  - urn:ngm:class:priority-queue
partOf:
  - urn:ngm:class:operating-system
  - urn:ngm:class:workflow-automation
relatedTo:
  - urn:ngm:class:real-time-systems
  - urn:ngm:class:load-balancing
  - urn:ngm:class:concurrency
---

# Task Scheduling

The process of deciding which tasks run on which computational resources and when, subject to constraints such as priorities, deadlines, dependencies, and resource capacity. Task scheduling appears at every scale of computing: operating-system schedulers multiplex threads across CPU cores, real-time schedulers such as rate-monotonic and earliest-deadline-first guarantee that control loops meet hard deadlines, cluster orchestrators place jobs across machines, and workflow engines order dependent steps expressed as directed acyclic graphs. Because optimal scheduling is NP-hard in most general formulations, practical schedulers rely on priority-based heuristics, often implemented over priority queues, trading strict optimality for predictability, fairness, and low overhead.
