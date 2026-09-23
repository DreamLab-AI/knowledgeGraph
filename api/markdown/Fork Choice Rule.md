
Algorithm by which blockchain nodes select the canonical chain head when multiple competing branches exist, resolving temporary forks deterministically. Bitcoin uses longest-chain (most cumulative proof-of-work) while Ethereum post-Merge uses the LMD-GHOST fork-choice weighted by validator attestation stake, determining network-wide finality.

- ### Semantic Classification

- ### Content

  ## Class Declaration
  Declaration(Class(:ForkChoiceRule))

  ## Subclass Relationships
  SubClassOf(:ForkChoiceRule :ConsensusProtocol)
  SubClassOf(:ForkChoiceRule :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ForkChoiceRule
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ForkChoiceRule
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ForkChoiceRule "BC-0060"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ForkChoiceRule "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ForkChoiceRule "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ForkChoiceRule :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ForkChoiceRule :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ForkChoiceRule "Fork Choice Rule"@en)
  AnnotationAssertion(rdfs:comment :ForkChoiceRule
    "Canonical chain selection"@en)
  AnnotationAssertion(dct:description :ForkChoiceRule
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ForkChoiceRule "BC-0060")
  AnnotationAssertion(:priority :ForkChoiceRule "1"^^xsd:integer)
  AnnotationAssertion(:category :ForkChoiceRule "consensus-fundamentals"@en)
  )

  - ## About Fork Choice Rule

  - Canonical chain selection within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Current Landscape (2026)
  - The frontier has shifted from single-slot finality (SSF) to the more practical 3-Slot Finality (3SF) protocol of D'Amato, Saltini, Tran and Zanolini (arXiv:2411.00558, November 2024), which merges the head-vote and FFG-vote phases into one voting round per slot atop an RLMD-GHOST fork choice, deterministically finalising within three slots rather than the ~15 minutes Gasper needs today.
  - Justin Drake's Beam Chain, unveiled at Devcon 2024, has been rebranded Lean Consensus and folded into the broader "Lean Ethereum" programme that Vitalik introduced on 4 July 2026 as the protocol's third major iteration after The Merge; the July 2025 Minimmit design pushes towards one-round finalisation (~8 seconds), while finality-in-seconds sits as a ~2029 north star with no fork assignment yet.
  - Glamsterdam, Ethereum's next hard fork (targeted H2 2026, no locked mainnet epoch as of August 2026 with the full slate on devnets since June 2026), enshrines proposer-builder separation via ePBS (EIP-7732), which restructures the slot into explicit block-construction, payload-reveal and attestation deadlines and adds a 512-validator Payload Timeliness Committee, expanding the propagation-critical window from ~2s to ~9s.
  - ePBS turns the attestation deadline from the hard-wired SECONDS_PER_SLOT/3 (4s) constant into a fork-chosen parameter; a July 2026 ethresear.ch study of 21 months of mainnet data recommends setting the dial at ~3s now (not 2s), noting one exchange alone causes ~18% of epoch-boundary reorgs.
  - EIP-7782 (6-second slots, Barnabé Monnot, June 2025) was declined from Glamsterdam because it would delay real-time ZK proving and lacked a full client implementation, so slot-time reduction is deferred to a later fork.
  - Fork-choice-enforced inclusion lists (FOCIL, EIP-7805) are the consensus-layer headliner of Hegotá, targeted for 2027 and deliberately scheduled after Glamsterdam so that ePBS and FOCIL never ship untested together.
  - Open challenges as of 2026 centre on timing games (rational proposers delaying block release to capture MEV, with proposer boost held at 0.4 after being reduced from 0.7), reorg resilience gaps in the LMD-GHOST component under subsampling, and the signature-aggregation latency that makes true single-slot finality impractical at Ethereum's validator count — the core reason 3SF, not SSF, is now seen as the viable endgame.

- ### References
  - 1. Ethereum Foundation (2026). Future-proofing Ethereum: security roadmap (Glamsterdam, FOCIL, Minimmit). https://ethereum.org/roadmap/security/
  - 2. D'Amato, Saltini, Tran & Zanolini (2024). 3-Slot-Finality Protocol for Ethereum. https://arxiv.org/pdf/2411.00558.pdf
  - 3. Buterin, V. (2025). Simplifying the L1. https://vitalik.eth.limo/general/2025/05/03/simplel1.html
  - 4. Ethereum Foundation (2026). Glamsterdam: ePBS (EIP-7732) and Block-Level Access Lists. https://ethereum.org/roadmap/glamsterdam/
  - 5. ethresear.ch (2026). Is the slot-0 reorg cost fixable? ePBS attestation-deadline study. https://ethresear.ch/t/is-the-slot-0-reorg-cost-fixable-epbs-attestation-deadline-study/25338
  - 6. Oak Research (2026). Lean Ethereum: the biggest overhaul of Ethereum since the Merge. https://oakresearch.io/en/analyses/innovations/lean-ethereum-biggest-overhaul-ethereum-since-the-merge

- ### Provenance

