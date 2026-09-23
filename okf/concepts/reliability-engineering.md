---
okf_version: "0.2"
type: Class
title: Reliability Engineering
resource: urn:ngm:class:reliability-engineering
domain: infrastructure
description: "Reliability engineering is the engineering discipline that applies probabilistic and statistical methods to design, analyse, and verify that systems perform their required functions for a specified period under stated operating conditions without failure. It encompasses systematic techniques including fault tree analysis, failure mode and effects analysis, and accelerated life testing to quantify "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:systems-engineering
hasPart:
  - urn:ngm:class:fault-tree-analysis
  - urn:ngm:class:fmea
  - urn:ngm:class:accelerated-life-testing
  - urn:ngm:class:reliability-block-diagram
requires:
  - urn:ngm:class:probabilistic-risk-assessment
  - urn:ngm:class:data-collection
  - urn:ngm:class:data-collection
enables:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:safety-assurance
dependsOn:
  - urn:ngm:class:redundancy
  - urn:ngm:class:fault-tolerance
contrastsWith:
  - urn:ngm:class:safety-engineering
  - urn:ngm:class:quality-engineering
bridgesTo:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:ai-safety
  - urn:ngm:class:chaos-engineering
uses:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:monte-carlo-simulation
  - urn:ngm:class:weibull-analysis
  - urn:ngm:class:markov-chain
supports:
  - urn:ngm:class:functional-safety
  - urn:ngm:class:maintenance-engineering
standardizedBy:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:iso-26262
  - urn:ngm:class:mil-hdbk-217
relatedTo:
  - urn:ngm:class:availability
  - urn:ngm:class:maintainability
---

# Reliability Engineering

Reliability engineering is the engineering discipline that applies probabilistic and statistical methods to design, analyse, and verify that systems perform their required functions for a specified period under stated operating conditions without failure. It encompasses systematic techniques including fault tree analysis, failure mode and effects analysis, and accelerated life testing to quantify failure probabilities and identify design weaknesses. The discipline establishes dependability metrics such as MTBF, MTTF, and availability, and prescribes design strategies including redundancy, derating, and fault-tolerant architectures to achieve reliability targets. It spans hardware, software, and socio-technical systems and is foundational to safety-critical engineering in aerospace, automotive, medical devices, nuclear, and large-scale cloud infrastructure.
