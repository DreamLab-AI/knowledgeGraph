- ### OntologyBlock
  id:: precision-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0881
	- preferred-term:: Precision
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Precision
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships
id:: precision-relationships
		- is-subclass-of:: [[ArtificialIntelligence]]

## Mathematical Definition

$$\text{Precision} = \frac{TP}{TP + FP} = \frac{TP}{\text{All Positive Predictions}}$$

Where:
- **TP** (True Positives): Correct positive predictions
- **FP** (False Positives): Incorrect positive predictions (Type I errors)

Also known as **Positive Predictive Value (PPV)** in medical and statistical contexts.

## Context and Significance

Precision answers the question: "When the model predicts positive, how often is it correct?" This metric is crucial in scenarios where false positives carry significant costs—such as spam filtering (legitimate emails incorrectly flagged), fraud detection (legitimate transactions blocked), or medical testing (healthy patients undergoing unnecessary procedures). High precision indicates that positive predictions are trustworthy, though it says nothing about how many actual positives the model identifies (that's recall).

Precision and recall exist in tension: increasing precision typically decreases recall and vice versa. This fundamental trade-off requires careful balancing based on application requirements, with the F1 score providing one approach to harmonising both metrics.

## Key Characteristics

- **False positive focus**: Emphasises minimising incorrect positive predictions
- **Prediction reliability**: Measures trustworthiness of positive predictions
- **Trade-off with recall**: Improving precision often reduces recall
- **Threshold-sensitive**: For probabilistic classifiers, varies with classification threshold
- **Class-specific**: Typically calculated per class in multi-class settings
- **Imbalance-robust**: Less affected by class imbalance than accuracy

## Appropriate Use Cases

**When Precision is Critical:**
- Spam filtering: Minimise legitimate emails incorrectly marked as spam
- Fraud detection (certain contexts): Avoid blocking legitimate transactions
- Medical screening (certain contexts): Reduce false alarm rate for expensive follow-up tests
- Content moderation: Minimise incorrectly removed legitimate content
- Quality control: Reduce false rejections of acceptable products
- Legal discovery: Minimise irrelevant documents in review sets

**When to Prioritise Recall Instead:**
- Disease screening: Catching all potential cases more important than false alarms
- Security threat detection: Missing threats more costly than false alarms
- Manufacturing defect detection: Catching all defects critical for safety

**When to Balance Both:**
- Use F1 score or other balanced metrics
- Adjust threshold to application-specific precision-recall trade-off

## Relationships

- **Component of**: Model Performance assessment
- **Calculated from**: Confusion Matrix (TP and FP)
- **Trades off with**: Recall (sensitivity)
- **Harmonised in**: F1 Score (harmonic mean of precision and recall)
- **Visualised via**: Precision-Recall Curve
- **Complementary to**: Recall, Specificity
- **Used in**: Model Evaluation, threshold selection, performance monitoring
- **Monitored during**: AI Monitoring, operational oversight
- **Reported in**: Model Cards, performance dashboards, audit documentation

## Examples and Applications

1. **Spam Email Filter**: Precision of 98% means that out of 100 emails flagged as spam, 98 truly are spam and 2 are legitimate emails incorrectly filtered—high precision minimises user frustration from missing important emails
2. **Medical Cancer Screening**: Screening test with 80% precision means 20% of positive results are false positives, leading to unnecessary anxiety and follow-up procedures—precision-recall balance crucial given costs of both error types
3. **Fraud Detection System**: Credit card fraud model with 60% precision blocks 100 transactions, 60 truly fraudulent and 40 legitimate—low precision creates customer friction, requiring balance with fraud capture (recall)
4. **Search Engine Results**: Search precision of 90% for top 10 results means 9 of 10 results are relevant to query—high precision critical for user satisfaction even if some relevant results not retrieved (lower recall)

## Calculation and Implementation

**Standard Calculation:**
```python
from sklearn.metrics import precision_score

precision = precision_score(y_true, y_pred)
# For multi-class: specify average parameter
# 'micro', 'macro', 'weighted', or None for per-class
```

**Manual Calculation:**
```python
true_positives = sum((y_true == 1) & (y_pred == 1))
false_positives = sum((y_true == 0) & (y_pred == 1))
precision = true_positives / (true_positives + false_positives)
```

**Threshold Optimization:**
For probabilistic classifiers, precision varies with classification threshold:
```python
from sklearn.metrics import precision_recall_curve

precisions, recalls, thresholds = precision_recall_curve(y_true, y_scores)
# Select threshold based on precision requirements
```

## Implementation Considerations

**Best Practices:**
- Report precision alongside recall and F1 score
- Calculate per-class precision in multi-class problems
- Use precision-recall curves to select appropriate thresholds
- Disaggregate precision across demographic groups for fairness assessment
- Establish minimum acceptable precision based on false positive costs
- Monitor precision trends over time to detect degradation

**Common Pitfalls:**
- Optimising for precision alone, ignoring recall (missing many positive instances)
- Failing to account for class imbalance when interpreting precision
- Using micro-averaging in multi-class settings, which can obscure per-class performance
- Not adjusting thresholds for deployment context after training
- Ignoring precision variations across demographic subgroups

**Precision-Recall Trade-off Management:**
- Use precision-recall curve to visualise trade-off
- Set threshold based on business requirements for false positive vs. false negative costs
- Consider dynamic thresholds adapting to context (e.g., higher precision during peak hours)
- Employ ensemble methods or calibration to improve both simultaneously where possible

## Variants and Related Metrics

**Micro-averaged Precision** (multi-class): Aggregate TP and FP across classes before calculating
$$\text{Precision}_{\text{micro}} = \frac{\sum_i TP_i}{\sum_i (TP_i + FP_i)}$$

**Macro-averaged Precision** (multi-class): Average of per-class precisions
$$\text{Precision}_{\text{macro}} = \frac{1}{n}\sum_i \text{Precision}_i$$

**Weighted Precision**: Precision averaged across classes weighted by support (class frequency)

**Precision@K**: Precision considering only top K predictions (ranking tasks)

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- Precision as metric for functional correctness
- Completeness and correctness sub-characteristics

**ISO/IEC 25024** (Data Quality Metrics):
- Precision in context of output quality measurement

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: Appropriate metrics including precision selected based on context
- MEASURE-2.3: Performance measured across different contexts and subgroups
- Precision as component of Valid and Reliable trustworthiness characteristic

## Related Terms

- [[Model Performance]]: Broader concept including precision
- [[Recall]]: Complementary metric measuring sensitivity
- [[F1 Score]]: Harmonic mean balancing precision and recall
- [[Accuracy]]: Overall correctness metric
- [[Confusion Matrix]]: Source of precision calculation
- [[Precision-Recall Curve]]: Visualisation of precision-recall trade-off
- [[True Positive]]: Numerator of precision calculation
- [[False Positive]]: Denominator component of precision
- [[Positive Predictive Value]]: Synonym for precision

## References

1. Davis, J. & Goadrich, M., *The Relationship Between Precision-Recall and ROC Curves*, ICML (2006)
2. Powers, D.M.W., *Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation* (2011)
3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*
4. Saito, T. & Rehmsmeier, M., *The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets*, PLOS ONE (2015)

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :Precision))
(SubClassOf :Precision :PerformanceMetric)
(SubClassOf :Precision :ClassificationMetric)

;; Synonyms
(Declaration (Class :PositivePredictiveValue))
(EquivalentClasses :Precision :PositivePredictiveValue)

;; Core relationships
(SubClassOf :Precision
  (ObjectSomeValuesFrom :measuresPerformanceOf :MachineLearningModel))
(SubClassOf :Precision
  (ObjectSomeValuesFrom :calculatedFrom :ConfusionMatrix))
(SubClassOf :Precision
  (ObjectSomeValuesFrom :tradeOffWith :Recall))
(SubClassOf :Precision
  (ObjectSomeValuesFrom :harmonisedIn :F1Score))

;; Metric properties
(Declaration (DataProperty :hasPrecisionValue))
(DataPropertyDomain :hasPrecisionValue :Precision)
(DataPropertyRange :hasPrecisionValue xsd:float)
(FunctionalDataProperty :hasPrecisionValue)

(Declaration (DataProperty :truePositiveCount))
(DataPropertyDomain :truePositiveCount :Precision)
(DataPropertyRange :truePositiveCount xsd:integer)

(Declaration (DataProperty :falsePositiveCount))
(DataPropertyDomain :falsePositiveCount :Precision)
(DataPropertyRange :falsePositiveCount xsd:integer)

;; Value constraints
(SubClassOf :Precision
  (DataPropertyRestriction
    :hasPrecisionValue
    (MinInclusiveDataRange 0.0^^xsd:float)
    (MaxInclusiveDataRange 1.0^^xsd:float)))

;; Use case focus
(Declaration (Class :FalsePositiveMinimisation))
(SubClassOf :Precision
  (ObjectSomeValuesFrom :optimisesFor :FalsePositiveMinimisation))

;; Critical applications
(Declaration (Class :SpamFiltering))
(Declaration (Class :FraudDetection))
(Declaration (Class :ContentModeration))
(Declaration (ObjectProperty :criticalFor))

(SubClassOf :Precision
  (ObjectUnionValuesFrom :criticalFor
    :SpamFiltering :FraudDetection :ContentModeration))

;; Threshold sensitivity
(Declaration (Class :ThresholdDependentMetric))
(SubClassOf :Precision :ThresholdDependentMetric)

;; Annotations
(AnnotationAssertion rdfs:label :Precision "Precision"@en)
(AnnotationAssertion rdfs:label :Precision "Positive Predictive Value"@en)
(AnnotationAssertion rdfs:comment :Precision
  "A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct."@en)
(AnnotationAssertion dcterms:source :Precision <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :Precision "AI-0108"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :Precision
  "TP / (TP + FP)"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :Precision :ISO25059)
(AnnotationAssertion :alignedWith :Precision :ISO25024)
(AnnotationAssertion :alignedWith :Precision :NISTAIRFM_MEASURE22)
```

</details>

## See Also

- [[Model Performance]]
- [[Recall]]
- [[F1 Score]]
- [[Accuracy]]
- [[Confusion Matrix]]
- [[Precision-Recall Curve]]
- [[True Positive]]
- [[False Positive]]
- [[Specificity]]
	- maturity:: draft
	- owl:class:: mv:Precision
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: precision-relationships
		- is-subclass-of:: [[ArtificialIntelligence]]
