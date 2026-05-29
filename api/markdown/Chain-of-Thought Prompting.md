public:: true

# Chain-of-Thought Prompting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chain-of-thought-prompting",
  "@type": "Page",
  "vc:slug": "chain-of-thought-prompting",
  "title": "Chain-of-Thought Prompting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chain-of-thought-prompting",
  "@type": "Class",
  "label": "Chain-of-Thought Prompting",
  "definition": "Chain-of-thought (CoT) prompting is a prompt engineering technique that elicits intermediate reasoning steps from a large language model before it produces a final answer, substantially improving performance on multi-step arithmetic, commonsense reasoning, and symbolic manipulation tasks. By including exemplars that demonstrate step-by-step reasoning or by appending the instruction 'Let's think step by step' (zero-shot CoT), the technique leverages the model's autoregressive generation to decompose complex problems into tractable substeps. CoT prompting was formally characterised by Wei et al. (2022) and has become a foundational capability-elicitation method for frontier language models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:in-context-learning", "label": "In-Context Learning"},
      {"@id": "urn:ngm:class:few-shot-prompting", "label": "Few-Shot Prompting"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"},
      {"@id": "urn:ngm:class:multi-step-reasoning", "label": "Multi-Step Reasoning"},
      {"@id": "urn:ngm:class:common-sense-reasoning", "label": "Common Sense Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:chain-of-thought-reasoning", "label": "Chain-of-Thought Reasoning"},
      {"@id": "urn:ngm:class:reasoning-engine", "label": "Reasoning Engine"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Chain-of-thought prompting is a technique in [[Prompt Engineering]] that instructs or demonstrates to a [[Large Language Models]] the practice of externalising intermediate reasoning steps before generating a final answer. Rather than mapping directly from question to answer, the model generates a sequence of coherent reasoning steps — a "chain of thought" — that decomposes the problem and arrives at the solution incrementally. This mirrors human deliberate reasoning and exploits the autoregressive architecture of decoder-only transformers: each generated reasoning token becomes context for the next, allowing the model to condition on its own prior reasoning. The technique dramatically improves performance on [[Mathematical Reasoning]], [[Multi-Step Reasoning]], and commonsense tasks relative to standard prompting.

- ### Relationships
  - Chain-of-thought prompting builds on [[In-Context Learning]] and extends [[Few-Shot Prompting]] by including examples with explicit intermediate steps. It enables [[Mathematical Reasoning]] and [[Multi-Step Reasoning]] capabilities that standard single-step prompting fails to elicit from [[Large Language Models]]. The concept is closely related to [[Chain-of-Thought Reasoning]] as an emergent model behaviour, and to [[Reasoning Engine]] architectures that interleave tool use with reasoning. Its variants (tree of thought, graph of thought, self-consistency) have expanded the space of structured reasoning elicitation methods.

- ### Content
  - The formal characterisation of chain-of-thought prompting was published by Jason Wei et al. at Google Brain in January 2022, demonstrating that few-shot prompts including reasoning steps improved accuracy on the GSM8K arithmetic benchmark by over 50 percentage points for sufficiently large models (≥100B parameters). A companion paper by Kojima et al. (2022) introduced zero-shot CoT — simply appending "Let's think step by step" to a question — showing that this minimal instruction elicited reasoning chains without exemplars. These papers catalysed a wave of follow-on research into structured reasoning elicitation from large language models.

  - The mechanism underlying CoT prompting is debated. One interpretation is that reasoning steps provide decomposition that breaks multi-step problems into sub-problems within the model's single-forward-pass capability. Another is that CoT triggers pattern-matching to training data containing worked solutions or textbook derivations. A third view holds that CoT exploits the autoregressive property: each generated step is a latent computation that shifts the model's hidden state, providing additional "compute" beyond what is available within a single token prediction. Empirically, CoT gains are largest for large models (>62B parameters) and structured tasks; they are minimal for simple factual recall and small models, suggesting an emergent capability threshold.

  - Variants and extensions of CoT have proliferated. Self-consistency (Wang et al., 2022) generates multiple reasoning chains with diverse random seeds and selects the final answer by majority vote, improving reliability. Least-to-most prompting decomposes complex problems into subproblems sequentially. Tree of Thoughts (Yao et al., 2023) frames reasoning as tree search with backtracking, enabling exploration of alternative reasoning paths. Programme of Thought uses code generation as the reasoning substrate, delegating computation to a Python interpreter. ReAct interleaves reasoning and tool use (search, calculator, API calls) in a coherent loop. These variants are collectively shaping the architecture of AI agent systems.

  - By 2024–2025, chain-of-thought prompting has been absorbed into the default behaviour of frontier models: OpenAI's o1 and o3 series, Anthropic's Claude 3.7 Sonnet with extended thinking, and DeepSeek-R1 all perform explicit internal reasoning before generating responses, trained via reinforcement learning to reward correct multi-step solutions. This shift — from prompting-elicited CoT to CoT-trained-in reasoning — represents a maturation of the technique from prompt engineering trick to core training objective. The tension between fast, direct responses and slow, deliberate reasoning chains is now managed through "thinking budget" parameters that allow users to trade inference cost against reasoning depth.

