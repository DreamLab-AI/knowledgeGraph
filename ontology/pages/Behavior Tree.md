public:: true

# Behavior Tree
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:behavior-tree",
  "@type": "Page",
  "vc:slug": "behavior-tree",
  "title": "Behavior Tree",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:behavior-tree",
  "@type": "Class",
  "label": "Behavior Tree",
  "definition": "A behavior tree is a hierarchical, modular control architecture for structuring the decision-making of autonomous agents and robots. It composes leaf action and condition nodes under control-flow nodes (sequence, fallback, parallel, decorator) that are evaluated by periodic ticks, returning success, failure, or running. Behavior trees offer greater modularity and reactivity than finite-state machines and are widely used in robotics middleware and game AI.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:nav2", "label": "Nav2"},
      {"@id": "urn:ngm:class:ai-game-agent", "label": "AI Game Agent"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A behavior tree organises an agent's actions and conditions into a reactive hierarchy of ticked nodes, providing the task-orchestration backbone for systems such as [[Nav2]] and forming part of an [[AI Game Agent]].
- ### Content
  - Control nodes route execution: sequences run children until one fails, fallbacks until one succeeds, and decorators modify child results. Because subtrees are self-contained and composable, behavior trees scale to complex behaviours while remaining readable and reactive to changing world state.
