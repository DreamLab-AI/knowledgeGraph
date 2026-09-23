---
okf_version: "0.2"
type: Class
title: State Space Representation
resource: urn:ngm:class:state-space-representation
domain: robotics
description: State space representation is a mathematical model that describes a dynamical system through a set of state variables, capturing all information needed to determine the system's future behaviour given its inputs. It expresses the system as first-order differential or difference equations relating states, inputs and outputs, typically in matrix form. The formulation underpins modern control, estima
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:dynamical-systems-theory
hasPart:
  - urn:ngm:class:motion-model
requires:
  - urn:ngm:class:motion-model
enables:
  - urn:ngm:class:optimal-control
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:closed-loop-control
dependsOn:
  - urn:ngm:class:dynamical-systems-theory
contrastsWith:
  - urn:ngm:class:search-algorithms
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:kalman-filter
supports:
  - urn:ngm:class:planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
partOf:
  - urn:ngm:class:dynamical-systems-theory
relatedTo:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:optimal-control
---

# State Space Representation

State space representation is a mathematical model that describes a dynamical system through a set of state variables, capturing all information needed to determine the system's future behaviour given its inputs. It expresses the system as first-order differential or difference equations relating states, inputs and outputs, typically in matrix form. The formulation underpins modern control, estimation, planning and search by providing a compact, computable description of the system over time.
