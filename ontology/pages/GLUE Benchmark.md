public:: true

# GLUE Benchmark
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8e28b86425d6b71e3c8f9cb01baadfd2e7f620ea628a70b3125786719b37259d",
  "@type": "Page",
  "vc:slug": "glue-benchmark",
  "title": "GLUE Benchmark",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:benchmarking",
      "vc:label": "Benchmarking"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-understanding",
      "vc:label": "Natural Language Understanding"
    },
    {
      "@id": "urn:visionflow:linked:bert",
      "vc:label": "BERT"
    },
    {
      "@id": "urn:visionflow:linked:beir-benchmark",
      "vc:label": "BEIR Benchmark"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:glue-benchmark",
  "@type": "Class",
  "label": "GLUE Benchmark",
  "definition": "The General Language Understanding Evaluation, a 2018 suite of nine English sentence- and sentence-pair tasks — spanning acceptability, sentiment, paraphrase, similarity, and natural language inference — with a public leaderboard and diagnostic set, which became the standard yardstick for pretrained language models such as BERT and RoBERTa until model performance surpassed human baselines and evaluation moved to harder successors.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:benchmarking",
    "label": "Benchmarking"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:beir-benchmark",
        "label": "BEIR Benchmark"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bert",
        "label": "BERT"
      },
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The General Language Understanding Evaluation, a 2018 suite of nine English sentence- and sentence-pair tasks — spanning acceptability, sentiment, paraphrase, similarity, and natural language inference — with a public leaderboard and diagnostic set, which became the standard yardstick for pretrained language models such as BERT and RoBERTa until model performance surpassed human baselines and evaluation moved to harder successors."

- ### Semantic Classification
  - owl-class:: machine-learning:GLUEBenchmark
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Benchmarking]]
  - enables:: [[Model Evaluation]]
  - contrasts-with:: [[BEIR Benchmark]]
  - related-to:: [[BERT]]

- ### Content

  ## Definition

  The **GLUE Benchmark** (General Language Understanding Evaluation; Wang et al., ICLR 2019, released 2018) collected nine existing English [[Natural Language Understanding]] datasets into a single evaluation suite with a shared leaderboard, explicitly designed to reward models that share knowledge across tasks rather than excel at one. The tasks are: CoLA (linguistic acceptability), SST-2 (sentiment), MRPC and QQP (paraphrase detection), STS-B (semantic textual similarity), and four natural language inference tasks — MNLI, QNLI, RTE, and WNLI (a Winograd-schema task notorious for its adversarial split). A hand-crafted diagnostic set probes specific linguistic phenomena such as negation, quantification, and coreference.

  GLUE's historical significance is inseparable from the transfer-learning revolution it was built to measure. Within a year of release, the pretrain-then-fine-tune paradigm — GPT, then [[BERT]], then RoBERTa, XLNet, ALBERT, ELECTRA, and T5 — drove the leaderboard from ELMo-era baselines around 70 to beyond the human baseline of 87.1, with ensembles exceeding 90. RoBERTa's ablations in particular used GLUE to demonstrate that BERT had been substantially undertrained. This rapid saturation prompted the same authors to release SuperGLUE (2019) with harder tasks, which was itself saturated within a few years.

  In this graph GLUE contrasts with the [[BEIR Benchmark]]: GLUE evaluates fine-tuned *classification and inference* over sentence pairs, whereas BEIR evaluates zero-shot *retrieval* — the two benchmarks anchor the evaluation cultures of NLU and information retrieval respectively.

  ## Current Landscape

  - **Metrics**: per-task metrics include Matthews correlation (CoLA), accuracy, F1, and Pearson/Spearman correlation (STS-B), averaged into a single leaderboard score — an early, influential example of the composite-score approach to [[Model Evaluation]].
  - **Saturation and legacy**: with frontier models scoring above human baselines, GLUE ceased to discriminate at the top and now serves mainly as a sanity check for small or efficient encoder models, where it remains routine (e.g. evaluating distilled and quantised BERT variants).
  - **Known flaws**: WNLI's pathological split (most submissions score below majority-class), annotation artefacts in NLI data that permit hypothesis-only shortcuts, and single-metric aggregation masking task-level regressions — all well-documented lessons that shaped later benchmark design.
  - **Successors**: SuperGLUE, MMLU, BIG-bench, HELM, and instruction-following/agentic evaluations now carry the discriminative burden for large language models, but GLUE's template — multi-task suite, public leaderboard, human baseline, diagnostic set — remains the canonical pattern for NLP [[Benchmarking]].
  - **Dated timeline**: the strongest baseline in the 2018 release scored 70.0; BERT-Large reached 80.5 (Oct 2018); XLNet was first to pass the 87.1 human baseline with 88.4 (Jun 2019), less than 14 months after launch; the current top GLUE leaderboard entry is Microsoft's Turing ULR v6 at 91.3. As of 2026 GLUE and SuperGLUE are considered effectively solved and function as training-time sanity checks rather than frontier leaderboards.
  - **SuperGLUE**: introduced May 2019 (NeurIPS 2019) with a higher human baseline of 89.8; that baseline was crossed by 2021 (T5-11B, DeBERTa, ST-MoE, ERNIE 3.0), and the official leaderboard has seen no meaningful new submissions since late 2022.

  **Sources**:
  - https://gluebenchmark.com/leaderboard
  - https://super.gluebenchmark.com/
  - https://aiwiki.ai/wiki/glue_benchmark
