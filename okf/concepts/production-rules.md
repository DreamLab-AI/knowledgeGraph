---
okf_version: "0.2"
type: Class
title: Production Rules
resource: urn:ngm:class:production-rules
domain: artificial-intelligence
description: Production rules are condition-action statements of the form 'if antecedent then consequent' that encode procedural and declarative knowledge in symbolic artificial-intelligence systems. A collection of such rules forms a production system whose inference engine repeatedly matches rule conditions against a working memory of facts, selects which eligible rule to apply, and fires it to assert new fa
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:conflict-resolution
requires:
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-base
enables:
  - urn:ngm:class:expert-systems
implements:
  - urn:ngm:class:knowledge-representation
uses:
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:conflict-resolution
supports:
  - urn:ngm:class:symbolic-ai
partOf:
  - urn:ngm:class:expert-systems
relatedTo:
  - urn:ngm:class:symbolic-ai
  - urn:ngm:class:inference-engine
  - urn:ngm:class:knowledge-base
---

# Production Rules

Production rules are condition-action statements of the form 'if antecedent then consequent' that encode procedural and declarative knowledge in symbolic artificial-intelligence systems. A collection of such rules forms a production system whose inference engine repeatedly matches rule conditions against a working memory of facts, selects which eligible rule to apply, and fires it to assert new facts or perform actions. They are the principal knowledge-representation formalism of classical expert systems and rule-based reasoning, valued for transparency and modular editing. Production rules underpin forward- and backward-chaining inference and remain widely used in business rule engines and policy automation.
