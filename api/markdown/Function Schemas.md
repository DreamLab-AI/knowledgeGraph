
Function schemas are structured, machine-readable declarations that describe the name, parameters, and types of tools or functions that a large language model may call. Typically expressed as JSON Schema, they let a model select an appropriate tool and emit validly structured arguments. Function schemas are the contract that enables reliable tool use and agentic workflows.

- ### Content
  - A schema names a function, documents its purpose, and specifies each parameter's type, constraints, and whether it is required. The model uses these descriptions to decide when to call a tool and to generate conformant arguments, which a runtime then validates and executes. Good schema design improves grounding, reduces hallucinated parameters, and makes multi-tool agent loops dependable.

