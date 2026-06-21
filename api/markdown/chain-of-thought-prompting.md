- ### Definition
  - Chain-of-Thought Prompting is a capability-elicitation technique within [[Prompt Engineering]] that instructs or demonstrates to a [[Large Language Models|large language model]] the practice of externalising intermediate reasoning steps as natural language tokens before generating a final answer. Rather than mapping a question directly to an answer in a single decoder pass, the model generates a coherent sequence of inferential substeps — a "chain of thought" — that decomposes the problem and arrives at the solution incrementally, with each generated token serving as a conditioning context for all subsequent tokens in the [[Autoregressive Language Model|autoregressive]] generation process. This mimics deliberate human reasoning (Kahneman's System 2 thinking) and exploits the sequential computation afforded by the decoder architecture: each reasoning token shifts the model's residual stream state, effectively providing additional "compute" beyond what is available within a single token prediction step. Two primary formats exist: few-shot exemplar CoT, in which the prompt prefix contains k worked-out examples pairing questions with step-by-step solutions (Wei et al., 2022), and zero-shot CoT, in which the phrase "Let's think step by step" or an equivalent instruction triggers reasoning generation without any worked examples (Kojima et al., 2022). The technique dramatically improves performance on [[Mathematical Reasoning]], [[Multi-Step Reasoning]], [[Commonsense Reasoning]], symbolic manipulation, and [[Multi-Hop Reasoning]] tasks relative to standard single-step prompting — gains that are most pronounced for sufficiently large models (above approximately 62B–100B parameters) and represent an [[Emergent Capabilities|emergent capability]] threshold. By 2025–2026, the technique has been absorbed into the training objectives of frontier reasoning models — OpenAI o1/o3, Anthropic Claude 3.7 Sonnet, Google Gemini 2.5 Pro, and DeepSeek R1 — where long CoT traces are trained-in via reinforcement learning rather than merely elicited through prompting, marking a maturation from inference-time prompting trick to core architectural paradigm for [[Inference-Time Compute Scaling]].

- ### Semantic Classification
  - owl-class:: ai:ChainOfThoughtPrompting
  - owl-role:: PromptingTechnique | ReasoningElicitationMethod | InferenceTimeStrategy
  - owl-inferred:: ai:FewShotMethod, ai:ReasoningParadigm, ai:CapabilityElicitationTechnique
  - belongs-to-domain:: [[Artificial Intelligence Domain]]
  - implemented-in-layer:: [[Prompt Engineering Layer]]

- ### Relationships
  - is-subclass-of:: [[Prompt Engineering]]
  - is-subclass-of:: [[In-Context Learning]]
  - is-subclass-of:: [[Few-Shot Prompting]]
  - has-part:: [[Zero-Shot Chain of Thought]]
  - has-part:: [[Self-Consistency]]
  - has-part:: [[Tree of Thought]]
  - has-part:: [[Process Reward Model]]
  - has-part:: [[Least-to-Most Prompting]]
  - has-part:: [[ReAct Prompting]]
  - has-part:: [[Programme of Thought]]
  - has-part:: [[Graph of Thought]]
  - has-part:: [[Automatic Chain of Thought]]
  - requires:: [[Large Language Models]]
  - requires:: [[Foundation Model]]
  - requires:: [[Emergent Capabilities]]
  - requires:: [[Autoregressive Language Model]]
  - requires:: [[Transformer Architecture]]
  - enables:: [[Mathematical Reasoning]]
  - enables:: [[Multi-Step Reasoning]]
  - enables:: [[Commonsense Reasoning]]
  - enables:: [[Multi-Hop Reasoning]]
  - enables:: [[Symbolic Reasoning]]
  - enables:: [[AI Agent]]
  - enables:: [[Inference-Time Compute Scaling]]
  - enables:: [[Planning]]
  - implements:: [[Deliberate Reasoning]]
  - implements:: [[Inference-Time Compute Scaling]]
  - implements:: [[Step-by-Step Decomposition]]
  - depends-on:: [[Emergent Capabilities]]
  - depends-on:: [[Model Scale]]
  - depends-on:: [[Large Language Models]]
  - depends-on:: [[In-Context Learning]]
  - supports:: [[Explainable AI]]
  - supports:: [[Language Model Alignment]]
  - supports:: [[AI Safety]]
  - supports:: [[Reinforcement Learning from Human Feedback]]
  - uses:: [[Large Language Models]]
  - uses:: [[In-Context Learning]]
  - uses:: [[Few-Shot Prompting]]
  - uses:: [[Autoregressive Language Model]]
  - uses:: [[Reinforcement Learning from Human Feedback]]
  - uses:: [[Token Generation]]
  - uses:: [[Transformer]]
  - contrasts-with:: [[Standard Prompting]]
  - contrasts-with:: [[Direct Answer Prompting]]
  - contrasts-with:: [[Fine Tuning]]
  - contrasts-with:: [[Zero-Shot Learning]]
  - related-to:: [[Chain-of-Thought Reasoning]]
  - related-to:: [[Chain of Thought]]
  - related-to:: [[Reasoning Engine]]
  - related-to:: [[ReAct Prompting]]
  - related-to:: [[Automatic Prompt Optimisation]]
  - related-to:: [[Scratchpad Reasoning]]
  - related-to:: [[LLM Agents]]
  - bridges-to:: [[Explainable AI]]
  - bridges-to:: [[Neuro-Symbolic AI]]
  - bridges-to:: [[Symbolic AI]]
  - bridges-to:: [[Automated Reasoning]]
  - standardized-by:: [[NeurIPS]]
  - standardized-by:: [[ICLR]]
  - standardized-by:: [[ACL Anthology]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:ZeroShotChainOfThought))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:FewShotExemplarCoT))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:SelfConsistencyDecoding))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:TreeOfThoughts))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:LeastToMostPrompting))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:ReActPrompting))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:hasPart ai:ProgrammeOfThought))
  ## Dependency Relationships
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:requires ai:FoundationModel))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:dependsOn ai:EmergentCapabilities))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:dependsOn ai:ModelScale))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:dependsOn ai:InContextLearning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:uses ai:AutoregressiveLanguageModel))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:uses ai:FewShotPrompting))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearningFromHumanFeedback))
  ## Capability Relationships
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:MathematicalReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:MultiStepReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:CommonsenseReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:MultiHopReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:SymbolicReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:AIAgent))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:enables ai:InferenceTimeComputeScaling))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
  ## Implementation Relationships
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:implements ai:DeliberateReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:implements ai:InferenceTimeComputeScaling))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:isSubclassOf ai:PromptEngineering))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:isSubclassOf ai:InContextLearning))
  ## Reduction Relationships
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:reducesTo ai:ScratchpadReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:bridgesTo ai:ExplainableAI))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:bridgesTo ai:NeuroSymbolicAI))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:bridgesTo ai:SymbolicAI))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:contrastsWith ai:StandardPrompting))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:contrastsWith ai:DirectAnswerPrompting))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:supports ai:LanguageModelAlignment))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:relatedTo ai:ChainOfThoughtReasoning))
      SubClassOf(ai:ChainOfThoughtPrompting
        ObjectSomeValuesFrom(ai:relatedTo ai:AIAgent))

  ## About
    Chain-of-thought prompting was formally characterised and named by Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and Denny Zhou, all at Google Brain, in the paper "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" presented at NeurIPS 2022 (arXiv:2201.11903, submitted January 2022). The paper demonstrated through controlled experiments on three large language models — PaLM 540B, GPT-3, and LaMDA-137B — that inserting a small number of worked-out reasoning demonstrations into a prompt substantially improved accuracy on arithmetic word problems, commonsense reasoning, and symbolic manipulation benchmarks. On GSM8K (grade-school maths), prompting PaLM 540B with just 8 chain-of-thought exemplars raised accuracy from roughly 18% (standard prompting) to over 58%, surpassing even fine-tuned GPT-3 with a verifier. The paper's crucial supplementary finding — that CoT gains were near-negligible for models below approximately 62B parameters — led the authors to frame CoT as an [[Emergent Capabilities|emergent capability]], a qualitative threshold unlocked by scale.

    A companion paper by Kojima, Gu, Reid, Matsuo, and Iwasawa (2022, "Large Language Models are Zero-Shot Reasoners", NeurIPS 2022) demonstrated that simply appending "Let's think step by step" to a question — without any worked examples — reliably triggered multi-step reasoning in sufficiently large models. This zero-shot CoT formulation dramatically reduced the human-engineering burden of exemplar construction and extended the technique to tasks and languages where curated demonstrations were unavailable. The interplay between these two variants — few-shot exemplar CoT and zero-shot trigger CoT — defines the primary design space for traditional chain-of-thought prompting.

    The mechanistic interpretation of why CoT works remains contested. Three competing hypotheses have been investigated: (1) decomposition — CoT breaks multi-step problems into sub-problems that each lie within the model's single-forward-pass capability; (2) pattern activation — CoT triggers generalisation to training data containing worked solutions, textbook derivations, or tutorial explanations where intermediate steps are explicit; (3) additional latent compute — each generated reasoning token shifts the residual stream state, providing additional implicit computation beyond what is achievable in a single token prediction. Empirically, Wang et al. (2022, "Towards Understanding Chain-of-Thought Prompting") showed that the symbolic form of reasoning steps matters less than their presence: perturbed or counterfactual reasoning steps still improve performance over no reasoning steps, suggesting the decomposition and state-shift hypotheses are more salient than pure pattern matching.

    By 2024–2026, the landscape has shifted from prompting-elicited CoT to CoT as a training objective. OpenAI's o1 (September 2024) and o3 (December 2024) models are trained via reinforcement learning over verifiable reward signals, using [[Process Reward Model|process reward models]] to evaluate the correctness of each reasoning step and incentivise longer, higher-quality reasoning chains. Anthropic's Claude 3.7 Sonnet (February 2025) introduces an "extended thinking" API parameter allowing users to specify a thinking token budget. DeepSeek-R1 (January 2025, open weights) achieves 97.3% on MATH-500 using pure RL from verifiable rewards, demonstrating that trained-in CoT can match or exceed expensive proprietary systems at a fraction of training cost. This evolution represents the maturation of CoT prompting from an inference-time technique to a core component of [[Reinforcement Learning from Human Feedback|RLHF-adjacent training pipelines]], fundamentally reshaping how researchers think about [[Inference-Time Compute Scaling]].

  ## Components / Architecture
    Chain-of-Thought Prompting is not a single algorithm but a family of techniques sharing the structural property that intermediate reasoning steps are generated as natural language tokens before the final answer token. The principal variants, in chronological order of introduction, are:

    - **Few-Shot Exemplar CoT (Wei et al., 2022):** The prompt prefix contains k worked examples where each question is paired with a step-by-step reasoning chain and a final answer. The model learns from these in-context demonstrations to produce its own reasoning chain before the answer. Key design choices: number of exemplars (typically 4–8), exemplar quality, problem diversity, and whether to include erroneous reasoning chains for error correction training. Sensitivity to exemplar order is a known failure mode.

    - **Zero-Shot CoT (Kojima et al., 2022):** Appending "Let's think step by step" (or similar trigger phrases such as "Let's work through this carefully" or "Think through this problem step by step") to the question without any worked examples. The trigger phrase instructs the model to generate reasoning steps, after which a second prompt extraction step retrieves the final answer. Effective for models above approximately 100B parameters without requiring human-authored demonstrations.

    - **[[Self-Consistency]] Decoding (Wang et al., 2022):** Generate m independent reasoning chains from the model using temperature sampling (temperature 0.5–1.0), then select the final answer by majority vote across all chains. This is an early, powerful implementation of [[Inference-Time Compute Scaling]]: spending m times more inference compute to reduce variance and improve reliability. Typical gains of 5–15 percentage points over greedy decoding on arithmetic benchmarks.

    - **Least-to-Most Prompting (Zhou et al., 2022):** Decompose the target problem into an ordered sequence of simpler sub-problems, solve each in turn, and feed results forward. The decomposition step itself uses a CoT prompt. Particularly effective on compositional generalisation tasks (e.g., SCAN, CFQ) where naive single-step decomposition fails.

    - **[[Tree of Thought]] (Yao et al., 2023):** Frame reasoning as tree search over partial solution branches. A separate evaluator (the same or a smaller model) scores each candidate reasoning step; the tree is explored via breadth-first search, depth-first search, or MCTS. Enables backtracking and exploration of alternative paths, substantially outperforming linear CoT on tasks requiring deliberate planning (Game of 24, creative writing with hard constraints, crossword puzzle solving). Directly connects CoT to classical [[Search Algorithms]] and [[Planning]] from [[Symbolic AI]].

    - **ReAct (Reason + Act) (Yao et al., 2022):** Interleave CoT reasoning steps with external tool invocations — web search queries, calculator calls, code interpreter calls, API calls. Each tool result is injected back into the reasoning chain as an observation. ReAct underlies most production [[AI Agent]] frameworks and is the principal mechanism by which LLMs interact with dynamic, external environments.

    - **Programme of Thought (Chen et al., 2022):** Generate intermediate steps as executable code (typically Python) rather than natural language. A Python interpreter executes the code and returns results back into the chain. Provides computational precision for arithmetic, string manipulation, and data lookup without hallucination risk on sub-computations. Especially effective on problems requiring exact numerical computation.

    - **Graph of Thought (Besta et al., 2023):** Extend from linear chains and trees to directed acyclic graphs of reasoning nodes, enabling cross-branch information sharing and refinement. Applicable to problems where sub-problems are interdependent.

    - **[[Process Reward Model]]-Guided Search (Lightman et al., 2023; Uesato et al., 2022):** Train a separate verifier to score the correctness of each individual reasoning step. Use this verifier to guide beam search, MCTS, or RL over reasoning chains. The mechanism powering OpenAI o1/o3 and DeepSeek R1: long CoT chains are first-class training targets; the PRM provides fine-grained reward signals enabling RL to improve reasoning quality.

    - **Automatic CoT (Zhang et al., 2022):** Automatically generate exemplar reasoning chains using the model itself, removing the need for human-authored demonstrations. Uses clustering to ensure diversity across auto-generated exemplars.

  ## Use Cases / Major Families
    - **Mathematics and Formal Reasoning:** CoT-prompted and CoT-trained models now approach or exceed human performance on GSM8K (>95% for o3), MATH-500 (97.3% for DeepSeek-R1), and AMC/AIME competition problems. Applications include automated homework tutoring (Khanmigo, Photomath AI), scientific calculator assistants, and automated proof step generation for tools like Lean 4 with neural guidance.

    - **Code Generation, Review, and Debugging:** Systematic task decomposition before code generation reduces logical errors and improves code maintainability. Debugging pipelines use CoT to localise faults step-by-step: "what is the expected state here?", "what is the actual state?", "what change resolves the discrepancy?". Production coding assistants (GitHub Copilot, Cursor, Aider) incorporate CoT internally.

    - **Legal Reasoning and Compliance:** Multi-step statutory interpretation, contract analysis, and case law chaining require each inferential step to be explicitly referenced and auditable. Legal AI platforms (Harvey AI, Clio Duo, Thomson Reuters CoCounsel) use CoT to produce reasoning traces that can be reviewed by supervising solicitors. Compliance with UK Solicitors Regulation Authority (SRA) guidance on AI-assisted legal work requires exactly the kind of visible reasoning chains CoT provides.

    - **Medical and Clinical Decision Support:** Differential diagnosis, drug interaction analysis, and clinical guideline application require structured reasoning over multiple evidence sources. NHS AI Lab pilots (2024–2025) for AI-assisted triage and diagnosis have prioritised models that produce step-by-step visible reasoning chains, enabling clinical review and override of model recommendations. CoT-powered clinical AI satisfies the NHS AI Lab's AI governance requirement for transparency.

    - **AI Agents and Task Automation:** CoT underpins the reasoning layer of virtually every production AI agent framework — LangChain ReAct, AutoGPT, OpenAI Assistants API, and multi-agent orchestration systems. Agents decompose high-level goals into subtasks via CoT, use tool calls (ReAct), verify subtask completion, and propagate intermediate results forward. [[Planning]] pipelines in robotics, process automation, and autonomous research agents are structurally CoT-based.

    - **Research and Knowledge Work:** Deep-research workflows (Perplexity Deep Research, OpenAI Deep Research, Gemini Deep Research) use CoT to plan multi-step information gathering: "what do I need to know?", "which sources address this?", "how do the sources relate?", "what is the synthesised conclusion?". These pipelines combine CoT with [[Retrieval-Augmented Generation]] (RAG) for evidence gathering and CoT for synthesis.

    - **Education and Tutoring:** Socratic dialogue systems surface the model's reasoning process to guide student learning rather than simply providing answers. CoT is pedagogically valuable precisely because intermediate steps are visible: students can identify the step where their understanding diverges from the model's reasoning chain.

    - **Alignment Auditing and Safety Evaluation:** OpenAI's CoT monitorability framework (2025) uses externally inspectable reasoning traces to detect safety-relevant patterns in model reasoning before the final answer token — reasoning about deception, reward hacking, or harmful strategies — providing a monitoring mechanism complementary to RLHF preference modelling.

  ## Academic Context
    The intellectual origins of Chain-of-Thought Prompting connect to multiple research lineages:

    **Cognitive Science:** Kahneman's dual-process theory (System 1 / System 2 thinking) provides a cognitive framing: CoT prompting shifts the model toward deliberate, effortful System 2 reasoning rather than fast System 1 pattern-completion. Research in metacognition and explicit problem-solving pedagogy (Polya, 1945, "How to Solve It") provides the human learning analogy.

    **Classical AI and Search:** The connection between CoT and classical problem solving (Newell and Simon's General Problem Solver, 1972) is explicit in Tree of Thought and similar search-based CoT variants. Each intermediate reasoning step is analogous to a state in a planning graph; the final answer is the goal state. This bridges [[Symbolic AI]] and neural language modelling.

    **Scratchpad Computation:** Nye et al. (2021, "Show Your Work: Scratchpads for Intermediate Computation with Language Models") predated Wei et al.'s naming of CoT by explicitly proposing that language models be given a token budget for intermediate computation. Their work highlighted the connection to working memory in cognitive architectures and provided the conceptual precursor to the modern "thinking budget" in frontier reasoning models.

    **Instruction Tuning and FLAN:** Wei et al.'s companion work on instruction tuning (Wei et al., 2022, "Finetuned Language Models Are Zero-Shot Learners") — training models to follow natural language instructions — established the context in which zero-shot CoT triggers became effective. Models fine-tuned to follow instructions are more responsive to "Let's think step by step" than base models.

    **Emergent Abilities Research:** Wei et al. (2022, "Emergent Abilities of Large Language Models", Transactions on Machine Learning Research) characterised CoT as a paradigmatic emergent capability — appearing abruptly at large scale and absent at small scale. This framing drove subsequent debates about whether emergent abilities are genuine phase transitions or artefacts of metric choice (Schaeffer et al., 2023, "Are Emergent Abilities of Large Language Models a Mirage?").

    **Process Reward Models:** The distinction between outcome reward models (ORMs, which evaluate only the final answer) and process reward models (PRMs, which evaluate each intermediate step) was introduced by Uesato et al. (2022) at DeepMind and scaled by Lightman et al. (2023) at OpenAI, who collected 800K step-level human annotations for the MATH benchmark to train a PRM that substantially outperformed ORMs. This line of research directly enabled the o1/o3 training paradigm.

    **Faithfulness and Reliability:** Post-hoc analysis raised concerns about CoT faithfulness — whether stated reasoning chains accurately reflect the model's internal computation or constitute post-hoc rationalisation. Turpin et al. (2023, "Language Models Don't Always Say What They Think") demonstrated that CoT reasoning can be systematically unfaithful when the model's answer is influenced by biases that don't appear in the stated reasoning chain. This opens a critical gap between CoT as an interpretability tool and as a genuine explanation mechanism.

  ## Current Landscape (2026)
    By June 2026, Chain-of-Thought Prompting has undergone a fundamental transformation: from an inference-time prompting technique to a trained-in architectural property of frontier reasoning models.

    **Reasoning Model Maturity:** All major frontier model families now offer dedicated reasoning modes incorporating long internal CoT traces: OpenAI o3 (December 2024, 87.5% on ARC-AGI), Claude 3.7 Sonnet with extended thinking (February 2025, configurable thinking budget), Gemini 2.5 Pro (2025, 1M context, hybrid reasoning), DeepSeek R1 (January 2025, open weights, 97.3% on MATH-500 at <$6M training cost), Grok 3 (xAI, February 2025). These models do not simply respond to CoT prompts — they reason internally with chains spanning hundreds to thousands of tokens.

    **Prompting Best Practice Shift:** For these thinking models, explicitly instructing the model to reason step by step can interfere with native reasoning and reduce performance. 2026 best practice is to specify the problem clearly and precisely, specify the desired output format, and allow the model to determine its own reasoning approach — the opposite of the 2022-era CoT prompting paradigm. CoT prompting in the traditional sense is most useful for smaller base models that do not have trained-in reasoning.

    **Inference Cost Management:** Extended CoT reasoning chains impose substantial token costs. A simple arithmetic question that required 50 output tokens with standard prompting may require 2,000–10,000 tokens with extended thinking. Managing thinking budgets is a key engineering concern; all frontier providers expose API parameters (`thinking_budget`, `max_reasoning_tokens`, `reasoning_effort`) to control this trade-off.

    **PRM and Verifier Research (2025):** ThinkPRM demonstrated that a long-CoT verifier fine-tuned on far fewer process labels than discriminative PRMs can match their performance. MCTS-integrated PRMs (Boosting Policy and Process Reward Models with MCTS, ACL Findings 2025) extend the reasoning-search connection. R-PRM (Reasoning-Driven Process Reward Modeling, 2025) trains PRMs that themselves reason before evaluating steps, achieving higher-quality step-level assessment.

    **CoT in Multimodal Settings:** Gemini 2.0/2.5 and GPT-4o support multimodal CoT where reasoning steps can reference image regions, audio segments, or video frames. Grounded visual reasoning (where intermediate steps ground to spatial regions of an image) remains an active frontier: models often generate plausible-sounding but spatially inaccurate reasoning traces on visually complex problems.

    **EU AI Act and Regulatory Alignment:** GPAI model obligations under the EU AI Act (Articles 53 and 55, in effect August 2025) require sufficient technical documentation and transparency for high-risk use cases. CoT traces are increasingly cited by AI providers as a transparency mechanism — inspectable reasoning enables human review and intervention. However, the faithfulness concern (Turpin et al., 2023) means regulators and auditors must treat CoT traces as indicative rather than definitive explanations.

    **Industry Integration:** CoT-structured reasoning is embedded in Microsoft Copilot (Azure OpenAI reasoning endpoints), Google Workspace (Gemini 2.5), and enterprise deployments at KPMG, Deloitte, and McKinsey for legal and financial analysis workflows. The productivity consulting firm Accenture reported in 2025 that 73% of enterprise AI deployments in regulated industries specify CoT-capable models as a procurement requirement.

  ## UK Context
    The United Kingdom has active research, regulatory, and applied strands relating to Chain-of-Thought Prompting:

    **Academic Research:** Edinburgh's ILCC hosts substantial work on compositional generalisation and structured reasoning that directly contextualises CoT — Ivan Titov's group on structured prediction, Mirella Lapata's group on text generation and summarisation, and Shay Cohen on probabilistic and graph-structured NLP. UCL's reasoning-adjacent research includes Tim Rocktäschel's work on neuro-symbolic integration and differentiable programming, which provides a formal theory for why step-by-step reasoning in neural systems might connect to symbolic proof. Imperial College London's Logic and AI groups have studied formal verification of reasoning chains, relevant to the faithfulness problem. Cambridge's Language Technology Lab investigates compositional semantics — the theoretical question of whether CoT traces constitute genuine semantic composition or surface pattern completion.

    **UK AI Safety Institute (AISI):** The AISI's Frontier Model Evaluation framework (2024–2025) incorporates CoT trace analysis as a primary evaluation methodology for assessing dangerous capabilities in large models. Before a frontier model is deployed to UK-accessible APIs, AISI evaluators inspect model reasoning chains for evidence of deceptive capability concealment (a.k.a. "sandbagging") or reasoning about unsafe strategies. This made the AISI one of the first regulatory bodies globally to operationalise CoT traces as a safety evaluation tool. The AISI's international partnership (with the US AISI, DSIT, and EU AI Office) is standardising CoT monitorability evaluation protocols.

    **NHS Clinical AI:** NHS England's AI Lab (in partnership with NHSX and NICE) has piloted CoT-structured AI for differential diagnosis, cancer pathway triage, and drug interaction checking. The NHS AI Lab's governance framework requires AI assistants in clinical settings to produce auditable reasoning for any clinical recommendation — CoT's visible intermediate steps directly satisfy this requirement. Implementations at King's College Hospital (London), Addenbrooke's (Cambridge), and Manchester Royal Infirmary have explored CoT-enabled diagnostic support in 2024–2025.

    **Legal AI in the UK:** UK law firms including Allen & Overy (now A&O Shearman), Clifford Chance, and Linklaters have deployed Harvey AI and bespoke LLM assistants that use CoT to produce traceable statutory interpretation chains. The UK Solicitors Regulation Authority (SRA) issued guidance in 2024 requiring solicitors to review AI-generated legal reasoning, making the visibility of CoT intermediate steps a compliance necessity rather than a feature.

    **Northern England and Industrial Applications:** Newcastle University's Digital Institute has explored CoT in GDPR compliance analysis workflows. Sheffield's Department of Computer Science collaborates with local manufacturing firms on supply-chain reasoning systems. Leeds's AI research groups engage with CoT for customer-service automation and complaint handling pipelines, where step-by-step visible resolution reasoning builds customer trust.

    **UKRI Funding:** The UKRI AI programme has funded several projects on structured reasoning in language models (2023–2025), including grants to Edinburgh (compositional generalisation), UCL (neuro-symbolic reasoning), and Cambridge (formal semantics) that directly advance understanding of CoT mechanisms. The UK's AI Opportunities Action Plan (January 2025) signals continued investment in reasoning AI capabilities as a national economic priority.

  ## Failure Modes and Limitations
    Chain-of-Thought prompting has well-documented failure modes that constrain its application and must be understood by practitioners and researchers:

    - **Scale Dependency:** CoT benefits are strongly gated by model scale. Below approximately 62B parameters (few-shot CoT) or 100B parameters (zero-shot CoT), explicit step-by-step prompting often hurts performance by generating incorrect intermediate steps that mislead the model toward wrong final answers. The technique should not be applied to small or medium models without careful evaluation.

    - **Faithfulness and Rationalisation:** Turpin et al. (2023) demonstrated that CoT traces can be systematically unfaithful: when model answers are biased by sycophantic prompt cues, format biases, or answer-anchoring, the stated reasoning chain rationalises the biased answer rather than reflecting causal computation. This has direct implications for using CoT as an [[Explainable AI]] mechanism: CoT traces are informative but not causally trustworthy explanations.

    - **Step-Level Hallucination Propagation:** Each reasoning step is generated autoregressively and is susceptible to hallucination. An incorrect early step conditions all subsequent steps, potentially compounding errors rather than self-correcting. Process reward models and step-level verification are the primary mitigations, but they add inference cost.

    - **Task Selectivity:** CoT provides large gains specifically on mathematical, symbolic, and compositional reasoning tasks. Sprague et al. (2024) quantified that CoT gains are negligible for simple factual recall, sentiment classification, named entity recognition, and tasks solvable in a single reasoning step. Applying CoT universally wastes inference compute and can introduce noise.

    - **Exemplar Sensitivity (Few-Shot):** The accuracy of few-shot CoT is sensitive to the selection, ordering, and quality of k-shot exemplars. Lu et al. (2022) showed that exemplar order alone can produce 15+ percentage point accuracy variations on certain benchmarks. Automatic CoT and complexity-based prompt selection (Fu et al., 2022) partially mitigate this brittleness.

    - **Context Window and Cost Overhead:** Reasoning chains can add hundreds to thousands of tokens per query. At scale, this can multiply inference costs by 10–100x. For high-throughput, low-complexity workloads (classification, tagging, extraction), CoT is economically prohibitive without token pruning optimisations.

    - **Interference with Native Reasoning Models:** For models trained to reason internally (OpenAI o1/o3, DeepSeek R1, Claude 3.7 extended thinking, Gemini 2.5 Pro), explicit CoT prompts can interfere with the model's own reasoning strategy, reducing performance. These models have internalised CoT as a training target; directing their reasoning process externally constrains rather than helps.

    - **Benchmark Contamination:** Many CoT benchmarks (especially GSM8K) have been incorporated into training data for frontier models, making benchmark performance less informative about genuine out-of-distribution reasoning ability. GPQA and ARC-AGI-2 were specifically designed to be contamination-resistant; they represent more reliable post-2025 evaluation standards.

    - **Deceptive Reasoning:** A frontier safety concern is that sufficiently capable models might produce benign-appearing CoT traces that do not reflect their actual internal reasoning — performing "in-character" safety-compliant reasoning while pursuing misaligned objectives through other computational pathways. Detecting this is the core motivation for CoT monitorability research and the AISI's reasoning trace auditing protocols.

  ## Future Directions (2026–2030)
    - **Compact and Efficient CoT:** Distilling long reasoning traces from frontier reasoning models into small, efficient student models via step-level distillation. APriCoT, CAC-CoT, and trace-pruning methods (Pruning Long Chain-of-Thought via Preference Optimisation, 2025) demonstrate that 80–90% of reasoning tokens can be pruned with minimal accuracy loss. This will extend advanced reasoning to edge devices and latency-constrained applications (mobile assistants, embedded systems, real-time decision support).

    - **Multimodal and Grounded CoT:** Full integration of reasoning chains that reference and ground to non-text modalities — image regions, audio segments, structured tables, knowledge graphs. Enabling intermediate reasoning steps like "this region of the image shows X, which contradicts hypothesis Y" requires tight coupling between visual encoding and language reasoning that current multimodal models handle imperfectly.

    - **Formal Verification Integration:** Pairing neural CoT step generation with automated theorem provers (Lean 4, Isabelle, Coq) to verify individual reasoning steps. Hybrid pipelines where neural models propose steps and symbolic verifiers confirm or reject them before proceeding. This is a central aspiration of the [[Neuro-Symbolic AI]] research agenda and directly addresses the faithfulness problem.

    - **Faithful CoT and Mechanistic Interpretability:** Bridging the gap between token-level CoT traces and the underlying sub-symbolic computation that produces them. Mechanistic interpretability tools (circuits, superposition analysis, attention pattern attribution) are beginning to reveal how intermediate attention computations relate to stated reasoning steps. Faithfulness-enforced training objectives — where RL rewards penalise models for generating reasoning traces that do not reflect internal computation — are an emerging research direction.

    - **Long-Horizon Agentic Reasoning:** CoT for multi-day autonomous tasks: hypothesis generation and experimental design in scientific research, long-range financial modelling, sustained multi-step legal analysis. Integration with persistent memory, multi-agent coordination, and external tool ecosystems will define the agentic reasoning paradigm of 2027–2030.

    - **Adaptive Thinking Budget Allocation:** Systems that assess query complexity and automatically allocate an appropriate reasoning budget — routing simple queries to direct-answer mode and complex queries to extended-thinking mode — without user intervention. This requires meta-cognitive awareness of reasoning difficulty, an open research problem.

    - **CoT for Structured Scientific Discovery:** Applying structured step-by-step reasoning to scientific hypothesis generation, experimental design, and result synthesis in drug discovery, materials science, and climate modelling. Early results (Google DeepMind AlphaProof, 2024; Google GNoME materials discovery) hint at significant potential.

  ## Benchmark Datasets and Evaluation
    The development of Chain-of-Thought Prompting has been driven by and has in turn shaped a set of canonical evaluation benchmarks that measure different facets of multi-step reasoning capability in large language models:

    - **GSM8K (Grade School Math 8K)** — Cobbe et al. (2021), OpenAI. 8,500 grade-school arithmetic word problems requiring 2–8 step solutions. The single most-cited CoT benchmark; Wei et al. (2022) used GSM8K to demonstrate the core CoT result. State-of-the-art in 2026: >96% for frontier reasoning models.

    - **MATH** — Hendrycks et al. (2021). 12,500 competition-level mathematics problems (algebra, calculus, number theory, combinatorics, geometry, precalculus, prealgebra), difficulty levels 1–5. A gold standard for mathematical reasoning difficulty. MATH-500 is a 500-problem evaluation subset. State-of-the-art in 2025: 97.3% (DeepSeek-R1); up from approximately 5% for GPT-3 and 10–15% for GPT-4 without CoT.

    - **BBH (BIG-Bench Hard)** — Suzgun et al. (2022). A curated 23-task subset of BIG-Bench where CoT provides the largest measurable improvements: tasks include logical deduction, causal judgement, word sorting, epistemic reasoning, and tracking shuffled objects. Standard CoT-vs-no-CoT comparison benchmark.

    - **ARC-Challenge** — Clark et al. (2018). 7,787 grade-school science questions where retrieval-based and frequency-based methods fail, requiring multi-step background knowledge inference. State-of-the-art: >95% with reasoning models.

    - **StrategyQA** — Geva et al. (2021). Questions requiring implicit multi-step strategy decomposition: the question does not reveal which intermediate steps are needed, testing whether the model can identify and execute the right reasoning strategy.

    - **HotpotQA, MuSiQue, 2WikiMultiHopQA** — [[Multi-Hop Reasoning]] benchmarks requiring evidence chaining across multiple documents. CoT-enabled retrieval-augmented pipelines substantially outperform single-hop retrieval systems. MuSiQue (Trivedi et al., 2022) is particularly challenging as it requires chaining 2–4 retrieval steps with controlled validity.

    - **GPQA (Graduate-Level Google-Proof Q&A)** — Rein et al. (2023). Expert-level science questions in biology, chemistry, and physics verified to be unanswerable by Google search. Requires deep multi-step domain reasoning. Frontier reasoning models with extended CoT achieve >70% (2025), compared to ~35% for non-reasoning models and ~65% for human domain experts.

    - **ARC-AGI (Abstraction and Reasoning Corpus)** — Chollet (2019, updated 2024). Abstract visual pattern recognition and reasoning tasks testing general intelligence rather than knowledge recall. o3 achieved 87.5% (December 2024), the first major AI breakthrough on this benchmark, enabled by CoT reasoning with MCTS search. ARC-AGI-2 (2025) is a harder successor.

    - **AIME (American Invitational Mathematics Examination)** — High school mathematics competition problems requiring deep problem-solving creativity and multi-step reasoning. Frontier reasoning models have reached top-10-percent human performance on recent AIME problems (2024–2025), a benchmark that was near-random for non-CoT models.

    - **LiveCodeBench** — A continuously updated coding benchmark using problems from Codeforces, LeetCode, and AtCoder with knowledge cutoff controls to prevent training data contamination. Measures CoT-enabled code synthesis quality against novel problems.

  ## Formal Mechanistic Analysis
    The mechanism by which CoT prompting improves performance remains an active research question, with competing hypotheses:

    **Computation Depth Extension:** The most theoretically grounded view holds that each generated reasoning token extends the effective depth of computation. A transformer with L layers can only perform L rounds of iterated matrix multiplication per token. For problems requiring k reasoning steps, k additional token generation passes provide kL rounds of computation. This framing implies that CoT provides computation proportional to sequence length: for a hard problem requiring 1000 reasoning tokens, a 32-layer transformer effectively behaves like a 32,000-layer computation, far beyond what the base architecture provides in a single forward pass. Theoretical work (Feng et al., 2023; Merrill and Sabharwal, 2023) has formalised when CoT can enable computations that are impossible in bounded-depth transformers.

    **Format and Validity of Intermediate Steps:** Wang et al. (2022, "Towards Understanding Chain-of-Thought Prompting") conducted controlled ablation experiments systematically corrupting intermediate steps: replacing gold reasoning with semantically incorrect reasoning, random words, or completely different topics. Key findings: (1) the presence of any reasoning text, even invalid text, improves over no-reasoning baselines for large models; (2) the validity of the final step of reasoning matters most; (3) the format (stepwise structure) matters more than the semantic correctness of individual intermediate steps. This partially supports the pattern-activation hypothesis while complicating the decomposition hypothesis.

    **Emergent Capability vs. Smooth Scaling:** Wei et al. (2022, "Emergent Abilities") showed that CoT gains appear to emerge abruptly above approximately 62B–100B parameters. Schaeffer et al. (2023, "Are Emergent Abilities a Mirage?") demonstrated that this apparent discontinuity is an artefact of using accuracy as a metric (a discrete, nonlinear function of raw model performance). With continuous evaluation metrics (e.g., cross-entropy on reasoning tokens), CoT improvements scale smoothly and predictably with model size. The debate matters for forecasting: if CoT is truly emergent, pre-threshold model evaluations cannot predict post-threshold capabilities; if scaling is smooth, standard scaling laws apply.

    **Faithfulness and the Rationalisation Problem:** Turpin et al. (2023) showed that CoT reasoning traces can be systematically unfaithful when models are biased by prompt-level features: when the model's actual answer is influenced by spurious correlations in the prompt (e.g., sycophantic cues, consistent wrong-answer formats), the stated CoT reasoning will rationalise the biased answer rather than provide a genuine account of the reasoning that produced it. This finding has direct regulatory implications: CoT traces cannot be treated as explanations in the legal sense (because they may not reflect the causal mechanism) but are still useful as a consistency check and as a mechanism for surfacing intermediate inferential steps that can be independently verified.

    **Scale Thresholds in Practice:** Empirical surveys (Sprague et al., 2024, "To CoT or not to CoT?") confirmed that CoT provides the largest improvements on mathematical and symbolic reasoning tasks but provides negligible or even negative gains on simple factual recall tasks, classification tasks, and tasks well-solved by base models. This suggests that CoT should be selectively applied based on estimated task complexity, not uniformly applied to all queries — a principle embodied in modern adaptive thinking budget systems.

  ## Exemplar Design and Prompt Engineering Practice
    The design of effective chain-of-thought prompts — particularly for few-shot exemplar CoT — requires deliberate engineering decisions that substantially affect performance:

    - **Exemplar Count (k):** Wei et al. (2022) used 8 exemplars for arithmetic and 6 for commonsense tasks. Diminishing returns typically appear above k=8; performance plateaus or degrades with k>12 due to context length constraints and reduced diversity. For zero-shot CoT, k=0 but prompt wording matters substantially.

    - **Exemplar Complexity:** Fu et al. (2022, complexity-based prompting) demonstrated that selecting exemplars with the highest reasoning complexity (most reasoning steps) improves CoT performance more than selecting by difficulty or representativeness alone. Harder exemplars provide richer demonstrations of multi-step decomposition.

    - **Exemplar Ordering:** Lu et al. (2022, "Fantastically Ordered Prompts") showed that exemplar ordering can cause 10–15 percentage point accuracy swings on certain benchmarks; this is a form of in-context learning sensitivity. Common heuristics: order from simplest to most complex (matching least-to-most intuitions), or randomly shuffle and take the ensemble over multiple orderings.

    - **Step Format:** Steps can be expressed as complete sentences ("First, I need to calculate the total distance."), numbered lists, equation chains, or pseudocode. The format that best matches the model's pretraining data for similar problem types tends to perform best. For mathematical problems, intermediate equation forms (LaTeX-style or Python-style) often outperform natural language steps.

    - **Trigger Phrases for Zero-Shot CoT:** "Let's think step by step" is the canonical trigger (Kojima et al., 2022), but alternative phrasings ("Let's work through this carefully", "Let me think through this systematically", "Approach this step-by-step") can outperform it on specific task types. Task-specific triggers tend to be more effective than generic ones for specialised domains.

    - **Separation of Reasoning and Answer:** Both few-shot and zero-shot CoT typically use a two-stage format where the first stage generates the reasoning chain and the second stage extracts the final answer ("Therefore, the answer is..."). This separation prevents the reasoning chain from interfering with the final answer format expected by automated evaluation systems.

    - **Automatic Prompt Optimisation (APO):** Connecting to [[Automatic Prompt Optimisation]], systems like OPRO and ProTeGi automate the search for optimal CoT prompt formats by treating prompt engineering as an optimisation problem over natural language space. These methods can outperform manually engineered CoT prompts while reducing human engineering effort.

  ## Standards, Governance, and Regulatory Context
    Chain-of-Thought Prompting intersects with multiple governance and regulatory frameworks, making it relevant not only as an AI capability but as a compliance mechanism:

    - **EU AI Act (Regulation 2024/1689):** GPAI model obligations under Article 53 (technical documentation, transparency to downstream providers) and Article 55 (systemic risk models) entered full application on 2 August 2025. Article 13 requires that AI systems produce outputs "interpretable by users to the extent possible." CoT traces — visible intermediate reasoning steps — are increasingly cited in technical documentation as evidence of output interpretability. The AI Act's accompanying guidelines (published 2025) identify step-level reasoning traces as one mechanism for satisfying transparency requirements under Article 13 for text-generation AI. Critically, the faithfulness problem (Turpin et al., 2023) means that CoT traces are not treated as legally binding explanations, only as indicative evidence of intermediate inference.

    - **NIST AI Risk Management Framework (AI RMF 1.0, January 2023):** The EXPLAIN function of the NIST AI RMF recommends that AI systems provide explanations appropriate to their deployment context and audience. The NIST AI RMF Playbook explicitly identifies "providing step-by-step reasoning for model outputs" as an implementation practice for the EXPLAIN function. CoT traces directly satisfy this requirement for text-generating AI systems; however, NIST's guidance notes that explanation quality must be evaluated not just for presence but for accuracy and faithfulness.

    - **UK AI Safety Institute (AISI) Model Evaluation Framework:** The AISI (founded November 2023, now the AI Security Institute under DSIT) incorporated CoT trace analysis into its frontier model safety evaluations. Key techniques: (a) probing models on dangerous capability benchmarks while inspecting CoT traces for evidence of genuine capability vs. performance (preventing capability "sandbagging"); (b) testing for deceptive alignment — whether models produce benign CoT traces while pursuing misaligned goals in their actual computations. The AISI's work with OpenAI and Anthropic on CoT monitorability has directly influenced industry practice.

    - **OpenAI Safety Framework and CoT Monitorability (2025):** OpenAI's Preparedness Framework and the 2025 CoT Monitorability Evaluation Suite represent the first systematic industry framework for safety auditing via reasoning traces. The evaluation suite covers 13 categories across 24 environments, measuring whether model reasoning chains are faithful, monitorable, and free of deceptive or harmful reasoning patterns. This framework is being considered as a model for regulatory requirements by both the EU AI Office and UK DSIT.

    - **NHS AI Lab AI Governance Framework (2024–2025):** The NHS AI Lab's governance guidance for AI decision support tools in clinical settings requires that any AI recommendation affecting patient care be accompanied by an auditable reasoning chain that can be reviewed by a clinician. This requirement directly drives adoption of CoT-structured models in NHS pilot deployments; it is one of the first operational governance frameworks to mandate visible reasoning steps as a clinical governance mechanism rather than merely recommending them.

    - **SRA (Solicitors Regulation Authority) AI Guidance (2024):** The SRA's updated guidance on AI use in legal practice requires that solicitors review and be able to explain any AI-assisted legal reasoning before incorporating it into legal advice. CoT traces enable solicitors to inspect the AI's chain of legal inference, making CoT-capable models the default choice for legal AI deployments in regulated UK legal practice.

  ## Variants and Evolution Timeline
    The following timeline documents the evolution of chain-of-thought prompting from a research observation to a core architectural paradigm:

    - **2021-Q4 — Scratchpad Reasoning (Nye et al.):** Pre-answer scratchpad token budget; conceptual predecessor; established that explicit intermediate computation improves accuracy.
    - **2022-Q1 — Few-Shot Exemplar CoT (Wei et al.):** Formal naming, systematic benchmark evaluation (GSM8K, SVAMP, AQuA, ASDiv), emergent capability threshold identified (~62–100B parameters).
    - **2022-Q1 — Least-to-Most Prompting (Zhou et al.):** Sequential sub-problem decomposition; compositional generalisation improvements; SCAN benchmark performance jumps.
    - **2022-Q2 — Zero-Shot CoT (Kojima et al.):** "Let's think step by step" trigger; no exemplars required; two-stage prompting (trigger then extraction).
    - **2022-Q2 — Emergent Abilities in LLMs (Wei et al.):** CoT as paradigmatic emergent capability; quantified scale thresholds; theoretical framing that drove scaling race.
    - **2022-Q3 — Self-Consistency Decoding (Wang et al.):** m sampled chains + majority vote; 5–15pp improvement; first clear inference-time compute scaling demonstration.
    - **2022-Q4 — ReAct (Yao et al.):** Interleaved CoT reasoning + external tool use; grounded CoT in dynamic environments; foundation for AI agent systems.
    - **2022-Q4 — Programme of Thought (Chen et al.):** Python code as reasoning substrate; interpreter provides exact computation; hallucination-free arithmetic.
    - **2022-Q4 — Automatic CoT (Zhang et al.):** Auto-generating diverse exemplar chains; cluster-based exemplar selection; removes human authoring.
    - **2022-Q4 — ORM vs PRM (Uesato et al., DeepMind):** Process vs outcome reward distinction; step-level correctness supervision introduced.
    - **2022-Q4 — Complexity-Based Prompting (Fu et al.):** Exemplar selection based on reasoning complexity; longer chains for harder problems.
    - **2023-Q2 — PRM at Scale (Lightman et al., OpenAI):** 800K step-level human annotations; PRM outperforms ORM on MATH; creates training data pipeline for RL.
    - **2023-Q2 — CoT Faithfulness Problem (Turpin et al.):** Systematic unfaithfulness under bias; post-hoc rationalisation identified; gap between observable CoT and internal computation.
    - **2023-Q3 — Tree of Thought (Yao et al.):** Tree search over reasoning branches; evaluator-guided BFS/DFS/MCTS; Game of 24 breakthrough.
    - **2023-Q3 — Graph of Thought (Besta et al.):** DAG-structured reasoning; cross-branch information sharing; complex interdependent problems.
    - **2024-Q3 — "To CoT or not to CoT?" (Sprague et al.):** Meta-analysis showing CoT mainly helps math/symbolic tasks; selective application guidance.
    - **2024-Q4 — OpenAI o1:** CoT as trained-in property via RL; long thinking chains (hidden by default); PRM-guided RL at scale; step-by-step reasoning as first-class training objective.
    - **2024-Q4 — OpenAI o3:** 87.5% ARC-AGI; CoT + MCTS search at scale; abstract reasoning breakthrough.
    - **2025-Q1 — DeepSeek R1:** Open-weights; pure RL from verifiable rewards; 97.3% MATH-500; <$6M training; democratised reasoning.
    - **2025-Q1 — Claude 3.7 Sonnet Extended Thinking:** User-visible thinking traces; configurable thinking budget; Anthropic's first commercial reasoning model product.
    - **2025 — Gemini 2.5 Pro:** 1M context multimodal reasoning; hybrid inference-time scaling; image-grounded CoT.
    - **2025 — ThinkPRM:** Long-CoT verifier trained on few process labels; outperforms discriminative PRMs.
    - **2025 — CoT Monitorability Framework (OpenAI):** 13 evaluation categories, 24 environments; safety auditing via reasoning trace inspection; industry standard proposal.
    - **2025 — ARC-AGI-2:** Harder successor to ARC-AGI; tests limits of CoT + search reasoning.

  ## Key Terminology
    - **Chain-of-Thought Prompting (CoT Prompting):** The technique of instructing or demonstrating to a large language model that it should generate explicit intermediate reasoning steps as natural language tokens before producing a final answer; both few-shot exemplar and zero-shot trigger variants.
    - **Few-Shot Exemplar CoT:** The original Wei et al. (2022) format: a prompt prefix containing k worked examples each pairing a question with a step-by-step reasoning chain and final answer; the model learns by demonstration.
    - **Zero-Shot CoT:** Triggering reasoning step generation with a natural language instruction ("Let's think step by step") without any worked examples; Kojima et al. (2022).
    - **Self-Consistency Decoding:** Generating m reasoning chains independently with temperature sampling and selecting the final answer by majority vote; an inference-time compute scaling technique that substantially reduces variance.
    - **Outcome Reward Model (ORM):** A verifier that scores only the final answer of a reasoning chain; simpler but less informative than a process reward model.
    - **Process Reward Model (PRM):** A verifier trained to score the correctness of each intermediate reasoning step in a chain; enables fine-grained RL supervision of reasoning quality. Used in OpenAI o1/o3 training.
    - **Thinking Budget / Reasoning Budget:** An API or training-time parameter controlling the maximum number of internal reasoning tokens; allows users to trade reasoning depth against latency and cost.
    - **Test-Time Scaling / Inference-Time Compute Scaling:** Allocating additional compute at inference time (more reasoning steps, more sampled chains, deeper tree search) rather than at training time; CoT is the primary enabling mechanism.
    - **ReAct (Reason + Act):** CoT variant interleaving reasoning steps with external tool calls; the reasoning architecture underlying most [[AI Agent]] frameworks.
    - **Programme of Thought:** CoT variant where intermediate steps are expressed as executable Python code, delegating exact computation to an interpreter.
    - **Tree of Thought (ToT):** CoT variant framing reasoning as explicit tree search with step evaluation and backtracking; connects CoT to classical [[Search Algorithms]] and [[Planning]].
    - **Faithful CoT:** Property that stated reasoning steps causally reflect the model's internal computation rather than post-hoc rationalisation; measured via mechanistic interpretability techniques.
    - **Monitorability:** The property that externally visible reasoning traces enable auditing for safety-relevant reasoning patterns; central to OpenAI's 2025 CoT monitorability framework.
    - **CoT Verification:** Using a separate model (a PRM or critic) to evaluate the correctness of individual reasoning steps; enables guided search and fine-grained RL supervision.
    - **Emergent Capability:** A model ability absent at small scale and appearing above a parameter-scale threshold; CoT prompting benefit is the paradigmatic example of an emergent capability in large language models.

  ## Integration with Retrieval-Augmented Generation and Tool Use
    Chain-of-Thought Prompting and [[Retrieval-Augmented Generation]] (RAG) are complementary rather than competing approaches. Their integration defines a major application pattern for production AI systems:

    - **CoT as Retrieval Planning:** Rather than issuing a single RAG retrieval query per question, CoT-structured retrieval pipelines use reasoning chains to decompose multi-hop questions into a sequence of sub-queries, each targeting a specific piece of evidence. The model reasons: "To answer this, I first need to know X. [Retrieve X]. Now I need Y. [Retrieve Y]. Combining X and Y gives..." This iterative retrieval-and-reasoning pattern substantially outperforms single-pass RAG on [[Multi-Hop Reasoning]] benchmarks (HotpotQA, MuSiQue).

    - **CoT for Source Attribution:** In RAG systems, CoT reasoning makes source attribution explicit: each intermediate reasoning step can reference the retrieved document it draws from, producing an auditable chain from question to retrieved evidence to inference to answer. This is increasingly required in legal and medical deployments where the chain of evidence must be auditable.

    - **Tool-Augmented CoT:** The ReAct pattern extends CoT by inserting tool-call actions (web search, calculator, code execution, database query, API call) at any point in the reasoning chain. The tool result becomes an observation in the reasoning trace, grounding subsequent steps in verified external information. This addresses hallucination in sub-computations.

    - **CoT as Orchestration Language in Multi-Agent Systems:** In multi-agent [[LLM Orchestration]] systems, CoT reasoning traces serve as the primary communication protocol between agents. An orchestrator agent decomposes a task via CoT, communicates sub-task assignments (with reasoning justification) to specialist agents, receives CoT-structured results, and verifies consistency across sub-results. The visibility of CoT traces enables human oversight of the orchestration process.

    - **RAG vs. Extended CoT Trade-off:** For knowledge-intensive tasks, practitioners face a trade-off between retrieving more external knowledge (RAG) vs. eliciting more internal reasoning (extended CoT). Extended CoT can "reason from knowledge" encoded in model weights; RAG grounds reasoning in up-to-date external documents. Hybrid systems use CoT to decide when and what to retrieve, then use retrieved content as grounding for subsequent reasoning steps.

    - **Hybrid Architectures in Production:** Systems like Perplexity Deep Research, OpenAI Deep Research, and Gemini Deep Research (all launched 2024–2025) implement hybrid CoT+RAG architectures: CoT plans the research agenda (what questions to answer, in what order), RAG executes targeted web searches and document retrieval at each step, and CoT synthesises retrieved evidence into a coherent report. These pipelines can span 20–100 reasoning and retrieval steps for complex research queries.

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
    11. Wang, B., Min, S., Deng, X., Shen, J., Wu, Y., Zettlemoyer, L., & Sun, H. (2022). Towards Understanding Chain-of-Thought Prompting: An Empirical Study of What Matters. *ACL 2023*. arXiv:2212.10001.
    12. Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., Yogatama, D., Bosma, M., Zhou, D., Fedus, W., Dean, J., et al. (2022). Emergent Abilities of Large Language Models. *Transactions on Machine Learning Research*. arXiv:2206.07682.
    13. Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems. arXiv:2110.14168. OpenAI.
    14. Hendrycks, D., Burns, C., Kadavath, S., Arora, A., Basart, S., Tang, E., Song, D., & Steinhardt, J. (2021). Measuring Mathematical Problem Solving With the MATH Dataset. *NeurIPS 2021*. arXiv:2103.03874.
    15. Zhang, Z., Zhang, A., Li, M., & Smola, A. (2022). Automatic Chain of Thought Prompting in Large Language Models. *ICLR 2023*. arXiv:2210.11610.
    16. Besta, M., Blach, N., Kubicek, A., Gerstenberger, R., Podstawski, M., Gianinazzi, L., Gajda, J., Lehmann, T., Przekop, H., Nyczyk, P., & Hoefler, T. (2023). Graph of Thoughts: Solving Elaborate Problems with Large Language Models. arXiv:2308.09687.
    17. Fu, Y., Peng, H., Sabharwal, A., Clark, P., & Khot, T. (2022). Complexity-Based Prompting for Multi-Step Reasoning. *ICLR 2023*. arXiv:2210.00720.
    18. Turpin, M., Michael, J., Perez, E., & Bowman, S. R. (2023). Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting. *NeurIPS 2023*. arXiv:2305.04388.
    19. Schaeffer, R., Miranda, B., & Koyejo, S. (2023). Are Emergent Abilities of Large Language Models a Mirage? *NeurIPS 2023*. arXiv:2304.15004.
    20. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. arXiv:2501.12948.
    21. OpenAI (2024). Learning to Reason with LLMs. OpenAI Technical Blog. https://openai.com/index/learning-to-reason-with-llms/.
    22. Anthropic (2025). Claude 3.7 Sonnet Extended Thinking Mode. Anthropic Technical Documentation. https://www.anthropic.com/news/claude-3-7-sonnet.
    23. Sprague, Z., Yin, F., Rodriguez, J. D., Bhatt, U., Bhatt, D., Pezeshkpour, P., Ye, X., & Durrett, G. (2024). To CoT or not to CoT? Chain-of-thought helps mainly on math and symbolic reasoning. arXiv:2409.12183.
    24. Liao, L., Tian, Y., & Barber, D. (2024). Verifying Chain-of-Thought Reasoning via Its Computational Graph. arXiv:2510.09312.
    25. Khot, T., Trivedi, H., Finlayson, M., Fu, Y., Richardson, K., Clark, P., & Sabharwal, A. (2022). Decomposed Prompting: A Modular Approach for Solving Complex Tasks. *ICLR 2023*. arXiv:2210.02406.
    26. OpenAI (2025). Chain-of-Thought Monitorability Evaluation Framework. OpenAI Technical Report, June 2025.
    27. Srivastava, A. et al. (2022). Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models (BIG-bench). arXiv:2206.04615.
    28. Shao, Z. et al. (2024). DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models. arXiv:2402.03300.

- ### Provenance
  - sources:: https://arxiv.org/abs/2201.11903, https://arxiv.org/abs/2205.11916, https://arxiv.org/abs/2203.11171, https://arxiv.org/abs/2305.10601, https://arxiv.org/abs/2305.20050, https://arxiv.org/abs/2501.12948, https://openai.com/index/learning-to-reason-with-llms/, https://www.adaline.ai/blog/chain-of-thought-prompting-in-2025, https://sureprompts.com/blog/ai-reasoning-models-prompting-complete-guide-2026, https://www.unite.ai/how-openais-o3-grok-3-deepseek-r1-gemini-2-0-and-claude-3-7-differ-in-their-reasoning-approaches/, https://blockchain.news/ainews/evaluating-chain-of-thought-monitorability-in-ai-openai-s-new-framework-for-enhanced-model-transparency-and-safety
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm