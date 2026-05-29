public:: true

# BLEU Score
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bleu-score",
  "@type": "Page",
  "vc:slug": "bleu-score",
  "title": "BLEU Score",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bleu-score",
  "@type": "Class",
  "label": "BLEU Score",
  "definition": "BLEU Score (Bilingual Evaluation Understudy) is an automatic evaluation metric for machine translation and text generation quality that measures the overlap of n-gram sequences between a candidate output and one or more human reference translations, applying a brevity penalty to discourage pathologically short outputs. Scores range from 0 to 1 (or 0 to 100 in percentage form), with higher values indicating closer correspondence to the reference. BLEU correlates moderately with human judgement at the corpus level but is known to be unreliable for single-sentence evaluation and insufficient alone for capturing semantic adequacy.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:benchmarks", "label": "Benchmarks"},
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:language-model", "label": "Language Model"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:evaluation-harness", "label": "Evaluation Harness"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[BLEU Score]] quantifies the precision of n-gram matches (typically 1- through 4-grams) between a system-generated translation and one or more human reference translations, computing a geometric mean of modified precision values clipped to avoid credit for repeated n-grams. A brevity penalty term multiplies the score to penalise outputs shorter than the reference. The metric was designed for corpus-level evaluation of [[Machine Translation]] systems and produces a single scalar that can be compared across system versions, making it highly practical for automated regression testing despite its well-documented limitations regarding semantic equivalence and synonym tolerance.

- ### Relationships
  - [[BLEU Score]] is a foundational [[Evaluation Metric]] within [[Natural Language Processing]], particularly for [[Machine Translation]] tasks. It is routinely reported alongside other metrics such as chrF and TER on standard [[Benchmarks]] such as WMT. As [[Language Model]] capabilities expanded into summarisation, dialogue, and code generation, BLEU's limitations became more apparent, motivating richer [[Evaluation Harness]] frameworks that combine multiple metrics with human judgement.

- ### Content
  - BLEU was introduced by Papineni et al. at ACL 2002 in a landmark paper that demonstrated high correlation with human ranking when aggregated over a test set of thousands of sentences. The metric was rapidly adopted by the research community because it requires only reference translations — no human evaluators per system run — enabling scalable, reproducible benchmarking. Its introduction coincided with the rise of statistical phrase-based MT and was instrumental in the rapid progress of that paradigm through the 2000s.

  - The computation proceeds by counting modified n-gram precisions p_n for n from 1 to N, where each candidate n-gram is clipped to the maximum count of that n-gram in any reference. The geometric mean of these precisions, weighted equally, is multiplied by min(1, exp(1 - r/c)) where r is the reference length and c the candidate length. The result is sensitive to tokenisation choices, so SacreBLEU — a standardised implementation — was introduced to ensure consistent, reproducible scores across papers.

  - BLEU shaped an era of MT research and remains the default reported metric for WMT shared tasks. Its limitations are well catalogued: it ignores word order beyond n-gram boundaries, treats synonyms as errors, cannot assess factual accuracy, and exhibits poor correlation with human judgement on individual sentences or when comparing systems of very different architectures. Alternative metrics such as METEOR, BERTScore, and COMET address some of these issues, though none has achieved the same universal adoption.

  - In 2024–2025, BLEU continues to appear in published results for legacy compatibility and reproducibility, but few practitioners treat it as a primary quality signal for modern large language model outputs. Evaluation frameworks such as LM Evaluation Harness increasingly use task-specific accuracy metrics, embedding-based similarity, and preference judgements from stronger models as judges. The BLEU score has become a baseline footnote rather than a headline figure in state-of-the-art system descriptions.