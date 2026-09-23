---
okf_version: "0.2"
type: Class
title: Function Calling
resource: urn:ngm:class:function-calling
domain: artificial-intelligence
description: Function Calling (also termed tool use or tool invocation) is the capability of large language models to emit structured requests selecting and parameterising external functions described to them via JSON-Schema tool definitions, with the application layer executing the selected tools and returni...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:tool-use
  - urn:ngm:class:llm-capability
  - urn:ngm:class:structured-output
  - urn:ngm:class:agentic-capability
  - urn:ngm:class:language-model-augmentation
hasPart:
  - urn:ngm:class:tool-definition
  - urn:ngm:class:tool-schema
  - urn:ngm:class:tool-use
  - urn:ngm:class:tool-definition
  - urn:ngm:class:tool-use
  - urn:ngm:class:tool-result-block
  - urn:ngm:class:function-registry
  - urn:ngm:class:argument-validator
  - urn:ngm:class:tool-executor
  - urn:ngm:class:conversation-loop
requires:
  - urn:ngm:class:metaverse-application-platform
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:large-language-models
  - urn:ngm:class:large-language-model
  - urn:ngm:class:conversation-context
  - urn:ngm:class:metaverse-application-platform
  - urn:ngm:class:tool-implementation
  - urn:ngm:class:argument-parser
enables:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:browser-automation
  - urn:ngm:class:code-execution
  - urn:ngm:class:computer-use-and-browser-agents
  - urn:ngm:class:multi-step-reasoning
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:tool-augmented-reasoning
  - urn:ngm:class:code-execution
  - urn:ngm:class:browser-automation
  - urn:ngm:class:computer-use-and-browser-agents
dependsOn:
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:rlhf
  - urn:ngm:class:json-schema-specification
  - urn:ngm:class:tokenizer-special-tokens
  - urn:ngm:class:constrained-decoding
  - urn:ngm:class:prompt-engineering
implements:
  - urn:ngm:class:plan-and-execute-pattern
  - urn:ngm:class:re-act-pattern
  - urn:ngm:class:structured-output
  - urn:ngm:class:toolformer-paradigm
  - urn:ngm:class:parallel-tool-calls
  - urn:ngm:class:structured-output
  - urn:ngm:class:streaming-tool-calls
contrastsWith:
  - urn:ngm:class:structured-output
  - urn:ngm:class:direct-api-integration
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:hard-coded-workflow-automation
  - urn:ngm:class:pure-text-completion
uses:
  - urn:ngm:class:json-data-interchange-format-rpc-2-0
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:pydantic-models
  - urn:ngm:class:special-tokens
supports:
  - urn:ngm:class:code-generation
  - urn:ngm:class:customer-support-automation
  - urn:ngm:class:data-analysis
  - urn:ngm:class:personal-assistance
  - urn:ngm:class:scientific-discovery
  - urn:ngm:class:workflow-orchestration
  - urn:ngm:class:code-generation
  - urn:ngm:class:data-analysis
  - urn:ngm:class:personal-assistance
  - urn:ngm:class:scientific-discovery
standardizedBy:
  - urn:ngm:class:tool-use
  - urn:ngm:class:google-ai-technology-corporation-gemini
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:openai-research-organisation-api
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:function-calling
  - urn:ngm:class:tool-use
  - urn:ngm:class:google-ai-technology-corporation-gemini
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:json-data-interchange-format-schema
relatedTo:
  - urn:ngm:class:agent-to-agent-protocol
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:code-execution
  - urn:ngm:class:meta-llama-model-family-index
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:lang-chain
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:code-execution
---

# Function Calling

Function Calling (also termed tool use or tool invocation) is the capability of large language models to emit structured requests selecting and parameterising external functions described to them via JSON-Schema tool definitions, with the application layer executing the selected tools and returni...
