public:: true

# Community Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:90a5259d64dcf2e94a3fc3a423d7a57be311f4dde9941cf3e0a6d2b4ec42dcc9",
  "@type": "Page",
  "vc:slug": "community-governance",
  "title": "Community Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9528"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Community Governance"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:community-governance",
  "@type": "Class",
  "label": "Community Governance",
  "definition": "Community Governance refers to the structures, processes, and norms through which a community of stakeholders collectively makes decisions, allocates resources, resolves disputes, and sets rules for shared systems or commons. It encompasses formal mechanisms such as voting protocols, proposal systems, and constitutional rules, as well as informal norms of participation, legitimacy, and accountability. Community governance may be implemented on-chain through smart contracts and token-weighted voting in decentralised autonomous organisations, or off-chain through forum deliberation, elected councils, and working groups in open-source projects, platform cooperatives, and public institutions. The field draws on political science, institutional economics, commons theory, and distributed systems to design governance models that are simultaneously legitimate, efficient, and resistant to capture.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-governance",
      "label": "Decentralised Governance"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:participatory-governance",
      "label": "Participatory Governance"
    },
    {
      "@id": "urn:ngm:class:collective-governance",
      "label": "Collective Governance"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      },
      {
        "@id": "urn:ngm:class:proposal-system",
        "label": "Proposal System"
      },
      {
        "@id": "urn:ngm:class:dispute-resolution",
        "label": "Dispute Resolution"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:institutional-design",
        "label": "Institutional Design"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-participation",
        "label": "Stakeholder Participation"
      },
      {
        "@id": "urn:ngm:class:accountability-mechanism",
        "label": "Accountability Mechanisms"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collective-decision-making",
        "label": "Collective Decision Making"
      },
      {
        "@id": "urn:ngm:class:commons-stack",
        "label": "Commons Management"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrades",
        "label": "Protocol Upgrade"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:social-contract",
        "label": "Social Contract"
      },
      {
        "@id": "urn:ngm:class:legitimacy",
        "label": "Legitimacy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token Voting"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open-Source Project"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      },
      {
        "@id": "urn:ngm:class:centralised-control",
        "label": "Centralised Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:digital-commons",
        "label": "Digital Commons"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rough-consensus",
        "label": "Rough Consensus"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:community-governance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:90a5259d64dcf2e94a3fc3a423d7a57be311f4dde9941cf3e0a6d2b4ec42dcc9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Community Governance is the set of structures, processes, and norms through which a community of stakeholders collectively makes decisions about shared systems, resources, or commons. It encompasses [[Voting Mechanism]], [[Proposal System]], [[Dispute Resolution]], and norm-setting procedures that together confer legitimacy on collective choices. Community governance is distinct from [[Corporate Governance]] in that authority is distributed among participants rather than concentrated in a board or executive; it contrasts with [[Centralised Control]] by making rule changes and resource allocation the outcome of community deliberation. The field draws on [[Ostrom Principles]] for commons management, political science theories of deliberative democracy, and modern [[Decentralised Governance]] frameworks to design systems that are simultaneously legitimate, efficient, and resistant to elite capture.

- ### Overview
  - Community governance addresses the fundamental challenge of coordinating collective action among actors with heterogeneous interests without relying on a single authoritative centre.
  - It is relevant wherever a shared resource, protocol, or platform must evolve over time: open-source software, internet standards bodies, blockchain networks, platform cooperatives, neighbourhood associations, and supranational internet governance forums.
  - The core governance cycle involves: (1) identifying a problem or opportunity, (2) drafting a proposal, (3) deliberation and amendment, (4) decision by vote or consensus, (5) implementation, and (6) monitoring and accountability.
  - Legitimacy — the belief among participants that decisions are binding and fair — is the foundational requirement. Without it, minority factions exit or defect, fragmenting the community.
  - [[Accountability Mechanisms]] close the feedback loop: decision-makers must be answerable for outcomes, and processes must be auditable.

- ### Key Components
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

- ### Mechanisms
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

- ### Applications / Use Cases
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

- ### Relationships
  - hasPart:: [[Voting Mechanism]]
  - hasPart:: [[Proposal System]]
  - hasPart:: [[Dispute Resolution]]
  - hasPart:: [[Treasury Management]]
  - partOf:: [[Decentralised Governance]]
  - partOf:: [[Institutional Design]]
  - requires:: [[Stakeholder Participation]]
  - requires:: [[Accountability Mechanisms]]
  - requires:: [[Consensus Mechanism]]
  - enables:: [[Collective Decision-Making]]
  - enables:: [[Commons Management]]
  - enables:: [[Protocol Upgrade]]
  - dependsOn:: [[Social Contract]]
  - dependsOn:: [[Legitimacy]]
  - uses:: [[Token Voting]]
  - uses:: [[Quadratic Voting]]
  - uses:: [[Multisig Wallet]]
  - uses:: [[Smart Contract]]
  - supports:: [[Decentralised Autonomous Organisation]]
  - supports:: [[Open-Source Project]]
  - supports:: [[Platform Cooperative]]
  - contrastsWith:: [[Corporate Governance]]
  - contrastsWith:: [[Centralised Control]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[AI Alignment]]
  - bridges-to:: [[Digital Commons]]
  - relatedTo:: [[Ostrom Principles]]
  - relatedTo:: [[Metagovernance]]
  - relatedTo:: [[Rough Consensus]]

- ### Theoretical Foundations
  - **Elinor Ostrom's Governing the Commons (1990)**
    - Identified eight design principles for sustainable commons governance (clearly defined boundaries, proportional rules, collective choice, monitoring, graduated sanctions, conflict resolution, recognition by external authorities, nested layers).
    - These principles directly inform modern DAO constitutions and community charters.
  - **Deliberative Democracy**
    - Habermas and others argue legitimate governance requires substantive public reasoning, not merely preference aggregation. Informs forum-based deliberation norms in open-source projects.
  - **Social Choice Theory**
    - Arrow's Impossibility Theorem, Condorcet's paradox, and mechanism design theory constrain what voting systems can achieve; inform the search for voting mechanisms that satisfy fairness criteria under real-world conditions.
  - **Principal-Agent Theory**
    - Token-holder principals delegate to developer-agent teams; governance systems must align incentives and constrain agent opportunism.

- ### Standards & Context
  - **IETF RFC 7282** — "On Consensus and Humming in the IETF" — formalises the rough consensus model.
  - **OpenZeppelin Governor** — widely adopted smart-contract governance framework (Compound Governor fork) providing on-chain proposal, voting, and execution.
  - **Tally, Snapshot, Boardroom** — off-chain and hybrid governance tooling platforms used by most major DAOs.
  - **DAOstack and Aragon** — early DAO governance frameworks establishing modular, upgradeable governance architectures.
  - **IEEE P2145** — draft standard on blockchain and distributed ledger governance frameworks.
  - **ICANN Accountability and Transparency Frameworks** — multi-stakeholder model for internet naming and addressing governance.
  - **UN SDG 16** — Sustainable Development Goal on peace, justice, and strong institutions; frames community governance as a development priority.

- ### Risks and Failure Modes
  - **Plutocracy** — token-weighted voting concentrates power in large holders; whales can capture governance.
  - **Voter Apathy** — low participation rates mean small coordinated minorities can pass proposals unopposed.
  - **Governance Attacks** — flash-loan attacks enable transient acquisition of voting power; Beanstalk Protocol lost funds via a governance exploit.
  - **Sybil Attacks** — creation of many pseudonymous identities to amplify voting weight in systems without identity verification.
  - **Ossification** — overly conservative governance processes prevent necessary protocol evolution; Bitcoin's governance has been criticised on this basis.
  - **Legal Uncertainty** — DAO governance decisions may create legal liabilities for token holders; jurisdiction and liability remain unsettled in most legal systems.

- ### Provenance
  - sources:: Ostrom (1990) Governing the Commons; IETF RFC 7282; OpenZeppelin Governor documentation; Vitalik Buterin governance writings; Compound/Uniswap governance documentation; DAOstack whitepaper
  - updated:: 2026-06-13
