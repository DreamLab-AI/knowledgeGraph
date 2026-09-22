public:: true

# Preference Aggregation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:preference-aggregation",
  "@type": "Page",
  "title": "Preference Aggregation",
  "vc:slug": "preference-aggregation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:preference-aggregation",
  "@type": "Class",
  "label": "Preference Aggregation",
  "definition": "The process of combining individual preferences, rankings, or utility functions from multiple stakeholders into a collective or social preference ordering for decision-making purposes. Preference aggregation methods range from simple majority voting to sophisticated social choice mechanisms, each making different assumptions about preference structure and interpersonal comparability. Arrow's impossibility theorem establishes fundamental limits on consistent aggregation. The field is central to voting theory, mechanism design, and collaborative governance.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"},
      {"@id": "urn:ngm:class:social-choice-theory", "label": "Social Choice Theory"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:collective-decision-making", "label": "Collective Decision-Making"},
      {"@id": "urn:ngm:class:democratic-governance", "label": "Democratic Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:utility-function", "label": "Utility Function"},
      {"@id": "urn:ngm:class:ranking-algorithm", "label": "Ranking Algorithm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:policy-formation", "label": "Policy Formation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:game-theory", "label": "Game Theory"},
      {"@id": "urn:ngm:class:decentralized-autonomous-organization", "label": "Decentralized Autonomous Organization"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:individual-decision-making", "label": "Individual Decision-Making"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-collection", "label": "Data Collection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Preference Aggregation]] transforms individual stakeholder rankings or utility signals into a collective social ordering, forming the mathematical core of [[Democratic Governance]] and [[Collective Decision-Making]].
  - It is constrained by fundamental results from [[Social Choice Theory]], most notably Arrow's impossibility theorem, which limits what any aggregation rule can guarantee simultaneously about consistency and fairness.

- ### Overview
  - From ancient Athenian voting to modern [[Decentralized Autonomous Organization]] governance, the challenge of combining disparate preferences into binding group choices has driven rich theoretical and practical innovation.
  - Classical methods include plurality voting, Borda count, Condorcet methods, and approval voting, each with distinct strategic properties.
  - Computational social choice applies algorithmic methods to aggregation at scale, enabling [[Mechanism Design]] for large, heterogeneous populations.
  - AI systems increasingly assist preference aggregation by learning latent preference structures from behavioural data.

- ### Key Aspects
  - **Cardinal vs ordinal** — whether numeric utilities or ranked orderings are elicited from participants.
  - **Strategyproofness** — whether participants have incentives to report preferences honestly.
  - **Pareto efficiency** — aggregated outcomes should not be dominated by alternatives preferred unanimously.
  - **Independence of irrelevant alternatives** — group rankings should not change when non-winning options are added or removed.

- ### Applications
  - Democratic elections and referenda using ranked-choice or approval voting systems.
  - DAO governance token weighted voting for protocol parameter changes.
  - Recommender systems aggregating inferred user preferences into collaborative filtering.
  - Multi-criteria decision analysis in public policy and infrastructure planning.

- ### Relationships
  - requires:: [[Voting Mechanism]]
  - requires:: [[Social Choice Theory]]
  - implements:: [[Collective Decision-Making]]
  - implements:: [[Democratic Governance]]
  - uses:: [[Utility Function]]
  - uses:: [[Ranking Algorithm]]
  - enables:: [[Consensus Mechanism]]
  - enables:: [[Policy Formation]]
  - relatedTo:: [[Mechanism Design]]
  - relatedTo:: [[Game Theory]]
  - relatedTo:: [[Decentralized Autonomous Organization]]
  - contrastsWith:: [[Individual Decision-Making]]
  - dependsOn:: [[Data Collection]]
  - supports:: [[Fairness]]
  - supports:: [[Transparency]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
