- ### Definition
  - A Decentralised Autonomous Organisation (DAO) is a blockchain-native organisational structure in which governance rules and treasury management are encoded as smart contracts executing on a public distributed ledger, enabling token-holder communities to propose, deliberate, and vote on decisions without recourse to centralised management. DAOs operate transparently with on-chain execution, typically combining governance tokens that confer voting rights with treasury contracts that hold and disburse funds. They are employed across DeFi protocols, investment clubs, grant programmes, and decentralised media organisations.

- ### Semantic Classification
  - owl-class:: decentralised-autonomous-organisation:Decentralised Autonomous Organisation
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[Governance Token]]
  - enables [[On-chain Governance]]
  - enables [[Treasury Management]]
  - relatedTo [[DAO]]
  - relatedTo [[Tokenomics]]

- ### Content
  - A Decentralised Autonomous Organisation is an organisational model that replaces hierarchical management and centralised legal structures with smart-contract-enforced rules executing on a public blockchain. Participants in a DAO typically hold governance tokens that entitle them to propose changes to the protocol or organisation and to vote on proposals submitted by other members. Proposals that reach a quorum and achieve a majority are automatically enacted by the underlying smart contracts, which may include executing transactions, upgrading code, allocating treasury funds, or modifying protocol parameters.
  - The technical architecture of a DAO typically involves multiple smart contract components: a governance module (managing proposal submission, voting periods, and execution), a token contract (managing governance token supply and delegation), and a treasury contract (holding protocol assets). Governance frameworks such as Compound Governor, OpenZeppelin Governor, and Aragon are widely used as reference implementations. Voting mechanisms vary between one-token-one-vote, quadratic voting, and conviction voting, each with different resistance properties against plutocratic capture.
  - DAOs face significant legal uncertainty in most jurisdictions. Few legal systems recognise them as distinct legal entities, meaning members may bear unlimited liability. Wyoming, the Marshall Islands, and certain other jurisdictions have enacted bespoke DAO LLC statutes to address this gap. Practical challenges include low voter participation, vulnerability to governance attacks through token accumulation, and difficulty enforcing off-chain agreements made by DAO participants. Despite these challenges, DAOs have become a central governance primitive in Decentralised Finance, coordinating billions in on-chain treasury assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z