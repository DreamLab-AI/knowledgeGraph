public:: true

# Behaviour Trees
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:36a43dc2f06561bd000885132ae82c677ee74084b66d5f04a0f33149f68e02f8",
  "@type": "Page",
  "vc:slug": "behaviour-trees",
  "title": "Behaviour Trees",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:task-and-motion-planning",
      "vc:label": "Task and Motion Planning"
    },
    {
      "@id": "urn:visionflow:linked:behaviour-tree",
      "vc:label": "Behaviour Tree"
    },
    {
      "@id": "urn:visionflow:linked:robot-control",
      "vc:label": "Robot Control"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-behavior-tree-artificial-intelligence-robotics-and-control",
      "vc:label": "https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)"
    },
    {
      "@id": "urn:visionflow:linked:https-www-behaviortree-dev",
      "vc:label": "https://www.behaviortree.dev"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Behaviour Trees"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:behaviour-trees",
  "@type": "Class",
  "label": "Behaviour Trees",
  "definition": "Behaviour trees are a model for organising the decision logic of autonomous agents and robots into a tree of tasks and control nodes. They are used in robotics and game artificial intelligence.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-control",
      "label": "Robot Control"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:task-and-motion-planning",
        "label": "Task and Motion Planning"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:behaviour-trees:c11a624581e2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:36a43dc2f06561bd000885132ae82c677ee74084b66d5f04a0f33149f68e02f8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Task and Motion Planning]]",
      "resolved": "urn:visionflow:linked:task-and-motion-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Behaviour Tree]]",
      "resolved": "urn:visionflow:linked:behaviour-tree",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:linked:robot-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-behavior-tree-artificial-intelligence-robotics-and-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.behaviortree.dev]]",
      "resolved": "urn:visionflow:linked:https-www-behaviortree-dev",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Behaviour trees are a model for organising the decision logic of autonomous agents and robots into a tree of tasks and control nodes. They are used in robotics and game artificial intelligence.

- ### Semantic Classification
  - owl-class:: robotics:BehaviourTrees
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robot Control]]
  - bridges-to:: [[Behaviour Tree]]
  - enables:: [[Task and Motion Planning]]

- ### Content
  - A behaviour tree structures actions and conditions as nodes, with control nodes such as sequences and selectors determining the order and conditions under which child nodes run. The tree is evaluated repeatedly to choose the agent's next action.
  - Behaviour trees are modular and easier to extend than large state machines, which makes them common in game characters and robot controllers. They allow complex behaviour to be built from reusable subtrees.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)]], [[https://www.behaviortree.dev]]
  - migration-date:: 2026-05-29T00:00:00Z
