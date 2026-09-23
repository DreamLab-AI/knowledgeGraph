---
okf_version: "0.2"
type: Class
title: Inference Layer
resource: urn:ngm:class:inference-layer
domain: ai
description: The Inference Layer is the stratum that executes trained models to produce predictions from new inputs. In the canonical stack it sits above the Model Layer and below the Middleware Layer, turning static artefacts into a live serving capability. It contains serving runtimes, batching and caching logic, and the request handling that delivers predictions.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:model-layer
enables:
  - urn:ngm:class:middleware-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:model-serving
  - urn:ngm:class:quantisation
---

# Inference Layer

The Inference Layer is the stratum that executes trained models to produce predictions from new inputs. In the canonical stack it sits above the Model Layer and below the Middleware Layer, turning static artefacts into a live serving capability. It contains serving runtimes, batching and caching logic, and the request handling that delivers predictions.
