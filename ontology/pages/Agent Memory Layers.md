public:: true

# Agent Memory Layers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-memory-layers",
  "@type": "Page",
  "vc:slug": "agent-memory-layers",
  "title": "Agent Memory Layers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:agent-memory", "vc:label": "Agent Memory"},
    {"@id": "urn:visionflow:linked:agent-harness", "vc:label": "Agent Harness"},
    {"@id": "urn:visionflow:linked:personal-agent-runtimes", "vc:label": "Personal Agent Runtimes"},
    {"@id": "urn:visionflow:linked:progressive-disclosure-harnesses", "vc:label": "Progressive Disclosure Harnesses"},
    {"@id": "urn:visionflow:linked:vector-database", "vc:label": "Vector Database"},
    {"@id": "urn:visionflow:linked:embeddings", "vc:label": "Embeddings"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window"},
    {"@id": "urn:visionflow:linked:episodic-memory", "vc:label": "Episodic Memory"},
    {"@id": "urn:visionflow:linked:semantic-memory", "vc:label": "Semantic Memory"},
    {"@id": "urn:visionflow:linked:procedural-memory", "vc:label": "Procedural Memory"},
    {"@id": "urn:visionflow:linked:working-memory", "vc:label": "Working Memory"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:cognitive-architecture", "vc:label": "Cognitive Architecture"},
    {"@id": "urn:visionflow:linked:agent-loop", "vc:label": "Agent Loop"},
    {"@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "Multi-Agent System"},
    {"@id": "urn:visionflow:linked:personalisation", "vc:label": "Personalisation"},
    {"@id": "urn:visionflow:linked:consolidation", "vc:label": "Consolidation"},
    {"@id": "urn:visionflow:linked:continual-learning", "vc:label": "Continual Learning"},
    {"@id": "urn:visionflow:linked:pgvector", "vc:label": "pgvector"},
    {"@id": "urn:visionflow:linked:weaviate", "vc:label": "Weaviate"},
    {"@id": "urn:visionflow:linked:pinecone", "vc:label": "Pinecone"},
    {"@id": "urn:visionflow:linked:privacy", "vc:label": "Privacy"},
    {"@id": "urn:visionflow:linked:gdpr", "vc:label": "GDPR"},
    {"@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow"},
    {"@id": "urn:visionflow:linked:task-automation", "vc:label": "Task Automation"},
    {"@id": "urn:visionflow:linked:information-retrieval", "vc:label": "Information Retrieval"},
    {"@id": "urn:visionflow:linked:ai-infrastructure", "vc:label": "AI Infrastructure"},
    {"@id": "urn:visionflow:linked:autonomous-agent", "vc:label": "Autonomous Agent"},
    {"@id": "urn:visionflow:linked:agent-identity", "vc:label": "Agent Identity"},
    {"@id": "urn:visionflow:linked:temporal-reasoning", "vc:label": "Temporal Reasoning"},
    {"@id": "urn:visionflow:linked:forgetting", "vc:label": "Forgetting"},
    {"@id": "urn:visionflow:linked:hallucination", "vc:label": "Hallucination"},
    {"@id": "urn:visionflow:linked:provenance", "vc:label": "Provenance"},
    {"@id": "urn:visionflow:linked:agentic-rag", "vc:label": "Agentic RAG"},
    {"@id": "urn:visionflow:linked:internal-ai-harness", "vc:label": "Internal AI Harness"},
    {"@id": "urn:visionflow:linked:external-ai-harness", "vc:label": "External AI Harness"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:coala", "vc:label": "CoALA"},
    {"@id": "urn:visionflow:linked:reflexion-pattern", "vc:label": "Reflexion Pattern"},
    {"@id": "urn:visionflow:linked:planning-and-scheduling", "vc:label": "Planning and Scheduling"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:human-in-the-loop", "vc:label": "Human-in-the-Loop"},
    {"@id": "urn:visionflow:linked:foundation-model", "vc:label": "Foundation Model"},
    {"@id": "urn:visionflow:linked:in-context-learning", "vc:label": "In-Context Learning"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-Tuning"},
    {"@id": "urn:visionflow:linked:self-reflection", "vc:label": "Self-Reflection"},
    {"@id": "urn:visionflow:linked:compression", "vc:label": "Compression"},
    {"@id": "urn:visionflow:linked:act-r", "vc:label": "ACT-R"},
    {"@id": "urn:visionflow:linked:harness-configuration-packs", "vc:label": "Harness Configuration Packs"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-memory-layers",
  "@type": "Class",
  "label": "Agent Memory Layers",
  "definition": "Persistent memory systems for AI agents providing contextual recall across sessions through vector retrieval, automatic summarisation, and state management — includes Mem0, letta, claude-mem, and agentlog.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.90,
  "subClassOf": [
      {
            "@id": "urn:ngm:class:agent-harness",
            "label": "Agent Harness"
      }
],
  "relations": {
      "requires": [
            {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
            {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
            {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
            {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
      ],
      "enables": [
            {"@id": "urn:ngm:class:personalisation", "label": "Personalisation"},
            {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
            {"@id": "urn:ngm:class:continual-learning", "label": "Continual Learning"}
      ],
      "hasPart": [
            {"@id": "urn:ngm:class:episodic-memory", "label": "Episodic Memory"},
            {"@id": "urn:ngm:class:semantic-memory", "label": "Semantic Memory"},
            {"@id": "urn:ngm:class:procedural-memory", "label": "Procedural Memory"},
            {"@id": "urn:ngm:class:working-memory", "label": "Working Memory"}
      ],
      "relatedTo": [
            {
                  "@id": "urn:ngm:class:personal-agent-runtimes",
                  "label": "Personal Agent Runtimes"
            },
            {
                  "@id": "urn:ngm:class:progressive-disclosure-harnesses",
                  "label": "Progressive Disclosure Harnesses"
            },
            {
                  "@id": "urn:ngm:class:agent-memory",
                  "label": "Agent Memory"
            },
            {
                  "@id": "urn:ngm:class:agentic-rag",
                  "label": "Agentic RAG"
            }
      ]
},
  "vc:termId": "AI-9915",
  "vc:schemaVersion": 2,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "FullEnrichment"
  }
}
```

- ### Definition
  - Agent Memory Layers are the structured, multi-tier infrastructure subsystems within an [[Agent Harness]] that provide an [[Autonomous Agent]] with persistent recall, cross-session continuity, and adaptive state management beyond the hard capacity limit of any single [[Context Window]]. Whereas [[Agent Memory]] as a conceptual category describes what agents can remember and why, Agent Memory Layers describes the engineering substrate — the concrete runtime implementations, storage backends, retrieval protocols, and consolidation pipelines — that make persistent memory a deployable production capability. The taxonomy follows the [[CoALA]] (Cognitive Architectures for Language Agents) framework formalised by Sumers et al. (2024): four functionally distinct tiers each with a dedicated storage engine, retrieval mode, and lifecycle policy. [[Working Memory]] occupies the active [[Context Window]] token buffer, holding the current observation, tool outputs, chain-of-thought scratchpad, and freshly retrieved fragments as immediately accessible in-context state — bounded by model context length but with zero retrieval latency. [[Episodic Memory]] persists time-stamped logs of prior observations, actions, and outcomes in a [[Vector Database]] using dense [[Embeddings]], retrieved by approximate nearest-neighbour similarity search weighted by recency and importance. [[Semantic Memory]] stores atemporal factual knowledge about users, projects, and domain entities in a [[Knowledge Graph]] with typed properties and traversal queries enabling multi-hop [[Information Retrieval]] that vector similarity alone cannot perform. [[Procedural Memory]] encodes generalised skill templates, tool-invocation patterns, and executable plan fragments — stored either as few-shot examples for the system prompt, a retrieval-indexed template library, or as parametric [[Fine-Tuning]] updates derived from successful agent trajectories. By mid-2026 this four-tier architecture is instantiated by four competing commercial frameworks — Mem0 (47K+ GitHub stars, $24M Series A, October 2025), Letta (MemGPT successor, OS-inspired virtual context management), Zep (temporal [[Knowledge Graph]] via Graphiti, SOC 2 / HIPAA / [[GDPR]] certified), and LangMem (LangChain-native, composability-first) — all targeting an agent memory infrastructure market valued at USD 6.3 billion in 2025 and projected to reach USD 28.5 billion by 2030 at 35% CAGR. These layers connect directly to the broader [[Agent Harness]] lifecycle: the harness manages the [[Agent Loop]], decides which tier to read from and write to on each step, enforces [[Agent Identity]] scoping so memories are attributed to the correct principal, and implements [[Privacy]]-aware [[Forgetting]] for [[GDPR]] Article 17 compliance. Mem0 reports 91% lower P95 latency and 90% token cost savings versus naive context stuffing, making memory layers not just a capability enhancement but an operational cost control mechanism for large-scale agent deployments. The field is maturing rapidly: the ICLR 2026 MemAgents workshop, AMA-Bench, MemBench, and MemFactory (arXiv:2603.29493) signal that agent memory layers have graduated from research curiosity to a core engineering discipline with its own benchmark suite, training frameworks, and production deployment patterns.

- ### Semantic Classification
  - owl-class:: ai:AgentMemoryLayers
  - owl-role:: Concept | PersistenceInfrastructure | CognitiveInfrastructure
  - owl-inferred:: ai:EpisodicStore, ai:SemanticStore, ai:ProceduralStore, ai:WorkingMemoryBuffer, ai:ConsolidationPipeline, ai:MemoryRouter
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[AI Infrastructure]], [[Cognitive Architecture]]
  - has-part:: [[Episodic Memory]], [[Semantic Memory]], [[Procedural Memory]], [[Working Memory]], [[Knowledge Graph]], [[Vector Database]], [[Consolidation Pipeline]], [[Memory Router]]
  - requires:: [[Vector Database]], [[Embeddings]], [[Retrieval-Augmented Generation]], [[Context Window]], [[Foundation Model]], [[Agent Identity]], [[Large Language Models]], [[Agent Loop]]
  - enables:: [[Personalisation]], [[Agentic Workflow]], [[Task Automation]], [[Continual Learning]], [[Planning and Scheduling]], [[Self-Reflection]], [[In-Context Learning]], [[Multi-Agent System]], [[Agentic RAG]]
  - implements:: [[Reflexion Pattern]], [[CoALA]], [[ACT-R]], [[Information Retrieval]], [[Approximate Nearest Neighbour Search]]
  - depends-on:: [[Embeddings]], [[Vector Database]], [[Knowledge Graph]], [[Agent Loop]], [[Large Language Models]], [[Foundation Model]], [[Retrieval-Augmented Generation]]
  - supports:: [[Multi-Agent System]], [[AI Safety]], [[Human-in-the-Loop]], [[Provenance]], [[Agent Identity]], [[Agentic RAG]], [[Autonomous Agent]], [[Temporal Reasoning]]
  - uses:: [[Pinecone]], [[pgvector]], [[Weaviate]], [[Information Retrieval]], [[Temporal Reasoning]], [[Model Context Protocol]], [[Approximate Nearest Neighbour Search]], [[Knowledge Representation]]
  - contrasts-with:: [[In-Context Learning]], [[Fine-Tuning]], [[Context Window]], [[Hallucination]]
  - related-to:: [[Agent Memory]], [[Personal Agent Runtimes]], [[Progressive Disclosure Harnesses]], [[Harness Configuration Packs]], [[Internal AI Harness]], [[External AI Harness]], [[Hallucination]], [[Forgetting]], [[Compression]], [[Privacy]], [[GDPR]], [[Consolidation]], [[Multi-Agent Orchestration Frameworks]], [[Agentic AI]]
  - standardized-by:: [[CoALA]], [[ACT-R]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:EpisodicMemory))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:SemanticMemory))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:ProceduralMemory))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:WorkingMemory))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:KnowledgeGraph))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:VectorDatabase))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:ConsolidationPipeline))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:hasPart ai:MemoryRouter))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:requires ai:VectorDatabase))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:requires ai:Embeddings))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:requires ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:requires ai:ContextWindow))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:requires ai:AgentIdentity))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:dependsOn ai:AgentLoop))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:dependsOn ai:LargeLanguageModels))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:dependsOn ai:KnowledgeGraph))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:Personalisation))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:TaskAutomation))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:ContinualLearning))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:PlanningAndScheduling))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:enables ai:SelfReflection))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:supports ai:MultiAgentSystem))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:supports ai:Provenance))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:supports ai:AgenticRAG))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:implements ai:ReflexionPattern))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:implements ai:CoALA))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:implements ai:ACTR))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:uses ai:Pinecone))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:uses ai:pgvector))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:uses ai:Weaviate))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:uses ai:ModelContextProtocol))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentMemory))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentHarness))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:contrastsWith ai:InContextLearning))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:contrastsWith ai:FineTuning))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:contrastsWith ai:ContextWindow))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:bridgesTo ai:PersonalAgentRuntimes))
      SubClassOf(ai:AgentMemoryLayers
        ObjectSomeValuesFrom(ai:bridgesTo ai:ProgressiveDisclosureHarnesses))
      ```

  - ## About
    - Agent Memory Layers emerged as a distinct engineering discipline when it became clear that [[Large Language Models]] are stateless by design — each API call processes only what is present in the [[Context Window]], with no built-in persistence — while the tasks being delegated to [[Autonomous Agent]] systems are increasingly multi-session, long-horizon, and requiring deep [[Personalisation]] to specific users and organisational contexts. The failure modes of stateless agents are concrete and costly: a customer-service agent that cannot recall prior ticket history forces users to re-explain context repeatedly; a coding agent without project-scoped memory repeats already-performed refactoring or introduces conflicts with prior decisions; a research agent without cross-session episodic recall wastes effort re-reviewing literature it has already analysed. Enterprise deployments documented these failure modes as the primary blockers to scaling agent adoption in 2025, alongside latency and token cost.
    - The intellectual foundations of the four-tier architecture trace to cognitive science. Endel Tulving's 1972 taxonomy distinguishing [[Episodic Memory]] (personally experienced, time-stamped events) from [[Semantic Memory]] (atemporal world knowledge) provided the first principled separation that maps directly to agent engineering. Alan Baddeley's 1974 working memory model maps to the active [[Context Window]] as the agent's cognitive scratchpad. John Anderson's [[ACT-R]] (1983) added [[Procedural Memory]] as compiled condition-action rules — the agent skill equivalent. The [[CoALA]] paper (Sumers et al., 2023/2024, arXiv:2309.02427) translated these cognitive science constructs into a formal taxonomy for [[Large Language Models]]-based agents, defining [[Working Memory]] and long-term memory subdivided into episodic, semantic, and procedural components, with internal actions (reasoning, retrieval, [[Consolidation]]) and external actions (grounding in the environment). CoALA became the de facto standard vocabulary adopted across all subsequent frameworks and papers.
    - The pragmatic engineering contribution of Agent Memory Layers — distinct from the conceptual Agent Memory — is specifying the runtime architecture: how the [[Agent Harness]] routes read and write operations across tiers on each step of the [[Agent Loop]], how memory scoping to [[Agent Identity]] prevents cross-principal contamination, how [[Consolidation]] pipelines automatically compress episodic traces into semantic knowledge to manage storage growth, and how [[Privacy]]-aware [[Forgetting]] satisfies [[GDPR]] Article 17 right-to-erasure obligations in production deployments. These engineering concerns are absent from the cognitive science literature and constitute the core of what Agent Memory Layers as an infrastructure category adds beyond the theoretical concept.
    - By mid-2026 the market has stratified: Mem0 leads in general-purpose semantic and hybrid retrieval (47K+ GitHub stars, 186 million API calls in Q3 2025, exclusive memory provider for AWS Agent SDK, 91% lower P95 latency and 90% token savings vs. naive context stuffing); Zep differentiates on [[Temporal Reasoning]] and enterprise compliance (SOC 2 Type 2, HIPAA, [[GDPR]], temporal [[Knowledge Graph]] via Graphiti achieving 63.8% on LongMemEval); Letta (MemGPT successor) on conversational coherence over very long sessions with an OS-inspired virtual context management model; LangMem on LangChain-native composability. The ICLR 2026 MemAgents workshop, MemFactory (arXiv:2603.29493), and MemoryAgent-Bench signal the field's transition into systematic benchmarking and standardised training frameworks.

  - ## Components / Architecture
    - **[[Working Memory]] Layer — In-Context Token Buffer**
      - The active [[Context Window]] of the [[Foundation Model]] — holding the current system prompt, task description, recent tool outputs, retrieved memory fragments, and chain-of-thought scratchpad. Bounded by model context length (128K tokens for most production models as of 2026; up to 2M for Gemini 1.5 Ultra, but long contexts incur quadratic attention cost and suffer lost-in-the-middle retrieval failure). Fully ephemeral: ceases at session end unless explicitly serialised. The [[Agent Loop]] must actively manage [[Working Memory]] — deciding what to retain, what to evict, and what to retrieve from deeper tiers to fill the window optimally.
      - In Letta's model, [[Working Memory]] is explicitly structured into named blocks (persona, human, system) that the agent reads and modifies directly via function calls — making memory management an explicit first-class agent action rather than an implicit harness operation.
    - **[[Episodic Memory]] Layer — Event Log Store**
      - Time-ordered log of what the agent experienced: user messages, tool call inputs and outputs, intermediate reasoning steps, decisions, and outcomes. Storage substrate: dense vector [[Embeddings]] (OpenAI text-embedding-3-large, Cohere embed-v3, or MiniLM-L6-v2 at 384 dimensions) in a [[Vector Database]] ([[Pinecone]], [[pgvector]], [[Weaviate]], Qdrant, Chroma). Retrieval: approximate nearest-neighbour similarity search (HNSW or IVF index) with optional recency weighting and importance scoring.
      - Mem0's Episodic Memory API stores events with timestamps and retrieves via hybrid vector plus graph search. The [[Reflexion Pattern]] uses episodic recall as verbal self-reflection stored for future task performance improvement (20-30% gains, Shinn et al. 2023).
      - Key operational concern: episodes accumulate without bound. [[Consolidation]] pipelines must periodically compress, deduplicate, and summarise older episodes to control storage cost and retrieval signal-to-noise ratio.
    - **[[Semantic Memory]] Layer — Knowledge Entity Store**
      - Atemporal factual knowledge: user profiles (name, preferences, communication style, role, organisation), project context (tech stack, conventions, constraints, history), domain facts (org chart, product catalogue, regulatory requirements). Storage: combination of a [[Knowledge Graph]] (Neo4j, Kuzu, or Graphiti in Zep) with typed entity nodes and typed relationship edges, plus vector-indexed summaries for fuzzy similarity search.
      - Graph storage enables multi-hop [[Information Retrieval]] — answering "what are the coding standards for the team this user belongs to?" — which pure vector similarity cannot achieve. Zep's Graphiti engine provides temporal validity windows on entity attributes, enabling accurate [[Temporal Reasoning]] about what was true when.
      - Cognee (2025) introduced an advanced semantic layer using formal [[Knowledge Graph]] plus graph neural networks for richer relationship modelling beyond flat entity-property pairs.
    - **[[Procedural Memory]] Layer — Skill and Plan Template Store**
      - Encoded skills, plan templates, and tool-invocation patterns generalised from prior experience. Storage options: few-shot examples prepended to the system prompt; a retrieval-indexed template library keyed by task type; or, in the most advanced case, lightweight [[Fine-Tuning]] updates (LoRA/prefix-tuning) derived from successful agent trajectories that encode learned skills into model weights.
      - The [[Reflexion Pattern]] is explicitly a procedural memory mechanism: verbal self-reflection on what went wrong is stored as structured memory retrieved at the start of future attempts at similar tasks. Letta's agent-managed persona blocks partially serve this function.
    - **Memory Routing and Scoping**
      - The memory router — part of the [[Agent Harness]] — decides on each [[Agent Loop]] step which tier to read from, what query to issue, how to merge retrieved fragments into the [[Working Memory]] budget, and where to write new experience. Scoping enforces [[Agent Identity]] ownership: user-scoped memories persist across all sessions for that user; session-scoped memories last for one task session; agent-scoped memories are intrinsic capabilities that apply to all users. Cross-scope contamination — a user's personal preferences leaking into another user's session — is a critical security concern in multi-tenant deployments.
    - **[[Consolidation]] Pipeline**
      - Periodic offline process that compresses episodic traces into updated [[Semantic Memory]] entities and [[Procedural Memory]] templates, reducing storage growth and improving retrieval precision. Live-Evo (arXiv:2602.02369) demonstrated online episodic-to-semantic consolidation from continuous user feedback; Self-Consolidation (arXiv:2602.01966) demonstrated autonomous consolidation into procedural heuristics during off-peak periods. Mem0 v2 (April 2026) introduced automatic [[Consolidation]] as a production feature, achieving 90% token savings by consolidating verbose episodic logs into compact semantic facts before retrieval.
    - **[[Privacy]]-Aware [[Forgetting]]**
      - [[GDPR]] Article 17 requires verifiable deletion of personal data from agent memory stores on user request. For dense vector [[Embeddings]], PII is encoded implicitly — verifiable deletion requires re-embedding the corpus without the deleted data or applying machine unlearning techniques. Production systems (Zep's GDPR-certified offering; SuperLocalMemory's compliance-by-architecture design) provide auditable deletion APIs that satisfy regulatory requirements.

  - ## Use Cases / Major Families
    - **Personal Assistant Continuity** — An AI personal assistant uses [[Semantic Memory]] to store user preferences, communication style, role, and recurring task patterns. It uses [[Episodic Memory]] to recall specific prior conversations and decisions. The assistant maintains coherent [[Personalisation]] across days and weeks without requiring the user to re-explain context at each session. Mem0's 2025 enterprise deployment case study documented a 40% reduction in re-orientation time and 67% improvement in task completion rate for a persistent personal assistant use case. Letta's structured persona block model is particularly suited to this pattern — the agent reads and edits its own profile of the user as part of each interaction.
    - **Long-Horizon Research Agent** — A research agent conducting a multi-week literature review stores paper summaries and open questions in [[Episodic Memory]], distils confirmed findings into [[Semantic Memory]], and retains search-strategy templates in [[Procedural Memory]]. Cross-session retrieval prevents repeated work and enables progressive synthesis. FutureHouse's PaperQA2 uses memory-augmented [[Retrieval-Augmented Generation]] for expert-level literature review at scale. The AMA-Bench benchmark (arXiv:2602.22769) specifically tests this long-horizon memory capability.
    - **Project-Context Coding Agent** — A coding agent stores repository architecture decisions, code style conventions, known bug patterns, and prior refactoring history in project-scoped [[Semantic Memory]]. Before generating code for a new feature, it retrieves relevant prior context. SWE-Bench Verified performance above 80% in top 2025-2026 systems correlates with effective project-context memory use. This pattern is directly implemented by [[Personal Agent Runtimes]] such as Claude Code (via the CLAUDE.md / memory MCP pattern) and Khoj.
    - **Customer Service Episode Recall** — A customer service agent uses [[Episodic Memory]] to recall prior interactions with the same user: what problem they reported, what resolution was applied, what their stated frustration level was. This enables the agent to provide empathetic, non-repetitive service without requiring the customer to re-explain history. Zep's HIPAA-certified temporal [[Knowledge Graph]] serves this pattern in healthcare deployments where interaction history is a regulatory requirement, not merely a convenience.
    - **Multi-Agent Shared Memory** — In orchestrator-worker [[Multi-Agent System]] architectures, shared [[Episodic Memory]] provides a coordination medium: the orchestrator writes task assignments and intermediate results; workers retrieve their assignments and write back results; all agents share a [[Semantic Memory]] of project facts. PlugMem (arXiv:2603.03296) demonstrated a task-agnostic plugin memory module operating across heterogeneous agent types, improving coordination on 17 multi-agent benchmarks. Shared memory governance — access control, conflict resolution, [[Provenance]] tracking — is an open engineering challenge for multi-tenant deployments.
    - **Self-Improving Agent via Procedural Consolidation** — Agents using the [[Reflexion Pattern]] maintain a growing library of task-specific self-critiques and improvement plans in [[Procedural Memory]]. Self-Consolidation (arXiv:2602.01966) demonstrated autonomous offline consolidation of episodic traces into updated procedural heuristics. This enables genuine performance improvement over time based on accumulated experience — bridging stateless model inference and adaptive behaviour. The MemFactory framework (arXiv:2603.29493) provides a unified training and inference infrastructure for this class of self-improving memory agent.

  - ## Academic Context
    - The cognitive science foundations — Tulving (1972), Baddeley (1974), Anderson's [[ACT-R]] (1983), SOAR (Laird et al. 1987), CLARION (Sun 2006) — provide the taxonomic vocabulary that the [[CoALA]] paper (Sumers et al., 2023/2024, arXiv:2309.02427) translated into practical engineering primitives for LLM agents. This translation is Agent Memory Layers' intellectual origin: applying decades of cognitive architecture research to the concrete engineering problem of making LLM-based agents persistently capable.
    - The modern LLM-specific memory literature crystallised around MemGPT (Packer et al., arXiv:2310.08560, 2023) — which introduced the OS paging analogy for active [[Context Window]] management as the basis for Letta — and the Generative Agents paper (Park et al., arXiv:2304.03442, 2023), which implemented a three-stream memory architecture (memory stream, reflection, retrieval) in a multi-agent social simulation demonstrating emergent human-like social behaviours.
    - The 2025-2026 benchmark wave introduced systematic empirical evaluation of agent memory systems: LoCoMo (Long Context Conversations with Memory) evaluates multi-session dialogue recall; LongMemEval tests factual recall, [[Temporal Reasoning]], and multi-hop reasoning over long histories; AMA-Bench (arXiv:2602.22769) targets long-horizon agentic applications specifically; EMemBench (arXiv:2601.16690, 2025) introduces interactive episodic memory benchmarking for vision-language model agents; MemoryAgent-Bench and MemoryArena (2025-2026) extend evaluation across learned memory control and richer agentic dimensions. The ICLR 2026 MemAgents workshop (accepted proposal arXiv OpenReview:U51WxL382H) signalled the field's formal establishment as a primary research venue.
    - The survey "Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers" (arXiv:2603.07670, 2026) provides the most comprehensive overview, grouping approaches into heuristic memory layers (rule-based extraction, [[Consolidation]], retrieval), agentic memory structures (agent-managed, self-organising), and policy-learned memory (RL-trained memory control policies). MemFactory (arXiv:2603.29493, 2026) proposes the first unified inference and training framework that operates across all three approaches, enabling systematic comparison and hybrid deployment.
    - Key venues: NeurIPS, ICML, ICLR for machine learning methods; ACL, EMNLP for language model memory; AAMAS for multi-agent coordination memory; UIST, CHI for human-agent interaction memory; AAAI, IJCAI for cognitive architecture synthesis.

  - ## Current Landscape (2026)
    - By mid-2026, Agent Memory Layers infrastructure has stratified into a competitive commercial landscape with 21 frameworks, 20 vector stores, and three hosting models (managed cloud, open-source self-hosted, local [[Model Context Protocol]] server).
    - **Mem0** is the most widely deployed general-purpose semantic memory layer: 47K+ GitHub stars, $24M Series A (October 2025), 186 million API calls in Q3 2025, exclusive memory provider for the AWS Agent SDK, 92.5% on LoCoMo and 94.4% on LongMemEval at under 7,000 tokens per retrieval. Mem0 v2 (April 2026) reported 91% lower P95 latency and 90% token savings versus naive full-context stuffing — positioning memory layers as an operational efficiency tool, not just a capability enhancement.
    - **Zep** differentiates on [[Temporal Reasoning]] and enterprise compliance: SOC 2 Type 2, HIPAA, [[GDPR]] certification. Graphiti engine achieves 63.8% on LongMemEval via temporal [[Knowledge Graph]] with validity-window-aware entity updates and 90% latency reduction versus full-context approaches. Zep CE is the default choice for deployments where agents must answer questions anchored to specific past time points — financial audit trails, healthcare interaction histories, legal matter records.
    - **Letta** (MemGPT production evolution) differentiates on conversational coherence over very long sessions using virtual context management analogous to OS virtual memory — the agent itself manages memory tier allocation via explicit function calls. Active open-source community; paid cloud hosting; preferred in personal assistant and character-persistent deployments.
    - **LangMem** provides LangChain-native integration as the composable memory layer for the LangGraph ecosystem, prioritising developer ergonomics over standalone performance benchmarks.
    - **Cognee** (2025 entrant) provides a full [[Knowledge Graph]] semantic layer with graph neural network querying, aimed at enterprise knowledge management use cases requiring richer relationship modelling than flat entity-property stores.
    - Infrastructure tooling: **MemFactory** (arXiv:2603.29493) provides the first unified training framework for memory agents, enabling fine-tuning memory extraction, [[Consolidation]], and retrieval policies end-to-end. This signals the transition from hand-crafted heuristic memory to learned memory policy — the next maturation phase.
    - The 2026 benchmark comparison (particula.tech, dev.to, agentmarketcap.ai) consistently finds no single winner: Mem0 excels at semantic retrieval; Zep at temporal and compliance; Letta at long-session coherence; the correct choice is workload-dependent.

  - ## UK Context
    - UCL leads the UKRI national Generative AI Hub (jointly with Imperial, Cambridge, Oxford, Manchester, Edinburgh, Cardiff, Surrey), with [[Consolidation]] and memory-augmented generation as explicit research themes. UCL's brain-inspired computing initiative (UKRI-funded, September 2025) is developing neuromorphic hardware for energy-efficient persistent memory — relevant to always-on edge agent memory for personal assistants and robotics applications.
    - The University of Edinburgh's Autonomous Agents Research Group (AARG) maintains research in state representation and memory for agents operating in partially observable environments — foundational theory for [[Episodic Memory]] retrieval with incomplete observation histories. Edinburgh's Institute for Language, Cognition, and Computation bridges computational linguistics and cognitive science in ways that directly inform [[Semantic Memory]] design.
    - Professor Richard Henson's MRC Cognition and Brain Sciences Unit (Cambridge) leads UK research in human [[Episodic Memory]] and [[Consolidation]], with his complementary learning systems (CLS) theory directly influencing neural-symbolic memory architectures and the [[Consolidation]] pipeline designs emerging in 2025-2026.
    - The Alan Turing Institute (ATI, national AI institute, joint venture of Cambridge, Edinburgh, Oxford, UCL, Warwick, Manchester, and additional partners) encompasses programmes on interpretable AI and agentic AI safety, including the specific question of memory explainability: when an agent's decision is influenced by a retrieved memory, which memory, what was its [[Provenance]], and can a human audit that chain? This is a critical [[AI Safety]] concern that ATI is positioning as a governance requirement for enterprise deployments.
    - Sheffield Robotics (joint University of Sheffield and Sheffield Hallam) works on embodied agent memory for robotic navigation — maintaining persistent spatial maps (a form of [[Semantic Memory]]) and episode logs of prior task execution across multi-shift industrial settings.
    - In Manchester, the industrial ecosystem of financial services firms (Manchester is the UK's second financial centre) and Northern England's NHS trusts are practical demand drivers for agent memory infrastructure with [[GDPR]] compliance, FCA record-keeping compliance, and MHRA documentation requirements. The Northern Health Science Alliance AI programme has explicitly funded agent memory evaluation for NHS use cases across Manchester, Leeds, Sheffield, and Newcastle.
    - UK data sovereignty concerns — particularly for NHS patient data and financial services client data — make self-hosted open-source memory layers ([[pgvector]]-backed, on-premise Qdrant) more attractive than cloud-hosted managed services, creating a distinct UK deployment pattern that differs from US enterprise adoption.

  - ## Future Directions (2026-2030)
    - **Learned Memory Policy** — The transition from heuristic memory extraction rules and hand-crafted [[Consolidation]] pipelines to trained memory control policies (RL-optimised or supervised-fine-tuned) is the most significant near-term architectural shift. MemFactory (arXiv:2603.29493) provides the training framework; policy-learned memory outperforms heuristic approaches on complex multi-step benchmarks by 15-25% in 2026 evaluations. By 2028 this will likely be the dominant approach for production deployments with sufficient logged interaction data to train on.
    - **Privacy-Preserving Retrieval** — As agent memory accumulates personally identifiable information at scale, differential privacy, federated learning, and machine unlearning techniques will be applied to enable memory retrieval without exposing raw PII. [[GDPR]] Article 17 machine unlearning for dense vector [[Embeddings]] is an active research problem; the first production-viable approaches appeared in 2025-2026 (Zep's GDPR-certified deletion API; SuperLocalMemory's local-only architecture). By 2028 this will be a mandatory feature for EU and UK deployments.
    - **Neuromorphic Persistent Memory** — For always-on personal assistant agents running on edge devices, conventional DRAM-backed [[Vector Database]] systems are prohibitively power-hungry. Intel Loihi, IBM NorthPole, and UCL's neuromorphic computing initiative point toward low-power analogue memory substrates enabling persistent agent memory at the edge. This is a 2027-2030 horizon technology.
    - **Multi-Agent Shared Memory Governance** — Large-scale multi-agent deployments require shared memory governance: access control (which agent can read/write what), conflict resolution (contradictory memory entries from different agents), [[Provenance]] attribution (which agent wrote this memory), and auditability for compliance. This connects directly to [[Agent Identity]], [[AI Safety]], and enterprise data governance frameworks. PlugMem (arXiv:2603.03296) is an early step; formal governance protocols are expected by 2027-2028.
    - **Continual Weight Learning from Memory** — The boundary between retrieval-based external memory and parametric internal memory (model weights) will blur. High-value episodic experiences will trigger lightweight [[Fine-Tuning]] updates (LoRA) that encode generalised skills into model weights, creating a virtuous cycle between experience retrieval and [[Continual Learning]]. This bridges Agent Memory Layers to lifelong machine learning research. EMemBench's embodied visual memory benchmarks are an early signal of the multimodal direction.

  - ## Key Terminology
    - **Memory Tier** — One of the four functionally distinct storage and retrieval subsystems: [[Working Memory]], [[Episodic Memory]], [[Semantic Memory]], [[Procedural Memory]].
    - **[[Consolidation]]** — The process of compressing episodic traces into semantic facts or procedural templates, reducing storage growth and improving retrieval signal quality.
    - **Memory Scoping** — Assignment of memories to a principal (user, session, or agent) to prevent cross-principal contamination in multi-tenant deployments.
    - **Context Stuffing** — The naive approach of including all potentially relevant history in the [[Context Window]] on every call, without selective retrieval — expensive in tokens, degrades with scale.
    - **Virtual Context Management** — Letta's model of explicitly managing memory tier allocation within the agent's own function calls, analogous to OS virtual memory paging.
    - **Graphiti** — Zep's temporal [[Knowledge Graph]] engine providing validity-window-aware entity updates for time-anchored [[Semantic Memory]] retrieval.
    - **HNSW** — Hierarchical Navigable Small World graph — the default approximate nearest-neighbour index structure used in Qdrant, [[Weaviate]], and [[Pinecone]] for [[Episodic Memory]] similarity search.
    - **[[CoALA]]** — Cognitive Architectures for Language Agents (Sumers et al. 2024) — the canonical taxonomy for agent memory tiers adopted as the de facto standard.
    - **[[ACT-R]]** — Adaptive Control of Thought-Rational — Anderson's (1983) cognitive architecture providing the [[Procedural Memory]] concept that maps to agent skill templates.

  - ## Research & Literature
    - 1. Sumers, T.R. et al. (2024). Cognitive Architectures for Language Agents. Transactions on Machine Learning Research. arXiv:2309.02427. https://arxiv.org/abs/2309.02427 [Canonical CoALA taxonomy: working, episodic, semantic, procedural memory tiers.]
    - 2. Packer, C. et al. (2023). MemGPT: Towards LLMs as Operating Systems. arXiv:2310.08560. https://arxiv.org/abs/2310.08560 [OS-inspired virtual context management; foundational paper for Letta.]
    - 3. Park, J.S. et al. (2023). Generative Agents: Interactive Simulacra of Human Behavior. UIST 2023. arXiv:2304.03442. https://arxiv.org/abs/2304.03442 [Seminal multi-agent memory architecture with reflection, retrieval, and planning streams.]
    - 4. Shinn, N. et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning. NeurIPS 2023. arXiv:2303.11366. https://arxiv.org/abs/2303.11366 [Episodic self-reflection stored as procedural memory; 20-30% performance improvement.]
    - 5. Tulving, E. (1972). Episodic and Semantic Memory. In Organisation of Memory. Academic Press. [Foundational cognitive science taxonomy underpinning the episodic/semantic memory split.]
    - 6. Baddeley, A. & Hitch, G. (1974). Working Memory. Psychology of Learning and Motivation, 8, 47-89. [Working memory model mapping to agent context window architecture.]
    - 7. Anderson, J.R. (1983). The Architecture of Cognition. Harvard University Press. [ACT-R procedural + declarative memory — basis for agent procedural memory.]
    - 8. Mem0.ai. (2026). The AI Memory Layer: What It Is, How It Works and Why Agents Need It. https://mem0.ai/blog/ai-memory-layer-guide [Production guide; 91% lower P95 latency, 90% token savings vs. context stuffing.]
    - 9. Mem0.ai. (2026). State of AI Agent Memory 2026: Benchmarks, Architectures & Production Gaps. https://mem0.ai/blog/state-of-ai-agent-memory-2026 [92.5% LoCoMo, 94.4% LongMemEval for Mem0; market sizing USD 6.3B 2025.]
    - 10. Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers. (2026). arXiv:2603.07670. https://arxiv.org/abs/2603.07670 [Survey grouping memory into heuristic, agentic, and policy-learned approaches.]
    - 11. MemFactory: Unified Inference & Training Framework for Agent Memory. (2026). arXiv:2603.29493. https://arxiv.org/abs/2603.29493 [First unified training and inference framework for learned memory control policies.]
    - 12. AMA-Bench. (2026). Evaluating Long-Horizon Memory for Agentic Applications. arXiv:2602.22769. https://arxiv.org/abs/2602.22769 [Benchmark specifically targeting long-horizon agentic memory.]
    - 13. Live-Evo. (2026). Online Evolution of Agentic Memory from Continuous Feedback. arXiv:2602.02369. https://arxiv.org/abs/2602.02369 [Online episodic-to-semantic consolidation without human curation.]
    - 14. Self-Consolidation for Self-Evolving Agents. (2026). arXiv:2602.01966. https://arxiv.org/abs/2602.01966 [Offline autonomous consolidation of episodic to procedural knowledge.]
    - 15. PlugMem. (2026). A Task-Agnostic Plugin Memory Module for LLM Agents. arXiv:2603.03296. https://arxiv.org/abs/2603.03296 [Cross-agent shared memory; improved coordination on 17 multi-agent benchmarks.]
    - 16. EMemBench. (2025). Interactive Benchmarking of Episodic Memory for VLM Agents. arXiv:2601.16690. https://arxiv.org/abs/2601.16690 [Embodied visual memory benchmarking for vision-language model agents.]
    - 17. ICLR 2026 Workshop Proposal MemAgents: Memory for LLM-Based Agentic Systems. OpenReview:U51WxL382H. https://openreview.net/forum?id=U51WxL382H [Workshop proposal establishing agent memory as a primary ML research venue.]
    - 18. Anatomy of Agentic Memory. (2025). arXiv:2602.19320. https://arxiv.org/abs/2602.19320 [First systematic empirical analysis across six evaluation dimensions; consolidation as key gap.]
    - 19. Rethinking Memory Mechanisms of Foundation Agents. (2026). arXiv:2602.06052. https://arxiv.org/abs/2602.06052 [Survey identifying consolidation as the most critical unsolved problem in production memory.]
    - 20. AgentMarketCap. (2026). Agent Memory at Scale 2026: Letta, Zep, Mem0, and LangMem Compared. https://agentmarketcap.ai/blog/2026/04/10/agent-memory-vendor-landscape-2026-letta-zep-mem0-langmem [Four-vendor benchmark; no single winner across all axes.]
    - 21. Spheron Network. (2026). Agent Memory Infrastructure on GPU Cloud: Deploy Mem0, Zep, and Persistent Vector Memory for Production AI Agents. https://www.spheron.network/blog/agent-memory-gpu-cloud-mem0-zep-guide/ [Production deployment patterns for managed GPU-hosted memory infrastructure.]
    - 22. Dev.to / Varun Pratap. (2026). 5 AI Agent Memory Systems Compared: Mem0, Zep, Letta, Supermemory, SuperLocalMemory. https://dev.to/varun_pratapbhardwaj_b13/5-ai-agent-memory-systems-compared [Independent 2026 benchmark with GDPR/compliance dimension.]
    - 23. Innobu. (2026). Agent Memory 2026: Mem0, Letta, Zep, Hermes, OpenClaude Compared. https://www.innobu.com/en/articles/agent-memory-2026-mem0-letta-zep-hermes-openclaude-comparison.html [Comparative analysis including Personal Agent Runtime integrations.]
    - 24. ActMem. (2026). Bridging the Gap Between Memory Retrieval and Reasoning in LLM Agents. arXiv:2603.00026. https://arxiv.org/abs/2603.00026 [Adaptive procedure selection via memory-reasoning integration.]
    - 25. Atlan. (2026). Types of AI Agent Memory: Episodic, Semantic, Procedural and More. https://atlan.com/know/types-of-ai-agent-memory/ [Comprehensive taxonomy guide; episodic API breakdown and retrieval patterns.]
    - 26. Vectorize.io. (2026). Best AI Agent Memory Systems in 2026: 8 Frameworks Compared. https://vectorize.io/articles/best-ai-agent-memory-systems [Independent benchmark: Mem0 vs. Zep vs. Letta vs. LangMem vs. Cognee.]
    - 27. UCL. (2025). UCL to Lead UK's Brain-Inspired Computing Push with New Innovation Centre. UCL News. https://www.ucl.ac.uk/news/2025/sep/ucl-lead-uks-brain-inspired-computing-push-new-innovation-centre [UK neuromorphic computing initiative; edge persistent memory implications.]
    - 28. Medium / Bobur. (2026). Top 10 AI Memory Products 2026: The Emerging Memory Layer for Agents. https://medium.com/@bumurzaqov2/top-10-ai-memory-products-2026-09d7900b5ab1 [Independent ranking of commercial memory layer products with 2026 feature comparison.]

- ### Provenance
  - sources:: CoALA arXiv:2309.02427 (Sumers et al. 2024); MemGPT arXiv:2310.08560 (Packer et al. 2023); Reflexion arXiv:2303.11366 (Shinn et al. 2023); Park et al. Generative Agents arXiv:2304.03442 (2023); Mem0 AI Memory Layer Guide mem0.ai/blog; Mem0 State of Agent Memory 2026 mem0.ai/blog/state-of-ai-agent-memory-2026; arXiv:2603.07670 memory mechanisms survey; arXiv:2603.29493 MemFactory; arXiv:2602.22769 AMA-Bench; arXiv:2602.02369 Live-Evo; arXiv:2602.01966 Self-Consolidation; arXiv:2603.03296 PlugMem; arXiv:2601.16690 EMemBench; arXiv:2602.19320 anatomy agentic memory; arXiv:2602.06052 rethinking memory; arXiv:2603.00026 ActMem; agentmarketcap.ai vendor landscape 2026; spheron.network GPU cloud memory guide; dev.to 5 memory systems compared; vectorize.io 8 frameworks benchmark; atlan.com types agent memory; innobu.com memory 2026 comparison; UCL neuromorphic computing 2025
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
