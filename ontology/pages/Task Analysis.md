public:: true

# Task Analysis

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:task-analysis", "@type":"Page", "title":"Task Analysis", "vc:slug":"task-analysis", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:task-analysis",
  "@type":"Class",
  "label":"Task Analysis",
  "definition":"Task analysis is the systematic study of how users accomplish goals, decomposing activities into the sequence of actions, decisions, and cognitive operations required to complete them. It produces structured descriptions such as hierarchical task models and workflow maps that inform interface design, error prevention, and training. By making implicit work practices explicit, it grounds design decisions in observed user behaviour rather than assumption.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:user-research","label":"User Research"},
      {"@id":"urn:ngm:class:requirements-engineering","label":"Requirements Engineering"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:prototyping","label":"Prototyping"},
      {"@id":"urn:ngm:class:usability-testing","label":"Usability Testing"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"},
      {"@id":"urn:ngm:class:information-architecture","label":"Information Architecture"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:usability","label":"Usability"},
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cognitive-load","label":"Cognitive Load"},
      {"@id":"urn:ngm:class:user-research","label":"User Research"},
      {"@id":"urn:ngm:class:usability","label":"Usability"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:requirements-engineering","label":"Requirements Engineering"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Task analysis is the systematic decomposition of user goals into the actions, decisions, and cognitive steps needed to achieve them.
  - It belongs to [[Interaction Design]] and draws directly on [[User Research]] to surface real work practices.
  - The discipline sits within [[Human-Computer Interaction]] and feeds [[Requirements Engineering]] with grounded behavioural detail.
  - Outputs reduce [[Cognitive Load]] by aligning interfaces with how people actually think and act.
- ### Overview
  - Task analysis answers the question of what a person must do, in what order, and under what conditions to accomplish a goal.
  - It treats a task as a structured object that can be observed, modelled, and reasoned about rather than an opaque whole.
  - Common forms include hierarchical task analysis, which nests subtasks under goals, and cognitive task analysis, which captures the mental operations and knowledge that drive expert performance.
  - The technique is foundational to designing systems that match user expectations and minimise the gap between intention and action.
- ### Key aspects
  - Goal decomposition: breaking a high-level objective into ordered subtasks and operations.
  - Sequencing and plans: capturing the conditions and order in which subtasks are performed.
  - Cognitive demands: identifying decisions, judgements, and knowledge required at each step.
  - Error and recovery analysis: locating where mistakes are likely and how users recover.
  - Context capture: recording the environment, tools, and constraints surrounding the task.
- ### Applications
  - Designing interfaces and workflows that align with established user mental models.
  - Specifying functional requirements grounded in observed behaviour for software teams.
  - Building training materials and procedures from documented task structures.
  - Evaluating spatial and immersive interactions where physical and cognitive load matter.
  - Informing automation decisions by revealing which steps are repetitive or error-prone.
- ### Relationships
  - requires:: [[User Research]]
  - requires:: [[Requirements Engineering]]
  - uses:: [[Prototyping]]
  - uses:: [[Usability Testing]]
  - enables:: [[Interaction Design]]
  - enables:: [[Information Architecture]]
  - supports:: [[Usability]]
  - supports:: [[User Experience]]
  - partOf:: [[Human-Computer Interaction]]
  - relatedTo:: [[Cognitive Load]]
  - relatedTo:: [[User Research]]
  - relatedTo:: [[Usability]]
  - contrastsWith:: [[Requirements Engineering]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
