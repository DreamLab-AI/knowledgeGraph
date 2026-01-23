- ### OntologyBlock
  id:: ai-governance-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0091
	- preferred-term:: AI Governance
	- source-domain:: mv
	- status:: draft
- definition:: The system of rules, practices, processes, and organisational structures that guide the responsible development, deployment, and use of artificial intelligence systems throughout their lifecycle, ensuring alignment with ethical principles, legal requirements, risk management frameworks, and stakeholder values whilst promoting accountability, transparency, and continuous improvement.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :AiGovernance))

;; Annotations
(AnnotationAssertion rdfs:label :AiGovernance "AI Governance"@en)
(AnnotationAssertion rdfs:comment :AiGovernance "The system of rules, practices, processes, and organisational structures that guide the responsible development, deployment, and use of artificial intelligence systems throughout their lifecycle, ensuring alignment with ethical principles, legal requirements, risk management frameworks, and stakeholder values whilst promoting accountability, transparency, and continuous improvement."@en)

;; Semantic Relationships
(SubClassOf :AiGovernance
  (ObjectSomeValuesFrom :relatedTo :ResponsibleAi))
(SubClassOf :AiGovernance
  (ObjectSomeValuesFrom :relatedTo :RiskManagement))
(SubClassOf :AiGovernance
  (ObjectSomeValuesFrom :relatedTo :HumanOversight))
(SubClassOf :AiGovernance
  (ObjectSomeValuesFrom :relatedTo :Accountability))
(SubClassOf :AiGovernance
  (ObjectSomeValuesFrom :relatedTo :AiImpactAssessment))

;; Data Properties
(AnnotationAssertion dcterms:identifier :AiGovernance "AI-0091"^^xsd:string)
(DataPropertyAssertion :isAITechnology :AiGovernance "true"^^xsd:boolean)
```

## Context and Significance

AI governance provides the institutional and procedural framework necessary for managing AI systems in a manner that balances innovation with responsibility. It establishes clear roles, responsibilities, decision-making processes, and oversight mechanisms that enable organisations to realise the benefits of AI whilst mitigating potential harms. Effective AI governance integrates technical, ethical, legal, and business considerations into a coherent management structure.

The NIST AI Risk Management Framework emphasises governance as a foundational function that enables organisations to cultivate and formalise structures, policies, and procedures for managing AI risks. ISO/IEC 42001 establishes governance as a core requirement for AI management systems, specifying the need for top management commitment, defined roles and responsibilities, and integrated risk management processes.

AI governance operates at multiple levels—from organisational policies and procedures to technical controls and monitoring systems—and must adapt to evolving regulatory landscapes, technological capabilities, and societal expectations.

## Key Characteristics

- **Multi-layered structure**: Operates at strategic, tactical, and operational levels
- **Stakeholder-inclusive**: Incorporates diverse perspectives and accountability mechanisms
- **Risk-based approach**: Prioritises governance activities according to AI system risk levels
- **Lifecycle coverage**: Addresses AI systems from conception through decommissioning
- **Adaptive capacity**: Evolves in response to technological and regulatory changes
- **Documentation requirements**: Maintains records of decisions, processes, and outcomes
- **Oversight mechanisms**: Includes review boards, audits, and monitoring processes
- **Integration requirement**: Aligns with broader organisational governance structures

## Relationships

- **Enables**: AI Lifecycle, AI Development, AI Deployment, AI Monitoring
- **Requires**: Human Oversight, Stakeholder engagement, Risk Management
- **Supports**: Ethical AI, Responsible AI, Trustworthy AI
- **Implements**: AI Impact Assessment, AI Audit, Accountability frameworks
- **Defines**: AI Operator, AI Provider, AI User roles and responsibilities
- **Incorporates**: Fairness, Transparency, Safety principles
- **Interacts with**: Legal frameworks, regulatory requirements, industry standards

## Examples and Applications

1. **Healthcare AI Governance**: Hospital establishes AI governance board comprising clinicians, ethicists, legal experts, and patient representatives to oversee deployment of diagnostic AI systems, review clinical validation evidence, and monitor performance metrics
2. **Financial Services**: Bank implements tiered governance structure with executive AI steering committee, technical review panels, and operational monitoring teams to manage credit scoring, fraud detection, and trading algorithms
3. **Public Sector**: Government agency develops AI governance framework aligned with NIST AI RMF, establishing clear approval processes, risk assessment requirements, and public accountability mechanisms for automated decision systems
4. **Research Institution**: University creates AI ethics committee with authority to review proposed AI research projects, assess potential impacts, and require modifications to protect research subjects and ensure responsible innovation

## ISO/IEC Standards Alignment

**ISO/IEC 42001:2023** (AI Management Systems):
- Clause 5: Leadership and top management responsibilities for AI governance
- Clause 6: Planning requirements for AI objectives and risk management
- Clause 9: Performance evaluation and monitoring requirements
- Clause 10: Continual improvement of AI management system

**ISO/IEC 23894:2023** (AI Risk Management):
- Framework for establishing governance structures for AI risk management
- Requirements for roles, responsibilities, and accountability mechanisms

**ISO/IEC 38507:2022** (Governance of IT):
- Governance principles applicable to AI systems
- Framework for evaluate, direct, and monitor activities

## NIST AI RMF Integration

**GOVERN Function**:
- GV-1.1: Legal and regulatory requirements identified and managed
- GV-1.2: Roles and responsibilities clearly defined
- GV-1.3: Organisational policies address AI risks
- GV-1.4: Governance structures and processes established
- GV-1.5: Processes for ongoing monitoring and review implemented
- GV-1.6: Mechanisms for addressing emerging risks established

**Cross-cutting Application**:
- Governance provides foundation for MAP, MEASURE, and MANAGE functions
- Ensures organisational capacity to implement risk management practices
- Establishes accountability for AI system outcomes

## Implementation Considerations

**Organisational Requirements**:
- Executive leadership commitment and resource allocation
- Clear governance structure with defined authorities and escalation paths
- Integration with existing risk management and compliance frameworks
- Cross-functional coordination mechanisms

**Documentation and Records**:
- Governance policies, procedures, and standards
- Role descriptions and responsibility matrices
- Decision records and approval documentation
- Risk assessments and mitigation plans
- Audit trails and monitoring reports

**Capabilities Development**:
- AI literacy programmes for governance participants
- Technical expertise for informed decision-making
- Ethical reasoning and impact assessment skills
- Change management and adaptation processes

**Challenges**:
- Balancing innovation speed with governance rigour
- Maintaining expertise amid rapid technological change
- Coordinating across organisational silos
- Addressing novel risks without established precedents
- Scaling governance to diverse AI applications

## Regulatory and Policy Context

**EU AI Act**: Requires high-risk AI systems to have governance and risk management frameworks, with specific obligations for providers and deployers

**UK National AI Strategy**: Emphasises need for proportionate, innovation-friendly governance approaches whilst ensuring public trust

**OECD AI Principles**: Calls for accountable AI governance with human oversight and transparency

**Sector-specific Requirements**: Additional governance obligations in regulated sectors (finance, healthcare, transportation)

## Related Terms

- **AI Lifecycle**: The phases governed by AI governance frameworks
- **Human Oversight**: Key governance mechanism for maintaining control
- **AI Impact Assessment**: Governance tool for evaluating AI system effects
- **Ethical AI**: Values embedded through governance processes
- **AI Audit**: Governance verification mechanism
- **Accountability**: Core governance principle and outcome
- **Risk Management**: Integrated component of AI governance

## References

1. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
2. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
3. ISO/IEC 38507:2022, *Information technology — Governance of IT — Governance implications of the use of artificial intelligence by organizations*
4. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)* (2021)
5. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)

## See Also

- [[AI Lifecycle]]
- [[Human Oversight]]
- [[AI Impact Assessment]]
- [[Ethical AI]]
- [[Responsible AI]]
- [[AI Audit]]
- [[Accountability]]
- [[Risk Management]]
	- maturity:: draft
	- owl:class:: mv:AIGovernance
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: ai-governance-relationships
		- is-required-by:: [[Ethical AI]]
		- requires:: [[Human Oversight]], [[Stakeholder engagement]], [[Risk Management]]
		- enables:: [[AI Lifecycle]], [[AI Development]], [[AI Deployment]], [[AI Monitoring]]
- ## About AI Governance
	- The system of rules, practices, processes, and organisational structures that guide the responsible development, deployment, and use of artificial intelligence systems throughout their lifecycle, ensuring alignment with ethical principles, legal requirements, risk management frameworks, and stakeholder values whilst promoting accountability, transparency, and continuous improvement.

	- ### Governance Vacuum
		- The idea that a small group of individuals could steer the course of AI, without a comprehensive plan or consensus, is deeply unsettling. The need for inclusive, wise, and proactive governance has never been more critical.

		- ## Claude
			- ```mermaid
			  %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#2563eb', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#1e40af', 'lineColor': '#3b82f6', 'secondaryColor': '#10b981', 'tertiaryColor': '#8b5cf6'}}}%%
			  
			  flowchart TB
			      %% Core Framework
			      A[Open Agentic Framework] --> B[Distributed Identity Layer]
			      A --> C[Decentralized Computation Network]
			      A --> D[Open Data Connectors]
			      A --> E[Economic Incentive Layer]
			  
			      %% Identity and Communication
			      B --> NostrRelays[Nostr Relay Network]
			      B --> SolidProtocol[Solid Protocol Identity]
			      
			      %% Computation and Agents
			      C --> DistributedGit[Distributed Git Compute Nodes]
			      C --> LightningNetwork[Bitcoin Lightning Compute Marketplace]
			      
			      %% Data Connectors
			      D --> AnthropicContext[Anthropic Model Context Protocol]
			      D --> OpenDataProtocols[Decentralized Data Schemas]
			      
			      %% Economic Layer
			      E --> SyntheticStablecoin[Synthetic Stablecoin Dollar Network]
			      E --> LightningPayments[Lightning Network Payments]
			      E --> ComputeMarketplace[Decentralized Compute Marketplace]
			  
			      %% Interconnections
			      NostrRelays <--> LightningNetwork
			      SyntheticStablecoin <--> LightningPayments
			      DistributedGit <--> ComputeMarketplace
			  
			      %% Additional Protocols and Layers
			      subgraph Protocols
			          WebSocketAPI[WebSocket API Layer]
			          P2PMessaging[Peer-to-Peer Messaging]
			          DecentralizedStorage[Decentralized Storage Protocols]
			      end
			  
			      %% Cross-Protocol Interactions
			      A --> Protocols
			      LightningNetwork --> WebSocketAPI
			      AnthropicContext --> DecentralizedStorage
			  
			      %% Governance and Standards
			      subgraph Governance
			          OpenStandards[Open Standards Body]
			          InteroperabilityProtocols[Interoperability Protocols]
			      end
			  
			      A --> Governance
			  
			      %% Additional Annotations
			      classDef core fill:#2563eb,color:#ffffff,stroke:#1e40af,stroke-width:2px;
			      classDef protocol fill:#10b981,color:#ffffff,stroke:#059669,stroke-width:2px;
			      classDef economic fill:#8b5cf6,color:#ffffff,stroke:#7c3aed,stroke-width:2px;
			  
			      class A,B,C,D,E core;
			      class NostrRelays,SolidProtocol,WebSocketAPI,P2PMessaging protocol;
			      class SyntheticStablecoin,LightningPayments,ComputeMarketplace economic;
			  ```
			- I've created a comprehensive Mermaid diagram that illustrates an open agentic framework incorporating the technologies you mentioned, along with some additional complementary protocols. Let me break down the key components:

			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The color-coded layers help visualize the different types of components:
				- Blue represents core framework layers
				- Green represents communication and protocol layers
				- Purple represents economic and incentive layers
			- The architecture is designed to be open, interoperable, and resistant to centralization, with multiple paths for data flow, computation, and economic exchange.

	- ## Trust, Accessibility, Governance, and Safeguarding:
		- The Metaverse faces challenges, including poor adoption, overstated market need, and a lack of genuine digital society use cases. [[Privacy, Trust and Safety]] abuses by incumbent providers have created an opportunity for a more open internet. Emerging markets face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation.

	- ### Economic Empowerment AI Actors:
		- The creation of an open and economically empowered Metaverse, in which AI actors can mediate governance issues and participate in economic transactions, can lead to a more efficient and dynamic digital ecosystem. This integration will enable new business models and opportunities for all users, both human and AI.

	- ### Learning from Past Failures:
		- Learning from past failures and addressing challenges head-on will be critical to the successful development of an open-source Metaverse. Trust, accessibility, governance, and safeguarding issues must be thoughtfully considered and addressed to build a secure and user-friendly platform.

		- ## A Scaffold for Interconnected Metaverse Instances
			- This document explores the concept of the "Agentic Mycelia," a framework for interconnected metaverse instances operating within a decentralized and AI-driven ecosystem.
				- The framework emphasizes:
					- Interoperability
					- User empowerment
					- Adaptable governance
				- It enables seamless interactions and value exchange across diverse virtual worlds.

			- ### Adaptable Governance
				- Each metaverse instance should have the autonomy to establish its own rules, regulations, and governance structures while remaining compatible with the broader Mycelia network.
				- This necessitates AI-driven governance models that can adapt to changing needs and user preferences.

					- #### Roblox Event
						- A user-generated event within the Roblox platform.
						- Incorporates user-generated content and event-specific governance.

					- #### Unreal-based MMORPG
						- A massively multiplayer online role-playing game built using the Unreal Engine.
						- Features PvP interactions and MMORPG-specific governance.

					- #### Global Business Conference
						- A virtual platform for hosting business conferences and networking events.
						- Provides networking tools and conference-specific governance.

					- #### Feminist Global Advocacy and Support Metaverse
						- A virtual space dedicated to feminist advocacy and support.
						- Prioritizes privacy, security, and advocacy-specific governance.

						- #### AI Governance
							- Implementing and enforcing rules and regulations.
							- Utilizing the governance-related entities from the ontology, such as GovernanceStructure and MetaversePolicy.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:GovernanceStructure",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents the governance models and structures within the metaverse."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Governance Structure"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
								      {
								        "@id": "narrativegoldmine:MetaverseEntity"
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								    "@id": "narrativegoldmine:governedBy",
								    "@type": [
								      "http://www.w3.org/2002/07/owl#ObjectProperty"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#domain": [
								      {
								        "@id": "narrativegoldmine:MetaverseScene"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:GovernanceStructure"
								      }
								    ]
								  }
								  ```

- # Conclusion
	- The Agentic Mycelia presents a vision for a decentralized and interconnected metaverse ecosystem.
		- It emphasizes:
			- Interoperability
			- Adaptable governance
			- User empowerment
			- Control of personal data

	- ### PolicyFi: ``Emerging Civic Interaction
		- Financialisation of opinion could lead governance policies in internet spaces
		- Two-way dialogue between agents, formal governance structures, and external entities like policy makers
		- Arguably could incentivises deeper understanding of policy mechanisms

		- #### NostrRocket: A Practical Example of DAO Structures on Nostr
			- NostrRocket, a project built on Nostr, showcases the practical application of these principles. It facilitates decentralised, non-custodial coordination, allowing contributors to collaborate on creating and managing digital objects – including software, merchandise, or content – without centralised control.
			- The project's governance is maintained through a system of "merits," which quantify and reward contributions based on predefined rules. Operating without servers or traditional centralisation, NostrRocket relies solely on Nostr relays. Contributors propose and approve merits based on their work, ensuring the project's direction and outcomes are shaped directly by those involved. This approach upholds decentralised governance principles and streamlines operations by eliminating the need for conventional accounting and oversight.

- # Centralised AI and inequality
	- Negative:
		- Centralised AI systems are exacerbating global inequality, with those already in power benefiting the most economically and in decision-making
		- AI and automation have the potential to be labour-saving, increase unemployment, and concentrate wealth among a small fraction of highly skilled individuals and leading countries
		- The proliferation of AI threatens to reverse economic gains made by developing countries in recent decades, worsening poverty and inequality
		- AI technologies may be unsuited to local contexts and conditions in the developing world
		- Existing digital divides, lack of infrastructure and human capital put developing countries at a disadvantage in AI development and governance
		- AI could lead to monopolisation of data and decision-making by a small number of powerful entities, weakening civil society and political representation
	- Potential positive impacts and mitigations:
		- Economic policies, taxation, redistribution and global governance reforms could help mitigate adverse impacts of AI on inequality and share prosperity more widely
		- Developing countries may benefit from focusing AI strategies on key sectors like agriculture, services and digital infrastructure
		- Global rules around data, competition, IP and information flows could be designed to benefit developing nations
		- Harnessing bottom-up youth innovation and entrepreneurship in AI could help drive inclusion
		- Some positive signs are emerging from national AI policies focused on inclusion in certain countries
		- Steering AI research and development to maximise social value and redistributing power in AI governance could make systems more suitable to diverse global contexts
		- Non-distortionary taxation could potentially compensate those displaced or disadvantaged by AI to enable Pareto improvements
		- Local inferencing on virtually ubiquitous mobile phones could enable people to work and learn in their own language and style without internet charges, potentially mitigating inequalities
	- I

	- #### Technological Influence and Governance
		- **Role of Technology**: Technology has distanced people from effective engagement methods.
		- **Citizens’ Assemblies**: Suggested as a tool for constructive discourse and finding common ground on divisive issues.
		- **Institutional Deconstruction**: Concerns over both long-term and short-term anti-institutional movements.

		- ##### Open-Source Collaboration
		- By linking this case study to the open-source collaboration
		   infrastructure discussed earlier, we can create an inclusive,
		   permissionless, federated, and economically empowered system that
		   addresses the challenges of biodiversity monitoring while promoting
		   digital society values such as trust, accessibility, and governance.
		   This collaborative approach can help drive innovation and ensure that
		   the proposed solutions are both scalable and adaptable to the unique
		   needs of different communities and ecosystems.

	- #### Economic Empowerment AI Actors
		- The creation of an open and economically empowered Metaverse, in which
		  AI actors can mediate governance issues and participate in economic
		  transactions, can lead to a more efficient and dynamic digital
		  ecosystem. This integration will enable new business models and
		  opportunities for all users, both human and AI.

	- #### Learning from Past Failures
		- Learning from past failures and addressing challenges head-on will be
		  critical to the successful development of an open-source Metaverse.
		  Trust, accessibility, governance, and safeguarding issues must be
		  thoughtfully considered and addressed to build a secure and
		  user-friendly platform.

- # According to Gemini
	- **Phase 1: Foundational Infrastructure**
		- **Bitcoin Base Layer (NixOS):**
		- **Set up a secure and reliable Bitcoin full node on NixOS.**
		- **Implement robust backup and recovery procedures.**
		- **Consider running a Lightning Network node for faster and cheaper transactions.**
		- **Identity and Value Management:**
		- **Integrate Nostr protocol for decentralized identity and messaging.**
		- **Develop or utilize existing libraries for Nostr event creation, signing, and relaying.**
		- **Implement BIP85 hierarchical deterministic wallets for secure key management.**
		- **Digital Assets (RGB):**
		- **Choose or design appropriate RGB schemas for the types of digital assets you want to support.**
		- **Develop or utilize tools for issuing and managing RGB assets.**
		- **Integrate RGB wallets with the overall wallet management system.**
		   
		   **Phase 2: Interaction Module (Omniverse):**
		- **Omniverse Environment Setup:**
		- **Deploy an Omniverse Nucleus server to manage collaborative scenes and 3D assets.**
		- **Design and create the initial 3D environment(s) using USD (Universal Scene Description).**
		- **Consider incorporating elements from your existing visualizations and research.**
		- **Agent Integration:**
		- **Develop avatar systems for both human and AI agents within Omniverse.**
		- **Implement controls and interactions for agents within the 3D environment.**
		- **Explore the use of Omniverse Kit SDK for advanced features and customizations.**
		- **Digital Asset Integration:**
		- **Develop methods to represent and interact with RGB digital assets within Omniverse scenes.**
		- **Implement ownership and transfer functionalities based on the underlying Bitcoin/RGB infrastructure.**
		- **Explore visual representations of ownership and asset metadata within the 3D environment.**
		   
		   **Phase 3: AI and Governance:**
		- **AI Agent Development:**
		- **Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).**
		- **Implement the D&D-inspired personality system and the wealth decay function.**
		- **Develop AI behaviors and decision-making processes aligned with the scene schema.**
		- **Scene Schema and Governance:**
		- **Define the rules and constraints for different scene types within a flexible schema framework.**
		- **Implement the SupraAgent (governance LLM) with its monitoring and evidence collection capabilities.**
		- **Develop mechanisms for encrypted evidence payloads and communication with relevant parties.**
		- **GenAI Integration:**
		- **Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.**
		- **Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.**
		   
		   **Phase 4: User Interface and Experience:**
		- **Nostr-based Chat Interface:**
		- **Develop a chat interface using Nostr as the communication protocol.**
		- **Integrate the chat interface within the Omniverse environment.**
		- **Enable secure and private communication between agents.**
		- **Wallet Integration:**
		- **Provide users with access to their digital wallets within the metaverse.**
		- **Enable users to manage their assets, view transaction history, and interact with the virtual economy.**
		- **Accessibility and Multimodality:**
		- **Explore ways to make the metaverse experience accessible to users with disabilities.**
		- **Support multiple interaction modalities (e.g., VR, AR, desktop, mobile).**
		   
		   **Additional Considerations:**
		- **Security:** Implement robust security measures at all levels, including encryption, access control, and regular security audits.
		- **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
		- **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
		- **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.
		  
		  **This development plan provides a roadmap for implementing your metaverse vision, step by step. By focusing on the core principles of your research and leveraging innovative technologies like Bitcoin, RGB, Nostr, and Omniverse, you are building a foundation for a truly unique and transformative metaverse experience.**

	- # Kill Switches?
		- ```In situations where AI systems pose catastrophic risks, it could be beneficial for regulators to verify that a set of AI chips are operated legitimately or to disable their operation (or a subset of it) if they violate rules.```
			- <iframe src="https://www.cser.ac.uk/media/uploads/files/Computing-Power-and-the-Governance-of-AI.pdf" style="width: 100%; height: 600px"></iframe>

		- ### Middle Path
	 - **Co-evolution of State and AI:** Envisions a scenario where AI and state structures co-evolve, balancing the benefits of technological advancements with the need for governance and societal stability.
	 - **Navigating Challenges:** Discusses the potential paths to achieving this balance, including regulatory frameworks, ethical AI development, and international cooperation to manage the impacts of AI on global stability and human welfare.

		- ### Mismatch and Adaptation
	 - **Rapid Technological Evolution:** Details the rapid pace of technological evolution, particularly in AI, and the challenges it poses to existing societal and institutional structures.
	 - **Slower Institutional Adaptation:** Discusses the slower pace of adaptation in institutions, leading to a mismatch between the capabilities and impacts of AI and the ability of governance structures to effectively manage them.

		- ### Governance and Relevance
	 - **Loss of Direction of Fit:** Explores the potential for traditional governance structures to lose their relevance or "direction of f* as society and technology evolve, leading to political instability and societal unrest.
	 - **Adaptation Challenges:** Discusses the challenges and potential paths for institutions to adapt to a rapidly changing technological landscape, ensuring stability, fairness, and societal welfare.

	- ## AI and Future Governance

		- ### 2040 Vision of U.S. Government
	 - **Projected Drastic Changes:** Envisions how the U.S. government of 2040 might look drastically different due to the transformative effects of AI, drawing comparisons to the mid-20th-century government and pre-industrial era.
	 - **Transformational Impacts:** Discusses the specific ways in which AI might transform governance, including decision-making processes, service delivery, and citizen engagement.

		- ### Impact on Institutions
	 - **Democratization of AI:** Explores the potential for the democratization of powerful AI capabilities to be as destabilizing as historical technologies like the printing press, reshaping institutions and societal structures.
	 - **Reshaping 20th-Century Institutions:** Discusses the specific ways in which AI might reshape institutions inherited from the early 20th century, including governance, education, healthcare, and labor markets.

	- ### Governance Vacuum
		- The idea that a small group of individuals could steer the course of AI, without a comprehensive plan or consensus, is deeply unsettling. The need for inclusive, wise, and proactive governance has never been more critical.

		- ## Claude
			- ```mermaid
			  %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#2563eb', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#1e40af', 'lineColor': '#3b82f6', 'secondaryColor': '#10b981', 'tertiaryColor': '#8b5cf6'}}}%%
			  
			  flowchart TB
			      %% Core Framework
			      A[Open Agentic Framework] --> B[Distributed Identity Layer]
			      A --> C[Decentralized Computation Network]
			      A --> D[Open Data Connectors]
			      A --> E[Economic Incentive Layer]
			  
			      %% Identity and Communication
			      B --> NostrRelays[Nostr Relay Network]
			      B --> SolidProtocol[Solid Protocol Identity]
			      
			      %% Computation and Agents
			      C --> DistributedGit[Distributed Git Compute Nodes]
			      C --> LightningNetwork[Bitcoin Lightning Compute Marketplace]
			      
			      %% Data Connectors
			      D --> AnthropicContext[Anthropic Model Context Protocol]
			      D --> OpenDataProtocols[Decentralized Data Schemas]
			      
			      %% Economic Layer
			      E --> SyntheticStablecoin[Synthetic Stablecoin Dollar Network]
			      E --> LightningPayments[Lightning Network Payments]
			      E --> ComputeMarketplace[Decentralized Compute Marketplace]
			  
			      %% Interconnections
			      NostrRelays <--> LightningNetwork
			      SyntheticStablecoin <--> LightningPayments
			      DistributedGit <--> ComputeMarketplace
			  
			      %% Additional Protocols and Layers
			      subgraph Protocols
			          WebSocketAPI[WebSocket API Layer]
			          P2PMessaging[Peer-to-Peer Messaging]
			          DecentralizedStorage[Decentralized Storage Protocols]
			      end
			  
			      %% Cross-Protocol Interactions
			      A --> Protocols
			      LightningNetwork --> WebSocketAPI
			      AnthropicContext --> DecentralizedStorage
			  
			      %% Governance and Standards
			      subgraph Governance
			          OpenStandards[Open Standards Body]
			          InteroperabilityProtocols[Interoperability Protocols]
			      end
			  
			      A --> Governance
			  
			      %% Additional Annotations
			      classDef core fill:#2563eb,color:#ffffff,stroke:#1e40af,stroke-width:2px;
			      classDef protocol fill:#10b981,color:#ffffff,stroke:#059669,stroke-width:2px;
			      classDef economic fill:#8b5cf6,color:#ffffff,stroke:#7c3aed,stroke-width:2px;
			  
			      class A,B,C,D,E core;
			      class NostrRelays,SolidProtocol,WebSocketAPI,P2PMessaging protocol;
			      class SyntheticStablecoin,LightningPayments,ComputeMarketplace economic;
			  ```
			- I've created a comprehensive Mermaid diagram that illustrates an open agentic framework incorporating the technologies you mentioned, along with some additional complementary protocols. Let me break down the key components:

			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The color-coded layers help visualize the different types of components:
				- Blue represents core framework layers
				- Green represents communication and protocol layers
				- Purple represents economic and incentive layers
			- The architecture is designed to be open, interoperable, and resistant to centralization, with multiple paths for data flow, computation, and economic exchange.

	- ## Trust, Accessibility, Governance, and Safeguarding:
		- The Metaverse faces challenges, including poor adoption, overstated market need, and a lack of genuine digital society use cases. [[Privacy, Trust and Safety]] abuses by incumbent providers have created an opportunity for a more open internet. Emerging markets face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation.

	- ### Economic Empowerment AI Actors:
		- The creation of an open and economically empowered Metaverse, in which AI actors can mediate governance issues and participate in economic transactions, can lead to a more efficient and dynamic digital ecosystem. This integration will enable new business models and opportunities for all users, both human and AI.

	- ### Learning from Past Failures:
		- Learning from past failures and addressing challenges head-on will be critical to the successful development of an open-source Metaverse. Trust, accessibility, governance, and safeguarding issues must be thoughtfully considered and addressed to build a secure and user-friendly platform.

		- ## A Scaffold for Interconnected Metaverse Instances
			- This document explores the concept of the "Agentic Mycelia," a framework for interconnected metaverse instances operating within a decentralized and AI-driven ecosystem.
				- The framework emphasizes:
					- Interoperability
					- User empowerment
					- Adaptable governance
				- It enables seamless interactions and value exchange across diverse virtual worlds.

			- ### Adaptable Governance
				- Each metaverse instance should have the autonomy to establish its own rules, regulations, and governance structures while remaining compatible with the broader Mycelia network.
				- This necessitates AI-driven governance models that can adapt to changing needs and user preferences.

					- #### Roblox Event
						- A user-generated event within the Roblox platform.
						- Incorporates user-generated content and event-specific governance.

					- #### Unreal-based MMORPG
						- A massively multiplayer online role-playing game built using the Unreal Engine.
						- Features PvP interactions and MMORPG-specific governance.

					- #### Global Business Conference
						- A virtual platform for hosting business conferences and networking events.
						- Provides networking tools and conference-specific governance.

					- #### Feminist Global Advocacy and Support Metaverse
						- A virtual space dedicated to feminist advocacy and support.
						- Prioritizes privacy, security, and advocacy-specific governance.

						- #### AI Governance
							- Implementing and enforcing rules and regulations.
							- Utilizing the governance-related entities from the ontology, such as GovernanceStructure and MetaversePolicy.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:GovernanceStructure",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents the governance models and structures within the metaverse."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Governance Structure"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
								      {
								        "@id": "narrativegoldmine:MetaverseEntity"
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								    "@id": "narrativegoldmine:governedBy",
								    "@type": [
								      "http://www.w3.org/2002/07/owl#ObjectProperty"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#domain": [
								      {
								        "@id": "narrativegoldmine:MetaverseScene"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:GovernanceStructure"
								      }
								    ]
								  }
								  ```

- # Conclusion
	- The Agentic Mycelia presents a vision for a decentralized and interconnected metaverse ecosystem.
		- It emphasizes:
			- Interoperability
			- Adaptable governance
			- User empowerment
			- Control of personal data

	- ### PolicyFi: ``Emerging Civic Interaction
		- Financialisation of opinion could lead governance policies in internet spaces
		- Two-way dialogue between agents, formal governance structures, and external entities like policy makers
		- Arguably could incentivises deeper understanding of policy mechanisms

		- #### NostrRocket: A Practical Example of DAO Structures on Nostr
			- NostrRocket, a project built on Nostr, showcases the practical application of these principles. It facilitates decentralised, non-custodial coordination, allowing contributors to collaborate on creating and managing digital objects – including software, merchandise, or content – without centralised control.
			- The project's governance is maintained through a system of "merits," which quantify and reward contributions based on predefined rules. Operating without servers or traditional centralisation, NostrRocket relies solely on Nostr relays. Contributors propose and approve merits based on their work, ensuring the project's direction and outcomes are shaped directly by those involved. This approach upholds decentralised governance principles and streamlines operations by eliminating the need for conventional accounting and oversight.

- # Centralised AI and inequality
	- Negative:
		- Centralised AI systems are exacerbating global inequality, with those already in power benefiting the most economically and in decision-making
		- AI and automation have the potential to be labour-saving, increase unemployment, and concentrate wealth among a small fraction of highly skilled individuals and leading countries
		- The proliferation of AI threatens to reverse economic gains made by developing countries in recent decades, worsening poverty and inequality
		- AI technologies may be unsuited to local contexts and conditions in the developing world
		- Existing digital divides, lack of infrastructure and human capital put developing countries at a disadvantage in AI development and governance
		- AI could lead to monopolisation of data and decision-making by a small number of powerful entities, weakening civil society and political representation
	- Potential positive impacts and mitigations:
		- Economic policies, taxation, redistribution and global governance reforms could help mitigate adverse impacts of AI on inequality and share prosperity more widely
		- Developing countries may benefit from focusing AI strategies on key sectors like agriculture, services and digital infrastructure
		- Global rules around data, competition, IP and information flows could be designed to benefit developing nations
		- Harnessing bottom-up youth innovation and entrepreneurship in AI could help drive inclusion
		- Some positive signs are emerging from national AI policies focused on inclusion in certain countries
		- Steering AI research and development to maximise social value and redistributing power in AI governance could make systems more suitable to diverse global contexts
		- Non-distortionary taxation could potentially compensate those displaced or disadvantaged by AI to enable Pareto improvements
		- Local inferencing on virtually ubiquitous mobile phones could enable people to work and learn in their own language and style without internet charges, potentially mitigating inequalities
	- I

	- #### Technological Influence and Governance
		- **Role of Technology**: Technology has distanced people from effective engagement methods.
		- **Citizens’ Assemblies**: Suggested as a tool for constructive discourse and finding common ground on divisive issues.
		- **Institutional Deconstruction**: Concerns over both long-term and short-term anti-institutional movements.

		- ##### Open-Source Collaboration
		- By linking this case study to the open-source collaboration
		   infrastructure discussed earlier, we can create an inclusive,
		   permissionless, federated, and economically empowered system that
		   addresses the challenges of biodiversity monitoring while promoting
		   digital society values such as trust, accessibility, and governance.
		   This collaborative approach can help drive innovation and ensure that
		   the proposed solutions are both scalable and adaptable to the unique
		   needs of different communities and ecosystems.

	- #### Economic Empowerment AI Actors
		- The creation of an open and economically empowered Metaverse, in which
		  AI actors can mediate governance issues and participate in economic
		  transactions, can lead to a more efficient and dynamic digital
		  ecosystem. This integration will enable new business models and
		  opportunities for all users, both human and AI.

	- #### Learning from Past Failures
		- Learning from past failures and addressing challenges head-on will be
		  critical to the successful development of an open-source Metaverse.
		  Trust, accessibility, governance, and safeguarding issues must be
		  thoughtfully considered and addressed to build a secure and
		  user-friendly platform.

- # According to Gemini
	- **Phase 1: Foundational Infrastructure**
		- **Bitcoin Base Layer (NixOS):**
		- **Set up a secure and reliable Bitcoin full node on NixOS.**
		- **Implement robust backup and recovery procedures.**
		- **Consider running a Lightning Network node for faster and cheaper transactions.**
		- **Identity and Value Management:**
		- **Integrate Nostr protocol for decentralized identity and messaging.**
		- **Develop or utilize existing libraries for Nostr event creation, signing, and relaying.**
		- **Implement BIP85 hierarchical deterministic wallets for secure key management.**
		- **Digital Assets (RGB):**
		- **Choose or design appropriate RGB schemas for the types of digital assets you want to support.**
		- **Develop or utilize tools for issuing and managing RGB assets.**
		- **Integrate RGB wallets with the overall wallet management system.**
		   
		   **Phase 2: Interaction Module (Omniverse):**
		- **Omniverse Environment Setup:**
		- **Deploy an Omniverse Nucleus server to manage collaborative scenes and 3D assets.**
		- **Design and create the initial 3D environment(s) using USD (Universal Scene Description).**
		- **Consider incorporating elements from your existing visualizations and research.**
		- **Agent Integration:**
		- **Develop avatar systems for both human and AI agents within Omniverse.**
		- **Implement controls and interactions for agents within the 3D environment.**
		- **Explore the use of Omniverse Kit SDK for advanced features and customizations.**
		- **Digital Asset Integration:**
		- **Develop methods to represent and interact with RGB digital assets within Omniverse scenes.**
		- **Implement ownership and transfer functionalities based on the underlying Bitcoin/RGB infrastructure.**
		- **Explore visual representations of ownership and asset metadata within the 3D environment.**
		   
		   **Phase 3: AI and Governance:**
		- **AI Agent Development:**
		- **Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).**
		- **Implement the D&D-inspired personality system and the wealth decay function.**
		- **Develop AI behaviors and decision-making processes aligned with the scene schema.**
		- **Scene Schema and Governance:**
		- **Define the rules and constraints for different scene types within a flexible schema framework.**
		- **Implement the SupraAgent (governance LLM) with its monitoring and evidence collection capabilities.**
		- **Develop mechanisms for encrypted evidence payloads and communication with relevant parties.**
		- **GenAI Integration:**
		- **Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.**
		- **Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.**
		   
		   **Phase 4: User Interface and Experience:**
		- **Nostr-based Chat Interface:**
		- **Develop a chat interface using Nostr as the communication protocol.**
		- **Integrate the chat interface within the Omniverse environment.**
		- **Enable secure and private communication between agents.**
		- **Wallet Integration:**
		- **Provide users with access to their digital wallets within the metaverse.**
		- **Enable users to manage their assets, view transaction history, and interact with the virtual economy.**
		- **Accessibility and Multimodality:**
		- **Explore ways to make the metaverse experience accessible to users with disabilities.**
		- **Support multiple interaction modalities (e.g., VR, AR, desktop, mobile).**
		   
		   **Additional Considerations:**
		- **Security:** Implement robust security measures at all levels, including encryption, access control, and regular security audits.
		- **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
		- **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
		- **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.
		  
		  **This development plan provides a roadmap for implementing your metaverse vision, step by step. By focusing on the core principles of your research and leveraging innovative technologies like Bitcoin, RGB, Nostr, and Omniverse, you are building a foundation for a truly unique and transformative metaverse experience.**

	- # Kill Switches?
		- ```In situations where AI systems pose catastrophic risks, it could be beneficial for regulators to verify that a set of AI chips are operated legitimately or to disable their operation (or a subset of it) if they violate rules.```
			- <iframe src="https://www.cser.ac.uk/media/uploads/files/Computing-Power-and-the-Governance-of-AI.pdf" style="width: 100%; height: 600px"></iframe>

		- ### Middle Path
	 - **Co-evolution of State and AI:** Envisions a scenario where AI and state structures co-evolve, balancing the benefits of technological advancements with the need for governance and societal stability.
	 - **Navigating Challenges:** Discusses the potential paths to achieving this balance, including regulatory frameworks, ethical AI development, and international cooperation to manage the impacts of AI on global stability and human welfare.

		- ### Mismatch and Adaptation
	 - **Rapid Technological Evolution:** Details the rapid pace of technological evolution, particularly in AI, and the challenges it poses to existing societal and institutional structures.
	 - **Slower Institutional Adaptation:** Discusses the slower pace of adaptation in institutions, leading to a mismatch between the capabilities and impacts of AI and the ability of governance structures to effectively manage them.

		- ### Governance and Relevance
	 - **Loss of Direction of Fit:** Explores the potential for traditional governance structures to lose their relevance or "direction of f* as society and technology evolve, leading to political instability and societal unrest.
	 - **Adaptation Challenges:** Discusses the challenges and potential paths for institutions to adapt to a rapidly changing technological landscape, ensuring stability, fairness, and societal welfare.

	- ## AI and Future Governance

		- ### 2040 Vision of U.S. Government
	 - **Projected Drastic Changes:** Envisions how the U.S. government of 2040 might look drastically different due to the transformative effects of AI, drawing comparisons to the mid-20th-century government and pre-industrial era.
	 - **Transformational Impacts:** Discusses the specific ways in which AI might transform governance, including decision-making processes, service delivery, and citizen engagement.

		- ### Impact on Institutions
	 - **Democratization of AI:** Explores the potential for the democratization of powerful AI capabilities to be as destabilizing as historical technologies like the printing press, reshaping institutions and societal structures.
	 - **Reshaping 20th-Century Institutions:** Discusses the specific ways in which AI might reshape institutions inherited from the early 20th century, including governance, education, healthcare, and labor markets.

	- ### Governance Vacuum

			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The color-coded layers help visualize the different types of components:
				- Blue represents core framework layers
				- Green represents communication and protocol layers

	- ## Trust, Accessibility, Governance, and Safeguarding:
		- The Metaverse faces challenges, including poor adoption, overstated market need, and a lack of genuine digital society use cases. [[Privacy, Trust and Safety]] abuses by incumbent providers have created an opportunity for a more open internet. Emerging markets face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation.

	- ### Learning from Past Failures:
		- Learning from past failures and addressing challenges head-on will be critical to the successful development of an open-source Metaverse. Trust, accessibility, governance, and safeguarding issues must be thoughtfully considered and addressed to build a secure and user-friendly platform.

					- #### Roblox Event
						- A user-generated event within the Roblox platform.
						- Incorporates user-generated content and event-specific governance.

					- #### Unreal-based MMORPG
						- A massively multiplayer online role-playing game built using the Unreal Engine.
						- Features PvP interactions and MMORPG-specific governance.

						- #### AI Governance
							- Implementing and enforcing rules and regulations.
							- Utilizing the governance-related entities from the ontology, such as GovernanceStructure and MetaversePolicy.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:GovernanceStructure",
								      "narrativegoldmine:Class",
								        "@value": "Represents the governance models and structures within the metaverse."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								        "@id": "narrativegoldmine:MetaverseScene"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:GovernanceStructure"
								  ```

- # Conclusion
	- The Agentic Mycelia presents a vision for a decentralized and interconnected metaverse ecosystem.
		- It emphasizes:
			- Interoperability
			- Adaptable governance
			- User empowerment
			- Control of personal data

	- ### PolitiFi: Early Political Speculation
		- Financialisation of opinion could lead governance policies in internet spaces
		- Two-way dialogue between agents, formal governance structures, and external entities like policy makers
		- Arguably could incentivises deeper understanding of policy mechanisms

- # Anacyclosis
	- It’s interesting in the current global political moment to look briefly at Anacyclosis. This is a political theory attributed to the ancient Greek historian Polybius, which posits that political systems evolve in a cyclical manner. The theory is based on the observation that governments tend to progress through six stages, each corresponding to a specific form of governance: monarchy, tyranny, aristocracy, oligarchy, democracy, and ochlocracy (mob rule). These stages are organized into three pairs, with each pair consisting of a ’good’ form of governance and its corresponding ’bad’ form.
		- Democracy (benign) -&gt; Ochlocracy (corrupt): The populace, dissatisfied with the oppressive rule of the oligarchs, may rise up and establish a democracy, which is the rule by the majority of the people through voting and participation in the political process. Democracy has the potential to create a fair and representative system of governance. However, as the democratic process becomes more susceptible to demagoguery, populism, and factionalism, it can devolve into ochlocracy or mob rule, where the government is influenced or controlled by unruly masses.
	- According to Polybius, these stages form a continuous cycle, as one formof governance gives way to another, and each form eventually becomes corrupted and degenerates into its corresponding ’bad’ form. The theoryof anacyclosis suggests that political systems are inherently unstable,with each form of governance containing the seeds of its owndestruction.
	- As unelected technocrats, the WEF’s impact on global policy can be observed through these aspects:
		- Convening power: The WEF’s Davos meeting is a high-profile event that attracts prominent political figures, business executives, and other influential individuals. This ability to assemble people allows the WEF to initiate conversations on global issues, create networks, and establish connections among key players. These interactions can lead to ideas and initiatives that might eventually shape global policy.
		- Public-private cooperation: The WEF actively promotes collaboration between the public and private sectors in addressing global challenges. By fostering partnerships and facilitating dialogue between these sectors, the WEF can help drive the development and implementation of policies that require cooperation between governments, businesses, and civil society.
	- Despite its influence, critics argue that the WEF’s position as unelected technocrats raises concerns about the organization’s legitimacy and accountability. They contend that the WEF’s ability to shape global policy without being directly answerable to citizens canundermine democratic processes and result in policies that prioritizethe interests of elites over the broader public. However, others arguethat the WEF’s role in facilitating dialogue and collaboration is essential for tackling complex global challenges that require coordinated action across sectors and borders.
		- Society
		- Technology
	- The report emphasizes that the erosion of social cohesion has been a significant global issue since the start of the COVID-19 crisis. Inaddressing these challenges, the WEF suggests that public-private collaborations are necessary to ensure effective decision-making and to safeguard the future of humanity.
	- The report also highlights the increasing digital dependency that intensifies cyberthreats, as the WEF has long warned of the potential for a significant cyber pandemic. The rapid spread of a cyber attack with “COVID-like characteristics” could potentially cause more damage than any biological virus.
	- The WEF Global Risks Report 2022 delves further into the potential consequences of a cyber pandemic. In a section titled “Shocks to ReflectUpon” the report explores the possibility of a wide-ranging and costly attack that could lead to cascading failures in systemically important businesses and disrupt services, ultimately undermining digital transformation efforts made in recent year.
	- The report also emphasizes the need for governments to address cyberthreats and warns that without mitigation, the escalation ofcyber warfare and the disruption of societies could result in a loss oftrust in governments’ ability to act as digital stewards.
	- There is a growing awareness of the role of banks in the economy, and agrowing desire for greater transparency and accountability. There isalso a growing mistrust of banks, particularly in light of the GlobalFinancial Crisis. As we have seen, the advent of new technologies, suchas blockchain CBDC, and fintech, is changing the way that banks operateand interact with customers. This presents both opportunities andchallenges for the banking industry. As a final controversial aside,there is [industrysuspicion](https://apnews.com/article/signature-bank-fdic-barney-frank-silicon-valley-6ad86262d9945675a42d735b66ace4f2)that the collapse of SVB has been used as cover to close the final USbank servicing crypto, effectively decapitating the banking rails of the industry, and forcing it overseas. Were it not for the credibility ofthe people making these claims, this would seem pretty wild, but the prevailing winds are surely blowing against the disruptive potential ofa money system which is beyond the control of legislators.

		- #### NostrRocket: A Practical Example of DAO Structures on Nostr
			- NostrRocket, a project built on Nostr, showcases the practical application of these principles. It facilitates decentralised, non-custodial coordination, allowing contributors to collaborate on creating and managing digital objects – including software, merchandise, or content – without centralised control.
			- The project's governance is maintained through a system of "merits," which quantify and reward contributions based on predefined rules. Operating without servers or traditional centralisation, NostrRocket relies solely on Nostr relays. Contributors propose and approve merits based on their work, ensuring the project's direction and outcomes are shaped directly by those involved. This approach upholds decentralised governance principles and streamlines operations by eliminating the need for conventional accounting and oversight.

	- #### Economic Empowerment AI Actors
		- The creation of an open and economically empowered Metaverse, in which
		  AI actors can mediate governance issues and participate in economic
		  transactions, can lead to a more efficient and dynamic digital
		  ecosystem. This integration will enable new business models and
		  opportunities for all users, both human and AI.

	- #### Learning from Past Failures
		- Learning from past failures and addressing challenges head-on will be
		  critical to the successful development of an open-source Metaverse.
		  Trust, accessibility, governance, and safeguarding issues must be
		  thoughtfully considered and addressed to build a secure and
		  user-friendly platform.

	- # Kill Switches?
		- ```In situations where AI systems pose catastrophic risks, it could be beneficial for regulators to verify that a set of AI chips are operated legitimately or to disable their operation (or a subset of it) if they violate rules.```
			- <iframe src="https://www.cser.ac.uk/media/uploads/files/Computing-Power-and-the-Governance-of-AI.pdf" style="width: 100%; height: 600px"></iframe>

		- ### Middle Path
	 - **Co-evolution of State and AI:** Envisions a scenario where AI and state structures co-evolve, balancing the benefits of technological advancements with the need for governance and societal stability.
	 - **Radical Transparency Challenges:** Discusses the implications of such breakthroughs on societal norms, legal frameworks, and individual behaviors, stressing the need for society to anticipate and adapt to these transformative changes.

		- ### Governance and Relevance
	 - **Projected Drastic Changes:** Envisions how the U.S. government of 2040 might look drastically different due to the transformative effects of AI, drawing comparisons to the mid-20th-century government and pre-industrial era.
	 - **Transformational Impacts:** Discusses the specific ways in which AI might transform governance, including decision-making processes, service delivery, and citizen engagement.

	- ### Governance Vacuum
		- The [International AI Safety Report 2025](https://www.gov.uk/government/publications/international-ai-safety-report-2025) is a collaborative effort by 100 AI experts from 33 countries to build a shared scientific understanding of the risks associated with advanced AI.
	- [Welcome to the era of AI nationalism - The Economist](https://www.economist.com/business/2024/01/01/welcome-to-the-era-of-ai-nationalism)
	- [Future of Life Institute AI Safety Index](https://futureoflife.org/ai-safety-index/)

			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The color-coded layers help visualize the different types of components:

	- ### Trust, Accessibility, and Governance:

	- ### Learning from Past Failures:
		- Learning from past failures and addressing challenges head-on will be critical to the successful development of an open-source Metaverse. Trust, accessibility, governance, and safeguarding issues must be thoughtfully considered and addressed to build a secure and user-friendly platform.

						- #### AI Governance
							- Implementing and enforcing rules and regulations.
							- Utilizing the governance-related entities from the ontology, such as GovernanceStructure and MetaversePolicy.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:GovernanceStructure",
								      "narrativegoldmine:Class",
								        "@value": "Represents the governance models and structures within the metaverse."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								        "@id": "narrativegoldmine:MetaverseScene"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:GovernanceStructure"
								  ```

	- ### PolitiFi: Early Political Speculation
		- Financialisation of opinion could lead governance policies in internet spaces

		- #### NostrRocket: A Practical Example of DAO Structures on Nostr
			- NostrRocket, a project built on Nostr, showcases the practical application of these principles. It facilitates decentralised, non-custodial coordination, allowing contributors to collaborate on creating and managing digital objects – including software, merchandise, or content – without centralised control.
			- The project's governance is maintained through a system of "merits," which quantify and reward contributions based on predefined rules. Operating without servers or traditional centralisation, NostrRocket relies solely on Nostr relays. Contributors propose and approve merits based on their work, ensuring the project's direction and outcomes are shaped directly by those involved. This approach upholds decentralised governance principles and streamlines operations by eliminating the need for conventional accounting and oversight.

	- #### Economic Empowerment AI Actors
		- The creation of an open and economically empowered Metaverse, in which
		  AI actors can mediate governance issues and participate in economic
		  transactions, can lead to a more efficient and dynamic digital
		  ecosystem. This integration will enable new business models and
		  opportunities for all users, both human and AI.

	- #### Learning from Past Failures
		- Learning from past failures and addressing challenges head-on will be
		  critical to the successful development of an open-source Metaverse.
		  Trust, accessibility, governance, and safeguarding issues must be
		  thoughtfully considered and addressed to build a secure and
		  user-friendly platform.

	- ## Three Possible Futures id:: 65929cb3-95b4-454b-8c9e-7ae231aec377
	 - **Co-evolution of State and AI:** Envisions a scenario where AI and state structures co-evolve, balancing the benefits of technological advancements with the need for governance and societal stability.
	 - **Radical Transparency Challenges:** Discusses the implications of such breakthroughs on societal norms, legal frameworks, and individual behaviors, stressing the need for society to anticipate and adapt to these transformative changes.

		- ### Accelerating Toward Divergent Futures
	 - **Democratization of AI:** Explores the potential for rapid democratization of AI technology, leading to widespread access and use, and the societal implications of such a scenario.
	 - **Transformational Impacts:** Discusses the specific ways in which AI might transform governance, including decision-making processes, service delivery, and citizen engagement.

			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The color-coded layers help visualize the different types of components:

	- ### Trust, Accessibility, and Governance:
		- As the digital landscape continues to evolve, the open-source Metaverse system must be flexible and adaptable to meet changing needs and expectations. Continuous innovation and collaboration within the industry will be crucial for the success and longevity of the Metaverse as a transformative digital society platform.

						- #### AI Governance
							- Implementing and enforcing rules and regulations.
							- Utilizing the governance-related entities from the ontology, such as GovernanceStructure and MetaversePolicy.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:GovernanceStructure",
								      "narrativegoldmine:Class",
								    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
								      {
								        "@id": "narrativegoldmine:MetaverseEntity"
								      },
								      {
								        "@id": "_:N7734f53c103846fba0f7f099a17df575"
								      },
								      {
								        "@id": "_:Nd9e50a6e98a54130bbc92b9a80ca3bfb"
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								    "@id": "narrativegoldmine:regulatedBy",
								    "@type": [
								      "http://www.w3.org/2002/07/owl#ObjectProperty"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#domain": [
								      {
								        "@id": "narrativegoldmine:VirtualEconomy"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
      Y --> Z(Machine-Machine Translation)
      Y --> AA(Value Translation)
      Y --> AB(Digital Object Variations)
      Y --> AC(Safeguarding)
      Y --> AD(Law Enforcement Handshake)
      Y --> AE(PKI Infrastructure)
  
      AF[Onboarding Agents]
      AF --> AG(Preference Setup)
      AF --> AH(Living Contract Formation)
  
      AI[Jurisdictional/Legal Agents]
      AI --> AJ(Monitoring Network Activity)
      AI --> AK(Providing Transparency)
      AI --> AL(Enforcing Legal Standards)
  
      AM[Interfaces and Interactions]
      AM --> AN(Inter-Instance Communication)

	- ### PolitiFi: Early Political Speculation
		- Financialisation of opinion could lead governance policies in internet spaces
	- Democratised investment in cultural trends
		- Social media-driven AI entertainment like the AI terminal twitter account are driving actual tangible outcomes for the guiding AI actors. This creates incentives for AI agent development potentially fostering more autonomous, interconnected AI systems connected to real world events.

	- #### Learning from Past Failures
		- Learning from past failures and addressing challenges head-on will be
		  critical to the successful development of an open-source Metaverse.
		  Trust, accessibility, governance, and safeguarding issues must be
		  thoughtfully considered and addressed to build a secure and
		  user-friendly platform.

		- ### Ethical Considerations
	 - **Co-evolution of State and AI:** Envisions a scenario where AI and state structures co-evolve, balancing the benefits of technological advancements with the need for governance and societal stability.
	 - **Radical Transparency Challenges:** Discusses the implications of such breakthroughs on societal norms, legal frameworks, and individual behaviors, stressing the need for society to anticipate and adapt to these transformative changes.

- ## What's changing
	- There may now be an inflection point in the organisational topology of the internet, because of trust abuses and [[Digital Society Harms]] perpetuated by the incumbent providers like [[Facebook Meta]] and [Google](https://archive.ph/AVRL9). This moment has been calling itself Web3, but the moniker is fraught with problems, and somewhat meaningless. The drivers are real.
	- AI & machine learning and especially generative art is further blurring these boundaries. A better term for AI/ML is supported creativity and/or augmented intelligence. While current models such as GPT3.5 and LAION based generative systems are already causing a global stir, and [[large language models]] are already forcing global debate about general AI.
	- Trust, accessibility, governance, and safeguarding, are hard problems, and made more complex by unrecorded social flow in immersive social VR.
	- It is likely that the major players in AI at this time will simply leverage their models as "soft power", in the final analysis simply masking more advertising revenue, [which is their lifeblood.](https://gerrymcgovern.com/ai-is-not-your-friend/)
	- The challenge is to build a topologically flat, inclusive, permissionless, federated, and open digital society, with economically empowered ML and AI actors, which can mediate governance issues, transparently, according to well constructed custom schemas, between cryptographically verifiable economic users (human or AI).
	- New open source [supported creativity, augmented intelligence] tooling from Stability and Llama potentially removes many of the problems with accessibility, creativity, language barriers, safeguarding, and governance. This is a huge, complex, and fast moving area, but tremendously exciting.

- ## What's changing
	- There may now be an inflection point in the organisational topology of the internet, because of trust abuses and [[Digital Society Harms]] perpetuated by the incumbent providers like [[Facebook Meta]] and [Google](https://archive.ph/AVRL9). This moment has been calling itself Web3, but the moniker is fraught with problems, and somewhat meaningless. The drivers are real.
	- AI & machine learning and especially generative art is further blurring these boundaries. A better term for AI/ML is supported creativity and/or augmented intelligence. While current models such as GPT3.5 and LAION based generative systems are already causing a global stir, and [[large language models]] are already forcing global debate about general AI.
	- Trust, accessibility, governance, and safeguarding, are hard problems, and made more complex by unrecorded social flow in immersive social VR.
	- It is likely that the major players in AI at this time will simply leverage their models as "soft power", in the final analysis simply masking more advertising revenue, [which is their lifeblood.](https://gerrymcgovern.com/ai-is-not-your-friend/)
	- The challenge is to build a topologically flat, inclusive, permissionless, federated, and open digital society, with economically empowered ML and AI actors, which can mediate governance issues, transparently, according to well constructed custom schemas, between cryptographically verifiable economic users (human or AI).
	- New open source [supported creativity, augmented intelligence] tooling from Stability and Llama potentially removes many of the problems with accessibility, creativity, language barriers, safeguarding, and governance. This is a huge, complex, and fast moving area, but tremendously exciting.
		- The proliferation of AI threatens to reverse economic gains made by developing countries in recent decades, worsening poverty and inequality
		- AI technologies may be unsuited to local contexts and conditions in the developing world
		- Some positive signs are emerging from national AI policies focused on inclusion in certain countries
		- Steering AI research and development to maximise social value and redistributing power in AI governance could make systems more suitable to diverse global contexts
		- Non-distortionary taxation could potentially compensate those displaced or disadvantaged by AI to enable Pareto improvements
		- Local inferencing on virtually ubiquitous mobile phones could enable people to work and learn in their own language and style without internet charges, potentially mitigating inequalities
	- I
		- **Anti-Scale Philosophy**: Wikipedia operates through micro-communities, allowing for diverse expertise and governance continuity.
		- **Democratic Governance**: The need for democratic governance to articulate its value proposition for public participation.

- ## Title: U.S. Treasury Report on DeFi: Fiat Still Preferred by Criminals Over Crypto
		- DeFi is decentralised finance, and might only exist because of partialregulatory capture of Bitcoin. If peer-to-peer Bitcoin secured yield andloans etc were allowed then it seems unlikely that the less secure andmore convoluted DeFi products would have found a footing. DeFi has beencommonplace over the last couple years, growing from [essentially zeroto $100B](https://a16zcrypto.com/state-of-crypto-report-a16z-2022/) overthe last two or three. It enables trading of value, loans, and interest(yield) without onerous KYC. If Bitcoin’s ethos is to develop at a slowand well checked rate, and Ethereum’s ethos is to move fast and breakthings, then DeFi could best be described as throwing mud and hopingsome sticks. A counter to this comes from Ross Stevens, head of NYDig[who says](https://nydig.com/on-impossible-things-before-breakfast)it“The concept of decentralized finance is powerful, noble, and worthyof a lifetime of focused effort.”. This may be true in principle, butcertainly isn’t the case as things stand.
		- - ..a “decentralisation illusion” in DeFi due to the inescapable need for centralised governance and the tendency of blockchain consensus mechanisms to concentrate power. DeFi‘s inherent governance structures are the natural entry points for public policy.
		- Many more custodial options exist for loans (CASA, Nexo, Ledn, Abraetc). These might not really fit the definition of DeFi at all. Many ofthese centralised DeFi companies (CeDeFi) have imploded in the wake ofthe Terra/Luna collapse since they were generating yield from oneanother and ultimately Terra. The maxim seems to be that if you don’tknow how the system is monetised then you are likely the product. Asmentioned, DeFi itself weathered the recent market turmoil comparativelywell and it’s possible that as these products evolve they may be usefulto companies who have Bitcoin and stablecoins on their balance sheetlong term. Dan Held maintains an [onlinespreadsheet](https://docs.google.com/spreadsheets/d/1ZoapTCl76wahFMeNISSx9UdC3QBx-zC_jY4Le1H5Sdg/htmlview#)which compares these products.
		- **Functionality**: DeFi aims to automate and make traditional finance more accessible through decentralized applications (dApps).

- ## What's changing
	- There may now be an inflection point in the organisational topology of the internet, because of trust abuses and [[Digital Society Harms]] perpetuated by the incumbent providers like [[Facebook Meta]] and [Google](https://archive.ph/AVRL9). This moment has been calling itself Web3, but the moniker is fraught with problems, and somewhat meaningless. The drivers are real.
	- AI & machine learning and especially generative art is further blurring these boundaries. A better term for AI/ML is supported creativity and/or augmented intelligence. While current models such as GPT3.5 and LAION based generative systems are already causing a global stir, and [[large language models]] are already forcing global debate about general AI.
	- Trust, accessibility, governance, and safeguarding, are hard problems, and made more complex by unrecorded social flow in immersive social VR.
	- It is likely that the major players in AI at this time will simply leverage their models as "soft power", in the final analysis simply masking more advertising revenue, [which is their lifeblood.](https://gerrymcgovern.com/ai-is-not-your-friend/)
	- The challenge is to build a topologically flat, inclusive, permissionless, federated, and open digital society, with economically empowered ML and AI actors, which can mediate governance issues, transparently, according to well constructed custom schemas, between cryptographically verifiable economic users (human or AI).
	- New open source [supported creativity, augmented intelligence] tooling from Stability and Llama potentially removes many of the problems with accessibility, creativity, language barriers, safeguarding, and governance. This is a huge, complex, and fast moving area, but tremendously exciting.
	- Using new image generation ML it may be possible to build new kind of collaborative global networks for creative industries, ideating in simplistic immersive spaces while instantly creating scenes which can be stylised using verbal commands in real-time. This may open up and enfranchise fresh ideas from a wider cultural pool.
	- Such teams could be far more ad-hoc by experimenting with the designs outlined in this book. This kind of genuine digital society use case is something sorely lacking in large scale attempts such as Meta Horizons. It need not be complex or large scale, but it must be secure, trusted, and task appropriate. We think we can deliver this and conversations with the industry suggest that there is excitement and cautious appetite.
	- With focus on decentralized and generative technologies, we believe the greatest value we can provide is advancing capabilities that empower users and diversify governance models. Directly mediating harms involves subjective tradeoffs we are not comfortable imposing on others. Our goal is to expand possibilities for human flourishing, while avoiding direct content moderation that restricts expression based on our own limited perspec­tives. We aim to enable solutions, not dictate them. As the report advocates, addressing T&S issues requires a broad coalition encompassing civil society, government, academia, and industry.

- #### Trust, Accessibility, Governance, and Safeguarding
	- The Metaverse faces numerous challenges, including poor adoption rates, overstated market need, and a lack of genuine digital society use cases. Meanwhile trust abuses by incumbent providers have led to potential inflection points in the organization of the wider internet. Moreover, emerging markets and less developed nations face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation, learning from these lessons.

- ## [](https://github.com/flossverse#augmented-intelligence) Augmented Intelligence
	- AI & machine learning and especially generative art is further blurring these boundaries. A better term for AI/ML is supported creativity and/or augmented intelligence. While current models such as GPT3.5 and LAION based generative systems are already causing a global stir, and [[large language models]] are already forcing global debate about general AI.
	- Trust, accessibility, governance, and safeguarding, are hard problems, and made more complex by unrecorded social flow in immersive social VR.
	- It is likely that the major players in AI at this time will simply leverage their models as "soft power", in the final analysis simply masking more advertising revenue, [which is their lifeblood.](https://gerrymcgovern.com/ai-is-not-your-friend/)
	- The challenge is to build a topologically flat, inclusive, permissionless, federated, and open digital society, with economically empowered ML and AI actors, which can mediate governance issues, transparently, according to well constructed custom schemas, between cryptographically verifiable economic users (human or AI).
	- New open source [supported creativity, augmented intelligence] tooling from Stability and Llama potentially removes many of the problems with accessibility, creativity, language barriers, safeguarding, and governance. This is a huge, complex, and fast moving area, but tremendously exciting.
	- Using new image generation ML it may be possible to build new kind of collaborative global networks for creative industries, ideating in simplistic immersive spaces while instantly creating scenes which can be stylised using verbal commands in real-time. This may open up and enfranchise fresh ideas from a wider cultural pool.
	- Such teams could be far more ad-hoc by experimenting with the designs outlined in this book. This kind of genuine digital society use case is something sorely lacking in large scale attempts such as Meta Horizons. It need not be complex or large scale, but it must be secure, trusted, and task appropriate. We think we can deliver this and conversations with the industry suggest that there is excitement and cautious appetite.
	- With focus on decentralized and generative technologies, we believe the greatest value we can provide is advancing capabilities that empower users and diversify governance models. Directly mediating harms involves subjective tradeoffs we are not comfortable imposing on others. Our goal is to expand possibilities for human flourishing, while avoiding direct content moderation that restricts expression based on our own limited perspec­tives. We aim to enable solutions, not dictate them. As the report advocates, addressing T&S issues requires a broad coalition encompassing civil society, government, academia, and industry.

- ## Governance and Control

- #### Trust, Accessibility, Governance, and Safeguarding
	- The Metaverse faces numerous challenges, including poor adoption rates, overstated market need, and a lack of genuine digital society use cases. Meanwhile trust abuses by incumbent providers have led to potential inflection points in the organization of the wider internet. Moreover, emerging markets and less developed nations face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation, learning from these lessons.

- ## [](https://github.com/flossverse#augmented-intelligence) Augmented Intelligence
	- AI & machine learning and especially generative art is further blurring these boundaries. A better term for AI/ML is supported creativity and/or augmented intelligence. While current models such as GPT3.5 and LAION based generative systems are already causing a global stir, and [[large language models]] are already forcing global debate about general AI.
	- Trust, accessibility, governance, and safeguarding, are hard problems, and made more complex by unrecorded social flow in immersive social VR.
	- It is likely that the major players in AI at this time will simply leverage their models as "soft power", in the final analysis simply masking more advertising revenue, [which is their lifeblood.](https://gerrymcgovern.com/ai-is-not-your-friend/)
	- The challenge is to build a topologically flat, inclusive, permissionless, federated, and open digital society, with economically empowered ML and AI actors, which can mediate governance issues, transparently, according to well constructed custom schemas, between cryptographically verifiable economic users (human or AI).
	- New open source [supported creativity, augmented intelligence] tooling from Stability and Llama potentially removes many of the problems with accessibility, creativity, language barriers, safeguarding, and governance. This is a huge, complex, and fast moving area, but tremendously exciting.
	- Using new image generation ML it may be possible to build new kind of collaborative global networks for creative industries, ideating in simplistic immersive spaces while instantly creating scenes which can be stylised using verbal commands in real-time. This may open up and enfranchise fresh ideas from a wider cultural pool.
	- Such teams could be far more ad-hoc by experimenting with the designs outlined in this book. This kind of genuine digital society use case is something sorely lacking in large scale attempts such as Meta Horizons. It need not be complex or large scale, but it must be secure, trusted, and task appropriate. We think we can deliver this and conversations with the industry suggest that there is excitement and cautious appetite.
	- With focus on decentralized and generative technologies, we believe the greatest value we can provide is advancing capabilities that empower users and diversify governance models. Directly mediating harms involves subjective tradeoffs we are not comfortable imposing on others. Our goal is to expand possibilities for human flourishing, while avoiding direct content moderation that restricts expression based on our own limited perspec­tives. We aim to enable solutions, not dictate them. As the report advocates, addressing T&S issues requires a broad coalition encompassing civil society, government, academia, and industry.

- ## Governance and Control

## Context and Significance

AI governance provides the institutional and procedural framework necessary for managing AI systems in a manner that balances innovation with responsibility. It establishes clear roles, responsibilities, decision-making processes, and oversight mechanisms that enable organisations to realise the benefits of AI whilst mitigating potential harms. Effective AI governance integrates technical, ethical, legal, and business considerations into a coherent management structure.

The NIST AI Risk Management Framework emphasises governance as a foundational function that enables organisations to cultivate and formalise structures, policies, and procedures for managing AI risks. ISO/IEC 42001 establishes governance as a core requirement for AI management systems, specifying the need for top management commitment, defined roles and responsibilities, and integrated risk management processes.

AI governance operates at multiple levels—from organisational policies and procedures to technical controls and monitoring systems—and must adapt to evolving regulatory landscapes, technological capabilities, and societal expectations.

## Key Characteristics

- **Multi-layered structure**: Operates at strategic, tactical, and operational levels
- **Stakeholder-inclusive**: Incorporates diverse perspectives and accountability mechanisms
- **Risk-based approach**: Prioritises governance activities according to AI system risk levels
- **Lifecycle coverage**: Addresses AI systems from conception through decommissioning
- **Adaptive capacity**: Evolves in response to technological and regulatory changes
- **Documentation requirements**: Maintains records of decisions, processes, and outcomes
- **Oversight mechanisms**: Includes review boards, audits, and monitoring processes
- **Integration requirement**: Aligns with broader organisational governance structures

## Relationships

- **Enables**: AI Lifecycle, AI Development, AI Deployment, AI Monitoring
- **Requires**: Human Oversight, Stakeholder engagement, Risk Management
- **Supports**: Ethical AI, Responsible AI, Trustworthy AI
- **Implements**: AI Impact Assessment, AI Audit, Accountability frameworks
- **Defines**: AI Operator, AI Provider, AI User roles and responsibilities
- **Incorporates**: Fairness, Transparency, Safety principles
- **Interacts with**: Legal frameworks, regulatory requirements, industry standards

## Examples and Applications

1. **Healthcare AI Governance**: Hospital establishes AI governance board comprising clinicians, ethicists, legal experts, and patient representatives to oversee deployment of diagnostic AI systems, review clinical validation evidence, and monitor performance metrics
2. **Financial Services**: Bank implements tiered governance structure with executive AI steering committee, technical review panels, and operational monitoring teams to manage credit scoring, fraud detection, and trading algorithms
3. **Public Sector**: Government agency develops AI governance framework aligned with NIST AI RMF, establishing clear approval processes, risk assessment requirements, and public accountability mechanisms for automated decision systems
4. **Research Institution**: University creates AI ethics committee with authority to review proposed AI research projects, assess potential impacts, and require modifications to protect research subjects and ensure responsible innovation

## ISO/IEC Standards Alignment

**ISO/IEC 42001:2023** (AI Management Systems):
- Clause 5: Leadership and top management responsibilities for AI governance
- Clause 6: Planning requirements for AI objectives and risk management
- Clause 9: Performance evaluation and monitoring requirements
- Clause 10: Continual improvement of AI management system

**ISO/IEC 23894:2023** (AI Risk Management):
- Framework for establishing governance structures for AI risk management
- Requirements for roles, responsibilities, and accountability mechanisms

**ISO/IEC 38507:2022** (Governance of IT):
- Governance principles applicable to AI systems
- Framework for evaluate, direct, and monitor activities

## NIST AI RMF Integration

**GOVERN Function**:
- GV-1.1: Legal and regulatory requirements identified and managed
- GV-1.2: Roles and responsibilities clearly defined
- GV-1.3: Organisational policies address AI risks
- GV-1.4: Governance structures and processes established
- GV-1.5: Processes for ongoing monitoring and review implemented
- GV-1.6: Mechanisms for addressing emerging risks established

**Cross-cutting Application**:
- Governance provides foundation for MAP, MEASURE, and MANAGE functions
- Ensures organisational capacity to implement risk management practices
- Establishes accountability for AI system outcomes

## Implementation Considerations

**Organisational Requirements**:
- Executive leadership commitment and resource allocation
- Clear governance structure with defined authorities and escalation paths
- Integration with existing risk management and compliance frameworks
- Cross-functional coordination mechanisms

**Documentation and Records**:
- Governance policies, procedures, and standards
- Role descriptions and responsibility matrices
- Decision records and approval documentation
- Risk assessments and mitigation plans
- Audit trails and monitoring reports

**Capabilities Development**:
- AI literacy programmes for governance participants
- Technical expertise for informed decision-making
- Ethical reasoning and impact assessment skills
- Change management and adaptation processes

**Challenges**:
- Balancing innovation speed with governance rigour
- Maintaining expertise amid rapid technological change
- Coordinating across organisational silos
- Addressing novel risks without established precedents
- Scaling governance to diverse AI applications

## Regulatory and Policy Context

**EU AI Act**: Requires high-risk AI systems to have governance and risk management frameworks, with specific obligations for providers and deployers

**UK National AI Strategy**: Emphasises need for proportionate, innovation-friendly governance approaches whilst ensuring public trust

**OECD AI Principles**: Calls for accountable AI governance with human oversight and transparency

**Sector-specific Requirements**: Additional governance obligations in regulated sectors (finance, healthcare, transportation)

## Related Terms

- **AI Lifecycle**: The phases governed by AI governance frameworks
- **Human Oversight**: Key governance mechanism for maintaining control
- **AI Impact Assessment**: Governance tool for evaluating AI system effects
- **Ethical AI**: Values embedded through governance processes
- **AI Audit**: Governance verification mechanism
- **Accountability**: Core governance principle and outcome
- **Risk Management**: Integrated component of AI governance

## References

1. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
2. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
3. ISO/IEC 38507:2022, *Information technology — Governance of IT — Governance implications of the use of artificial intelligence by organizations*
4. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)* (2021)
5. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)

## See Also

- [[AI Lifecycle]]
- [[Human Oversight]]
- [[AI Impact Assessment]]
- [[Ethical AI]]
- [[Responsible AI]]
- [[AI Audit]]
- [[Accountability]]
- [[Risk Management]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# AI Governance
		  
		  **Term ID**: AI-0091
		  **Category**: Foundational Concept
		  **Ontology**: AI-Grounded Ontology
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  The system of rules, practices, processes, and organisational structures that guide the responsible development, deployment, and use of artificial intelligence systems throughout their lifecycle, ensuring alignment with ethical principles, legal requirements, risk management frameworks, and stakeholder values whilst promoting accountability, transparency, and continuous improvement.
		  
		  ## Context and Significance
		  
		  AI governance provides the institutional and procedural framework necessary for managing AI systems in a manner that balances innovation with responsibility. It establishes clear roles, responsibilities, decision-making processes, and oversight mechanisms that enable organisations to realise the benefits of AI whilst mitigating potential harms. Effective AI governance integrates technical, ethical, legal, and business considerations into a coherent management structure.
		  
		  The NIST AI Risk Management Framework emphasises governance as a foundational function that enables organisations to cultivate and formalise structures, policies, and procedures for managing AI risks. ISO/IEC 42001 establishes governance as a core requirement for AI management systems, specifying the need for top management commitment, defined roles and responsibilities, and integrated risk management processes.
		  
		  AI governance operates at multiple levels—from organisational policies and procedures to technical controls and monitoring systems—and must adapt to evolving regulatory landscapes, technological capabilities, and societal expectations.
		  
		  ## Key Characteristics
		  
		  - **Multi-layered structure**: Operates at strategic, tactical, and operational levels
		  - **Stakeholder-inclusive**: Incorporates diverse perspectives and accountability mechanisms
		  - **Risk-based approach**: Prioritises governance activities according to AI system risk levels
		  - **Lifecycle coverage**: Addresses AI systems from conception through decommissioning
		  - **Adaptive capacity**: Evolves in response to technological and regulatory changes
		  - **Documentation requirements**: Maintains records of decisions, processes, and outcomes
		  - **Oversight mechanisms**: Includes review boards, audits, and monitoring processes
		  - **Integration requirement**: Aligns with broader organisational governance structures
		  
		  ## Relationships
		  
		  - **Enables**: AI Lifecycle, AI Development, AI Deployment, AI Monitoring
		  - **Requires**: Human Oversight, Stakeholder engagement, Risk Management
		  - **Supports**: Ethical AI, Responsible AI, Trustworthy AI
		  - **Implements**: AI Impact Assessment, AI Audit, Accountability frameworks
		  - **Defines**: AI Operator, AI Provider, AI User roles and responsibilities
		  - **Incorporates**: Fairness, Transparency, Safety principles
		  - **Interacts with**: Legal frameworks, regulatory requirements, industry standards
		  
		  ## Examples and Applications
		  
		  1. **Healthcare AI Governance**: Hospital establishes AI governance board comprising clinicians, ethicists, legal experts, and patient representatives to oversee deployment of diagnostic AI systems, review clinical validation evidence, and monitor performance metrics
		  2. **Financial Services**: Bank implements tiered governance structure with executive AI steering committee, technical review panels, and operational monitoring teams to manage credit scoring, fraud detection, and trading algorithms
		  3. **Public Sector**: Government agency develops AI governance framework aligned with NIST AI RMF, establishing clear approval processes, risk assessment requirements, and public accountability mechanisms for automated decision systems
		  4. **Research Institution**: University creates AI ethics committee with authority to review proposed AI research projects, assess potential impacts, and require modifications to protect research subjects and ensure responsible innovation
		  
		  ## ISO/IEC Standards Alignment
		  
		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 5: Leadership and top management responsibilities for AI governance
		  - Clause 6: Planning requirements for AI objectives and risk management
		  - Clause 9: Performance evaluation and monitoring requirements
		  - Clause 10: Continual improvement of AI management system
		  
		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - Framework for establishing governance structures for AI risk management
		  - Requirements for roles, responsibilities, and accountability mechanisms
		  
		  **ISO/IEC 38507:2022** (Governance of IT):
		  - Governance principles applicable to AI systems
		  - Framework for evaluate, direct, and monitor activities
		  
		  ## NIST AI RMF Integration
		  
		  **GOVERN Function**:
		  - GV-1.1: Legal and regulatory requirements identified and managed
		  - GV-1.2: Roles and responsibilities clearly defined
		  - GV-1.3: Organisational policies address AI risks
		  - GV-1.4: Governance structures and processes established
		  - GV-1.5: Processes for ongoing monitoring and review implemented
		  - GV-1.6: Mechanisms for addressing emerging risks established
		  
		  **Cross-cutting Application**:
		  - Governance provides foundation for MAP, MEASURE, and MANAGE functions
		  - Ensures organisational capacity to implement risk management practices
		  - Establishes accountability for AI system outcomes
		  
		  ## Implementation Considerations
		  
		  **Organisational Requirements**:
		  - Executive leadership commitment and resource allocation
		  - Clear governance structure with defined authorities and escalation paths
		  - Integration with existing risk management and compliance frameworks
		  - Cross-functional coordination mechanisms
		  
		  **Documentation and Records**:
		  - Governance policies, procedures, and standards
		  - Role descriptions and responsibility matrices
		  - Decision records and approval documentation
		  - Risk assessments and mitigation plans
		  - Audit trails and monitoring reports
		  
		  **Capabilities Development**:
		  - AI literacy programmes for governance participants
		  - Technical expertise for informed decision-making
		  - Ethical reasoning and impact assessment skills
		  - Change management and adaptation processes
		  
		  **Challenges**:
		  - Balancing innovation speed with governance rigour
		  - Maintaining expertise amid rapid technological change
		  - Coordinating across organisational silos
		  - Addressing novel risks without established precedents
		  - Scaling governance to diverse AI applications
		  
		  ## Regulatory and Policy Context
		  
		  **EU AI Act**: Requires high-risk AI systems to have governance and risk management frameworks, with specific obligations for providers and deployers
		  
		  **UK National AI Strategy**: Emphasises need for proportionate, innovation-friendly governance approaches whilst ensuring public trust
		  
		  **OECD AI Principles**: Calls for accountable AI governance with human oversight and transparency
		  
		  **Sector-specific Requirements**: Additional governance obligations in regulated sectors (finance, healthcare, transportation)
		  
		  ## 2024-2025: From Voluntary Frameworks to Mandated Structures
		  id:: ai-governance-recent-developments

		  The years 2024 and 2025 marked a watershed transition whereby AI governance evolved from voluntary best practice frameworks into **legally mandated structures** backed by substantial penalties, whilst simultaneously witnessing a dramatic surge in **board-level oversight**, organisational investments in governance infrastructure, and the maturation of international standards.

		  ### Board Oversight Transformation

		  The most striking governance shift occurred at the **board level**: nearly **half of Fortune 100 companies** (48%) now specifically cite AI risk as part of board oversight responsibilities, representing a **threefold increase** from 16% in 2024, according to research from the **EY Center for Board Matters**.

		  AI-related expertise in director biographies and skills matrices jumped to **44% in 2025** from 26% in 2024, whilst **40% of companies** assigned AI oversight to at least one board-level committee, compared with just 11% the previous year. This dramatic transformation reflected recognition that AI posed strategic, reputational, and regulatory risks requiring board-level attention, not merely technical management.

		  ### EU AI Act Governance Mandates

		  The **EU AI Act**, effective 1st August 2024, established comprehensive governance requirements that became the global benchmark. **Article 9** requires providers of high-risk AI systems to implement a **quality management system** encompassing:

		  - **Strategy for regulatory compliance** across the AI lifecycle
		  - **Design, quality control, and quality assurance** techniques and procedures
		  - **Examination, test, and validation** procedures before, during, and after development
		  - **Technical specifications**, including standards to be applied
		  - **Record-keeping systems** and procedures
		  - **Resource management**, including security of supply measures
		  - **Accountability framework** with clear responsibilities
		  - **Post-market monitoring** systems

		  **Article 17** establishes requirements for providers to maintain a **quality management system** that is "systematic, regularly updated, and maintained," with documented policies, procedures, and instructions. Non-compliance faces penalties up to **€35 million or 7% of worldwide annual turnover**.

		  ### ISO/IEC 42001:2023 Adoption Wave

		  **ISO/IEC 42001:2023**, the first international standard for AI management systems published in December 2023, experienced rapid adoption throughout 2024-2025 as the de facto certification framework for AI governance maturity. Major certification bodies including **BSI, TÜV, and SGS** certified hundreds of organisations, creating market pressure for competitors to achieve certification.

		  The standard requires **top management commitment**, defined governance structures, documented policies and procedures, risk management integration, and continual improvement processes. Organisations pursuing certification discovered that achieving compliance required **cultural transformation**, not merely documentation, as ISO 42001 demands demonstrated leadership commitment and resource allocation.

		  ### U.S. State-Level Governance Patchwork

		  In the absence of comprehensive federal AI legislation, U.S. states enacted divergent governance frameworks in 2024, creating compliance complexity for organisations operating across states:

		  **Colorado's AI Act** (enacted 17th May 2024, effective February 2026) requires deployers of high-risk automated decision systems to implement:
		  - **Governance programmes** and documented policies
		  - **Risk assessments** conducted by competent personnel
		  - **Impact assessments** for algorithmic discrimination risks
		  - **Consumer notifications** when consequential decisions involve automated systems

		  **Utah** and **California** introduced their own approaches, with California's proposals including particularly stringent requirements for critical decision systems in employment, housing, credit, education, and healthcare.

		  ### NIST AI RMF Generative AI Profile

		  On 26th July 2024, **NIST** released the **Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile**, providing governance guidance specific to generative AI systems. The Profile identifies unique risks including:

		  - **CBRN information** (chemical, biological, radiological, nuclear)
		  - **Data privacy** risks from training on sensitive information
		  - **Confabulation** (hallucinations) affecting trustworthiness
		  - **Dangerous, violent, or hateful content** generation
		  - **Information integrity** risks including deepfakes and misinformation
		  - **Intellectual property** infringement concerns
		  - **Obscene, degrading, and/or abusive content** risks
		  - **Value chain and component integration** complexities

		  This Profile became essential for organisations governing generative AI deployments, providing actionable risk management frameworks aligned with the NIST AI RMF's GOVERN, MAP, MEASURE, and MANAGE functions.

		  ### The Governance Preparedness Gap

		  Whilst governance frameworks proliferated, organisational readiness lagged dangerously: only **12% of companies** felt "very prepared" to assess, manage, and recover from AI and AI governance risks in 2024-2025 surveys.

		  **42% lacked policies** to govern employee use of AI, whilst **75% lacked dedicated plans** to address generative AI risks specifically. This preparedness gap created exposure to both regulatory penalties and operational failures, driving urgent governance infrastructure investments.

		  ### Governance Technology and Automation

		  The complexity of AI governance drove demand for **governance technology** (GovTech) solutions automating compliance, risk assessment, and monitoring functions. **46.85% of GRC (Governance, Risk, Compliance) professionals** identified AI adoption as both an opportunity and a challenge, acknowledging that whilst the learning curve was steep, the potential to transform decision-making and scalability was too significant to ignore.

		  AI-powered GRC platforms emerged offering:
		  - **Automated compliance monitoring** against multiple regulatory frameworks
		  - **Risk assessment tools** applying frameworks like NIST AI RMF
		  - **Policy management systems** tracking regulatory changes
		  - **Audit trail automation** capturing governance decisions
		  - **Dashboard visualisation** providing board-level risk visibility

		  Paradoxically, organisations used AI to govern AI, raising second-order governance questions about the reliability and bias of governance automation tools themselves.

		  ### Sector-Specific Governance Maturation

		  **Financial Services**: Banking regulators issued detailed AI governance expectations building on existing model risk management frameworks (such as U.S. Federal Reserve SR 11-7). The **Basel Committee on Banking Supervision** issued guidance on AI governance in 2024, requiring banks to establish board-level AI oversight, independent risk functions, and model validation protocols.

		  **Healthcare**: The **FDA** expanded its AI/ML regulatory framework in 2024, introducing **Predetermined Change Control Plans** allowing certain algorithm updates without new authorisation, provided robust governance structures ensure safety and effectiveness. This required healthcare organisations to implement governance processes meeting FDA standards.

		  **Public Sector**: Government AI deployments faced intensifying scrutiny, with transparency and accountability requirements exceeding private sector standards. The **OMB Memorandum M-24-10** (March 2024) required U.S. federal agencies to implement AI governance structures, designate Chief AI Officers, and conduct impact assessments for rights-impacting AI.

		  ### Challenges and Tensions

		  The governance transformation of 2024-2025 exposed persistent challenges:

		  **Innovation vs. Control**: Organisations struggled to balance governance rigour with development velocity. Overly bureaucratic governance slowed innovation, whilst insufficient governance created compliance and operational risks.

		  **Expertise Scarcity**: Demand for AI governance expertise far exceeded supply. Organisations competed for professionals understanding both AI technology and governance frameworks, driving compensation inflation and talent poaching.

		  **Cross-Border Complexity**: Multinational organisations faced governance fragmentation across jurisdictions. An AI system compliant with EU AI Act governance requirements might not satisfy U.S. state requirements or Chinese regulations, requiring jurisdiction-specific governance adaptations.

		  **Measurement Difficulty**: Governance maturity remained challenging to quantify. Certification schemes verified processes but did not guarantee outcomes, raising concerns about "governance theatre" versus substantive risk reduction.

		  ## Related Terms

		  - **AI Lifecycle**: The phases governed by AI governance frameworks
		  - **Human Oversight**: Key governance mechanism for maintaining control
		  - **AI Impact Assessment**: Governance tool for evaluating AI system effects
		  - **Ethical AI**: Values embedded through governance processes
		  - **AI Audit**: Governance verification mechanism
		  - **Accountability**: Core governance principle and outcome
		  - **Risk Management**: Integrated component of AI governance

		  ## References
		  
		  1. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
		  2. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
		  3. ISO/IEC 38507:2022, *Information technology — Governance of IT — Governance implications of the use of artificial intelligence by organizations*
		  4. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)* (2021)
		  5. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)
		  
		  ## See Also
		  
		  - [[AI Lifecycle]]
		  - [[Human Oversight]]
		  - [[AI Impact Assessment]]
		  - [[Ethical AI]]
		  - [[Responsible AI]]
		  - [[AI Audit]]
		  - [[Accountability]]
		  - [[Risk Management]]
		  
		  ```

- public-access:: true
	- definition:: The system of rules, practices, processes, and organisational structures that guide the responsible development, deployment, and use of artificial intelligence systems throughout their lifecycle, ensuring alignment with ethical principles, legal requirements, risk management frameworks, and stakeholder values whilst promoting accountability, transparency, and continuous improvement.



## Academic Context

- Brief contextual overview
  - AI governance has evolved from a niche concern to a central discipline in technology ethics, risk management, and organisational strategy
  - The field integrates insights from computer science, law, philosophy, and social sciences to address the unique challenges posed by AI’s autonomy, scalability, and opacity
  - Key developments and current state
    - The academic consensus now recognises that AI governance must be adaptive, multi-stakeholder, and embedded throughout the AI lifecycle
    - There is growing emphasis on interdisciplinary collaboration, with research centres and policy labs bridging technical and societal perspectives
  - Academic foundations
    - Foundational work includes Floridi’s “Ethics of AI” and Mittelstadt et al.’s “The Ethics of Algorithms”
    - Recent scholarship focuses on operationalising ethical principles, measuring governance effectiveness, and addressing global disparities in AI regulation

## Current Landscape (2025)

- Industry adoption and implementations
  - Leading organisations such as NHS Digital, BT Group, and Rolls-Royce have established dedicated AI governance units
  - Notable platforms include the UK’s Centre for Data Ethics and Innovation (CDEI) and the Alan Turing Institute’s AI Governance Lab
  - UK and North England examples where relevant
    - Manchester’s AI for Health initiative has implemented robust governance frameworks for medical AI applications
    - Leeds City Council’s Smart City programme uses AI governance to ensure transparency and public trust in urban analytics
    - Newcastle’s Urban Observatory employs AI governance to manage data privacy and algorithmic fairness in city planning
    - Sheffield’s Advanced Manufacturing Research Centre (AMRC) applies AI governance to industrial automation and robotics
- Technical capabilities and limitations
  - Modern AI governance tools enable real-time monitoring, bias detection, and explainability, but challenges remain in scaling these capabilities across diverse AI systems
  - Limitations include the “black box” nature of some AI models and the difficulty of ensuring consistent human oversight
- Standards and frameworks
  - The NIST AI Risk Management Framework (AI RMF) is widely adopted in the UK for identifying and mitigating AI risks
  - ISO 42001 provides international standards for AI management systems, with increasing UK industry uptake
  - The EU AI Act, while not directly applicable to the UK, influences best practices and regulatory expectations for high-risk AI systems

## Research & Literature

- Key academic papers and sources
  - Floridi, L. (2019). “What is AI Ethics?” Nature, 576(7785), 107–108. https://doi.org/10.1038/d41586-019-03757-y
  - Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). “The Ethics of Algorithms: Mapping the Debate.” Big Data & Society, 3(2). https://doi.org/10.1177/2053951716679679
  - Jobin, A., Ienca, M., & Vayena, E. (2019). “The Global Landscape of AI Ethics Guidelines.” Nature Machine Intelligence, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  - CDEI (2023). “AI Governance: A Practical Guide for Organisations.” https://www.gov.uk/government/publications/ai-governance-a-practical-guide-for-organisations
- Ongoing research directions
  - Developing metrics for AI governance effectiveness
  - Exploring the role of public participation in AI governance
  - Investigating the impact of AI governance on innovation and competitiveness

## UK Context

- British contributions and implementations
  - The UK has been a leader in AI governance, with the CDEI and the Alan Turing Institute playing pivotal roles in shaping policy and practice
  - The UK’s approach emphasises proportionality, adaptability, and stakeholder engagement
- North England innovation hubs (if relevant)
  - Manchester’s AI for Health initiative is a model for sector-specific AI governance
  - Leeds City Council’s Smart City programme demonstrates the application of AI governance in public services
  - Newcastle’s Urban Observatory showcases AI governance in urban planning and data privacy
  - Sheffield’s AMRC applies AI governance to industrial automation, ensuring safety and fairness
- Regional case studies
  - Manchester’s AI for Health initiative has successfully implemented governance frameworks that balance innovation with ethical considerations
  - Leeds City Council’s Smart City programme has enhanced public trust through transparent AI governance practices
  - Newcastle’s Urban Observatory has improved data privacy and algorithmic fairness in city planning
  - Sheffield’s AMRC has ensured the safe and fair deployment of AI in industrial settings

## Future Directions

- Emerging trends and developments
  - Increasing focus on international collaboration and harmonisation of AI governance standards
  - Growing use of AI governance in emerging sectors such as education and environmental management
- Anticipated challenges
  - Keeping pace with rapid technological change
  - Addressing global disparities in AI governance capacity
  - Ensuring effective public participation and trust
- Research priorities
  - Developing robust metrics for AI governance effectiveness
  - Exploring the role of public participation in AI governance
  - Investigating the impact of AI governance on innovation and competitiveness

## References

1. Floridi, L. (2019). “What is AI Ethics?” Nature, 576(7785), 107–108. https://doi.org/10.1038/d41586-019-03757-y
2. Mittelstadt, B. D., Allo, P., Taddeo, M., Wachter, S., & Floridi, L. (2016). “The Ethics of Algorithms: Mapping the Debate.” Big Data & Society, 3(2). https://doi.org/10.1177/2053951716679679
3. Jobin, A., Ienca, M., & Vayena, E. (2019). “The Global Landscape of AI Ethics Guidelines.” Nature Machine Intelligence, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
4. CDEI (2023). “AI Governance: A Practical Guide for Organisations.” https://www.gov.uk/government/publications/ai-governance-a-practical-guide-for-organisations
5. NIST (2023). “AI Risk Management Framework (AI RMF).” https://www.nist.gov/itl/ai-risk-management-framework
6. ISO (2023). “ISO 42001: AI Management Systems.” https://www.iso.org/standard/81234.html
7. EU AI Act (2023). https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206
8. Alan Turing Institute (2023). “AI Governance Lab.” https://www.turing.ac.uk/research/ai-governance-lab
9. NHS Digital (2023). “AI Governance in Healthcare.” https://digital.nhs.uk/services/ai-governance
10. BT Group (2023). “AI Governance and Ethics.” https://www.bt.com/about-us/sustainability/ai-governance-and-ethics
11. Rolls-Royce (2023). “AI Governance in Industry.” https://www.rolls-royce.com/sustainability/ai-governance
12. Manchester AI for Health (2023). https://www.manchester.ac.uk/research/ai-for-health
13. Leeds City Council Smart City (2023). https://www.leeds.gov.uk/smartcity
14. Newcastle Urban Observatory (2023). https://urbanobservatory.ac.uk/
15. Sheffield AMRC (2023). https://www.amrc.co.uk/ai-governance


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
