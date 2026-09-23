
A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network.

- ### Semantic Classification

- ### Content

  ## Definition

  A **centralised application** is the conventional model of software delivery: a single organisation writes, hosts, and operates the application, holds its database, and mediates every interaction between users. Web services, mobile app backends, banking platforms, and social networks are all centralised applications — the client is merely a window onto servers the operator controls. This concentration of control brings real advantages: rapid iteration, coherent user experience, straightforward regulatory accountability, and the ability to reverse mistakes such as fraudulent transactions or accidental data loss.

  The same concentration is the model's weakness. The operator is a single point of failure for availability, a single point of trust for data custody, and a single point of coercion for censorship or policy change. Users hold no independent guarantee that their data, balances, or access rights persist beyond the operator's goodwill and solvency. These trade-offs are why the class serves as the canonical contrast case for [[Decentralised Application]] and blockchain application designs, which replicate state and execution across many independent operators at the cost of throughput, upgrade agility, and governance simplicity.

  ## Current Landscape

  The overwhelming majority of production software remains centralised, and hyperscale cloud platforms have deepened the pattern: even nominally independent services concentrate on a handful of cloud providers, so operational centralisation now spans both the application operator and its infrastructure supplier. Outages at major providers routinely take down thousands of dependent applications simultaneously, illustrating the systemic reach of the single-point-of-failure property.

  Hybrid architectures are increasingly common. Many blockchain systems retain centralised components — front-ends, indexers, custodial wallets, sequencers — so the centralised/decentralised distinction is best read as a spectrum of control rather than a binary. Regulators generally find centralised applications easier to supervise, since there is an identifiable operator to license, audit, and hold liable; this is a recurring argument in policy debates over decentralised finance and data protection.

  Recent developments:

  - **AWS US-EAST-1 outage, 20 October 2025**: a DNS-resolution failure affecting the DynamoDB API endpoint in AWS's oldest and most-used region cascaded through more than 60 internal AWS services, disabling apps including Snapchat, Zoom, Roblox, Signal, Coinbase, Slack and Atlassian — a textbook demonstration of centralised single-point-of-failure risk.
  - **Scale of the impact**: Downdetector logged 17M+ user reports (roughly a 970% jump on baseline) and disruptions at over 3,500 companies across more than 60 countries, among the largest outages it has recorded.
  - **Concentration risk**: commentary placed AWS US-EAST-1 near ~32% of the global cloud-infrastructure market and noted that even "global" application stacks frequently route identity, state or metadata flows through Northern Virginia, so a single regional control-plane fault propagates worldwide.
  - **Recurring pattern**: this was at least the third major internet outage in five years traced to US-EAST-1 (prior incidents in 2020 and 2021), reinforcing that multi-AZ redundancy does not remove reliance on shared regional control planes.

  **Sources**:
  - https://www.ookla.com/articles/aws-outage-q4-2025
  - https://www.reuters.com/business/retail-consumer/amazons-cloud-unit-reports-outage-several-websites-down-2025-10-20/

- ### Provenance

