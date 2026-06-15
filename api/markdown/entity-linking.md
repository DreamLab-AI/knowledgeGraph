- ### Definition
  - Entity linking is the [[Natural Language Processing]] task of resolving textual mentions of entities to canonical identifiers within a [[Knowledge Graph]] or reference [[Ontology]] such as [[Wikidata]]. It follows [[Named Entity Recognition]] in a typical [[Information Extraction]] pipeline, converting detected spans into grounded, dereferenceable nodes.
  - The task is also known as named-entity disambiguation or "wikification" when the target base is Wikipedia. It must handle both polysemy (one surface form, many entities) and synonymy (one entity, many surface forms).

- ### Overview
  - Entity linking bridges the gap between surface text and structured knowledge. Without it, an extracted string such as "Cambridge" remains an opaque token; after linking, it resolves to a specific identifier distinguishing the English city from the Massachusetts city or the university.
  - **Why it matters:** linked entities make text queryable, joinable, and reasoned over. They underpin semantic search, question answering, and automated knowledge-base population.
  - **How it works:**
    - Mention detection identifies candidate spans, usually via [[Named Entity Recognition]].
    - Candidate generation retrieves plausible referents from the target base using alias dictionaries and surface-form indexes.
    - Disambiguation ranks candidates using local context, entity priors, and global coherence across all mentions in a document.
    - The chosen identifier (or a NIL decision for out-of-base entities) is attached to the mention.

- ### Mechanisms
  - **Candidate generation** — alias tables, redirect pages, and learned retrieval narrow the search space to a manageable candidate set.
  - **Local disambiguation** — scores each candidate against the mention's surrounding context using [[Embedding]] similarity.
  - **Global / collective disambiguation** — jointly resolves all mentions in a document so that linked entities are mutually coherent (e.g. an "Apple" near "iPhone" links to the company).
  - **Neural approaches** — bi-encoder and cross-encoder architectures compute dense representations of mentions and entity descriptions; generative models autoregressively decode entity identifiers.
  - **NIL handling** — emerging or out-of-base entities are flagged rather than force-linked, an important reliability property.

- ### Applications
  - Knowledge-base population and automated construction of a [[Knowledge Graph]] from corpora.
  - Semantic search and question answering grounded in [[Wikidata]] or domain ontologies.
  - Content recommendation and topic enrichment by tagging documents with canonical entities.
  - Biomedical and legal text mining, where mentions are linked to curated controlled vocabularies.
  - Data integration where extracted entities feed [[Record Linkage]] and [[Entity Resolution]] workflows.

- ### Relationships
  - subClassOf:: [[Information Extraction]]
  - partOf:: [[Information Extraction]]
  - requires:: [[Named Entity Recognition]]
  - requires:: [[Knowledge Graph]]
  - uses:: [[Coreference Resolution]]
  - uses:: [[Embedding]]
  - uses:: [[Wikidata]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Entity Resolution]]
  - supports:: [[Natural Language Processing]]
  - supports:: [[Text Mining]]
  - bridgesTo:: [[Semantic Web]]
  - bridgesTo:: [[Linked Data]]
  - relatedTo:: [[Record Linkage]]
  - relatedTo:: [[Ontology]]

- ### Provenance
  - updated:: 2026-06-15