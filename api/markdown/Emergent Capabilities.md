public:: true

# Emergent Capabilities
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:emergent-capabilities",
  "@type": "Page",
  "vc:slug": "emergent-capabilities",
  "title": "Emergent Capabilities",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:emergent-capabilities",
  "@type": "Class",
  "label": "Emergent Capabilities",
  "definition": "Emergent Capabilities are abilities that appear in large language models at scale but are absent or near-random in smaller models, seemingly arising abruptly as parameters, data, or compute increase. Examples include multi-step reasoning, in-context learning, and instruction following. Their unpredictability complicates capability forecasting and is central to debates about scaling and AI safety.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:frontier-models",
        "label": "Frontier Models"
      },
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:capability-evaluation",
        "label": "Capability Evaluation"
      },
      {
        "@id": "urn:ngm:class:phase-transition",
        "label": "Phase Transition"
      },
      {
        "@id": "urn:ngm:class:grokking",
        "label": "Grokking"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:large-scale-pretraining",
        "label": "Large-Scale Pretraining"
      },
      {
        "@id": "urn:ngm:class:compute-resources",
        "label": "Compute Resources"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:chain-of-thought-reasoning",
        "label": "Chain-of-Thought Reasoning"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:instruction-following",
        "label": "Instruction Following"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-scale",
        "label": "Model Scale"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:narrow-ai",
        "label": "Narrow AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:capability-forecasting",
        "label": "Capability Forecasting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "Artificial General Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:emergent-abilities",
      "label": "Emergent Abilities"
    },
    {
      "@id": "urn:ngm:class:unexpected-capabilities",
      "label": "Unexpected Capabilities"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Emergent Capabilities are qualitative abilities that appear in [[Large Language Models]] and other large-scale neural systems at or above specific scale thresholds — measured in parameters, training compute (FLOPs), or training tokens — while being effectively absent or near-random in smaller models trained under otherwise identical conditions. The term was formally introduced and systematically catalogued by Wei et al. (2022), who identified over 100 tasks in the BIG-Bench evaluation suite exhibiting this sharp transition pattern, including multi-digit arithmetic, multi-step logical reasoning, [[Chain-of-Thought Reasoning]], [[In-Context Learning]], [[Instruction Following]], language translation, code synthesis, and analogical reasoning. The defining characteristic of emergent capability is an abrupt, non-linear transition from near-random performance to substantially above-random performance as model scale crosses a critical threshold — a pattern resembling [[Phase Transition]] in physical systems rather than the smooth, predictable improvement typical of established [[Scaling Laws]] benchmarks. This abruptness distinguishes emergent capabilities from generic model improvement: performance on established metrics such as language modelling perplexity improves smoothly and predictably with scale, while performance on emergent tasks remains flat until a threshold and then jumps sharply. The phenomenon sits at the intersection of [[Machine Learning]], [[Scaling Laws]], [[AI Safety]], and [[Emergent Behavior]] from [[Complex Adaptive Systems]], and is deeply connected to the related phenomena of [[Grokking]] (delayed generalisation in overparameterised neural networks), [[Phase Transition]] in statistical mechanics, and the concept of adjacent possible in developmental biology. The abruptness of emergence creates a significant challenge for [[Capability Forecasting]]: if a capability does not exist at one scale and appears sharply at a larger scale, standard extrapolation-based forecasting cannot predict when the capability will appear or how powerful it will be when it does. This unpredictability is central to [[AI Safety]] debates — dangerous capabilities, including sophisticated deception, autonomous self-replication planning, and advanced cyberattack assistance, may emerge as by-products of general capability improvements past scale thresholds that have not yet been reached, raising the question of how to evaluate and constrain capabilities that do not yet exist but may appear soon. [[Frontier Models]] including GPT-4, Claude 3.5+, Gemini Ultra, and their successors have exhibited empirical emergent capabilities in settings ranging from competition mathematics to code synthesis to professional examination performance, though whether specific capability jumps reflect genuine model phase transitions or discrete metric artefacts remains an active research question following Schaeffer et al.'s (2023) "mirage" challenge.

- ### Semantic Classification
  - owl-class:: ai:EmergentCapabilities
  - owl-role:: Phenomenon | ScalingProperty | SafetyRelevantCapability
  - owl-inferred:: ai:PhaseTransitionCapability, ai:ScaleInducedAbility, ai:UnforeseenCapability
  - belongs-to-domain:: [[Large Language Models]], [[AI Safety]]
  - implemented-in-layer:: [[Frontier Models]], [[Large-Scale Pretraining]]

- ### Relationships
  - is-subclass-of:: [[Large Language Models]], [[Emergent Behavior]], [[Scaling Laws]]
  - has-part:: [[Chain-of-Thought Reasoning]], [[In-Context Learning]], [[Instruction Following]], [[Tool Use]], [[Phase Transition]], [[Grokking]]
  - requires:: [[Large-Scale Pretraining]], [[Compute Resources]], [[Training Data]], [[Transformer Architecture]], [[Model Scale]]
  - enables:: [[Chain-of-Thought Reasoning]], [[In-Context Learning]], [[Instruction Following]], [[Tool Use]], [[Capability Forecasting]], [[AI Safety]], [[Artificial General Intelligence]]
  - implements:: [[Phase Transition]], [[Scaling Laws]], [[Emergent Behavior]]
  - depends-on:: [[Model Scale]], [[Transformer Architecture]], [[Large-Scale Pretraining]], [[Compute Resources]], [[Training Data]]
  - supports:: [[AI Safety]], [[Capability Forecasting]], [[Frontier Models]], [[Agent-Based Modelling]]
  - uses:: [[Scaling Laws]], [[Benchmark Evaluation]], [[Chain-of-Thought Prompting]], [[BIG-Bench]]
  - contrasts-with:: [[Narrow AI]], [[Smooth Scaling]], [[Explicit Programming]], [[Scripted Behavior]]
  - related-to:: [[Emergent Behavior]], [[Grokking]], [[Phase Transition]], [[Scaling Laws]], [[Model Training]], [[Frontier Models]], [[Capability Evaluation]], [[AI Safety]], [[Artificial General Intelligence]], [[Multi-Agent System]], [[Reinforcement Learning from Human Feedback]], [[Instruction Tuning]]
  - bridges-to:: [[Artificial General Intelligence]], [[Robotics]], [[Autonomous AI Agents]]
  - standardized-by:: [[BIG-Bench]], [[HELM]], [[MMLU]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:ChainOfThoughtReasoning))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:InContextLearning))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:InstructionFollowing))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:ToolUse))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:PhaseTransition))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:hasPart ai:Grokking))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:requires ai:LargeScalePretraining))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:requires ai:ComputeResources))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:requires ai:TrainingData))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:dependsOn ai:ModelScale))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:dependsOn ai:TransformerArchitecture))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:dependsOn ai:ScalingLaws))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:ChainOfThoughtReasoning))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:InContextLearning))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:InstructionFollowing))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:ToolUse))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:CapabilityForecasting))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:ArtificialGeneralIntelligence))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:enables ai:AISafety))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:implements ai:PhaseTransition))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:implements ai:ScalingLaws))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:implements ai:EmergentBehavior))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:uses ai:BIGBench))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:uses ai:ChainOfThoughtPrompting))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:uses ai:BenchmarkEvaluation))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:reducesTo ai:PhaseTransition))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:reducesTo ai:Grokking))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:reducesTo ai:ScalingLaws))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:reducesTo ai:EmergentBehavior))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:reducesTo ai:CircuitFormation))
    ```
  - ## Support and Contrast Axioms
    ```
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:supports ai:AISafety))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:supports ai:CapabilityForecasting))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:supports ai:FrontierModels))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:supports ai:AgentBasedModelling))
    SubClassOf(ai:EmergentCapabilities
      ObjectObjectComplementOf(ai:NarrowAI))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:bridgesTo ai:ArtificialGeneralIntelligence))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:bridgesTo ai:Robotics))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:relatedTo ai:Grokking))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:relatedTo ai:MechanisticInterpretability))
    SubClassOf(ai:EmergentCapabilities
      ObjectSomeValuesFrom(ai:relatedTo ai:DangerousCapability))
    ```

  - ## About
    Emergent capabilities in [[Large Language Models]] represent one of the most scientifically interesting and practically consequential phenomena in contemporary AI research: the abrupt appearance of qualitative competencies in large-scale neural systems that are entirely absent from smaller variants of the same architecture trained on the same data. The seminal paper establishing the concept as a formal research topic was Wei et al. (2022), "Emergent Abilities of Large Language Models," published in the Transactions on Machine Learning Research journal. Wei et al. surveyed performance on over 100 tasks from the BIG-Bench benchmark suite across model families ranging from approximately 10 million to 540 billion parameters, systematically identifying tasks where performance plotted against log-scale model size shows an "elbow" — a transition from random to substantially above-random performance at a specific scale threshold, without any gradual intermediate improvement. Examples confirmed in the paper included: three-digit addition emerging at approximately 10^22 FLOPs of training compute; multi-step symbolic reasoning (word problems involving sequence of arithmetic operations) emerging at similar scale; English-to-French translation emerging in Chinchilla-class models; and [[Chain-of-Thought Reasoning]] emerging specifically at approximately 10^23 FLOPs when models are prompted with step-by-step reasoning examples. The paper's central claim — that performance on these tasks cannot be predicted by standard smooth scaling extrapolation — implied that standard capability forecasting methods would fail to anticipate when these capabilities would appear, creating a fundamental uncertainty about the capabilities of models trained at scales not yet reached.

    The theoretical framing for emergent capabilities draws from multiple disciplines. In statistical physics, [[Phase Transition]] denotes the phenomenon where a system abruptly changes its macroscopic state (solid to liquid, paramagnetic to ferromagnetic) as a control parameter (temperature, field strength) crosses a critical value — the change is abrupt because all individual components simultaneously shift behaviour through a collective mechanism. The analogy to LLM capability emergence is appealing: as model size (the control parameter) crosses a threshold, the collective representational capacity of the network's parameters simultaneously becomes sufficient to solve a class of problems that requires all the pieces to be in place, producing an abrupt all-or-nothing transition rather than gradual improvement. The theory of the adjacent possible (Kauffman, 2000) provides a complementary framing: new capabilities become accessible only once prerequisite capabilities exist, like new chemical reactions becoming possible only once specific molecular species have been synthesised. A 2025 arXiv paper (arXiv:2501.01638) formalised this as a non-ergodic framework, proposing that LLMs are non-ergodic dynamical systems in which architectural, training, and contextual constraints interact to shape capability phases through transitions in semantic space. [[Grokking]] — the phenomenon observed in smaller networks where a model that has severely overfit training data suddenly and significantly improves generalisation accuracy after additional training, as if abruptly "discovering" the underlying rule — is mechanistically related: both grokking and emergent capabilities represent delayed qualitative generalisation transitions that cannot be predicted from the training loss curve. A 2024 arXiv paper (arXiv:2402.15175, "Unified View of Grokking, Double Descent and Emergent Abilities") proposed that all three phenomena — grokking, the double descent generalisation curve, and emergent LLM capabilities — can be understood within a circuits competition framework, where more efficient internal computational circuits that generalise better gradually displace less efficient memorising circuits, producing abrupt transitions in measured capability that reflect the completion of this internal reorganisation.

    A significant scientific controversy emerged in 2023 when Schaeffer, Miranda, and Koyejo published "Are Emergent Abilities of Large Language Models a Mirage?" (NeurIPS 2023), challenging the interpretation of capability emergence as a fundamental model property. Schaeffer et al. argued that the apparent abruptness of capability emergence is in large part an artefact of the discrete, non-linear metrics used to measure performance on benchmark tasks. On a task like multi-digit arithmetic, the standard metric is exact match accuracy — a binary signal that is zero unless every digit of the answer is correct. On such a metric, a model that is getting progressively closer to the correct answer (producing fewer errors, getting more digits right) will score zero until it achieves perfect accuracy, at which point accuracy jumps from zero to one. When continuous metrics such as Token Edit Distance (how many character changes are needed to convert the model's answer to the correct answer) or Brier Score (the mean squared probability calibration error) are substituted, performance on the same task scales smoothly and predictably with model size, without any abrupt transition. Schaeffer et al. synthesised this observation into the "mirage hypothesis": emergent capability phase transitions observed in the LLM literature are not fundamental properties of model scaling but are artefacts of measuring performance with discontinuous metrics against tasks that require all-or-nothing correctness, and would not be observed if continuous, graded metrics were used instead.

    The debate between the genuine emergence hypothesis and the mirage hypothesis remains scientifically unresolved as of 2026. Key evidence for genuine emergence includes: the clustering of emergence thresholds across diverse tasks at similar compute levels in the same model family, suggesting a shared underlying mechanism; the qualitative novelty of capabilities like [[Chain-of-Thought Reasoning]] that seems to require a genuine new mode of computation rather than incremental improvement of a prior capability; and the analogy with physical phase transitions where true discontinuities in measurable quantities are observed at critical points. Key evidence for the mirage hypothesis includes: Schaeffer et al.'s demonstration that continuous metrics produce smooth scaling in several cases; the documented sensitivity of emergence timing to benchmark construction choices and metric granularity; and the fact that improved models, better prompting techniques, and better fine-tuning can sometimes "unlock" capabilities that appeared absent in earlier evaluation but may have existed in latent form. The practical resolution for AI safety evaluation is to use both discrete and continuous metrics, and to treat sudden capability appearance as a safety-relevant signal requiring investigation regardless of its ultimate theoretical explanation — which is the approach adopted by the UK AI Security Institute (AISI), Anthropic, OpenAI, and Google DeepMind in their frontier model evaluation frameworks as of 2025-2026.

  - ## Components / Architecture
    - **Model Scale and Compute**: Emergent capabilities are fundamentally a scale phenomenon — the canonical independent variable in capability emergence research is model size in parameters, training compute in FLOPs (floating-point operations), or training tokens. The Chinchilla scaling laws (Hoffmann et al., 2022) established that optimal model training allocates compute proportionally between model size and training tokens; emergent capability thresholds are most naturally measured on the training compute axis, where both model size and data volume are jointly accounted. Wei et al. (2022) identified emergence thresholds in the range of 10^21–10^23 total training FLOPs for various capability classes. Post-Chinchilla frontier models including GPT-4 (estimated 10^25 FLOPs), Claude 3+ series (similar scale), and Gemini Ultra operate well above these early emergence thresholds, suggesting that the capabilities observed in these models arose through multiple stacked emergence events. The LLaMA model family (Meta AI, 2023-2025) enabled open-source evaluation of emergence thresholds at smaller scales (7B–70B parameter range), confirming that many capabilities observed in larger closed-source models emerge at lower parameter counts when sufficient training data is provided.
    - **Transformer Architecture**: All frontier LLMs exhibiting documented emergent capabilities use the [[Transformer Architecture]] introduced by Vaswani et al. (2017), characterised by multi-head self-attention mechanisms that allow every input token position to attend to every other position, feedforward sublayers applied identically to each position, residual connections enabling gradient flow through deep networks, and layer normalisation for training stability. The transformer's attention mechanism is hypothesised to be critical to emergent capability because it allows the model to form arbitrary cross-token relational structures, implementing implicit in-weights algorithms that can perform computation on the input sequence. Mechanistic interpretability research (Nanda et al., 2023; Elhage et al., 2022) has identified specific attention head patterns — "induction heads" that copy patterns from earlier context — as mechanistic implementations of [[In-Context Learning]], and has shown that these circuits develop suddenly during training, providing a mechanistic substrate for the training-time analogue of emergent capability.
    - **Large-Scale Pretraining**: Emergent capabilities are a property of [[Large-Scale Pretraining]] on massive, diverse text corpora — the regime where models are trained on hundreds of billions to trillions of tokens from web text, books, code, scientific papers, and multilingual sources. The hypothesis is that emergent capabilities arise when the pretraining corpus contains sufficient examples of the relevant reasoning patterns that the model can implicitly learn the underlying computation — but that this implicit learning requires the representational capacity of a sufficiently large model to manifest in the model's weights. Tasks requiring multi-step arithmetic, logical chaining, or compositional reasoning emerge when the model has enough parameters to implement the internal circuits performing these computations reliably on novel inputs, whereas smaller models can only approximate these circuits for memorised examples. Instruction fine-tuning ([[Instruction Following]], [[Reinforcement Learning from Human Feedback]]) applied after pretraining can bring emergent pretraining capabilities to the surface for reliable elicitation, but the capabilities themselves originate in the pretraining computation rather than in fine-tuning.
    - **Chain-of-Thought Reasoning**: [[Chain-of-Thought Reasoning]] is among the most impactful emergent capabilities, involving the ability to produce explicit intermediate reasoning steps in natural language that guide the model from a question to a correct answer, rather than requiring the model to produce the answer directly. Wei et al. (2022) showed that providing a small number of few-shot examples demonstrating step-by-step reasoning (chain-of-thought prompting) unlocks correct multi-step reasoning on tasks that the same model fails without this prompting technique — but only above a scale threshold (approximately 100B parameters in the 2022 evaluation). Below this threshold, chain-of-thought prompting produces irrelevant or incorrect intermediate steps that do not improve and may worsen performance. This emergent dependency on scale for CoT effectiveness is one of the most robust empirical findings in the emergence literature. Subsequent work including "Let's think step by step" zero-shot CoT (Kojima et al., 2022) showed that even unprompted CoT reasoning using the phrase "Let's think step by step" is effective in large models, demonstrating that the underlying reasoning capability is indeed present in the weights of large models and can be elicited through various prompting strategies. Tree-of-Thoughts (Yao et al., 2023) and similar multi-path reasoning techniques build on emergent CoT capability by enabling models to explore and evaluate multiple reasoning branches, substantially improving performance on planning and combinatorial tasks.
    - **In-Context Learning**: [[In-Context Learning]] is the emergent ability of large language models to perform new tasks by conditioning on a few input-output examples provided in the model's context window, without any gradient-based weight update. The model "learns" from the examples at inference time through its attention mechanism, implementing a form of meta-learning that was not explicitly trained. Brown et al. (2020) first documented ICL in GPT-3, showing that performance on many NLP benchmarks improves dramatically as the number of in-context examples increases, with near-zero-shot capabilities only present above approximately 10B parameters. Mechanistic interpretability studies (Olsson et al., 2022) identified "induction heads" — pairs of attention heads that implement a copy-prefix mechanism recognising and extending patterns from earlier context — as the neural circuit substrate of ICL, and showed these circuits form suddenly during training in a way consistent with emergence. The capability enables LLMs to perform domain adaptation, few-shot task learning, and instruction following without fine-tuning, which is critical to the practical utility of frontier models across diverse downstream applications.
    - **Instruction Following and Alignment**: The emergent capability to understand and execute natural language instructions — producing desired outputs from task descriptions without task-specific training — is a prerequisite for all deployed LLM applications. At smaller scales, instruction-following fine-tuning (FLAN, T5-FLAN, InstructGPT) produces models that follow some instruction formats but generalise poorly to unseen task descriptions. Above approximately 100B parameters, instruction fine-tuned models demonstrate much more robust generalisation to novel instructions, task formulations, and multi-step compositional instructions. This scale-dependent generalisation of instruction following is part of why frontier models are qualitatively more capable for open-ended applications than smaller fine-tuned models, even when the smaller models show comparable performance on held-out evaluation sets for the specific tasks on which they were trained. [[Reinforcement Learning from Human Feedback]] (RLHF) applied to instruction-following large models further aligns the emergent instruction-following capability with human preferences, but relies on the underlying capability having emerged during pretraining.
    - **Dangerous Capability Emergence**: A safety-critical application of emergent capabilities research concerns the potential emergence of dangerous capabilities — including sophisticated deception, autonomous self-replication planning, advanced cyberattack assistance, and bioweapon synthesis guidance — as by-products of general capability improvements in frontier models. The UK AI Security Institute's systematic dangerous capability evaluations (beginning November 2023) explicitly target capability emergence: in the cyber domain, frontier models can now complete apprentice-level cyber tasks 50% of the time on average, compared to just over 10% in early 2024, representing empirically documented emergent capability growth in a safety-critical domain within a single year of evaluation. Anthropic's Constitutional AI and capability evaluations across Claude model generations, Google DeepMind's AGI Safety Research, and OpenAI's alignment science evaluations all include systematic probing for dangerous emergent capabilities in pre-deployment evaluation, seeking to identify capability jumps before models are released.

  - ## Use Cases / Major Families
    - **Competition Mathematics and Formal Reasoning**: Frontier LLM emergent capabilities have transformed performance on competition-level mathematics benchmarks that previously required specialised symbolic mathematics systems or human mathematical expertise. OpenAI's o1 model (2024) achieved 83.3% accuracy on AIME 2024 (American Invitational Mathematics Examination), a competition targeting the top 5% of American high school mathematics students, compared to GPT-4o's 13.4% — a factor of 6 improvement representing a qualitative capability step. Similarly, o1 achieved 89.0% accuracy on Codeforces competitive programming problems compared to GPT-4o's 11.0%. These capability jumps represent emergent mathematical reasoning arising from scale-up of the o1 reasoning approach combined with extended test-time compute allocation. By 2025-2026, frontier LLMs achieve performance at or above human expert level on IMO-level mathematical problems in some evaluations, a capability that was not predicted by linear extrapolation of prior performance curves.
    - **Code Generation and Software Engineering**: Emergent code synthesis capabilities allow frontier LLMs to generate functional software programs from natural language specifications, explain existing codebases, debug errors from error messages, and complete partially written functions. These capabilities emerged sharply past the 10B-100B parameter range in the 2020-2022 period, as demonstrated in the Codex (Chen et al., 2021) evaluation showing that GitHub Copilot-class code completion capability emerged at approximately 12B parameters. By 2025, frontier LLMs are routinely deployed for production code generation in [[AI Agent System]] and autonomous software engineering applications, with SWE-bench (a benchmark testing the ability to resolve real GitHub issues) showing frontier models resolving 40-50% of benchmark issues as of mid-2025, compared to near-zero performance from smaller models.
    - **Multimodal Emergent Capabilities**: Beyond text, emergent capabilities have been documented in multimodal models trained on image-text pairs, audio-text pairs, and video-text sequences. GPT-4V, Gemini Ultra, and Claude's vision capabilities exhibit emergent abilities including chart and diagram understanding, handwriting recognition, medical image interpretation, and scientific figure comprehension that are absent in smaller vision-language models. These multimodal emergent capabilities have safety implications: a model that cannot interpret medical images below a threshold but develops diagnostic capability above it — without explicit medical training — represents both a potential healthcare application and a potential liability if deployed before medical evaluation.
    - **Language and Translation**: Cross-lingual emergent capabilities include translation between language pairs not well-represented in training data, code-switching (mixing languages within a sentence), and understanding of low-resource languages from minimal examples. These capabilities emerge at scale because the model learns cross-lingual representations that generalise across language families when trained on large multilingual corpora, enabling zero-shot translation to languages with minimal direct training examples once the model is large enough to learn the underlying cross-lingual semantic space.
    - **Tool Use and Agent Capabilities**: The emergent ability to understand and correctly use external tools — APIs, calculators, search engines, code interpreters — through natural language interface descriptions is a prerequisite for [[AI Agent System]] deployment. [[Tool Use]] emergence requires models to understand the semantics of tool descriptions, determine when a tool is needed versus when the model's own knowledge is sufficient, correctly format tool inputs, and integrate tool outputs into ongoing reasoning. This composite capability emerges at scale because each component (tool semantic understanding, conditional use decision, format compliance, output integration) requires independently emergent sub-capabilities that must all be present simultaneously for tool use to work reliably.
    - **In-Context Learning for Scientific Applications**: Emergent [[In-Context Learning]] has enabled LLMs to perform novel scientific tasks with minimal examples: protein property prediction from sequence, drug-target interaction prediction, materials property estimation, and hypothesis generation in scientific domains, without domain-specific fine-tuning. These applications rely on the model having learned sufficient scientific domain knowledge during pretraining that a few in-context examples are sufficient to condition the model's output distribution on the specific scientific task at hand.

  - ## Formal and Theoretical Framework
    The theoretical understanding of emergent capabilities in [[Large Language Models]] draws from three complementary frameworks that each illuminate different aspects of the phenomenon.

    The scaling laws framework, originating with Kaplan et al. (2020) at OpenAI and refined by Hoffmann et al. (2022) at DeepMind (the Chinchilla scaling laws), provides the quantitative relationship between model parameters N, training compute C (in FLOPs), dataset size D (in tokens), and model performance L (measured as cross-entropy loss on a held-out test set): L(N, D) = E + A/N^α + B/D^β, where E is the irreducible entropy of the data distribution and A, B, α, β are empirically fitted constants. This power-law relationship predicts smooth, predictable performance improvement as scale increases — and this prediction is validated for the cross-entropy training loss. The puzzle at the heart of emergent capabilities is that while training loss scales smoothly, performance on specific downstream tasks often does not: flat near-random performance followed by abrupt improvement. The resolution is that training loss is a continuous aggregate metric, while capability metrics are often discrete and threshold-dependent — a model that has improved its token prediction quality by 20% may produce a qualitatively correct arithmetic answer 0% of the time below a threshold and 40% of the time above it, not because the underlying computation changed discontinuously, but because the discrete metric requires a sufficient quality margin above zero.

    The circuit formation framework from mechanistic interpretability provides a more microscopic explanation. If a capability requires the simultaneous presence of multiple distinct attention head circuits that each form gradually during training, the overall capability can exhibit an apparent phase transition when the last required circuit reaches sufficient strength — even if each individual circuit develops gradually. This "conjunction of gradients" mechanism was proposed by Tay et al. (2022) and supported by Olsson et al.'s (2022) observation that induction head formation — which implements [[In-Context Learning]] — occurs as a sudden phase change in training rather than a gradual process, consistent with the circuit mechanism. Under this framework, emergent capabilities are not truly discontinuous in the model's computational structure but appear discontinuous in behavioural metrics because they require all required circuits to be jointly sufficient, which only happens at a specific training scale.

    The non-ergodic dynamical systems framework (Havlík et al., 2025, arXiv:2501.01638) proposes that LLMs are non-ergodic systems — systems where the time-average of a trajectory does not equal the ensemble average — in which capability development is path-dependent and history-dependent. Under this framework, which capabilities emerge at which scale depends not only on the model's parameter count and training data but on the specific sequence of training steps, the implicit curriculum imposed by gradient descent, and the structural constraints of the transformer architecture that determine which internal representations are statistically tractable to learn. This framework predicts that capability emergence thresholds should vary across model families trained on different data distributions and with different architectural choices, which is broadly consistent with empirical observations showing that different model families exhibit capability emergence at different scales even when measured by the same metric on the same task.

    The adjacent possible framework (Kauffman, 2000) provides a biological metaphor: new capabilities become available only once prerequisite capabilities exist, creating a cascade where each emergent capability opens the adjacent possible space of higher-level capabilities that can emerge from their combination. Under this metaphor, [[Chain-of-Thought Reasoning]] cannot emerge until a model has sufficient language understanding, arithmetic capability, and multi-step instruction following to assemble these into a coherent reasoning chain; [[Tool Use]] cannot emerge until a model can understand tool interface descriptions, determine when tools are needed, and format tool inputs correctly from natural language specifications. The empirical observation that higher-level emergent capabilities tend to appear at larger scales than the capabilities they depend on is consistent with this cascading emergence picture.

  - ## Benchmark Evaluation and Measurement Methodology
    Rigorous measurement of emergent capabilities requires both appropriate evaluation benchmarks and careful consideration of metric choices that may artefactually create or obscure emergence patterns. The BIG-Bench benchmark suite (Srivastava et al., 2022) with over 200 tasks in 132 languages was specifically designed to probe the capability boundary, but its tasks vary enormously in what metric is appropriate. The BIG-Bench Hard (Suzgun et al., 2022) subset of 23 tasks found to be hard for prior LLMs provides a more focused evaluation of reasoning-intensive emergent capabilities.

    The MMLU benchmark (Massive Multitask Language Understanding, Hendrycks et al., 2020) evaluates knowledge across 57 academic subjects from professional and academic examinations, providing a rigorous multiple-choice evaluation where near-chance performance (25%) can be distinguished from emergent above-chance performance across the full subject spectrum. MMLU became the primary demonstration of human-expert level performance emergence: GPT-4 achieves approximately 86-87% average MMLU accuracy compared to GPT-3.5's approximately 70%, and human expert performance is approximately 89% — with GPT-4's performance representing a qualitative capability jump relative to prior models.

    The HELM benchmark (Holistic Evaluation of Language Models, Liang et al., 2022) provides multi-metric evaluation across multiple scenarios, explicitly addressing the metric-dependence concern by evaluating each scenario using multiple metrics simultaneously and flagging cases where metric choice affects conclusions about capability ranking. The ARC-AGI benchmark (Chollet, 2019) evaluates abstract reasoning and pattern recognition on tasks specifically designed to require general fluid intelligence rather than knowledge retrieval, providing a demanding test of emergent reasoning capabilities that is deliberately difficult for LLMs to solve through memorisation. Frontier models' performance on ARC-AGI has exhibited dramatic emergent jumps: o3-class models achieved near-ceiling performance in late 2024, with performance going from effectively zero in earlier frontier models to near-complete task solution — a genuine capability jump that could not be attributed to metric artefacts.

    The SWE-bench benchmark (Jimenez et al., 2023) evaluates software engineering capability through real GitHub issue resolution tasks, providing a rigorous applied evaluation of emergent code synthesis and debugging capabilities. Performance on SWE-bench has shown clear emergent capability growth: from near-zero resolution rates for models evaluated in 2023 to 40-50% resolution rates for frontier models with scaffolding and tool use in 2025, a pattern consistent with emergent capability accumulation in code understanding and synthesis rather than smooth metric improvement.

  - ## Academic Context
    The academic study of emergent capabilities sits at the intersection of machine learning, statistical physics, cognitive science, and AI safety. The primary research venues are NeurIPS, ICML, ICLR, and the Transactions on Machine Learning Research journal, with safety-focused venues including the ICLR Safety Workshop, Anthropic's alignment publications, and the UK AISI's evaluation reports.

    The Wei et al. (2022) paper that established emergent capabilities as a formal research topic built on the BIG-Bench evaluation suite (Srivastava et al., 2022, "Beyond the Imitation Game Benchmark"), a community-collaborative project producing over 200 diverse evaluation tasks specifically designed to be challenging for current LLMs and to probe the boundary of model capabilities. BIG-Bench's explicit goal of building tasks that "current language models cannot solve" made it an ideal instrument for identifying emergence: tasks remain near-zero until the capability emerges, providing clear evidence of the transition. The dataset was accompanied by the "Imitation Game" notion that human-level performance on the full suite represents a meaningful milestone — frontier models surpassed average human performance on BIG-Bench Hard by approximately 2024, representing a cascade of emergent capability appearance across the benchmark that no individual team predicted in the benchmark's design phase.

    The mechanistic interpretability research programme — investigating the internal circuits and representations responsible for specific LLM capabilities — provides a bottom-up complement to the top-down emergence scaling curves. Anthropic's "Zoom In: An Introduction to Circuits" (Olah et al., 2020) initiated systematic circuit-level analysis of neural network internals; Elhage et al. (2022) ("A Mathematical Framework for Transformer Circuits") formalised the analysis of attention head behaviour in transformers; Nanda et al. (2023) demonstrated mechanistic characterisation of [[Grokking]] in modular arithmetic models, showing that grokking corresponds to the emergence of efficient generalising circuits that gradually displace memorising circuits — a training-time analogue of emergence where the model "suddenly discovers" the underlying rule after extended apparent overfitting. Conmy et al. (2023) introduced automated circuit discovery for identifying which attention heads and MLP neurons are causally responsible for specific model capabilities, enabling mechanistic analysis of larger models than hand-analysis permits. This mechanistic programme contributes to understanding emergence by identifying the specific internal computational structures that implement emergent capabilities — potentially allowing prediction of when capabilities will emerge based on when their circuit prerequisites form, and providing intervention points for selectively amplifying or suppressing specific emergent capabilities.

    The scaling laws programme — Kaplan et al. (2020), Hoffmann et al. (2022) Chinchilla, Muennighoff et al. (2024) extending to multilingual and code settings — has produced increasingly refined quantitative predictions of smooth capability metrics as a function of compute. The contrast between the predictable smooth scaling of training loss and the unpredictable emergence of downstream capability has motivated substantial theoretical work on the relationship between loss improvement and downstream capability improvement, including the concept of "capability unlocking" via instruction fine-tuning as an explanation for why the same pretraining model can exhibit qualitatively different downstream capabilities depending on alignment intervention.

    Key debates in the academic community as of 2025-2026 include: the genuine emergence vs. metric-artefact debate (Wei et al. vs. Schaeffer et al.); the degree to which emergent capabilities in LLMs represent genuine "understanding" vs. sophisticated statistical pattern matching (the Chinese Room problem applied to scale); the relationship between pretraining emergence and fine-tuning effectiveness (can instruction fine-tuning create capabilities that did not emerge in pretraining, or only unlock and align capabilities that already emerged?); the causal structure of emergence (whether capability emergence is driven by pretraining scale, architectural choices, training dynamics, or data composition, and what interventions can alter the emergence threshold); and the reliability of emergent capabilities (whether capabilities that emerge at a threshold are reliably present for all inputs in the relevant class, or are inconsistent and unreliable in ways that complicate deployment safety analysis).

  - ## Current Landscape (2026)
    By mid-2026, emergent capabilities research has diversified from the initial parameter-scale-focused framing to encompass compute-optimal training (Chinchilla laws), context length scaling, test-time compute scaling (o1-class reasoning models), and multimodal capabilities. The landscape has several defining features:

    **Frontier Model Capability Acceleration**: Between early 2024 and mid-2026, frontier model capabilities have continued to grow substantially, with o1-class reasoning models exhibiting emergent mathematical and logical reasoning capabilities substantially beyond what was achievable in 2022-2023. OpenAI's o3 model demonstrated performance at or near human expert level on the ARC-AGI benchmark (previously considered an unsolved test of general intelligence) in late 2024, representing an emergent capability jump not predicted by standard scaling extrapolations. Test-time compute scaling — allocating more inference compute to "thinking" through extended chain-of-thought reasoning chains before producing an answer — has emerged as an additional dimension of capability scaling orthogonal to model parameter count, producing emergent performance improvements from the same base model through compute allocation.

    **UK AI Security Institute Evaluation**: The UK AISI's systematic dangerous capability evaluations provide the most rigorous public evidence of emergent dangerous capability growth in frontier models. The AISI's 2025 Frontier AI Trends Report documented that frontier models can complete apprentice-level cyber tasks 50% of the time, compared to just over 10% in early 2024 — a factor-of-five capability increase in approximately 12 months. This rapid growth rate in dangerous capability domains makes emergency capability assessment a live operational concern rather than a theoretical future risk. The AISI has established collaborative evaluation arrangements with AI companies including Anthropic, Google DeepMind, Meta, and OpenAI, enabling pre-deployment capability assessment. At least 12 AI companies had published frontier AI safety frameworks covering capability thresholds and evaluation commitments by mid-2025.

    **Interpretation Advances**: Mechanistic interpretability research has produced increasingly detailed accounts of the internal computations implementing specific emergent capabilities, providing a more principled basis for capability prediction. Anthropic's "Scaling Monosemanticity" work (2024) applied dictionary learning to extract millions of interpretable "features" from frontier model activations, revealing human-interpretable concepts encoded at specific locations across model layers. This interpretability infrastructure supports the identification of circuits implementing emergent capabilities, potentially allowing prediction of when capability-critical circuits will form during training based on their computational prerequisites.

    **Open-Source Emergence**: The open-source release of LLaMA 2 and 3 (Meta AI, 2023-2025), Mistral model families, and Gemma models has democratised emergence research by enabling academic groups without frontier-scale compute to conduct systematic emergence studies at the 7B-70B scale. Community research has confirmed many emergence thresholds at lower parameter counts than originally found in the 2022 literature, consistent with the Chinchilla finding that early emergence studies used under-trained large models, and that more compute-optimal training (training smaller models for longer on more tokens) can shift emergence thresholds to smaller model sizes.

  - ## UK Context
    - **UK AI Security Institute (AISI)**: The UK established the world's first dedicated government AI safety institute in October 2023, at the AI Safety Summit at Bletchley Park. The AISI's primary mandate includes evaluation of dangerous emergent capabilities in frontier models, with testing conducted since November 2023. The Institute evaluates capabilities in cybersecurity assistance, biological and chemical weapon uplift, autonomous behaviour, and deception. Its 2025 Frontier AI Trends Report is the primary public source of empirical data on dangerous emergent capability growth in deployed frontier models, documenting the shift from 10% to 50% success rates on apprentice-level cyber tasks within a year. The UK's position as the first country with a dedicated national evaluation institution gives it a distinctive role in the international governance of emergent capability risks.
    - **University of Oxford — Future of Humanity Institute (FHI, closed 2024) and Centre for the Governance of AI**: FHI (now closed) was a foundational institution in articulating risks from emergent AI capabilities, including Bostrom's "intelligence explosion" arguments and the concept of capability overhang — large latent capabilities suddenly unlocking through alignment interventions or fine-tuning even without further scale increase. The Centre for the Governance of AI continues this work with a focus on international policy frameworks for frontier model evaluation. Oxford's Department of Computer Science contributes to emergent capabilities research through work on neural network theory and interpretability.
    - **University of Cambridge**: Cambridge's Leverhulme Centre for the Future of Intelligence (CFI) conducts interdisciplinary research on long-range AI capability development, including emergent capabilities and their policy implications. The Computer Laboratory contributes to mechanistic interpretability and theoretical understanding of transformer capabilities. Cambridge's strong tradition in mathematical statistics and information theory informs theoretical frameworks for understanding emergent capability transitions.
    - **University of Edinburgh**: Edinburgh's School of Informatics is one of the UK's largest AI research departments, with significant work on [[Large Language Models]], evaluation methodology, and natural language processing. The Artificial Intelligence and its Applications Institute (AIAI) contributes to [[AI Safety]] and evaluation research. Edinburgh's geography research community applies emergent behaviour concepts in spatial modelling and urban analytics contexts.
    - **Anthropic (London office)**: Anthropic, the AI safety company behind the Claude model family, maintains a significant UK presence and contributes extensively to emergent capabilities research and safety evaluation. Anthropic's Constitutional AI, model cards, responsible scaling policy (defining capability thresholds that trigger additional safety evaluation), and interpretability research programme are among the most substantive contributions to the science and governance of emergent capabilities from any organisation operating in the UK.
    - **Northern England and Industrial Context**: While emergent capabilities research is concentrated in London (Anthropic, DeepMind's UK presence, policy institutions) and the historic university cities, Northern England is relevant through Manchester's significant AI industry ecosystem (companies including Peak AI deploying LLM-based products), the Advanced Computing Facility at Edinburgh (EPCC), and the national AI Research Resource (AIRR) which provides frontier-scale compute access to UK academic researchers studying emergent capabilities and scaling.

  - ## Emergent Capabilities Catalogue
    Wei et al. (2022) documented over 100 emergent capabilities across the BIG-Bench evaluation suite. The following represent the most extensively validated and consequential instances, organised by capability family:

    **Arithmetic and Symbolic Reasoning**: Multi-digit arithmetic (addition, subtraction, multiplication of 3-5 digit numbers), modular arithmetic (solving equations modulo n), integer square root computation, and digit operations emerge sharply in the 10^22–10^23 FLOPs training compute range. These arithmetic capabilities are particularly interesting because they are both precisely measurable (exact match against the correct numerical answer) and mechanistically tractable: Nanda et al. (2023) traced the emergence of modular arithmetic to the formation of Fourier feature circuits in [[Transformer Architecture]] MLP layers, providing the first mechanistic account of an emergent capability in a language model. The arithmetic capability emergence represents genuinely useful economic and educational AI applications — a model that cannot reliably add three-digit numbers is not useful for financial or quantitative applications, while one that can reliably do so enables a qualitatively wider range of practical deployments.

    **Chain-of-Thought and Multi-Step Reasoning**: [[Chain-of-Thought Reasoning]] — the ability to produce correct answers to multi-step reasoning problems when prompted with intermediate reasoning steps — emerges specifically at scale and is not present in smaller models even when prompted identically. Wei et al. (2022) showed that CoT prompting improves performance on held-out reasoning tasks for models above approximately 10^23 FLOPs, while for smaller models the same prompting degrades performance relative to direct answering (smaller models produce incorrect intermediate steps that mislead the final answer). This asymmetry — where CoT prompting is helpful for large models and harmful for small models — is one of the strongest demonstrations of genuine capability emergence rather than metric artefact, because the same prompting technique produces qualitatively different behaviour depending on model scale.

    **In-Context Learning**: [[In-Context Learning]] — adapting to new tasks from a few demonstration examples in the context window, without gradient updates — was first documented at scale in GPT-3 (Brown et al., 2020) and subsequently shown to exhibit the emergent scaling pattern: very limited ICL from 0-3 examples below approximately 10B parameters, with rapidly improving few-shot performance above this threshold. The mechanistic substrate of ICL — induction heads implementing copy-prefix algorithms — has been identified by Olsson et al. (2022) and shown to form through a phase change in training dynamics, making ICL among the most thoroughly mechanistically characterised emergent capabilities.

    **Instruction Following**: The ability to understand and execute novel natural language task descriptions without task-specific examples — zero-shot instruction following — emerges at large scale and is dramatically amplified by instruction fine-tuning (FLAN, InstructGPT, RLHF) applied to large pretrained models. FLAN-T5 and InstructGPT demonstrated that instruction following fine-tuning on large pretrained models produces qualitatively better generalisation to novel instructions than the same fine-tuning on smaller models, consistent with the capability requiring emergent instruction understanding that is only present in the pretraining of large models.

    **Code Synthesis and Debugging**: The ability to generate correct, functional code from natural language problem descriptions emerged clearly at the 12B parameter scale in Codex (Chen et al., 2021), with pass@1 on HumanEval (a Python programming benchmark) going from near-zero for smaller models to approximately 28% for Codex-12B. Subsequent scaling has driven this to 90%+ on HumanEval for frontier models with tool use, representing a qualitative capability transition from "cannot write useful code" to "writes correct code for most standard programming tasks." This code synthesis capability is among the most economically consequential emergent capabilities, enabling AI coding assistants that are demonstrably productive for professional software engineers according to controlled studies (Peng et al., 2023 found 55% faster task completion in a randomised trial).

    **Scientific Knowledge and Expert Examination Performance**: Frontier models trained at large scale exhibit emergent expert-level performance on standardised professional examinations including the United States Medical Licensing Examination (USMLE), the bar examination (legal professional qualification), the Certified Public Accountant examination, and the GRE subject tests. GPT-4 passes the bar examination at approximately the 90th percentile of human test-takers, achieves passing scores on USMLE at medical student performance levels, and achieves high scores across a range of professional licensing examinations. These capabilities are emergent in the sense that smaller models score at or below random chance on multiple-choice professional exams, while frontier models score substantially above passing thresholds — the transition is abrupt relative to model scale and was not predicted by anyone who evaluated GPT-3 class models against these benchmarks.

    **Multilingual and Cross-Lingual Transfer**: Emergent zero-shot cross-lingual transfer — the ability to perform tasks in languages not well-represented in training data, when conditioned on task examples in a high-resource language — appears at large scale and enables LLM deployments in low-resource language communities without task-specific training data in those languages. This capability is particularly valuable for linguistic communities (including many indigenous language communities globally and many minority languages in Europe) where labelled NLP training data is scarce or non-existent.

  - ## Key Terminology
    - **Emergent capability / emergent ability**: A qualitative competency that appears in larger models but is absent or near-random in smaller models trained under otherwise identical conditions, typically exhibiting a sharp performance transition as model scale crosses a critical threshold.
    - **Phase transition**: A sharp qualitative change in system behaviour at a critical parameter value; in LLMs, the observed abrupt performance jump on discrete-metric tasks as model scale crosses a threshold.
    - **Grokking**: Delayed generalisation in overparameterised networks — a training-time analogue of emergent capability where a model that has severely overfit training data suddenly achieves high validation accuracy after additional training epochs, interpreted as the model "discovering" the underlying algorithmic rule.
    - **BIG-Bench**: Beyond the Imitation Game Benchmark — a 200+ task collaborative evaluation suite specifically designed to probe LLM capability boundaries and identify emergent abilities at scale.
    - **Capability overhang**: Latent capabilities present in model weights that are not elicited by standard prompting but can be unlocked through instruction fine-tuning, chain-of-thought prompting, or extended test-time compute — a source of unexpected capability jumps in deployed models.
    - **Mirage hypothesis**: Schaeffer et al.'s (2023) claim that apparent emergence is an artefact of discrete evaluation metrics and disappears when continuous metrics are substituted; a major contested hypothesis in the field.
    - **Adjacent possible**: Kauffman's (2000) concept that new capabilities become accessible only once prerequisite capabilities exist; applied to LLMs to explain why higher-level emergent capabilities cascade from lower-level prerequisite capabilities.
    - **Dangerous capability**: An emergent capability that poses safety or security risks — including cyberattack assistance, sophisticated deception, autonomous self-replication planning, or weapons uplift — that may appear as by-products of general capability scaling without being specifically targeted by model developers.
    - **Test-time compute scaling**: Allocating additional inference-time computation to extended chain-of-thought reasoning, producing emergent capability improvements from the same model weights orthogonal to parameter count — a second dimension of capability scaling identified through the o1 model family.
    - **Mechanistic interpretability**: A research programme investigating the specific neural circuit implementations of model capabilities through analysis of attention head patterns, MLP activations, and feature representations, aimed at predicting when capability-critical circuits will form during training.
    - **Circuit formation**: The mechanism proposed by Olsson et al. (2022) whereby emergent capabilities appear when all required attention head and MLP circuits reach sufficient strength simultaneously, producing an apparent phase transition from the conjunction of gradually-developing components.
    - **Induction head**: An attention head pattern that implements copy-prefix behaviour, recognising and completing patterns from earlier context; identified as the mechanistic substrate of [[In-Context Learning]] and exhibiting sudden phase-change formation during training.

  - ## Future Directions (2026-2030)
    - **Test-Time Compute Scaling and New Emergence Axes**: The discovery that test-time compute allocation — the amount of computation dedicated to inference-time "thinking" via extended chain-of-thought reasoning — produces emergent capability improvements orthogonal to model parameter count opens new research questions about the nature of emergence. If the same model weights can exhibit qualitatively different capabilities depending on how much compute is allocated to reasoning at inference time, then emergence is not solely a property of model scale but of the compute × parameters product, and emergence thresholds should be reframed in terms of total computation (training plus inference) rather than training compute alone. This also suggests that capability forecasting must model both pretraining compute budgets and inference compute budgets as independent variables that jointly determine capability trajectories.
    - **Interpretability-Informed Capability Prediction**: The mechanistic interpretability programme's goal of characterising the specific neural circuit implementations of emergent capabilities could potentially enable a priori prediction of when capabilities will emerge based on when their prerequisite circuits form during training. If circuits implementing [[In-Context Learning]] form at a specific training step (as suggested by Olsson et al., 2022's "phase change" observation in induction head formation), and if the formation of these circuits can be predicted from training loss curves or activation statistics, then emergent capability timing could be forecast without waiting for the full training run to complete. This would dramatically improve capability forecasting and pre-deployment safety evaluation.
    - **Multi-Modal and Embodied Emergence**: As multimodal frontier models mature, emergent capabilities spanning vision, audio, language, and action are expected to appear at higher training scales. Embodied AI research combining [[Large Language Models]] with physical robot systems is beginning to exhibit emergent physical reasoning and tool manipulation capabilities, extending emergence from the text domain to physical interaction. [[Robotics]] applications of emergent capabilities could produce qualitatively new robot competencies — assembly of novel structures from natural language descriptions, zero-shot tool use in new environments, emergent physical problem-solving — that represent phase transitions in robot capability analogous to those observed in language domains.
    - **Societal and Governance Implications**: As emergent capabilities continue to produce unexpected AI competencies in socially and economically significant domains — legal reasoning, medical diagnosis, financial analysis, scientific discovery — the governance challenge of evaluating and managing capabilities that did not exist at the time of regulatory framework design becomes acute. International coordination on pre-deployment capability evaluation thresholds (building on the Bletchley Declaration of November 2023 and subsequent AI governance initiatives) will be increasingly important for maintaining oversight of emergent dangerous capabilities in frontier models. The EU AI Act's risk classification framework, the UK's AISI's evaluation infrastructure, and the US government's executive order requirements for frontier model reporting are early governance responses to this challenge, but their adequacy against the pace of emergent capability growth is an open question as of 2026.
    - **Emergent Capabilities in Multi-Agent Systems**: As frontier LLMs are deployed as components in [[Multi-Agent System]] and agentic workflows, emergent capabilities arising from agent-level interaction — not present in any individual agent — are expected to become increasingly important. Multi-agent discussion approaches already demonstrate emergent collective reasoning performance exceeding individual agents; more sophisticated multi-agent architectures may exhibit emergent social, economic, and cooperative capabilities from agent populations. This domain-crossing — emergence occurring at the system level above the already-emergent individual agent level — creates a compound forecasting challenge requiring evaluation at both the individual agent and system levels.

  - ## Research & Literature
    - [1] Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., ... Fedus, W. (2022). Emergent abilities of large language models. *Transactions on Machine Learning Research*. arXiv:2206.07682.
    - [2] Schaeffer, R., Miranda, B. and Koyejo, S. (2023). Are emergent abilities of large language models a mirage? *NeurIPS 2023*. arXiv:2304.15004.
    - [3] Brown, T.B., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners (GPT-3). *NeurIPS 2020*. arXiv:2005.14165.
    - [4] Srivastava, A. et al. (2022). Beyond the imitation game: Quantifying and extrapolating the capabilities of language models (BIG-Bench). *Transactions on Machine Learning Research*. arXiv:2206.04615.
    - [5] Hoffmann, J. et al. (2022). Training compute-optimal large language models (Chinchilla). *NeurIPS 2022*. arXiv:2203.15556.
    - [6] Kojima, T., Gu, S.S., Reid, M., Matsuo, Y. and Iwasawa, Y. (2022). Large language models are zero-shot reasoners. *NeurIPS 2022*. arXiv:2205.11916.
    - [7] Olsson, C. et al. (2022). In-context learning and induction heads. *Transformer Circuits Thread*. arXiv:2209.11895.
    - [8] Nanda, N., Chan, L., Lieberum, T., Smith, J. and Steinhardt, J. (2023). Progress measures for grokking via mechanistic interpretability. *ICLR 2023*. arXiv:2301.05217.
    - [9] Elhage, N. et al. (2022). A mathematical framework for transformer circuits. *Transformer Circuits Thread*. arXiv:2212.09561.
    - [10] Power, A., Burda, Y., Edwards, H., Goodfellow, I. and Misra, V. (2022). Grokking: Generalisation beyond overfitting on small algorithmic datasets. *ICLR 2022 DL4C Workshop*. arXiv:2201.02177.
    - [11] Chen, M., Tworek, J., Jun, H., et al. (2021). Evaluating large language models trained on code (Codex). arXiv:2107.03374.
    - [12] Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *NeurIPS 2017*. arXiv:1706.03762.
    - [13] Ouyang, L. et al. (2022). Training language models to follow instructions with human feedback (InstructGPT). *NeurIPS 2022*. arXiv:2203.02155.
    - [14] Touvron, H. et al. (2023). LLaMA: Open and efficient foundation language models. arXiv:2302.13971.
    - [15] Wei, J., Wang, X., Schuurmans, D., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. *NeurIPS 2022*. arXiv:2201.11903.
    - [16] Yao, S., Yu, D., Zhao, J., et al. (2023). Tree of thoughts: Deliberate problem solving with large language models. *NeurIPS 2023*. arXiv:2305.10601.
    - [17] Anthropic. (2024). Scaling monosemanticity: Extracting interpretable features from Claude Sonnet using dictionary learning. *Anthropic Research Blog*. anthropic.com/research.
    - [18] UK AI Security Institute. (2025). Frontier AI Trends Report. aisi.gov.uk/frontier-ai-trends-report.
    - [19] Common Elements of Frontier AI Safety Policies (December 2025). METR. metr.org/common-elements.pdf.
    - [20] Unified View of Grokking, Double Descent and Emergent Abilities (2024). arXiv:2402.15175.
    - [21] A non-ergodic framework for understanding emergent capabilities in Large Language Models (2025). arXiv:2501.01638.
    - [22] Information-theoretic progress measures reveal grokking is an emergent phase transition (2024). arXiv:2408.08944.
    - [23] Evidence of phase transitions in small transformer-based language models (2024). arXiv:2511.12768.
    - [24] Kauffman, S.A. (2000). *Investigations*. Oxford University Press. (Adjacent possible framework.)
    - [25] Park, J.S. et al. (2023). Generative agents: Interactive simulacra of human behavior. *UIST 2023*. arXiv:2304.03442.
    - [26] Bommasani, R. et al. (2021). On the opportunities and risks of foundation models. arXiv:2108.07258.
    - [27] OpenAI. (2024). Learning to reason with LLMs (o1 System Card). openai.com/research/learning-to-reason-with-llms.
    - [28] MAEBE: Multi-Agent Emergent Behavior Framework (2025). arXiv:2506.03053.

- ### Provenance
  - sources:: Wei et al. (2022) arXiv:2206.07682; Schaeffer et al. (2023) arXiv:2304.15004; Brown et al. (2020) arXiv:2005.14165; Srivastava et al. (2022) arXiv:2206.04615 BIG-Bench; Hoffmann et al. (2022) Chinchilla arXiv:2203.15556; Olsson et al. (2022) Induction Heads arXiv:2209.11895; Nanda et al. (2023) Grokking arXiv:2301.05217; UK AISI (2025) Frontier AI Trends Report; arXiv:2501.01638 non-ergodic framework; arXiv:2402.15175 unified grokking/emergence; arXiv:2408.08944 information-theoretic grokking; METR (2025) common-elements.pdf; https://www.emergentmind.com/topics/emergent-abilities-of-large-language-models; https://medium.com/@kimminwoo190/large-language-models-exhibit-predictable-performance-improvements-as-they-scale-yet-they-also-2c7987990678; https://openreview.net/pdf?id=yzkSU5zdwD
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
