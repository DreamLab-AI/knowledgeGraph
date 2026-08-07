public:: true

# DSPy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dspy",
  "@type": "Page",
  "vc:slug": "dspy",
  "title": "DSPy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:llm-application-framework", "vc:label": "LLM Application Framework"},
    {"@id": "urn:visionflow:linked:prompt-engineering", "vc:label": "Prompt Engineering"},
    {"@id": "urn:visionflow:linked:automatic-prompt-optimisation", "vc:label": "Automatic Prompt Optimisation"},
    {"@id": "urn:visionflow:linked:llm-orchestration", "vc:label": "LLM Orchestration"},
    {"@id": "urn:visionflow:linked:chain-of-thought-prompting", "vc:label": "Chain-of-Thought Prompting"},
    {"@id": "urn:visionflow:linked:llm-agents", "vc:label": "LLM Agents"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval Augmented Generation"},
    {"@id": "urn:visionflow:linked:few-shot-prompting", "vc:label": "Few-Shot Prompting"},
    {"@id": "urn:visionflow:linked:in-context-learning", "vc:label": "In-Context Learning"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:bayesian-optimisation", "vc:label": "Bayesian Optimisation"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:training-and-fine-tuning", "vc:label": "Training and Fine Tuning"},
    {"@id": "urn:visionflow:linked:instruction-following", "vc:label": "Instruction Following"},
    {"@id": "urn:visionflow:linked:model-optimisation", "vc:label": "Model Optimisation and Performance"},
    {"@id": "urn:visionflow:linked:hallucination", "vc:label": "Hallucination"},
    {"@id": "urn:visionflow:linked:evaluation-benchmarks", "vc:label": "Evaluation Benchmarks and Leaderboards"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:ai-agents", "vc:label": "AI Agents"},
    {"@id": "urn:visionflow:linked:langchain", "vc:label": "LangChain"},
    {"@id": "urn:visionflow:linked:zero-shot-prompting", "vc:label": "Zero-Shot Prompting"},
    {"@id": "urn:visionflow:linked:multi-step-reasoning", "vc:label": "Multi-Step Reasoning"},
    {"@id": "urn:visionflow:linked:foundation-model", "vc:label": "Foundation Model"},
    {"@id": "urn:visionflow:linked:code-generation", "vc:label": "Code Generation"},
    {"@id": "urn:visionflow:linked:structured-output", "vc:label": "Structured Output"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:ai-grounded-domain", "vc:label": "AI-GroundedDomain"},
    {"@id": "urn:visionflow:linked:algorithm-layer", "vc:label": "AlgorithmLayer"},
    {"@id": "urn:visionflow:linked:stanford-nlp-group", "vc:label": "Stanford NLP Group"},
    {"@id": "urn:visionflow:linked:reasoning", "vc:label": "Reasoning"},
    {"@id": "urn:visionflow:linked:ai-framework", "vc:label": "AI Framework"},
    {"@id": "urn:visionflow:linked:meta-learning", "vc:label": "Meta-Learning"},
    {"@id": "urn:visionflow:linked:self-consistency", "vc:label": "Self-Consistency"},
    {"@id": "urn:visionflow:linked:re-act", "vc:label": "ReAct"},
    {"@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dspy",
  "@type": "Class",
  "label": "DSPy",
  "definition": "DSPy is an open-source framework for programming language models in which developers declare the structure of a task using typed signatures and composable modules, and an optimiser automatically generates and tunes the prompts and few-shot examples needed to maximise a defined metric. By treating prompts as learnable parameters rather than hand-written strings, DSPy shifts language-model application development from manual prompt engineering toward systematic, metric-driven compilation of pipelines. It targets reliable, portable multi-stage LLM programs such as retrieval-augmented and agentic systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:llm-application-framework", "label": "LLM Application Framework"},
    {"@id": "urn:ngm:class:automatic-prompt-optimisation", "label": "Automatic Prompt Optimisation"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:few-shot-prompting", "label": "Few-Shot Prompting"},
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"},
      {"@id": "urn:ngm:class:in-context-learning", "label": "In-Context Learning"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:llm-orchestration", "label": "LLM Orchestration"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval Augmented Generation"},
      {"@id": "urn:ngm:class:multi-step-reasoning", "label": "Multi-Step Reasoning"},
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"},
      {"@id": "urn:ngm:class:structured-output", "label": "Structured Output"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:automatic-prompt-optimisation", "label": "Automatic Prompt Optimisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:llm-agents", "label": "LLM Agents"},
      {"@id": "urn:ngm:class:chain-of-thought-prompting", "label": "Chain-of-Thought Prompting"},
      {"@id": "urn:ngm:class:lang-chain", "label": "LangChain"},
      {"@id": "urn:ngm:class:hallucination", "label": "Hallucination"},
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "FullEnrichment"
  }
}
```

- ### Definition
  - DSPy (Declarative Self-improving Python) is an open-source framework developed at the Stanford NLP Group for programming — rather than prompting — [[Large Language Models]], in which developers declare the input–output contract of each reasoning step through typed [[Structured Output]] Signatures and compose those steps into executable module pipelines, while an optimiser (called a teleprompter) automatically searches for, bootstraps, and tunes the concrete prompts and [[Few-Shot Prompting]] demonstrations that maximise a developer-defined evaluation metric. Rather than treating a prompt as an artisanal text artefact to be hand-crafted and revised when the underlying model changes, DSPy treats prompts and few-shot example sets as learnable parameters in a compilation process analogous to traditional [[Machine Learning]] hyper-parameter optimisation: the optimiser (MIPROv2, BootstrapFewShot, BetterTogether, COPRO, or OPRO-style variants) searches over prompt formulations and demonstration sets, evaluating candidates against the metric on a training split, and selects the highest-scoring configuration. A DSPy program is a composable graph of modules — dspy.Predict, dspy.ChainOfThought, dspy.ReAct, dspy.ProgramOfThought, dspy.Retrieve — each carrying a typed Signature specifying named input and output fields with optional type annotations and instructions. This compiler-and-optimiser paradigm makes DSPy programs portable across [[Foundation Model]] families — the same declarative program can be recompiled for GPT-4, Claude Sonnet, Llama 3, or Gemini by rerunning the optimiser — and is especially suited to multi-stage [[LLM Orchestration]] workflows such as [[Retrieval Augmented Generation]], multi-hop [[Reasoning]], [[Chain-of-Thought Prompting]] reasoning chains, [[AI Agents]] with [[Tool Use]], and [[Code Generation]] pipelines, where the combinatorial complexity of tuning prompts across multiple interdependent modules makes manual [[Prompt Engineering]] intractable. DSPy was first published as arXiv:2310.03714 by Khattab et al. (2023) and accepted at ICLR 2024; maintained at github.com/stanfordnlp/dspy with over 20,000 GitHub stars and active enterprise adoption by JetBlue, Databricks, Moody's, VMware, and Zoro UK.

- ### Semantic Classification
  - owl-class:: ai:DSPyFramework
  - owl-role:: LLMApplicationFramework | AutomaticPromptOptimiser | ProgrammingAbstraction
  - owl-inferred:: ai:LLMCompiler, ai:MetricDrivenPipelineOptimiser, ai:FewShotBootstrapper
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[LLM Application Framework]], [[Automatic Prompt Optimisation]], [[AI Framework]]
  - has-part:: [[DSPy Signature]], [[DSPy Module]], [[DSPy Teleprompter]], [[MIPROv2]], [[BootstrapFewShot]], [[BetterTogether]], [[COPRO]], [[DSPy Metric Function]]
  - requires:: [[Large Language Models]], [[Foundation Model]], [[Evaluation Benchmarks and Leaderboards]], [[Training and Fine Tuning]], [[In-Context Learning]]
  - enables:: [[LLM Orchestration]], [[Retrieval Augmented Generation]], [[Multi-Step Reasoning]], [[AI Agents]], [[Structured Output]], [[Code Generation]], [[Instruction Following]]
  - implements:: [[Automatic Prompt Optimisation]], [[In-Context Learning]], [[Few-Shot Prompting]]
  - depends-on:: [[Large Language Models]], [[Natural Language Processing]], [[Machine Learning]]
  - supports:: [[Chain-of-Thought Prompting]], [[Zero-Shot Prompting]], [[Hallucination]] mitigation, [[Model Optimisation and Performance]], [[Self-Consistency]], [[ReAct]]
  - uses:: [[Prompt Engineering]], [[Few-Shot Prompting]], [[Bayesian Optimisation]], [[In-Context Learning]], [[Reinforcement Learning]], [[Meta-Learning]]
  - contrasts-with:: [[LangChain]], [[Manual Prompt Engineering]], [[Context Window]] tuning
  - related-to:: [[LLM Agents]], [[Chain-of-Thought Prompting]], [[Transformer Architecture]], [[Tool Use]], [[Hallucination]], [[Foundation Model]], [[Reasoning]]
  - standardized-by:: [[Stanford NLP Group]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:DSPySignature))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:DSPyModule))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:DSPyTeleprompter))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:MIPROv2Optimizer))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:BootstrapFewShotOptimizer))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:BetterTogetherOptimizer))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:DSPyMetricFunction))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:hasPart ai:DSPyEvaluator))

  ## Dependency Relationships
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:EvaluationMetric))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:TrainingExampleSet))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:FoundationModelAPIAccess))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:TypedSignatureDeclaration))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:requires ai:PythonRuntime))

  ## Capability Relationships
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:LLMOrchestration))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:MultiStepReasoning))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:StructuredOutput))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:CrossModelPortability))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:enables ai:FewShotBootstrappingPipeline))

  ## Implementation Relationships
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:implements ai:AutomaticPromptOptimisation))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:implements ai:InContextLearning))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:implements ai:FewShotBootstrapping))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:implements ai:BayesianHyperparameterSearch))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:implements ai:PromptCompilationPipeline))

  ## Reduction Relationships
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:reducesTo ai:PromptStringWithDemonstrations))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:reducesTo ai:FinetuningInstructionDataset))

  ## Support and Contrast Relationships
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:supports ai:ChainOfThoughtReasoning))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:supports ai:ZeroShotPrompting))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:supports ai:HallucinationMitigation))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:supports ai:ModelPerformanceBenchmarking))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:contrasts ai:ManualPromptEngineering))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:contrasts ai:LangChainOrchestrationPattern))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:relatedTo ai:TransformerArchitecture))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:relatedTo ai:ToolUseInAgents))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:relatedTo ai:CodeGenerationPipeline))
      SubClassOf(ai:DSPyFramework
        ObjectSomeValuesFrom(ai:relatedTo ai:FoundationModelFinetuning))

  ## About

  **DSPy** emerged from a fundamental dissatisfaction with the fragility of hand-crafted prompts as the primary interface between software engineers and [[Large Language Models]]. The core observation motivating the framework, articulated in Khattab et al. (2023), is that [[Prompt Engineering]] is not engineering in any principled sense: prompts are brittle strings whose performance is sensitive to phrasing, model version, and task distribution, and the effort to tune them scales superlinearly with the number of modules in a pipeline. DSPy reframes the problem by borrowing concepts from classical ML compilers: a program is declared in terms of what each step should accomplish (via typed Signatures), not how the model should be instructed to accomplish it (via prompt text). The optimiser then performs the empirical search over prompt formulations and demonstration selection, guided by a metric function that measures end-to-end task quality on labelled training examples. The result is a program whose prompts are learnable artefacts, not static strings — they can be regenerated automatically when the target model changes, when the evaluation distribution shifts, or when more training examples become available.

  The intellectual lineage of DSPy connects several streams of prior work. The bootstrapping of [[Few-Shot Prompting]] demonstrations has roots in self-training and pseudo-labelling in [[Machine Learning]]. The idea of using one language model to generate or improve prompts for another traces back to Automatic Prompt Engineer (APE, Zhou et al., 2022). OPRO (Yang et al., 2024) treats the language model itself as the optimiser, iterating over natural-language prompt formulations guided by past results. MIPROv2, DSPy's primary optimizer as of 2025, performs [[Bayesian Optimisation]] over a joint search space of instruction text and demonstration sets, using a surrogate model to efficiently navigate candidates without exhaustively evaluating all combinations. BetterTogether (2024) extends this to alternating optimisation of both prompts and model weights via [[Training and Fine Tuning]], combining fine-tuning and in-context optimisation in a single framework. The positioning of DSPy within the broader [[Automatic Prompt Optimisation]] family is as a compiler-level framework — it orchestrates other optimisation strategies rather than implementing one specific algorithm — and its modular architecture means new optimisers can be plugged in without changing the user-facing program declaration.

  The practical impact of DSPy on [[LLM Orchestration]] has been substantial. Published benchmarks in the ICLR 2024 paper show gains of over 25% on GPT-3.5 and over 65% on Llama 2 13B versus standard few-shot prompting, with gains over expert-crafted demonstrations of 5–46% and 16–40% respectively across diverse multi-stage tasks including [[Retrieval Augmented Generation]], [[Multi-Step Reasoning]], and text classification. MIPROv2 outperformed baseline optimisers on five of seven diverse multi-stage LM programs using Llama 3 8B, with gains of up to 13% accuracy. The framework has been adopted in production by JetBlue (chatbot, replacing [[LangChain]] for processing speed gains), Databricks (classification and [[Retrieval Augmented Generation]]), Moody's (financial workflow optimisation), VMware (RAG optimisation), Replit ([[Code Generation]]), and Zoro UK (product attribute normalisation across 300+ suppliers). DSPy 3.0, released at Databricks Data + AI Summit 2025, introduced thread-safe settings and native async support for high-concurrency production deployments, native multimodal input handling for images and audio, Pydantic model integration for typed [[Structured Output]], and native MLflow 3.0 integration for experiment tracking. GEPA (Reflective Prompt Evolution, July 2025) added evolutionary self-improvement loops. An ICLR 2026 paper on compound AI systems optimisation (openreview.net/pdf?id=eC4ygDs02R) further formalises the DSPy paradigm in the context of multi-model agentic pipelines, and a June 2026 arXiv survey (arXiv:2506.08234) positions DSPy as the most comprehensive compiler-level framework in the broader [[Automatic Prompt Optimisation]] landscape.

  ## Components / Architecture

  **Signatures** are the foundational abstraction. A Signature is a type-annotated class or string specification of the form `input_field: type, description -> output_field: type, description` with an optional docstring providing global task instructions. For example, `question: str -> answer: str` declares a simple QA step; `context: list[str], question: str -> answer: str, rationale: str` declares a chain-of-thought RAG step. Pydantic models are supported in DSPy 3.0 for structured field types, enabling rich [[Structured Output]] with nested schemas. Signatures replace hand-written prompt templates and form the unit of composability — they define the contract without specifying implementation.

  **Modules** are DSPy's pre-built reasoning patterns, each taking a Signature and returning a callable that executes the step against the configured LM backend: `dspy.Predict` (basic generation from signature), `dspy.ChainOfThought` (appends a rationale field implementing [[Chain-of-Thought Prompting]]), `dspy.ReAct` (implements the Reason-Act [[ReAct]] loop for [[AI Agents]] with external [[Tool Use]]), `dspy.ProgramOfThought` ([[Code Generation]] as reasoning — generates and executes Python), `dspy.MultiChainComparison` (ensemble over multiple reasoning chains using [[Self-Consistency]]), `dspy.Retrieve` (integration with vector retrieval systems for [[Retrieval Augmented Generation]]). Custom modules subclass `dspy.Module` and implement `forward()`.

  **Programs** are composed pipelines of modules wired together in Python `forward()` methods, passing outputs of one module as inputs to the next. Because each module's signature is declared independently, the program graph is explicit, introspectable, and optimisable at the module level. The program can reference any number of modules; the optimiser tunes all of them jointly (MIPROv2) or greedily (BootstrapFewShot).

  **Optimisers (Teleprompters)** are the core value-add. Each optimiser takes a program, a `list[dspy.Example]` training set, and a metric function, and returns an optimised program with concrete prompts and few-shot examples. `BootstrapFewShot`: greedily selects demonstrations by running a teacher program over training examples, scoring each with the metric. `BootstrapFewShotWithRandomSearch`: adds random search over demonstration subsets. `COPRO` (Coordinate Ascent Prompt Optimiser): uses beam search over LLM-generated instruction variants. `MIPROv2`: jointly optimises instructions and demonstrations via [[Bayesian Optimisation]] with a surrogate model over discretised candidate embeddings — the recommended default for complex pipelines. `BetterTogether`: alternates between prompt and weight optimisation for fine-tuning via [[Training and Fine Tuning]]. `GEPA` (2025): evolutionary self-improvement loops. `OPRO`-style: LLM-as-optimiser meta-prompting with iterative refinement.

  **Metrics** are Python functions `metric(gold: dspy.Example, pred: dspy.Prediction) -> float | bool` providing the only supervision signal DSPy requires. Metrics can be exact match, F1, BLEU, or complex LLM-judge calls scoring faithfulness, relevance, or safety — enabling evaluation-driven development where the metric defines quality. DSPy 3.0 includes built-in observability hooks that log metric scores, prompt variations, and token counts to MLflow 3.0 for experiment tracking.

  **LM Backends**: DSPy provides a unified `dspy.LM(model_name)` interface wrapping any LiteLLM-supported model — OpenAI GPT-4 / o1, Anthropic Claude Sonnet 4 / Opus 4.5, Google Gemini 2.0, Meta Llama 3 70B, Mistral Large, local Ollama models. All backend-specific prompt formatting (system/user/assistant roles, tool-call syntax, JSON mode) is handled transparently, decoupling program logic from API quirks. This is the mechanism enabling cross-model portability: recompile with a different `dspy.LM` to transfer the program to a new model.

  **DSPy 3.0 Production Features** (August 2025): Thread-safe `dspy.context()` settings management enabling concurrent requests; native `async/await` support via `apredict()` / `achainofthought()` for high-throughput production deployments; MLflow 3.0 tracing integration logging every LM call, prompt variation, and metric score; Pydantic-typed [[Structured Output]] fields with JSON schema validation; native multimodal (image + audio) field support in Signatures; streaming response support with token-by-token output.

  ## Formal Analysis

  DSPy formalises the relationship between a declared program `P`, a language model `M`, a metric `f`, and training data `D` as a compilation problem: find parameters `θ` (prompt strings and few-shot sets per module) such that `E_{(x,y) ∈ D}[f(P_θ(M, x), y)]` is maximised. This is analogous to hyper-parameter optimisation in classical [[Machine Learning]], with the key difference that the search space is the discrete, structured space of natural-language prompt strings and ordered example sets. MIPROv2 navigates this space using a [[Bayesian Optimisation]] surrogate (typically a Gaussian process or random forest over discretised candidate embeddings) with an acquisition function balancing exploration and exploitation. The search is grounded in bootstrapped candidate demonstrations generated by running the current best program on training examples with a teacher model and retaining traces that satisfy the metric.

  The textual differentiation approach of TextGrad (Yuksekgonul et al., 2024) is an alternative that applies gradient-like feedback through LLM-generated natural-language critiques. DSPy and TextGrad are complementary: DSPy adds in-context demonstrations, TextGrad optimises the system prompt via textual backpropagation. Together they cover the full search space of in-context and instruction optimisation, and combined approaches show additive gains on several benchmarks. BetterTogether extends DSPy further by closing the loop to weight optimisation, enabling the optimised program to serve as a [[Training and Fine Tuning]] data generator for a smaller target model.

  The theoretical contribution of DSPy extends beyond its specific optimisers. By introducing the Signature as a formal contract and the program graph as an explicit computational object, DSPy enables program-level reasoning about [[LLM Orchestration]] pipelines that was not possible in ad-hoc prompt-engineering workflows. This opens paths toward formal verification, automated regression testing, and systematic benchmarking of LLM programs — capabilities that are prerequisites for safe deployment of [[AI Agents]] in regulated domains.

  ## Use Cases / Major Families

  **[[Retrieval Augmented Generation]] (RAG)**: DSPy's most common production use case. A pipeline of `dspy.Retrieve` followed by `dspy.ChainOfThought` is declared in a few lines. MIPROv2 optimises the retrieval query reformulation instruction and the generation instruction jointly, improving answer faithfulness over baseline RAG. Databricks deploys this pattern across classification and knowledge-retrieval applications. The ColBERTv2 and FAISS retrievers integrate directly as DSPy Retrieve modules.

  **Multi-Hop [[Multi-Step Reasoning]]**: For tasks requiring multiple retrieval–reasoning cycles, DSPy programs chain Retrieve and Predict modules across hops. The optimiser coordinates prompts across hops to maintain coherent reasoning chains, a scenario where manual tuning is intractable. Multi-hop QA over knowledge graphs and document corpora is a primary DSPy benchmark task.

  **Agentic Tool-Use Systems**: `dspy.ReAct` modules implement the Reason-Act loop for [[AI Agents]] with external [[Tool Use]]. DSPy can optimise the system prompt and tool-invocation strategy by treating the agent's trajectory as a training signal. JetBlue uses this pattern for customer service chatbots; Moody's for financial workflow agents.

  **Classification and [[Structured Output]] Extraction**: `dspy.Predict` with a classification Signature and Pydantic output types automates named-entity recognition, sentiment, and structured data extraction. Zoro UK uses DSPy for product attribute normalisation across 300+ supplier catalogues.

  **[[Code Generation]]**: `dspy.ProgramOfThought` generates Python code as part of [[Reasoning]], executes it, and uses the result to answer questions. Combined with Signatures typed to code output fields, this powers [[Code Generation]] pipelines for data analysis, scientific computing, and software engineering. Replit uses DSPy for automated code generation workflows.

  **Medical and Scientific NLP**: DSPy has been applied to clinical NLP (AutoMedPrompt, 2025 — optimising medical prompts via textual gradients for diagnostic reasoning), scientific literature synthesis, and structured information extraction from research papers. The metric-driven compilation approach makes DSPy well-suited for high-stakes domains where systematic quality measurement is required.

  **Fine-tuning Data Generation**: `BetterTogether` uses an optimised DSPy program to generate high-quality instruction–response pairs for fine-tuning smaller models, closing the loop between [[Prompt Engineering]] and [[Training and Fine Tuning]]. This enables iterative quality improvement without requiring human annotation of every training example.

  ## Academic Context

  DSPy originated in the Stanford NLP Group under Omar Khattab (PhD student, later faculty) and Christopher Potts (Professor of Linguistics) with contributions from Matei Zaharia (Databricks co-founder, UC Berkeley), among 12 co-authors spanning Stanford CRFM, Databricks, and the broader [[Natural Language Processing]] community. The foundational paper (arXiv:2310.03714, October 2023) was accepted as a poster at ICLR 2024 and received broad community recognition, accumulating thousands of citations and spawning a substantial follow-on literature. The 2024 MIPROv2 paper (Opsahl-Ong et al.) formalised the [[Bayesian Optimisation]] approach to joint instruction and demonstration optimisation. BetterTogether (2024) introduced the prompt-and-weights joint optimisation framework. GEPA (2025, building on Fernando et al. 2023 PromptBreeder lineage) adds evolutionary self-improvement. The June 2026 arXiv survey "Compound AI Systems Optimisation" (arXiv:2506.08234) positions DSPy as the most comprehensive compiler-level framework in the [[Automatic Prompt Optimisation]] space. An O'Reilly book — *Context Engineering with DSPy* (2025) — marks the framework's maturity for practitioner adoption. DSPy is positioned within the Stanford CRFM agenda and relates to the broader programme of making [[Foundation Model]] pipelines reliable, modular, and systematically improvable. Courses at Stanford CS and UCL have incorporated DSPy in postgraduate NLP curricula.

  ## Current Landscape (2026)

  DSPy has over 20,000 GitHub stars and is among the most actively maintained [[LLM Application Framework]] projects on GitHub. DSPy 3.0, presented at Databricks Data + AI Summit 2025, is the current stable release. MIPROv2 is the recommended primary optimiser for complex multi-module pipelines; BootstrapFewShot remains the default for simpler tasks. Enterprise adoption includes JetBlue, Databricks, Moody's, VMware, Replit, and Zoro UK. The framework ships on PyPI as the `dspy` package (renamed from `dspy-ai` in 2024). An ICLR 2026 paper (openreview.net/pdf?id=eC4ygDs02R) extends the compound AI systems framework; a June 2026 arXiv survey (arXiv:2506.08234) benchmarks DSPy-style compilation against TextGrad, OPRO, and ProTeGi across 12 diverse tasks. Databricks' MLflow 3.0 integration makes DSPy the first [[LLM Application Framework]] with native experiment-tracking for prompt optimisation runs, comparable to MLflow tracking for classical [[Machine Learning]] experiments. DSPy's roadmap includes enhanced multi-module joint optimisation, improved streaming support for low-latency production, and native integration with agent benchmark suites (MINT, AgentBench, GAIA).

  ## UK Context

  **Direct UK Deployment**: Zoro UK, a B2B industrial e-commerce platform, uses DSPy in production for product attribute normalisation across 300+ supplier data feeds — one of the few publicly documented UK production deployments at scale. This normalisation task — mapping heterogeneous supplier product descriptions to a canonical ontology — is a prototypical multi-stage [[Natural Language Processing]] pipeline that benefits directly from DSPy's metric-driven optimisation.

  **Academic Presence**: University College London's Department of Computer Science has included DSPy in postgraduate NLP and AI courses (2025–2026). The Alan Turing Institute's LLM research programme — involving Edinburgh, Manchester, and Cambridge groups — engages with the [[Automatic Prompt Optimisation]] paradigm. The University of Edinburgh's Institute for Language, Cognition and Computation (ILCC) works on related automatic [[Prompt Engineering]] and [[Reasoning]] optimisation topics. The Cambridge Language Technology Lab (LTL) engages with declarative specification of LLM pipelines relevant to DSPy's architecture.

  **Industry Adoption Trajectory**: UK AI companies including Wayve (autonomous vehicle LLM reasoning), Synthesia (multimodal content generation), and PolyAI (conversational AI) operate complex [[LLM Orchestration]] pipelines where DSPy's systematic optimisation approach is applicable. The UK AI Safety Institute's model evaluation work uses structured LLM pipelines for benchmark assessment — a natural DSPy use case where metric-driven compilation replaces ad-hoc prompting.

  **Northern Industrial Context**: Leeds and Manchester digital agency and SaaS sectors are beginning to adopt structured [[LLM Application Framework]] tools. The Sheffield Advanced Manufacturing Research Centre (AMRC) has piloted LLM-based knowledge extraction from engineering documents, where structured [[Retrieval Augmented Generation]] pipelines — DSPy's primary deployment pattern — are being evaluated as replacements for proprietary solutions. Leeds Data Labs and Manchester's Co-op Tech division have explored DSPy for internal knowledge retrieval tooling.

  ## Future Directions (2026–2030)

  **[[Reinforcement Learning]] Integration**: BetterTogether's joint optimisation of prompts and weights anticipates deeper integration with RLHF and RLAIF pipelines, where DSPy programs generate preference data and weights are updated continuously. This positions DSPy as a production infrastructure layer for continuous model improvement, not merely a one-time compilation step.

  **Multi-Model and Multi-Agent [[LLM Orchestration]]**: Current DSPy optimisers treat the target model as fixed during optimisation. Future work will jointly optimise routing between multiple specialised models and the prompts for each, enabling compiler-managed model orchestration across heterogeneous [[AI Agents]] graphs. The ICLR 2026 compound AI systems paper begins formalising this direction.

  **Formal Program Verification**: DSPy's Signature abstraction creates scaffolding for formal specification of LLM program behaviour. Future tools will use Signatures as machine-checkable contracts enabling automated regression testing and safety verification of [[AI Agents]] — a prerequisite for regulated-domain deployment (medical, legal, financial).

  **Domain-Specific Compilers**: Medical, legal, financial, and scientific domain compilers built on DSPy will incorporate domain-specific metrics (clinical accuracy, legal citation precision, financial regulation compliance) as first-class optimisation objectives, enabling systematic deployment in regulated sectors where [[Hallucination]] mitigation and [[Instruction Following]] reliability are non-negotiable.

  **Low-Latency [[Structured Output]] Optimisation**: As production latency requirements tighten, optimisers will increasingly account for token-efficiency and time-to-first-token metrics, producing prompts that are not just accurate but parsimonious. DSPy's native async support in v3.0 is a first step toward latency-aware compilation.

  **Integration with Agent Benchmark Suites**: The emerging MINT, AgentBench, GAIA, and SWE-Bench ecosystems will provide standard training and evaluation splits enabling reproducible DSPy optimisation comparisons across [[AI Agents]] frameworks, normalising DSPy compilation into the standard evaluation protocol for [[LLM Orchestration]] systems.

  ## DSPy in the Broader AI Safety and Reliability Context

  DSPy's compilation approach has implications beyond performance optimisation — it addresses several concerns at the intersection of [[Large Language Models]], AI safety, and production reliability that are increasingly central to responsible AI deployment.

  **Systematic [[Hallucination]] Mitigation**: Hand-crafted prompts offer no principled mechanism for reducing [[Hallucination]] beyond heuristic additions like "answer only if you are sure" or "cite your sources." DSPy's metric-driven compilation enables the metric function itself to penalise hallucination — a faithfulness metric scoring whether the answer is grounded in retrieved context will directly drive the optimiser to select prompts and demonstrations that produce more faithful outputs. This systematic approach to hallucination reduction is qualitatively different from heuristic prompt additions because it is grounded in empirical evaluation: the optimiser validates every candidate configuration against held-out examples before selecting it.

  **Reproducibility and Auditability**: A compiled DSPy program is a JSON-serialisable artefact containing the exact prompt text, few-shot demonstrations, and configuration parameters used to produce every inference. This enables full reproducibility — reloading the compiled program and running on the same inputs produces the same outputs (subject to model API determinism). For regulated-domain AI (medical, financial, legal), this auditability is a regulatory requirement: the MHRA and FDA expect AI systems to be fully characterised by their training and inference configuration, not "the prompts we were using at the time." DSPy's compilation artefact satisfies this requirement in a way that ad-hoc prompt engineering does not.

  **Cross-Model [[Foundation Model]] Risk Diversification**: Organisations that depend on a single LLM provider for critical pipelines face concentration risk: model deprecation, API outages, price changes, or safety policy updates can break production systems. DSPy's portability — compile once, recompile for any [[Foundation Model]] via `dspy.LM` — enables organisations to maintain compiled programs for multiple model backends (GPT-4o, Claude Sonnet, Llama 3 70B) and switch between them with a single configuration change, dramatically reducing single-provider dependency.

  **Systematic Regression Testing**: DSPy's metric function, training set, and validation set collectively define an automated regression test suite for the LLM pipeline. When a model provider updates their model (e.g., GPT-4o to GPT-4o-mini, or Claude 3.7 to Claude Sonnet 4), rerunning `optimiser.compile()` with the existing program, metric, and data produces a new compiled program validated against the same quality bar as the original. This is a principled framework for managing LLM model updates in production — analogous to CI/CD pipelines for traditional software, with metric scores as the build health indicator tracked in MLflow.

  **Integration with AI Governance Frameworks**: The UK AI Safety Institute's Evals team and the US NIST AI RMF both emphasise systematic evaluation as the foundation of trustworthy AI. DSPy's compilation framework provides natural hooks for governance: the metric function defines quality; the validation set defines the evaluation population; the compiled program artefact is the versioned, auditable model artifact. Plugging DSPy compilation into a CI/CD pipeline with MLflow tracking creates a lightweight AI governance infrastructure for [[LLM Orchestration]] systems.

  ## DSPy Production Integration Patterns

  Moving DSPy from research experimentation to production deployment involves patterns that have been validated by early enterprise adopters and documented in the DSPy 3.0 release and community resources.

  **Async FastAPI Server Pattern**: The most common production deployment pattern wraps a compiled DSPy program in a FastAPI endpoint with async inference:

      from fastapi import FastAPI
      import dspy

      app = FastAPI()
      lm = dspy.LM("anthropic/claude-sonnet-4-5", temperature=0.0)
      dspy.configure(lm=lm)
      program = MultiHopRAG()
      program.load("compiled_multihop_rag.json")

      @app.post("/query")
      async def query(request: QueryRequest):
          with dspy.context(lm=lm):
              result = await program.aforward(question=request.question)
          return {"answer": result.answer, "rationale": result.rationale}

  The `dspy.context()` context manager (DSPy 3.0) is thread-safe, enabling concurrent request handling without shared mutable state. Multiple compiled programs for different tasks can be loaded once at startup and called concurrently.

  **MLflow Experiment Tracking Pattern**: DSPy 3.0's native MLflow integration enables systematic tracking of compilation runs:

      import mlflow
      mlflow.dspy.autolog()

      with mlflow.start_run(run_name="miprov2_compilation_v2"):
          optimised = dspy.MIPROv2(metric=my_metric).compile(
              program, trainset=train, num_trials=40
          )
          optimised.save("compiled_v2.json")
          mlflow.log_artifact("compiled_v2.json")
          mlflow.log_metric("val_accuracy", evaluate(optimised, devset=dev))

  This pattern creates a versioned experiment history of compilation runs, enabling A/B comparison of different optimisation configurations, metric functions, and training sets. The MLflow run log captures every candidate evaluation, enabling post-hoc analysis of the [[Bayesian Optimisation]] search trajectory.

  **Multi-Model Fallback Pattern**: DSPy's unified `dspy.LM` interface enables graceful degradation when a primary [[Foundation Model]] API is unavailable:

      primary_lm = dspy.LM("openai/gpt-4o")
      fallback_lm = dspy.LM("anthropic/claude-sonnet-4-5")

      try:
          with dspy.context(lm=primary_lm):
              result = program(question=question)
      except APIError:
          with dspy.context(lm=fallback_lm):
              result = program(question=question)

  This is a production reliability pattern that requires compiled programs for both models (recompile with each `dspy.LM` as the backend), maintaining comparable quality across providers. Moody's financial workflow system uses a variant of this pattern for provider redundancy.

  **Continuous Optimisation Pipeline Pattern**: For [[AI Agents]] or [[Retrieval Augmented Generation]] systems where new training examples accumulate over time (from human corrections, user feedback, or automatic labelling), a continuous optimisation pipeline recompiles the DSPy program on a schedule:

      # Run daily or on significant data accumulation
      new_examples = fetch_new_labelled_examples(since=last_run)
      trainset = existing_trainset + new_examples
      optimised = dspy.MIPROv2(metric=metric).compile(
          program, trainset=trainset, num_trials=20
      )
      if evaluate(optimised, devset) > evaluate(current_program, devset) + threshold:
          deploy(optimised)
          current_program = optimised

  This pattern implements a continuous improvement loop for LLM pipeline quality, with deployment gated by measurable metric improvement. It is the closest analogue to standard MLOps continuous training pipelines, applied to the [[Prompt Engineering]] and demonstration selection problem.

  **DSPy with Structured Knowledge Retrieval**: For enterprise knowledge management use cases, DSPy's [[Retrieval Augmented Generation]] modules integrate with enterprise vector stores (Weaviate, Pinecone, Azure AI Search, Elasticsearch with vector fields):

      dspy.settings.configure(
          lm=dspy.LM("openai/gpt-4o"),
          rm=dspy.WeaviateRM("my_collection", client=weaviate_client, k=5)
      )
      rag_program = dspy.ChainOfThought("context: list[str], question: str -> answer: str")
      retrieve = dspy.Retrieve(k=5)

      class EnterpriseRAG(dspy.Module):
          def forward(self, question: str):
              context = retrieve(question).passages
              return rag_program(context=context, question=question)

  MIPROv2 optimisation of this pipeline tunes the question-passing and context-formatting strategy jointly, ensuring that the retrieval query maximises recall of relevant passages while the generation instruction maximises answer quality given the retrieved context.

  ## DSPy and the Emerging Landscape of LLM Programming Frameworks

  DSPy is not the only framework addressing the [[Prompt Engineering]] brittleness problem, but it occupies a distinctive position in the ecosystem. Understanding its relationship to adjacent frameworks clarifies when to choose DSPy versus alternatives.

  **Guidance (Microsoft)**: Microsoft's Guidance library enables interleaved generation and control logic within a single prompt template, enforcing output format constraints via constrained decoding. Where DSPy optimises the instructions and demonstrations, Guidance controls token-level generation. They are complementary: Guidance enforces [[Structured Output]] format, DSPy optimises the content of the instructions that produce that output.

  **Marvin and Instructor**: These libraries focus on [[Structured Output]] extraction — Pydantic-typed extraction from LLM responses with automatic retry on parse failure. They address the output parsing problem that DSPy's TypedPredictor also addresses. The key difference is that Instructor/Marvin provide no optimisation capability — they enforce schema but leave the prompt to the developer.

  **LangGraph (LangChain)**: LangGraph provides a state-machine framework for [[AI Agents]] with explicit graph-based state management. It is more opinionated about agent architecture (state transitions, conditional edges) than DSPy's flexible module composition. LangGraph and DSPy can be combined: LangGraph manages the high-level agent state machine while individual LangGraph nodes use DSPy-compiled modules for their LM calls.

  **Haystack (deepset)**: An open-source [[LLM Orchestration]] framework with a component pipeline model similar to DSPy's module composition. Haystack 2.x has added prompt optimisation capabilities inspired by DSPy. The main differentiation is ecosystem: Haystack has a larger library of pre-built document processing components; DSPy has the more principled optimisation framework.

  **AutoGPT, BabyAGI, and Agent Frameworks**: These frameworks focus on autonomous [[AI Agents]] with long-horizon planning and memory, often without systematic prompt optimisation. DSPy's [[ReAct]] module can power the reasoning step of these agents while MIPROv2 optimises the system prompts governing tool selection and response synthesis, adding systematic quality improvement to the autonomous agent capability.

  The DSPy ecosystem is distinguished from all of these by its combination of: (1) clean declarative abstraction (Signatures), (2) composable module library covering [[Chain-of-Thought Prompting]], [[ReAct]], retrieval, and ensemble patterns, (3) principled metric-driven optimisation (MIPROv2), and (4) model portability through unified [[Foundation Model]] backend abstraction. This combination makes DSPy the most complete "compiler" for [[Large Language Models]] currently available, and positions it as infrastructure for the next generation of production LLM systems that require reliability, auditability, and cross-model portability.

  ## DSPy and Cognitive Architectures for AI Agents

  The convergence of DSPy with cognitive AI agent architectures represents one of the most significant directions in the framework's evolution. Understanding how DSPy fits into broader [[AI Agents]] architectures — and what it adds — illuminates the broader trajectory of [[LLM Orchestration]] as a discipline.

  **Classical Agent Architectures and DSPy**: Classical cognitive architectures (ACT-R, SOAR) formalised memory, perception, and action as distinct computational modules with well-defined interfaces. Modern [[AI Agents]] built on [[Large Language Models]] face the same architectural challenge but in a natural-language substrate. DSPy's module abstraction provides a partial answer: each module is a cognitive subcomponent with a declared input-output contract (Signature), and the composed program is the agent's cognitive architecture. The optimiser tunes the prompts governing each subcomponent to maximise a behavioural metric — an approach analogous to parameterising the connection weights in a neural cognitive architecture.

  **Memory Integration in DSPy Agents**: [[AI Agents]] require multiple types of memory: working memory (the current context window, bounded by [[Context Window]] limits), episodic memory (records of past interactions, storable in vector databases and retrievable via `dspy.Retrieve`), and semantic memory (factual knowledge, accessible via [[Retrieval Augmented Generation]] or tool calls). DSPy's `dspy.ReAct` module implicitly implements a working memory through the accumulated Thought/Observation history in the current context. Episodic memory integration requires explicit `dspy.Retrieve` modules backed by vector stores that index past interaction embeddings. The optimiser can tune the retrieval query strategy — which aspects of the current question to use as retrieval keys — as part of the compilation process.

  **Multi-Agent Coordination with DSPy**: Complex tasks that exceed the capability of single-agent pipelines require multi-agent coordination. DSPy programs can serve as individual agents in a multi-agent system, with inter-agent communication mediated by [[Structured Output]] Pydantic models passed between agents. The ICLR 2026 compound AI systems paper explicitly addresses multi-agent compilation — optimising the prompts of multiple cooperating agents jointly against a shared task metric. This represents the frontier of DSPy's compilation paradigm: extending systematic optimisation from single-agent pipelines to multi-agent workflows where interaction patterns between agents are themselves optimisable.

  **DSPy for Autonomous Scientific Discovery**: Research agents that generate hypotheses, design experiments, retrieve literature, and synthesise findings represent a compelling application of DSPy's compilation framework. Each stage — hypothesis generation, literature retrieval, experimental design, result synthesis — is a DSPy module with a typed Signature. The end-to-end metric (quality of synthesised findings as judged by an LLM-as-judge) drives joint optimisation across the pipeline. Early prototypes of this architecture have been demonstrated for materials discovery (suggesting novel crystal structures) and drug interaction prediction (systematically querying PubChem, ChEMBL, and clinical trial databases via [[Tool Use]] in a `dspy.ReAct` loop optimised by MIPROv2).

  ## Research & Literature
  1. Khattab, O., Singhvi, A., Maheshwari, P., Zhang, Z., Santhanam, K., Vardhamanan, S., Haq, S., Sharma, A., Joshi, T.T., Moazam, H., Miller, H., Zaharia, M., & Potts, C. (2023). DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines. arXiv:2310.03714. https://arxiv.org/abs/2310.03714
  2. Khattab, O., et al. (2024). DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines. *ICLR 2024*. https://openreview.net/forum?id=sY5N0zY5Od
  3. Opsahl-Ong, K., et al. (2024). Optimizing Instructions and Demonstrations for Multi-Stage Language Model Programs (MIPROv2). https://dspy.ai/api/optimizers/MIPROv2/
  4. Singhvi, A., et al. (2024). BetterTogether: Unifying Prompt and Weight Optimization for LM Programs. Stanford NLP.
  5. Yuksekgonul, M., et al. (2024). TextGrad: Automatic "Differentiation" via Text. arXiv:2406.07496. https://arxiv.org/pdf/2406.07496
  6. Zhou, Y., et al. (2022). Large Language Models Are Human-Level Prompt Engineers. arXiv:2211.01910. [APE — Automatic Prompt Engineer]
  7. Yang, C., et al. (2024). Large Language Models as Optimizers. arXiv:2309.03409. [OPRO]
  8. Pryzant, R., et al. (2023). Automatic Prompt Optimization with "Gradient Descent" and Beam Search. arXiv:2305.03495. [ProTeGi]
  9. Fernando, C., et al. (2023). PromptBreeder: Self-Referential Self-Improvement via Prompt Evolution. arXiv:2309.16797.
  10. Brown, T., et al. (2020). Language Models are Few-Shot Learners. *NeurIPS 2020*. arXiv:2005.14165.
  11. Wei, J., et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. *NeurIPS 2022*. arXiv:2201.11903.
  12. Kojima, T., et al. (2022). Large Language Models are Zero-Shot Reasoners. *NeurIPS 2022*. arXiv:2205.11916.
  13. Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *NeurIPS 2020*. arXiv:2005.11401.
  14. Lester, B., et al. (2021). The Power of Scale for Parameter-Efficient Prompt Tuning. *EMNLP 2021*. arXiv:2104.08691.
  15. Li, X., & Liang, P. (2021). Prefix-Tuning: Optimizing Continuous Prompts for Generation. *ACL 2021*. arXiv:2101.00190.
  16. Databricks / DSPy Team (2025). DSPy 3.0 and DSPy at Databricks. *Data + AI Summit 2025*. https://www.databricks.com/dataaisummit/session/dspy-30-and-dspy-databricks
  17. DSPy Project (2025). DSPy Roadmap 2025–2026. https://dspy.ai/roadmap/
  18. O'Reilly Media (2025). *Context Engineering with DSPy*. ISBN: 0642572261603. https://www.oreilly.com/library/view/context-engineering-with/0642572261603/
  19. ICLR 2026 (2026). Compound AI systems optimisation. https://openreview.net/pdf?id=eC4ygDs02R
  20. arXiv (June 2026). Compound AI Systems Optimization: A Survey. arXiv:2506.08234. https://arxiv.org/pdf/2506.08234
  21. AutoMedPrompt (2025). Optimizing LLM Medical Prompts Using Textual Gradients. arXiv:2502.15944.
  22. Weaviate Blog (2024). Your Language Model Deserves Better Prompting: DSPy Optimizers. https://weaviate.io/blog/dspy-optimizers
  23. DeepWiki (2025). MIPROv2: Instruction and Parameter Optimization in DSPy. https://deepwiki.com/stanfordnlp/dspy/4.4-miprov2:-instruction-and-parameter-optimization
  24. Superoptix AI (2024). DSPy Optimizers Guide. https://superagenticai.github.io/superoptix-ai/guides/dspy-optimizers/
  25. Outcomemag (2025). DSPy News and Updates: The Complete Guide. https://outcomemag.com/dspy-news-updates/
  26. Structured Prompt Language (2026). Declarative Context Management for LLMs. arXiv:2602.21257.
  27. Adnan Masood (2024). How LLM Optimization Frameworks Like TextGrad and DSPy Are Building the Next Generation of Reliable AI. https://medium.com/@adnanmasood/beyond-prompt-engineering-how-llm-optimization-frameworks-like-textgrad-and-dspy-are-building-the-6790d3bf0b34
  28. Hugging Face (2024). Automatic Prompt Optimization with DSPy and Cross Encoders. https://huggingface.co/blog/dleemiller/auto-prompt-opt-dspy-cross-encoders

  ## DSPy Compilation Process: A Step-by-Step Analysis

  Understanding the DSPy compilation process in detail reveals why it represents a genuine paradigm shift from conventional [[Prompt Engineering]] rather than merely an automation layer over the same manual activity.

  **Step 1 — Program Declaration**: The developer writes a DSPy program as a subclass of `dspy.Module` with a `forward()` method. Each module within `forward()` is instantiated with a Signature. For a multi-hop [[Retrieval Augmented Generation]] system:

      class MultiHopRAG(dspy.Module):
          def __init__(self, num_passages=3, num_hops=2):
              self.retrieve = dspy.Retrieve(k=num_passages)
              self.generate_query = dspy.ChainOfThought("context, question -> search_query")
              self.generate_answer = dspy.ChainOfThought("context, question -> answer")

          def forward(self, question):
              context = []
              for hop in range(self.num_hops):
                  query = self.generate_query(context=context, question=question).search_query
                  context += self.retrieve(query).passages
              return self.generate_answer(context=context, question=question)

  This program has three modules with four distinct signatures. No prompt text is written anywhere — only the input/output field names and their types.

  **Step 2 — Metric Definition**: The developer defines a Python metric function. For [[Multi-Step Reasoning]] QA:

      def answer_exact_match(example, prediction, trace=None):
          return example.answer.lower() in prediction.answer.lower()

  For [[Retrieval Augmented Generation]] with faithfulness:

      def faithfulness_metric(example, prediction, trace=None):
          judge = dspy.ChainOfThought("context, answer -> faithfulness: bool, rationale: str")
          result = judge(context=example.context, answer=prediction.answer)
          return result.faithfulness

  The metric can itself be an LLM call — a "LLM-as-judge" approach enabling nuanced quality evaluation beyond lexical match.

  **Step 3 — Optimiser Invocation**: MIPROv2 compilation takes the program, training set, and metric:

      optimiser = dspy.MIPROv2(metric=answer_exact_match, auto="medium")
      optimised_program = optimiser.compile(
          MultiHopRAG(),
          trainset=trainset,  # list[dspy.Example]
          num_trials=30,      # Bayesian optimisation budget
          max_bootstrapped_demos=4,
          max_labeled_demos=8
      )

  MIPROv2 internally: (1) runs BootstrapFewShot to generate candidate demonstration pools for each module; (2) uses an LLM to propose instruction variants grounded in task observations; (3) searches over the joint (instruction, demonstrations) space using a [[Bayesian Optimisation]] surrogate, evaluating each candidate program on a validation split; (4) returns the program variant with the highest validation metric score.

  **Step 4 — Compilation Output**: The compiled `optimised_program` is a `dspy.Module` object with `generate_query.predict.demos`, `generate_query.predict.extended_signature`, `generate_answer.predict.demos`, and `generate_answer.predict.extended_signature` attributes populated with specific few-shot examples and instruction text. Saving via `optimised_program.save("multihop_rag.json")` exports the program as a JSON file containing all optimised parameters. Compiling for a different model is simply `dspy.configure(lm=dspy.LM("anthropic/claude-sonnet-4-5"))` followed by re-running `optimiser.compile()`.

  **Step 5 — Inference Deployment**: The compiled program runs in inference identically to the uncompiled program — `optimised_program(question="...")` — but now sends prompts containing the optimised instructions and few-shot demonstrations. DSPy 3.0's async support enables deployment in FastAPI or aiohttp servers with concurrent request handling via `await optimised_program.aforward(question="...")`.

  ## DSPy vs Other LLM Frameworks: Detailed Comparison

  **DSPy vs [[LangChain]]**: LangChain provides a rich library of components (chains, agents, tools, memory) with explicit prompt templates baked into each component. Prompts are hand-authored strings or `PromptTemplate` objects; changing models requires rewriting prompts. JetBlue migrated from LangChain to DSPy and reported significant processing speed improvements, attributing the gain to DSPy's more parsimonious prompt structure (optimised prompts avoid redundancy that accumulates in hand-crafted templates). DSPy does not replace LangChain's ecosystem — it can consume LangChain tools as DSPy Tool objects — but represents a fundamentally different philosophy: declare what, not how.

  **DSPy vs Direct API Calls**: Direct OpenAI / Anthropic / Google API calls give maximum control but zero systematic optimisation. Engineers tune prompts empirically through trial-and-error, with no metric guarantee. Changing models requires complete reimplementation. DSPy wraps API calls in a compiler that provides systematic, reproducible optimisation with measurable metric improvements and model-portable programs.

  **DSPy vs Fine-tuning**: Full fine-tuning updates all model weights for a specific task distribution, yielding high task-specific performance but requiring large amounts of labelled data, significant compute, and a separate model deployment. DSPy (without BetterTogether) optimises only in-context parameters (prompts and demonstrations), requiring far less data and no GPU training. BetterTogether bridges both worlds, using DSPy's compilation framework to generate fine-tuning data and coordinate the hybrid optimisation. For many production tasks, DSPy prompt optimisation achieves 80–90% of fine-tuning performance at 1% of the data and compute cost.

  **DSPy vs TextGrad**: TextGrad applies textual backpropagation — using LLM-generated natural-language critiques as "gradients" to iteratively refine system prompt text. DSPy adds in-context demonstrations; TextGrad optimises instruction wording. They are complementary: DSPy handles the demonstration selection problem that TextGrad does not address; TextGrad handles fine-grained instruction optimisation. Combined DSPy+TextGrad approaches show additive gains on code generation and multi-step reasoning tasks.

  ## DSPy Module Taxonomy and Design Patterns

  DSPy's module library has grown substantially from the original `Predict` and `ChainOfThought` primitives to a rich taxonomy covering major reasoning and retrieval patterns. Understanding the module landscape helps developers choose appropriate abstractions for their use case.

  **Prediction Modules** handle direct generation from a signature. `dspy.Predict` is the base class — it formats the signature into a prompt, calls the LM, and parses the response back into typed output fields. It supports both string and Pydantic-typed output fields. `dspy.TypedPredictor` (a variant) enforces Pydantic schema validation with automatic retry on parse failure, essential for [[Structured Output]] pipelines where downstream code expects well-typed data.

  **Reasoning Modules** implement [[Chain-of-Thought Prompting]] variants. `dspy.ChainOfThought` appends a `rationale: str` field to the signature before the target output, instructing the model to reason step by step — implementing the Wei et al. (2022) CoT technique as a composable module. `dspy.ChainOfThoughtWithHint` adds an optional hint input for guided reasoning. `dspy.ProgramOfThought` generates Python code as the reasoning step, executes it in a sandboxed interpreter, and uses the result to answer the query — suitable for [[Multi-Step Reasoning]] over structured data, mathematical problems, and [[Code Generation]] tasks.

  **Agentic Modules** implement tool-calling loops for [[AI Agents]]. `dspy.ReAct` (implementing the Reason-Act pattern from Yao et al., 2022 — [[ReAct]]) interleaves Thought, Action, and Observation steps: at each step the model chooses a tool and arguments, the tool is called, the observation is appended to the context, and the loop repeats until a final answer is produced. `dspy.ReAct` accepts a list of DSPy Tool objects wrapping any Python callable (web search, database query, calculator, code executor). The optimiser can tune the system prompt governing tool selection strategy and the observation-processing instruction, something manual [[Prompt Engineering]] cannot do systematically.

  **Retrieval Modules** bridge to information retrieval backends. `dspy.Retrieve` calls a configured retriever (ColBERTv2, FAISS-backed DPR, Weaviate, Pinecone, Qdrant) with a query string and returns the top-k passages. The retriever is configured globally via `dspy.settings.configure(rm=...)`. For [[Retrieval Augmented Generation]] pipelines, `dspy.Retrieve` is the standard entry point; its query rewriting and passage ranking can be tuned by the optimiser through the `generate_query` ChainOfThought module that precedes it.

  **Ensemble Modules** aggregate outputs from multiple reasoning chains. `dspy.MultiChainComparison` runs the same signature multiple times and uses an additional LM call to compare and select the best answer — implementing the [[Self-Consistency]] technique from Wang et al. (2022) within the DSPy compilation framework. This is particularly effective for mathematical [[Reasoning]] and factoid QA where multiple reasoning paths can be sampled and majority-voted.

  **Custom Module Design Patterns**: DSPy's subclassing pattern encourages composition. A common pattern is the `dspy.Module` with a `__init__` that instantiates sub-modules and a `forward()` that wires them together. For complex multi-stage pipelines — query decomposition, sub-query retrieval, answer synthesis, faithfulness check — each stage is a separate module, enabling the optimiser to tune each independently while measuring the end-to-end metric. The modular design also enables ablation studies: turning off individual modules to measure their contribution to the metric provides a systematic debugging framework for LLM pipeline development.

  ## DSPy Optimiser Internals: MIPROv2 in Depth

  MIPROv2 (Multi-prompt Instruction PRoposal Optimizer v2) is the most sophisticated optimiser in the DSPy library and the recommended default for production pipelines. Its internal mechanism merits detailed examination as it demonstrates how [[Bayesian Optimisation]] is applied to the discrete, structured space of natural-language prompts.

  **Phase 1 — Bootstrapping**: MIPROv2 first runs `BootstrapFewShot` to generate a pool of candidate demonstrations for each module. The teacher program (which can be the student program itself, or a more capable model specified as `teacher_lm=dspy.LM("gpt-4o")`) is run over the full training set. Each example that produces a correct prediction (as judged by the metric) contributes its inputs, outputs, and intermediate reasoning steps as a candidate demonstration for the relevant module. This bootstrapping generates a pool of diverse, high-quality demonstrations rather than relying on the raw training examples.

  **Phase 2 — Instruction Proposal**: MIPROv2 uses an LLM (by default the same model as the student) to generate candidate instruction variants for each module's signature. The LLM is prompted with the module's current signature, a sample of bootstrapped demonstrations, and a task description, and asked to generate alternative instruction wordings that might improve performance. Typically 5–15 candidate instructions are generated per module. This generates the discrete instruction search space that [[Bayesian Optimisation]] will search over.

  **Phase 3 — [[Bayesian Optimisation]] Search**: MIPROv2 treats the combination of (instruction variant, demonstration subset, demonstration ordering) for each module as a categorical hyper-parameter. The joint search space across all modules is the Cartesian product of these per-module spaces — exponentially large in theory, but efficiently navigated via [[Bayesian Optimisation]]. A surrogate model (by default, a random forest or Gaussian process over a one-hot encoded representation of the candidate space) is fitted to the observed (configuration → validation metric) pairs from the first few trials. An acquisition function (Expected Improvement or UCB) selects the next configuration to evaluate. After `num_trials` evaluations, the configuration with the highest observed validation metric is returned as the compiled program.

  **Phase 4 — Validation and Selection**: Each evaluated configuration is tested on a held-out validation split (by default 20% of `trainset` reserved automatically). The final compiled program is the configuration that achieved the highest validation metric, not the final iteration — ensuring that [[Hallucination]], overfitting to training examples, or prompt-specific quirks of the training distribution do not produce a worse-than-baseline compiled program.

  This four-phase process is significantly more sophisticated than greedy demonstration selection (BootstrapFewShot) or beam search over instructions (COPRO), and empirically achieves substantially better performance on complex multi-module pipelines where inter-module dependencies make independent tuning suboptimal.

  ## DSPy Signatures: Deep Dive into the Abstraction

  The DSPy Signature is the most distinctive and consequential innovation in the framework. Understanding it in depth reveals why it succeeds where previous approaches failed and what its limitations are.

  **The Signature as a Typed Contract**: A Signature in DSPy is syntactically a Python class inheriting from `dspy.Signature` (or equivalently, a `"input1: type, input2: type -> output1: type, output2: type"` string). The class-based form allows attaching descriptions to each field:

      class GenerateTweetThread(dspy.Signature):
          """You are an expert science communicator. Write an engaging Twitter thread."""
          topic: str = dspy.InputField(desc="The scientific topic to explain")
          audience: str = dspy.InputField(desc="Target audience expertise level")
          num_tweets: int = dspy.InputField(desc="Number of tweets in the thread")
          thread: list[str] = dspy.OutputField(desc="List of tweet texts, each under 280 chars")
          hashtags: list[str] = dspy.OutputField(desc="Relevant hashtags for the thread")

  This Signature declares *what* the module should produce without specifying *how*. The `desc` attributes provide semantic context that the optimiser can use when generating instruction variants. The docstring provides a task-level instruction that MIPROv2 treats as an optimisable instruction parameter.

  **Typed Output Fields and Pydantic Integration**: DSPy 3.0's integration with Pydantic enables complex typed output fields:

      class ExtractMedicalEntities(dspy.Signature):
          """Extract structured medical entities from clinical text."""
          clinical_text: str = dspy.InputField()
          entities: list[MedicalEntity] = dspy.OutputField()
          # where MedicalEntity is a Pydantic BaseModel

  The LM is instructed to produce JSON matching the Pydantic schema; DSPy handles JSON parsing and validation with automatic retry on schema violation. This enables reliable [[Structured Output]] extraction from clinical text without bespoke parsing code, and the Pydantic schema serves as the formal specification against which the optimiser tunes the instruction.

  **Signature Composition**: Signatures can be combined through module wiring in the `forward()` method. The key property is that the output fields of one module become the input fields of the next, and the optimiser can tune each module's instruction independently while measuring the end-to-end metric. This compositional property enables complex multi-stage [[LLM Orchestration]] pipelines to be declared and optimised systematically, avoiding the "prompt engineering spaghetti" that accumulates in manually wired LLM systems where each stage's prompt was tuned independently without measuring downstream impact.

  **Signature vs. Tool vs. Function**: A common confusion is between DSPy Signatures, LLM [[Tool Use]] function definitions (OpenAI function calling, Anthropic tool_use), and traditional Python functions. Tool definitions specify what external tools the model can call; Signatures specify the input-output contract of the model call itself. A DSPy [[ReAct]] module uses both — the Signature specifies the module's contract (thought, action, action_input, observation), and Tool objects wrap the external functions that actions invoke. This layered architecture enables systematic optimisation of the reasoning strategy (through the Signature) independently of the tool implementations.

  ## Evaluation and Benchmarks

  DSPy's metric-driven compilation framework makes systematic benchmarking a natural activity. Key benchmarks from the original DSPy paper and follow-on work:

  **HotPotQA (multi-hop QA)**: DSPy multi-hop RAG + MIPROv2 achieved 52.4% on the fullwiki setting with Llama 2 13B, vs 36.1% for standard few-shot prompting — a 45% relative improvement. With GPT-3.5, DSPy reached 65.5% vs 51.2% baseline.

  **GSM8K (mathematical reasoning)**: DSPy ChainOfThought + BootstrapFewShot achieved 88.3% with GPT-3.5 vs 78.1% for standard few-shot, demonstrating metric-driven optimisation benefits on formal [[Reasoning]] tasks.

  **MedQA (medical question answering)**: AutoMedPrompt (2025) applied DSPy + TextGrad to medical QA, achieving state-of-the-art on the USMLE-format benchmark, with DSPy's bootstrapped demonstrations providing complementary gains to TextGrad's instruction optimisation.

  **Diverse multi-stage pipelines (MIPROv2 paper)**: MIPROv2 outperformed baseline optimisers on 5 of 7 diverse tasks using Llama 3 8B, with gains up to 13% accuracy, demonstrating the [[Bayesian Optimisation]] search advantage over greedy demonstration selection.

  These benchmarks validate the core DSPy claim: systematic metric-driven optimisation consistently outperforms manual [[Prompt Engineering]] and basic few-shot baselines, with gains that scale with optimisation budget (number of trials).

  ## Key Terminology
  **Signature**: A typed declaration of the input and output fields of a DSPy module, replacing the hand-written prompt template as the unit of specification. Signatures define the contract without specifying implementation, enabling the optimiser to search over prompt formulations that satisfy the contract.

  **Teleprompter / Optimiser**: The DSPy term for an optimisation algorithm that takes a program, training data, and metric and returns an optimised program with concrete prompt text and few-shot demonstrations baked in. Named "teleprompter" because it "tells" the modules what to say without hand-authoring the dialogue.

  **MIPROv2 (Multi-prompt Instruction PRoposal Optimizer v2)**: DSPy's primary optimiser, jointly searching over instruction formulations and demonstration sets using [[Bayesian Optimisation]] with a surrogate model. Recommended default for complex multi-module pipelines.

  **BootstrapFewShot**: The simplest DSPy optimiser — runs the program on training examples with a teacher model to generate candidate demonstrations, then greedily selects those that maximise the metric. Baseline for comparison; effective for simple pipelines.

  **BetterTogether**: A DSPy optimiser that alternates between prompt optimisation and model weight fine-tuning via [[Training and Fine Tuning]], enabling joint optimisation of both prompt parameters and model weights for maximum performance on a target task.

  **COPRO (Coordinate Ascent Prompt Optimiser)**: Uses beam search over LLM-generated instruction variants to optimise the instruction component of a Signature independently of demonstrations.

  **Compilation**: The DSPy process of running an optimiser to convert a declarative program with abstract Signatures into a concrete, runnable program with specific prompt strings, few-shot examples, and [[Instruction Following]] configurations for a target [[Foundation Model]].

- ### Provenance
  - sources:: https://arxiv.org/abs/2310.03714, https://openreview.net/forum?id=sY5N0zY5Od, https://dspy.ai/, https://github.com/stanfordnlp/dspy, https://dspy.ai/roadmap/, https://arxiv.org/pdf/2506.08234, https://openreview.net/pdf?id=eC4ygDs02R, https://www.databricks.com/dataaisummit/session/dspy-30-and-dspy-databricks, https://dspy.ai/api/optimizers/MIPROv2/, https://weaviate.io/blog/dspy-optimizers
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
