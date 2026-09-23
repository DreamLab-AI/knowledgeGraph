---
okf_version: "0.2"
type: Class
title: Causal Inference
resource: urn:ngm:class:causal-inference
domain: machine-learning
description: "Causal inference is the scientific and statistical discipline concerned with drawing conclusions about cause-and-effect relationships from data, distinguishing genuine causal mechanisms from mere statistical association. It employs frameworks such as potential outcomes (Rubin causal model), structural causal models (Pearl's do-calculus), and graphical models (directed acyclic graphs) to formalise "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:inference
hasPart:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:instrumental-variables
  - urn:ngm:class:potential-outcomes-framework
  - urn:ngm:class:structural-causal-model
  - urn:ngm:class:do-calculus
  - urn:ngm:class:propensity-score-matching
  - urn:ngm:class:difference-in-differences
  - urn:ngm:class:causal-forest
  - urn:ngm:class:counterfactual-reasoning
requires:
  - urn:ngm:class:observational-data
  - urn:ngm:class:confounding-variable
  - urn:ngm:class:probability-theory
  - urn:ngm:class:graph-theory
  - urn:ngm:class:randomised-controlled-trial
enables:
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:chain-of-thought-reasoning
  - urn:ngm:class:counterfactual-reasoning
  - urn:ngm:class:algorithmic-fairness
  - urn:ngm:class:policy-evaluation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:causal-representation-learning
dependsOn:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:probability-theory
implements:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:inference-algorithm
contrastsWith:
  - urn:ngm:class:correlation-analysis
  - urn:ngm:class:associative-learning
  - urn:ngm:class:pattern-recognition
bridgesTo:
  - urn:ngm:class:epidemiology
  - urn:ngm:class:econometrics
uses:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:automated-reasoning
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:instrumental-variables
  - urn:ngm:class:mathematical-reasoning
supports:
  - urn:ngm:class:algorithmic-fairness
  - urn:ngm:class:ai-safety
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:causal-language-modelling
  - urn:ngm:class:deep-reinforcement-learning
standardizedBy:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistical-learning-theory
relatedTo:
  - urn:ngm:class:mathematical-reasoning
  - urn:ngm:class:inference
  - urn:ngm:class:randomised-controlled-trial
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bayesian-decision-theory
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:bayesian-knowledge-tracing
  - urn:ngm:class:epidemiology
  - urn:ngm:class:econometrics
---

# Causal Inference

Causal inference is the scientific and statistical discipline concerned with drawing conclusions about cause-and-effect relationships from data, distinguishing genuine causal mechanisms from mere statistical association. It employs frameworks such as potential outcomes (Rubin causal model), structural causal models (Pearl's do-calculus), and graphical models (directed acyclic graphs) to formalise interventions and reason about counterfactuals. Applications span medicine, economics, social science, and AI alignment, wherever understanding the effect of an action — not merely its correlation with outcomes — is required.
