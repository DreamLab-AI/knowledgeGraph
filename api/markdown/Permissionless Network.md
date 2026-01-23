- ### OntologyBlock
  id:: permissionless-network-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0090

    - filename-history:: ["BC-0090-permissionless-network.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0090
    - preferred-term:: Permissionless Network
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Open access blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PermissionlessNetwork
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: permissionless-network-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

  - #### OWL Axioms
    id:: permissionless-network-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0090>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:PermissionlessNetwork))

  ## Subclass Relationships
  SubClassOf(:PermissionlessNetwork :NetworkComponent)
  SubClassOf(:PermissionlessNetwork :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PermissionlessNetwork
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PermissionlessNetwork
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PermissionlessNetwork "BC-0090"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PermissionlessNetwork "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PermissionlessNetwork "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PermissionlessNetwork :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PermissionlessNetwork :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PermissionlessNetwork "Permissionless Network"@en)
  AnnotationAssertion(rdfs:comment :PermissionlessNetwork
    "Open access blockchain"@en)
  AnnotationAssertion(dct:description :PermissionlessNetwork
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PermissionlessNetwork "BC-0090")
  AnnotationAssertion(:priority :PermissionlessNetwork "1"^^xsd:integer)
  AnnotationAssertion(:category :PermissionlessNetwork "network-security"@en)
)
      ```

- ## About Permissionless Network
  id:: permissionless-network-about

  - Open access blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: permissionless-network-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: permissionless-network-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: permissionless-network-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: permissionless-network-standards
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

- ### In camera VFX & telepresence
	- Designing open federated metaverse from a 25 year research foundation There are serious and under discussed natural social constraints on group behaviours, and these translate into social VR. For instance the ideal meeting size is 6, and this is naturally established in work settings. This has not translated into a metaverse setting where dozens of people routinely crash across one another. In the context of supporting a creative “backstage” world where set planning, production shots, etc can be discussed we believe we have solutions which will get the best out of distributed teams of film-makers. Leveraging the world’s most powerful decentralised computing network to create scale and security without high cost The Bitcoin network is more than just a speculative money like asset, it is the most secure distributed computing system ever built. We can jump on the back of this at almost no cost to enable scale for transfer of value, trust, and digital assets of provenance. Cryptographically assured end points With the cryptography tools provided through integration of the Bitcoin network we can also use non-blockchain based secure messaging, and identity proofs. Micro transactions in collaborative spaces New tooling the space allows fractions of a pound or dollar to be exchanged between parties across the world. This means that work can be paid “by the second” both inside and outside of the metaverse. This radically improves creative microtask workflows. World leading open source machine learning and bot architectures By integrating Stablity AI tools for image generation, video processing, natural language, and speech to text / text to speech we hope to reduce friction within the backstage worlds. Creating a narrative arrow from a remote director/producer/DP, through a VP screen into a shoot, and back into a persistent metaverse shared with the public By linking across these new systems with world class telepresence research we hope to use a single digital context to support senior stakeholders, creatives, technical teams, and the wider public. New paths to monetisation and digital ownership This unified digital back end is optimised for flows of money, trust, and digital objects. This is a new area for VP. Current workstreams:


## Academic Context

- Brief contextual overview
	- Permissionless networks are foundational to decentralised systems, allowing open participation without centralised control
	- The concept emerged from early blockchain research, notably with Bitcoin’s introduction in 2008, and has since expanded into broader distributed ledger and Web3 applications
	- Key developments and current state
		- Permissionless networks now underpin major cryptocurrencies, DeFi protocols, and decentralised applications (dApps)
		- The academic foundations rest on cryptography, distributed systems, and game theory, with ongoing research into governance, scalability, and security
	- Academic foundations
		- Nakamoto consensus (Proof-of-Work) and its successors (Proof-of-Stake, etc.) remain central to permissionless network design
		- Governance models are increasingly studied, with attention to stakeholder roles and decentralised decision-making

## Current Landscape (2025)

- Industry adoption and implementations
	- Notable organisations and platforms
		- Bitcoin and Ethereum continue to dominate as the most widely used permissionless blockchains
		- Layer-2 solutions (e.g., Optimism, Arbitrum) have matured, improving scalability and reducing transaction costs
		- DeFi and NFT platforms built on permissionless networks are now mainstream, with significant user bases and institutional interest
	- UK and North England examples where relevant
		- UK-based fintechs and Web3 startups increasingly leverage permissionless networks for transparent, trustless services
		- In North England, cities like Manchester and Leeds host growing blockchain communities, with local universities and incubators supporting research and development
		- For example, the University of Manchester’s Distributed Systems Group explores permissionless architectures for supply chain and identity management
	- Technical capabilities and limitations
		- Permissionless networks offer high transparency and censorship resistance, but face challenges in scalability, energy efficiency, and regulatory compliance
		- Advances in consensus algorithms and Layer-2 solutions have mitigated some limitations, but trade-offs remain
	- Standards and frameworks
		- Industry standards (e.g., ERC-20, ERC-721) and open-source frameworks (e.g., Ethereum, Polkadot) facilitate interoperability and innovation
		- Regulatory frameworks in the UK are evolving, with the Financial Conduct Authority (FCA) providing guidance on crypto assets and decentralised finance

## Research & Literature

- Key academic papers and sources
	- Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
	- Buterin, V. (2014). A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum White Paper. https://ethereum.org/en/whitepaper/
	- Seira, A., Allen, J., Watsky, C., & Alley, R. (2024). Governance of Permissionless Blockchain Networks. FEDS Notes. https://doi.org/10.17016/2380-7172.3443
	- Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
- Ongoing research directions
	- Scalability and energy efficiency of consensus algorithms
	- Decentralised governance and stakeholder participation
	- Regulatory compliance and privacy-preserving technologies

## UK Context

- British contributions and implementations
	- UK researchers and institutions have made significant contributions to blockchain and distributed systems, with a focus on permissionless architectures
	- The FCA and Bank of England are actively engaged in regulatory and policy discussions around crypto assets and decentralised finance
- North England innovation hubs (if relevant)
	- Manchester, Leeds, Newcastle, and Sheffield are home to vibrant tech and academic communities exploring blockchain and Web3
	- Local universities and incubators support startups and research projects in permissionless networks, fostering regional innovation
- Regional case studies
	- The University of Manchester’s Distributed Systems Group collaborates with industry on permissionless blockchain applications for supply chain and identity management
	- Leeds-based fintechs are experimenting with DeFi protocols built on permissionless networks, aiming to enhance financial inclusion and transparency

## Future Directions

- Emerging trends and developments
	- Continued evolution of Layer-2 solutions and cross-chain interoperability
	- Growing interest in privacy-preserving technologies and regulatory compliance
	- Expansion of permissionless networks into new sectors, such as healthcare and public services
- Anticipated challenges
	- Balancing decentralisation with regulatory requirements
	- Addressing scalability and energy efficiency concerns
	- Ensuring robust security and resilience against attacks
- Research priorities
	- Scalability and energy efficiency of consensus algorithms
	- Decentralised governance and stakeholder participation
	- Regulatory compliance and privacy-preserving technologies

## References

1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
2. Buterin, V. (2014). A Next-Generation Smart Contract and Decentralized Application Platform. Ethereum White Paper. https://ethereum.org/en/whitepaper/
3. Seira, A., Allen, J., Watsky, C., & Alley, R. (2024). Governance of Permissionless Blockchain Networks. FEDS Notes. https://doi.org/10.17016/2380-7172.3443
4. Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
5. Financial Conduct Authority (FCA). (2025). Cryptoassets: Regulatory Guidance. https://www.fca.org.uk/firms/cryptoassets
6. Bank of England. (2025). Central Bank Digital Currency: Progress and Prospects. https://www.bankofengland.co.uk/central-bank-digital-currency
7. University of Manchester. (2025). Distributed Systems Group. https://www.manchester.ac.uk/research/groups/distributed-systems-group
8. Leeds Fintech Hub. (2025). DeFi and Blockchain Innovation. https://www.leedsfintechhub.co.uk/defi-blockchain-innovation


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


