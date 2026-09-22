public:: true

# Hierarchical Task Network
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hierarchical-task-network", "@type":"Page", "title":"Hierarchical Task Network", "vc:slug":"hierarchical-task-network", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hierarchical-task-network",
  "@type":"Class",
  "label":"Hierarchical Task Network",
  "definition":"A hierarchical task network (HTN) is an automated planning formalism in which planning proceeds by recursively decomposing high-level compound tasks into networks of smaller subtasks until only primitive, directly executable actions remain. Decomposition is guided by domain-specific methods that encode expert knowledge about how tasks may be accomplished, together with ordering constraints between subtasks. HTN planning contrasts with classical state-space planning by searching over task decompositions rather than over world states alone, which often yields stronger guidance and greater efficiency in well-structured domains.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:automated-planning","label":"Automated Planning"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:automated-planning","label":"Automated Planning"}],
    "hasPart":[{"@id":"urn:ngm:class:task-decomposition","label":"Task Decomposition"},{"@id":"urn:ngm:class:goal","label":"Goal"}],
    "requires":[{"@id":"urn:ngm:class:task-decomposition","label":"Task Decomposition"},{"@id":"urn:ngm:class:automated-reasoning","label":"Automated Reasoning"}],
    "uses":[{"@id":"urn:ngm:class:graph-search","label":"Graph Search"},{"@id":"urn:ngm:class:decision-making","label":"Decision Making"}],
    "enables":[{"@id":"urn:ngm:class:planning","label":"Planning"},{"@id":"urn:ngm:class:decision-making","label":"Decision Making"}],
    "supports":[{"@id":"urn:ngm:class:robotics","label":"Robotics"}],
    "contrastsWith":[{"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"}],
    "relatedTo":[{"@id":"urn:ngm:class:planning","label":"Planning"},{"@id":"urn:ngm:class:goal","label":"Goal"},{"@id":"urn:ngm:class:automated-reasoning","label":"Automated Reasoning"}],
    "bridgesTo":[{"@id":"urn:ngm:class:robotics","label":"Robotics"}],
    "dependsOn":[{"@id":"urn:ngm:class:automated-planning","label":"Automated Planning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Hierarchical Task Network]] is an [[Automated Planning]] method that solves problems by recursively decomposing compound tasks into ordered subtasks.
  - It relies on [[Task Decomposition]] methods that encode domain knowledge about how each abstract task can be achieved.
  - HTN planning searches over decompositions rather than purely over world states, blending [[Automated Reasoning]] with structured [[Planning]].
- ### Overview
  - In HTN planning a problem is expressed not as a single goal predicate but as an initial task network: a partially ordered set of tasks to be performed.
  - Tasks are either primitive (executable operators) or compound (requiring further decomposition).
  - Methods specify how a compound task may be reduced to a network of subtasks, subject to preconditions and ordering constraints.
  - The planner applies methods repeatedly until the network contains only primitive actions whose preconditions are mutually satisfiable.
- ### Key aspects
  - Compound versus primitive tasks distinguish abstract intentions from directly executable operators.
  - Methods carry the domain expertise that prunes the search space relative to classical planning.
  - Ordering constraints and variable bindings propagate through decomposition to preserve plan correctness.
  - Total-order and partial-order HTN variants trade expressiveness against computational complexity.
  - HTN expressiveness can exceed that of classical STRIPS planning, capturing problems that are otherwise hard to encode.
- ### Applications
  - Robotic task and motion planning where high-level missions decompose into manipulation and navigation primitives.
  - Game AI and non-player-character behaviour, where designers author methods that read as readable strategies.
  - Workflow and process automation in which business procedures decompose into concrete steps.
  - Military and logistics planning, an early and influential HTN application domain.
- ### Relationships
  - partOf:: [[Automated Planning]]
  - hasPart:: [[Task Decomposition]]
  - hasPart:: [[Goal]]
  - requires:: [[Automated Reasoning]]
  - uses:: [[Graph Search]]
  - uses:: [[Decision Making]]
  - enables:: [[Planning]]
  - supports:: [[Robotics]]
  - contrastsWith:: [[Reinforcement Learning]]
  - bridgesTo:: [[Robotics]]
  - relatedTo:: [[Goal]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
