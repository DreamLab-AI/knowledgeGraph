public:: true

# Autonomous Decision Making
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autonomous-decision-making", "@type":"Page", "title":"Autonomous Decision Making", "vc:slug":"autonomous-decision-making", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:autonomous-decision-making",
  "@type":"Class",
  "label":"Autonomous Decision Making",
  "definition":"Autonomous decision making is the capacity of an artificial agent to select and commit to actions in pursuit of goals without requiring human authorisation for each choice. It combines perception of the environment, internal reasoning or learned policies, evaluation of expected outcomes, and action selection under uncertainty. Drawing on decision theory, planning, and reinforcement learning, it lets agents operate in dynamic settings where human supervision is impractical or too slow. Autonomous decision making is foundational to autonomous vehicles, robotic systems, and multi-agent coordination, and raises governance questions about accountability and human oversight.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:decision-making","label":"Decision Making"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:autonomous-agent","label":"Autonomous Agent"},
      {"@id":"urn:ngm:class:autonomous-vehicle","label":"Autonomous Vehicle"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:perception-system","label":"Perception System"},
      {"@id":"urn:ngm:class:situational-awareness","label":"Situational Awareness"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:reasoning","label":"Reasoning"},
      {"@id":"urn:ngm:class:decision-theory","label":"Decision Theory"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"},
      {"@id":"urn:ngm:class:planning","label":"Planning"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:planning","label":"Planning"},
      {"@id":"urn:ngm:class:goal","label":"Goal"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:robotics","label":"Robotics"},
      {"@id":"urn:ngm:class:multi-agent-system","label":"Multi-Agent System"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:control-system","label":"Control System"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:autonomous-agent","label":"Autonomous Agent"},
      {"@id":"urn:ngm:class:decision-theory","label":"Decision Theory"},
      {"@id":"urn:ngm:class:reasoning","label":"Reasoning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Autonomous decision making is an agent's ability to choose and act towards its goals without per-choice human authorisation. It is a specialised form of [[Decision Making]] grounded in [[Decision Theory]] and [[Reasoning]].
- It integrates [[Perception System]] input with learned or deliberative policies to act under uncertainty.
- ### Overview
- An autonomous decision maker perceives its environment, maintains an internal model or state, evaluates candidate actions against expected outcomes, and commits to one, then repeats the cycle as conditions change.
- The competence may be deliberative, using explicit [[Planning]] and search over goals, or reactive, using policies learned through [[Reinforcement Learning]], or a hybrid of both.
- Removing the human from each decision improves responsiveness in fast or remote settings but shifts the locus of accountability, motivating governance controls around oversight and override.
- ### Key aspects
- Action selection under uncertainty and partial observability.
- Goal representation and the balance between long-term objectives and immediate reaction.
- Safety constraints, fallback behaviours, and human override channels.
- Coordination when several autonomous agents share an environment.
- ### Applications
- Self-driving vehicles and aerial drones.
- Industrial and service [[Robotics]].
- Autonomous trading and resource allocation.
- Coordinated [[Multi-Agent System]] operations.
- ### Relationships
- subClassOf:: [[Decision Making]]
- enables:: [[Autonomous Agent]]
- enables:: [[Autonomous Vehicle]]
- requires:: [[Perception System]]
- requires:: [[Situational Awareness]]
- dependsOn:: [[Reasoning]]
- dependsOn:: [[Decision Theory]]
- uses:: [[Reinforcement Learning]]
- uses:: [[Planning]]
- hasPart:: [[Goal]]
- supports:: [[Robotics]]
- supports:: [[Multi-Agent System]]
- implements:: [[Control System]]
- ### Provenance
- updated:: 2026-06-15
