public:: true

# External AI Harness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:external-ai-harness",
  "@type": "Page",
  "vc:slug": "external-ai-harness",
  "title": "External AI Harness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:agent-harness", "vc:label": "Agent Harness"},
    {"@id": "urn:visionflow:linked:internal-ai-harness", "vc:label": "Internal AI Harness"},
    {"@id": "urn:visionflow:linked:model-serving", "vc:label": "Model Serving"},
    {"@id": "urn:visionflow:linked:api-gateway", "vc:label": "API Gateway"},
    {"@id": "urn:visionflow:linked:microservices-architecture", "vc:label": "Microservices Architecture"},
    {"@id": "urn:visionflow:linked:container-orchestration", "vc:label": "Container Orchestration"},
    {"@id": "urn:visionflow:linked:kubernetes", "vc:label": "Kubernetes"},
    {"@id": "urn:visionflow:linked:ai-agent-coordination", "vc:label": "AI Agent Coordination"},
    {"@id": "urn:visionflow:linked:multi-agent-orchestration", "vc:label": "Multi-Agent Orchestration"},
    {"@id": "urn:visionflow:linked:llm-orchestration", "vc:label": "LLM Orchestration"},
    {"@id": "urn:visionflow:linked:inference-serving", "vc:label": "Inference Serving"},
    {"@id": "urn:visionflow:linked:ai-inference", "vc:label": "AI Inference"},
    {"@id": "urn:visionflow:linked:model-inference", "vc:label": "Model Inference"},
    {"@id": "urn:visionflow:linked:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:linked:agent-frameworks", "vc:label": "Agent Frameworks"},
    {"@id": "urn:visionflow:linked:agent-execution-sandboxes", "vc:label": "Agent Execution Sandboxes"},
    {"@id": "urn:visionflow:linked:model-context-protocol", "vc:label": "Model Context Protocol"},
    {"@id": "urn:visionflow:linked:agent-to-agent-protocol", "vc:label": "Agent-to-Agent Protocol"},
    {"@id": "urn:visionflow:linked:rest-api", "vc:label": "REST API"},
    {"@id": "urn:visionflow:linked:grpc", "vc:label": "gRPC"},
    {"@id": "urn:visionflow:linked:message-queue", "vc:label": "Message Queue"},
    {"@id": "urn:visionflow:linked:service-mesh", "vc:label": "Service Mesh"},
    {"@id": "urn:visionflow:linked:load-balancing", "vc:label": "Load Balancing"},
    {"@id": "urn:visionflow:linked:autoscaling", "vc:label": "Autoscaling"},
    {"@id": "urn:visionflow:linked:fault-tolerance", "vc:label": "Fault Tolerance"},
    {"@id": "urn:visionflow:linked:process-isolation", "vc:label": "Process Isolation"},
    {"@id": "urn:visionflow:linked:security", "vc:label": "Security"},
    {"@id": "urn:visionflow:linked:ai-safety", "vc:label": "AI Safety"},
    {"@id": "urn:visionflow:linked:sandboxing", "vc:label": "Sandboxing"},
    {"@id": "urn:visionflow:linked:observability", "vc:label": "Observability"},
    {"@id": "urn:visionflow:linked:rate-limiting", "vc:label": "Rate Limiting"},
    {"@id": "urn:visionflow:linked:human-oversight", "vc:label": "Human Oversight"},
    {"@id": "urn:visionflow:linked:autonomous-agents", "vc:label": "Autonomous Agents"},
    {"@id": "urn:visionflow:linked:agentic-ai", "vc:label": "Agentic AI"},
    {"@id": "urn:visionflow:linked:mlops", "vc:label": "MLOps"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:evaluation-harness", "vc:label": "Evaluation Harness"},
    {"@id": "urn:visionflow:linked:ai-infrastructure", "vc:label": "AI Infrastructure"},
    {"@id": "urn:visionflow:linked:distributed-systems", "vc:label": "Distributed Systems"},
    {"@id": "urn:visionflow:linked:retrieval-augmented-generation", "vc:label": "Retrieval-Augmented Generation"},
    {"@id": "urn:visionflow:linked:tool-use", "vc:label": "Tool Use"},
    {"@id": "urn:visionflow:linked:tool-registry", "vc:label": "Tool Registry"},
    {"@id": "urn:visionflow:linked:context-window", "vc:label": "Context Window"},
    {"@id": "urn:visionflow:linked:approval-gate", "vc:label": "Approval Gate"},
    {"@id": "urn:visionflow:linked:multi-tenant", "vc:label": "Multi-Tenant"},
    {"@id": "urn:visionflow:linked:canary-deployment", "vc:label": "Canary Deployment"},
    {"@id": "urn:visionflow:linked:ab-testing", "vc:label": "A/B Testing"},
    {"@id": "urn:visionflow:linked:model-versioning", "vc:label": "Model Versioning"},
    {"@id": "urn:visionflow:linked:cost-management", "vc:label": "Cost Management"},
    {"@id": "urn:visionflow:linked:gpu-acceleration", "vc:label": "GPU Acceleration"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:external-ai-harness",
  "@type": "Class",
  "label": "External AI Harness",
  "definition": "An external AI harness is an out-of-process orchestration framework that manages AI model inference via network APIs, message queues, or service meshes, providing process-boundary isolation, horizontal scalability, multi-model routing, fault tolerance, and multi-tenant governance at the cost of additional serialisation latency and inter-process communication overhead, making it the preferred architecture for enterprise-scale agentic deployments requiring auditability, model versioning, and independent component scaling.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.90,
  "subClassOf": [
    {"@id": "urn:ngm:class:agent-harness", "label": "Agent Harness"},
    {"@id": "urn:ngm:class:evaluation-harness", "label": "Evaluation Harness"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"},
      {"@id": "urn:ngm:class:inference-serving", "label": "Inference Serving"},
      {"@id": "urn:ngm:class:tool-registry", "label": "Tool Registry"},
      {"@id": "urn:ngm:class:approval-gate", "label": "Approval Gate"},
      {"@id": "urn:ngm:class:observability", "label": "Observability"},
      {"@id": "urn:ngm:class:load-balancing", "label": "Load Balancing"},
      {"@id": "urn:ngm:class:autoscaling", "label": "Autoscaling"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:grpc", "label": "gRPC"},
      {"@id": "urn:ngm:class:message-queue", "label": "Message Queue"},
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:container-orchestration", "label": "Container Orchestration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-agent-orchestration", "label": "Multi-Agent Orchestration"},
      {"@id": "urn:ngm:class:ai-agent-coordination", "label": "AI Agent Coordination"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:model-versioning", "label": "Model Versioning"},
      {"@id": "urn:ngm:class:canary-deployment", "label": "Canary Deployment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:process-isolation", "label": "Process Isolation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:agent-to-agent-protocol", "label": "Agent-to-Agent Protocol"},
      {"@id": "urn:ngm:class:llm-orchestration", "label": "LLM Orchestration"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"},
      {"@id": "urn:ngm:class:security", "label": "Security"},
      {"@id": "urn:ngm:class:mlops", "label": "MLOps"},
      {"@id": "urn:ngm:class:cost-management", "label": "Cost Management"}
    ],
    "contrasts-with": [
      {"@id": "urn:ngm:class:internal-ai-harness", "label": "Internal AI Harness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"},
      {"@id": "urn:ngm:class:agent-execution-sandboxes", "label": "Agent Execution Sandboxes"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:ai-inference", "label": "AI Inference"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An [[External AI Harness]] is an out-of-process orchestration and execution framework that governs [[AI Inference|AI model inference]] through network-boundary interfaces — [[REST API|REST APIs]], [[gRPC]], [[Message Queue|message queues]], [[Service Mesh|service meshes]], or streaming protocols — separating the model execution environment from the host application via [[Process Isolation|process-boundary isolation]], [[Sandboxing|container boundaries]], or hardware-enforced virtualisation. Where an [[Internal AI Harness]] co-locates inference and application logic in the same address space for minimum latency, the external harness deliberately interposes a network layer to achieve fault isolation, horizontal scalability, [[Multi-Tenant|multi-tenancy]], independent component versioning, and the governance properties required for enterprise and regulated deployments of [[Autonomous Agents|autonomous AI agents]]. The external harness encompasses not only the [[Model Serving|model serving]] infrastructure — the [[Inference Serving|inference endpoints]] that accept model invocation requests and return completions — but also the complete orchestration layer that manages [[Tool Use|tool-call routing]] across independently deployed [[Tool Registry|tool microservices]], [[Context Window|context assembly and compression]] upstream of model calls, [[Approval Gate|approval gate]] enforcement as out-of-band policy services, structured [[Observability|observability]] collection across distributed service components, [[Load Balancing|load balancing]] and [[Autoscaling|autoscaling]] of inference replicas, [[Model Versioning|model version management]] with [[Canary Deployment|canary deployments]] and [[A/B Testing|A/B traffic splitting]], and [[Cost Management|cost and quota management]] through virtual API key budgeting. The external harness architecture emerged as the natural enterprise evolution from the [[MLOps]] discipline of [[Model Serving]] into the agentic era: as [[Agentic AI|agentic]] workloads require not just serving model completions but governing end-to-end tool-call loops across potentially heterogeneous model providers, tool services, and human approval checkpoints, the external harness extends the serving stack with agent lifecycle management, [[AI Agent Coordination|multi-agent coordination]] protocols, and the security and audit trail infrastructure required by regulatory frameworks including the EU AI Act and UK AI governance frameworks. By 2026, external harnesses are the dominant deployment pattern for enterprise-scale [[Large Language Models]] applications serving many concurrent users, multiple model variants, and complex multi-step agentic workflows with audit, compliance, and multi-tenant billing requirements — routing over 1,600 LLM model endpoints through unified API surfaces in the case of gateway platforms like Portkey (acquired by Palo Alto Networks, 2026) and LiteLLM, and orchestrating multi-agent workflows through frameworks such as [[LLM Orchestration|LangGraph]], AutoGen, CrewAI, and Google's Agent Development Kit.

- ### Semantic Classification
  - owl-class:: ai:ExternalAIHarness
  - owl-role:: ExecutableProtocol | DistributedOrchestrator | AgentInfrastructure
  - owl-inferred:: ai:OutOfProcessRuntime, ai:MultiTenantAISystem, ai:AgentControlPlane, ai:ServingOrchestrationLayer
  - belongs-to-domain:: [[Agentic AI]], [[AI Infrastructure]], [[Distributed Systems]]
  - implemented-in-layer:: [[Model Serving]], [[Inference Serving]], [[LLM Orchestration]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[Evaluation Harness]], [[AI Infrastructure]], [[Distributed Systems]]
  - has-part:: [[API Gateway]], [[Model Serving]], [[Inference Serving]], [[Tool Registry]], [[Approval Gate]], [[Observability]], [[Load Balancing]], [[Autoscaling]]
  - requires:: [[Model Serving]], [[API Gateway]], [[Distributed Systems]], [[Process Isolation]], [[Container Orchestration]], [[Kubernetes]]
  - enables:: [[Multi-Agent Orchestration]], [[AI Agent Coordination]], [[Autonomous Agents]], [[Fault Tolerance]], [[Model Versioning]], [[Canary Deployment]], [[A/B Testing]], [[Multi-Tenant]]
  - implements:: [[Model Context Protocol]], [[Agent-to-Agent Protocol]], [[LLM Orchestration]], [[Microservices Architecture]], [[REST API]], [[gRPC]]
  - depends-on:: [[Deep Learning]], [[Neural Network]], [[Large Language Models]], [[AI Inference]]
  - supports:: [[AI Safety]], [[Human Oversight]], [[Security]], [[MLOps]], [[Cost Management]], [[Observability]], [[Rate Limiting]]
  - uses:: [[API Gateway]], [[REST API]], [[gRPC]], [[Message Queue]], [[Service Mesh]], [[Kubernetes]], [[Container Orchestration]], [[GPU Acceleration]], [[Load Balancing]]
  - contrasts-with:: [[Internal AI Harness]], [[Process Isolation]], [[On-Device AI]]
  - related-to:: [[Model Serving]], [[Agent Frameworks]], [[Agent Execution Sandboxes]], [[Agentic AI]], [[Retrieval-Augmented Generation]], [[AI Agent Coordination]], [[Multi-Agent Orchestration]], [[LLM Orchestration]], [[AI Inference]]
  - standardized-by:: [[Model Context Protocol]], [[Agent-to-Agent Protocol]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:APIGateway))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:ModelServing))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:InferenceServing))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:ToolRegistry))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:ApprovalGate))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:Observability))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:LoadBalancing))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:hasPart ai:Autoscaling))

  ## Dependency Relationships
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:requires ai:ModelServing))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:requires ai:APIGateway))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:requires ai:DistributedSystems))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:requires ai:ProcessIsolation))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:requires ai:ContainerOrchestration))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:dependsOn ai:LargeLanguageModels))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:dependsOn ai:AIInference))

  ## Capability Relationships
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentOrchestration))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:AIAgentCoordination))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:AutonomousAgents))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:FaultTolerance))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:ModelVersioning))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:enables ai:CanaryDeployment))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:supports ai:AISafety))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:supports ai:HumanOversight))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:supports ai:Security))

  ## Implementation Relationships
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:implements ai:ModelContextProtocol))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:implements ai:AgentToAgentProtocol))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:implements ai:LLMOrchestration))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:implements ai:MicroservicesArchitecture))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:uses ai:RESTAPI))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:uses ai:gRPC))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:uses ai:Kubernetes))

  ## Reduction Relationships
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:reducesTo ai:ModelServing))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:reducesTo ai:DistributedSystems))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:contrastsWith ai:InternalAIHarness))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:relatedTo ai:AgentFrameworks))
      SubClassOf(ai:ExternalAIHarness
        ObjectSomeValuesFrom(ai:relatedTo ai:AgentExecutionSandboxes))

  ## About
    The external AI harness is the architectural response to the enterprise requirements that an [[Internal AI Harness|in-process harness]] cannot satisfy: fault isolation between the model execution environment and the host application, independent scalability of inference replicas under variable load, multi-model routing across heterogeneous foundation model providers, multi-tenant access control with per-tenant quotas and billing, regulatory audit trail completeness across all model invocations and tool calls, and the operational maturity (rolling deployments, blue-green swaps, [[Canary Deployment|canary traffic splitting]], [[A/B Testing|A/B testing]]) required for production software systems serving many concurrent users. The external harness is not a single component but a distributed system composed of multiple independently operated services connected by network interfaces — an [[API Gateway]] that terminates client connections and routes requests, one or more [[Model Serving|model serving]] backends that execute [[AI Inference|inference]], a [[Tool Registry|tool microservice registry]] that exposes agent tools as independently deployed services, an [[Observability|observability]] stack that aggregates traces and metrics from all components, and an orchestration layer (LangGraph, AutoGen, CrewAI, Google ADK) that manages the agent loop — the sequence of model invocations, tool calls, approval gate decisions, and state updates that constitute a multi-step agentic task.

    The distinction between the external harness and [[Model Serving]] as previously understood is the addition of the agent loop management layer. Pre-agentic [[MLOps]] focused exclusively on the serving tier: efficiently routing a single model invocation request to an appropriate model replica and returning the completion. The external harness extends this with the orchestration tier: maintaining multi-turn session state, assembling [[Context Window|context windows]] from distributed memory services ([[Retrieval-Augmented Generation|RAG]] vector stores, session history databases, [[Tool Registry|tool result caches]]), routing tool call requests to appropriate microservice implementations, enforcing [[Approval Gate|approval gates]] as externally operated policy services, and aggregating [[Observability|distributed traces]] into audit logs that satisfy regulatory audit trail requirements. This two-tier architecture — serving + orchestration — is the defining structural property of the external harness, distinguishing it from both [[Internal AI Harness|internal harnesses]] (which collapse both tiers into a single process) and from the legacy [[Model Serving]] concept (which addressed only the serving tier without agent loop management).

    The economic case for external harnesses at enterprise scale is compelling. A multi-tenant external harness amortises the fixed cost of GPU inference infrastructure (H100 cluster operational overhead, model weight loading time, [[Autoscaling|autoscaling]] management) across many concurrent tenants, achieving GPU utilisation rates of 60–80% in well-tuned deployments versus the 5–20% utilisation characteristic of dedicated single-tenant [[Internal AI Harness|internal harnesses]] on general-purpose compute. The [[Load Balancing|load balancing]] layer can implement intelligent request routing — directing requests to the lowest-latency available model replica, load-balancing across [[Model Versioning|model versions]] for gradual rollouts, failing over to backup replicas on hardware failure — capabilities that are trivial to implement in a distributed external harness but require significant engineering investment to approximate within a single-process internal harness. For organisations serving thousands of concurrent [[Autonomous Agents|agent sessions]] across enterprise user populations, the external harness is the only architecturally viable option.

  ## Components / Architecture
    The external AI harness architecture decomposes into the following service layers, each independently deployable and scalable:

    - **[[API Gateway]] layer** — the north-bound interface accepting requests from client applications and routing them into the harness. Enterprise AI gateways (LiteLLM, Portkey, Kong AI Gateway, AWS API Gateway + Lambda) implement virtual key management (issuing per-tenant virtual keys backed by provider real keys stored securely in the gateway), [[Rate Limiting|rate limiting]] and quota enforcement per tenant and model, semantic caching (caching completions for semantically similar prompts, reducing inference costs by 20–40% on repetitive workloads), multi-provider routing (routing requests to OpenAI, Anthropic, Google Vertex, or self-hosted models based on cost, latency, and availability), and request/response logging for audit. Portkey (Palo Alto Networks, 2026) routes to over 1,600 LLM model endpoints. LiteLLM provides a self-hosted alternative with OpenAI-compatible `/v1/chat/completions` interface and adds single-digit millisecond gateway overhead per request.

    - **[[Model Serving]] / [[Inference Serving]] layer** — the southbound inference tier executing model forward passes. Kubernetes-native inference serving platforms: KServe (CNCF project, Istio-integrated) and Seldon Core for general ML model serving; vLLM + KEDA (Kubernetes Event-Driven Autoscaling) for LLM-specific workloads with [[Autoscaling|GPU autoscaling]] based on queue depth. BentoML provides a higher-level abstraction for packaging model serving as containerised microservices with automatic API generation. NVIDIA Triton Inference Server handles heterogeneous model format serving (TensorRT, ONNX, TensorFlow SavedModel, PyTorch TorchScript) within a unified external serving interface. The serving layer provides [[Model Versioning|versioned inference endpoints]], enabling [[Canary Deployment|canary deployment]] (routing 5% of traffic to a new model version) and [[A/B Testing|A/B testing]] (splitting traffic across model variants for quality evaluation).

    - **[[Agent Frameworks|Orchestration framework]] layer** — managing the agent loop: maintaining multi-turn session state, constructing [[Context Window|context windows]] from distributed sources, routing [[Tool Use|tool calls]] to external tool microservices, and aggregating results for re-injection into the model context. Production external harness orchestration frameworks as of mid-2026: LangGraph (state graph-based, built-in checkpointing for resumable workflows), AutoGen / Microsoft Agent Framework v1.0 (conversational multi-agent patterns), CrewAI (role-based team decomposition), and Google Agent Development Kit (ADK) with native A2A protocol support. The orchestration layer connects to the serving layer via the OpenAI-compatible API or provider-specific SDKs, decoupling orchestration logic from specific inference backends.

    - **Tool microservices** — independently deployed services implementing the tools available for model invocation. In the external harness pattern, each tool is a separately operated HTTP or [[gRPC]] service that implements a defined schema (JSON Schema parameter definition, OpenAPI specification, [[Model Context Protocol|MCP]] server interface). Tool microservices benefit from the full range of service reliability engineering — health checks, retries with exponential backoff, timeouts, circuit breakers — which are straightforward to implement at service boundaries in an external harness but require significant custom engineering within an [[Internal AI Harness]]. [[Agent Execution Sandboxes|Agent execution sandbox]] services (E2B, Daytona, Modal) are tool microservices providing isolated code execution environments for agent-generated code.

    - **[[Observability]] and audit service** — collecting, aggregating, and storing structured traces from all external harness components (gateway request logs, inference latency traces, tool call records, approval gate decisions, error events). OpenTelemetry instrumentation of all components provides vendor-neutral trace and metric collection. Helicone, PromptLayer, and LangSmith provide LLM-specific observability services that aggregate inference cost data, prompt/completion pairs for quality evaluation, and latency percentiles across model invocations. For regulated deployments, the audit log must be append-only, tamper-evident, and retained for a defined period (UK Financial Conduct Authority: 6 years for AI decision logs in financial services; GDPR Article 35 DPIA documentation requirements apply to automated decision systems).

    - **[[Approval Gate|Approval gate]] policy service** — the out-of-band service that enforces human-in-the-loop confirmation requirements for high-risk agent actions. Unlike the [[Internal AI Harness|internal harness]] where approval gates are implemented as blocking function calls in the model's execution thread, the external harness implements approval gates as asynchronous pause points where the agent workflow state is persisted, a notification is sent to a human reviewer, and the workflow resumes only upon confirmed approval. LangGraph's `interrupt()` primitive and Microsoft Foundry's `human_in_the_loop` step implement this pattern, enabling workflows that may pause for hours or days awaiting approval while freeing GPU inference resources for other requests.

    - **[[Multi-Tenant]] session and state management** — maintaining isolated session state per tenant, per user, or per agent session across the stateless external harness components. Session state includes [[Context Window|context history]], [[Agent Memory|agent memory]], pending tool calls, and [[Approval Gate|approval gate]] queue entries. Redis Cluster, PostgreSQL, and Amazon DynamoDB are common external state stores for external harness session management; LangGraph Checkpoint persistence provides a framework-native abstraction over these backends.

  ## Use Cases / Major Families
    - **Enterprise AI platform as a service** — large organisations deploy external harnesses as internal AI platforms serving multiple development teams, business units, and AI applications. A central AI platform team operates the [[API Gateway]], [[Model Serving]] infrastructure, [[Observability|observability stack]], and governance policies; product teams consume AI capabilities through the platform API without managing inference infrastructure. Microsoft Azure AI Studio, Google Vertex AI Agent Builder, and AWS Bedrock Agents represent the hyperscaler manifestation of this pattern; Portkey (now Palo Alto Networks) and Kong AI Gateway provide the self-hosted equivalent.

    - **[[Multi-Agent Orchestration|Multi-agent]] production deployments** — agentic systems coordinating multiple specialised AI agents (researcher, writer, coder, reviewer, supervisor) deploy external harnesses to achieve independent scalability of each agent's inference needs, fault isolation between agent types, and unified audit logging of all inter-agent communications. The external harness enables the system to route the supervisor agent's requests to a large, high-capability model (Claude 3.5 Sonnet, GPT-4o) while routing simpler sub-agent tasks to smaller, cheaper models (Llama 3.1 8B, Phi-3 Mini), optimising the cost-quality trade-off across the agent team dynamically.

    - **Regulated financial services AI** — algorithmic trading systems, fraud detection agents, credit decisioning systems, and AML surveillance deployed in UK and EU financial services operate under regulatory requirements (FCA SS3/21, EU AI Act Article 10–15) that mandate comprehensive audit trails of all AI decisions, human oversight checkpoints for consequential actions, and model version traceability. External harnesses satisfy these requirements through immutable audit logs, [[Approval Gate|approval gate]] workflows for high-value automated decisions, and [[Canary Deployment|canary deployment]] governance ensuring model versions are approved before production traffic exposure.

    - **Healthcare AI decision support** — clinical decision support systems, radiology AI, and patient triage systems deployed in NHS trusts and private healthcare organisations require external harnesses to satisfy MHRA AI as a Medical Device regulations, ICO guidance on automated decision-making in healthcare, and data residency requirements that prohibit patient data from leaving UK-controlled infrastructure. External harnesses that implement [[Process Isolation|process-boundary isolation]] prevent patient data from entering model processes without appropriate consent and audit logging.

    - **Scientific research computing** — large-scale AI-assisted research workflows (drug discovery, materials science, climate modelling) orchestrate many model invocations across diverse specialised models, with external harnesses providing the [[Distributed Systems|distributed workflow]] infrastructure. The STFC Hartree Centre (Warrington) and EPCC (Edinburgh) operate external harness infrastructure for UK research computing, enabling researchers to compose AI workflows without managing inference infrastructure.

    - **[[Agent Execution Sandboxes|Agent execution sandbox]] integration** — the external harness pattern is the natural complement to [[Agent Execution Sandboxes|code execution sandboxes]] (E2B, Daytona, Cloudflare Agents): the sandbox provides isolated execution environments for agent-generated code as externally accessible microservices, while the external harness routes model-generated code execution requests to the appropriate sandbox and manages the returned results within the agent loop. The separation of the orchestration harness from the execution sandbox is a clean application of the [[Microservices Architecture|microservices]] separation-of-concerns principle to agentic AI.

  ## Formal Description
    An external AI harness can be formalised as a distributed system H_ext = (G, S, O_f, T_net, P_svc, A_svc) where:
    - G is the API gateway service exposing a unified inference and agent API surface
    - S = {s_1, ..., s_k} is the set of model serving backend services, each s_i exposing a versioned inference endpoint
    - O_f is the orchestration framework managing agent loop state, context assembly, and workflow progression
    - T_net = {t_1^svc, ..., t_n^svc} is the set of tool microservices, each independently deployed and accessible via G
    - P_svc is the external approval gate policy service, implementing asynchronous human-in-the-loop workflows
    - A_svc is the observability and audit service, collecting traces from all components of H_ext

    The defining property of H_ext is that all component boundaries are network boundaries: inter-component communication incurs serialisation cost (JSON, Protobuf, or MessagePack encoding of request/response objects) and network transit latency (typically 0.5–50ms per hop on internal Kubernetes networking, 50–500ms for external API calls). This serialisation overhead is the primary latency disadvantage of the external harness relative to the [[Internal AI Harness]], and is the fundamental trade-off against the isolation, scalability, and governance benefits.

  ## Academic Context
    External harness architecture draws from three converging research and engineering traditions:

    The **[[Microservices Architecture|microservices]] and distributed systems engineering** tradition established the component isolation, API contract, and operational patterns that the external harness applies to AI inference. Newman's "Building Microservices" (2015, O'Reilly), the CAP theorem (Brewer, 2000), and the twelve-factor application methodology (Wiggins, 2011) provide the foundational principles. Martin Fowler's work on API gateway patterns, circuit breakers, and service mesh architectures at Thoughtworks directly informs external harness gateway and reliability design.

    The **[[MLOps]] and model serving** tradition extended microservices principles specifically to the challenge of serving trained ML models in production: model versioning, A/B testing, concept drift monitoring, and hardware-optimised inference backends. Sculley et al. (2015) "Hidden Technical Debt in Machine Learning Systems" established that the model code itself is a small fraction of the total system, with the surrounding infrastructure (data pipelines, serving systems, monitoring) constituting most of the engineering effort — a perspective that directly motivates the external harness's emphasis on infrastructure over model capability.

    The **agentic AI orchestration** literature of 2023–2026 extended MLOps serving concepts to multi-step, tool-using agentic workflows. The arXiv harness engineering cluster (Zhao et al. arXiv:2605.13357; Wei et al. arXiv:2604.18071; Seong arXiv:2604.21003) establishes the formal taxonomy of harness components applicable to both internal and external architectures. The specific external harness instantiation — where each harness component is a separately deployed service — is studied in Wei et al.'s architectural analysis of 70 agent systems, which finds that external coupling dominates multi-tenant and multi-model deployments.

    Key standardisation work relevant to external harness interoperability: Anthropic's [[Model Context Protocol|MCP]] (tool-to-agent interface standard, 2024), Google's [[Agent-to-Agent Protocol|A2A protocol]] (agent-to-agent interface standard, April 2025, 150+ partners), and the Linux Foundation Agent Communication Protocol (ACP, 2025) collectively define the API contracts that external harness components must implement for interoperability across the agentic AI ecosystem.

  ## Current Landscape (2026)
    The external AI harness market is bifurcated between cloud-native SaaS platforms and self-hosted open-source stacks, with rapid consolidation in the gateway segment and fierce competition in the orchestration layer:

    **Gateway consolidation**: Portkey, one of the leading LLM gateway platforms, was acquired by Palo Alto Networks in 2026, signalling the convergence of AI gateway and enterprise security market segments — a development that positions external harness security (prompt injection defence, output filtering, credential isolation) as a cybersecurity product category rather than merely an MLOps infrastructure concern. LiteLLM, the leading open-source self-hosted alternative, supports 100+ LLM providers via a unified OpenAI-compatible API and ships with virtual key budgeting, a management dashboard, and Docker deployment, adding single-digit millisecond overhead per gateway hop. Kong AI Gateway 3.x extends the Kong Enterprise API management platform with LLM-specific routing, semantic caching, and AI-specific rate limiting, targeting large enterprises with existing Kong investments.

    **Orchestration framework maturity**: Microsoft Agent Framework v1.0 (GA April 2026) represents the most significant framework consolidation milestone, converging AutoGen and Semantic Kernel into a single supported SDK with both .NET and Python SDKs, built-in support for Hosted Agents (containerised deployment on Azure Foundry), and native [[Model Context Protocol|MCP]] + [[Agent-to-Agent Protocol|A2A]] protocol support. Google Agent Development Kit (ADK, 2025) provides native integration with Vertex AI Agent Builder for external harness deployment on Google Cloud, with A2A protocol as the native inter-agent communication layer. LangGraph (LangChain) remains the most flexible open-source option for custom external harness orchestration, with its graph-based state machine enabling complex conditional agent workflows with built-in checkpoint persistence.

    **Model serving infrastructure**: The [[Model Serving|serving layer]] has matured significantly. KServe (CNCF) + vLLM + KEDA represents the dominant Kubernetes-native LLM serving stack for external harnesses deploying open-weight models (Llama 3.x, Mistral, Qwen 2.5, Gemma 2). BentoML Bento provides a higher-level packaging abstraction. NVIDIA's llm-d (Distributed LLM Inference, 2025) and Google's GKE Inference Gateway target hyperscale external harness deployments with intelligent request routing, disaggregated prefill/decode, and KV cache aware load balancing that routes requests to replicas with warm prefix cache for the current request's system prompt.

    **Protocol standardisation**: The co-existence of MCP (tool interface standard) and A2A (agent interface standard) as complementary protocols has become the dominant pattern for external harness interoperability. A2A 1.0 specification has 150+ technology partners (Salesforce, ServiceNow, Workday, MongoDB) and is the default inter-agent communication protocol for enterprise external harness deployments. MCP has been adopted by virtually all major AI providers and IDE-integrated tooling. The Shen et al. comparative security analysis (arXiv:2602.11327) found significant threat surfaces in all four dominant agent protocols (MCP, A2A, Agora, ANP) when deployed without adequate authentication hardening, motivating external harness gateway security as the primary mitigation layer.

  ## UK Context
    The UK external AI harness ecosystem is characterised by strong academic research, significant regulated-industry deployments, and growing sovereign compute investment in external harness infrastructure:

    **UCL** leads the UKRI national generative AI hub, with partners including Imperial College London, Cambridge, Oxford, Manchester, Edinburgh, and industry participants IBM, BT, DeepMind, and Cisco Systems. The hub's infrastructure research includes external harness architectures for multi-institutional AI workflows, where research data sovereignty requirements demand that inference computation remain within UK-controlled infrastructure — motivating [[Process Isolation|process-isolated]] external harness deployments on UK sovereign compute rather than US commercial cloud AI APIs.

    **University of Southampton**, whose multi-agent systems research group (founded by Nick Jennings, later UK Government Chief Scientific Adviser) produced foundational work on agent communication languages and coordination protocols in the 1990s–2000s, remains active in the external harness security and coordination domain. Southampton's formal methods research applies to verification of external harness [[Approval Gate|approval gate]] policy specifications, contributing to the regulatory compliance toolchain for AI Act-covered agentic systems.

    **The Alan Turing Institute** (ATI) in London operates research programmes on [[AI Safety|AI safety]] and [[AI Agent Coordination|agentic system governance]], including evaluation of external harness audit trail completeness and approval gate effectiveness as governance mechanisms. The ATI's work on AI assurance frameworks directly engages external harness design requirements for UK regulated industries.

    **UK financial services** represent the largest deployed base of external AI harnesses in the UK economy. Major UK banks (Barclays, HSBC, Lloyds Banking Group, NatWest) operate enterprise external harnesses for customer service automation, fraud detection, credit assessment, and AML surveillance, each requiring comprehensive external harness audit logging to satisfy FCA regulatory obligations. The FCA's AI Innovation Hub has engaged with external harness vendors on regulatory expectations for audit trail completeness, approval gate robustness, and model version governance — producing informal guidance that treats the external harness architecture as the compliance mechanism of record for AI systems in regulated financial services.

    **Northern English** research and industrial deployments: The STFC Hartree Centre (Daresbury, Warrington) operates external harness infrastructure on Scafell Pike (HPE Cray EX system) for AI-assisted scientific workflows, routing researcher job submissions through an external orchestration harness that manages model invocations, simulation tool calls, data analysis pipeline steps, and result curation. The University of Leeds' AI for Healthcare research group deploys external harnesses for clinical NLP and decision support evaluation, with strict [[Process Isolation|process-boundary isolation]] between patient data stores and model inference processes to satisfy NHS data security requirements.

    **Doubleword** (UK startup) is developing sovereign inference infrastructure — external harness backends running entirely within UK-controlled data centres — providing the UK-regulated industry market with a compliant external AI harness stack that avoids US cloud provider exposure of sensitive data. This aligns with the UK Government's AI Infrastructure Strategy (2026) emphasis on digital sovereignty for sensitive agentic AI workloads.

    **DeepMind** (London), while primarily a research lab, operates external harness infrastructure for internal AI research workflows and has published on multi-agent coordination frameworks (AlphaDev, AlphaFold 3 multi-model pipelines) that instantiate external harness architectural patterns. DeepMind's participation in the UCL UKRI hub connects fundamental research on agent coordination to practical external harness deployment at UK research scale.

  ## Future Directions (2026-2030)
    - **Service mesh-native AI orchestration** — [[Service Mesh|service mesh]] platforms (Istio, Linkerd, Consul Connect) will integrate AI-specific traffic management (model-version-aware routing, inference-latency-based load balancing, GPU resource quota enforcement) into the mesh data plane, enabling external harness orchestration policies to be expressed as service mesh configuration rather than application code.
    - **Federated external harnesses** — cross-organisation external harness federation, where multiple independent harness deployments coordinate agent workflows across institutional boundaries via [[Agent-to-Agent Protocol|A2A]] protocol, enabling genuinely distributed multi-institutional AI applications without centralised data aggregation. The NHS federated AI programme and UKRI cross-institutional research computing are early drivers.
    - **Formal audit trail standards** — EU AI Act implementing regulations and UK AI Product Safety Framework will specify formal requirements for external harness audit trail completeness, retention, and format, driving standardisation of AI governance log formats (analogous to SIEM CEF/LEEF in cybersecurity) as a regulatory compliance requirement for all external harness deployments in high-risk AI system categories.
    - **AI-native infrastructure-as-code** — external harness configuration (model routing rules, approval gate policies, quota configurations, canary split percentages) will be managed as code via GitOps workflows (ArgoCD, Flux), enabling version-controlled, auditable changes to external harness behaviour with the same pipeline governance applied to application code changes.
    - **Inference cost optimisation via harness-level routing** — external harnesses will implement increasingly sophisticated model routing logic that dynamically selects the cheapest model capable of satisfying the current request's quality requirements, exploiting the heterogeneous cost-quality frontier of available foundation models. Routing decisions informed by task classification, historical quality measurements, and real-time cost signals will be the primary economic efficiency lever for external harness operators.
    - **Disaggregated external harness components** — following the disaggregated prefill/decode architectural trend in [[AI Inference|inference serving]], external harnesses will decompose into finer-grained independently scalable services — separate context assembly service, separate KV cache service, separate output validation service — enabling more precise resource allocation and enabling components with different scaling characteristics to scale independently.

  ## Performance and Tradeoff Analysis
    The external AI harness imposes a characteristic overhead profile that determines where it is superior to and where it is inferior to the [[Internal AI Harness]]:

    **Latency cost of IPC serialisation**: Every harness component boundary in the external architecture incurs serialisation cost — JSON, Protobuf, or MessagePack encoding of request and response objects — and network transit latency. Typical figures for well-tuned internal Kubernetes networking: 0.5–5ms per gateway hop for small requests; 5–50ms for large context payloads (>100KB). For an agentic tool-call loop with 20 tool invocations, the external harness adds 10–1,000ms of serialisation overhead vs. the sub-1ms overhead of the [[Internal AI Harness]]. This latency cost is a primary driver toward internal harnesses for latency-critical use cases, but is amortised across [[Multi-Tenant]] load in high-concurrency enterprise deployments where the serving layer's utilisation improvement from batching multiple tenants' requests outweighs the per-request latency overhead.

    **Scalability and utilisation advantage**: The external harness's primary economic advantage is GPU utilisation. A dedicated internal harness serving a single user achieves 5–20% GPU utilisation during typical interactive workloads (most time is spent on human think time, not model inference). A multi-tenant external harness serving 100 concurrent users can achieve 60–80% GPU utilisation by batching inference requests from multiple tenants, amortising the fixed GPU cost over substantially more productive compute time per dollar. At enterprise scale (1,000+ concurrent users, 24/7 operation), the TCO advantage of the external harness over per-user internal harnesses can be 5–20× — sufficient to justify the architectural complexity and latency overhead.

    **Fault isolation and operational resilience**: External harness components fail independently. If the tool microservice handling database queries becomes unavailable, the orchestration framework can detect the failure (health check miss, connection timeout) and route tool calls to a fallback service or gracefully degrade the agent's capabilities. An [[Internal AI Harness]] operating in the same process as a failing tool implementation may crash the entire agent process, requiring a full restart. For enterprise deployments where agent sessions represent significant accumulated state and user trust, the external harness's fault isolation advantage is a primary architectural motivation.

    **Multi-model and multi-provider routing**: The external [[API Gateway]] layer enables runtime switching between models and providers — routing requests to GPT-4o when Claude 3.5 Sonnet is unavailable, switching to a cheaper model variant for low-complexity sub-tasks, or routing by capability (mathematical reasoning to o3, code generation to Claude 3.5 Sonnet, fast classification to Llama 3.1 8B). This dynamic multi-model routing is architecturally impossible within a single [[Internal AI Harness]] that embeds a specific model's weights, and is the primary capability advantage of the external harness for organisations with heterogeneous AI capability requirements.

    **Governance and audit trail completeness**: The external harness's distributed architecture naturally produces distributed audit logs — gateway access logs, inference service request logs, tool microservice execution logs, approval gate decision logs — that can be aggregated into a complete end-to-end audit trail via the [[Observability]] service. UK financial services regulators (FCA SS3/21 Senior Managers and Certification Regime applied to AI systems) effectively require this level of audit completeness for AI systems making or influencing consequential financial decisions. The external harness is the natural compliance architecture for these requirements; achieving equivalent audit completeness from an [[Internal AI Harness]] requires significant custom instrumentation investment.

    **Model version governance**: External harness [[API Gateway]] layers can implement model version governance — requiring approvals before new model versions receive production traffic, enforcing canary testing percentages (5% → 20% → 50% → 100% staged rollout with automated quality gate checks at each stage), and enabling instant rollback by adjusting gateway routing weights. An internal harness version change requires application redeployment, which in enterprise environments with formal change management processes may take days to weeks. For organisations deploying foundational AI capabilities across many downstream applications, the external harness's independent model versioning is a critical operational capability.

  ## Infrastructure Ecosystem and Tooling (2026)
    The external AI harness ecosystem in 2026 encompasses a mature and rapidly evolving set of infrastructure components spanning the gateway, serving, orchestration, observability, and evaluation layers:

    **LLM gateway platforms**: LiteLLM (open-source, self-hosted) is the leading open-source external harness gateway, translating between application requests and 100+ LLM providers via a unified OpenAI-compatible API, with virtual key budgeting, cost tracking, a management dashboard, and Docker-native deployment. Portkey (Palo Alto Networks, 2026) provides a managed SaaS gateway with guardrails, semantic caching, and prompt management, routing to 1,600+ model endpoints. Kong AI Gateway 3.x extends the Kong Enterprise API management platform with AI-specific plugins for LLM routing, semantic caching, and rate limiting. AWS API Gateway + Lambda, Azure API Management, and Google Apigee each offer cloud-native external harness gateway implementations integrated with their respective AI service ecosystems.

    **Inference serving platforms**: KServe (CNCF) provides Kubernetes-native model serving with Istio integration, native [[Canary Deployment|canary deployment]], and multi-framework support (TensorFlow, PyTorch, ONNX, SKLearn). vLLM + KEDA provides GPU-autoscaling LLM serving with PagedAttention [[KV Cache]] management and continuous batching. BentoML provides a higher-level packaging abstraction enabling model serving as containerised microservices with automatic OpenAPI specification generation. NVIDIA Triton Inference Server handles heterogeneous model format serving within a unified external serving interface. NVIDIA llm-d (Distributed LLM Inference, 2025) provides disaggregated serving with KV cache-aware load balancing and intelligent request routing based on prefix cache warmth.

    **Orchestration frameworks**: LangGraph (LangChain, 2024) provides graph-based stateful agent orchestration with built-in checkpoint persistence for resumable workflows, native [[Model Context Protocol|MCP]] tool integration, and support for human-in-the-loop interrupt/resume patterns. Microsoft Agent Framework v1.0 (Python and .NET SDKs, GA April 2026) provides conversational multi-agent coordination with native A2A protocol support and Foundry-hosted deployment. CrewAI (2024) provides role-based multi-agent team coordination optimised for structured task decomposition workflows. Google Agent Development Kit (ADK, 2025) provides native A2A protocol support with Vertex AI Agent Builder deployment integration. OpenAI Agents SDK (2025) provides tool-use and agent handoff primitives natively integrated with GPT-4o and o3.

    **Observability and evaluation**: Helicone provides LLM-specific observability with request logging, cost attribution, and latency percentile tracking for external harness serving tiers. PromptLayer provides prompt versioning, A/B testing, and regression detection for external harness prompt management. LangSmith (LangChain) provides distributed trace visualization for LangGraph external harness workflows. Phoenix (Arize AI, open-source) provides LLM evaluation and monitoring with OpenTelemetry integration. The LLM Evaluation Harness (EleutherAI) provides standardised benchmarking of model quality across external harness serving configurations, enabling quality regression detection after model version changes.

    **Agent execution sandboxes**: E2B (Coding SDK) provides secure cloud sandboxes for agent-generated code execution as an external microservice, with per-session isolated environments and a Python SDK for external harness integration. Daytona provides development environment management for longer-running agent code execution workflows. Modal provides serverless cloud functions with GPU support for heavy compute tool invocations from external harnesses. Cloudflare Agents provides edge-deployed agent execution with Cloudflare's global network for latency-minimised external harness tool invocations.

  ## Security Architecture of External Harnesses
    The external harness's distributed architecture creates both additional attack surface and additional defence-in-depth opportunities compared to the [[Internal AI Harness]]:

    **Authentication and authorisation at the gateway**: The [[API Gateway]] is the primary security enforcement point in the external harness. Virtual key management enforces per-tenant authentication: client applications authenticate with virtual keys that are mapped to real provider credentials stored securely within the gateway, preventing credential exposure to client applications. Authorisation policies (which tenants may access which models, which tools, at what rate limits) are enforced at the gateway before requests reach the inference or orchestration tiers. Portkey's acquisition by Palo Alto Networks in 2026 reflects the convergence of AI gateway and enterprise security tooling, with the combined platform adding next-generation firewall-grade prompt injection detection and output filtering to the external harness gateway layer.

    **Prompt injection isolation via process boundaries**: The external harness's network boundary between the orchestration framework and tool microservices provides a natural prompt injection isolation layer. Attacker-controlled content injected via a tool's return value must be serialised (JSON, Protobuf) before crossing the network boundary, enabling schema validation and content filtering at the boundary. This is structurally superior to the [[Internal AI Harness]] where tool outputs are injected directly into the model context without network-boundary filtering. Security-critical external harness deployments implement content policy enforcement layers at both the tool microservice output and the model input boundaries, creating a defence-in-depth architecture.

    **Sandboxed code execution via external sandbox services**: [[Agent Execution Sandboxes|Agent execution sandbox]] services (E2B, Daytona, Cloudflare Agents, Microsoft Hyperlight) deployed as external tool microservices provide hard [[Sandboxing|sandbox isolation]] for agent-generated code execution without sacrificing the external harness's multi-tenancy and scalability advantages. Each code execution request dispatches to a fresh isolated container or micro-VM, ensuring side effects cannot persist between agent sessions or tenants. The external harness orchestration framework manages sandbox lifecycle — provisioning, code execution, result retrieval, and teardown — as a standard tool microservice call.

    **Distributed tracing for security incident investigation**: The external harness's [[Observability]] infrastructure — OpenTelemetry distributed traces spanning gateway, inference, orchestration, and tool service components — provides a complete causal chain for security incident investigation. When a multi-agent system produces an unexpected action, distributed tracing enables reconstructing the exact sequence of model invocations, tool calls, and approval gate decisions that led to the outcome, identifying the specific harness component where the failure originated. This causal traceability is architecturally difficult to achieve in [[Internal AI Harness|in-process harnesses]] where all components share the same process log.

    **Network policy enforcement via service mesh**: External harness components communicate over the network, enabling [[Service Mesh|service mesh]] security policies (mTLS between all components, network segmentation preventing tool microservices from calling the inference tier directly, egress filtering preventing tool microservices from calling unexpected external endpoints) to be enforced at the infrastructure layer without application code changes. Istio Authorisation Policies or Kubernetes Network Policies implementing least-privilege network access between harness components represent an important defence-in-depth layer for high-security external harness deployments.

    **Model output filtering and guardrails**: The external harness [[API Gateway]] or a dedicated guardrail service layer can apply output filtering — checking model completions for prohibited content (PII, confidential information, regulated financial advice) before returning them to clients. Portkey's guardrails system implements configurable content policies applied to every request/response pair; LlamaGuard (Meta) and Llama Guard 3 provide open-source model-based content classification usable as a gateway-layer guardrail service. Output filtering in the external harness is architecturally straightforward — insert a filtering service into the request path before the completion is returned to the orchestration tier.

  ## Serving Layer Architecture Patterns
    The external harness serving layer has evolved a set of canonical architecture patterns adapted from distributed systems engineering to the specific requirements of AI inference serving:

    **Request-response serving (synchronous)**: The baseline pattern — client sends a prompt, the serving tier executes inference, returns completion. Appropriate for single-turn requests with latency SLOs under 30 seconds. Implemented by all major LLM API providers via [[REST API|HTTP/REST]] with JSON bodies. The external harness [[API Gateway]] adds authentication, rate limiting, and routing atop the synchronous request-response pattern.

    **Streaming serving via SSE**: Incremental token-by-token delivery via Server-Sent Events (SSE) enables perceived latency far below total generation time — the client begins processing the first tokens within 100–500ms TTFT while the full completion continues generating. All production LLM external harnesses implement streaming; it is the default mode for interactive agent applications. SSE streaming introduces session affinity requirements (clients must reconnect to the same inference backend to receive the continuation of a streamed response) that require careful [[Load Balancing|load balancer]] configuration.

    **Async job queue serving**: For batch inference workloads (embedding generation, document classification, offline analysis) where latency is not time-critical, external harnesses implement queue-based submission: clients submit jobs to a message queue (Kafka, RabbitMQ, AWS SQS), a pool of inference workers processes jobs at maximum throughput, and clients poll or subscribe to result notifications. Queue-based serving achieves near-100% GPU utilisation on batch workloads — the optimal throughput pattern for [[MLOps|ML workloads]] where cost efficiency dominates over latency.

    **Multi-turn session serving**: Agentic applications require maintaining session state across multiple inference turns — the external harness must associate each request with its prior conversation history, [[KV Cache]] (if serving-tier KV caching is implemented), and tool invocation history. Session state management in the external harness can be: server-side (session history stored in the serving tier, client sends only new tokens); client-side (client sends full conversation history on each turn, serving tier is stateless); or hybrid (client sends incremental context with a session ID, serving tier maintains the [[KV Cache]] for the session). Server-side session management enables prefix caching across session turns; client-side session management enables horizontal scaling without session affinity requirements.

    **Disaggregated prefill-decode**: Emerging architecture pattern (Splitwise, Sarathi-Serve, NVIDIA llm-d) that physically separates the computationally intensive prefill phase (processing the input prompt, compute-bound) from the memory-bandwidth-intensive decode phase (generating output tokens, memory-bound) across different specialised inference pools. The external harness serving tier orchestrates the disaggregation: prefill requests are routed to high-FLOP compute nodes (H100/H200 GPUs optimised for matrix multiply throughput), while decode is routed to memory-bandwidth-optimised nodes (AMD MI300X with 192GB HBM3). Cross-pool [[KV Cache]] transfer via RDMA adds communication overhead that must be amortised against the utilisation improvement: empirical results show 1.2–1.5× throughput improvement at medium-to-high load for typical LLM serving workloads.

    **Expert routing for MoE models**: [[Mixture-of-Experts|Mixture-of-Experts]] inference in the external harness requires the serving tier to coordinate expert routing — determining which expert networks process each token's embedding — across potentially multiple GPU nodes hosting different expert shards. The external harness's service mesh layer facilitates expert selection routing with all-to-all communication patterns, with expert parallel batch construction managed by the serving tier orchestration layer.

  ## Harness Governance Patterns
    External harness deployments in regulated industries have evolved a set of canonical governance patterns that encode compliance requirements as harness configuration:

    **Immutable audit logging**: All external harness components emit append-only log records to a write-protected log aggregation service (Splunk, Elasticsearch with WORM storage, or AWS CloudTrail). Log records include: timestamp, request ID, tenant ID, model version, prompt hash (not plaintext for privacy), completion hash, tool calls invoked, approval gate decisions, and cost. Immutability is enforced through object storage versioning (S3 Object Lock) or blockchain-anchored hash chains. FCA regulated firms retain these logs for 6 years minimum.

    **Break-glass escalation**: The external harness approval gate pattern enables "break-glass" escalation workflows for time-sensitive but high-risk decisions. If a human reviewer does not respond to an approval request within a defined SLA (e.g., 30 minutes for a medical urgency classification), the harness can escalate to a senior reviewer, reduce the model's permitted action scope (downgrading from write to read-only), or terminate the agent session with a structured failure response, rather than silently timing out in an undefined state.

    **Shadow mode evaluation**: [[A/B Testing|A/B testing]] and shadow evaluation patterns run a new model version in parallel with the production version, recording its outputs without serving them to users, to validate quality before traffic cutover. External harness [[Model Serving]] layers implement shadow mode via traffic mirroring at the serving tier — every request is duplicated to both production and shadow inference backends, with shadow outputs logged for offline quality comparison. This is architecturally straightforward in the external harness but would require application-level engineering to implement in an [[Internal AI Harness]].

    **Rate limiting by capability tier**: External harness [[Rate Limiting|rate limiting]] can be applied at the tool-call level — not just the token level — enabling governance policies such as "a single agent session may invoke at most 10 write-permission tool calls per minute" or "a specific tenant may not invoke the code execution sandbox tool more than 100 times per day." This capability-tier rate limiting is the primary mechanism for preventing runaway agentic systems from consuming unbounded resources or producing unbounded side effects in the external harness pattern.

    **Cost attribution and chargeback**: The external harness [[API Gateway]] virtual key system enables per-team, per-project, or per-user cost attribution — each inference request is tagged with the issuing virtual key, enabling precise cost allocation across the organisation. This chargeback capability is essential for enterprise AI governance: without it, AI infrastructure costs are shared across business units without visibility into which teams or applications drive the majority of spend, making it impossible to align AI investment with business value.

  ## Key Terminology
    - **API gateway** — the north-bound network interface layer of the external harness, accepting agent requests and routing them through authentication, rate limiting, semantic caching, and model selection before forwarding to the inference serving tier.
    - **Multi-tenancy** — the property of serving multiple independent users, teams, or applications from a shared external harness infrastructure, with isolation of session state, audit logs, and cost attribution between tenants.
    - **Model routing** — the gateway-layer logic that selects which model or model version to route each request to, based on capability requirements, cost optimisation, latency SLO, and availability signals.
    - **Orchestration framework** — the software layer managing the agent loop in the external harness: maintaining multi-turn session state, routing tool calls, managing context assembly, and implementing approval gate workflows across independently deployed service components.
    - **Semantic caching** — the gateway-layer capability that caches completions for semantically similar (not just lexically identical) prompts, reducing inference costs by 20–40% on repetitive enterprise workloads with similar but not identical requests.
    - **Service mesh** — the infrastructure layer implementing mTLS encryption, service discovery, load balancing, and distributed tracing between external harness microservice components, abstracting network reliability concerns from application code.
    - **Virtual key** — a gateway-issued credential that maps to one or more real provider API keys stored securely within the gateway, enabling per-tenant credential isolation without exposing provider credentials to client applications.
    - **Canary deployment** — the practice of routing a small percentage (typically 1–10%) of production traffic to a new model version while the remainder serves the stable version, enabling quality validation before full traffic cutover.
    - **Process isolation** — the property of running the model inference process and the host application process in separate OS process address spaces, enforced by the kernel's virtual memory subsystem, preventing in-process memory corruption attacks.
    - **Hosted agent** — an agent deployed as a containerised service on managed inference infrastructure (Microsoft Foundry, Google Vertex AI Agent Builder, AWS Bedrock Agents), with the external harness providing the orchestration, scaling, and observability wrapper.

  ## Research & Literature
    1. Wei, H. et al. (2026). Architectural Design Decisions in AI Agent Harnesses. *arXiv:2604.18071*. Empirical study of 70 agent projects; characterises external vs. internal coupling patterns across five design dimensions.
    2. Zhao, H. et al. (2026). AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents. *arXiv:2605.13357*. Canonical taxonomy of harness components applicable to both internal and external architectures.
    3. Xu, Z. et al. (2025). The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption. *arXiv:2601.13671*. Systematic taxonomy of multi-agent orchestration patterns in enterprise external harness deployments.
    4. Shen, Y. et al. (2025). Security Threat Modeling for Emerging AI-Agent Protocols: A Comparative Analysis of MCP, A2A, Agora, and ANP. *arXiv:2602.11327*. Identifies significant threat surfaces in external harness inter-agent protocols; motivates gateway-layer security mitigations.
    5. Liu, B. et al. (2025). From Glue-Code to Protocols: A Critical Analysis of A2A and MCP Integration for Scalable Agent Systems. *arXiv:2505.03864*. Analysis of MCP + A2A protocol integration patterns in production external harness deployments.
    6. Google (2025). Agent2Agent (A2A) Protocol Specification v1.0. *google.com/agent-framework/a2a*. Standard for agent-to-agent communication in external harness environments; 150+ enterprise partners.
    7. Anthropic (2024). Model Context Protocol (MCP) Specification. *anthropic.com/mcp*. Standard for tool-to-agent interface in external harness tool microservice registries.
    8. Microsoft (2026). Microsoft Agent Framework at BUILD 2026: Agent Harness, Hosted Agents, CodeAct. *devblogs.microsoft.com/agent-framework*. External harness via Microsoft Foundry Hosted Agents; MAF v1.0 convergence of AutoGen + Semantic Kernel.
    9. Gartner (2026). Magic Quadrant for Agentic AI Platforms. Gartner Research. Enterprise external AI harness platform evaluation; projects 40% enterprise AI agent embedding by end-2026.
    10. Spheron Blog (2026). AI Gateway Setup 2026: LiteLLM, Portkey, and Kong AI Gateway for Multi-Model LLM Traffic. *spheron.network/blog*. Comparative analysis of external harness API gateway platforms.
    11. RunPod (2026). AI Model Serving Architecture: Building Scalable Inference APIs for Production Applications. *runpod.io/articles*. External harness serving layer architecture: inference engine, serving layer, orchestration layer decomposition.
    12. Sculley, D. et al. (2015). Hidden Technical Debt in Machine Learning Systems. *NIPS 2015*. Foundational insight that model code is a small fraction of total ML system engineering; motivates external harness infrastructure investment.
    13. Kwon, W. et al. (2023). Efficient Memory Management for Large Language Model Serving with PagedAttention. *SOSP 2023*. PagedAttention KV cache management enabling efficient multi-tenant external harness serving.
    14. Agrawal, A. et al. (2024). Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve. *OSDI 2024*. Continuous batching enhancements enabling high-throughput external harness serving tiers.
    15. Newman, S. (2015). Building Microservices. O'Reilly Media. Foundational microservices principles (service isolation, API contracts, independent scalability) applied to external harness architecture.
    16. Jennings, N.R. (1993). Commitments and Conventions: The Foundation of Coordination in Multi-Agent Systems. *The Knowledge Engineering Review*, 8(3). University of Southampton foundational work on inter-agent coordination directly relevant to external harness multi-agent orchestration.
    17. Wu, Q. et al. (2023). AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation. *arXiv:2308.08155*. Foundational conversational multi-agent framework adopted in the Microsoft Agent Framework external harness.
    18. Park, J.S. et al. (2023). Generative Agents: Interactive Simulacra of Human Behavior. *UIST 2023*. Earliest demonstration of external harness-scale multi-agent infrastructure needs.
    19. arXiv (2026). Distinguishing Autonomous AI Agents from Collaborative Agentic Systems: A Comprehensive Framework. *arXiv:2506.01438*. Formal framework for agent autonomy levels; characterises external harness governance requirements by autonomy tier.
    20. Foundation for Intelligent Physical Agents (2002). FIPA ACL Message Structure Specification. *fipa.org*. Historical precursor to MCP and A2A; establishes agent communication language design principles still reflected in external harness protocol design.
    21. Patel, P. et al. (2024). Splitwise: Efficient Generative LLM Inference Using Phase Splitting. *ISCA 2024*. Disaggregated prefill/decode architecture for external harness serving tier optimisation.
    22. RTInsights (2026). 2026 Will Be the Year of Multiple AI Agents. RTInsights Analysis. Enterprise survey: 28% deployment rate, 35–40% cost reduction; external harness patterns dominate multi-agent successes.
    23. Seong, H. (2026). The Last Harness You'll Ever Build. *arXiv:2604.21003*. Argues for stable harness architecture spanning internal and external deployment modes.
    24. arXiv (2026). Infrastructure for AI Agents. *arXiv:2501.10114*. Covers agent infrastructure requirements including certification, confidentiality isolation, and interaction interface design relevant to external harness regulatory compliance.
    25. Palo Alto Networks (2026). Palo Alto Networks Acquires Portkey. Press Release. Market consolidation of external harness gateway with enterprise cybersecurity; signals AI gateway as security product category.
    26. UK Government DSIT (2025). UK AI Hardware Plan. *gov.uk*. Sovereign AI inference infrastructure investment context for UK external harness deployments.
    27. Doubleword (2026). Sovereign Inference Infrastructure for UK Data Centres. Product announcement. UK-native external harness backend for regulated industries requiring data residency guarantees.
    28. arXiv (2026). Making Sense of AI Agents Hype: Adoption, Architectures, and Takeaways from Practitioners. *arXiv:2604.00189*. Practitioner survey of external harness adoption challenges and architectural decisions in production enterprise deployments.

- ### Provenance
  - sources:: https://arxiv.org/abs/2604.18071, https://arxiv.org/abs/2605.13357, https://arxiv.org/pdf/2601.13671v1, https://arxiv.org/pdf/2602.11327, https://arxiv.org/pdf/2505.03864, https://arxiv.org/pdf/2604.08224, https://arxiv.org/pdf/2604.21003, https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/, https://spheron.network/blog/ai-gateway-litellm-portkey-kong-gpu-cloud/, https://www.runpod.io/articles/guides/ai-model-serving-architecture-building-scalable-inference-apis-for-production-applications, https://portkey.ai/features/ai-gateway, https://www.spheron.network/blog/ai-gateway-litellm-portkey-kong-gpu-cloud/, https://inworld.ai/resources/best-llm-router-ai-gateway, https://arxiv.org/pdf/2501.10114, https://arxiv.org/pdf/2604.00189, https://arxiv.org/pdf/2506.01438, https://insidehpc.com/2025/09/partnership-formed-for-uk-ai-infrastructure/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
