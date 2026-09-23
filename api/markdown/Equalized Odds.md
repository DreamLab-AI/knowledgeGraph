
A group fairness criterion, introduced by Hardt, Price, and Srebro (2016), requiring that a classifier's true positive rate and false positive rate be equal across protected groups — the prediction must be conditionally independent of group membership given the true outcome; unlike demographic parity it permits base rates to differ between groups, but it conflicts with calibration when base rates differ, and is typically approached by threshold adjustment or constrained training rather than achieved exactly.

- ### Semantic Classification

- ### Content

  ## Definition

  **Equalized odds** is one of the central group [[Fairness Metrics]] for classifiers. Formally, a predictor Ŷ satisfies equalized odds with respect to a protected attribute A (such as race or sex) and true outcome Y when Ŷ ⊥ A | Y — that is, P(Ŷ=1 | Y=y, A=a) is the same for every group a, for both y=1 and y=0. In operational terms, every group must experience the same true positive rate *and* the same false positive rate: qualified candidates are found at equal rates, and unqualified ones are wrongly flagged at equal rates.

  The criterion was proposed by Hardt, Price, and Srebro in "Equality of Opportunity in Supervised Learning" (NeurIPS 2016), partly in response to the COMPAS recidivism controversy, where the disputed disparity was precisely unequal false positive rates between Black and white defendants. Its weaker sibling, *equality of opportunity*, constrains only the true positive rate. Compared with demographic parity — which forces equal selection rates regardless of the underlying distribution — equalized odds respects differing base rates, so a perfectly accurate classifier always satisfies it, which many regard as a more defensible notion of non-discrimination.

  Its principal limitation is the impossibility landscape mapped by Kleinberg, Mullainathan, and Raghavan and by Chouldechova: when base rates differ across groups, no non-trivial classifier can simultaneously satisfy equalized odds and calibration within groups. Enforcing the criterion therefore involves explicit trade-offs, usually surfaced as group-specific decision thresholds or accepted accuracy loss, and the choice among competing criteria is ultimately a policy judgement, not a mathematical one.

  ## Technical Details

  - **Post-processing**: the original Hardt et al. method derives (possibly randomised) group-specific thresholds from ROC curves; the constraint is satisfiable wherever the groups' ROC curves intersect, at some cost to overall accuracy.
  - **In-processing**: constrained optimisation and reductions approaches (e.g. Agarwal et al.'s exponentiated-gradient method) train models subject to bounded equalized-odds violation, trading accuracy against fairness continuously.
  - **Measurement**: reported in practice as TPR and FPR gaps or ratios between groups; toolkits such as Fairlearn and AIF360 compute these alongside demographic parity and calibration diagnostics, and they are among the [[Bias Mitigation Techniques]] surfaced in model cards.
  - **Caveats**: satisfying equalized odds on historical labels inherits any bias in those labels; intersectional subgroups can remain unequal even when top-level groups match; and randomised threshold policies raise their own procedural-fairness concerns.

  ## Current Landscape

  - **From academic to binding**: with the EU AI Act's high-risk obligations reaching enforcement by August 2026, fairness metrics such as equalized odds have shifted from research interest to pre-deployment compliance gates. High-risk systems (credit scoring, hiring, benefits eligibility under Annex III) must document bias evaluation and undergo conformity assessment before deployment.
  - **Regulatory citation of Hardt et al.**: the European Data Protection Board's January 2025 bias-evaluation guidance explicitly names equalized odds (Hardt et al., 2016) as a thresholding/post-processing mitigation optimising the true-positive- and false-positive-rate balance across subgroups.
  - **AI Act mechanics**: Article 10(2)(f)-(g) requires examining training/validation/test data for biases and applying mitigation measures, while Article 10(5) permits processing special-category data strictly for bias monitoring, detection and correction in high-risk systems — the legal basis on which equalized-odds-style audits run.
  - **Lifecycle monitoring**: enterprise guidance (2026) treats equalized-odds violation as one of a small set of metrics — alongside demographic-parity gap and per-subgroup calibration — that must be computed, recorded and continuously monitored in production with thresholds that trigger review, not measured once at launch.

  **Sources**:
  - https://www.edpb.europa.eu/system/files/2025-01/d1-ai-bias-evaluation_en.pdf

