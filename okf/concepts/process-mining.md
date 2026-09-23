---
okf_version: "0.2"
type: Class
title: Process Mining
resource: urn:ngm:class:process-mining
domain: ai
description: "Process mining is a family of data-driven techniques that reconstruct, analyse, and improve real business processes by extracting knowledge from event logs recorded in enterprise information systems. It encompasses process discovery, which infers a process model from observed event sequences; conformance checking, which compares the discovered behaviour against a reference model; and enhancement, "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:business-process-management
hasPart:
  - urn:ngm:class:event-log
enables:
  - urn:ngm:class:process-automation
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:hyperautomation
dependsOn:
  - urn:ngm:class:event-log
contrastsWith:
  - urn:ngm:class:robotic-process-automation
uses:
  - urn:ngm:class:event-log
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:business-intelligence
supports:
  - urn:ngm:class:intelligent-automation
partOf:
  - urn:ngm:class:business-process-management
relatedTo:
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:business-intelligence
---

# Process Mining

Process mining is a family of data-driven techniques that reconstruct, analyse, and improve real business processes by extracting knowledge from event logs recorded in enterprise information systems. It encompasses process discovery, which infers a process model from observed event sequences; conformance checking, which compares the discovered behaviour against a reference model; and enhancement, which enriches models with performance and frequency data. By grounding analysis in actual recorded execution rather than idealised documentation, it reveals bottlenecks, deviations, and automation opportunities.
