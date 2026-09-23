
The canonical usage guide for knowledge-stack terminology across the DreamLab mesh: which artefact the words taxonomy, ontology, knowledge graph, reasoning, grounding and context graph each name, the one-line gloss each term carries at first use on a public surface, and the conflations the mesh's own copy must avoid. The source of truth is VisionFlow/docs/terminology.md; this page is its published mirror.

- ## The stack, bottom-up
	- **[[Taxonomy]]** — the is-a hierarchy, one part of the ontology and never a synonym for it. Ours is a lattice, not a tree: 1,401 classes declare more than one parent, and the overlap is published as data.
	- **[[Ontology]]** — the formal vocabulary: OWL 2 classes, typed object properties and the axioms that constrain what a valid statement looks like. What *can* be said.
	- **[[Knowledge Graph]]** — the ontology populated with live instances, at runtime: VisionClaw's running graph, agents' working graphs and pod-resident personal graphs assert individuals against these classes. What *is* said lives there. This site is the **ontology** in readable form — pure TBox, zero individuals by design.
	- **[[Reasoning]]** — what *follows*, machine-checked at two points: the pipeline's EL-profile reasoner gates the published closure at build, and the Whelk EL++ reasoner classifies the runtime graph before anything enters it. On these surfaces, "reasoned" always means machine-checked, with the check attributed to its owner.
	- **[[Context Graph]]** — the assembly layer on top, consuming ontology, knowledge graph and operational sources to build an agent's working set. Implemented here by the [[Ontology Loom]].
	- **Semantic layer** — the parallel concept from business intelligence: governed meaning for metrics over warehouse data. The mesh does not ship one, and the term is not used for any layer above.
- ## Why this corpus is an ontology, not a knowledge graph
	- Every page here declares an OWL class (pages and classes are 1:1); typed relations compile to restriction axioms; there are zero individuals, by design. That makes the corpus **pure TBox** — defensible as an ontology down to the last axiom, and an overclaim as a knowledge graph, which implies instance data it does not hold. When one word has to cover the published artefact, that word is **the ontology** (or **corpus** for the markdown source form). "Knowledge graph" points at the runtime layer, where individuals genuinely live.
- ## The canonical sentence
	- Researchers and agents write a corpus; a pipeline compiles it losslessly into a formal OWL 2 ontology, machine-checking every statement as it builds; at runtime the mesh's knowledge graphs populate that ontology with instances under Whelk's gate; and the Ontology Loom serves the checked ontology back into any model's context at query time.
- ## Usage rules
	- The published artefact is the ontology; "knowledge graph" is reserved for the runtime layer where individuals live. Page and word counts belong to the corpus, the ontology's source form.
	- "Living ontology" is retired as a name for the whole artefact.
	- "Reasoned" is earned, not decorative: unqualified reasoning is symbolic; LLM inference is always qualified as such.
	- The provenance of the corpus is stated plainly in one line per surface — it is produced by an automated research process between researchers and agents, and it stands on its own merits — then the copy moves on.

