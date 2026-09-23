---
okf_version: "0.2"
type: Class
title: Automated Design
resource: urn:ngm:class:automated-design
domain: ai
description: Automated Design is the application of computational algorithms, machine learning, and optimisation techniques — spanning combinatorial search, gradient-based topology optimisation, evolutionary algorithms, reinforcement learning, and deep generative modelling — to generate, evaluate, and iteratively refine design artefacts with minimal or no step-by-step human direction. The field encompasses ele
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:generative-design
  - urn:ngm:class:optimisation
hasPart:
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:topology-optimisation
  - urn:ngm:class:electronic-design-automation
  - urn:ngm:class:hyperparameter-optimisation
requires:
  - urn:ngm:class:simulation
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:cad-software
  - urn:ngm:class:constraint-based-design
enables:
  - urn:ngm:class:generative-design-tool
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:auto-ml
  - urn:ngm:class:additive-manufacturing
dependsOn:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:multi-objective-optimisation
  - urn:ngm:class:surrogate-model
implements:
  - urn:ngm:class:parametric-design-methodology
  - urn:ngm:class:multi-objective-optimisation
contrastsWith:
  - urn:ngm:class:parametric-design-methodology-modeling
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:algorithm
  - urn:ngm:class:simulation
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:transfer-learning
supports:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:formal-verification
  - urn:ngm:class:explainability
standardizedBy:
  - urn:ngm:class:formal-verification
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:cad-software
  - urn:ngm:class:constraint-based-design
  - urn:ngm:class:additive-manufacturing
  - urn:ngm:class:intellectual-property-rights-framework
  - urn:ngm:class:generative-design
  - urn:ngm:class:ai-safety
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:foundation-model
  - urn:ngm:class:hardware-description-language
---

# Automated Design

Automated Design is the application of computational algorithms, machine learning, and optimisation techniques — spanning combinatorial search, gradient-based topology optimisation, evolutionary algorithms, reinforcement learning, and deep generative modelling — to generate, evaluate, and iteratively refine design artefacts with minimal or no step-by-step human direction. The field encompasses electronic design automation (EDA) for integrated circuits and printed circuit boards, neural architecture search (NAS) for machine-learning model topologies, topology optimisation for structural engineering, generative architectural layout synthesis, and LLM-assisted hardware description language generation. The unifying abstraction is the design space traversal guided by evaluation functions encoding physical, functional, economic, or aesthetic criteria: the algorithm explores candidate designs, evaluates each against the specified criteria, and updates its search strategy to navigate toward regions of the space satisfying design objectives. Commercial impact has been transformative across semiconductor, aerospace, automotive, and construction sectors, where design cycles have been compressed from months to days whilst exploring solution spaces too large for human enumeration.
