id:: conviction-voting-ontology

- ### OntologyBlock
  id:: Conviction Voting
	- ontology:: true
	- public-access:: true
	- term-id:: BC-0467
	- preferred-term:: Conviction Voting
	- source-domain:: bc
	- owl:class:: bc:ConvictionVoting
	- status:: active
	- definition:: A time-weighted DAO governance mechanism where the strength of a vote increases the longer it remains unchanged on a proposal, using the community's aggregated preference over time rather than majority voting to allocate resources and make decisions, reducing the influence of sudden large token movements.
- ### Relationships
	- is-subclass-of:: [[DAO Governance]]
	- enables:: [[Preference Aggregation]], [[Resource Allocation]], [[Democratic Decision-Making]]
	- requires:: [[Governance Token]], [[Smart Contract]], [[Voting Interface]]
	- related-to:: [[Quadratic Voting]], [[Token Voting]], [[Liquid Democracy]]
- ## Technical Details
	- **Mechanism**:
		- Voting power increases over time as vote remains unchanged
		- Utility increase slows gradually approaching set maximum
		- Changing votes drops previous vote's weight over time
		- No majority vote required; community beliefs drive decisions
	- **Key Advantages**:
		- Displays voter interest and commitment to proposals
		- Eliminates risks of new members gaining excessive power
		- Based on aggregated community preference, not token holdings
		- Time factor distinguishes from token-based quorum voting
	- **Disadvantages**:
		- Takes long time to reach conclusions
		- Unsuitable for DAOs requiring quick judgments
		- Often combined with faster voting processes
	- **Projects Using Conviction Voting**: Aragon, 1Hive, Commons Stack, Panvala
- ## Applications
	- Grant funding allocation
	- Community resource distribution
	- Long-term governance decisions
	- Budget proposal prioritization
	- Continuous proposal evaluation


