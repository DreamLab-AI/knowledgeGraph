- ### Definition
  - [[Off Chain Governance]] describes the social and procedural mechanisms through which [[Distributed Ledger]] protocols are governed without recourse to on-chain voting [[Smart Contract]] logic.
  - Decisions emerge from developer mailing lists, improvement proposal processes (BIPs, EIPs, SIPs), foundation boards, and voluntary miner or validator upgrades.
  - It contrasts with on-chain governance where token holders vote directly and outcomes are automatically enforced by protocol smart contracts.

- ### Overview
  - Bitcoin's governance is the canonical example of off-chain governance: changes are proposed via Bitcoin Improvement Proposals (BIPs), debated on mailing lists and forums, implemented by maintainers, and activated when a supermajority of miners signal readiness.
  - Ethereum historically used off-chain governance for core protocol upgrades (EIPs deliberated through the Ethereum Cat Herders and All Core Devs calls), though Layer-2 DAOs increasingly adopt on-chain voting for treasury decisions.
  - The Segregated Witness (SegWit) activation controversy (2017) and subsequent Bitcoin Cash fork illustrated the limits and tensions inherent in off-chain [[Governance]] when community consensus fragments.
  - Off-chain governance is argued to allow expert deliberation on complex technical trade-offs that would be poorly served by simple token-weighted voting.

- ### Key Aspects
  - Improvement proposal frameworks (BIPs, EIPs) provide structured templates for proposing, discussing, and tracking protocol changes.
  - Social consensus formation occurs through GitHub discussions, mailing lists, conferences, and informal developer coordination.
  - Hard and soft forks are the enforcement mechanism: nodes and miners that do not upgrade remain on the old chain, making adoption voluntary but creating fork risk.
  - Foundation and core developer influence can create power concentration concerns despite the nominally decentralised network.

- ### Mechanisms
  - Signalling mechanisms (version bits, miner voting in block headers) allow network participants to express readiness for proposed changes.
  - Multi-stakeholder coordination among developers, miners, exchanges, and large node operators forms an informal governance coalition.
  - Rough consensus and running code (IETF model) is often cited as the normative process for protocol decisions.
  - Hard fork coordination requires exchange and wallet operator agreement to minimise replay attack risks affecting [[Externally Owned Account]] holders.

- ### Applications
  - Core protocol parameter changes (block size, fee market rules, consensus mechanism upgrades) in established proof-of-work networks.
  - Emergency response to critical vulnerabilities where rapid coordinated patches bypass slow on-chain voting timelines.
  - Layer-1 upgrade scheduling (Ethereum's Shapella, Dencun upgrades) coordinated through All Core Devs processes.
  - Cross-chain standards development through informal working groups coordinating [[Standards]] adoption.

- ### Relationships
  - subClassOf:: [[Distributed Ledger]]
  - contrastsWith:: [[Smart Contract]]
  - hasPart:: [[Governance]]
  - hasPart:: [[Standards]]
  - enables:: [[Distributed Collaboration]]
  - enables:: [[Security]]
  - requires:: [[Distributed Ledger]]
  - requires:: [[Externally Owned Account]]
  - relatedTo:: [[Blockchain Wallet]]
  - relatedTo:: [[Digital Identity]]
  - dependsOn:: [[Encryption]]
  - bridgesTo:: [[Finance]]

- ### Provenance
  - updated:: 2026-06-15