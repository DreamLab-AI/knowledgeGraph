---
okf_version: "0.2"
type: Class
title: RLHF
resource: urn:ngm:class:rlhf
domain: artificial-intelligence
description: Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models and other AI systems with human preferences by first collecting human comparison judgements between model outputs, training a reward model on those judgements, and then optimising the language model policy against the reward model using reinforcement learning — typically Proximal Policy Op
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-alignment
requires:
  - urn:ngm:class:reward-model
  - urn:ngm:class:human-feedback
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:proximal-policy-optimisation
  - urn:ngm:class:supervised-fine-tuning
enables:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:instruction-following
  - urn:ngm:class:harmlessness
  - urn:ngm:class:ai-safety
contrastsWith:
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:supervised-fine-tuning
  - urn:ngm:class:rlaif
bridgesTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:data-annotation
  - urn:ngm:class:crowdsourcing
uses:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:kl-divergence
  - urn:ngm:class:preference-data
  - urn:ngm:class:human-annotation
  - urn:ngm:class:human-annotation
partOf:
  - urn:ngm:class:model-alignment-pipeline
relatedTo:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:instruct-gpt
  - urn:ngm:class:policy-gradient-methods
  - urn:ngm:class:instructgpt
---

# RLHF

Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models and other AI systems with human preferences by first collecting human comparison judgements between model outputs, training a reward model on those judgements, and then optimising the language model policy against the reward model using reinforcement learning — typically Proximal Policy Optimisation with a KL-divergence penalty to prevent reward hacking. RLHF enables models to be steered towards outputs that human annotators prefer for helpfulness, harmlessness, and honesty, going beyond what is achievable with supervised fine-tuning on static demonstration data alone. The technique was popularised by OpenAI's InstructGPT work and underlies the alignment pipeline of models such as ChatGPT, Claude, and Gemini. Variants including Direct Preference Optimisation, Constitutional AI, and RLAIF (Reinforcement Learning from AI Feedback) extend or simplify the original three-stage pipeline.
