public:: true

# Commonsense Reasoning

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:commonsense-reasoning",
  "@type": "Page",
  "title": "Commonsense Reasoning",
  "vc:slug": "commonsense-reasoning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:reasoning", "vc:label": "Reasoning"},
    {"@id": "urn:visionflow:linked:symbolic-reasoning", "vc:label": "Symbolic Reasoning"},
    {"@id": "urn:visionflow:linked:knowledge-base", "vc:label": "Knowledge Base"},
    {"@id": "urn:visionflow:linked:world-model", "vc:label": "World Model"},
    {"@id": "urn:visionflow:linked:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:linked:inference", "vc:label": "Inference"},
    {"@id": "urn:visionflow:linked:knowledge-representation", "vc:label": "Knowledge Representation"},
    {"@id": "urn:visionflow:linked:cognitive-architecture", "vc:label": "Cognitive Architecture"},
    {"@id": "urn:visionflow:linked:automated-reasoning", "vc:label": "Automated Reasoning"},
    {"@id": "urn:visionflow:linked:natural-language-understanding", "vc:label": "Natural Language Understanding"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:conceptnet", "vc:label": "ConceptNet"},
    {"@id": "urn:visionflow:linked:neural-symbolic-integration", "vc:label": "Neural-Symbolic Integration"},
    {"@id": "urn:visionflow:linked:question-answering", "vc:label": "Question Answering"},
    {"@id": "urn:visionflow:linked:transfer-learning", "vc:label": "Transfer Learning"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:hallucination", "vc:label": "Hallucination"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:planning", "vc:label": "Planning"},
    {"@id": "urn:visionflow:linked:ontology", "vc:label": "Ontology"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:foundation-model", "vc:label": "Foundation Model"},
    {"@id": "urn:visionflow:linked:explainable-ai", "vc:label": "Explainable AI"},
    {"@id": "urn:visionflow:linked:frame-semantics", "vc:label": "Frame Semantics"},
    {"@id": "urn:visionflow:linked:semantic-network", "vc:label": "Semantic Network"},
    {"@id": "urn:visionflow:linked:default-logic", "vc:label": "Default Logic"},
    {"@id": "urn:visionflow:linked:non-monotonic-reasoning", "vc:label": "Non-Monotonic Reasoning"},
    {"@id": "urn:visionflow:linked:conversational-ai", "vc:label": "Conversational AI"},
    {"@id": "urn:visionflow:linked:visual-question-answering", "vc:label": "Visual Question Answering"},
    {"@id": "urn:visionflow:linked:embodied-ai", "vc:label": "Embodied AI"},
    {"@id": "urn:visionflow:linked:expert-systems", "vc:label": "Expert Systems"},
    {"@id": "urn:visionflow:linked:grounding", "vc:label": "Grounding"},
    {"@id": "urn:visionflow:linked:ai-agent", "vc:label": "AI Agent"},
    {"@id": "urn:visionflow:linked:benchmarking", "vc:label": "Benchmarking"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine Tuning"},
    {"@id": "urn:visionflow:linked:multi-modal-learning", "vc:label": "Multi-Modal Learning"},
    {"@id": "urn:visionflow:linked:description-logic", "vc:label": "Description Logic"},
    {"@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain-of-Thought Prompting"},
    {"@id": "urn:visionflow:linked:generative-ai", "vc:label": "Generative AI"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commonsense-reasoning",
  "@type": "Class",
  "label": "Commonsense Reasoning",
  "definition": "Commonsense reasoning is the ability of an artificial system to make plausible inferences about everyday situations using broad background knowledge that humans take for granted. It covers naive physics, folk psychology, temporal causality, social norms, and typical cause-and-effect expectations that are rarely stated explicitly in text. It remains a long-standing challenge because such knowledge is vast, tacit, and context-dependent, requiring both large-scale knowledge resources and flexible defeasible inference mechanisms.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reasoning",
      "label": "Reasoning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:non-monotonic-reasoning",
        "label": "Non-Monotonic Reasoning"
      },
      {
        "@id": "urn:ngm:class:default-logic",
        "label": "Default Logic"
      },
      {
        "@id": "urn:ngm:class:frame-semantics",
        "label": "Frame Semantics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symbolic-reasoning",
        "label": "Symbolic Reasoning"
      },
      {
        "@id": "urn:ngm:class:formal-logic",
        "label": "Formal Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
      },
      {
        "@id": "urn:ngm:class:embodied-ai",
        "label": "Embodied AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:neural-symbolic-integration",
        "label": "Neural-Symbolic Integration"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain-of-Thought Prompting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:semantic-network",
        "label": "Semantic Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-architecture",
        "label": "Cognitive Architecture"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:hallucination",
        "label": "Hallucination"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:visual-question-answering",
        "label": "Visual Question Answering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      },
      {
        "@id": "urn:ngm:class:embodied-ai",
        "label": "Embodied AI"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:commonsense-reasoning:a7e3b91f2c04",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:commonsense-reasoning"
  },
  "vc:resolutions": [
    {"raw": "[[Reasoning]]", "resolved": "urn:visionflow:linked:reasoning", "kind": "ResolvedLink"},
    {"raw": "[[Symbolic Reasoning]]", "resolved": "urn:visionflow:linked:symbolic-reasoning", "kind": "StubLink"},
    {"raw": "[[Knowledge Base]]", "resolved": "urn:visionflow:linked:knowledge-base", "kind": "ResolvedLink"},
    {"raw": "[[World Model]]", "resolved": "urn:visionflow:linked:world-model", "kind": "StubLink"},
    {"raw": "[[Large Language Model]]", "resolved": "urn:visionflow:linked:large-language-model", "kind": "ResolvedLink"},
    {"raw": "[[Inference]]", "resolved": "urn:visionflow:linked:inference", "kind": "StubLink"},
    {"raw": "[[Knowledge Representation]]", "resolved": "urn:visionflow:linked:knowledge-representation", "kind": "ResolvedLink"},
    {"raw": "[[Cognitive Architecture]]", "resolved": "urn:visionflow:linked:cognitive-architecture", "kind": "StubLink"},
    {"raw": "[[Automated Reasoning]]", "resolved": "urn:visionflow:linked:automated-reasoning", "kind": "StubLink"},
    {"raw": "[[Natural Language Understanding]]", "resolved": "urn:visionflow:linked:natural-language-understanding", "kind": "StubLink"},
    {"raw": "[[Natural Language Processing]]", "resolved": "urn:visionflow:linked:natural-language-processing", "kind": "ResolvedLink"},
    {"raw": "[[Knowledge Graph]]", "resolved": "urn:visionflow:linked:knowledge-graph", "kind": "ResolvedLink"},
    {"raw": "[[ConceptNet]]", "resolved": "urn:visionflow:linked:conceptnet", "kind": "StubLink"},
    {"raw": "[[Neural-Symbolic Integration]]", "resolved": "urn:visionflow:linked:neural-symbolic-integration", "kind": "ResolvedLink"},
    {"raw": "[[Question Answering]]", "resolved": "urn:visionflow:linked:question-answering", "kind": "StubLink"},
    {"raw": "[[Retrieval-Augmented Generation]]", "resolved": "urn:visionflow:linked:retrieval-augmented-generation", "kind": "ResolvedLink"},
    {"raw": "[[Hallucination]]", "resolved": "urn:visionflow:linked:hallucination", "kind": "ResolvedLink"},
    {"raw": "[[AI Safety]]", "resolved": "urn:visionflow:linked:ai-safety", "kind": "ResolvedLink"},
    {"raw": "[[Planning]]", "resolved": "urn:visionflow:linked:planning", "kind": "StubLink"},
    {"raw": "[[Ontology]]", "resolved": "urn:visionflow:linked:ontology", "kind": "StubLink"},
    {"raw": "[[Transformer Architecture]]", "resolved": "urn:visionflow:linked:transformer-architecture", "kind": "ResolvedLink"},
    {"raw": "[[Foundation Model]]", "resolved": "urn:visionflow:linked:foundation-model", "kind": "ResolvedLink"},
    {"raw": "[[Explainable AI]]", "resolved": "urn:visionflow:linked:explainable-ai", "kind": "ResolvedLink"},
    {"raw": "[[Frame Semantics]]", "resolved": "urn:visionflow:linked:frame-semantics", "kind": "StubLink"},
    {"raw": "[[Semantic Network]]", "resolved": "urn:visionflow:linked:semantic-network", "kind": "StubLink"},
    {"raw": "[[Default Logic]]", "resolved": "urn:visionflow:linked:default-logic", "kind": "StubLink"},
    {"raw": "[[Non-Monotonic Reasoning]]", "resolved": "urn:visionflow:linked:non-monotonic-reasoning", "kind": "StubLink"},
    {"raw": "[[Conversational AI]]", "resolved": "urn:visionflow:linked:conversational-ai", "kind": "ResolvedLink"},
    {"raw": "[[Visual Question Answering]]", "resolved": "urn:visionflow:linked:visual-question-answering", "kind": "StubLink"},
    {"raw": "[[Embodied AI]]", "resolved": "urn:visionflow:linked:embodied-ai", "kind": "StubLink"},
    {"raw": "[[Grounding]]", "resolved": "urn:visionflow:linked:grounding", "kind": "StubLink"},
    {"raw": "[[AI Agent]]", "resolved": "urn:visionflow:linked:ai-agent", "kind": "ResolvedLink"},
    {"raw": "[[Chain-of-Thought Prompting]]", "resolved": "urn:visionflow:linked:chain-of-thought", "kind": "StubLink"},
    {"raw": "[[Multi-Modal Learning]]", "resolved": "urn:visionflow:linked:multi-modal-learning", "kind": "StubLink"},
    {"raw": "[[Fine Tuning]]", "resolved": "urn:visionflow:linked:fine-tuning", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning]]", "resolved": "urn:visionflow:linked:machine-learning", "kind": "ResolvedLink"},
    {"raw": "[[Generative AI]]", "resolved": "urn:visionflow:linked:generative-ai", "kind": "ResolvedLink"},
    {"raw": "[[Expert Systems]]", "resolved": "urn:visionflow:linked:expert-systems", "kind": "ResolvedLink"},
    {"raw": "[[Description Logic]]", "resolved": "urn:visionflow:linked:description-logic", "kind": "ResolvedLink"},
    {"raw": "[[Transfer Learning]]", "resolved": "urn:visionflow:linked:transfer-learning", "kind": "ResolvedLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-21T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - [[Commonsense Reasoning]] is the capacity of an artificial system to make plausible, contextually appropriate inferences about everyday situations using broad background knowledge that humans acquire through development and lived experience but rarely articulate explicitly. It encompasses at least four distinct knowledge domains: naive physics (objects fall when unsupported, water is wet, fire burns), folk psychology (people have intentions and emotions that explain their behaviour), social norms (greetings, politeness, turn-taking), and temporal-causal regularities (planting seeds precedes harvesting, breaking a glass is irreversible). As a branch of [[Reasoning]], commonsense reasoning differs from formal deductive [[Automated Reasoning]] in that its conclusions are defeasible — they hold by default but can be retracted when exceptions arise — and its [[Knowledge Base]] is open-ended rather than bounded by an axiomatised domain. This defeasibility is formalised in [[Non-Monotonic Reasoning]] frameworks such as [[Default Logic]] and circumscription. Classical AI approaches employed hand-crafted [[Semantic Network]]s and [[Knowledge Representation]] formalisms such as [[Frame Semantics]], culminating in large-scale resources like ConceptNet (over 1.6 million assertions across spatial, physical, social, temporal, and psychological dimensions) and ATOMIC (880 K if-then social causal tuples). Modern [[Large Language Model]]s based on the [[Transformer Architecture]] absorb vast amounts of commonsense knowledge implicitly from web text, achieving high accuracy on benchmarks such as HellaSwag, WinoGrande, and CommonsenseQA; yet they systematically fail on probes requiring genuine compositional generalization, novel physical scenarios, and reasoning that requires an accurate [[World Model]] beyond surface statistical correlations. The dominant research frontier in 2025–2026 centres on [[Neural-Symbolic Integration]] — combining the pattern-matching fluency of [[Foundation Model]]s with the structured, inspectable inference of symbolic systems — and on grounding [[Large Language Model]]s in structured [[Knowledge Graph]]s via [[Retrieval-Augmented Generation]] pipelines to reduce [[Hallucination]] on commonsense-demanding tasks. Robust commonsense reasoning underpins [[Natural Language Understanding]], safe [[Conversational AI]], [[Planning]] in [[AI Agent]] systems, [[Embodied AI]] robotics, and ultimately [[AI Safety]] by preventing logically absurd or socially harmful outputs from [[Generative AI]] systems.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CommonsenseReasoning
  - owl-role:: Concept | CognitiveCapability | ReasoningParadigm
  - owl-inferred:: artificial-intelligence:DefeasibleReasoning, artificial-intelligence:BackgroundKnowledge, artificial-intelligence:CognitiveTask, artificial-intelligence:KnowledgeGroundedReasoning
  - belongs-to-domain:: [[Natural Language Processing]], [[Cognitive Science]]
  - implemented-in-layer:: [[Knowledge Representation]], [[Reasoning]]

- ### Relationships
  - is-subclass-of:: [[Reasoning]], [[Automated Reasoning]]
  - has-part:: [[Non-Monotonic Reasoning]], [[Default Logic]], [[Frame Semantics]], [[Naive Physics]], [[Causal Reasoning]], [[Temporal Reasoning]], [[Spatial Reasoning]], [[Theory of Mind]]
  - requires:: [[Knowledge Base]], [[World Model]], [[Inference]], [[Grounding]], [[Knowledge Representation]]
  - enables:: [[Natural Language Understanding]], [[Question Answering]], [[Planning]], [[Conversational AI]], [[Embodied AI]], [[Visual Question Answering]], [[Dialogue Management]], [[AI Agents]], [[Robotics]]
  - implements:: [[Neural-Symbolic Integration]], [[Grounding]], [[Retrieval-Augmented Generation]], [[Chain-of-Thought Prompting]]
  - depends-on:: [[Knowledge Representation]], [[Semantic Network]], [[Ontology]], [[Deep Learning]], [[Foundation Models]]
  - supports:: [[Natural Language Processing]], [[AI Safety]], [[Explainable AI]], [[AI Alignment]], [[Multi-Modal Learning]]
  - uses:: [[Large Language Model]], [[Knowledge Graph]], [[Neural-Symbolic Integration]], [[Chain-of-Thought Prompting]], [[Retrieval-Augmented Generation]], [[Transfer Learning]], [[Fine Tuning]], [[Description Logic]], [[Cognitive Architecture]], [[ConceptNet]], [[WordNet]], [[Transformer Architecture]]
  - contrasts-with:: [[Symbolic Reasoning]], [[Formal Logic]], [[Logic Programming]], [[Expert Systems]]
  - related-to:: [[Hallucination]], [[Visual Question Answering]], [[Multi-Modal Learning]], [[Generative AI]], [[Foundation Models]], [[Machine Learning]], [[AI Agent]], [[Inference Engine]], [[Collective Intelligence]], [[AI Alignment]], [[Cognitive Science]], [[Word Sense Disambiguation]]
  - standardized-by:: [[ConceptNet]], [[Ontology]], [[CommonsenseQA]], [[WinoGrande]], [[HellaSwag]], [[PIQA]], [[Social IQa]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:NonMonotonicReasoning))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:DefaultLogic))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:FrameSemantics))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:NaivePhysicsKnowledge))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:FolkPsychologyKnowledge))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:SocialNormsKnowledge))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:TemporalCausalKnowledge))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:CausalReasoning))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:hasPart ai:TheoryOfMind))

  ## Dependency Relationships
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeBase))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:WorldModel))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:Inference))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:SemanticNetwork))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:Grounding))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:FoundationModel))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))

  ## Capability Relationships
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageUnderstanding))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:ConversationalAI))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:EmbodiedAI))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:VisualQuestionAnswering))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:Robotics))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:enables ai:AIAgents))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:AIAlignment))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))

  ## Implementation Relationships
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:NeuralSymbolicIntegration))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:ChainOfThoughtPrompting))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:FineTuning))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:uses ai:TransferLearning))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:implements ai:Grounding))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:implements ai:DefeasibleInference))

  ## Reduction Relationships
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:PlausibleInference))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:DefaultRuleApplication))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:ContextSensitiveInference))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:AbductiveInference))
      SubClassOf(ai:CommonsenseReasoning
        ObjectSomeValuesFrom(ai:reducesTo ai:ScriptBasedInference))

  ## About

  Commonsense reasoning sits at the intersection of [[Knowledge Representation]], [[Natural Language Processing]], [[Cognitive Architecture]] research, and [[Machine Learning]]. Its central challenge is not lack of processing power but rather the sheer tacitness of human background knowledge: the vast majority of what people know about the everyday world is never written down, making automatic acquisition from text corpora incomplete by design. A person who reads "Jane put the cake in the oven and went to answer the phone" knows without being told that the cake is still in the oven after Jane answers the phone, that the oven is hot, that an unattended oven is a fire risk, and that Jane will probably return to the kitchen. No text explicitly states these facts, yet a reader draws on naive physics, causal reasoning, temporal persistence (the "frame problem" in AI), and social expectations simultaneously to build a coherent situation model.

  The difficulty is compounded by defeasibility: commonsense conclusions are not logically necessary but contextually appropriate defaults. A person who knows "birds fly" will infer that a bird in a tree can fly away, but revise this inference upon learning the bird is a penguin or has an injured wing. Encoding such default inference in a formal system requires [[Non-Monotonic Reasoning]] frameworks (Reiter's [[Default Logic]], McCarthy's circumscription, Pearl's system Z) that have proven brittle at scale and difficult to integrate with modern deep-learning pipelines.

  The 1984 Cyc project (Lenat et al.) attempted to manually encode millions of commonsense axioms in first-order logic; it produced a large but narrow knowledge base that was difficult to maintain and update. The 2004 ConceptNet knowledge graph (Singh et al., MIT Media Lab) took a more crowdsourced, semi-formal approach, accumulating over 1.6 million English-language commonsense assertions. The 2019 ATOMIC knowledge base (Sap et al., Allen Institute) contributed 880 K if-then social causal tuples (PersonX does Y → PersonX feels Z) capturing folk psychology dimensions absent from ConceptNet. The 2021 ATOMIC-2020 extension (Hwang et al.) unified both resources into a single graph with 23 relation types.

  The rise of [[Large Language Model]]s from GPT-2 onwards revealed that transformer-scale pretraining absorbs considerable commonsense knowledge implicitly. By 2021, fine-tuned models achieved near-human performance on benchmarks such as CommonsenseQA (Talmor et al., 2019), WinoGrande (Sakaguchi et al., 2021), PIQA (Bisk et al., 2020), HellaSwag (Zellers et al., 2019), and Social IQa (Sap et al., 2019). However, subsequent adversarial evaluations (e.g., WinoGrande adversarial, HellaSwag-Hard) demonstrated that many of these gains reflected surface-level statistical pattern matching rather than genuine [[World Model]] reasoning. A 2025 study introduced BrainBench to expose specific categories of reasoning failure; a 2025 viral evaluation found that many frontier LLMs recommended walking to a car wash rather than driving, failing to reason about the purpose of the errand — a canonical commonsense failure rooted in inadequate [[Grounding]].

  ## Components and Mechanisms

  **Knowledge Dimensions**
  - Naive physics: objects have mass, solidity, gravity acts on unsupported objects, liquids take the shape of their containers, rigid objects can break. This knowledge domain was the focus of early AI work by Hayes (1978) and the "Naive Physics Manifesto."
  - Folk psychology (Theory of Mind): people have beliefs, desires, intentions, and emotions that cause their actions. Systems must attribute mental states to agents to predict and explain behaviour — a capacity evaluated by Social IQa and the ToMi benchmark.
  - Temporal and causal regularity: events have preconditions and postconditions (scripts, Schank 1977); temporal ordering and persistence must be tracked (the frame problem, McCarthy and Hayes 1969).
  - Social norms and pragmatics: cooperative conversational maxims (Grice 1975), politeness, culturally specific behavioural expectations.
  - Encyclopaedic-taxonomic background: general world facts that support discourse — capital cities, basic biology, typical object properties — that straddle commonsense and encyclopaedic knowledge.

  **Inference Mechanisms**
  - Default reasoning: draw the most typical conclusion unless defeated by evidence. Encoded in [[Default Logic]] (Reiter, 1980) and [[Non-Monotonic Reasoning]] frameworks.
  - Abductive inference: given an observation, infer the most plausible explanation. Central to story understanding and diagnostic reasoning.
  - Analogical reasoning: apply structural mappings from familiar situations to novel ones. Evaluated by novel physical analogy benchmarks.
  - Script-based inference: sequences of prototypical event frames (scripts) allow prediction of likely next actions — "going to a restaurant" involves ordering, eating, paying.
  - Neural inference: large pretrained models act as soft knowledge bases, retrieving commonsense-consistent continuations via next-token prediction.

  **Evaluation Benchmarks (Selected)**
  - HellaSwag (Zellers et al., 2019): physical activity completion, 10 K / 70 K examples; frontier LLMs score >95% but adversarial hard variants expose residual brittleness.
  - WinoGrande (Sakaguchi et al., 2021): 44 K Winograd-style pronoun coreference problems requiring commonsense disambiguation.
  - CommonsenseQA (Talmor et al., 2019): 12 K multiple-choice questions derived from ConceptNet, requiring retrieval over conceptual relations.
  - PIQA (Bisk et al., 2020): physical intuition QA; 20 K problems about everyday physical actions and their outcomes.
  - Social IQa (Sap et al., 2019): 38 K questions about social interactions, motivations, and emotional reactions.
  - Logical-CommonsenseQA (2026): pairs atomic answers under AND/OR/NEITHER logical operators, testing compositional integration of commonsense with logical structure.
  - BrainBench (2026): systematic taxonomy of commonsense failure modes in frontier LLMs; categorises spatial, temporal, causal, and social failure patterns.

  ## Use Cases

  **Natural Language Understanding and Generation**
  Systems that must interpret indirect speech acts, resolve pronoun reference, infer implicit event participants, or detect sarcasm and irony require commonsense background knowledge. [[Conversational AI]] assistants (ChatGPT, Claude, Gemini) rely heavily on implicitly learned commonsense to produce coherent and contextually appropriate responses, though documented failures in edge cases motivate hybrid approaches. Consider the sentence "The police stopped the protesters because they became violent" — human readers immediately infer from commonsense social knowledge that "they" refers to the protesters, not the police; systems without robust commonsense may incorrectly assign the referent. Implicature — reasoning about what a speaker means beyond what they literally say (Grice, 1975) — requires both commonsense world knowledge and understanding of cooperative communication norms. Systems that fail at implicature produce responses that are technically accurate but pragmatically inappropriate, breaking the conversational contract.

  **Dialogue and Conversational AI**
  Robust [[Conversational AI]] systems must track discourse state, infer user intent from underspecified requests, and handle topic shifts gracefully — all tasks requiring background commonsense. A user who says "Can you open the window?" at a dinner party is requesting fresh air, not asking about the speaker's physical capability; systems equipped with social commonsense about pragmatic context can interpret such indirect speech acts correctly. Commonsense knowledge of typical human routines and needs enables dialogue systems to offer proactive suggestions ("You mentioned leaving at 8am — would you like me to set an alarm?") without explicit instructions. The failure mode — producing technically valid responses that miss the pragmatic intent — is among the most common user complaints with deployed [[Conversational AI]] systems.

  **Question Answering**
  Open-domain [[Question Answering]] over documents requires commonsense to resolve presuppositions, infer unstated facts bridging question and answer, and correctly resolve temporal or causal queries. A question such as "What would happen if you left ice cream in a hot car?" requires no encyclopaedic knowledge, only naive physics (heat melts ice cream) and functional knowledge about cars and temperature, yet it stymies systems without robust physical commonsense. [[Retrieval-Augmented Generation]] pipelines grounding LLM inference in a [[Knowledge Graph]] (e.g. ConceptNet-augmented RAG) improve commonsense accuracy relative to parametric-only baselines by making the relevant background knowledge explicitly retrievable and inspectable. Knowledge base question answering (KBQA) systems that query structured [[Knowledge Base]]s via SPARQL or graph traversal have been extended to commonsense KBs (ConceptNet-QA), enabling more reliable commonsense inference than parametric-only approaches.

  **AI Agents and Planning**
  Autonomous [[AI Agent]]s executing multi-step tasks in tool-use or robotic environments must reason about the physical and social plausibility of planned actions. A task-planning system asked to "bake a cake" must know that the oven must be preheated before the cake is inserted, that the recipe's wet ingredients must be combined before dry ingredients are added, and that the cake must cool before frosting — all commonsense temporal ordering facts rarely stated in recipe instructions. [[Planning]] algorithms integrated with commonsense knowledge bases (PSP planner with ATOMIC integration, LLM-based task decomposition with ConceptNet grounding) reject physically impossible action sequences and generate contextually appropriate explanations for failures. [[Embodied AI]] robotics systems increasingly couple language models with physical simulation engines (Isaac Gym, MuJoCo, PyBullet) to acquire naive-physics reasoning through interaction rather than text-only statistics, addressing a fundamental gap in text-derived commonsense.

  Commonsense reasoning is critical for plan recognition — inferring a human collaborator's goals from observed partial action sequences. A robot in a kitchen that sees a human pick up a knife and move toward the cutting board must infer that the human is about to cut food, not threaten the robot, based on social commonsense about kitchen context. This intention inference capacity, rooted in folk psychology, is indispensable for safe human-robot collaboration.

  **Hallucination Reduction and AI Safety**
  Commonsense failures manifest as physically implausible, temporally inconsistent, or socially inappropriate [[Generative AI]] outputs — a key driver of [[Hallucination]]. A medical advice system that suggests a patient "take all the pills at once" because the instruction "take three times daily" was misinterpreted, or a travel assistant that suggests driving across the Atlantic, exemplify commonsense failures with safety consequences. Integrating explicit commonsense checking (symbolic verifier querying ConceptNet or ATOMIC for plausibility, retrieval grounding against factual [[Knowledge Base]]s) into LLM pipelines is an active strategy for [[AI Safety]] improvement. The UK AI Safety Institute's pre-deployment model evaluation protocol (2024) explicitly tests for commonsense failure modes, including physical implausibility and temporal inconsistency, as part of its capability assessment framework.

  Socially inappropriate outputs — responses that are technically correct but violate social norms (e.g. congratulating someone on their divorce, or offering food to a recently bereaved person) — reflect missing folk-psychology commonsense about social contexts. Alignment techniques (Constitutional AI, RLHF) partially address these by training on human preference data that encodes social norms, but they do not provide explicit commonsense reasoning; they learn approximate social appropriateness without understanding the underlying commonsense structure.

  **Visual and Multi-Modal Reasoning**
  [[Visual Question Answering]] systems must reason about depicted scenes using background knowledge: a VQA system asked "Can the person in the image reach the top shelf?" must combine visual size estimation with naive physics about body mechanics and typical shelf heights. [[Multi-Modal Learning]] models trained on image-text pairs (CLIP, DALL-E, Flamingo, GPT-4o) acquire partial visual commonsense but remain vulnerable on novel object configurations and in-context spatial reasoning requiring careful integration of visual observation with background physical knowledge. The VisualCOMET dataset (Park et al., 2020) specifically targets commonsense inference about dynamic context visible in still images — before/during/after the depicted event — providing a benchmark that requires both visual understanding and temporal commonsense reasoning.

  **Education and Tutoring**
  Intelligent tutoring systems rely on commonsense reasoning to understand student misconceptions (a student who believes "heavier objects fall faster" holds a commonsense physics misconception correctable by conceptual change instruction), to explain concepts in everyday terms, and to generate appropriately scaffolded examples. Adaptive tutoring systems that detect student confusion from dialogue context and pivot to clarifying explanations exploit social commonsense about communicative intent.

  **Legal and Medical AI**
  Clinical decision support systems that assess patient risk must reason commonsensically about behaviour (a patient who says "I walk 10,000 steps daily" is probably reasonably fit), medication effects (combining alcohol and sedatives is dangerous), and care plan plausibility (a bed-bound patient cannot perform standing exercises). Legal reasoning systems must apply commonsense about typical human behaviour to assess the plausibility of claimed events: courts regularly appeal to what is "reasonable" — which is precisely the sphere of commonsense. Commonsense reasoning failures in these high-stakes domains carry direct safety consequences, making [[AI Safety]]-aligned commonsense integration critical.

  ## Theoretical Challenges and Open Problems

  Despite decades of research and rapid progress on benchmarks, commonsense reasoning in AI faces several deep theoretical challenges that represent the frontier of the field:

  **The Tacitness Problem**: Most commonsense knowledge is never written down, making automatic acquisition from text fundamentally incomplete. A child learns that fire burns by touching a hot stove, that ice is cold by feeling it, that heavy objects require effort to lift by physical experience. Purely text-based learning can only acquire commonsense facts that happen to be expressed in text, missing the vast tacit residue. This motivates [[Embodied AI]] approaches — systems that learn commonsense through physical interaction rather than text statistics — and [[Multi-Modal Learning]] approaches that augment text learning with visual and sensorimotor grounding.

  **The Compositionality Problem**: Humans can understand novel physical or social scenarios they have never encountered by composing known commonsense primitives. Asked about a situation where "a ball is placed in a bag, the bag is turned inside out, and then the bag is submerged in water," a person can reason through the sequence compositionally. LLMs typically fail on such novel compositions even when they know each individual fact, revealing that their commonsense is stored as holistic pattern associations rather than composable rules. This distinguishes shallow benchmark performance from genuine commonsense competence.

  **The Contextual Sensitivity Problem**: Commonsense defaults are highly context-sensitive. "Birds fly" is a valid default in ordinary contexts but fails for dead birds, baby birds, penguins in a zoo exhibit, or birds in cartoons. Representing the full context-sensitivity of commonsense defaults requires rich situational models that current AI systems do not robustly maintain. The [[World Model]] problem — maintaining a coherent, updatable internal model of the situation being reasoned about — remains open.

  **The Grounding Problem**: For commonsense reasoning to support reliable inference, symbols must be grounded in their referents — the word "heavy" must be connected to physical weight; "sharp" to cutting ability; "hot" to thermal sensation. Without [[Grounding]], a system can learn that "a knife is used for cutting" without understanding what cutting is, producing correct outputs in tested contexts but failing when the grounding assumption is violated (e.g. cutting with a laser is not the same as cutting with a knife in terms of commonsense implications about safety, precision, and applicability). Grounding approaches include embodied simulation, multimodal training, and structured [[Knowledge Base]] linking.

  **The Evaluation Problem**: As frontier LLMs saturate standard commonsense benchmarks, the question of whether they have achieved genuine commonsense reasoning or merely pattern-matched training-set artefacts becomes critical. Recent work (Zellers et al., 2018; Hellaswag; Bhagavatula et al., 2019; aNLI) has repeatedly shown that models exploit dataset artefacts — length biases, lexical overlaps, surface statistical regularities — to achieve high benchmark scores without commonsense understanding. This "validity crisis" in commonsense evaluation motivates adversarial benchmark construction (WinoGrande's adversarial filtering, HellaSwag-Hard), out-of-distribution testing, and diagnostic probing that tests specific commonsense knowledge dimensions independently.

  **Neurosymbolic Integration**: The dominant research programme seeking to overcome these challenges is [[Neural-Symbolic Integration]] — architectures that combine the pattern-recognition fluency of neural networks with the compositional, inspectable inference of symbolic systems. Proposed approaches include: (a) using LLMs to parse natural language into symbolic representations that are then reasoned over by a logic engine; (b) using commonsense [[Knowledge Graph]]s as structured context retrieved at inference time; (c) training neural networks to satisfy symbolic constraints; and (d) using [[Chain-of-Thought Prompting]] to externalise implicit reasoning steps for symbolic verification. None of these fully solves the compositionality or tacitness problems, but they represent the current state of the art for deploying commonsense reasoning in safety-critical applications.

  ## Relationships to Broader AI Paradigms

  Commonsense reasoning intersects with several other major AI research agendas in ways that make progress on any one dimension advance the others:

  **Commonsense and Foundation Models**: [[Foundation Model]]s such as GPT-4 and Claude 3 represent a qualitative shift in commonsense reasoning capability relative to pre-LLM systems. By training on hundreds of billions of tokens of text, these models implicitly absorb the commonsense regularities expressed across human written communication. The result is systems that, for the first time in AI history, can pass many commonsense benchmarks at human-level performance. Yet as BrainBench (2026) demonstrates, this achievement masks systematic gaps in commonsense competence on probes that require departing from surface text patterns. Understanding precisely what commonsense knowledge foundation models do and do not acquire, and why, is one of the most active research questions in AI interpretability and [[Explainable AI]].

  **Commonsense and AI Agents**: The move toward [[AI Agent]] systems (systems that autonomously plan and execute multi-step tasks using tools, APIs, and services) makes commonsense reasoning practically critical. An agent that can search the web, write code, and send emails will cause harm if it lacks the social commonsense to understand that sending an email to "everyone in the company" in response to a request to "tell the team" means the immediate team, not all 50,000 employees. Task decomposition, goal inference, plan validation, exception handling, and inter-agent communication all require continuous commonsense reasoning about physical and social context. This connection between commonsense reasoning and agent architectures (OpenAI's function-calling agents, Anthropic's Claude tool-use, Google's Gemini function-calling) is driving substantial research investment.

  **Commonsense and Retrieval-Augmented Generation**: [[Retrieval-Augmented Generation]] was originally developed to address factual [[Hallucination]] by grounding LLM outputs in retrieved documents. The same paradigm applies to commonsense: grounding LLM inference in retrieved ConceptNet triples, ATOMIC if-then rules, or PIQA physical procedure knowledge reduces commonsense hallucination by making the relevant background knowledge explicitly available in the context window. This is an active production strategy at Microsoft (Bing RAG), Google (Vertex AI grounding), and Anthropic (tool-use with knowledge connectors). The principal challenge for commonsense RAG relative to factual RAG is retrieval precision: commonsense queries are often implicit and vague ("what usually happens when..."), making it difficult to formulate the retrieval query that will surface the most relevant background knowledge without noise. Dense retrieval models fine-tuned on commonsense query-document pairs (SBERT fine-tuned on ConceptNet QA pairs) substantially improve over BM25 sparse retrieval on commonsense retrieval tasks, and hybrid dense-sparse retrieval is becoming the standard approach in production commonsense-augmented systems.

  **Commonsense and Formal Verification**: An emerging research direction (2025–2026) applies formal methods to commonsense reasoning validation. Given an LLM-generated statement with commonsense implications, a formal verifier translates the statement into a symbolic representation and checks it against a commonsense [[Knowledge Base]] (ConceptNet, ATOMIC) for plausibility. Violations (physically impossible events, violated temporal preconditions, contradicted social norms) are flagged for human review or automatic revision. This symbolic-verification layer addresses the evaluation problem for deployed systems — providing audit trails that explain why a given output was rejected as commonsense-implausible — and aligns with the [[Explainable AI]] and [[AI Safety]] requirements of the EU AI Act for high-risk deployments. The UK AI Safety Institute's evaluation framework (2024) explicitly calls for such verifiable commonsense sanity-checking as part of pre-deployment capability assessment for general-purpose AI systems.

  **Commonsense across Languages and Cultures**: A largely under-addressed challenge is cross-linguistic and cross-cultural commonsense. Most commonsense benchmarks (HellaSwag, CommonsenseQA, WinoGrande) are in English and reflect North American or Western European cultural contexts. Cultural commonsense varies substantially: what counts as polite, which temporal orderings are typical, what objects are used for what purposes, and how social hierarchies work differ across cultures. HellaSwagUltra (2025) and mCSQA (Sakai et al., 2024) represent early efforts to evaluate commonsense across languages and cultural contexts, revealing that cross-lingual commonsense performance is systematically lower than monolingual English performance even for frontier multilingual LLMs. This gap has significant implications for the deployment of AI systems in non-English-speaking and non-Western contexts, and represents a major research gap at the intersection of commonsense reasoning and multilingual [[Natural Language Processing]].

  **Commonsense and Cognitive Architecture**: Classical [[Cognitive Architecture]] research (ACT-R, SOAR, SIGMA) modelled human commonsense reasoning as the activation and retrieval of long-term semantic memory, combined with production rules encoding procedural knowledge. Modern neural [[Cognitive Architecture]]s attempt to combine LLM-based pattern recognition with working memory, structured long-term memory (a [[Knowledge Base]]), and planning mechanisms, recapitulating the classical modular organisation in a learned substrate. Systems such as Voyager (Wang et al., 2023) and CALYPSO (Zhu et al., 2023) demonstrate that LLM-based cognitive architectures with structured memory and commonsense grounding achieve substantially better performance on open-ended task planning than pure LLM prompting.

  ## Academic Context

  The term "commonsense reasoning" entered the AI vocabulary through McCarthy's 1959 paper "Programs with Common Sense" and the subsequent frame-axiom problem (McCarthy and Hayes, 1969). The 1980s saw competing symbolic approaches: Lenat's CYC, Minsky's frame theory (1974), and Reiter's Default Logic (1980). The neural turn began with Zellers et al. (2018) showing that BERT-scale pretraining substantially closed the HellaSwag gap.

  The Allen Institute for Artificial Intelligence (Seattle) has been the most prolific producer of commonsense AI benchmarks and knowledge resources (ATOMIC, Social IQa, WinoGrande, PIQA, CommonGen). The MIT Media Lab produced ConceptNet. Stanford, CMU, and UW maintain active research programmes on commonsense reasoning in language.

  In the UK, the Alan Turing Institute's neuro-symbolic AI interest group explicitly frames commonsense reasoning as a key application of neural-symbolic integration, noting that "language understanding, including question answering that requires commonsense reasoning, offers probably the most complete application area of neuro-symbolic AI." The University of Edinburgh's School of Informatics has contributed to non-monotonic reasoning formalisms (notably circumscription extensions) and NLP evaluation methodology. University College London's Gatsby Computational Neuroscience Unit and Computer Science department have contributed to cognitive architectures with commonsense reasoning components. Oxford's Future of Humanity Institute and Department of Computer Science have engaged with commonsense reasoning in the context of AI safety and alignment (ensuring LLMs do not produce physically or socially absurd outputs).

  ## Current Landscape (2025–2026)

  September 2025 marked a watershed moment where leading frontier LLMs achieved unprecedented scores on social commonsense benchmarks; however, BrainBench (2026) simultaneously exposed systematic categories of commonsense failure. The dominant trend is hybridisation: LLMs are being augmented with structured commonsense [[Knowledge Graph]]s (ConceptNet, ATOMIC-2020, Wikidata) via [[Retrieval-Augmented Generation]] to ground inference, replacing purely parametric commonsense recall. [[Chain-of-Thought Prompting]] has been shown to substantially improve commonsense performance by externalising implicit reasoning steps, making commonsense inference more inspectable and thus amenable to verification.

  The [[Neural-Symbolic Integration]] paradigm — combining neural LLMs with symbolic commonsense reasoners or [[Description Logic]] engines — has seen renewed interest following IJCAI 2025 work on neuro-symbolic AI approaches. The COMET-ATOMIC-2020 model (trained to generate commonsense inferences from ATOMIC) enables downstream systems to query a generative commonsense oracle rather than a static knowledge base, improving coverage of novel situations. Multimodal commonsense benchmarks (VisualCOMET, WinoGround) extend evaluation to vision-language systems, where physical commonsense reasoning about depicted scenes reveals new failure modes.

  [[Fine Tuning]] on commonsense-specific data remains an effective if resource-intensive approach; however, the brittleness of fine-tuned models to distribution shift has driven interest in more robust [[Transfer Learning]] strategies. The Logical-CommonsenseQA benchmark (2026) targets compositional integration of commonsense with symbolic logic operators, probing a dimension largely untested by prior benchmarks.

  In industry, commonsense reasoning failures have been documented in customer-service bots, medical-advice systems, and autonomous-vehicle dialogue interfaces, driving demand for structured knowledge integration in production LLM deployments. Microsoft (Azure AI), Google DeepMind, and Anthropic have each published technical reports noting commonsense limitation as a key challenge for [[AI Safety]]-compliant deployment.

  The broader research ecosystem has responded with several novel paradigm shifts in 2025–2026. First, generative commonsense augmentation — where a COMET-style model pre-generates commonsense implications of each sentence before it is processed by the main LLM — has shown improvements in downstream QA and dialogue coherence, effectively creating a commonsense pre-processing layer. Second, symbolic-constraint satisfaction has been applied post-generation: outputs from LLMs are verified against ConceptNet-derived plausibility scores and ATOMIC causal consistency checks before being returned to users, with implausible outputs rejected or revised. Third, commonsense-aware [[Fine Tuning]] on instruction-following datasets augmented with ConceptNet and ATOMIC triples has been shown to improve commonsense performance on held-out benchmarks relative to standard instruction-tuning, at modest additional training cost. These approaches collectively represent a shift from "hope the LLM learned commonsense implicitly" to "actively engineer commonsense competence through knowledge-augmented architecture."

  The evaluation landscape has matured correspondingly. The September 2025 AI Parivartan Research Lab benchmark report documented that leading models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro) achieve >92% on standard CommonsenseQA and >96% on HellaSwag, but that adversarial variants constructed by domain experts reveal 20–40 percentage-point performance gaps relative to human performance on out-of-distribution commonsense probes. This persistent gap motivates the next generation of commonsense evaluation: dynamic adversarial evaluation (models evaluated on commonsense probes generated by other models specifically trained to expose gaps), cross-cultural commonsense evaluation (testing whether models trained primarily on English internet text fail on commonsense scenarios specific to non-Western cultural contexts), and long-horizon causal commonsense evaluation (multi-step scenarios where correct commonsense inference at each step is required to reach the correct overall conclusion).

  ## UK Context

  The Alan Turing Institute (London) hosts a dedicated neuro-symbolic AI interest group that explicitly identifies commonsense reasoning as a primary target application, bringing together researchers from Edinburgh, Oxford, Cambridge, and Imperial College London. The group's framing — that commonsense reasoning "offers probably the most complete application area of neuro-symbolic AI" — positions UK AI research at the convergence of formal [[Knowledge Representation]] methods and neural language understanding. Edinburgh's Institute for Language, Cognition and Computation (ILCC) conducts foundational [[Natural Language Processing]] research with commonsense implications, including work on discourse coherence, implicit event understanding, and temporal reasoning in narrative. UCL's Computer Science department has contributed to cognitive architectures and embodied [[Grounding]], while the Department of Computer Science at Oxford has engaged with commonsense reasoning in the context of [[AI Safety]] and formal verification, particularly around ensuring that LLM-generated text satisfies physical and social plausibility constraints.

  In Northern England, the University of Manchester's School of Computer Science — home to the OWL 2 standard and [[Description Logic]] research (Ian Horrocks, Carole Goble, Boris Motik) — provides the foundational formal tools for expressing commonsense ontologies in machine-processable form. The Manchester OWL API and the HermiT/Pellet reasoning infrastructure underpin production deployments that require formal commonsense constraints alongside neural inference. The University of Sheffield's Natural Language Processing group, founded by Yorick Wilks (a pioneer of commonsense-driven NLP whose work on preference semantics and script-based story understanding anticipated the modern commonsense AI agenda by decades), maintains a long tradition of research on implicit meaning, presupposition, and background knowledge in language processing. The University of Leeds has contributed to qualitative spatial reasoning — a branch of commonsense reasoning about topological relationships between spatial objects that is directly applicable to [[Robotics]] and geographic information systems.

  The University of Cambridge's Computer Laboratory has engaged with commonsense aspects of machine reading comprehension and has contributed to the annotation methodology for fine-grained commonsense benchmark construction. Imperial College London's AI group has worked on commonsense reasoning for medical AI applications, particularly in clinical narrative understanding where implicit temporal and causal commonsense about disease progression, medication effects, and procedure sequences is safety-critical. The University of Birmingham's Natural Language Processing group has contributed to event representation and script learning, grounding temporal commonsense in structured event ontologies.

  UK industrial AI engages substantively with commonsense reasoning. Google DeepMind (London) has published research on commonsense grounding for its Gemini family of models, including work on physical commonsense for robotic control. Waymo UK focuses on autonomous vehicle perception and planning systems that require dense physical commonsense about traffic scenarios, pedestrian behaviour, and road physics. Arm AI Research works on edge-deployed commonsense modules for robotics applications where low-latency commonsense inference is required at the hardware level. BT Group AI has published research on commonsense reasoning for network management dialogue systems, where user intent inference from underspecified technical requests requires substantial social and procedural commonsense.

  The UKRI EPSRC has funded commonsense-related research through its AI for Science and Responsible AI priorities. The UK AI Safety Institute (AISI, established 2023 by the Department for Science, Innovation and Technology) has noted commonsense failures as a distinct class of unsafe LLM behaviour warranting evaluation protocols, distinct from factual error and harmful content. AISI's evaluation framework explicitly assesses physical plausibility, temporal consistency, and social appropriateness as commonsense-grounded dimensions of model safety. This positions commonsense reasoning not merely as an NLP research challenge but as a regulatory concern for high-stakes AI deployment in the UK context.

  ## Cross-Cultural and Multilingual Commonsense

  A largely under-addressed dimension of commonsense reasoning research is the cultural and linguistic specificity of most benchmarks and knowledge resources. ConceptNet, ATOMIC, HellaSwag, CommonsenseQA, WinoGrande, and the bulk of the commonsense evaluation literature were constructed predominantly by English-speaking researchers drawing on North American and Western European everyday contexts. The commonsense knowledge encoded in these resources — what counts as polite, which actions typically precede which outcomes, which objects are used for which purposes, what social hierarchies are typical — reflects specific cultural assumptions that do not generalise globally.

  Cross-cultural commonsense divergences are not superficial. Social IQa scenarios involving American workplace norms, restaurant tipping customs, or healthcare navigation presuppose institutional contexts absent in many other countries. Physical commonsense about food preparation assumes kitchen equipment (ovens, refrigerators, specific utensils) not universally available. Temporal commonsense about scheduling, seasons, and daily routines reflects specific cultural rhythms. Even seemingly universal naive physics scenarios can carry cultural assumptions about object norms and typical environments.

  The mCSQA dataset (Sakai et al., 2024) represents an early effort to construct multilingual commonsense question answering benchmarks across Japanese, Chinese, French, and German, revealing that frontier multilingual LLMs show markedly lower commonsense accuracy in non-English languages even when controlling for language modelling proficiency. HellaSwag-Pro (Li et al., 2025) extended commonsense sentence-completion evaluation to Chinese, finding systematic performance gaps attributable to both translation artefacts and genuinely different commonsense expectations in Chinese cultural contexts. These gaps are not merely language modelling artefacts — they reflect the cultural specificity of the commonsense knowledge encoded in pre-training data, which overwhelmingly reflects English-language internet text.

  For [[AI Safety]] and fairness, the cultural specificity of commonsense creates a deployment risk: systems calibrated to North American commonsense may produce socially inappropriate or physically implausible outputs when deployed in other cultural contexts, without any measurable degradation on English-language benchmarks. Addressing this requires both culturally diverse commonsense knowledge bases and evaluation benchmarks constructed with local cultural expertise — a resource-intensive research agenda that remains substantially underfunded relative to the scale of the deployment problem.

  ## Future Directions (2026–2030)

  The central open problem — how to give AI systems genuinely robust commonsense reasoning rather than pattern matching that mimics commonsense on benchmarks — is unlikely to be solved by scaling alone. Four research directions appear most promising:

  1. **Physical simulation as a [[World Model]]**: integrating differentiable physics engines (Isaac Gym, MuJoCo) with LLMs to provide genuine naive-physics grounding, rather than relying on text-derived statistics about physical phenomena. [[Embodied AI]] platforms that allow agents to learn physics through interaction will be key testbeds.

  2. **Structured knowledge-augmented inference**: tighter integration of curated commonsense graphs (ATOMIC-2020, ConceptNet, Wikidata) with LLM inference chains, enabling the model to explicitly retrieve and cite commonsense facts before drawing conclusions — a form of [[Retrieval-Augmented Generation]] applied to background knowledge rather than factual documents.

  3. **Neurosymbolic verification**: using [[Description Logic]] reasoners or answer-set programming systems to verify that LLM-generated commonsense inferences satisfy formal consistency constraints (no physical impossibilities, no temporal violations), flagging failures for human review or automated correction.

  4. **Compositional and causal benchmarking**: moving beyond surface multiple-choice evaluation toward tasks requiring causal intervention reasoning (do-calculus), counterfactual inference, and compositional generalisation to novel concept combinations, building on the Logical-CommonsenseQA (2026) paradigm.

  Longer-term, success in commonsense reasoning is expected to underpin substantially more reliable [[AI Agent]] autonomy, safer [[Conversational AI]], and more interpretable [[Explainable AI]] systems that can explain their inferences in terms that humans recognise as commonsense rather than statistical artefacts.

  ## Historical Development

  The intellectual genealogy of commonsense reasoning in AI stretches back further than the field itself. The Enlightenment philosophers described "common sense" as a faculty mediating between raw sensory input and rational deliberation; Thomas Reid (1764) argued that certain basic perceptions — the solidity of objects, the persistence of identity through time — are immediately known without inference, providing the foundations for everyday action. These Reidian intuitions translate directly into the AI challenge: how does a system represent the solid, persistent, causally regular everyday world without explicit axioms for every fact?

  **1950s–1960s: The Problem is Named**
  John McCarthy's 1959 paper "Programs with Common Sense" introduced the Advice Taker, a hypothetical program that would represent factual knowledge in first-order logic and derive new facts by logical deduction. McCarthy identified the fundamental challenge: the advice taker needs an enormous amount of background knowledge that humans take for granted, and encoding it all seems hopeless. The 1969 paper with Patrick Hayes formalised the frame problem — the difficulty of efficiently specifying which facts about a [[World Model]] change when an action is performed and which remain constant — a problem that remains open in its full generality.

  **1970s–1980s: Symbolic Approaches**
  Roger Schank's script theory (1977) proposed that human commonsense reasoning relies on stereotyped event-sequence knowledge structures (scripts) that allow prediction of likely next actions in routine situations. The "restaurant script" — person enters, is seated, orders, receives food, pays, leaves — exemplifies how structured background knowledge enables interpretation of indirect discourse. Marvin Minsky's frame theory (1974) generalised this to property-inheritance hierarchies where objects activate associated frames whose slots may be filled with default values, overridable by context.

  The CYC project, launched by Doug Lenat at MCC in 1984, attempted to manually encode millions of commonsense facts in a custom logic language (CycL, a variant of first-order logic with context operators). CYC accumulated approximately 25 million assertions by 2010, representing one of the largest hand-crafted commonsense [[Knowledge Base]]s ever built. It demonstrated both the value of explicit knowledge encoding and its scalability limits: curating millions of facts required decades of expert effort, and the knowledge remained fragile outside the domains encoded.

  **1990s–2000s: Crowdsourcing and Scale**
  The Open Mind Common Sense project (Singh, MIT Media Lab, 1999) pioneered crowdsourced commonsense knowledge acquisition, recruiting web volunteers to complete prompts like "a knife is used to..." and "something dangerous might be...". This produced the ConceptNet knowledge graph (Liu and Singh, 2004), which aggregated commonsense facts into a [[Semantic Network]] with relation types such as UsedFor, CapableOf, HasProperty, PartOf, and IsA. ConceptNet 5.5 (Speer et al., 2017) extended this to cover 304 languages and integrate sources including Wiktionary, WordNet, FrameNet, and OpenCyc, reaching over 35 million assertions across 8 million concepts in the most recent releases.

  The same period saw the formalisation of [[Non-Monotonic Reasoning]] as a discipline: Reiter's [[Default Logic]] (1980), McCarthy's circumscription (1980), Moore's autoepistemic logic (1985), and later Brewka's prioritised default theories provided the formal machinery for defeasible commonsense inference, though each remained computationally challenging at the scale required for broad-coverage commonsense systems.

  **2010s: The Neural Transition**
  Word embeddings (Word2Vec, Pennington et al. GloVe, 2014) showed that distributed vector representations encode substantial commonsense knowledge implicitly: the vector for "doctor" minus "man" plus "woman" approximates "nurse"; the vector for "puppy" is closer to "dog" than to "cat." These implicit encodings were not explicit propositional knowledge, but they captured the distributional regularities of the commonsense world as reflected in text. Large-scale [[Transfer Learning]] via BERT (Devlin et al., 2018) and GPT-2 (Radford et al., 2019) dramatically improved performance on commonsense benchmarks by training on web-scale corpora where commonsense facts appear in context.

  The Allen Institute for AI released the ATOMIC knowledge graph (Sap et al., 2019), PIQA (Bisk et al., 2020), Social IQa (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), and developed the COMET commonsense transformer (Bosselut et al., 2019), establishing a vibrant benchmark ecosystem that documented rapid LLM progress alongside persistent gaps in compositional and physical commonsense.

  **2020s–2026: The Gap Between Benchmark Scores and Real Capability**
  By 2021, fine-tuned large language models achieved near-human performance on HellaSwag (>95%), CommonsenseQA (>90%), and WinoGrande (>90%), suggesting commonsense reasoning might be solved. Adversarial evaluation quickly undermined this conclusion: model performance on HellaSwag-Hard, challenge sets, and out-of-distribution probes remained substantially below human performance. The viral 2025 car-wash evaluation revealed that even frontier models failed at a straightforward physical commonsense problem (drive versus walk to a car wash). BrainBench (2026) provided systematic taxonomy of commonsense failure modes, while Logical-CommonsenseQA (2026) targeted compositional commonsense-logic integration.

  ## Mathematical Foundations

  Commonsense reasoning does not have a single mathematical framework — it is precisely characterised by the failure of standard formal logics to capture everyday inference. The principal formalisms are:

  **Default Logic (Reiter, 1980)**: A default is a rule of the form α : β₁, …, βₙ / γ, read "if α holds and it is consistent to assume β₁, …, βₙ, then conclude γ." The set of beliefs sanctioned by a set of defaults is called an extension; the existence of multiple extensions models the ambiguity inherent in commonsense reasoning. Default Logic provides a formal account of defeasibility but does not scale to the millions of commonsense facts in resources like ConceptNet.

  **Circumscription (McCarthy, 1980)**: The Abnormality minimisation approach — assume all entities are normal (satisfy default predicates) unless forced otherwise by available evidence. Formally, circumscription minimises the extension of an "abnormal" predicate subject to fixing other predicates. This captures the closed-world assumption that default reasoning requires but is second-order and computationally intractable in general.

  **Probabilistic Soft Logic (PSL) and Markov Logic Networks (MLN)**: These formalisms ground predicate logic in probability theory — each logical rule is a soft constraint with an associated weight; the probability of a configuration of truth values is given by a log-linear model. MLNs can represent commonsense rules (e.g. "persons born in country X are probably citizens of country X") with graded confidence, supporting probabilistic [[Inference]]. PSL uses continuous truth values in [0,1] and convex optimisation for inference, enabling scale-up to web-sized [[Knowledge Graph]]s.

  **Bayesian Abductive Logic Programs (BALP)**: Combine abductive reasoning (inference to the best explanation) with probabilistic weights, supporting commonsense narrative understanding where the most probable explanation of observed events must be constructed from prior world knowledge.

  **Vector-Space Commonsense**: In neural approaches, commonsense knowledge is encoded implicitly in the weight matrix of [[Large Language Model]] feedforward layers, which act as a key-value memory mapping input tokens to associated world-knowledge features. [[Retrieval-Augmented Generation]] externalises this implicit knowledge by retrieving relevant [[Knowledge Base]] triples before inference, enabling explicit inspection of the commonsense facts consulted.

  ## Standards and Context

  There are no ISO or IEEE standards specifically governing commonsense reasoning systems. However, several community-driven resources and norms have quasi-standard status:

  - **ConceptNet 5.5 API**: The Commonsense Computing Group at MIT provides a public REST API returning ConceptNet assertions for any concept; it is the most widely used external commonsense knowledge resource in NLP research.
  - **ATOMIC-2020 release**: Hugging Face hosts ATOMIC-2020 as a downloadable dataset; the COMET model (trained to generate ATOMIC inferences) is available as a Hugging Face model hub checkpoint, establishing a de facto standard for generative commonsense augmentation.
  - **HellaSwag, WinoGrande, CommonsenseQA on SuperGLUE**: These benchmarks are included in or adjacent to the SuperGLUE benchmark suite, the dominant NLU evaluation framework for English-language models.
  - **BIG-Bench (2022)**: Google's Beyond the Imitation Game Benchmark includes multiple commonsense-reasoning tasks as part of its 204-task diverse evaluation suite, influencing how frontier model providers (Anthropic, Google, OpenAI) report commonsense performance.
  - **EU AI Act (2024) and UK AI Safety Institute**: Both reference benchmark robustness as a requirement for high-risk AI system evaluation; commonsense benchmarks are cited as exemplars of domain-general capability assessment. The UK AI Safety Institute's evaluation framework (2024) includes commonsense reasoning stress-testing as part of its pre-deployment model assessment protocol.
  - **NIST AI RMF (2023)**: The Risk Management Framework's MEASURE function references behavioural testing across diverse everyday situations — implicitly targeting commonsense robustness — as part of AI system evaluation.

  ## Key Terminology

  - **Defeasibility**: the property of commonsense conclusions that they hold by default but can be overridden by exceptional information.
  - **Frame problem**: the difficulty of efficiently representing which facts in a [[World Model]] change (and which persist) when an action is performed.
  - **Script**: a schematic knowledge structure (Schank 1977) encoding a prototypical sequence of events for a recurring situation type (e.g. "restaurant script").
  - **Default Logic**: Reiter's (1980) formal framework for defeasible reasoning using defaults of the form "if A and not known ¬B, then conclude C."
  - **ATOMIC**: the Atlas of Machine Commonsense for If-Then Reasoning (Sap et al., 2019); a large-scale commonsense knowledge graph focusing on social causal inference.
  - **ConceptNet**: a crowdsourced semantic network encoding 1.6 M+ commonsense assertions across 34 relation types (Liu and Singh, 2004; Speer et al., 2017).
  - **HellaSwag**: a physical-activity sentence-completion benchmark (Zellers et al., 2019) designed to defeat BERT-era models; frontier LLMs now exceed 95% accuracy.
  - **WinoGrande**: a large-scale Winograd schema challenge (Sakaguchi et al., 2021) requiring commonsense disambiguation of pronouns in adversarially constructed sentences.
  - **Circumscription**: McCarthy's (1980) second-order logical framework for abnormality minimisation; models the closed-world assumption underlying default reasoning.
  - **Markov Logic Network (MLN)**: Richardson and Domingos (2006) probabilistic-logical framework encoding commonsense rules as weighted first-order clauses in a log-linear model.
  - **Resolution limit**: in the context of commonsense benchmarks, refers to the phenomenon where improving on a benchmark does not necessarily improve real-world commonsense performance due to data leakage or shallow statistical patterns.
  - **COMET**: Commonsense Transformers (Bosselut et al., 2019) — a generative [[Large Language Model]] trained to produce ATOMIC-style if-then commonsense inferences for arbitrary input events.
  - **Open World Assumption (OWA)**: the epistemic stance (from [[Knowledge Representation]] and [[Description Logic]]) that absence of a fact from a knowledge base does not imply the fact is false; appropriate for commonsense reasoning where the knowledge base is necessarily incomplete.
  - **Theory of Mind (ToM)**: the ability to attribute mental states — beliefs, desires, intentions, emotions — to other agents and to reason about their likely behaviour; folk psychology's core competence; evaluated by the ToMi benchmark and Social IQa.
  - **Counterfactual Reasoning**: a form of commonsense reasoning about what would have happened if circumstances had been different ("If I had not left the tap on, the floor would not be wet"); evaluated by the COUNTERFACTUAL benchmark and implicitly probed by temporal causality tests in BrainBench.
  - **Tacit Knowledge**: the portion of commonsense knowledge that is never explicitly stated in any text or formal document and can only be acquired through experience or interaction with the physical and social world; the primary source of difficulty in building comprehensive commonsense AI systems. The vast majority of what people know about everyday life — the resistance of objects to penetration, the social awkwardness of silence in conversation, the predictable behaviour of containers and liquids — belongs to this category. Tacit knowledge acquisition motivates [[Embodied AI]], [[Multi-Modal Learning]], and grounded simulation approaches, and explains why purely text-trained [[Large Language Model]]s retain systematic commonsense gaps despite training on internet-scale corpora where only articulable knowledge is represented.
  - **Naive Physics**: the domain of commonsense knowledge governing the behaviour of everyday physical objects and substances — solidity, gravity, thermal properties, containment, rigidity, buoyancy, and motion. Naive physics is evaluated by PIQA, and constitutes the physical-world sub-component of [[Embodied AI]] reasoning requirements. It was the focus of Patrick Hayes's (1978) Naive Physics Manifesto, which argued that AI would need a formal theory of everyday physics far less mathematically demanding than Newtonian mechanics but far more comprehensive than any existing formalism.

  ## Connections to Ontology and Knowledge Engineering

  Commonsense reasoning has a complex relationship with formal [[Ontology]] and [[Knowledge Representation]] engineering. On one hand, the resources built for commonsense AI (ConceptNet, ATOMIC, Cyc) are themselves knowledge bases with ontological structure: ConceptNet's 34 relation types constitute a mini-ontology of semantic relationships; Cyc's microtheories implement a context mechanism analogous to [[Description Logic]] modules. On the other hand, the informal, open-ended, and defeasible nature of commonsense knowledge sits uneasily with the closed-world, monotonic, fully specified character of formal OWL [[Ontology|ontologies]].

  The gap between formal ontologies and commonsense knowledge bases has motivated research on commonsense ontologies — ontologies designed to capture everyday concepts with appropriately informal axioms. SUMO (Suggested Upper Merged Ontology) and OpenCyc represent attempts to build such resources, though their coverage and expressiveness remain limited compared to ConceptNet. The DOLCE (Descriptive Ontology for Linguistic and Cognitive Engineering) foundational ontology provides a philosophically grounded account of everyday entities (events, states, processes, physical objects, social objects) that aligns more closely with commonsense ontological commitments than engineering-focused upper ontologies like SUMO. Bridging commonsense [[Semantic Network]]s (ConceptNet's graph of assertions) with formal [[Description Logic]] ontologies (OWL 2 DL axiom sets) remains an active research challenge, addressed by efforts such as ConceptNet-OWL mappings and ATOMIC2OWL conversion pipelines.

  The [[Knowledge Graph]] paradigm has provided a middle ground: Wikidata's statement-and-qualifier data model allows qualified commonsense assertions ("water boils at 100°C at standard atmospheric pressure") that accommodate contextual exceptions without requiring full formal-logic expressiveness. Wikidata's size (1 billion+ statements, June 2026) and the availability of its SPARQL endpoint make it the largest queryable commonsense-adjacent [[Knowledge Base]] available for AI research, and it is increasingly used as an external commonsense grounding source in [[Retrieval-Augmented Generation]] pipelines.

  ## Research and Literature

  1. McCarthy, J. (1959). "Programs with common sense." Proceedings of the Teddington Conference on the Mechanisation of Thought Processes. HMSO, London.
  2. McCarthy, J. and Hayes, P. J. (1969). "Some philosophical problems from the standpoint of artificial intelligence." Machine Intelligence 4. Edinburgh University Press.
  3. Minsky, M. (1974). "A framework for representing knowledge." MIT AI Lab Memo 306. MIT.
  4. Reiter, R. (1980). "A logic for default reasoning." Artificial Intelligence 13(1–2): 81–132.
  5. Schank, R. C. and Abelson, R. P. (1977). Scripts, Plans, Goals, and Understanding. Lawrence Erlbaum.
  6. Lenat, D. B. (1995). "CYC: A large-scale investment in knowledge infrastructure." Communications of the ACM 38(11): 33–38.
  7. Liu, H. and Singh, P. (2004). "ConceptNet: A practical commonsense reasoning tool-kit." BT Technology Journal 22(4): 211–226.
  8. Speer, R., Chin, J., and Havasi, C. (2017). "ConceptNet 5.5: An Open Multilingual Graph of General Knowledge." AAAI 2017. https://arxiv.org/abs/1612.03975
  9. Sap, M. et al. (2019). "ATOMIC: An Atlas of Machine Commonsense for If-Then Reasoning." AAAI 2019. https://arxiv.org/abs/1811.00146
  10. Zellers, R. et al. (2019). "HellaSwag: Can a Machine Really Finish Your Sentence?" ACL 2019. https://arxiv.org/abs/1905.07830
  11. Talmor, A. et al. (2019). "CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge." NAACL 2019. https://arxiv.org/abs/1811.00937
  12. Bisk, Y. et al. (2020). "PIQA: Reasoning about Physical Intuition in Natural Language." AAAI 2020. https://arxiv.org/abs/1911.11641
  13. Sakaguchi, K. et al. (2021). "WinoGrande: An Adversarial Winograd Schema Challenge at Scale." Communications of the ACM 64(9): 99–106.
  14. Hwang, J. D. et al. (2021). "(Comet-)Atomic 2020: On Symbolic and Neural Commonsense Knowledge Graphs." AAAI 2021. https://cdn.aaai.org/ojs/16792/16792-13-20286-1-2-20210518.pdf
  15. Sap, M. et al. (2019). "Social IQa: Commonsense Reasoning about Social Interactions." EMNLP 2019. https://arxiv.org/abs/1904.09728
  16. Park, J. S. et al. (2019). "VisualCOMET: Reasoning about the Dynamic Context of a Still Image." ECCV 2020.
  17. Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. https://arxiv.org/abs/2201.11903
  18. Zellers, R. et al. (2018). "Swag: A Large-Scale Adversarial Dataset for Grounded Commonsense Inference." EMNLP 2018.
  19. Rajani, N. F. et al. (2019). "Explain Yourself! Leveraging Language Models for Commonsense Reasoning." ACL 2019.
  20. Bhargava, P. et al. (2022). "Commonsense Knowledge Base Completion with Structural and Semantic Context." AAAI 2022.
  21. Alan Turing Institute (2024). "Neuro-Symbolic AI Interest Group." https://www.turing.ac.uk/research/interest-groups/neuro-symbolic-ai
  22. Li, Y. et al. (2025). "HellaSwag-Pro: Self-bootstrapping Chinese Commonsense Evaluation." ArXiv 2025.
  23. AI Parivartan Research Lab (2025). "September 2025 LLM Commonsense and Social Benchmarks Report." Hugging Face Blog. https://huggingface.co/blog/rajkumarrawal/september-2025-aiprl-lir-commonsense-social
  24. BrainBench Authors (2026). "BrainBench: Exposing the Commonsense Reasoning Gap in Large Language Models." ArXiv 2026. https://arxiv.org/html/2603.14761
  25. Logical-CommonsenseQA Authors (2026). "Logical-CommonsenseQA: A Benchmark for Logical Commonsense Reasoning." ArXiv 2026. https://arxiv.org/html/2601.16504
  26. Hitzler, P. et al. (2022). "Neuro-Symbolic Approaches in Artificial Intelligence." National Science Review 9(6).
  27. Grice, H. P. (1975). "Logic and Conversation." In Cole, P. and Morgan, J. (Eds.), Syntax and Semantics vol. 3. Academic Press.

- ### Provenance
  - sources:: McCarthy 1959; Liu & Singh 2004 (ConceptNet); Sap et al. 2019 (ATOMIC); Zellers et al. 2019 (HellaSwag); Talmor et al. 2019 (CommonsenseQA); Hwang et al. 2021 (ATOMIC-2020); Alan Turing Institute neuro-symbolic AI group 2024; BrainBench ArXiv 2026; Logical-CommonsenseQA ArXiv 2026; AI Parivartan Research Lab September 2025 benchmark report; WebSearch 2026-06-21
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
