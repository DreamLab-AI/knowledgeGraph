Structured output is a technique for constraining a language model to emit responses that conform to a predefined schema such as JSON, a regular grammar, or a typed object. It is enforced through prompt instructions, constrained decoding, or function-calling interfaces so that downstream systems can parse results reliably. Structured output bridges free-form generation and deterministic software by guaranteeing machine-readable, validatable responses.

### In Plain Terms

- Making an AI reply in a fixed, tidy format — such as a filled-in form or a neat set of labelled fields — instead of free-flowing prose. This lets other software read and act on the answer automatically, without a person tidying it up first.

### Content

- Implementations range from soft enforcement, where the prompt asks for a JSON shape, to hard enforcement via grammar-constrained or schema-constrained decoding that masks invalid tokens at each step. Function and tool-calling APIs expose structured output natively by validating arguments against a declared signature. The benefit is reliable parsing for agents and pipelines; the trade-off is reduced flexibility and occasional refusals when the schema cannot accommodate the model's intended answer.

