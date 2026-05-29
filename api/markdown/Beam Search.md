public:: true

# Beam Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:beam-search",
  "@type": "Page",
  "vc:slug": "beam-search",
  "title": "Beam Search",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:beam-search",
  "@type": "Class",
  "label": "Beam Search",
  "definition": "Beam search is a heuristic search algorithm that explores a graph by expanding the most promising nodes within a fixed-width frontier, called the beam, at each step. In sequence generation tasks it retains the top-k candidate sequences at each decoding step rather than pursuing a single greedy choice, balancing exploration against computational cost.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:search-algorithm", "label": "Search Algorithm"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:language-model", "label": "Language Model"},
      {"@id": "urn:ngm:class:heuristic-methods", "label": "Heuristic Methods"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:beam-search-decoding", "label": "Beam Search Decoding"},
      {"@id": "urn:ngm:class:monte-carlo-tree-search", "label": "Monte Carlo Tree Search"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Beam search is a [[Search Algorithm]] that traverses a sequence generation space by maintaining a fixed-width set of the best partial hypotheses, known as the beam, at each time step. Unlike exhaustive search, which is computationally intractable for long sequences, beam search prunes the candidate space to the top-k scoring options at each step, making it practical for tasks such as [[Machine Translation]], speech recognition, and [[Text Generation]] with [[Language Model]] systems.

- ### Relationships
  - Beam search is a foundational decoding strategy that directly [[enables]] [[Text Generation]] and [[Machine Translation]] pipelines. It [[uses]] [[Language Model]] scoring functions to rank candidates and [[uses]] [[Heuristic Methods]] to limit the search frontier. It is closely [[relatedTo]] [[Beam Search Decoding]], which formalises its application in neural sequence models, and [[relatedTo]] [[Monte Carlo Tree Search]] as an alternative tree-expansion strategy.

- ### Content
  - Beam search has its origins in speech recognition research during the 1970s, where it was introduced as a practical approximation to the Viterbi algorithm for large vocabulary tasks. The algorithm was formalised by Lowerre and Reddy and became central to statistical machine translation systems in the 1990s and 2000s, where it allowed tractable decoding over large phrase-table search spaces.

  - Technically, beam search maintains a beam of width k at each decoding step, scoring all continuations of each hypothesis and retaining only the top-k by cumulative log-probability. The width parameter directly governs the quality–speed trade-off: a beam of width one reduces to greedy decoding, whilst a very large beam approaches an exact search at greatly increased cost. Length normalisation penalties are commonly applied to prevent bias towards shorter sequences.

  - In the ecosystem of modern neural language models, beam search is the default decoding strategy for encoder-decoder architectures used in translation, summarisation, and code generation. It is implemented natively in libraries such as Hugging Face Transformers and is exposed through parameters such as `num_beams`. Extensions include diverse beam search, which penalises similarity among beams, and constrained beam search, which enforces lexical or structural requirements.

  - As of 2024–2025, the role of beam search is being reassessed in the context of large autoregressive models. Sampling-based methods such as nucleus sampling and temperature scaling have become popular for open-ended generation due to greater output diversity, whilst beam search remains preferred for tasks with well-defined correct outputs. Research into speculative decoding and parallel sampling is reshaping the decoding landscape further.

