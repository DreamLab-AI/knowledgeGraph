Human evaluation is the assessment of machine-learning system outputs by human judges against quality criteria such as relevance, fluency, helpfulness, factuality, or preference between alternatives. It complements automatic metrics by capturing nuanced, subjective, and context-dependent judgements that proxy measures miss, and is central to evaluating generative and conversational models. It contrasts with automatic evaluation in cost, latency, and the need to manage rater agreement and bias.

### Overview

- Human raters score, rank, or express pairwise preferences over system outputs, often via [[Crowdsourcing]] or expert panels.
- Protocols control for rater bias, fatigue, and ambiguity, and aggregate judgements with [[Inter-Annotator Agreement]] measures.
- It is the gold standard for evaluating generative and conversational systems where reference-based metrics correlate poorly with quality.

### Key aspects

- Direct assessment scales or pairwise preference comparisons.
- Clear rubrics defining each quality dimension.
- Agreement and reliability tracking via [[Inter-Annotator Agreement]].
- Higher cost and latency than automatic [[Evaluation Metric]]s.

### Mechanisms

- Task design, rubric authoring, and rater calibration.
- Sampling outputs and randomising presentation to limit bias.
- Collecting absolute ratings or A/B preferences.
- Aggregating with majority vote, Elo, or Bradley-Terry models.

### Applications

- Comparing large language models in [[Model Comparison]] leaderboards.
- Generating preference data for [[Reinforcement Learning from Human Feedback]].
- Validating safety, helpfulness, and factuality of generative output.
- Auditing [[Benchmark]] results where automatic metrics are unreliable.

### Provenance

