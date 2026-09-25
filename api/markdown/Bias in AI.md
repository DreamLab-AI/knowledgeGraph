The systematic and unfair skewing of artificial intelligence outputs against particular groups or outcomes, arising from unrepresentative or historically prejudiced training data, flawed problem framing, proxy variables, feedback loops, and deployment context. It manifests as measurable performance and treatment disparities — in face recognition, hiring, credit, healthcare and content moderation — and is addressed through bias auditing, fairness metrics, data curation, and governance obligations now codified in regulation such as the EU AI Act.

### Semantic Classification

### Content

## Definition

**Bias in AI** names the family of systematic distortions by which machine learning systems produce unfair or skewed outcomes for particular demographic groups, viewpoints or situations. It is broader than any single mechanism: bias enters through training data that encodes historical discrimination (arrest records, past hiring decisions), through sampling that under-represents populations, through labels applied by inconsistent human annotators, through proxy features that correlate with protected attributes, and through feedback loops in which a deployed model shapes the very data it is later retrained on.

The consequences are well documented. The Gender Shades study found commercial face analysis error rates over thirty times higher for darker-skinned women than lighter-skinned men; Amazon abandoned a CV-screening tool that penalised the word "women's"; the COMPAS recidivism debate exposed that plausible fairness criteria (calibration versus equalised error rates) are mathematically incompatible; and clinical risk tools in [[Healthcare AI]] have under-referred Black patients because healthcare cost was used as a proxy for need. Large language and image models add representational harms — stereotyped associations and skewed defaults — that surface at generation time in [[Content Moderation]] and creative applications alike.

Mitigation spans the lifecycle rather than any single fix: careful problem framing and dataset documentation (datasheets, model cards), balanced or reweighted data — sometimes augmented with [[Synthetic Data]], which can itself import the generator's biases — in-training constraints on fairness metrics, post-hoc threshold adjustment, and continuous disaggregated evaluation in production. Because "fairness" admits multiple incompatible formalisations, choosing which disparity to minimise is a governance decision, not a purely technical one, which is why bias sits at the centre of [[Responsible AI]] practice and of regulation: the EU AI Act requires bias examination for high-risk systems, New York City's Local Law 144 mandates bias audits of hiring tools, and the UK's Equality Act 2010 applies to algorithmic decisions just as to human ones.

## Current Landscape

- **Measurement**: disaggregated evaluation with metrics such as demographic parity, equalised odds, and calibration within groups; toolkits include IBM AIF360, Fairlearn, and Google's Fairness Indicators; LLM-specific benchmarks (BBQ, StereoSet, HolisticBias) probe representational bias.
- **Regulation**: the EU AI Act (in force since 1 August 2024) applied its prohibited-practice rules from 2 February 2025 and its GPAI-model obligations from 2 August 2025, with the Commission's GPAI enforcement powers following on 2 August 2026; the 2026 "digital omnibus" agreement deferred the high-risk obligations that mandate bias examination — to 2 December 2027 for standalone Annex III systems (recruitment, credit scoring, biometrics) and 2 August 2028 for AI embedded in regulated products — while extending the legal basis for processing special-category data for bias detection and correction to all AI systems; the NIST AI Risk Management Framework and ISO/IEC 42001 embed bias controls in organisational governance; UK regulators (ICO, EHRC, FCA) apply existing discrimination and data-protection law to AI systems.
- **Practice**: model cards and datasheets are standard release artefacts at major labs; red-teaming for biased behaviour is part of frontier-model evaluation; sector deployments in credit, insurance and employment increasingly require documented bias audits before go-live.
- **Open problems**: intersectional groups too small for reliable measurement, bias amplification during fine-tuning and RLHF, unmeasured proxy discrimination, and the transfer of benchmark results to real deployment contexts.
- **Enforcement in practice**: New York City's Department of Consumer and Worker Protection shifted from complaint-driven to proactive enforcement of Local Law 144 in January 2026, after analyses found only around 5% of NYC employers using automated hiring tools had published the required bias-audit summaries.

  **Sources**:

- https://artificialintelligenceact.eu/enforcement-of-chapter-v-under-the-eu-ai-act/
- https://ai-act-service-desk.ec.europa.eu/en/faq
- https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
- https://www.nyc144euaiact.com/learn/timeline

