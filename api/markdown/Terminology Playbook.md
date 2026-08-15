public:: true

# Terminology Playbook
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0dd9fa176316e3fe0296bd43926e791bf9f9ac42721fe263f0e00261badb9eeb",
  "@type": "Page",
  "vc:slug": "terminology-playbook",
  "title": "Terminology Playbook",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:taxonomy",
      "vc:label": "Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:context-graph",
      "vc:label": "Context Graph"
    },
    {
      "@id": "urn:visionflow:linked:ontology-loom",
      "vc:label": "Ontology Loom"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph-style-guide",
      "vc:label": "Knowledge Graph Style Guide"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-15T09:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:terminology-playbook",
  "@type": "Class",
  "label": "Terminology Playbook",
  "definition": "The canonical usage guide for knowledge-stack terminology across the DreamLab mesh: which artefact the words taxonomy, ontology, knowledge graph, reasoning, grounding and context graph each name, the one-line gloss each term carries at first use on a public surface, and the conflations the mesh's own copy must avoid. The source of truth is VisionFlow/docs/terminology.md; this page is its published mirror.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-graph-style-guide",
      "label": "Knowledge Graph Style Guide"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:context-graph",
        "label": "Context Graph"
      }
    ]
  },
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-15T09:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ## The stack, bottom-up
	- **[[Taxonomy]]** — the is-a hierarchy, one part of the ontology and never a synonym for it. Ours is a lattice, not a tree: 1,401 classes declare more than one parent, and the overlap is published as data.
	- **[[Ontology]]** — the formal vocabulary: OWL 2 classes, typed object properties and the axioms that constrain what a valid statement looks like. What *can* be said.
	- **[[Knowledge Graph]]** — that vocabulary populated at scale: the corpus of pages compiled into triples and resolvable typed edges. What *is* said. This site is the knowledge graph in readable form.
	- **[[Reasoning]]** — what *follows*, machine-checked: the Whelk EL++ reasoner classifies the graph and rejects contradictions before they enter it. On these surfaces, "reasoned" always means checked by Whelk.
	- **[[Context Graph]]** — the assembly layer on top, consuming ontology, knowledge graph and operational sources to build an agent's working set. Implemented here by the [[Ontology Loom]].
	- **Semantic layer** — the parallel concept from business intelligence: governed meaning for metrics over warehouse data. The mesh does not ship one, and the term is not used for any layer above.
- ## Why this corpus blurs the lines honestly
	- Each page here is simultaneously a knowledge-graph node and an OWL class declaration: the JSON-LD block on a page *is* ontology source, and the links between pages *are* graph content. The corpus is TBox-heavy — most of what it knows is class-level. When one word has to cover the whole artefact, that word is **knowledge graph**; "ontology" is reserved for the schema the pipeline compiles out.
- ## The canonical sentence
	- Researchers and agents write a corpus; a pipeline compiles it into a knowledge graph under a formal OWL 2 ontology; a Whelk reasoner checks every statement before it enters; and the Ontology Loom serves the checked graph back into any model's context at query time.
- ## Usage rules
	- "The ontology" means the schema. If you can count pages or words in it, it is the corpus or the knowledge graph.
	- "Living ontology" is retired as a name for the whole artefact.
	- "Reasoned" is earned, not decorative: unqualified reasoning is symbolic; LLM inference is always qualified as such.
	- The provenance of the corpus is stated plainly in one line per surface — it is produced by an automated research process between researchers and agents, and it stands on its own merits — then the copy moves on.
