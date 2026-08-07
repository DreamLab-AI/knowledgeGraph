public:: true

# Quality Estimation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:53a49f677c5d9861d9fa17d87ee6ffd1c41f7ec353fb0e1fb120998486da67a7",
  "@type": "Page",
  "vc:slug": "quality-estimation",
  "title": "Quality Estimation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-translation",
      "vc:label": "Machine Translation"
    },
    {
      "@id": "urn:visionflow:linked:comet-metric",
      "vc:label": "COMET Metric"
    },
    {
      "@id": "urn:visionflow:linked:back-translation",
      "vc:label": "Back-Translation"
    },
    {
      "@id": "urn:visionflow:linked:bleu-score",
      "vc:label": "BLEU Score"
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
  "@id": "urn:ngm:class:quality-estimation",
  "@type": "Class",
  "label": "Quality Estimation",
  "definition": "The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-translation",
    "label": "Machine Translation"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:bert",
        "label": "BERT"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bleu-score",
        "label": "BLEU Score"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:comet-metric",
        "label": "COMET Metric"
      },
      {
        "@id": "urn:ngm:class:back-translation",
        "label": "Back-Translation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring."

- ### Semantic Classification
  - owl-class:: machine-learning:QualityEstimation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Machine Translation]]
  - contrasts-with:: [[BLEU Score]]
  - related-to:: [[COMET Metric]]
  - related-to:: [[Back-Translation]]

- ### Content

  ## Definition

  **Quality estimation** (QE) predicts how good a [[Machine Translation]] output is using only the source text and the translation — no human reference required. This distinguishes it fundamentally from reference-based evaluation such as [[BLEU Score]] or reference-mode [[COMET Metric]] scoring: those measure agreement with a gold translation and therefore only work on held-out test sets, whereas QE runs on live production traffic where references do not exist. The task is studied at several granularities: sentence-level QE regresses a scalar quality score (historically predicted post-editing effort, HTER; latterly direct assessment or MQM-derived scores), word-level QE tags each output token OK/BAD, and document-level QE aggregates over longer texts.

  QE matured through the WMT shared tasks, running annually since 2012. Early systems (QuEst, QuEst++) fed hand-crafted features — language-model perplexities, length ratios, alignment statistics — into regression models. The neural era replaced these with predictor-estimator architectures and then with fine-tuned multilingual encoders: OpenKiwi and TransQuest built on BERT/XLM-R, and CometKiwi — the reference-free branch of the COMET family — has topped recent WMT QE tasks. Modern QE correlates with human judgement well enough that WMT's own metrics evaluations treat strong QE systems as competitive with reference-based metrics.

  The practical value is operational. Translation providers use sentence-level QE to triage output between raw publication, light post-editing, and full human translation; word-level tags direct post-editors to likely errors; and corpus-filtering applications score mined parallel sentences before training, a role complementary to [[Back-Translation]] in the data pipeline of neural MT systems, where synthetic and mined data must be quality-gated to avoid degrading the model.

  ## Current Landscape

  - **Dominant models**: CometKiwi (Unbabel/IST), MetricX-QE (Google), and xCOMET, which unifies sentence scoring with span-level error prediction in MQM style, providing interpretable error highlights rather than a bare scalar.
  - **LLM-based QE**: prompting and fine-tuning large language models (GEMBA-style) achieves strong sentence-level correlation, and LLM judges are increasingly used for multilingual quality gating beyond translation proper.
  - **Known weaknesses**: QE models inherit encoder biases — fluent but unfaithful translations (hallucinations) can score deceptively well; robustness work targets critical error detection (WMT's dedicated subtask) for meaning-inverting, safety-relevant failures.
  - **Beyond MT**: the reference-free paradigm has spread to summarisation, speech translation, and generative-AI output gating generally, making QE a template for confidence estimation over generated text.
