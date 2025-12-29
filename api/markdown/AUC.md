- ### OntologyBlock
  id:: auc-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0113
	- preferred-term:: AUC
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:AUC
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships
id:: auc-relationships
		- is-subclass-of:: [[QualityMetric]]

## Mathematical Definition

$$\text{AUC} = \int_0^1 \text{TPR}(t) \,d(\text{FPR}(t))$$

Where TPR (True Positive Rate) and FPR (False Positive Rate) are functions of the classification threshold t.

**Probabilistic Interpretation:**
$$\text{AUC} = P(\text{score}(x^+) > \text{score}(x^-))$$

Where x⁺ is a randomly selected positive instance and x⁻ is a randomly selected negative instance.

**Equivalent to Wilcoxon-Mann-Whitney U statistic** normalized to [0,1] range.

## Context and Significance

AUC provides a single number summarising classifier quality across all possible classification thresholds, answering "How well does this model separate positive and negative classes?" without requiring threshold selection. This threshold independence makes AUC valuable for model comparison and selection, particularly when deployment thresholds are uncertain or will vary across different use cases.

An AUC of 0.7 means that 70% of the time, the model assigns a higher score to a randomly selected positive instance than to a randomly selected negative instance. This probabilistic interpretation makes AUC meaningful beyond just the geometric area under a curve.

However, AUC has limitations: it treats all errors equally (ignoring asymmetric costs), can be overly optimistic for imbalanced datasets, and provides no information about performance at any specific threshold, which may obscure important trade-offs for practical deployment.

## Key Characteristics

- **Threshold-independent**: Single metric across all thresholds
- **Probabilistic interpretation**: Measures ranking quality
- **Range [0.5, 1.0]**: 0.5 = random, 1.0 = perfect (values <0.5 indicate inverted predictions)
- **Intuitive**: Higher is better, easy to communicate
- **Model comparison**: Enables comparing classifiers with single number
- **Imbalance-insensitive** (partially): Less affected by class balance than accuracy, but can still be misleading

## Interpretation Guidelines

**AUC Value Ranges (Informal Guidelines):**
- **0.90 - 1.00**: Excellent discrimination
- **0.80 - 0.90**: Good discrimination
- **0.70 - 0.80**: Acceptable discrimination
- **0.60 - 0.70**: Poor discrimination
- **0.50 - 0.60**: Fail (barely better than random)
- **< 0.50**: Worse than random (predictions inverted)

**Context Matters:** Acceptable AUC varies by:
- Application difficulty (some problems inherently harder)
- Class balance (imbalanced data may yield inflated AUC)
- Business requirements (high-stakes decisions require higher AUC)
- Alternative model availability (AUC 0.75 good if best achievable is 0.78)

## Relationships

- **Summarises**: ROC Curve in single metric
- **Component of**: Model Performance assessment
- **Alternative to**: Precision-Recall AUC (better for imbalanced data)
- **Equivalent to**: Wilcoxon-Mann-Whitney U statistic (normalised)
- **Measures**: Classifier's ranking ability
- **Used in**: Model Evaluation, model comparison, model selection
- **Threshold-independent**: Unlike precision, recall, F1 at specific threshold
- **Reported in**: Model Cards, performance dashboards, academic papers

## Examples and Applications

1. **Medical Diagnosis**: Cancer screening model achieves AUC 0.92—means 92% probability the model scores actual cancer patient higher than healthy patient, indicating excellent diagnostic discrimination
2. **Credit Scoring**: Loan default prediction with AUC 0.78—acceptable performance, though indicates 22% of time model ranks defaulter below non-defaulter, suggesting room for improvement
3. **Fraud Detection**: Fraud model with AUC 0.88 on balanced test set but 0.65 on production data (highly imbalanced)—reveals AUC can be misleading when data distribution shifts, prompting examination of precision-recall metrics
4. **Model Comparison**: Comparing three classification algorithms: Model A (AUC 0.85), Model B (AUC 0.82), Model C (AUC 0.87)—Model C selected for deployment based on highest AUC, subject to validation on other metrics

## Calculation and Implementation

**Standard Calculation:**
```python
from sklearn.metrics import roc_auc_score

auc = roc_auc_score(y_true, y_scores)
print(f'AUC: {auc:.3f}')
```

**With Confidence Intervals:**
```python
from sklearn.metrics import roc_auc_score
from scipy import stats
import numpy as np

# Bootstrap confidence interval
n_bootstraps = 1000
rng = np.random.RandomState(42)
auc_scores = []

for i in range(n_bootstraps):
    indices = rng.randint(0, len(y_true), len(y_true))
    auc_scores.append(roc_auc_score(y_true[indices], y_scores[indices]))

auc_scores = np.array(auc_scores)
print(f'AUC: {np.mean(auc_scores):.3f} (95% CI: [{np.percentile(auc_scores, 2.5):.3f}, {np.percentile(auc_scores, 97.5):.3f}])')
```

**Multi-class AUC:**
```python
# One-vs-Rest (OvR) multi-class AUC
auc_ovr = roc_auc_score(y_true, y_scores, multi_class='ovr', average='macro')

# One-vs-One (OvO) multi-class AUC
auc_ovo = roc_auc_score(y_true, y_scores, multi_class='ovo', average='macro')
```

## Implementation Considerations

**Best Practices:**
- Report AUC with confidence intervals (especially for small datasets)
- Compare AUC to baseline (e.g., prior probability for imbalanced data)
- Use Precision-Recall AUC for highly imbalanced datasets
- Disaggregate AUC across demographic groups for fairness assessment
- Examine ROC curve, not just AUC, to understand trade-offs
- Validate AUC on out-of-sample data to avoid overfitting
- Monitor AUC trends over time to detect model degradation

**When AUC May Be Misleading:**
- **Highly imbalanced data**: Can be optimistic; use PR-AUC instead
- **Asymmetric costs**: AUC treats all errors equally; use cost-sensitive metrics
- **Specific operating point**: AUC says nothing about performance at chosen threshold
- **Multi-modal score distributions**: AUC may not reflect complex trade-off structures

**Common Pitfalls:**
- Relying solely on AUC without examining precision, recall, or ROC curve
- Comparing AUC across datasets with different class balance
- Not reporting confidence intervals (AUC has sampling variability)
- Using AUC for multi-class without understanding aggregation method
- Ignoring that high AUC doesn't guarantee good performance at deployment threshold

## Variants

**PR-AUC (Precision-Recall AUC)**: Area under Precision-Recall curve
- More appropriate for imbalanced datasets
- Focuses on positive class performance
- Range not standardised to [0,1]

**Partial AUC**: Area under specific region of ROC curve
- Focuses on clinically/operationally relevant FPR range
- Used when only certain operating points are acceptable

**Multi-class AUC Aggregations:**
- **Macro-average**: Average of per-class OvR AUCs (treats all classes equally)
- **Weighted-average**: Class-frequency-weighted average of OvR AUCs
- **OvO average**: Average of all pairwise class AUCs

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- AUC as threshold-independent performance metric
- Discriminative ability quality characteristic

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: AUC as appropriate threshold-independent metric
- MEASURE-2.7: AUC assessed across different deployment contexts
- Supports Valid and Reliable trustworthiness characteristic

## Statistical Considerations

**Sample Size Requirements:**
- Small samples yield unreliable AUC estimates
- Confidence intervals essential for sample sizes < 1000
- Larger positive class sample size needed for reliable estimates

**Hypothesis Testing:**
- DeLong test: Compare AUCs from two models on same data
- Permutation test: Test if AUC significantly different from 0.5

**Relationship to Other Statistics:**
- Equivalent to Wilcoxon-Mann-Whitney U statistic (normalised)
- Related to Gini coefficient: Gini = 2×AUC - 1
- Connected to concordance index (C-statistic) in survival analysis

## Related Terms

- [[Model Performance]]: AUC as summary performance metric
- [[ROC Curve]]: AUC measures area under this curve
- [[True Positive Rate]]: Component of ROC curve (y-axis)
- [[False Positive Rate]]: Component of ROC curve (x-axis)
- [[Precision-Recall Curve]]: Alternative visualization with own AUC
- [[Model Comparison]]: AUC enables model comparison
- [[Threshold Selection]]: AUC independent of threshold choice
- [[Classification]]: AUC specifically for classification tasks
- [[Ranking Metric]]: AUC measures ranking quality

## References

1. Fawcett, T., *An Introduction to ROC Analysis*, Pattern Recognition Letters (2006)
2. Hand, D.J., *Measuring Classifier Performance: A Coherent Alternative to the Area Under the ROC Curve*, Machine Learning (2009)
3. Bradley, A.P., *The Use of the Area Under the ROC Curve in the Evaluation of Machine Learning Algorithms*, Pattern Recognition (1997)
4. Provost, F. & Fawcett, T., *Robust Classification for Imprecise Environments*, Machine Learning (2001)

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :AUC))
(SubClassOf :AUC :PerformanceMetric)
(SubClassOf :AUC :ClassificationMetric)
(SubClassOf :AUC :ThresholdIndependentMetric)

;; Synonyms
(Declaration (Class :ROCAUC))
(Declaration (Class :AUROC))
(Declaration (Class :AreaUnderROCCurve))
(EquivalentClasses :AUC :ROCAUC :AUROC :AreaUnderROCCurve)

;; Core relationships
(SubClassOf :AUC
  (ObjectSomeValuesFrom :measuresPerformanceOf :MachineLearningModel))
(SubClassOf :AUC
  (ObjectSomeValuesFrom :summarises :ROCCurve))
(SubClassOf :AUC
  (ObjectSomeValuesFrom :measuresDiscriminativeAbility :BinaryClassifier))

;; Curve relationship
(Declaration (ObjectProperty :areaUnderCurve))
(SubClassOf :AUC
  (ObjectSomeValuesFrom :areaUnderCurve :ROCCurve))

;; Metric properties
(Declaration (DataProperty :hasAUCValue))
(DataPropertyDomain :hasAUCValue :AUC)
(DataPropertyRange :hasAUCValue xsd:float)
(FunctionalDataProperty :hasAUCValue)

;; Value constraints and interpretation
(SubClassOf :AUC
  (DataPropertyRestriction
    :hasAUCValue
    (MinInclusiveDataRange 0.0^^xsd:float)
    (MaxInclusiveDataRange 1.0^^xsd:float)))

(Declaration (DataProperty :hasPerformanceLevel))
(DataPropertyDomain :hasPerformanceLevel :AUC)
(DataPropertyRange :hasPerformanceLevel xsd:string)
(AnnotationAssertion rdfs:comment :hasPerformanceLevel
  "Performance interpretation: excellent (0.90-1.00), good (0.80-0.90), acceptable (0.70-0.80), poor (0.60-0.70), fail (0.50-0.60)"@en)

;; Probabilistic interpretation
(Declaration (Class :RankingMetric))
(SubClassOf :AUC :RankingMetric)
(AnnotationAssertion rdfs:comment :AUC
  "Probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance"@en)

;; Statistical equivalence
(Declaration (Class :WilcoxonMannWhitneyStatistic))
(Declaration (ObjectProperty :equivalentTo))
(SubClassOf :AUC
  (ObjectSomeValuesFrom :equivalentTo :WilcoxonMannWhitneyStatistic))

;; Variants
(Declaration (Class :PRAUC))
(Declaration (Class :PartialAUC))
(SubClassOf :PRAUC :AUC)
(SubClassOf :PartialAUC :AUC)

(AnnotationAssertion rdfs:comment :PRAUC
  "Precision-Recall AUC, more appropriate for imbalanced datasets"@en)

;; Multi-class extensions
(Declaration (Class :MultiClassAUC))
(Declaration (Class :OneVsRestAUC))
(Declaration (Class :OneVsOneAUC))
(SubClassOf :MultiClassAUC :AUC)
(SubClassOf :OneVsRestAUC :MultiClassAUC)
(SubClassOf :OneVsOneAUC :MultiClassAUC)

;; Threshold independence
(Declaration (Class :ThresholdIndependentMetric))
(SubClassOf :AUC :ThresholdIndependentMetric)

;; Annotations
(AnnotationAssertion rdfs:label :AUC "AUC"@en)
(AnnotationAssertion rdfs:label :AUC "Area Under the Curve"@en)
(AnnotationAssertion rdfs:label :AUC "ROC-AUC"@en)
(AnnotationAssertion rdfs:label :AUC "AUROC"@en)
(AnnotationAssertion rdfs:comment :AUC
  "Area Under the Receiver Operating Characteristic Curve, a threshold-independent performance metric representing the probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance."@en)
(AnnotationAssertion dcterms:source :AUC <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :AUC "AI-0113"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :AUC
  "∫₀¹ TPR(t) d(FPR(t))"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :AUC :ISO25059)
(AnnotationAssertion :alignedWith :AUC :NISTAIRFM_MEASURE22)
```

</details>

## See Also

- [[Model Performance]]
- [[ROC Curve]]
- [[True Positive Rate]]
- [[False Positive Rate]]
- [[Precision-Recall Curve]]
- [[Model Comparison]]
- [[Threshold Selection]]
- [[Classification]]
- [[Ranking Metric]]
