public:: true

# Collective Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collective-governance",
  "@type": "Page",
  "vc:slug": "collective-governance",
  "title": "Collective Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collective-governance",
  "@type": "Class",
  "label": "Collective Governance",
  "definition": "A system of rules, norms, and decision-making processes through which a group of stakeholders jointly determines how shared resources, organisations, or platforms are managed. It distributes authority among participants rather than concentrating it in a single administrator, seeking legitimacy through inclusive participation and transparent deliberation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:community-governance", "label": "Community Governance"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:collective-action", "label": "Collective Action"},
      {"@id": "urn:ngm:class:coordination-mechanisms", "label": "Coordination Mechanisms"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:polycentric-governance", "label": "Polycentric Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collective-decision-making", "label": "Collective Decision Making"},
      {"@id": "urn:ngm:class:community-decision-making", "label": "Community Decision Making"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Collective Governance refers to the institutional arrangements by which groups — communities, DAOs, consortia, or multi-stakeholder bodies — make binding decisions over shared assets and activities. It operationalises [[Collective Action]] into durable structures with rules for proposal submission, deliberation, voting, and enforcement. Effective collective governance balances representativeness, efficiency, and resistance to capture by narrow interests.

- ### Relationships
  - Collective Governance requires [[Collective Action]] as its motivational basis and [[Coordination Mechanisms]] to function in practice. It enables more specialised forms such as [[DAO Governance]] in blockchain contexts and [[Polycentric Governance]] for complex, nested resource systems. It is closely related to [[Collective Decision Making]] — the epistemic process — and [[Community Decision Making]] — its implementation at community scale.

- ### Content
  - Collective governance has ancient roots in guild systems, commons management, and religious councils, but its modern theoretical grounding derives from public choice theory, institutional economics, and Elinor Ostrom's polycentrism framework. Ostrom showed that communities repeatedly invented layered governance arrangements — nested rules operating at operational, collective-choice, and constitutional levels — independent of central direction, challenging both state-centric and market-centric orthodoxies.

  - The operational mechanics of collective governance include proposal systems (how agenda items enter deliberation), voting rules (majority, supermajority, consensus, quadratic), delegation (liquid democracy or representative structures), and enforcement (smart contracts, community moderation, legal entities). Each design choice involves trade-offs: higher quorum thresholds increase legitimacy but risk gridlock; delegation improves efficiency but concentrates power.

  - In the digital economy, collective governance has been implemented in open-source projects (Apache Software Foundation's committee model), internet standards bodies (IETF, W3C), platform cooperatives, and blockchain DAOs. Compound, MakerDAO, and Uniswap govern multi-billion-dollar protocols through on-chain token voting, revealing practical challenges including voter apathy, plutocratic tendencies, and governance attack vectors.

  - Between 2024 and 2025, AI-assisted governance tooling — proposal summarisation, simulation of outcomes, sentiment analysis of community feedback — has begun augmenting collective governance processes. Simultaneously, AI infrastructure questions (who governs shared model weights, training data, and compute pools) are generating demand for new collective governance frameworks applicable to AI ecosystems.