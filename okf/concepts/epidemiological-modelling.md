---
okf_version: "0.2"
type: Class
title: Epidemiological Modelling
resource: urn:ngm:class:epidemiological-modelling
domain: artificial-intelligence
description: "Epidemiological modelling is the use of mathematical and computational models to describe how infectious diseases spread through populations over time. Compartmental models partition a population into states such as susceptible, infected, and recovered, and use differential equations to govern transitions between them, while network and agent-based models capture heterogeneous contact structures. "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computational-modelling
  - urn:ngm:class:mathematical-biology
  - urn:ngm:class:simulation
hasPart:
  - urn:ngm:class:differential-equations
  - urn:ngm:class:ordinary-differential-equations
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:basic-reproduction-number
  - urn:ngm:class:next-generation-matrix
  - urn:ngm:class:compartmental-model
  - urn:ngm:class:contact-network
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:data-assimilation
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:uncertainty-quantification
requires:
  - urn:ngm:class:differential-equations
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:statistics
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:network-analysis
  - urn:ngm:class:simulation
  - urn:ngm:class:monte-carlo-simulation
enables:
  - urn:ngm:class:public-health
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:pandemic-preparedness
  - urn:ngm:class:vaccine-allocation
  - urn:ngm:class:contact-tracing
  - urn:ngm:class:wastewater-surveillance
  - urn:ngm:class:healthcare-demand-forecasting
dependsOn:
  - urn:ngm:class:computational-modelling
  - urn:ngm:class:differential-equations
  - urn:ngm:class:graph-theory
  - urn:ngm:class:data-assimilation
  - urn:ngm:class:high-performance-computing
implements:
  - urn:ngm:class:sir-model
  - urn:ngm:class:seir-model
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:probabilistic-modelling
  - urn:ngm:class:bayesian-inference
contrastsWith:
  - urn:ngm:class:system-dynamics
  - urn:ngm:class:equation-based-modelling
bridgesTo:
  - urn:ngm:class:public-health
  - urn:ngm:class:network-analysis
uses:
  - urn:ngm:class:differential-equations
  - urn:ngm:class:simulation
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:differential-equations
  - urn:ngm:class:monte-carlo-simulation
  - urn:ngm:class:network-analysis
  - urn:ngm:class:graph-theory
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:physics-informed-neural-network
supports:
  - urn:ngm:class:public-health
  - urn:ngm:class:policy-simulation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:pandemic-preparedness
  - urn:ngm:class:vaccination-strategy
standardizedBy:
  - urn:ngm:class:who
  - urn:ngm:class:ecdc
  - urn:ngm:class:ukhsa
partOf:
  - urn:ngm:class:computational-modelling
relatedTo:
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:graph-theory
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:computational-biology
  - urn:ngm:class:systems-biology
  - urn:ngm:class:complex-systems
  - urn:ngm:class:digital-twin
  - urn:ngm:class:wastewater-surveillance
---

# Epidemiological Modelling

Epidemiological modelling is the use of mathematical and computational models to describe how infectious diseases spread through populations over time. Compartmental models partition a population into states such as susceptible, infected, and recovered, and use differential equations to govern transitions between them, while network and agent-based models capture heterogeneous contact structures. These models inform forecasting, intervention design, and public-health policy.
