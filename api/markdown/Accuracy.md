- ### OntologyBlock
  id:: accuracy-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0107
	- preferred-term:: Accuracy
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Accuracy
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships
id:: accuracy-relationships
		- is-subclass-of:: [[ArtificialIntelligence]]

## Mathematical Definition

$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

Where:
- **TP** (True Positives): Correctly predicted positive instances
- **TN** (True Negatives): Correctly predicted negative instances
- **FP** (False Positives): Incorrectly predicted as positive
- **FN** (False Negatives): Incorrectly predicted as negative

## Context and Significance

Accuracy is often the most intuitive and widely reported performance metric, representing the straightforward question: "How often is the model correct?" However, its simplicity can be misleading in many real-world scenarios. In imbalanced datasets (where one class vastly outnumbers others), high accuracy can be achieved by simply predicting the majority class, masking poor performance on minority classes. In applications with asymmetric costs (where false positives and false negatives have different consequences), accuracy treats all errors equally, failing to reflect true system utility.

Despite these limitations, accuracy remains valuable as one component of comprehensive performance assessment, particularly when combined with other metrics providing complementary perspectives (precision, recall, F1 score) and when disaggregated across subgroups to detect fairness issues.

## Key Characteristics

- **Aggregate metric**: Single number summarising overall correctness
- **Balanced treatment**: Weights all instances equally regardless of class
- **Intuitive interpretation**: Directly represents proportion correct
- **Imbalance-sensitive**: Can be misleading with skewed class distributions
- **Complementary**: Best used alongside precision, recall, and F1 score
- **Threshold-dependent**: For probabilistic classifiers, depends on classification threshold

## Appropriate Use Cases

**When Accuracy is Suitable:**
- Balanced datasets with roughly equal class proportions
- Applications where all error types have similar costs
- Multi-class problems where overall correctness is primary concern
- Initial exploratory analysis to assess basic model viability
- Situations where false positives and false negatives equally undesirable

**When Alternative Metrics Preferred:**
- Imbalanced datasets (use precision, recall, F1, or balanced accuracy)
- Asymmetric error costs (use weighted metrics or cost-sensitive evaluation)
- Critical applications where specific error types must be minimised (use precision or recall)
- Fairness-sensitive contexts (use group-disaggregated metrics)

## Relationships

- **Component of**: Model Performance assessment
- **Calculated from**: Confusion Matrix values
- **Complements**: Precision, Recall, F1 Score
- **Alternative to**: Balanced Accuracy (for imbalanced data)
- **Visualised via**: ROC Curve (across thresholds)
- **Used in**: Model Evaluation, model selection, performance monitoring
- **Monitored during**: AI Monitoring, operational oversight
- **Reported in**: Model Cards, performance dashboards, audit documentation

## Examples and Applications

1. **Balanced Binary Classification**: Email spam filter with 50% spam, 50% legitimate emails achieves 95% accuracy, meaning 95 out of 100 emails correctly classified—accuracy appropriately reflects performance given balanced distribution
2. **Imbalanced Dataset Misuse**: Fraud detection with 99.5% legitimate transactions, 0.5% fraudulent—model predicting "legitimate" for all transactions achieves 99.5% accuracy but catches zero fraud, demonstrating accuracy's inadequacy for imbalanced problems
3. **Multi-class Classification**: Image classifier distinguishing 10 animal species with approximately equal representation achieves 87% accuracy, providing useful overall performance indicator whilst individual per-class precision and recall offer additional detail
4. **Medical Screening Limitation**: Disease screening test with 2% disease prevalence—model always predicting "healthy" achieves 98% accuracy but fails to identify any cases, illustrating need for sensitivity (recall) and specificity metrics in medical contexts

## Computational Considerations

**Calculation Requirements:**
- Requires labelled test data with ground truth labels
- For probabilistic classifiers, requires threshold selection to convert probabilities to class predictions
- Efficient to compute: O(n) where n is number of instances
- Standard implementation in all ML libraries

**Threshold Sensitivity:**
- For probabilistic classifiers (outputting probabilities), accuracy depends on classification threshold (typically 0.5)
- Optimal threshold for accuracy may differ from thresholds optimising other objectives
- Threshold should be set on validation data, not test data, to avoid optimistic bias

## Implementation Considerations

**Best Practices:**
- Report accuracy alongside precision, recall, and F1 score for comprehensive view
- Disaggregate accuracy across demographic groups to detect fairness issues
- Calculate per-class accuracy in addition to overall accuracy for multi-class problems
- Consider balanced accuracy for imbalanced datasets: (Sensitivity + Specificity) / 2
- Establish baseline accuracy (e.g., always predicting majority class) for context
- Monitor accuracy trends over time to detect model degradation

**Common Pitfalls:**
- Relying solely on accuracy for imbalanced datasets
- Ignoring accuracy paradox: high accuracy masking poor minority class performance
- Comparing accuracy across datasets with different class balance
- Optimising for accuracy when business objectives prioritise specific error types
- Failing to disaggregate accuracy across subgroups in fairness assessments

## Alternatives and Extensions

**Balanced Accuracy**: Average of sensitivity and specificity, more appropriate for imbalanced datasets

**Top-K Accuracy**: Proportion of instances where true label in top K predictions (common in multi-class ranking)

**Cohen's Kappa**: Accuracy adjusted for chance agreement

**Matthews Correlation Coefficient (MCC)**: Balanced measure considering all confusion matrix cells

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- Accuracy as component of functional suitability quality characteristic
- Correctness sub-characteristic addressed by accuracy metric

**ISO/IEC 25024** (Data Quality Metrics):
- Accuracy in context of data quality and model output quality

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: AI system performance metrics tracked, including accuracy where appropriate
- MEASURE-2.7: AI system accuracy established and evaluated across different contexts
- Accuracy as one component of Valid and Reliable trustworthiness characteristic

## Related Terms

- **Model Performance**: Broader concept of which accuracy is one metric
- **Precision**: Complementary metric for positive predictive value
- **Recall**: Complementary metric for sensitivity
- **F1 Score**: Harmonic mean balancing precision and recall
- **Confusion Matrix**: Source of accuracy calculation
- **ROC Curve**: Visualises accuracy/performance trade-offs across thresholds
- **Balanced Accuracy**: Variant addressing class imbalance
- **True Positive Rate**: Related to recall/sensitivity
- **True Negative Rate**: Specificity

## References

1. Sokolova, M. & Lapalme, G., *A systematic analysis of performance measures for classification tasks*, Information Processing & Management (2009)
2. Powers, D.M.W., *Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation*, Journal of Machine Learning Technologies (2011)
3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*
4. Breck, E. et al., *The ML Test Score: A Rubric for ML Production Readiness*, Google Research (2017)

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :Accuracy))
(SubClassOf :Accuracy :PerformanceMetric)
(SubClassOf :Accuracy :ClassificationMetric)

;; Core relationships
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :measuresPerformanceOf :MachineLearningModel))
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :calculatedFrom :ConfusionMatrix))
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :complementedBy :Precision))
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :complementedBy :Recall))
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :complementedBy :F1Score))

;; Metric properties
(Declaration (DataProperty :hasAccuracyValue))
(DataPropertyDomain :hasAccuracyValue :Accuracy)
(DataPropertyRange :hasAccuracyValue xsd:float)
(FunctionalDataProperty :hasAccuracyValue)

(Declaration (DataProperty :hasTruePositives))
(DataPropertyDomain :hasTruePositives :Accuracy)
(DataPropertyRange :hasTruePositives xsd:integer)

(Declaration (DataProperty :hasTrueNegatives))
(DataPropertyDomain :hasTrueNegatives :Accuracy)
(DataPropertyRange :hasTrueNegatives xsd:integer)

(Declaration (DataProperty :hasFalsePositives))
(DataPropertyDomain :hasFalsePositives :Accuracy)
(DataPropertyRange :hasFalsePositives xsd:integer)

(Declaration (DataProperty :hasFalseNegatives))
(DataPropertyDomain :hasFalseNegatives :Accuracy)
(DataPropertyRange :hasFalseNegatives xsd:integer)

;; Value constraints
(SubClassOf :Accuracy
  (DataPropertyRestriction
    :hasAccuracyValue
    (MinInclusiveDataRange 0.0^^xsd:float)
    (MaxInclusiveDataRange 1.0^^xsd:float)))

;; Use case restrictions
(Declaration (Class :BalancedDataset))
(Declaration (Class :ImbalancedDataset))
(Declaration (ObjectProperty :appropriateFor))

(SubClassOf :Accuracy
  (ObjectUnionValuesFrom :appropriateFor :BalancedDataset))

;; Limitations
(Declaration (Class :ClassImbalanceSensitivity))
(SubClassOf :Accuracy
  (ObjectSomeValuesFrom :hasLimitation :ClassImbalanceSensitivity))

;; Annotations
(AnnotationAssertion rdfs:label :Accuracy "Accuracy"@en)
(AnnotationAssertion rdfs:comment :Accuracy
  "A classification performance metric representing the proportion of correct predictions made by an artificial intelligence model across all instances in a dataset."@en)
(AnnotationAssertion dcterms:source :Accuracy <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :Accuracy "AI-0107"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :Accuracy
  "(TP + TN) / (TP + TN + FP + FN)"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :Accuracy :ISO25059)
(AnnotationAssertion :alignedWith :Accuracy :ISO25024)
(AnnotationAssertion :alignedWith :Accuracy :NISTAIRFM_MEASURE22)
```

</details>

## See Also

- [[Model Performance]]
- [[Precision]]
- [[Recall]]
- [[F1 Score]]
- [[Confusion Matrix]]
- [[ROC Curve]]
- [[Balanced Accuracy]]
- [[Sensitivity]]
- [[Specificity]]
	- maturity:: draft
	- owl:class:: mv:Accuracy
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: accuracy-relationships
		- is-subclass-of:: [[ArtificialIntelligence]]
