---
okf_version: "0.2"
type: Class
title: Surgical Robotics
resource: urn:ngm:class:surgical-robotics
domain: robotics
description: Surgical robotics is the application of robotic systems, real-time computer vision, and AI-driven control to assist surgeons or perform procedures with enhanced precision, dexterity, tremor cancellation, and minimally invasive access. Systems range from teleoperated master-slave platforms—where a surgeon's hand movements are scaled, filtered, and transmitted to slave arms—to semi-autonomous robots
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robo-robot-type
hasPart:
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:master-slave-control
requires:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:medical-imaging
enables:
  - urn:ngm:class:teleoperation
  - urn:ngm:class:remote-surgery
  - urn:ngm:class:medical-ai
  - urn:ngm:class:autonomous-suturing
contrastsWith:
  - urn:ngm:class:open-surgery
  - urn:ngm:class:laparoscopic-surgery
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:5-g-network
  - urn:ngm:class:5-g-network
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:deep-learning
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:force-torque-sensor
standardizedBy:
  - urn:ngm:class:iec-62304
  - urn:ngm:class:iso-13485
  - urn:ngm:class:iec-60601
partOf:
  - urn:ngm:class:medical-robotics
  - urn:ngm:class:minimally-invasive-surgery
relatedTo:
  - urn:ngm:class:surgical-robot
  - urn:ngm:class:patient-safety
  - urn:ngm:class:orthopaedic-robotics
  - urn:ngm:class:neurosurgical-robotics
---

# Surgical Robotics

Surgical robotics is the application of robotic systems, real-time computer vision, and AI-driven control to assist surgeons or perform procedures with enhanced precision, dexterity, tremor cancellation, and minimally invasive access. Systems range from teleoperated master-slave platforms—where a surgeon's hand movements are scaled, filtered, and transmitted to slave arms—to semi-autonomous robots capable of tissue manipulation and suturing under human supervision. Key technical challenges include sub-millimetre motion tracking, intraoperative tissue deformation modelling, real-time haptic feedback, safe human-robot interaction, and regulatory compliance under medical device frameworks such as ISO 13485, IEC 62304, and EU MDR. The field sits at the intersection of mechatronics, control theory, computer vision, AI inference, and clinical medicine.
