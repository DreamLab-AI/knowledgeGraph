id:: bc-0467-conviction-voting-ontology

- ### OntologyBlock
  id:: BC-0467-conviction-voting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0467
  - preferred-term:: Conviction Voting
  - source-domain:: bc
  - owl:class:: bc:ConvictionVoting
  - status:: active
  - definition:: Conviction Voting is a continuous signaling governance mechanism where voting power accumulates over time the longer tokens are staked on a proposal, enabling patient capital allocation, reducing last-minute manipulation, and allowing proposals to pass gradually as sufficient conviction builds rather than through discrete voting periods.
  - is-subclass-of:: [[On-Chain Voting]]
  - enables:: [[Time-Weighted Voting]], [[Continuous Funding]], [[Manipulation Resistance]]
  - requires:: [[Token Staking]], [[Time Decay Functions]], [[Threshold Calculations]]

### Technical Details
Key characteristics include:
- **Accumulated Conviction**: Voting power grows over time tokens remain staked on a proposal
- **Continuous Process**: No fixed voting periods; proposals pass when conviction threshold reached
- **Time Decay**: Moving tokens to different proposals resets accumulated conviction
- **Threshold Calculation**: Required conviction based on proposal size relative to available funds

### Advantages
- **Patient Capital**: Rewards long-term commitment over reactive voting
- **Manipulation Resistance**: Last-minute vote swings less effective due to time accumulation
- **Reduced Voter Fatigue**: No need to participate in every discrete voting event
- **Continuous Funding**: Enables ongoing resource allocation rather than batch decisions

### Platform Implementations
- **Gardens (1Hive)**: Conviction voting for community-governed funding decisions
- **Aragon**: Supports conviction voting modules
- **Commons Stack**: Implements conviction voting for augmented bonding curves
- **Giveth**: Uses conviction voting for community grant allocation

### Use Cases
- **Treasury Allocation**: Continuous funding requests without discrete proposal periods
- **Grant Programs**: Ongoing evaluation of funding proposals
- **Community Governance**: Long-term strategic decisions benefiting from sustained support

### Comparison to Traditional Voting
Unlike discrete voting with fixed deadlines, conviction voting creates continuous signals that reflect sustained community preferences rather than momentary sentiment.

