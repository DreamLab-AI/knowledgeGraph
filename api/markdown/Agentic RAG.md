public:: true

# Agentic RAG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agentic-rag",
  "@type": "Page",
  "vc:slug": "agentic-rag",
  "title": "Agentic RAG",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:rag-pipeline", "vc:label": "RAG Pipeline"},
    {"@id": "urn:visionflow:linked:agentic-ai", "vc:label": "Agentic AI"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:information-retrieval", "vc:label": "Information Retrieval"},
    {"@id": "urn:visionflow:linked:agent-loop", "vc:label": "Agent Loop"},
    {"@id": "urn:visionflow:linked:vector-database", "vc:label": "Vector Database"},
    {"@id": "urn:visionflow:linked:embedding-model", "vc:label": "Embedding Model"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:chain-of-thought", "vc:label": "Chain of Thought"},
    {"@id": "urn:visionflow:linked:function-calling", "vc:label": "Function Calling"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:query-rewriting", "vc:label": "Query Rewriting"},
    {"@id": "urn:visionflow:linked:hallucination-mitigation", "vc:label": "Hallucination Mitigation"},
    {"@id": "urn:visionflow:linked:question-answering", "vc:label": "Question Answering"},
    {"@id": "urn:visionflow:linked:semantic-search", "vc:label": "Semantic Search"},
    {"@id": "urn:visionflow:linked:dense-retrieval", "vc:label": "Dense Retrieval"},
    {"@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "Multi-Agent System"},
    {"@id": "urn:visionflow:linked:orchestration", "vc:label": "Orchestration"},
    {"@id": "urn:visionflow:linked:prompt-engineering", "vc:label": "Prompt Engineering"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:agent-memory", "vc:label": "Agent Memory"},
    {"@id": "urn:visionflow:linked:context-window-management", "vc:label": "Context Window Management"},
    {"@id": "urn:visionflow:linked:knowledge-base", "vc:label": "Knowledge Base"},
    {"@id": "urn:visionflow:linked:source-attribution", "vc:label": "Source Attribution"},
    {"@id": "urn:visionflow:linked:document-chunking", "vc:label": "Document Chunking"},
    {"@id": "urn:visionflow:linked:approximate-nearest-neighbour-search", "vc:label": "Approximate Nearest Neighbour Search"},
    {"@id": "urn:visionflow:linked:reranking", "vc:label": "Reranking"},
    {"@id": "urn:visionflow:linked:graph-rag", "vc:label": "GraphRAG"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-Tuning"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:task-planning", "vc:label": "Task Planning"},
    {"@id": "urn:visionflow:linked:knowledge-grounding", "vc:label": "Knowledge Grounding"},
    {"@id": "urn:visionflow:linked:ai-agents", "vc:label": "AI Agents"},
    {"@id": "urn:visionflow:linked:agent-orchestrator", "vc:label": "Agent Orchestrator"},
    {"@id": "urn:visionflow:linked:self-rag", "vc:label": "Self-RAG"},
    {"@id": "urn:visionflow:linked:corrective-rag", "vc:label": "Corrective RAG"},
    {"@id": "urn:visionflow:linked:enterprise-search", "vc:label": "Enterprise Search"},
    {"@id": "urn:visionflow:linked:multi-hop-reasoning", "vc:label": "Multi-Hop Reasoning"},
    {"@id": "urn:visionflow:linked:eu-ai-act", "vc:label": "EU AI Act"},
    {"@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow"},
    {"@id": "urn:visionflow:linked:foundation-models", "vc:label": "Foundation Models"},
    {"@id": "urn:visionflow:linked:embedding-search", "vc:label": "Embedding Search"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:hybrid-retrieval", "vc:label": "Hybrid Retrieval"},
    {"@id": "urn:visionflow:linked:streaming-rag", "vc:label": "Streaming RAG"},
    {"@id": "urn:visionflow:linked:multimodal-ai", "vc:label": "Multimodal AI"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agentic-rag",
  "@type": "Class",
  "label": "Agentic RAG",
  "definition": "Agentic RAG is an architecture that augments retrieval-augmented generation with an autonomous agent loop, letting a language model plan, decide when and what to retrieve, issue multiple queries across heterogeneous sources, reflect on retrieved evidence quality, reformulate queries, and verify results before generating a final response. Unlike the single-pass retrieve-then-read pipeline of naive RAG, Agentic RAG treats retrieval as a first-class action in a multi-step reasoning cycle, enabling resolution of multi-hop questions, adaptive source selection, self-correction, and iterative evidence accumulation under agent-controlled stopping criteria.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"},
    {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:agent-loop", "label": "Agent Loop"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:query-rewriting", "label": "Query Rewriting"},
      {"@id": "urn:ngm:class:retrieval-grader", "label": "Retrieval Grader"},
      {"@id": "urn:ngm:class:agent-orchestrator", "label": "Agent Orchestrator"},
      {"@id": "urn:ngm:class:self-rag", "label": "Self-RAG"},
      {"@id": "urn:ngm:class:corrective-rag", "label": "Corrective RAG"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-hop-reasoning", "label": "Multi-Hop Reasoning"},
      {"@id": "urn:ngm:class:hallucination-mitigation", "label": "Hallucination Mitigation"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:knowledge-grounding", "label": "Knowledge Grounding"},
      {"@id": "urn:ngm:class:source-attribution", "label": "Source Attribution"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:foundation-models", "label": "Foundation Models"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:dense-retrieval", "label": "Dense Retrieval"},
      {"@id": "urn:ngm:class:reranking", "label": "Reranking"},
      {"@id": "urn:ngm:class:hybrid-retrieval", "label": "Hybrid Retrieval"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:graph-rag", "label": "GraphRAG"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:enterprise-search", "label": "Enterprise Search"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ]
  },
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:link-resolution:agentic-rag",
  "@type": "LinkResolutionsAnnotation",
  "resolutions": [
    {"vc:raw": "Retrieval-Augmented Generation", "@id": "urn:visionflow:linked:retrieval-augmented-generation", "kind": "ResolvedLink"},
    {"vc:raw": "RAG Pipeline", "@id": "urn:visionflow:linked:rag-pipeline", "kind": "ResolvedLink"},
    {"vc:raw": "Agentic AI", "@id": "urn:visionflow:linked:agentic-ai", "kind": "ResolvedLink"},
    {"vc:raw": "Large Language Models", "@id": "urn:visionflow:linked:large-language-models", "kind": "ResolvedLink"},
    {"vc:raw": "Information Retrieval", "@id": "urn:visionflow:linked:information-retrieval", "kind": "ResolvedLink"},
    {"vc:raw": "Agent Loop", "@id": "urn:visionflow:linked:agent-loop", "kind": "StubLink"},
    {"vc:raw": "Vector Database", "@id": "urn:visionflow:linked:vector-database", "kind": "ResolvedLink"},
    {"vc:raw": "Embedding Model", "@id": "urn:visionflow:linked:embedding-model", "kind": "ResolvedLink"},
    {"vc:raw": "Knowledge Graph", "@id": "urn:visionflow:linked:knowledge-graph", "kind": "ResolvedLink"},
    {"vc:raw": "Chain of Thought", "@id": "urn:visionflow:linked:chain-of-thought", "kind": "ResolvedLink"},
    {"vc:raw": "Function Calling", "@id": "urn:visionflow:linked:function-calling", "kind": "ResolvedLink"},
    {"vc:raw": "Tool Use", "@id": "urn:visionflow:linked:tool-use", "kind": "ResolvedLink"},
    {"vc:raw": "Query Rewriting", "@id": "urn:visionflow:linked:query-rewriting", "kind": "StubLink"},
    {"vc:raw": "Hallucination Mitigation", "@id": "urn:visionflow:linked:hallucination-mitigation", "kind": "ResolvedLink"},
    {"vc:raw": "Question Answering", "@id": "urn:visionflow:linked:question-answering", "kind": "ResolvedLink"},
    {"vc:raw": "Semantic Search", "@id": "urn:visionflow:linked:semantic-search", "kind": "ResolvedLink"},
    {"vc:raw": "Dense Retrieval", "@id": "urn:visionflow:linked:dense-retrieval", "kind": "ResolvedLink"},
    {"vc:raw": "Multi-Agent System", "@id": "urn:visionflow:linked:multi-agent-system", "kind": "StubLink"},
    {"vc:raw": "Orchestration", "@id": "urn:visionflow:linked:orchestration", "kind": "ResolvedLink"},
    {"vc:raw": "Prompt Engineering", "@id": "urn:visionflow:linked:prompt-engineering", "kind": "ResolvedLink"},
    {"vc:raw": "Natural Language Processing", "@id": "urn:visionflow:linked:natural-language-processing", "kind": "ResolvedLink"},
    {"vc:raw": "Agent Memory", "@id": "urn:visionflow:linked:agent-memory", "kind": "ResolvedLink"},
    {"vc:raw": "Context Window Management", "@id": "urn:visionflow:linked:context-window-management", "kind": "StubLink"},
    {"vc:raw": "Knowledge Base", "@id": "urn:visionflow:linked:knowledge-base", "kind": "ResolvedLink"},
    {"vc:raw": "Source Attribution", "@id": "urn:visionflow:linked:source-attribution", "kind": "StubLink"},
    {"vc:raw": "Document Chunking", "@id": "urn:visionflow:linked:document-chunking", "kind": "ResolvedLink"},
    {"vc:raw": "Approximate Nearest Neighbour Search", "@id": "urn:visionflow:linked:approximate-nearest-neighbour-search", "kind": "ResolvedLink"},
    {"vc:raw": "Reranking", "@id": "urn:visionflow:linked:reranking", "kind": "ResolvedLink"},
    {"vc:raw": "GraphRAG", "@id": "urn:visionflow:linked:graph-rag", "kind": "StubLink"},
    {"vc:raw": "Fine-Tuning", "@id": "urn:visionflow:linked:fine-tuning", "kind": "ResolvedLink"},
    {"vc:raw": "Model Context Protocol", "@id": "urn:visionflow:linked:model-context-protocol", "kind": "ResolvedLink"},
    {"vc:raw": "Task Planning", "@id": "urn:visionflow:linked:task-planning", "kind": "StubLink"},
    {"vc:raw": "Knowledge Grounding", "@id": "urn:visionflow:linked:knowledge-grounding", "kind": "StubLink"},
    {"vc:raw": "AI Agents", "@id": "urn:visionflow:linked:ai-agents", "kind": "ResolvedLink"},
    {"vc:raw": "Agent Orchestrator", "@id": "urn:visionflow:linked:agent-orchestrator", "kind": "ResolvedLink"},
    {"vc:raw": "Self-RAG", "@id": "urn:visionflow:linked:self-rag", "kind": "StubLink"},
    {"vc:raw": "Corrective RAG", "@id": "urn:visionflow:linked:corrective-rag", "kind": "StubLink"},
    {"vc:raw": "Enterprise Search", "@id": "urn:visionflow:linked:enterprise-search", "kind": "StubLink"},
    {"vc:raw": "Multi-Hop Reasoning", "@id": "urn:visionflow:linked:multi-hop-reasoning", "kind": "StubLink"},
    {"vc:raw": "EU AI Act", "@id": "urn:visionflow:linked:eu-ai-act", "kind": "StubLink"},
    {"vc:raw": "Agentic Workflow", "@id": "urn:visionflow:linked:agentic-workflow", "kind": "ResolvedLink"},
    {"vc:raw": "Foundation Models", "@id": "urn:visionflow:linked:foundation-models", "kind": "ResolvedLink"},
    {"vc:raw": "Embedding Search", "@id": "urn:visionflow:linked:embedding-search", "kind": "ResolvedLink"},
    {"vc:raw": "Transformer Architecture", "@id": "urn:visionflow:linked:transformer-architecture", "kind": "ResolvedLink"},
    {"vc:raw": "Hybrid Retrieval", "@id": "urn:visionflow:linked:hybrid-retrieval", "kind": "StubLink"},
    {"vc:raw": "Streaming RAG", "@id": "urn:visionflow:linked:streaming-rag", "kind": "StubLink"},
    {"vc:raw": "Multimodal AI", "@id": "urn:visionflow:linked:multimodal-ai", "kind": "ResolvedLink"}
  ]
}
```

- ### Definition
  - Agentic RAG is an architecture that wraps [[Retrieval-Augmented Generation (RAG)]] in an [[Agent Loop|autonomous agent control loop]], enabling a [[Large Language Models]] to plan when, where, and how many times to retrieve, to issue multiple queries across heterogeneous [[Knowledge Base]] sources, to reflect on retrieved evidence quality using self-generated critique tokens, to reformulate queries when retrieved passages are insufficient or contradictory, and to iterate the plan-retrieve-reason-verify cycle until a confidence threshold is met or a budget is exhausted before producing a final grounded response. Unlike the single-pass pipeline of a naive [[RAG Pipeline]] — query → embed → retrieve → generate — Agentic RAG treats retrieval as a first-class action in a multi-step reasoning process, generalising the static [[Retrieval-Augmented Generation]] paradigm into a dynamic, self-directed search procedure. The system employs [[Chain of Thought]] reasoning to externalise its retrieval decisions, [[Function Calling]] or [[Tool Use]] interfaces to invoke retrievers as executable tools, [[Query Rewriting]] to improve recall for ambiguous or under-specified questions, and a retrieval grader (in the [[Corrective RAG]] variant) or reflection tokens (in [[Self-RAG]]) to assess whether retrieved documents are relevant and sufficient before generation. This architectural extension to RAG substantially improves accuracy on [[Multi-Hop Reasoning]] questions that require evidence synthesis across multiple documents or knowledge sources — a class of questions where standard RAG consistently underperforms — at the cost of increased latency, token consumption, and [[Orchestration]] complexity. Agentic RAG is both an instantiation of [[Agentic AI]] specifically applied to retrieval-intensive tasks and an extension of the [[RAG Pipeline]] paradigm into the agentic loop; it therefore inherits the safety considerations of both parent architectures, including [[Prompt Engineering]] discipline, hallucination auditing via [[Source Attribution]], and latency budget management for production deployments. By mid-2026 it had become the default architecture for enterprise-grade [[Question Answering]], legal research, and compliance systems where single-shot retrieval was demonstrably inadequate.

- ### Semantic Classification
  - owl-class:: ai:AgenticRAG
  - owl-role:: ExecutableProtocol | Concept
  - owl-inferred:: ai:IterativeRetrievalSystem, ai:SelfCorrectiveRAG, ai:MultiHopQASystem, ai:AgentAugmentedRetrievalSystem
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Retrieval-Augmented Generation]], [[Information Retrieval]], [[Agentic Workflow]], [[AI Application]]
  - has-part:: [[Query Rewriting]], [[Agent Orchestrator]], [[Self-RAG]], [[Corrective RAG]], [[Retrieval-Augmented Generation]], [[Evidence Accumulator]], [[Retrieval Grader]]
  - requires:: [[Large Language Models]], [[Retrieval-Augmented Generation]], [[Agent Loop]], [[Vector Database]], [[Embedding Model]], [[Document Chunking]]
  - enables:: [[Multi-Hop Reasoning]], [[Hallucination Mitigation]], [[Question Answering]], [[Knowledge Grounding]], [[Source Attribution]], [[Semantic Search]], [[Enterprise Search]]
  - implements:: [[Chain of Thought]], [[Function Calling]], [[Tool Use]], [[Query Rewriting]], [[Reranking]], [[Hybrid Retrieval]], [[Adaptive RAG]]
  - depends-on:: [[Agentic AI]], [[RAG Pipeline]], [[Foundation Models]], [[Transformer Architecture]], [[Approximate Nearest Neighbour Search]]
  - supports:: [[Enterprise Search]], [[Natural Language Processing]], [[Knowledge Base]], [[Source Attribution]], [[Hallucination Mitigation]]
  - uses:: [[Dense Retrieval]], [[Hybrid Retrieval]], [[Knowledge Graph]], [[Embedding Search]], [[Approximate Nearest Neighbour Search]], [[Document Chunking]], [[Agent Memory]], [[Context Window Management]], [[Reranking]]
  - contrasts-with:: [[RAG Pipeline]], [[Fine-Tuning]], [[Parametric Knowledge]]
  - related-to:: [[Retrieval-Augmented Generation]], [[RAG Pipeline]], [[GraphRAG]], [[Semantic Search]], [[Orchestration]], [[Natural Language Processing]], [[Enterprise Search]], [[Agentic Workflow]], [[AI Agents]], [[Model Context Protocol]], [[Prompt Engineering]], [[Streaming RAG]], [[Multimodal AI]]
  - standardized-by:: [[EU AI Act]], [[Model Context Protocol]], [[NIST AI RMF]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:QueryRewriter))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:RetrievalGrader))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:AgentOrchestrator))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:SelfRAGModule))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:CorrectiveRAGModule))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:EvidenceAccumulator))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:hasPart ai:ConfidenceEstimator))
  ## Dependency Relationships
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:requires ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:requires ai:AgentLoop))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:requires ai:VectorDatabase))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:requires ai:EmbeddingModel))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:dependsOn ai:AgenticAI))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:dependsOn ai:RAGPipeline))
  ## Capability Relationships
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:MultiHopReasoning))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:HallucinationMitigation))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:KnowledgeGrounding))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:SourceAttribution))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:SemanticSearch))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:enables ai:EnterpriseSearch))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:supports ai:KnowledgeBase))
  ## Implementation Relationships
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:implements ai:ChainOfThought))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:implements ai:FunctionCalling))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:implements ai:QueryRewriting))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:implements ai:Reranking))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:uses ai:HybridRetrieval))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:uses ai:DenseRetrieval))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:uses ai:AgentMemory))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:uses ai:DocumentChunking))
  ## Reduction Relationships
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:reducesTo ai:RAGPipeline))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:contrastsWith ai:FineTuning))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:contrastsWith ai:ParametricKnowledge))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:relatedTo ai:GraphRAG))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:relatedTo ai:StreamingRAG))
      SubClassOf(ai:AgenticRAG
        ObjectSomeValuesFrom(ai:relatedTo ai:MultimodalAI))

  ## About
    Agentic RAG emerges from the convergence of two independently maturing research programmes: retrieval-augmented generation (RAG), which grounds language model outputs in dynamically retrieved external knowledge, and [[Agentic AI]], which gives language models the ability to plan multi-step actions, use tools, and iterate toward a goal. The combination addresses a fundamental limitation of naive [[RAG Pipeline]]: the assumption that a single retrieval pass with a fixed query is sufficient to gather all evidence needed to answer complex questions. In practice, enterprise knowledge-intensive tasks — multi-clause contract review, clinical evidence synthesis across conflicting trials, multi-jurisdiction regulatory compliance checking, competitive intelligence synthesis — routinely require evidence from multiple heterogeneous sources, iterative query reformulation as intermediate answers reveal knowledge gaps, and explicit reasoning about evidence sufficiency and contradictions before a reliable, auditable answer can be produced.

    The core architectural difference between Agentic RAG and standard RAG is the locus of control. In a standard [[RAG Pipeline]], the retrieval step is a fixed pre-processing action: the query goes in, top-k chunks come out, and the generator sees them once. In Agentic RAG, the language model itself is the controller: it decides whether to retrieve at all, what queries to issue to which sources, how many retrieval iterations are necessary, whether the retrieved evidence is relevant and sufficient, and when to generate the final answer. This transforms retrieval from a deterministic pre-processing step into a stochastic, reflective, goal-directed subprocess within the broader reasoning loop. The practical consequence is that Agentic RAG can handle questions where the relevant evidence is not obtainable by a single obvious query — because the answer to the first retrieval step contains pointers to what must be retrieved next.

    The foundational RAG paper (Lewis et al., 2020, NeurIPS) established the retrieve-then-read paradigm for open-domain [[Question Answering]], demonstrating that augmenting BART with a Wikipedia dense retriever via approximate nearest-neighbour search dramatically reduced hallucination and improved factual accuracy on Natural Questions and TriviaQA. The key insight — that a non-parametric memory (a searchable document corpus) decoupled from the parametric memory (model weights) provides the best of both worlds, updating knowledge without retraining — became the architectural foundation of the entire RAG ecosystem. Subsequent work extended RAG into iterative variants: IRCOT (Trivedi et al., EMNLP 2022) interleaved chain-of-thought reasoning steps with retrieval calls, showing 13–25% accuracy gains on multi-hop benchmarks MuSiQue, 2WikiMultiHop, and HotpotQA; FLARE (Jiang et al., EMNLP 2023) triggered retrieval only when the model's next-token confidence fell below a threshold, reducing unnecessary retrieval by 30–60% while maintaining accuracy; Self-RAG (Asai et al., ICLR 2024) trained a single model end-to-end to emit special reflection tokens — IsREL (is the retrieved passage relevant to the query?), IsSUP (does it support the generated claim?), IsUSE (is retrieval beneficial at all for this query?) — enabling inline critique without a separate evaluator module; Corrective RAG (Yan et al., 2024) introduced a lightweight retrieval evaluator that scored each retrieved chunk into correct / incorrect / ambiguous categories and fell back to web search when the internal knowledge base scored below threshold. These systems collectively defined the design space that Agentic RAG generalises: retrieval is not a fixed pre-generation step but a dynamic, reflective, iteratively controlled process driven by the model's own reasoning trajectory.

    By 2025–2026 the terminology had consolidated around the Agentic RAG label for systems where a [[Large Language Models]] acts as a controller that issues retrieval actions as [[Tool Use]] calls — via [[Function Calling]] or [[Model Context Protocol]] tool invocations — within a broader [[Agent Loop]]. This framing integrates naturally with LangGraph, LlamaIndex, and MCP: retrievers become MCP tools that the agent discovers and invokes dynamically, and the [[Orchestration]] framework manages state persistence across retrieval steps, concurrency for parallel retrievals, and token budget accounting. The Agentic RAG market grew from USD 3.8 billion in 2024 and is projected to reach USD 165 billion by 2034 at a CAGR of approximately 45%, driven by enterprise demand for adaptive, audit-trail-capable retrieval systems in regulated industries where the provenance chain from question to answer to source document is a compliance requirement, not merely a nice-to-have.

    The computational economics of Agentic RAG differ materially from standard RAG. A standard RAG query consumes 1 retrieval call and 1 LLM inference; a typical Agentic RAG query for a complex question consumes 3–8 retrieval calls, 2–5 intermediate LLM inferences for query rewriting and reflection, and 1 final generation inference. Total token cost is approximately 3–8x standard RAG, and latency increases from sub-500ms to 2–15 seconds for production deployments. These costs must be weighed against accuracy gains: the 18.4% improvement in answer accuracy on complex multi-hop questions documented in a 2026 arXiv study (2601.07711) translates to substantially reduced downstream errors in legal, clinical, and financial applications where a single wrong answer can have disproportionate consequences. Production deployments therefore typically implement **Adaptive RAG** — routing simple queries to standard single-pass RAG and complex queries to the agentic loop, based on a lightweight complexity classifier — to achieve cost-optimal performance across a heterogeneous query workload.

  ## Components / Architecture
    **Core Agentic RAG Stack**

    The Agentic RAG stack is a superset of the standard [[RAG Pipeline]], adding an agent control loop, query planning, iterative retrieval management, and evidence quality assessment on top of the standard index-retrieve-generate flow. Each component can be independently swapped: production teams typically start with a LangChain or LlamaIndex implementation and replace individual components as performance profiling reveals bottlenecks.

    The **Planner / Controller** is the [[Large Language Models]] that receives the user query, analyses its complexity and information requirements, decomposes it into a retrieval plan (which sources to consult, in what order, with what sub-queries), issues retrieval calls as [[Function Calling]] or [[Tool Use]] invocations, inspects retrieved evidence, decides whether to continue retrieving or generate the final answer, and produces the final grounded response. The choice of backbone model is critical: the planner must reliably follow structured tool-calling conventions, produce coherent [[Chain of Thought]] reasoning about retrieval sufficiency, and generate accurate summaries of retrieved evidence. As of 2026, Claude Opus 4, GPT-4o, and Gemini 1.5 Pro are the most widely used planner models in production Agentic RAG systems, selected for their strong tool-calling consistency and long-context handling.

    The **[[Query Rewriting]] module** transforms the original user query — which may be ambiguous, colloquial, or missing key terms — into one or more specialised sub-queries optimised for each retrieval source. Query rewriting is critical for recall: the original user query often uses different vocabulary than the documents it is trying to retrieve, a fundamental vocabulary mismatch that has been studied since the earliest IR systems. Techniques include: *HyDE* (Hypothetical Document Embeddings, Gao et al. 2022) — asking the LLM to generate a hypothetical answer document, then using that document's embedding for retrieval rather than the query's embedding; *step-back prompting* — asking the LLM to abstract the query to a higher-level concept before retrieval; *multi-query decomposition* — generating multiple alternative reformulations of the same question and retrieving for each, then taking the union of results; and *chain-of-thought query rewriting* — having the LLM reason about what evidence is needed before formulating the retrieval query.

    The **retriever pool** is a collection of retrieval tools exposed as [[Function Calling]] interfaces, enabling the planner to select the appropriate retriever for each sub-query. A typical enterprise retriever pool includes: dense [[Vector Database]] retrieval (FAISS, Qdrant, Weaviate, Pinecone, pgvector — each with different consistency, scalability, and latency profiles); [[Knowledge Graph]] traversal via SPARQL, Cypher (Neo4j), or property graph query languages; BM25 sparse retrieval via Elasticsearch or OpenSearch for exact keyword matching and recency-sorted retrieval; web search via Bing Search API, Brave Search API, or Google Custom Search for out-of-knowledge-base queries; SQL query tools for structured relational databases; REST API connectors for live data sources (CRM systems, ticketing systems, document management systems); and code execution tools for numerical and data analysis tasks. The [[Hybrid Retrieval]] pattern — combining dense and sparse retrieval with reciprocal rank fusion — is the 2026 production default, achieving better recall on both semantic and lexical query types than either approach alone.

    The **[[Reranking]] layer** is applied after the initial retrieval pass to refine the top-k results before context assembly. Cross-encoder rerankers (which jointly encode the query and each candidate passage) are more accurate than bi-encoder retrievers but too slow for first-stage retrieval at scale; they are therefore applied as a second-stage filter to the top-50 or top-100 retriever candidates, reducing them to the top-5 or top-10 that actually enter the context window. LLM-as-reranker approaches (asking the backbone model to score each retrieved passage for relevance) are increasingly used for their flexibility and alignment with the generator's preferences, at higher cost than dedicated cross-encoder models. RankGPT (Sun et al. 2023) and LLM Reranker are the most widely cited LLM-based reranking approaches.

    The **retrieval grader / reflection module** evaluates the quality and sufficiency of retrieved passages before generation, implementing the "corrective" dimension of Agentic RAG. Three implementation strategies exist: (1) *Classification head (CRAG approach)* — a lightweight model scores each retrieved passage as correct/incorrect/ambiguous and triggers a web search fallback if the internal knowledge base scores below threshold; (2) *Reflection tokens (Self-RAG approach)* — the generator model itself emits special tokens (IsREL, IsSUP, IsUSE) inline with its generation, enabling adaptive retrieval without a separate evaluator; (3) *Explicit LLM grading* — an LLM call after each retrieval step asking "Given the retrieved passages, do I have sufficient evidence to answer the question? What is still missing?" This third approach is the most flexible and most expensive, suitable for high-stakes deployments where evidence quality is critical.

    The **evidence accumulator** aggregates retrieved passages across multiple retrieval iterations, maintaining a structured evidence state that the planner can inspect, reason over, and annotate with confidence scores. In production implementations, the evidence accumulator is typically a structured dictionary mapping evidence snippets to their source metadata (document ID, chunk position, retrieval score, retrieval timestamp) — enabling the generator to produce [[Source Attribution]] citations that link specific claims to specific retrieved passages for downstream audit.

    **[[Context Window Management]]** addresses the challenge that total evidence accumulated across many retrieval iterations may exceed the [[Transformer Architecture]] context window. Strategies include: *MapReduce-style summarisation* — summarising each retrieved document independently, then synthesising summaries in a final reduce step; *compression* (RECOMP approach — selective or abstractive compression of retrieved passages to extract only the query-relevant portions); *RAPTOR* (recursive abstractive processing — hierarchical tree summarisation of retrieved documents enabling coarse-to-fine retrieval); and *streaming* — processing retrieved evidence incrementally as it arrives rather than batching all retrieval before generation.

    The **[[Agent Orchestrator]]** in multi-agent Agentic RAG coordinates specialist retrieval agents operating in parallel — a web search agent, a vector database agent, a SQL agent, and a [[Knowledge Graph]] traversal agent might run concurrently on different aspects of the same complex query — and orchestrates the synthesis flow: an analyst agent synthesises findings from the retrieval agents, a critic agent validates claims and identifies contradictions between sources, and a writer agent formats the final response with [[Source Attribution]]. LangGraph's parallel node execution and Temporal.io's workflow durability infrastructure are commonly used to implement this pattern.

    **Specialised Agentic RAG Variants**

    *Self-RAG* trains the backbone model end-to-end with special reflection tokens interspersed throughout generation, enabling adaptive retrieval at the granularity of individual claims within a generated response rather than at the query level. IsREL, IsSUP, and IsUSE tokens allow the model to decide on a per-sentence basis whether additional retrieval is needed, whether the most recently retrieved passage supports the current claim, and whether the retrieved passage is useful at all. Self-RAG achieved 5.8% hallucination rate in 2025 MDPI benchmark evaluations — the lowest among 12 RAG variants — but requires fine-tuning the backbone model with specially constructed training data, making it less accessible than prompt-based approaches.

    *Corrective RAG (CRAG)* adds a lightweight retrieval evaluator after each retrieval step that classifies retrieved passages as correct (score ≥ 0.7), incorrect (score ≤ 0.3), or ambiguous (0.3–0.7). Incorrect retrievals from the internal knowledge base trigger a fallback to web search to supplement. CRAG achieved Precision@5 = 0.69, 10.5% hallucination rate, and 240ms latency in 2025 production benchmarks — making it one of the most cost-efficient Agentic RAG variants for deployments with mixed internal/external knowledge requirements.

    *[[GraphRAG]]* (Microsoft, arXiv:2404.16130, 2024) structures the knowledge base as a [[Knowledge Graph]] built from entity extraction over the source corpus, applying Leiden community detection to identify thematic clusters, generating hierarchical community summaries, and using those summaries for global synthesis queries. This enables queries like "what are the major themes across this document set?" that are fundamentally impossible for vector-only retrieval. LazyGraphRAG (Microsoft, 2025) reduces the indexing cost to 0.1% of full GraphRAG by computing community summaries at query time rather than at ingestion, making the approach viable for corpora exceeding 10 million chunks.

    *FLARE* (Forward-Looking Active REtrieval, Jiang et al. 2023) triggers retrieval conditionally: during sentence generation, if any token's log-probability falls below a threshold (indicating low confidence), FLARE pauses generation, uses the low-confidence span as a retrieval query, retrieves relevant passages, and resumes generation conditioned on those passages. This reduces unnecessary retrieval by 30–60% vs. always-retrieve approaches while maintaining retrieval on precisely the claims where the model's parametric knowledge is insufficient.

    *Adaptive RAG* (Jeong et al. 2024) is the production-pragmatic synthesis: a query complexity classifier routes simple factoid queries to standard single-pass RAG (sub-200ms, minimal cost) and complex multi-hop queries to the full agentic loop (1–10s, 3–8x cost), achieving cost-optimal quality across a heterogeneous query workload without forcing every query through the expensive agentic loop.

    *RELOOP* (Recursive retrieval with multi-hop reasoner and planners, arXiv:2510.20505, 2025) achieved 94.5% on HotpotQA and 89.7% on 2WikiMultiHop in 2025 evaluations by recursively formulating sub-questions based on intermediate retrieval results and maintaining an explicit reasoning plan that specifies which knowledge gaps remain to be filled.

    *Multi-agent RAG* distributes the retrieval and synthesis workflow across specialist agents operating in parallel: an orchestrator decomposes the query; specialist retrieval agents (web, vector, graph, SQL) pull from different sources simultaneously; an analyst agent synthesises their outputs; a critic agent validates claims and identifies source conflicts; a writer agent formats the final response. This architecture maximises retrieval breadth and enables quality controls at each transition between agent roles, at the cost of orchestration overhead and inter-agent communication complexity.

  ## Use Cases / Major Families
    **Legal research and contract analysis** is the most commercially mature Agentic RAG application. Legal questions are inherently multi-hop: answering "Is this contract clause compliant with the UK's GDPR implementation and the EU AI Act?" requires retrieving from the UK GDPR (as retained EU law), the EU AI Act text, CJEU case law, ICO guidance, and the contract itself — then synthesising evidence across all sources. Agentic RAG's iterative retrieval, [[Source Attribution]] mandatory citation chains, and confidence-gated response generation directly satisfy auditor requirements for traceable, evidence-backed legal analysis. Harvey AI (London office, $3B+ valuation 2026) is the most prominent deployment, with Lexis+ AI (RELX), Westlaw Edge (Thomson Reuters), Luminance (Cambridge-based), and Kira Systems (Litera) as competitors. UK law firms including Clifford Chance, Linklaters, and Allen & Overy Shearman all deployed Agentic RAG in contract review workflows during 2025. Squire Patton Boggs documented a 60% reduction in contract review time from Agentic RAG deployment.

    **Clinical decision support** is the highest-stakes Agentic RAG application, where evidence quality failures have direct patient safety implications. Clinical questions require synthesising evidence from heterogeneous sources: clinical trial databases (ClinicalTrials.gov, EU Clinical Trials Register), drug interaction databases (BNF, DrawnUp), NICE guidelines and SIGN guidelines for UK practice, local formulary data, and patient records (with appropriate access controls). Multi-hop reasoning is essential for differential diagnosis questions, where the answer to "Is this symptom pattern consistent with diagnosis X?" requires evidence from pharmacology, pathophysiology, epidemiology, and clinical guidelines databases — none of which contains the answer alone. NHS England piloted Agentic RAG for MHRA regulatory intelligence and NICE guidance navigation in Q1 2026, with the Northern Health Science Alliance coordinating evaluation across Manchester, Leeds, Sheffield, and Newcastle NHS trusts. The primary barrier is not technical but governance: clinical decision support systems require MHRA medical device registration when used for diagnostic purposes, creating regulatory friction that slows deployment.

    **Financial compliance and analysis** uses Agentic RAG to synthesise evidence from regulatory filings (Companies House, FCA Financial Services Register, EDGAR for US cross-listed entities), earnings reports (PDF extraction from company investor relations pages), regulatory update feeds (FCA Policy Statements, PRA Supervisory Statements, UK Statutory Instruments), and news feeds to answer complex analyst and compliance officer queries. Iterative retrieval is essential when a query requires cross-referencing figures across multiple filings — a question about a company's related-party transactions requires the primary filing, the annual accounts, any regulatory investigations, and the company's own internal policies, assembled iteratively. Bloomberg Intelligence, FactSet's AI assistant, and Refinitiv Eikon's AI layer are production deployments. UK fintech firms including Monzo and Starling have deployed Agentic RAG for AML (Anti-Money Laundering) compliance checking.

    **Enterprise knowledge management** is the highest-volume Agentic RAG deployment category, serving internal helpdesks, HR policy assistants, IT support bots, and procurement advisers that must traverse multiple policy documents, FAQs, process documentation, and escalation procedures to resolve complex employee queries. The defining characteristic is the heterogeneity of the knowledge base: enterprises typically have documentation across multiple systems (SharePoint, Confluence, Google Drive, ServiceNow, Salesforce Knowledge) in inconsistent formats and inconsistent metadata. Agentic RAG's ability to route retrieval queries to appropriate source systems and iteratively gather evidence from multiple sources addresses this heterogeneity problem that single-pass RAG cannot handle. ServiceNow Now Assist and Salesforce Agentforce both integrate Agentic RAG as their primary knowledge access layer.

    **Scientific literature synthesis** uses Agentic RAG to generate evidence-based summaries from PubMed (37M+ citations), arXiv, bioRxiv, SSRN, institutional repositories, and proprietary research databases. The multi-hop capability is essential for systematic review-style questions that require synthesising evidence across hundreds of papers — a domain where human researchers spend weeks and where the iterative nature of Agentic RAG's retrieval enables progressive evidence accumulation. Semantic Scholar's Research Assistant, Elsevier's SciVal AI, and Consensus (AI search engine for scientific consensus) are production instances. The UK academic context is significant: UKRI's research landscape tool integrated Agentic RAG for grant landscape analysis in 2025, with Edinburgh and UCL among the early adopting institutions.

    **Regulatory compliance monitoring** applies Agentic RAG to the continuous surveillance of regulatory update feeds (EU Official Journal, FCA Policy Statements, UK Statutory Instruments, SEC rulemaking), detecting changes relevant to specific product or service compliance profiles and generating impact assessments. This requires iterative retrieval across the update feed (to identify relevant changes), the current regulatory text (to understand the change in context), the organisation's product documentation (to identify affected products), and historical guidance (to understand previous interpretations). The time-sensitivity dimension — regulatory changes may have immediate compliance deadlines — pushes this use case toward [[Streaming RAG]] architectures that retrieve from live regulatory feeds rather than periodically re-indexed static corpora.

    **Code generation with documentation retrieval** is a rapidly growing use case where an agent retrieves from API reference documentation, GitHub issue histories, Stack Overflow, and internal code repositories before generating code completions or answering developer questions. GitHub Copilot's workspace feature, Amazon Q Developer, and Cursor AI all implement variants of this pattern. The Agentic RAG dimension — iterating retrieval as code errors surface during execution — is particularly valuable for complex library integrations where the correct usage pattern requires synthesising information from multiple documentation sources.

  ## Academic Context
    The intellectual lineage of Agentic RAG traces through three intersecting research communities: information retrieval (IR), natural language processing (NLP), and multi-agent systems. From IR, the key contributions are the transition from BM25 sparse retrieval (Robertson and Zaragoza, BM25 formalisation 2009) to neural dense retrieval — DPR (Karpukhin et al. 2020) using dual-encoder bi-encoders with FAISS indexing; GTR (Ni et al. 2021) scaling to larger encoders; ColBERT (Khattab and Zaharia 2020) with late interaction — and the subsequent adoption of approximate nearest-neighbour index structures: FAISS (Johnson et al. 2019, billion-scale similarity search); HNSW (Malkov and Yashunin 2018, hierarchical navigable small world graphs, now the default index in Qdrant, Weaviate, and Pinecone); and DiskANN (Jayaram et al. 2019, disk-based graph indexing for datasets too large for RAM). These index innovations transformed theoretical RAG into practical production systems by enabling sub-10ms retrieval over billion-document corpora.

    From NLP, the foundational work is the RAG paper itself (Lewis et al. 2020 NeurIPS), introducing the retrieve-then-read paradigm for open-domain [[Question Answering]], followed by the FiD (Fusion-in-Decoder, Izacard and Grave, EACL 2021) architecture that concatenated all retrieved passages as input to a seq2seq model for superior multi-document reading comprehension; Atlas (Izacard et al., JMLR 2022) that jointly trained retriever and reader at scale; and RETRO (Borgeaud et al., ICML 2022) that integrated retrieval into the Transformer architecture itself via chunked cross-attention. These systems established retrieval as a first-class component of language model inference, not just a pre-processing step.

    The agentic extensions emerged from two sources that converged by 2023. First, the **ReAct paper** (Yao et al., ICLR 2023) demonstrated that interleaving chain-of-thought reasoning with tool calls — including a Wikipedia search tool — dramatically improved multi-step question answering: on HotpotQA, ReAct achieved 35.1% EM vs. 29.4% for chain-of-thought alone and 27.4% for act-only; on FEVER, 80.0% vs. 56.3% for chain-of-thought alone. Second, the **IRCOT paper** (Trivedi et al., EMNLP 2022) demonstrated that interleaving retrieval calls within chain-of-thought reasoning — each reasoning step can trigger a new retrieval — improved multi-hop accuracy by 13–25 percentage points over both standard chain-of-thought and standard single-pass RAG on MuSiQue, 2WikiMultiHop, and HotpotQA, establishing the empirical case for iterative retrieval.

    Subsequent landmark work refined specific components: FLARE (Jiang et al., EMNLP 2023) provided an efficient trigger mechanism for retrieval based on next-token uncertainty, avoiding unnecessary retrievals; RAPTOR (Sarthi et al., ICLR 2024) proposed recursive abstractive summarisation of document trees to enable coarse-to-fine retrieval; RECOMP (Shi et al., ICLR 2024) introduced selective and abstractive compression of retrieved passages to fit tight context budgets. Self-RAG (Asai et al., ICLR 2024) is the most widely cited Agentic RAG paper, training a single backbone model end-to-end with special reflection tokens for retrieval decision, passage relevance assessment, and claim support — achieving 5.8% hallucination rate in 2025 MDPI evaluations, the lowest among 12 RAG variants. Corrective RAG (Yan et al., arXiv 2024) introduced the lightweight evaluator-triggered web search fallback that became the standard production architecture for internal knowledge base + web search hybrid deployments. The RAGCap-Bench benchmark (arXiv:2510.13910, 2025) provides standardised capability evaluation across Agentic RAG dimensions including multi-hop reasoning, self-correction, source diversity, and budget adherence. The 2026 survey "Reasoning RAG via System 1 or System 2" (arXiv:2506.10408) provides the most comprehensive taxonomy of reasoning-augmented RAG architectures to date, distinguishing fast-system-1 (reflexive, shallow) retrieval strategies from slow-system-2 (deliberative, deep planning) approaches and mapping the trade-offs between latency, accuracy, and cost across the design space.

    [[GraphRAG]] — pioneered by Edge et al. (Microsoft Research, arXiv:2404.16130, 2024) — introduced the orthogonal dimension of knowledge-graph-structured retrieval. GraphRAG extracts entities and relationships from the source corpus into a [[Knowledge Graph]], applies community detection (Leiden algorithm) to identify thematic clusters, generates hierarchical summaries of each community, and uses these summaries for global synthesis queries ("what are the main themes in these 10,000 documents?") that vector-only systems cannot handle. LazyGraphRAG (Microsoft, 2025) reduced the indexing overhead of full GraphRAG by 99.9% by computing community summaries only at query time rather than at ingestion time — making the approach practical for large enterprise corpora and enabling the first production deployments at Fortune 500 scale. The GraphSearch framework (arXiv:2509.22009, 2025) further integrated graph traversal into an Agentic RAG workflow, achieving 10% accuracy improvements over standard approaches on knowledge-intensive multi-hop benchmarks.

  ## Design Considerations and Production Patterns
    Moving Agentic RAG from prototype to production requires careful attention to several design dimensions that are not apparent in research implementations:

    **Retrieval budget management** — the number of retrieval iterations must be bounded to control latency and cost:
    - *Fixed budget* — allow at most N retrieval iterations per query (typically 3–8); simple to reason about but may be too few for genuinely complex queries.
    - *Confidence-gated stopping* — continue retrieving until the retrieval grader scores the accumulated evidence above a confidence threshold; allows more iterations for hard queries, fewer for easy ones.
    - *Token budget* — terminate retrieval when total accumulated token cost exceeds a per-query budget; ties stopping to cost directly.
    - *Timeout-based stopping* — stop retrieval after a wall-clock time limit regardless of confidence; suitable for real-time applications with strict SLA requirements.
    - *Adaptive routing* — classify query complexity before agentic loop entry; route simple queries to standard RAG, hard queries to agentic loop with higher budget.

    **Source diversity and credibility** — production Agentic RAG must manage heterogeneous retrieval sources:
    - *Source credibility weighting* — assign credibility scores to retrieval sources (e.g., peer-reviewed literature > institutional documentation > web pages > social media) and prefer higher-credibility sources when evidence conflicts.
    - *Temporal recency weighting* — for time-sensitive queries, apply a recency penalty to older documents; critical for regulatory compliance and market intelligence.
    - *Contradiction detection* — when retrieved passages contradict each other, flag the contradiction rather than selecting one arbitrarily; present the conflict to the user or trigger additional retrieval to resolve.
    - *Access control integration* — filter retrieval results by the querying user's access permissions before context assembly; ensure no PII or confidential content leaks across permission boundaries.
    - *Data residency compliance* — for UK GDPR and EU data sovereignty requirements, ensure retrieval sources containing personal data are hosted within the required geographic boundary.

    **Chunking and indexing strategy** — the quality of [[Document Chunking]] and [[Embedding Model]] selection critically affects retrieval quality:
    - *Semantic chunking* — split documents at natural semantic boundaries (paragraphs, sections) rather than fixed character counts; preserves coherent evidence units.
    - *Overlapping chunks* — apply 10–20% overlap between consecutive chunks to prevent evidence loss at boundaries.
    - *Parent-child chunking* — index small chunks (150–300 tokens) for precise retrieval, but return the parent chunk (600–1200 tokens) as context to preserve surrounding information.
    - *Domain-adapted embeddings* — fine-tune [[Embedding Model]] on in-domain query-document pairs for 5–15% retrieval quality improvement over general-purpose encoders.
    - *Multi-vector indexing* — index each document with multiple embeddings representing different aspects (topic, entities, sentiment) for richer retrieval.

    **Hallucination mitigation beyond retrieval** — retrieval grounds generation but does not eliminate hallucination:
    - *Source-constrained generation* — instruct the generator to only make claims that are directly supported by retrieved passages; penalise extrapolation from parametric knowledge.
    - *Claim-level verification* — after generation, decompose the answer into individual claims and verify each against the retrieved passages using a separate verification model.
    - *Citation enforcement* — require the generator to include inline citations for every factual claim; uncited claims are flagged for human review.
    - *NLI-based faithfulness checking* — use a natural language inference (NLI) model to verify that each generated sentence is entailed by at least one retrieved passage.
    - *Uncertainty communication* — when evidence is insufficient or conflicting, generate an uncertainty-qualified answer ("The available evidence suggests X, but Y sources indicate otherwise") rather than a falsely confident claim.

  ## Current Landscape (2026)
    By June 2026, Agentic RAG has moved from research prototype to production default for enterprise knowledge-intensive applications. The dominant implementation frameworks are **LangGraph** (LangChain) for production-grade stateful agent loops with durable execution and human-in-the-loop support; **LlamaIndex** as the retrieval-first framework purpose-built for connecting LLMs to large enterprise corpora; and **LangChain** for rapid prototyping and modular composition. Microsoft's **GraphRAG** open-source library and its LazyGraphRAG variant have become the standard for knowledge-graph-augmented retrieval. **RAGFlow** and **Haystack** (deepset) serve the deployment and pipeline-as-code market segment.

    Production architectures in 2026 increasingly adopt the **Adaptive RAG** pattern: a classifier routes simple queries to standard single-pass RAG (sub-200ms latency) and complex multi-hop queries to the agentic loop (1–10s latency), achieving optimal cost-quality trade-off across heterogeneous query workloads. Key performance benchmarks from 2025–2026 evaluations: RELOOP achieves 94.5% on HotpotQA and 89.7% on 2WikiMultiHop; Self-RAG achieves a 5.8% hallucination rate (lowest among 12 RAG variants in 2025 MDPI evaluation); CRAG achieves Precision@5 = 0.69 and 10.5% hallucination rate at 240ms latency. A 2026 study on arXiv (2601.07711) compared naive RAG, standard Agentic RAG, and Self-RAG in enterprise settings and found that Agentic RAG improved answer accuracy by 18.4% over standard RAG on complex multi-hop questions, at 3.2x the token cost.

    The regulatory environment is shaping enterprise deployment patterns. The [[EU AI Act]]'s GPAI obligations took effect in August 2025, requiring providers of Agentic RAG systems embedded in high-risk applications to maintain audit trails of retrieval decisions, source provenance records, and human oversight mechanisms. The EU Data Act (September 2025) affects how device and service data can be ingested into RAG knowledge stores. The UK ICO's 2026 guidance on agentic AI data protection emphasises that deploying organisations retain full controller responsibility for what the RAG agent retrieves and generates, creating demand for retrieval access-control and data residency features.

    UK-based mid-market firms, NHS trusts, and compliance-heavy financial institutions have been identified as primary Agentic RAG deployment targets. NHS England piloted Agentic RAG for MHRA regulatory intelligence by Q1 2026. Squire Patton Boggs and Clifford Chance both deployed Agentic RAG-based contract analysis tools in 2025. Poor data readiness — inconsistent document formats, inadequate metadata, missing access controls — remains the primary cause of Agentic RAG project failure in UK enterprise deployments.

  ## UK Context
    The UK is an active participant in both the research and deployment of Agentic RAG. At **UCL**, the Centre for Artificial Intelligence (with the UKRI generative AI hub) hosts research on retrieval quality, context-aware generation, and grounding verification that directly feeds into Agentic RAG architectures. UCL researchers are also engaged in trustworthy AI standards work relevant to Agentic RAG's [[Source Attribution]] and auditability requirements. **Imperial College London** has published work on knowledge graph integration for RAG and on evaluation metrics for grounded generation. The **University of Edinburgh**'s School of Informatics has longstanding expertise in [[Information Retrieval]] and open-domain [[Question Answering]] that underpins many of the multi-hop retrieval innovations central to Agentic RAG.

    **Cambridge**'s Language Technology group (now part of the NLP group in the Department of Computer Science and Technology) has contributed dense retrieval and multi-document reading comprehension work. **Manchester**'s School of Computer Science hosts research on Knowledge Graph construction and querying that is directly relevant to [[GraphRAG]] and structured Agentic RAG pipelines. The Alan Turing Institute (London, UK national AI institute) has published technical reports on RAG evaluation, hallucination measurement, and the safety implications of agentic retrieval in high-stakes domains.

    In Northern England, the NHS Digital AI Lab (Leeds) has been a driver of Agentic RAG adoption in clinical settings, piloting retrieval systems over NICE guidance and local formulary data. **Sheffield**'s natural language processing group (formerly at the Department of Computer Science, now part of the GATE platform ecosystem) has contributed open-source retrieval tools widely used in UK public-sector RAG deployments. The Northern Health Science Alliance's AI programme has funded Agentic RAG research for NHS trusts across Manchester, Leeds, Newcastle, and Sheffield.

    UK legal AI companies — Harvey AI (London office), Lexis+ AI (UK deployment), and Luminance (Cambridge-based) — are among the most advanced commercial Agentic RAG deployments globally. UK fintech firms including Monzo, Starling, and HSBC have invested in Agentic RAG for compliance and customer support automation. The Information Commissioner's Office (ICO) UK guidance (2026) is particularly significant: it confirms that retrieval audit logs must be retained as part of GDPR accountability obligations when Agentic RAG processes personal data, creating a specific UK compliance requirement that has driven demand for explainable, traceable retrieval architectures.

  ## Failure Modes and Mitigations
    Agentic RAG systems fail in characteristic ways that differ from both standard RAG and standard agentic AI failures:

    **Retrieval failures**:
    - *Query drift* — iterative query reformulation diverges from the original question; mitigation: anchor all reformulations to the original query in the system prompt.
    - *Vocabulary mismatch* — user query uses terminology that doesn't match document vocabulary; mitigation: HyDE query expansion, domain-adapted embeddings, hybrid sparse-dense retrieval.
    - *Source gap* — the answer is not in any indexed source; mitigation: web search fallback (CRAG pattern), explicit "no information available" response generation.
    - *Stale knowledge* — indexed documents are outdated; mitigation: temporal metadata filtering, streaming RAG updates, web search for recent facts.
    - *Context bleeding* — retrieved passages from earlier retrieval iterations are still in context and confuse later generations; mitigation: structured evidence accumulator that clearly separates evidence from different iterations.

    **Generation failures**:
    - *Citation hallucination* — the model cites a source that doesn't actually contain the cited claim; mitigation: NLI-based claim-citation verification after generation.
    - *Evidence selection bias* — the model preferentially cites earlier or more recent retrieved passages regardless of relevance; mitigation: explicit instruction to weight all passages equally, with reranker scores as guidance.
    - *Unsupported extrapolation* — the model draws conclusions that go beyond what retrieved passages support; mitigation: source-constrained generation instructions, constrained decoding.
    - *Contradictory synthesis* — retrieved passages conflict and the model generates a confident answer without flagging the contradiction; mitigation: contradiction detection as a post-retrieval step, uncertainty quantification in generation.

    **Orchestration failures**:
    - *Infinite retrieval loops* — the agent keeps retrieving without converging on sufficient evidence; mitigation: hard iteration limit, confidence-gated stopping criteria.
    - *Budget overrun* — token or cost budget exhausted before answer generation; mitigation: adaptive budget management that reserves generation budget before entering retrieval loop.
    - *Tool timeout cascades* — slow retrieval tool causes downstream agents to wait indefinitely; mitigation: timeout enforcement at tool invocation level, parallel retrieval with deadline-based result selection.

  ## Future Directions (2026-2030)
    The trajectory of Agentic RAG through 2030 is shaped by five converging developments. First, **streaming RAG** — retrieving from evolving knowledge streams in real time and maintaining continuously updated evidence graphs rather than static indexed corpora — will move from prototype (StreamingRAG builds evolving knowledge graphs from streaming inputs; Neuromem, arXiv:2602.13967, proposes granular decomposition of the streaming lifecycle in external LLM memory) to production by 2027, enabling applications like live financial market analysis, real-time regulatory change monitoring, and continuous threat intelligence for cybersecurity. The key technical challenge is maintaining index consistency under high-velocity updates without incurring the full re-indexing cost of static corpora.

    Second, **multimodal Agentic RAG** — retrieval across text, images, audio, video, and structured tables within a single agentic loop — will expand the applicable task space to domains like medical imaging interpretation (retrieving relevant prior case images alongside text notes), industrial inspection (retrieving equipment manuals and failure mode databases alongside sensor readings), and scientific discovery (retrieving molecular structure databases alongside text literature) by 2028. CollEX (arXiv:2504.07643) provides an early multimodal Agentic RAG system for interactive scientific collection exploration. The survey "Ask in Any Modality" (arXiv:2502.08826) maps the emerging landscape of multimodal RAG architectures. The primary barrier is the lack of standardised multimodal embedding spaces that allow cross-modal retrieval (finding images relevant to a text query and vice versa) at the scale required for enterprise deployments.

    Third, **long-horizon [[Agent Memory]]** systems will enable cross-session evidence accumulation, letting an Agentic RAG system build incrementally on previous research sessions rather than starting from scratch on each query. AMA-Bench (arXiv:2602.22769) specifically targets long-horizon memory evaluation for agentic applications. A-Mem (arXiv:2502.12110) proposes dynamic memory organisation modelled on the human Zettelkasten note-taking system. TeleMem and LiCoMemory address lightweight persistent memory for efficient long-term reasoning. These innovations collectively address the most significant limitation of current Agentic RAG: that each query starts without knowledge of previous related queries, leading to redundant retrieval work and inability to leverage insights accumulated over a research programme.

    Fourth, **on-device Agentic RAG** — running retrieval and generation on edge hardware for data-sovereign applications where cloud retrieval is prohibited by regulatory or security constraints — is projected to reach production quality by 2027–2028, driven by small language model (SLM) advances (Phi-4, Gemma 3, Llama 4 Scout at 3–7B parameters), efficient neural index structures like DiskANN, and quantised embedding models that fit in 2GB of RAM. This will be particularly relevant for NHS clinical deployments, defence applications, and financial institutions with strict data residency requirements.

    Fifth, successful enterprise deployments will treat Agentic RAG as a **knowledge runtime**: a persistent orchestration layer that manages retrieval, verification, reasoning, access control (attribute-based retrieval filtering by user role and data classification), audit trails (complete provenance from query to retrieved chunk to generated answer), and compliance gates as integrated, governed operations — analogous to how an enterprise data warehouse treats SQL queries. The NStarX analysis (2026) projects that by 2030, Agentic RAG knowledge runtimes will be as fundamental to enterprise AI infrastructure as SQL databases are to transactional systems, with the query planner (the LLM agent) taking on the role played by the SQL query optimiser: translating high-level information needs into efficient, access-controlled retrieval plans across heterogeneous data stores. The **SOPRAG** paper (arXiv:2602.01858) demonstrates this direction for industrial standard operating procedure retrieval, using multi-view graph experts to navigate complex procedural knowledge — a model for domain-specific Agentic RAG knowledge runtimes.

  ## Standards and Ecosystem
    The Agentic RAG ecosystem as of 2026 is characterised by framework plurality and emerging standardisation:

    **Implementation frameworks and their retrieval capabilities**
    - *LangGraph* (LangChain) — stateful agent graphs with durable execution; native support for cyclic graphs enabling iterative retrieval loops; LangGraph's retrieval nodes integrate with FAISS, Qdrant, Weaviate, Chroma, and pgvector out-of-box; human-in-the-loop interrupts enable supervised multi-hop retrieval.
    - *LlamaIndex* — the retrieval-first framework; extensive support for document ingestion, chunking, embedding, and indexing; LlamaIndex agents use OpenAI-style tool calling for retrieval; the RAGAs evaluation library integrates natively.
    - *Haystack* (deepset) — pipeline-as-code for RAG; strong enterprise documentation retrieval features; REST API deployment via Haystack API; community-contributed custom retrievers for domain-specific corpora.
    - *RAGFlow* — open-source Agentic RAG engine focused on document intelligence; native PDF, HTML, and Office document parsing with layout-aware chunking; visual pipeline builder for non-technical users.
    - *Microsoft GraphRAG* — open-source Python library implementing the GraphRAG and LazyGraphRAG patterns; uses Azure OpenAI by default but supports any OpenAI-compatible API.
    - *Dify* — no-code/low-code agent builder with RAG, knowledge base management, and workflow orchestration; popular in Asia-Pacific and UK SMB markets.

    **Retrieval infrastructure as of 2026**
    - *Qdrant* — most popular open-source vector database for Agentic RAG in 2026; Rust-based; supports payload filtering, HNSW indexing, and sparse-dense hybrid search; cloud-hosted (Qdrant Cloud) and on-premise.
    - *Weaviate* — open-source, schema-flexible vector database with built-in hybrid search (BM25 + dense); native GraphQL API; popular in academic and research deployments.
    - *Pinecone* — serverless managed vector database; strong enterprise SLAs; used in Harvey AI and Salesforce Agentforce deployments.
    - *pgvector* — PostgreSQL extension for vector storage; allows combining RAG retrieval with SQL queries in a single database; popular for UK financial and public-sector deployments with strict data residency requirements.
    - *MongoDB Atlas Vector Search* — vector search integrated into the MongoDB document store; widely adopted in content management and CMS-backed Agentic RAG applications.
    - *Elasticsearch / OpenSearch* — traditional inverted index search with vector search extensions; the dominant platform for hybrid sparse-dense retrieval in enterprise deployments with existing Elasticsearch infrastructure.

    **Retrieval quality metrics and evaluation tools**
    - *RAGAS* — automated reference-free evaluation of RAG pipelines; metrics: faithfulness (answer supported by context), answer relevance, context precision, context recall.
    - *TruLens* — production observability for RAG; logs retrieval and generation traces; computes hallucination rates and relevance scores online.
    - *RAGCap-Bench* — benchmark specifically targeting Agentic RAG capabilities; includes multi-hop, self-correction, and budget adherence dimensions.
    - *BEIR benchmark* — heterogeneous zero-shot retrieval evaluation across 18 domain-specific retrieval tasks; widely used to compare retrieval components.
    - *MTEB* — Massive Text Embedding Benchmark; evaluates [[Embedding Model]] quality across retrieval, clustering, classification, and semantic textual similarity; essential for selecting the right embedding model for a given domain.

    **Model Context Protocol integration for Agentic RAG**
    - MCP retriever servers expose vector database, knowledge graph, and web search tools with standardised schemas, enabling the agent planner to discover and invoke retrieval tools without framework-specific integration code.
    - MCP's tool result streaming enables incremental retrieval result delivery, allowing the agent to begin reasoning over early results while remaining retrievals are in progress.
    - MCP resource references enable citation tracking: retrieved documents are stored as MCP resources with stable URIs that can be referenced in the generated response for [[Source Attribution]].

  ## Key Benchmarks and Performance Comparisons (2024–2026)
    Benchmark performance of major Agentic RAG variants, enabling like-for-like comparison of architectural choices:

    **Multi-hop question answering (HotpotQA, 2WikiMultiHop, MuSiQue)**:
    - Standard RAG (single-pass, dense retrieval): HotpotQA F1 ~52%, 2WikiMultiHop F1 ~43%
    - IRCOT (interleaved chain-of-thought + retrieval): HotpotQA F1 ~65–70%, 2WikiMultiHop F1 ~60%
    - Self-RAG: HotpotQA EM ~52.4%, factuality score 0.74 vs. 0.56 for standard RAG
    - RELOOP: HotpotQA ~94.5%, 2WikiMultiHop ~89.7% (2025 evaluation)
    - HopRAG: ~10% absolute improvement on HotpotQA vs. naive RAG (2025 evaluation)

    **Hallucination rates (MDPI 2025 benchmark, 12 RAG variants)**:
    - Naive RAG: 12–14%
    - CRAG: 10.5% (Precision@5 = 0.69, latency 240ms)
    - Standard Agentic RAG: 10–12%
    - Self-RAG: 5.8% (lowest among 12 variants)

    **Latency profiles (enterprise production, 2025 data)**:
    - Standard single-pass RAG: 150–400ms
    - FLARE (adaptive retrieval): 300–700ms (fewer unnecessary retrievals)
    - CRAG: 240ms (benchmark) – 500ms (production)
    - Standard Agentic RAG (3 iterations): 2–5s
    - Multi-agent RAG (parallel specialist agents): 3–8s
    - Full GraphRAG (indexed): 4–12s
    - LazyGraphRAG (query-time summarisation): 8–30s

    **Cost comparison (per complex query, 2026 pricing)**:
    - Standard RAG: ~$0.002–0.005
    - Agentic RAG (3–5 iterations): ~$0.008–0.025
    - Multi-agent RAG: ~$0.02–0.08
    - Full GraphRAG: ~$0.05–0.15

    **Answer accuracy on complex enterprise queries (arXiv:2601.07711, 2026)**:
    - Naive RAG: baseline
    - Standard Agentic RAG: +18.4% accuracy on multi-hop questions vs. naive RAG
    - Self-RAG: +12.1% vs. naive RAG on factuality
    - Cost-adjusted quality (accuracy / token_cost): Agentic RAG wins above complexity threshold; standard RAG wins below

  ## Evaluation and Quality Assurance
    Evaluating Agentic RAG systems requires measurement across multiple quality dimensions that are partially in tension: **retrieval quality** (are the right passages being retrieved?), **answer faithfulness** (does the generated answer accurately reflect the retrieved evidence?), **answer relevance** (does the answer address the question?), **source attribution quality** (are source citations accurate and complete?), **efficiency** (how many retrieval iterations and tokens were consumed to reach the answer?), and **hallucination rate** (what fraction of claims in the generated answer are not supported by retrieved passages?).

    Standard RAG evaluation frameworks include **RAGAS** (Evaluation-as-a-Service, 2023), which computes faithfulness (cosine similarity between answer and retrieved passages), answer relevance (cosine similarity between answer and question), context precision (proportion of retrieved chunks that are actually relevant), and context recall (proportion of ground-truth relevant chunks that were retrieved). RAGAS is widely used for offline regression testing of RAG pipeline changes. **TruLens** (TruEra) provides online observability for production RAG pipelines with similar metrics. **RAGCap-Bench** (arXiv:2510.13910, 2025) extends these to specifically evaluate Agentic RAG capabilities: multi-hop retrieval success, self-correction under retrieved noise, query reformulation quality, and budget adherence.

    Benchmark performance for specific Agentic RAG variants as documented in 2025–2026 literature: Self-RAG achieves 5.8% hallucination rate (lowest among 12 variants in MDPI 2025 study); CRAG achieves Precision@5 = 0.69 and 10.5% hallucination rate at 240ms latency; RELOOP achieves 94.5% on HotpotQA and 89.7% on 2WikiMultiHop (2025 evaluation); standard naive RAG achieves 12–14% hallucination rates in the same 2025 MDPI study. The A-RAG paper (arXiv:2602.03442, 2026) reports that scaling agentic retrieval — increasing the number of retrieval steps and the diversity of retrieval sources — consistently improves accuracy on complex queries until context window limits are reached, at which point accuracy plateaus or degrades due to information overload.

    A critical evaluation concern for production deployments is **latency-quality trade-offs**: each additional retrieval iteration adds 300–2000ms to total response latency, creating a natural budget constraint. The 2026 arXiv study (2601.07711) "Is Agentic RAG worth it?" found that for simple single-hop questions, standard RAG outperforms Agentic RAG on cost-adjusted quality (accounting for both accuracy and token cost); for complex multi-hop questions, Agentic RAG's 18.4% accuracy advantage justifies the 3.2x token cost increase in high-stakes applications. This finding supports the Adaptive RAG routing strategy as the production-optimal architecture for mixed-complexity query workloads.

  ## Typical Deployment Architecture (Production Pattern)
    A representative production Agentic RAG deployment for an enterprise legal knowledge base follows this pattern:

    **Ingestion pipeline** (run at document intake):
    - Document parsing and format normalisation (PDF, DOCX, HTML → clean text)
    - Hierarchical chunking: section-level (800–1200 tokens) and paragraph-level (150–300 tokens) chunks
    - Metadata extraction: document date, source, jurisdiction, document type, access classification
    - Embedding generation: domain-adapted legal text bi-encoder (e.g., LegalBERT fine-tuned on in-domain pairs)
    - Dual indexing: HNSW vector index in Qdrant; BM25 inverted index in Elasticsearch
    - Knowledge graph extraction: entity recognition (parties, courts, legislation, dates) with spaCy / BERT-NER; relationship extraction into Neo4j
    - Access control tagging: documents tagged with data classification labels that will filter retrieval at query time

    **Query processing pipeline** (at query time):
    - Access control pre-filtering: retrieve only documents within the querying user's permission scope
    - Query complexity classification: simple factoid → standard RAG; complex multi-hop → agentic loop
    - Query rewriting: HyDE (generate hypothetical case summary), step-back (abstract to legal principle), multi-query (3 reformulations)
    - Parallel retrieval: dense vector search (top-30 from Qdrant), sparse BM25 search (top-30 from Elasticsearch), KG entity lookup (Neo4j)
    - Reciprocal rank fusion: merge retrieval lists into unified ranked candidate set (top-50)
    - Cross-encoder reranking: legal cross-encoder scores top-50 → select top-10
    - Retrieval grading: CRAG-style evaluator scores top-10 passages; below-threshold passages trigger web search via Westlaw API
    - Evidence accumulation: structured evidence dictionary with source metadata, retrieved content, and confidence scores
    - Context assembly: fit top-10 passages (or summarised version) within context window budget (typically 16k–32k tokens)
    - Generation with mandatory citation: [[Source Attribution]] enforced via constrained decoding or post-hoc NLI verification
    - Audit logging: full trace of queries, retrieved passages, confidence scores, and generated answer stored for compliance

    **Observability and quality assurance**:
    - Online evaluation: RAGAS faithfulness and answer relevance computed on sample of queries
    - Hallucination monitoring: NLI-based claim verification with alerts for low faithfulness scores
    - Retrieval quality monitoring: precision@5 computed on sampled queries with human-labelled relevance judgements
    - Latency monitoring: P50, P95, P99 latency by query type (simple RAG vs. agentic loop)
    - Cost monitoring: tokens consumed per query with budget alerting

  ## Research & Literature
    1. Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS 2020*.
    2. Karpukhin, V., Oguz, B., Min, S., Lewis, P., Wu, L., Edunov, S., Chen, D., & Yih, W. (2020). Dense passage retrieval for open-domain question answering. *EMNLP 2020*.
    3. Izacard, G., & Grave, E. (2021). Leveraging passage retrieval with generative models for open domain question answering. *EACL 2021*.
    4. Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). ReAct: Synergizing reasoning and acting in language models. *ICLR 2023*.
    5. Trivedi, H., Balasubramanian, N., Khot, T., & Sabharwal, A. (2022). Interleaving retrieval with chain-of-thought reasoning for knowledge-intensive multi-step questions. *EMNLP 2022*.
    6. Jiang, Z., Xu, F. F., Gao, L., Sun, Z., Liu, Q., Dwivedi-Yu, J., Yang, Y., Callan, J., & Neubig, G. (2023). Active retrieval augmented generation. *EMNLP 2023*.
    7. Asai, A., Wu, Z., Wang, Y., Sil, A., & Hajishirzi, H. (2024). Self-RAG: Learning to retrieve, generate, and critique through self-reflection. *ICLR 2024*.
    8. Yan, S.-Q., Gu, J.-C., Zhu, Y., & Ling, Z.-H. (2024). Corrective retrieval augmented generation. *arXiv:2401.15884*.
    9. Edge, D., Trinh, H., Cheng, N., Bradley, J., Chao, A., Mody, A., Truitt, S., & Larson, J. (2024). From local to global: A graph RAG approach to query-focused summarization. *arXiv:2404.16130*.
    10. Johnson, J., Douze, M., & Jégou, H. (2019). Billion-scale similarity search with GPUs. *IEEE Transactions on Big Data, 7*(3), 535–547.
    11. Malkov, Y. A., & Yashunin, D. A. (2018). Efficient and robust approximate nearest neighbor search using hierarchical navigable small world graphs. *IEEE TPAMI, 42*(4), 824–836.
    12. Shi, W., Min, S., Yasunaga, M., Seo, M., James, R., Lewis, M., Zettlemoyer, L., & Yih, W.-t. (2023). REPLUG: Retrieval-augmented language model pre-training. *arXiv:2301.12652*.
    13. Xu, P., Ping, W., Wu, X., McAfee, L., Zhu, C., Liu, Z., Subramanian, S., Bakhturina, E., Shoeybi, M., & Catanzaro, B. (2023). Retrieval meets long context large language models. *arXiv:2310.03025*.
    14. Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J., Wang, M., & Wang, H. (2024). Retrieval-augmented generation for large language models: A survey. *arXiv:2312.10997*.
    15. Trivedi, H., Balasubramanian, N., Khot, T., & Sabharwal, A. (2023). MuSiQue: Multihop questions via single-hop question composition. *TACL 11*, 539–556.
    16. Shao, Z., Gong, Y., Shen, Y., Huang, M., Duan, N., & Chen, W. (2023). Enhancing retrieval-augmented large language models with iterative retrieval-generation synergy. *EMNLP 2023 Findings*.
    17. Sarthi, P., Abdullah, R., Tuli, A., Khanna, S., Goldie, A., & Manning, C. D. (2024). RAPTOR: Recursive abstractive processing for tree-organized retrieval. *ICLR 2024*.
    18. Zhang, P., Liu, S., Feng, Y., Chen, M., Yin, D., Huang, X., & McKeown, K. (2023). Merging generated and retrieved knowledge for open-domain QA. *arXiv:2310.14393*.
    19. Shi, W., Min, S., Kulkarni, M., Dyer, C., Zettlemoyer, L., & Yih, W. (2023). RECOMP: Improving retrieval-augmented LMs with compression and selective augmentation. *ICLR 2024*.
    20. Fan, W., Ding, Y., Ning, L., Wang, S., Li, H., Yin, D., Chua, T.-S., & Li, Q. (2024). A survey on RAG meeting LLMs: Towards retrieval-augmented large language models. *KDD 2024*.
    21. Kiela, D., Petroni, F., Piktus, A., Maillard, M., Izacard, G., Shen, Y., Lippincott, T., Schuster, T., & Lewis, P. (2021). Improving wiki-based multi-hop question answering with graph neural networks. *arXiv:2101.03439*.
    22. Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E., Zhang, H., Gonzalez, J. E., & Stoica, I. (2024). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. *NeurIPS 2024*.
    23. Anonymous. (2025). Is agentic RAG worth it? An experimental comparison of RAG approaches. *arXiv:2601.07711*.
    24. Anonymous. (2025). Reasoning RAG via System 1 or System 2: A survey on reasoning agentic retrieval-augmented generation for industry challenges. *arXiv:2506.10408*.
    25. Anonymous. (2025). RAGCap-Bench: Benchmarking capabilities of LLMs in agentic retrieval augmented generation systems. *arXiv:2510.13910*.
    26. Anonymous. (2026). A-RAG: Scaling agentic retrieval-augmented generation. *arXiv:2602.03442*.
    27. NStarX Inc. (2026). *The next frontier of RAG: How enterprise knowledge systems will evolve (2026–2030)*. https://nstarxinc.com/blog/the-next-frontier-of-rag-how-enterprise-knowledge-systems-will-evolve-2026-2030/

  ## Related Ontology Concepts
    Agentic RAG connects to the following concepts in the knowledge graph — each representing a dependency, enablement, or contrast relationship that shapes how the architecture is understood and deployed:

    - [[Retrieval-Augmented Generation]] — the parent paradigm that Agentic RAG extends by adding the agent control loop
    - [[Agentic AI]] — the parent paradigm that Agentic RAG specialises toward retrieval-intensive knowledge tasks
    - [[RAG Pipeline]] — the simpler, single-pass variant that Agentic RAG supersedes for complex queries; persists as the Adaptive RAG fallback path
    - [[GraphRAG]] — the knowledge-graph-structured retrieval variant that extends Agentic RAG for global synthesis and multi-hop relational queries
    - [[Self-RAG]] — the end-to-end trained variant with reflection tokens; the strongest accuracy approach when fine-tuning is feasible
    - [[Corrective RAG]] — the production-pragmatic variant with web search fallback; most widely deployed CRAG pattern
    - [[Vector Database]] — core infrastructure for dense retrieval in all Agentic RAG variants
    - [[Embedding Model]] — converts queries and documents to dense vectors; quality critically determines retrieval precision
    - [[Hybrid Retrieval]] — the 2026 production default combining dense and sparse retrieval for maximum recall
    - [[Streaming RAG]] — the next-generation variant for real-time knowledge streams; prototype-to-production trajectory 2026–2027

- ### Provenance
  - sources:: Lewis et al. 2020 (RAG NeurIPS); Karpukhin et al. 2020 (DPR EMNLP); Yao et al. 2023 (ReAct ICLR); Trivedi et al. 2022 (IRCOT EMNLP); Jiang et al. 2023 (FLARE EMNLP); Asai et al. 2024 (Self-RAG ICLR); Yan et al. 2024 (CRAG arXiv); Edge et al. 2024 (GraphRAG arXiv); arXiv:2601.07711 (Is Agentic RAG worth it? 2026); arXiv:2506.10408 (Reasoning RAG Survey 2026); arXiv:2510.13910 (RAGCap-Bench 2025); arXiv:2602.03442 (A-RAG 2026); datanucleus.dev Agentic RAG Enterprise Guide 2026; nstarxinc.com RAG 2026-2030 Forecast; techment.com RAG Architectures 2026; ICO UK Agentic AI Data Protection Guidance 2026; EU AI Act 2024 (GPAI provisions August 2025); NStarX 2026 RAG Evolution Report
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
