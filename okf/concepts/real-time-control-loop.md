---
okf_version: "0.2"
type: Class
title: Real-Time Control Loop
resource: urn:ngm:class:real-time-control-loop
domain: robotics
description: A real-time control loop is a cyclic sense-compute-actuate process that runs at a fixed, deterministic frequency to regulate a physical or cyber-physical system within strict timing deadlines. Missing a deadline can cause instability or unsafe behaviour, so loops require real-time scheduling and bounded computation. They are the operational core of robotics, motion control, and industrial automati
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:admittance-control
---

# Real-Time Control Loop

A real-time control loop is a cyclic sense-compute-actuate process that runs at a fixed, deterministic frequency to regulate a physical or cyber-physical system within strict timing deadlines. Missing a deadline can cause instability or unsafe behaviour, so loops require real-time scheduling and bounded computation. They are the operational core of robotics, motion control, and industrial automation.
