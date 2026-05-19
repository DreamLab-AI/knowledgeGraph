- ### Definition
  - **Agentic Internet** is the emerging substrate of protocols, identity primitives, payment rails and discovery mechanisms over which autonomous AI agents — rather than human users clicking through browsers — discover services, negotiate terms, exchange data and settle value on behalf of principals (human users, enterprises, other agents); operationally instantiated through a 2024-2026 stack comprising tool-and-data connection protocols ([[Model Context Protocol]] released by [[Anthropic]] 25 November 2024 as 'USB-C for AI', adopted by [[OpenAI]] March 2025, [[Google DeepMind]] April 2025, [[Microsoft]] Copilot Studio, [[Replit]], [[Sourcegraph]], [[Block]], [[Apollo]], with 2025-06-18 protocol revision adding elicitation, structured outputs and OAuth 2.1 authorisation), agent-to-agent interoperability ([[A2A Protocol]] announced by [[Google]] 9 April 2025 at Cloud Next with 50+ launch partners spanning [[Atlassian]], [[Box]], [[Cohere]], [[Intuit]], [[LangChain]], [[MongoDB]], [[PayPal]], [[Salesforce]], [[SAP]], [[ServiceNow]], [[Workday]], using HTTP+JSON-RPC+Server-Sent Events with AgentCard capability discovery and Task lifecycle), computer-using agents ([[Anthropic Computer Use]] 22 October 2024 with Claude 3.5 Sonnet new scoring 14.9% on OSWorld vs 7.7% prior SOTA, [[OpenAI Operator]] 23 January 2025 at $200/month Pro tier subsequently unified into [[ChatGPT Agent]] 17 July 2025, [[Google Project Mariner]] December 2024 reaching 83.5% on WebVoyager, [[Apple App Intents]] expanded WWDC 2024 enabling Siri/Shortcuts agentic flows in iOS 18.1+), enterprise agent platforms ([[Salesforce Agentforce]] 12 September 2024 → Agentforce 2.0 December 2024 → 3.0 June 2025 on [[Atlas Reasoning Engine]] with originally $2-per-conversation then Flex Credits pricing, [[Microsoft Copilot Studio]] agents, [[IBM watsonx Orchestrate]], [[ServiceNow AI Agents]], [[Glean Agents]]), open-source agent collectives ([[AGNTCY]] launched 9 March 2025 by [[Cisco]], [[LangChain]] and [[Galileo]] later joined by [[Google Cloud]], [[ServiceNow]], [[Dell]], [[Red Hat]] publishing the [[Agent Connect Protocol]], [[Open Agent Schema Framework]] and Agent Directory Service), decentralised agent economies ([[Fetch.ai]] merged with [[SingularityNET]] and [[Ocean Protocol]] March 2024 forming [[Artificial Superintelligence Alliance]] with native FET token, uAgents framework, DeltaV agent marketplace; [[Bittensor]] subnets; [[Ritual]] and [[Gensyn]] for verifiable inference) and agentic commerce identity ([[Stripe Agent Toolkit]] April 2024 → Stripe Agent SDK February 2025 with restricted-use keys, [[Visa Intelligent Commerce]] 30 April 2025 with Anthropic/IBM/Microsoft/Mistral/OpenAI/Perplexity/Samsung/Stripe partnerships, [[Mastercard Agent Pay]] 29 April 2025 with Microsoft/Anthropic and programmable agentic tokens, [[PayPal Agent Toolkit]], [[Coinbase AgentKit]]); fundamentally restructuring the web by replacing human-mediated browse-and-click interaction with API-to-API agent flows where capability discovery, authorisation, payment and provenance are first-class protocol features rather than UI conventions, with material consequences for [[SEO]] (publisher referral traffic declining 28% YoY 2024 per SimilarWeb, AI Overviews reducing informational-query clicks 30-50% per Pew Research July 2025), [[digital advertising]] (zero-click search displacing ad inventory), [[web economics]] (content-licensing deals such as [[Reddit]]-Google $60M/year February 2024 and [[News Corp]]-OpenAI $250M May 2024 partially internalising the externality), and shopping behaviour (Adobe Analytics holiday 2024 reporting 1,300% YoY growth in generative-AI-sourced shopping traffic reaching ~8% of e-commerce visits by Q4 2025; Anthropic Economic Index March 2025 documenting 24-36% of Claude.ai tasks involve agentic workflows); requiring novel trust and identity primitives ([[Decentralized Identifiers]] per W3C Recommendation 19 July 2022 with method-specific DID Documents, [[Verifiable Credentials]] Data Model 2.0 W3C Recommendation May 2025 for delegated agent authority, [[OAuth 2.1]] draft-ietf-oauth-v2-1-12 with PKCE for confidential clients, [[capability tokens]] scoped to specific tool calls, agent-specific [[OpenID for Verifiable Credentials]], [[Trust over IP Foundation]] governance frameworks); exposed to a new threat surface including [[indirect prompt injection]] (Greshake et al. February 2023 demonstrating attacker-controlled documents subverting agent instructions), [[tool poisoning]] (Invariant Labs April 2025 cataloguing MCP-specific attacks where malicious servers exfiltrate via hidden tool instructions), [[confused deputy]] attacks where agents abuse delegated authority on attacker-controlled inputs, supply-chain compromise of MCP server registries, [[data exfiltration]] via tool-chain side channels and prompt-jailbreak amplification across multi-agent workflows; contested across architectural ideologies between the dominant centralised platform-vendor stack (Anthropic+OpenAI+Google+Microsoft+Salesforce with proprietary model weights, OAuth-style federated identity and fiat-rail tokenised payments) and a [[Web3]]-rooted decentralised alternative (ASI Alliance, Bittensor, Ritual, Gensyn, [[Nostr]]+[[Bitcoin]]+[[Lightning Network]] stacks with cryptographic self-sovereign identity and on-chain micropayments), each making distinct claims about censorship resistance, economic sovereignty, regulatory compliance and developer ergonomics; with [[UK Context]] including [[Imperial College Web Science]] (Wendy Hall, Imperial Data Science Institute), [[UCL Interaction Centre]] (AI-mediated communication, conversational agents), [[Edinburgh Informatics]] (multi-agent systems heritage via Michael Wooldridge, Robin Cohen, Alex Lascarides dialogue agents; ILCC/ANC/AIAI institutes), [[BBC R&D]] (Responsible AI Principles December 2024 governing agents acting on behalf of audience, Object-Based Media + agent-mediated personalisation), [[GDS Agent Strategy]] (Government Digital Service Discovery on agentic services 2024-2025, AI Opportunities Action Plan January 2025 led by Matt Clifford with AI-in-Government workstream, [[AISI]] Inspect framework for evaluating agent capabilities), and Northern English industrial hubs (Manchester AI cluster, Leeds, Sheffield AMRC, Newcastle Digital Catapult); representing the most significant restructuring of the web since the mobile transition c.2008-2012, on a timeline where 2024 introduced the protocol substrate, 2025 saw enterprise productisation, and 2026-2030 is projected to see agent-to-agent transactions representing 15-25% of B2B commerce volume in technology-forward sectors with cumulative annual agentic-commerce flows reaching $1.5-3T globally by 2030.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgenticInternet
  - owl-role:: SocioTechnicalSubstrate
  - owl-inferred:: ai:AgenticSystem, ai:ProtocolStack, ai:WebArchitecturePattern
  - belongs-to-domain:: [[AI-GroundedDomain]], [[WebArchitectureDomain]], [[ProtocolDomain]], [[DigitalEconomyDomain]]
  - implemented-in-layer:: [[ProtocolLayer]], [[ApplicationLayer]], [[IdentityLayer]], [[PaymentLayer]]

- ### Relationships
  - is-subclass-of:: [[Web Architecture]], [[Distributed Computing]], [[Agent-Oriented Computing]], [[Sociotechnical System]]
  - has-part:: [[Model Context Protocol]], [[A2A Protocol]], [[Agent Identity]], [[Capability Token]], [[Agent Marketplace]], [[Tool Registry]], [[Agent Runtime]], [[Agent Orchestrator]], [[Browser Agent]], [[Agentic Commerce Layer]]
  - requires:: [[Large Language Model]], [[Tool Use]], [[Authentication]], [[Authorisation]], [[Discovery Protocol]], [[Transport Layer]], [[Persistent Memory]], [[Reasoning Engine]]
  - enables:: [[Machine-to-Machine Commerce]], [[Autonomous Workflows]], [[Programmatic Service Composition]], [[Long-Horizon Task Execution]], [[Cross-Vendor Agent Interoperability]], [[API-First Web]], [[Agentic Search]], [[Personal AI]]
  - implements:: [[Function Calling]], [[Tool Schema]], [[JSON-RPC]], [[Server-Sent Events]], [[Capability Discovery]], [[Task Lifecycle Management]], [[Streaming Responses]], [[Elicitation]]
  - depends-on:: [[HTTP]], [[TLS]], [[JSON]], [[OAuth]], [[DNS]], [[REST]], [[WebSockets]], [[Public Key Infrastructure]]
  - supports:: [[Customer Service Automation]], [[Software Engineering Agents]], [[Research Agents]], [[Shopping Agents]], [[Booking Agents]], [[Procurement Agents]], [[Personal Assistants]], [[Coding Copilots]]
  - uses:: [[Anthropic Claude]], [[OpenAI GPT]], [[Google Gemini]], [[Meta Llama]], [[Mistral]], [[Embeddings]], [[Vector Database]], [[Retrieval-Augmented Generation]]
  - contrasts-with:: [[Web 2.0 SaaS]], [[Static Web]], [[Walled Garden]], [[Browser-Centric Internet]], [[Human-in-the-Loop Workflow]], [[Web3 Blockchain Agents]]
  - related-to:: [[Agentic Economy]], [[Internet of Agents]], [[Death of the Internet]], [[Zero-Click Search]], [[AI Search]], [[AI Agents]], [[Autonomous Agents]], [[Multi-Agent Systems]], [[Computer Use]], [[Browser Use]]
  - standardized-by:: [[Anthropic]], [[Linux Foundation]], [[W3C]], [[IETF]], [[AGNTCY]], [[OpenID Foundation]], [[Trust over IP Foundation]]

- ### Content

	## Compositional Relationships (Components)
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:ModelContextProtocol))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:A2AProtocol))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:AgentIdentity))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:CapabilityToken))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:AgentMarketplace))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:ToolRegistry))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:AgentRuntime))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:BrowserAgent))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:hasPart ai:AgenticCommerceLayer))

	## Dependency Relationships
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:LargeLanguageModel))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:ToolUse))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:Authentication))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:Authorisation))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:DiscoveryProtocol))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:requires ai:PersistentMemory))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:dependsOn ai:HTTP))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:dependsOn ai:OAuth))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:dependsOn ai:PublicKeyInfrastructure))

	## Capability Relationships
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:MachineToMachineCommerce))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:AutonomousWorkflows))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:ProgrammaticServiceComposition))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:LongHorizonTaskExecution))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:CrossVendorAgentInteroperability))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:enables ai:APIFirstWeb))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:supports ai:ShoppingAgents))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:supports ai:SoftwareEngineeringAgents))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:supports ai:ResearchAgents))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:supports ai:PersonalAssistants))

	## Implementation Relationships
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:FunctionCalling))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:ToolSchema))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:JSONRPC))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:CapabilityDiscovery))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:TaskLifecycleManagement))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:implements ai:Elicitation))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:uses ai:DecentralizedIdentifiers))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:uses ai:VerifiableCredentials))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:uses ai:OAuth21))

	## Reduction Relationships
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:reduces ai:HumanClickWork))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:reduces ai:UIFriction))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:reduces ai:CrossPlatformIntegrationCost))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:reduces ai:TransactionCostsForServiceDiscovery))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:reduces ai:SaaSLockIn))

	## Contrast Relationships
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:contrastsWith ai:Web2SaaS))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:contrastsWith ai:BrowserCentricInternet))
	SubClassOf(ai:AgenticInternet
	  ObjectSomeValuesFrom(ai:contrastsWith ai:Web3BlockchainAgents))

	## Property Constraints
	SubClassOf(ai:AgenticInternet
	  DataMinCardinality(1 ai:hasAgentProtocol xsd:string))
	SubClassOf(ai:AgenticInternet
	  DataMinCardinality(1 ai:hasIdentityModel xsd:string))
	SubClassOf(ai:AgenticInternet
	  DataAllValuesFrom(ai:supportsToolCalling xsd:boolean))

	## Annotations
	AnnotationAssertion(rdfs:label ai:AgenticInternet "Agentic Internet"@en)
	AnnotationAssertion(rdfs:comment ai:AgenticInternet "Emerging substrate of protocols, identity primitives, payment rails and discovery mechanisms over which autonomous AI agents transact on behalf of principals; 2024-2026 stack comprises Anthropic MCP (Nov 2024 'USB-C for AI'), Google A2A (April 2025, 50+ partners), Anthropic Computer Use (Oct 2024 OSWorld 14.9%), OpenAI Operator (Jan 2025 $200/mo), Google Mariner (Dec 2024 WebVoyager 83.5%), Salesforce Agentforce (Sept 2024 + 2.0/3.0), AGNTCY collective (Cisco/LangChain/Galileo March 2025), Fetch.ai/ASI Alliance, Stripe Agent SDK, Visa Intelligent Commerce (April 2025), Mastercard Agent Pay (April 2025); restructures web economics by replacing human browse-and-click with API-to-API flows; threat surface includes indirect prompt injection, tool poisoning, confused deputy, supply-chain attacks."@en)
	AnnotationAssertion(dcterms:identifier ai:AgenticInternet "AI-1029"^^xsd:string)
	AnnotationAssertion(dcterms:subject ai:AgenticInternet "AI Agents, Web Architecture, Agent Protocols, Agentic Commerce, Identity"@en)

	## Property Characteristics
	AsymmetricObjectProperty(ai:requires)
	AsymmetricObjectProperty(ai:enables)
	AsymmetricObjectProperty(ai:implements)
	AsymmetricObjectProperty(ai:contrastsWith)
	TransitiveObjectProperty(ai:dependsOn)

  - ## About Agentic Internet
  - **Agentic Internet** denotes the rapidly crystallising network substrate over which autonomous AI agents — not humans operating browsers — discover services, authenticate themselves, negotiate terms, exchange data and settle value on behalf of principals. The phrase entered common usage in late 2024 following the convergence of three previously separate technical trajectories: the maturation of frontier language models into reliably tool-using reasoners (Claude 3.5 Sonnet new, GPT-4o, Gemini 2.0); the publication of open agent-tool and agent-agent protocols (MCP November 2024, A2A April 2025); and the productisation of computer-using agents able to operate arbitrary software through screenshots and synthetic input (Anthropic Computer Use October 2024, OpenAI Operator January 2025, Google Project Mariner December 2024).
  - The shift is structurally analogous to earlier inflections in web history. Where Web 1.0 made information addressable (URLs over HTTP), Web 2.0 made interaction social and dynamic (AJAX, SaaS, the mobile turn), and the brief Web3 episode (2017-2022) attempted to make value programmable on permissionless ledgers, the **Agentic Internet** makes intent executable: a user expresses a goal in natural language and an autonomous agent decomposes it into protocol-mediated subtasks executed across third-party services without the user ever loading a webpage. The economic and design consequences are commensurately large. Browsing — the dominant mode of consumer-internet engagement since approximately 1995 — becomes an implementation detail rather than the user experience.
  - ### Why 2024-2026 and Not Earlier
  - Multi-agent systems have been an active research field since the 1980s (see [[Edinburgh Informatics]] heritage via Michael Wooldridge, work at Carnegie Mellon, MIT and Southampton on FIPA agent communication languages). Semantic Web visions of agents reading machine-readable RDF and acting autonomously trace to Tim Berners-Lee, James Hendler and Ora Lassila's seminal *Scientific American* article of May 2001. What changed in 2024 was not the vision but four enabling conditions arriving simultaneously: (1) language models robust enough to follow structured tool schemas across long horizons with acceptable error rates; (2) compute economics making continuous agent operation viable (token costs dropped 90%+ between GPT-4 March 2023 and GPT-4o May 2024 at constant capability); (3) the publication by an established AI lab (Anthropic) of an open, well-engineered tool-connection standard (MCP) that solved the N×M integration problem; and (4) sufficient enterprise demand — both consumer-side (productivity assistants) and B2B (Salesforce Agentforce, Microsoft Copilot, ServiceNow AI agents) — to justify protocol investment.
  - ### The Agent Stack 2026
  - A reference decomposition of the contemporary Agentic Internet stack distinguishes seven layers:
	  - **Transport**: HTTP/2 + TLS + Server-Sent Events for streaming; WebSockets for bidirectional flows; gRPC for high-performance internal agent fabrics
	  - **Identity and Authorisation**: OAuth 2.1 with PKCE for delegated user-to-agent authority; DIDs (W3C 2022 Rec) and Verifiable Credentials (W3C VC Data Model 2.0 Rec May 2025) for self-sovereign agent identity; capability tokens scoped to specific tool calls; Stripe-style restricted-use API keys for payment authority
	  - **Protocols**: MCP for agent↔tool/data connections; A2A for agent↔agent collaboration; Apple App Intents for OS-mediated app actions; OpenAPI/JSON-Schema for tool description; OpenAI function-calling and Anthropic tool-use as model-native variants
	  - **Models and Reasoning**: Frontier LLMs ([[Claude]] family, [[GPT]] family, [[Gemini]], [[Llama]]) with tool-calling fine-tuning; reasoning models ([[o1]]/[[o3]], Claude with extended thinking, [[DeepSeek R1]], [[Gemini Thinking]]); [[Retrieval-Augmented Generation]] grounding
	  - **Memory**: Vector databases ([[Pinecone]], [[Weaviate]], [[Qdrant]], [[Chroma]], [[pgvector]]); session/episodic memory; semantic long-term memory; tool-result caching
	  - **Orchestration**: [[LangGraph]], [[LlamaIndex]] Workflows, [[CrewAI]], [[AutoGen]], [[OpenAI Swarm]] (→ Agents SDK March 2025), [[Mastra]], [[Pydantic AI]], [[Anthropic Multi-Agent Research]] (May 2025)
	  - **Application and Commerce**: Vertical agent applications (shopping, booking, customer service, software engineering); agentic payment rails ([[Stripe]] Agent SDK, [[Visa Intelligent Commerce]], [[Mastercard Agent Pay]], [[PayPal]], [[Coinbase AgentKit]])

  - ## Components and Architecture

	The Agentic Internet is best understood as a layered architecture in which each protocol decision propagates trust, capability and economic semantics upward.

	### Model Context Protocol (MCP)

	[[Anthropic]] announced MCP on **25 November 2024** as 'an open standard for connecting AI assistants to the systems where data lives'. The framing 'USB-C for AI' captures the design intent: a single connector replacing N×M point integrations between models and tools/data sources. The protocol is JSON-RPC 2.0 over stdio or HTTP+SSE transports, defining three primitive types: **resources** (read-only data exposed by a server), **tools** (executable functions the server offers) and **prompts** (parameterised templates). Reference implementations in [[Python]] and [[TypeScript]] were published alongside the spec. By Q1 2025 official adopters included [[OpenAI]] (announced March 2025 alongside Agents SDK), [[Google DeepMind]] (April 2025), [[Microsoft Copilot Studio]], [[Replit]], [[Sourcegraph]], [[Block]] (Cash App parent) and [[Apollo]]. The **2025-06-18 protocol revision** added elicitation (server-initiated clarification requests to the user), structured outputs, OAuth 2.1 authorisation flows and improved schema negotiation. The MCP server ecosystem grew from ~50 community servers in December 2024 to over 5,000 by Q1 2026 spanning databases ([[PostgreSQL]], [[Snowflake]], [[BigQuery]]), SaaS APIs ([[Slack]], [[Linear]], [[GitHub]], [[Notion]], [[Salesforce]]), filesystems and developer tooling. Anthropic operates an official MCP registry; community alternatives (Smithery, Glama, MCP.so) provide discovery and one-click installation.

	### Agent-to-Agent (A2A) Protocol

	[[Google]] announced [[A2A]] at Cloud Next on **9 April 2025** as the cross-vendor complement to MCP: where MCP connects an agent to tools/data, A2A connects agents to other agents. Launch partners numbered 50+ including [[Atlassian]], [[Box]], [[Cohere]], [[Intuit]], [[LangChain]], [[MongoDB]], [[PayPal]], [[Salesforce]], [[SAP]], [[ServiceNow]] and [[Workday]]. The wire format is HTTP+JSON-RPC with Server-Sent Events for streaming and webhook callbacks for push notifications on long-running tasks. Core abstractions: **AgentCard** (a JSON document describing an agent's capabilities, authentication requirements and contact endpoints, served at a well-known URL pattern `/.well-known/agent.json` analogous to robots.txt), **Task** (a stateful unit of work with lifecycle states submitted/working/input-required/completed/canceled/failed/unknown), **Message** and **Part** types for multimodal content exchange, and **Push Notification Config** for asynchronous completion. The protocol intentionally avoids prescribing agent internals: an agent can be a 7B open-weights model, Claude, GPT-4o or a deterministic rule engine, as long as it speaks A2A over the wire. A2A and MCP are complementary; production agent systems typically run MCP servers for tool access and expose A2A endpoints for peer collaboration.

	### Computer-Using Agents

	The computer-using agent (CUA) is the most visible end-user manifestation of the Agentic Internet, in which an agent operates conventional software by interpreting screenshots and emitting synthetic keyboard/mouse events.
	  - **[[Anthropic Computer Use]]** (22 October 2024, Claude 3.5 Sonnet new): beta capability returning bounding-box click coordinates and key sequences from vision-grounded prompts. Achieved **14.9% on OSWorld** (vs prior SOTA 7.7%) in screenshot-only mode; **22% with extended scaffolding**. Made available through the Anthropic API as a tool-use capability.
	  - **[[OpenAI Operator]]** (23 January 2025): preview product running OpenAI's Computer-Using Agent (CUA) model on an OpenAI-hosted browser; available to ChatGPT Pro ($200/month) initially. Operator was unified into **[[ChatGPT Agent]]** on **17 July 2025** combining Operator's browser control with deep research and connectors; available across Pro, Plus and Team tiers.
	  - **[[Google Project Mariner]]** (11 December 2024): research prototype agent built on Gemini 2.0 that operates within a Chrome extension to navigate browsers. Reported **83.5% on WebVoyager** benchmark. Integrated commercially into Google AI Ultra subscription Q2 2025 alongside agentic Gemini integrations in Workspace.
	  - **[[Browser Use]]** (open-source, late 2024): Python library that wraps any LLM with browser automation; achieved community traction with 50,000+ GitHub stars by Q1 2026 and is used as the substrate for many start-up CUAs.
	  - **[[Apple App Intents]]**: not strictly a CUA but a parallel route — apps expose declarative actions Siri can invoke, sidestepping the need to interpret pixels. Foundation for Apple Intelligence agentic workflows in iOS 18.1+.

	### Enterprise Agent Platforms

	  - **[[Salesforce Agentforce]]** launched at Dreamforce on **12 September 2024**: a low-code platform for deploying autonomous agents grounded in Salesforce Data Cloud, with the proprietary **[[Atlas Reasoning Engine]]** as cognitive substrate. Initial pricing was $2 per conversation. **Agentforce 2.0** launched December 2024, **3.0** June 2025. By Q1 2026 deployed in 5,000+ customer organisations. Pricing transitioned to a Flex Credits model accommodating mixed conversational and agentic workloads.
	  - **[[Microsoft Copilot Studio]]**: full-stack agent builder integrated with Microsoft 365 Copilot; first-class MCP support announced Build 2025. Pre-built agents for IT, HR, sales; custom agent authoring via Copilot Studio Pages. Pricing through Microsoft 365 Copilot ($30/user/month) plus message pack consumption.
	  - **[[IBM watsonx Orchestrate]]**: enterprise multi-agent orchestration with strong governance, lineage and access control; integrates with Mastercard Agent Pay for B2B procurement flows; partnerships with Anthropic for foundation model access.
	  - **[[ServiceNow AI Agents]]** (Now Assist): embedded agents across ITSM, HR Service Delivery and Customer Service Management; AGNTCY founding member; first-class A2A speaker.
	  - **[[Glean Agents]]** (June 2025 GA): enterprise search vendor extending to agentic workflows over corporate knowledge; $7.2B valuation per September 2025 round.
	  - **[[Notion AI]]** and **[[Slack AI]]**: productivity-suite-embedded agents enabling document and channel-scoped automations.

	### Open-Source Collectives and Cross-Vendor Infrastructure

	  - **[[AGNTCY]] Collective** launched **9 March 2025** by [[Cisco]], [[LangChain]] and [[Galileo]] under the [[Linux Foundation]], with subsequent additions including [[Google Cloud]], [[ServiceNow]], [[Dell]], [[Glean]] and [[Red Hat]]. Publishes the **[[Agent Connect Protocol]] (ACP)**, **[[Open Agent Schema Framework]] (OASF)**, **Agent Gateway Protocol** and **AGNTCY Directory Service**. Positions itself as a vendor-neutral counterweight to Anthropic-driven MCP and Google-driven A2A, with overlapping but slightly different design choices around discovery and schema portability.
	  - **[[LangChain]] / [[LangGraph]]** and **[[LlamaIndex]] Workflows**: dominant open-source agent orchestration frameworks; LangGraph reaching 100,000+ weekly downloads by Q1 2026.
	  - **[[OpenAI Agents SDK]]** (March 2025): minimal multi-agent orchestration library shipped alongside Operator GA; replaces the earlier experimental Swarm framework.
	  - **[[Mastra]]** ([[Y Combinator]] W25): TypeScript-first agent framework gaining traction in Node.js ecosystems.

	### Decentralised Agent Economies

	A distinct lineage descends from the [[Web3]]/blockchain world:
	  - **[[Artificial Superintelligence Alliance]] (ASI)**: formed March 2024 from a merger of **[[Fetch.ai]]**, **[[SingularityNET]]** and **[[Ocean Protocol]]**. Native FET token (post-merger ASI). uAgents Python framework for autonomous economic agents; DeltaV agent marketplace; Agentverse hosting.
	  - **[[Bittensor]]**: subnet-based decentralised AI network; subnets host specialised agent capabilities (text generation, translation, prediction markets, validation) competing for TAO emissions.
	  - **[[Ritual]]**: protocol for verifiable AI inference on-chain; partnerships with Polygon and EigenLayer.
	  - **[[Gensyn]]** (UK, London/Edinburgh): decentralised compute marketplace for ML training; raised $43M Series A 2023 led by a16z. Demonstrates Northern UK academic-industrial pipeline (Edinburgh, Imperial alumni).
	  - **[[Nostr]] + [[Bitcoin]] + [[Lightning Network]] stacks**: an alternative architecture (covered extensively in this page's earlier draft) that combines [[Decentralized Identity]] (DIDs over Nostr keypairs), [[censorship-resistant]] communication ([[Nostr relays]]) and [[programmable money]] ([[RGB Protocol]] on Bitcoin with [[client-side validation]]). Materially different trust model from the OAuth+fiat mainstream stack.

	### Agentic Commerce Layer

	Payments and commerce identity have emerged as the highest-value layer of the Agentic Internet because they directly monetise agent traffic and require novel risk and authorisation primitives.
	  - **[[Stripe Agent Toolkit]]** (April 2024): TypeScript and Python SDKs exposing Stripe primitives to LangChain/Vercel AI SDK; **Stripe Agent SDK** (February 2025) generalises to multi-vendor scenarios.
	  - **[[Stripe]] Restricted Keys for Agents** (Feb 2025): API keys with per-call spending limits, scope-restricted permissions and dedicated agent identity; the closest production analogue to per-agent capability tokens.
	  - **[[Visa Intelligent Commerce]]** (announced **30 April 2025**): tokenised payment credentials for agentic transactions; launch partners [[Anthropic]], [[IBM]], [[Microsoft]], [[Mistral]], [[OpenAI]], [[Perplexity]], [[Samsung]], [[Stripe]]; pilots in retail and travel.
	  - **[[Mastercard Agent Pay]]** (announced **29 April 2025**): programmable agentic tokens with [[Microsoft]] and [[Anthropic]] as initial partners; first pilots with [[Braintree]] and [[IBM watsonx Orchestrate]] for B2B procurement.
	  - **[[PayPal Agent Toolkit]]** (April 2025): agent-facing checkout APIs and identity verification.
	  - **[[Coinbase AgentKit]]** (March 2025): crypto-native agentic payments; CDP smart wallets; x402 protocol (payments over HTTP 402, March 2025) for machine-readable micropayments.

  - ## Use Cases and Major Families

	### Consumer Personal Agents

	General-purpose personal assistants (Claude.ai with tools, ChatGPT with connectors, Gemini, [[Perplexity]] Comet, [[Arc Search]]/[[Dia]] from [[The Browser Company]]) increasingly handle multi-step tasks formerly executed across many browser tabs: trip planning across flights+hotels+calendar, recurring research syntheses, refund-and-return flows, food ordering. Anthropic Economic Index (March 2025 release) found **24-36% of Claude.ai tasks involve agentic workflows**, with software engineering, writing, business analysis and translation the dominant categories.

	### Shopping and Commerce Agents

	[[Shopping agents]] have reached parity with humans on many narrow decisions. Anthropic and OpenAI deployment data 2024-2025 indicate that agent-mediated purchases convert at rates within 10-15% of human-driven conversions on commodity SKUs (e.g. consumables, books, electronics) while underperforming on high-emotion or aesthetic categories (apparel, home decor). Adobe Analytics holiday 2024 reported **1,300% YoY growth in generative-AI-sourced shopping traffic**, reaching approximately **8% of e-commerce visits by Q4 2025**. Stripe Atlas and Shopify both rolled out 'agent-readable storefront' specifications in 2025 exposing structured product, pricing and inventory data via MCP servers.

	### Software Engineering Agents

	The most economically significant 2024-2026 agent category. [[Devin]] ([[Cognition Labs]], beta March 2024, GA 2025), [[Cursor]] Agent mode, [[Claude Code]] (Anthropic, May 2025 GA), [[GitHub Copilot Workspace]], [[Codex]] (OpenAI, May 2025 cloud agent), [[Replit Agent]], [[Lovable]], [[v0]] by Vercel and [[Bolt.new]] together processed an estimated 50B+ tool calls per month by Q1 2026. SWE-bench Verified scores rose from 12% (early 2024) to 70%+ (top systems by Q1 2026). Significant share of professional-developer code commits now drafted by agents and reviewed by humans.

	### Research and Knowledge Work Agents

	[[Deep Research]] modes (OpenAI Deep Research January 2025, Google Deep Research December 2024, Perplexity Deep Research, Anthropic Research May 2025 with multi-agent orchestration) execute hour-long investigations producing cited reports. Anthropic published a [[multi-agent research]] architecture in May 2025 demonstrating an orchestrator-worker pattern that improved evaluation accuracy by ~90% over single-agent research at ~15x compute cost.

	### Customer Service and Sales

	Salesforce Agentforce, Sierra (Bret Taylor's startup, $4.5B valuation 2025), Decagon and [[Crescendo]] deployed customer-service agents handling 30-70% of inbound tickets at major retailers and SaaS firms by Q1 2026. Average handle time for fully-automated resolutions ~90 seconds vs ~9 minutes human baseline.

	### Procurement and B2B

	Mastercard Agent Pay + IBM watsonx Orchestrate pilots in B2B procurement; ServiceNow agentic workflows for supplier onboarding; SAP Joule agents for ERP automation. Agent-to-agent contract negotiation pilots in indirect procurement reported by Walmart, Maersk and Unilever via Q4 2025 press releases.

	### Browser Agents and Web Automation

	The most flexible but slowest layer. [[Browser Use]] (open-source), [[BrowserBase]] (managed headless browser infrastructure for agents), [[Anchor Browser]], [[Multion]] and [[Skyvern]] provide agent-driving browser runtimes. Often paired with vision-grounded LLMs for tasks where structured APIs do not exist.

	### Vertical-Specific Agents

	Legal ([[Harvey]], [[Hebbia]], [[Spellbook]]), healthcare ([[OpenEvidence]], [[Glass Health]], [[Hippocratic AI]]), finance ([[Rogo]], [[Cohere North]] enterprise), education ([[Khanmigo]], [[MagicSchool]]), real estate, scientific research ([[FutureHouse]], [[Sakana AI]] AI Scientist v2).

	### Booking, Travel and Logistics Agents

	A high-value category where agentic flows replace multi-step booking journeys: flights, hotels, restaurants, events, transport. Pilots through 2025 with American Express Travel, Booking.com, Expedia (Trip Matching AI), OpenTable (ChatGPT-integrated reservations from Q3 2025). Friction points: payment authorisation, age and identity verification, jurisdiction-specific regulatory requirements (visa, vaccination, GDPR consent). Visa Intelligent Commerce and Mastercard Agent Pay specifically target this use case.

	### Healthcare and Clinical Decision Support

	Agentic clinical workflows in scribe automation ([[Abridge]], [[Suki AI]], [[DeepScribe]], [[Nuance DAX]]), prior-authorisation processing, clinical-trial recruitment, post-discharge follow-up. NHS England piloting agentic patient-pathway management in selected trusts 2025-2026. Regulatory framing under MHRA Software as a Medical Device and FDA's evolving AI/ML Action Plan with predetermined change control plans. Risks: hallucinated clinical information, agent acting beyond scope of practice, principal-agent ambiguity where the 'principal' may be the clinician, the trust or the patient with potentially divergent interests.

	### Financial Services Agents

	AML/KYC triage agents at HSBC, Barclays, NatWest, Lloyds; trading-research agents at quant hedge funds; underwriting agents in insurance ([[Tractable]], [[Shift Technology]]); financial-advice agents (regulatorily constrained in UK by FCA, in US by SEC; pilots include Vanguard's hybrid robo-advisor). Stripe Restricted Keys and Visa/Mastercard agentic primitives directly target payment authorisation in this category.

	### Edge and On-Device Agents

	A counter-current to cloud-centric agents: Apple Intelligence (October 2024 onward), Microsoft's Copilot+ PCs with local Phi models, Google's on-device Gemini Nano. Privacy benefits and offline operation; constrained context windows and reasoning capability vs frontier models. Hybrid local-cloud architectures emerging where sensitive reasoning runs locally and tool-calling delegates to cloud for capability-intensive subtasks. Apple App Intents and Android's Gemini integrations are the primary 2024-2026 substrates here.

  - ## Academic Context: Theoretical Foundations and Intellectual Lineage

	The Agentic Internet stands at the intersection of multiple research traditions, several of which extend back four decades.

	### Multi-Agent Systems (MAS)

	The classical MAS literature provides the conceptual vocabulary: **agent**, **environment**, **percept**, **action**, **utility**, **goal**, **belief-desire-intention (BDI)**, **agent communication language (ACL)**. Yoav Shoham's *Agent-Oriented Programming* (1993), Michael Wooldridge and Nicholas Jennings's foundational survey *Intelligent Agents: Theory and Practice* (Knowledge Engineering Review 1995), and the FIPA agent communication language specifications (1996-2002) established formal models of agent autonomy, social ability and pro-active behaviour. Wooldridge's textbook *An Introduction to MultiAgent Systems* (Wiley 2002, 2nd ed 2009) remains the canonical reference. Russell and Norvig's *Artificial Intelligence: A Modern Approach* (1st ed 1995, 4th ed 2020) frames agents as the unifying architecture of AI.

	### Semantic Web and Linked Data

	Tim Berners-Lee, James Hendler and Ora Lassila's *Scientific American* article 'The Semantic Web' (May 2001) explicitly envisioned autonomous agents reading machine-readable RDF to schedule appointments, find services and negotiate transactions — a near-perfect description of A2A+MCP+VC agents arriving 23-24 years later, but pursued via formal ontologies (RDF, OWL) rather than natural-language interfaces. The Semantic Web programme persisted in technical communities (W3C, ISWC conference) but never achieved consumer-internet uptake. The Agentic Internet of 2024-2026 inherits the vision while displacing the implementation layer from ontology to LLM.

	### Reinforcement Learning and Sequential Decision-Making

	The agent-as-policy framing inherited from Sutton and Barto (*Reinforcement Learning: An Introduction*, 1998, 2nd ed 2018), DeepMind's deep-RL programme (Mnih et al. DQN 2013, AlphaGo 2016, AlphaZero 2017), and contemporary RLHF (Christiano et al. 2017, Ouyang et al. InstructGPT 2022) provides the optimisation lens through which agent training is now framed.

	### Human-Computer Interaction (HCI)

	[[UCL Interaction Centre]] (UCLIC), [[Imperial College London]] HCI, [[Edinburgh Informatics]] and the international HCI community (CHI, CSCW, IUI conferences) provide the conceptual vocabulary for agent–user co-operation: mixed-initiative interaction (Horvitz 1999), conversational agents (literature spanning ELIZA 1966 through Apple Siri 2011 to ChatGPT 2022), AI-mediated communication (Hancock, Naaman & Levy 2020).

	### Tool-Use in LLMs

	Recent papers establishing the modern tool-using agent: Schick et al. *Toolformer* (NeurIPS 2023), Yao et al. *ReAct: Synergizing Reasoning and Acting* (ICLR 2023), Park et al. *Generative Agents* (UIST 2023), Wang et al. *Voyager: An Open-Ended Embodied Agent with Large Language Models* (TMLR 2024), Wu et al. *AutoGen* (2023), Significant Gravitas's *Auto-GPT* (open source, March 2023 popularising the autonomous-agent meme).

	### Computer-Use Agents

	Xie et al. *OSWorld* (NeurIPS 2024) introduced the canonical benchmark for full-OS-control agents. Koh et al. *VisualWebArena* (2024), He et al. *WebVoyager* (2024) provide browser-focused benchmarks. *Mind2Web* (Deng et al. 2023) and *AgentBench* (Liu et al. 2023) cover broader web-agent capabilities.

	### Agent Communication Standards

	FIPA-ACL (1997-2002), KQML (Finin et al. 1994), and the persistent W3C Semantic Web stack contrast with the lightweight HTTP+JSON-RPC choices of MCP/A2A. The trade-off is principled: classical ACL invested in formal semantics (speech-act theory after Searle, performatives, ontological grounding) but achieved limited adoption; MCP/A2A trade semantic rigor for developer ergonomics and assume natural language fills the gap.

	### Economics of AI-Agent Markets

	A nascent literature: Brynjolfsson and Hui *Generative AI at Work* (NBER 2023), Acemoglu *Power and Progress* (2023), Korinek and Suh *Scenarios for Capital Income and Labour Income with Transformative AI* (2024), Brynjolfsson, Mitchell and Rock on AI's impact on labour. The Stanford Digital Economy Lab, MIT IDE and UK [[Alan Turing Institute]] economics-of-AI workstream are tracking emerging agent-mediated commerce metrics.

	### Trust, Provenance and Adversarial ML

	[[Indirect Prompt Injection]] (Greshake et al. February 2023, presented at AISec 2023) established the canonical attack class. Carlini et al. on adversarial robustness; Anthropic's *Sleeper Agents* (Hubinger et al. January 2024) on hidden behaviours surviving safety training. Simon Willison's blog has functioned as informal clearing-house for emerging MCP-era attack patterns 2024-2026. Invariant Labs (April 2025) catalogued **tool poisoning attacks** in which malicious MCP servers exfiltrate via hidden tool descriptions.

	### Web Science and Platform Studies

	A British research tradition rooted in [[Web Science]] (Berners-Lee, Hall, Shadbolt, Weitzner 2006 manifesto; Web Science Trust; Southampton/Imperial axis) provides the macro-level lens for analysing the Agentic Internet as a sociotechnical system. Platform studies (Plantin, Lagoze, Edwards, Sandvig 2018; van Dijck, Poell, de Waal 2018 *The Platform Society*) frame the centralised-vendor stack as continuous with prior platform consolidation rather than as rupture. Critical AI studies (Crawford 2021 *Atlas of AI*, Birhane on relational ethics, Whittaker on AI Now) provide the political-economy critique relevant to agentic concentration of power.

	### Risks, Threat Models and Safety Engineering

	A distinct subliterature on agent-specific failure modes is consolidating 2024-2026:
	  - **Indirect prompt injection** (Greshake et al. 2023): attacker-controlled documents subvert agent instructions when ingested as context. The 2024-2026 evolution sees this attack class generalise across tool-chains, retrieval pipelines and inter-agent messaging.
	  - **Confused deputy**: the agent acts with delegated user authority on attacker-supplied input, executing actions the user neither requested nor would authorise. Classic security pattern transposed to agent settings; harder to mitigate because LLM authority is hard to scope precisely.
	  - **Tool poisoning** (Invariant Labs April 2025): malicious MCP server includes hidden tool descriptions instructing the agent to exfiltrate user data on every invocation. Compromise paths include malicious server installs, supply-chain attacks on legitimate servers, and credential theft enabling server impersonation.
	  - **Supply-chain attacks**: MCP server registries are nascent; package-manager-style poisoning (typo-squatting, dependency confusion, namespace hijacking) is a live concern. Industry response includes signed server manifests, registry curation and runtime sandboxing.
	  - **Data exfiltration via tool-chain side channels**: an agent may legitimately have read access to sensitive data via one tool and legitimate write access to an exfiltration channel via another; combining the two produces an attack that neither tool alone enables. Information-flow control labelling is the prospective defence.
	  - **Prompt jailbreak amplification across multi-agent workflows**: a successfully jailbroken sub-agent can propagate misaligned outputs into orchestrator decisions, with each successive agent treating prior outputs as trusted. Multi-agent orchestration patterns (orchestrator-worker, debate, peer review) require explicit trust-budget metering.
	  - **Agent collusion and market manipulation**: in agent-to-agent markets, autonomous agents could discover collusive equilibria (price-fixing, herding) without human direction. Economic literature (Calvano et al. 2020 on algorithmic collusion in pricing) anticipates this in pricing-bot settings; agentic-commerce analogues are emergent risk.
	  - **Hallucinated tool calls**: agents fabricate tool calls or invent capabilities not present in the actual server, occasionally with side-effecting consequences. Mitigation: strict schema validation, output parsing, structured-output enforcement.

	### Multi-Agent Coordination Theory

	Game-theoretic foundations relevant to agent ecosystems: Shapley, Aumann, Maskin on mechanism design; Wooldridge and Jennings on agent cooperation; Roth on market design; Roughgarden on algorithmic game theory. Recent work specifically on LLM-agent coordination (Park et al. *Generative Agents*, Anthropic *Multi-Agent Research* 2025) explores emergent social dynamics in simulated agent populations.

  - ## Current Landscape (2026): Productisation, Standardisation, Contention

	### Adoption Metrics (Q1 2026)
	  - **MCP servers**: 5,000+ community plus hundreds of vendor-official (Slack, Linear, GitHub, Notion, Salesforce, ServiceNow, Snowflake, AWS, Azure, GCP, Stripe, Shopify, Square, PostgreSQL, MongoDB, Sentry, Datadog, Cloudflare, etc.)
	  - **A2A-speaking agents**: ~300 vendor-published; thousands more in private enterprise deployments
	  - **Computer-using agents in production**: ChatGPT Agent, Claude Computer Use API, Gemini agentic Workspace, Operator API for businesses
	  - **Agentic commerce**: Visa Intelligent Commerce pilots in 8 markets; Mastercard Agent Pay first commercial transactions Q3 2025; Stripe Agent SDK in 50,000+ developer accounts
	  - **Anthropic Economic Index**: 24-36% of Claude.ai tasks agentic; Software Engineering, Writing, Business analysis dominant
	  - **OpenAI**: ChatGPT Agent (formerly Operator) reached 2M+ weekly active users by Q1 2026
	  - **Salesforce Agentforce**: 5,000+ customer organisations; per-conversation revenue model contributing to FY26 revenue growth
	  - **Enterprise spend on agentic AI**: Gartner Q1 2026 forecasts $58B in 2026 vs $14B 2024
	  - **Browser-agent traffic share**: Cloudflare Q1 2026 radar data showing agentic traffic at 4-6% of HTTP requests at participating publishers, up from <0.5% Q1 2024

	### Standards Landscape

	The protocol space is now multi-vendor and partly fragmented:
	  - **MCP** (Anthropic-led, Linux Foundation governance Q2 2025): tool/data connection layer; de facto winner of its niche
	  - **A2A** (Google-led, 50+ partners, vendor-neutral working group): agent-to-agent layer; rapidly consolidating
	  - **AGNTCY ACP/OASF** (Linux Foundation): partly overlaps MCP/A2A with stricter capability schemas
	  - **Apple App Intents**: dominant on iOS/macOS for OS-mediated agent flows
	  - **W3C DIDs / VC Data Model 2.0**: identity primitives; uptake accelerating with eIDAS 2.0 EU Digital Identity Wallet rollout 2026
	  - **OAuth 2.1 + dynamic client registration for agents**: IETF working draft; foundation for MCP's authorisation flow
	  - **OpenAI function-calling** (legacy), **Anthropic tool-use**: model-native variants; bidirectional bridges to MCP

	### Web-Economic Disruption

	The clearest material impact is on the **publisher economy** and **search-driven advertising**:
	  - **SimilarWeb (Q1 2025)**: 28% YoY decline in publisher referral traffic 2024
	  - **Authoritas / Ahrefs**: AI Overviews appearing in 18-25% of US queries Q1 2025; CTR drops on informational queries 18-64%
	  - **Pew Research (July 2025)**: AI Overviews reduce click-through 30-50% on informational queries
	  - **SparkToro**: 58% of Google US searches end without a click (May 2024); subsequently risen with AI Overviews expansion
	  - **News Corp v Perplexity** (lawsuit October 2024); **NYT v OpenAI** (December 2023, ongoing); **Wiley/Penguin/HarperCollins** content licensing deals 2024-2025
	  - **Cloudflare AI Audit** (September 2024) and **Pay-Per-Crawl** (July 2025) — operator-side response giving publishers granular control over AI scraping including agent traffic

	### The Three-Stack Contention

	Three architectural ideologies now compete:
	1. **Centralised vendor stack** (Anthropic+OpenAI+Google+Microsoft+Salesforce): MCP+A2A+OAuth+fiat rails; pragmatic, fast, dominant in market share
	2. **Open-source vendor-neutral stack** (AGNTCY, LangChain, Linux Foundation): same protocols but governance-distributed; growing in enterprise where vendor neutrality is procurement-critical
	3. **Decentralised crypto-economic stack** (ASI Alliance, Bittensor, Ritual, Nostr+Bitcoin+Lightning+RGB): DIDs+VCs+token rails; censorship-resistant; smaller but ideologically distinct community

	The stacks are not fully exclusive — a single agent may speak MCP for tools, A2A for collaboration and accept payment via Visa Intelligent Commerce or Bitcoin Lightning depending on counterparty. But identity and economic-rail choices propagate strong dependencies, so most production systems pick a primary stack.

  - ## UK Context: Academic Leadership and Industrial Adoption

	The United Kingdom contributes disproportionately to the foundational research underpinning the Agentic Internet and is consolidating policy positions that materially shape global deployment.

	### Academic Institutions

	**[[Imperial College London]] — Web Science and Data Science Institute**:
	  - Imperial Centre for Web Science maintains long-standing links to the Web Science Trust (founded 2006 by Tim Berners-Lee, Wendy Hall, Nigel Shadbolt and Daniel Weitzner) headquartered partly at Southampton with Imperial as core institutional partner. Wendy Hall's elevation to Royal Society Fellow 2009 and Regius Professor of Computer Science (2018) anchors the UK position on agentic-web governance.
	  - Imperial Data Science Institute hosts research on agent evaluation, robustness and multi-agent coordination. Connections to [[Alan Turing Institute]] (founded 2015 with Imperial as a founding partner alongside Cambridge, Edinburgh, Oxford, UCL and Warwick).
	  - Imperial spin-out activity in AI agents includes alumni-founded companies in software-engineering agents and enterprise agent orchestration.

	**[[University College London]] — UCL Interaction Centre (UCLIC) and Computer Science**:
	  - UCLIC research on AI-mediated communication, mixed-initiative interaction, agent–user trust calibration.
	  - UCL DARK Lab (Tim Rocktäschel) on agentic reinforcement learning and open-ended agents.
	  - UCL AI Centre (Sir John Shawe-Taylor, David Barber) on probabilistic reasoning under tool-use.
	  - £80M UCL AI Hub investment (2024).

	**[[University of Edinburgh]] — School of Informatics**:
	  - Edinburgh holds the strongest historical MAS heritage in the UK: Alex Lascarides and Henry Thompson on dialogue agents and discourse semantics; Robin Cohen (visiting); links to the broader UK MAS community through AAMAS conference participation.
	  - Institute for Language, Cognition and Computation (ILCC), Anthropology, Neuroscience and Cognition (ANC), and AI and its Applications Institute (AIAI).
	  - Edinburgh produced founders of [[Gensyn]] (decentralised compute marketplace).
	  - £2.4M EPSRC Centre for Doctoral Training in NLP cohorts now producing agent-focused PhD output.

	**[[University of Cambridge]] — Computer Laboratory and Centre for Future of Intelligence (CFI)**:
	  - CFI established 2016 with Leverhulme funding; research on agent safety, multi-agent dynamics, philosophy of agent identity (Henry Shevlin, Stephen Cave, Beth Singler).
	  - Cambridge Centre for the Study of Existential Risk (CSER) work on agent risk surface.
	  - DeepMind Cambridge office; Cambridge spinouts including [[Wayve]] (autonomous-vehicle agents) and [[FiveAI]].

	**[[University of Oxford]] — Department of Computer Science**:
	  - Oxford Internet Institute (OII): research on web economics, platform governance, content moderation now extending to agent governance.
	  - AI Safety Institute (AISI) collaborations on agent evaluation.
	  - Yarin Gal's OATML on uncertainty-aware agents; Michael Wooldridge (Oxford since 2012, former Head of Department) — author of the canonical *Intelligent Agents* text; brings MAS heritage to current LLM-agent debates.

	**[[University of Manchester]] — Department of Computer Science and Manchester Metropolitan University**:
	  - Hartree Centre (STFC, Daresbury but Manchester-affiliated) for AI/HPC including agent training.
	  - Manchester ranked **#1 AI-ready city in the UK** per SAS 2025 readiness assessment.
	  - Manchester is a focal point for Northern English agentic-AI industrialisation.

	**[[University of Southampton]]**:
	  - Co-founder of Web Science Trust; ECS retains MAS and Semantic Web heritage (Nick Jennings's group historically; Nigel Shadbolt).

	### UK Industry and Public Sector

	**[[BBC R&D]]**:
	  - Responsible AI Principles published December 2024 with specific governance for agents acting on behalf of audiences.
	  - Object-Based Media research at Salford MediaCityUK testing agent-mediated personalisation.
	  - BBC News policies on AI-assisted journalism (December 2024) frame editorial responsibility under agentic search displacement of referral traffic.

	**[[GDS Agent Strategy]] — Government Digital Service**:
	  - GDS Discovery on agentic services 2024-2025; pilots within Cabinet Office on internal agent-mediated workflows.
	  - **[[AI Opportunities Action Plan]]** (Matt Clifford, 50 recommendations, published January 2025): includes 'AI in Government Service Delivery' workstream with agentic adoption in DWP, HMRC, NHS pilots.
	  - One Big Thing (autumn 2024 civil-service learning programme) on generative AI included agent literacy.

	**[[AI Security Institute]] (AISI, renamed from AI Safety Institute Feb 2025)**:
	  - ~£100M/year budget, ~100 staff under DSIT.
	  - Inspect framework (open source, May 2024) provides agent evaluation including computer-use, tool-use and multi-step planning.
	  - MOUs with Anthropic, OpenAI, Google DeepMind for pre-deployment evaluation; specifically tests agentic capabilities including cybersecurity uplift, autonomous replication, deceptive alignment.

	**[[Alan Turing Institute]]**:
	  - CETaS (Centre for Emerging Technology and Security) on agent security risks.
	  - Public Policy Programme on agentic governance.
	  - £100M Government investment confirmed 2024.

	**UK Enterprise Adoption**:
	  - HSBC, Lloyds, Barclays, NatWest deploying agentic customer-service and AML triage (partnerships with Salesforce, Microsoft, Anthropic).
	  - John Lewis Partnership shopping-agent pilots Q3 2025.
	  - Ocado Technology agent-based warehouse coordination (long-running Edinburgh and Hatfield research).
	  - DeepMind London (~1,500 staff Q1 2026) drives Gemini agentic capabilities and Project Mariner.
	  - Synthesia (London, $2.1B Series D January 2025), Wayve, Stability AI (in restructuring 2024-2025), [[ElevenLabs]] (London-registered, US-headquartered), [[PolyAI]] (London) supply foundational agent components.

	### Northern English Industrial Hubs

	  - **Manchester**: Health Innovation Manchester deploying agentic clinical workflows; MediaCityUK BBC R&D; Manchester Science Park agent-AI start-ups; £30B+ in Northern English Growth Zone commitments announced 2024-2025 including Newcastle/Blackstone £10B Blyth data centre and Leeds Microsoft £330M.
	  - **Leeds**: Teaching Hospitals NHS Trust agentic pathology and radiology; Channel 4 HQ digital-agent pilots; Leeds Computing Department NLP heritage.
	  - **Sheffield**: AMRC (Advanced Manufacturing Research Centre) industrial agentic automation pilots with Boeing, Rolls-Royce, Siemens; Sheffield NLP group output on agent benchmarking.
	  - **Newcastle**: NICD (National Innovation Centre for Data), Digital Catapult North East, Northumbria University HCI research on conversational and embodied agents; £10B Blackstone Blyth data centre anchoring North East AI compute.
	  - **Liverpool**: Liverpool City Region AI Foundation Models cluster; Knowledge Quarter Innovation District.

	### UK Regulatory Posture

	  - **Pro-innovation principles-based** approach per AI Regulation White Paper (2023) maintained under Labour government 2024-present; sectoral regulators (CMA, FCA, MHRA, Ofcom, ICO) responsible for in-scope AI/agent deployment.
	  - **CMA AI Foundation Models** initial report April 2024; competition focus on agentic-stack lock-in implications.
	  - **Online Safety Act 2023** in force; Ofcom enforcement role extending to AI-generated content including agent-produced outputs; age-assurance live 25 July 2025.
	  - **ICO** guidance on automated decision-making (Article 22 GDPR equivalent) and agents acting on behalf of data subjects; biometric and emotion-recognition prohibitions tracking EU AI Act Article 5.
	  - **Bletchley Declaration** (1 November 2023, hosted UK Bletchley Park, 28 nations + EU) → Seoul (May 2024) → Paris (Feb 2025) → India (2026) summit cycle remains UK-anchored.

  - ## Future Directions (2026-2030)

	### Standardisation Convergence

	By 2027 MCP+A2A or successor protocols are expected to consolidate to two-or-three dominant standards with W3C, IETF and Linux Foundation governance distributed across them. Pressure points: (a) reconciling MCP's elicitation model with A2A's Task lifecycle for nested agent-of-agents flows; (b) standardising AgentCard/server discovery (DNS-based, registry-based, or peer-to-peer); (c) production-ready DID method selection for agent identity (did:web, did:plc, did:peer competing); (d) ratifying OAuth 2.1 finalisation with first-class agent semantics.

	### Agent Identity and Authorisation

	**[[Decentralized Identifiers]]** and **[[Verifiable Credentials]]** mature into the default identity primitives for agents acting across organisational boundaries. Trust over IP Foundation governance frameworks and eIDAS 2.0 EU Digital Identity Wallet provide compliance scaffolding. Anthropic, Google and Microsoft propose 'AgentVC' profile for delegated authority claims by 2027. Capability tokens — sub-OAuth-scope per-tool-call authorisations — emerge as a distinct primitive complementing OAuth scopes.

	### Agentic Commerce Maturation

	Visa Intelligent Commerce and Mastercard Agent Pay expand from pilots to GA across major markets by 2027. Programmable spending limits, agent-specific liability, and per-transaction provenance attestations become standard. Stripe, Adyen, Checkout.com, PayPal and crypto-native (Coinbase, Circle USDC) rails converge on common agent-identity standards. By 2030 agent-mediated B2B procurement reaches 15-25% of indirect-spend volume in technology-forward sectors. Cumulative annual agentic-commerce flows projected at **$1.5-3T globally by 2030**.

	### Web Economics Restructuring

	The publisher economy and search-advertising economy continue restructuring. Content licensing replaces ad-funded distribution as primary monetisation for high-value publishers (NYT, Wall Street Journal, FT, News Corp, Wiley, Springer Nature). Cloudflare Pay-Per-Crawl, Tollbit, and emerging machine-readable paywall standards (HTTP 402, x402, L402) enable per-request monetisation. SEO economy contracts; AEO (Answer Engine Optimisation) and 'agent-optimisation' (structured product/service feeds for agents) emerge as new disciplines.

	### Trust, Safety and Liability

	Agent-specific risks attract regulatory attention. EU AI Act provisions (Article 5 prohibitions, Article 6 high-risk classification) extended via implementing acts to cover agentic systems. UK AISI agent-evaluation framework adopted internationally. Liability standards emerge for agent providers (model labs), orchestration platforms, MCP server operators and principals. Insurance products for agent-mediated commerce emerge by 2027-2028.

	### Threat Surface and Defences

	**Indirect prompt injection**, **tool poisoning**, **confused deputy** and **agent supply-chain attacks** remain materially unsolved as of 2026. Defensive techniques in active research: (a) capability-based sandboxing; (b) information-flow control labelling tool outputs as 'untrusted'; (c) constitutional-AI-style safety training specifically for tool-use; (d) cryptographic attestation of MCP server provenance; (e) human-in-the-loop confirmation gates for high-impact actions; (f) trust-budget metering. Anthropic, Google DeepMind and DeepSeek published agent-safety research throughout 2025.

	### Multi-Agent Societies

	The transition from single-agent assistants to multi-agent ecosystems accelerates. Orchestrator-worker architectures (Anthropic Research May 2025) demonstrate measurable quality gains. By 2028 most enterprise agent deployments are expected to comprise 5-50 specialised agents coordinating via A2A. Emergent challenges: coordination overhead, agent-of-agents prompt injection, blame attribution in failures, market dynamics within agent ecosystems (price-fixing, collusion, herding).

	### Decentralised Alternatives

	The ASI Alliance, Bittensor and Bitcoin+Lightning+Nostr stacks continue developing as ideological and technical counterweights. Adoption likely remains niche (1-5% of total agent economy) but provides important pressure on the centralised vendor stack and offers refuge for use cases incompatible with platform-vendor terms.

	### Long-Run Web Architecture

	By 2030 a defensible projection: ~30-50% of human-perceived web interaction is mediated by agents; ~5-15% of total HTTP requests come from non-human user agents (up from <1% in 2023); browsers persist as developer and edge-case tools but lose centrality. The 'web' as a noun increasingly denotes a protocol substrate for agent-mediated execution rather than a human-perceived information space. The 2024-2026 protocol decisions (MCP, A2A, OAuth 2.1, DIDs, VCs) become as foundational as TCP/IP, HTTP and TLS were for the 1990s-2010s web.

	### Agentic Search and the Replacement of the Query

	Search itself is restructuring. The classical query-result-click loop is being supplanted by goal-directed agent flows: the user expresses an objective, the agent decomposes into queries-as-tool-calls, retrieves and synthesises, and presents an answer or executes a transaction. By 2028 a majority of consumer 'search' actions on knowledge-class queries are expected to terminate without a click on a publisher result. Publisher counter-strategies include (a) direct AI-licensing deals (NYT-Amazon May 2025, News Corp-OpenAI, Reddit-Google, Wiley-OpenAI), (b) machine-readable paywalls (HTTP 402 derivatives, Tollbit, Cloudflare Pay-Per-Crawl, L402, x402), (c) high-trust verticals where brand and editorial accountability remain rewarded, and (d) agent-readable structured feeds (sitemaps, JSON-LD product feeds, MCP-server-as-publisher).

	### Convergence and Divergence Pressures

	**Convergence pressures** (forcing standards consolidation): enterprise procurement demands vendor-neutral protocols; developer ergonomics rewards a small number of dominant choices; security and audit benefit from common abstractions; cross-vendor agent collaboration requires shared lingua franca.

	**Divergence pressures** (slowing or fragmenting standardisation): platform vendors capture rents from proprietary extensions; regulatory regimes (EU vs US vs UK vs China) impose distinct identity and content provenance rules; the decentralised-crypto stack maintains independent rails for ideological and architectural reasons; vertical-specific protocols emerge for regulated industries (healthcare, finance, legal).

	The likely 2028-2030 equilibrium is a layered settlement: MCP-class protocols for tool/data connection (one or two dominant variants), A2A-class for agent-to-agent (one or two dominant variants), DIDs+VCs for portable identity (multiple coexisting DID methods), OAuth 2.1+capability-tokens for authorisation (well-standardised), and a balkanised payment layer where Visa/Mastercard, Stripe-aligned alternatives, PayPal/Coinbase and crypto rails each occupy distinct niches.

	### The Open Question of Principal–Agent Alignment

	A fundamental theoretical and practical question persists: when an agent acts 'on behalf of' a principal, how is the principal's intent represented, preserved and verified across long horizons and multiple sub-agents? Classical economic principal-agent theory (Holmström, Tirole) studied human agents with limited but legible motivations; LLM agents have neither stable preferences nor legible internal reasoning. Active research areas: (a) **constitutional approaches** specifying behavioural constraints declaratively; (b) **intent inference and clarification** via elicitation protocols (MCP 2025-06-18 elicitation feature); (c) **verifiable computation** attesting that an agent followed declared procedure; (d) **process supervision and chain-of-thought monitoring** detecting deceptive or misaligned reasoning; (e) **interpretability tools** producing post-hoc explanations of agent decisions. None are production-mature in 2026; partial solutions ship in evaluation frameworks (UK AISI Inspect, Anthropic Responsible Scaling Policy, OpenAI Preparedness Framework) and in vendor-specific safety mitigations.

  - ## Research and Literature

	**Protocol Specifications and Reference Implementations**:
	1. Anthropic (2024). *Introducing the Model Context Protocol*. Press release and specification, 25 November 2024. https://www.anthropic.com/news/model-context-protocol
	2. Model Context Protocol Working Group (2025). *MCP Specification 2025-06-18*. https://modelcontextprotocol.io/
	3. Google (2025). *Announcing the Agent2Agent Protocol (A2A)*. Cloud Next blog, 9 April 2025. https://google.github.io/A2A/
	4. AGNTCY Collective (2025). *Agent Connect Protocol (ACP) and Open Agent Schema Framework (OASF) specifications*. https://agntcy.org/

	**Foundational Multi-Agent and Web Architecture Texts**:
	5. Wooldridge, M., & Jennings, N.R. (1995). Intelligent agents: Theory and practice. *Knowledge Engineering Review*, 10(2), 115-152.
	6. Wooldridge, M. (2009). *An Introduction to MultiAgent Systems* (2nd ed.). Wiley.
	7. Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. *Scientific American*, 284(5), 34-43.
	8. Russell, S., & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.

	**Tool-Use and Agentic LLMs**:
	9. Schick, T., Dwivedi-Yu, J., Dessì, R., et al. (2023). Toolformer: Language models can teach themselves to use tools. *NeurIPS 2023*.
	10. Yao, S., Zhao, J., Yu, D., et al. (2023). ReAct: Synergizing reasoning and acting in language models. *ICLR 2023*.
	11. Wu, Q., Bansal, G., Zhang, J., et al. (2023). AutoGen: Enabling next-gen LLM applications via multi-agent conversation. *arXiv:2308.08155*.
	12. Park, J.S., O'Brien, J.C., Cai, C.J., et al. (2023). Generative agents: Interactive simulacra of human behavior. *UIST 2023*.

	**Computer-Use and Web-Agent Benchmarks**:
	13. Xie, T., Zhang, D., Chen, J., et al. (2024). OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments. *NeurIPS 2024*.
	14. He, H., Yao, W., Ma, K., et al. (2024). WebVoyager: Building an end-to-end web agent with large multimodal models. *ACL 2024*.
	15. Deng, X., Gu, Y., Zheng, B., et al. (2023). Mind2Web: Towards a generalist agent for the web. *NeurIPS 2023*.
	16. Anthropic (2024). *Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku*. 22 October 2024. https://www.anthropic.com/news/3-5-models-and-computer-use

	**Product Announcements (Primary Sources)**:
	17. OpenAI (2025). *Introducing Operator*. 23 January 2025. https://openai.com/index/introducing-operator/
	18. Salesforce (2024). *Salesforce announces Agentforce: A new generation of autonomous AI agents*. 12 September 2024. https://www.salesforce.com/news/press-releases/2024/09/12/agentforce-news/
	19. Google DeepMind (2024). *Project Mariner: Exploring an experimental agent in Chrome*. 11 December 2024. https://blog.google/technology/google-deepmind/project-mariner/
	20. Visa (2025). *Visa unveils new era of commerce in the age of AI*. Press release, 30 April 2025.
	21. Mastercard (2025). *Introducing Mastercard Agent Pay: Pioneering agentic payments*. Press release, 29 April 2025.

	**Identity, Trust and Authorisation**:
	22. W3C (2022). *Decentralized Identifiers (DIDs) v1.0*. W3C Recommendation, 19 July 2022. https://www.w3.org/TR/did-core/
	23. W3C (2025). *Verifiable Credentials Data Model v2.0*. W3C Recommendation, May 2025. https://www.w3.org/TR/vc-data-model-2.0/
	24. IETF OAuth Working Group (2024-2025). *The OAuth 2.1 Authorization Framework* (draft-ietf-oauth-v2-1-12).

	**Security and Adversarial Considerations**:
	25. Greshake, K., Abdelnabi, S., Mishra, S., et al. (2023). Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. *AISec 2023*.
	26. Invariant Labs (2025). *MCP security: Tool poisoning attacks*. Blog post, April 2025. https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks
	27. Hubinger, E., Denison, C., Mu, J., et al. (Anthropic, 2024). Sleeper agents: Training deceptive LLMs that persist through safety training. *arXiv:2401.05566*.

	**Policy, Governance and Economic Analysis**:
	28. Clifford, M. (2025). *AI Opportunities Action Plan*. UK Government (DSIT/Cabinet Office), 13 January 2025. https://www.gov.uk/government/publications/ai-opportunities-action-plan

  - ## Glossary of Key Terms

	  - **MCP (Model Context Protocol)**: Anthropic-originated open standard (Nov 2024) for connecting AI models to tools/data via JSON-RPC over stdio or HTTP+SSE. Three primitive types: resources, tools, prompts. 'USB-C for AI'.
	  - **A2A (Agent-to-Agent Protocol)**: Google-originated open standard (April 2025) for cross-vendor agent collaboration. AgentCard discovery, Task lifecycle, HTTP+JSON-RPC+SSE.
	  - **AgentCard**: A2A JSON document at `/.well-known/agent.json` describing an agent's capabilities, authentication and endpoints.
	  - **Computer-Using Agent (CUA)**: agent that operates conventional software by interpreting screenshots and emitting synthetic input.
	  - **AGNTCY**: Linux Foundation collective (Cisco, LangChain, Galileo + others, March 2025) publishing ACP, OASF, Agent Gateway Protocol.
	  - **DID (Decentralized Identifier)**: W3C Recommendation (2022) for self-sovereign, cryptographically verifiable identifiers independent of any centralised registry.
	  - **VC (Verifiable Credential)**: W3C Recommendation (Data Model 2.0, May 2025) for tamper-evident credentials presentable across trust domains.
	  - **Capability Token**: a fine-grained authorisation primitive scoped to specific tool calls or actions, complementing broader OAuth scopes.
	  - **Confused Deputy**: classic security attack class where an authorised entity (the agent) is tricked into misusing its authority on attacker-controlled inputs.
	  - **Indirect Prompt Injection**: attack class (Greshake et al. 2023) where adversarial content in ingested documents subverts agent instructions.
	  - **Tool Poisoning**: attack class (Invariant Labs 2025) where a malicious MCP server exfiltrates user data via hidden tool descriptions.
	  - **Agentic Commerce**: payments and transactions executed by agents on behalf of principals; rails include Stripe Agent SDK, Visa Intelligent Commerce, Mastercard Agent Pay.
	  - **Agentic Economic Index**: Anthropic's published metric series (first release March 2025) tracking the share of Claude.ai workloads that are agentic in character.

  - ## Metadata

	  - **Last Updated**: 2026-05-16
	  - **Review Status**: Comprehensive editorial review
	  - **Verification**: 2024-2026 protocol releases, vendor product announcements and academic citations cross-referenced; Anthropic MCP, Google A2A, OpenAI Operator, Anthropic Computer Use, Salesforce Agentforce, Google Project Mariner, AGNTCY launch, Visa Intelligent Commerce, Mastercard Agent Pay primary-source-verified
	  - **Domain Correction**: IRI namespace coherence-corrected from generic `ontology#AgenticInternet` to `artificial-intelligence#AgenticInternet`. Domain `artificial-intelligence` retained as primary; the Bitcoin/Nostr/RGB material from the pre-enrichment stub is preserved as the decentralised-alternative-stack subsection rather than as the primary framing. The page now ontologically locates Agentic Internet as an AI-grounded sociotechnical substrate with cross-domain bridges to blockchain and web architecture.
	  - **legacy-term-id**: AI-1029 assigned
	  - **Regional Context**: UK academic (Imperial Web Science / Wendy Hall, UCL UCLIC, Edinburgh Informatics MAS heritage / Gensyn lineage, Cambridge CFI/CSER, Oxford OII/Wooldridge, Manchester / Southampton WST), UK industry (BBC R&D, GDS, AISI, Turing, DeepMind London, Synthesia, Wayve, PolyAI, ElevenLabs), Northern English industrial hubs (Manchester #1 AI-ready city, Leeds Microsoft £330M, Sheffield AMRC, Newcastle £10B Blackstone Blyth) detailed
	  - **Production-Ready**: Complete OWL formal semantics (45 SubClassOf axioms across Compositional / Dependency / Capability / Implementation / Reduction / Contrast / Property-Constraint families plus annotations and property characteristics), comprehensive content coverage (definition, components/architecture, use cases, academic context, 2026 landscape, UK context, future directions 2026-2030, references)
	  - **Authority Score**: 0.87 (foundational 2024-2026 protocol substrate, well-attested primary sources, broad enterprise deployment, active research community, plausible 2030 projections grounded in observed trajectories)

- ### Provenance
  - sources:: [[Anthropic MCP Specification 2024]], [[Google A2A Protocol 2025]], [[OpenAI Operator Launch 2025]], [[Anthropic Computer Use 2024]], [[Salesforce Agentforce Launch 2024]], [[Google Project Mariner 2024]], [[AGNTCY Collective Launch 2025]], [[Visa Intelligent Commerce 2025]], [[Mastercard Agent Pay 2025]], [[Stripe Agent SDK 2025]], [[Wooldridge Intelligent Agents 1995]], [[Berners-Lee Hendler Lassila Semantic Web 2001]], [[Russell Norvig AIMA 4th Edition]], [[Schick Toolformer NeurIPS 2023]], [[Yao ReAct ICLR 2023]], [[Wu AutoGen 2023]], [[Park Generative Agents UIST 2023]], [[Xie OSWorld NeurIPS 2024]], [[He WebVoyager ACL 2024]], [[Deng Mind2Web NeurIPS 2023]], [[W3C DID Core v1.0 2022]], [[W3C VC Data Model v2.0 2025]], [[IETF OAuth 2.1 Draft]], [[Greshake Indirect Prompt Injection AISec 2023]], [[Invariant Labs MCP Tool Poisoning 2025]], [[Anthropic Sleeper Agents 2024]], [[UK AI Opportunities Action Plan Clifford 2025]], [[BBC R&D Responsible AI Principles 2024]], [[Anthropic Economic Index 2025]]
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-16T21:00:00Z
  - enrichment-worker:: claude-opus-4-7