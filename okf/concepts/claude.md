---
okf_version: "0.2"
type: Class
title: Claude
resource: urn:ngm:class:claude
domain: ai
description: Claude is a family of large language model AI assistants developed by Anthropic, trained using Constitutional AI and reinforcement learning from human feedback to be helpful, harmless, and honest. The Claude model family encompasses tiered variants (Haiku, Sonnet, and Opus) spanning cost-performance trade-offs, with support for extended context windows, multimodal inputs, tool use, and agentic wor
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:proprietary-large-language-models
  - urn:ngm:class:large-language-models
  - urn:ngm:class:foundation-model
  - urn:ngm:class:agentic-ai
hasPart:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:red-teaming
  - urn:ngm:class:rlhf
  - urn:ngm:class:pre-training
  - urn:ngm:class:direct-preference-optimisation
requires:
  - urn:ngm:class:pre-training
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:human-feedback
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:scalable-oversight
enables:
  - urn:ngm:class:tool-use
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:function-calling
  - urn:ngm:class:code-generation
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:workflow-automation
dependsOn:
  - urn:ngm:class:pre-training
  - urn:ngm:class:human-feedback
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:red-teaming
  - urn:ngm:class:mechanistic-interpretability
implements:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:ai-safety
contrastsWith:
  - urn:ngm:class:gpt-4
  - urn:ngm:class:gemini-multimodal-language-model
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:meta-llama-model-family-3
  - urn:ngm:class:openai-research-organisation
bridgesTo:
  - urn:ngm:class:enterprise-software-integration
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:enterprise-ai-adoption
  - urn:ngm:class:ai-governance
  - urn:ngm:class:ai-safety-institute
  - urn:ngm:class:frontier-ai
uses:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:rlhf
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:direct-preference-optimisation
  - urn:ngm:class:red-teaming
  - urn:ngm:class:mechanistic-interpretability
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:ai-safety-research
  - urn:ngm:class:enterprise-ai-adoption
standardizedBy:
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:model-context-protocol
relatedTo:
  - urn:ngm:class:anthropic
  - urn:ngm:class:large-language-models
  - urn:ngm:class:ai-safety
  - urn:ngm:class:alignment-research
  - urn:ngm:class:foundation-model
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:responsible-scaling-policy
  - urn:ngm:class:mechanistic-interpretability
  - urn:ngm:class:scalable-oversight
  - urn:ngm:class:red-teaming
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:enterprise-ai-adoption
---

# Claude

Claude is a family of large language model AI assistants developed by Anthropic, trained using Constitutional AI and reinforcement learning from human feedback to be helpful, harmless, and honest. The Claude model family encompasses tiered variants (Haiku, Sonnet, and Opus) spanning cost-performance trade-offs, with support for extended context windows, multimodal inputs, tool use, and agentic workflows via the Model Context Protocol. Claude embodies Anthropic's research programme on aligning advanced AI systems with human values, serving as both a commercial API product and a living demonstration that safety and capability are complementary rather than opposed. The model family has evolved through multiple generations, with each iteration advancing state-of-the-art performance on reasoning, coding, and instruction-following benchmarks whilst maintaining rigorous safety evaluation.
