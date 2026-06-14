public:: true

# In-Context Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:in-context-learning",
  "@type": "Page",
  "vc:slug": "in-context-learning",
  "title": "In-Context Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:in-context-learning",
  "@type": "Class",
  "label": "In-Context Learning",
  "definition": "In-Context Learning (ICL) is the capability of large language models to adapt their output distribution to a novel task at inference time by conditioning on a small number of labelled input-output demonstrations embedded directly within the prompt, without any gradient-based parameter updates. The model implicitly extracts task structure and decision boundaries from the provided examples and applies that inferred structure to unseen queries, enabling rapid generalisation across domains. ICL is an emergent phenomenon that scales with model size and training-data diversity, and is theoretically framed as implicit Bayesian inference over a latent space of task hypotheses. It underpins the practical utility of modern large language models by eliminating the need for task-specific fine-tuning pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:meta-learning", "label": "Meta-Learning"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:few-shot-prompting", "label": "Few-Shot Prompting"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:task-adaptation", "label": "Task Adaptation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:chain-of-thought-prompting", "label": "Chain-of-Thought Prompting"},
      {"@id": "urn:ngm:class:demonstration-selection", "label": "Demonstration Selection"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:zero-shot-prompting", "label": "Zero-Shot Prompting"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:few-shot-learning", "label": "Few-Shot Learning"},
      {"@id": "urn:ngm:class:emergent-capabilities", "label": "Emergent Capabilities"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"},
      {"@id": "urn:ngm:class:mechanistic-interpretability", "label": "Mechanistic Interpretability"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:agent-reasoning", "label": "Agent Reasoning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:icl", "label": "ICL"},
    {"@id": "urn:ngm:class:in-context-adaptation", "label": "In-Context Adaptation"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[In-Context Learning]] (ICL) is the capability of a [[Large Language Model]] to perform a novel task at inference time purely by conditioning on labelled input-output demonstrations embedded within the [[Prompt Engineering]] prompt, with no gradient updates to the model's parameters. The model implicitly infers task structure from the provided examples via the [[Attention Mechanism]], applying that structure to unseen queries. This distinguishes ICL from [[Fine-Tuning]] and [[Supervised Learning]], which require dedicated training passes. ICL is an [[Emergent Capabilities|emergent capability]] that scales with model size and pre-training diversity, and is theoretically modelled as implicit Bayesian inference over latent task hypotheses consistent with the demonstration set.

- ### Overview
  - ICL was prominently identified in the GPT-3 paper (Brown et al., 2020), where a 175-billion-parameter model demonstrated competitive NLP benchmark performance using only a handful of in-prompt examples — with frozen weights throughout. The observation was significant because it showed that task adaptation could occur entirely within the [[Context Window]] of a [[Transformer Architecture]], mediated by attention over the given examples, not by any weight modification.
  - The practical importance of ICL lies in its ability to eliminate or drastically reduce costly task-specific fine-tuning pipelines. Practitioners can deploy a single [[Foundation Model]] across dozens of specialised tasks by reformatting task instructions and demonstrations as prompt text, without retraining, dataset curation at scale, or GPU infrastructure for gradient descent.
  - ICL performance depends on several orthogonal factors: the number of demonstrations supplied (one-shot, few-shot, many-shot), the quality and diversity of selected examples, the formatting of input-output pairs, and the order in which demonstrations appear in the prompt. These sensitivities reflect the model's reliance on surface-level statistical patterns as much as genuine task understanding.
  - As context windows grew from thousands to millions of tokens (e.g. Gemini 1.5 Pro, GPT-4 Turbo), the regime shifted to many-shot ICL, where hundreds of examples fit in a single prompt. At sufficient example counts, ICL performance has been shown to approach or match [[Parameter-Efficient Fine-Tuning]] on classification and reasoning benchmarks.

- ### Key Mechanisms
  - **Implicit task inference via attention**: The [[Transformer Architecture]]'s multi-head [[Attention Mechanism]] computes weighted relationships between the query token and all demonstration tokens. Specific induction-head circuits have been identified by [[Mechanistic Interpretability]] research as implementing the key-value retrieval that underlies ICL.
  - **Bayesian framing**: A theoretical account treats ICL as approximate Bayesian inference. Given demonstrations D = {(x₁,y₁), …, (xₖ,yₖ)}, the model computes P(y|x, D) by marginalising over latent task hypotheses h in a prior learned during pre-training: P(y|x,D) ≈ Σ_h P(y|x,h)P(h|D). This framing explains why well-calibrated pre-training priors improve ICL.
  - **Label sensitivity and prompt formatting**: ICL is sensitive to the choice of label words, delimiter formatting, and demonstration order. Calibration techniques (e.g. contextual calibration) correct systematic biases introduced by label imbalance in the demonstration set.
  - **Demonstration selection**: The choice of which examples to include significantly impacts performance. [[Demonstration Selection]] strategies range from random sampling to [[Retrieval-Augmented Generation|retrieval-based]] selection, where a dense retriever finds demonstrations semantically similar to the test query from a large pool.
  - **Chain-of-thought elicitation**: Augmenting demonstrations with explicit reasoning traces — [[Chain-of-Thought Prompting]] — substantially improves ICL on multi-step arithmetic, commonsense, and symbolic reasoning tasks by directing the model to externalise intermediate inference steps within the context.
  - **Many-shot and long-context ICL**: Expanding the [[Context Window]] enables many-shot regimes where performance curves continue improving well beyond the few-shot plateau, making ICL a practical substitute for fine-tuning in resource-constrained settings.

- ### Demonstration Regimes
  - **Zero-shot**: No labelled examples are provided; the model relies entirely on its pre-training and natural language task description. Closely related to [[Zero-Shot Prompting]] and limited by the model's ability to interpret abstract instruction alone.
  - **One-shot**: A single labelled demonstration is provided, allowing the model to align its output format and semantics to the task specification with minimal context overhead.
  - **Few-shot**: Typically two to sixteen demonstrations per prompt. The canonical regime studied in the GPT-3 paper; performance is sensitive to example selection, order, and format.
  - **Many-shot**: Enabled by long-context models; dozens to hundreds of demonstrations populate the [[Context Window]], enabling performance that converges towards [[Supervised Learning]] quality without any gradient updates.
  - **Cross-task transfer ICL**: Demonstrations from a related but distinct task are used to prime the model; enables zero-shot generalisation to entirely new task families by leveraging structural similarities across tasks encoded during pre-training.

- ### Comparison with Related Paradigms
  - **ICL vs. [[Fine-Tuning]]**: Fine-tuning updates model parameters using task-specific training data and gradient descent, producing a specialised checkpoint. ICL leaves weights unchanged; adaptation is ephemeral and does not persist beyond the prompt. Fine-tuning generally achieves higher peak performance on narrow tasks; ICL offers lower deployment cost and greater task flexibility.
  - **ICL vs. [[Parameter-Efficient Fine-Tuning]]**: Methods such as LoRA and prompt tuning reduce the parameter cost of fine-tuning but still require gradient computation and storing adapted weights. ICL requires neither, though PEFT typically outperforms ICL on low-resource specialised tasks.
  - **ICL vs. [[Instruction Tuning]]**: Instruction tuning is a training-time procedure that teaches models to follow natural language directives; ICL is an inference-time capability. Instruction-tuned models generally exhibit stronger ICL, suggesting the two are complementary rather than competing.
  - **ICL vs. [[Retrieval-Augmented Generation]]**: RAG augments the prompt with retrieved knowledge passages rather than labelled task demonstrations. The two paradigms combine naturally: RAG-selected examples can serve directly as ICL demonstrations.
  - **ICL vs. tool use**: In agentic settings, ICL demonstrations can specify tool-call syntax and reasoning chains, teaching the model to invoke external APIs within the prompt context — an interface to [[Agent Reasoning]] architectures.

- ### Limitations and Failure Modes
  - **Context length ceiling**: Even with million-token windows, ICL is bounded by the context limit, constraining the number of demonstrations and the complexity of tasks expressible in-prompt.
  - **Sensitivity to prompt design**: Small changes in wording, label choice, or example order can dramatically alter outputs, making ICL less reproducible than fine-tuned models for production systems requiring consistent behaviour.
  - **Spurious correlations**: Models may latch onto surface-level patterns in demonstrations (e.g. label distribution, formatting) rather than genuine task semantics, producing fragile generalisations exposed by adversarial prompts.
  - **Performance ceiling vs. fine-tuning**: On highly specialised or low-resource tasks, ICL consistently underperforms fine-tuned models, particularly when target data distributions diverge significantly from pre-training.
  - **Prompt injection risk**: In deployed systems, adversarial content in the input can masquerade as demonstrations, hijacking the model's task inference — a security concern addressed by [[Prompt Engineering]] defences and input sanitisation.
  - **Computational cost of long contexts**: Many-shot ICL with very long prompts incurs quadratic attention complexity, making it computationally expensive relative to a fine-tuned model performing the same task with a short prompt.

- ### Research Frontiers
  - **Mechanistic understanding**: Ongoing [[Mechanistic Interpretability]] research aims to precisely characterise which circuits implement ICL across different model families, enabling principled control of when and how ICL activates.
  - **Automated prompt optimisation**: Methods such as automatic few-shot example selection, prompt tuning hybrids, and [[Instruction Tuning]] co-optimisation seek to close the performance gap between ICL and fine-tuning automatically.
  - **Cross-modal ICL**: Extending ICL to multimodal [[Foundation Model|foundation models]] (vision-language, audio-language) by providing image-caption or video-description demonstration pairs alongside text queries.
  - **ICL for structured prediction**: Adapting ICL to tasks with complex output structures (graphs, programs, formal proofs) where standard next-token generation is insufficient without carefully engineered output formats in the demonstrations.
  - **ICL and [[Knowledge Graph]] integration**: Demonstrations can embed structured relational facts, enabling ICL to act as a soft interface between parametric model knowledge and explicit symbolic [[Knowledge Graph]] representations.
  - **Privacy-preserving ICL**: Federated or encrypted demonstrations that allow ICL without exposing sensitive training examples in plaintext within the prompt — a nascent area connecting ICL to data governance and privacy regulation.

- ### Applications and Use Cases
  - **Domain adaptation without retraining**: Legal, medical, and scientific document processing leverages ICL by embedding domain-specific terminology and output formats in the prompt, avoiding expensive [[Fine-Tuning]] data pipelines.
  - **Code generation and debugging**: Coding assistants use ICL to adapt output style, language version, and framework conventions by providing representative input-output code snippets before the generation request.
  - **Structured information extraction**: ICL templates for entity recognition, relation extraction, and slot-filling are specified entirely in natural language with annotated examples, enabling rapid deployment across new schema definitions.
  - **Instruction following and dialogue**: [[Instruction Tuning]] pre-training enables powerful ICL for customer support systems, where a handful of policy-aligned examples steer the model's tone and constraint adherence without fine-tuning.
  - **Evaluation and benchmarking**: ICL is the standard evaluation paradigm for probing model generalisation — e.g., BIG-Bench, MMLU, and SuperGLUE — without contaminating held-out test sets with gradient-based training on task data.
  - **Agent pipelines**: In [[Agent Reasoning]] architectures, ICL supplies tool-use demonstrations, planning trajectories, and output formatting templates within multi-turn prompts, enabling compositional task decomposition at inference time.
  - **Multilingual transfer**: ICL enables cross-lingual task generalisation by providing English demonstrations and querying in a different language, exploiting the multilingual representations built during pre-training on diverse corpora.
  - **Retrieval-augmented ICL**: Combining [[Retrieval-Augmented Generation]] with ICL dynamically populates the prompt with the most informative demonstrations retrieved from large corpora, scaling the effective example pool far beyond the context window.

- ### Relationships
  - requires:: [[Large Language Model]]
  - requires:: [[Attention Mechanism]]
  - requires:: [[Transformer Architecture]]
  - enables:: [[Few-Shot Prompting]]
  - enables:: [[Prompt Engineering]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Task Adaptation]]
  - uses:: [[Chain-of-Thought Prompting]]
  - uses:: [[Demonstration Selection]]
  - uses:: [[Natural Language Processing]]
  - contrastsWith:: [[Fine-Tuning]]
  - contrastsWith:: [[Zero-Shot Prompting]]
  - contrastsWith:: [[Supervised Learning]]
  - contrastsWith:: [[Parameter-Efficient Fine-Tuning]]
  - relatedTo:: [[Few-Shot Learning]]
  - relatedTo:: [[Emergent Capabilities]]
  - relatedTo:: [[Instruction Tuning]]
  - relatedTo:: [[Mechanistic Interpretability]]
  - relatedTo:: [[Context Window]]
  - partOf:: [[Foundation Model]]
  - subClassOf:: [[Meta-Learning]]
  - bridges-to:: [[Knowledge Graph]]
  - bridges-to:: [[Agent Reasoning]]

- ### Theoretical Grounding
  - The [[Meta-Learning]] framing positions ICL as the product of a training regime in which the model implicitly learns to learn from examples: exposure to thousands of distinct tasks during pre-training endows the model with prior distributions over task hypotheses that can be rapidly conditioned on new demonstrations.
  - Mechanistic interpretability work (e.g., Olsson et al., 2022 on induction heads) shows that specific attention head circuits implement a form of "fuzzy key-value lookup" that retrieves label-relevant patterns from demonstrations. This grounded understanding supports principled prompt design.
  - The relationship between ICL and implicit gradient descent has been explored theoretically: certain transformer computations during ICL are mathematically equivalent to one step of gradient descent in the residual stream, partially bridging the conceptual gap between ICL and [[Fine-Tuning]].
  - Research on [[Emergent Capabilities]] shows that ICL performance exhibits phase-transition-like scaling behaviour: minimal capability below a model-size threshold, followed by rapid improvement at a critical scale, motivating the development of ever-larger [[Foundation Model|foundation models]].

- ### ICL and the Scaling Hypothesis
  - [[Emergent Capabilities]] analysis shows that ICL quality exhibits near-discontinuous improvement at certain model scales, suggesting that a minimum parameter count is required before multi-task pattern extraction becomes possible. This observation reinforces investment in large-scale pre-training as the primary driver of general-purpose intelligence.
  - The relationship between pre-training data diversity and ICL breadth is well-established: models trained on more heterogeneous corpora (web text, code, scientific literature, multilingual data) show stronger transfer to novel ICL tasks than models trained on narrow domains.
  - [[Supervised Learning]] paradigms frame task-specific generalisation as a function of labelled training set size; ICL reframes this as a function of inference-time context richness, partially decoupling capability from the training-data annotation bottleneck.
  - Scaling laws for ICL (analogous to Chinchilla laws for training loss) are an active research area: preliminary results suggest that demonstration count, context window size, and model scale interact multiplicatively to determine ICL performance on a given task family.

- ### ICL in Agentic and Multi-Turn Settings
  - In multi-turn dialogue and agentic systems, ICL operates across conversation history: each prior turn functions implicitly as a demonstration, continuously updating the model's effective task representation without any explicit parameter change.
  - [[Agent Reasoning]] frameworks such as ReAct, Reflexion, and AutoGPT rely heavily on ICL to specify the format of thought-action-observation trajectories in the prompt, enabling the model to learn tool-use and self-correction patterns from a handful of curated exemplars.
  - Tool-use ICL demonstrations define the syntax for API calls, function signatures, and structured outputs; the model infers call conventions from the examples and generalises to novel tool invocations within the same session.
  - Memory-augmented agents extend ICL by retrieving relevant past episodes from external stores and injecting them into the prompt as demonstrations, effectively providing the model with a persistent, queryable experience buffer beyond the bounds of a single [[Context Window]].
  - In multi-agent pipelines, ICL enables agent specialisation: a coordinator agent supplies task-specific demonstrations to sub-agents at runtime, dynamically configuring their roles without modifying any agent's underlying weights.

- ### Standards and Context
  - No formal standardisation body governs ICL as a technique; it is an empirical capability described in academic literature and evaluated on community benchmarks (BIG-Bench, MMLU, SuperGLUE, HELM).
  - The Hugging Face ecosystem (datasets, evaluate, transformers) provides de facto tooling standards for constructing ICL evaluation harnesses.
  - OpenAI's GPT-3 and GPT-4 technical reports, Anthropic's Claude model cards, and Google DeepMind's Gemini papers serve as primary empirical reference documents for ICL behaviour and scaling.
  - Enterprise adoption of ICL is governed by the same AI governance and safety frameworks applicable to foundation models generally, including the EU AI Act's provisions on general-purpose AI models and the NIST AI Risk Management Framework.
  - Prompt injection and adversarial demonstrations constitute security considerations specific to ICL-based systems, addressed in emerging AI security standards and red-teaming guidelines.
  - The [[Natural Language Processing]] community has adopted ICL evaluation as a standard methodology for capability assessment, influencing benchmark design and model-release evaluation protocols across major AI labs.

- ### Practical Prompt Design Principles
  - **Consistency**: Use a consistent delimiter and input-output format across all demonstrations; inconsistency misleads the implicit task-structure inference that [[Attention Mechanism]] heads perform.
  - **Representative coverage**: Select demonstrations that span the input distribution rather than clustering in a single sub-region; coverage reduces variance in ICL performance across test queries.
  - **Balanced labels**: Ensure label classes appear roughly equally in demonstrations when performing classification; class imbalance in the prompt introduces systematic output biases that [[Few-Shot Prompting]] calibration methods correct post-hoc.
  - **Output format anchoring**: When the desired output requires a specific schema (JSON, XML, code), include demonstrations that exactly instantiate that schema; the model interpolates format from examples more reliably than from verbal description alone.
  - **Ordering heuristics**: Recent empirical work suggests placing the most similar or hardest examples near the end of the demonstration block (closest to the query) tends to improve performance across [[Large Language Model]] families.
  - **Task description prefix**: Prepending a brief natural-language task description before the demonstrations consistently improves ICL on ambiguous tasks, complementing the implicit structure extracted by [[Meta-Learning]]-derived priors.

- ### Provenance
  - sources:: Brown et al. (2020) "Language Models are Few-Shot Learners" (GPT-3); Olsson et al. (2022) "In-context Learning and Induction Heads"; Xie et al. (2022) "An Explanation of In-context Learning as Implicit Bayesian Inference"; Min et al. (2022) "Rethinking the Role of Demonstrations"; Agarwal et al. (2024) "Many-Shot In-Context Learning"
  - updated:: 2026-06-13
