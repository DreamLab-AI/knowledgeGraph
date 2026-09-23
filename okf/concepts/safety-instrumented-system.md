---
okf_version: "0.2"
type: Class
title: Safety Instrumented System
resource: urn:ngm:class:safety-instrumented-system
domain: robotics
description: An engineered system of sensors, logic solvers, and final elements dedicated to automatically bringing an industrial process to a safe state when hazardous conditions are detected — for example shutting an emergency valve on high pressure; each of its safety instrumented functions is assigned a safety integrity level (SIL 1-4) quantifying required risk reduction, and the system is specified, desig
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:functional-safety
requires:
  - urn:ngm:class:safety-lifecycle
uses:
  - urn:ngm:class:fmea
relatedTo:
  - urn:ngm:class:iec-62061
---

# Safety Instrumented System

An engineered system of sensors, logic solvers, and final elements dedicated to automatically bringing an industrial process to a safe state when hazardous conditions are detected — for example shutting an emergency valve on high pressure; each of its safety instrumented functions is assigned a safety integrity level (SIL 1-4) quantifying required risk reduction, and the system is specified, designed, validated, and maintained under the functional safety lifecycle of IEC 61508 and IEC 61511, independently of the basic process control system.
