
The Contract Net Protocol is a task-sharing interaction pattern for multi-agent systems in which a manager agent announces a task, soliciting bids from potential contractor agents, evaluates the responses, and awards the task to the most suitable bidder. It decomposes distributed problem solving into the phases of announcement, bidding, awarding, and result reporting, treating the agent population as a market for negotiating the allocation of work. The protocol provides a decentralised mechanism for dynamic task allocation without a fixed assignment table.

- The [[Contract Net Protocol]] is a task-sharing negotiation pattern in which an [[Agent]] acting as manager announces work and contractor agents bid, with the manager awarding the task by evaluating bids. It supports [[Decentralization]] of control across a population of agents and underpins [[Automation]] of work allocation in [[Distributed Systems]].
- ### Overview
- The protocol originated in research on distributed problem solving as a way to allocate tasks among autonomous agents without centrally precomputing assignments.
- A manager decomposes a problem into tasks and broadcasts a task announcement describing eligibility and evaluation criteria.
- Capable agents respond with bids that estimate their suitability, cost, or expected performance.
- The manager evaluates incoming bids, selects a contractor, and issues an award; the contractor executes and returns a result.
- Roles are fluid: any agent can be a manager for one task and a contractor for another, enabling recursive subcontracting.
- ### Mechanisms
- Task announcement: the manager advertises a task to relevant agents, often via broadcast or directed messages.
- Bid submission: contractors respond with proposals reflecting their local state and capabilities.
- Awarding: the manager applies a selection function to pick the best bid and notifies the winner.
- Result reporting: the contractor performs the task and reports completion or failure back to the manager.
- Eligibility filtering reduces communication overhead by targeting announcements at qualified agents.
- ### Applications
- Distributed scheduling and resource allocation across cooperating services.
- Robotic task allocation where robots bid for jobs based on proximity or load.
- Supply and logistics coordination where suppliers bid to fulfil orders.
- Grid and cloud workload distribution among heterogeneous compute nodes.
- ### Provenance

