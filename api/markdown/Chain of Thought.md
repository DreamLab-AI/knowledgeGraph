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
  - Chain-of-Thought (CoT) is a reasoning elicitation paradigm for [[Large Language Models]] in which the model is guided or trained to generate a sequence of explicit intermediate reasoning steps before producing a final answer. The technique exploits the autoregressive architecture of [[Transformer]]-based decoder models: each generated reasoning token is fed back as context for every subsequent token, enabling multi-step logical deductions that a single forward pass cannot reliably accomplish. CoT encompasses a rich family of variants — few-shot exemplar prompting (Wei et al., 2022), zero-shot CoT triggered by the phrase "Let's think step by step" (Kojima et al., 2022), [[Self-Consistency]] majority-vote decoding (Wang et al., 2022), [[Tree of Thought]] search-based exploration (Yao et al., 2023), Least-to-Most sequential decomposition (Zhou et al., 2022), ReAct interleaved reasoning-and-action (Yao et al., 2022), and [[Process Reward Model]]-guided reinforcement learning (Lightman et al., 2023; Uesato et al., 2022). The paradigm has matured from a pure prompting trick into an architectural training objective: as of 2025–2026, frontier models from OpenAI (o1, o3), Anthropic (Claude 3.7 Sonnet extended thinking), Google (Gemini 2.0/2.5 Pro), and DeepSeek (R1) all internalise long reasoning chains as first-class training targets via reinforcement learning over verifiable rewards. CoT thereby forms the foundational pillar of [[Inference-Time Compute Scaling]], repositioning test-time reasoning as a controllable resource that can be traded against training compute, and bridging the conceptual divide between [[Symbolic AI]] and contemporary neural [[Large Language Models]]. The technique substantially improves accuracy on [[Mathematical Reasoning]], [[Commonsense Reasoning]], [[Multi-Hop Reasoning]], code synthesis, and legal analysis tasks while also providing interpretability affordances through inspectable reasoning traces.

- ### Semantic Classification
  - owl-class:: ai:ChainOfThought
  - owl-role:: ReasoningParadigm | PromptingTechnique | InferenceTimeStrategy
  - owl-inferred:: ai:InferenceMechanism, ai:ReasoningElicitationMethod, ai:ScalingStrategy
  - belongs-to-domain:: [[Artificial Intelligence Domain]]
  - implemented-in-layer:: [[Inference Layer]]

- ### Relationships
  - is-subclass-of:: [[Prompt Engineering]]
  - is-subclass-of:: [[Reasoning]]
  - is-subclass-of:: [[In-Context Learning]]
  - has-part:: [[Zero-Shot Chain of Thought]]
  - has-part:: [[Self-Consistency]]
  - has-part:: [[Tree of Thought]]
  - has-part:: [[Process Reward Model]]
  - has-part:: [[Scratchpad Reasoning]]
  - has-part:: [[Least-to-Most Prompting]]
  - has-part:: [[ReAct Prompting]]
  - has-part:: [[Programme of Thought]]
  - has-part:: [[Graph of Thought]]
  - requires:: [[Large Language Models]]
  - requires:: [[Prompt Engineering]]
  - requires:: [[Autoregressive Language Model]]
  - requires:: [[Emergent Capabilities]]
  - requires:: [[Model Scale]]
  - requires:: [[Transformer]]
  - enables:: [[Reasoning]]
  - enables:: [[Mathematical Reasoning]]
  - enables:: [[Commonsense Reasoning]]
  - enables:: [[Multi-Hop Reasoning]]
  - enables:: [[Multi-Step Reasoning]]
  - enables:: [[Inference-Time Compute Scaling]]
  - enables:: [[AI Agent]]
  - enables:: [[Planning]]
  - implements:: [[Inference-Time Compute Scaling]]
  - implements:: [[Deliberate Reasoning]]
  - depends-on:: [[Emergent Capabilities]]
  - depends-on:: [[Model Scale]]
  - depends-on:: [[Transformer Architecture]]
  - depends-on:: [[Token Generation]]
  - supports:: [[Explainable AI]]
  - supports:: [[Language Model Alignment]]
  - supports:: [[Reinforcement Learning from Human Feedback]]
  - supports:: [[AI Safety]]
  - uses:: [[Transformer]]
  - uses:: [[In-Context Learning]]
  - uses:: [[Few-Shot Learning]]
  - uses:: [[Few-Shot Prompting]]
  - uses:: [[Token Generation]]
  - uses:: [[Foundation Model]]
  - contrasts-with:: [[Standard Prompting]]
  - contrasts-with:: [[Direct Answer Prompting]]
  - contrasts-with:: [[Retrieval-Augmented Generation]]
  - contrasts-with:: [[Fine Tuning]]
  - related-to:: [[Scratchpad Reasoning]]
  - related-to:: [[Reinforcement Learning from Human Feedback]]
  - related-to:: [[Planning]]
  - related-to:: [[AI Agent]]
  - related-to:: [[Chain-of-Thought Reasoning]]
  - related-to:: [[Chain-of-Thought Prompting]]
  - related-to:: [[Neuro-Symbolic AI]]
  - related-to:: [[Automatic Prompt Optimisation]]
  - bridges-to:: [[Symbolic AI]]
  - bridges-to:: [[Search Algorithms]]
  - bridges-to:: [[Automated Reasoning]]
  - bridges-to:: [[Neuro-Symbolic AI]]
  - standardized-by:: [[NeurIPS]]
  - standardized-by:: [[ICLR]]
  - standardized-by:: [[ACL]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:ZeroShotChainOfThought))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:SelfConsistency))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:TreeOfThought))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:ProcessRewardModel))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:LeastToMostPrompting))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:ReActPrompting))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:hasPart ai:ProgrammeOfThought))
  ## Dependency Relationships
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:requires ai:AutoregressiveLanguageModel))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:requires ai:PromptEngineering))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:dependsOn ai:EmergentCapabilities))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:dependsOn ai:ModelScale))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:dependsOn ai:TokenGeneration))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:uses ai:Transformer))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:uses ai:InContextLearning))
  ## Capability Relationships
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:MathematicalReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:CommonsenseReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:MultiHopReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:MultiStepReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:InferenceTimeComputeScaling))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:AIAgent))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
  ## Implementation Relationships
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:implements ai:InferenceTimeComputeScaling))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:implements ai:DeliberateReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:isSubclassOf ai:PromptEngineering))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:isSubclassOf ai:InContextLearning))
  ## Reduction Relationships
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:reducesTo ai:ScratchpadReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:bridgesTo ai:SymbolicAI))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:bridgesTo ai:AutomatedReasoning))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:contrastsWith ai:StandardPrompting))
      SubClassOf(ai:ChainOfThought
        ObjectSomeValuesFrom(ai:contrastsWith ai:DirectAnswerPrompting))

  ## About
    Chain-of-Thought (CoT) prompting was formally named and rigorously studied by Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and Denny Zhou at Google Brain, with the landmark paper "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" appearing at NeurIPS 2022 (arXiv:2201.11903). The paper demonstrated that inserting a handful of worked-out reasoning examples into a prompt could increase accuracy on the GSM8K grade-school maths benchmark from roughly 18% (standard prompting on PaLM 540B) to over 58% — a gain of more than 40 percentage points. The observation that these gains were negligible below ~62B parameters and large above ~100B parameters led Wei and colleagues to characterise CoT as an [[Emergent Capabilities|emergent capability]] — a qualitative threshold where scale unlocks latent reasoning capacity that smaller models simply do not exhibit.

    A parallel and complementary discovery by Kojima et al. (2022, "Large Language Models are Zero-Shot Reasoners", NeurIPS 2022) showed that merely appending "Let's think step by step" to a question — without any worked examples — reliably triggered multi-step reasoning chains. This zero-shot variant reduced the human-engineering burden of exemplar construction and extended CoT to tasks and languages where curated examples were unavailable. Together, these two papers catalysed the modern research programme of inference-time compute scaling, with hundreds of follow-on works exploring how to generate, verify, and search over reasoning traces to maximise the accuracy of large-model problem-solving.

    The significance of Chain-of-Thought extends beyond benchmark numbers. It reframes the relationship between a language model and the user: instead of a black-box oracle that maps questions to answers, the model becomes a collaborative reasoner whose intermediate thinking is partially observable. This observability has downstream consequences for [[Explainable AI]], [[Language Model Alignment]], and regulatory compliance under frameworks such as the EU AI Act (GPAI obligations under Article 53, in effect from August 2025) and the NIST AI Risk Management Framework, both of which call for transparency in automated decision-making.

  ## Components / Architecture
    Chain-of-Thought is not a single algorithm but a family of techniques sharing the structural property that intermediate reasoning steps are generated as natural language tokens before the final answer token. The principal components and variants are:

    - **Few-Shot Exemplar CoT** — the original formulation: the prompt prefix contains k worked examples, each consisting of (question, reasoning chain, answer). The model conditions on these demonstrations to produce an analogous reasoning chain for the test question. Typically k is between 4 and 8; exemplar quality matters more than quantity. Jason Wei et al. (2022) used 8 exemplars for arithmetic and commonsense tasks.

    - **Zero-Shot CoT** — introduced by Kojima et al. (2022), this variant appends "Let's think step by step" or a structurally similar instruction to the question without any worked examples. The model infers from pretraining data that it should produce step-by-step output. Effective for sufficiently large models (>100B parameters) and tasks where training data contained procedural reasoning.

    - **[[Self-Consistency]] Decoding** — Wang et al. (2022, arXiv:2203.11171) proposed generating m independent reasoning paths from the model using temperature sampling, then selecting the final answer by majority vote. Self-consistency consistently outperforms greedy decoding by 5–15 percentage points on arithmetic and commonsense benchmarks. It is an early, powerful example of [[Inference-Time Compute Scaling]]: spending m times more inference compute to reduce variance and improve reliability.

    - **[[Tree of Thought]] (ToT)** — Yao et al. (2023, NeurIPS 2023) reframed reasoning as a search problem over a tree of partial solution branches. A separate evaluator (the model itself) scores each candidate step; the tree is explored via breadth-first or depth-first search, or MCTS. ToT substantially outperforms linear CoT on tasks requiring exploration and backtracking (e.g., Game of 24, creative writing with constraints). It bridges CoT directly to classical [[Search Algorithms]] and [[Planning]] from [[Symbolic AI]].

    - **[[Process Reward Model]] (PRM)** — Lightman et al. (2023, "Let's Verify Step by Step") and Uesato et al. (2022) trained separate verifier models to score the correctness of each intermediate reasoning step, not just the final answer. PRMs enable fine-grained supervision of the reasoning trace and power reinforcement learning pipelines. They are the primary mechanism underpinning OpenAI o1/o3 and DeepSeek R1 reasoning behaviour: the model is trained via RL with PRM rewards to produce high-quality reasoning chains over thousands of steps.

    - **Least-to-Most Prompting** — Zhou et al. (2022) decompose a hard problem into an ordered sequence of easier sub-problems, solving each sequentially and feeding results forward. Gains are especially large on compositional generalisation tasks where the naive decomposition is non-obvious.

    - **ReAct (Reason + Act)** — Yao et al. (2022, arXiv:2210.03629) interleave CoT reasoning steps with external tool invocations (web search, calculator, API calls). Each tool call result is incorporated back into the reasoning chain, enabling the model to gather evidence mid-reasoning. ReAct underlies most [[AI Agent]] frameworks including LangChain ReAct agents, AutoGPT, and similar systems.

    - **Programme of Thought** — Chen et al. (2022, arXiv:2211.12588) generate intermediate steps as Python code rather than natural language, delegating deterministic computation (arithmetic, string manipulation, data lookup) to an interpreter. The interpreter output is injected back into the reasoning chain, providing computational precision without hallucination risk on sub-computations.

    - **Graph of Thought** — extensions beyond trees to directed acyclic graphs of reasoning nodes, enabling cross-branch information sharing.

  ## Use Cases / Major Families
    - **Mathematics and Science Education** — CoT-enabled models now achieve near-human performance on GSM8K (>95% with o3), and approach competition-level performance on MATH (Hendrycks et al., 2021). DeepSeek-R1 scores 97.3% on MATH-500. Applications include automated tutoring systems that generate worked solutions step-by-step, making reasoning pedagogically transparent for students.

    - **Software Engineering and Code Synthesis** — CoT decomposition of a programming task into algorithmic sub-problems before generating code reduces logical errors and improves maintainability of generated code. Debugging pipelines use step-by-step fault localisation within CoT traces. GitHub Copilot and similar tools incorporate structured reasoning internally.

    - **Legal and Medical Reasoning** — legal analysis requires explicit citation of rules, case law, and their chain of application; medical differential diagnosis requires enumerating hypotheses and eliminating them by evidence. CoT's visible intermediate steps are critical for audit trails required by professional regulatory bodies. UK NHS pilots of AI-assisted clinical decision support (2024–2025) have increasingly required models to produce interpretable reasoning chains.

    - **Complex Question Answering and Research** — [[Multi-Hop Reasoning]] over documents and knowledge bases. HotpotQA, MuSiQue, and 2WikiMultiHopQA are benchmarks where CoT-enabled retrieval interleaves with reasoning. Agentic research pipelines (deep-research tools, literature review agents) rely on CoT to plan, execute, and synthesise multi-step information gathering.

    - **AI Agents and Planning** — [[AI Agent]] frameworks such as ReAct, Toolformer, and OpenAI's function-calling stack rely on CoT to decompose high-level goals into tool-use actions, verify sub-task completion, and propagate results forward. [[Planning]] modules in robotics and task-automation agents are increasingly CoT-structured.

    - **Alignment and Safety Evaluation** — OpenAI's CoT monitorability framework (2025) uses externally visible reasoning traces to detect reasoning about deception, reward hacking, or unsafe strategies before they reach the final answer token. The UK AI Safety Institute and Anthropic's Constitutional AI framework both incorporate CoT trace auditing as part of responsible deployment pipelines.

    - **Education Technology** — systems like Khan Academy's Khanmigo use CoT to produce Socratic dialogues where the model's reasoning process is surfaced to guide student learning rather than simply providing answers.

  ## Academic Context
    The intellectual lineage of Chain-of-Thought reasoning spans classical AI, cognitive science, and modern deep learning:

    - **Scratchpad and Intermediate Computation** — Nye et al. (2021, "Show Your Work: Scratchpads for Intermediate Computation with Language Models") explicitly proposed allocating a token budget for intermediate computation before the answer, predating Wei et al.'s naming of the technique. Their framing highlighted the connection to working memory in cognitive architectures.

    - **Wei et al. (2022)** — the canonical founding paper: arXiv:2201.11903, NeurIPS 2022. Established the k-shot exemplar format, the emergent capability framing, and the GSM8K/SVAMP/AQuA evaluation suite. Demonstrated that CoT gains scale with model size and are negligible below ~62B parameters.

    - **Kojima et al. (2022)** — "Large Language Models are Zero-Shot Reasoners", NeurIPS 2022. Introduced zero-shot CoT with the "Let's think step by step" trigger. Extended CoT to zero-resource settings.

    - **Wang et al. (2022)** — "Self-Consistency Improves Chain of Thought Reasoning in Language Models", arXiv:2203.11171, ICLR 2023. Showed that majority voting over multiple sampled reasoning paths provides consistent improvement of ~11% on maths, ~3% on commonsense, ~6% on multi-hop QA benchmarks.

    - **Zhou et al. (2022)** — "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models", ICLR 2023. Sequential sub-problem decomposition enabling compositional generalisation.

    - **Yao et al. (2022)** — "ReAct: Synergizing Reasoning and Acting in Language Models", arXiv:2210.03629, ICLR 2023. Interleaved reasoning and action framework underpinning modern AI agents.

    - **Uesato et al. (2022)** — "Solving Math Word Problems with Process- and Outcome-Based Feedback", DeepMind. Introduced the distinction between outcome reward models (ORMs) and process reward models (PRMs).

    - **Lightman et al. (2023)** — "Let's Verify Step by Step", arXiv:2305.20050, OpenAI. Demonstrated that PRMs outperform ORMs for MATH benchmark with 800K step-level human annotations.

    - **Yao et al. (2023)** — "Tree of Thoughts: Deliberate Problem Solving with Large Language Models", NeurIPS 2023. Search-based reasoning over thought trees.

    - **Chen et al. (2022)** — "Programme of Thoughts Prompting: Disentangling Computation from Reasoning for Numerical Reasoning Tasks", arXiv:2211.12588. Code-as-reasoning-substrate.

    - **DeepSeek-AI (2025)** — "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning". Open-weights reasoning model scoring 97.3% on MATH-500; demonstrated that pure RL with verifiable rewards scales CoT training efficiently.

    - **OpenAI (2024)** — "Learning to Reason with LLMs" (o1 technical blog). Described the training pipeline — long CoT chains as first-class training targets via process-reward-guided RL — that underpins the o1/o3 model family.

  ## Current Landscape (2026)
    By mid-2026, Chain-of-Thought has transitioned from a prompting technique to a core architectural property of frontier AI systems:

    **Reasoning Models (2024–2026):** OpenAI's o1 (September 2024) and o3 (December 2024) internalise long-horizon CoT traces generated via RL over verifiable reward signals. o3 achieved 87.5% on ARC-AGI, the first major breakthrough on this abstract reasoning benchmark. Anthropic's Claude 3.7 Sonnet (February 2025) introduced an "extended thinking" mode allowing users to dial a "thinking budget" controlling reasoning depth. Google's Gemini 2.5 Pro (2025) employs hybrid inference-time scaling with CoT and multimodal reasoning support. DeepSeek-R1 (January 2025, open weights) scores 97.3% on MATH-500 at dramatically lower training cost (<$6M estimated), democratising access to capable reasoning models.

    **Prompting Shift:** For these thinking models, traditional explicit CoT prompting (asking the model to reason step by step in the prompt) can actually reduce performance because the models already reason internally and directing their thinking path interferes with native reasoning. The 2026 best-practice is to provide clear problem specifications rather than step-by-step scaffolding.

    **Inference Cost:** Extended CoT reasoning chains impose significant token costs. Managing thinking budgets — balancing depth of reasoning against latency and cost — has become a key engineering concern. Anthropic, OpenAI, and Google all expose API parameters for controlling reasoning depth.

    **PRM and Verifier Ecosystem:** ThinkPRM (2025) demonstrated that a CoT-trained verifier fine-tuned on far fewer process labels than traditional discriminative PRMs can match or exceed prior PRM performance. MCTS-integrated PRMs (Boosting Policy and Process Reward Models with MCTS, ACL 2025) extend the search-planning connection.

    **CoT Monitorability:** OpenAI's 2025 evaluation suite covering 13 evaluation categories across 24 environments assessed whether model reasoning traces are faithful and monitorable for safety-relevant behaviours. This line of work connects directly to the EU AI Act's transparency requirements.

    **Industry Adoption:** CoT-style reasoning is embedded in production deployments at Microsoft (Copilot, Azure OpenAI), Google (Gemini in Workspace), and Meta (Llama 3 reasoning variants). Coding assistants, scientific research tools, and legal AI platforms universally apply CoT or CoT-derived architectures.

  ## UK Context
    The United Kingdom has made substantial contributions to Chain-of-Thought and reasoning research through its top universities and nationally funded programmes:

    **Academic Research:** The University of Edinburgh's Institute for Language, Cognition and Computation (ILCC) has been active in multi-step reasoning for NLP since pre-transformer era, with researchers such as Mirella Lapata and Ivan Titov contributing to structured reasoning and compositional generalisation — precursors to CoT. University College London (UCL) researchers, particularly in the groups of Tim Rocktäschel and Edward Grefenstette (formerly UCL, now DeepMind/Google), have published on neuro-symbolic reasoning and differentiable reasoning systems that contextualise CoT within the broader symbolic-neural integration agenda. Imperial College London's Department of Computing has contributed to formal verification of reasoning traces. Cambridge's Language Technology Lab (Stephen Clark, Paula Buttery) works on compositional semantics that intersects with the question of whether CoT constitutes genuine reasoning or pattern completion.

    **UK AI Safety Institute (AISI):** The AISI (founded November 2023, now the AI Security Institute) has made CoT trace auditing central to its frontier model evaluations. Their evaluation framework for reasoning models deployed post-EU AI Act compliance requires inspectable reasoning chains for high-risk use cases. Collaboration with Anthropic and OpenAI on CoT monitorability (2024–2025) has shaped industry practice.

    **NHS and Clinical AI:** NHS England's AI Lab has supported pilots of CoT-structured clinical decision support tools, particularly for differential diagnosis and triage applications. The requirement for auditable reasoning in clinical AI (under NHS AI Lab governance frameworks, 2024–2025) drove adoption of CoT architectures precisely because they produce inspectable intermediate steps.

    **Northern England Industrial Context:** The Sheffield and Leeds universities' data science programmes engage with CoT applications in manufacturing analytics and supply chain optimisation. Newcastle University's Digital Institute has explored CoT for legal AI in the context of GDPR compliance tools. Manchester's National Graphene Institute collaborates on materials science question answering where multi-step chemical reasoning CoT pipelines are being evaluated.

    **Policy:** The UK's AI Opportunities Action Plan (January 2025) explicitly calls for investment in reasoning AI capabilities, with UKRI's AI programme funding multi-step reasoning research across multiple institutions. The AI Safety Institute's international partnership network (including the US AISI) has standardised CoT monitorability evaluation protocols.

  ## Failure Modes and Limitations
    Despite its strengths, Chain-of-Thought prompting has well-documented failure modes and limitations that practitioners must account for:

    - **Scale Dependency:** CoT gains are strongly correlated with model scale. Below approximately 62B parameters, explicit CoT often hurts performance by introducing hallucinated reasoning steps that mislead the final answer. This creates a deployment bifurcation: small models should avoid CoT or use it sparingly; large models benefit substantially from it.

    - **Faithfulness / Rationalisation:** CoT reasoning traces can constitute post-hoc rationalisations rather than genuine causal accounts of model reasoning (Turpin et al., 2023). When the model's answer is influenced by spurious prompt cues (sycophancy, consistent wrong-answer formatting), the CoT trace will rationalise the biased answer while appearing logically coherent. This limits CoT as an [[Explainable AI]] mechanism — traces are indicative, not causal.

    - **Hallucination in Intermediate Steps:** Each reasoning step is generated autoregressively and is therefore subject to the model's hallucination tendencies. An error in an early reasoning step propagates through subsequent steps, potentially amplifying errors rather than correcting them. Programme of Thought and [[Process Reward Model]] verification are mitigations.

    - **Task Specificity:** Sprague et al. (2024) systematically showed that CoT provides large gains only on mathematical, symbolic, and multi-step reasoning tasks. For factual recall, simple classification, sentiment analysis, and tasks solvable by single-step pattern completion, CoT provides negligible or negative gains. Practitioners should apply CoT selectively based on estimated task complexity.

    - **Context Length Costs:** Reasoning chains add tokens — sometimes thousands — to the context window, increasing inference cost proportionally. For tasks processed at high volume (classification, tagging, simple extraction), CoT is often economically prohibitive. Token pruning methods (APriCoT, CAC-CoT) partially address this.

    - **Interference in Thinking Models:** For frontier reasoning models trained to reason internally (o1, o3, R1, Claude 3.7 extended thinking), explicit CoT prompting ("let's think step by step") can interfere with the model's native reasoning strategy, reducing performance. The 2026 best practice for thinking models is clear problem specification without step-by-step scaffolding.

    - **Exemplar Sensitivity (Few-Shot CoT):** Performance of few-shot CoT is sensitive to exemplar order, exemplar quality, and exemplar relevance to the test problem. Minor variations in exemplar selection can cause 5–15pp accuracy swings on benchmarks (Lu et al., 2022). Automatic CoT (Zhang et al., 2022) partially mitigates this by auto-generating diverse, cluster-representative exemplars.

    - **Latent Capability Misattribution:** CoT can reveal capabilities that the model possesses but that are not accessible through direct prompting. This cuts both ways: it is useful for unlocking beneficial capabilities but potentially problematic if it unlocks harmful capabilities that safety filters are not designed to detect in reasoning chains.

  ## Future Directions (2026–2030)
    - **Internalised Reasoning at Smaller Scale:** Distilling long CoT traces from large reasoning models into smaller, efficient student models (speculative decoding, step-level distillation) will extend advanced reasoning to edge devices and latency-sensitive applications. Research on compact CoT (e.g., CAC-CoT, APriCoT) demonstrates that 90% of reasoning tokens can often be pruned with minimal accuracy loss.

    - **Multimodal CoT:** Extending structured reasoning chains across text, images, audio, and video. Gemini 2.0's multimodal reasoning and GPT-4o-like vision CoT pipelines represent early implementations; full grounded multimodal reasoning (where intermediate steps reference visual regions) remains an active frontier.

    - **Formal Verification of Reasoning Chains:** Integrating automated theorem provers (Lean 4, Isabelle) to verify individual CoT steps; combining neural step generation with symbolic step verification in a hybrid pipeline. This connects to [[Neuro-Symbolic AI]] research at Edinburgh, UCL, and Imperial.

    - **Efficient Test-Time Compute:** Adaptive compute routing — using a cheap model to decide how much reasoning a given query requires, then allocating accordingly. Eliminating unnecessary reasoning tokens (pruning, early exit) to reduce costs while maintaining accuracy.

    - **Agentic Reasoning:** Long-horizon CoT in autonomous agents (multi-day tasks, extended planning, scientific hypothesis generation and testing). The integration of CoT with persistent memory, tool use, and multi-agent coordination will define the agentic AI paradigm of 2027–2030.

    - **Faithful and Monitorable CoT:** Ensuring that stated reasoning chains actually reflect the model's internal computation, rather than being post-hoc rationalisations, is an open research problem. Mechanistic interpretability tools (circuits, attention attribution) are beginning to bridge the gap between token-level CoT traces and sub-symbolic computation.

    - **CoT for Scientific Discovery:** Hypothesis generation, experimental design, and result synthesis in drug discovery, materials science, and climate modelling using structured reasoning chains. Google DeepMind's AlphaFold and GNoME projects hint at the potential of structured neural reasoning for scientific applications.

  ## Benchmark Datasets
    CoT research has been shaped by a core set of evaluation benchmarks, each probing a different facet of multi-step reasoning capability:

    - **GSM8K (Grade School Math 8K)** — Cobbe et al. (2021). 8,500 grade-school arithmetic word problems requiring 2–8 reasoning steps. The canonical CoT evaluation dataset; virtually every CoT paper reports GSM8K results. State-of-the-art performance in 2026: >96% (o3, Claude 3.7 extended thinking).

    - **MATH** — Hendrycks et al. (2021). 12,500 competition-level mathematics problems across 7 domains (algebra, calculus, number theory, combinatorics, geometry, precalculus, prealgebra) with difficulty levels 1–5. MATH-500 is a representative 500-problem subset. State-of-the-art: 97.3% (DeepSeek-R1, 2025), up from approximately 5% for GPT-3 (2021).

    - **SVAMP** — Patel et al. (2021). Arithmetic word problems designed to be robust to simple pattern shortcuts, testing that models perform genuine compositional arithmetic rather than surface pattern matching.

    - **AQuA** — Ling et al. (2017). Algebraic word problems from GRE and GMAT exams, requiring multi-step algebraic reasoning with answer rationales.

    - **BBH (BIG-Bench Hard)** — Suzgun et al. (2022). A curated 23-task subset of BIG-Bench where CoT prompting is most beneficial; tasks include logical deduction, temporal sequences, causal judgement, word sorting, and multi-step instruction following. SOTA in 2026: >90% on most BBH tasks with o3.

    - **ARC-Challenge** — Clark et al. (2018). Grade-school science questions (8th-grade level) requiring multi-step reasoning over implicit background knowledge. The "Challenge" set was specifically designed to defeat simple retrieval-based models.

    - **StrategyQA** — Geva et al. (2021). Questions requiring a multi-step reasoning strategy that must be implicitly decomposed (e.g., "Was the ancient Roman figure Cicero likely to have spoken Latin?"). Tests implicit [[Multi-Hop Reasoning]] planning.

    - **HotpotQA / MuSiQue / 2WikiMultiHopQA** — multi-hop question answering benchmarks requiring chaining evidence from multiple documents. CoT-enabled retrieval-augmented pipelines substantially improve performance versus single-hop RAG.

    - **ARC-AGI** — Chollet (2019/updated). Abstract visual reasoning tasks testing general intelligence rather than knowledge recall. o3 achieved 87.5% in December 2024, the first major AI breakthrough on this benchmark, enabled by CoT with MCTS search.

    - **GPQA (Graduate-Level Google-Proof Q&A)** — Rein et al. (2023). Expert-level science questions in biology, physics, and chemistry verified to be unanswerable by Google search alone. Requires deep multi-step domain reasoning. State-of-the-art: >70% with extended thinking models (2025).

  ## Formal Analysis and Mechanistic Foundations
    Three theoretical lenses have been applied to understanding why Chain-of-Thought works, each with distinct empirical implications:

    **Decomposition Hypothesis:** CoT breaks a multi-step problem into sub-problems that each lie within the model's single-forward-pass capability. Under this view, CoT is a form of problem reduction: the model cannot solve the composed problem P(x₁, x₂, ..., xₙ) directly but can solve each xᵢ conditioned on prior steps. Empirical support comes from least-to-most prompting and complexity-based prompting, where problem decomposition quality correlates strongly with final accuracy. Counter-evidence: even incorrect or semantically inconsistent intermediate steps often improve performance over no CoT (Wang et al., 2022, "Towards Understanding CoT"), suggesting decomposition alone does not account for all CoT benefit.

    **Latent Compute Hypothesis:** Each generated reasoning token conditions all subsequent token predictions, effectively providing additional depth-of-computation beyond a single forward pass. Under this view, CoT is an implicit multi-pass computation: the m-step reasoning chain implements an m-layer recurrent computation on top of the fixed transformer depth L. This provides theoretical justification for why CoT gains should scale with problem complexity (more steps needed for harder problems) and with model scale (larger models produce better quality per-step computations). The connection to universal computation in sequence-to-sequence models has been formalised by several theoretical works.

    **Pattern Activation Hypothesis:** CoT triggers generalisation to training-data instances containing worked solutions, derivations, and tutorials. Under this view, the model is not performing novel computation but retrieving structured knowledge about how to solve this type of problem. Empirical support: CoT works much better on task types well-represented in pretraining data (arithmetic, programming, formal logic) than on highly novel task types. Counter-evidence: models can produce correct CoT for problem instances that differ substantially from training exemplars, suggesting some generalisation beyond direct retrieval.

    **Faithfulness Problem:** A critical challenge identified by Turpin et al. (2023) and extended by subsequent work is that CoT reasoning chains may be systematically unfaithful to the model's actual internal computation. Models can produce logically coherent-sounding reasoning chains that lead to the correct answer while being causally disconnected from the actual token prediction mechanism. This is analogous to human post-hoc rationalisation and has significant implications for CoT as an [[Explainable AI]] or interpretability tool: visible reasoning steps are not guaranteed to be genuine explanations. Mechanistic interpretability research (circuit analysis, attention attribution, activation patching) is beginning to characterise when and to what extent CoT traces faithfully reflect internal computation.

    **Emergent Capability Framing:** Wei et al.'s (2022) characterisation of CoT as an emergent capability — appearing abruptly above a parameter-scale threshold — has been contested by Schaeffer et al. (2023), who argue that apparent emergence is an artefact of discontinuous evaluation metrics: with continuous metrics, capability gains appear smooth and predictable. This debate is relevant to deployment decisions: if CoT capability is truly emergent, it cannot be predicted from small-model evaluations; if it is smooth, scaling laws can anticipate when CoT gains will appear.

  ## Standards, Governance, and Regulatory Context
    Chain-of-Thought prompting does not correspond to a formal standards-body specification, but it intersects with several governance and regulatory frameworks in significant ways:

    - **EU AI Act (Regulation 2024/1689):** GPAI obligations under Article 53 (general purpose AI models) and Article 55 (GPAI models with systemic risk) entered application on 2 August 2025. Article 13 requires that AI system providers ensure that outputs are interpretable to users. CoT reasoning traces are increasingly cited in technical documentation as a transparency mechanism: AI providers argue that inspectable reasoning chains satisfy the "appropriate transparency" requirement for high-risk AI systems. However, the faithfulness concern means regulators cannot treat CoT traces as legally binding explanations; they are indicative of intermediate inference, not causal accounts.

    - **NIST AI Risk Management Framework (AI RMF 1.0, January 2023):** The "GOVERN" and "EXPLAIN" functions of the NIST AI RMF require that AI systems be transparent and their outputs explainable in terms appropriate to the deployment context. CoT traces provide a partial response to EXPLAIN requirements in text-generating AI systems; they make intermediate reasoning visible for human audit. NIST's Playbook for AI RMF (2023) lists "providing reasoning traces for high-stakes decisions" as an explainability practice.

    - **UK AI Safety Institute Evaluation Framework (2024–2025):** The AISI has operationalised CoT trace analysis as a primary mechanism for detecting dangerous capabilities in frontier models. Their evaluation methodology includes: (a) prompting models on dangerous capability benchmarks (bioweapons synthesis, cyberattack planning, manipulation) and inspecting CoT traces for evidence of genuine capability; (b) testing whether models reason deceptively in their CoT traces while producing benign-looking final answers (sandbagging/deceptive alignment evaluation). This is the first regulatory body to mandate CoT trace analysis as part of a safety evaluation protocol.

    - **OpenAI's CoT Monitorability Framework (2025):** A proprietary evaluation suite covering 13 evaluation categories across 24 environments, assessing whether o-series model reasoning traces are faithful and monitorable for safety-relevant reasoning patterns — including reasoning about deception, reward hacking, power-seeking, and harmful outputs. The framework establishes metrics for "alignment between stated reasoning and actual computation" using mechanistic interpretability probes.

    - **ISO/IEC 42001 (AI Management System Standard, 2023):** Provides a management system framework for responsible AI deployment. Section 6.1 (actions to address risks) recommends documenting AI system reasoning and decision-making processes; CoT traces satisfy this requirement for deployed AI systems in regulated industries. The standard is being cited alongside the EU AI Act as paired compliance infrastructure.

    - **Benchmarking Standards:** While there is no formal ISO/NIST standard for CoT evaluation, the community has converged on GSM8K, MATH, BBH, ARC-Challenge, and GPQA as de facto benchmarks. Proposals for standardised evaluation of reasoning faithfulness (not just accuracy) are under development, driven by the faithfulness problem identified by Turpin et al. (2023).

  ## Variants and Evolution Timeline
    The following timeline documents the main CoT variants in order of introduction, tracing the evolution from a prompting technique to a training paradigm:

    - **2021-Q4 — Scratchpad (Nye et al.):** Allocating a token budget for intermediate computation before the answer; conceptual precursor to CoT.
    - **2022-Q1 — Few-Shot Exemplar CoT (Wei et al.):** Formal naming and systematic evaluation; GSM8K as canonical benchmark; emergent capability framing.
    - **2022-Q1 — Least-to-Most Prompting (Zhou et al.):** Sub-problem decomposition from simple to complex; compositional generalisation improvements.
    - **2022-Q2 — Zero-Shot CoT (Kojima et al.):** "Let's think step by step" trigger; no exemplars required; zero-resource CoT.
    - **2022-Q2 — Emergent Abilities Paper (Wei et al.):** Theoretical framing of CoT as paradigmatic emergent capability; scale thresholds quantified.
    - **2022-Q3 — Self-Consistency (Wang et al.):** Majority-vote over m sampled reasoning chains; first clear inference-time compute scaling result.
    - **2022-Q4 — ReAct (Yao et al.):** Interleaved reasoning and tool use; CoT in dynamic environments; agentic AI foundation.
    - **2022-Q4 — Programme of Thought (Chen et al.):** Code-as-reasoning-substrate; exact computation via interpreter.
    - **2022-Q4 — Automatic CoT (Zhang et al.):** Auto-generating CoT exemplars; removing need for human-authored demonstrations.
    - **2022-Q4 — Process Reward Models (Uesato et al.):** Step-level correctness evaluation; ORM vs PRM distinction introduced.
    - **2023-Q2 — Let's Verify Step by Step (Lightman et al.):** 800K human-annotated step labels; PRM outperforms ORM on MATH; PRM training data at scale.
    - **2023-Q2 — Faithfulness Problem (Turpin et al.):** CoT traces can be systematically unfaithful; rationalisation identified.
    - **2023-Q3 — Tree of Thought (Yao et al.):** Search-based reasoning; deliberate problem solving; Game of 24 breakthrough.
    - **2023-Q3 — Graph of Thought (Besta et al.):** DAG-based reasoning nodes; cross-branch information sharing.
    - **2024-Q3 — Emergent Abilities Mirage (Schaeffer et al.):** CoT emergence as metric artefact; smooth scaling reframing.
    - **2024-Q3 — "To CoT or not to CoT?" (Sprague et al.):** CoT mainly helps on math and symbolic tasks; selective application guidance.
    - **2024-Q4 — OpenAI o1:** RL-trained long CoT as training objective; thinking tokens not visible to user by default; PRM-guided RL at scale.
    - **2024-Q4 — OpenAI o3:** 87.5% on ARC-AGI; CoT + MCTS search breakthrough on abstract reasoning.
    - **2025-Q1 — DeepSeek R1:** Open-weights reasoning model; pure RL from verifiable rewards; 97.3% MATH-500; <$6M training cost.
    - **2025-Q1 — Claude 3.7 Sonnet Extended Thinking:** User-controlled thinking budget; extended thinking mode with visible reasoning.
    - **2025 — Gemini 2.5 Pro:** Hybrid reasoning with 1M context; multimodal CoT.
    - **2025 — ThinkPRM:** CoT-trained verifier outperforming discriminative PRMs with fewer process labels.
    - **2025 — CoT Monitorability Framework (OpenAI):** 13 categories, 24 environments; safety auditing via reasoning trace inspection.
    - **2025 — CAC-CoT / APriCoT:** Compact CoT via token pruning; 80-90% token reduction with minimal accuracy loss.

  ## Key Terminology
    - **Chain-of-Thought (CoT):** The family of techniques in which a model generates intermediate reasoning steps as natural language tokens before a final answer, exploiting the autoregressive sequential computation of transformer decoders.
    - **Reasoning Chain / Reasoning Trace:** The sequence of intermediate natural language steps generated by the model before the final answer; equivalent to a "scratchpad" computation.
    - **Few-Shot Exemplar CoT:** The original CoT format: k worked examples in the prompt prefix demonstrate step-by-step reasoning; the model conditions on these demonstrations to produce its own reasoning chain.
    - **Zero-Shot CoT:** Triggering CoT generation with a natural language instruction ("Let's think step by step") without any worked examples in the prompt.
    - **Self-Consistency:** A decoding strategy that generates m independent reasoning chains and selects the final answer by majority vote; an early implementation of [[Inference-Time Compute Scaling]].
    - **Process Reward Model (PRM):** A verifier trained to score the correctness of each individual reasoning step; contrasts with an Outcome Reward Model (ORM) that evaluates only the final answer.
    - **Outcome Reward Model (ORM):** A verifier that evaluates only the final answer, not intermediate steps.
    - **Thinking Budget / Reasoning Budget:** An API parameter controlling the maximum number of tokens a reasoning model can generate in its internal CoT trace before producing a visible response; trades reasoning depth against latency and cost.
    - **Faithful Reasoning:** A property of CoT traces where stated intermediate steps accurately reflect the model's internal causal computation; contrasted with post-hoc rationalisation.
    - **Inference-Time Compute Scaling / Test-Time Scaling:** The strategy of allocating additional compute at inference time (more reasoning steps, more sampled chains, deeper search) rather than at training time (more parameters, more data); CoT is the enabling mechanism.
    - **ReAct (Reason + Act):** A CoT variant that interleaves reasoning steps with external tool invocations (search, code execution, API calls), enabling grounded reasoning in dynamic environments.
    - **Programme of Thought:** A CoT variant where intermediate steps are expressed as executable code, delegating deterministic sub-computations to an interpreter.
    - **Tree of Thought (ToT):** A CoT variant framing reasoning as tree search, with branch-level evaluation and backtracking; bridges CoT to classical [[Search Algorithms]].
    - **Monitorability:** The property that CoT reasoning traces are sufficiently transparent and faithful to enable external monitoring for safety-relevant reasoning patterns; a requirement in OpenAI's 2025 safety evaluation framework.
    - **Emergent Capability:** A model ability that is absent or near-random at small parameter scales and appears abruptly above a threshold scale; CoT is the paradigmatic example of an emergent capability in the LLM literature.

  ## Research & Literature
    1. Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. *NeurIPS 2022*. arXiv:2201.11903.
    2. Kojima, T., Gu, S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners. *NeurIPS 2022*. arXiv:2205.11916.
    3. Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models. *ICLR 2023*. arXiv:2203.11171.
    4. Zhou, D., Schärli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models. *ICLR 2023*. arXiv:2205.10625.
    5. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). ReAct: Synergizing Reasoning and Acting in Language Models. *ICLR 2023*. arXiv:2210.03629.
    6. Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T. L., Cao, Y., & Narasimhan, K. (2023). Tree of Thoughts: Deliberate Problem Solving with Large Language Models. *NeurIPS 2023*. arXiv:2305.10601.
    7. Lightman, H., Kosaraju, V., Burda, Y., Edwards, H., Baker, B., Lee, T., Leike, J., Schulman, J., Sutskever, I., & Cobbe, K. (2023). Let's Verify Step by Step. arXiv:2305.20050. OpenAI.
    8. Uesato, J., Kushman, N., Kumar, R., Song, F., Siegel, N., Wang, L., Creswell, A., Irving, G., & Sutskever, I. (2022). Solving Math Word Problems with Process- and Outcome-Based Feedback. DeepMind. arXiv:2211.14275.
    9. Chen, W., Ma, X., Wang, X., & Cohen, W. W. (2022). Programme of Thoughts Prompting: Disentangling Computation from Reasoning for Numerical Reasoning Tasks. arXiv:2211.12588.
    10. Nye, M., Andreassen, A. J., Gur-Ari, G., Michalewski, H., Austin, J., Bieber, D., Dohan, D., Lewkowycz, A., Bosma, M., Luan, D., Sutton, C., & Szegedy, C. (2021). Show Your Work: Scratchpads for Intermediate Computation with Language Models. arXiv:2112.00114.
    11. Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems. arXiv:2110.14168. OpenAI.
    12. Hendrycks, D., Burns, C., Kadavath, S., Arora, A., Basart, S., Tang, E., Song, D., & Steinhardt, J. (2021). Measuring Mathematical Problem Solving With the MATH Dataset. *NeurIPS 2021*. arXiv:2103.03874.
    13. Lewkowycz, A., Andreassen, A., Dohan, D., Dyer, E., Michalewski, H., Ramasesh, V., Slone, A., Anil, C., Schrittwieser, J., Glaese, A., Fox, S., Bosma, M., Luan, D., Sutton, C., Szegedy, C., Corrado, G., Bouchard, G., Ghahramani, Z., & Sohl-Dickstein, J. (2022). Solving Quantitative Reasoning Problems with Language Models (Minerva). arXiv:2206.14858. Google Research.
    14. Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., Yogatama, D., Bosma, M., Zhou, D., Miculivicius, P., Narang, S., Mishra, G., Robinson, A., Sequeira, P., Valipour, M., Narang, S., Dean, J., & Fedus, W. (2022). Emergent Abilities of Large Language Models. *Transactions on Machine Learning Research*. arXiv:2206.07682.
    15. Srivastava, A. et al. (2022). Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models (BIG-bench). arXiv:2206.04615.
    16. Fu, Y., Peng, H., Sabharwal, A., Clark, P., & Khot, T. (2022). Complexity-Based Prompting for Multi-Step Reasoning. *ICLR 2023*. arXiv:2210.00720.
    17. Khot, T., Trivedi, H., Finlayson, M., Fu, Y., Richardson, K., Clark, P., & Sabharwal, A. (2022). Decomposed Prompting: A Modular Approach for Solving Complex Tasks. *ICLR 2023*. arXiv:2210.02406.
    18. Zhang, Z., Zhang, A., Li, M., & Smola, A. (2022). Automatic Chain of Thought Prompting in Large Language Models. arXiv:2210.11610.
    19. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. arXiv:2501.12948.
    20. OpenAI (2024). Learning to Reason with LLMs. OpenAI Technical Blog. https://openai.com/index/learning-to-reason-with-llms/.
    21. Anthropic (2025). Claude 3.7 Sonnet Extended Thinking. Anthropic Technical Documentation.
    22. Sprague, Z., Yin, F., Rodriguez, J. D., Bhatt, U., Bhatt, D., Pezeshkpour, P., Ye, X., & Durrett, G. (2024). To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning. arXiv:2409.12183.
    23. Besta, M., Blach, N., Kubicek, A., Gerstenberger, R., Podstawski, M., Gianinazzi, L., Gajda, J., Lehmann, T., Przekop, H., Nyczyk, P., & Hoefler, T. (2023). Graph of Thoughts: Solving Elaborate Problems with Large Language Models. arXiv:2308.09687.
    24. Wang, B., Min, S., Deng, X., Shen, J., Wu, Y., Zettlemoyer, L., & Sun, H. (2022). Towards Understanding Chain-of-Thought Prompting: An Empirical Study of What Matters. arXiv:2212.10001.
    25. Lewkowycz, A. & Irving, G. (2023). Towards a Theory of In-Context Learning. Proceedings of Conference on Formal Mathematical Reasoning (FoMo). (Representative of the formal understanding literature).
    26. Liao, L., Tian, Y., & Barber, D. (2024). Verifying Chain-of-Thought Reasoning via Its Computational Graph. arXiv:2510.09312.
    27. Shao, Z. et al. (2024). DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models. arXiv:2402.03300.
    28. OpenAI (2025). Chain-of-Thought Monitorability Evaluation Framework. OpenAI Technical Report, June 2025.

- ### Provenance
  - sources:: https://arxiv.org/abs/2201.11903, https://arxiv.org/abs/2205.11916, https://arxiv.org/abs/2203.11171, https://arxiv.org/abs/2305.20050, https://arxiv.org/abs/2305.10601, https://arxiv.org/abs/2501.12948, https://openai.com/index/learning-to-reason-with-llms/, https://www.adaline.ai/blog/chain-of-thought-prompting-in-2025, https://sureprompts.com/blog/ai-reasoning-models-prompting-complete-guide-2026, https://www.unite.ai/how-openais-o3-grok-3-deepseek-r1-gemini-2-0-and-claude-3-7-differ-in-their-reasoning-approaches/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
