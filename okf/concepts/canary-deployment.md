---
okf_version: "0.2"
type: Class
title: Canary Deployment
resource: urn:ngm:class:canary-deployment
domain: machine-learning
description: Canary deployment is a progressive release strategy in which a new version of a service or model is exposed to a small subset of traffic before being rolled out more widely. Operators monitor health, performance and quality metrics on the canary cohort, promoting the release only if it behaves acceptably and otherwise rolling back. It limits the blast radius of a faulty change and is widely used i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:progressive-delivery
  - urn:ngm:class:release-engineering
  - urn:ngm:class:deployment-strategy
hasPart:
  - urn:ngm:class:observability
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:traffic-splitting
  - urn:ngm:class:metric-collection
  - urn:ngm:class:rollback-mechanism
  - urn:ngm:class:promotion-gate
  - urn:ngm:class:analysis-template
  - urn:ngm:class:canary-weight-configuration
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:ci-cd
  - urn:ngm:class:monitoring
  - urn:ngm:class:automated-testing
  - urn:ngm:class:version-control
  - urn:ngm:class:telemetry
  - urn:ngm:class:service-mesh
enables:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:zero-downtime-deployment
  - urn:ngm:class:controlled-rollout
  - urn:ngm:class:risk-mitigation
  - urn:ngm:class:model-serving
  - urn:ngm:class:automated-promotion
  - urn:ngm:class:blast-radius-control
dependsOn:
  - urn:ngm:class:ci-cd
  - urn:ngm:class:kubernetes
  - urn:ngm:class:service-mesh
  - urn:ngm:class:prometheus
  - urn:ngm:class:telemetry
  - urn:ngm:class:container-orchestration
implements:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:progressive-delivery
  - urn:ngm:class:release-strategy
  - urn:ngm:class:staged-rollout
contrastsWith:
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:blue-green-deployment
  - urn:ngm:class:rolling-deployment
  - urn:ngm:class:big-bang-deployment
  - urn:ngm:class:shadow-deployment
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:observability
  - urn:ngm:class:argo-rollouts
  - urn:ngm:class:flagger
  - urn:ngm:class:istio
  - urn:ngm:class:seldon-core
  - urn:ngm:class:kserve
  - urn:ngm:class:feature-flags
  - urn:ngm:class:prometheus
  - urn:ngm:class:datadog
supports:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:devops
  - urn:ngm:class:mlops
  - urn:ngm:class:gitops
  - urn:ngm:class:model-deployment
  - urn:ngm:class:platform-engineering
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:google-sre
  - urn:ngm:class:argo-project
  - urn:ngm:class:do-ra
partOf:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:ci-cd
relatedTo:
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:devops
  - urn:ngm:class:kubernetes
  - urn:ngm:class:feature-flags
  - urn:ngm:class:shadow-deployment
  - urn:ngm:class:ring-deployment
  - urn:ngm:class:dark-launch
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:gitops
  - urn:ngm:class:dora-metrics
---

# Canary Deployment

Canary deployment is a progressive release strategy in which a new version of a service or model is exposed to a small subset of traffic before being rolled out more widely. Operators monitor health, performance and quality metrics on the canary cohort, promoting the release only if it behaves acceptably and otherwise rolling back. It limits the blast radius of a faulty change and is widely used in continuous delivery pipelines and in serving machine-learning models.
