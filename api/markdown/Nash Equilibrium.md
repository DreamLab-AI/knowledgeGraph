public:: true

# Nash Equilibrium

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:nash-equilibrium", "@type":"Page", "title":"Nash Equilibrium", "vc:slug":"nash-equilibrium", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:nash-equilibrium",
  "@type":"Class",
  "label":"Nash Equilibrium",
  "definition":"A Nash equilibrium is a solution concept in game theory describing a profile of strategies, one for each player, such that no player can increase their own payoff by unilaterally changing strategy while the others hold theirs fixed. It captures a stable state of mutual best responses and may be in pure or mixed strategies. Nash proved that every finite game has at least one such equilibrium, making it the central predictive concept for strategic interaction among rational agents.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "hasPart":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}],
    "requires":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "enables":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}],
    "uses":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "dependsOn":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "supports":[{"@id":"urn:ngm:class:auction-theory","label":"Auction Theory"}],
    "implements":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "relatedTo":[{"@id":"urn:ngm:class:cooperative-game-theory","label":"Cooperative Game Theory"},{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}],
    "bridgesTo":[{"@id":"urn:ngm:class:artificial-intelligence","label":"Artificial Intelligence"}],
    "contrastsWith":[{"@id":"urn:ngm:class:cooperative-game-theory","label":"Cooperative Game Theory"}],
    "standardizedBy":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A Nash equilibrium is the central solution concept of [[Game Theory]]: a strategy profile from which no player benefits by deviating alone.
  - It describes mutual best responses, where each player's choice is optimal given the others' choices.
  - It underwrites analysis in [[Mechanism Design]] and [[Auction Theory]] and informs multi-agent reasoning in [[Artificial Intelligence]].
- ### Overview
  - Introduced by John Nash, the equilibrium formalises strategic stability: at such a point, knowing what everyone else will do, no individual has an incentive to change.
  - Nash's existence theorem guarantees that every finite game has at least one equilibrium, possibly in mixed strategies where players randomise over actions.
  - The concept does not promise a socially optimal outcome, as illustrated by the prisoner's dilemma, where the unique equilibrium is worse for all than an unavailable cooperative outcome.
- ### Key aspects
  - Best response: each player's strategy maximises payoff given the others' fixed strategies.
  - Pure versus mixed: equilibria may prescribe deterministic actions or probability distributions over actions.
  - Existence: guaranteed for finite games, though equilibria may be multiple.
  - Refinements: stronger notions such as subgame perfection select among equilibria.
  - Efficiency gap: equilibria need not be Pareto optimal.
- ### Mechanisms
  - Equilibria are found by identifying mutual best responses, often via fixed-point arguments.
  - Mixed equilibria are computed so that each player is indifferent among the actions they randomise over.
  - [[Mechanism Design]] reverses the analysis, engineering games whose equilibria yield desired outcomes.
  - In contrast to [[Cooperative Game Theory]], the concept assumes non-binding, independent decisions by self-interested players.
- ### Applications
  - Strategy analysis in economics, [[Auction Theory]] and market design.
  - Multi-agent learning and adversarial training in [[Artificial Intelligence]].
  - Pricing, bargaining and competition modelling.
  - Protocol and incentive design in distributed and blockchain systems.
- ### Relationships
  - partOf:: [[Game Theory]]
  - hasPart:: [[Mechanism Design]]
  - requires:: [[Game Theory]]
  - enables:: [[Mechanism Design]]
  - uses:: [[Game Theory]]
  - dependsOn:: [[Game Theory]]
  - supports:: [[Auction Theory]]
  - implements:: [[Game Theory]]
  - relatedTo:: [[Cooperative Game Theory]]
  - relatedTo:: [[Mechanism Design]]
  - bridgesTo:: [[Artificial Intelligence]]
  - contrastsWith:: [[Cooperative Game Theory]]
  - standardizedBy:: [[Game Theory]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
