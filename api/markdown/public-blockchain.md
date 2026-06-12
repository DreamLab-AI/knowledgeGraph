- ### Definition
  - Permissionless, decentralised blockchain networks enabling unrestricted transaction participation and transparent validation without centralised authority, including [[Bitcoin Proof-of-Work Protocol]], [[Ethereum Smart Contract Platform]], and [[Cardano]], providing [[Censorship Resistance]], [[Immutability]], and [[User Sovereignty]] whilst sacrificing scalability and energy efficiency compared to private alternatives.

- ### Semantic Classification
  - owl-class:: infrastructure:PublicBlockchain
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Has part [[Consensus Mechanism]], [[Smart Contract]]
  - Enables [[Censorship Resistance]], [[Immutability]], [[Cryptocurrency]]
  - Contrasts with [[Permissioned Blockchain]]
  - Related to [[Distributed Ledger Technology]], [[Blockchain Governance]]

- ### Content
  - Permissionless, decentralised blockchain networks enabling unrestricted transaction participation and transparent validation without centralised authority or permission requirements. Public blockchains—[[Bitcoin Proof-of-Work Protocol]], [[Ethereum Smart Contract Platform]], [[Cardano]]—provide [[CensorshipResistance]], [[Immutability]], and [[UserSovereignty]] through global state replication and permissionless consensus whilst sacrificing scalability, privacy, and energy efficiency compared to [[PermissionedBlockchain|permissioned alternatives]]. Tradeoffs enable censorship-resistant financial systems but inhibit enterprise adoption requiring confidentiality and regulatory compliance.
  - ### Original Content
		- ```
  # Public Blockchain

		  ## Definition
		  A blockchain network with open access where anyone can participate, view, and validate transactions without permission, typically using decentralized consensus mechanisms.

		  ## OWL Functional Syntax


		  ## Properties

		  ### Object Properties (Inherited + Specific)
		  - **hasAccessibility**: PublicBlockchain → PublicAccess (required, functional)
		  - **hasConsensus**: PublicBlockchain → PermissionlessConsensus (required)
		  - **allowsParticipation**: PublicBlockchain → UnrestrictedParticipation (required)
		  - **hasTransaction**: PublicBlockchain → PubliclyVisibleTransaction (0..*)
		  - **supportsCryptocurrency**: PublicBlockchain → Cryptocurrency (0..1)

		  ### Data Properties
		  - **permissionless**: xsd:boolean (always true)
		  - **minimumNodeCount**: xsd:integer (≥ 1000 for true decentralization)
		  - **publiclyAuditable**: xsd:boolean (always true)
		  - **transactionThroughput**: xsd:decimal (transactions per second)
		  - **averageConfirmationTime**: xsd:decimal (seconds)

		  ## Axioms


		  ## Inference Rules

		  ```sparql
		  # Rule: Public blockchain must be censorship-resistant
		  [CensorshipResistance:
		    (?pb rdf:type :PublicBlockchain)
		    ->
		    (?pb :censorshipResistant "true"^^xsd:boolean)
		  ]

		  # Rule: High decentralization implies security
		  [DecentralizationSecurity:
		    (?pb rdf:type :PublicBlockchain)
		    (?pb :minimumNodeCount ?n)
		    greaterThan(?n, 5000)
		    ->
		    (?pb :securityLevel :High)
		  ]
		  ```

		  ## Examples
		  - Bitcoin
		  - Ethereum
		  - Cardano
		  - Solana
		  - Polkadot

		  ## Related Terms
		  - PermissionlessConsensus
		  - ProofOfWork
		  - ProofOfStake
		  - DecentralizedNetwork
		  - Cryptocurrency

		  ```
  ## Academic Context

  - Brief contextual overview
  - Public blockchains are decentralised, permissionless digital ledgers that enable transparent, secure, and immutable record-keeping across distributed networks
  - They form the foundational architecture for cryptocurrencies and decentralised applications (dApps), underpinning much of the metaverse and Web3 ecosystems
  - Key developments and current state
  - Since their inception with Bitcoin in 2009, public blockchains have evolved to support smart contracts, tokenisation, and complex decentralised protocols
  - The technology is now widely studied in computer science, economics, and law, with ongoing research into scalability, privacy, and governance
  - Academic foundations
  - The core principles derive from distributed systems theory, cryptography, and game theory
  - Early academic work includes Nakamoto’s Bitcoin whitepaper and subsequent research on consensus algorithms and decentralised governance

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Public blockchains are widely used for cryptocurrencies, decentralised finance (DeFi), non-fungible tokens (NFTs), and supply chain tracking
  - Notable platforms include Bitcoin, Ethereum, Litecoin, and emerging Layer 2 solutions such as Arbitrum and Optimism
  - UK and North England examples where relevant
		- Manchester-based fintech startups are exploring public blockchain for cross-border payments and digital identity
		- Leeds and Newcastle universities host blockchain research groups focusing on decentralised governance and smart contract security
		- Sheffield’s Advanced Manufacturing Research Centre (AMRC) investigates blockchain for supply chain transparency in advanced manufacturing
  - Technical capabilities and limitations
  - Capabilities
		- Permissionless participation: anyone with internet access can join, transact, and validate
		- Decentralisation: no single entity controls the network
		- Immutability: once data is recorded, it cannot be altered
		- Transparency: all transactions are publicly verifiable
  - Limitations
		- Scalability: transaction throughput remains a challenge for some networks
		- Energy consumption: proof-of-work blockchains like Bitcoin require significant computational resources
		- Regulatory uncertainty: evolving legal frameworks impact adoption and innovation
  - Standards and frameworks
  - Common consensus algorithms include proof-of-work (PoW) and proof-of-stake (PoS)
  - Open-source protocols and standards are maintained by global developer communities
  - Interoperability frameworks such as Polkadot and Cosmos enable cross-chain communication

  ## Research & Literature

  - Key academic papers and sources
  - Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
  - Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform. https://ethereum.org/en/whitepaper/
  - Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
  - Zohar, A. (2015). Bitcoin: Under the Hood. Communications of the ACM, 58(9), 104–113. https://doi.org/10.1145/2792882
  - Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. arXiv:1707.01873. https://arxiv.org/abs/1707.01873
  - Ongoing research directions
  - Scalability solutions such as sharding and Layer 2 protocols
  - Privacy-preserving technologies like zero-knowledge proofs
  - Decentralised governance and tokenomics

  ## UK Context

  - British contributions and implementations
  - UK universities and research institutions are active in blockchain research, with notable work at Imperial College London, University College London, and the Alan Turing Institute
  - The UK government supports innovation in digital assets and blockchain through funding and regulatory sandboxes
  - North England innovation hubs (if relevant)
  - Manchester’s Digital Innovation Factory fosters blockchain startups and collaborates with local universities
  - Leeds Blockchain Lab conducts research on decentralised finance and smart contract security
  - Newcastle’s Centre for Cyber Security and Resilience explores blockchain for secure digital identity
  - Regional case studies
  - Manchester-based startup ChainGuardian uses public blockchain for secure digital identity solutions
  - Leeds University’s Blockchain Research Group collaborates with local businesses on supply chain transparency projects

  ## Future Directions

  - Emerging trends and developments
  - Increased adoption of proof-of-stake and energy-efficient consensus mechanisms
  - Growth of decentralised autonomous organisations (DAOs) and community-driven governance
  - Integration of blockchain with artificial intelligence and the Internet of Things
  - Anticipated challenges
  - Regulatory compliance and legal clarity
  - Balancing privacy with transparency
  - Ensuring network security and resilience
  - Research priorities
  - Scalability and interoperability
  - Privacy-preserving technologies
  - Decentralised governance and tokenomics

  ## References

  1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
  2. Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform. https://ethereum.org/en/whitepaper/
  3. Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
  4. Zohar, A. (2015). Bitcoin: Under the Hood. Communications of the ACM, 58(9), 104–113. https://doi.org/10.1145/2792882
  5. Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. arXiv:1707.01873. https://arxiv.org/abs/1707.01873
  6. UK Government. (2023). Digital Assets and Blockchain Innovation. https://www.gov.uk/government/publications/digital-assets-and-blockchain-innovation
  7. Manchester Digital Innovation Factory. (2025). Blockchain Startups and Research. https://manchesterdigitalinnovationfactory.org.uk
  8. Leeds Blockchain Lab. (2025). Decentralised Finance and Smart Contract Security. https://leedsblockchainlab.ac.uk
  9. Newcastle Centre for Cyber Security and Resilience. (2025). Blockchain for Secure Digital Identity. https://newcastlecybersecurity.ac.uk


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z