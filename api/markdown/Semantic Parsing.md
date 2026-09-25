Semantic parsing is the task of mapping natural-language utterances onto structured, machine-interpretable meaning representations such as logical forms, executable queries or programs. It converts ambiguous human language into precise formalisms that can be reasoned over or executed against a database or knowledge graph. Applications include question answering, text-to-SQL and instruction-to-code translation.

### Overview

- Semantic parsers output formal representations such as lambda-calculus expressions, SQL queries, SPARQL or domain-specific programs.
- The structured target enables execution against a database or knowledge base, giving a verifiable answer rather than a free-text guess.
- Training may use logical-form supervision or weak supervision from answer correctness (execution-guided learning).
- Compositionality is central: parsers must generalise to novel combinations of known predicates and entities.

### Mechanisms

- Grammar-constrained decoding that guarantees syntactically valid output.
- Sequence-to-sequence neural models with copy mechanisms for entity names.
- Execution-guided and weakly supervised training from denotations.
- Schema linking that aligns mentions to database columns or ontology terms.
- Intermediate representations bridging surface text and final logical forms.

### Applications

- Natural-language interfaces to databases (text-to-SQL).
- Knowledge-graph question answering producing SPARQL queries.
- Voice-assistant command interpretation into API calls.
- Instruction-to-code and program-synthesis assistants.

### Provenance

