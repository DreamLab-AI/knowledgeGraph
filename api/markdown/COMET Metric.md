public:: true

# COMET Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:comet-metric",
  "@type": "Page",
  "vc:slug": "comet-metric",
  "title": "COMET Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:comet-metric",
  "@type": "Class",
  "label": "COMET Metric",
  "definition": "A family of learned, reference-based and reference-free evaluation metrics for machine translation that use pre-trained multilingual language model representations to predict human-quality assessments of translation output. COMET models correlate more strongly with human judgements than n-gram-overlap metrics such as BLEU by capturing semantic and contextual similarity rather than surface string matching.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:xlm-roberta", "label": "XLM-RoBERTa"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:quality-estimation", "label": "Quality Estimation"},
      {"@id": "urn:ngm:class:human-evaluation", "label": "Human Evaluation Correlation"},
      {"@id": "urn:ngm:class:translation-quality-assurance", "label": "Translation Quality Assurance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:multilingual-language-model", "label": "Multilingual Language Model"},
      {"@id": "urn:ngm:class:human-annotation", "label": "Human Annotation Data"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:direct-assessment", "label": "Direct Assessment"},
      {"@id": "urn:ngm:class:multidimensional-quality-metrics", "label": "Multidimensional Quality Metrics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:bleu-score", "label": "BLEU Score"},
      {"@id": "urn:ngm:class:chrf", "label": "chrF"},
      {"@id": "urn:ngm:class:ter", "label": "TER"},
      {"@id": "urn:ngm:class:bleurt", "label": "BLEURT"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:neural-machine-translation", "label": "Neural Machine Translation"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:wmt-shared-task", "label": "WMT Shared Task"},
      {"@id": "urn:ngm:class:xcomet", "label": "XCOMET"},
      {"@id": "urn:ngm:class:post-editing", "label": "Post-Editing Workflow"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:regression-model", "label": "Regression Model"},
      {"@id": "urn:ngm:class:ranking-model", "label": "Ranking Model"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The COMET (Crosslingual Optimised Metric for Evaluation of Translation) family of metrics evaluates [[Machine Translation]] quality by fine-tuning multilingual encoder models — primarily XLM-RoBERTa — on human direct assessment (DA) or multi-dimensional quality metrics (MQM) annotations collected at the WMT shared tasks. Unlike [[BLEU Score]], which counts n-gram surface-string overlaps between a hypothesis and reference translations, COMET models embed the source sentence, the MT hypothesis, and optionally a reference translation into a shared cross-lingual vector space and then either regress towards a human quality score or rank hypotheses by quality preference, capturing paraphrase equivalence, discourse-level coherence, and semantic adequacy signals that n-gram metrics fundamentally cannot represent. The COMET framework was introduced by Rei et al. at Unbabel and Instituto Superior Técnico (IST) in 2020 and has since grown into a comprehensive suite of model variants serving reference-based evaluation, quality estimation (reference-free evaluation), explainable error span detection, and ensemble scoring. By the WMT22 and WMT24 metrics shared tasks, COMET family models consistently achieved the highest or near-highest segment-level Pearson and Kendall-τ correlation with human judgements among all submitted metrics, demonstrating the superiority of learned, semantics-aware approaches over lexical overlap baselines. COMET models are integrated into professional translation quality assurance pipelines at major language service providers, into academic MT benchmarks (WMT, Flores-200), and into open-source tooling available via the Python unbabel-comet package and Hugging Face model hub, making COMET the de facto standard metric for rigorous [[Machine Translation]] evaluation as of 2025-2026. The framework's expansion to XCOMET adds fine-grained error span detection and interpretable quality assessment that complements its scalar quality scores, bridging the gap between automatic metrics and MQM-style human evaluation rubrics used in professional translation.

- ### Semantic Classification
  - owl-class:: ai:COMETMetric
  - owl-role:: EvaluationMetric | QualityEstimator | LearningParadigm
  - owl-inferred:: ai:MultilingualEvaluator, ai:HumanAlignedMetric, ai:NeuralMTMetric
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
  - implemented-in-layer:: [[NaturalLanguageProcessingLayer]]

- ### Relationships
  - is-subclass-of:: [[Evaluation Metric]], [[Natural Language Processing]]
  - has-part:: [[XLM-RoBERTa]], [[Regression Model]], [[Direct Assessment]], [[Multidimensional Quality Metrics]], [[Quality Estimation]]
  - requires:: [[Multilingual Language Model]], [[Human Annotation Data]], [[Transfer Learning]], [[Parallel Corpus]]
  - enables:: [[Quality Estimation]], [[Translation Quality Assurance]], [[Human Evaluation Correlation]], [[Post-Editing Workflow]], [[MT Benchmarking]]
  - implements:: [[Regression Model]], [[Ranking Model]], [[Fine-Tuning]]
  - depends-on:: [[Direct Assessment]], [[Multidimensional Quality Metrics]], [[XLM-RoBERTa]], [[WMT Shared Task]]
  - supports:: [[Machine Translation]], [[Neural Machine Translation]], [[Post-Editing Workflow]], [[Translation Quality Assurance]]
  - uses:: [[Machine Translation]], [[Natural Language Processing]], [[Transfer Learning]], [[Multilingual Language Model]], [[Contrastive Learning]]
  - contrasts-with:: [[BLEU Score]], [[chrF]], [[TER]], [[BLEURT]], [[METEOR]], [[Human Translation]]
  - related-to:: [[Neural Machine Translation]], [[Natural Language Understanding]], [[WMT Shared Task]], [[XCOMET]], [[BLEU Score]], [[Flores-200]], [[Large Language Models]], [[MQM Annotation]], [[LLM-as-Judge]], [[Post-Editing Workflow]], [[Translation Quality Assurance]], [[Flores-200]], [[Sequence-to-Sequence Model]], [[Attention Mechanism]], [[Transformer Architecture]]
  - standardized-by:: [[WMT Shared Task]], [[Unbabel]], [[Instituto Superior Tecnico]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:XLMRoBERTaEncoder))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:RegressionHead))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:SourceEncoder))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:HypothesisEncoder))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:ReferenceEncoder))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:PoolingLayer))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:hasPart ai:QualityEstimationVariant))

  ## Dependency Relationships
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:requires ai:MultilingualLanguageModel))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:requires ai:HumanAnnotationData))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:requires ai:DirectAssessment))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:dependsOn ai:MultidimensionalQualityMetrics))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:dependsOn ai:WMTSharedTask))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:dependsOn ai:TransferLearning))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:dependsOn ai:ParallelCorpus))

  ## Capability Relationships
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:QualityEstimation))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:HumanEvaluationCorrelation))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:TranslationQualityAssurance))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:ErrorSpanDetection))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:PostEditingWorkflow))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:MTBenchmarking))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:enables ai:ReferenceFreeEvaluation))

  ## Implementation Relationships
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:implements ai:RegressionModel))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:implements ai:RankingModel))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:implements ai:FineTuning))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:supports ai:MachineTranslation))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:supports ai:PostEditingWorkflow))

  ## Reduction Relationships
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:reducesTo ai:EvaluationMetric))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:reducesTo ai:NeuralMTMetric))

  ## Contrasting Relationships
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:contrastsWith ai:BLEUScore))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:contrastsWith ai:chrF))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:contrastsWith ai:TER))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:contrastsWith ai:BLEURT))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:contrastsWith ai:LLMAsJudge))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:relatedTo ai:NeuralMachineTranslation))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:relatedTo ai:WMTSharedTask))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:relatedTo ai:LargeLanguageModels))
      SubClassOf(ai:COMETMetric
        ObjectSomeValuesFrom(ai:relatedTo ai:Flores200))

  ## About
    COMET (Crosslingual Optimised Metric for Evaluation of Translation) was introduced by Ricardo Rei, Craig Stewart, Ana C. Farinha, and Alon Lavie in their 2020 EMNLP paper "COMET: A Neural Framework for MT Evaluation." The work was conducted jointly by Unbabel — a Lisbon-based language service and AI company — and Instituto Superior Técnico (IST) in Lisbon, Portugal, with collaboration extending to Carnegie Mellon University. The fundamental motivation for COMET was the chronic inadequacy of lexical overlap metrics such as [[BLEU Score]], chrF, and TER when applied to modern [[Neural Machine Translation]] output. These metrics measure surface string similarity, which fails to recognise that two translations can be semantically equivalent yet lexically distinct (paraphrase), and that a single character substitution can constitute a catastrophic error in some contexts (e.g., a medication name) and be entirely trivial in others. Human annotators using direct assessment (DA) or MQM frameworks routinely disagree with BLEU-ordered system rankings by wide margins, particularly for high-quality neural MT systems clustered near the top of performance ranges.

    The COMET framework responded by framing MT evaluation as a supervised regression or ranking task over rich cross-lingual representations. By fine-tuning XLM-RoBERTa — a multilingual transformer pre-trained on 100 languages — on thousands of human DA annotations from WMT evaluation campaigns, COMET models learn to predict the quality score a human annotator would assign to a given (source, hypothesis, reference) triple. The resulting models achieve segment-level Pearson correlations with human judgements in the range of 0.6-0.8, dramatically higher than BLEU's typical 0.3-0.5 on the same evaluation sets.

    The COMET framework was immediately influential. At WMT20 (2020), COMET-based submissions outperformed all prior automated metrics in correlation with human judgements for most language pairs. From WMT21 onwards, COMET and its variants became the reference metrics against which all new MT metric proposals are compared. The Flores-101 and Flores-200 benchmarks adopted COMET as the primary evaluation metric for low-resource and zero-shot translation quality assessment, cementing its position as the community standard.

    In 2022, COMET-22 (the Unbabel-IST WMT22 submission) introduced an ensemble of a regression estimator trained on DA data and a multitask model trained jointly on MQM annotations and word-level quality tags, achieving the top system ranking on Chinese-English and second place on most other language pairs at the WMT22 Metrics Shared Task. Simultaneously, COMETKiwi-22 introduced the reference-free quality estimation variant, enabling COMET scoring in production environments where human reference translations are unavailable.

    The architecture underwent further transformation with XCOMET (2024), which added explicit fine-grained error span detection to the COMET framework, training a unified model to simultaneously predict a sentence-level quality score and identify and classify error spans (minor, major, critical) using MQM-annotated data. XCOMET-XXL (10.7B parameters) and XCOMET-XL (3.5B parameters) achieved the highest reported correlations with MQM human judgements as of 2024, providing both a scalar quality estimate and interpretable error category information.

  ## Components and Architecture

    - **Backbone Encoder**: XLM-RoBERTa (base or large) is the standard encoder; larger backbones (XLM-R XXL, mDeBERTa-v3-base) are used in higher-capability variants. The encoder produces contextualised multilingual representations for source, hypothesis, and reference independently.
    - **Pooling Strategy**: A combination of layer-weighted average pooling and [CLS] token extraction is used; COMET averages representations across the top K transformer layers to balance surface-level and semantic-level features.
    - **Regression Head**: A multi-layer feedforward network with LayerNorm and dropout takes the concatenated and element-wise-product of the pooled source, hypothesis, and reference representations and regresses to a scalar quality score in [0, 1] (normalised from the WMT DA z-score distribution) or a direct human score.
    - **Ranking Variant**: COMET-ranking models use a triplet loss or pairwise preference loss to rank translation hypotheses by quality without requiring absolute score regression; these variants are particularly robust to annotation scale inconsistencies across languages.
    - **Quality Estimation (Reference-Free) Variant (COMET-QE / COMETKiwi)**: Uses only source and hypothesis as inputs; the reference encoder is omitted. Trained on MLQE-PE and WMT DA annotations, these models assess translation quality without access to reference translations, enabling deployment in production MT pipelines where references are unavailable.
    - **XCOMET Error Span Detection**: Augments the sentence-level regression head with a token-level classification head that assigns each target token an error tag (OK, minor, major, critical) using MQM error span annotations. The final quality score is a combination of the regression score and the aggregate error severity.
    - **Ensemble Scoring**: COMET-22 used an ensemble of regression and multitask models; MetricX (Google, 2024) also uses ensemble-style calibration. Ensemble COMET models consistently outperform single-model variants in WMT shared task rankings.

  ## COMET Model Family (2020-2026)

    - **COMET-DA (2020)**: Original reference-based direct assessment regression model; XLM-R backbone; trained on WMT17-WMT20 DA annotations.
    - **COMET-MQM (2021)**: Fine-tuned on MQM-annotated data from WMT20 and WMT21; better calibrated for high-quality translation pairs where DA compression effects are pronounced.
    - **COMET-QE (2021)**: Reference-free quality estimation; uses source and hypothesis only; targets deployment in online MT pipelines.
    - **COMET-22 (wmt22-comet-da)**: WMT22 submission; ensemble of regression and multitask models; gold-standard checkpoint still widely used as of 2026; available on Hugging Face as Unbabel/wmt22-comet-da.
    - **COMETKiwi-22 (wmt22-cometkiwi-da)**: Reference-free WMT22 submission; trained on MLQE-PE and WMT DA; the de facto reference-free evaluation standard.
    - **COMET-23 (wmt23-comet-da)**: Updated regression model trained on extended WMT17-WMT22 DA data with improved training recipe.
    - **COMETKiwi-23-XL / -XXL (2023)**: Larger XL (3.5B) and XXL (10.7B) quality estimation models using mDeBERTa or XLM-R XL backbone; significantly improved segment-level correlation.
    - **XCOMET-XL / XCOMET-XXL (2024)**: Explainable COMET with sentence-level regression plus MQM error span tagging; published in Transactions of the Association for Computational Linguistics (TACL); best-performing open models on MQM correlation benchmarks as of early 2025.
    - **MetricX-24-Hybrid (Google, 2024)**: Google's COMET-derivative using T5-XXL backbone trained on a combination of human DA and synthetic data; ranked first in WMT24 Metrics Shared Task, with COMET-22 ranked third; demonstrates that the COMET architecture scales to large decoder models.

  ## Evaluation Framework and Benchmarks

    COMET models are evaluated annually at the WMT (Workshop on Machine Translation) Metrics Shared Task, which provides standardised language pairs, MT system outputs, and human quality annotations. The primary evaluation metrics used to assess COMET itself are:
    - **Segment-Level Pearson Correlation**: Correlation between COMET scores and human DA z-scores at the sentence level
    - **Segment-Level Kendall-τ**: Rank correlation between COMET pairwise preferences and human preference annotations
    - **System-Level Spearman Correlation**: Correlation between system-level COMET averages and system-level human evaluation rankings
    - **MQM Error Span F1**: For XCOMET models, agreement between predicted error spans and MQM-annotated spans

    The WMT24 Metrics Shared Task ("Are LLMs Breaking MT Metrics?") examined whether LLM-generated MT output exposes blind spots in learned metrics like COMET; results showed that COMET-22 remained robust but that LLM-generated outputs with subtle hallucinations sometimes escaped detection, motivating XCOMET's error span approach.

    Other benchmark environments include:
    - **Flores-200**: Meta AI's 200-language benchmark; COMET is the primary quality metric alongside chrF
    - **ACES Challenge Set** (Cabello et al., 2022): Tests MT metric adequacy on 68 linguistic phenomena; exposes specific COMET failure modes in compositional and morphological reasoning
    - **MT-LENS (2024)**: Unified MT evaluation toolkit integrating COMET, XCOMET, chrF, and LLM-as-judge approaches for side-by-side comparison

  ## Use Cases

    - **Academic MT Research**: COMET has displaced BLEU as the primary reporting metric in machine translation papers submitted to ACL, EMNLP, NAACL, and WMT venues since approximately 2022. Researchers report COMET-22 (reference-based) and COMETKiwi (reference-free) as a paired pair of evaluation metrics, analogously to how human DA and BLEU were previously paired.
    - **Production MT Quality Assurance**: Language service providers (LSPs) and enterprise MT deployers use COMET-QE or COMETKiwi to flag low-quality MT segments for human post-editing review, prioritising post-editing effort and ensuring that only segments below a quality threshold require human correction. This reduces post-editing cost by 30-50% in high-volume scenarios.
    - **MT System Development and Tuning**: During neural MT training, COMET scores can be used as part of quality-diversity selection for data filtering, as a minimum-Bayes-risk (MBR) decoding objective, and as a signal for reinforcement learning from human feedback (RLHF) fine-tuning of translation models, as demonstrated in the MBR-MT and RLMT lines of work.
    - **Dataset Curation**: COMET-QE scores are used to filter large parallel corpora for low-quality sentence pairs, analogously to CLIP score filtering for image-text datasets, yielding higher-quality training data for subsequent MT model training.
    - **Post-Editing Workflow Optimisation**: COMETKiwi scores predict the post-editing effort required for a given MT segment, enabling adaptive MT workflows that bypass human post-editing for high-quality segments and prioritise editing for low-quality ones — directly reducing the cost of human-in-the-loop translation pipelines.
    - **Speech Translation Evaluation**: Recent work (2024) has extended COMET to evaluate speech translation outputs by adapting the metric to account for ASR transcription errors in the hypothesis, using source-aware COMET variants that accept acoustic features alongside text.
    - **LLM Translation Evaluation**: As large language models increasingly function as MT engines, COMET and XCOMET are used to benchmark LLM translation quality against dedicated neural MT systems. Research at WMT24 showed that LLM-generated translations sometimes score highly on COMET but contain subtle hallucinations or named-entity errors not captured by segment-level correlation metrics alone, motivating hybrid COMET + LLM-as-judge evaluation stacks.

  ## Academic Context

    The COMET framework belongs to the lineage of learned MT metrics that began with the neural quality estimation work of Specia et al. (2010, 2013) and the QUEST QE framework. Earlier learned metrics such as BEER (Stanojevic & Simaan, 2014) and RUSE (Shimanaka et al., 2018) used simpler feature extraction and regression approaches. COMET's key advance was to leverage the representations of massively multilingual pre-trained transformers — specifically XLM-RoBERTa — which provide cross-lingual semantic alignment without requiring language-pair-specific feature engineering.

    A concurrent related line of work is BLEURT (Sellam et al., Google, 2020), which pre-trains BERT on synthetic perturbations of reference translations before fine-tuning on human DA annotations. BLEURT demonstrated similar improvements over BLEU but is limited to English, whereas COMET's XLM-R backbone generalises across 100 languages. The two approaches converged in practice: both use pre-trained language model representations and human DA supervision; the primary difference is the training data construction and the inclusion of the source sentence as input in COMET.

    MQM (Multidimensional Quality Metrics) annotation, developed by Lommel et al. (2014) and adopted by Google, Microsoft, and Unbabel for WMT21+ annotations, provides richer supervision than DA because annotators identify and classify specific error spans rather than assigning holistic scores. COMET-MQM and XCOMET exploit MQM annotations to produce more fine-grained evaluation, which is particularly important for distinguishing near-human quality systems that are trivially ranked by DA.

    The "pitfalls of COMET" discourse (Kocmi et al., WMT24; Freitag et al., 2022) has identified several limitations: COMET scores are not comparable across language pairs (scores for English-German are not directly comparable to scores for English-Chinese), COMET is sensitive to length (verbose translations often score higher), and COMET may be gamed by MT systems fine-tuned to optimise COMET scores specifically, analogous to BLEU gaming. These critiques have informed the design of XCOMET's error span approach, which is harder to game than a scalar regression target.

  ## Current Landscape (2026)

    As of 2026, the COMET family is the dominant evaluation framework for machine translation in both academic and industrial settings. The unbabel-comet Python package (v2.0+, available via PyPI) provides a unified API for running COMET-22, COMETKiwi, XCOMET-XL, and XCOMET-XXL; the package is integrated into the WMT evaluation infrastructure, the Flores evaluation suite, and major MT research frameworks including Fairseq, Marian, and Sacrebleu-compatible evaluation pipelines.

    In 2024, Google released MetricX-24-Hybrid, a T5-XXL-based MT metric that ranked first in the WMT24 Metrics Shared Task, slightly outperforming COMET-22 which ranked third. MetricX's architecture is COMET-inspired but uses a sequence-to-sequence backbone rather than a bidirectional encoder, enabling richer conditioning on source and reference context. The result signals that the COMET approach of learned human-aligned evaluation is converging with LLM-scale architectures.

    LLM-as-judge evaluation (using GPT-4 or similar models prompted with MQM-style rubrics to score translations) emerged as a competitor to COMET in 2023-2024. ACL 2024 research showed that LLM-as-judge achieves only 0.2 segment-level correlation with human DA compared to COMET-22's 0.6+, making it unsuitable for fine-grained system comparison, though it provides richer error category explanations. The consensus 2026 evaluation stack is COMET-22 (reference-based scalar score) combined with XCOMET (error span detection) and optionally supplemented with LLM-as-judge qualitative analysis for specific error categories.

    The COMET ecosystem has expanded to cover speech translation (source-aware COMET variants), document-level evaluation (context-COMET experiments), and multilingual evaluation of LLM translation outputs. Unbabel continues active maintenance and has open-sourced the COMET codebase under the Apache 2.0 licence, with the Hugging Face model hub hosting all major checkpoints.

  ## UK Context

    UK universities have made substantive contributions to the evaluation of [[Machine Translation]] systems and the ecosystem surrounding COMET. The University of Edinburgh's School of Informatics — which houses one of Europe's leading MT research groups (Barry Haddow, Pinzhen Chen, Nikita Moghe, Tsz Kin Lam) — has co-authored work that critically evaluates COMET's robustness and cross-lingual generalisation properties, examining cases where the metric's predictions diverge from human judgements for morphologically complex languages. Edinburgh's MT group has participated in WMT shared tasks continuously since the tasks' inception and has published analyses of COMET's behaviour on low-resource and domain-adapted translation outputs.

    The University of Sheffield's NLP group has contributed to MT quality estimation research, including work on post-editing effort prediction and adaptive MT workflows that are directly applicable to COMET-QE-driven pipelines. Sheffield's long-standing collaboration with the European Association for MT (EAMT) has included studies of COMET adoption in professional translation services.

    In industry, Unbabel — the primary developer of COMET — operates a significant presence in the UK through its enterprise language services business. UK-based language service providers including SDL (now RWS Group, headquartered in Chalfont St Giles, Buckinghamshire) integrate COMET-QE scoring into their translation quality workflows and adaptive post-editing pipelines. RWS's Language Weaver product line uses neural MT quality estimation approaches conceptually aligned with COMET.

    NHS translation services across Northern England — particularly in Greater Manchester, West Yorkshire, and Tyne and Wear, which have substantial multilingual patient populations — are exploring COMET-informed MT quality assurance for patient-facing documentation. Manchester and Leeds city councils have piloted MT systems for public services, where COMET-QE thresholds determine whether MT output is reviewed by a professional translator or deployed directly.

    The Alan Turing Institute has funded MT evaluation research examining COMET's calibration for under-resourced UK minority languages including Welsh, Scottish Gaelic, and British Sign Language glosses, highlighting that COMET's XLM-R backbone performs significantly worse on these languages than on high-resource European languages.

  ## Future Directions (2026-2030)

    - **COMET at LLM Scale**: Scaling COMET to 70B+ parameter LLM backbones (e.g., Llama-3 or Qwen-2 fine-tuned on MQM data) to leverage in-context reasoning capabilities while maintaining the reference-based regression paradigm; early experiments (2025) suggest substantial gains for creative and literary translation evaluation where semantic fidelity is harder to measure from surface text alone.
    - **Document-Level COMET**: Extending COMET to evaluate translation coherence at the document level, where inter-sentence consistency of terminology, pronoun resolution, and discourse structure cannot be captured by segment-level metrics; this requires new MQM annotation schemes and training data with document-level context.
    - **Multimodal COMET**: Incorporating visual or audio source signals for evaluating multimodal translation (image captioning translation, audio dubbing quality, video subtitle translation), analogously to how CLIP extended contrastive learning across modalities.
    - **COMET for Low-Resource Languages**: Improving COMET's coverage and calibration for low-resource languages through better backbone models (multilingual mDeBERTa, Aya-23), targeted DA collection campaigns for underserved language pairs, and cross-lingual transfer techniques that leverage high-resource COMET judgements to bootstrap low-resource evaluation.
    - **Interpretable and Hybrid Evaluation**: Combining COMET scalar scores with XCOMET error span explanations and LLM-generated error category narratives into a unified evaluation report that is actionable for both MT system developers and post-editing translators.
    - **Regulation-Aligned Evaluation**: As the EU AI Act (2024) and UK AI regulation framework (2025) impose transparency and quality assurance requirements on AI translation systems used in regulated domains (healthcare, legal, financial), COMET-QE scoring thresholds are likely to become embedded in regulatory compliance frameworks as a minimum standard for MT quality gates.

  ## Standards, Governance and Deployment

    COMET is governed primarily through the academic WMT evaluation community and the Unbabel open-source ecosystem:

    - **Apache 2.0 Licence**: The unbabel-comet Python package and all associated model code are released under the Apache 2.0 licence, permitting commercial use, modification, and redistribution with attribution. Model weights on Hugging Face Hub carry additional data licences reflecting the WMT annotation data used in training.
    - **Hugging Face Hub Integration**: All major COMET checkpoints are hosted on the Hugging Face model hub under the `Unbabel` organisation namespace (e.g., `Unbabel/wmt22-comet-da`, `Unbabel/wmt22-cometkiwi-da`, `Unbabel/XCOMET-XXL`), enabling standardised loading via the `transformers` library and `unbabel-comet` Python API.
    - **WMT Community Standards**: The WMT Metrics Shared Task defines the gold-standard evaluation protocol for MT metrics. Submission to and ranking in the WMT Metrics shared task is the accepted method for validating a new MT metric's claim to state-of-the-art performance. This community-driven evaluation process functions as a de facto standardisation mechanism for MT evaluation methodology.
    - **SacreBLEU Compatibility**: The unbabel-comet package is designed for interoperability with SacreBLEU, the standard BLEU implementation, enabling mixed-metric evaluation pipelines that report both COMET and BLEU/chrF for backward compatibility with older literature.
    - **EU AI Act Translation Provisions**: EU AI Act Article 50 and related guidance on AI translation systems in high-stakes contexts (judicial, medical) are expected to require demonstrable quality assurance; COMET-QE thresholds are natural candidates for automated quality gates in compliant MT workflows.
    - **ISO 17100 and EN 15038**: These standards for translation service quality define human quality thresholds for professional translation; COMET-QE scores are increasingly mapped to these standards to provide automated proxies for human quality assessment in regulated translation workflows.
    - **UK Government Translation Services**: The UK Cabinet Office's Guidelines on Machine Translation (updated 2025) acknowledge COMET-class neural metrics as the preferred evaluation approach for MT used in government communications, replacing BLEU as the primary quality indicator.

  ## Integration Patterns and Usage

    COMET is typically used in one of four deployment patterns:

    - **Batch Offline Evaluation (Research)**: Given a set of MT system outputs and reference translations, compute COMET-22 scores for all segments, average per system, and compare. Standard usage: `comet-score -s sources.txt -t hypotheses.txt -r references.txt --model Unbabel/wmt22-comet-da`. Returns segment-level scores and system-level mean.
    - **Reference-Free QE Scoring (Production)**: Without reference translations, use COMETKiwi to score MT segments in real-time: `comet-score -s sources.txt -t hypotheses.txt --model Unbabel/wmt22-cometkiwi-da`. Scores above a threshold (e.g., ≥ 0.85) are approved for publication; below threshold segments are routed to post-editing queues.
    - **MBR Decoding Integration**: During [[Neural Machine Translation]] inference, generate multiple candidate translations per source sentence (beam search or sampling) and select the candidate that minimises expected risk as measured by COMET similarity to other candidates. This Minimum Bayes Risk (MBR) approach improves COMET scores by 1-3 points at the cost of 10-100× more inference compute.
    - **RLHF / Quality-Aware Fine-Tuning**: Use COMET-QE as a reward signal in reinforcement learning fine-tuning of MT models, rewarding translations that the QE model scores highly. This is analogous to RLHF in LLM alignment and can significantly improve MT quality on out-of-domain data where the base model is weak.

    Computational requirements for COMET inference:
    - **COMET-22 (base)**: XLM-R Large backbone; ~560M parameters; 4GB GPU VRAM; ~10 segments/second on A100 for batch scoring
    - **COMETKiwi-23-XL**: 3.5B parameters; ~14GB GPU VRAM; ~2 segments/second on A100
    - **XCOMET-XXL**: 10.7B parameters; requires A100 80GB or multi-GPU; ~0.5 segments/second; recommended for high-value offline evaluation, not real-time production scoring
    - **CPU Inference**: COMET-22 base can run on CPU at ~0.5 segments/second using ONNX export; suitable for small-scale or development environments

  ## Research and Literature

    [1] Rei, R., Stewart, C., Farinha, A. C., & Lavie, A. (2020). COMET: A Neural Framework for MT Evaluation. *Proceedings of EMNLP 2020*, pp. 2685-2702. ACL Anthology: 2020.emnlp-main.213. arXiv:2009.09025.

    [2] Rei, R., Treviso, M., Guerreiro, N. M., Zerva, C., Farinha, A. C., Maroti, C., de Souza, J. G. C., Glushkova, T., Alves, D., Coheur, L., Lavie, A., & Martins, A. F. T. (2022). CometKiwi: IST-Unbabel 2022 Submission for the Quality Estimation Shared Task. *WMT 2022*. arXiv:2209.06243.

    [3] Rei, R., Zerva, C., Farinha, A. C., Treviso, M., Glushkova, T., Lavie, A., Coheur, L., & Martins, A. F. T. (2022). COMET-22: Unbabel-IST 2022 Submission for the Metrics Shared Task. *WMT 2022*. ACL Anthology: 2022.wmt-1.52.

    [4] Guerreiro, N. M., Rei, R., van Stigt, D., Coheur, L., Colombo, P., & Martins, A. F. T. (2023). xcomet: Transparent Machine Translation Evaluation through Fine-grained Error Detection. *Transactions of the Association for Computational Linguistics (TACL)*, 11, 1022-1038. doi:10.1162/tacl_a_00683.

    [5] Freitag, M., Bleu, N., Mathur, P., Foster, G., Rei, R., Bojar, O., Lavie, A., & Way, A. (2022). Results of the WMT22 Metrics Shared Task: Stop Using BLEU — Neural MT Evaluation is Here to Stay. *WMT 2022*.

    [6] Kocmi, T., Avramidis, E., Bawden, R., Bojar, O., Dvorkovich, A., Federmann, C., Fishel, M., Freitag, M., Gowda, T., Grundkiewicz, R., Haddow, B., Herold, C., Junczys-Dowmunt, M., Karpinska, M., Koehn, P., Kozlova, A., Lommel, A., Mathur, P., Monz, C., ... Zouhar, V. (2024). Are LLMs Breaking MT Metrics? Results of the WMT24 Metrics Shared Task. *WMT 2024*. statmt.org/wmt24/pdf/2024.wmt-1.2.pdf.

    [7] Sellam, T., Das, D., & Parikh, A. P. (2020). BLEURT: Learning Robust Metrics for Text Generation. *Proceedings of ACL 2020*, pp. 7881-7892. arXiv:2004.04696.

    [8] Papineni, K., Roukos, S., Ward, T., & Zhu, W.-J. (2002). BLEU: a Method for Automatic Evaluation of Machine Translation. *Proceedings of ACL 2002*, pp. 311-318.

    [9] Specia, L., Shah, K., de Souza, J. G. C., & Cohn, T. (2013). QuEst — A translation quality estimation framework. *Proceedings of ACL 2013 System Demonstrations*.

    [10] Freitag, M., Foster, G., Grangier, D., Ratnakar, V., Tan, Q., & Macherey, W. (2021). Experts, Errors, and Context: A Large-Scale Study of Human Evaluation for Machine Translation. *Transactions of the Association for Computational Linguistics*, 9, 1460-1474. arXiv:2104.14478.

    [11] Lommel, A., Uszkoreit, H., & Burchardt, A. (2014). Multidimensional Quality Metrics (MQM): A Framework for Declaring and Describing Translation Quality Metrics. *Proceedings of the LREC 2014*.

    [12] Conneau, A., Khandelwal, K., Goyal, N., Chaudhary, V., Wenzek, G., Guzmán, F., Grave, E., Ott, M., Zettlemoyer, L., & Stoyanov, V. (2020). Unsupervised Cross-lingual Representation Learning at Scale (XLM-R). *Proceedings of ACL 2020*. arXiv:1911.02116.

    [13] Costa-jussà, M. R., Cross, J., Çelebi, O., Elbayad, M., Heafield, K., Heffernan, K., Kalbassi, E., Lam, J., Licht, D., Maillard, J., Sun, A., Wang, S., Wenzek, G., Youngblood, F., Akula, B., Barrault, L., Mejia-Gonzalez, G., Hansanti, P., Hoffman, J., ... Wang, C. (2022). No Language Left Behind: Scaling Human-Centered Machine Translation. arXiv:2207.04672.

    [14] Stanojevic, M., & Simaan, K. (2014). BEER: BEtter Evaluation as Ranking. *Proceedings of WMT 2014*.

    [15] Mathur, P., Wei, J., Freitag, M., Ma, Q., & Oncel Tuzel. (2020). Tangled up in BLEU: Reevaluating the Evaluation of Automatic Machine Translation Evaluation Metrics. arXiv:2006.06264.

    [16] Muller, B., Rücklé, A., Maillard, J., Bhattacharya, A., Lavie, A., Guzman, F., Keahey, K., Finkelstein, Y., Gopi, S., & Hajlaoui, N. (2023). Evaluating Automatic Metrics with Incremental Machine Translation Systems. arXiv:2407.03277.

    [17] Cabello, L., Bugliarello, E., Brandl, S., & Elliott, D. (2023). ACES: Translation Accuracy Challenge Sets for Evaluating Machine Translation Metrics. *EMNLP 2023*. arXiv:2210.15615.

    [18] Fernandes, P., Farinhas, A., Rei, R., de Souza, J. G. C., Ogayo, P., Neubig, G., & Martins, A. F. T. (2022). Quality-Aware Decoding for Neural Machine Translation. *NAACL 2022*. arXiv:2205.00978.

    [19] de Souza, J. G. C., Grundkiewicz, R., Koehn, P., Kremer, G., Scherrer, Y., Bojar, O., Monz, C., Freitag, M., Haddow, B., & Barrault, L. (2023). Pitfalls and Outlooks in Using COMET. *WMT 2024*. arXiv:2408.15366.

    [20] Raunak, V., Menezes, A., & Junczys-Dowmunt, M. (2021). The Curious Case of Hallucinations in Neural Machine Translation. *NAACL 2021*. arXiv:2105.06683.

    [21] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention Is All You Need. *NeurIPS 2017*. arXiv:1706.03762.

    [22] Avramidis, E., Burchardt, A., van der Goot, R., Popovic, M., Toral, A., & Way, A. (2024). MT-LENS: An All-in-One Toolkit for Better Machine Translation Evaluation. arXiv:2412.11615.

    [23] Guerreiro, N. M., Alves, D., Waldendorf, J., Haddow, B., Birch, A., Colombo, P., & Martins, A. F. T. (2023). Hallucinations in Large Multilingual Translation Models. *TACL*, 11, 1082-1102. arXiv:2303.16104.

    [24] Rei, R., Guerreiro, N. M., Pombal, J., Treviso, M., Farinha, A. C., Coheur, L., Lavie, A., & Martins, A. F. T. (2023). Scaling Up CometKiwi: Unbabel-IST 2023 Submission for the Quality Estimation Shared Task. *WMT 2023*. arXiv:2309.11374.

    [25] Moghe, N., Lam, T. K., Chen, P., & Haddow, B. (2024). How to Evaluate Speech Translation with Source-Aware Neural MT Metrics. arXiv:2511.03295.

    [26] Future AGI Research. (2026). Evaluating LLM Translation Quality (2026). futureagi.com/blog/evaluating-llm-translation-quality-2026/.

    [27] Translated.com Research. (2024). Dig into why COMET often falls short on LLM-based MT Evaluation. translated.com/mt-quality-evaluation-in-the-age-of-llm-based-mt.

    [28] Unbabel. (2022). Introducing Unbabel-COMET v2.0: Improved Models and Metrics for Better Machine Translation Evaluation. unbabel.com/introducing-unbabel-comet-v2-0-improved-models-and-metrics-for-better-machine-translation-evaluation/.

  ## Formal Algorithm: COMET Regression Scoring

    The reference-based COMET-DA scoring process can be described precisely as follows:

    **Inputs**:
    - Source sentence s = (s₁, s₂, ..., sₘ) — the original text in the source language
    - MT hypothesis h = (h₁, h₂, ..., hₙ) — the machine-translated text to be evaluated
    - Reference translation r = (r₁, r₂, ..., rₗ) — a human reference translation (not available in QE variants)

    **Encoding** (XLM-RoBERTa backbone):
    - Independently encode source, hypothesis, and reference through the shared multilingual encoder
    - Extract layer-weighted pooled representations: eₛ, eₕ, eᵣ ∈ ℝᵈ (d = 1024 for XLM-R Large)
    - Pooling combines [CLS] token and mean of top-K transformer layers weighted by learned scalars

    **Feature Construction** (concatenation + element-wise product):
    - Feature vector: f = [eₛ; eₕ; eᵣ; eₛ ⊙ eₕ; eₛ ⊙ eᵣ; eₕ ⊙ eᵣ] ∈ ℝ⁶ᵈ
    - This captures pairwise interactions between all three inputs

    **Regression Head**:
    - Feed-forward network with 2 hidden layers, LayerNorm, and dropout
    - Output: scalar quality score q ∈ [0, 1] predicting normalised human DA z-score

    **Training Objective**:
    - Mean Squared Error (MSE) between predicted scores and normalised human DA annotations
    - Training data: WMT17-WMT22 human direct assessment datasets (≈60,000 annotated segments per language pair)
    - Optional: KL divergence regularisation between reference model and fine-tuned model

    **COMET-QE (Reference-Free) Variant**:
    - Input: only source s and hypothesis h (reference r omitted)
    - Feature vector: f_QE = [eₛ; eₕ; eₛ ⊙ eₕ; |eₛ - eₕ|] ∈ ℝ⁴ᵈ
    - Trained on MLQE-PE annotations; enables deployment without reference translations

    **XCOMET Extension**:
    - Additional token-level classification head predicts error tags for each token: {OK, minor, major, critical}
    - Final score combines regression head output and aggregate error severity penalty
    - Trained jointly on MQM span annotations and DA regression targets

    **Evaluation Protocol**:
    - Segment-level Pearson correlation: r(q_metric, q_human) across all segments in an evaluation set
    - Kendall-τ: rank correlation between metric pairwise preferences and human preferences
    - Reported annually for each language pair at WMT Metrics Shared Task

  ## Limitations and Critical Perspectives

    The COMET framework, while the state of the art in learned MT evaluation, carries several known limitations that have been systematically documented in the community. First, **score incomparability across language pairs**: a COMET-22 score of 0.85 for an English-German system is not comparable to a score of 0.85 for a Japanese-English system; the scales are calibrated separately from different pools of annotators and language pair characteristics, making cross-lingual system comparisons unreliable. Practitioners must always compare COMET scores within a language pair and annotation set, never across them.

    Second, **length bias**: COMET regression models trained on DA annotations exhibit a length bias where longer, more verbose translations tend to receive slightly higher scores, even when the additional verbiage is redundant or slightly inaccurate. This reflects length bias in the underlying human DA annotations (annotators may perceive longer translations as more complete) and is particularly problematic when comparing [[Large Language Models]] that generate verbose translations against lean neural MT systems.

    Third, **metric gaming**: as COMET becomes the primary optimisation target in MT research, the risk of systems being fine-tuned specifically to maximise COMET scores (rather than genuine translation quality) increases. This is analogous to the BLEU gaming problem that motivated the creation of COMET in the first place; XCOMET's error span approach is more robust to such gaming because error categories are harder to optimise against than a scalar regression target.

    Fourth, **weakness on specific linguistic phenomena**: the ACES challenge set (Cabello et al., 2022) systematically showed that COMET fails on specific phenomena including addition errors (where the hypothesis contains information not in the source), mistranslation of function words, and certain types of morphological agreement errors in low-resource language pairs. COMET's strong aggregate performance masks these targeted failure modes.

    Fifth, **LLM evaluation blind spots** (WMT24): as LLMs generate translations that are fluent and semantically coherent at the surface level, COMET sometimes assigns them high scores even when they contain subtle hallucinations, named-entity substitutions, or culturally inappropriate renderings that a professional translator would flag as critical errors. This is the "LLM breaking MT metrics" problem identified at WMT24 and is one of the primary motivations for XCOMET's error span detection approach.

  ## Relationship to LLM-Based Evaluation

    The rise of [[Large Language Models]] as MT engines has created a challenging evaluation environment for COMET. On one hand, GPT-4-class models achieve near-human translation quality on many high-resource language pairs as measured by COMET, making it difficult to distinguish them from dedicated neural MT systems on standard benchmarks. On the other hand, LLM translations exhibit qualitatively different failure modes — hallucinations, over-literal renderings of idioms, inconsistency in proper noun transliteration — that COMET's scalar regression head is not well-suited to detect.

    LLM-as-judge evaluation, where a large language model is prompted with MQM-style rubrics to score and explain translation quality, emerged as a proposed alternative in 2023-2024. However, ACL 2024 research demonstrated that LLM-as-judge achieves only approximately 0.2 segment-level Pearson correlation with human DA, compared to COMET-22's 0.6+, making it unsuitable for fine-grained MT system ranking. The primary value of LLM-as-judge is in providing qualitative error explanations and detecting specific error categories (hallucinations, cultural insensitivity) rather than ranking systems quantitatively.

    The consensus 2026 MT evaluation stack as used in major research groups and at the WMT shared task combines: (1) COMET-22 for reference-based scalar quality scoring and system ranking; (2) COMETKiwi-23 for reference-free quality estimation in production pipelines; (3) XCOMET-XXL for interpretable error span detection on samples of interest; and optionally (4) LLM-as-judge for qualitative error category analysis on edge cases. This hybrid stack is calibrated against native-speaker MQM annotations on each deployed language pair to establish reliable quality thresholds for specific business use cases such as gisting (no post-editing), light post-editing, and full post-editing workflows.

  ## Benchmark Datasets and Evaluation Infrastructure

    - **WMT Metrics Shared Task** (annual, 2008-present): The primary benchmark for MT metrics; provides standardised MT system outputs, human DA and MQM annotations, and segment-level and system-level evaluation; COMET has been the top-performing family of metrics since WMT21.
    - **Flores-200** (Meta AI, 2022): 200-language evaluation benchmark covering over 40,000 sentences across 200 languages; COMET is the primary quality metric alongside chrF; exposes COMET's performance gap on very low-resource languages.
    - **ACES Challenge Set** (Cabello et al., 2022): 68-phenomenon challenge set testing MT metric robustness on specific linguistic phenomena; essential for diagnosing COMET failure modes beyond aggregate correlation scores.
    - **MQM Human Evaluation Dataset** (WMT20-WMT22): Professional MQM annotations for high-quality language pairs (en-de, zh-en, en-ru); the gold standard for COMET calibration and the training data source for XCOMET and COMET-MQM variants.
    - **MLQE-PE** (Specia et al., 2020): Multilingual quality estimation and post-editing dataset; the primary training resource for COMETKiwi quality estimation models.
    - **MT-LENS** (Avramidis et al., 2024): All-in-one MT evaluation toolkit integrating COMET, XCOMET, chrF, BERTScore, and LLM-as-judge approaches for comparative evaluation; enables reproducible side-by-side metric comparison.

  ## Key Terminology

    - **Direct Assessment (DA)**: WMT annotation protocol in which crowd-sourced annotators rate MT hypothesis quality on a 0-100 scale by comparing it to a reference; z-score normalised to remove annotator bias
    - **Multidimensional Quality Metrics (MQM)**: Professional annotation framework that requires expert translators to identify and classify specific error spans with severity labels (minor, major, critical); richer but more costly than DA
    - **Quality Estimation (QE)**: MT evaluation without reference translations; uses only source and hypothesis; the reference-free COMET variant
    - **XCOMET**: Explainable COMET; adds fine-grained error span detection to sentence-level quality regression; available in XL (3.5B) and XXL (10.7B) variants
    - **COMETKiwi**: Reference-free quality estimation COMET variant; named for the KIWI (quality estimation) track at WMT; the de facto production QE standard
    - **Segment-Level Correlation**: Pearson or Kendall-τ correlation between metric scores and human quality scores at the individual sentence level; the primary WMT evaluation criterion for MT metrics
    - **WMT Metrics Shared Task**: Annual competition at the Workshop on Machine Translation evaluating automated MT metrics against human judgements across multiple language pairs
    - **MetricX**: Google's COMET-inspired T5-XXL-based MT metric; ranked first in WMT24 Metrics Shared Task; demonstrates that the COMET paradigm scales to decoder-based LLM architectures
    - **BLEURT**: BERT-based learned MT metric (Sellam et al., Google, 2020); conceptually similar to COMET but English-only; COMET generalises to 100+ languages via XLM-R backbone
    - **Gisting vs Post-Editing**: Quality thresholds distinguishing MT output suitable for understanding only (gisting, no correction needed) from output requiring professional human correction before publication
    - **MLQE-PE**: Multilingual Quality Estimation and Post-Editing dataset; primary training resource for COMETKiwi QE models

  ## COMET Model Checkpoint Comparison

    | Model | Year | Backbone | Parameters | Input | Segment r | Notes |
    |-------|------|----------|------------|-------|-----------|-------|
    | COMET-DA (wmt20-comet-da) | 2020 | XLM-R Base | 278M | src+hyp+ref | ~0.55 | Original release |
    | COMET-QE (wmt20-comet-qe-da) | 2020 | XLM-R Base | 278M | src+hyp | ~0.40 | Reference-free |
    | COMET-22 (wmt22-comet-da) | 2022 | XLM-R Large | 560M | src+hyp+ref | ~0.65 | De facto standard |
    | COMETKiwi-22 (wmt22-cometkiwi-da) | 2022 | XLM-R Large | 560M | src+hyp | ~0.55 | Best ref-free model |
    | COMET-23 (wmt23-comet-da) | 2023 | XLM-R Large | 560M | src+hyp+ref | ~0.67 | Updated training data |
    | COMETKiwi-23-XL | 2023 | XLM-R XL | 3.5B | src+hyp | ~0.60 | Large QE model |
    | COMETKiwi-23-XXL | 2023 | mDeBERTa XXL | 10.7B | src+hyp | ~0.63 | Largest QE model |
    | XCOMET-XL | 2024 | XLM-R XL | 3.5B | src+hyp+ref | ~0.72 | +error spans |
    | XCOMET-XXL | 2024 | mDeBERTa XXL | 10.7B | src+hyp+ref | ~0.75 | Best overall, SOTA |
    | MetricX-24-Hybrid (Google) | 2024 | T5-XXL | 11B | src+hyp+ref | ~0.76 | WMT24 winner |

    (Segment-level Pearson r values are approximate; exact values vary by language pair and evaluation set)

  ## WMT Shared Task Performance History

    COMET's year-by-year performance at the WMT Metrics Shared Task tracks the field's evolution:

    - **WMT20 (2020)**: COMET first submitted; wins segment-level correlation for most language pairs; BLEU ranked near the bottom among all metrics; establishes learned metrics as the new state of the art.
    - **WMT21 (2021)**: COMET and BLEURT dominate; chrF performs surprisingly well for its simplicity; results galvanise the community consensus that BLEU is no longer an acceptable primary metric.
    - **WMT22 (2022)**: COMET-22 ensemble wins Chinese-English; places second for other pairs; COMETKiwi-22 is the top reference-free metric; the WMT22 paper explicitly titled "Stop Using BLEU — Neural MT Evaluation is Here to Stay" marks the paradigm shift.
    - **WMT23 (2023)**: COMETKiwi-23-XXL demonstrates that scaling the backbone substantially improves QE performance; XCOMET development begins with WMT23 annotations.
    - **WMT24 (2024)**: MetricX-24-Hybrid (Google, T5-XXL) ranks first overall; COMET-22 ranks third; the question "Are LLMs Breaking MT Metrics?" is posed as the shared task's central research question; answer is nuanced — LLM outputs expose some gaps in COMET but COMET remains far more reliable than LLM-as-judge for segment ranking.
    - **Post-WMT24 (2025-2026)**: XCOMET-XXL emerges as the consensus best model for high-quality offline evaluation; hybrid COMET+XCOMET+LLM stacks become the recommended evaluation pipeline.

  ## Quality Thresholds and Decision Frameworks

    Practical deployment of COMET-QE requires setting quality thresholds that determine MT workflow routing:

    - **Gisting threshold (typically ≥ 0.75)**: MT output suitable for reader comprehension without correction; suitable for internal communications, low-stakes content, or informational queries
    - **Light post-editing threshold (≥ 0.85)**: MT output requiring minimal human correction; target for professional translation workflows where partial automation is acceptable
    - **Full post-editing required (< 0.75)**: MT output requiring significant human revision; typically flagged for professional translator review
    - **Critical domain adjustment**: In medical, legal, and financial contexts, thresholds should be set higher (e.g., light post-editing ≥ 0.90) and validated against domain-specific human evaluation
    - **Language pair calibration**: Thresholds must be calibrated separately for each language pair; a COMETKiwi score of 0.85 on English-French has different quality implications than on English-Japanese
    - **Confidence intervals**: Always compute bootstrap confidence intervals when comparing systems; differences smaller than ±0.01 system-level COMET are typically not statistically significant
    - **Human validation**: Threshold calibration should be validated against human judgements on representative samples from the deployment domain before production use

  ## Related Concepts Glossary

    - **[[Machine Translation]]**: The automated translation of text between natural languages; COMET's primary evaluation domain
    - **[[Neural Machine Translation]]**: MT using neural network encoder-decoder architectures; the system type COMET is designed to evaluate
    - **[[Natural Language Processing]]**: Broad field of computational language understanding; COMET is a specialised NLP evaluation tool
    - **[[BLEU Score]]**: N-gram precision metric for MT evaluation; the primary metric COMET supersedes; still reported for backward compatibility
    - **[[XLM-RoBERTa]]**: Cross-lingual pre-trained language model (Facebook AI, 2020) trained on 100 languages; the backbone of all major COMET variants
    - **[[Transfer Learning]]**: Applying pre-trained model representations to new tasks; COMET fine-tunes XLM-R on human MT annotations
    - **[[Quality Estimation]]**: Reference-free MT quality prediction; the task addressed by COMETKiwi and COMET-QE variants
    - **[[Direct Assessment]]**: WMT human annotation protocol for MT quality; the primary training signal for COMET regression models
    - **[[Multidimensional Quality Metrics]]**: Professional MT error annotation framework; the training signal for COMET-MQM and XCOMET models
    - **[[WMT Shared Task]]**: Workshop on Machine Translation annual evaluation campaign; the primary benchmark environment for COMET
    - **[[Large Language Models]]**: Generative AI models increasingly used as MT engines and as MT evaluators (LLM-as-judge); COMET is evaluated against them
    - **[[Transformer Architecture]]**: The self-attention-based architecture underlying XLM-R and therefore all COMET models
    - **[[Attention Mechanism]]**: Core building block of transformer-based encoders; enables COMET to model complex cross-lingual semantic correspondences
    - **[[Post-Editing Workflow]]**: Human correction of MT output; COMETKiwi scores predict post-editing effort to prioritise human review
    - **[[Sequence-to-Sequence Model]]**: Encoder-decoder architecture underlying neural MT systems that COMET evaluates

  ## Practical Usage Guide

    Running COMET evaluation in practice requires the `unbabel-comet` Python package (v2.0+):

    **Installation**:
    - `pip install unbabel-comet` — installs the COMET framework and CLI
    - Requires Python 3.8+, PyTorch 1.10+, and at least 8GB GPU VRAM for COMET-22
    - Model weights are downloaded automatically from Hugging Face Hub on first use

    **Reference-Based Evaluation (COMET-22)**:
    - Prepare three line-aligned text files: `src.txt` (source), `mt.txt` (hypothesis), `ref.txt` (reference)
    - Command: `comet-score -s src.txt -t mt.txt -r ref.txt --model Unbabel/wmt22-comet-da`
    - Output: segment-level COMET scores + system-level mean with 95% confidence intervals via bootstrap
    - Score range: approximately -1 to 1, with 0.0 representing mediocre MT and 0.85+ indicating near-human quality

    **Reference-Free Quality Estimation (COMETKiwi)**:
    - Command: `comet-score -s src.txt -t mt.txt --model Unbabel/wmt22-cometkiwi-da`
    - Does not require reference translations; suitable for production quality gates
    - Typical production threshold: segments scoring above 0.85 are approved without human review

    **XCOMET Error Span Detection**:
    - Command: `comet-score -s src.txt -t mt.txt -r ref.txt --model Unbabel/XCOMET-XXL`
    - Output: sentence-level quality score + identified error spans with severity tags (minor/major/critical)
    - Requires ~80GB GPU VRAM (XCOMET-XXL); use XCOMET-XL (3.5B) for less memory-intensive deployment

    **Python API Usage**:
    ```python
    from comet import download_model, load_from_checkpoint
    model_path = download_model("Unbabel/wmt22-comet-da")
    model = load_from_checkpoint(model_path)
    data = [{"src": "Hello", "mt": "Bonjour", "ref": "Salut"}]
    model_output = model.predict(data, batch_size=8, gpus=1)
    print(model_output.scores)  # [0.87...]
    ```

    **Interpreting COMET Scores**:
    - Scores are not absolute quality labels but relative rankings calibrated to human DA z-scores
    - Compare COMET scores only within the same language pair and model version
    - For system comparison, report 95% bootstrap confidence intervals to assess statistical significance
    - Segment-level scores below 0.60 typically indicate segments requiring human post-editing review
    - Do not compare COMET scores across model versions (wmt20 vs wmt22) or language pairs

  ## Comparison with Alternative MT Evaluation Metrics

    | Metric | Type | Human Corr. | Reference | Speed | Languages | Notes |
    |--------|------|-------------|-----------|-------|-----------|-------|
    | BLEU | n-gram | ~0.3 segment | Required | Fast | Any | Deprecated as primary metric |
    | chrF | character n-gram | ~0.4 segment | Required | Fast | Any | Simple, still useful for morphological languages |
    | TER | edit distance | ~0.3 segment | Required | Fast | Any | Penalises reordering heavily |
    | METEOR | synonym+recall | ~0.45 segment | Required | Medium | Limited | Incorporates synonyms; language-limited |
    | BLEURT | BERT-based | ~0.55 segment | Required | Medium | EN only | English only; pre-trained on synthetic perturbations |
    | COMET-22 | XLM-R regression | ~0.65 segment | Required | Medium | 100+ | De facto standard 2022-2026 |
    | COMETKiwi | XLM-R QE | ~0.55 segment | Not needed | Medium | 100+ | Best reference-free metric |
    | XCOMET-XXL | mDeBERTa+spans | ~0.75 segment | Required | Slow | 100+ | Best explainable metric, 2024 SOTA |
    | MetricX-24 | T5-XXL | ~0.76 segment | Required | Slow | 100+ | WMT24 winner; COMET-inspired |
    | LLM-as-judge (GPT-4) | LLM prompting | ~0.20 segment | Optional | Very slow | Any | Poor segment correlation; good for qualitative analysis |

  ## Accessibility and Open-Source Ecosystem

    COMET is one of the most accessible and well-supported MT evaluation tools available:

    - **GitHub**: github.com/Unbabel/COMET — Apache 2.0 licensed; actively maintained; 1,000+ stars as of 2025
    - **PyPI**: `pip install unbabel-comet` (unbabel-comet package); v2.0.0+ for COMET-22 and beyond
    - **Hugging Face Hub**: All major checkpoints at `Unbabel/` namespace; standardised loading via `transformers` + `unbabel-comet`
    - **SacreBLEU compatibility**: COMET integrates with SacreBLEU evaluation scripts for joint BLEU+COMET reporting
    - **Documentation**: unbabel.github.io/COMET — comprehensive API documentation and tutorials
    - **WMT Integration**: COMET is the official evaluation tool for WMT Metrics Shared Task submissions
    - **Flores Integration**: Meta AI's Flores-200 evaluation framework uses COMET as primary quality metric
    - **Community**: Active Discord and GitHub discussions; regular updates aligned with WMT shared task schedules

  ## Industry Adoption and Commercial Integration

    COMET has moved from academic evaluation tool to core production infrastructure in the translation industry:

    - **Unbabel's Enterprise Platform**: Unbabel uses COMET-QE internally as the quality assurance backbone of its AI-assisted translation platform, which serves enterprise clients including Adobe, Facebook, and LinkedIn for customer support translation. COMET scores route segments to post-editing queues or direct publication based on quality thresholds calibrated per client and domain.
    - **RWS Group (Language Weaver)**: RWS, the world's largest language service provider (headquartered in Chalfont St Giles, UK), integrates neural QE models conceptually aligned with COMET into its Language Weaver MT platform. RWS's Translation Management System uses QE scores to automate post-editing tier assignment.
    - **DeepL Quality API**: DeepL's translation API returns confidence scores alongside translations for enterprise users; these scores are calibrated using approaches similar to COMET-QE, enabling automated quality routing in DeepL-integrated workflows.
    - **Systran**: Systran's enterprise MT platform integrates reference-free QE scoring to flag segments requiring human review; the approach is COMET-inspired using multilingual pre-trained encoder regression.
    - **Amazon Translate Quality Estimation**: Amazon AWS Translate provides quality score outputs for MT segments using neural QE models trained on human annotations; the architecture is undisclosed but conceptually aligned with COMET-QE's approach.
    - **Microsoft Azure Translator**: Azure's professional translation workflows use confidence scoring via neural QE to enable adaptive post-editing allocation; COMET-style learned metrics inform these scores.
    - **Lionbridge and Welocalize**: Leading global LSPs have integrated COMET-QE scoring into their translation management systems to automate quality control and post-editing effort allocation for high-volume MT workflows.

  ## COMET and the Displacement of BLEU

    The displacement of BLEU as the primary MT evaluation metric by COMET is one of the most significant methodological transitions in computational linguistics since the introduction of BLEU itself in 2002. BLEU had dominated MT evaluation for two decades despite its well-documented limitations: it measures n-gram overlap between hypothesis and reference, which fails to reward paraphrases, penalises grammatically equivalent reorderings, is sensitive to the number of references, and correlates poorly with human judgements for high-quality modern neural MT systems that produce fluent, semantically accurate translations using different surface forms than the reference.

    The transition had several key moments. The WMT21 findings (Freitag et al., 2021) systematically demonstrated that human DA rankings of MT systems diverge substantially from BLEU rankings, with BLEU incorrectly ordering several system pairs that human experts ranked in the opposite direction. This "BLEU vs human" divergence is most acute for closely ranked high-quality systems — exactly the comparison that matters most in competitive MT research. COMET's 2021 shared task performance demonstrated that COMET-MQM (trained on professional MQM annotations) achieves near-perfect Kendall-τ correlation with human expert rankings, prompting the headline claim in subsequent years that BLEU should be retired as a primary metric.

    However, BLEU has not disappeared. The community continues to report BLEU alongside COMET for backward compatibility with older literature and because BLEU has desirable properties in certain contexts: it is reference-free in the sense that no model weights need downloading, it is language-agnostic, it is deterministic and does not require GPU inference, and its scores are interpretable in a limited sense (higher BLEU means more n-gram overlap with the reference). BLEU is also more appropriate than COMET for evaluating very low-resource MT systems where COMET's XLM-R backbone may not have seen sufficient examples of the target language during pre-training. The practical consensus as of 2026 is: report COMET-22 as the primary metric and chrF as the secondary metric (replacing BLEU), with BLEU reported only for comparison with pre-2021 literature.

  ## Timeline of Key Developments

    - **2020 (EMNLP)**: COMET introduced by Rei et al.; XLM-R backbone; trained on WMT DA; immediately outperforms BLEU and all prior metrics in segment-level correlation
    - **2020-2021**: Rapid community adoption; COMET adopted by WMT as a primary metric alongside chrF and BLEU
    - **2021 (WMT21)**: COMET and BLEURT dominate the metrics shared task; results galvanise consensus that BLEU is insufficient
    - **2022 (WMT22)**: COMET-22 wins Chinese-English; COMETKiwi-22 introduced as reference-free QE standard; community paper "Stop Using BLEU" published
    - **2022**: Flores-200 adopts COMET as primary quality metric for 200-language MT evaluation
    - **2023 (WMT23)**: COMETKiwi-23-XL/XXL with billion-parameter backbones substantially improve QE quality; XCOMET development begins
    - **2023**: COMET integrated into major commercial MT evaluation pipelines; industry adoption reaches tipping point
    - **2024 (TACL)**: XCOMET-XL and XCOMET-XXL published; fine-grained error span detection added; highest MQM correlation among all public metrics
    - **2024 (WMT24)**: MetricX-24-Hybrid (Google) ranks first; COMET-22 ranks third; "Are LLMs Breaking MT Metrics?" published; hybrid evaluation stacks emerge
    - **2024-2025**: COMET v2.0 released with improved API; XCOMET integrated into production evaluation pipelines
    - **2025-2026**: COMET+XCOMET+LLM hybrid stacks become standard; document-level COMET variants under active development; LLM-scale COMET research ongoing

- ### Provenance
  - sources:: Rei et al. "COMET: A Neural Framework for MT Evaluation" EMNLP 2020 arXiv:2009.09025; Guerreiro et al. "XCOMET" TACL 2024 doi:10.1162/tacl_a_00683; Kocmi et al. "Are LLMs Breaking MT Metrics? WMT24 Metrics Shared Task" statmt.org/wmt24/pdf/2024.wmt-1.2.pdf; Rei et al. "COMET-22" ACL Anthology 2022.wmt-1.52; unbabel.github.io/COMET; github.com/Unbabel/COMET; machinetranslate.org/comet; unbabel.com/research/comet; futureagi.com/blog/evaluating-llm-translation-quality-2026/; translated.com/mt-quality-evaluation-in-the-age-of-llm-based-mt
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
