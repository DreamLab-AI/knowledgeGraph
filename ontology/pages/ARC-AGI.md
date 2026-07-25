public:: true

# ARC-AGI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:arc-agi",
  "@type": "Page",
  "vc:slug": "arc-agi",
  "title": "ARC-AGI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programme-synthesis",
      "vc:label": "Programme Synthesis"
    },
    {
      "@id": "urn:visionflow:linked:domain-specific-language",
      "vc:label": "Domain-Specific Language"
    },
    {
      "@id": "urn:visionflow:linked:fluid-intelligence",
      "vc:label": "Fluid Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:test-time-training",
      "vc:label": "Test-Time Training"
    },
    {
      "@id": "urn:visionflow:linked:test-time-compute",
      "vc:label": "Test-Time Compute"
    },
    {
      "@id": "urn:visionflow:linked:inductive-logic-programming",
      "vc:label": "Inductive Logic Programming"
    },
    {
      "@id": "urn:visionflow:linked:visual-reasoning",
      "vc:label": "Visual Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:few-shot-generalisation",
      "vc:label": "Few-Shot Generalisation"
    },
    {
      "@id": "urn:visionflow:linked:core-knowledge-priors",
      "vc:label": "Core Knowledge Priors"
    },
    {
      "@id": "urn:visionflow:linked:grid-based-tasks",
      "vc:label": "Grid-Based Tasks"
    },
    {
      "@id": "urn:visionflow:linked:agentic-intelligence",
      "vc:label": "Agentic Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:arc-prize",
      "vc:label": "ARC Prize"
    },
    {
      "@id": "urn:visionflow:linked:arc-agi-2",
      "vc:label": "ARC-AGI-2"
    },
    {
      "@id": "urn:visionflow:linked:arc-agi-3",
      "vc:label": "ARC-AGI-3"
    },
    {
      "@id": "urn:visionflow:linked:evaluation-leaderboard",
      "vc:label": "Evaluation Leaderboard"
    },
    {
      "@id": "urn:visionflow:owl:class:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:owl:class:pattern-recognition",
      "vc:label": "Pattern Recognition"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning-discipline",
      "vc:label": "Machine Learning Discipline"
    },
    {
      "@id": "urn:visionflow:owl:class:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-general-intelligence",
      "vc:label": "Artificial General Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:benchmark-standard",
      "vc:label": "Benchmark Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-safety-research",
      "vc:label": "AI Safety Research"
    },
    {
      "@id": "urn:visionflow:owl:class:benchmarks",
      "vc:label": "Benchmarks"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:neurosymbolic-ai",
      "vc:label": "Neurosymbolic AI"
    },
    {
      "@id": "urn:visionflow:owl:class:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:few-shot-learning",
      "vc:label": "Few-Shot Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:generalisation",
      "vc:label": "Generalisation"
    },
    {
      "@id": "urn:visionflow:owl:class:evaluation-metric",
      "vc:label": "Evaluation Metric"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-benchmark-epistemological-critique",
      "vc:label": "AI Benchmark Epistemological Critique"
    },
    {
      "@id": "urn:visionflow:owl:class:chain-of-thought-reasoning",
      "vc:label": "Chain-of-Thought Reasoning"
    },
    {
      "@id": "urn:visionflow:owl:class:automated-reasoning",
      "vc:label": "Automated Reasoning"
    },
    {
      "@id": "urn:visionflow:owl:class:benchmark-evaluation",
      "vc:label": "Benchmark Evaluation"
    },
    {
      "@id": "urn:visionflow:owl:class:benchmark-dataset",
      "vc:label": "Benchmark Dataset"
    }
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arc-agi",
  "@type": "Class",
  "label": "ARC-AGI",
  "definition": "ARC-AGI (Abstraction and Reasoning Corpus for Artificial General Intelligence) is a benchmark designed by François Chollet and published in 2019 to measure general fluid intelligence in AI systems through abstract visual pattern completion tasks that require novel rule induction rather than pattern recall from training data. Each task presents a small number of input-output grid transformation examples from which the solver must infer the underlying rule and apply it to a new input, using only core knowledge priors available to young children. The benchmark explicitly resists solution by memorisation, making it a proxy test for human-like generalisation ability.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:benchmarks", "label": "Benchmarks"},
    {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:pattern-recognition", "label": "Pattern Recognition"},
      {"@id": "urn:ngm:class:generalisation", "label": "Generalisation"},
      {"@id": "urn:ngm:class:benchmark-evaluation", "label": "Benchmark Evaluation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"},
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"},
      {"@id": "urn:ngm:class:benchmark-dataset", "label": "Benchmark Dataset"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-general-intelligence", "label": "Artificial General Intelligence"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:ai-benchmark-epistemological-critique", "label": "AI Benchmark Epistemological Critique"},
      {"@id": "urn:ngm:class:neurosymbolic-ai", "label": "Neurosymbolic AI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:few-shot-learning", "label": "Few-Shot Learning"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:arc-agi:9f3b77e2a1d4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:arc-agi"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programme Synthesis]]",
      "resolved": "urn:visionflow:linked:programme-synthesis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Domain-Specific Language]]",
      "resolved": "urn:visionflow:linked:domain-specific-language",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fluid Intelligence]]",
      "resolved": "urn:visionflow:linked:fluid-intelligence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Test-Time Training]]",
      "resolved": "urn:visionflow:linked:test-time-training",
      "kind": "StubLink"
    },
    {
      "raw": "[[Test-Time Compute]]",
      "resolved": "urn:visionflow:linked:test-time-compute",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inductive Logic Programming]]",
      "resolved": "urn:visionflow:linked:inductive-logic-programming",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Reasoning]]",
      "resolved": "urn:visionflow:linked:visual-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Few-Shot Generalisation]]",
      "resolved": "urn:visionflow:linked:few-shot-generalisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Core Knowledge Priors]]",
      "resolved": "urn:visionflow:linked:core-knowledge-priors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Grid-Based Tasks]]",
      "resolved": "urn:visionflow:linked:grid-based-tasks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agentic Intelligence]]",
      "resolved": "urn:visionflow:linked:agentic-intelligence",
      "kind": "StubLink"
    },
    {
      "raw": "[[ARC Prize]]",
      "resolved": "urn:visionflow:linked:arc-prize",
      "kind": "StubLink"
    },
    {
      "raw": "[[ARC-AGI-2]]",
      "resolved": "urn:visionflow:linked:arc-agi-2",
      "kind": "StubLink"
    },
    {
      "raw": "[[ARC-AGI-3]]",
      "resolved": "urn:visionflow:linked:arc-agi-3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Evaluation Leaderboard]]",
      "resolved": "urn:visionflow:linked:evaluation-leaderboard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reasoning]]",
      "resolved": "urn:visionflow:owl:class:reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pattern Recognition]]",
      "resolved": "urn:visionflow:owl:class:pattern-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:owl:class:machine-learning-discipline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cognitive Science]]",
      "resolved": "urn:visionflow:owl:class:cognitive-science",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial General Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-general-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Benchmark Standard]]",
      "resolved": "urn:visionflow:owl:class:benchmark-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety Research]]",
      "resolved": "urn:visionflow:owl:class:ai-safety-research",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Benchmarks]]",
      "resolved": "urn:visionflow:owl:class:benchmarks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neurosymbolic AI]]",
      "resolved": "urn:visionflow:owl:class:neurosymbolic-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:owl:class:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:owl:class:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:owl:class:transfer-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Few-Shot Learning]]",
      "resolved": "urn:visionflow:owl:class:few-shot-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generalisation]]",
      "resolved": "urn:visionflow:owl:class:generalisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Evaluation Metric]]",
      "resolved": "urn:visionflow:owl:class:evaluation-metric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Benchmark Epistemological Critique]]",
      "resolved": "urn:visionflow:owl:class:ai-benchmark-epistemological-critique",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Chain-of-Thought Reasoning]]",
      "resolved": "urn:visionflow:owl:class:chain-of-thought-reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Reasoning]]",
      "resolved": "urn:visionflow:owl:class:automated-reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Benchmark Evaluation]]",
      "resolved": "urn:visionflow:owl:class:benchmark-evaluation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Benchmark Dataset]]",
      "resolved": "urn:visionflow:owl:class:benchmark-dataset",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-20T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - [[ARC-AGI]] (Abstraction and Reasoning Corpus for Artificial General Intelligence) is a [[Benchmark Standard]] designed by François Chollet at Google Brain and published in November 2019 to measure [[Fluid Intelligence]] and [[Generalisation]] in AI systems, specifically targeting the ability to induce novel rules from minimal examples rather than exploiting statistical regularities in large training corpora. Each task in the corpus presents a small number (typically two to five) of coloured input-output grid pairs that collectively exemplify an abstract transformation rule; the solver must infer that rule and apply it correctly to one or more held-out input grids. Crucially, the benchmark is constructed under the constraint that solvers may only rely on [[Core Knowledge Priors]] — the innate, pre-learned knowledge structures that developmental psychologists attribute to young children, including object persistence, basic geometry, counting up to approximately ten, symmetry, and contact-based physics — rather than on acquired domain knowledge derived from large-scale training data. This design makes the ARC-AGI corpus highly resistant to solution by pure memorisation and positions it as a direct proxy for the human capacity for novel [[Visual Reasoning]] and abstract [[Pattern Recognition]]. The benchmark, associated [[ARC Prize]] competition, and the theoretical framework of Chollet's 2019 paper "On the Measure of Intelligence" have together become the principal reference point within the AI research community for debating [[Artificial General Intelligence]] capability measurement, driving work in [[Programme Synthesis]], [[Neurosymbolic AI]], [[Few-Shot Learning]], [[Machine Learning Discipline]], and [[Cognitive Science]]-grounded approaches to AI evaluation.

- ### Semantic Classification
  - owl-class:: ai:ARCBenchmark
  - owl-role:: BenchmarkingProtocol | EvaluationInstrument
  - owl-inferred:: ai:CapabilityMeasure, ai:IntelligenceBenchmark, ai:FewShotEvaluator
  - belongs-to-domain:: [[AI Safety Research]], [[Machine Learning Discipline]]
  - implemented-in-layer:: [[Benchmark Evaluation]]

- ### Relationships
  - is-subclass-of:: [[Benchmarks]], [[Benchmark Standard]], [[Benchmark Evaluation]]
  - has-part:: [[ARC-AGI-2]], [[ARC-AGI-3]], [[ARC Prize]], [[Grid-Based Tasks]], [[Core Knowledge Priors]], [[Evaluation Leaderboard]]
  - requires:: [[Few-Shot Learning]], [[Reasoning]], [[Visual Reasoning]], [[Few-Shot Generalisation]], [[Core Knowledge Priors]]
  - enables:: [[Reasoning]], [[Pattern Recognition]], [[Generalisation]], [[Benchmark Evaluation]], [[Automated Reasoning]], [[AI Safety Research]]
  - implements:: [[Benchmark Standard]], [[Benchmark Dataset]], [[Evaluation Metric]]
  - depends-on:: [[Cognitive Science]], [[Machine Learning Discipline]], [[Programme Synthesis]]
  - supports:: [[Artificial General Intelligence]], [[AI Benchmark Epistemological Critique]], [[Neurosymbolic AI]], [[Chain-of-Thought Reasoning]]
  - uses:: [[Domain-Specific Language]], [[Evaluation Metric]], [[Inductive Logic Programming]]
  - contrasts-with:: [[Large Language Models]], [[Deep Learning]], [[Transfer Learning]]
  - related-to:: [[Artificial General Intelligence]], [[Benchmark Standard]], [[AI Safety Research]], [[AI Benchmark Epistemological Critique]], [[Reinforcement Learning]], [[Few-Shot Learning]], [[Automated Reasoning]]
  - standardized-by:: [[ARC Prize]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:ARCGridTask))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:CoreKnowledgePriorSet))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:EvaluationLeaderboard))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:ARCAGI2))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:ARCAGI3))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:hasPart ai:ARCPrize))
  ## Dependency Relationships
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:requires ai:FewShotLearning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:requires ai:VisualReasoning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:requires ai:CoreKnowledgePriors))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:dependsOn ai:CognitiveScience))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:dependsOn ai:ProgrammeSynthesis))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:dependsOn ai:EvaluationMetric))
  ## Capability Relationships
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:Reasoning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:Generalisation))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:PatternRecognition))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:AISafetyResearch))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:AutomatedReasoning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:enables ai:BenchmarkEvaluation))
  ## Implementation Relationships
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:implements ai:BenchmarkStandard))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:implements ai:BenchmarkDataset))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:implements ai:EvaluationMetric))
  ## Reduction Relationships
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:reducesTo ai:FewShotLearning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:reducesTo ai:VisualPatternCompletion))
  ## Contrast Relationships
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:contrastsWith ai:LargeLanguageModels))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:contrastsWith ai:DeepLearning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:contrastsWith ai:TransferLearning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:supports ai:ArtificialGeneralIntelligence))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:supports ai:AIBenchmarkEpistemologicalCritique))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:supports ai:NeurosymbolicAI))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:supports ai:ChainOfThoughtReasoning))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:uses ai:DomainSpecificLanguage))
      SubClassOf(ai:ARCBenchmark
        ObjectSomeValuesFrom(ai:uses ai:InductiveLogicProgramming))

  ## About
    ARC-AGI emerged from a systematic critique of the AI evaluation landscape in 2019. François Chollet observed that prevalent benchmarks — ImageNet, GLUE, SuperGLUE, MMLU — measured task-specific skill rather than general intelligence, because models could reach human or super-human benchmark scores by exploiting statistical regularities in large training corpora that happened to overlap with the test distribution. A model that had memorised Internet text including millions of exam answers would score highly on a reading comprehension benchmark without necessarily demonstrating any capacity to reason about genuinely novel problems. Chollet formalised this critique by appealing to Algorithmic Information Theory: he defined intelligence not as the possession of skill but as the efficiency with which skill can be acquired from experience, relative to priors. The ARC corpus operationalised this by creating tasks whose solutions are not findable in any training corpus (because the tasks are hand-designed novel puzzles), are solvable by any human adult with minimal effort, and require only the four categories of core knowledge priors: objectness and elementary physics, goal-directedness and agentness, natural numbers and arithmetic, and basic geometry.

    The corpus comprises 400 training tasks (solutions publicly available), 400 evaluation tasks (solutions withheld), and later a hidden private evaluation set used for the [[ARC Prize]] competition. Each task is a small set of 30x30 or smaller coloured grids (10 possible colours, each represented by an integer 0–9) where input grids transform into output grids according to a consistent rule. The solver receives two to five demonstrations and must produce the correct output grid for one to three novel input grids. The evaluation metric is exact match: a response is counted correct only when every pixel of the output grid matches the ground truth, making partial credit impossible. Human performance on the training set approaches 100%; the evaluation set, which includes harder tasks, yields approximately 85% human accuracy, establishing the practical ceiling. Between 2019 and 2023, the frontier AI performance on the evaluation set stagnated between 0% and approximately 30%, underscoring the benchmark's resistance to memorisation-based approaches. The [[AI Benchmark Epistemological Critique]] community noted this as evidence of a genuine generalisation gap rather than mere benchmark difficulty.

    The theoretical framework in Chollet's 2019 paper situates ARC-AGI within a broader philosophical discussion about the nature of intelligence, drawing on Piaget's theory of cognitive development, Sternberg's triarchic theory, and Legg and Hutter's (2007) formal definition of universal intelligence via algorithmic complexity. The paper argues that prior AI achievements conflate the possession of crystallised intelligence (accumulated knowledge) with [[Fluid Intelligence]] (the capacity to reason about novel situations without prior knowledge). ARC-AGI specifically targets [[Fluid Intelligence]] by making crystallised knowledge from training data insufficient for success.

    The grounding in [[Cognitive Science]] is deep and deliberate. Spelke's core knowledge theory provides the psychological architecture: infants as young as six months demonstrate expectations about object persistence, basic number, geometry, and agent intentionality without any explicit training. Chollet's four [[Core Knowledge Priors]] directly operationalise this: (1) objectness and elementary physics — objects are discrete, persistent, cohesive entities that can move, overlap, or be counted; (2) goal-directedness — agents pursue goals and can be modelled intentionally; (3) natural numbers and arithmetic — exact enumeration of sets up to approximately ten; and (4) basic geometry and topology — symmetry, rotation, reflection, spatial containment, proximity. ARC tasks are designed so that any human adult can solve them within a few minutes using only these priors, but machines relying on statistical pattern recognition from large corpora cannot, because the correct rule for each task is not instantiated in any training distribution the machine has seen. This constraint is enforced by the hand-designed, novel character of every task — there is no "ARC training corpus" from which task solutions can be interpolated.

    The methodology for verifying this constraint involves comparing machine performance trajectories with human performance and examining whether high-scoring approaches use rule-induction or cache-lookup mechanisms. The [[AI Benchmark Epistemological Critique]] dimension of ARC-AGI became significant in late 2024 when OpenAI's o3 system used [[Test-Time Compute]] — specifically, a large-scale parallel search over candidate [[Programme Synthesis]] outputs scored by a learned verifier — to achieve 87.5% on the ARC-AGI-1 public evaluation. Critics argued this represented sophisticated search rather than [[Fluid Intelligence]], since the model was effectively enumerating candidate programs until one fit the training examples, at a compute cost orders of magnitude above human effort. Proponents argued that the capability to search effectively in a structured program space is itself a form of intelligence, and that the cost argument reflects current engineering constraints rather than a categorical distinction. This debate drove the design of [[ARC-AGI-2]], which was explicitly calibrated to resist high-compute search by introducing tasks where the search space is too large for brute enumeration even with very high [[Test-Time Compute]] budgets.

  ## Components / Architecture

    The ARC-AGI ecosystem has several technically distinct components:

    - **Task corpus**: 800+ hand-designed [[Grid-Based Tasks]], each a set of input-output grid pairs plus one or more test inputs. Tasks span geometric transformations (reflection, rotation, translation, scaling), colour mapping and substitution, object counting and sorting, symmetry completion, pattern repetition and tiling, Boolean logic on grid regions, and combined multi-step rules.
    - **[[Domain-Specific Language]] (ARC DSL)**: A formal grid-manipulation language developed by the community to support [[Programme Synthesis]] approaches. The ARC DSL contains approximately 103 primitives covering object extraction, transformation, filtering, composition, and property-testing. By contrast, generic program synthesis DSLs typically use under 30 primitives, reflecting the richer vocabulary needed for spatial reasoning.
    - **LARC (Language-Complete ARC)**: A companion dataset of natural-language descriptions of ARC task solutions collected from human participants who instructed each other using natural language alone. LARC covers successful descriptions of 88% of tasks and captures the gap between human linguistic instruction and executable programs, as human descriptions invoke open-ended spatial reasoning, domain-general control structures, and a long tail of vocabulary not represented in the ARC DSL.
    - **Evaluation infrastructure**: A Kaggle competition interface and private evaluation set used for the [[ARC Prize]] competition; participants submit programs or output grids for hidden test inputs.
    - **Successor benchmarks**: [[ARC-AGI-2]] (released 2025) introduced harder tasks calibrated to resist approaches that exploited distributional properties of the original corpus; [[ARC-AGI-3]] (launched March 2026) shifted to interactive multi-level environments requiring [[Agentic Intelligence]] rather than static grid completion.

    Solution approaches historically fall into four paradigms: (1) pure [[Programme Synthesis]] using explicit search over the ARC DSL space; (2) [[Neurosymbolic AI]] hybrids combining neural perception of grid objects with symbolic rule application; (3) [[Deep Learning]] approaches including task-specific fine-tuning and latterly test-time training (TTT); and (4) [[Large Language Models]] guided program synthesis, where code-generation LLMs are prompted to produce Python or DSL programs for each task.

  ## Use Cases / Major Families

    - **AGI capability measurement**: ARC-AGI is the primary public benchmark used to assess progress toward [[Artificial General Intelligence]] as operationally defined by Chollet. It serves as an anchor for capability evaluations in frontier model releases from OpenAI, Google DeepMind, Anthropic, and Meta.
    - **Programme synthesis research**: ARC tasks serve as challenging instances for formal program synthesis systems, driving development of new DSL designs, search heuristics, and abstraction-library-learning methods such as DreamCoder.
    - **Test-time compute scaling research**: The compute-intensive regime required to push ARC-AGI-1 scores above 50% via [[Test-Time Compute]] (generating thousands of candidate programs and scoring them) has been used to study how intelligence-like behaviour scales with inference-time computation rather than training-time parameter count.
    - **[[AI Safety Research]] and [[AI Benchmark Epistemological Critique]]**: ARC-AGI provides an empirical test case for claims about model generalisation; its resistance to memorisation makes it a useful probe for distinguishing genuine reasoning capability from sophisticated pattern-matching. The [[Artificial General Intelligence]] research community uses it as evidence in safety-relevant capability assessments.
    - **[[Cognitive Science]] validation**: ARC tasks operationalise Spelke's core knowledge theory and are used in cognitive science to compare human and machine reasoning trajectories, including via ARCTraj — a dataset of human reasoning trajectories collected during ARC task solving.
    - **[[Reinforcement Learning]] and agentic systems**: [[ARC-AGI-3]] moves the benchmark into the agentic domain, requiring agents to explore interactive environments, infer reward structure, and generalise across difficulty levels — testing [[Reinforcement Learning]] approaches rather than one-shot grid completion.
    - **[[Chain-of-Thought Reasoning]] research**: ARC tasks have been used to probe whether chain-of-thought prompting in [[Large Language Models]] elicits genuine spatial reasoning or merely formats a plausible-sounding step sequence. Empirical findings show that extended [[Chain-of-Thought Reasoning]] traces improve task accuracy modestly on ARC-AGI-1 easy tasks but provide minimal benefit on hard tasks requiring genuine rule-induction, distinguishing real reasoning improvement from format-driven appearance of reasoning.
    - **DSL and abstraction-library research**: The ARC DSL ecosystem motivates fundamental work in library learning — the process of discovering reusable subroutines that compress a collection of programs. Systems such as DreamCoder and STITCH use ARC-style tasks to evaluate whether learned abstractions transfer across tasks, directly connecting to [[Automated Reasoning]] and [[Generalisation]] theory.

  ## Academic Context

    ARC-AGI sits at the intersection of multiple theoretical traditions. Chollet's foundational paper (arXiv:1911.01547) draws on Algorithmic Information Theory (Kolmogorov complexity, Solomonoff induction), developmental cognitive science (Spelke's core knowledge, Piaget's constructivism), and psychometric theories of intelligence (Cattell's fluid/crystallised distinction). The Legg and Hutter (2007) formal definition of universal intelligence, which Chollet critiques as computationally intractable, provides the theoretical upper bound against which ARC-AGI's operationalisation is positioned.

    Key technical developments in the ARC literature include: DreamCoder (Ellis et al., 2021), a wake-sleep programme synthesis system that bootstraps abstractions over a DSL; LARC (Acquaviva et al., 2022), providing natural language descriptions for 88% of ARC tasks; ARCTraj (2024), human-trajectory data for cognitive comparison; test-time training (TTT) methods (Akyürek et al., 2024), which fine-tune model weights at inference time on each specific task; and LLM-guided synthesis (various 2024), using GPT-4o and other code models to generate candidate Python programs. The ARC Prize 2024 Technical Report (Chollet et al., arXiv:2412.04604) provides the most comprehensive empirical survey of approaches. The ARC Prize 2025 Technical Report (arXiv:2601.10904) documents the transition to [[ARC-AGI-2]] and the subsequent landscape.

    The living survey "The ARC of Progress towards AGI" (Moult et al., arXiv:2603.13372, 2026) tracks all published approaches with methodology tags. As of early 2026, the survey identifies three dominant contemporary paradigms: (a) execution-guided [[Programme Synthesis]] with neural priors, in which a neural network proposes candidate programs and a DSL interpreter executes them to filter out programs inconsistent with the demonstrations; (b) test-time training, in which model weights are gradient-updated on each task at inference time; and (c) [[Large Language Models]] with extended search budgets, in which thousands of candidate natural-language or Python solutions are sampled from an LLM and verified against the given input-output pairs. None of these approaches reaches human-level sample efficiency — humans typically solve ARC tasks from two demonstrations with a single hypothesis, while machine approaches typically require many attempts or high compute — confirming Chollet's thesis that current AI systems lack the innate priors to match human [[Fluid Intelligence]] efficiency. The MADIL framework (Hodel et al., 2025), which applies the Minimum Description Length principle to [[Programme Synthesis]] in the ARC domain, offers a theoretically grounded account of how compression-based reasoning can recover structured rules from minimal examples, connecting to Solomonoff's theory of inductive inference and the broader tradition of [[Inductive Logic Programming]] as explored in Barke et al. (2024).

    The benchmark has attracted [[AI Benchmark Epistemological Critique]] regarding whether high scores on ARC-AGI-1 via [[Test-Time Compute]] represent genuine generalisation or a computationally expensive proxy for search. The [[Artificial General Intelligence]] research debate crystallised around OpenAI's o3 model performance (87.5% on ARC-AGI-1 public evaluation at high compute, December 2024), with Chollet himself arguing that o3's approach relied on a form of test-time search that differs from human fluid reasoning, while others argued the capability advance was substantive regardless of mechanism.

  ## Current Landscape (2026)

    The ARC-AGI benchmark ecosystem has evolved rapidly across a three-generation arc from 2019 to 2026. ARC-AGI-1 (the original 2019 corpus) effectively reached saturation for frontier models by early 2026: Gemini 3.1 Pro reached 77.1% and GPT-5.4 reached 73.3% on ARC-AGI-2 by February–March 2026 respectively, suggesting that the difficulty calibration of ARC-AGI-1 had been outpaced by model capability advances. The ARC Prize 2024 competition (June–November 2024) awarded prizes totalling $725,000 with a top Kaggle score of 55.5% (private evaluation set) achieved by MindsAI, who declined to open-source their solution; the official open-source winners, the ARChitects, scored 53.5% using test-time training. OpenAI's o3 model, announced December 2024, achieved 87.5% on the ARC-AGI-1 public evaluation at high [[Test-Time Compute]] budget, and 75.7% at low compute, compared to approximately 85% human baseline — the first time a frontier model had approached human performance, sparking substantial debate about what the result meant for AGI capability claims.

    [[ARC-AGI-2]], released in 2025, introduced harder tasks explicitly calibrated to resist the TTT and LLM-synthesis approaches that drove the ARC-AGI-1 breakthrough. OpenAI's o3 scored only 2.9% (medium compute) on ARC-AGI-2 at launch in April 2025, and the top Kaggle submission reached 24% on the private evaluation set. By early 2026, frontier models had improved substantially on ARC-AGI-2 via extended test-time search, with Gemini 3.1 Pro reaching 77.1% by February 2026 on ARC-AGI-2.

    [[ARC-AGI-3]], launched 25 March 2026 at Y Combinator San Francisco, represents a fundamental paradigm shift: instead of static grid-completion tasks, it provides hundreds of interactive turn-based environments — game-style levels with no stated goals, requiring agents to explore, infer reward structure, and generalise across increasingly difficult levels. Frontier models from OpenAI (GPT-5.4), Anthropic (Claude Opus 4.6), and Google DeepMind (Grok 4.2) scored between 0% and 0.37%, while human participants consistently achieved 100%. The [[ARC Prize]] 2026 offers $2 million in prize money with a $700,000 grand prize. ARC-AGI-3 is formally described in arXiv:2603.24621.

  ## UK Context

    UK academic engagement with ARC-AGI has grown substantially since 2022. The Alan Turing Institute has funded work at the intersection of [[Cognitive Science]] and AI evaluation, including projects examining whether human-trajectory data (as in ARCTraj) can improve programme synthesis systems. The University of Edinburgh's School of Informatics houses research groups in formal methods, [[Automated Reasoning]], and [[Neurosymbolic AI]] that engage directly with ARC-style benchmarks as test beds for logical rule induction and abductive inference. Imperial College London's Department of Computing has contributed to [[Inductive Logic Programming]] approaches to ARC tasks, with connections to the ILASP system (Learning from Answer Set Programming) developed by the Logic-Based AI group. Oxford's Department of Computer Science, through the Future of Humanity Institute and its successor the Existential Risk Observatory, has engaged with ARC-AGI as a capability measurement tool relevant to [[AI Safety Research]] and the empirical assessment of [[Artificial General Intelligence]] timelines.

    The DeepMind research programme (headquartered in London, part of Google DeepMind since 2023) has cited ARC-AGI in capability assessments for Gemini family models. UK Research and Innovation (UKRI) funded a £13.8 million grant to the ARIA (Advanced Research and Invention Agency) for its Safeguarded AI Programme, which uses ARC-style generalisation tests as part of its model evaluation framework. In Northern England, the University of Manchester's Department of Computer Science has active research in [[Machine Learning Discipline]] generalisation; the University of Sheffield's Neuroscience Institute maintains collaborations bridging developmental cognitive science and AI evaluation that are relevant to the core knowledge prior framework. The broader UK AI Safety Institute (AISI, established October 2023), which became the AI Security Institute in 2025 and is based in London, explicitly uses generalisation benchmarks including ARC-derived tasks in its frontier model evaluation protocols.

  ## Future Directions (2026-2030)

    The ARC-AGI benchmark series is likely to continue evolving toward more agentic, interactive, and multi-modal evaluation paradigms. [[ARC-AGI-3]]'s interactive environment design signals that the field's next frontier is [[Agentic Intelligence]] — systems that can explore unknown environments, build internal models of reward structure, and transfer learned abstractions across levels — rather than static pattern completion. Several research trajectories follow from this.

    First, the integration of [[Reinforcement Learning]] with [[Programme Synthesis]] is expected to dominate high-performance ARC-AGI-3 approaches: agents will need to learn environment models through active exploration, then synthesise explicit programs or policies for generalisation across levels. Second, [[Test-Time Compute]] scaling will remain a contested dimension: whether compute-expensive search constitutes genuine [[Fluid Intelligence]] or merely expensive lookup is expected to generate theoretical work connecting algorithmic information theory to practical capability measurement. Third, [[Transfer Learning]] from rich pre-training environments to novel ARC-style tasks may be enabled by next-generation foundation models with stronger grounding in spatial and causal reasoning, potentially via multimodal training on physics simulation data.

    Fourth, the relationship between ARC performance and [[AI Safety Research]] will deepen: as ARC-AGI-3 scores improve, the [[AI Safety Research]] community will face pressure to update risk models that currently treat AGI capability as distant. The benchmark's role in policy-relevant capability evaluations — as used by AISI, ARIA, and NIST — will expand, potentially feeding into mandatory model evaluations under the EU AI Act's proposed requirements for advanced capability assessment. [[Cognitive Science]] and AI will converge further: datasets like ARCTraj capturing human reasoning trajectories will be used to align machine reasoning processes more closely with human-intelligible approaches, supporting interpretability and [[Automated Reasoning]] research.

  ## Research & Literature

    1. Chollet, F. (2019). On the Measure of Intelligence. arXiv:1911.01547.
    2. Chollet, F., Knoop, M., Kamradt, G., & Landers, B. (2024). ARC Prize 2024: Technical Report. arXiv:2412.04604.
    3. Chollet, F. et al. (2025). ARC Prize 2025: Technical Report. arXiv:2601.10904.
    4. Chollet, F. et al. (2026). ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence. arXiv:2603.24621.
    5. Acquaviva, S., Alet, F., Simard, P., Gros, C., & Lozano-Perez, T. (2022). Communicating Natural Programs to Humans and Machines. *NeurIPS 2022*. OpenReview.
    6. Ellis, K., Wong, C., Nye, M., Sable-Meyer, M., Morales, L., Hewitt, L., … Tenenbaum, J. B. (2021). DreamCoder: Bootstrapping Inductive Program Synthesis with Wake-Sleep Library Learning. *PLDI 2021*.
    7. Akyürek, E., Jiang, B., Klivans, A., et al. (2024). The Surprising Effectiveness of Test-Time Training for Abstract Reasoning. arXiv:2411.07279.
    8. ARC Prize. (2024). OpenAI o3 Breakthrough High Score on ARC-AGI-Pub. https://arcprize.org/blog/oai-o3-pub-breakthrough
    9. ARC Prize. (2025). Announcing ARC-AGI-2 and ARC Prize 2025. https://arcprize.org/blog/announcing-arc-agi-2-and-arc-prize-2025
    10. ARC Prize. (2025). ARC Prize 2025 Results and Analysis. https://arcprize.org/blog/arc-prize-2025-results-analysis
    11. ARC Prize. (2026). Announcing ARC-AGI-3. https://arcprize.org/blog/arc-agi-3-launch
    12. Legg, S., & Hutter, M. (2007). Universal Intelligence: A Definition of Machine Intelligence. *Minds and Machines*, 17(4), 391–444.
    13. Spelke, E. S., & Kinzler, K. D. (2007). Core Knowledge. *Developmental Science*, 10(1), 89–96.
    14. Cattell, R. B. (1963). Theory of Fluid and Crystallized Intelligence: A Critical Experiment. *Journal of Educational Psychology*, 54(1), 1–22.
    15. Hernandez-Orallo, J. (2017). *The Measure of All Minds: Evaluating Natural and Artificial Intelligence*. Cambridge University Press.
    16. Greenblatt, R. (2024). Getting 50% (SoTA) on ARC-AGI with GPT-4o. Blog post. https://redwoodresearch.substack.com/
    17. Xu, Y. et al. (2024). Enhancing Analogical Reasoning in the Abstraction and Reasoning Corpus via Model-Based RL. arXiv:2408.14855.
    18. Barke, S. et al. (2024). Program Synthesis using Inductive Logic Programming for the Abstraction and Reasoning Corpus. arXiv:2405.06399.
    19. Alford, S. et al. (2024). ARCTraj: A Dataset and Benchmark of Human Reasoning Trajectories for Abstract Problem Solving. arXiv:2511.11079.
    20. Hodel, M. et al. (2025). MADIL: An MDL-based Framework for Efficient Program Synthesis in the ARC Benchmark. arXiv:2505.01081.
    21. Giridharan, A. (2026). ARC-AGI-3 Dropped — and Frontier AI Scored Less Than 1%. *Medium*. https://medium.com/@AdithyaGiridharan/
    22. AgentMarketCap. (2026). ARC-AGI-2 Leaderboard 2026: Why the Benchmark That Defines True Reasoning Inverts the SWE-bench Rankings. https://agentmarketcap.ai/blog/2026/04/06/
    23. DataCamp. (2026). ARC-AGI-3: The New Interactive Reasoning Benchmark. https://www.datacamp.com/blog/arc-agi-3
    24. VentureBeat. (2024). OpenAI's o3 Shows Remarkable Progress on ARC-AGI, Sparking Debate on AI Reasoning. https://venturebeat.com/ai/openais-o3-shows-remarkable-progress-on-arc-agi-sparking-debate-on-ai-reasoning
    25. Effective Altruism Forum. (2025). OpenAI's o3 Model Scores 3% on the ARC-AGI-2 Benchmark. https://forum.effectivealtruism.org/posts/CoPNbwNqDai6orZhv/
    26. EmergentMind. (2025). ARC-AGI Benchmark: Fluid AI Evaluation. https://www.emergentmind.com/topics/arc-agi-benchmark
    27. Wellacott, L. (2023). Paper Summary: On the Measure of Intelligence (Chollet 2019). https://liamwellacott.github.io/
    28. Moult, J. et al. (2025). The ARC of Progress towards AGI: A Living Survey of Abstraction and Reasoning. arXiv:2603.13372.

- ### Provenance
  - sources:: https://arcprize.org/blog/oai-o3-pub-breakthrough, https://arxiv.org/abs/1911.01547, https://arxiv.org/abs/2412.04604, https://arxiv.org/abs/2601.10904, https://arxiv.org/abs/2603.24621, https://arxiv.org/abs/2505.11831, https://arcprize.org/blog/arc-agi-3-launch, https://arxiv.org/abs/2603.13372
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
