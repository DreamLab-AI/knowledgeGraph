---
okf_version: "0.2"
type: Class
title: LangGraph
resource: urn:ngm:class:lang-graph
domain: artificial-intelligence
description: LangGraph is a library for building stateful, multi-step language model applications by representing control flow as a graph. It is part of the LangChain ecosystem and supports cyclic agent workflows.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:agentic-workflow
requires:
  - urn:ngm:class:language-model
  - urn:ngm:class:state-machine
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:agentic-workflow
bridgesTo:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:tool-use
---

# LangGraph

LangGraph is a library for building stateful, multi-step language model applications by representing control flow as a graph. It is part of the LangChain ecosystem and supports cyclic agent workflows.
