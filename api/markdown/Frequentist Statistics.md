The school of statistical inference that defines probability as long-run relative frequency over repeated sampling, treats parameters as fixed unknowns rather than random variables, and evaluates procedures — estimators, hypothesis tests, confidence intervals — by their repeated-sampling operating characteristics such as bias, error rates, and coverage, in explicit contrast to Bayesian inference over posterior beliefs.

### Semantic Classification

### Content

## Definition

**Frequentist statistics** is the interpretation of probability and inference that dominated twentieth-century [[Statistics]]. Probability is defined as the limiting relative frequency of an event over hypothetical repetitions of an experiment; consequently, unknown parameters are fixed constants — not random variables — and probability statements attach only to *procedures* and *data*, never to hypotheses. A 95% confidence interval does not mean the parameter lies inside with probability 0.95; it means the interval-generating procedure captures the true value in 95% of repeated samples. This procedural framing is the deepest point of contrast with [[Bayesian Inference]], which conditions on the observed data and expresses parameter uncertainty as a posterior distribution, and with [[Bayesian Decision Theory]], which optimises expected loss under that posterior.

The framework was assembled in the early twentieth century from two partially incompatible traditions: Fisher's significance testing, maximum likelihood, and sufficiency; and Neyman–Pearson decision-theoretic testing with explicit Type I/II error rates, power, and confidence intervals. The textbook synthesis — null [[Hypothesis Testing]] with p-values at α = 0.05, unbiased or maximum-likelihood estimation, and coverage-guaranteed intervals — powers the default inferential toolkit of clinical trials, A/B testing, particle physics (the 5σ discovery convention), econometrics, and regulatory science.

Its virtues are objectivity of a specific kind — no prior must be chosen, and error-rate guarantees hold regardless of anyone's beliefs — plus tractable large-sample theory (laws of large numbers, central limit theorem, asymptotic normality of the MLE) grounded in [[Probability Theory]]. Its pathologies are equally documented: widespread misreading of p-values as posterior probabilities, dependence of inference on unobserved sampling intentions (the stopping-rule problem), and the replication crisis fuelled by p-hacking and dichotomised significance. Modern practice within [[Statistical Inference]] is increasingly pragmatic, choosing frequentist or Bayesian machinery per problem and often evaluating Bayesian methods by their frequentist operating characteristics ("calibrated Bayes").

## Technical Details

Core apparatus:

- **Estimation**: maximum likelihood and M-estimation; properties assessed via bias, variance, consistency, efficiency (Cramér–Rao bound), and asymptotic normality; the bootstrap provides simulation-based standard errors and intervals when analytic theory is awkward.
- **Testing**: Neyman–Pearson lemma for optimal simple-vs-simple tests; likelihood-ratio, Wald, and score tests; multiple-comparison control via familywise error (Bonferroni, Holm) or false discovery rate (Benjamini–Hochberg).
- **Interval estimation**: exact, asymptotic, and bootstrap confidence intervals, judged by coverage probability.
- **Machine-learning connections**: statistical learning theory's generalisation bounds are frequentist in character (guarantees over repeated draws of training sets), and [[Conformal Prediction]] is a distinctly frequentist contribution to modern uncertainty quantification — distribution-free prediction sets with guaranteed finite-sample marginal coverage, requiring only exchangeability, now widely used to wrap black-box models including neural networks.

  ## Current Landscape

- **Conformal prediction as the growth frontier**: a 2024-2025 survey ("Conformal Prediction: A Data Perspective", arXiv:2410.06494, revised March 2025) describes CP as, at present, the only uncertainty-quantification framework that genuinely deserves the label *distribution-free*, offering finite-sample coverage regardless of the base model — a purely frequentist (repeated-sampling / exchangeability) guarantee now spreading into large-scale and language-model applications.
- **Beyond exchangeability**: 2025 research (e.g. NeurIPS 2025 work on conformal policy evaluation in reinforcement learning) extends CP to temporally dependent, distribution-shifted settings via weighting and time-aware calibration, precisely because the marginal-coverage guarantee otherwise breaks when exchangeability fails.
- **Frequentist-Bayesian pragmatism**: modern practice increasingly evaluates methods — including Bayesian ones — by their frequentist operating characteristics ("calibrated Bayes"), choosing machinery per problem rather than by philosophical allegiance.
- **Reproducibility pressure**: the replication crisis continues to drive scrutiny of p-value misuse, pre-registration, and error-rate control, keeping frequentist evaluation (Type I/II error, coverage, FDR) central to regulatory and scientific standards.

  **Sources**:

- https://arxiv.org/abs/2410.06494
- https://papers.nips.cc/paper_files/paper/2025/file/ce37ba67dd12c4e11ca735da9d60295f-Paper-Conference.pdf

