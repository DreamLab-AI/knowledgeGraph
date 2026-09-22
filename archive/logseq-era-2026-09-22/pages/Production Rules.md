public:: true

# Production Rules
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:production-rules", "@type":"Page", "title":"Production Rules", "vc:slug":"production-rules", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:production-rules",
  "@type":"Class",
  "label":"Production Rules",
  "definition":"Production rules are condition-action statements of the form 'if antecedent then consequent' that encode procedural and declarative knowledge in symbolic artificial-intelligence systems. A collection of such rules forms a production system whose inference engine repeatedly matches rule conditions against a working memory of facts, selects which eligible rule to apply, and fires it to assert new facts or perform actions. They are the principal knowledge-representation formalism of classical expert systems and rule-based reasoning, valued for transparency and modular editing. Production rules underpin forward- and backward-chaining inference and remain widely used in business rule engines and policy automation.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:knowledge-representation","label":"Knowledge Representation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:inference-engine","label":"Inference Engine"},
      {"@id":"urn:ngm:class:conflict-resolution","label":"Conflict Resolution"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:inference-engine","label":"Inference Engine"},
      {"@id":"urn:ngm:class:knowledge-base","label":"Knowledge Base"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:knowledge-base","label":"Knowledge Base"},
      {"@id":"urn:ngm:class:conflict-resolution","label":"Conflict Resolution"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:expert-systems","label":"Expert Systems"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:expert-systems","label":"Expert Systems"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:knowledge-representation","label":"Knowledge Representation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:symbolic-ai","label":"Symbolic AI"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:symbolic-ai","label":"Symbolic AI"},
      {"@id":"urn:ngm:class:inference-engine","label":"Inference Engine"},
      {"@id":"urn:ngm:class:knowledge-base","label":"Knowledge Base"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Production rules are if-then statements that pair a condition with an action, encoding knowledge in a form an [[Inference Engine]] can apply mechanically. They are the core formalism of [[Knowledge Representation]] in rule-based [[Symbolic AI]].
- A set of rules plus a working memory and an interpreter constitutes a production system, the engine behind classical [[Expert Systems]].
- ### Overview
- Each rule names the situation in which it is applicable and the conclusion or action it licenses. The inference engine cycles through a match-resolve-act loop: it finds all rules whose conditions hold, resolves which one to fire when several qualify, and applies it.
- Because each rule is an independent, human-readable unit, knowledge can be added, removed, or audited without rewriting a monolithic program.
- This transparency made production rules the dominant representation during the expert-systems era and keeps them relevant in business and compliance rule engines.
- ### Mechanisms
- Pattern matching of rule antecedents against facts in the [[Knowledge Base]].
- Conflict resolution to choose among simultaneously eligible rules.
- Forward chaining (data-driven) and backward chaining (goal-driven) inference strategies.
- Explanation generation by tracing the chain of fired rules.
- ### Applications
- Diagnostic and advisory expert systems in medicine, finance, and engineering.
- Business rule management and policy automation.
- Configuration and constraint checking.
- Cognitive architectures modelling human problem solving.
- ### Relationships
- subClassOf:: [[Knowledge Representation]]
- hasPart:: [[Inference Engine]]
- hasPart:: [[Conflict Resolution]]
- requires:: [[Knowledge Base]]
- uses:: [[Knowledge Base]]
- partOf:: [[Expert Systems]]
- enables:: [[Expert Systems]]
- implements:: [[Knowledge Representation]]
- supports:: [[Symbolic AI]]
- relatedTo:: [[Symbolic AI]]
- ### Provenance
- updated:: 2026-06-15
