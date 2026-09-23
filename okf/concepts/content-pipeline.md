---
okf_version: "0.2"
type: Class
title: Content Pipeline
resource: urn:ngm:class:content-pipeline
domain: spatial-computing
description: A Content Pipeline is the end-to-end automated or semi-automated workflow that transforms raw creative assets—geometry, textures, audio, video, or data—from authoring tools into the optimised, platform-specific formats required by a runtime engine, distribution system, or media player. It encompasses ingestion, validation, processing, compression, and delivery stages with dependency tracking and i
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:production-pipeline
hasPart:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:asset-validation
requires:
  - urn:ngm:class:asset-management
  - urn:ngm:class:version-control
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:game-engine
  - urn:ngm:class:real-time-rendering
bridgesTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:generative-ai
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:dependency-graph
  - urn:ngm:class:texture-compression
  - urn:ngm:class:level-of-detail
supports:
  - urn:ngm:class:content-creation
  - urn:ngm:class:digital-content-creation
  - urn:ngm:class:extended-reality
relatedTo:
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:usd
  - urn:ngm:class:shader-compilation
---

# Content Pipeline

A Content Pipeline is the end-to-end automated or semi-automated workflow that transforms raw creative assets—geometry, textures, audio, video, or data—from authoring tools into the optimised, platform-specific formats required by a runtime engine, distribution system, or media player. It encompasses ingestion, validation, processing, compression, and delivery stages with dependency tracking and incremental rebuild capabilities.
