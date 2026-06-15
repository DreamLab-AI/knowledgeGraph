- ### Definition
  - Coreference resolution is the natural language processing task of identifying all expressions in a text that refer to the same real-world entity. It groups noun phrases, pronouns, and other referring expressions into coreference clusters, so that a system can recognise, for example, that a name, a later pronoun, and a definite description all denote one person. Resolving these links is a prerequisite for coherent document-level understanding.
  - Related concepts: [[Natural Language Processing]] [[Named Entity Recognition]] [[Natural Language Understanding]] [[Information Extraction]] [[Question Answering]]

- ### Overview
  - Coreference resolution turns a sequence of locally interpreted mentions into a connected representation of who and what a document is about. Without it, downstream components treat each pronoun and description in isolation, losing the thread of entities across sentences. Modern systems combine mention detection with learned scoring of candidate antecedents.

- ### Mechanisms
  - Mention detection identifies the spans that can participate in coreference, including named entities, common nouns, and pronouns.
  - Antecedent scoring ranks earlier mentions as candidate referents for each later mention, often with neural span representations.
  - Clustering links mentions into chains, balancing local pairwise decisions against global consistency.
  - Anaphora and cataphora handling resolves pronouns to entities introduced before or after them, using syntactic and semantic cues.

- ### Applications
  - Information extraction and knowledge graph population that need consistent entity references.
  - Question answering and summarisation that must track entities across a passage.
  - Machine translation, where pronoun choice depends on the antecedent's gender and number.

- ### Relationships
  - part-of:: [[Natural Language Understanding]]
  - has-part:: [[Named Entity Recognition]]
  - requires:: [[Named Entity Recognition]]
  - requires:: [[Semantic Parsing]]
  - uses:: [[Transformer Architecture]]
  - uses:: [[Large Language Model]]
  - enables:: [[Information Extraction]]
  - enables:: [[Question Answering]]
  - enables:: [[Knowledge Graph]]
  - supports:: [[Entity Resolution]]
  - supports:: [[Machine Translation]]
  - contrasts-with:: [[Text Mining]]
  - related-to:: [[Natural Language Processing]]
  - related-to:: [[Natural Language Understanding]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation