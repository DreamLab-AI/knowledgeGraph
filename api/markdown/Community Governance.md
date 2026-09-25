Community Governance refers to the structures, processes, and norms through which a community of stakeholders collectively makes decisions, allocates resources, resolves disputes, and sets rules for shared systems or commons. It encompasses formal mechanisms such as voting protocols, proposal systems, and constitutional rules, as well as informal norms of participation, legitimacy, and accountability. Community governance may be implemented on-chain through smart contracts and token-weighted voting in decentralised autonomous organisations, or off-chain through forum deliberation, elected councils, and working groups in open-source projects, platform cooperatives, and public institutions. The field draws on political science, institutional economics, commons theory, and distributed systems to design governance models that are simultaneously legitimate, efficient, and resistant to capture.

### Overview

- Community governance addresses the fundamental challenge of coordinating collective action among actors with heterogeneous interests without relying on a single authoritative centre.
- It is relevant wherever a shared resource, protocol, or platform must evolve over time: open-source software, internet standards bodies, blockchain networks, platform cooperatives, neighbourhood associations, and supranational internet governance forums.
- The core governance cycle involves: (1) identifying a problem or opportunity, (2) drafting a proposal, (3) deliberation and amendment, (4) decision by vote or consensus, (5) implementation, and (6) monitoring and accountability.
- Legitimacy — the belief among participants that decisions are binding and fair — is the foundational requirement. Without it, minority factions exit or defect, fragmenting the community.
- [[Accountability Mechanisms]] close the feedback loop: decision-makers must be answerable for outcomes, and processes must be auditable.

### Key Components

- **[[Proposal System]]**
  - Formal channels through which community members raise issues and draft changes (Ethereum Improvement Proposals, Bitcoin Improvement Proposals, IETF RFCs, GitHub pull requests).
  - Typically staged: idea → draft → last-call → accepted/rejected.
- **[[Voting Mechanism]]**
  - Methods for aggregating preferences: simple majority, supermajority, [[Quadratic Voting]], conviction voting, approval voting.
  - On-chain implementations use [[Token Voting]] or [[Multisig Wallet]] signatories; off-chain implementations use forum polls or elected councils.
- **[[Consensus Mechanism]]** (in distributed systems context)
  - Technical consensus (e.g. Nakamoto consensus, BFT variants) is a substrate layer on which governance decisions are enforced.
  - Social consensus — the rough-consensus model of the IETF — precedes and legitimises technical changes.
- **[[Dispute Resolution]]**
  - Arbitration panels, on-chain kleros-style courts, and escalation procedures for resolving conflicts between participants.
- **[[Treasury Management]]**
  - Control of shared funds (protocol treasuries, grants programmes) is a central governance responsibility; misallocation is a major attack vector.
- **Elected Councils and Working Groups**
  - Delegated bodies (e.g. Ethereum Foundation, Compound Governor Bravo delegates, ICANN councils) handle day-to-day decisions within community-set mandates.
- **Constitutional Rules and Meta-Governance**
  - Higher-order rules specifying how the governance rules themselves may be changed; critical for preventing governance takeovers.
  - [[Metagovernance]] — governance of governance frameworks — is an emerging sub-field.

### Mechanisms

- **Token-Weighted Voting**
  - Most common on-chain mechanism: voting power proportional to token holdings. Fast but susceptible to plutocracy and whale capture.
  - Uses [[Token Voting]] contracts (e.g. Compound Governor, OpenZeppelin Governor).
- **[[Quadratic Voting]]**
  - Voting power proportional to the square root of tokens committed, reducing plutocratic bias and surfacing intensity of preference.
  - Requires Sybil resistance (identity verification) to prevent splitting wallets.
- **Delegation and Liquid Democracy**
  - Token holders delegate votes to trusted representatives who can further sub-delegate, creating a fluid representative layer without fixed electoral cycles.
- **[[Rough Consensus]]**
  - The IETF model: a chair judges whether objections are substantive; no formal vote count. Favours deliberation over procedural speed.
- **Conviction Voting**
  - Proposals accumulate voting weight over time; older, sustained support outweighs last-minute surges, reducing coordination attacks.
- **Futarchy**
  - Governance by prediction market: stakeholders bet on outcomes of proposed policies; the market price determines policy selection. Theoretical; rarely deployed at scale.

### Applications / Use Cases

- **[[Blockchain]] Protocol Governance**
  - Bitcoin's BIP process and informal miner/node operator signalling; Ethereum's EIP/AIP process and the role of the core developer community; Polkadot's on-chain referenda with OpenGov.
- **[[Decentralised Autonomous Organisation]] (DAO) Governance**
  - MakerDAO Governance (MKR token votes on risk parameters and collateral types); Uniswap Governance (UNI token holders control protocol fees); Compound Governor framework.
  - DAOs manage protocol treasuries worth billions, making governance security critical.
- **[[Open-Source Project]] Governance**
  - Linux Foundation Technical Steering Committees; Apache Software Foundation's meritocratic governance model; Python Steering Council elected by contributors.
- **[[Platform Cooperative]] Governance**
  - Worker-owned platforms (Stocksy United, Up&Go) apply one-member-one-vote principles; members elect boards and set platform rules collectively.
- **Internet Standards Bodies**
  - IETF working group model (rough consensus, running code); W3C member ballots; ICANN multi-stakeholder model for DNS governance.
- **Local and Municipal Participatory Governance**
  - Participatory budgeting (originated in Porto Alegre, now deployed in hundreds of cities) gives residents direct say over discretionary municipal spending.
- **[[Digital Commons]] Governance**
  - Wikipedia's community-elected Arbitration Committee and administrator hierarchy; Creative Commons licence stewardship.

### Theoretical Foundations

- **Elinor Ostrom's Governing the Commons (1990)**
  - Identified eight design principles for sustainable commons governance (clearly defined boundaries, proportional rules, collective choice, monitoring, graduated sanctions, conflict resolution, recognition by external authorities, nested layers).
  - These principles directly inform modern DAO constitutions and community charters.
- **Deliberative Democracy**
  - Habermas and others argue legitimate governance requires substantive public reasoning, not merely preference aggregation. Informs forum-based deliberation norms in open-source projects.
- **Social Choice Theory**
  - Arrow's Impossibility Theorem, Condorcet's paradox, and mechanism design theory constrain what voting systems can achieve; inform the search for voting mechanisms that satisfy fairness criteria under real-world conditions.
- **Principal-Agent Theory**
  - Token-holder principals delegate to developer-agent teams; governance systems must align incentives and constrain agent opportunism.

### Standards & Context

- **IETF RFC 7282** — "On Consensus and Humming in the IETF" — formalises the rough consensus model.
- **OpenZeppelin Governor** — widely adopted smart-contract governance framework (Compound Governor fork) providing on-chain proposal, voting, and execution.
- **Tally, Snapshot, Boardroom** — off-chain and hybrid governance tooling platforms used by most major DAOs.
- **DAOstack and Aragon** — early DAO governance frameworks establishing modular, upgradeable governance architectures.
- **IEEE P2145** — draft standard on blockchain and distributed ledger governance frameworks.
- **ICANN Accountability and Transparency Frameworks** — multi-stakeholder model for internet naming and addressing governance.
- **UN SDG 16** — Sustainable Development Goal on peace, justice, and strong institutions; frames community governance as a development priority.

### Risks and Failure Modes

- **Plutocracy** — token-weighted voting concentrates power in large holders; whales can capture governance.
- **Voter Apathy** — low participation rates mean small coordinated minorities can pass proposals unopposed.
- **Governance Attacks** — flash-loan attacks enable transient acquisition of voting power; Beanstalk Protocol lost funds via a governance exploit.
- **Sybil Attacks** — creation of many pseudonymous identities to amplify voting weight in systems without identity verification.
- **Ossification** — overly conservative governance processes prevent necessary protocol evolution; Bitcoin's governance has been criticised on this basis.
- **Legal Uncertainty** — DAO governance decisions may create legal liabilities for token holders; jurisdiction and liability remain unsettled in most legal systems.

### Current Landscape (2026)

- Civic-tech participation platforms have matured into the default infrastructure for community governance: the 2025 Guide to Digital Participation Platforms (People Powered with UNDP and FNF) now catalogues over 80 tools, with open-source Decidim, Go Vocal, Consul and Pol.is anchoring participatory budgeting and deliberation across dozens of countries.
- AI has become the defining 2024–2026 shift, moving from translation into sense-making and deliberation; People Powered's 2025 Digital Participation Tool Ratings assessed 30 tools specifically on responsible AI use, while the UNDP guide added standards for accessible, privacy-preserving AI-assisted engagement.
- On the on-chain side, pure token-weighted voting is being abandoned in favour of hybrid models: DAOs have adopted quadratic voting (Gitcoin, Optimism), conviction voting (1Hive) and delegated councils (Arbitrum's Security Council), while Optimism's bicameral Token House and Citizens' House restructured its Citizens' House into three groups in Season 8.
- Legal recognition has advanced sharply, with the Marshall Islands DAO LLC used by 80+ organisations, Wyoming's amended DAO law recognising decentralised limited liability cooperatives, and UNCITRAL circulating draft model-law work (document A/CN.9/1267, May 2026) on DAO legal status.
- EU regulation is forcing structural change ahead of the 1 July 2026 MiCA CASP-authorisation deadline: MiCA's Recital 22 exempts only "fully decentralised" arrangements but leaves the term undefined, and Malta's MFSA opened a DeFi discussion paper (ref. 03-2026) on 12 June 2026 probing DAOs, account abstraction and "Guardian Agents".
- Evidence of hollow decentralisation is the central open challenge: an ECB working paper (26 March 2026) found voting power heavily concentrated, with the top 20 delegates controlling 96% of Ampleforth's power, top 10 controlling 66% of MakerDAO's and top 18 controlling 52% of Uniswap's, undermining "fully decentralised" claims under MiCA.
- Persistent frontier problems span both worlds: chronically low turnout (on-chain participation often 2–11%, offline pilots struggling to institutionalise), the digital-inclusion and literacy divide flagged by UNDP, and the difficulty of turning one-off participatory pilots into durable governance, which People Powered's 2025 "Mainstreaming Participation" track directly targets.

### References

- 1. People Powered & UNDP (2025). Guide to Digital Participation Platforms (2025 Edition). https://www.undp.org/publications/guide-digital-participation-platforms-2025
- 2. People Powered (2025). 2025 Rewind! Top 5 Participatory Democracy Wins. https://www.peoplepowered.org/news-content/2025-rewind-top-5-participatory-democracy-wins
- 3. European Parliamentary Research Service (2024). Participatory budgeting: A pathway to inclusive and engaged local governance. https://www.europarl.europa.eu/RegData/etudes/BRIE/2024/762412/EPRS_BRI(2024)762412_EN.pdf
- 4. European Central Bank (2026). The future of DAOs in finance (Occasional Paper Series No. 331). https://www.ecb.europa.eu/pub/pdf/scpops/ecb.op331~a03e416045.en.pdf
- 5. DeFi Planet (2026). Are Decentralized Autonomous Organizations Too Centralized to Escape MiCA? https://defi-planet.com/2026/06/are-decentralized-autonomous-organizations-too-centralized-to-escape-mica/
- 6. Cryptorank (2026). Malta Regulator Opens DeFi Consultation As DAO Governance Enters Policy. https://cryptorank.io/news/feed/462ae-malta-regulator-opens-defi-consultation-as-dao-governance-enters-policy

### Provenance

