public:: true

# Common Sense Reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:common-sense-reasoning",
  "@type": "Page",
  "vc:slug": "common-sense-reasoning",
  "title": "Common Sense Reasoning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:natural-language-understanding",
      "vc:label": "Natural Language Understanding"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:ai-agents",
      "vc:label": "AI Agents"
    },
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:collective-intelligence",
      "vc:label": "Collective Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:symbolic-ai",
      "vc:label": "Symbolic AI"
    },
    {
      "@id": "urn:visionflow:linked:neurosymbolic-ai",
      "vc:label": "Neurosymbolic AI"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:embodied-ai",
      "vc:label": "Embodied AI"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:question-answering",
      "vc:label": "Question Answering"
    },
    {
      "@id": "urn:visionflow:linked:causal-reasoning",
      "vc:label": "Causal Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:temporal-reasoning",
      "vc:label": "Temporal Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:spatial-reasoning",
      "vc:label": "Spatial Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:rlhf",
      "vc:label": "RLHF"
    },
    {
      "@id": "urn:visionflow:linked:hallucination",
      "vc:label": "Hallucination"
    },
    {
      "@id": "urn:visionflow:linked:concept-net",
      "vc:label": "ConceptNet"
    },
    {
      "@id": "urn:visionflow:linked:word-net",
      "vc:label": "WordNet"
    },
    {
      "@id": "urn:visionflow:linked:transformer-architecture",
      "vc:label": "Transformer Architecture"
    },
    {
      "@id": "urn:visionflow:linked:grounding",
      "vc:label": "Grounding"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:evaluation-benchmarks",
      "vc:label": "Evaluation Benchmarks"
    },
    {
      "@id": "urn:visionflow:linked:few-shot-learning",
      "vc:label": "Few-Shot Learning"
    },
    {
      "@id": "urn:visionflow:linked:chain-of-thought",
      "vc:label": "Chain-of-Thought Prompting"
    },
    {
      "@id": "urn:visionflow:linked:world-model",
      "vc:label": "World Model"
    },
    {
      "@id": "urn:visionflow:linked:theory-of-mind",
      "vc:label": "Theory of Mind"
    },
    {
      "@id": "urn:visionflow:linked:naive-physics",
      "vc:label": "Naive Physics"
    },
    {
      "@id": "urn:visionflow:linked:foundation-models",
      "vc:label": "Foundation Models"
    },
    {
      "@id": "urn:visionflow:linked:gpt-4",
      "vc:label": "GPT-4"
    },
    {
      "@id": "urn:visionflow:linked:constitutional-ai",
      "vc:label": "Constitutional AI"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:logic-programming",
      "vc:label": "Logic Programming"
    },
    {
      "@id": "urn:visionflow:linked:commonsense-qa",
      "vc:label": "CommonsenseQA"
    },
    {
      "@id": "urn:visionflow:linked:winogrande",
      "vc:label": "WinoGrande"
    },
    {
      "@id": "urn:visionflow:linked:hellaswag",
      "vc:label": "HellaSwag"
    }
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:common-sense-reasoning",
  "@type": "Class",
  "label": "Common Sense Reasoning",
  "definition": "The capacity of an AI system to draw inferences that humans consider obvious from general background knowledge about the physical world, social norms, causality, and everyday object behaviour — without explicit instruction. It encompasses naive physics, naive psychology, temporal reasoning, spatial reasoning, and social cognition grounded in embodied human experience, and is tested against benchmarks including CommonsenseQA, HellaSwag, WinoGrande, and PIQA.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-understanding",
      "label": "Natural Language Understanding"
    },
    {
      "@id": "urn:ngm:class:reasoning",
      "label": "Reasoning"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:grounding", "label": "Grounding"},
      {"@id": "urn:ngm:class:world-model", "label": "World Model"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:naive-physics", "label": "Naive Physics"},
      {"@id": "urn:ngm:class:theory-of-mind", "label": "Theory of Mind"},
      {"@id": "urn:ngm:class:causal-reasoning", "label": "Causal Reasoning"},
      {"@id": "urn:ngm:class:temporal-reasoning", "label": "Temporal Reasoning"},
      {"@id": "urn:ngm:class:spatial-reasoning", "label": "Spatial Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"},
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:hallucination", "label": "Hallucination"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"},
      {"@id": "urn:ngm:class:logic-programming", "label": "Logic Programming"},
      {"@id": "urn:ngm:class:formal-reasoning", "label": "Formal Reasoning"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:foundation-models", "label": "Foundation Models"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:neuro-symbolic-ai", "label": "Neurosymbolic AI"},
      {"@id": "urn:ngm:class:rlhf", "label": "RLHF"},
      {"@id": "urn:ngm:class:constitutional-ai", "label": "Constitutional AI"},
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain-of-Thought Prompting"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:common-sense-reasoning:e7f931b4c20a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:common-sense-reasoning"
  },
  "vc:resolutions": [
    {
      "raw": "[[Natural Language Understanding]]",
      "resolved": "urn:visionflow:linked:natural-language-understanding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agents]]",
      "resolved": "urn:visionflow:linked:ai-agents",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collective Intelligence]]",
      "resolved": "urn:visionflow:linked:collective-intelligence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Symbolic AI]]",
      "resolved": "urn:visionflow:linked:symbolic-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Neurosymbolic AI]]",
      "resolved": "urn:visionflow:linked:neurosymbolic-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reasoning]]",
      "resolved": "urn:visionflow:linked:reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embodied AI]]",
      "resolved": "urn:visionflow:linked:embodied-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Question Answering]]",
      "resolved": "urn:visionflow:linked:question-answering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Causal Reasoning]]",
      "resolved": "urn:visionflow:linked:causal-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Temporal Reasoning]]",
      "resolved": "urn:visionflow:linked:temporal-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Spatial Reasoning]]",
      "resolved": "urn:visionflow:linked:spatial-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[RLHF]]",
      "resolved": "urn:visionflow:linked:rlhf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hallucination]]",
      "resolved": "urn:visionflow:linked:hallucination",
      "kind": "StubLink"
    },
    {
      "raw": "[[ConceptNet]]",
      "resolved": "urn:visionflow:linked:concept-net",
      "kind": "StubLink"
    },
    {
      "raw": "[[WordNet]]",
      "resolved": "urn:visionflow:linked:word-net",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transformer Architecture]]",
      "resolved": "urn:visionflow:linked:transformer-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Grounding]]",
      "resolved": "urn:visionflow:linked:grounding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Evaluation Benchmarks]]",
      "resolved": "urn:visionflow:linked:evaluation-benchmarks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Few-Shot Learning]]",
      "resolved": "urn:visionflow:linked:few-shot-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Chain-of-Thought Prompting]]",
      "resolved": "urn:visionflow:linked:chain-of-thought",
      "kind": "StubLink"
    },
    {
      "raw": "[[World Model]]",
      "resolved": "urn:visionflow:linked:world-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Theory of Mind]]",
      "resolved": "urn:visionflow:linked:theory-of-mind",
      "kind": "StubLink"
    },
    {
      "raw": "[[Naive Physics]]",
      "resolved": "urn:visionflow:linked:naive-physics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Foundation Models]]",
      "resolved": "urn:visionflow:linked:foundation-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT-4]]",
      "resolved": "urn:visionflow:linked:gpt-4",
      "kind": "StubLink"
    },
    {
      "raw": "[[Constitutional AI]]",
      "resolved": "urn:visionflow:linked:constitutional-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "StubLink"
    },
    {
      "raw": "[[Logic Programming]]",
      "resolved": "urn:visionflow:linked:logic-programming",
      "kind": "StubLink"
    },
    {
      "raw": "[[CommonsenseQA]]",
      "resolved": "urn:visionflow:linked:commonsense-qa",
      "kind": "StubLink"
    },
    {
      "raw": "[[WinoGrande]]",
      "resolved": "urn:visionflow:linked:winogrande",
      "kind": "StubLink"
    },
    {
      "raw": "[[HellaSwag]]",
      "resolved": "urn:visionflow:linked:hellaswag",
      "kind": "StubLink"
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
  - Common Sense Reasoning refers to an AI system's capacity to draw inferences that competent human adults consider self-evidently true — without having been explicitly taught them — by leveraging background [[Knowledge Representation]] about the physical world, social norms, causal structure, and the typical behaviour of everyday objects and agents. It encompasses at least five partially distinct sub-faculties: [[Naive Physics]] (objects fall when dropped, liquids flow downhill, solid objects cannot occupy the same space), [[Theory of Mind]] (agents have beliefs, desires, and intentions that may differ from reality), [[Causal Reasoning]] (events have causes and effects that respect temporal precedence), [[Temporal Reasoning]] (yesterday precedes today, processes take time, events can be simultaneous or sequential), and [[Spatial Reasoning]] (objects occupy locations, spatial relations are transitive and metric). These dimensions interact: understanding that a cup will spill if tilted requires [[Naive Physics]], but predicting whether a person will tilt it requires [[Theory of Mind]], and knowing that a wet floor is a hazard to a passerby requires both social cognition and [[Causal Reasoning]] operating in concert. As a branch of [[Reasoning]] and a prerequisite of genuine [[Natural Language Understanding]], common sense reasoning differs fundamentally from formal [[Automated Reasoning]] and [[Symbolic AI]] in that its conclusions are defeasible — they hold by default but can be retracted when exceptions arise — and its [[Knowledge Base]] is open-ended rather than bounded by an axiomatised domain. This defeasibility is formalised in [[Non-Monotonic Reasoning]] frameworks such as [[Default Logic]], circumscription, and answer-set programming. The benchmark challenge for [[Large Language Models]], [[Foundation Models]], and other AI architectures is that common-sense knowledge is vast, deeply contextual, largely unspoken in natural language, and systematically violated in ways that are obvious to humans but opaque to purely statistical learning systems — a phenomenon exploited by adversarial benchmarks such as [[WinoGrande]], [[HellaSwag]], [[CommonsenseQA]], and Physical Intuition QA ([[PIQA]]). Classical AI approaches employed hand-crafted [[Semantic Network]]s and structured [[Knowledge Graph]] resources — most prominently [[ConceptNet]] (over 1.6 million multilingual assertions) and the ATOMIC knowledge graph (880K if-then social causal tuples, Sap et al. 2019) — to encode background knowledge in machine-readable form. The COMET-ATOMIC20 neural generative model (Hwang et al. 2021) extended this by enabling on-demand generation of novel commonsense inferences, bridging symbolic knowledge stores with neural [[Large Language Models]] via [[Retrieval-Augmented Generation]] pipelines. Hybrid [[Neurosymbolic AI]] approaches combine the breadth of neural [[Knowledge Graph]] representations with the structural precision of logic engines and constraint solvers, while [[Embodied AI]] research grounds commonsense acquisition in physical interaction through simulation and real-world manipulation to supply the causal signal absent from text alone. By 2025, the REASON framework for probabilistic logical reasoning and NVIDIA's Cosmos-Reason1 multimodal pre-training represent the leading edge of neurosymbolic and embodied commonsense research respectively. The field bears directly on [[AI Safety]] and [[AI Alignment]], because systems that lack genuine common sense may comply with the letter of instructions while violating their spirit, producing physically implausible, socially incoherent, or temporally inconsistent outputs — a key driver of [[Hallucination]] in deployed [[Generative AI]] systems and a recognised class of unsafe behaviour under the UK AI Safety Institute's frontier model evaluation framework.

- ### Semantic Classification
  - owl-class:: ai:CommonSenseReasoning
  - owl-role:: Concept | CognitiveCapability | ReasoningParadigm
  - owl-inferred:: ai:InferenceCapability, ai:KnowledgeGroundedReasoning, ai:HumanLikeReasoning, ai:DefeasibleReasoning, ai:BackgroundKnowledgeCapability
  - belongs-to-domain:: [[Natural Language Processing]], [[Cognitive Science]]
  - implemented-in-layer:: [[Knowledge Representation]], [[Reasoning]]

- ### Relationships
  - is-subclass-of:: [[Natural Language Understanding]], [[Reasoning]], [[Automated Reasoning]]
  - has-part:: [[Naive Physics]], [[Theory of Mind]], [[Causal Reasoning]], [[Temporal Reasoning]], [[Spatial Reasoning]], [[Non-Monotonic Reasoning]], [[Default Logic]], [[Frame Semantics]]
  - requires:: [[Knowledge Representation]], [[Grounding]], [[World Model]], [[Knowledge Base]], [[Inference]]
  - enables:: [[AI Agents]], [[Natural Language Understanding]], [[Question Answering]], [[Embodied AI]], [[Robotics]], [[Planning]], [[Conversational AI]]
  - uses:: [[Natural Language Processing]], [[Knowledge Graph]], [[Large Language Models]], [[Transformer Architecture]], [[ConceptNet]], [[WordNet]], [[Chain-of-Thought Prompting]], [[Retrieval-Augmented Generation]], [[Transfer Learning]], [[Fine Tuning]]
  - implements:: [[Neurosymbolic AI]], [[RLHF]], [[Constitutional AI]], [[Neural-Symbolic Integration]]
  - depends-on:: [[Deep Learning]], [[Foundation Models]], [[Few-Shot Learning]], [[Semantic Network]]
  - supports:: [[AI Safety]], [[Explainable AI]], [[Natural Language Processing]]
  - related-to:: [[Collective Intelligence]], [[AI Alignment]], [[Hallucination]], [[Evaluation Benchmarks]], [[Cognitive Architecture]], [[Generative AI]], [[Expert Systems]], [[Machine Learning]], [[Multi-Modal Learning]], [[Visual Question Answering]]
  - contrasts-with:: [[Symbolic AI]], [[Logic Programming]], [[Formal Reasoning]], [[Description Logic]]
  - standardized-by:: [[CommonsenseQA]], [[WinoGrande]], [[HellaSwag]], [[Ontology]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:NaivePhysics))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:TheoryOfMind))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:CausalReasoning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:TemporalReasoning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:SpatialReasoning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:SocialCognition))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:NonMonotonicReasoning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:DefaultLogic))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:FrameSemantics))

  ## Dependency Relationships
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:Grounding))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:WorldModel))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeBase))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:Inference))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:SemanticNetwork))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))

  ## Capability Relationships
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:AIAgents))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageUnderstanding))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:EmbodiedAI))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:ConversationalAI))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:Robotics))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))

  ## Implementation Relationships
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:NeuralSymbolicIntegration))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:ChainOfThoughtPrompting))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:implements ai:NeurosymbolicAI))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:implements ai:RLHF))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:implements ai:ConstitutionalAI))

  ## Reduction Relationships
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:PlausibleInference))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:DefaultRuleApplication))
      SubClassOf(ai:CommonSenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:ContextSensitiveInference))
  ## About

    Common sense reasoning occupies a peculiar position in AI research: it is simultaneously among the most natural capabilities for humans and among the most elusive for machines. The distinction between what AI systems can do and what they cannot do is perhaps nowhere sharper than here: a system that can win at chess against world champions or generate professional-quality text may simultaneously fail to recognise that you cannot dry yourself with a wet towel, that pulling a tablecloth out from under plates is likely to cause them to fall, or that a person who says "could you pass the salt?" is making a request rather than enquiring about your capability. These failures are not peripheral edge cases — they reflect a fundamental gap between statistical language competence and the embodied, causal, and social knowledge that underlies human intelligence. This gap has consequences for every AI application that involves real-world interaction: medical AI that cannot infer contraindications from clinical context; robotic systems that cannot plan around physical constraints; legal AI that cannot infer the spirit of instructions from their letter; autonomous vehicles that cannot predict jaywalking behaviour from social context. Common sense reasoning is therefore not a research curiosity but a prerequisite for safe and beneficial general AI.

    The challenge was articulated as early as 1958 by John McCarthy, who described the need for programs with "common sense" that could derive conclusions from large bodies of background knowledge without explicit programming. McCarthy's 1959 paper "Programs with Common Sense" — presented at the Teddington Conference on the Mechanisation of Thought Processes and notable as one of the first papers to use the term "common sense" in relation to machine intelligence — proposed the Advice Taker, a hypothetical system that could accept new axioms from a user and derive new conclusions from them, including common-sense facts about the world. McCarthy and Hayes (1969) subsequently formalised the frame problem — the challenge of representing, in a formal system, which facts remain unchanged when an action is performed — which has remained a central theoretical obstacle for knowledge-based common-sense systems for over fifty years.

    The Cyc project (Douglas Lenat, 1984–2023) operationalised the common-sense challenge as the systematic hand-coding of millions of commonsense facts and inference rules into a formal ontology in first-order predicate logic. Beginning at MCC (Microelectronics and Computer Technology Corporation) in July 1984 and subsequently spun out as Cycorp in 1995, Cyc accumulated over 600,000 concepts and several million assertions over four decades of effort. By the time of Lenat's death in August 2023, Cyc had grown to 25 million rules, 1.5 million concepts, and over a thousand specialised inference engines. OpenCyc, released in 2002, offered a lightweight public subset. The project demonstrated both the feasibility of large-scale common-sense knowledge engineering and its staggering labour cost, and was criticised by machine-learning researchers including Pedro Domingos as a "catastrophic failure" due to its inability to evolve autonomously from new data. Lenat himself, in his final paper, argued that Cyc and large language models should be viewed as complementary rather than competing: LLMs are fluent and broad but often inconsistent, while Cyc's conclusions are always supported by auditable reasoning chains.

    The parallel crowdsourced approach yielded [[ConceptNet]] (originating at MIT Media Lab's Open Mind Common Sense project, circa 2000, published formally by Liu and Singh 2004) and the ATOMIC [[Knowledge Graph]] (Sap et al., 2019), which encode commonsense relationships in graph form accessible to neural systems. ConceptNet v5 (Speer et al., 2017) combines expert-curated and crowd-sourced knowledge from multiple sources — Wiktionary, DBPedia, Open Mind Common Sense, and others — totalling over 1.6 million commonsense relationship triples across concepts in more than 100 languages, using 36 relation types including IsA, UsedFor, HasProperty, PartOf, Causes, and MotivatedByGoal. ATOMIC (Sap et al., 2019) organises 880,000 if-then knowledge tuples across nine social and causal relation types covering causes, effects, and mental state inferences about everyday events; its neural extension COMET-ATOMIC20 (Hwang et al., 2021) uses a pre-trained [[Transformer Architecture]] to generate commonsense inferences on demand, making it possible to augment [[Large Language Models]] with structured commonsense knowledge retrieval at inference time through [[Retrieval-Augmented Generation]] pipelines. ATOMIC-2020 unified ATOMIC with ConceptNet into a single graph with 23 relation types and over 1.33 million common-sense tuples.

    The paradigm shift from symbolic knowledge engineering to neural pre-training occurred with the [[Deep Learning]] era. Models trained on internet-scale text — initially word2vec (Mikolov et al., 2013), then ELMo (Peters et al., 2018), then BERT (Devlin et al., 2019), then GPT-style [[Foundation Models]] — absorbed implicit commonsense knowledge through statistical regularities in language, achieving high scores on early commonsense benchmarks almost as a by-product of scale. This prompted the development of harder benchmarks specifically designed to probe commonsense understanding beyond surface pattern matching: [[HellaSwag]] (Zellers et al., 2019) measures activity-completion prediction with adversarially generated distractors that are grammatically plausible but physically implausible, designed explicitly to defeat BERT-era models; [[WinoGrande]] (Sakaguchi et al., 2021) scales Winograd schema pronoun-resolution to 44,000 adversarially curated examples; [[CommonsenseQA]] (Talmor et al., 2019) tests multi-hop commonsense inference using [[ConceptNet]] as the knowledge source for question generation; Physical Intuition QA (PIQA, Bisk et al., 2020) focuses specifically on [[Naive Physics]] by asking models to select the correct procedure for physical goals; and Social IQa (Sap et al., 2019) evaluates folk psychology reasoning about agents' motivations, reactions, and mental states across 38,000 multiple-choice questions.

    A pivotal theoretical challenge exposed by the LLM era is the gap between benchmark performance and genuine commonsense understanding. Bender et al. (2021) argued that large language models perform sophisticated statistical interpolation — "stochastic parrots" — rather than genuine reasoning, and subsequent adversarial evaluation confirmed that many benchmark gains reflect distribution-specific pattern learning rather than generalised background knowledge. Studies from 2024 and 2025 showed that frontier LLMs continue to fail on adversarial probes that require compositional generalisation, novel physical scenarios, and multi-step causal inference chains, even when achieving near-human scores on standard benchmark splits.

    The 2024–2026 research consensus is that monolithic LLMs fail systematically on reasoning tasks requiring deterministic logical chains or combinatorial search, and that neuro-symbolic models consistently outperform monolithic LLMs of comparable size on complex multi-step reasoning chains. The REASON framework (2025) accelerates probabilistic logical reasoning for scalable [[Neurosymbolic AI]] by combining neural approximate inference with symbolic constraint satisfaction. The Cosmos-Reason1 models (NVIDIA, 2025) apply multimodal pre-training specifically to physical common sense and embodied reasoning through long chain-of-thought reasoning sequences, representing a shift toward grounding commonsense in physical simulation rather than text alone. Amazon reported in 2025 that applying neurosymbolic techniques to its Vulcan warehouse robots and Rufus shopping assistant demonstrably improved accuracy and decision-making in commonsense-demanding tasks, representing one of the first large-scale industrial deployments of neurosymbolic common-sense integration.

  ## Components / Architecture

    Common Sense Reasoning systems decompose into several recognisable architectural patterns that can be deployed separately or in combination:

    **Naive Physics Module**: Represents constraints on physical object behaviour — solidity, continuity, gravity, rigidity, liquidity, thermal properties — either as symbolic rules (as in Cyc's naive physics microtheory) or implicitly in neural embeddings trained on text and simulation data. The naive physics manifesto (Hayes, 1978) provided the original formal programme; modern approaches use differentiable physics simulators (MuJoCo, Isaac Gym) to supply training signal. PIQA evaluates naive physics reasoning, and [[Embodied AI]] robotic systems increasingly rely on learned physics representations to plan physical manipulation tasks.

    **Theory of Mind Module**: Represents beliefs, desires, goals, intentions, and epistemic states of agents, enabling prediction of behaviour and attribution of mental states to others. Evaluated by false-belief tasks (Sally-Anne type), the ToMi benchmark (Le et al., 2019), and Social IQa (Sap et al., 2019). [[Large Language Models]] display partial Theory of Mind capability that degrades on more complex multi-agent, multi-step false-belief scenarios. The relationship between Theory of Mind and [[AI Alignment]] is direct: systems that cannot model human beliefs and intentions cannot reliably act in accordance with them.

    **Causal Reasoning Component**: Encodes directional causal relationships between events and actions, enabling forward simulation (what happens next?), backward counterfactual inference (what if X had not happened?), and abductive inference (what is the most plausible explanation?). ATOMIC's cause-and-effect relations support causal inference; the do-calculus (Pearl, 2000) provides the formal framework; and causal commonsense benchmarks test whether systems can distinguish correlation from causation in everyday scenarios. [[Retrieval-Augmented Generation]] over causal knowledge graphs improves causal commonsense performance in [[Question Answering]] systems.

    **Temporal Reasoning Component**: Manages event ordering, duration, simultaneity, temporal reference resolution, and persistence (the frame problem). Evaluated by TimeQA and temporal commonsense benchmarks. Script-based knowledge (Schank and Abelson, 1977) organises stereotyped event sequences — the "restaurant script" encodes the canonical ordering of arrival, ordering, eating, and payment — providing a structured representation of temporal commonsense expectations. [[Transformer Architecture]]-based models with large context windows handle some temporal reasoning through attention over long token sequences, but struggle with precise duration estimation and event persistence tracking.

    **Spatial Reasoning Component**: Encodes topological and metric spatial relations between objects and locations, essential for [[Robotics]] and [[Embodied AI]] task planning. Qualitative spatial reasoning formalisms (RCC8 region connection calculus) provide symbolic representations; neural approaches learn spatial relations from vision-language training data. Spatial commonsense is evaluated by benchmarks including SpartQA (spatial question answering) and by robotic manipulation tasks requiring precise spatial planning.

    **Knowledge Graph Augmentation**: Runtime retrieval from [[ConceptNet]], ATOMIC, or Wikidata to supply structured commonsense facts as context to a base [[Large Language Models]] during inference, implemented via [[Retrieval-Augmented Generation]]. Neurosymbolic visual reasoning surveys (Khan et al., 2025) document that infusing common-sense knowledge through heterogeneous knowledge graphs improves accuracy, expressiveness, and intuitive downstream reasoning across vision-language tasks. ConceptNet-augmented RAG pipelines demonstrably improve performance on [[CommonsenseQA]] relative to parametric-only LLM baselines.

    **[[Chain-of-Thought Prompting]]**: Eliciting step-by-step reasoning traces from [[Large Language Models]] to surface implicit commonsense inference chains and improve reliability on multi-step problems. Wei et al. (2022) demonstrated substantial commonsense reasoning improvements from chain-of-thought prompting across multiple benchmarks; the mechanism is believed to work by externalising intermediate reasoning steps that would otherwise be compressed into a single forward pass. Tree-of-thought and graph-of-thought extensions further structure the reasoning process. [[Fine Tuning]] on chain-of-thought reasoning traces from stronger models improves commonsense performance on weaker models through [[Transfer Learning]].

    **Neuro-Symbolic Hybrid Layer**: A symbolic reasoning engine (theorem prover, constraint solver, Datalog engine, or answer-set programming system) operating over neural-encoded propositions, as in the REASON framework (2025) or NeuroSymbolic Concept Learner. Integrative approaches embed symbolic reasoning within the neural network; hybrid approaches maintain a separate symbolic solver alongside the neural component. The REASON framework specifically combines neural approximate inference with probabilistic logic programming for scalable common-sense inference chains. The 2025 neuro-symbolic AI survey (PMC/NIH) explicitly frames neurosymbolic integration as an antithesis to pure scaling laws, arguing that architectural hybridisation rather than data and parameter scaling is the correct path to robust common sense.

    **[[RLHF]] and Alignment Signal**: Reinforcement learning from human feedback provides a training signal grounded in human common-sense judgements about helpfulness, harmlessness, and honesty. Since human evaluators naturally apply commonsense norms when rating AI outputs, RLHF implicitly penalises physically implausible, temporally inconsistent, or socially incoherent generations, acting as a weak but broad common-sense alignment mechanism. [[Constitutional AI]] (Anthropic, 2022) extends this by encoding common-sense-grounded principles as explicit constraints that the model applies to its own outputs through self-critique.

  ## Evaluation Benchmarks (Selected)

    Commonsense reasoning evaluation is particularly challenging because commonsense knowledge is so vast and contextually variable that no single benchmark can comprehensively measure it. The field has converged on a family of targeted benchmarks, each probing a distinct knowledge dimension:

    - **HellaSwag** (Zellers et al., 2019): Activity-completion prediction over 70,000 examples derived from ActivityNet Captions and WikiHow. Distractors are generated adversarially to be grammatically plausible but physically implausible, so that models scoring well cannot rely on surface-level language statistics. Frontier LLMs now exceed 95% accuracy on the standard split; adversarial hard variants remain challenging and are used in ongoing evaluation.
    - **WinoGrande** (Sakaguchi et al., 2021): 44,000 Winograd-style pronoun coreference problems requiring commonsense disambiguation. The correct antecedent of a pronoun can only be determined by applying commonsense knowledge about typical agent goals, physical capabilities, or social roles — not by syntactic or distributional cues. The dataset was constructed using adversarial filtering to remove items solvable by statistical shortcuts.
    - **CommonsenseQA** (Talmor et al., 2019): 12,247 multiple-choice questions derived from [[ConceptNet]] relationships, requiring multi-hop commonsense inference. Questions are generated by crowdworkers who are shown a concept and three related concepts, then asked to write a question whose answer is one of the three but not the others — requiring commonsense knowledge of the concept graph structure.
    - **PIQA** (Bisk et al., 2020): 20,000 multiple-choice physical-intuition questions about everyday physical actions and their correct procedures, testing whether models understand material properties, forces, and object affordances. Example: "How do you make a bed? (a) Pull sheets over mattress and tuck in corners vs. (b) Pull sheets under mattress and leave edges loose."
    - **Social IQa** (Sap et al., 2019): 37,588 multiple-choice questions about social interactions, motivations, and emotional reactions, targeting the folk psychology dimension of commonsense. Questions ask about the emotional reactions, motivations, or likely post-event actions of characters in described social situations.
    - **VisualCOMET** (Park et al., 2020): Visual commonsense inference benchmark requiring systems to reason about the dynamic context of still images — what happened before the depicted moment, what will happen after, and what the depicted characters are intending. Extends ATOMIC-style temporal and intentional inference to the visual domain.
    - **Logical-CommonsenseQA** (2026): Combines atomic commonsense answers under AND/OR/NEITHER logical operators, testing whether models can compositionally integrate commonsense knowledge with propositional logical structure. Represents the current frontier of benchmark difficulty, targeting a capability gap not addressed by prior multiple-choice benchmarks.
    - **BrainBench** (2026): A systematic taxonomy of commonsense failure modes in frontier LLMs, categorising spatial, temporal, causal, and social failure patterns and providing a structured evaluation framework for identifying specific knowledge dimensions where models fall short. Published as arXiv:2603.14761.

  ## Use Cases / Major Families

    **Dialogue Systems and [[Conversational AI]]**: Chatbots and virtual assistants require commonsense to interpret indirect speech acts, resolve ambiguous references across conversation turns, understand implied goals from partial information, and generate contextually appropriate responses that satisfy conversational maxims (Grice, 1975). Without commonsense, systems produce literally correct but pragmatically absurd responses — for instance, misinterpreting "can you open the window?" as a question about physical capability rather than a request. [[Conversational AI]] systems including ChatGPT, Claude, and Gemini rely heavily on implicitly learned commonsense for response coherence, while their documented failure modes on adversarial commonsense probes motivate hybrid knowledge-graph-augmented approaches in high-stakes deployments.

    **Reading Comprehension and [[Question Answering]]**: Open-domain [[Question Answering]] over documents requires inferring unstated world-knowledge connections between question and answer passage, going beyond text-surface retrieval to genuine [[Natural Language Understanding]]. Questions like "What would happen if you put a glass of water in a freezer for an hour?" require [[Naive Physics]] knowledge about phase transitions that may not be stated in any retrieved document. [[Retrieval-Augmented Generation]] pipelines grounding LLM inference in a structured [[Knowledge Graph]] (ConceptNet-augmented RAG) improve commonsense [[Question Answering]] accuracy relative to parametric-only baselines.

    **Robot Task Planning and [[Embodied AI]]**: [[Embodied AI]] systems operating in physical environments must reason about the current state of the world, predict the effects of actions, detect physical and spatial constraints, and replan when unexpected events occur. This requires [[Naive Physics]], [[Spatial Reasoning]], and [[Causal Reasoning]] operating jointly across perception and action. [[Embodied AI]] platforms such as AI2-THOR, Habitat, and RoboAgent provide simulation environments for acquiring physical commonsense through interaction. Mobile service robots must interpret commands in human-centred environments, addressing the lack of embodied commonsense and awareness of physical constraints as a core design challenge (MDPI Robotics, 2025).

    **Medical and Clinical NLP**: Clinical NLP systems must infer unstated but medically commonsense implications — a patient who is unconscious cannot consent; a drug contraindicated for kidney disease should not be prescribed to a patient with documented renal failure; a symptom onset before treatment rules out treatment as a cause. These inferences require [[Causal Reasoning]], temporal ordering, and domain-specific commonsense that may not be explicitly stated in clinical notes. Commonsense failures in medical AI contribute to [[Hallucination]] in clinical decision support, with documented safety implications in medical literature triage and EHR-based recommendation systems.

    **Autonomous Driving**: Safe navigation requires predicting the behaviour of pedestrians, cyclists, and other drivers based on social norms, traffic conventions, and environmental context. Commonsense rules — "pedestrians crossing a road have right of way," "a ball rolling into the road often precedes a child following it," "at a roundabout, traffic already on the roundabout has priority" — govern safe behaviour in ambiguous situations not fully specified by formal traffic law. [[Embodied AI]] approaches such as those pursued by Wayve (London) model road scene commonsense through end-to-end learning from human driving demonstrations, implicitly acquiring social and physical commonsense from observed behaviour.

    **[[AI Safety]] and [[AI Alignment]]**: Systems lacking common sense may comply with the letter of a request while violating its spirit, producing unsafe outcomes obvious to any reasonable human observer. A system asked to "maximise paperclip production" that lacks commonsense about the value of human life exemplifies the alignment problem in its most dramatic form. More practically, LLMs that generate physically impossible medical dosage instructions, recommend walking to a car wash rather than driving, or fail to recognise that an unconscious patient cannot provide consent are commonsense-deficient in ways that create liability and safety risk. [[Constitutional AI]] principles (Anthropic, 2022) implicitly encode commonsense norms about harmlessness and honesty; the UK AI Safety Institute has identified commonsense reasoning failures as a distinct category of unsafe frontier model behaviour requiring evaluation protocols.

    **[[Visual Question Answering]] and Multimodal Reasoning**: VQA systems asked "Can the person in the image reach the top shelf?" must combine visual size estimation with [[Naive Physics]] about body mechanics and common-sense knowledge about typical household environments. [[Multi-Modal Learning]] models trained on image-text pairs acquire partial visual commonsense, but remain vulnerable on novel object configurations, unusual spatial arrangements, and questions requiring multi-step physical reasoning about depicted scenes. Multimodal commonsense benchmarks (VisualCOMET, WinoGround) probe these failure modes.

  ## Academic Context

    The intellectual lineage of common sense reasoning begins with McCarthy's 1959 paper "Programs with Common Sense" and the subsequent frame problem (McCarthy and Hayes, 1969). Minsky's frame theory (1974) proposed structured representations of typical scenarios called frames — organised sets of slots representing attributes of prototypical objects or situations, with default values that apply unless contradicted by specific knowledge. Scripts (Schank and Abelson, 1977) encoded stereotyped event sequences — the restaurant script, the birthday party script, the job interview script — as structured representations of what typically happens in standard situations, enabling commonsense inference about what is likely to occur next and what has implicitly already occurred. Hayes's naive physics manifesto (1978) launched a systematic programme for formally encoding physical commonsense knowledge, decomposing the problem into sub-domains including the shape of objects, histories, states of matter, measurement, and space. Reiter (1980) provided the formal basis for [[Default Logic]] as a framework for reasoning with defaults that can be overridden by exceptions — the formal counterpart of human common-sense reasoning's defeasible character. Lenat's Cyc project (1984) pursued exhaustive symbolic knowledge engineering at scale for four decades, ultimately accumulating 25 million rules and 1.5 million concepts by the time of Lenat's death in August 2023.

    The first generation of connectionist approaches (1980s–1990s) largely ignored commonsense in favour of perceptual tasks including handwritten digit recognition, speech recognition, and image classification, leaving the symbolic-neural integration problem unresolved. Rumelhart and McClelland's parallel distributed processing (PDP) framework implicitly encoded some semantic relations through pattern activation, but lacked the structured representation needed for explicit commonsense inference. The distributional semantics revolution (word2vec, Mikolov et al., 2013; GloVe, Pennington et al., 2014) showed that word embeddings implicitly encode some semantic and analogical relations (king − man + woman ≈ queen), but not causal or temporal commonsense beyond simple association. The [[Transformer Architecture]] era — beginning with Vaswani et al. (2017) and accelerating with BERT (Devlin et al., 2019) and GPT-2/3 (Radford et al., 2019; Brown et al., 2020) — produced systems scoring above 80% on early commonsense benchmarks through large-scale pattern learning over Common Crawl and WebText. This prompted the adversarial benchmark development cycle: HellaSwag (2019), WinoGrande (2021), Social IQa (2019), PIQA (2020), CommonsenseQA (2019), all designed to resist surface-pattern exploitation through adversarial filtering, leaving a performance gap that requires genuine commonsense reasoning.

    The neurosymbolic reconciliation phase (2020–present) has produced several distinct research lines. The knowledge-augmented LLM line — exemplified by COMET (Bosselut et al., 2019), COMET-ATOMIC20 (Hwang et al., 2021), and GPT-3 with ATOMIC-augmented prompts — augments neural language models with structured commonsense knowledge retrieved at inference time. The multi-task commonsense learning line — exemplified by UnifiedQA, UNICORN on RAINBOW (Lourie et al., 2021), and T5-based multi-task models — trains a single model across multiple commonsense benchmarks to learn a shared commonsense representation. The grounding-through-simulation line — exemplified by [[Embodied AI]] work at MIT (Thor simulator, iGibson), CMU (Habitat, PyBullet manipulation), Stanford (RoboSuite, VirtualHome), and Google DeepMind (SpatioTemporal Graphs, Waypoint Navigation) — attempts to acquire physical commonsense through virtual or real physical interaction rather than text statistics. The neurosymbolic inference line — exemplified by the REASON framework (2025), NeuroSymbolic Concept Learner, and Scallop (a probabilistic Datalog engine with neural perception) — integrates symbolic reasoning engines with neural representations to produce traceable commonsense inference chains. The adversarial evaluation methodology line — exemplified by Bender et al. (2021), Marcus and Davis (2022), and Talmor et al. (2025) "Towards a Litmus Test for Common Sense" — pushes toward evaluation protocols that can reliably distinguish genuine commonsense acquisition from benchmark-specific memorisation, using compositional generalisation tests, counterfactual probes, and systematic surface-form variation as discriminating tools.

    The Allen Institute for Artificial Intelligence (AI2, Seattle) has been the most prolific producer of commonsense benchmarks and knowledge resources, including ATOMIC, ATOMIC-2020, Social IQa, WinoGrande, PIQA, CommonGen (commonsense story generation), VisualCOMET (visual commonsense inference), and the RAINBOW benchmark suite. AI2's Mosaic project specifically focuses on large-scale commonsense understanding. MIT Media Lab and the MIT Computational Psycholinguistics Lab produced [[ConceptNet]] and continue to maintain it as an open community resource. Stanford's Human-Centered AI Institute (HAI), CMU's Language Technologies Institute (LTI), the University of Washington's NLP group, and NYU's Centre for Data Science maintain major research programmes on commonsense in language and embodied settings. A US–UK Multidisciplinary University Research Initiative (MURI) collaboration on visual commonsense reasoning includes teams from the Universities of Birmingham, Glasgow, Leeds, and Oxford, demonstrating the international collaborative nature of the research frontier and the UK's substantive participation in it. The 2025 neurosymbolic AI survey published in PMC/NIH (framing neurosymbolic AI as an antithesis to scaling laws) represents the most comprehensive recent synthesis of the field, identifying the integrative and hybrid architectural patterns as the two dominant neurosymbolic paradigms and documenting their consistent outperformance of monolithic LLMs on complex reasoning chains.

  ## Current Landscape (2026)

    By mid-2026, the major frontier [[Large Language Models]] — GPT-4 successors, Gemini Ultra successors, Claude 3 successors, and open models including Qwen3 — achieve near-human performance on established commonsense benchmarks including [[HellaSwag]], [[CommonsenseQA]], and [[WinoGrande]] under standard evaluation conditions, but continue to fail systematically on adversarial probes and novel physical scenarios not well represented in training distributions. The 2025 AI benchmark landscape shows multiple commonsense tests in active use as part of standard LLM evaluation suites, alongside harder reasoning benchmarks (GPQA, AIME) that reflect the field's shift toward more demanding evaluation.

    The dominant research trend is hybridisation: LLMs are increasingly augmented with structured commonsense [[Knowledge Graph]]s (ConceptNet, ATOMIC-2020, Wikidata) via [[Retrieval-Augmented Generation]] to ground inference in explicit knowledge rather than purely parametric recall. [[Chain-of-Thought Prompting]] substantially improves commonsense performance by externalising implicit reasoning steps, with tree-of-thought and graph-of-thought extensions further structuring the reasoning process. [[Neurosymbolic AI]] approaches — combining neural LLMs with symbolic commonsense reasoners or [[Description Logic]] engines — have seen renewed interest, with the 2025 PMC/NIH survey explicitly framing neurosymbolic AI as an antithesis to scaling laws.

    [[Embodied AI]] has emerged as the most promising pathway to robust commonsense acquisition, with NVIDIA's Cosmos-Reason1 (2025) representing the leading multimodal embodied commonsense pre-training effort. Amazon's deployment of neurosymbolic techniques in its Vulcan warehouse robots and Rufus shopping assistant (2025) represents one of the first large-scale industrial applications of neurosymbolic common-sense integration, demonstrating commercial viability beyond research settings.

    The [[AI Alignment]] connection has sharpened: frontier AI safety researchers now treat commonsense as a prerequisite for value alignment. [[Constitutional AI]] approaches rely on commonsense norms encoded as principles; [[RLHF]] training signal reflects human judgements grounded in commonsense expectations. Legal and regulatory scrutiny of AI-generated [[Hallucination]] — driven by liability cases in medical AI, legal AI, and automated customer service — has increased the practical stakes of commonsense failures. LLM hallucination rates as high as 10–20% on commonsense-demanding tasks (Lakera, 2026) are cited as a key blocker for regulated-sector deployment.

  ## UK Context

    UK academic institutions have been significant contributors to common sense reasoning research across both the symbolic and neural traditions. The University of Edinburgh's Institute for Language, Cognition and Computation (ILCC), through researchers including Vaishak Belle, has contributed to statistical relational learning and neuro-symbolic approaches that address commonsense inference under uncertainty. Edinburgh's participation in the US–UK MURI on visual commonsense reasoning directly links Scottish academic expertise to frontier multimodal commonsense research.

    Tony Cohn and Brandon Bennett at the University of Leeds have contributed foundational work on qualitative spatial reasoning (QSR) and the Region Connection Calculus (RCC8), providing formal tools for encoding spatial commonsense that are used in [[Robotics]] and geographical information systems. Antonis Bikakis at University College London (UCL) has worked on commonsense reasoning in multi-agent systems and incomplete information contexts. Oxford's Future of Humanity Institute (now the Existential Risk Initiative) and the affiliated Centre for the Governance of AI have framed commonsense understanding as a component of [[AI Safety]], arguing that systems lacking common sense pose systematic misalignment risks in autonomous operation.

    The University of Sheffield's Natural Language Processing group, founded by Yorick Wilks — a pioneer of commonsense-driven NLP and preference semantics — maintains a long tradition of work on implicit meaning, presupposition, and background knowledge in language, directly relevant to commonsense reasoning in [[Natural Language Understanding]]. The University of Manchester's School of Computer Science hosts Description Logic and OWL ontology research (Ian Horrocks, Carole Goble) that provides foundational tools for formalising commonsense knowledge in [[Ontology|ontologies]], with applications in biomedical NLP where implicit medical commonsense is operationally critical.

    Industrial AI research in the UK relevant to commonsense includes DeepMind (London), whose work on agent environments (DMLab, XLand, AlphaCode) has produced insights into commonsense acquisition through environmental interaction. Wayve (London) addresses the commonsense challenge specifically in autonomous driving — predicting road scene behaviour based on social norms and physical commonsense without exhaustive rule encoding. Arm AI Research (Cambridge) contributes to edge-AI commonsense capabilities for embedded systems. The UK AI Safety Institute (AISI, established 2023) has included commonsense understanding in its frontier model evaluation framework, recognising that failures of commonsense reasoning constitute a class of safety-relevant failure modes distinct from capability elicitation failures.

    Northern English universities — Leeds, Sheffield, Manchester, Newcastle — contribute through computational linguistics, cognitive science, and digital humanities research. The University of Manchester's Turing Building hosts researchers working on ontological [[Knowledge Representation]] of commonsense knowledge applied to biomedical and scientific NLP. The UKRI EPSRC has funded commonsense-related research through its Trustworthy Autonomous Systems and Responsible AI priorities, with several grants addressing the safe deployment of NLP systems in healthcare and public services that depend on commonsense reasoning robustness.

  ## Formal Foundations and Inference Mechanisms

    Commonsense reasoning employs a distinctive set of inference mechanisms that differ fundamentally from classical deductive reasoning. Understanding these mechanisms is essential for designing AI systems that can approximate human commonsense performance:

    **Default Reasoning**: The most characteristic commonsense inference pattern. Defaults take the form "Normally, X; unless there is evidence to the contrary." Formal frameworks include [[Default Logic]] (Reiter, 1980), circumscription (McCarthy, 1980), and answer-set programming. All three frameworks handle defeasibility formally but struggle with scalability to large knowledge bases — a key motivation for neural approximation approaches. The REASON framework (2025) addresses scalability through probabilistic logic programming with neural scoring of hypothesis plausibility.

    **Abductive Inference**: Given an observation, infer the most plausible explanation among competing hypotheses. Abduction is central to story understanding (why did Jane go to the kitchen?), diagnostic reasoning (what caused this symptom?), and discourse interpretation (what implicit event connects these two sentences?). Abduction is implemented using probabilistic inference over explanation hypotheses, sometimes combined with neural scoring of explanatory coherence from pretrained [[Large Language Models]].

    **Analogical Reasoning**: Apply structural mappings from familiar situations to novel ones, transferring commonsense expectations from known scenarios to structurally similar new ones. Structure-mapping theory (Gentner, 1983) provides the cognitive science basis. Neural architectures that learn relational graph patterns — rather than surface features — are better positioned for analogical commonsense reasoning than purely distributional models.

    **Script-Based Inference**: Sequences of prototypical event frames (scripts, Schank 1977) allow prediction of likely next actions and inference about implicit preconditions and postconditions. Going to a restaurant involves: entering, being seated, consulting a menu, ordering, eating, paying, leaving — each step with its own preconditions, participants, and typical objects. Schema-based systems automatically infer that a diner at a restaurant probably has a menu, ordered food, and will receive a bill, without these facts being stated. The ATOMIC knowledge graph encodes script-like if-then knowledge across nine social and causal relation types.

    **Causal Inference**: Directional reasoning about causes and effects in everyday scenarios, including forward prediction, backward counterfactual inference, and interventional reasoning. Pearl's do-calculus (2000) provides the formal framework; [[Causal Reasoning]] is distinct from pure correlation detection and is evaluated by benchmarks designed to distinguish causal from associative commonsense claims. [[Retrieval-Augmented Generation]] over causal knowledge graphs (ATOMIC's xReason, xEffect, xWant relations) improves causal commonsense performance in [[Question Answering]] systems relative to purely parametric LLM baselines.

    **Probabilistic Pragmatic Inference**: Drawing inferences from what a speaker chose to say based on Gricean cooperative conversational maxims — quantity (say enough but not too much), quality (be truthful), relation (be relevant), and manner (be clear). A sentence like "Some students passed the exam" pragmatically implicates that not all students passed, even though it is semantically consistent with all students passing. Pragmatic inference requires both semantic knowledge and commonsense knowledge about social communication context, and is evaluated by tasks involving scalar implicatures, presupposition accommodation, and indirect speech act interpretation.

  ## Future Directions (2026–2030)

    The central open problem — how to give AI systems genuinely robust common sense reasoning rather than pattern matching that mimics commonsense on benchmarks — is unlikely to be solved by scaling alone. Six research directions appear most promising:

    1. **Embodied commonsense pre-training**: Training on video of human physical activity combined with physics simulation will supply the causal ground truth absent from text, moving toward models that genuinely understand why objects behave as they do. NVIDIA's Cosmos-Reason1 (2025) and the broader VLA (vision-language-action) model research direction represent the leading edge. Integration of differentiable physics engines with language models — allowing the language model to query a physics simulator rather than rely on textual descriptions of physics — is likely to become standard practice for naive physics tasks. The [[Embodied AI]] platform ecosystem (AI2-THOR, Habitat 3.0, Isaac Sim) provides the simulation infrastructure for scaling embodied commonsense training.

    2. **Compositional neurosymbolic architectures**: Tighter integration of neural perception and representation with symbolic reasoning engines (SAT solvers, Prolog, probabilistic graphical models, answer-set programming) will enable commonsense inference chains that are transparent, auditable, and formally verified — critical for [[AI Safety]] applications. The REASON framework (2025) and the broader [[Neurosymbolic AI]] research programme represent the current frontier. [[Description Logic]] reasoners applied to commonsense ontologies will provide formal consistency guarantees, enabling detection of physically impossible or temporally inconsistent claims before they are presented to users.

    3. **Social commonsense and cultural variation**: Current benchmarks are predominantly English-language and culturally Western. Future work will address cross-cultural commonsense variation — different social norms, causal expectations, and naïve theories of the physical world across cultures — requiring multilingual, multicultural commonsense [[Knowledge Graph]]s and evaluation benchmarks. The ConceptNet multilingual extension (over 100 languages) is a starting point, but cultural commonsense beyond language is largely un-formalised; ethnographic and cross-cultural cognitive science data will need integration into next-generation knowledge resources.

    4. **Commonsense-grounded alignment**: [[RLHF]] and [[Constitutional AI]] will increasingly incorporate explicit commonsense knowledge graphs as structural priors, enabling alignment training to directly target specific commonsense sub-faculties (naive physics, [[Theory of Mind]], social norm compliance) that generate safety-relevant failure modes, rather than relying on implicit commonsense signal from human raters who may have blind spots in specific knowledge dimensions.

    5. **Dynamic, executable [[World Model]]s**: [[Large Language Models]] augmented with continuously updated, executable world models — queryable simulators of physical and social dynamics — will enable real-time commonsense validation of generated claims against physical and social constraints, reducing [[Hallucination]] rates in knowledge-intensive applications. The connection between world models and commonsense is central to Yann LeCun's energy-based world model architecture proposal, which argues that world models are the missing component for human-level AI.

    6. **Adversarial commonsense evaluation maturation**: As standard benchmarks approach saturation, evaluation will shift toward adversarially generated probes that systematically vary surface form while preserving commonsense structure, requiring genuine generalisation rather than surface-pattern interpolation. The Logical-CommonsenseQA (2026) benchmark — pairing atomic answers under AND/OR/NEITHER logical operators to test compositional integration of commonsense with logical structure — represents this direction. Automated benchmark generation pipelines using LLMs to generate novel commonsense scenarios with human validation will accelerate the adversarial evaluation cycle.

  ## Key Terminology

    - **Naive Physics**: The implicit, pre-theoretical knowledge about the physical world that humans acquire through everyday embodied experience — solidity, gravity, rigidity, fluid dynamics — without formal instruction. Contrasts with Newtonian or quantum physics. Formalised in Hayes's 1978 naive physics manifesto as a target for AI knowledge engineering.
    - **Theory of Mind**: The capacity to attribute mental states (beliefs, desires, intentions, knowledge, emotions) to other agents and to recognise that their mental states may differ from one's own and from reality. Essential for social cognition and pragmatic [[Natural Language Understanding]]. Evaluated by false-belief tasks and the Social IQa benchmark.
    - **Frame Problem**: The challenge in formal AI of representing what remains unchanged when an action is performed, without enumerating every possible unchanged fact. First formalised by McCarthy and Hayes (1969). A core difficulty in knowledge-based commonsense systems and the motivation for non-monotonic reasoning frameworks.
    - **[[Default Logic]]**: Reiter's (1980) formal framework for defeasible reasoning, using defaults of the form "if A and not known not-B, then conclude C." Provides the formal basis for reasoning from commonsense defaults that can be overridden by exceptional information.
    - **[[Non-Monotonic Reasoning]]**: A class of formal reasoning frameworks in which conclusions may be retracted as new information is added, in contrast to classical monotonic logic where adding axioms can only increase the set of consequences. Circumscription (McCarthy, 1980) and default logic are the main frameworks.
    - **Winograd Schema Challenge**: A test of commonsense pronoun resolution in which the correct antecedent of a pronoun requires commonsense knowledge about typical object behaviour or agent goals to determine, resisting purely syntactic resolution. [[WinoGrande]] scales this to 44,000 adversarially curated instances.
    - **[[HellaSwag]]**: A benchmark for activity-completion prediction (Zellers et al., 2019) using adversarially generated implausible continuations, designed so that plausible-sounding distractors are ruled out only by commonsense physical reasoning. Frontier LLMs now exceed 95% accuracy; adversarial variants remain challenging.
    - **ATOMIC**: The Atlas of Machine Commonsense for If-Then Reasoning (Sap et al., 2019); a large-scale commonsense knowledge graph of 880,000 if-then social causal tuples across nine relation types, from the Allen Institute for AI. Extended by ATOMIC-2020 (Hwang et al., 2021).
    - **[[ConceptNet]]**: A large multilingual commonsense [[Knowledge Graph]] linking concepts via typed semantic relations (IsA, UsedFor, HasProperty, PartOf, Causes, etc.), originating at MIT Media Lab and maintained as an open resource (Speer et al., 2017). Over 1.6 million assertions in more than 100 languages.
    - **[[Neurosymbolic AI]]**: An approach combining neural networks (for perception, representation, and approximate inference) with symbolic systems (for structured reasoning, constraint satisfaction, and [[Knowledge Representation]]) to overcome the limitations of each paradigm alone, particularly for commonsense and logical reasoning tasks.
    - **[[Grounding]]**: The process of connecting symbolic or linguistic representations to physical world referents — objects, actions, spatial relations, causal events — through perception, simulation, or direct interaction. Considered essential for robust commonsense acquisition that generalises beyond training distribution.
    - **[[World Model]]**: An internal representation of the environment's state, dynamics, and causal structure that an agent uses to plan, predict, and reason counterfactually. Proposed by Yann LeCun as the central architectural component needed for human-level commonsense in AI agents.
    - **[[Chain-of-Thought Prompting]]**: A prompting technique in which [[Large Language Models]] are guided to generate explicit intermediate reasoning steps before producing a final answer, substantially improving performance on multi-step commonsense reasoning tasks (Wei et al., 2022).
    - **[[Hallucination]]**: The generation by an AI system of factually incorrect, physically impossible, or socially incoherent statements produced with apparent confidence, often resulting from commonsense reasoning failures. Studies in 2026 report hallucination rates of 10–20% on commonsense-demanding tasks for leading LLMs.
    - **PIQA (Physical Intuition QA)**: A commonsense benchmark (Bisk et al., 2020) focused on [[Naive Physics]], testing ability to select the physically correct procedure for achieving a goal, requiring understanding of material properties, forces, and object affordances.
    - **[[RLHF]]**: Reinforcement Learning from Human Feedback; a training paradigm in which a language model is fine-tuned using rewards from human preference judgements. Implicitly grounds commonsense norms in the model through human evaluator common-sense expectations about helpful and harmless outputs.
    - **[[CommonsenseQA]]**: A multiple-choice question-answering benchmark (Talmor et al., 2019) with 12,247 questions derived from ConceptNet that require multi-hop commonsense inference over conceptual relationships, testing whether models can combine multiple background knowledge facts to answer correctly.
    - **[[WinoGrande]]**: A large-scale adversarial Winograd Schema Challenge with 44,000 pronoun disambiguation problems (Sakaguchi et al., 2021). The correct referent of a pronoun can only be determined using commonsense knowledge about agent goals, physical capabilities, or social roles, resisting purely syntactic or distributional resolution.
    - **[[Semantic Network]]**: A graph-based knowledge representation formalism in which concepts are represented as nodes and semantic relationships (such as IsA, HasProperty, PartOf) as typed edges. ConceptNet is the most widely used commonsense semantic network; WordNet is the most widely used lexical semantic network.
    - **Script (AI)**: A schematic knowledge structure (Schank and Abelson, 1977) encoding a prototypical sequence of events for a recurring situation type — such as the restaurant script, medical appointment script, or job interview script. Scripts enable commonsense inference about typical event progressions, default participants, and likely next actions in stereotyped scenarios.
    - **[[Transfer Learning]]**: The paradigm of pre-training a neural model on large general-purpose data and then fine-tuning on a specific downstream task. Central to modern commonsense reasoning systems: large language model pre-training provides implicit commonsense, and task-specific fine-tuning on commonsense benchmarks or knowledge-graph data adapts it to particular inference dimensions.
    - **[[Frame Semantics]]**: A linguistic and cognitive theory (Fillmore, 1976) that describes lexical meaning in terms of conceptual frames — organised structures of background knowledge that are evoked when language is used. In AI, frames provide a structured representation of commonsense background knowledge about typical situations, their participants, and their properties.

  ## Failure Modes and Open Problems
    Despite substantial benchmark progress, common sense reasoning in AI systems exhibits characteristic failure modes that expose the gap between statistical language competence and genuine world knowledge. Documenting these failure modes is essential for building systems robust enough for real-world deployment in safety-critical and regulated domains.

    **Adversarial rephrasing brittleness**: LLMs achieving near-human scores on standard commonsense benchmarks often fail dramatically when the same logical scenario is rephrased using different surface vocabulary, negation, or syntactic structure. This brittleness to adversarial rephrasing — documented extensively in the WinoGrande adversarial filtering methodology — is a diagnostic signature of statistical commonsense approximation rather than genuine physical understanding. A model that correctly identifies that a heavy suitcase needs two hands to lift may fail the logically equivalent reformulation "what property of the suitcase makes it difficult to carry with one hand?" if the reformulation departs from training-text patterns.

    **Compositional generalisation failure**: Current LLMs struggle to compose multiple commonsense facts into novel inference chains not represented in training data. The combinatorial explosion of possible commonsense compositions means training data cannot cover all relevant chains, requiring genuine compositional generalisation. ProntoQA, ProofWriter, and FOLIO benchmarks specifically test compositional deductive reasoning and reveal that LLMs frequently fail on chains of three or more steps even when they correctly handle each step individually.

    **Counterfactual reasoning failures**: Commonsense reasoning requires reasoning about hypothetical and counterfactual scenarios, not just predicting what typically happens. LLMs frequently default to factual world descriptions rather than correctly engaging with counterfactual premises, producing internally inconsistent responses that mix factual and hypothetical knowledge. Counterfactual commonsense benchmarks (CLiC, counterfactual NLI) document this systematically.

    **Inverse scaling**: Some commonsense sub-tasks show inverse scaling — larger LLMs perform worse than smaller ones on adversarially constructed benchmarks — because larger models become better at exploiting spurious statistical associations present in the benchmark that correlate with incorrect answers. Documented in BIG-Bench and cited as evidence that raw scale is insufficient for robust commonsense.

    **Hallucinated physical plausibility**: LLMs trained primarily on text develop fluent-sounding descriptions of physical processes that may be physically impossible, because the statistical regularities of physical descriptions in text are driven by topic associations rather than physical law. Systems that cannot ground language in physical simulation cannot reliably distinguish physically possible from plausible-sounding but impossible descriptions.

    **Cultural and demographic boundary failures**: Commonsense knowledge is culturally situated: social norms, causal expectations, typical object behaviour, and appropriate responses to situations vary systematically across cultures, languages, and demographic groups. LLMs trained predominantly on English web text encode dominant-culture commonsense as if it were universal, producing systematic failures on minority culture norms, non-Western social conventions, and contexts where commonsense rules differ from majority-culture expectations over-represented in training data. This is both an accuracy failure and an equity concern requiring explicit multicultural commonsense knowledge engineering and evaluation methodology to address systematically.

    **Temporal and persistent state tracking failures**: The frame problem — representing which facts persist unchanged through actions — remains unsolved at scale. LLMs frequently lose track of changes to world state across a multi-step narrative, asserting facts that were changed by an earlier described action as if they still held. This failure mode is particularly consequential for [[Planning]] systems and for clinical NLP where the temporal ordering of medical events determines their causal interpretation.

  ## Research & Literature

    1. McCarthy, J. (1958). Programs with Common Sense. Proceedings of the Teddington Conference on the Mechanisation of Thought Processes.
    2. McCarthy, J. and Hayes, P. J. (1969). Some Philosophical Problems from the Standpoint of Artificial Intelligence. Machine Intelligence 4. Edinburgh University Press.
    3. Minsky, M. (1974). A Framework for Representing Knowledge. MIT AI Lab Memo 306.
    4. Hayes, P. J. (1978). The Naive Physics Manifesto. In D. Michie (Ed.), Expert Systems in the Micro-Electronic Age. Edinburgh University Press.
    5. Reiter, R. (1980). A Logic for Default Reasoning. Artificial Intelligence 13(1–2):81–132.
    6. Schank, R. and Abelson, R. (1977). Scripts, Plans, Goals and Understanding. Lawrence Erlbaum.
    7. Lenat, D. (1984). CYC: Using Common Sense Knowledge to Overcome Brittleness and Knowledge Acquisition Bottlenecks. AI Magazine 6(4).
    8. Lenat, D. and Guha, R.V. (1990). Building Large Knowledge-Based Systems: Representation and Inference in the CYC Project. Addison-Wesley.
    9. Miller, G.A. (1995). WordNet: A Lexical Database for English. Communications of the ACM 38(11):39–41.
    10. Liu, H. and Singh, P. (2004). ConceptNet: A Practical Commonsense Reasoning Toolkit. BT Technology Journal 22(4):211–226.
    11. Speer, R. et al. (2017). ConceptNet 5.5: An Open Multilingual Graph of General Knowledge. AAAI 2017.
    12. Vaswani, A. et al. (2017). Attention is All You Need. NeurIPS 2017. https://arxiv.org/abs/1706.03762
    13. Devlin, J. et al. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. NAACL 2019. https://arxiv.org/abs/1810.04805
    14. Bosselut, A. et al. (2019). COMET: Commonsense Transformers for Automatic Knowledge Graph Construction. ACL 2019. https://arxiv.org/abs/1906.05317
    15. Sap, M. et al. (2019). ATOMIC: An Atlas of Machine Commonsense for If-Then Reasoning. AAAI 2019. https://arxiv.org/abs/1811.00146
    16. Talmor, A. et al. (2019). CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge. NAACL 2019. https://arxiv.org/abs/1811.00937
    17. Zellers, R. et al. (2019). HellaSwag: Can a Machine Really Finish Your Sentence? ACL 2019. https://arxiv.org/abs/1905.07830
    18. Bisk, Y. et al. (2020). PIQA: Reasoning about Physical Commonsense in Natural Language. AAAI 2020. https://arxiv.org/abs/1911.11641
    19. Brown, T. et al. (2020). Language Models are Few-Shot Learners (GPT-3). NeurIPS 2020. https://arxiv.org/abs/2005.14165
    20. Sakaguchi, K. et al. (2021). WinoGrande: An Adversarial Winograd Schema Challenge at Scale. Communications of the ACM 64(9):99–106. https://arxiv.org/abs/1907.10641
    21. Hwang, J. D. et al. (2021). COMET-ATOMIC20: On Symbolic and Neural Commonsense Knowledge Graphs. AAAI 2021. https://arxiv.org/abs/2010.05953
    22. Lourie, N. et al. (2021). UNICORN on RAINBOW: A Universal Commonsense Reasoning Model on a New Multitask Benchmark. AAAI 2021. https://arxiv.org/abs/2103.13009
    23. Bender, E. et al. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? FAccT 2021.
    24. Wei, J. et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. NeurIPS 2022. https://arxiv.org/abs/2201.11903
    25. Bai, Y. et al. (2022). Constitutional AI: Harmlessness from AI Feedback. Anthropic. https://arxiv.org/abs/2212.08073
    26. Khan, M. J. et al. (2025). A Survey of Neurosymbolic Visual Reasoning with Scene Graphs and Common Sense Knowledge. AI and Neuroscience 2025. https://journals.sagepub.com/doi/10.3233/NAI-240719
    27. NVIDIA (2025). Cosmos-Reason1: From Physical Common Sense to Embodied Reasoning. arXiv:2503.15558. https://arxiv.org/abs/2503.15558
    28. PMC / NIH (2025). Neurosymbolic AI as an Antithesis to Scaling Laws. https://pmc.ncbi.nlm.nih.gov/articles/PMC12084822/
    29. Talmor, A. et al. (2025). Towards a Litmus Test for Common Sense. arXiv:2501.09913.
    30. arXiv (2025). REASON: Accelerating Probabilistic Logical Reasoning for Scalable Neuro-Symbolic Intelligence. arXiv:2601.20784.
    31. Lakera (2026). LLM Hallucinations in 2026: How to Understand and Tackle AI's Most Persistent Quirk. https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models

- ### Provenance
  - sources:: McCarthy 1959 (Teddington Conference); Liu & Singh 2004 (ConceptNet); Sap et al. 2019 (ATOMIC) https://arxiv.org/abs/1811.00146; Zellers et al. 2019 (HellaSwag) https://arxiv.org/abs/1905.07830; Talmor et al. 2019 (CommonsenseQA) https://arxiv.org/abs/1811.00937; Hwang et al. 2021 (COMET-ATOMIC20) https://arxiv.org/abs/2010.05953; NVIDIA 2025 (Cosmos-Reason1) https://arxiv.org/abs/2503.15558; PMC/NIH 2025 (Neurosymbolic AI) https://pmc.ncbi.nlm.nih.gov/articles/PMC12084822/; Khan et al. 2025 (Neurosymbolic visual reasoning survey) https://journals.sagepub.com/doi/10.3233/NAI-240719; Lakera 2026 (LLM hallucinations) https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models; Cyc Wikipedia https://en.wikipedia.org/wiki/Cyc; commonsensereasoning.org; WebSearch 2026-06-21
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
