The task of predicting the quality of machine translation output without access to reference translations, at sentence, word, or document level, enabling production systems to route low-confidence translations to human post-editing, filter parallel corpora, and gate automated publication — in contrast to reference-based metrics that require gold translations for scoring.

### Semantic Classification

### Content

## Definition

**Quality estimation** (QE) predicts how good a [[Machine Translation]] output is using only the source text and the translation — no human reference required. This distinguishes it fundamentally from reference-based evaluation such as [[BLEU Score]] or reference-mode [[COMET Metric]] scoring: those measure agreement with a gold translation and therefore only work on held-out test sets, whereas QE runs on live production traffic where references do not exist. The task is studied at several granularities: sentence-level QE regresses a scalar quality score (historically predicted post-editing effort, HTER; latterly direct assessment or MQM-derived scores), word-level QE tags each output token OK/BAD, and document-level QE aggregates over longer texts.

QE matured through the WMT shared tasks, running annually since 2012. Early systems (QuEst, QuEst++) fed hand-crafted features — language-model perplexities, length ratios, alignment statistics — into regression models. The neural era replaced these with predictor-estimator architectures and then with fine-tuned multilingual encoders: OpenKiwi and TransQuest built on BERT/XLM-R, and CometKiwi — the reference-free branch of the COMET family — has topped recent WMT QE tasks. Modern QE correlates with human judgement well enough that WMT's own metrics evaluations treat strong QE systems as competitive with reference-based metrics.

The practical value is operational. Translation providers use sentence-level QE to triage output between raw publication, light post-editing, and full human translation; word-level tags direct post-editors to likely errors; and corpus-filtering applications score mined parallel sentences before training, a role complementary to [[Back-Translation]] in the data pipeline of neural MT systems, where synthetic and mined data must be quality-gated to avoid degrading the model.

## Current Landscape

- **Dominant models**: CometKiwi (Unbabel/IST), MetricX-QE (Google), and xCOMET, which unifies sentence scoring with span-level error prediction in MQM style, providing interpretable error highlights rather than a bare scalar.
- **LLM-based QE**: prompting and fine-tuning large language models (GEMBA-style) achieves strong sentence-level correlation, and LLM judges are increasingly used for multilingual quality gating beyond translation proper.
- **Known weaknesses**: QE models inherit encoder biases — fluent but unfaithful translations (hallucinations) can score deceptively well; robustness work targets critical error detection (WMT's dedicated subtask) for meaning-inverting, safety-relevant failures.
- **Beyond MT**: the reference-free paradigm has spread to summarisation, speech translation, and generative-AI output gating generally, making QE a template for confidence estimation over generated text.

  Dated developments:

- **WMT24 (Nov 2024)**: the Metrics Shared Task, run under the Error Span Annotation (ESA) protocol, was won by two ensemble metrics — MetricX-24-Hybrid (Google) and xCOMET — with the report framed around the question "Are LLMs Breaking MT Metrics?"; fine-tuned neural metrics remained strongest.
- **WMT24 QE task**: focused on sentence-level quality; the organisers' finding was that LLM-based QE methods were *still outperformed* by predictor-estimator systems (e.g. CometKiwi variants) for sentence-level scoring, tempering the "just prompt an LLM" narrative.
- **xCOMET (TACL 2024)**: unifies sentence-level scoring with span-level error detection in two sizes (xCOMET-XL, 3.5B; xCOMET-XXL, 10.7B), and is designed specifically to catch localised critical errors and hallucinations that fluency-biased scalars miss.
- **2025**: QE is increasingly fused into decoding itself — quality-aware / QE-reranked decoding improves translation quality over N-best re-ranking (reported gains up to ~1.39 xCOMET-XXL), extending QE from a post-hoc filter to an inference-time signal.

  **Sources**:

- https://www2.statmt.org/wmt24/pdf/2024.wmt-1.2.pdf
- https://www2.statmt.org/wmt24/pdf/2024.wmt-1.3.pdf
- https://aclanthology.org/2024.tacl-1.54.pdf

