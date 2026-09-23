---
okf_version: "0.2"
type: Class
title: Priority Scheduling
resource: urn:ngm:class:priority-scheduling
domain: infrastructure
description: Priority scheduling is a scheduling discipline in which competing tasks or processes are ordered by an assigned priority value rather than by arrival time, so that higher-priority work pre-empts or is dispatched ahead of lower-priority work. It is typically implemented over a priority queue and is central to real-time computing and robotic control systems, where deadline-critical tasks must run ah
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:priority-queue
partOf:
  - urn:ngm:class:priority-queue
---

# Priority Scheduling

Priority scheduling is a scheduling discipline in which competing tasks or processes are ordered by an assigned priority value rather than by arrival time, so that higher-priority work pre-empts or is dispatched ahead of lower-priority work. It is typically implemented over a priority queue and is central to real-time computing and robotic control systems, where deadline-critical tasks must run ahead of best-effort work. Variants include static priority, dynamic priority, and rate-monotonic scheduling.
