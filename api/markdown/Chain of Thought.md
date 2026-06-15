public:: true
alias:: Chain-of-Thought

# chain of thought
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74c1451971265462ca972707e5a673acd33b933b815d1177e674684dc2671617",
  "@type": "Page",
  "vc:slug": "chain-of-thought",
  "title": "chain of thought",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chain-of-thought",
  "@type": "Class",
  "label": "Chain of Thought",
  "definition": "Chain-of-Thought (CoT) prompting is a technique for eliciting explicit intermediate reasoning steps from autoregressive large language models before producing a final answer, substantially improving accuracy on arithmetic, symbolic, commonsense, and multi-hop reasoning tasks. The mechanism exploits the sequential token-generation process of transformer-based models: each generated reasoning token conditions all subsequent tokens, enabling multi-step deductions that single-pass prompting cannot reliably perform. CoT encompasses a family of variants — few-shot exemplar CoT, zero-shot CoT, self-consistency decoding, tree-of-thought search, and process reward modelling — collectively forming a foundational paradigm for inference-time compute scaling and complex reasoning in large language models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:chain-of-thought-prompting",
      "label": "Chain-of-Thought Prompting"
    },
    {
      "@id": "urn:ngm:class:cot-prompting",
      "label": "CoT Prompting"
    },
    {
      "@id": "urn:ngm:class:chain-of-thought-reasoning",
      "label": "Chain-of-Thought Reasoning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Language Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:mathematical-reasoning",
        "label": "Mathematical Reasoning"
      },
      {
        "@id": "urn:ngm:class:commonsense-reasoning",
        "label": "Commonsense Reasoning"
      },
      {
        "@id": "urn:ngm:class:multi-hop-reasoning",
        "label": "Multi-Hop Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference-time-compute-scaling",
        "label": "Inference-Time Compute Scaling"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:self-consistency",
        "label": "Self-Consistency"
      },
      {
        "@id": "urn:ngm:class:tree-of-thoughts",
        "label": "Tree of Thought"
      },
      {
        "@id": "urn:ngm:class:process-reward-model",
        "label": "Process Reward Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:token-generation",
        "label": "Token Generation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:model-scale",
        "label": "Model Scale"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:standard-prompting",
        "label": "Standard Prompting"
      },
      {
        "@id": "urn:ngm:class:direct-answer-prompting",
        "label": "Direct Answer Prompting"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:scratchpad-reasoning",
        "label": "Scratchpad Reasoning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:search-algorithms",
        "label": "Search Algorithms"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Chain-of-Thought (CoT) prompting is a technique for eliciting explicit intermediate reasoning steps from [[Large Language Models]] before producing a final answer. By conditioning each generated token on prior reasoning tokens, the sequential nature of [[Transformer]] architectures enables multi-step deductions — including arithmetic, symbolic manipulation, and [[Commonsense Reasoning]] — that standard single-pass prompting cannot reliably perform. CoT encompasses a family of variants (few-shot exemplar, zero-shot, [[Self-Consistency]], [[Tree of Thought]], and [[Process Reward Model]]-guided search) and has become a cornerstone of [[Inference-Time Compute Scaling]] in modern AI systems.

- ### Overview
  - Chain-of-Thought prompting was formally introduced by Wei et al. (2022) and rapidly became one of the most widely adopted techniques in [[Prompt Engineering]]. Rather than asking a model for a direct answer, a CoT prompt encourages the model to verbalise each intermediate step as if working through the problem on a scratchpad. This mimics how humans reason through complex problems and allows the model to exploit all its parametric knowledge at each intermediate step.
  - CoT matters because it unlocks reasoning abilities that appear to be latent in sufficiently large [[Autoregressive Language Model]]s but are not accessible through conventional single-turn prompting. The technique requires no additional training or parameter updates; it is purely an inference-time intervention.
  - Empirical studies consistently show that CoT gains are most pronounced for tasks requiring multiple reasoning steps — e.g., grade-school arithmetic, symbolic manipulation, legal analysis, and code synthesis — and that the benefit scales with [[Model Scale]]. Below a certain model size threshold, CoT often hurts performance rather than helping it.
  - The rise of CoT has redefined how practitioners think about [[In-Context Learning]] and has directly motivated the development of inference-time compute scaling strategies, where additional compute is devoted to generating and verifying longer reasoning traces rather than to training larger models.

- ### Key Mechanisms
  - **Few-Shot Exemplar CoT** — the original form: the prompt includes several worked examples whose solutions are written out step-by-step. The model learns from these demonstrations to produce its own step-by-step reasoning trace.
  - **Zero-Shot CoT** — appending "Let's think step by step" (or similar) to a prompt without any worked examples, sufficient for many tasks when the model is large enough. Relies on [[In-Context Learning]] generalisation from pretraining data.
  - **[[Self-Consistency]]** — samples multiple independent reasoning paths from the model using temperature > 0, then takes a majority vote over final answers. Trades inference compute for substantially higher reliability; an early and powerful example of [[Inference-Time Compute Scaling]].
  - **[[Tree of Thought]]** — frames reasoning as a search problem over a tree of partial solutions. Candidate reasoning steps are scored by a verifier and explored via breadth-first or depth-first search, linking CoT directly to classical [[Search Algorithms]] and [[Planning]] from [[Symbolic AI]].
  - **[[Process Reward Model]] (PRM)** — a separate model trained to score the correctness of each individual reasoning step (rather than only the final answer), enabling fine-grained supervision of the reasoning trace and used in reinforcement learning pipelines such as those underpinning OpenAI o1/o3 and DeepSeek-R1.
  - **Scratchpad Reasoning** — a closely related paradigm in which the model is explicitly given a "scratch pad" token budget to perform private computation before emitting a visible answer, investigated as an inductive bias in [[Reinforcement Learning from Human Feedback]] fine-tuning.
  - **Programme-of-Thought** — a variant in which intermediate steps are expressed as executable code rather than natural language, allowing a code interpreter to perform deterministic sub-computations and return results back into the reasoning chain.

- ### Applications / Use Cases
  - **Mathematics and Science** — solving multi-step arithmetic, algebra, calculus, and physics problems. CoT-enabled models now approach or exceed human performance on several graduate-level benchmark suites.
  - **Code Generation and Debugging** — step-by-step decomposition of a programming task into sub-problems before generating code; systematically isolating bugs in existing code.
  - **Legal and Medical Reasoning** — structured reasoning over case law or differential diagnosis, where each intermediate inference must be traceable and auditable.
  - **Complex Question Answering** — [[Multi-Hop Reasoning]] over knowledge bases and documents where the answer requires chaining several facts together.
  - **AI Agents and Planning** — [[AI Agent]] frameworks (e.g., ReAct, Toolformer) rely on CoT-structured thinking to decompose high-level goals into tool calls, sub-tasks, and verification steps. [[Planning]] pipelines in agentic systems almost universally use CoT or variants.
  - **Education Technology** — generating worked solutions and explanations for students, making reasoning visible and pedagogically useful.
  - **Evaluation and Alignment** — CoT traces provide interpretability affordances; they allow researchers to inspect model reasoning before the final answer, aiding alignment debugging and [[Reinforcement Learning from Human Feedback]] reward modelling.

- ### Variants and Evolution
  - **Least-to-Most Prompting** — decomposes a complex problem into sub-problems ordered from simplest to hardest, solving each sequentially and feeding results forward.
  - **Automatic CoT (Auto-CoT)** — automatically generates exemplar reasoning chains using the model itself, removing the need for human-authored demonstrations.
  - **Structured CoT / Skeleton-of-Thought** — first generates a skeleton outline of the reasoning structure, then fills in each branch in parallel, reducing latency.
  - **ReAct (Reason + Act)** — interleaves CoT reasoning steps with tool-use actions, enabling the model to retrieve information or execute code mid-reasoning and incorporate results back into the trace.
  - **Metacognitive Prompting** — instructs the model to evaluate the quality of its own reasoning chain and revise it, an early form of deliberate self-correction.
  - Extended reasoning models such as OpenAI o1/o3 and DeepSeek-R1 internalise long CoT traces as first-class training targets via reinforcement learning, representing the transition from prompting technique to architectural paradigm.

- ### Relationships
  - requires:: [[Large Language Models]]
  - requires:: [[Prompt Engineering]]
  - requires:: [[Autoregressive Language Model]]
  - enables:: [[Reasoning]]
  - enables:: [[Mathematical Reasoning]]
  - enables:: [[Commonsense Reasoning]]
  - enables:: [[Multi-Hop Reasoning]]
  - enables:: [[Inference-Time Compute Scaling]]
  - hasPart:: [[Zero-Shot Chain of Thought]]
  - hasPart:: [[Self-Consistency]]
  - hasPart:: [[Tree of Thought]]
  - hasPart:: [[Process Reward Model]]
  - uses:: [[Transformer]]
  - uses:: [[In-Context Learning]]
  - uses:: [[Few-Shot Learning]]
  - uses:: [[Token Generation]]
  - dependsOn:: [[Emergent Capabilities]]
  - dependsOn:: [[Model Scale]]
  - contrastsWith:: [[Standard Prompting]]
  - contrastsWith:: [[Direct Answer Prompting]]
  - contrastsWith:: [[Retrieval-Augmented Generation]]
  - relatedTo:: [[Scratchpad Reasoning]]
  - relatedTo:: [[Reinforcement Learning from Human Feedback]]
  - relatedTo:: [[Planning]]
  - relatedTo:: [[AI Agent]]
  - bridges-to:: [[Symbolic AI]]
  - bridges-to:: [[Search Algorithms]]

- ### Standards & Context
  - CoT prompting does not currently correspond to a formal standards-body specification; it is a research-originated empirical technique. Key benchmarks used to evaluate CoT include:
    - **GSM8K** — grade-school maths word problems; the canonical CoT evaluation dataset.
    - **MATH** — competition-level mathematics.
    - **BBH (BIG-Bench Hard)** — a curated subset of BIG-Bench tasks where CoT is most beneficial.
    - **ARC-Challenge** — science question answering requiring multi-step reasoning.
    - **StrategyQA** — implicit [[Multi-Hop Reasoning]] requiring strategy decomposition.
  - Governance relevance: auditable CoT traces are increasingly cited in AI safety and explainability discussions as a mechanism for making model reasoning inspectable, relevant to emerging regulatory frameworks (EU AI Act, NIST AI RMF) that require transparency in high-stakes AI decision-making.
  - CoT interacts with the broader [[Inference-Time Compute Scaling]] paradigm, which treats test-time reasoning as a resource that can be traded against training compute, reshaping infrastructure planning for large-scale AI deployments.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
