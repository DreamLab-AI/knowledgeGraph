public:: true

# Collective Action
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collective-action",
  "@type": "Page",
  "vc:slug": "collective-action",
  "title": "Collective Action",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collective-action",
  "@type": "Class",
  "label": "Collective Action",
  "definition": "Coordinated behaviour by a group of individuals or organisations toward a shared goal that no single actor could achieve unilaterally. It is characterised by interdependence, the risk of free-riding, and the need for mechanisms — such as incentives, norms, or contracts — to align individual contributions with the group objective.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:coordination-mechanisms", "label": "Coordination Mechanisms"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:collective-governance", "label": "Collective Governance"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-goods-funding", "label": "Public Goods Funding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"},
      {"@id": "urn:ngm:class:community-governance", "label": "Community Governance"},
      {"@id": "urn:ngm:class:common-pool-resources", "label": "Common Pool Resources"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:coordination-protocol", "label": "Coordination Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Collective Action describes situations in which groups must overcome individual incentives to defect in order to produce, maintain, or protect shared goods and services. The concept is central to political science, economics, and organisational theory. Mancur Olson's foundational 1965 work identified that larger groups face steeper coordination difficulties, a challenge addressed by selective incentives, monitoring, and sanctioning mechanisms.

- ### Relationships
  - Collective Action problems underpin [[Collective Governance]] — the institutional arrangements designed to prevent free-rider dynamics. Successful collective action enables [[Public Goods Funding]] and sustainable stewardship of [[Common Pool Resources]]. It is closely related to [[Collective Intelligence]], which emerges when a group's coordinated effort produces decision-making superior to individual judgment. [[Community Governance]] instantiates collective action at a community scale, while [[Coordination Protocol]] provides the technical scaffolding for digital collective action.

- ### Content
  - The study of collective action was formalised by Mancur Olson in "The Logic of Collective Action" (1965), building on game-theoretic work including the Prisoner's Dilemma. Olson argued that rational individuals will under-contribute to group endeavours because they can benefit from others' contributions without bearing costs — the free-rider problem. This insight reframed debates about trade unions, lobbying, and public policy provision.

  - Elinor Ostrom's Nobel Prize-winning research (2009) empirically contested Olson's pessimism by documenting communities that successfully self-governed shared resources — fisheries, pastures, irrigation systems — without either state coercion or privatisation. Ostrom identified eight design principles, including congruent rules, collective choice arrangements, and graduated sanctions, that distinguish sustainable from failing collective action institutions.

  - Digital platforms have created new collective action arenas. Blockchain-based mechanisms such as [[DAO]] structures, quadratic voting, and retroactive public goods funding attempt to encode Ostrom-style design principles in smart contracts. Projects like Gitcoin Grants and Optimism's retroactive public goods rounds exemplify algorithmic collective action at scale, matching individual contributions with pooled matching funds.

  - In 2024–2025, AI agents participating in multi-stakeholder systems raise novel collective action questions: how do autonomous agents negotiate shared resources, avoid tragedy-of-the-commons dynamics in shared compute or data markets, and align emergent group behaviour with human-specified goals? These questions are actively shaping AI governance frameworks and multi-agent system design.