---
okf_version: "0.2"
type: Class
title: Dagger CI Pipeline Engine
resource: urn:ngm:class:dagger-ci-pipeline-engine
domain: infrastructure
description: Dagger is a programmable CI/CD engine that unifies pipeline definition and execution within typed, composable functions authored in general-purpose languages such as Go, Python, or TypeScript. Unlike traditional Dockerfile-and-shell-script approaches, Dagger caches the result of every function call at fine granularity, achieves CI/local parity by running identically on developer machines and cloud
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:software-engineering
enables:
  - urn:ngm:class:simulation
  - urn:ngm:class:machine-learning-discipline-pipeline
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:software-development-process
---

# Dagger CI Pipeline Engine

Dagger is a programmable CI/CD engine that unifies pipeline definition and execution within typed, composable functions authored in general-purpose languages such as Go, Python, or TypeScript. Unlike traditional Dockerfile-and-shell-script approaches, Dagger caches the result of every function call at fine granularity, achieves CI/local parity by running identically on developer machines and cloud runners, and exposes pipelines as strongly-typed APIs discoverable via `dagger functions`.
