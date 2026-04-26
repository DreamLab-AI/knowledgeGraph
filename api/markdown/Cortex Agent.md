iri:: http://narrativegoldmine.com/ontology#CortexAgent
uri:: urn:visionclaw:concept:artificial-intelligence:cortex-agent
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:cortex-agent
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Cortex Agent
content-hash:: sha256-12-598209d792be
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Cortex Agent is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CortexAgent
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

  - bridges-to:: [[Blockchain]] (bc)
- ### Content
  - [ChatGPT (openai.com)](https://chat.openai.com/c/d45f0228-6721-4150-8bb5-8b30893dab7c)
  - ```mermaid
  stateDiagram-v2
      [*] --> Initialize
      Initialize --> TaskDecompose: Receive initial state & goal
      TaskDecompose --> SelectSubgoal: Generate subgoals
      SelectSubgoal --> Search: Select current subgoal
      Search --> ProposeActions: Perform action search
      ProposeActions --> ValidateActions: Actor & Monitor
      ValidateActions --> PredictState: Valid action?
      PredictState --> EvaluateState: Predict next state
      EvaluateState --> CheckSubgoal: Evaluate state value
      CheckSubgoal --> UpdatePlan: Subgoal achieved?
      UpdatePlan --> SelectSubgoal: Subgoal not achieved
      CheckSubgoal --> FinalizePlan: All subgoals achieved
      FinalizePlan --> [*]: Return final plan

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
