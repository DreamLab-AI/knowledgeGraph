---
okf_version: "0.2"
type: Class
title: Calibration System
resource: urn:ngm:class:calibration-system
domain: spatial-computing
description: A Calibration System is an integrated assembly of hardware targets, measurement instruments, algorithms, and software workflows used to determine and correct systematic errors in sensors, cameras, and measurement devices, establishing a known and traceable relationship between a sensor's raw outputs and the physical quantities they represent. Calibration systems are essential preconditions for acc
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:calibration-equipment
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:photogrammetry
uses:
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:imu
relatedTo:
  - urn:ngm:class:slam
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Calibration System

A Calibration System is an integrated assembly of hardware targets, measurement instruments, algorithms, and software workflows used to determine and correct systematic errors in sensors, cameras, and measurement devices, establishing a known and traceable relationship between a sensor's raw outputs and the physical quantities they represent. Calibration systems are essential preconditions for accurate spatial measurement, computer vision, robotics, and extended reality applications.
