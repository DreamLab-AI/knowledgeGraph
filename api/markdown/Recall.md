- ### OntologyBlock
  id:: recall-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0109
	- preferred-term:: Recall
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Recall
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships
id:: recall-relationships
		- is-subclass-of:: [[Metaverse]]

## Mathematical Definition

$$\text{Recall} = \frac{TP}{TP + FN} = \frac{TP}{\text{All Actual Positives}}$$

Where:
- **TP** (True Positives): Correctly identified positive instances
- **FN** (False Negatives): Missed positive instances (Type II errors)

Also known as **Sensitivity**, **True Positive Rate (TPR)**, or **Hit Rate**.

## Context and Significance

Recall answers the question: "Out of all actual positive cases, how many did the model find?" This metric is essential in scenarios where missing positive cases is particularly costly or dangerous—such as disease screening (missing cancer cases), security threat detection (missing threats), or quality control (missing defects). High recall ensures comprehensive detection of positive instances, though it says nothing about how many negative instances are incorrectly flagged (that's related to precision and specificity).

Recall trades off with precision: achieving 100% recall is trivial (predict every instance as positive) but results in terrible precision. The challenge lies in maintaining high recall whilst managing false positive rates, with application-specific requirements determining the appropriate balance.

## Key Characteristics

- **False negative focus**: Emphasises minimising missed positive cases
- **Completeness metric**: Measures thoroughness of positive case detection
- **Trade-off with precision**: Improving recall often reduces precision
- **Threshold-sensitive**: For probabilistic classifiers, varies with classification threshold
- **Class-specific**: Typically calculated per class in multi-class settings
- **Imbalance-affected**: Can be high in imbalanced datasets by predicting majority class

## Appropriate Use Cases

**When Recall is Critical:**
- Medical disease screening: Catching all potential cases paramount
- Security threat detection: Missing threats has severe consequences
- Fraud detection (certain contexts): Identifying all fraud attempts critical
- Manufacturing defect detection: Missing defects compromises safety
- Search and rescue operations: Finding all victims essential
- Legal compliance: Identifying all relevant documents or transactions

**When to Prioritise Precision Instead:**
- Spam filtering: Blocking legitimate emails more harmful than missing spam
- Content moderation (certain contexts): Over-removal damages user experience
- Quality control (certain contexts): False rejections costly

**When to Balance Both:**
- Use F1 score or other balanced metrics
- Adjust threshold to application-specific precision-recall trade-off

## Relationships

- **Component of**: Model Performance assessment
- **Calculated from**: Confusion Matrix (TP and FN)
- **Synonym for**: Sensitivity, True Positive Rate (TPR)
- **Complement of**: False Negative Rate (FNR = 1 - Recall)
- **Trades off with**: Precision
- **Harmonised in**: F1 Score (harmonic mean of precision and recall)
- **Visualised via**: Precision-Recall Curve, ROC Curve (recall as y-axis)
- **Paired with**: Specificity (for medical/diagnostic contexts)
- **Used in**: Model Evaluation, threshold selection, performance monitoring
- **Reported in**: Model Cards, clinical validation reports, audit documentation

## Examples and Applications

1. **Cancer Screening Test**: Recall of 95% means test identifies 95 out of 100 actual cancer cases, missing 5—high recall critical for early detection despite false positives requiring follow-up
2. **Airport Security Screening**: Threat detection with 99.9% recall catches 999 out of 1,000 actual threats—extremely high recall necessary despite inconvenience of false alarms (low precision acceptable)
3. **Email Spam Filter**: Spam detection with 85% recall catches 85 out of 100 spam emails, allowing 15 through—lower recall acceptable as users can delete spam, but high precision critical to avoid filtering legitimate mail
4. **Manufacturing Defect Detection**: Quality control with 92% recall identifies 92 out of 100 defective products—remaining 8% reach customers, requiring balance with inspection costs (precision)

## Calculation and Implementation

**Standard Calculation:**
```python
from sklearn.metrics import recall_score

recall = recall_score(y_true, y_pred)
# For multi-class: specify average parameter
# 'micro', 'macro', 'weighted', or None for per-class
```

**Manual Calculation:**
```python
true_positives = sum((y_true == 1) & (y_pred == 1))
false_negatives = sum((y_true == 1) & (y_pred == 0))
recall = true_positives / (true_positives + false_negatives)
```

**Threshold Optimization:**
For probabilistic classifiers, recall varies with classification threshold:
```python
from sklearn.metrics import precision_recall_curve

precisions, recalls, thresholds = precision_recall_curve(y_true, y_scores)
# Select threshold based on minimum recall requirement
```

## Implementation Considerations

**Best Practices:**
- Report recall alongside precision and F1 score
- Calculate per-class recall in multi-class problems
- Use precision-recall curves to select appropriate thresholds
- Disaggregate recall across demographic groups for fairness assessment
- Establish minimum acceptable recall based on false negative costs
- Monitor recall trends over time to detect degradation
- In medical contexts, report sensitivity (recall) with specificity

**Common Pitfalls:**
- Achieving high recall by predicting everything as positive (ignoring precision)
- Not accounting for class imbalance when interpreting recall
- Using micro-averaging in multi-class settings, obscuring per-class performance
- Failing to adjust thresholds for deployment context
- Ignoring recall variations across demographic subgroups (fairness issue)

**Precision-Recall Trade-off Management:**
- Use precision-recall curve to visualise trade-off across thresholds
- Set threshold based on relative costs of false positives vs. false negatives
- Consider cascaded classifiers: high-recall initial filter, high-precision refinement
- Employ cost-sensitive learning to optimise application-specific objectives
- Use calibration to improve reliability of probability estimates for threshold setting

## Variants and Related Metrics

**Micro-averaged Recall** (multi-class): Aggregate TP and FN across classes
$$\text{Recall}_{\text{micro}} = \frac{\sum_i TP_i}{\sum_i (TP_i + FN_i)}$$

**Macro-averaged Recall** (multi-class): Average of per-class recalls
$$\text{Recall}_{\text{macro}} = \frac{1}{n}\sum_i \text{Recall}_i$$

**Weighted Recall**: Recall averaged across classes weighted by support

**Recall@K**: Proportion of relevant items in top K recommendations (ranking tasks)

**Sensitivity Analysis**: In medical contexts, often reported as sensitivity with confidence intervals

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- Recall as metric for functional completeness
- Coverage of actual positive cases

**ISO/IEC 25024** (Data Quality Metrics):
- Recall in context of output completeness measurement

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: Appropriate metrics including recall selected based on application risks
- MEASURE-2.3: Recall measured across different contexts and subgroups
- Recall critical for Safety (detecting hazards) and Reliability trustworthiness characteristics

## Medical and Diagnostic Context

In medical and diagnostic testing, recall (sensitivity) is conventionally reported alongside **specificity** (true negative rate):

**Sensitivity (Recall)**: Ability to correctly identify those with condition
**Specificity**: Ability to correctly identify those without condition
$$\text{Specificity} = \frac{TN}{TN + FP}$$

Together, sensitivity and specificity provide comprehensive picture of diagnostic test performance.

## Related Terms

- [[Model Performance]]: Broader concept including recall
- [[Precision]]: Complementary metric for prediction reliability
- [[F1 Score]]: Harmonic mean balancing precision and recall
- [[Accuracy]]: Overall correctness metric
- [[Confusion Matrix]]: Source of recall calculation
- [[Precision-Recall Curve]]: Visualisation of precision-recall trade-off
- [[ROC Curve]]: Visualisation using recall (TPR) and FPR
- [[Sensitivity]]: Synonym for recall
- [[True Positive Rate]]: Synonym for recall
- [[False Negative]]: Missed positives affecting recall

## References

1. Powers, D.M.W., *Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation* (2011)
2. Davis, J. & Goadrich, M., *The Relationship Between Precision-Recall and ROC Curves*, ICML (2006)
3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*
4. Saito, T. & Rehmsmeier, M., *The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets*, PLOS ONE (2015)

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :Recall))
(SubClassOf :Recall :PerformanceMetric)
(SubClassOf :Recall :ClassificationMetric)

;; Synonyms
(Declaration (Class :Sensitivity))
(Declaration (Class :TruePositiveRate))
(Declaration (Class :HitRate))
(EquivalentClasses :Recall :Sensitivity :TruePositiveRate :HitRate)

;; Core relationships
(SubClassOf :Recall
  (ObjectSomeValuesFrom :measuresPerformanceOf :MachineLearningModel))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :calculatedFrom :ConfusionMatrix))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :tradeOffWith :Precision))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :harmonisedIn :F1Score))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :visualisedVia :ROCCurve))

;; Metric properties
(Declaration (DataProperty :hasRecallValue))
(DataPropertyDomain :hasRecallValue :Recall)
(DataPropertyRange :hasRecallValue xsd:float)
(FunctionalDataProperty :hasRecallValue)

(Declaration (DataProperty :truePositiveCount))
(DataPropertyDomain :truePositiveCount :Recall)
(DataPropertyRange :truePositiveCount xsd:integer)

(Declaration (DataProperty :falseNegativeCount))
(DataPropertyDomain :falseNegativeCount :Recall)
(DataPropertyRange :falseNegativeCount xsd:integer)

;; Complement relationship
(Declaration (Class :FalseNegativeRate))
(Declaration (ObjectProperty :complementOf))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :complementOf :FalseNegativeRate))

;; Value constraints
(SubClassOf :Recall
  (DataPropertyRestriction
    :hasRecallValue
    (MinInclusiveDataRange 0.0^^xsd:float)
    (MaxInclusiveDataRange 1.0^^xsd:float)))

;; Use case focus
(Declaration (Class :FalseNegativeMinimisation))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :optimisesFor :FalseNegativeMinimisation))

;; Critical applications
(Declaration (Class :MedicalDiagnostics))
(Declaration (Class :SecurityThreatDetection))
(Declaration (Class :DefectDetection))
(Declaration (ObjectProperty :criticalFor))

(SubClassOf :Recall
  (ObjectUnionValuesFrom :criticalFor
    :MedicalDiagnostics :SecurityThreatDetection :DefectDetection))

;; Medical context pairing
(Declaration (Class :Specificity))
(Declaration (ObjectProperty :pairedWith))
(SubClassOf :Recall
  (ObjectSomeValuesFrom :pairedWith :Specificity))

;; Annotations
(AnnotationAssertion rdfs:label :Recall "Recall"@en)
(AnnotationAssertion rdfs:label :Recall "Sensitivity"@en)
(AnnotationAssertion rdfs:label :Recall "True Positive Rate"@en)
(AnnotationAssertion rdfs:comment :Recall
  "A classification performance metric representing the proportion of actual positive instances that an artificial intelligence model correctly identifies."@en)
(AnnotationAssertion dcterms:source :Recall <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :Recall "AI-0109"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :Recall
  "TP / (TP + FN)"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :Recall :ISO25059)
(AnnotationAssertion :alignedWith :Recall :ISO25024)
(AnnotationAssertion :alignedWith :Recall :NISTAIRFM_MEASURE22)
```

</details>

## See Also

- [[Model Performance]]
- [[Precision]]
- [[F1 Score]]
- [[Accuracy]]
- [[Confusion Matrix]]
- [[Precision-Recall Curve]]
- [[ROC Curve]]
- [[Sensitivity]]
- [[Specificity]]
- [[True Positive Rate]]
	- maturity:: draft
	- owl:class:: mv:Recall
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: recall-relationships
		- is-subclass-of:: [[Metaverse]]
