public:: true
alias:: Chain of Thought Reasoning

# chain-of-thought reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0938d2a80eb74e9dc381dbc55b6558d6f452d600d3fde5c4d7672a0b119d9b50",
  "@type": "Page",
  "vc:slug": "chain-of-thought-reasoning",
  "title": "chain-of-thought reasoning",
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
  "@id": "urn:ngm:class:chain-of-thought-reasoning",
  "@type": "Class",
  "label": "Chain-of-Thought Reasoning",
  "definition": "Chain-of-Thought Reasoning is the capacity of large language models to generate coherent sequences of intermediate logical, mathematical, or factual steps as part of producing a final answer, treating each intermediate token as an active computational resource that reshapes residual stream activations for subsequent Transformer layers. Unlike the surface prompting technique that elicits it, CoT Reasoning denotes an emergent model capability — present above certain parameter-scale thresholds — whereby the model decomposes complex problems into verifiable sub-steps rather than collapsing directly to a final token. This capability underpins inference-time compute scaling strategies including self-consistency sampling, process reward models, step-level verifiers, and tree-of-thought search, and connects neural language modelling to classical AI paradigms of deductive planning and symbolic reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:chain-of-thought",
      "label": "Chain of Thought"
    },
    {
      "@id": "urn:ngm:class:cot-reasoning",
      "label": "CoT Reasoning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mathematical-reasoning",
        "label": "Mathematical Reasoning"
      },
      {
        "@id": "urn:ngm:class:multi-step-reasoning",
        "label": "Multi-Step Reasoning"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agents"
      },
      {
        "@id": "urn:ngm:class:self-consistency",
        "label": "Self-Consistency"
      },
      {
        "@id": "urn:ngm:class:process-reward-model",
        "label": "Process Reward Models"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:zero-shot-prompting",
        "label": "Zero-Shot Prompting"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scratchpad-reasoning",
        "label": "Scratchpad Reasoning"
      },
      {
        "@id": "urn:ngm:class:tree-of-thoughts",
        "label": "Tree of Thought"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-scaling",
        "label": "Model Scaling"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:direct-answer-prompting",
        "label": "Direct Answer Prompting"
      },
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:standard-prompting",
        "label": "Standard Prompting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mechanistic-interpretability",
        "label": "Mechanistic Interpretability"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference-compute",
        "label": "Inference-Time Compute"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:automated-theorem-proving",
        "label": "Automated Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
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
  - Chain-of-Thought Reasoning (CoT) is an emergent capability of [[Large Language Models]] whereby the model generates explicit sequences of intermediate logical, mathematical, or factual steps before arriving at a final answer, treating each intermediate reasoning token as an active computational resource rather than a stylistic artefact. Formally introduced as a prompting strategy by Wei et al. (NeurIPS 2022) and subsequently demonstrated to arise zero-shot in sufficiently large models by Kojima et al. (2022), CoT Reasoning is now understood as a fundamental scaling-emergent property that transforms how [[Transformer Architecture]] models allocate computation: intermediate tokens modify the [[Attention Mechanism]] activations and [[Residual Stream]] values propagated to later [[Transformer]] layers, providing additional computational bandwidth for compositional multi-hop operations that would be intractable in a single forward-pass collapse to a final token. This contrasts sharply with [[Direct Answer Prompting]], in which the full reasoning burden must be compressed into a single prediction step. The capability is foundational to the modern paradigm of [[Inference-Time Compute]] scaling — the insight that reasoning quality can be improved not only by growing model parameters but by allocating more inference tokens for deliberate step-by-step thought. This paradigm was industrialised in OpenAI's o1/o3 model series (2024–2025), Anthropic's Extended Thinking mode, and DeepSeek-R1 (January 2025), the latter demonstrating that long CoT can emerge purely from [[Reinforcement Learning]] without labelled reasoning exemplars. CoT is the substrate for advanced inference-time techniques including [[Self-Consistency]] sampling, [[Process Reward Models]] that assign step-level verifiers, [[Tree of Thought]] branching search, and [[Scratchpad Reasoning]] for end-to-end trained intermediate computation. It bridges classical [[Symbolic AI]] and neural approaches by externalising discrete reasoning steps that can be inspected, verified, and potentially grounded in [[Formal Verification]] tools. From a circuit-complexity perspective, CoT allows a constant-depth [[Transformer]] to serialise computation across the token sequence dimension, enabling it to solve problems that would otherwise require exponential width at constant depth — connecting [[Natural Language Processing]] practice directly to formal computational complexity theory. The capability is central to agentic [[Autonomous Agents]] architectures (ReAct, Reflexion, AutoGPT) and to [[Mechanistic Interpretability]] research on how multi-step reasoning is encoded in model weights. [[Reinforcement Learning from Human Feedback]] and process-level reward shaping are the primary alignment tools for improving CoT fidelity and reducing unfaithful or post-hoc rationalisation. Benchmark arenas for CoT capability include GSM8K, MATH, BIG-Bench Hard, ARC-Challenge, and HumanEval.

- ### Semantic Classification
  - owl-class:: ai:ChainOfThoughtReasoning
  - owl-role:: EmergentCapability | InferenceProtocol | CognitiveMechanism
  - owl-inferred:: ai:ReasoningTechnique, ai:InferenceTimeScalingMethod, ai:InterpretabilityEnablingCapability
  - belongs-to-domain:: [[Artificial Intelligence]]
  - implemented-in-layer:: [[Algorithmic Layer]]

- ### Relationships
  - is-subclass-of:: [[AI Technique]], [[Emergent Capability]]
  - has-part:: [[Scratchpad Reasoning]], [[Tree of Thought]], [[Self-Refinement]], [[Self-Consistency]], [[Process Reward Models]]
  - requires:: [[Large Language Models]], [[Transformer Architecture]], [[In-Context Learning]], [[Model Scaling]]
  - enables:: [[Mathematical Reasoning]], [[Multi-Step Reasoning]], [[Autonomous Agents]], [[Self-Consistency]], [[Process Reward Models]], [[Inference-Time Compute]], [[Formal Verification]]
  - implements:: [[Prompt Engineering]], [[Few-Shot Learning]], [[Zero-Shot Prompting]]
  - depends-on:: [[Attention Mechanism]], [[Model Scaling]], [[Residual Stream]]
  - supports:: [[Mechanistic Interpretability]], [[AI Alignment]], [[Natural Language Processing]], [[Code Generation]]
  - uses:: [[Reinforcement Learning from Human Feedback]], [[Reinforcement Learning]], [[Zero-Shot Prompting]], [[Few-Shot Learning]]
  - contrasts-with:: [[Direct Answer Prompting]], [[Standard Prompting]], [[Symbolic AI]], [[System 1 Thinking]]
  - related-to:: [[Mechanistic Interpretability]], [[Reasoning]], [[Inference-Time Compute]], [[Natural Language Processing]], [[Automated Theorem Proving]], [[Formal Verification]], [[Backpropagation]]
  - standardized-by:: [[NeurIPS 2022 Proceedings]], [[OpenAI Technical Reports]], [[Anthropic Research]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:ScatchpadReasoning))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:TreeOfThought))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:SelfConsistency))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:ProcessRewardModel))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:SelfRefinement))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:StepLevelVerifier))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:hasPart ai:FewShotExemplar))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:requires ai:TransformerArchitecture))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:requires ai:InContextLearning))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:ModelScaling))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:dependsOn ai:ResidualStream))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearningFromHumanFeedback))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:MathematicalReasoning))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:MultiStepReasoning))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:AutonomousAgents))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:InferenceTimeCompute))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:FormalVerificationAssistance))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:enables ai:EducationalTutoring))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:supports ai:MechanisticInterpretability))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:supports ai:AIAlignment))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:implements ai:PromptEngineering))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:implements ai:FewShotLearning))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:implements ai:ZeroShotPrompting))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:implements ai:InferenceTimeScaling))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:reducesTo ai:StandardPrompting))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:contrastsWith ai:DirectAnswerPrompting))
    SubClassOf(ai:ChainOfThoughtReasoning
      ObjectSomeValuesFrom(ai:contrastsWith ai:SymbolicAI))
    ```

  - ## About
    Chain-of-Thought Reasoning emerged as a named research concept in January 2022 with Jason Wei et al.'s preprint "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (later published at NeurIPS 2022). The paper showed that providing large language models with worked exemplars containing natural-language intermediate reasoning steps — rather than just question–answer pairs — dramatically improved performance on arithmetic, commonsense, and symbolic reasoning benchmarks. Critically, the effect was only observed in models exceeding roughly 100 billion parameters, establishing CoT as a scaling-emergent property. Kojima et al. (2022) extended this to zero-shot settings by appending "Let's think step by step" to prompts, demonstrating that sufficiently large models can spontaneously produce beneficial reasoning chains without worked examples.

    The scientific significance of CoT extends beyond benchmark performance. From a mechanistic standpoint, intermediate tokens in a chain of thought are not merely legible justification: they reshape the residual stream state that subsequent Transformer layers process, providing additional working memory bandwidth for computations that cannot be compressed into a single autoregressive step. This was formalised by Feng et al. (2023) and related circuit-complexity arguments showing that CoT can reduce the circuit depth required to solve certain classes of problems from exponential to logarithmic in problem size. The theoretical connection to computational complexity situates CoT at the intersection of neural language modelling and classical results in automata theory and boolean circuits, suggesting that the gains from inference-time compute may be qualitative rather than merely quantitative.

    By 2025, CoT had become the architectural backbone of an entire family of "reasoning models" — OpenAI o1 (September 2024), o3, and o4-mini; Anthropic Claude's Extended Thinking capability; Google's Gemini 2.0 Thinking; and DeepSeek-R1 (January 2025). DeepSeek-R1 was particularly significant because it demonstrated that long CoT can emerge purely via reinforcement learning with verifiable rewards, without any human-labelled reasoning traces as training signal. This discovery, made by a Chinese AI lab at a fraction of frontier lab budgets, reshaped the field's understanding of how reasoning capability develops and challenged assumptions about the necessity of supervised fine-tuning for instilling reliable multi-step thought.

  - ## Components and Architecture
    Chain-of-Thought Reasoning as a capability comprises multiple interacting mechanisms and elicitation techniques:

    - **Few-shot CoT Prompting**: Providing worked examples with explicit intermediate steps in the context window. The model conditions on these exemplars through [[In-Context Learning]], producing analogous reasoning chains for new problems. Requires carefully curated exemplars and benefits from diversity in the example set.
    - **Zero-shot CoT**: Appending trigger phrases ("Let's think step by step", "Reason carefully before answering") without exemplars. Effective in models above roughly 60–100B parameters; reliability increases with further scale. Relies on [[Zero-Shot Prompting]] and generalisation from pretraining data.
    - **[[Self-Consistency]] Sampling**: Generating k independent CoT paths (typically k=20–40) and returning the majority-vote answer across all paths. Substantially reduces variance on mathematical and logical tasks. Acts as an ensemble over the reasoning manifold.
    - **[[Process Reward Models]] (PRMs)**: Training a separate model to assign scalar reward scores to each reasoning step rather than only the final answer. Step-level rewards allow reinforcement learning to correct intermediate errors before they propagate to final predictions. Lightman et al. (2023) established the benchmark for PRM evaluation with the PRM800K dataset.
    - **[[Tree of Thought]] (ToT)**: Structuring reasoning as a tree search where the model generates branching candidate reasoning steps, evaluates each using a value function or self-evaluation, and prunes unpromising branches. Supports both breadth-first and depth-first search over the reasoning space.
    - **[[Scratchpad Reasoning]]**: Training models end-to-end with intermediate computation tokens included in the target sequence, allowing the model to learn its own symbolic scratch space rather than following a natural-language template. Developed by Nye et al. (2021) prior to the CoT naming.
    - **[[Self-Refinement]]**: Iterative loops where the model critiques its own reasoning chain and generates improved versions. Forms the basis of inference-time self-correction in agentic [[Autonomous Agents]] frameworks.
    - **Step-level Verifiers**: External learned models or rule-based checkers that validate each reasoning step's logical validity, mathematical correctness, or factual accuracy. Used both at training time (reward signal) and at inference time (beam scoring).
    - **Least-to-Most Prompting**: Decomposes the original question into a sequence of progressively harder sub-questions, solving each in order. Particularly effective for compositional generalisation tasks.
    - **Program-of-Thought (PoT)**: Uses Python or pseudo-code as the intermediate representation. Delegates exact numerical computation to a code interpreter, allowing the [[Large Language Models]] to focus on logical structure.

  - ## Use Cases
    - **Mathematical Problem-Solving**: CoT enables LLMs to tackle multi-step arithmetic through competition-level mathematics. On GSM8K (grade-school mathematics), CoT-equipped models improved from near-chance to state-of-the-art in two years (2022–2024). On the MATH dataset, models such as OpenAI o3 and DeepSeek-R1 achieve performance competitive with mathematics olympiad participants. CoT serialises the intermediate algebraic manipulations that would otherwise require the model to simultaneously track multiple symbolic bindings.
    - **Code Generation and Debugging**: Systematic problem decomposition before code synthesis improves correctness, modularity, and adherence to specifications. Agentic coding frameworks (Cursor, Devin, SWE-agent) embed CoT-style planning loops that first decompose the task, then write code, then verify against tests. Step-level debugging applies CoT to fault localisation.
    - **Scientific Reasoning**: Multi-hop inference over chemistry, biology, physics, and materials science knowledge bases benefits from explicit intermediate deductions. CoT allows models to chain facts across domain boundaries and check dimensional consistency for physical reasoning.
    - **Legal and Medical Reasoning**: Structured argumentation in legal analysis and differential diagnosis in medicine require intermediate legibility for professional validation. CoT-generated reasoning chains can be audited by human experts and flagged for review when steps appear implausible. The EU AI Act's transparency provisions create regulatory incentives for legible reasoning traces in high-stakes domains.
    - **Agentic Planning (ReAct, Reflexion, AutoGPT)**: [[Autonomous Agents]] frameworks interleave CoT reasoning traces with tool calls (web search, code execution, API calls). The reasoning trace forms a planning substrate that guides tool selection and integrates returned information into subsequent steps. CoT enables agents to self-correct when a tool returns unexpected output.
    - **Formal Verification Assistance**: CoT bridges neural flexibility and formal rigour by generating Lean, Coq, or Isabelle proof sketch fragments that can be checked by automated verifiers. This connects [[Large Language Models]] to [[Automated Theorem Proving]] pipelines in mathematics and safety-critical software verification.
    - **Educational Tutoring**: Visible reasoning steps are pedagogically valuable: a system that shows students how to approach a problem — rather than just giving the answer — functions as a Socratic dialogue partner. CoT-generated worked examples can be personalised to a student's demonstrated misconceptions.
    - **Commonsense and Causal Reasoning**: Tasks requiring implicit world-model traversal (temporal reasoning, spatial inference, counterfactual analysis) benefit from externalised chains that make hidden assumptions explicit and subject to verification.

  - ## Formal Algorithm: Chain-of-Thought Inference
    The procedural mechanics of generating and scoring Chain-of-Thought outputs can be formalised as follows:

    **Few-Shot CoT Inference (Standard):**
    ```
    Input: Question Q, Exemplars E = {(q_i, r_i, a_i)} where r_i is the reasoning trace
    Context C = concatenate([E_1, ..., E_k, Q])
    Output tokens y_1, y_2, ..., y_T sampled autoregressively:
      For t = 1 to T:
        y_t ~ softmax(LM(C, y_1, ..., y_{t-1}) / temperature)
    Until end-of-reasoning token encountered: extract answer from y_1..y_T
    ```

    **Self-Consistency CoT:**
    ```
    Generate k CoT trajectories: (r_1, a_1), ..., (r_k, a_k) with temperature > 0
    Return majority_vote({a_1, ..., a_k})
    Optionally: weight votes by PRM score of corresponding reasoning trace
    ```

    **Tree-of-Thought Search (BFS variant):**
    ```
    Initialise: root node = problem statement
    For each depth level d = 1 to D_max:
      For each leaf node n at depth d-1:
        Generate B child reasoning steps: s_1, ..., s_B ~ LM(n)
        Evaluate each child: v_i = value_function(s_i)  # self-eval or PRM
        Prune to top-K children by v_i
    Return: reasoning path to highest-value leaf
    ```

    **Process Reward Model Training:**
    ```
    Dataset: {(step_1, ..., step_T, label_t)} where label_t ∈ {correct, incorrect}
    Train PRM: min_θ Σ_{t=1}^T BCE(PRM_θ(step_1..step_t), label_t)
    At inference: score(reasoning_chain) = Π_{t=1}^T PRM_θ(step_1..step_t)
    ```

    **Reinforcement Learning–Based CoT Training (DeepSeek-R1 style):**
    ```
    Policy π_θ: the language model generating reasoning traces
    Reward r(trajectory): 1 if final answer correct (verifiable), 0 otherwise
    Optimise: max_θ E_{trajectory ~ π_θ}[r(trajectory)] via GRPO or PPO
    Result: model spontaneously develops extended CoT behaviour as reward-maximising strategy
    ```

  - ## Quantitative Scaling Properties
    The relationship between Chain-of-Thought Reasoning quality and scale exhibits empirical patterns that have shaped research and deployment strategy:

    **Parameter Scale Threshold**: The Wei et al. (2022) experiments observed CoT benefit appearing sharply at around 100B parameters in the PaLM model family, with smaller models actually performing worse with CoT than without (CoT exemplars consumed context window space without providing reasoning benefit below threshold). The 2022 survey of emergent abilities identified CoT as a canonical emergent capability with a step-change profile in parameter-performance space.

    **Token Scale (Inference-Time Compute)**: The Snell et al. (2024) scaling analysis found that the optimal strategy for a given compute budget depends on problem difficulty: for easy problems, best-of-N sampling with short CoT traces outperforms long single traces; for hard problems, long CoT traces with beam search over reasoning steps are optimal. The cross-over point is problem-specific and can be estimated from difficulty classifiers. This insight informs adaptive inference systems that allocate reasoning compute dynamically.

    **Data Scale for PRM Training**: Lightman et al. (2023) trained PRMs on 800K step-level annotations from human labellers. The PRM800K dataset showed that step-level data quality matters more than quantity: a PRM trained on 75K high-quality annotations rivalled one trained on 800K annotations if annotation quality was higher in the smaller set. Subsequent work on automated PRM data generation (via LLM-generated step annotations) attempts to scale annotation beyond what human labelling can reach.

    **RL Compute Scale**: DeepSeek-R1's training used substantially less labelled human data than RLHF-based approaches, relying instead on verifiable rewards from mathematical and code benchmarks. The compute required to discover stable long CoT behaviour via pure RL scales with the model size and the density of verifiable problems in the training distribution. The observation that efficient CoT emergence requires sufficient RL training steps — not just sufficient model parameters — motivates the "reasoning models as RL training products" paradigm.

  - ## Academic Context
    The formal history of CoT Reasoning as a named capability begins with Wei et al. (2022), but the conceptual lineage is older. Scratchpad computation was explored by Graves (2014) with Neural Turing Machines, which added an external addressable memory to neural networks precisely to enable multi-step computation beyond what a fixed-size recurrent state supports. Rationale-based generation was studied in educational NLP, and work on explanation generation for neural models provided early precedents for making intermediate reasoning explicit. The emergent capabilities framing — that CoT appears above parameter thresholds — was contextualised by Wei et al. (2022b) "Emergent Abilities of Large Language Models" (TMLR 2022), though subsequent work by Schaeffer et al. (2023) argued that some apparent emergence arises from metric discontinuities (accuracy vs. log-loss evaluated at the same model) rather than genuine phase transitions in the underlying capability.

    Key theoretical contributions include Feng et al. (2023) "Towards Revealing the Mystery Behind Chain of Thought" (NeurIPS 2023) showing that CoT enables Transformers to solve problems in TC⁰ that constant-depth Transformers without CoT cannot; Merrill and Sabharwal (2023) formalising the depth-serialisation connection using formal language theory; and research on faithful CoT by Turpin et al. (2023) showing that stated reasoning steps can be post-hoc rationalisations systematically influenced by prompt framing, motivating process-level reward training. Lanham et al. (2023) at Anthropic conducted controlled experiments on when chain-of-thought reasoning actually causally contributes to finding answers versus when it is redundant.

    The connection between CoT and the broader programme of [[Mechanistic Interpretability]] has been explored by Elhage et al. (Anthropic) and others investigating how [[Transformer Architecture]] circuits implement multi-step operations. The induction head mechanism — a two-layer attention circuit identified by Olsson et al. (2022) — provides an example of how compositional operations can be implemented in Transformer weights, suggesting what the mechanistic substrate of CoT capability might look like when fully characterised.

    On the inference-time compute side, Snell et al. (2024) "Scaling LLM Test-Time Compute Optimally" (NeurIPS 2024) provided rigorous analysis of when test-time scaling helps and what the optimal allocation strategy looks like for different problem difficulty distributions. The 2025 arXiv survey "A Survey of Frontiers in LLM Reasoning: Inference Scaling, Learning to Reason, and Agentic Systems" (arXiv:2504.09037) provided comprehensive coverage of the field by mid-2025, cataloguing work on long CoT, verifiable reasoning, and agentic frameworks.

    The [[Reinforcement Learning]] approach to instilling CoT was established by DeepSeek-AI (2025) with DeepSeek-R1 (arXiv:2501.12948), demonstrating that verifiable reward signals (mathematical correctness, code test passage) can autonomously develop long CoT behaviour without human-curated reasoning exemplars. This connected the CoT literature to classical RL exploration-exploitation theory and to [[Reinforcement Learning from Human Feedback]] methodologies, and generated a wave of follow-on work on reward shaping, off-policy RL for language models, and the role of verifiability in determining which domains can benefit from RL-based reasoning training.

    The theoretical study of process reward models was advanced by the PRM800K release (Lightman et al. 2023), the exploration of automatic PRM annotation (Wang et al. 2024), and work on outcome-supervised versus process-supervised reward models showing that process supervision consistently outperforms outcome supervision for mathematical reasoning when the reasoning path matters for reliability.

  - ## Multimodal and Cross-Domain Extensions
    The Chain-of-Thought framework has expanded well beyond text-only language models to encompass multimodal reasoning, structured domains, and specialist problem types. These extensions reflect the generality of the underlying insight — that explicit intermediate steps improve performance on complex inference tasks — while adapting the mechanism to the constraints of each modality and domain.

    **Multimodal CoT** (Zhang et al. 2023; Wu et al. 2024) extends the framework to vision-language models where reasoning steps can reference visual elements: specific image regions, objects, spatial relationships, and visual attributes. A multimodal chain of thought for a medical diagnosis task might proceed: "Step 1: Identify the lesion region [bounding box coordinates]. Step 2: Note the irregular border — this suggests malignancy. Step 3: Check lymph node involvement in the upper-right quadrant. Conclusion: Classify as stage IIb." The intermediate steps anchor reasoning in specific visual evidence, making the diagnostic process auditable. Multimodal CoT has been applied to chart understanding, scientific diagram interpretation, video reasoning, and embodied navigation tasks where the agent must reason about physical space.

    **Code Generation with CoT** has evolved into a sophisticated sub-field. Agentic coding assistants (Devin by Cognition, SWE-agent by Princeton, Cursor) embed multi-step planning loops: parse the task specification, identify relevant code structures, write a solution plan as pseudo-code, implement each step, run tests, and iterate based on test failures. The reasoning trace connects the specification to the implementation in an inspectable way, enabling users to catch misunderstandings early. SWE-bench (Jimenez et al. 2023) measures the ability of agents to resolve GitHub issues in real repositories and has become a standard benchmark for code-focused CoT reasoning capabilities, with top systems achieving 40–60% resolution rates by 2025.

    **Mathematical Theorem Proving** represents the most rigorous application of CoT-style reasoning. Lean 4, Coq, and Isabelle provide formally verified intermediate reasoning steps checked by machine. Work on neural theorem proving (Han et al. 2022 "Proof Artifact Co-Training"; Polu et al. 2023 "Formal Mathematics Statement Curriculum Learning"; Zheng et al. 2024 "LeanDojo") trains language models to generate tactics or proof steps in formal proof assistants, with the CoT reasoning trace constituting a formal proof. The AlphaProof system (DeepMind, 2024) combined language model CoT with formal verification to solve multiple problems at International Mathematical Olympiad level, a watershed demonstration of CoT-enabled formal reasoning.

    **Scientific Literature and Hypothesis Generation**: Large language models with extended CoT reasoning can chain across multiple scientific papers to generate novel hypotheses — effectively performing literature synthesis as a reasoning process. Systems like SciAgent and ResearchAgent embed literature retrieval as tool calls within CoT traces, interleaving factual retrieval with deductive reasoning to propose and evaluate scientific conjectures. This connects CoT to the emerging field of AI-assisted scientific discovery.

    **Financial Reasoning and Decision Analysis**: Structured financial reasoning tasks (earnings analysis, risk assessment, regulatory compliance review) benefit from CoT-style step decomposition. Multi-hop reasoning over financial statements, regulatory documents, and market data requires chaining quantitative and qualitative inferences. The legibility of CoT reasoning chains is particularly valuable in financial contexts where audit trails and accountability are regulatory requirements.

  - ## Critical Limitations and Failure Modes
    Chain-of-Thought Reasoning is not a panacea, and understanding its failure modes is essential for responsible deployment.

    **Unfaithful Reasoning**: The most fundamental concern is that a model's stated reasoning steps may not causally determine its answer. Turpin et al. (2023) demonstrated that when prompts are constructed to bias the model toward a particular answer (e.g., by labelling incorrect options as "correct" in the few-shot exemplars), the model's CoT reasoning systematically changes to justify the biased answer while the final answer follows the bias rather than the stated argument. This suggests that, for some tasks and models, the reasoning trace is post-hoc rationalisation rather than causal explanation — a significant concern for trust and oversight.

    **Hallucination in Reasoning Steps**: Individual steps in a reasoning chain can contain factual errors, particularly when the reasoning requires precise knowledge of facts, formulae, or code syntax. A single hallucinated step can propagate errors through the remaining reasoning chain, leading to a coherent-seeming but incorrect final answer. Self-consistency sampling mitigates this by averaging over many trajectories, but does not eliminate it.

    **Length-Accuracy Trade-offs**: Longer reasoning chains are not always better. Chen et al. (2024) and other studies have documented that models sometimes "overthink" easy problems, introducing unnecessary complexity and sometimes contradicting earlier correct steps. Adaptive token budgets that match reasoning depth to problem difficulty are an active research direction. The "chain-of-draft" approach (Xu et al. 2025) explores generating minimal rather than maximal reasoning traces.

    **Adversarial Vulnerability**: CoT reasoning chains are vulnerable to prompt injection attacks where an adversary injects misleading reasoning steps into the model's context. For agentic systems that process external data (web pages, user documents), an adversary can embed instructions that hijack the reasoning trace and redirect the agent's actions. This is a significant security concern for production CoT-based agents.

    **Distribution Shift**: CoT performance can degrade significantly when the problem distribution shifts from the training or exemplar distribution. Models trained on mathematical CoT may perform poorly on legal reasoning CoT and vice versa, even when the required reasoning depth is similar. Domain-specific CoT fine-tuning is often required for reliable performance in specialist contexts.

    **Computational Cost**: Long CoT generation is significantly more expensive than direct-answer generation. On mathematical benchmarks, reasoning models generating 1,000–5,000 tokens per answer consume 10–50× more inference compute than direct-answer models generating 50–100 tokens. This cost is acceptable for high-value tasks but prohibitive for high-volume, latency-sensitive applications. Efficient CoT via speculative decoding, parallel sampling, and adaptive token budgets are active research directions addressing this economic constraint.

  - ## Current Landscape (2026)
    By mid-2026, Chain-of-Thought Reasoning is the default inference mode for all frontier language models deployed in reasoning-intensive applications. The major model families — OpenAI o-series, Anthropic Claude Extended Thinking, Google Gemini Thinking, DeepSeek-R1/R2, and Qwen's reasoning variants — all employ long CoT generation, typically with hidden scratchpad tokens that are not shown to end users but influence the final response. The model series divide into two camps: those that expose the reasoning trace (DeepSeek-R1, some open-weight models) for interpretability and those that hide it (OpenAI o3) for product reasons.

    Inference-time compute scaling has shifted the design space: allocating 16× more inference tokens on a medium-sized model can outperform a larger model with fixed inference budget on mathematical benchmarks. This has significant hardware implications, driving demand for inference accelerators and speculative decoding techniques that make long-CoT generation economically viable.

    Key open challenges as of 2026 include: (1) faithful CoT — ensuring stated reasoning steps causally determine the final answer rather than being post-hoc rationalisations; (2) latent CoT — whether models develop internal reasoning representations not surfaced as tokens; (3) adversarial CoT — robustness of reasoning chains to prompt injection and jailbreaking; (4) multilingual CoT — generalising reasoning capability across languages, explored in arXiv:2508.14828; and (5) process reward model data efficiency — reducing the cost of step-level annotation.

    The EU AI Act provisions (effective 2025–2026) require transparency of high-risk AI system decision processes, creating compliance incentive for CoT-style legible reasoning in medical, legal, and financial applications. UK AI regulation under the proposed AI Regulation Bill similarly emphasises explainability for consequential decisions.

  - ## UK Context
    The UK has notable academic and industrial presence in the research traditions underlying CoT Reasoning. The University of Edinburgh's School of Informatics, historically one of Europe's leading centres for natural language processing and formal reasoning, contributes to multi-step inference research through groups such as the Edinburgh NLP group led by Rico Sennrich and colleagues. Imperial College London's AI group has contributed to reasoning and planning research, including work on neurosymbolic approaches that bridge CoT's emergent capability with structured symbolic systems. UCL's Gatsby Computational Neuroscience Unit and computer science department contribute to the theoretical underpinnings of attention and language model inference. The Alan Turing Institute (London and distributed) coordinates national AI research including inference-time compute and AI safety topics directly relevant to CoT reliability. Cambridge's Computer Laboratory (Department of Computer Science and Technology) has contributed to formal methods and compiler/proof assistant technology relevant to CoT-assisted theorem proving.

    The UK's Frontier AI Taskforce (renamed AI Safety Institute, now the AI Security Institute) published evaluations of advanced reasoning model capabilities in 2024–2025, including assessments relevant to CoT-enabled deception and misalignment risks. The Leverhulme Centre for the Future of Intelligence (Cambridge/Oxford) studies long-term implications of reasoning-capable AI systems.

    Northern English universities also contribute: the University of Leeds has natural language processing research groups; Sheffield NLP (University of Sheffield) has a long tradition in information extraction and computational semantics; Manchester's Alliance Manchester Business School and Computer Science department study AI decision-making and explainability, directly relevant to legible CoT outputs for business applications.

  - ## Future Directions (2026–2030)
    - **Latent and Implicit CoT**: Research into whether token-level intermediate steps are necessary for reasoning gains, or whether equivalent computation can be performed in the model's latent space without being surfaced. Implications for both efficiency (shorter outputs) and interpretability (hidden reasoning).
    - **Multimodal CoT**: Extension to interleaved text-image-audio reasoning, where intermediate steps reference image patches, audio segments, or structured data. Vision-language models (GPT-4o, Gemini 1.5 Pro) already exhibit early multimodal reasoning.
    - **Process Reward Model Scalability**: Reducing the cost of step-level supervision through automated PRM training, self-labelling, and synthetic data generation. Critical for making process-level reward training broadly accessible.
    - **Formal Grounding of CoT Steps**: Tighter integration of CoT with [[Automated Theorem Proving]] environments (Lean 4, Coq, Isabelle) to provide machine-checked correctness guarantees for individual reasoning steps.
    - **Adversarial Robustness**: Understanding when CoT reasoning chains can be manipulated by adversarial inputs, prompt injection, or context poisoning, and developing defences. Relevant to AI safety in agentic deployments.
    - **Cognitive Science Alignment**: Using CoT traces as windows into LLM "System 2"-style deliberative processing; connecting to dual-process theories of human cognition (Kahneman) and studying divergences from human reasoning strategies.
    - **Economic Efficiency**: Developing techniques such as chain-of-draft (thinking faster by writing less) and dynamic reasoning budgets that adapt token allocation to problem difficulty, reducing inference costs while preserving reasoning quality.
    - **Self-Improving CoT via RL**: Building on DeepSeek-R1's success to develop models that continually improve reasoning chains through interaction with verifiable environments, potentially achieving superhuman performance on formal domains by 2028–2030.

  - ## Research and Literature
    1. Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., Zhou, D. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *NeurIPS 2022*, arXiv:2201.11903.
    2. Kojima, T., Gu, S.S., Reid, M., Matsuo, Y., Iwasawa, Y. (2022). "Large Language Models are Zero-Shot Reasoners." *NeurIPS 2022*, arXiv:2205.11916.
    3. Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., Zhou, D. (2022). "Self-Consistency Improves Chain of Thought Reasoning in Language Models." arXiv:2203.11171.
    4. Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., Yogatama, D., Bosma, M., Zhou, D., Metzler, D., Chi, E.H., Hashimoto, T., Vinyals, O., Liang, P., Dean, J., Fedus, W. (2022). "Emergent Abilities of Large Language Models." *TMLR 2022*, arXiv:2206.07682.
    5. Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T.L., Cao, Y., Narasimhan, K. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." *NeurIPS 2023*, arXiv:2305.10601.
    6. Lightman, H., Kosaraju, V., Burda, Y., Edwards, H., Baker, B., Lee, T., Leike, J., Schulman, J., Sutskever, I., Cobbe, K. (2023). "Let's Verify Step by Step." *ICLR 2024*, arXiv:2305.20050.
    7. Feng, G., Zhang, B., Gu, Y., Ye, H., He, D., Wang, L. (2023). "Towards Revealing the Mystery Behind Chain of Thought: A Theoretical Perspective." *NeurIPS 2023*, arXiv:2305.15408.
    8. Merrill, W., Sabharwal, A. (2023). "The Expressive Power of Transformers with Chain of Thought." *ICLR 2024*, arXiv:2310.07923.
    9. Turpin, M., Michael, J., Perez, E., Bowman, S.R. (2023). "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting." *NeurIPS 2023*, arXiv:2305.04388.
    10. Lanham, T., Chen, A., Radhakrishnan, A., Steinghardt, J., Bowman, S., Perez, E. (2023). "Measuring Faithfulness in Chain-of-Thought Reasoning." Anthropic research, arXiv:2307.13702.
    11. DeepSeek-AI, Guo, D., Yang, D., Zhang, H., Song, J., Zhang, R., Xu, R., Zhu, Q., Ma, S., Wang, P., et al. (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948.
    12. Snell, C., Lee, J., Xu, K., Kumar, A. (2024). "Scaling LLM Test-Time Compute Optimally Improves Performance in Different Problem Types." arXiv:2408.03314.
    13. Schaeffer, R., Miranda, B., Koyejo, S. (2023). "Are Emergent Abilities of Large Language Models a Mirage?" *NeurIPS 2023*, arXiv:2304.15004.
    14. Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., Chi, E. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625.
    15. Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., Neubig, G. (2023). "PAL: Program-Aided Language Models." *ICML 2023*, arXiv:2211.10435.
    16. Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., et al. (2023). "Self-Refine: Iterative Refinement with Self-Feedback." *NeurIPS 2023*, arXiv:2303.17651.
    17. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., Cao, Y. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." *ICLR 2023*, arXiv:2210.03629.
    18. Nye, M., Andreassen, A.J., Gur-Ari, G., Michalewski, H., Austin, J., Bieber, D., Dohan, D., Lewkowycz, A., Bosma, M., Luan, D., Sutton, C., Odena, A. (2021). "Show Your Work: Scratchpads for Intermediate Computation with Language Models." arXiv:2112.00114.
    19. Zhang, Z., Zhang, A., Li, M., Smola, A. (2022). "Automatic Chain of Thought Prompting in Large Language Models." arXiv:2210.11610.
    20. Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Zhou, D. (2023). "Rationale-Augmented Ensembles in Language Models." arXiv:2207.00747.
    21. Ho, N., Salimans, T. (2021). "Denoising Diffusion Probabilistic Models." *NeurIPS 2020*. (Background on inference-time compute scaling analogues in diffusion.)
    22. OpenAI. (2024). "OpenAI o1 System Card." OpenAI Technical Report, September 2024.
    23. Anthropic. (2025). "Claude's Extended Thinking: Technical Overview." Anthropic Research Blog, 2025.
    24. Mirzadeh, I., Alizadeh, K., Mehrabani, H., del Mas, L., Rastegari, M., Hosseini, S.A., Mehrotra, R. (2024). "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models." Apple Research, arXiv:2410.05229.
    25. Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., Schulman, J. (2021). "Training Verifiers to Solve Math Word Problems." arXiv:2110.14168. (GSM8K dataset paper.)
    26. Hendrycks, D., Burns, C., Kadavath, S., Arora, A., Basart, S., Tang, E., Song, D., Steinhardt, J. (2021). "Measuring Mathematical Problem Solving with the MATH Dataset." arXiv:2103.03874.
    27. Srivastava, A., et al. (2022). "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models." arXiv:2206.04615. (BIG-Bench dataset paper.)
    28. arXiv Survey. (2025). "A Survey of Frontiers in LLM Reasoning: Inference Scaling, Learning to Reason, and Agentic Systems." arXiv:2504.09037.

  - ## Benchmark Datasets and Evaluation Methodology
    Rigorous evaluation of Chain-of-Thought Reasoning requires benchmark suites that test multi-step inference rather than knowledge recall, since direct-answer prompting can sometimes match CoT on knowledge-lookup tasks. The canonical benchmarks are:

    **GSM8K (Grade School Math 8K)**: Created by Cobbe et al. (2021) at OpenAI, GSM8K contains 8,500 grade-school mathematics word problems requiring 2–8 reasoning steps. It was the first widely adopted benchmark demonstrating the benefit of CoT, with Wei et al. showing that CoT prompting on PaLM 540B improved accuracy from 17% to 58%. By 2024, frontier reasoning models exceed 95% on GSM8K, prompting the development of harder variants (GSM-Symbolic, Mirzadeh et al. 2024) that test robustness by varying surface-level details while maintaining the underlying reasoning structure.

    **MATH (Hendrycks et al. 2021)**: 12,500 competition-level mathematics problems spanning 7 difficulty levels and topics from pre-algebra through calculus, number theory, and combinatorics. Originally solved at roughly 5% by GPT-3, it remained a frontier challenge until OpenAI o1 (2024) achieved ~80%, with subsequent models approaching 90%+. MATH tests compositional multi-step reasoning at a level that genuinely requires hundreds of reasoning tokens in typical CoT solutions.

    **BIG-Bench Hard (BBH)**: A subset of the BIG-Bench benchmark (Srivastava et al. 2022) containing 23 tasks deemed too challenging for LLMs at time of publication. CoT prompting was shown by Suzgun et al. (2022) to dramatically improve performance across logical deduction, causal reasoning, temporal sequences, and other structured tasks. BBH has become the standard test for whether CoT generalises across diverse reasoning types.

    **ARC-Challenge**: From the AI2 Reasoning Challenge (Clark et al. 2018), this benchmark contains science examination questions requiring commonsense and scientific reasoning beyond surface pattern matching. CoT improves performance particularly on multi-hop science inference questions.

    **HumanEval and MBPP (Code Generation)**: Chen et al. (2021) HumanEval (164 Python programming tasks) and the MBPP dataset (Mostly Basic Python Problems) test whether CoT-style decomposition improves code generation correctness. Step-by-step problem analysis before code writing has become standard in high-performing code generation systems.

    **AIME and IMO Problems**: The American Invitational Mathematics Examination and International Mathematical Olympiad problems have emerged as frontier evaluations for reasoning models. OpenAI o3 achieved a score placing it in the top 500 globally on the 2024 AIME, demonstrating that long CoT combined with sufficient inference compute can approach expert human performance on competition mathematics.

    Evaluation methodology for CoT has itself become a research area. Key considerations include: (1) whether exemplars in few-shot CoT contaminate benchmark evaluation by selecting exemplars from the same distribution as test problems; (2) whether self-consistency majority voting artificially inflates accuracy by averaging over many samples; (3) whether process reward model scores accurately reflect step validity when PRMs are trained on the same benchmark distribution; and (4) position sensitivity — whether CoT reasoning quality varies with the placement of exemplars in the context window.

  - ## Mechanistic Interpretation and Circuit Complexity
    The mechanistic understanding of why Chain-of-Thought Reasoning works has advanced considerably through [[Mechanistic Interpretability]] research. At the activation level, intermediate reasoning tokens create new key-value entries in the attention cache that subsequent layers can attend over, effectively expanding the model's working memory beyond what is representable in the residual stream at any single token position. Since each layer of a [[Transformer Architecture]] has bounded width (d_model dimensions, typically 4,096–32,768), the total representation capacity per token is fixed, but CoT allows computation to span multiple token positions, each contributing independently to the accumulated context.

    The connection to formal circuit complexity was made rigorous by Merrill and Sabharwal (2023), who showed that Transformers with CoT can solve problems in the complexity class TC⁰ (constant-depth threshold circuits of polynomial width), while Transformers without CoT are limited to AC⁰ (constant-depth circuits of polynomial width without threshold gates) for certain problem classes. Since TC⁰ strictly contains AC⁰ under standard complexity assumptions, this provides a formal separation between CoT and direct-answer capabilities.

    Feng et al. (2023) demonstrated specific instances of this separation: multi-step arithmetic, compositional function application, and logical deduction all require TC⁰ depth but can be computed by a constant-depth Transformer with a logarithmic-length CoT. These results suggest that CoT gains are not merely statistical (averaging over more reasoning paths) but structural: CoT enables qualitatively different computations.

    From a [[Backpropagation]] and [[Gradient Descent]] perspective, training models to produce CoT — whether via supervised fine-tuning on curated reasoning traces or via RLHF/RLAIF process reward models — adjusts attention head weights to reliably route intermediate results into subsequent layer computations. The training signal backpropagates through the token sequence, jointly optimising both the quality of intermediate steps and their contribution to the final answer. This connects CoT training to classical debates in [[Deep Learning]] about whether gradients can effectively propagate supervision signals across long token sequences — a challenge mitigated by the relatively short dependency paths within a single reasoning step.

  - ## Relationship to Alignment and Safety
    Chain-of-Thought Reasoning occupies a special position in [[AI Alignment]] discussions because it makes model reasoning inspectable in a way that standard forward passes do not. If the stated reasoning steps in a CoT response faithfully reflect the model's internal computation — the "faithful CoT" property studied by Turpin et al. (2023) and Lanham et al. (2023) — then CoT traces become a window into model decision-making that could support human oversight.

    However, research has established that CoT faithfulness is not guaranteed. Models can produce plausible-sounding reasoning steps that are post-hoc rationalisations of conclusions reached by other means — for example, when the reasoning trace is perturbed or when the model is presented with biased prompt framing (Turpin et al. 2023 showed that models systematically shift their stated reasoning when exemplars are labelled incorrectly, even when the final answer should be unaffected). This unfaithful CoT poses challenges for alignment: a model that can generate convincing-looking reasoning without that reasoning being causally linked to its conclusions could potentially deceive human oversight.

    The EU AI Act (effective 2025–2026) and related UK AI safety frameworks place significant emphasis on transparency and explainability for high-risk AI systems. CoT-style reasoning traces are the most direct mechanism available for making neural network decision processes legible, but the faithful CoT problem means their reliability as oversight mechanisms cannot be assumed without verification. [[Process Reward Models]] trained on step-level correctness provide one mechanism for incentivising genuinely sound intermediate reasoning, and Anthropic's Constitutional AI research connects CoT to broader alignment methodology by using generated reasoning to evaluate adherence to value specifications. The intersection of CoT, faithfulness, and AI safety is one of the most active research areas in the field as of 2026.

  - ## Key Terminology
    - **CoT**: Chain-of-Thought; the intermediate token sequence constituting the reasoning trace.
    - **Inference-Time Compute (ITC)**: Computational resources spent generating tokens at inference rather than training; the axis along which reasoning models scale.
    - **Process Reward Model (PRM)**: A model assigning scalar rewards to individual reasoning steps rather than final answers.
    - **Self-Consistency**: Majority-vote ensemble over multiple independent CoT samples.
    - **Tree of Thought**: Tree-structured reasoning search with branching, evaluation, and pruning.
    - **Scratchpad**: A free-form intermediate computation buffer, not constrained to natural language.
    - **Faithful Reasoning**: CoT where stated steps causally determine the final answer.
    - **Emergent Capability**: A model property that appears above a parameter-count threshold and strengthens with scale.
    - **Verifiable Reward**: A training signal derived from objective correctness checks (math results, code tests) used in RL-based CoT training.
    - **Reasoning Token**: Any token in the model's output sequence that is part of an intermediate reasoning step rather than the final answer.
    - **Long CoT**: Extended reasoning traces, typically hundreds to thousands of tokens, as employed by OpenAI o1/o3, DeepSeek-R1, and Anthropic Extended Thinking.
    - **Budget Forcing**: An inference-time technique that encourages the model to generate longer reasoning chains by rewarding length during RL training or by appending tokens that signal continued reasoning.
    - **Hidden Scratchpad**: A CoT variant where intermediate tokens are generated but not shown to the user, as in OpenAI o1/o3 and Anthropic Extended Thinking deployments.
    - **Step-Level Verifier**: A learned or rule-based model that assigns correctness scores to individual reasoning steps.
    - **Least-to-Most Prompting**: A CoT variant that decomposes complex problems into sequentially easier sub-problems.
    - **Program-of-Thought (PoT)**: A CoT variant using executable code as the intermediate representation.
    - **Multimodal CoT**: Extension of CoT to vision-language models where reasoning steps interleave text and visual references.
    - **Latent CoT**: Hypothetical internal reasoning representations not surfaced as tokens; a frontier research question.

- ### Provenance
  - sources:: https://arxiv.org/abs/2201.11903 (Wei et al. 2022); https://proceedings.neurips.cc/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html; https://arxiv.org/abs/2205.11916 (Kojima et al. 2022); https://arxiv.org/abs/2305.20050 (Lightman et al. 2023); https://arxiv.org/abs/2305.10601 (Yao et al. ToT 2023); https://arxiv.org/abs/2501.12948 (DeepSeek-R1 2025); https://arxiv.org/html/2504.09037v4 (Survey 2025); https://bdtechtalks.com/2025/02/12/openai-o3s-chain-of-thought/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
