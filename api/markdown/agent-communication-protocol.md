- ### Definition
  - An [[Agent Communication Protocol]] is a formalised specification governing the syntax, semantics, and pragmatics of message exchange between [[Autonomous Agent]] entities, enabling a [[Multi-Agent System]] to coordinate actions, share information, delegate tasks, and negotiate goals across heterogeneous runtime environments without requiring any agent to share internal architecture or implementation language. The specification addresses four interdependent layers: (1) transport — which underlying network mechanism (HTTP, [[WebSocket]], AMQP, gRPC) carries the bytes between agent processes; (2) envelope — the metadata wrapper (sender, receiver, conversation identifier, language tag, [[Ontology]] reference) that allows agents to route and contextualise messages; (3) performative — the illocutionary force of the message, grounded in [[Speech Act Theory]], that specifies what the sender is doing by sending the message (informing, requesting, proposing, confirming, refusing, querying); and (4) conversation policy — the finite-state machine or interaction protocol template that governs which message types are valid at each stage of a multi-turn exchange, such as the [[Contract Net Protocol]] for task allocation or subscribe-notify patterns for event dissemination. A well-designed protocol enables [[Inter-Agent Communication]] across agents built by different vendors in different languages with different internal knowledge representations, because all coordination is mediated through the shared language of performatives and ontology terms rather than through shared code. The intellectual foundations lie in speech act theory (Austin 1962; Searle 1969), the DARPA Knowledge Sharing Effort's [[KQML]] language (1993), and the FIPA (Foundation for Intelligent Physical Agents) [[FIPA ACL]] specification ratified in 2000. The contemporary ecosystem is defined by four complementary interoperability standards that together form the modern agent communication stack: Anthropic's [[Model Context Protocol]] for agent-to-tool semantics, Google's [[Agent-to-Agent Protocol]] for cross-agent delegation, IBM's ACP for brokered REST-native agent orchestration, and the community [[Agent Network Protocol]] for decentralised trustless cross-organisation agent networking using W3C [[Decentralised Identifier]]s.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentCommunicationProtocol
  - owl-role:: ExecutableProtocol | Specification | CoordinationMechanism
  - owl-inferred:: ai:CoordinationProtocol, ai:InteroperabilityProtocol, ai:MultiAgentInfrastructure
  - belongs-to-domain:: [[Multi-Agent System]]
  - implemented-in-layer:: [[Distributed Systems]], [[Message Passing]], [[Coordination Protocol]]

- ### Relationships
  - is-subclass-of:: [[Coordination Protocol]], [[Distributed Systems]], [[Interoperability]]
  - has-part:: [[Message Passing]], [[Speech Act Theory]], [[Capability Advertisement]], [[Error Handling]], [[Negotiation]], [[Trust Management]], [[JSON-LD]], [[Ontology]]
  - enables:: [[Inter-Agent Communication]], [[Agentic Workflow]], [[Autonomous Task Execution]], [[Multi-Agent System]], [[Task Delegation]], [[Negotiation]], [[Capability Advertisement]], [[Distributed Collaboration]], [[Task Planning]], [[Autonomous Agent]]
  - uses:: [[Message Passing]], [[Speech Act Theory]], [[JSON-LD]], [[WebSocket]], [[HTTP Protocol]], [[JSON-RPC 2.0]], [[Ontology]], [[OAuth 2.0]], [[Decentralised Identifier]], [[Concurrent Programming]]
  - requires:: [[Ontology]], [[Trust Management]], [[Distributed Systems]]
  - implements:: [[FIPA ACL]], [[Contract Net Protocol]], [[KQML]], [[Agent-to-Agent Protocol]], [[Model Context Protocol]], [[Agent Network Protocol]]
  - supports:: [[Warehouse Automation]], [[Algorithmic Trading]], [[Smart Grid]], [[Capability Advertisement]], [[Error Handling]], [[Negotiation]], [[Robotics]], [[Autonomous Software Engineering]]
  - depends-on:: [[Distributed Systems]], [[Concurrent Programming]], [[Game Theory]]
  - contrastsWith:: [[Remote Procedure Call]], [[Microservices]], [[Monolithic Agent]]
  - bridges-to:: [[Robotics]], [[Semantic Web]], [[Distributed Collaboration]], [[Multi-Agent Reinforcement Learning]], [[Event-Driven Architecture]]
  - related-to:: [[Agent-to-Agent Protocol]], [[Model Context Protocol]], [[KQML]], [[Interoperability]], [[BDI Architecture]], [[Game Theory]], [[Event-Driven Architecture]], [[Large Language Model]], [[Multi-Agent Reinforcement Learning]], [[Task Planning]], [[OAuth 2.0]], [[Linux Foundation]], [[Open Agent Standard]], [[Decentralised Identifier]], [[Autonomous Agent]], [[Agent-Based Modelling]], [[Collective Decision Making]], [[Emergent Behaviour]], [[Reinforcement Learning]], [[Distributed Artificial Intelligence]], [[Knowledge Representation]], [[Formal Specification]], [[Process Algebra]], [[Auction Mechanism]], [[Swarm Intelligence]]
  - standardized-by:: [[FIPA]], [[Linux Foundation]], [[W3C]]

- ### Content
  ## Compositional Relationships (Components)
  ```manchester-syntax
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:MessagePassingLayer))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:PerformativeVocabulary))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:EnvelopeSchema))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:ConversationPolicy))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:CapabilityAdvertisement))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:ErrorHandling))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:Negotiation))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:hasPart ai:TrustManagement))
  ```
  ## Dependency Relationships
  ```manchester-syntax
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:requires ai:Ontology))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:requires ai:TrustManagement))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:dependsOn ai:DistributedSystems))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:dependsOn ai:ConcurrentProgramming))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:SpeechActTheory))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:MessagePassing))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:JSONLD))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:JSONRPC20))
  ```
  ## Capability Relationships
  ```manchester-syntax
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:InterAgentCommunication))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:AutonomousTaskExecution))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:TaskDelegation))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:Negotiation))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:DistributedCollaboration))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:CapabilityAdvertisement))
  ```
  ## Implementation Relationships
  ```manchester-syntax
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:FIPAACL))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:ContractNetProtocol))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:KQML))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:AgentToAgentProtocol))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:ModelContextProtocol))
  ```
  ## Reduction Relationships
  ```manchester-syntax
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:reducesTo ai:CoordinationProtocol))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:reducesTo ai:MessagePassing))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:reducesTo ai:InteroperabilityMechanism))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:reducesTo ai:DistributedSystems))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:HTTPProtocol))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:uses ai:WebSocket))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:enables ai:MultiAgentSystem))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:supports ai:WarehouseAutomation))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:supports ai:AlgorithmicTrading))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:supports ai:SmartGrid))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:implements ai:AgentNetworkProtocol))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:dependsOn ai:GameTheory))
  SubClassOf(ai:AgentCommunicationProtocol
    ObjectSomeValuesFrom(ai:relatedTo ai:MultiAgentReinforcementLearning))
  ```

  ## About

  Agent communication protocols address one of the oldest problems in distributed artificial intelligence: if autonomous software agents are to collaborate on tasks that no single agent can accomplish alone, they must share a common language for expressing not just information content but the pragmatics of how that content should be received and acted upon. A protocol that specifies only message format — that says "an agent message is a JSON object with sender and receiver fields and a content field" — is insufficient. The receiving agent also needs to know what the sender intends by sending the message: is this information to be believed and stored, a request to be acted upon, an offer to be accepted or rejected, or a notification to be forwarded? These distinctions — the illocutionary force of a communicative act — are precisely what speech act theory, developed by J. L. Austin (*How to Do Things with Words*, 1962) and John Searle (*Speech Acts*, 1969) in ordinary-language philosophy, was designed to illuminate. Searle's five-category taxonomy of illocutionary acts maps naturally onto the performative vocabulary of agent communication: assertives (the agent commits to the truth of a proposition — the INFORM performative in FIPA-ACL) represent the agent's epistemic commitment to shared world knowledge; directives (the agent attempts to get the receiver to perform an action — the REQUEST performative) represent goal-directed task initiation; commissives (the agent commits itself to a future course of action — the PROPOSE and AGREE performatives) represent negotiation and commitment-tracking; expressives (the agent expresses psychological states — THANK, SORRY, APOLOGISE) support social and trust-building communication; and declarations (the agent brings about the state of affairs described — few in agent systems, though contract awards approximate this category) represent authoritative acts that change the state of the multi-agent system.

  The practical consequences of having a rigorous performative semantics are profound for multi-agent coordination. Without it, an agent receiving a message bearing the same syntactic form cannot distinguish whether another agent is informing it of a fact (and thus should update its beliefs), requesting it to perform an action (and thus should enter that action into its goal agenda), or proposing a deal contingent on certain conditions (and thus should reason about whether the conditions are acceptable before committing). The early multi-agent systems of the 1980s used ad hoc message formats, which worked within homogeneous, single-vendor systems but created combinatorial integration problems as the number of agent types grew. The DARPA Knowledge Sharing Effort (1990–1993) produced [[KQML]] to address this, defining a standardised performative vocabulary and a transport-neutral envelope format. KQML's performatives — ask-one, tell, achieve, subscribe, broker-all, recommend-one, and approximately 30 others — provided a shared vocabulary for knowledge-level agent communication, abstracting above the specific knowledge representation language used by each agent. KQML's weakness was its informal semantics: different implementors interpreted performative meanings differently, leading to interoperability failures between ostensibly KQML-compliant systems from different research groups. Singh's influential 1998 critique in *IEEE Computer* identified the core problem: without a formal model of agent mental states (beliefs, desires, intentions), the semantics of performatives could not be defined rigorously enough to specify what it means for an implementation to be correct.

  The historical trajectory of agent communication protocols moves through three clearly delineated eras, each defined by the dominant agent architecture and the standardisation landscape. The first era (1980s–early 1990s) was characterised by ad hoc message passing in closed systems: blackboard architectures (Hearsay-II, CAGE, REACT), distributed problem-solving networks with application-specific protocols, and procedural message-handling code embedded in individual agent implementations. The second era (early 1990s–2020s) was defined by the [[KQML]]/[[FIPA ACL]] standardisation movement. The FIPA Foundation for Intelligent Physical Agents (established 1996) produced the FIPA ACL specification (ratified 2000) with rigorously defined pre- and post-conditions on 22 communicative act types (ACCEPT-PROPOSAL, AGREE, CANCEL, CFP, CONFIRM, DISCONFIRM, FAILURE, INFORM, INFORM-IF, INFORM-REF, NOT-UNDERSTOOD, PROPOSE, QUERY-IF, QUERY-REF, REFUSE, REJECT-PROPOSAL, REQUEST, REQUEST-WHEN, REQUEST-WHENEVER, SUBSCRIBE, PROXY, PROPAGATE) grounded in a formal model of agent Beliefs, Desires, and Intentions (the BDI architecture formalised by Bratman's intention-based planning theory and operationalised by Rao and Georgeff's agent-oriented programming languages). FIPA also standardised interaction protocol templates — the FIPA Contract Net Interaction Protocol, FIPA Iterated Contract Net, FIPA Request, FIPA Subscribe, FIPA Brokering, FIPA English Auction, FIPA Dutch Auction, FIPA Recruiting — that agents could instantiate for common coordination patterns without designing conversation state machines from scratch. The [[Contract Net Protocol]], originally proposed by Reid Smith in 1980 for distributed task allocation in computing systems, was canonised within FIPA and became the dominant mechanism for market-based resource and task allocation: a manager agent announces a task via a Call-For-Proposals message; participant agents evaluate the task and respond with proposals that specify their capability to perform the task and the cost they would require; the manager awards the contract to the optimal bidder with an ACCEPT-PROPOSAL message; the winner acknowledges with an AGREE and subsequently reports completion or failure; losing bidders receive REJECT-PROPOSAL. The JADE (Java Agent DEvelopment Framework, 1999) open-source platform provided a FIPA-compliant MAS middleware that was used in hundreds of academic and industrial deployments across logistics, telecommunications network management, e-commerce, supply chain management, and air traffic control simulation.

  The third and current era began around 2023–2024 with the explosive emergence of [[Large Language Model]]-based agents as the dominant paradigm for autonomous software task execution. LLM agents differ architecturally from classical FIPA BDI agents in four fundamental ways: (1) they do not maintain explicit symbolic BDI mental state representations but rather encode agent context implicitly in neural network activations and conversation history; (2) their "communication" occurs through natural language prompts and structured JSON tool-call schemas rather than formal speech act performatives; (3) their coordination happens through orchestration frameworks — AutoGen's ConversableAgent graph, LangGraph's DAG-based control flow, CrewAI's role-based task assignment — rather than through standards-compliant ACL message exchange; and (4) their capabilities are not described in formal ontology terms but in natural-language tool descriptions and system prompt summaries that the LLM is expected to reason about. This architectural shift created urgent demand for new lightweight, LLM-native communication protocols that provide enough structure for reliable multi-agent coordination without requiring the full formal apparatus of FIPA — protocols that could bridge the gap between the unstructured natural language that LLMs excel at and the structured, verifiable message exchange that production multi-agent systems require. Anthropic's [[Model Context Protocol]] (MCP, November 2024) addressed the most pressing sub-problem: a standardised protocol for LLM-agent-to-tool communication, defining how an LLM agent host (MCP client) discovers available tools from a tool provider (MCP server), invokes tools with type-validated inputs, and receives structured results. MCP uses JSON-RPC 2.0 as its wire protocol and supports stdio, HTTP/SSE, and WebSocket transports. Google's [[Agent-to-Agent Protocol]] (A2A, April 2025) addressed the complementary problem of agent-to-agent delegation: how one LLM-based agent (a client agent) discovers another agent's capabilities, creates a task delegation request, monitors execution progress, and retrieves task artifacts, using HTTP/SSE transport and Agent Card JSON capability manifests. In June 2025, Google transferred A2A to [[Linux Foundation]] governance as the Agent2Agent project, with over 50 founding technology partners expanding to over 150 by April 2026. IBM's ACP (open-sourced to Linux Foundation AI in 2024–2025) provides a REST-native brokered architecture where an ACP Server acts as registry and router, with multipart MIME supporting multimodal agent responses. The community [[Agent Network Protocol]] uses W3C [[Decentralised Identifier]]s and [[JSON-LD]] messages for trustless cross-organisation agent identity and communication, targeting the open, permissionless "agentic internet" where agents from different organisations can discover, authenticate, and transact with each other without central registry dependency.

  ## Components and Architecture

  **The Four-Layer Protocol Stack**

  A complete agent communication protocol specifies behaviour across four interdependent layers:

  - Transport layer: the physical mechanism for byte delivery. Classical FIPA agents used IIOP (CORBA), HTTP, and later XMPP. Modern LLM-based agents predominantly use HTTP/1.1 with Server-Sent Events (SSE) or [[WebSocket]] for long-lived connections, and stdio (standard input/output pipes) for subprocess agent communication (as in [[Model Context Protocol]]). AMQP and MQTT serve high-throughput IoT and robotics use cases.
  - Envelope layer: the metadata wrapper that enables routing and context. FIPA's envelope specified sender and receiver agent identifiers, a conversation-id for multi-turn tracking, a language tag (FIPA-SL, Prolog, KIF), and an [[Ontology]] reference identifying the shared vocabulary. Modern equivalents include HTTP headers (Authorization, Content-Type), JSON-LD context references, and [[Agent-to-Agent Protocol]] Agent Cards (structured JSON documents advertising an agent's capabilities, endpoint URL, authentication requirements, and supported protocol version).
  - Performative layer: the illocutionary force of the message. FIPA-ACL defines 22 performatives. Modern LLM agent frameworks compress this to simpler constructs: tool-call (equivalent to REQUEST), tool-result (equivalent to INFORM), delegate (equivalent to REQUEST combined with capability query), and error (equivalent to FAILURE or REFUSE). The [[Agent-to-Agent Protocol]] uses Task, TaskStatusUpdate, TaskArtifact, and AgentMessage primitives at the conversation layer.
  - Conversation policy: the state machine governing valid message sequences. FIPA interaction protocols encode these as normative state machines with pre-conditions and post-conditions on each transition. Modern frameworks implement them as orchestration logic in LangGraph DAGs (directed acyclic graphs) or CrewAI role definitions, where the state machine is implicit in the graph topology rather than formally specified.

  **Capability Advertisement and Discovery**

  A critical function of any agent communication protocol is enabling agents to discover what other agents can do without prior coordination. FIPA's Agent Management System (AMS) and Directory Facilitator (DF) components provided registration and yellow-pages lookup for FIPA agents. The [[Agent-to-Agent Protocol]] introduces Agent Cards — JSON documents served at a well-known URL (`/.well-known/agent.json`) that describe an agent's name, description, endpoint, supported protocol versions, authentication scheme, and exposed skills. [[Model Context Protocol]] servers advertise their capabilities through the `initialize` handshake, which returns a manifest of available tools, resources, and prompts. IBM's ACP uses an ACP Server as a brokered registry where agents register themselves and discover peers through REST queries.

  **Trust and Security**

  Classical FIPA specifications largely deferred security to the transport layer, assuming mutual authentication through CORBA or SSL. Modern agent communication protocols must address a richer threat surface: prompt injection attacks (malicious content in tool responses that hijacks LLM agent behaviour), capability escalation (agents requesting permissions beyond their scope), and cross-agent impersonation. The [[Agent-to-Agent Protocol]] mandates [[OAuth 2.0]] for agent authentication and uses Agent Cards as verifiable capability declarations. The [[Agent Network Protocol]] uses W3C [[Decentralised Identifier]]s for agent identity, enabling cryptographically verifiable, trustless cross-organisation agent identification without central authority. Security threat modelling for the MCP/A2A/ACP/ANP ecosystem (arXiv:2602.11327, 2025) identified seven threat categories: tool poisoning, prompt injection, identity spoofing, capability escalation, message replay, man-in-the-middle, and denial-of-service.

  **Error Handling and Robustness**

  Production agent communication requires explicit error propagation and recovery procedures. FIPA-ACL defines FAILURE, NOT-UNDERSTOOD, and REFUSE performatives for error states. Modern frameworks use HTTP status codes (4xx for client errors, 5xx for server errors), structured JSON error objects with error codes and messages, and conversation-level timeout and retry policies. Long-horizon [[Agentic Workflow]]s require checkpoint-and-resume semantics — the ability to restart a partially completed multi-agent task from a saved state without replaying all completed sub-tasks.

  ## Use Cases and Major Families

  **Protocol Families by Era and Architecture**

  The KQML family (1993–2000) established the conceptual vocabulary for agent communication — performatives, envelopes, transport-neutral design — and generated a generation of academic multi-agent system testbeds, early Internet information agents, and electronic commerce prototypes. KQML's informal semantics were its Achilles heel, but its performative vocabulary remains the reference point against which successor protocols are compared. The FIPA-ACL family (2000–2015) brought formal rigour through BDI-grounded semantics and standardised interaction protocols, enabling JADE-based industrial deployments in warehouse logistics, telecommunications network management, air traffic control research, electricity market simulation, and supply chain management. JADE (the Java Agent DEvelopment Framework) provided a FIPA-compliant infrastructure — including the Agent Management System (AMS) for agent identity registration and the Directory Facilitator (DF) for yellow-pages capability lookup — that underpinned hundreds of research and industrial MAS deployments and remains the most widely taught MAS middleware framework in university curricula. JADEX (an extension adding BDI planning on top of JADE), Jason (an AgentSpeak-based BDI interpreter), and NetLogo (for agent-based modelling) round out the principal FIPA-era implementation ecosystem.

  The LLM-native family (2023–present) operationalises agent communication through structured JSON tool-call schemas embedded in LLM prompts, effectively relocating the performative layer from a standards-specified message type field to a prompt engineering convention. AutoGen's ConversableAgent class wraps LLM calls in a conversation management layer that handles message serialisation, turn-taking, and termination conditions. LangGraph represents agent interaction as a directed graph where nodes are agent functions and edges are typed message channels, encoding the conversation policy in graph topology rather than a formal state machine specification. CrewAI assigns agents to roles with explicit task descriptions and provides a process manager that sequences crew member activity according to hierarchical or sequential process models. OpenAI's Agents SDK (released March 2025, replacing the experimental Swarm framework) provides handoff primitives for passing conversation state between specialist agents. These frameworks share the property that the agent communication protocol is implicit in the framework's orchestration logic rather than explicitly specified and versioned as a standalone standard — creating significant interoperability barriers when agents from different frameworks need to collaborate.

  The standards convergence family (2024–present) represents the current phase of standardisation driven by the imperative for cross-framework, cross-vendor, cross-organisation agent interoperability. [[Model Context Protocol]] (Anthropic, November 2024): the dominant standard for agent-to-tool semantics; [[Agent-to-Agent Protocol]] (Google, April 2025; Linux Foundation June 2025): the emerging standard for agent-to-agent task delegation; ACP/IBM (Linux Foundation AI, 2025): REST-native brokered orchestration for enterprise heterogeneous agent runtimes; [[Agent Network Protocol]] (community, 2024): decentralised trustless agent networking using W3C DIDs. These four protocols form a complementary stack rather than competitors: MCP handles the tool-call surface, A2A handles cross-agent delegation, ACP handles brokered orchestration, and ANP handles open-network identity and communication.

  **Domain Applications**

  In [[Warehouse Automation]], hundreds of autonomous picking robots negotiate path priorities, staging area assignments, and pick-task allocations via contract-net pattern protocols in real time. Amazon Robotics (Kiva-derived mobile shelving units), Boston Dynamics Stretch, Locus Robotics, and 6 River Systems Chuck all employ real-time multi-agent coordination architectures. The [[Contract Net Protocol]] pattern — manager broadcasts a task specification with deadline and quality requirements, participants respond with bids encoding their availability, capability, and cost, manager selects optimal bidder and awards contract — remains the dominant allocation mechanism for heterogeneous robot fleets where robots differ in payload capacity, current location, battery state, and specialised tool attachments. Task re-allocation when a robot fails mid-task requires fast recovery protocols that re-issue the original call-for-proposals with urgency-adjusted parameters. Modern warehouse MAS augment the classical contract-net with reinforcement-learned bid strategies: robots learn bidding policies that anticipate congestion at staging areas and adjust bids to avoid coordination bottlenecks that rigid contract-net cannot foresee.

  In [[Algorithmic Trading]], financial agent systems exchange order messages at microsecond timescales via FIX (Financial Information eXchange) protocol extensions, with internal coordination between risk management, execution, and market-making sub-agents using proprietary agent messaging frameworks. The FIX protocol, first established in 1992 between Fidelity Investments and Salomon Brothers, has evolved into the de-facto industry standard for electronic order routing, with FIX 5.0 SP2 supporting complex order types and algorithm instruction tags that function as performatives for conditional order execution. Dark pool coordination involves multi-party negotiation protocols under strict confidentiality constraints: crossing engines match buy and sell orders without revealing participant identities or order sizes until after execution. Regulatory requirements (MiFID II in Europe, SEC Rule 15c3-5 in the US) impose latency constraints and audit trail requirements that shape protocol design choices.

  [[Smart Grid]] demand response protocols coordinate prosumer agents (representing home batteries, electric vehicles, heat pumps, and industrial loads) with grid operator agents and energy market agents to schedule load shifting that balances supply and demand at distribution network level. FIPA-derived protocols have been demonstrated in research projects including the EU-funded SEAMS (Self-Managing Smart Grid) project and the US ARPA-E NODES programme. REST-based successors using EPRI's OpenADR 2.0 standard (a demand response signalling protocol) and IEC 61850 (a substation automation communication standard) are deployed in commercial utility programmes. EU smart grid standards reference agent-based coordination architectures in ETSI TS 103 175 and CEN/CENELEC/ETSI smart grid mandate M/490 deliverables.

  Autonomous software engineering represents the most rapidly growing application domain for LLM-based agent communication protocols. Systems including Devin (Cognition AI), SWE-Agent (Princeton), OpenHands (formerly OpenDevin), and AutoGen CodeAct coordinate multiple specialised LLM agents — a planner agent that decomposes requirements, a coder agent that generates implementation, a test-writer agent that produces test cases, a reviewer agent that critiques code quality, and a debugger agent that traces execution errors — via structured [[Message Passing]] schemas layered on top of the underlying LLM tool-call interface. Coordination bottlenecks most commonly occur at the integration step where independently developed sub-components must be assembled and their interfaces reconciled, motivating research into structured interface specification protocols that agents can use to declare and verify their expected input-output contracts before integration.

  In [[Robotics]], ROS 2 (Robot Operating System 2, the dominant robotic middleware as of 2024) uses a publish-subscribe topic model (DDS — Data Distribution Service — middleware) and action server protocol (goal/feedback/result message exchange) for inter-process communication between robot component nodes, functioning as a domain-specific agent communication protocol for physical-robot MAS. [[Model Context Protocol]] bridges to ROS 2 — implemented as MCP tool servers that wrap ROS 2 action clients and topic publishers — are emerging in 2025–2026 to enable natural-language robot commanding: an LLM agent calls an MCP tool `navigate_to_pose` with coordinate arguments, which the MCP server translates into a ROS 2 Nav2 action goal, monitors the action server feedback, and returns success or failure with execution telemetry. MQTT-based agent coordination (IoT Message Queuing Telemetry Transport) serves high-throughput, low-latency, bandwidth-constrained edge computing contexts such as factory floor sensors and agricultural IoT networks, where agents publish sensor readings and subscribe to actuation commands via a broker topology with configurable quality-of-service levels (at most once, at least once, exactly once).

  ## Academic Context

  The foundational theoretical work for agent communication protocols spans three disciplines: ordinary-language philosophy (speech act theory), distributed artificial intelligence, and formal specification methods. Austin's *How to Do Things with Words* (1962 William James Lectures, published 1962 Oxford University Press) distinguished locutionary acts (the act of producing a meaningful utterance), illocutionary acts (what is done in saying something — asserting, promising, requesting, declaring), and perlocutionary acts (the effect produced on the hearer). Searle's *Speech Acts* (1969) systematised Austin's taxonomy into a rigorous framework, distinguishing sincerity conditions (what psychological states must actually hold for the act to be genuine), preparatory conditions (what the world must be like for the act to be felicitous), and propositional content conditions (what the content of the act must be about). Searle's later taxonomy of five illocutionary force categories (AISACD: assertives, directives, commissives, expressives, declarations) provided the classification scheme that KQML and FIPA directly operationalised. The relevance of speech act theory to multi-agent communication was first articulated clearly by Shoham and Tennenholtz (1992) and by Halpern and Moses (1990) in their formal treatment of knowledge and communication in distributed systems.

  The distributed AI tradition begins with Victor Lesser and Lee Erman's Hearsay-II speech understanding system (1975–1977, Carnegie Mellon and DARPA), which decomposed the speech recognition problem into competing knowledge-source agents communicating via a shared blackboard data structure — an architecture that directly prefigured modern multi-agent systems. Reid Smith's [[Contract Net Protocol]] (IEEE Transactions on Computers, 1980) provided the first formal task-allocation mechanism for heterogeneous distributed systems, formalising a market-based coordination approach that remains the dominant mechanism for autonomous resource allocation in MAS forty-five years later. The Hearsay-III successor (1977–1980) and the subsequent work by Bond and Gasser (compiling *Readings in Distributed Artificial Intelligence*, 1988) established the canonical distributed AI research agenda that led directly to the KQML and FIPA standardisation efforts.

  Yoav Shoham's AGENT-0 language (JACM, 1993) introduced agent-oriented programming as a distinct paradigm: rather than programming agent behaviour in terms of data structures and algorithms, the programmer specifies the agent's initial beliefs, capabilities, and commitment rules, with the agent runtime generating actions from these mental state specifications. AGENT-0's commitment-based semantics directly influenced the BDI formalism that FIPA ACL adopted. Michael Bratman's philosophical account of intention and planning (*Intention, Plans, and Practical Reason*, Harvard University Press, 1987) and the subsequent formal BDI logic developed by Rao and Georgeff (in the PRS — Procedural Reasoning System — and its descendants) completed the theoretical foundation that FIPA drew upon. Michael Wooldridge and Nick Jennings's 1995 survey "Intelligent Agents: Theory and Practice" (Knowledge Engineering Review) became the most-cited paper in agent systems research, defining the rational agent model — an agent as a system that perceives its environment and takes actions to achieve its goals — that underpins the FIPA semantics. Wooldridge and Jennings's textbook *An Introduction to MultiAgent Systems* (Wiley, 2002; 2nd ed. 2009) remains the standard graduate-level reference.

  The FIPA specifications (1997–2002) were produced by working groups including representatives from Telecom Italia (where the JADE framework was developed), British Telecom, Siemens, Nortel, and the IRST (Institute for Scientific and Technological Research, Italy). FIPA-ACL, FIPA-SL (Semantic Language — the logical language used to express the propositional content of ACL messages), and the FIPA Interaction Protocol Library (specifying normative state machines for Request, Query, Contract-Net, Subscribe, and Auction protocols) remain the canonical references for the classical agent communication protocol era. JADE (developed at TILAB/Telecom Italia Lab, Genova) first released in 1999 and reaching version 4.6 by 2022, remains the most widely deployed FIPA-compliant MAS middleware, with thousands of academic publications reporting JADE-based implementations. JADEX (BDI extension for JADE), Jason (AgentSpeak interpreter implementing the BDI model), and GOAL (an agent programming language based on cognitive agents) extended the FIPA-era ecosystem.

  Contemporary academic venues for agent communication research include AAMAS (International Conference on Autonomous Agents and Multi-Agent Systems), the principal annual venue (typically 300–400 papers); ECAI (European Conference on Artificial Intelligence); IJCAI (International Joint Conference on Artificial Intelligence); and ACM CSCW (Computer-Supported Cooperative Work) for human-agent collaboration dimensions. The 2025–2026 wave of agent protocol papers on arXiv reflects the rapid expansion of LLM-agent protocol research: security threat modelling for MCP/A2A/ACP/ANP (arXiv:2602.11327); semantic grounding and formal semantics for modern ACPs (arXiv:2604.02369); the ACP unified protocol specification (arXiv:2602.15055); the LACP telecom-inspired standardisation argument (arXiv:2510.13821); the Coral Protocol open infrastructure paper (arXiv:2505.00749); and the comprehensive survey of agent interoperability protocols (arXiv:2505.02279). The convergence of LLM-native and classical agent communication research is increasingly visible in submission patterns at AAMAS 2025 and 2026, where papers on LLM agent orchestration, prompt-based coordination, and tool-use protocols now constitute a substantial fraction of the programme.

  ## Current Landscape (2026)

  The agent protocol ecosystem in 2026 is defined by the coexistence and gradual convergence of four distinct standards that together constitute what analysts are calling the "agent interoperability stack." Each protocol occupies a distinct architectural layer and reflects the institutional priorities of its originating organisation.

  [[Model Context Protocol]] (Anthropic, November 2024) is the dominant standard for agent-to-tool communication, operationalising the most immediate practical need: allowing LLM-based agent hosts to discover and invoke external tools, APIs, databases, and file systems through a uniform interface rather than through bespoke integration code. By mid-2025, over 2,000 open-source MCP server implementations had been published on GitHub and the official MCP server registry, covering domains including database access (PostgreSQL, SQLite, MongoDB), code execution (Python, JavaScript interpreters), web services (GitHub, Slack, Google Drive, Brave Search), browser automation (Puppeteer-based screenshot and interaction), and cloud infrastructure (AWS, Cloudflare Workers, Kubernetes). Major LLM providers including OpenAI, Google DeepMind, and Mistral announced native or adapter-based MCP support in their agent frameworks, converting MCP from a Claude-specific standard into the de-facto universal tool-call protocol. The Anthropic [[Model Context Protocol]] specification versioning moved from 0.1 to 1.0 between November 2024 and March 2025, with the 1.0 specification adding [[OAuth 2.0]] resource server authentication for secure remote MCP server access, streamlining the capability discovery handshake, and clarifying the semantics of resource subscriptions for push-based update notifications. The MCP protocol's simplicity — three primitive types (tools, resources, prompts), JSON-RPC 2.0 wire format, and a well-documented capability negotiation handshake — has been the primary driver of its rapid ecosystem growth.

  [[Agent-to-Agent Protocol]] (Google, April 2025) addresses the complementary problem of agent-to-agent task delegation: how an orchestrator agent (client) creates a task request targeted at a remote agent (server), monitors the task's progress through status polling or server-sent event streaming, retrieves intermediate artifacts and the final task result, and handles partial failure and task cancellation. A2A launched with over 50 technology partners in April 2025 including Salesforce, SAP, Atlassian, Box, ServiceNow, MongoDB, and Cohere, reflecting the enterprise automation use case as the primary target. Google transferred A2A to [[Linux Foundation]] governance in June 2025, establishing the Agent2Agent project with a vendor-neutral technical steering committee; by April 2026, over 150 organisations had joined. The core A2A specification defines four message types: Task (create a new agent task with input payload), TaskStatus (the agent's current progress state: submitted, working, completed, failed, canceled), TaskArtifact (an output fragment from the agent — a text response, a generated file, a structured data object), and AgentMessage (general-purpose message for streaming intermediate outputs). Agent Cards — served at `/.well-known/agent.json` — provide machine-readable capability manifests that include the agent's name, description, supported protocol versions, endpoint URL, [[OAuth 2.0]] authentication configuration, and the specific task types the agent can handle, enabling automated agent discovery and capability matching.

  ACP — Agent Communication Protocol (IBM Research, open-sourced to Linux Foundation AI in 2024–2025) takes a brokered architecture approach inspired by ESB (Enterprise Service Bus) patterns that are deeply familiar to enterprise IT architects: an ACP Server acts as a central registry and router through which agent clients register their capabilities and discover available ACP agent servers; agent-to-agent communication is mediated through the ACP Server rather than being peer-to-peer, providing a natural integration point for enterprise security controls, logging, billing, and governance. ACP uses standard REST HTTP semantics for all interactions, with multipart MIME encoding for agent responses that include multiple content types (text, images, structured data, file attachments). IBM positions ACP as "the HTTP for AI agents," targeting enterprise deployments where centralised governance and simplified operational management are valued over the peer-to-peer decentralisation of A2A.

  [[Agent Network Protocol]] (community-developed, 2024–2025) takes the most ambitious and architecturally distinct approach: a fully decentralised, trustless protocol for open-internet agent networking that uses W3C [[Decentralised Identifier]]s (DIDs) for cryptographically verifiable agent identity without requiring a central identity registry, [[JSON-LD]] for semantically grounded message content, and DID-linked encryption for secure peer-to-peer communication. ANP targets the "agentic internet" — a future where agents from different organisations, platforms, and jurisdictions can discover each other through open DID resolution, establish authenticated channels, negotiate capability contracts, and transact value without any single organisation acting as intermediary. This vision closely parallels the [[Semantic Web]] vision of machine-readable linked data enabling automated web service composition; ANP can be understood as bringing the Semantic Web vision specifically to the agent communication layer, combining it with modern cryptographic identity infrastructure. The theoretical framing paper (arXiv:2602.15055) argues that ANP and A2A are architecturally complementary: A2A handles structured task delegation within organisational trust boundaries, while ANP handles open cross-organisational agent networking across trust boundaries.

  Emerging alternatives and critiques of the current four-protocol landscape continue to appear. The Coral Protocol (arXiv:2505.00749, 2025) proposes open infrastructure framing it as "the internet of agents" — a substrate for agent discovery, communication, and collaboration that does not privilege any vendor's protocol. The LLM Agent Communication Protocol (LACP) paper (arXiv:2510.13821) argues, by analogy to the layered telecommunications protocol stack (physical, data link, network, transport, session, presentation, application layers of OSI), that current agent communication specifications lack important protocol functions: session management (maintaining stateful conversations across multiple task interactions), flow control (preventing fast-sending agents from overwhelming slow-receiving agents), quality-of-service guarantees (latency bounds, throughput guarantees, reliability tiers), and error recovery (standardised retry and fallback procedures). The paper proposes a seven-layer agent communication architecture modelled on OSI that would provide these missing functions while remaining compatible with existing protocol implementations as application-layer protocols.

  Every major LLM agent framework — LangGraph (LangChain), CrewAI, AutoGen (Microsoft Research), OpenAI Agents SDK, Google Agent Development Kit (ADK), Hugging Face Smolagents — now supports [[Model Context Protocol]] natively or through adapters. The leading frameworks are actively integrating [[Agent-to-Agent Protocol]] support for cross-framework agent delegation, with CrewAI announcing A2A protocol support in its enterprise edition and LangGraph integrating A2A task creation and monitoring primitives. The "Agentic Mesh" architecture — where a LangGraph orchestrator spawns CrewAI specialist crews, calls OpenAI tool-execution agents via function calling, and coordinates with external enterprise agents via A2A — has emerged as the production pattern for complex autonomous workflows in enterprise settings. The UK AI Safety Institute (AISI) Frontier AI Trends Report (December 2025) flagged multi-agent systems and agent communication as a priority evaluation domain for frontier model safety, noting that multi-agent pipelines can amplify both capability and risk through cascading agent actions that are difficult to audit or interrupt, and calling for mandatory audit logging and human-in-the-loop checkpoints in high-stakes agentic deployments.

  ## UK Context

  The UK has a historically significant and currently active presence in agent communication research, spanning a strong FIPA-era academic tradition in multi-agent systems formal methods, a world-leading position in [[Semantic Web]] and knowledge representation research that intersects with ontology-grounded agent communication, and a growing 2024–2026 ecosystem of LLM-agent platform startups building MCP-compatible and A2A-compatible agent infrastructure.

  **Academic foundations**: the University of Edinburgh hosted some of the earliest UK work on computational logic and agent programming. Robert Kowalski's logic-based agent model (the KR agent = LS + PS framework, where the agent is Logic + control) directly influenced the BDI architecture that underpins FIPA ACL semantics; Keith Clark and Kowalski's work on abductive reasoning in agents shaped the formal semantics of agent goal representation. The AgentSpeak language (Rao, 1996, building on Rao & Georgeff's PRS) and its implementation Jason were partially developed in collaboration with UK institutions and remain widely taught. **Imperial College London** has a sustained research presence in multi-agent systems: Michael Luck's group (now at King's College London) worked on agent autonomy, agent architectures, and agent norms; Peter McBurney at King's has contributed to agent argumentation, bidding languages for auction-based agent coordination, and agent dialogue frameworks that bridge formal argumentation theory and agent communication protocols. **King's College London** also hosted work on security and trust management in agent communication — central to the current concern about LLM agent authentication and capability attestation.

  **University of Southampton** played a uniquely prominent role in bridging agent communication research with the [[Semantic Web]] infrastructure. Nigel Shadbolt, Wendy Hall, and Tim Berners-Lee's Agents group at Southampton developed OWL-S (Web Ontology Language for Services), a [[Semantic Web]]-based framework for describing web services and their input-output-precondition-effect properties that directly anticipated modern capability advertisement in agent protocols. Southampton's work on the Grid computing era — using JADE-based FIPA agents over the UK National Grid Service — was among the largest real-world deployments of standards-compliant agent communication infrastructure in the UK. **University of Aberdeen** contributed formal protocol verification methods, using model-checking tools (SPIN, MCMAS) to verify that agent interaction protocols satisfy safety and liveness properties — work directly applicable to validating modern A2A and ACP protocol specifications. **University of Liverpool** (formally the Evren Palanque group, now broader AI research groups) worked on auction-based mechanism design for multi-agent resource allocation, providing theoretical foundations for market-based agent task coordination.

  **Regulatory context**: the UK's AI regulatory approach, articulated in DSIT's April 2026 guidance as pro-innovation and sector-led rather than the EU's risk-class approach, does not currently impose sector-specific agent communication protocol standards. However, the [[UK AI Safety Institute]] (AISI), established at Bletchley Park following the November 2023 UK AI Safety Summit and now operating from its Whitehall headquarters, actively evaluates frontier LLM-based agent systems and has flagged multi-agent orchestration as a priority evaluation area in its December 2025 Frontier AI Trends Report. AISI's evaluations are shaping UK government thinking on what safety assurance evidence should be required for agentic AI deployments in high-stakes contexts, which will influence any future sector-specific agent communication standards for critical national infrastructure, healthcare AI, and financial services. The **Innovate UK Agentic AI Pioneers Prize** (2025) funded ten UK startups developing agentic AI systems, several of which are building [[Model Context Protocol]]-compatible or [[Agent-to-Agent Protocol]]-compatible agent infrastructure as the core of their platform value proposition.

  In the North of England, **Sheffield** and **Leeds** universities maintain active distributed systems and concurrent programming research groups whose work on message-passing concurrency and actor-model systems (Akka JVM actor library, Erlang's "let it fail" concurrency philosophy) provides theoretical and engineering foundations directly applicable to agent communication runtime implementation. **Manchester**'s School of Computer Science has expertise in formal methods and model checking applicable to protocol verification; the Manchester group has published on formal verification of FIPA interaction protocols using process algebras (CSP, CCS). **Newcastle University**'s School of Computing has a tradition in formal specification (the B method, Z notation, CSP) that the PACT (Process Algebra for Concurrency Theory) group applies to safety-critical distributed system design — relevant to agent communication protocol correctness proofs. **Northumbria University** and **Teesside University** have growing AI research programmes relevant to applied agent systems.

  Industrial applications in the UK span several sectors. **Warehouse logistics**: Amazon Robotics operates at Dunfermline (Scotland), Coventry, and Tilbury (Essex) fulfillment centres where autonomous mobile robot (AMR) fleets use proprietary agent coordination protocols derived from contract-net allocation patterns; Ocado Technology (Hatfield, Hertfordshire) operates the world's most automated grocery fulfillment system, with swarm-style agent coordination across grid-based robotic platforms using a proprietary high-throughput agent communication infrastructure. **Financial services**: Canary Wharf and City of London algorithmic trading infrastructure depends on FIX protocol inter-agent messaging for order routing and market data distribution; Edinburgh-based Standard Life Aberdeen (now abrdn) and Baillie Gifford have developed quantitative investment strategies using agent-based market simulation with FIPA-inspired internal agent communication architectures. **Energy and utilities**: National Grid ESO (Electricity System Operator, Wokingham) runs agent-based demand response coordination pilots using [[Smart Grid]] communication standards compatible with CEN-CENELEC-ETSI smart grid mandate specifications, positioning agent communication protocols as critical infrastructure for the UK's net-zero electricity system transition. **Healthcare AI**: NHS X-funded health technology programmes are developing agent-based clinical decision support systems where diagnostic AI agents, drug interaction agents, and patient risk stratification agents exchange clinical information through RESTful APIs that are informally but not formally compliant with any agent communication standard — a gap that UK AISI and NHSE digital teams are examining in the context of AI assurance frameworks.

  ## Future Directions (2026–2030)

  Protocol convergence is the defining near-term trajectory. The four-protocol ecosystem (MCP, A2A, ACP, ANP) will likely consolidate under [[Linux Foundation]] governance into a unified, layered standard whose architecture mirrors the TCP/IP protocol stack — with a base transport layer (HTTP/WebSocket/stdio serving different connectivity contexts), an identity and authentication layer (W3C [[Decentralised Identifier]]s for open-network agent identity, [[OAuth 2.0]] for enterprise-bounded context), a capability advertisement layer (Agent Cards and MCP manifests providing machine-readable capability declarations in JSON-LD or JSON Schema form), and an interaction protocol layer (specifying normative conversation state machines for the principal coordination patterns: request-confirm, contract-net task allocation, subscribe-notify event streaming, auction-based resource allocation, and progressive task decomposition with checkpoint reporting). The [[Linux Foundation]] Agent2Agent project, with its growing membership across Microsoft, Google, SAP, IBM, Salesforce, Atlassian, and over 150 technology organisations, is the most institutionally credible convergence vehicle. The practical convergence timeline will depend on how quickly the independent protocol communities (particularly the MCP ecosystem, which already has deep adoption) can be persuaded to adopt shared primitives without sacrificing the simplicity that drove MCP's rapid uptake.

  Security engineering will become a first-class specification concern rather than an afterthought. The 2025–2026 research literature establishing the threat model for LLM agent communication — prompt injection (malicious content in tool responses that hijacks agent behaviour), tool poisoning (adversarial tool description manipulation that causes agents to call unintended tools), capability escalation (agents acquiring permissions beyond those needed for the assigned task), cross-agent impersonation (an adversarial agent claiming to be a trusted coordinator), and conversation state manipulation (falsifying task history to alter agent behaviour) — will drive mandatory security profiles into version 2.x specifications of MCP, A2A, and ACP. Verifiable agent credentials — cryptographically signed identity documents (potentially using the W3C Verifiable Credentials standard) that allow an agent to prove its identity, the model it runs on, the organisation that deployed it, and the permissions it has been granted — will become required for enterprise and regulated-industry deployments. Auditable action logs — tamper-evident records of every message sent and received by every agent, with signed timestamps and sequence numbers — will be required by financial services regulators (MiFID II audit trail requirements applying to autonomous trading agents) and healthcare AI governance frameworks. Zero-knowledge proof schemes for agent capability verification — allowing an agent to prove it has a capability without revealing the implementation details or training data — are an active research direction at the intersection of cryptography and AI safety.

  Semantic interoperability will re-emerge as a priority as the limitations of natural-language capability description become apparent at scale. Current LLM-native protocols use informal natural-language descriptions for tool and agent capabilities (an MCP tool's description field is a free-text string that the LLM is expected to interpret), creating semantic matching failures when agents from different vendors attempt collaboration: agent A describes its database query capability using different vocabulary than agent B expects, causing mismatch errors that are difficult to diagnose and expensive to remediate. [[Ontology]]-grounded capability schemas — drawing on the [[Semantic Web]] tradition of OWL-S (Web Ontology Language for Services), RDF, and SPARQL — will re-enter the agent protocol conversation as a way to enable machine-verifiable capability alignment. The [[Agent Network Protocol]]'s [[JSON-LD]] foundation positions it best for this evolution, since JSON-LD messages can carry semantic context that grounds capability descriptions in shared ontological terms. The long-term vision is a capability [[Ontology]] — analogous to WordNet for natural language semantics — that specifies the input-output-precondition-effect semantics of agent capabilities in a machine-processable, formally grounded form that enables automated capability matching, composition planning, and interface compatibility verification.

  Long-horizon task management will be formalised beyond the current state. Existing protocols handle single-turn tool calls (MCP) and multi-turn task delegation with status polling (A2A) well, but multi-day, multi-agent workflows with complex dependency graphs, partial failure and retry semantics, human-in-the-loop approval gates, cost budget tracking, and regulatory audit requirements — the requirements of enterprise-scale autonomous software engineering, financial audit automation, and clinical trial management — require richer state management and progress-reporting protocols. Workflow orchestration systems such as Apache Airflow, Prefect, and Temporal are being adapted as execution substrates for long-horizon agent task graphs, with agent protocol layers providing the inter-agent communication surface while the workflow engine provides DAG scheduling, retry logic, and state persistence. The integration of agent communication protocols with formal business process modelling standards (BPMN 2.0, WS-BPEL) will become relevant for regulated industries that must demonstrate process compliance.

  [[Multi-Agent Reinforcement Learning]] will increasingly inform communication protocol design, and eventually converge with it. Research results from MARL — particularly the findings that explicitly trained communication protocols in cooperative MARL systems (CommNet, DIAL, QMIX with communication channels) outperform hand-designed protocols when the communication vocabulary is co-optimised with agent policies — will motivate hybrid architectures where a learned, compressed communication vocabulary is used for high-bandwidth sub-agent coordination at inference time, while the standardised high-level protocol layer handles cross-vendor, cross-organisation coordination that requires human interpretability and auditing. The boundary between "agent protocol" (human-designed, specification-compliant, interpretable) and "emergent agent communication" (MARL-learned, efficient, opaque) will become an important research and governance boundary: which layers of inter-agent communication must be humanly interpretable and formally specified, and which can be left to end-to-end optimisation by the agents themselves? This question intersects directly with the UK AI Safety Institute's concern about maintaining meaningful human oversight of agentic AI systems as their autonomy and coordination sophistication increases.

  ## Standards Landscape Summary

  **Active Standards (2026)**
  - FIPA ACL SC00061G (2002): legacy but still authoritative reference for formal agent communication semantics; used as the theoretical baseline for comparing modern protocol designs.
  - FIPA Contract Net Interaction Protocol SC00029H (2002): canonical reference for market-based task allocation; still cited in contemporary robotic coordination and [[Warehouse Automation]] implementations.
  - W3C DID (Decentralised Identifiers) 1.0 (2022): W3C Recommendation; cryptographic, self-sovereign agent identity without central registry; foundation of [[Agent Network Protocol]].
  - W3C Verifiable Credentials Data Model 2.0 (2024): W3C Recommendation; enables agents to hold and present verifiable credentials for capability attestation and trust establishment.
  - OpenAPI 3.1 (2021): REST API description standard; used for ACP agent capability manifests and A2A task endpoint descriptions.
  - JSON-RPC 2.0 (2010, IETF): wire protocol for [[Model Context Protocol]]; defines request/response/notification message structures over arbitrary transport.
  - OAuth 2.0 (RFC 6749) + PKCE (RFC 7636): authentication framework used by A2A and MCP for agent identity verification and scoped capability authorisation.
  - Server-Sent Events (W3C, 2021 WHATWG Living Standard): HTTP push notification mechanism; used by A2A and MCP for streaming task progress and tool result streaming.
  - MQTT 5.0 (OASIS, 2019): publish-subscribe messaging protocol for IoT and edge agent coordination; quality-of-service levels 0 (at most once), 1 (at least once), 2 (exactly once).
  - AMQP 1.0 (OASIS, 2012): enterprise messaging protocol; used in high-throughput agent communication in financial services and telecom network management.

  **Emerging and Proposed Standards**
  - Linux Foundation Agent2Agent (A2A) Protocol v1.0 (expected 2026): vendor-neutral governance of the A2A specification; technical steering committee with multi-vendor representation.
  - W3C Agent Identity Community Group: working on DID profile for AI agent identity use cases; informing [[Agent Network Protocol]] identity layer.
  - IETF OAuth for Agents (2025 draft): OAuth 2.0 profile for autonomous agent authentication flows that do not involve human approval steps; addresses the "headless agent" authentication challenge.
  - ISO/IEC JTC 1/SC 42 WG4 (AI Use Cases and Applications): working on vocabulary and framework for AI agent systems; may produce normative definitions relevant to agent communication protocol classification.
  - NIST AI 100-1 (2023) Artificial Intelligence Risk Management Framework: provides risk management methodology applicable to multi-agent communication systems; informs organisational due diligence for [[Autonomous Task Execution]] workflows.

  ## Implementation Patterns and Deployment Architectures

  **Peer-to-Peer Agent Communication (A2A Pattern)**
  - Client agent discovers server agent's Agent Card from a registry or well-known URL.
  - Client initiates a task via POST to the server's task endpoint; receives a task ID.
  - Client polls task status via GET or subscribes to server-sent events (SSE) for push updates.
  - Server agent executes the task, streaming intermediate TaskArtifacts as they are produced.
  - Client retrieves final TaskArtifacts on completion; stores or further processes results.
  - Authentication: client obtains OAuth 2.0 bearer token; includes in Authorization header; server validates token and checks scope against task type.
  - Error handling: HTTP 4xx for client errors (malformed task request, unauthorised capability); HTTP 5xx for server errors (agent runtime failure, model inference error); A2A TaskStatus with status "failed" for task-level failure with detailed error message.

  **Brokered Architecture (ACP Pattern)**
  - Agent clients register with the ACP Server, providing their capability manifest (similar to Agent Card but in ACP's schema).
  - ACP Server maintains a registry of registered agents and their capabilities; provides capability-query API for agent discovery.
  - Client agent sends a task message to the ACP Server with the desired capability specification; server routes to a matching registered agent.
  - ACP Server acts as a logging and governance layer: logs all inter-agent messages; enforces access control policies; meters usage for billing; provides replay capability for audit.
  - Multipart MIME responses support text, image, audio, code, and structured data in a single response; enables rich multimodal agent outputs.
  - Enterprise integration: ACP Server deployed as an internal enterprise service; integrates with IAM (Identity and Access Management) for agent authentication; connects to enterprise API gateways and data loss prevention (DLP) systems.

  **Hub-and-Spoke Orchestration (LangGraph / AutoGen Pattern)**
  - Orchestrator agent (hub) receives user request; decomposes into sub-tasks using a [[Task Planning]] algorithm or LLM reasoning.
  - Orchestrator dispatches sub-tasks to specialist agents (spokes) via tool calls or structured [[Message Passing]].
  - Specialist agents execute sub-tasks and return results to orchestrator; orchestrator aggregates and synthesises.
  - State management: LangGraph encodes agent state as a typed dictionary passed between graph nodes; enables checkpoint-and-resume for long workflows.
  - Conditional routing: LangGraph edges carry routing functions that select the next node based on the current state; enables dynamic task re-routing on failure or unexpected results.
  - Human-in-the-loop: interrupt nodes in the LangGraph DAG pause execution and await human approval before proceeding; critical for high-stakes decisions.

  **Decentralised Agent Network (ANP Pattern)**
  - Agent identity: each agent holds a W3C [[Decentralised Identifier]] (DID), resolvable to a DID Document containing public keys and service endpoints.
  - Agent discovery: agents publish their DID and capability profile to a discovery index (comparable to a public DNS); other agents resolve DIDs and fetch capability documents.
  - Authenticated channel establishment: agents use DID-based asymmetric key exchange (analogous to TLS mutual authentication) to establish an encrypted, authenticated communication channel.
  - Message structure: [[JSON-LD]] messages with semantic context linking capability terms to shared [[Ontology]] definitions; enables machine-readable intent beyond informal natural-language descriptions.
  - Trust without central authority: agents evaluate trust by verifying DID document integrity (cryptographic signature chain), checking verifiable credentials issued by trusted credential authorities, and consulting a distributed reputation ledger.
  - Cross-organisation agent transactions: agent A (deployed by Organisation X) and agent B (deployed by Organisation Y) can communicate and transact without either organisation having a pre-existing commercial relationship or shared identity infrastructure.

  ## Key Technical Components

  **Message Envelope Structure (FIPA ACL)**
  - `:sender` — AID (Agent Identifier) of the sending agent; includes agent name, addresses (transport endpoints), and resolvers.
  - `:receiver` — AID set of target agents; supports multicast by specifying multiple receivers.
  - `:reply-to` — AID(s) to receive replies (if different from sender); enables broker and proxy patterns.
  - `:content` — message payload; expressed in the specified language and ontology; may contain propositions, action descriptions, or referential expressions.
  - `:language` — content language tag (e.g., `fipa-sl`, `kif`, `prolog`, `JSON`); enables heterogeneous agent knowledge representation.
  - `:ontology` — shared ontology reference (OWL, RDF, or informal name string); grounds content interpretation.
  - `:protocol` — interaction protocol name (e.g., `fipa-request`, `fipa-contract-net`, `fipa-subscribe`); identifies conversation type for state-machine management.
  - `:conversation-id` — unique identifier for multi-turn conversation thread; links all messages in an interaction protocol instance.
  - `:reply-with` — expression used by receiver to identify this message in its reply (analogous to HTTP request ID in REST correlation).
  - `:in-reply-to` — the `:reply-with` value from the message being replied to; enables non-sequential out-of-order response handling.
  - `:reply-by` — deadline timestamp for the expected reply; supports time-constrained negotiation protocols.

  **Contract Net Protocol State Machine**
  - State 1 — INITIATE: manager agent determines task to be contracted out; constructs Call-For-Proposals (CFP) message with task description and deadline.
  - State 2 — CFP BROADCAST: manager sends CFP to all potential contractor agents (broadcast or targeted subset based on directory lookup).
  - State 3 — PROPOSAL COLLECTION: contractor agents evaluate the task against their capabilities and current workload; respond with either PROPOSE (including bid cost and capability evidence) or REFUSE (with reason).
  - State 4 — PROPOSAL EVALUATION: manager evaluates all received proposals against selection criteria (cost, capability, reliability, deadline satisfaction); selects optimal bidder using a utility function or heuristic.
  - State 5 — CONTRACT AWARD: manager sends ACCEPT-PROPOSAL to winning contractor; sends REJECT-PROPOSAL to all other contractors.
  - State 6 — TASK EXECUTION: winning contractor executes the contracted task; sends progress updates if specified; sends INFORM with result upon completion or FAILURE if task cannot be completed.
  - State 7 — RESULT PROCESSING: manager receives completion message; updates its world model; may re-contract if failure reported.
  - Timeout handling: manager may CANCEL outstanding CFPs or contracts if `:reply-by` deadline exceeded; contractor may abandon if manager unresponsive.
  - Iterated variant: manager issues multiple rounds of CFPs with progressively modified specifications; enables negotiation and refinement rather than single-round winner-take-all allocation.

  **Agent-to-Agent Protocol (A2A) Message Primitives**
  - Task: `{id, sessionId, status: "submitted", message: {role: "user", parts: [{type: "text", text: "…"}]}}`; initiates a new agent task; client-generated UUID id for correlation.
  - TaskStatus: `{id, status: "working"|"completed"|"failed"|"canceled"|"input-required", message: {role: "agent", parts: [...]}}` ; streaming or polled progress updates from server agent.
  - TaskArtifact: `{taskId, index, name, mimeType, parts: [{type: "text"|"file"|"data", …}]}` ; output fragments from agent execution; may be streamed as partial results during long-running tasks.
  - AgentMessage: `{role: "user"|"agent", parts: [{type: "text", text: "…"}, {type: "image", mimeType: "image/png", data: "base64…"}]}` ; multi-modal message content supporting text, inline data, and file references.
  - AgentCard: JSON document at `/.well-known/agent.json`; fields include `name`, `description`, `url` (task creation endpoint), `version`, `capabilities: {streaming: true, pushNotifications: false}`, `authentication: {schemes: ["bearer"]}`, `skills: [{id, name, description, inputModes, outputModes}]`.

  **Model Context Protocol (MCP) Primitives**
  - Tool: `{name: string, description: string, inputSchema: JSONSchema}`; callable function exposed by MCP server; model-controlled (LLM decides when to call).
  - Resource: `{uri: string, name: string, mimeType: string, description: string}`; data item exposed by MCP server for reading; application-controlled (host decides what to expose).
  - Prompt: `{name: string, description: string, arguments: [{name, description, required}]}`; templated message sequence; user-controlled (human selects which prompt to use).
  - `initialize` request: `{protocolVersion: "2024-11-05", capabilities: {sampling: {}, roots: {listChanged: true}}, clientInfo: {name: "claude-desktop", version: "1.0"}}`.
  - `tools/call` request: `{name: "search_database", arguments: {"query": "affective computing 2025", "limit": 10}}`; JSON Schema-validated before forwarding.
  - `CallToolResult`: `{content: [{type: "text", text: "…"}], isError: false}`; returned from server after tool execution; inserted into model context.

  ## Historical Development

  **Pre-KQML Era (1975–1992): Foundations in Distributed AI**
  - 1975–1977: Hearsay-II speech understanding system at CMU establishes the blackboard architecture — knowledge sources communicate via a shared global data structure (the blackboard) rather than direct message exchange; precursor to multi-agent communication patterns.
  - 1980: Reid Smith publishes "The Contract Net Protocol" in IEEE Transactions on Computers, providing the first formal task-allocation mechanism for heterogeneous distributed problem-solving networks; remains in active use 45 years later.
  - 1981–1986: The Distributed Vehicle Monitoring Testbed (DVMT) at the University of Massachusetts (Victor Lesser's group) extends blackboard coordination to a fully distributed architecture, developing the concept of "partial global planning" for coordination without shared memory.
  - 1988: Bond and Gasser compile *Readings in Distributed Artificial Intelligence*, institutionalising DAI as a research field and establishing the canonical framework distinguishing distributed problem solving, parallel AI, and multi-agent systems.
  - 1990: DARPA Knowledge Sharing Effort (KSE) begins, funding development of a common knowledge representation and communication infrastructure for knowledge-based systems; produces the Knowledge Interchange Format (KIF) and initiates KQML development.

  **KQML Era (1992–2000): First Agent Communication Languages**
  - 1992: Finin, Fritzson, McKay, and McEntire propose KQML at the ACM CIKM-94 (presented 1993); first publication of a dedicated agent communication language with a vocabulary of communicative performatives and a transport-neutral message envelope.
  - 1993: Shoham publishes "Agent-Oriented Programming" in Artificial Intelligence (AI journal), introducing AGENT-0 with commitment-based semantics; establishes the connection between speech act theory, BDI mental states, and agent programming.
  - 1994–1996: Multiple KQML implementations appear: DARPA's Interoperability Testbed, the ULTRALOG logistics planning system, the RETSINA multi-agent infrastructure at Carnegie Mellon, and numerous academic MAS projects. Interoperability problems emerge as implementations diverge.
  - 1995: Wooldridge and Jennings publish "Intelligent Agents: Theory and Practice" in *Knowledge Engineering Review*; becomes the most-cited paper in agent systems research.
  - 1996: FIPA (Foundation for Intelligent Physical Agents) established in Geneva with founding members including Telecom Italia, British Telecom, Siemens, Nortel, NEC, and others; begins standardisation work on agent communication.
  - 1997: Singh publishes critique of KQML's informal semantics in *IEEE Computer*, motivating the formal-semantics approach that FIPA would adopt.

  **FIPA Era (2000–2015): Standards and Industrial Deployment**
  - 2000: FIPA ACL specification formally ratified; 22 communicative act types with BDI-grounded pre- and post-conditions; FIPA Interaction Protocol Library specifying Request, Contract Net, Subscribe, English Auction, Dutch Auction, Brokering, and Recruiting protocols.
  - 1999–2001: JADE (Java Agent DEvelopment Framework) developed at TILAB/Telecom Italia Lab (Genova); FIPA-compliant middleware with AMS, DF, and message transport services; becomes the dominant open-source MAS platform.
  - 2001–2010: Peak of FIPA-era academic and industrial deployment: JADE-based systems in telecom network management (fault diagnosis, service provisioning), logistics scheduling (DHL pilot, Dutch Port of Rotterdam coordination), air traffic flow management (Eurocontrol MASDOP project), electricity market simulation, and e-procurement.
  - 2002: FIPA ceases active operations as a standards body (its specifications remain active and widely referenced); the agent.fipa.org website continues to serve the archived specifications.
  - 2008: W3C OWL-S Web Service Ontology (drafted Southampton group) provides semantic web foundation for agent capability description; anticipates modern capability advertisement mechanisms in A2A Agent Cards.
  - 2009: Shoham and Leyton-Brown publish *Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations* (Cambridge University Press); becomes the standard graduate-level MAS reference.
  - 2013: AutoGen precursors begin appearing in Microsoft Research as lightweight LLM coordination frameworks; marks early experiments with LLM-based agent orchestration.

  **LLM-Native Era (2023–Present): Emergence of New Protocol Standards**
  - 2023: AutoGen (Microsoft Research) released as open-source multi-agent LLM framework; CrewAI launches; LangGraph released by LangChain. All use structured JSON for tool calls and natural language for inter-agent instruction; the "performative layer" becomes implicit.
  - November 2024: Anthropic publishes [[Model Context Protocol]] specification v0.1; open-sourced immediately; first production-grade LLM-native agent-to-tool communication standard.
  - March 2025: OpenAI releases Agents SDK (replacing experimental Swarm framework); provides handoff primitives for conversation state transfer between specialist LLM agents.
  - April 2025: Google announces [[Agent-to-Agent Protocol]] (A2A) with 50+ founding technology partners; first production-grade LLM-native agent-to-agent task delegation standard; uses HTTP/SSE transport and Agent Cards for capability advertisement.
  - June 2025: Google transfers A2A to [[Linux Foundation]] governance as Agent2Agent project; first vendor-neutral governance for a modern agent communication protocol.
  - 2024–2025: IBM open-sources ACP (Agent Communication Protocol) to Linux Foundation AI; community releases [[Agent Network Protocol]] specification with W3C DID and JSON-LD foundations.
  - February 2026: arXiv paper arXiv:2604.02369 ("Beyond Message Passing: A Semantic View of Agent Communication Protocols") argues for [[Ontology]]-grounded capability schemas as a precondition for true agent interoperability; marks re-emergence of Semantic Web approaches in agent protocol design.
  - April 2026: A2A membership exceeds 150 organisations; MCP ecosystem exceeds 2,500 open-source server implementations.

  ## Protocol Specification Reference

  **FIPA ACL Message Fields**
  - `:sender` — the identity of the agent sending the message (AID: Agent Identifier)
  - `:receiver` — the agent or agents to whom the message is directed (a set of AIDs)
  - `:reply-to` — the agent(s) to which subsequent replies should be addressed if different from sender
  - `:content` — the content of the message expressed in the `:language` and `:ontology` specified
  - `:language` — the language used to express the content (FIPA-SL, Prolog, KIF, etc.)
  - `:encoding` — the encoding of the message content (UTF-8, base64, etc.)
  - `:ontology` — the ontology used to give meaning to content expressions
  - `:protocol` — the name of the interaction protocol to which this message belongs
  - `:conversation-id` — an expression which is used to identify an ongoing sequence of communicative acts
  - `:reply-with` — an expression that will be used by the responding agent to identify the message
  - `:in-reply-to` — the expression contained in reply-with of the message to which this is a reply
  - `:reply-by` — a time/date expression indicating the latest time by which the sender requires a reply

  **FIPA ACL Performative Types (22 total)**
  - ACCEPT-PROPOSAL: accept a previously submitted proposal
  - AGREE: agree to perform a requested action
  - CANCEL: inform that the sender is no longer committed to an earlier action
  - CFP (Call For Proposals): initiate a negotiation to perform a given action
  - CONFIRM: confirm the truth of a proposition already believed to be true
  - DISCONFIRM: deny the truth of a proposition
  - FAILURE: inform that an attempted action failed
  - INFORM: inform the receiver that a given proposition is true
  - INFORM-IF: request the receiver to inform whether a proposition is true or false
  - INFORM-REF: request the receiver to inform what object a referential expression denotes
  - NOT-UNDERSTOOD: notify sender that a message was not understood
  - PROPOSE: submit a proposal in response to a CFP
  - QUERY-IF: ask whether a proposition is true
  - QUERY-REF: ask the value of a referential expression
  - REFUSE: refuse to perform an action, explaining why
  - REJECT-PROPOSAL: reject a previously submitted proposal
  - REQUEST: request an action from the receiver
  - REQUEST-WHEN: request an action to be performed when a condition becomes true
  - REQUEST-WHENEVER: request an action to be performed whenever a condition becomes true
  - SUBSCRIBE: register interest in an information source for ongoing updates
  - PROXY: ask the receiver to select target agents and forward the embedded message
  - PROPAGATE: ask the receiver to forward the embedded message to agents matching a description

  **Modern A2A Protocol Task States**
  - `submitted`: task received by agent server, queued for processing
  - `working`: agent is actively processing the task; may emit intermediate TaskArtifact messages
  - `input-required`: agent requires additional user input or clarification before proceeding
  - `completed`: task successfully finished; final TaskArtifact(s) available
  - `failed`: task could not be completed; error details provided in status message
  - `canceled`: task was canceled by client request before completion

  ## Research and Literature

  1. Austin, J. L. (1962). *How to Do Things with Words*. Oxford University Press.
  2. Searle, J. R. (1969). *Speech Acts: An Essay in the Philosophy of Language*. Cambridge University Press.
  3. Smith, R. G. (1980). "The Contract Net Protocol: High-Level Communication and Control in a Distributed Problem Solver." *IEEE Transactions on Computers*, 29(12), 1104–1113.
  4. Finin, T., et al. (1994). "KQML as an Agent Communication Language." *Proceedings of the Third International Conference on Information and Knowledge Management (CIKM-94)*. ACM.
  5. FIPA (Foundation for Intelligent Physical Agents). (2002). *FIPA ACL Message Structure Specification*. FIPA SC00061G. http://www.fipa.org/specs/fipa00061/
  6. FIPA. (2002). *FIPA Contract Net Interaction Protocol Specification*. FIPA SC00029H. http://www.fipa.org/specs/fipa00029/
  7. Wooldridge, M., & Jennings, N. R. (1995). "Intelligent Agents: Theory and Practice." *Knowledge Engineering Review*, 10(2), 115–152.
  8. Shoham, Y., & Leyton-Brown, K. (2009). *Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations*. Cambridge University Press.
  9. Rao, A. S., & Georgeff, M. P. (1991). "BDI Agents: From Theory to Practice." *Proceedings ICMAS-95*.
  10. Bratman, M. E. (1987). *Intention, Plans, and Practical Reason*. Harvard University Press.
  11. Anthropic. (2024). *Model Context Protocol Specification*. https://modelcontextprotocol.io/specification
  12. Google. (2025). *Agent2Agent Protocol Specification*. Linux Foundation Agent2Agent Project. https://a2a.dev
  13. IBM Research. (2025). *Agent Communication Protocol (ACP) Specification*. Linux Foundation AI. https://agentcommunicationprotocol.dev
  14. ANP Community. (2024). *Agent Network Protocol Specification*. https://agent-network-protocol.com
  15. Bellifemine, F., Poggi, A., & Rimassa, G. (1999). "JADE — A FIPA-Compliant Agent Framework." *Proceedings of the Practical Applications of Intelligent Agents and Multi-Agent Technology (PAAM-99)*.
  16. Genesereth, M. R., & Fikes, R. E. (1992). *Knowledge Interchange Format, Version 3.0 Reference Manual*. Stanford Logic Group.
  17. Singh, M. P. (1998). "Agent Communication Languages: Rethinking the Principles." *Computer*, 31(12), 40–47.
  18. Labrou, Y., Finin, T., & Peng, Y. (1999). "The Interoperability Problem: Bringing Together Mobile Agents and Agent Communication Languages." *Proceedings of HICSS-32*.
  19. Ye, D., et al. (2025). "A Survey of AI Agent Protocols." arXiv:2504.16736.
  20. Garg, V., et al. (2025). "Security Threat Modeling for Emerging AI-Agent Protocols: A Comparative Analysis of MCP, A2A, Agora, and ANP." arXiv:2602.11327.
  21. Chen, A., et al. (2025). "Beyond Context Sharing: A Unified Agent Communication Protocol (ACP) for Secure, Federated, and Autonomous Agent-to-Agent (A2A) Orchestration." arXiv:2602.15055.
  22. Wang, Z., et al. (2025). "Beyond Message Passing: A Semantic View of Agent Communication Protocols." arXiv:2604.02369.
  23. Peng, B., et al. (2025). "LLM Agent Communication Protocol (LACP) Requires Urgent Standardization: A Telecom-Inspired Protocol is Necessary." arXiv:2510.13821.
  24. UK AI Safety Institute. (2025). *Frontier AI Trends Report*. AISI, December 2025. https://www.aisi.gov.uk/frontier-ai-trends-report
  25. Coral Protocol Community. (2025). "Coral Protocol: Open Infrastructure Connecting the Internet of Agents." arXiv:2505.00749.
  26. Zylos Research. (2026). "Agent-to-Agent Communication Protocol Standards: A2A, MCP, ACP, and ANP." https://zylos.ai/research/2026-02-15-agent-to-agent-communication-protocols/
  27. Zylos Research. (2026). "Agent Interoperability Protocols 2026: MCP, A2A, ACP and the Path to Convergence." https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/
  28. Digital Applied. (2026). "AI Agent Protocol Ecosystem Map 2026." https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp

- ### Provenance
  - sources:: Anthropic MCP Specification (modelcontextprotocol.io) | Google Agent2Agent Protocol (a2a.dev) | IBM ACP Specification | ANP community spec | FIPA ACL SC00061G | FIPA Contract Net SC00029H | arXiv:2504.16736 (Survey of AI Agent Protocols) | arXiv:2602.11327 (Security Threat Modeling) | arXiv:2602.15055 (ACP Unified Protocol) | arXiv:2604.02369 (Semantic View of ACPs) | arXiv:2510.13821 (LACP) | arXiv:2505.00749 (Coral Protocol) | AISI Frontier AI Trends Report Dec 2025 | Zylos Research protocol surveys 2026 | Shoham & Leyton-Brown (2009) Multiagent Systems | Wooldridge & Jennings (1995) | Smith (1980) Contract Net
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm