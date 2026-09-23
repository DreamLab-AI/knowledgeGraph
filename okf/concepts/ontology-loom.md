---
okf_version: "0.2"
type: Class
title: Ontology Loom
resource: urn:ngm:class:ontology-loom
domain: artificial-intelligence
description: "A portable serving node that grounds LLM responses in a formal ontology behind a stable, model-swappable façade. At query time it retrieves the relevant slice of the reasoned ontology, injects it as a budget-clamped structured scaffold, and delegates generation to whichever model sits behind it, so the model restates checked facts rather than performing open-ended recall. On a held-out benchmark, "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:knowledge-representation
requires:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:ontology
contrastsWith:
  - urn:ngm:class:loom
partOf:
  - urn:ngm:class:context-graph
relatedTo:
  - urn:ngm:class:retrieval-augmented-generation
---

# Ontology Loom

A portable serving node that grounds LLM responses in a formal ontology behind a stable, model-swappable façade. At query time it retrieves the relevant slice of the reasoned ontology, injects it as a budget-clamped structured scaffold, and delegates generation to whichever model sits behind it, so the model restates checked facts rather than performing open-ended recall. On a held-out benchmark, static scaffold grounding lifted paired answer scores to 0.94 on two different models, from parametric baselines of 0.146 and 0.268, at three to six times lower latency. The Ontology Loom is the DreamLab mesh's implementation of the context-graph layer. Distinct from Loom, the screen-recording product.
