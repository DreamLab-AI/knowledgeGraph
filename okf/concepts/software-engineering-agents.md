---
okf_version: "0.2"
type: Class
title: Software Engineering Agents
resource: urn:ngm:class:software-engineering-agents
domain: ai
description: Software engineering agents are autonomous or semi-autonomous AI systems built on large language models that perform software development tasks — reading and editing codebases, running tests, debugging, and opening pull requests — by planning multi-step actions and invoking developer tools. They operate over real repositories using file navigation, shell execution, and version-control integration,
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:llm-agents
enables:
  - urn:ngm:class:prompt-engineering
uses:
  - urn:ngm:class:reasoning
  - urn:ngm:class:chain-of-thought
relatedTo:
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:llm-application-framework
---

# Software Engineering Agents

Software engineering agents are autonomous or semi-autonomous AI systems built on large language models that perform software development tasks — reading and editing codebases, running tests, debugging, and opening pull requests — by planning multi-step actions and invoking developer tools. They operate over real repositories using file navigation, shell execution, and version-control integration, and are evaluated on benchmarks such as SWE-bench that measure the rate at which they resolve genuine GitHub issues. They represent the application of agentic reasoning to the specific domain of writing and maintaining code.
