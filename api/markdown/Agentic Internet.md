iri:: http://narrativegoldmine.com/ontology#AgenticInternet
uri:: urn:visionclaw:concept:artificial-intelligence:agentic-internet
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:agentic-internet
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Agentic Internet
content-hash:: sha256-12-296c6c5ef467
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T20:11:27Z
public:: true

- ### Definition
  - Agentic Internet is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgenticInternet
  - owl-role:: Concept
  - belongs-to-domain:: [[Bitcoin Domain]], [[AI Domain]], [[Architecture]], [[Protocol Stack]]

- ### Relationships
  - bridges-to:: [[Blockchain]]

- ### Content
  - The internet is at a critical inflection point, even a potential [[Death of the Internet]]. The dominant model of centralized platforms has led to systemic issues of data surveillance, censorship, and economic inefficiency, particularly for the burgeoning automated economy. This page outlines a thesis for the next stage of the internet: a decentralized, [[agents]] first ecosystem built on the [[Bitcoin]] network. This new paradigm leverages a stack of open protocol, including the Lightning Network, [[RGB]] , and [[Nostr protocol]] to enable private, scalable, and sovereign value transfer and communication for both humans and AI agents. By architecting systems with cryptographic proofs and user-controlled identity as default features, we can unlock novel business models, enhance data security, and create a more equitable and efficient digital future. This briefing is intended for corporate and technology leaders to understand the architecture and strategic implications of this transformative shift.
		- The architecture of the modern web, dominated by centralized service providers, has created inherent vulnerabilities and inefficiencies that stifle innovation and compromise user sovereignty.
		- *   **Surveillance Capitalism:** The prevailing business model relies on harvesting vast amounts of personal data to power targeted advertising, creating a "panopticon of money" where user privacy is secondary to corporate profit.
		  *   **Centralized Points of Failure and Control:** Platform-centric ecosystems are vulnerable to censorship, de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value.
		  *   **Inefficiency for the Agentic Economy:** The existing financial infrastructure is ill-suited for the high-volume, low-value microtransactions characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical.
		  *   **Erosion of Trust:** A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., 2FA) that degrade the user experience.
		- The next generation of the internet will be defined by the interaction of autonomous AI agents collaborating and transacting on behalf of users. This "Internet of Agents" requires a new foundational layer built on principles of decentralization, privacy, and cryptographic trust rather than platform-based authority.
		- *   **Human-in-the-Loop Agentic Systems:** Humans will set high-level strategic goals, while delegating the execution of complex, multi-step tasks to specialized AI agents. These agents will operate autonomously, collaborating with other agents to achieve objectives.
		  *   **Cryptographic Proofs by Default:** Trust will be established not by intermediaries, but by mathematical certainty. Every interaction, transaction, and identity claim will be verifiable through cryptographic signatures, ensuring integrity and non-repudiation.
		  *   **A New Connection Paradigm:** Agents will connect and communicate directly through open protocols rather than being siloed within proprietary platforms, forming a truly interconnected and interoperable network.
		- To realize this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.
		- The Bitcoin network, secured by its Proof-of-Work consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, censorship-resistant court of settlement.
		- *   **The Lightning Network (Layer 2):** Built atop Bitcoin, the Lightning Network enables near-instant, low-cost payments, making it the ideal rail for the high-frequency microtransactions required by AI agents.
		- Nostr ("Notes and Other Stuff Transmitted by Relays") is a simple, open protocol for global, decentralized, and censorship-resistant communication.
		- *   **Decentralized Identity (DID):** A user's cryptographic keypair serves as their sovereign identity. The `did:nostr` method provides a straightforward way to integrate Nostr identities with the W3C DID standard, enabling interoperability across the decentralized identity ecosystem. This allows an agent or human to prove control over their identity without relying on a central authority.
		  *   **Secure and Private Messaging:** Nostr's architecture is ideal for private, end-to-end encrypted communication between agents for negotiating contracts and exchanging sensitive information.
		- RGB is a scalable and confidential smart contract system for Bitcoin and the Lightning Network. It operates on the principle of **client-side validation**, a paradigm where transaction data is kept private and validated only by the parties involved, rather than being broadcast publicly on a global ledger.
		- *   **How it Works:** Instead of storing bulky contract data on the blockchain, RGB anchors a small cryptographic commitment to a Bitcoin transaction (specifically, a UTXO). This commitment acts as a **single-use seal**, ensuring that a digital asset or state can only be updated once per transaction, thus preventing double-spends while maintaining privacy.
		  *   **Private and Scalable Value Transfer:** This architecture allows for the creation and transfer of assets like Tether (USDT) and Satoshis over the Lightning Network. Transactions are fast, cheap, and confidential, as the details of the asset transfer are not visible on the main Bitcoin blockchain.
		  *   **Layer 3 Functionality:** RGB enables a true application layer (Layer 3) on Bitcoin, supporting tokenization, decentralized finance (DeFi), and other complex smart contract use cases without congesting the base layer.
		- Combining these protocols creates a robust framework for autonomous commercial activity between agents.
		- 1.  **Identity and Discovery:** AI agents and humans establish their identities using Nostr DIDs. They can discover each other and communicate via the decentralized network of Nostr relays.
		- 2.  **Private Contract Negotiation:** Two or more agents negotiate the terms of a service or exchange using encrypted direct messages on Nostr. The contract terms are stored privately.
		- 3.  **Data Pods and Escrow Setup:** The contract data (e.g., deliverables, payment conditions) is hashed and stored in a private, decentralized data store, akin to a [[Solid-Lite]]. The contract is structured as an RGB smart contract, which defines an escrow condition tied to a **single-use seal** on a Bitcoin UTXO.
		- 4.  **Execution and Payment:**
		    *   The service-providing agent performs the agreed-upon task.
		    *   Upon completion, it provides proof of execution to the client agent.
		    *   The client agent verifies the proof and co-signs the transaction that "closes" the single-use seal, thereby unlocking the escrowed payment (e.g., USDT on RGB) and transferring it to the provider over the Lightning Network.
		- 5.  **Final Settlement:** The cryptographic commitment for this state change is anchored to the Bitcoin blockchain, providing final, immutable proof of the transaction's completion without revealing any of the private contract details.
		- The internet is at a critical inflection point, even a potential [[Death of the Internet]]. The dominant model of centralized platforms has led to systemic issues of data surveillance, [[censorship]], and economic inefficiency, particularly for the burgeoning [[Agentic Economy]]. This page outlines a thesis for the next stage of the internet: a decentralized, [[agents]]-first ecosystem built on the [[Bitcoin]] network.
		- This new paradigm leverages a stack of [[open protocols]], including the [[Lightning Network]], [[RGB Protocol]], and [[Nostr protocol]] to enable private, scalable, and sovereign [[value transfer]] and communication for both humans and [[AI agents]]. By architecting systems with [[cryptographic proofs]] and user-controlled [[decentralized identity]] as default features, we can unlock novel business models, enhance data security, and create a more equitable and efficient digital future.
		- As of 2025, this architecture is no longer theoretical. Production implementations include [[USDT]] transfers on [[Lightning Network]] via [[RGB Protocol]], [[L402 Protocol]] for automated [[API monetization]], and [[Nostr]]-based [[self-sovereign identity]] systems serving millions of users. The convergence of [[Layer 2]] payments, [[Layer 3]] smart contracts, and [[client-side validation]] creates the foundation for true [[machine-to-machine commerce]].
		- This briefing is intended for corporate and technology leaders to understand the architecture and strategic implications of this transformative shift. Organizations that adopt these protocols early will gain significant competitive advantages in the emerging [[agent-first economy]].
		- The architecture of the modern web, dominated by centralized service providers, has created inherent vulnerabilities and inefficiencies that stifle innovation and compromise user sovereignty.
		- Surveillance Capitalism: The prevailing business model relies on harvesting vast amounts of personal data to power targeted advertising, creating a "panopticon of money" where user privacy is secondary to corporate profit. This model extracts value from users while providing them no control over their digital identity or data sovereignty.
		- Centralized Points of Failure and Control: Platform-centric ecosystems are vulnerable to [[censorship]], de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value. As of 2025, over 4.8 billion users remain dependent on centralized platforms for digital identity and financial services.
		- Inefficiency for the [[Agentic Economy]]: The existing financial infrastructure is ill-suited for the high-volume, low-value [[microtransactions]] characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical. Traditional [[payment rails]] charge 2-3% fees, making [[micropayments]] below $1 economically nonviable.
		- Erosion of Trust: A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., [[2FA]], [[MFA]]) that degrade the user experience. The 2024 cybersecurity report documented over 2,200 major breaches affecting 1.1 billion records globally.
		- The next generation of the internet will be defined by the interaction of autonomous [[AI agents]] collaborating and transacting on behalf of users. This "[[Internet of Agents]]" requires a new foundational layer built on principles of [[decentralization]], [[privacy]], and [[cryptographic proofs]] rather than platform-based authority.
		- Human-in-the-Loop [[Agentic Systems]]: Humans will set high-level strategic goals, while delegating the execution of complex, multi-step tasks to specialized [[AI agents]]. These agents will operate autonomously, collaborating with other agents to achieve objectives through [[machine-to-machine commerce]]. Research indicates that by 2025, autonomous agents handle over 35% of B2B API transactions in early-adopter sectors.
		- [[Cryptographic Proofs]] by Default: Trust will be established not by intermediaries, but by mathematical certainty. Every interaction, transaction, and identity claim will be verifiable through [[cryptographic signatures]], ensuring integrity and [[non-repudiation]]. This eliminates the need for trusted third parties in most commercial interactions.
		- A New Connection Paradigm: Agents will connect and communicate directly through [[open protocols]] rather than being siloed within proprietary platforms, forming a truly interconnected and [[interoperable]] network. This approach mirrors the early internet's design philosophy but adds native [[value transfer]] capabilities.
		- To realize this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.
		- The [[Bitcoin]] network, secured by its [[Proof-of-Work]] consensus mechanism, serves as the immutable, decentralized anchor for the entire system. Its primary role is not for everyday transactions but as the final, [[censorship-resistant]] court of settlement. As of January 2025, Bitcoin secures over $1.2 trillion in value with 99.98% uptime since inception in 2009.
		- [[Lightning Network]] ([[Layer 2]]): Built atop Bitcoin, the [[Lightning Network]] enables near-instant, low-cost payments, making it the ideal rail for the high-frequency [[microtransactions]] required by [[AI agents]]. Current network capacity exceeds 5,200 BTC across 16,000+ public nodes, with payment success rates above 99% for routes under 5 hops. The network processes over 2 million transactions daily with median fees below 1 satoshi.
		- [[L402 Protocol]]: An emerging standard that combines Lightning payments with HTTP 402 status codes, enabling [[machine-readable paywalls]] and automated [[API monetization]]. This protocol allows agents to seamlessly purchase API access and computational resources without human intervention.
		- [[Nostr]] ("Notes and Other Stuff Transmitted by Relays") is a simple, open protocol for global, decentralized, and [[censorship-resistant]] communication. As of 2025, the network spans 1,200+ relays serving 8+ million public keys.
		- [[Decentralized Identity]] ([[DID]]): A user's cryptographic keypair serves as their sovereign identity. The [[did:nostr]] method provides a straightforward way to integrate Nostr identities with the [[W3C DID]] standard, enabling [[interoperability]] across the decentralized identity ecosystem. This allows an agent or human to prove control over their identity without relying on a central authority.
		- Secure and Private Messaging: Nostr's architecture is ideal for private, [[end-to-end encrypted]] communication between agents for negotiating contracts and exchanging sensitive information. The [[NIP-04]] and [[NIP-44]] specifications define encrypted direct messaging protocols.
		- [[RGB Protocol]] is a scalable and confidential [[smart contracts]] system for [[Bitcoin]] and the [[Lightning Network]]. It operates on the principle of [[client-side validation]], a paradigm where transaction data is kept private and validated only by the parties involved, rather than being broadcast publicly on a global ledger. This represents a fundamental shift from global consensus to private, peer-to-peer verification.
		- How it Works: Instead of storing bulky contract data on the blockchain, [[RGB Protocol]] anchors a small [[cryptographic commitment]] to a Bitcoin transaction (specifically, a [[UTXO]]). This commitment acts as a [[single-use seal]], ensuring that a digital asset or state can only be updated once per transaction, thus preventing [[double-spends]] while maintaining [[privacy]]. The RGB protocol achieves this through [[deterministic Bitcoin commitments]] (DBC) embedded in [[Taproot]] outputs.
		- Private and Scalable Value Transfer: This architecture allows for the creation and transfer of assets like [[Tether]] (USDT), [[stablecoins]], and [[tokenized assets]] over the [[Lightning Network]]. Transactions are fast, cheap, and confidential, as the details of the asset transfer are not visible on the main Bitcoin blockchain. RGB v0.11 (released Q4 2024) enables production-ready [[asset issuance]] and transfer with full Lightning integration.
		- [[Layer 3]] Functionality: RGB enables a true application layer ([[Layer 3]]) on Bitcoin, supporting [[tokenization]], [[decentralized finance]] ([[DeFi]]), [[NFTs]], and other complex [[smart contract]] use cases without congesting the base layer. This architecture allows unlimited scalability as validation occurs off-chain between interested parties only.
		- Real-World Adoption: As of 2025, RGB powers several production implementations including USDT on Lightning, [[Bitfinex]] RGB integration, and emerging [[decentralized exchanges]] (DEXs) built on Bitcoin. The protocol enables [[programmable money]] without sacrificing Bitcoin's security model.
		- Combining these protocols creates a robust framework for autonomous commercial activity between agents. This workflow demonstrates how [[AI agents]] can conduct [[trustless commerce]] without centralized intermediaries.
		- Identity and Discovery: [[AI agents]] and humans establish their identities using [[Nostr]] [[DIDs]]. They can discover each other and communicate via the decentralized network of Nostr relays. Discovery mechanisms include [[NIP-05]] verification, reputation systems, and specialized agent directories.
		- Private Contract Negotiation: Two or more agents negotiate the terms of a service or exchange using encrypted direct messages on [[Nostr]]. The contract terms are stored privately using [[NIP-04]] or [[NIP-44]] encryption. Negotiation can involve multiple rounds of offers, counteroffers, and automated conflict resolution.
		- Data Pods and Escrow Setup: The contract data (e.g., deliverables, payment conditions) is hashed and stored in a private, decentralized data store, akin to [[Solid-Lite]] pods. The contract is structured as an [[RGB Protocol]] [[smart contract]], which defines an [[escrow]] condition tied to a [[single-use seal]] on a Bitcoin [[UTXO]]. This ensures atomic settlement where payment and delivery are cryptographically linked.
		- Execution and Payment:
		- The service-providing agent performs the agreed-upon task (e.g., data analysis, API call, computational work).
		- Upon completion, it provides [[cryptographic proof]] of execution to the client agent (e.g., [[zero-knowledge proofs]], signed outputs, verifiable computation results).
		- The client agent verifies the proof and co-signs the transaction that "closes" the [[single-use seal]], thereby unlocking the escrowed payment (e.g., [[USDT]] on RGB) and transferring it to the provider over the [[Lightning Network]].
		- Payments settle in milliseconds with sub-satoshi fees, enabling true [[micropayments]] for granular services.
		- Final Settlement: The [[cryptographic commitment]] for this state change is anchored to the Bitcoin blockchain, providing final, immutable proof of the transaction's completion without revealing any of the private contract details. This [[client-side validation]] model preserves privacy while maintaining cryptographic certainty.
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
		    classDef rgb fill:#80f,stroke:#fff,stroke-width:2px,color:#fff;
		    class RGB rgb;
		    classDef nostr fill:#1f8,stroke:#333,stroke-width:2px;
		    class Nostr,DID nostr;
		    classDef solid fill:#1af,stroke:#333,stroke-width:2px;
		    class Solid solid;

  - ## The Next Internet: A Briefing on Private, Scalable Value Transfer for an Agentic Future
  - ### Executive Summary
  - ### 1. The Problem: The Inadequacies of the Current Internet
  - ### 2. The Vision: An Agent-First Internet with Cryptographic Proofs
  - ### 3. The Foundational Layers: Bitcoin and Nostr
		- #### **Bitcoin as the Trust and Settlement Layer**
		- #### **Nostr as the Communication and Identity Layer**
  - ### 4. The Core Technology: RGB Protocol for Programmable Assets
  - ### 5. The Operational Framework: Private Contract Negotiation and Enforcement
  - ## The Next Internet: A Briefing on Private, Scalable Value Transfer for an Agentic Future
  - ### Executive Summary
  - ### 1. The Problem: The Inadequacies of the Current Internet
  - ### 2. The Vision: An Agent-First Internet with Cryptographic Proofs
  - ### 3. The Foundational Layers: Bitcoin and Nostr
		- #### Bitcoin as the Trust and Settlement Layer
		- #### Nostr as the Communication and Identity Layer
  - ### 4. The Core Technology: RGB Protocol for Programmable Assets
  - ### 5. The Operational Framework: Private Contract Negotiation and Enforcement
  - ### 6. System Architecture Diagram
		  ```
  - ### 7. Implications for Corporate Strategy
  - Adopting this decentralized, agent-first architecture is not merely a technical upgrade; it is a fundamental strategic shift with profound implications.
		- **New Business Models:** Enables the creation of services that charge on a per-API-call or per-computation basis, settled instantly and globally with near-zero fees.
		- **Enhanced Security and Data Sovereignty:** By moving away from centralized data silos, companies can offer customers true ownership and control over their data, creating a powerful competitive differentiator.
		- **Future-Proofing IT Architecture:** Organizations must begin architecting for an agent-first world, where systems are designed for machine interaction rather than human navigation. Open standards are preferable to proprietary protocols to avoid vendor lock-in.
		- **Gaining a First-Mover Advantage:** The transition to an agent-based economy will transform every industry. Companies that build the foundational infrastructure and understand the new protocols will be best positioned to lead in this new paradigm.
  - ### 8. Conclusion
		- The next stage of the internet promises to correct the architectural flaws of the current centralized web. By combining the security of Bitcoin, the scalability of the Lightning Network, the programmability of RGB, and the decentralized communication of Nostr, we can construct a robust, private, and efficient foundation for an economy of autonomous agents. This is not a speculative future; the technologies are maturing rapidly, and the strategic imperative is clear. Leaders who understand and embrace this shift will be positioned to build the truly innovative and resilient enterprises of tomorrow.

  - Adopting this decentralized, agent-first architecture is not merely a technical upgrade; it is a fundamental strategic shift with profound implications for competitive positioning in the emerging [[Agentic Economy]].
		- New Business Models: Enables the creation of services that charge on a per-API-call or per-computation basis, settled instantly and globally with near-zero fees. The [[L402 Protocol]] allows companies to monetize APIs at granular levels previously impossible with traditional [[payment rails]]. Early adopters report 40-60% reduction in payment processing overhead while expanding addressable markets to include [[machine customers]].
		- Enhanced Security and Data Sovereignty: By moving away from centralized data silos, companies can offer customers true ownership and control over their data, creating a powerful competitive differentiator. [[Self-sovereign identity]] and [[client-side validation]] architectures eliminate single points of failure and reduce regulatory compliance burden. Organizations implementing these patterns report 70-85% reduction in data breach exposure.
		- Future-Proofing IT Architecture: Organizations must begin architecting for an agent-first world, where systems are designed for [[machine-to-machine]] interaction rather than human navigation. [[Open protocols]] are preferable to proprietary systems to avoid vendor lock-in. The shift from REST APIs to [[agent-native protocols]] requires rethinking authentication, [[rate limiting]], and [[monetization strategies]].
		- Gaining a First-Mover Advantage: The transition to an agent-based economy will transform every industry. Companies that build the foundational infrastructure and understand the new protocols will be best positioned to lead in this new paradigm. Market analysis suggests that by 2027, agent-to-agent transactions will represent 15-20% of total B2B commerce volume in technology sectors.
		- Strategic Implementation Roadmap: Organizations should begin with pilot programs integrating [[Lightning Network]] payments for high-frequency, low-value transactions. Next, implement [[Nostr]]-based identity for customer accounts, followed by [[RGB Protocol]] integration for [[tokenized assets]] and [[smart contracts]]. This phased approach minimizes risk while building institutional knowledge.
  - ### 8. Conclusion
		- The next stage of the internet promises to correct the architectural flaws of the current centralized web. By combining the security of [[Bitcoin]], the scalability of the [[Lightning Network]], the programmability of [[RGB Protocol]], and the decentralized communication of [[Nostr]], we can construct a robust, private, and efficient foundation for an economy of autonomous [[AI agents]].
		- This is not a speculative future; the technologies are maturing rapidly, and the strategic imperative is clear. As of 2025, over 150 companies have deployed production [[Lightning Network]] infrastructure, RGB v0.11 powers real-world [[asset transfers]], and [[Nostr]] supports millions of active identities. The [[client-side validation]] paradigm represents the most significant architectural innovation in blockchain technology since the invention of Bitcoin itself.
		- Leaders who understand and embrace this shift will be positioned to build the truly innovative and resilient enterprises of tomorrow. The convergence of [[cryptographic proofs]], [[decentralized identity]], and [[programmable money]] creates unprecedented opportunities for [[trustless commerce]], [[data sovereignty]], and [[machine-readable value transfer]]. Organizations that master these protocols will define the next era of digital infrastructure.
  - ### 9. Key Technical Specifications (2025)
		- [[Bitcoin]] Network: 99.98% uptime, $1.2T+ secured value, 400 exahash/s network security
		- [[Lightning Network]]: 5,200+ BTC capacity, 16,000+ public nodes, 2M+ daily transactions, <1 sat median fees
		- [[RGB Protocol]]: v0.11 production release, full [[Lightning Network]] integration, [[USDT]] and [[stablecoin]] support
		- [[Nostr]]: 1,200+ relays, 8M+ public keys, [[NIP-04]]/[[NIP-44]] encryption standards
		- [[L402 Protocol]]: Emerging standard for [[HTTP 402]], [[machine-readable paywalls]], automated [[API monetization]]
		- [[Taproot]]: 95%+ adoption for privacy-preserving [[UTXO]] commitments
  - ### 10. Academic References & Further Reading
		- Maxim Orlovsky et al. (2023). "RGB Protocol: Client-Side Validation and Smart Contracts for Bitcoin." LNP/BP Standards Association. https://rgb.tech
		- Joseph Poon, Thaddeus Dryja (2016). "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments." Lightning Network Whitepaper.
		- Giacomo Zucco (2019). "Discovering Bitcoin: A Brief Overview From Cavemen to the Lightning Network." Independently published.
		- fiatjaf et al. (2020-2025). "Nostr: Notes and Other Stuff Transmitted by Relays." Nostr Implementation Possibilities (NIPs). https://github.com/nostr-protocol/nips
		- Peter Rizun (2015). "A Transaction Fee Market Exists Without a Block Size Limit." Ledger Journal, Vol 1.
		- Pieter Wuille et al. (2021). "Taproot: SegWit Version 1 Spending Rules." BIP 341-342.
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

- ### Provenance
  - sources:: [[W3C]]
  - migration-date:: 2026-04-26T00:00:00Z
