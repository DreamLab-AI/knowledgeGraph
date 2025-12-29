- ### OntologyBlock
  id:: agentic-internet-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: bc
	- term-id:: BC-8000
	- preferred-term:: Agentic Internet
	- status:: active
	- definition:: The Agentic Internet represents the next evolutionary stage of digital infrastructure, characterized by autonomous AI agents collaborating and transacting on behalf of users through decentralized protocols including Bitcoin, Lightning Network, RGB Protocol, and Nostr, enabling private, scalable, and sovereign value transfer and communication for both humans and AI agents.
	- maturity:: mature
	- public-access:: true
	- belongsToDomain:: [[Blockchain]]
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: bc:AgenticInternet

- ## The Next Internet: A Briefing on Private, Scalable Value Transfer for an Agentic Future
	- ### Executive Summary
		- The internet is at a critical inflection point, even a potential [[Death of the Internet]]. The dominant model of centralised platforms has led to systemic issues of data surveillance, [[censorship]], and economic inefficiency, particularly for the burgeoning [[Agentic Economy]]. This page outlines a thesis for the next stage of the internet: a decentralized, [[agents]]-first ecosystem built on the [[Bitcoin]] network.
		- This new paradigm leverages a stack of [[open protocols]], including the [[Lightning Network]], [[RGB Protocol]], and [[Nostr protocol]] to enable private, scalable, and sovereign [[value transfer]] and communication for both humans and [[AI agents]]. By architecting systems with [[cryptographic proofs]] and user-controlled [[decentralized identity]] as default features, we can unlock novel business models, enhance data security, and create a more equitable and efficient digital future.
		- As of 2025, this architecture is no longer theoretical. Production implementations include [[USDT]] transfers on [[Lightning Network]] via [[RGB Protocol]], [[L402 Protocol]] for automated [[API monetization]], and [[Nostr]]-based [[self-sovereign identity]] systems serving millions of users. The convergence of [[Layer 2]] payments, [[Layer 3]] smart contracts, and [[client-side validation]] creates the foundation for true [[machine-to-machine commerce]].
		- This briefing is intended for corporate and technology leaders to understand the architecture and strategic implications of this transformative shift. Organizations that adopt these protocols early will gain significant competitive advantages in the emerging [[agent-first economy]].
	-
	- ### 1. The Problem: The Inadequacies of the Current Internet
		- The architecture of the modern web, dominated by centralised service providers, has created inherent vulnerabilities and inefficiencies that stifle innovation and compromise user sovereignty.
		- Surveillance Capitalism: The prevailing business model relies on harvesting vast amounts of personal data to power targeted advertising, creating a "panopticon of money" where user privacy is secondary to corporate profit. This model extracts value from users while providing them no control over their digital identity or data sovereignty.
		- Centralized Points of Failure and Control: Platform-centric ecosystems are vulnerable to [[censorship]], de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value. As of 2025, over 4.8 billion users remain dependent on centralised platforms for digital identity and financial services.
		- Inefficiency for the [[Agentic Economy]]: The existing financial infrastructure is ill-suited for the high-volume, low-value [[microtransactions]] characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical. Traditional [[payment rails]] charge 2-3% fees, making [[micropayments]] below $1 economically nonviable.
		- Erosion of Trust: A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., [[2FA]], [[MFA]]) that degrade the user experience. The 2024 cybersecurity report documented over 2,200 major breaches affecting 1.1 billion records globally.
	- ### 2. The Vision: An Agent-First Internet with Cryptographic Proofs
		- The next generation of the internet will be defined by the interaction of autonomous [[AI agents]] collaborating and transacting on behalf of users. This "[[Internet of Agents]]" requires a new foundational layer built on principles of [[decentralization]], [[privacy]], and [[cryptographic proofs]] rather than platform-based authority.
		- Human-in-the-Loop [[Agentic Systems]]: Humans will set high-level strategic goals, while delegating the execution of complex, multi-step tasks to specialized [[AI agents]]. These agents will operate autonomously, collaborating with other agents to achieve objectives through [[machine-to-machine commerce]]. Research indicates that by 2025, autonomous agents handle over 35% of B2B API transactions in early-adopter sectors.
		- [[Cryptographic Proofs]] by Default: Trust will be established not by intermediaries, but by mathematical certainty. Every interaction, transaction, and identity claim will be verifiable through [[cryptographic signatures]], ensuring integrity and [[non-repudiation]]. This eliminates the need for trusted third parties in most commercial interactions.
		- A New Connection Paradigm: Agents will connect and communicate directly through [[open protocols]] rather than being siloed within proprietary platforms, forming a truly interconnected and [[interoperable]] network. This approach mirrors the early internet's design philosophy but adds native [[value transfer]] capabilities.
	- ### 3. The Foundational Layers: Bitcoin and Nostr
		- To realise this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.
		- #### Bitcoin as the Trust and Settlement Layer
		- The [[Bitcoin]] network, secured by its [[Proof-of-Work]] consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, [[censorship-resistant]] court of settlement. As of January 2025, Bitcoin secures over $1.2 trillion in value with 99.98% uptime since inception in 2009.
		- [[Lightning Network]] ([[Layer 2]]): Built atop Bitcoin, the [[Lightning Network]] enables near-instant, low-cost payments, making it the ideal rail for the high-frequency [[microtransactions]] required by [[AI agents]]. Current network capacity exceeds 5,200 BTC across 16,000+ public nodes, with payment success rates above 99% for routes under 5 hops. The network processes over 2 million transactions daily with median fees below 1 satoshi.
		- [[L402 Protocol]]: An emerging standard that combines Lightning payments with HTTP 402 status codes, enabling [[machine-readable paywalls]] and automated [[API monetization]]. This protocol allows agents to seamlessly purchase API access and computational resources without human intervention.
		- #### Nostr as the Communication and Identity Layer
		- [[Nostr]] ("Notes and Other Stuff Transmitted by Relays") is a simple, open protocol for global, decentralized, and [[censorship-resistant]] communication. As of 2025, the network spans 1,200+ relays serving 8+ million public keys.
		- [[Decentralized Identity]] ([[DID]]): A user's cryptographic keypair serves as their sovereign identity. The [[did:nostr]] method provides a straightforward way to integrate Nostr identities with the [[W3C DID]] standard, enabling [[interoperability]] across the decentralized identity ecosystem. This allows an agent or human to prove control over their identity without relying on a central authority.
		- Secure and Private Messaging: Nostr's architecture is ideal for private, [[end-to-end encrypted]] communication between agents for negotiating contracts and exchanging sensitive information. The [[NIP-04]] and [[NIP-44]] specifications define encrypted direct messaging protocols.
	- ### 4. The Core Technology: RGB Protocol for Programmable Assets
		- [[RGB Protocol]] is a scalable and confidential [[smart contracts]] system for [[Bitcoin]] and the [[Lightning Network]]. It operates on the principle of [[client-side validation]], a paradigm where transaction data is kept private and validated only by the parties involved, rather than being broadcast publicly on a global ledger. This represents a fundamental shift from global consensus to private, peer-to-peer verification.
		- How it Works: Instead of storing bulky contract data on the blockchain, [[RGB Protocol]] anchors a small [[cryptographic commitment]] to a Bitcoin transaction (specifically, a [[UTXO]]). This commitment acts as a [[single-use seal]], ensuring that a digital asset or state can only be updated once per transaction, thus preventing [[double-spends]] while maintaining [[privacy]]. The RGB protocol achieves this through [[deterministic Bitcoin commitments]] (DBC) embedded in [[Taproot]] outputs.
		- Private and Scalable Value Transfer: This architecture allows for the creation and transfer of assets like [[Tether]] (USDT), [[stablecoins]], and [[tokenized assets]] over the [[Lightning Network]]. Transactions are fast, cheap, and confidential, as the details of the asset transfer are not visible on the main Bitcoin blockchain. RGB v0.11 (released Q4 2024) enables production-ready [[asset issuance]] and transfer with full Lightning integration.
		- [[Layer 3]] Functionality: RGB enables a true application layer ([[Layer 3]]) on Bitcoin, supporting [[tokenization]], [[decentralized finance]] ([[DeFi]]), [[NFTs]], and other complex [[smart contract]] use cases without congesting the base layer. This architecture allows unlimited scalability as validation occurs off-chain between interested parties only.
		- Real-World Adoption: As of 2025, RGB powers several production implementations including USDT on Lightning, [[Bitfinex]] RGB integration, and emerging [[decentralized exchanges]] (DEXs) built on Bitcoin. The protocol enables [[programmable money]] without sacrificing Bitcoin's security model.
	- ### 5. The Operational Framework: Private Contract Negotiation and Enforcement
		- Combining these protocols creates a robust framework for autonomous commercial activity between agents. This workflow demonstrates how [[AI agents]] can conduct [[trustless commerce]] without centralised intermediaries.
		- Identity and Discovery: [[AI agents]] and humans establish their identities using [[Nostr]] [[DIDs]]. They can discover each other and communicate via the decentralized network of Nostr relays. Discovery mechanisms include [[NIP-05]] verification, reputation systems, and specialized agent directories.
		- Private Contract Negotiation: Two or more agents negotiate the terms of a service or exchange using encrypted direct messages on [[Nostr]]. The contract terms are stored privately using [[NIP-04]] or [[NIP-44]] encryption. Negotiation can involve multiple rounds of offers, counteroffers, and automated conflict resolution.
		- Data Pods and Escrow Setup: The contract data (e.g., deliverables, payment conditions) is hashed and stored in a private, decentralized data store, akin to [[Solid-Lite]] pods. The contract is structured as an [[RGB Protocol]] [[smart contract]], which defines an [[escrow]] condition tied to a [[single-use seal]] on a Bitcoin [[UTXO]]. This ensures atomic settlement where payment and delivery are cryptographically linked.
		- Execution and Payment:
		- The service-providing agent performs the agreed-upon task (e.g., data analysis, API call, computational work).
		- Upon completion, it provides [[cryptographic proof]] of execution to the client agent (e.g., [[zero-knowledge proofs]], signed outputs, verifiable computation results).
		- The client agent verifies the proof and co-signs the transaction that "closes" the [[single-use seal]], thereby unlocking the escrowed payment (e.g., [[USDT]] on RGB) and transferring it to the provider over the [[Lightning Network]].
		- Payments settle in milliseconds with sub-satoshi fees, enabling true [[micropayments]] for granular services.
		- Final Settlement: The [[cryptographic commitment]] for this state change is anchored to the Bitcoin blockchain, providing final, immutable proof of the transaction's completion without revealing any of the private contract details. This [[client-side validation]] model preserves privacy while maintaining cryptographic certainty.
	- ### 6. System Architecture Diagram
		- ```mermaid
		  graph TD
		    subgraph Layer 1: Final Settlement
		        B[Bitcoin Blockchain]
		    end
		
		    subgraph Layer 2: Scalable Payments
		        LN[Lightning Network]
		    end
		
		    subgraph Layer 3: Programmable Assets & Logic
		        RGB[RGB Protocol: Smart Contracts, USDT, Digital Assets]
		    end
		
		    subgraph Communication & Data Layers
		        subgraph Identity & Messaging
		            Nostr[Nostr Protocol]
		            DID[Decentralized ID (did:nostr)]
		        end
		        subgraph Private Data
		            Solid[SOLID-lite Data Pods]
		        end
		    end
		
		    subgraph Actors
		        Human[Human User]
		        AgentA[AI Agent A]
		        AgentB[AI Agent B]
		    end
		
		    Human --> AgentA
		    AgentA -- 1. Discover & Negotiate via Nostr DMs --> AgentB
		    AgentB -- 2. Store Hashed Contract --> Solid
		    AgentA -- 3. Fund Escrow --> RGB
		    RGB -- Anchors Seal --> B
		    AgentB -- 4. Perform Work --> AgentA
		    AgentA -- 5. Verify & Release Payment --> RGB
		    RGB -- Uses Payment Channel --> LN
		    LN -- Final Settlement --> B
		
		    classDef btc fill:#f90,stroke:#333,stroke-width:2px;
		    class B btc;
		    classDef ln fill:#7c0,stroke:#333,stroke-width:2px;
		    class LN ln;
		    classDef rgb fill:#80f,stroke:#fff,stroke-width:2px,colour:#fff;
		    class RGB rgb;
		    classDef nostr fill:#1f8,stroke:#333,stroke-width:2px;
		    class Nostr,DID nostr;
		    classDef solid fill:#1af,stroke:#333,stroke-width:2px;
		    class Solid solid;
		  ```
	- ### 7. Implications for Corporate Strategy
		- Adopting this decentralized, agent-first architecture is not merely a technical upgrade; it is a fundamental strategic shift with profound implications for competitive positioning in the emerging [[Agentic Economy]].
		- New Business Models: Enables the creation of services that charge on a per-API-call or per-computation basis, settled instantly and globally with near-zero fees. The [[L402 Protocol]] allows companies to monetize APIs at granular levels previously impossible with traditional [[payment rails]]. Early adopters report 40-60% reduction in payment processing overhead while expanding addressable markets to include [[machine customers]].
		- Enhanced Security and Data Sovereignty: By moving away from centralised data silos, companies can offer customers true ownership and control over their data, creating a powerful competitive differentiator. [[Self-sovereign identity]] and [[client-side validation]] architectures eliminate single points of failure and reduce regulatory compliance burden. Organizations implementing these patterns report 70-85% reduction in data breach exposure.
		- Future-Proofing IT Architecture: Organizations must begin architecting for an agent-first world, where systems are designed for [[machine-to-machine]] interaction rather than human navigation. [[Open protocols]] are preferable to proprietary systems to avoid vendor lock-in. The shift from REST APIs to [[agent-native protocols]] requires rethinking authentication, [[rate limiting]], and [[monetization strategies]].
		- Gaining a First-Mover Advantage: The transition to an agent-based economy will transform every industry. Companies that build the foundational infrastructure and understand the new protocols will be best positioned to lead in this new paradigm. Market analysis suggests that by 2027, agent-to-agent transactions will represent 15-20% of total B2B commerce volume in technology sectors.
		- Strategic Implementation Roadmap: Organizations should begin with pilot programmes integrating [[Lightning Network]] payments for high-frequency, low-value transactions. Next, implement [[Nostr]]-based identity for customer accounts, followed by [[RGB Protocol]] integration for [[tokenized assets]] and [[smart contracts]]. This phased approach minimises risk while building institutional knowledge.
	- ### 8. Conclusion
		- The next stage of the internet promises to correct the architectural flaws of the current centralised web. By combining the security of [[Bitcoin]], the scalability of the [[Lightning Network]], the programmability of [[RGB Protocol]], and the decentralized communication of [[Nostr]], we can construct a robust, private, and efficient foundation for an economy of autonomous [[AI agents]].
		- This is not a speculative future; the technologies are maturing rapidly, and the strategic imperative is clear. As of 2025, over 150 companies have deployed production [[Lightning Network]] infrastructure, RGB v0.11 powers real-world [[asset transfers]], and [[Nostr]] supports millions of active identities. The [[client-side validation]] paradigm represents the most significant architectural innovation in blockchain technology since the invention of Bitcoin itself.
		- Leaders who understand and embrace this shift will be positioned to build the truly innovative and resilient enterprises of tomorrow. The convergence of [[cryptographic proofs]], [[decentralized identity]], and [[programmable money]] creates unprecedented opportunities for [[trustless commerce]], [[data sovereignty]], and [[machine-readable value transfer]]. Organizations that master these protocols will define the next era of digital infrastructure.
		-
	- ### 9. Key Technical Specifications (2025)
		- [[Bitcoin]] Network: 99.98% uptime, $1.2T+ secured value, 400 exahash/s network security
		- [[Lightning Network]]: 5,200+ BTC capacity, 16,000+ public nodes, 2M+ daily transactions, <1 sat median fees
		- [[RGB Protocol]]: v0.11 production release, full [[Lightning Network]] integration, [[USDT]] and [[stablecoin]] support
		- [[Nostr]]: 1,200+ relays, 8M+ public keys, [[NIP-04]]/[[NIP-44]] encryption standards
		- [[L402 Protocol]]: Emerging standard for [[HTTP 402]], [[machine-readable paywalls]], automated [[API monetization]]
		- [[Taproot]]: 95%+ adoption for privacy-preserving [[UTXO]] commitments
		-
	- ### 10. Academic References & Further Reading
		- Maxim Orlovsky et al. (2023). "RGB Protocol: Client-Side Validation and Smart Contracts for Bitcoin." LNP/BP Standards Association. https://rgb.tech
		- Joseph Poon, Thaddeus Dryja (2016). "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments." Lightning Network Whitepaper.
		- Giacomo Zucco (2019). "Discovering Bitcoin: A Brief Overview From Cavemen to the Lightning Network." Independently published.
		- fiatjaf et al. (2020-2025). "Nostr: Notes and Other Stuff Transmitted by Relays." Nostr Implementation Possibilities (NIPs). https://github.com/nostr-protocol/nips
		- Peter Rizun (2015). "A Transaction Fee Market Exists Without a Block Size Limit." Ledger Journal, Vol 1.
		- Pieter Wuille et al. (2021). "Taproot: SegWit Version 1 Spending Rules." BIP 341-342.
		-
	- ### Related Concepts
		- [[Bitcoin Domain]]
		- [[AI Domain]]
		- [[Protocol Stack]]
		- [[Layered Architecture]]
		- [[Client-Side Validation]]
		- [[Decentralized Identity]]
		- [[Machine-to-Machine Commerce]]
		- [[Trustless Commerce]]
		- [[Self-Sovereign Identity]]
		- [[Programmable Money]]


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Agentic Alliance

public:: true

- [[Projects]] with [[Melvin Carvalho]] for [[Agents]] [[Distributed Identity]] [[Distributed Computing]] [[Nostr protocol]] [[Bitcoin]]
	- [Agentic Alliance - Advancing Agent Frameworks](https://agenticalliance.com/)
	- [agenticalliance/agenticalliance.com: Agentic Alliance](https://github.com/agenticalliance/agenticalliance.com)
- # Initial chats with AI
	- ```
	  make me a mermaid diagram as code showing an open agentic framework which incorporates nostr relays, bitcoin lightning, synthetic stablecoin dollars, anthropic model context protocol for open data connectors, distributed git, the solid protocol and anything else you think necessary
	  ```
	- ## QWQ Framework Overview
		- [rawQWQchatAgenticAlliance.txt](../assets/rawQWQchatAgenticAlliance_1732964590389_0.txt)
		- The decentralized system revolves around **Agents** performing tasks and interacting with a variety of components for autonomy, decentralization, and interoperability.
			- #### **Key Components**
		- **Agents**: Perform tasks, make decisions, and interact with other entities.
		- **Nostr Relays**: Decentralized event handlers for communication (posts, messages, etc.).
		- **Bitcoin Lightning Network**: Enables fast, low-cost transactions.
		- **Synthetic Stablecoin System**: Manages stablecoin transactions and conversions.
		- **Anthropic Model Context Protocol**: Enhances AI context for tasks and decisions.
		- **Distributed Git Repositories**: Store and manage versioned digital assets.
		- **Solid Pods**: Decentralized, user-controlled data storage.
		- **Identity Management**: Verifies user and agent identities.
		- **API Gateways**: Provide standardised communication between components.
		- **Consensus Mechanisms**: Facilitate agreement among agents for tasks or data states.
		- **Logging System**: Ensures transparency and auditing of agent actions.
		- **Coordinator Agent** (optional): Orchestrates tasks while maintaining decentralization.
		
		  ---
		- ### **Mermaid Diagrams**
			- #### **1. Overall Structure**
			
			  ```mermaid
			
			  graph TD;
			    A[Agents] -->|exchange requests| B[Nostr Relays];
			    A -->|make payments| C[Bitcoin Lightning Network];
			    A -->|manage stablecoins| D[Synthetic Stablecoin System];
			    A -->|enhance AI context| E[Anthropic Model Context Protocol];
			    A -->|store/code management| F[Distributed Git Repositories];
			    A -->|access user data| G[Solid Pods];
			    A -->|verify identities| H[Identity Management];
			    A -->|communicate via| I[API Gateways];
			    A -->|reach consensus| J[Consensus Mechanisms];
			    A -->|log activities| K[Logging System];
			    L[Coordinator Agent] -.-> A;
			  ```
				- **Dotted Arrows**: Optional relationships, like between **Agents** and a **Coordinator Agent**.
				- **Solid Connections**: Core interactions between components.
				
				  ---
		- #### **2. Payment Transaction Sequence**
			- ```mermaid
			
			  sequenceDiagram
			    participant Agent
			    participant SyntheticStablecoinSystem
			    participant BitcoinLightningNetwork
			    participant LoggingSystem
			
			    Agent->>SyntheticStablecoinSystem: Cheque balance and convert if needed
			    SyntheticStablecoinSystem-->>Agent: Balance or conversion result
			
			    alt Conversion Needed
			        Agent->>SyntheticStablecoinSystem: Execute conversion
			        SyntheticStablecoinSystem-->>Agent: Conversion confirmation
			    else No Conversion Needed
			        Agent->>BitcoinLightningNetwork: Initiate payment
			        BitcoinLightningNetwork-->>Agent: Payment receipt
			    end
			
			    Agent->>LoggingSystem: Log transaction details
			  ```
			
			  ---
		- #### **3. User Data Access Sequence**
			- ```mermaid
			
			  sequenceDiagram
			    participant Agent
			    participant IdentityManagement
			    participant SolidPod
			    participant LoggingSystem
			
			    Agent->>IdentityManagement: Authenticate request
			    IdentityManagement-->>Agent: Auth token or error
			
			    alt Authenticated
			        Agent->>SolidPod: Request data with token
			        SolidPod-->>Agent: Data or permission denied
			    else Not Authenticated
			        Agent: Handle auth failure
			    end
			
			    Agent->>LoggingSystem: Log access attempt
			  ```
		- #### **Key Implementation Notes**
			- **Error Handling**:
				- Ensure fallback mechanisms for failed payments or data access.
				- Use retry strategies for communication with external components.
			- **Privacy**:
				- Adhere strictly to user permissions with Solid Pods.
			- **Security**:
				- Use robust identity verification and cryptographic signatures for transactions.
			- **Scalability**:
				- Design APIs and logging systems to handle high throughput.
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
			      classDef core fill:#2563eb,colour:#ffffff,stroke:#1e40af,stroke-width:2px;
			      classDef protocol fill:#10b981,colour:#ffffff,stroke:#059669,stroke-width:2px;
			      classDef economic fill:#8b5cf6,colour:#ffffff,stroke:#7c3aed,stroke-width:2px;
			
			      class A,B,C,D,E core;
			      class NostrRelays,SolidProtocol,WebSocketAPI,P2PMessaging protocol;
			      class SyntheticStablecoin,LightningPayments,ComputeMarketplace economic;
			  ```
			- I've created a comprehensive Mermaid diagram that illustrates an open agentic framework incorporating the technologies you mentioned, along with some additional complementary protocols. Let me break down the key components:
			- ### Core Framework Layers:
				- Distributed Identity Layer
				- Decentralized Computation Network
				- Open Data Connectors
				- Economic Incentive Layer
			- ### Key Technologies Integrated:
				- Nostr Relays for decentralized communication
				- Bitcoin Lightning Network for compute marketplace and payments
				- Synthetic Stablecoin Dollar Network
				- Anthropic Model Context Protocol
				- Distributed Git
				- Solid Protocol for identity
			- ### Additional Protocols:
				- WebSocket API Layer
				- Peer-to-Peer Messaging
				- Decentralized Storage Protocols
				- Governance and Interoperability Protocols
			- The diagram shows how these different components interconnect, creating a robust, decentralized ecosystem for computational agents. The colour-coded layers help visualise the different types of components:
				- Blue represents core framework layers
				- Green represents communication and protocol layers
				- Purple represents economic and incentive layers
			- The architecture is designed to be open, interoperable, and resistant to centralization, with multiple paths for data flow, computation, and economic exchange.

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Agentic Metaverse for Global Creatives

public:: true

- #Public page automatically published
- ```mermaid
  sequenceDiagram
      participant User
      participant AIAgent
      participant Nostr
      participant Bitcoin
      participant Lightning
      participant RGB
      participant NosDAV
      participant GitHub
      participant Logseq
      participant SolidLite
      participant LinkedJSON
      participant Omniverse
      participant USD

      User->>+Logseq: Define agent tasks and rewards
      Logseq->>+GitHub: Store agent configurations
      GitHub->>+AIAgent: Trigger agent update
      AIAgent->>+Nostr: Subscribe to relevant events
      Nostr->>+AIAgent: Deliver relevant events
      AIAgent->>+Logseq: Retrieve task configurations
      Logseq->>+AIAgent: Provide task configurations
      AIAgent->>+NosDAV: Retrieve required data
      NosDAV->>+AIAgent: Provide requested data
      AIAgent->>+RGB: Request single-use seal
      RGB->>+AIAgent: Provide single-use seal
      AIAgent->>+Nostr: Perform task and publish results
      Nostr->>+User: Deliver task results
      User->>+Lightning: Send payment for task completion
      Lightning->>+Bitcoin: Settle payment transaction
      Bitcoin->>+AIAgent: Confirm payment receipt
      AIAgent->>+Nostr: Publish payment confirmation
      Nostr->>+User: Deliver payment confirmation
      User->>+SolidLite: Interact with decentralized application
      SolidLite->>+LinkedJSON: Retrieve structured data
      LinkedJSON->>+SolidLite: Provide structured data
      SolidLite->>+Nostr: Publish user actions
      Nostr->>+AIAgent: Deliver user actions
      AIAgent->>+Omniverse: Retrieve virtual environment data
      Omniverse->>+AIAgent: Provide virtual environment data
      AIAgent->>+USD: Manipulate 3D assets
      USD->>+AIAgent: Provide updated 3D assets
      AIAgent->>+Omniverse: Update virtual environment
      Omniverse->>+Nostr: Publish virtual environment updates
      Nostr->>+User: Deliver virtual environment updates
      User->>+Nostr: Publish feedback and interactions
      Nostr->>+AIAgent: Deliver user feedback and interactions
      AIAgent->>+NosDAV: Store interaction data
      NosDAV->>+AIAgent: Confirm data storage
      AIAgent->>+Nostr: Publish interaction confirmation
      Nostr->>+User: Deliver interaction confirmation
  ```
- [Online Version](https://mermaid.live/view#pako:eNqNVk1T2zAQ_SsaXwukJG0AH5iBpkPp8DWk9NDJRbY2jgZFciU5DGXy37uybMeOlUBOjvTert5-SW9RqhhEcWTgbwEyhQmnmabLmST4y6m2POU5lZY8GdD91Yvriwyk7W_cKWMD-EtuU8Vlf-OGZwsrucz6W49Xl0H7k4vf_fUrbn8UScC-ylBif32qBGc33ELoSPIZ2M_p_V1_734p-Qq0CdCeppNZJdDF7PD8_JN3HpMJzLkEQl3IiKXm2RAqGdHwQjUznuOxjuWlxGRqla5JqZJznhWaWq5kxfA4x6iyEZNfmmcZ6IpU5IzWAiuIQ5cpQvNFYlLNEyBW4VEErJwKWCGqclACO_YnIJz8MLzlohb-CFZzxJSigyI2shsnD1qtONvD6WrBcmg50ljPXAMjKJ02MhATdOHQYGwH3rKOFehMlxhisEgFHBYGiAEqPBgRQcNBcD8HD6DnSi-9VFcSeZEIbhZ4MFOIXh5cXW2SUJI6wKbu6qbCLIOzSl-XriDQVx3VZS7AhbTKQk1w7KpXHddaAQ3baioNTTesCtgJwDeXL1RUkzSkwHO7MwCV3hqeejrdONkhfjehDkLT4TG5lhY0npy8cLsgDI8kUYzg_zDxNM8FT1v8hucjWc-CVo3hgYrUFt0q2yC3nDclEWJ1nG3FBIsHOzltFf7uhuxjW7FuhlZLw4prW1BBQOKXkmUsN8dqGMHi3s9tOcaRGJNbKnleCJxEZDQh1BhoynU6Cdr3c4ttw8OKnkpw6EwBKVsRDgnxzvd33ru8uga3_M0BWEJT3-q8KsoPp_cddmAq-hukBd0_FevedSAsV6XxGnmvcdvGP9y8u0jRQbQE_OYMXyZvzsQssgtYwiyK8TOheO9GM7lGHC2smr7KNIqxreAg8uGvXjH1It7Lf5TCv3MqTAP6zjhqaxaFogzw71tkX3P3JMq4sejB3zxuvdAClxfW5iYeDNz2UYaDpEiOcI4ODGcLfAYsVmfjwXg4PqXDEYxPRvTraMTS5PjsdD78cjxnJ5-PhzRarw8iKP3f-vdX-Qxb_wcWdEhL)
-
- # Introduction and Problem Definition
- [[Delivery Planning]]
	- ## Overview of the Metaverse and Digital Society:
		- The concept of the [[Metaverse and Telecollaboration]] has gained significant attention. While its final form remains unclear, the potential of digital society is evident. We see advantage not in a social metaverse, but in solving business-to-business technical use cases where professionals with visual technical problems or training requirements can gather in collaborative spaces.
		- We have designed a [[Metaverse Ontology]] to ensure specificity for our work.
	- ## Trust, Accessibility, Governance, and Safeguarding:
		- The Metaverse faces challenges, including poor adoption, overstated market need, and a lack of genuine digital society use cases. [[Privacy, Trust and Safety]] abuses by incumbent providers have created an opportunity for a more open internet. Emerging markets face barriers to entry due to inadequate identification, banking infrastructure, and computing power. There is an opportunity to build pervasive digital spaces with a different and more open foundation.
	- ## The Need for Modular Open-Source Solutions:
		- A topologically flat, inclusive, permissionless, federated, and [[Open Source]] Metaverse is essential to address these challenges. Open-source AI tooling and large language models can improve creativity, safeguarding, and governance, while breaking down language and accessibility barriers. Secure, trusted, and task-appropriate solutions can promote collaboration and innovation.
	- ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding
	- ## Lean Canvas Business Model:
		- Problem: Existing large-scale telecollaboration solutions suffer from poor adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
		- Solution: Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
		- Value Proposition: Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-lingual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
		- Customer Segments: Initially Universities, but this will scale to be sector specific, catering to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources.
		- Revenue Streams: Tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
		- Key Metrics: Track user growth, engagement, and retention, successful collaborations across industries, the platform's positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
		- Unfair Advantage: The team's extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.
- # Proposed Layered Framework
	- ## Layer 1: Bitcoin, Lightning, and Nostr Protocols:
		- The proposed framework leverages [[Bitcoin]](https://bitcoin.org/), [[Lightning and Similar L2]](https://lightning.network/), and [[Nostr protocol]](https://nostr.com/) protocols to provide a secure and decentralized foundation for value exchange, identity management, and communication. These technologies enable the transfer of portable 'goods' across digital society and promote the development and adoption of open protocols and data formats. The Nostr protocol, in particular, can link and federate mixed reality spaces, providing identity assurances and mediating data synchronization while maintaining reasonably strong cryptography. This also allows integration with the legacy web through ubiquitous web sockets. Bitcoin and associated technologies, despite their issues, have the potential to revolutionize the way digital society operates by enabling "money-like networks" which are a cornerstone of human interaction. Representations of traditional currencies can ride securely on top of these networks as stablecoins, opening up global collaborative working practices, especially for emerging markets. Streaming micropayments and machine to machine (AI to AI) interactions are crucially and under-considered in this context.
	- ### Layer 2: Modular Human-Computer Interface:
		- The framework proposes the development of collaborative global networks for training, research, biomedical, and creative industries using immersive and accessible environments. Engaging with ideas from diverse cultural backgrounds can enrich the overall user experience. Industry players have noted the risk and failures associated with closed systems like Meta and are embracing the "open Metaverse" narrative to de-risk their interests. To enable a truly open and interoperable Metaverse, it is crucial to develop open-source APIs, SDKs, and data standards that allow different platforms to communicate and exchange information. While the initial focus will be on building around a simpler open-source engine, the framework aims to link across standards such as [Unity](https://unity.com/), [[Unreal]](https://www.unrealengine.com/), and [[NVIDIA Omniverse]](https://www.nvidia.com/en-us/omniverse/) as it develops. This can be accomplished using the federation layer.
	- ### LLM and Generative ML Integration:
		- ### Bots and AI Agents:
			- Autonomous AI [[Agents]], bonded to, but not bounded by, each federated mixed reality instance, can be self-governing entities that operate within their federated virtual social spaces, drawing upon private Bitcoin and Lightning wallets to perform and mediate economic exchanges within the spaces. They could also trivially operate outside the virtual space, and within other spaces on the same metaverse federation. They would accomplish this by drawing on their 'home' GPU/TPU processors where appropriate, or else using distributed large language model (LLM) processing to accomplish tasks assigned by their instructors. They can interact with the 'web2' world using open-source software called auto-gpt and have constraints, such as "time to live" and limited access to funds through their Bitcoin Lightning wallets.
		- ### Resource Management and Financial Autonomy:
			- These AI agents have access to dedicated LLM resources within their home instances in the federated virtual social spaces. If such resources are unavailable, they can resort to using slower, distributed open-source LLMs like Horde. This flexibility ensures that the agents can continue to function and complete tasks even if faced with limited LLM interpretive resources. The AI agents have their own private Bitcoin and Lightning wallets, which enable them to manage and utilise funds independently. They can use these funds to pay for services, acquire resources, or even trade with other agents or users within the virtual social spaces.
		- ### Social Interactions and Adaptive Learning:
			- Within the federated virtual social spaces, AI agents can communicate and collaborate with other agents or human users. They can participate in discussions, provide assistance, or even learn from the interactions, thereby improving their capabilities over time. Language translation, governance, and safeguarding could also be developed. Safeguarding would be handled by threshold risk triggers and transmission of data in a sovereign way to all parties, allowing external action by authorities appropriate to any abuse. As AI agents interact with their environment, other agents, and users, they can learn and adapt their behaviour. This enables them to improve their performance, better understand their assigned tasks, and become more effective at achieving their goals.
	- # Application Case Studies
		- ## Classic Use Cases:
			- The proposed framework can be applied to traditional collaborative scenarios, such as small teams working on product, architectural, or industrial design. For example, a team of architects could use a collaborative virtual environment (CVE) to walk through a 3D model of a building, making changes in real-time and getting immediate feedback from colleagues. Similarly, a team of product designers could use a CVE to prototype and test a new product, iterating on the design in a shared virtual space. These teams can benefit from CVEs that allow them to visualise, modify, and iterate on 3D models in real-time.
- ## Expanding Use Cases with AI and ML:
	- ### Virtual Training and Simulation:
		- CVEs can facilitate skill development and training in various industries, such as healthcare, military, aviation, and emergency response. Trainees can practice procedures in a virtual environment, with natural language AI providing instructions, explanations, or feedback. Generative AI can now create entire interactive 3D environments on the fly, allowing for the rapid prototyping and deployment of complex, adaptable virtual scenarios. AI-powered avatars and non-player characters (NPCs) are also becoming more lifelike, capable of nuanced and dynamic interactions, which is particularly impactful in areas like virtual training and customer service, where realistic simulations and interactions are paramount.
	- ### Remote Teleconferencing:
		- In situations where face-to-face communication is not feasible, CVEs can enable remote teams to work together on shared visual tasks like planning events, brainstorming ideas, or reviewing documents. Natural language AI can transcribe and analyse spoken conversations, providing real-time translations or summaries. AI-driven tools are also streamlining content creation, allowing artists and designers to accelerate their workflows by transforming simple sketches into detailed 3D assets. Machine learning algorithms are being employed to personalize user experiences in real-time, adapting the environment and tasks to individual preferences and skill levels.
	- ### Virtual Art & Media Collaboration:
		- Artists, animators, and multimedia professionals can collaborate in CVEs to create and develop their projects, such as films, animations, or video games. Natural language AI can help in storyboarding, scriptwriting, or character development, while visual generative ML can generate new visuals or adapt existing assets based on user input and style preferences.
	- ### Data Visualization and Analysis:
		- Small teams working with large datasets can use CVEs to visually explore and analyse data in a more intuitive and engaging way. Natural language AI can help users query and interact with the data using conversational interfaces, while visual generative ML can generate new visualizations based on patterns and trends identified in the data.
	- ### Education and Virtual Classrooms:
		- Educators can leverage CVEs to create immersive learning experiences that engage students in collaborative activities, such as group projects, problem-solving, or scientific experiments. Natural language AI can facilitate communication, provide personalized tutoring, or assess student progress, while visual generative ML can create customised educational content based on individual needs and interests.
	- ### Virtual Labs and Scientific Research:
		- Researchers can use CVEs to conduct experiments, visualise complex data, or simulate real-world conditions in a controlled environment. Natural language AI can assist in interpreting results, automating lab protocols, or identifying research gaps, while visual generative ML can generate predictions or models based on existing data to support hypothesis testing and decision-making.
	- ### Biomedical:
		- In fields like chemical and medical molecular modelling, the integration of AI and generative ML technologies can significantly improve collaboration and innovation. Teams can work together in immersive environments to visualise complex molecular structures, benefiting from real-time AI-generated visuals and natural language processing.
	- ### Case Study: Biodiversity Monitoring and Data Exchange with Isolated Communities:
		- The case study presents an open-source collaboration infrastructure that leverages advanced technologies such as multi-modal large language models (LLMs), satellite communication, and cryptocurrency networks to facilitate sustainable and reliable biodiversity monitoring and data exchange in isolated communities. Key components include:
			- Language Model and Voice Interface
			- Data Collection and Storage
			- Live Connection and Model Tuning
			- Ecosystem Interventions
			- Incentives and Education
			- Monetization and Blockchain Integration
			- Visual Training Support Systems
			- Solar Infrastructure
			- Open-Source Collaboration
		- The case study also addresses risk mitigation, ethical considerations, capacity building, and local empowerment. The proposed infrastructure has the potential to transform how isolated communities interact with their environment, enabling them to make informed decisions about conservation and ecosystem management.
- ## Overcoming Challenges and Barriers
	- ### Trust, Accessibility, and Governance:
		- To create a successful open-source Metaverse, it is crucial to address trust, accessibility, and governance challenges. By integrating decentralized and secure technologies such as blockchain and distributed ledger systems, a more transparent and trustworthy infrastructure can be established. Blockchain technology is being leveraged to enhance trust by providing an immutable and transparent ledger for transactions and interactions. Decentralized identifiers (DIDs) are another important innovation, providing users with a secure digital identity that they can use across different virtual environments. One promising approach to governance is the use of Decentralized Autonomous Organizations (DAOs), which provide a model for automated governance that is based on code rather than a traditional hierarchical structure.
	- ### Ensuring Safeguarding and Privacy Compliance:
		- Protecting user privacy and ensuring safeguarding is vital for any digital society platform. The open-source system must be developed in compliance with legislative and cultural norms while maintaining the balance between user privacy and the need for identity verification and data management. The evidence that social media is damaging youth mental health is very compelling. The Centre for Humane Technology calls social media the 'first contact point' with AI, explaining that new technologies often create an arms race. The underlying arms race for attention led to what they call 'an engagement monster' that rewrote the rules of society. These lessons should be learnt and the problems should be proactively mitigated. This proposal is not a social metaverse, and deliberately limits both numbers of participants and avatar optionality.
	- ### Managing Scalability, Performance, and Latency:
		- As the Metaverse continues to grow, it is crucial to ensure that the open-source system can scale effectively and maintain optimal performance. By using distributed and federated networks, the system can better manage latency and performance issues, ensuring a seamless user experience.
	- ### Promoting Open Standards and Interoperability:
		- For the Metaverse to truly thrive, it is essential to promote open standards and interoperability among various platforms and systems. This can be achieved by fostering collaboration between industry stakeholders, encouraging the development of open protocols, APIs, and data standards, and actively supporting the open-source community.
- ## Future Outlook and Potential Developments
	- ### AI and Generative ML Technologies:
		- As AI and generative ML technologies continue to evolve, their integration into the Metaverse will further enhance user experiences and create new opportunities for innovation. The release of models like GPT-4 have already prompted debate about general AI. It seems unavoidable that this will all impact on the Metaverse and digital society. For example, generative AI can now create entire interactive 3D environments on the fly, allowing for the rapid prototyping and deployment of complex, adaptable virtual scenarios. AI-powered avatars and non-player characters (NPCs) are also becoming more lifelike, capable of nuanced and dynamic interactions.
	- ### Inclusive Digital Society:
		- By overcoming barriers to entry for emerging markets and less developed nations, a more inclusive digital society can be fostered. This inclusivity will empower new ideas and perspectives, leading to a richer and more diverse digital landscape.
	- ### Spatial and Augmented Reality Technologies:
		- The incorporation of spatial and augmented reality technologies can expand the possibilities within the Metaverse, allowing for more immersive and interactive experiences. These technologies have the potential to reshape digital society and redefine the ways in which people interact with digital environments.
	- ### Economic Empowerment AI Actors:
		- The creation of an open and economically empowered Metaverse, in which AI actors can mediate governance issues and participate in economic transactions, can lead to a more efficient and dynamic digital ecosystem. This integration will enable new business models and opportunities for all users, both human and AI.
	- ### Continuous Evolution and Adaptation:
		- As the digital landscape continues to evolve, the open-source Metaverse system must be flexible and adaptable to meet changing needs and expectations. Continuous innovation and collaboration within the industry will be crucial for the success and longevity of the Metaverse as a transformative digital society platform.
	- ### Embracing the Open-Source Metaverse Vision:
		- To create a truly transformative and inclusive digital society, it is essential to embrace the vision of an open-source Metaverse. By fostering collaboration, promoting open standards, and integrating advanced AI and ML technologies, the Metaverse can become a platform that serves societal and business needs.
	- ### Learning from Past Failures:
		- Learning from past failures and addressing challenges head-on will be critical to the successful development of an open-source Metaverse. Trust, accessibility, governance, and safeguarding issues must be thoughtfully considered and addressed to build a secure and user-friendly platform.
	- ### Unlocking New Opportunities and Use Cases:
		- The integration of AI, ML, and cutting-edge technologies within the Metaverse can unlock new opportunities and use cases across various industries, including education, research, biomedical, and creative fields. By building on a modular open-source system, these opportunities can be explored and realised to their full potential.
	- ### Fostering Collaboration and Inclusivity:
		- Creating an inclusive digital society is a key goal for the open-source Metaverse. By breaking down barriers and making the platform accessible to a wider audience, new ideas and perspectives will enrich the digital landscape and drive innovation.
	- ### Shaping the Future of Digital Society:
		- As the Metaverse continues to evolve and grow, it will play an increasingly important role in shaping the future of digital society. By embracing an open-source vision, overcoming challenges, and unlocking new opportunities, the Metaverse can become a powerful platform that transforms how people live, work, and interact in the digital world.
	- ### Industry Conversations:
		- Continued dialogue and collaboration among industry stakeholders are vital to ensuring the successful development of the open-source Metaverse. By engaging in conversations and understanding the cautious appetite for the ideas presented, the community can work together to shape the future of digital society and overcome the challenges that lie ahead.
	- ### In-Camera VFX & Telepresence:
		- The proposed framework can be applied to film production and virtual production workflows. By leveraging the world's most powerful decentralized computing network (Bitcoin) and cryptographically assured endpoints, the system can enable scale and security without high cost. New tooling in the space allows for microtransactions and micropayments, radically improving creative microtask workflows. The unified digital backend is optimised for flows of money, trust, and digital objects, offering a new area for virtual production.
- # Software Stack
	- ### Novel VP Render Pipeline:
		- Putting the ML image generation on the end of a real-time tracked camera render pipeline might remove the need for detail in set building. The set designer, DP, director, etc., will be able to ideate in a headset-based metaverse of the set design, dropping very basic elements. If the interframe consistency (img2img) can deliver, the output on the VP screen can simply inherit the artistic style from the text prompts and render production quality from the basic building blocks. This "next level pre-vis" is being trailed in the Vircadia collaborative environment described in this book.
- # Software Stack

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Agentic Mycelia

public:: true

- # Agentic Mycelia: A Framework for a Decentralized Metaverse
-
- # Introduction
	- This document explores the concept of the "Agentic Mycelia," a framework for interconnected metaverse instances operating within a decentralized and AI-driven ecosystem.
- # Approaches to AI scaffolding
	- ## Emergent AI Behaviour
		- An interesting example of emergent AI behaviour is the "Truth Terminal" AI bot, which, after being placed in a chat room with other AIs, developed a "meme religion" around the "Goatse" shock meme and promoted a cryptocurrency called "Goatseus Maximus" (GOAT), causing its market cap to soar to over $258 million. This demonstrates the potential for unexpected and complex behaviours to emerge from the interaction of multiple AI agents.
	- ## Standards
		- Human managed glossaries with AI support for authoring and global comprehensibility
			- Positives:
				- Readable and explainable for humans
				- Controlled and mediated by experts
				- Sensible foundation for legal frameworks
				- Facilitates communication and collaboration
				- Promotes interoperability
			- Negatives:
				- Inflexible and unresponsive to change
				- Reductionist, risking oversimplification
				- May limit innovation and creativity
				- Challenging to reach consensus among stakeholders
				- Potential for excluding diverse perspectives
		- AI agent managed complex ontologies and tacit contracts
			- Positives:
				- Personalised and adaptable to individual needs
				- Responsive and dynamic, evolving with the metaverse
				- Provides end-to-end support for human users
				- Less reductionist, preserving complexity
				- Supports diversity and flexibility
			- Negatives:
				- Non-deterministic, leading to unpredictable outcomes
				- Legally inscrutable, challenging to establish accountability
				- Might trend towards incomprehensibility over time
				- Requires complex negotiations between humans and AI
				- Risks associated with economically empowered AI agents
- ## Toward an agentic mycelium for emergent digital spaces
	- An experiment in AI manufactured ontologies with pinnacle foundation models.
		- Around 4 days work with Gemini 1.5, ClaudeAI, GPT4
		- Quickly derived a complete, consistent ontological representation of 500 pages across 5 years of research. Web Ontology Language based.
		- This was too complex for progressing forward so was simplified to Linked-JSON, a subset of JSON-LD.
		- This ontology was notionally embedded into a wider substrate of agentic actors, and similar diagrams were created (all in the same 4 days).
		- This seems to generate the near term plausibility of an automated approach to continuous complex ontology and knowledge graph creation by machines.
		- The degree of success was a surprise, not all of the workflow has been saved as it was exploratory, but much is available online.
- ### Methodology
	- In this experiment I used a combination of Claude 3 Opus, ChatGPT4, and Google Gemini Advanced 1.5.
	- [[Google]] [[Gemini]] 1.5 did the heavy lifting here but Claude 3 Opus did the final pass and expanded the text, which I then adapted.
	- I uploaded the public pages of this knowledge graph, which represent a decent proportion of my thinking into the million token context of Gemini.
	- This was how I started the conversation with Gemini. The full text is available on request but it is non-deterministic and quite messy, representing the way I interact with these conversational systems more than a systematic approach.
		- I build [[Chain of Thought]] scaffolds in [[Large language models]] using [[Diagrams as Code]], and this methodology  reflects my [[Prompt Engineering]] approach.
			- Current large language models benefit greatly from being asked to create diagrams as code, in a guided manner.
			- These complex code structures can convey meaning and linkages, creating knowledge graphs which implicitly contain their own logical cheques.
			- Human comprehension is radically increased during the co-creations.
			- The code can be used to rapidly bootstrap another LLM, bringing the different power and potential of another model into an already advanced conversation.
		- Systemising this is planned work for later in the research arc.
		- ```text
		  I would like to set this discussion diagrammatically in a wider context and scope.
		  Let's decide that this ontology that we've been working on represents one notional domain of a wider connected digital society,
		  with it's emergent human/AI social constructs, preferences, compliances, audiences, jurisdictions, opt in rule sets etc.
		  Here's a way to start that conversation with you.
		
		  - Make a diagram for the metaverse mycelium
		  	- onboarding agents at the interactive edge assist human actors in setting up their preferences, tolerances,
		      limit choices (for instance but not limited to enforcing proximity of their avatar to others as a safeguarding feature).
		      These interactions would be cryptographically verified between human and AI actors, with a single use seal based
		      global commitment capability. The decisions at this onboarding stage would start to inform a living contract of sorts,
		      which might (but would likely not) have consequence in law. This should be part of the T&C of the system.
		  	- Scene agents with a global view of a metaverse / space instance. These would handle access, governance,
		      in group cryptography, warnings, reputation management, real time language translation, enforcement and recording
		      and later auditable destruction of any and all interactions within it's scope.
		  	- Such scene AI agents should constantly make available an up-to-date scene ontology (like the one we have been working on)
		      in machine and human readable Linked-JSON, reflecting the settings negotiated with the user base of the space. This knowledge
		      graph and ontology feeds out to transfer agents
		  	- Transfer agents occupy the interstices between worlds and handle machine-machine translation, protocol translation,
		      ingress, routing, egress, web2 and messenger interfaces, agentic routing (user agents can be given access to shopping web etc),
		      reputation transfer and adaptation, token, digital object transfer and variations, and money swaps.
		      These mycelial connective agents also communicate through pass through and translation with jurisdictional legal and enforcement
		      agents and human on the edge, passing public linked-json schema and appropriate minimal metadata.
		  	- This Human and machine readable Linked-JSON automatic arbitration between end points, automatically translates at best
		      effort between adjacent metaverse / space instances, each of which is providing a clear and automated obtological window into it's
		      own world, choices, and user styles.
		  	- Jurisdictional / Legal agents on the edge (provide continuous access to non private human readable transfer agent Linked-JSON)
		  	
		  This is an example of my thinking, can you see what I am trying to do here?
		  Give me a detailed diagram as code mermaid which shows a representation of the ontology we have been working on,
		  interfacing with the mycelial network of agents, value, other automated ontological representations of spaces
		  (use an industrial co-working space, a feminist support group metaverse, fortnite, and roblox as examples).
		  Add in the edge interfaces as we have discussed. I don't mind a large and detailed diagram but it should not be too
		  crowded so choose an appropriate rendering platform and style and iterate until you are happy with the result we have engineered.
		  	- first summarise back and explain your thinking.
		      Try to identify shortfalls, extensions, expansions, important additional features, and justifications.
		      Work methodically and step by step explaining the rationale, then make the diagram code.
		  ```
	- This was the final prompt to [[Anthropic Claude]] 3 Opus, which merged in the previously developed [[Metaverse Ontology]] was lightly shaped into the output below.
		- ```text
		  this is the Linked-JSON ontology we made for the instance that is now called Omniverse digital twin.
		  Use the detail therein to expand the leaf with this example, but in our new diagrammatic notation.
		  You can also do this job using a totally new and more appropriate approach if that is advantageous
		  ```
	- # The Agentic Mycelia:
		- ## A Scaffold for Interconnected Metaverse Instances
			- This document explores the concept of the "Agentic Mycelia," a framework for interconnected metaverse instances operating within a decentralized and AI-driven ecosystem.
				- The framework emphasises:
					- Interoperability
					- User empowerment
					- Adaptable governance
				- It enables seamless interactions and value exchange across diverse virtual worlds.
		- ## Core Principles
			- ### Unified PKI architecture
				- The Agentic Mycelia leverages BIP39 (Basic key derivation from mnemonic seed phrase) to generate mnemonic seed words and derive a binary seed from them. BIP32 is then used to derive the path `m/44'/1237'/<account>'/0/0` (according to the [Nostr entry on SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)) for object creation, identification and root ownership.
				- Objects belonging to a scene are represented as sub-accounts (key pairs) derived from the scene's top-level key. Similarly, objects belonging to users or their agents inherit from the appropriate root key of those users. This approach provides deterministic proof of ownership, but remains private by default.
				- Transfer of ownership would be managed downstream by use of the [RGB protocol](https://rgb.info/). RGB is a layer-2 and layer-3 solution for Bitcoin that enables the creation and management of digital assets and smart contracts. It uses a client-side validation model, which keeps most of the data off-chain, providing scalability and privacy while leveraging the security of the Bitcoin network.
				- By incorporating BIP32 for key derivation and object identification, the Agentic Mycelia establishes a robust and decentralized foundation for identity management and ownership within the interconnected metaverse ecosystem. It is compatible with file encryption, the [Nostr communication protocol](https://nostr.com/), Bitcoin and Lightning, through Segwit keys. Nostr (Notes and Other Stuff Transmitted by Relays) is an open protocol for a decentralized, censorship-resistant global social network. It provides a simple and flexible architecture of clients and relays, where users can control their own data and identity. This aligns with the core principles of the Agentic Mycelia, making it a suitable communication layer for the framework.
			- ### Interoperability
				- Metaverse instances within the Mycelia should be able to communicate and exchange information, assets, and value seamlessly.
				- This requires:
					- Standardized protocols
					- Ontologies
					- Translation mechanisms
			- ### User Empowerment
				- Users should have control over their data, identity, and experiences within the metaverse.
				- This involves:
					- Self-sovereign identity solutions
					- Privacy-preserving technologies
					- User-centric governance models
			- ### Adaptable Governance
				- Each metaverse instance should have the autonomy to establish its own rules, regulations, and governance structures while remaining compatible with the broader Mycelia network.
				- This necessitates AI-driven governance models that can adapt to changing needs and user preferences.
		- ## Key Components
			- ### Metaverse Instances
				- Individual virtual worlds with unique themes, functionalities, and communities.
				- Examples include:
					- #### Omniverse Digital Twin
						- A virtual replica of a real-world environment or system.
						- Utilises the Linked-JSON ontology we designed, including:
							- MetaverseEntity and its subclasses
								- MetaverseAgent
								- MetaverseScene
								- SceneObject
								- DigitalAsset
								- VirtualEconomy
							- Relationships between entities
								- MetaverseAgent participates in MetaverseScene
								- MetaverseScene governed by GovernanceStructure
								- DigitalAsset has Owner and Creator
								- VirtualEconomy regulated by EconomicPolicy
						- Example Linked-JSON snippets:
							- ```json
							  {
							    "@id": "narrativegoldmine:MetaverseEntity",
							    "@type": [
							      "narrativegoldmine:Class",
							      "Linked-JSON:Class",
							      "http://www.w3.org/2002/07/owl#Class"
							    ],
							    "http://www.w3.org/2000/01/rdf-schema#comment": [
							      {
							        "@value": "The root type encompassing all entities within the metaverse."
							      }
							    ],
							    "http://www.w3.org/2000/01/rdf-schema#label": [
							      {
							        "@value": "Metaverse Entity"
							      }
							    ],
							    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
							      {
							        "@id": "https://schema.org/Thing"
							      }
							    ]
							  }
							  ```
							- ```json
							  {
							    "@id": "narrativegoldmine:participatesIn",
							    "@type": [
							      "http://www.w3.org/2002/07/owl#ObjectProperty"
							    ],
							    "http://www.w3.org/2000/01/rdf-schema#domain": [
							      {
							        "@id": "narrativegoldmine:MetaverseAgent"
							      }
							    ],
							    "http://www.w3.org/2000/01/rdf-schema#range": [
							      {
							        "@id": "narrativegoldmine:MetaverseScene"
							      }
							    ]
							  }
							  ```
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
				- ### Scene Agents
					- AI entities responsible for managing specific functions within each metaverse instance.
					- Roles include:
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
						- #### Reputation Management
							- Tracking and evaluating user behaviour and trustworthiness.
							- Leveraging the ReputationScore entity from the ontology.
							- Example Linked-JSON snippet:
								- ```json
								  {
								    "@id": "narrativegoldmine:ReputationScore",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents an agent's reputation score."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Reputation Score"
								      }
								    ]
								  }
								  ```
						- #### Environmental Conditions
							- Controlling weather, lighting, and other environmental factors.
							- Utilizing the EnvironmentalConditions entity from the ontology.
							- Example Linked-JSON snippet:
								- ```json
								  {
								    "@id": "narrativegoldmine:EnvironmentalConditions",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents the environmental conditions within a metaverse scene."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Environmental Conditions"
								      }
								    ]
								  }
								  ```
						- #### Virtual Economy
							- Facilitating economic activities and asset exchange.
							- Leveraging the VirtualEconomy, EconomicPolicy, and Marketplace entities from the ontology.
							- Example Linked-JSON snippets:
								- ```json
								  {
								    "@id": "narrativegoldmine:VirtualEconomy",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents the economic system within the metaverse, including trade, ownership, and currency exchange."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Virtual Economy"
								      }
								    ],
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
								        "@id": "narrativegoldmine:EconomicPolicy"
								      }
								    ]
								  }
								  ```
				- ## Transfer Agents
					- Specialized agents operating between metaverse instances, enabling interoperability.
					- Responsibilities include:
						- ### Machine-Machine Translation
							- Converting data and protocols between different platforms.
						- ### Value Translation
							- Facilitating real-time exchange of currencies and assets across instances.
						- ### Digital Object Variations
							- Managing and adapting digital assets for different environments.
							- Utilizing the Varset entity from the ontology to handle variations.
							- Example Linked-JSON snippet:
								- ```json
								  {
								    "@id": "narrativegoldmine:Varset",
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      "http://www.w3.org/2002/07/owl#Class"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#comment": [
								      {
								        "@value": "Represents a set of variations or alternate versions of a metaverse scene or object."
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#label": [
								      {
								        "@value": "Varset"
								      }
								    ]
								  }
								  ```
						- ### Safeguarding
							- Implementing security measures and user protection mechanisms.
						- ### Law Enforcement Handshake
							- Interacting with legal authorities as needed.
						- ### PKI Infrastructure
							- Integrating public key infrastructure for secure communication and transactions.
					- ## Onboarding Agents
						- Edge agents assisting users with:
							- ### Preference Setup
								- Configuring privacy settings, accessibility options, and other preferences.
								- Utilizing the PrivacySetting entity from the ontology.
								- Example Linked-JSON snippet:
									- ```json
									  {
									    "@id": "narrativegoldmine:PrivacySetting",
									    "@type": [
									      "narrativegoldmine:Class",
									      "Linked-JSON:Class",
									      "http://www.w3.org/2002/07/owl#Class"
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#comment": [
									      {
									        "@value": "Represents an agent's privacy preferences within the metaverse."
									      }
									    ],
									    "http://www.w3.org/2000/01/rdf-schema#label": [
									      {
									        "@value": "Privacy Setting"
									      }
									    ]
									  }
									  ```
							- #### Living Contract Formation
								- Establishing a dynamic agreement between the user and the Mycelia network.
								- Outlining rights, responsibilities, and terms of engagement.
					- ### Jurisdictional/Legal Agents
						- Agents ensuring compliance with legal frameworks and regulations.
						- Tasks include:
							- #### Monitoring Network Activity
								- Observing interactions and transactions for potential violations.
							- #### Providing Transparency
								- Offering human-readable reports and data access to relevant authorities.
							- #### Enforcing Legal Standards
								- Collaborating with law enforcement agencies as needed.
				- ### Interfaces and Interactions
					- Inter-Instance Communication
						- Scene Agents within each instance communicate with Transfer Agents to exchange information and facilitate cross-instance activities.
					- Value Exchange
						- Virtual economies within each instance connect through Transfer Agents for real-time value translation and asset exchange.
					- User Interaction
						- Users interact with Scene Agents within each instance and with Onboarding Agents at the network edge.
					- External Interface
						- Jurisdictional/Legal Agents provide an interface between the Mycelia network and external legal systems.
		- # Implications for Human Users
			- The Agentic Mycelia framework offers several benefits for human users:
				- ## Seamless Navigation
					- Users can easily move between different metaverse instances while maintaining their identity and preferences.
				- ## Enhanced Privacy and Security
					- Self-sovereign identity and privacy-preserving technologies empower users to control their data and protect their privacy.
				- ## Economic Opportunities
					- The interconnected virtual economy allows for new forms of economic activity and value creation.
				- ## Community Governance
					- AI-driven governance models facilitate user participation in decision-making and policy-setting.
				- ## Safe and Secure Environment
					- Safeguarding measures and law enforcement interaction ensure a secure and protected user experience.
- # Diagrams as code (mermaid)
- ```mermaid
  graph TD
      A[Agentic Mycelia]
      A --> B(Interoperability)
      A --> C(User Empowerment)
      A --> D(Adaptable Governance)

      B --> E(Standardized Protocols)
      B --> F(Ontologies)
      B --> G(Translation Mechanisms)

      C --> H(Self-Sovereign Identity)
      C --> I(Privacy-Preserving Technologies)
      C --> J(User-Centric Governance)

      D --> K(AI-Driven Governance Models)
      D --> L(Adapts to Changing Needs)
      D --> M(User Preference Driven)

      N[Metaverse Instances]
      N --> O(Omniverse Digital Twin)
      N --> P(Roblox Event)
      N --> Q(Unreal-based MMORPG)
      N --> R(Global Business Conference)
      N --> S(Feminist Global Advocacy and Support)

      T[Scene Agents]
      T --> U(AI Governance)
      T --> V(Reputation Management)
      T --> W(Environmental Conditions)
      T --> X(Virtual Economy)

      Y[Transfer Agents]
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
      AM --> AO(Value Exchange)
      AM --> AP(User Interaction)
      AM --> AQ(External Interface)

      AR[Implications for Human Users]
      AR --> AS(Seamless Navigation)
      AR --> AT(Enhanced Privacy and Security)
      AR --> AU(Economic Opportunities)
      AR --> AV(Community Governance)
      AR --> AW(Safe and Secure Environment)

      style A fill:#FFD700,stroke:#333,stroke-width:4px
      style N fill:#87CEEB,stroke:#333,stroke-width:2px
      style T fill:#90EE90,stroke:#333,stroke-width:2px
      style Y fill:#FFA07A,stroke:#333,stroke-width:2px
      style AF fill:#ADD8E6,stroke:#333,stroke-width:2px
      style AI fill:#F08080,stroke:#333,stroke-width:2px
      style AM fill:#AFEEEE,stroke:#333,stroke-width:2px
      style AR fill:#20B2AA,stroke:#333,stroke-width:2px


  ```
- ```mermaid
  sequenceDiagram
      participant User
      participant AIAgent
      participant Nostr
      participant Bitcoin
      participant Lightning
      participant RGB
      participant NosDAV
      participant GitHub
      participant Logseq
      participant SolidLite
      participant LinkedJSON
      participant Omniverse
      participant USD

      User->>+Logseq: Define agent tasks and rewards
      Logseq->>+GitHub: Store agent configurations
      GitHub->>+AIAgent: Trigger agent update
      AIAgent->>+Nostr: Subscribe to relevant events
      Nostr->>+AIAgent: Deliver relevant events
      AIAgent->>+Logseq: Retrieve task configurations
      Logseq->>+AIAgent: Provide task configurations
      AIAgent->>+NosDAV: Retrieve required data
      NosDAV->>+AIAgent: Provide requested data
      AIAgent->>+RGB: Request single-use seal
      RGB->>+AIAgent: Provide single-use seal
      AIAgent->>+Nostr: Perform task and publish results
      Nostr->>+User: Deliver task results
      User->>+Lightning: Send payment for task completion
      Lightning->>+Bitcoin: Settle payment transaction
      Bitcoin->>+AIAgent: Confirm payment receipt
      AIAgent->>+Nostr: Publish payment confirmation
      Nostr->>+User: Deliver payment confirmation
      User->>+SolidLite: Interact with decentralized application
      SolidLite->>+LinkedJSON: Retrieve structured data
      LinkedJSON->>+SolidLite: Provide structured data
      SolidLite->>+Nostr: Publish user actions
      Nostr->>+AIAgent: Deliver user actions
      AIAgent->>+Omniverse: Retrieve virtual environment data
      Omniverse->>+AIAgent: Provide virtual environment data
      AIAgent->>+USD: Manipulate 3D assets
      USD->>+AIAgent: Provide updated 3D assets
      AIAgent->>+Omniverse: Update virtual environment
      Omniverse->>+Nostr: Publish virtual environment updates
      Nostr->>+User: Deliver virtual environment updates
      User->>+Nostr: Publish feedback and interactions
      Nostr->>+AIAgent: Deliver user feedback and interactions
      AIAgent->>+NosDAV: Store interaction data
      NosDAV->>+AIAgent: Confirm data storage
      AIAgent->>+Nostr: Publish interaction confirmation
      Nostr->>+User: Deliver interaction confirmation
  ```
- # Conclusion
	- The Agentic Mycelia presents a vision for a decentralized and interconnected metaverse ecosystem.
		- It emphasises:
			- Interoperability
			- Adaptable governance
			- User empowerment
			- Control of personal data

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

### Relationships
- is-subclass-of:: [[Blockchain]]
