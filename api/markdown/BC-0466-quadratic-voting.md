id:: bc-0466-quadratic-voting-ontology

- ### OntologyBlock
  id:: BC-0466-quadratic-voting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0466
  - preferred-term:: Quadratic Voting
  - source-domain:: bc
  - owl:class:: bc:QuadraticVoting
  - status:: active
  - definition:: Quadratic Voting (QV) is a governance mechanism where the cost of votes increases quadratically (1 vote = 1 credit, 2 votes = 4 credits, 3 votes = 9 credits), allowing voters to express preference intensity while mitigating the influence of dominant stakeholders and preventing wealthy minorities from overwhelming democratic processes.
  - is-subclass-of:: [[On-Chain Voting]]
  - enables:: [[Preference Intensity Expression]], [[Whale Resistance]], [[Democratic Resource Allocation]]
  - requires:: [[Identity Verification]], [[Vote Credits]], [[Sybil Resistance]]

### Technical Details
Key characteristics include:
- **Quadratic Cost Function**: Cost increases as square of votes cast (n votes cost n^2 credits)
- **Preference Expression**: Voters can signal how strongly they feel about issues
- **Resource Allocation**: Incentivizes strategic, thoughtful voting rather than maximizing all positions
- **Minority Protection**: Prevents simple majority from always overriding minority interests

### Vulnerabilities
- **Sybil Attacks**: Token holders can split holdings across multiple wallets to gain disproportionate influence
- **Collusion Risk**: 2024 research shows QV lacks resistance to coordinated voting attacks
- **Identity Requirements**: Effective QV requires verified unique identities to prevent manipulation

### Solutions and Improvements
- **Vote Escrow Integration**: Combining QV with time-locked tokens mitigates whale and collusion problems
- **Hybrid-DAOs**: Incorporating identity verification (e.g., ID.me) prevents fake wallet creation
- **Time-Locked Voting**: Cryptographic mechanisms increase security against manipulation

### Real-World Applications
- **Gitcoin**: Uses quadratic funding for grant distribution
- **Optimism RetroPGF**: Retroactive funding allocating over $100 million across four rounds with $1.3 billion reserved for future rounds
- **Colorado Democratic Caucus**: First governmental use of QV in 2019

