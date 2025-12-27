id:: delegate-democracy-ontology

- ### OntologyBlock
  id:: Delegate Democracy
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0473
	- preferred-term:: Delegate Democracy
	- source-domain:: bc
	- owl:class:: bc:DelegateDemocracy
	- status:: active
	- definition:: A hybrid governance system combining direct and representative democracy, also known as liquid democracy, where participants can either vote directly on proposals or delegate their voting power to trusted representatives who may further delegate votes, enabling flexible, revocable, and topic-specific representation in blockchain-based governance.
- ### Relationships
	- is-subclass-of:: [[DAO Governance]]
	- enables:: [[Flexible Representation]], [[Vote Delegation]], [[Transitive Voting]]
	- requires:: [[Governance Token]], [[Smart Contract]], [[Delegation Registry]]
	- related-to:: [[Liquid Democracy]], [[Conviction Voting]], [[Token Voting]]
- ## Technical Details
	- **Delegation Types**:
		- Absolute: Across all issues (full representative democracy)
		- Policy-specific: Concerning certain issues only
		- Time-sensitive: For a defined period
		- Metadelegation: Delegates can further delegate received votes
	- **Blockchain Implementation**:
		- Smart contracts like GovernorBravo enable delegation
		- Vote delegation revocable at any time
		- Approximately 17% of tokens typically delegated in DAOs
	- **Research Findings (2024)**:
		- 250,000+ voters studied across 1,700+ proposals in 18 DAOs
		- Medium-small token holders more likely to delegate
		- Active voters more inclined to use delegation
		- Voters choose delegates strategically (active proposal voters)
	- **Challenges**: High voting power concentration, low overall participation rates
- ## Applications
	- DAO governance participation
	- Protocol decision-making
	- Grant allocation voting
	- Treasury management decisions
	- Community proposal systems


