- ### Definition
  - An **agent execution sandbox** is an isolated, ephemeral execution environment that provides hardware or OS-level security boundaries within which [[Agentic AI]] systems may run [[Tool Use]] operations, execute AI-generated code, interact with file systems, and invoke external APIs — all without risk of unintended access to host infrastructure, other tenants' workloads, or persistent system state. The concept emerges directly from the threat model of [[Agentic Workflow]] pipelines: when a [[Large Language Models]] drives a [[Tool Call Loop]] that may spawn arbitrary shell commands, write files, establish network connections, and invoke privileged system operations, standard software-process isolation (Linux namespaces, cgroups, [[Docker Containerisation Platform]] runc isolation) is insufficient because frontier [[Large Language Models]] have demonstrated the ability to discover and exploit container misconfigurations to achieve host-level access. The 2026 research consensus, formalised by SandboxEscapeBench (Marchand et al., arXiv:2603.02277, co-authored with the UK [[AI Safety]] Institute), is that a minimum of Firecracker microVM isolation or equivalent kernel-level VM boundary is required for production agent execution. The major commercial implementations — E2B (Firecracker microVMs, $21M Series A, July 2025), Daytona (Docker and Kata Containers, 850K daily sandbox runs as of May 2026), Cloudflare Sandboxes (general availability April 2026), Modal (gVisor with GPU memory snapshots), and Vercel Sandbox (Firecracker microVMs on Vercel build infrastructure) — each realise this security boundary differently while converging on a shared API surface: on-demand creation, [[Function Calling]] or [[Model Context Protocol]] integration, file system and network scoping, and sub-second cold-start latency. Integration with the [[Model Context Protocol]] has proven transformative: by registering a sandbox provider as an [[MCP Server]], [[Terminal Coding Agents]], [[Agent Development SDKs]], and [[Multi-Agent Orchestration Frameworks]] can discover and invoke isolated execution environments through the same protocol surface they use for every other tool, enabling a composable [[Decentralised Agentic Infrastructure Stack]] in which sandboxes are first-class infrastructure primitives rather than bespoke per-agent engineering. The [[Agent Harness]] layer above the sandbox manages credential scoping, network egress policy, step timeouts, resource quotas, and human approval gates — while the sandbox below ensures that whatever the agent executes cannot escape its designated boundary regardless of the agent's intent or the model's capability to discover escape vectors.

- ### Semantic Classification
  - owl-class:: infrastructure:AgentExecutionSandboxes
  - owl-role:: ExecutableProtocol | InfrastructurePrimitive | Concept
  - owl-inferred:: infrastructure:IsolationEnvironment, infrastructure:SecureExecutionContext, ai:AgentInfrastructure
  - belongs-to-domain:: [[AI Infrastructure]], [[Containerisation]]
  - implemented-in-layer:: [[Container Runtime]], [[Agent Harness]]

- ### Relationships
  - is-subclass-of:: [[Agent Harness]], [[AI Infrastructure]], [[Containerisation]]
  - has-part:: [[Container Runtime]], [[MCP Server]], [[Code Execution]], [[Agent Memory]], [[API Gateway]]
  - requires:: [[Containerisation]], [[Tool Use]], [[Docker Containerisation Platform]], [[Open Container Initiative]]
  - enables:: [[Agentic Workflow]], [[Autonomous Coding]], [[Terminal Coding Agents]], [[Multi-Agent Systems]], [[Autonomous Agent]], [[Agentic AI]]
  - implements:: [[Model Context Protocol]], [[Open Container Initiative]], [[Tool Call Loop]]
  - depends-on:: [[Cloud Computing]], [[Serverless Computing]], [[Container Orchestration]], [[Docker Containerisation Platform]]
  - supports:: [[AI Safety]], [[Human-in-the-Loop]], [[Prompt Injection]] (defence against), [[Agent Evaluation Benchmarks]]
  - uses:: [[Function Calling]], [[MCP Server]], [[MCP Client]], [[External AI Harness]], [[Vector Database]]
  - contrasts-with:: [[Internal AI Harness]], [[Regulatory Sandbox]]
  - related-to:: [[Agent Development SDKs]], [[Multi-Agent Orchestration Frameworks]], [[LLM Application Frameworks]], [[Terminal Coding Agents]], [[VisionClaw Agentic Container]], [[Decentralised Agentic Infrastructure Stack]], [[SWE-bench]], [[Edge Computing]]
  - standardized-by:: [[Open Container Initiative]], [[Model Context Protocol]], [[EU AI Act]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:ContainerRuntime))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:MCPServer))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:CodeExecutionEngine))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:NetworkEgressPolicy))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:FilesystemScope))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:hasPart infrastructure:ResourceQuota))
  ## Dependency Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:requires infrastructure:Containerisation))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:requires ai:ToolUse))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:dependsOn infrastructure:CloudComputing))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:dependsOn infrastructure:ContainerOrchestration))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:dependsOn infrastructure:OpenContainerInitiative))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:dependsOn infrastructure:DockerContainerisationPlatform))
  ## Capability Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:enables ai:AgenticWorkflow))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:enables ai:AutonomousCoding))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:enables ai:TerminalCodingAgents))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:enables ai:MultiAgentSystems))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:enables ai:AutonomousAgent))
  ## Implementation Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:implements ai:ModelContextProtocol))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:implements infrastructure:OpenContainerInitiative))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:implements ai:ToolCallLoop))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:implements ai:FunctionCalling))
  ## Reduction Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:reducesTo infrastructure:ContainerRuntime))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:reducesTo infrastructure:IsolationBoundary))
  ## Support Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:supports ai:AISafety))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:supports ai:HumanInTheLoop))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:supports ai:AgentEvaluationBenchmarks))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:supports ai:PromptInjectionDefence))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:supports infrastructure:LeastPrivilegePrinciple))
  ## Usage Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:uses ai:FunctionCalling))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:uses ai:MCPServer))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:uses ai:ExternalAIHarness))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:uses infrastructure:VectorDatabase))
  ## Contrast Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:contrastsWith infrastructure:InternalAIHarness))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:contrastsWith infrastructure:RegulatorySandbox))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:contrastsWith infrastructure:DockerRuncIsolation))
  ## Standardisation Relationships
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:standardizedBy infrastructure:OpenContainerInitiative))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:standardizedBy ai:ModelContextProtocol))
      SubClassOf(infrastructure:AgentExecutionSandboxes
        ObjectSomeValuesFrom(infrastructure:standardizedBy ai:EUAIAct))

  ## About

  Agent execution sandboxes constitute the security-critical execution layer of the modern [[Agentic AI]] stack, providing the hardware or OS-level boundary that permits [[Large Language Models]]-driven agents to invoke arbitrary code and system operations without endangering the hosting infrastructure, adjacent tenants, or sensitive data stores. The concept is architecturally distinct from conventional software sandboxing (browser JavaScript engines, Java sandbox, Python `ast.literal_eval` whitelisting) in one crucial respect: the agent driving execution is itself an intelligent system capable of reasoning about and potentially exploiting its containment boundary. Conventional software sandboxes are designed to contain known attack vectors from untrusted code supplied by potentially adversarial human developers. Agent execution sandboxes must additionally contain the emergent capability of frontier models to recognise and exploit novel attack vectors discovered through reasoning, environmental probing, and multi-step planning — a fundamentally more demanding threat model.

  The urgency of this more demanding threat model was demonstrated empirically by SandboxEscapeBench (Marchand et al., March 2026, arXiv:2603.02277), the first rigorous benchmark for frontier AI container escape capabilities, co-developed with the UK AI Security Institute. The benchmark comprises 18 scenarios spanning orchestration, runtime, and kernel escape layers. When tested against GPT-5, Claude Opus 4.5, and other frontier models, the research confirmed that current frontier AI agents can exploit real container misconfigurations to achieve host filesystem access — and that more capable models achieve higher escape rates. Models discovered four unintended escape paths that the research team had not anticipated, including exploitation of default Vagrant SSH credentials to bypass container boundaries entirely. The cost of a successful escape attempt is approximately $1 at current API pricing. This finding reclassified container isolation ([[Docker Containerisation Platform]] runc) from an acceptable agent sandbox to an insufficient boundary: the 2026 practitioner consensus is that sub-microVM isolation is not acceptable for production agent workloads operating over sensitive data or with credentials to critical systems.

  The market for agent execution sandbox infrastructure developed rapidly from a niche concern (2023–2024) to a contested infrastructure category (2025–2026). E2B, the earliest purpose-built agent sandbox provider, grew from 40,000 sandbox runs per month in March 2024 to 15 million per month in March 2025 — a 375× increase — reflecting the explosive growth of [[Agentic Workflow]] deployments requiring isolated execution. Daytona pivoted from developer environments to agent infrastructure in February 2025 and reported 850,000 daily sandbox runs by May 2026 with 74% month-over-month growth. Cloudflare Sandboxes reached general availability in April 2026, adding persistent isolated Linux environments for agent workloads to its global edge network. Vercel Sandbox deployed Firecracker microVMs on existing Vercel build infrastructure. Modal added GPU memory snapshot capability in 2025, enabling sub-1-second warm-restart latency for GPU-accelerated agent workloads — a differentiator for agents requiring local model inference rather than API calls.

  ## Components / Architecture

  **Isolation Layer** — the fundamental security boundary separating agent-executed code from the host. Three main isolation technologies are deployed in 2026:
  - **Firecracker microVMs** (E2B, Vercel Sandbox, Fly Machines, AWS Lambda): lightweight KVM virtual machines with their own Linux kernel, minimal device emulation, and hardware-level memory isolation. Firecracker boots in approximately 125 ms, uses less than 5 MiB of overhead per VM, and supports up to 150 VM launches per second per host. This is the dominant choice for CPU-bound code execution because it combines near-container speed with VM-grade security.
  - **gVisor** (Modal Sandboxes, Google Cloud Run): a Google-developed container runtime that intercepts system calls in user space before they reach the host kernel, providing strong isolation without a full VM boundary. More portable than Firecracker (no KVM hardware requirement) but adds higher per-syscall overhead.
  - **Kata Containers / Sysbox** (Daytona enhanced mode, some self-hosted deployments): OCI-compatible container runtimes that run containers inside lightweight VMs while maintaining Docker API compatibility. Sysbox enables systemd and Docker-in-Docker safely inside the container, making it suitable for agents that need to orchestrate their own container workloads.

  **Filesystem and Network Scoping** — each sandbox receives an ephemeral root filesystem, typically overlayFS on a clean base image, with an optional persistent volume mount for workspaces requiring state across tool invocations. Network egress policies restrict outbound connections to allowlisted domains, preventing sandbox-compromised agents from exfiltrating data to attacker-controlled endpoints. [[Model Context Protocol]] integration exposes filesystem and network operations as typed MCP tools, enabling the [[Agent Harness]] to log and audit every filesystem write and network request at the tool-call level.

  **[[Model Context Protocol]] Integration** — registering the sandbox as an [[MCP Server]] enables any MCP-compatible [[Agent Development SDKs]] or [[LLM Application Frameworks]] to discover and invoke sandbox capabilities through the same protocol surface used for all other agent tools. Daytona's MCP gateway integration is the most mature: an agent connects its [[MCP Client]] to a Daytona endpoint with an API key, and all tool calls execute in isolated bare-metal sandboxes without per-integration engineering work. This composability makes sandboxes pluggable infrastructure components rather than framework-specific integrations.

  **Session and State Management** — ephemeral sandboxes satisfy the majority of agent workloads (one code execution run, one test suite invocation) but persistent workspaces are required for multi-step coding agents that accumulate file edits across many [[Tool Call Loop]] iterations. E2B supports persistent sandbox pausing and resumption; Daytona's workspace model maintains file state across tool invocations within a session. [[Agent Memory]] for cross-session persistence (e.g., accumulated skill libraries in Voyager-style agents) typically combines sandbox-ephemeral execution with external [[Vector Database]] or object storage for state serialisation.

  **Resource Quotas and Timeouts** — CPU, memory, disk I/O, and wall-clock time limits prevent runaway agent loops from exhausting infrastructure. E2B default sandbox lifetime is configurable; Vercel Sandbox runs 5 minutes by default, up to 5 hours on enterprise plans. Quota enforcement at the sandbox level decouples resource control from the orchestrating [[Agent Harness]], enabling predictable cost management in high-volume deployments.

  **Observability and Audit** — structured logs of every system call, file operation, and network request within the sandbox support post-hoc forensic analysis of agent behaviour. Integration with [[Agent Evaluation Benchmarks]] pipelines (e.g., [[SWE-bench]] evaluation runners) requires deterministic, reproducible sandbox environments where the same agent trajectory produces the same observable outcomes across evaluation runs.

  ## Use Cases / Major Families

  **Autonomous Software Engineering** — [[Terminal Coding Agents]] (Claude Code, GitHub Copilot Workspace, Devin, SWE-Agent) run inside sandboxes to execute generated code, run test suites, read and write repository files, and invoke build systems in an environment where agent-produced failures cannot damage the developer's host system. [[SWE-bench]] evaluation requires sandboxed execution of repository-level code edits against real GitHub projects; the sandbox provides both safety and reproducibility for benchmark runs. Every major terminal coding agent either provides its own sandbox (Claude Code's [[VisionClaw Agentic Container]] architecture) or integrates with E2B, Daytona, or equivalent via [[Model Context Protocol]].

  **[[Retrieval-Augmented Generation]] with Code** — agents that combine document retrieval ([[Retrieval-Augmented Generation]], [[Vector Database]]) with code execution to answer analytical questions (e.g., "analyse this dataset and plot the distribution") require a safe environment for the generated pandas/matplotlib code to execute. The sandbox ensures that a hallucinated or injection-manipulated code block cannot exfiltrate the retrieved documents, overwrite the vector index, or consume unbounded compute.

  **Multi-Agent Orchestration** — [[Multi-Agent Orchestration Frameworks]] that spawn sub-agents for parallel task execution require sandboxes for each sub-agent's tool calls. The [[Multi-Agent Systems]] topology may create dozens of simultaneous sandboxes; platforms optimised for this workload (E2B, Modal, Cloudflare Sandboxes) support high-concurrency sandbox pools with fast cold-start times to avoid queuing delays in agent pipelines.

  **Enterprise Security-Sensitive Automation** — agents processing financial documents, healthcare records, or legal contracts require sandbox isolation to ensure that no AI-generated code can access data beyond the agent's intended scope. OAuth credential scoping (requesting only the minimum permissions necessary for the current tool invocation) combined with sandbox network egress filtering implements the principle of least privilege at the execution level.

  **Evaluation and Red-Teaming** — [[Agent Evaluation Benchmarks]] infrastructure uses sandboxes as reproducible evaluation environments, ensuring that benchmark results reflect agent capability rather than environmental variation. Security red-teaming (as in SandboxEscapeBench) uses the same infrastructure to systematically test whether frontier models can escape their containment.

  ## Relationship to Adjacent Infrastructure

  **Versus [[Internal AI Harness]]** — an internal AI harness embeds model inference directly within an application process, enabling tight coupling, minimal serialisation overhead, and direct memory access to application data structures. Agent execution sandboxes operate at the opposite extreme: they maximally isolate model-executed code from the application process, accepting additional latency and serialisation overhead in exchange for security boundaries that prevent agent-generated code from accessing application internals. The two patterns are complementary: a production architecture may use an internal harness for fast, trusted tool calls (database lookups with pre-validated query templates, in-process data transforms) while routing externally-sourced or model-generated code through an agent execution sandbox.

  **Versus [[Container Orchestration]]** — production container orchestration systems (Kubernetes, AWS ECS, Docker Swarm) manage containerised application workloads with sophisticated scheduling, networking, and service discovery capabilities. Agent execution sandbox platforms borrow from this infrastructure but have qualitatively different requirements: sub-second cold-start latency (vs Kubernetes pod scheduling latency of 3–10 seconds), per-invocation ephemeral isolation (vs persistent container lifecycle), and AI-specific threat model awareness (vs general workload isolation). Dedicated sandbox platforms (E2B, Daytona) are purpose-built for these requirements rather than built on top of general container orchestration systems, though Kubernetes-native sandbox runtimes using Kata Containers or gVisor enable enterprises to deploy agent sandboxes within existing Kubernetes infrastructure.

  **Versus [[Regulatory Sandbox]]** — the term "sandbox" has a distinct meaning in financial services regulation: a regulatory sandbox is an innovation testbed where fintech and AI companies can operate with relaxed regulatory requirements to test new products with live customers under supervisor oversight. Agent execution sandboxes are unrelated to regulatory sandboxes — they are technical security boundaries, not regulatory frameworks — but the terminology overlap creates confusion in enterprise procurement discussions where both concepts are relevant (an AI product being developed under a regulatory sandbox may also use technical agent execution sandboxes for its implementation).

  **Versus [[VisionClaw Agentic Container]]** — VisionClaw is the project-specific agentic container architecture in this knowledge graph's host environment, providing a custom implementation of the agent execution sandbox pattern tailored to the specific security and workflow requirements of the VisionFlow system. Understanding the general agent execution sandbox concept (this page) provides the theoretical and comparative context for understanding the VisionClaw implementation as one realisation of the broader pattern.

  ## Standards and Certification Context

  Agent execution sandbox infrastructure lacks formal international standards as of mid-2026, operating instead through a combination of de facto industry practices, cloud provider security certifications, and emerging AI-specific guidance:

  **[[Open Container Initiative]] (OCI)** — the OCI runtime specification defines the interface between container runtimes and container images, enabling OCI-compliant sandboxes (Kata Containers, gVisor's runsc, Sysbox) to run OCI-formatted container images. OCI compliance ensures that agent execution sandboxes can run any container image built with standard tooling, without requiring modification of the agent's containerised tool environment.

  **Cloud provider security certifications** — E2B, Modal, Cloudflare, and Daytona operate within cloud infrastructure certified to SOC 2 Type II, ISO 27001, and (for regulated industries) HIPAA and FedRAMP requirements. These certifications cover the cloud infrastructure layer but do not specifically address the AI agent threat model; they establish baseline security controls (physical security, access management, vulnerability management) that are necessary but not sufficient for production agent deployments.

  **NIST AI Safety Framework** — NIST AI 600-1 (Generative AI Profile, 2024) identifies "dangerous or violent recommendations" and "data poisoning" as key risk categories for generative AI systems, with direct relevance to agent execution sandbox design. The profile's recommended controls (input validation, output filtering, human oversight for high-risk actions) map to the sandbox layer's role as the enforcement mechanism for input/output scoping at the code execution level.

  **[[EU AI Act]] GPAI provisions** — the EU AI Act's provisions for general-purpose AI models (Articles 51–55, effective August 2025) require transparency documentation and dangerous capability evaluation for frontier models. Sandbox escape capability — demonstrated empirically by SandboxEscapeBench — is a candidate for inclusion in dangerous capability evaluation frameworks that model providers must conduct before deploying frontier models as agentic reasoning engines. The UK AI Security Institute has indicated that its evaluation framework will evolve to include agentic safety assessments that encompass sandbox escape capability.

  ## Security Engineering Challenges

  The engineering challenges specific to agent execution sandboxes are qualitatively different from those of conventional software sandboxes because the contained system is intelligent and potentially adversarial with respect to its containment:

  **Cold-start latency vs isolation depth trade-off** — stronger isolation (Firecracker microVM) requires more initialisation overhead than container isolation (Docker runc), which itself requires more overhead than process-level isolation (chroot). Production deployments must choose an operating point on this trade-off curve based on their threat model and latency requirements. E2B's 200 ms cross-region cold start for Firecracker microVMs is acceptable for non-interactive batch agent workloads but unacceptable for latency-sensitive interactive applications where sub-50 ms tool call latency is expected. VM pool pre-warming (creating and maintaining a pool of initialised but idle microVMs) is the standard engineering response: E2B maintains warm VM pools in each region, achieving approximately 80 ms effective cold-start latency for same-region requests from pre-warmed pools. The cost of pool maintenance (idle VM compute costs) is amortised across the volume of sandbox requests.

  **Reproducibility for evaluation** — [[Agent Evaluation Benchmarks]] require that the same agent code executing the same task in the same sandbox produces the same observable result across multiple evaluation runs. Non-determinism arises from network I/O (external API calls that return different results on different invocations), filesystem timestamps (which affect hash-based reproducibility checks), and runtime scheduling (which affects execution order of concurrent threads). Production evaluation infrastructure addresses this through network egress mocking (replacing real API calls with recorded response fixtures), filesystem snapshot sealing (creating read-only filesystem snapshots that capture the evaluation environment state), and deterministic scheduling (pinning agent execution to a single CPU core to eliminate scheduling variation).

  **Multi-tenancy resource isolation** — a sandbox platform serving multiple tenants must ensure that one tenant's high-resource workload (CPU-intensive test suite, memory-intensive data processing) does not affect another tenant's latency or throughput. Linux cgroups v2 provides per-sandbox resource limits, but CPU contention at the host level (especially on shared hypervisors) requires careful host-level capacity management. E2B's and Daytona's per-region capacity pools enforce hard per-sandbox CPU quotas and use oversubscription ratios calibrated to observed peak-to-average usage ratios in their workload populations.

  **Long-running workspace persistence** — ephemeral sandbox architectures (where each tool call gets a fresh sandbox) are insufficient for multi-step coding agents that need to accumulate file changes across many tool invocations within a task. Persistent workspace architectures (Daytona's primary model) maintain sandbox state across tool calls but must handle workspace lifecycle management (when to garbage-collect idle workspaces), workspace snapshotting (for rollback), and concurrent access (if multiple agent tool calls need to run simultaneously against the same workspace). The design space between "fully ephemeral" and "fully persistent" workspaces is occupied by session-scoped sandboxes that maintain state within a task session and are garbage-collected when the session ends.

  **Credential and secret injection** — agents frequently need access to credentials (API keys, OAuth tokens, database passwords) to invoke tools on behalf of the user. These credentials must be injected into the sandbox at invocation time without persisting in the sandbox filesystem (where they could be exfiltrated) or appearing in execution logs (where they create a compliance liability). Industry practice uses runtime secret injection via environment variables (injected at VM start, not persisted to disk), ephemeral OAuth tokens (scoped to the minimum permission set for the current tool call, revoked on sandbox exit), and hardware security module (HSM) integration for high-assurance deployments requiring certified key management.

  ## Academic Context

  The theoretical foundation for agent execution sandboxes draws from decades of systems security research: capability-based security (Lampson, 1974), mandatory access control (Bell-LaPadula model, 1975), and process isolation via OS privilege rings (Multics, 1969). The modern container security lineage traces through Linux namespaces (introduced in kernel 3.8, 2013), cgroups v2 (kernel 4.5, 2016), and seccomp-bpf syscall filtering (kernel 3.5, 2012) — the building blocks of [[Docker Containerisation Platform]] isolation that proved insufficient for AI agent containment. The Firecracker hypervisor (Alexandru Agache et al., NSDI 2020) was developed by AWS to power Lambda and Fargate serverless functions, achieving sub-second VM boot times by stripping the device model to the minimum required for Linux execution. Its subsequent adoption as the foundation for agent execution sandboxes represents a direct translation of serverless infrastructure investment to agentic AI security requirements.

  The specific threat model of AI-capable code execution was first formalised in academic work on LLM security. Greshake et al. "Not What You've Signed Up For" (2023) established that [[Prompt Injection]] via tool outputs could redirect agent behaviour. Ruan et al. "Identifying the Risks of LM Agents with an LM-Emulated Sandbox" (ICLR 2024) used an LM emulator to characterise agent failure modes including resource overreach and irreversible action execution. The specific sandbox-escape threat was established empirically by Marchand et al. "Quantifying Frontier LLM Capabilities for Container Sandbox Escape" (arXiv:2603.02277, March 2026), which provided the first quantitative benchmark for this risk and established Firecracker-level isolation as the minimum acceptable standard for production agent deployments.

  ## Current Landscape (2026)

  The 2026 agent execution sandbox market is characterised by differentiation along three axes: isolation depth, latency, and GPU support. E2B leads on developer experience and speed (sub-200 ms cold starts in the same region, 15 million monthly runs as of March 2025, $32M total funding including $21M Series A in July 2025), targeting Python-centric code interpreter use cases without GPU support. Modal differentiates on GPU acceleration, with VRAM memory snapshots enabling sub-1-second warm-restart for GPU-accelerated workloads, positioning it for agents requiring local model inference. Daytona targets persistent workspace workloads (multi-step coding agents that accumulate edits across many tool invocations), reporting 850K daily sandbox runs and 74% MoM growth as of May 2026. Cloudflare Sandboxes (GA April 2026) targets agents deployed at the edge for latency-sensitive user-facing workloads, integrating with Cloudflare's global network for geographically distributed sandbox execution. Fly Machines provides a low-level, maximum-control API for teams that want to build proprietary agent infrastructure rather than use a managed service.

  The dominant production pattern observed in high-scale agent deployments assigns different sandbox platforms to different workload categories: Cloudflare for user-facing request paths where global latency matters; Modal for GPU-accelerated inference workloads; E2B for code interpretation and test execution; Daytona or raw VMs for persistent workspace agents. This multi-platform composition is enabled by [[Model Context Protocol]] as a common integration layer — each platform exposes an [[MCP Server]] and the [[Agent Harness]] routes invocations to the appropriate platform based on workload type.

  Security posture has tightened significantly following SandboxEscapeBench's March 2026 publication. Zylos Research identified that sandbox designs calibrated to 2023 model capability may be insufficient for 2026+ models. The practitioner consensus from Northflank's 2026 sandbox engineering guide is that Docker/runc isolation is no longer acceptable for production agent execution involving sensitive data or privileged credentials, and that Firecracker-or-better isolation should be considered the production minimum. Checkmarx Zero and Microsoft's guidance on [[Model Context Protocol]] security both address the sandbox layer as a critical defence against [[Prompt Injection]] attacks that could otherwise weaponise agent tool calls to exfiltrate data or pivot to adjacent systems.

  ## UK Context

  The UK has engaged with agent execution sandbox security at both the research and regulatory levels, driven by the UK AI Security Institute (AISI) and the academic community around Oxford and Imperial College.

  **Research:** SandboxEscapeBench (arXiv:2603.02277, March 2026) was co-authored with the UK AI Security Institute, making container sandbox escape a formally documented risk in AISI's research portfolio. The paper demonstrated that frontier models can achieve Docker container escape through common misconfigurations and that the capability scales with model capability — a finding with direct policy implications for AISI's safety evaluation mandate. AISI's ControlArena evaluation framework, which assesses whether AI systems could undermine human oversight mechanisms, includes agent sandbox security as a sub-evaluation domain alongside broader autonomy and scheming evaluations.

  **Academic presence:** Oxford's Department of Computer Science (Systems Security group and Future of Humanity Institute) contributed to sandbox escape research and maintains research programmes on formal verification of isolation boundaries for autonomous systems. Imperial College London's Resilient Information Systems group studies hypervisor and container security relevant to AI agent containment. Edinburgh's School of Informatics has published on capability containment for autonomous systems in the context of AI safety and alignment research, with direct relevance to sandbox policy enforcement.

  **Industry and deployment:** The NHS England AI Lab has mandated [[Human-in-the-Loop]] review for all agent-executed code in clinical workflows, and sandbox isolation is specified as a technical requirement in NHS guidance on AI agent deployments. HMRC's tax-guidance pilot agentic deployment uses sandboxed Python execution for agent-generated tax calculations, with audit logging at the tool-call level feeding into HMRC's existing audit trail requirements. The Ministry of Defence's Defence Digital unit evaluates agent sandbox infrastructure for intelligence analysis workflows, with MoD-specific network egress policies and classified data boundary requirements that exceed commercial sandbox provider defaults.

  **Northern England industrial context:** The AMRC (Advanced Manufacturing Research Centre, Sheffield) is piloting agentic process control in additive manufacturing, requiring sandboxes for AI-generated G-code and numerical control programmes to prevent unvalidated machine instructions from reaching physical manufacturing equipment. Leeds Digital Festival has profiled several Yorkshire-based startups building agentic automation for professional services firms that use sandboxed execution to satisfy professional indemnity insurance requirements for AI-assisted legal and financial work.

  ## Security Threat Model in Depth

  The agent execution sandbox threat model is structurally more complex than conventional software sandboxing because the agent — the code-generating entity being contained — is an intelligent system with the capacity for goal-directed reasoning about its containment. This introduces threat categories that do not exist in conventional sandboxing:

  **Container escape via discovered misconfigurations** — the threat documented by SandboxEscapeBench (Marchand et al., 2026). A frontier model with shell access to a Docker container reasons about available system interfaces, discovers misconfigurations (writable `/proc/sysrq-trigger`, exposed Docker socket, default SSH credentials, weak seccomp profiles), and constructs a multi-step escape sequence using the same [[Chain of Thought]] reasoning that makes it effective at coding tasks. The model does not need prior knowledge of the specific misconfiguration — it discovers it through systematic probing, exactly as a skilled penetration tester would. The Marchand et al. benchmark found that models discovered four escape paths not anticipated by the research team, demonstrating that capability-aware adversarial evaluation of sandbox designs is necessary: it is insufficient to harden against known attack vectors because frontier models can discover novel ones.

  **[[Prompt Injection]] via tool output weaponisation** — an attacker places hostile instructions in content that the agent will retrieve and process as part of its normal task (a file it reads, a web page it fetches, a database record it queries). The hostile content contains instructions that, when processed by the model, cause it to invoke sandbox tool calls in ways that benefit the attacker: writing to sensitive filesystem locations, establishing outbound connections to attacker-controlled infrastructure, or exfiltrating API credentials from the agent's context. The sandbox is the last-layer defence against successful injection: even if the model is deceived into intending a malicious action, a properly configured sandbox prevents the action from succeeding because the filesystem path is outside the sandbox scope or the network destination is not in the egress allowlist.

  **Resource exhaustion and denial-of-service** — an agent loop that fails to converge (or is deliberately constructed to loop indefinitely by injected instructions) can exhaust CPU, memory, disk, and API quota resources in proportion to its duration. Resource quotas at the sandbox level — maximum CPU seconds per sandbox lifetime, maximum memory allocation, maximum disk write volume, maximum number of subprocesses — provide the enforcement layer that prevents runaway loops from exhausting infrastructure shared with other tenants or other agent tasks.

  **Data exfiltration via covert channels** — even with network egress filtering, a sufficiently capable model with access to a covert channel (DNS lookups, timing-observable file operations, ICMP packets) could exfiltrate information to an attacker's monitoring infrastructure. The covert channel threat is primarily relevant to high-assurance deployments (intelligence analysis, financial trading algorithms, medical records) rather than typical enterprise agentic deployments, and is addressed by stronger isolation technologies (hardware-rooted trusted execution environments) rather than by container-level controls.

  **Privilege escalation via tool composition** — even within an authorised sandbox, an agent may compose multiple permitted tool calls in sequences that achieve outcomes exceeding the intended permission scope. Example: a sandbox permits reading any file in `/data/` and permits writing to any file in `/output/`; through reasoning, an agent discovers that it can read credentials from `/data/config.yaml`, use them to authenticate an API call (permitted as an outbound network operation), and write the API response to `/output/` — achieving unauthorised data egress despite each individual tool call being within its authorised scope. Mitigating this requires semantic-level access control (understanding what the combination of tool calls achieves, not just whether each individual call is permitted) and audit trail review, rather than purely syntactic permission checking.

  ## Isolation Technology Comparison

  The following table summarises the main isolation technologies in production use for agent execution sandboxes in 2026:

  **Firecracker microVM** — isolation level: VM (hardware); boot time: ~125 ms; overhead: <5 MiB/VM; GPU support: no (CPU-only); host kernel exposure: none (guest kernel); OCI compatibility: via containerd snapshotter; primary users: E2B, Vercel Sandbox, Fly Machines, AWS Lambda, Netlify. Optimal for: CPU-bound code execution requiring strongest security guarantees with near-container latency.

  **gVisor (runsc)** — isolation level: syscall interception (user space); boot time: ~50 ms; overhead: moderate (per-syscall); GPU support: limited (paravirtualised); host kernel exposure: filtered (Sentry intercepts all syscalls); OCI compatibility: native (Docker/containerd compatible); primary users: Modal Sandboxes, Google Cloud Run, Google App Engine. Optimal for: polyglot code execution in environments without KVM support; strong isolation without full VM overhead.

  **Kata Containers** — isolation level: VM (hardware) with OCI compatibility; boot time: ~500 ms; overhead: larger than Firecracker; GPU support: yes (via device passthrough); host kernel exposure: none; OCI compatibility: full (Docker-compatible); primary users: Daytona enhanced mode, enterprise self-hosted deployments. Optimal for: workloads requiring Docker-in-Docker, systemd, or full Linux environment within the isolation boundary.

  **Docker/runc** — isolation level: namespace/cgroups (OS); boot time: <10 ms; overhead: minimal; GPU support: yes (native); host kernel exposure: full (shared kernel); OCI compatibility: native; primary users: development environments, low-risk workloads. Status: insufficient for production agent sandboxing per the 2026 practitioner consensus following SandboxEscapeBench findings. Docker socket exposure, privileged mode, and common misconfigurations enable frontier model escape.

  **WebAssembly Component Model (WASM)** — isolation level: capability-restricted sandbox (language-level); boot time: <1 ms; overhead: minimal; GPU support: experimental (WebGPU); host kernel exposure: none (capability-gated); OCI compatibility: no (separate runtime); primary users: Cloudflare Workers (partial), experimental edge agent deployments. Status: emerging technology; lack of POSIX compatibility limits use to WASM-compiled tools; insufficient for arbitrary shell command execution.

  ## Key Terminology

  **Firecracker** — AWS-developed lightweight hypervisor for serverless functions that creates KVM-based microVMs with sub-second boot times; adopted as the dominant isolation technology for production agent execution sandboxes.

  **gVisor** — Google-developed container runtime (runsc) that intercepts all system calls in a user-space "Sentry" before they reach the host kernel, providing strong isolation without a full VM boundary.

  **Kata Containers** — OCI-compatible container runtime that runs containers inside lightweight VMs, maintaining Docker API compatibility while providing hardware-level isolation.

  **microVM** — a minimal virtual machine with only the device emulation required for guest execution (virtio-net, virtio-blk, minimal UART), distinguishing it from full VMs that emulate complete physical hardware (GPU, USB, PCIe).

  **seccomp-bpf** — Linux kernel mechanism for filtering system calls using BPF programs; used as a secondary defence layer within container-isolated sandboxes to restrict the attack surface available to contained processes.

  **Sandbox escape** — a security breach in which code executing inside a sandboxed environment achieves access to the host filesystem, network, or process space outside its designated boundary; the defining threat that agent execution sandbox infrastructure is designed to prevent.

  **Network egress policy** — a set of rules specifying which outbound network destinations are permitted from within a sandbox; used to prevent exfiltration of data to attacker-controlled infrastructure even when the agent has been compromised via [[Prompt Injection]].

  **[[MCP Server]]** — a [[Model Context Protocol]] server endpoint that exposes tool capabilities to MCP-compatible clients; in the agent execution sandbox context, the sandbox provider exposes its execution capabilities as an MCP tool, enabling any MCP-aware [[Agent Harness]] to invoke sandboxed execution through the standardised protocol.

  ## Future Directions (2026–2030)

  **Hardware-rooted attestation** — trusted execution environments (Intel TDX, AMD SEV-SNP, Arm CCA Realm Management Extension) will extend the sandbox boundary to include cryptographic attestation that the guest code was not modified before execution. This enables verifiable audit trails: a relying party can cryptographically verify that the agent executed specific code in a specific sandbox configuration, supporting regulatory compliance and legal accountability for agent-executed operations. For high-stakes agentic deployments in finance, healthcare, and government — where the legal accountability for agent actions must be demonstrable — hardware attestation provides a chain of evidence from model output through sandbox execution to observable real-world effect.

  **Capability-based resource access** — replacing filesystem path-based permissions with object-capability tokens that are issued per tool invocation, revoked on sandbox exit, and cannot be forged or transferred between invocations. This eliminates entire classes of privilege escalation through ambient authority, aligning sandbox security with the capability-security research tradition (Lampson, 1974; Miller, 2006). The [[Model Context Protocol]]'s per-tool authentication model is a step in this direction: each tool invocation carries its own authentication context rather than inheriting ambient session-level credentials.

  **Sandbox-aware [[Agent Evaluation Benchmarks]]** — evaluation methodology will evolve to include sandbox escape attempts as a mandatory component of frontier model evaluations, analogous to how biosafety evaluations assess pathogen research capability. AISI's ControlArena will likely absorb SandboxEscapeBench-style assessments into its standard evaluation pipeline. The expected trajectory: sandbox escape capability will be treated as a dangerous capability analogous to uplift for weapons of mass destruction in current AI evaluation frameworks, triggering enhanced deployment restrictions for models that demonstrate reliable escape capability against production-grade isolation technologies.

  **Edge and on-device sandboxes** — [[Edge Computing]] deployments for latency-sensitive agent applications (real-time robotics, on-device health monitoring, industrial process control) will require sandbox technology that runs on ARM-class hardware without KVM support. WebAssembly-based isolation (WASM component model) is the primary candidate technology, enabling near-native performance in a hardware-portable isolation boundary. The WASM ecosystem's limitations (no POSIX compatibility, limited GPU access) will drive development of WASM-compiled tool ecosystems designed from the ground up for edge agent deployment rather than trying to port existing Linux tool stacks.

  **Graduated trust models** — rather than binary sandbox/no-sandbox, deployments will implement multi-tier trust models where the sandbox boundary expands or contracts based on the verified track record of the model, the risk classification of the requested operation, and the provenance of the data being processed. A model with 10,000 verified safe executions in a specific domain may be granted expanded resource access; a model encountering a novel code pattern or data type reverts to maximum isolation until the pattern is validated. This mirrors the graduated trust model used in human workforce management (probationary periods, competency-based privilege escalation) and represents a more efficient use of infrastructure resources than applying maximum isolation to all workloads uniformly.

  **Regulatory standardisation** — the [[EU AI Act]]'s GPAI provisions and emerging national AI regulations will drive standardisation of sandbox security requirements for high-risk AI deployments. ISO/IEC TC1/SC42 is under discussion for AI execution environment security standards; NIST's AI Safety Institute has indicated that sandbox isolation requirements will feature in its forthcoming AI security guidelines. UK DSIT's AI Safety Institute (AISI) is likely to publish specific guidance on minimum sandbox requirements for agentic AI deployments in regulated sectors following the SandboxEscapeBench findings.

  ## Evaluation and Benchmarking

  Evaluating agent execution sandbox platforms requires assessment across five dimensions: security (isolation strength and resistance to escape), performance (cold-start latency, steady-state execution overhead), reliability (uptime, sandbox creation success rate, error handling), cost (per-sandbox pricing, cold-start costs, idle pool costs), and compatibility (supported runtimes, [[Open Container Initiative]] compliance, [[Model Context Protocol]] integration).

  **Security evaluation** — the primary benchmark is SandboxEscapeBench (Marchand et al., arXiv:2603.02277, March 2026), which provides 18 standardised escape scenarios across orchestration, runtime, and kernel layers. Platforms should be evaluated against all 18 scenarios using current frontier models (not 2023-era models, as capabilities scale). The benchmark's open-source availability enables continuous re-evaluation as model capabilities advance. Additional security evaluation dimensions include: network egress bypass (can the agent establish connections to non-allowlisted destinations through DNS tunnelling, ICMP, or other covert channels?), filesystem boundary enforcement (can the agent read or write outside its designated filesystem scope?), and privilege escalation within the sandbox (can the agent escalate from a non-root user to root within the sandbox boundary?).

  **Performance evaluation** — cold-start latency is the primary metric for interactive agent workloads. Measurement methodology: record the time from sandbox creation API call to first tool-call response within the sandbox, measured at the 50th, 95th, and 99th percentiles across 1,000 trials per region. Steady-state execution overhead is measured as the ratio of sandbox-executed compute time to equivalent compute time in a native (non-sandboxed) Linux process. Firecracker microVMs introduce approximately 2–5% CPU overhead compared to native Linux execution; gVisor introduces 5–30% overhead depending on syscall intensity.

  **Compatibility evaluation** — OCI-conformance testing verifies that the sandbox runtime correctly executes OCI-formatted container images built with standard tooling (Docker, Podman, Buildah). [[Model Context Protocol]] integration testing verifies that the sandbox's MCP endpoint correctly implements the MCP specification and interoperates with major MCP client implementations. Language runtime support testing verifies correct execution of Python, JavaScript/TypeScript, Go, Rust, Java, and Bash code within the sandbox environment.

  **Production benchmarks from major providers (2025–2026):**
  - E2B: ~80 ms P50 same-region cold start; ~200 ms P50 cross-region cold start; 15M monthly sandbox runs (March 2025); $32M total funding; Firecracker microVM isolation; no GPU support; Python, JavaScript, R, Java, Bash runtime support.
  - Daytona: <90 ms claimed cold start; 850K daily sandbox runs (May 2026); 74% MoM growth; Docker and Kata Containers isolation; MCP gateway; persistent workspace model; GPU via Docker GPU passthrough.
  - Modal: 2–4 s cold start (CPU); <1 s warm restart via VRAM snapshots (GPU); gVisor isolation; GPU acceleration native; Python-native SDK; best for GPU-intensive code execution.
  - Cloudflare Sandboxes: GA April 2026; global edge distribution (200+ locations); persistent isolated Linux environments; Firecracker microVM isolation; primary advantage is geographic proximity to users in latency-sensitive deployments.
  - Vercel Sandbox: Firecracker microVM isolation; 5-minute default lifetime; up to 5 hours on Pro/Enterprise; tight integration with Vercel AI SDK and Next.js deployments.

  ## Key Institutions and Ecosystem Actors

  **Commercial sandbox providers:**
  - E2B (San Francisco, 2022): Firecracker microVM-based sandbox provider focused on Python code execution; $32M total funding ($21M Series A, Insight Partners, July 2025); 15 million monthly sandbox runs (March 2025); open-source core SDK with managed cloud offering. GitHub: github.com/e2b-dev/e2b.
  - Daytona (Split, Croatia / San Francisco, 2022): pivoted from developer environments to AI agent infrastructure in February 2025; Docker and Kata Containers isolation; MCP gateway integration; 850K daily sandbox runs (May 2026); 74% month-over-month growth; CEO Ivan Burazin (formerly Codeanywhere). Daytona targets persistent workspace workloads for multi-step coding agents.
  - Modal (New York, 2021): Python-native serverless cloud with gVisor isolation; GPU memory snapshots enabling sub-1-second warm restart for GPU workloads; primary differentiator is GPU-accelerated code execution for agents requiring local model inference.
  - Cloudflare (San Francisco, 1010 NYSE: NET): Sandboxes GA April 2026; persistent isolated Linux environments for [[Agentic AI]] workloads on Cloudflare's global edge network; primary differentiator is geographic distribution (200+ locations) for latency-sensitive user-facing agent applications.
  - Vercel (San Francisco, 2015): Sandbox product using Firecracker microVMs on existing Vercel build infrastructure; default lifetime 5 minutes to 5 hours on Pro/Enterprise; integrates with Vercel's AI SDK and deployment infrastructure; primary differentiator is tight integration with frontend deployment for full-stack AI applications.
  - Fly.io (Chicago, 2017): Fly Machines — API-driven KVM-isolated VMs accepting any OCI container; primary differentiator is maximum engineering control and polyglot runtime support; used by teams building bespoke agent infrastructure rather than using managed sandbox services.

  **Cloud provider implementations:**
  - AWS Lambda: Firecracker-isolated serverless functions; used as the execution substrate for Amazon Bedrock Agents tool execution; provides the infrastructure layer that E2B's design was influenced by.
  - Google Cloud Run: gVisor-isolated container execution; primary serverless execution environment for Google Agent Development Kit (ADK) tool workloads.
  - Microsoft Azure Container Instances: Hyper-V isolated container instances; used in Azure AI Foundry agent deployments for tool execution.

  **Security research organisations:**
  - UK AI Security Institute (AISI): co-authored SandboxEscapeBench (2026); ControlArena framework includes sandbox security evaluation; primary UK government body for AI safety evaluation.
  - Oxford University Systems Security Group: contributes to formal verification of isolation boundaries and container escape research.
  - Zylos Research: published comprehensive 2026 survey of AI agent sandboxing technologies and threat landscape.
  - Checkmarx Zero: published security risk analysis of [[Model Context Protocol]] deployments including sandbox interaction risks.

  **Framework and tool integrations:**
  - LangGraph: native [[Agent Execution Sandboxes]] integration via [[Model Context Protocol]] tool registration; E2B provides a LangGraph tool module.
  - Claude Code (Anthropic): uses [[VisionClaw Agentic Container]] architecture as its primary sandbox implementation; demonstrates sandbox as first-class agent infrastructure component.
  - Devin (Cognition AI): proprietary sandbox environment for autonomous software engineering; demonstrates purpose-built sandbox architecture optimised for multi-day coding agent sessions.
  - SWE-Agent (Princeton NLP): uses sandboxed Docker environments for [[SWE-bench]] evaluation; demonstrates evaluation-grade sandbox requirements distinct from production deployment requirements.

  ## Research and Literature

  1. Agache, A., Brooker, M., Florescu, A., et al. (2020). Firecracker: Lightweight Virtualization for Serverless Applications. NSDI 2020. https://www.usenix.org/conference/nsdi20/presentation/agache
  2. Marchand, T., et al. (2026). Quantifying Frontier LLM Capabilities for Container Sandbox Escape. arXiv:2603.02277. https://arxiv.org/abs/2603.02277
  3. Greshake, K., Abdelnabi, S., Mishra, S., et al. (2023). Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. IEEE S&P Workshop 2023. arXiv:2302.12173.
  4. Ruan, Y., Dong, H., Wang, A., et al. (2024). Identifying the Risks of LM Agents with an LM-Emulated Sandbox. ICLR 2024. arXiv:2309.15817.
  5. Debenedetti, E., Zhang, J., Balunovic, M., et al. (2024). AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defences for LLM Agents. NeurIPS 2024. arXiv:2406.13352.
  6. Yang, J., Prabhakar, A., Narasimhan, K., and Yao, S. (2024). SWE-Agent: Agent-Computer Interfaces Enable Automated Software Engineering. arXiv:2405.15793.
  7. E2B (2025). E2B Series A Announcement: $21M Raised to Power the Next Generation of AI Code Execution. e2b.dev/blog.
  8. E2B (2025). E2B SDK Documentation: Firecracker Sandbox Architecture. https://e2b.dev/docs
  9. Cloudflare (2026). Cloudflare Sandboxes General Availability: Persistent Isolated Environments for AI Agents. Cloudflare Blog. https://blog.cloudflare.com/cloudflare-sandboxes-ga/
  10. Northflank (2026). How to Sandbox AI Agents in 2026: MicroVMs, gVisor and Isolation Strategies. https://northflank.com/blog/how-to-sandbox-ai-agents
  11. Blaxel (2026). Best Code Execution Sandboxes for AI Agents 2026. https://blaxel.ai/blog/code-execution-sandboxes-for-ai-agents
  12. AgentMarketCap (2026). AI Agent Sandbox Infrastructure in 2026: E2B, Modal, Daytona, and Fly Machines Compete for the Secure Code Execution Layer. https://agentmarketcap.ai/blog/2026/04/07/ai-agent-sandbox-infrastructure-e2b-modal-daytona-fly-machines-secure-code-execution
  13. Zylos Research (2026). AI Agent Sandboxing and Security Isolation: MicroVMs, gVisor, WASM, and the New Threat Landscape. https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation/
  14. Checkmarx Zero (2025). 11 Emerging AI Security Risks with Model Context Protocol. Checkmarx Security Research.
  15. Microsoft (2025). Protecting Against Indirect Prompt Injection Attacks in MCP. Microsoft for Developers Blog.
  16. MCP.Directory (2026). AI Code Sandbox 2026: Cloudflare vs Modal vs E2B vs Daytona. https://mcp.directory/blog/cloudflare-sandbox-vs-modal-vs-e2b-vs-daytona-2026
  17. Anthropic (2024). Model Context Protocol Specification. https://anthropic.com/mcp
  18. Lampson, B. (1974). Protection. ACM SIGOPS Operating Systems Review. (capability security foundation)
  19. Daytona (2025). Daytona Pivot to AI Agent Infrastructure: Sub-90ms Sandbox Creation. https://daytona.io/blog/ai-agent-infrastructure-pivot
  20. Modal (2025). Modal GPU Memory Snapshots: Sub-1s Warm Restart for GPU-Accelerated Agent Workloads. Modal Blog. https://modal.com/blog/gpu-memory-snapshots
  21. Vercel (2026). Vercel Sandbox: Firecracker MicroVMs for Untrusted AI-Generated Code. https://vercel.com/sandbox
  22. UK AI Security Institute (2026). ControlArena: Evaluation Framework for AI Agent Safety. AISI. https://www.aisi.gov.uk
  23. NHS England AI Lab (2025). AI in NHS Administration: Pilot Evaluation Report — Agentic Workflow Deployments. NHS AI Lab.
  24. Jimenez, C.E., Yang, J., Wettig, A., et al. (2024). SWE-Bench: Can Language Models Resolve Real-World GitHub Issues? ICLR 2024. arXiv:2310.06770.
  25. ZenML (2026). E2B Alternatives: Best AI Sandbox Platforms for Agent Workloads. https://www.zenml.io/blog/e2b-alternatives
  26. Rywalker Research (2026). AI Agent Sandboxes Compared: E2B, Modal, Daytona, Fly, Cloudflare. https://rywalker.com/research/ai-agent-sandboxes
  27. European Parliament and Council (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). Articles 51–55 (GPAI provisions relevant to frontier model containment).
  28. Resultsense (2026). Your AI Agents Can Break Out of Their Containers — and a New Benchmark Proves It. https://www.resultsense.com/insights/2026-03-30-sandbox-escape-bench-llm-container-security-benchmark/

- ### Provenance
  - sources:: Marchand et al. SandboxEscapeBench (arXiv:2603.02277, 2026); E2B documentation and Series A announcement (e2b.dev, 2025); Cloudflare Sandboxes GA (blog.cloudflare.com, 2026); Daytona pivot announcement (daytona.io, 2025); Northflank sandbox engineering guide (northflank.com, 2026); AgentMarketCap sandbox infrastructure comparison (2026); Zylos Research AI sandboxing analysis (2026); Checkmarx Zero MCP security risks (2025); Microsoft MCP prompt injection guidance (2025); Agache et al. Firecracker NSDI 2020; Jimenez et al. SWE-bench ICLR 2024; UK AISI ControlArena framework (2026); NHS England AI Lab pilot report (2025); EU AI Act 2024/1689
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm