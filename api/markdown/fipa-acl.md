- ### Definition
  - [[FIPA ACL]] (Foundation for Intelligent Physical Agents Agent Communication Language) is the canonical standard [[Agent Communication Language]] for [[Inter-Agent Communication]] in [[Multi-Agent System|multi-agent systems]], defining a structured message format and a library of 22 typed performative acts that enable autonomous software agents to exchange information, coordinate tasks, negotiate commitments, and propagate beliefs regardless of their internal architecture or implementation technology. Rooted in [[Speech Act Theory]] as formalised by Austin (1962) and Searle (1969) — which holds that every utterance is simultaneously a locution (an expression), an illocution (an act performed by speaking), and a perlocution (an effect on the hearer) — FIPA ACL maps the illocutionary dimension onto typed communicative acts called performatives: each performative carries pre-conditions that must hold for it to be felicitously issued (the sending agent's mental state), a rational effect that is the change in the receiving agent's mental state the sender intends to produce, and a content schema specifying what propositions or action expressions may appear in the message body. A FIPA ACL message is a structured object whose outer envelope, specified in SC00061G, carries thirteen named parameters including the mandatory performative field, the sender and receiver agent identifiers, the content field encoding the propositional content of the message, the language parameter identifying the content language (such as SL, Prolog, or KIF), the encoding scheme, the [[Ontology]] that gives the terms in the content field their meaning, and a conversation-id linking this message to a broader [[Interaction Protocol]] such as the [[Contract Net Protocol]] or request-response. The standard was authored by the Foundation for Intelligent Physical Agents — a Swiss not-for-profit consortium founded in Geneva in 1996 by industrial and academic members including Fujitsu, Hitachi, NEC, Nortel, and British Telecom — and published in its final form in December 2002 as three companion specifications (SC00061G for message structure, SC00037J for the communicative act library, and SC00008I for the Semantic Language content language). Following the dissolution of the FIPA organisation in 2005, the three specifications were inherited by the IEEE Computer Society Standards Activities Board, where they remain the authoritative normative reference for typed-performative [[Agent Communication Language]] design, influencing the architectural thinking behind contemporary [[Inter-Agent Communication]] frameworks including [[Model Context Protocol]] and [[Agent2Agent Protocol]] despite lacking direct syntactic compatibility with either. FIPA ACL achieves semantic interoperability between agents that may differ in reasoning architecture, programming language, and deployment platform by requiring that all parties share a common [[Ontology]] for the domain vocabulary used in message content and a common understanding of the content language's syntax and semantics, so that the meaning of a message is fully recoverable from its structure plus the agreed ontology, without recourse to proprietary parsing or platform-specific conventions.

- ### Semantic Classification
  - owl-class:: ai:FIPAACL
  - owl-role:: CommunicationProtocol | InteroperabilityStandard | AgentLanguage
  - owl-inferred:: ai:AgentCommunicationLanguage, ai:InterAgentProtocol, ai:SpeechActSystem, ai:DistributedCoordinationMechanism
  - belongs-to-domain:: [[Multi-Agent System]], [[Distributed Systems]], [[AI-GroundedDomain]]
  - implemented-in-layer:: [[ProtocolLayer]], [[CommunicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Agent Communication Language]], [[Communication Protocol]], [[Inter-Agent Communication]]
  - has-part:: [[Performative]], [[Message Envelope]], [[Interaction Protocol]], [[Content Language]], [[Ontology]], [[Contract Net Protocol]], [[Conversation Identifier]]
  - requires:: [[Ontology]], [[Speech Act Theory]], [[Message Passing]], [[Knowledge Interchange Format]], [[Agent Platform]]
  - enables:: [[Multi-Agent Coordination]], [[Interoperability]], [[Distributed Decision Making]], [[Contract Net Protocol]], [[Agentic Workflow]], [[Autonomous Agent]], [[Multi-Agent Orchestration]], [[Negotiation Protocol]], [[Task Delegation]]
  - implements:: [[Speech Act Theory]], [[Communication Protocol]], [[Inter-Agent Communication]], [[Interaction Protocol]], [[Message Passing]]
  - depends-on:: [[Distributed Systems]], [[Autonomous Agent]], [[Agent Platform]], [[Ontology]], [[Message Passing]], [[Knowledge Interchange Format]]
  - supports:: [[Autonomous Agent]], [[Agent]], [[Agent Platform]], [[Multi-Agent System]], [[CLI Multi-Agent Systems]], [[Distributed Decision Making]]
  - uses:: [[Ontology]], [[Knowledge Interchange Format]], [[Message Passing]], [[Semantic Web]], [[OWL 2 Web Ontology Language]]
  - contrasts-with:: [[KQML]], [[Model Context Protocol]], [[Agent2Agent Protocol]], [[REST API]], [[gRPC]]
  - related-to:: [[Agent Communication Language]], [[Communication Protocol]], [[Semantic Web]], [[Agent2Agent Protocol]], [[Model Context Protocol]], [[Distributed Systems]], [[Multi-Agent Orchestration Frameworks]], [[Distributed Decision Making]], [[Inter-Agent Communication]], [[BDI Agent Architecture]], [[Multi-Agent Reinforcement Learning]], [[Distributed Collaboration]]
  - standardized-by:: [[IEEE]], [[Standards]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:Performative))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:MessageEnvelope))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:InteractionProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:ContentLanguage))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:Ontology))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:ContractNetProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:hasPart ai:ConversationIdentifier))

  ## Dependency Relationships
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:requires ai:Ontology))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:requires ai:SpeechActTheory))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:requires ai:MessagePassing))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:requires ai:AgentPlatform))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeInterchangeFormat))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:dependsOn ai:DistributedSystems))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:dependsOn ai:AutonomousAgent))

  ## Capability Relationships
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:enables ai:MultiAgentCoordination))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:enables ai:Interoperability))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:enables ai:DistributedDecisionMaking))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:enables ai:ContractNetProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:supports ai:AutonomousAgent))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:supports ai:AgentPlatform))

  ## Implementation Relationships
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:implements ai:SpeechActTheory))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:implements ai:CommunicationProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:implements ai:InterAgentCommunication))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:uses ai:Ontology))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeInterchangeFormat))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:uses ai:MessagePassing))

  ## Reduction Relationships
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:reducesTo ai:AgentCommunicationLanguage))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:reducesTo ai:CommunicationProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:contrastsWith ai:KQML))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:contrastsWith ai:ModelContextProtocol))
      SubClassOf(ai:FIPAACL
        ObjectSomeValuesFrom(ai:bridgesTo ai:SemanticWeb))

  ## About

  FIPA ACL occupies a singular position in the history of agent communication standards: it is the most formally grounded, most broadly adopted classical [[Agent Communication Language]], and simultaneously the most instructive example of how theoretical elegance and practical adoption sometimes diverge in software engineering history. Its intellectual lineage begins with [[Speech Act Theory]], a philosophy of language developed by J. L. Austin in his 1962 Oxford lectures (published posthumously as "How to Do Things with Words") and systematised by John Searle in "Speech Acts" (1969). The core insight is that language is not merely a vehicle for transmitting information about external states of affairs but is itself a form of action: saying "I promise to deliver this by Friday" does not describe a promise but constitutes the promise. Searle's taxonomy of illocutionary acts — representatives (asserting), directives (requesting), commissives (promising), expressives (declaring mental state), and declarations (changing institutional reality) — provided the conceptual scaffold on which KQML and subsequently FIPA ACL constructed their performative libraries.

  The immediate predecessor to FIPA ACL was KQML (Knowledge Query and Manipulation Language), developed by the DARPA Knowledge Sharing Effort in the early 1990s (Finin et al., 1994). KQML was influential but suffered from a critical defect: it specified the syntax of performative messages but provided no formal semantics defining what an agent must believe, desire, or intend in order to legitimately issue a given performative, or what the recipient was rationally entitled to infer from receiving one. Different implementations of KQML interpreted the same performative differently, undermining the interoperability that was the protocol's primary goal. FIPA set out to correct this by grounding each communicative act in a formal semantics based on modal logic: the FIPA Semantic Language (SL) and the associated semantic framework specified pre-conditions and rational effects in terms of modal operators B (belief), U (uncertainty), D (desire), and I (intention) over the agent's own mental state and its beliefs about the receiver's mental state. This made FIPA ACL dramatically more formally rigorous than KQML: the inform performative, for instance, requires that the sender believe the proposition in the content to be true, believe that the receiver does not already know it, and not believe that the receiver would refuse to be informed — conditions that are precisely stated and in principle verifiable against a formal model, even if verification in practice is typically left to engineering conventions.

  The institutional history of FIPA reflects the dynamics of standardisation in a rapidly evolving field. Founded in Geneva in 1996 with strong industrial sponsorship from Japanese electronics majors, Canadian telecommunications firms, and European research groups, FIPA produced eleven annual specification releases before publishing its final consolidated specifications in December 2002. The three specifications that constitute the canonical FIPA ACL standard — SC00061G (message structure), SC00037J (communicative act library), and SC00008I (semantic language) — were the product of six years of intensive standardisation work involving dozens of organisations. Somewhat unexpectedly, FIPA then dissolved its Swiss legal entity in 2005, transferring the intellectual property and normative authority of its specifications to the IEEE Computer Society Standards Activities Board, where they remain the reference standard. The practical consequence of this transition is that FIPA ACL specifications are still normatively active IEEE standards, available from the IEEE Computer Society, and cited in new work — particularly in the power systems and smart grid domain where JADE (Java Agent DEvelopment Framework) remains in active industrial deployment.

  ## Components / Architecture

  **Message Structure (SC00061G)**

  The FIPA ACL message structure defines thirteen named parameters, all optional except the performative:

  - **performative**: Mandatory. One of the 22 typed communicative acts from SC00037J: inform, request, query-if, query-ref, subscribe, request-when, request-whenever, cfp (call for proposals), propose, accept-proposal, reject-proposal, counter-proposal, agree, cancel, inform-if, inform-ref, not-understood, disconfirm, proxy, propagate, recruit, failure.
  - **sender**: An agent identifier in the form of a transport-layer address or symbolic name resolvable via the Directory Facilitator.
  - **receiver**: One or more agent identifiers of the intended message recipients.
  - **reply-to**: The agent identifier to which replies to this message should be directed, if different from sender.
  - **content**: The propositional content of the message, encoded in the language identified by the language parameter and interpreted under the ontology identified by the ontology parameter.
  - **language**: A string identifying the content language. Common values include "SL" (FIPA Semantic Language), "fipa-sl" (same), "Prolog", "KIF", and custom domain-specific languages.
  - **encoding**: The encoding of the message body, e.g. "UTF-8" or "base64".
  - **ontology**: A string identifying the domain ontology that provides the denotations of terms in the content. This is where FIPA ACL connects to the broader [[Semantic Web]] and [[Ontology]] engineering traditions.
  - **protocol**: The name of the interaction protocol this message participates in, e.g. "fipa-request" or "fipa-contract-net".
  - **conversation-id**: A string that identifies this message as part of a broader dialogue, linking it to all other messages in the same conversation.
  - **reply-with**: An expression that a responding agent should include in its reply to link the reply to this request.
  - **in-reply-to**: The reply-with expression from the message this message is replying to.
  - **reply-by**: A deadline by which a reply is expected, as a timestamp.

  **Communicative Act Library (SC00037J)**

  The 22 performatives span several functional categories. The **informative acts** include inform (the sender asserts a proposition), disconfirm (the sender asserts the negation of a proposition the receiver believes), and confirm (the sender re-asserts a proposition already believed by both parties). The **query acts** include query-if (ask whether a proposition holds), query-ref (ask for a reference expression that identifies an object), subscribe (request ongoing notification of changes to a condition), inform-if, and inform-ref (answers to the respective queries). The **action request acts** include request (ask the receiver to perform an action), request-when (ask the receiver to perform an action when a condition holds), and request-whenever (ask the receiver to perform an action whenever a condition holds). The **negotiation acts** constitute the most commercially important group: cfp (call for proposals, initiating a negotiation), propose (offering a set of conditions under which the agent will perform an act), accept-proposal, reject-proposal, and counter-proposal. Finally, the **error and control acts** include not-understood, failure, agree, cancel, proxy (redirect the message through another agent), propagate (broadcast through a group), and recruit (find agents able to perform an action).

  **Interaction Protocols**

  Interaction protocols compose individual ACL messages into structured conversations with defined sequencing constraints. The FIPA-defined protocols include:

  - **fipa-request**: A simple two-step exchange where the initiator sends a request and the participant either agrees and later informs, or refuses.
  - **fipa-contract-net** ([[Contract Net Protocol]]): Initiator broadcasts cfp; participants respond with proposals or refuse; initiator accepts or rejects proposals; participants perform accepted proposals and inform.
  - **fipa-iterated-contract-net**: Multiple rounds of cfp-propose before acceptance.
  - **fipa-dutch-auction**: Descending-price auction protocol with cfp, propose, and accept/reject.
  - **fipa-english-auction**: Ascending-price auction.
  - **fipa-brokering** and **fipa-recruiting**: Protocols for third-party agent discovery through a broker.
  - **fipa-subscribe**: Long-running protocol for event notification subscriptions.

  **Content Languages**

  FIPA defines its own content language, the Semantic Language (SL), with three levels of expressivity: SL0 (propositional logic), SL1 (first-order logic), and SL2 (modal logic with belief, uncertainty, desire, and intention operators). [[Knowledge Interchange Format]] (KIF) is also supported, providing first-order logic expressions with a LISP-like syntax. Custom domain-specific languages may be registered for use as content languages, enabling FIPA ACL to serve as the outer envelope for any propositional content system including [[OWL 2 Web Ontology Language]] and RDF.

  ## Major Platform Implementations

  **JADE (Java Agent DEvelopment Framework)** is the canonical open-source implementation of FIPA standards, developed initially by Telecom Italia Lab (TILAB) and now maintained by a community hosted on SourceForge and GitHub. JADE provides a runtime container for FIPA-compliant agents, implementing the Agent Communication Channel (ACC), the Directory Facilitator (DF) for yellow-pages agent discovery, the Agent Management System (AMS) for white-pages and life-cycle management, and the FIPA ACL message transport protocol over HTTP, IIOP (CORBA), and other transports. JADE's Behaviour abstraction maps agent operation as a state machine of concurrent behaviours, and its ACLMessage class implements the full SC00061G parameter set. The platform has been deployed in industrial process control, power grid management, e-commerce negotiation, humanitarian logistics coordination, and military coalition planning.

  **Cougaar** (Cognitive Agent Architecture), developed by BBN Technologies for DARPA, implements an alternative FIPA-influenced agent architecture with a blackboard infrastructure and domain-specific plugin model, deployed for military logistics and coalition operations planning.

  **ZEUS** (University College London, 1998–2002) was an early FIPA-compliant agent toolkit developed by BT Laboratories and University College London, notable for providing a graphical agent design environment.

  **Jason** is an open-source implementation of AgentSpeak(L), a BDI (Belief-Desire-Intention) agent programming language, with FIPA ACL integration via a JADE-compatible transport layer, widely used in academic agent research.

  **SPADE** (Smart Python Agent Development Environment) provides a Python FIPA ACL stack over the XMPP transport protocol, making it suitable for modern cloud-native and IoT agent deployments without requiring a Java runtime.

  ## Use Cases / Major Families

  **Power Systems and Smart Grid** represent the most sustained industrial deployment of FIPA ACL beyond academic research. The IEEE Power and Energy Society's Multi-Agent Systems Working Group has championed JADE-based FIPA ACL implementations for distributed energy resource management, demand response coordination, voltage regulation, and protection relay coordination in modern power grids. The conceptual fit is strong: a smart grid is literally a multi-agent system in which heterogeneous entities (generators, storage systems, demand response assets, grid operators) must negotiate and coordinate in real time under dynamic conditions with diverse objectives.

  **E-Commerce and Automated Negotiation** were the motivating application domain for FIPA's Contract Net and auction protocols. The Electronic Commerce using Agents (ECAGENT) and Trading Agent Competition (TAC) research programmes from 1998–2008 deployed FIPA ACL-based agents for automated procurement, combinatorial auctions, and supply chain management.

  **Semantic Web Integration** connects FIPA ACL to the broader [[Semantic Web]] stack. When the ontology parameter of a FIPA ACL message references an OWL ontology and the content language is an extended SL with OWL-compatible types, the message achieves genuine semantic interoperability grounded in formal ontology. Research groups at the University of Edinburgh, University of Southampton, and KU Leuven developed OWL-based extensions to FIPA ACL in the early 2000s as part of the EU AGENTCITIES and DAML-S/OWL-S service description efforts.

  **Humanitarian and Crisis Response** logistics: the SIADEX project (Case-Based Planning for Humanitarian Logistics, University of Granada) and related European research programmes used FIPA ACL-based agents to coordinate resource allocation and task assignment in crisis scenarios.

  **Robotics and Autonomous Systems**: NASA's Remote Agent experiment (1999) and subsequent multi-robot coordination systems at CMU, MIT, and Southampton used FIPA ACL-influenced message formats for inter-robot communication in autonomous multi-robot teams.

  **Contemporary Agentic AI Systems**: While current LLM-based orchestration frameworks (LangGraph, AutoGen, CrewAI) do not directly implement FIPA ACL, the conceptual vocabulary — performatives, interaction protocols, conversation management, ontology-grounded content — directly influenced the design philosophy of [[Model Context Protocol]] (Anthropic, 2024), [[Agent2Agent Protocol]] (Google, 2025), and the broader discourse on [[Multi-Agent Orchestration Frameworks]]. The 2024–2026 resurgence of interest in agent interoperability frameworks has prompted several research groups to revisit FIPA ACL as a baseline for comparison, noting its formal semantic rigour as an advantage over the informal schemas of contemporary tool-calling APIs.

  ## Academic Context

  The academic foundations of FIPA ACL span philosophy of language, formal logic, distributed computing, and AI. The core Speech Act Theory lineage — Austin (1962), Searle (1969), Grice (1975, Cooperative Principle and implicature) — was translated into computational terms by Barbara Grosz, Candace Sidner, and Allen (1981) in the discourse structure and computational dialogue literature. The first computational agent communication language, KQML, emerged from the DARPA Knowledge Sharing Effort: Neches et al. (1991) introduced the KSE framework; Finin, Fritzson, McKay, and McEntire formalised KQML (1994); Labrou and Finin (1997) provided the first rigorous critique of KQML's semantic deficiencies that directly motivated the FIPA ACL design.

  The formal semantics of FIPA ACL was developed by the FIPA Semantic Framework Working Group, led by Fabio Bellifemine (Telecom Italia) and colleagues from the IRIT laboratory in Toulouse (including Laurent Vercouter and Gauthier Picard). The semantic model is built on the SL2 modal logic with operators for agent beliefs, uncertainties, desires, and intentions, providing a formal account of the conditions under which each performative is rationally appropriate and the effects it produces. Pitt and Mamdani (1999) at Imperial College London provided influential formal analyses of FIPA ACL semantics, showing that the interaction protocols could be verified for correctness properties using model checking.

  The debate between Labrou and Finin's KQML defenders and the FIPA ACL advocates is extensively documented in the AAMAS and AAAI proceedings from 1997–2004 and remains instructive for understanding the trade-offs between formal semantic precision and implementation pragmatism in protocol design. The Agent Communication Language Workshop series (1998–2003) provided the primary forum for this debate.

  Following the mainstream AI community's shift toward statistical learning methods in the 2010s, FIPA ACL receded from the research frontier but maintained presence in applied multi-agent systems research, particularly in engineering and power systems communities. The publication of Shoham and Leyton-Brown's "Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations" (2008), which provides formal treatment of agent communication grounded in game theory and epistemic logic, connects the FIPA ACL tradition to the economic and game-theoretic literature on mechanism design.

  Key research groups active in FIPA ACL's development and application included: TILAB (Telecom Italia, inventors of JADE); Imperial College London (Pitt, Mamdani, and colleagues on formal MAS verification); University of Edinburgh (agent reasoning and verification); University of Southampton (Semantic Web and FIPA integration, WEBMAS); University of Amsterdam (formal logics for agent communication, Meyer, van der Hoek); and Carnegie Mellon University (Giunchiglia and colleagues on OWL-S service composition with FIPA ACL).

  ## Current Landscape (2026)

  As of 2026, FIPA ACL occupies a curious position: it is both historically superseded in cutting-edge agent research and persistently relevant in industrial deployments and in the conceptual vocabulary of the resurgent agentic AI field. The three IEEE specifications remain normatively active and unreplaced; no competing body has issued a formal successor to SC00061G, SC00037J, or SC00008I. JADE — the primary FIPA ACL runtime — continues to receive maintenance updates from its community and is deployed in European power grid management systems where the regulatory context requires formally specified agent communication and the 20+ year deployment history of JADE implementations provides institutional continuity that more modern frameworks cannot match.

  The 2024–2026 agentic AI wave, driven by the capability improvements of large language models and their deployment in autonomous agent systems, has reignited interest in principled agent communication standards. Anthropic's [[Model Context Protocol]] (MCP, late 2024) defines a JSON-RPC-based protocol for tool-calling between AI agents and tool servers; Google's [[Agent2Agent Protocol]] (A2A, 2025) extends this to agent-to-agent communication with capability discovery, task delegation, and result propagation. Both protocols are influenced — at a conceptual level — by FIPA ACL's insights about the value of typed communicative acts and conversation identifiers, even though neither cites FIPA ACL directly and both use REST/JSON conventions utterly different from FIPA's SL-based message format.

  Research groups at Lancaster University (report from the Agent Toolkits 2025 community session), University of Bath, and the Alan Turing Institute have explicitly positioned FIPA ACL's formal semantics as a desirable property for LLM-based agent frameworks to emulate, arguing that the informality of contemporary tool-calling schemas creates interoperability failures analogous to those that motivated the shift from KQML to FIPA ACL in the 1990s. A TypeScript implementation of FIPA ACL (SC00061G + SC00037J + SC00008I) was published on GitHub by the amlhubs organisation in 2024, providing a modern runtime for FIPA ACL message handling over contemporary transport protocols, and representing an attempt to bridge the classical standard with the JavaScript-native agent ecosystem.

  The IEEE Power and Energy Society's Multi-Agent Systems Working Group actively maintains interoperability testing infrastructure for FIPA ACL in the context of grid automation, and lists FIPA ACL alongside IEC 61850 and CIM (Common Information Model) as the three foundational standards for multi-agent power system applications. JADE deployments in European transmission system operators (TSOs) operate under IEC 61968/61970 CIM ontologies expressed as FIPA ACL ontology parameters, representing a production integration of FIPA ACL with a major industry ontology standard.

  ## UK Context

  The United Kingdom has a historically significant relationship with FIPA ACL research, primarily through two major institutions. **Imperial College London** — particularly the Intelligent Systems and Networks group led by Jeremy Pitt — was one of the most active contributors to the formal verification of FIPA ACL interaction protocols. Pitt and Mamdani's work in the late 1990s and early 2000s applied model checking (using SPIN and related tools) to verify safety and liveness properties of FIPA contract net and request protocols, establishing that formal MAS protocol verification was tractable. The group's subsequent work on electronic institutions — rule-governed multi-agent societies with formal norms and sanctions — extended FIPA ACL into the domain of normative multi-agent systems, influencing later work on self-organisation in sociotechnical systems.

  **University College London** (UCL) hosted the development of the ZEUS agent toolkit (1998–2002), a precursor and contemporary of JADE that introduced graphical agent design tooling for FIPA-compliant systems. BT Laboratories, UCL's industrial partner on ZEUS, deployed early FIPA ACL agent networks for network management and customer service applications. UCL's subsequent involvement in the W3C Semantic Web Activity created natural connections between the FIPA ACL ontology parameter and the emerging [[OWL 2 Web Ontology Language]] and [[Semantic Web]] standards.

  **University of Edinburgh** contributed to FIPA ACL through its work on agent reasoning and the interaction between FIPA ACL and formal knowledge representation. The Informatics group's expertise in temporal and epistemic logics provided theoretical underpinning for reasoning about agent mental states as modelled in FIPA SL2.

  **University of Southampton**'s Agent Applications Research Group (Jennings, Woolridge, and colleagues) was one of the most internationally prominent multi-agent systems research groups in the world during the FIPA ACL era, though Southampton's work more often engaged with agent architectures (particularly BDI agents) and mechanism design than with FIPA ACL syntax and semantics directly. Their WEBMAS project (2001–2004) investigated the integration of MAS with Semantic Web services under FIPA ACL messaging.

  **BT Laboratories** (Martlesham Heath, Suffolk) had substantial FIPA ACL engagement during the late 1990s and early 2000s as both a co-developer of the ZEUS toolkit and a commercial deployer of agent-based systems for network management. This represents one of the few substantial commercial UK industrial deployments of FIPA ACL outside the academic context.

  **Northern England**: The Leeds-based data science community and the Newcastle Digital Institute have engaged with agent communication standards primarily through industrial applications in utilities and process automation rather than in core FIPA ACL research. Sheffield's Computer Science department (particularly the work on Trust and Reputation in Multi-Agent Systems by Nicholas Jennings, then at Southampton, who later joined Imperial) provides another connection between Northern England AI research and the FIPA MAS tradition.

  ## Future Directions (2026-2030)

  The most significant opportunity for FIPA ACL in the 2026–2030 period lies not in direct adoption of its 2002 specifications by modern agent frameworks but in the influence of its design principles on the emerging generation of LLM-based agent communication standards. Several research directions are active:

  **Formal semantics for LLM agent communication**: The failure modes of tool-calling schemas in LLM-based agents — prompt injection, schema inconsistency between agents, unverifiable capability claims — are structurally analogous to the KQML deficiencies that motivated FIPA ACL. Research groups at Lancaster, Imperial, and Edinburgh are exploring whether a FIPA-SL-inspired formal semantics can be layered over [[Model Context Protocol]] or [[Agent2Agent Protocol]] messages to provide verifiable correctness properties for multi-agent LLM pipelines.

  **FIPA ACL for IoT and edge agent coordination**: The proliferation of autonomous edge devices in smart homes, industrial IoT, and vehicle-to-vehicle communication creates agent communication requirements similar to those that motivated FIPA. SPADE's XMPP-based FIPA ACL transport (maintained by the intelligent systems group at Universidad Politécnica de Valencia) is being extended for constrained-device environments under MQTT and CoAP transports.

  **JADE Next and SPADE for LLM-Agent Bridge**: Projects to bridge JADE's FIPA ACL runtime with LLM-backed agent implementations (wrapping an LLM as a FIPA-compliant agent that interprets performatives via prompt engineering) are active in the academic community, enabling hybrid systems where some agents are classically programmed and others are LLM-backed.

  **Power system agent standards evolution**: The IEC TC57 Working Group 17 is reviewing the relationship between FIPA ACL and IEC 61968/61970 CIM for grid automation agents in the context of energy transition requirements, potentially leading to a new IEC standard that formalises the FIPA-CIM integration.

  **Normative multi-agent systems (NMAS)**: The EMAS (Engineering Multi-Agent Systems) community is actively developing formal frameworks for normative regulation of agent behaviour in LLM-era multi-agent systems, drawing directly on FIPA ACL's institutional and protocol tradition. The Agent Toolkits 2025 report from Lancaster University identifies NMAS as a critical open problem for safe deployment of autonomous agent systems.

  ## Research and Literature

  1. Austin, J. L. (1962). *How to Do Things with Words*. Oxford University Press. (Foundational speech act theory)

  2. Searle, J. R. (1969). *Speech Acts: An Essay in the Philosophy of Language*. Cambridge University Press. (Formal taxonomy of illocutionary acts)

  3. Grice, H. P. (1975). Logic and conversation. In P. Cole & J. Morgan (Eds.), *Syntax and Semantics, Vol. 3: Speech Acts*. Academic Press, pp. 41–58.

  4. Neches, R., Fikes, R. E., Finin, T., Gruber, T. R., Patil, R., Senator, T., & Swartout, W. R. (1991). Enabling technology for knowledge sharing. *AI Magazine*, 12(3), 36–56. (DARPA KSE, origin of KQML)

  5. Finin, T., Fritzson, R., McKay, D., & McEntire, R. (1994). KQML as an agent communication language. *Proceedings of the 3rd ACM International Conference on Information and Knowledge Management (CIKM 1994)*.

  6. Labrou, Y., & Finin, T. (1997). Semantics and conversations for an agent communication language. *Proceedings of IJCAI 1997*.

  7. FIPA (Foundation for Intelligent Physical Agents). (2002). FIPA ACL Message Structure Specification. Document SC00061G. http://www.fipa.org/specs/fipa00061/

  8. FIPA. (2002). FIPA Communicative Act Library Specification. Document SC00037J. http://www.fipa.org/specs/fipa00037/

  9. FIPA. (2002). FIPA SL Content Language Specification. Document SC00008I. http://www.fipa.org/specs/fipa00008/

  10. Bellifemine, F., Caire, G., & Greenwood, D. (2007). *Developing Multi-Agent Systems with JADE*. John Wiley & Sons. (The authoritative JADE/FIPA implementation reference)

  11. Bellifemine, F., Poggi, A., & Rimassa, G. (2001). Developing multi-agent systems with a FIPA-compliant agent framework. *Software Practice and Experience*, 31(2), 103–128.

  12. Pitt, J., & Mamdani, A. (1999). A protocol-based semantics for an agent communication language. *Proceedings of IJCAI 1999*. https://jade.tilab.com/papers/AIIA-jvp-fb.pdf

  13. Labrou, Y., Finin, T., & Peng, Y. (1999). Agent communication languages: The current landscape. *IEEE Intelligent Systems*, 14(2), 45–52.

  14. Parunak, H. V. D. (1996). Applications of distributed artificial intelligence in industry. In G. M. P. O'Hare & N. R. Jennings (Eds.), *Foundations of Distributed Artificial Intelligence*. Wiley. (Industrial MAS context)

  15. Jennings, N. R., Sycara, K. P., & Wooldridge, M. (1998). A roadmap of agent research and development. *Autonomous Agents and Multi-Agent Systems*, 1(1), 7–38.

  16. Wooldridge, M., & Jennings, N. R. (1995). Intelligent agents: Theory and practice. *Knowledge Engineering Review*, 10(2), 115–152. (Foundational BDI agent theory)

  17. Shoham, Y., & Leyton-Brown, K. (2008). *Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations*. Cambridge University Press. (Canonical MAS textbook)

  18. Smith, R. G. (1980). The contract net protocol: High-level communication and control in a distributed problem solver. *IEEE Transactions on Computers*, C-29(12), 1104–1113. (Origin of the Contract Net Protocol adopted in FIPA)

  19. Payne, T. R., & Singh, R. (2003). Semantic descriptions of agent behaviours in DAML-S. *Proceedings of AAMAS 2003*. (FIPA-Semantic Web integration)

  20. IEEE Power and Energy Society Multi-Agent Systems Working Group. (2024). Standards and interoperability for agent technology in power systems. https://site.ieee.org/pes-mas/agent-technology/standards-and-interoperability/

  21. McArthur, S. D. J., Davidson, E. M., Catterson, V. M., Dimeas, A. L., Hatziargyriou, N. D., Ponci, F., & Funabashi, T. (2007). Multi-agent systems for power engineering applications — Part I: Concepts, approaches, and technical challenges. *IEEE Transactions on Power Systems*, 22(4), 1743–1752.

  22. Pitt, J. (Ed.). (2006). *The Open Agent Society: Normative Specifications of Online Social Systems*. Springer. (Imperial College London normative MAS research)

  23. GitHub / amlhubs. (2024). fipa-acl: TypeScript implementation of IEEE FIPA Agent Communication Language. https://github.com/amlhubs/fipa-acl (Modern TypeScript FIPA ACL implementation, SC00061G + SC00037J + SC00008I)

  24. Chopra, A. K., & Dickinson, I. (2025). Engineering multi-agent systems and generative AI: Report from the Agent Toolkits 2025 community session. Lancaster University. https://www.lancaster.ac.uk/staff/chopraak/pdfs/Agent-Toolkits-25-CR.pdf

  25. SmythOS. (2025). An introduction to FIPA Agent Communication Language: Standards for interoperable multi-agent systems. https://smythos.com/developers/agent-development/fipa-agent-communication-language/

  26. Medium / DIRA. (2025). The secret language of AI: How agent communication protocols are building an interoperable future. https://medium.com/@drajput_14416/agent-communication-protocol-forging-the-future-of-interoperable-ai-agents-e64be058b22d

  27. Foundation for Intelligent Physical Agents. (n.d.). Wikipedia entry. https://en.wikipedia.org/wiki/Foundation_for_Intelligent_Physical_Agents

  28. Wikipedia. (n.d.). Agent Communications Language. https://en.wikipedia.org/wiki/Agent_Communications_Language

  ## Key Terminology Glossary

  - **Performative**: The typed communicative act carried in the outer envelope of a FIPA ACL message; classifies the illocutionary force of the message (inform, request, cfp, propose, etc.) according to the SC00037J library.
  - **ACL (Agent Communication Language)**: A language designed for communication between autonomous software agents; FIPA ACL is the formally specified standard instance.
  - **SL (Semantic Language)**: FIPA's content language defined in SC00008I; exists in three levels of expressivity — SL0 (propositional), SL1 (first-order), and SL2 (modal with belief/desire/intention operators).
  - **JADE (Java Agent DEvelopment Framework)**: The canonical open-source FIPA-compliant agent runtime, providing the AMS, DF, and ACC infrastructure defined in the FIPA agent management specifications.
  - **DF (Directory Facilitator)**: The yellow-pages service in a FIPA agent platform that maps agent capabilities to agent identifiers, enabling service discovery without a priori knowledge of agent addresses.
  - **AMS (Agent Management System)**: The white-pages and life-cycle management service in a FIPA agent platform, responsible for registering agent identifiers and managing the agent life cycle (created, active, waiting, suspended, transit, deleted).
  - **ACC (Agent Communication Channel)**: The transport layer in a FIPA agent platform responsible for delivering ACL messages between agents, potentially spanning multiple agent platforms and transport protocols.
  - **Interaction Protocol**: A named sequence of ACL messages that defines a structured conversation; the Contract Net Protocol and request protocol are the canonical examples.
  - **Contract Net Protocol**: An interaction protocol for task allocation in which an initiator broadcasts a call-for-proposals, receives and evaluates proposals, and accepts or rejects them — the primary MAS mechanism for distributed task assignment.
  - **Pre-condition**: In the formal semantics of a performative, the mental state conditions that must hold in the sending agent for the performative to be felicitously (appropriately) issued.
  - **Rational effect**: In the formal semantics of a performative, the intended change in the receiving agent's mental state that the sending agent aims to produce by issuing the performative.
  - **KQML (Knowledge Query and Manipulation Language)**: FIPA ACL's immediate predecessor; lacks formal semantics for performatives, leading to interoperability failures that motivated FIPA ACL's development.
  - **BDI (Belief-Desire-Intention)**: An agent architecture model in which agents maintain explicit representations of beliefs (information about the world), desires (goals), and intentions (committed plans); the standard architecture for FIPA ACL-capable agents.
  - **Ontology (in FIPA ACL context)**: A shared conceptual vocabulary and formal specification of domain terms that gives meaning to the content field of a FIPA ACL message; identified by the ontology parameter of the message envelope.
  - **Speech Act Theory**: The philosophical theory (Austin, Searle) holding that utterances are actions with illocutionary force — the theoretical foundation for FIPA ACL performatives.

- ### Provenance
  - sources:: FIPA SC00061G https://www.fipa.org/specs/fipa00061/; FIPA SC00037J https://www.fipa.org/specs/fipa00037/; FIPA SC00008I https://www.fipa.org/specs/fipa00008/; SmythOS FIPA overview https://smythos.com/developers/agent-development/fipa-agent-communication-language/; Wikipedia FIPA https://en.wikipedia.org/wiki/Foundation_for_Intelligent_Physical_Agents; Wikipedia ACL https://en.wikipedia.org/wiki/Agent_Communications_Language; IEEE PES MAS Working Group https://site.ieee.org/pes-mas/agent-technology/standards-and-interoperability/; GitHub amlhubs fipa-acl https://github.com/amlhubs/fipa-acl; Lancaster Agent Toolkits 2025 https://www.lancaster.ac.uk/staff/chopraak/pdfs/Agent-Toolkits-25-CR.pdf; DIRA Medium article https://medium.com/@drajput_14416/agent-communication-protocol-forging-the-future-of-interoperable-ai-agents-e64be058b22d; Pitt & Mamdani 1999 protocol semantics https://jade.tilab.com/papers/AIIA-jvp-fb.pdf
  - web-searches-performed:: 4
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm