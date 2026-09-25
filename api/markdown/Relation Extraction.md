Relation extraction is the natural-language-processing task of identifying semantic relationships between entities mentioned in text and classifying them into predefined or open relation types. It typically operates on the output of named-entity recognition, determining whether and how two entities are connected, for example employer-of, located-in or part-of. Relation extraction is foundational to knowledge-graph construction, supplying the typed edges that link extracted entities into structured assertions.

### Overview

- Where named-entity recognition finds the nouns of interest, relation extraction discovers how those entities relate, transforming free text into structured triples of the form subject-predicate-object. This conversion is what lets unstructured documents feed structured analytics and reasoning systems.
- Approaches range from rule and pattern matching, through supervised classifiers over sentence representations, to large-language-model prompting that extracts open relations without a fixed schema.

### Key aspects

- Closed vs open: closed extraction targets a fixed relation inventory; open extraction discovers arbitrary predicates.
- Distant supervision: existing knowledge bases provide noisy labels by aligning known facts to mentioning sentences.
- Cross-sentence reasoning: many relations span multiple sentences or require coreference resolution.
- Evaluation: precision, recall and F1 against annotated relation corpora.

### Mechanisms

- Candidate entity pairs are formed and encoded with their surrounding context.
- A classifier assigns a relation label or a no-relation outcome to each pair.
- Extracted triples are normalised and linked into a knowledge graph.

### Applications

- Knowledge-base population, biomedical literature mining, financial event extraction, search enrichment and question answering.

### Provenance

