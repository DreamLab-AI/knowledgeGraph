---
okf_version: "0.2"
type: Class
title: Backward Chaining
resource: urn:ngm:class:backward-chaining
domain: artificial-intelligence
description: A goal-driven inference strategy that starts from a hypothesis to be proved and works backwards through the rule base, decomposing each goal into the subgoals given by the antecedents of rules whose consequents match it, recursing until every subgoal is grounded in known facts or fails. It is the query-answering counterpart to forward chaining, the evaluation strategy underlying Prolog's SLD resol
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:forward-chaining
uses:
  - urn:ngm:class:knowledge-representation
partOf:
  - urn:ngm:class:rule-based-systems
relatedTo:
  - urn:ngm:class:expert-systems
  - urn:ngm:class:inference-engine
---

# Backward Chaining

A goal-driven inference strategy that starts from a hypothesis to be proved and works backwards through the rule base, decomposing each goal into the subgoals given by the antecedents of rules whose consequents match it, recursing until every subgoal is grounded in known facts or fails. It is the query-answering counterpart to forward chaining, the evaluation strategy underlying Prolog's SLD resolution, and the diagnostic engine of classic expert systems such as MYCIN.
