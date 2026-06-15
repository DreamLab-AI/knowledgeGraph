- ### Definition
  - [[Protocol Governance]] is the set of mechanisms by which a decentralised protocol community makes binding decisions about rule changes, parameter adjustments, and upgrade paths without a central authority.
  - It spans off-chain deliberation (BIPs, EIPs, RFCs, developer forums) and on-chain voting using [[Governance Token]] or validator multisig structures.
  - Poor governance design can result in contentious [[Fork]]s, plutocratic capture, or upgrade deadlock, making it as critical as the underlying [[Consensus Mechanism]].

- ### Overview
  - Bitcoin's governance relies on rough consensus among developers, miners, and node operators with no formal voting; BIPs document proposals and activation via UASF/miner signalling.
  - Ethereum uses EIPs with a more structured All Core Developers process and periodic hard forks following social consensus.
  - DeFi protocols pioneered on-chain governance via [[Governance Token]] votes, with Compound (2020) setting the template.
  - On-chain governance risks include voter apathy (low turnout), whale dominance (token concentration), and bribery attacks.
  - Off-chain governance risks include plutocracy opacity, social media manipulation, and informal capture by development teams.

- ### Key aspects
  - Improvement proposal lifecycle: draft → discussion → last call → accepted/rejected → implementation → activation.
  - Quorum and supermajority thresholds prevent minority attacks while avoiding deadlock.
  - Time-locks (48–72 hour delay after vote) allow token holders to exit before unwanted upgrades activate.
  - Delegate/representative systems reduce participation burden while maintaining broad legitimacy.
  - Emergency multisig councils handle critical security patches on shorter timescales.

- ### Mechanisms
  - BIP/EIP process: publicly submitted improvement proposals reviewed by maintainers and community; merged only on consensus.
  - On-chain voting: governance smart contracts tally token-weighted votes and execute parameter changes automatically.
  - Optimistic governance: proposals execute after a challenge window unless vetoed.
  - Constitutional constraints: immutable or supermajority-amendment-only core parameters protect baseline protocol properties.

- ### Applications
  - [[Bitcoin Improvement Proposal]] process for Bitcoin core protocol changes.
  - Ethereum protocol upgrades coordinated through EIPs and hard-fork scheduling.
  - DeFi protocol parameter governance: interest rate models, collateral ratios, fee structures.
  - Layer 2 network upgrade coordination across sequencers and validators.
  - Cross-chain bridge governance determining supported assets and security parameters.

- ### Relationships
  - enables:: [[Protocol Upgrade]]
  - enables:: [[Decentralised Governance]]
  - supports:: [[On-chain Governance]]
  - supports:: [[Decentralised Autonomous Organisation]]
  - supports:: [[Consensus Mechanism]]
  - relatedTo:: [[Bitcoin Improvement Proposal]]
  - relatedTo:: [[Fork]]
  - relatedTo:: [[Token Voting]]
  - requires:: [[Social Consensus]]
  - requires:: [[Governance Token]]
  - contrastsWith:: [[Corporate Governance]]
  - dependsOn:: [[Decentralisation]]
  - bridgesTo:: [[Internet Governance]]
  - uses:: [[Smart Contract]]

- ### Provenance
  - updated:: 2026-06-15