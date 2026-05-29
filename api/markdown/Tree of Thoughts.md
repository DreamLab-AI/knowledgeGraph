public:: true

# tree of thoughts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7577f2f641779b3f3070ba4598a19718f441b49d4057410225334f6ddacc5bf4",
  "@type": "Page",
  "vc:slug": "tree-of-thoughts",
  "title": "tree of thoughts",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tree-of-thoughts",
  "@type": "Class",
  "label": "Tree of Thoughts",
  "definition": "Tree of Thoughts (ToT) is a deliberate reasoning framework for large language models that generalises linear chain-of-thought prompting into a tree-structured search over intermediate thought steps. At each node in the tree the model generates multiple candidate next-thoughts, evaluates their promise using an LLM-based heuristic, and selects branches to expand via breadth-first or depth-first search with backtracking. This framework enables systematic exploration of alternative reasoning paths and is particularly effective for tasks requiring combinatorial planning, mathematical proof construction, or multi-step problem-solving where greedy left-to-right decoding is insufficient.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:monte-carlo-tree-search", "label": "Monte Carlo Tree Search"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Tree of Thoughts (ToT) is a deliberate reasoning framework for large language models that generalises linear chain-of-thought prompting into a tree-structured search over intermediate thought steps. At each node in the tree the model generates multiple candidate next-thoughts, evaluates their promise using an LLM-based heuristic, and selects branches to expand via breadth-first or depth-first search with backtracking. This framework enables systematic exploration of alternative reasoning paths and is particularly effective for tasks requiring combinatorial planning, mathematical proof construction, or multi-step problem-solving where greedy left-to-right decoding is insufficient.

- ### Semantic Classification
  - owl-class:: tree-of-thoughts:Tree of Thoughts
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Chain of Thought]]
  - relatedTo [[Prompt Engineering]]
  - relatedTo [[Monte Carlo Tree Search]]
  - uses [[Large Language Models]]
  - enables [[Mathematical Reasoning]]

- ### Content
  Tree of Thoughts builds on chain-of-thought prompting by introducing two additional components: a thought generator that produces multiple candidate continuations at each step, and a thought evaluator that scores the viability of partial solutions. Together these components transform LLM reasoning into a classical tree-search problem amenable to search algorithms such as BFS, DFS, and beam search.

  The thought evaluator is typically implemented as a second LLM call that rates each candidate thought on a scale or votes on relative merit, functioning as a lookahead heuristic. This is conceptually analogous to the value network in AlphaGo's Monte Carlo Tree Search, substituting learned game-position evaluation with LLM-based reasoning quality assessment. The framework is language-model agnostic and can be applied to any instruction-following LLM.

  ToT excels on planning tasks with well-defined intermediate states — crossword puzzle solving, mathematical game tree analysis, and code generation with constraint satisfaction have been demonstrated. Its primary limitation is inference cost: generating and evaluating multiple thoughts at each node multiplies the number of LLM calls by the branching factor times the search depth. This has motivated research into more efficient variants using speculative sampling, cached value estimates, and hybrid approaches that switch between chain-of-thought and tree-search modes based on detected problem complexity. ToT sits within the broader family of deliberate inference-time computation methods alongside other approaches like self-consistency and process reward models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
