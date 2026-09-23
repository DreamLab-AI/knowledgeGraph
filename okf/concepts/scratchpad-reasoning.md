---
okf_version: "0.2"
type: Class
title: Scratchpad Reasoning
resource: urn:ngm:class:scratchpad-reasoning
domain: artificial-intelligence
description: Scratchpad reasoning is a prompting and inference technique in which a language model generates intermediate working steps into an explicit textual workspace before committing to a final answer. The scratchpad externalises latent computation, letting the model decompose a problem, track partial results, and self-correct, which improves performance on multi-step arithmetic, logic, and code tasks. I
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:chain-of-thought-reasoning
hasPart:
  - urn:ngm:class:reasoning
enables:
  - urn:ngm:class:reasoning
dependsOn:
  - urn:ngm:class:inference
implements:
  - urn:ngm:class:tool-use
bridgesTo:
  - urn:ngm:class:tree-of-thoughts
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:prompt-engineering
supports:
  - urn:ngm:class:interpretability
partOf:
  - urn:ngm:class:chain-of-thought-reasoning
relatedTo:
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:self-consistency
  - urn:ngm:class:interpretability
---

# Scratchpad Reasoning

Scratchpad reasoning is a prompting and inference technique in which a language model generates intermediate working steps into an explicit textual workspace before committing to a final answer. The scratchpad externalises latent computation, letting the model decompose a problem, track partial results, and self-correct, which improves performance on multi-step arithmetic, logic, and code tasks. It is a foundational mechanism behind chain-of-thought and related deliberate-reasoning methods.
