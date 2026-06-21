- ### Definition
  - A classification performance metric representing the harmonic mean of precision and recall, providing a single score that balances a model's ability to avoid false positives (precision) with its ability to avoid false negatives (recall), calculated to give equal weight to both metrics whilst penalising extreme imbalances, particularly useful for comparing models or setting decision thresholds when both prediction reliability and completeness are important and when class distributions are imbalanced.

- ### Semantic Classification
  - owl-class:: spatial-computing:F1Score
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - A classification performance metric representing the harmonic mean of precision and recall, providing a single score that balances a model's ability to avoid false positives (precision) with its ability to avoid false negatives (recall), calculated to give equal weight to both metrics whilst penalising extreme imbalances, particularly useful for comparing models or setting decision thresholds when both prediction reliability and completeness are important and when class distributions are imbalanced.

  ## Mathematical Definition

  $$F_1 = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} = \frac{2TP}{2TP + FP + FN}$$

  Where:
  - **Precision** = TP / (TP + FP)
  - **Recall** = TP / (TP + FN)
  - **TP** = True Positives
  - **FP** = False Positives
  - **FN** = False Negatives

  The harmonic mean (rather than arithmetic mean) ensures that F1 score is low when either precision or recall is low, preventing a high score from one metric compensating for poor performance on the other.

  ## Context and Significance

  The F1 score addresses the challenge that optimising precision alone or recall alone produces degenerate solutions: perfect precision by making few predictions, or perfect recall by predicting everything as positive. The harmonic mean formulation ensures both metrics must be reasonably high for a good F1 score, making it particularly valuable for imbalanced datasets where accuracy can be misleading.

  However, the F1 score's equal weighting of precision and recall may not match all application requirements. When false positives and false negatives have different costs, weighted variants (F-beta scores) or custom cost-sensitive metrics may be more appropriate.

  #### Key Characteristics
  - **Balanced metric**: Equal weight to precision and recall
		  - **Harmonic mean**: Penalises extreme imbalances between precision and recall
		  - **Single score**: Convenient for model comparison and selection
		  - **Imbalance-robust**: More meaningful than accuracy for imbalanced datasets
		  - **Threshold-dependent**: For probabilistic classifiers, varies with classification threshold
		  - **Class-specific**: Typically calculated per class in multi-class settings
		  - **Range [0,1]**: 0 represents worst performance, 1 represents perfect precision and recall

		  ## Appropriate Use Cases

		  **When F1 Score is Suitable:**
		  - Imbalanced datasets where accuracy misleading
		  - Applications requiring balance between precision and recall
		  - Model comparison when both false positives and false negatives matter
		  - Situations where costs of both error types are similar
		  - Information retrieval, text classification, named entity recognition
		  - Initial model selection before fine-tuning for specific precision-recall trade-offs

		  **When Alternatives Preferred:**
		  - Asymmetric error costs: Use F-beta score or cost-sensitive metrics
		  - Emphasis on precision: Use precision directly or F2 score (β=2)
		  - Emphasis on recall: Use recall directly or F0.5 score (β=0.5)
		  - Multi-objective optimisation: Use Pareto analysis with precision-recall curve
		  - Ranking tasks: Use Mean Average Precision (MAP) or NDCG

		  ## Relationships

		  - **Component of**: Model Performance assessment
		  - **Combines**: Precision and Recall via harmonic mean
		  - **Calculated from**: Confusion Matrix (TP, FP, FN)
		  - **Variant of**: F-beta score (F1 is special case where β=1)
		  - **Alternative to**: Accuracy (for imbalanced datasets)
		  - **Complementary to**: ROC-AUC, Precision-Recall AUC
		  - **Used in**: Model Evaluation, model selection, performance monitoring
		  - **Visualised via**: F1 score across thresholds, per-class F1 scores
		  - **Reported in**: Model Cards, performance dashboards, academic papers

		  ## Examples and Applications

		  1. **Named Entity Recognition**: NER model achieves 87% precision (87% of predicted entities are correct) and 82% recall (finds 82% of actual entities)—F1 score of 84.4% provides balanced performance indicator for comparing alternative models
		  2. **Medical Diagnosis**: Disease detection with 70% precision and 95% recall yields F1 of 80.8%—while recall is high (few missed cases), moderate precision (many false alarms) brings down F1, indicating need to improve precision without sacrificing recall
		  3. **Fraud Detection**: Model with 60% precision and 60% recall has F1 of 60%—balanced but modest performance suggests exploring alternative approaches or features to improve both metrics simultaneously
		  4. **Text Classification**: Spam filter with 95% precision and 85% recall achieves F1 of 89.8%—high F1 indicates good overall performance, though slightly favouring precision over recall (appropriate for spam filtering)

		  ## Calculation and Implementation

		  **Standard Calculation:**
		  ```python
		  from sklearn.metrics import f1_score

		  f1 = f1_score(y_true, y_pred)
		  # For multi-class: specify average parameter
		  # 'micro', 'macro', 'weighted', or None for per-class
		  ```

		  **Manual Calculation:**
		  ```python
		  precision = TP / (TP + FP)
		  recall = TP / (TP + FN)
		  f1 = 2 * (precision * recall) / (precision + recall)

		  # Alternative direct formula
		  f1 = (2 * TP) / (2 * TP + FP + FN)
		  ```

		  **Multi-class Aggregation:**
		  ```python
		  # Macro F1: Average of per-class F1 scores
		  f1_macro = f1_score(y_true, y_pred, average='macro')

		  # Weighted F1: Weighted average by class support
		  f1_weighted = f1_score(y_true, y_pred, average='weighted')

		  # Micro F1: Global calculation (equals micro-averaged precision and recall)
		  f1_micro = f1_score(y_true, y_pred, average='micro')
		  ```

		  ## Implementation Considerations

		  **Best Practices:**
		  - Report F1 alongside individual precision and recall for transparency
		  - Calculate per-class F1 in multi-class problems
		  - Use F1 for initial model selection, then fine-tune for application-specific requirements
		  - Disaggregate F1 across demographic groups for fairness assessment
		  - Consider F-beta variants when precision and recall require different weighting
		  - Monitor F1 trends over time to detect model degradation

		  **Common Pitfalls:**
		  - Using F1 when precision and recall have very different importance (use F-beta instead)
		  - Relying solely on macro-averaged F1 in multi-class settings (can obscure poor minority class performance)
		  - Comparing F1 scores across datasets with different class balance
		  - Optimising for F1 without understanding underlying precision-recall trade-off
		  - Not adjusting thresholds for optimal F1 in deployment (often differs from 0.5)

		  **Multi-class Considerations:**
		  - **Macro F1**: Treats all classes equally regardless of frequency—good for balanced importance
		  - **Weighted F1**: Weights classes by frequency—emphasises performance on common classes
		  - **Micro F1**: Global calculation—equivalent to accuracy in multi-class settings

		  ## F-beta Score Family

		  The F-beta score generalises F1 to allow different weighting of precision and recall:

		  $$F_\beta = (1 + \beta^2) \times \frac{\text{Precision} \times \text{Recall}}{\beta^2 \times \text{Precision} + \text{Recall}}$$

		  - **F1** (β=1): Equal weight to precision and recall
		  - **F2** (β=2): Emphasises recall (recall weighted 2x more than precision)
		  - **F0.5** (β=0.5): Emphasises precision (precision weighted 2x more than recall)

		  ## ISO/IEC and Standards Alignment

		  **ISO/IEC 25059** (Quality Model for AI Systems):
		  - F1 score as balanced metric for functional correctness and completeness
		  - Composite quality characteristic measurement

		  **ISO/IEC 25024** (Data Quality Metrics):
		  - Balanced performance measurement frameworks

		  ## NIST AI RMF Integration

		  **MEASURE Function**:
		  - MEASURE-2.2: F1 score as appropriate balanced metric for classification tasks
		  - MEASURE-2.3: F1 measured across different contexts and subgroups
		  - F1 contributes to Valid and Reliable trustworthiness characteristic

		  ## Related Terms

		  - [[Model Performance]]: Broader concept including F1 score
		  - [[Precision]]: Component of F1 calculation
		  - [[Recall]]: Component of F1 calculation
		  - [[Accuracy]]: Alternative overall metric
		  - [[Confusion Matrix]]: Source of F1 calculation
		  - [[F-beta Score]]: Generalisation allowing different precision-recall weighting
		  - [[Precision-Recall Curve]]: Visualisation of trade-off across thresholds
		  - [[ROC-AUC]]: Alternative balanced metric
		  - [[Macro F1]]: Multi-class aggregation method
		  - [[Micro F1]]: Alternative multi-class aggregation

		  #### References
		  1. Powers, D.M.W., *Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation* (2011)
		  2. Chinchor, N., *MUC-4 Evaluation Metrics*, Proceedings of the 4th Message Understanding Conference (1992)
		  3. Van Rijsbergen, C.J., *Information Retrieval*, 2nd Edition (1979)
		  4. Saito, T. & Rehmsmeier, M., *The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets*, PLOS ONE (2015)
		  5. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*

		  ## See Also

		  - [[Model Performance]]
		  - [[Precision]]
		  - [[Recall]]
		  - [[Accuracy]]
		  - [[Confusion Matrix]]
		  - [[F-beta Score]]
		  - [[Precision-Recall Curve]]
		  - [[ROC-AUC]]
		  - [[Macro F1]]
		  - [[Micro F1]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z