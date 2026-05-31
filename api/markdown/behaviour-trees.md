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