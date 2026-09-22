public:: true

# Cooperative Game Theory
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cooperative-game-theory", "@type":"Page", "title":"Cooperative Game Theory", "vc:slug":"cooperative-game-theory", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cooperative-game-theory",
  "@type":"Class",
  "label":"Cooperative Game Theory",
  "definition":"Cooperative game theory is the branch of game theory that studies how groups of agents can form coalitions and how the value they jointly create should be divided among members. Rather than focusing on individual strategies, it analyses solution concepts such as the core and the Shapley value that capture fair or stable allocations of collective payoff. Its allocation principles underpin applications from economics and mechanism design to feature attribution in explainable machine learning.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:shapley-value","label":"Shapley Value"},
      {"@id":"urn:ngm:class:utility-function","label":"Utility Function"}
    ],
    "partOf":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "requires":[
      {"@id":"urn:ngm:class:utility-function","label":"Utility Function"},
      {"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}
    ],
    "uses":[{"@id":"urn:ngm:class:shapley-value","label":"Shapley Value"}],
    "enables":[
      {"@id":"urn:ngm:class:shap","label":"SHAP"},
      {"@id":"urn:ngm:class:fairness","label":"Fairness"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"},
      {"@id":"urn:ngm:class:social-choice-theory","label":"Social Choice Theory"}
    ],
    "contrastsWith":[{"@id":"urn:ngm:class:nash-equilibrium","label":"Nash Equilibrium"}],
    "bridgesTo":[
      {"@id":"urn:ngm:class:explainable-ai","label":"Explainable AI"},
      {"@id":"urn:ngm:class:economics","label":"Economics"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:game-theory","label":"Game Theory"},
      {"@id":"urn:ngm:class:social-choice-theory","label":"Social Choice Theory"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Cooperative game theory studies how agents form coalitions and how jointly created value should be divided, using solution concepts such as the [[Shapley Value]] and the core. It is a branch of [[Game Theory]] focused on allocation rather than individual strategy.
- ### Overview
- Where non-cooperative analysis asks what each player will do given the others, cooperative theory asks which groups will form and what each member deserves from their collective gain.
- A characteristic function assigns a value to every possible coalition, and solution concepts then propose allocations that are fair, stable, or both, relative to that function.
- The [[Shapley Value]] uniquely satisfies a natural set of fairness axioms, which is why it has migrated beyond [[Economics]] into [[Explainable AI]] as the basis for feature attribution.
- ### Key aspects
- Characteristic functions describing coalition worth.
- The core: allocations no coalition can profitably deviate from.
- The Shapley value: an axiomatic, marginal-contribution allocation.
- Superadditivity and the incentives that drive coalition formation.
- Links to [[Mechanism Design]] and [[Social Choice Theory]].
- ### Applications
- Grounding [[SHAP]] feature attribution in [[Explainable AI]].
- Fair cost and revenue sharing in [[Economics]] and operations.
- Designing incentive-compatible rules in [[Mechanism Design]].
- Analysing voting power and collective decisions via [[Social Choice Theory]].
- ### Relationships
- hasPart:: [[Shapley Value]]
- hasPart:: [[Utility Function]]
- partOf:: [[Game Theory]]
- requires:: [[Utility Function]]
- requires:: [[Mechanism Design]]
- uses:: [[Shapley Value]]
- enables:: [[SHAP]]
- enables:: [[Fairness]]
- supports:: [[Mechanism Design]]
- supports:: [[Social Choice Theory]]
- contrastsWith:: [[Nash Equilibrium]]
- bridgesTo:: [[Explainable AI]]
- bridgesTo:: [[Economics]]
- relatedTo:: [[Game Theory]]
- relatedTo:: [[Social Choice Theory]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
