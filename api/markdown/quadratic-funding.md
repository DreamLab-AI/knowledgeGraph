- ### Definition
  - Quadratic Funding (QF) is a [[Mechanism Design]] framework for subsidising [[Public Goods]] in which a centralised matching pool is distributed to projects in proportion to the square of the sum of square roots of individual contributions. Formalised in the 2018 paper *Liberal Radicalism* by Vitalik Buterin, Zoe Hitzig, and E. Glen Weyl, QF is grounded in [[Welfare Economics]] and operationalises the principle that the number of unique supporters of a project is a stronger democratic signal than the total funding raised. It has become the canonical on-chain public-goods-funding mechanism, most prominently deployed through [[Gitcoin Grants]], and it bridges the domains of [[Collective Action Problem]] resolution, [[DAO Governance]], and [[Social Choice Theory]].

- ### Overview
  - QF is motivated by a fundamental failure in voluntary provision of public goods: when individuals cannot be excluded from a good's benefits, rational actors under-contribute (free-rider problem). Standard donation matching (e.g. 1:1 matching) partially addresses this but still rewards large donors disproportionately. QF inverts this by rewarding *breadth of support* — a project with 100 donors each giving £1 receives far more matching than one with a single donor giving £100.
  - The core mathematical formula is:
    - Matching for project i: **M_i = (∑_j √c_{ij})² − ∑_j c_{ij}**
    - where c_{ij} is the contribution of individual j to project i, and M_i is the additional subsidy from the matching pool.
  - The total matching pool is normalised across all projects if the sum of all M_i values exceeds the available pool, preserving the proportional signal while respecting budget constraints.
  - QF is theoretically welfare-maximising when: (1) preferences are privately observed and independent, (2) there is no collusion between contributors, and (3) each participant identity maps to exactly one contributor (Sybil resistance holds).
  - Why it matters: QF aligns incentives for contributors and matching-pool donors, making it possible to fund non-commercial infrastructure (open source libraries, public research, community tools) that market mechanisms chronically under-fund.

- ### Key Mechanisms
  - **Square-root weighting**: The mathematical heart of QF. Taking √c_{ij} before summing means that adding a new small contributor increases the matching by more than increasing an existing large contribution by the same amount. This is the source of QF's democratic character.
  - **Matching pool**: A pot of funds (contributed by sponsors, DAOs, or protocol treasuries) from which subsidies are drawn. The pool is a public good itself; its sustainability requires separate governance decisions around [[DAO Governance]] or protocol-level funding commitments.
  - **Normalisation**: When the arithmetic sum of optimal matching allocations M_i exceeds the pool size, each project's allocation is scaled proportionally. This ensures the mechanism remains budget-balanced.
  - **Sybil resistance**: The primary attack vector. A [[Sybil Attack]] splits one identity into many to artificially inflate the √ sum. Mitigations include:
    - [[Gitcoin Passport]]: aggregates on-chain and off-chain credentials (social accounts, ENS, POAPs) into a trust score; low-trust wallets have contributions downweighted.
    - [[Zero-Knowledge Proof]]-based identity: contributors prove unique personhood without revealing personal data (e.g. via [[Proof of Personhood]] protocols such as World ID or Proof of Humanity).
    - Pairwise-bounded matching (MACI): cryptographic scheme preventing collusion and vote-buying.
  - **On-chain execution**: [[Smart Contract]] implementations calculate M_i on-chain or off-chain with on-chain settlement, enabling trustless distribution without a central administrator. [[Ethereum]] is the dominant deployment environment, though QF contracts have been ported to L2 chains to reduce gas costs.

- ### Applications and Use Cases
  - **Open-source software funding**: Gitcoin Grants (running continuously since 2019) is the canonical example — Ethereum ecosystem developers submit projects and the community funds them via QF rounds, with the matching pool provided by the Ethereum Foundation and protocol sponsors. Hundreds of projects have been funded across rounds, including core infrastructure, tooling, and documentation.
  - **Climate and public goods rounds**: Gitcoin has extended QF to climate-related public goods, funding carbon monitoring tools, open environmental datasets, and regenerative agriculture research.
  - **Protocol treasury deployment**: DAOs including Optimism (via Retroactive Public Goods Funding) and MakerDAO have experimented with QF or QF-adjacent allocation mechanisms for deploying treasury capital to ecosystem projects.
  - **Civic technology**: Academic proposals and small-scale pilots have explored QF for municipal budget allocation and community grant programmes, though these face greater regulatory and identity-verification hurdles than on-chain deployments.
  - **Media and journalism funding**: Proposals by E. Glen Weyl and others have suggested QF as a mechanism to replace advertising revenue for public-interest journalism, with a national or municipal matching pool.

- ### Mechanisms and Variants
  - **Cluster-matching QF**: A variant that reduces Sybil susceptibility by applying a penalty when two contributors fund the same set of projects, flagging likely collusion or shared-incentive groups. Developed by the Gitcoin research team.
  - **Connection-oriented cluster matching (COCM)**: Extends cluster-matching by weighting the penalty by the strength of social-graph connections between donors, using a trust-graph rather than binary collusion detection.
  - **Retroactive Public Goods Funding (RetroQF)**: Applied after the fact, rewarding projects that demonstrably produced public value, rather than allocating prospectively. Used by Optimism's RPGF programme.
  - **Pairwise matching**: Bounds the maximum matching that any pair of contributors can jointly generate, reducing the amplifying effect of coordinated small contributions.
  - **Capital-constrained quadratic funding**: Explores budget-allocation properties under different pool-size assumptions, relevant to treasury management in [[DeFi and Economics]].

- ### Relationships
  - requires:: [[Mechanism Design]]
  - requires:: [[Public Goods Funding]]
  - requires:: [[Sybil Resistance]]
  - requires:: [[Decentralised Identity]]
  - requires:: [[Smart Contract]]
  - enables:: [[DAO Governance]]
  - enables:: [[Open Source Sustainability]]
  - enables:: [[Democratic Resource Allocation]]
  - uses:: [[Welfare Economics]]
  - uses:: [[Matching Funds]]
  - uses:: [[On-Chain Governance]]
  - relatedTo:: [[Quadratic Voting]]
  - relatedTo:: [[Governance Token]]
  - relatedTo:: [[Gitcoin Grants]]
  - relatedTo:: [[Collective Action Problem]]
  - relatedTo:: [[Public Goods]]
  - relatedTo:: [[Liberal Radicalism]]
  - contrastsWith:: [[One Person One Vote]]
  - contrastsWith:: [[Plutocratic Voting]]
  - contrastsWith:: [[Linear Matching]]
  - bridges-to:: [[Cooperative Game Theory]]
  - bridges-to:: [[Social Choice Theory]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - partOf:: [[DeFi and Economics]]

- ### Standards and Context
  - QF has no formal standards body — it is an academic mechanism that has been operationalised through open-source smart contracts. Key reference points include:
    - *Liberal Radicalism* (Buterin, Hitzig, Weyl, 2018) — the foundational paper introducing the mathematical framework and its welfare-economic derivation.
    - *Quadratic Payments: A Primer* (Buterin, 2019) — widely read accessible exposition distinguishing QF from [[Quadratic Voting]].
    - Gitcoin's open-source grant smart contracts (GitHub: `gitcoinco/grants-stack`) — the canonical reference implementation on [[Ethereum]].
    - The RadicalxChange Foundation, co-founded by E. Glen Weyl, promotes QF and related mechanisms (Quadratic Voting, Data Dignity, SALSA) under the umbrella of [[Liberal Radicalism]] political economy.
  - Regulatory context: On-chain QF rounds have largely operated without formal regulatory treatment as grant programmes rather than securities. KYC/AML obligations depend on the pool operator's jurisdiction. Privacy-preserving identity approaches (ZK-based) are being developed partly to allow compliance-compatible Sybil resistance.
  - Related governance innovations:
    - [[DAO Governance]] frameworks incorporating QF for budget allocation
    - [[On-Chain Governance]] proposals for protocol upgrades using QF-weighted signals
    - [[Decentralised Identity]] standards (W3C DID, Verifiable Credentials) as infrastructure for Sybil resistance

- ### Technical Implementation Notes
  - Gas costs of on-chain QF can be significant due to iterating over contributor arrays; most implementations therefore collect contributions on-chain but compute matching allocations off-chain with on-chain settlement of final amounts.
  - [[MACI]] (Minimal Anti-Collusion Infrastructure) — a cryptographic protocol using [[Zero-Knowledge Proof]] and key pairs — can be layered over QF to prevent vote-buying and collusion that is otherwise difficult to detect on public blockchains.
  - Gitcoin Grants Stack (formerly cGrants) is modular, supporting different matching algorithms and [[Sybil Resistance]] plugins, allowing community-run rounds on Ethereum and Layer 2 networks such as Optimism and Arbitrum.
  - The matching formula's sensitivity to square-rooting means that very small contributions (approaching zero) can still move the allocation materially, raising UX questions about minimum viable contribution sizes in round design.

- ### Semantic Classification
  - owl-class:: quadratic-funding:Quadratic Funding
  - owl-role:: Concept

- ### Provenance
  - sources:: Buterin, Hitzig & Weyl (2018) *Liberal Radicalism*; Buterin (2019) *Quadratic Payments: A Primer*; Gitcoin Grants Stack open-source contracts; RadicalxChange Foundation documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z