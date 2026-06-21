- ### Definition
  - A tabular visualisation and analytical tool summarising the performance of a classification model by displaying the counts or proportions of predictions cross-tabulated against actual class labels, typically organised with predicted classes as columns and actual classes as rows (or vice versa), enabling systematic analysis of where a model succeeds and fails, calculation of various performance metrics, and identification of specific confusion patterns between classes.

- ### Semantic Classification
  - owl-class:: spatial-computing:ConfusionMatrix
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[Computer Vision]]
  - enables:: [[Error analysis]], [[fairness assessment]], [[model debugging]]

- ### Content
  - A tabular visualisation and analytical tool summarising the performance of a classification model by displaying the counts or proportions of predictions cross-tabulated against actual class labels, typically organised with predicted classes as columns and actual classes as rows (or vice versa), enabling systematic analysis of where a model succeeds and fails, calculation of various performance metrics, and identification of specific confusion patterns between classes.

  ## Structure

  For binary classification:

  |                    | **Predicted Positive** | **Predicted Negative** |
  |--------------------|------------------------|------------------------|
  | **Actual Positive** | True Positive (TP)     | False Negative (FN)    |
  | **Actual Negative** | False Positive (FP)    | True Negative (TN)     |

  For multi-class classification (n classes):

  |                  | **Pred Class 1** | **Pred Class 2** | ... | **Pred Class n** |
  |------------------|------------------|------------------|-----|------------------|
  | **Actual Class 1** | C₁₁              | C₁₂              | ... | C₁ₙ              |
  | **Actual Class 2** | C₂₁              | C₂₂              | ... | C₂ₙ              |
  | ...              | ...              | ...              | ... | ...              |
  | **Actual Class n** | Cₙ₁              | Cₙ₂              | ... | Cₙₙ              |

  Where Cᵢⱼ represents the count of instances of actual class i predicted as class j. Diagonal elements represent correct predictions.

  ## Context and Significance

  The confusion matrix provides the foundation for calculating virtually all classification performance metrics (accuracy, precision, recall, F1, specificity, etc.) whilst offering intuitive visual understanding of model behaviour beyond what single metrics convey. By revealing specific error patterns—such as which classes are frequently confused or whether errors are asymmetric—confusion matrices guide model improvement efforts and help identify fairness issues when disaggregated by demographic groups.

  Unlike aggregate metrics that summarise performance in a single number, confusion matrices preserve the detailed structure of model predictions, enabling analysts to ask questions like "Does the model confuse cats with dogs?" or "Are false positives more common than false negatives?" This granular information is essential for understanding whether a model's errors are acceptable for its intended application.

  #### Key Characteristics
  - **Comprehensive**: Contains information for calculating all standard classification metrics
		  - **Detailed**: Shows specific error patterns, not just aggregate performance
		  - **Visual**: Intuitive tabular or heatmap representation
		  - **Multi-class capable**: Extends naturally from binary to multi-class settings
		  - **Normalizable**: Can show counts or proportions (row-normalized, column-normalized, or overall-normalized)
		  - **Diagnostic**: Reveals which classes or error types dominate performance issues

		  ## Derived Metrics

		  From the binary confusion matrix, calculate:

		  **Accuracy** = (TP + TN) / (TP + TN + FP + FN)

		  **Precision** (Positive Predictive Value) = TP / (TP + FP)

		  **Recall** (Sensitivity, True Positive Rate) = TP / (TP + FN)

		  **Specificity** (True Negative Rate) = TN / (TN + FP)

		  **F1 Score** = 2TP / (2TP + FP + FN)

		  **False Positive Rate** = FP / (FP + TN)

		  **False Negative Rate** = FN / (FN + TP)

		  ## Relationships

		  - **Produces**: Accuracy, Precision, Recall, F1 Score, Specificity
		  - **Component of**: Model Performance evaluation
		  - **Visualises**: Classification results comprehensively
		  - **Enables**: Error analysis, fairness assessment, model debugging
		  - **Used in**: Model Evaluation, AI Audit, performance reporting
		  - **Disaggregated for**: Fairness analysis across demographic groups
		  - **Reported in**: Model Cards, audit reports, academic papers
		  - **Extends to**: Multi-class, multi-label classification problems

		  ## Examples and Applications

		  1. **Medical Diagnosis (Binary)**:
		  ```
		                    Predicted Healthy  Predicted Disease
		  Actual Healthy         9,500 (TN)         50 (FP)
		  Actual Disease           5 (FN)          445 (TP)
		  ```
		  Analysis: High specificity (99.5%), excellent sensitivity (98.9%), very few false negatives—appropriate for serious disease screening.

		  2. **Multi-class Image Classification**:
		  ```
		                Pred Cat  Pred Dog  Pred Bird
		  Actual Cat      850       30        20
		  Actual Dog       45      880        25
		  Actual Bird      15       10       925
		  ```
		  Analysis: Most errors between cat-dog (biologically similar), few bird confusions—suggests feature learning successfully distinguishing avian from mammalian.

		  3. **Sentiment Analysis (3-class)**:
		  ```
		                   Pred Positive  Pred Neutral  Pred Negative
		  Actual Positive        720           45            35
		  Actual Neutral          60          650            90
		  Actual Negative         25           55           720
		  ```
		  Analysis: Neutral class most confused (lower recall), positive-negative rarely confused (good separation of extremes)—typical challenge in sentiment analysis.

		  4. **Fraud Detection (Imbalanced)**:
		  ```
		                      Predicted Legit  Predicted Fraud
		  Actual Legitimate      99,400 (TN)       100 (FP)
		  Actual Fraudulent        250 (FN)        250 (TP)
		  ```
		  Analysis: Despite 99.7% accuracy, only 50% fraud recall—class imbalance (0.5% fraud) makes accuracy misleading, confusion matrix reveals poor fraud detection.

		  ## Implementation and Visualization

		  **Standard Calculation:**
		  ```python
		  from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
		  import matplotlib.pyplot as plt

		  cm = confusion_matrix(y_true, y_pred)
		  disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=class_names)
		  disp.plot()
		  plt.show()
		  ```

		  **Normalized Confusion Matrix:**
		  ```python
		  # Row normalization (recalls per class)
		  cm_normalized = confusion_matrix(y_true, y_pred, normalize='true')

		  # Column normalization (precisions per class)
		  cm_normalized = confusion_matrix(y_true, y_pred, normalize='pred')

		  # Overall normalization (proportions)
		  cm_normalized = confusion_matrix(y_true, y_pred, normalize='all')
		  ```

		  ## Implementation Considerations

		  **Best Practices:**
		  - Use heatmap visualisation with colour intensity for quick pattern recognition
		  - For imbalanced datasets, display both counts and row-normalized (recall) matrices
		  - Order classes logically (e.g., hierarchically similar classes adjacent)
		  - Disaggregate confusion matrices by demographic groups for fairness assessment
		  - Examine confusion matrices during error analysis to guide feature engineering
		  - Monitor confusion matrix evolution over time to detect drift

		  **Common Pitfalls:**
		  - Focusing only on diagonal (accuracy) without examining off-diagonal error patterns
		  - Not normalizing matrices when class frequencies vastly differ
		  - Ignoring confusion between specific class pairs in multi-class problems
		  - Failing to check if errors are random or systematic
		  - Not using confusion matrices for fairness analysis across subgroups

		  **Analysis Insights:**
		  - **Diagonal dominance**: High values on diagonal indicate good performance
		  - **Off-diagonal patterns**: Reveal systematic confusion between specific classes
		  - **Asymmetric errors**: Different FP and FN rates indicate threshold optimization opportunity
		  - **Clustered errors**: Similar classes (e.g., related species) confused more than dissimilar classes
		  - **Demographic disparities**: Comparing confusion matrices across groups reveals fairness issues

		  ## ISO/IEC and Standards Alignment

		  **ISO/IEC 25059** (Quality Model for AI Systems):
		  - Confusion matrix as comprehensive correctness assessment tool
		  - Foundation for quality characteristic measurement

		  **ISO/IEC 25024** (Data Quality Metrics):
		  - Error distribution analysis via confusion matrices

		  ## NIST AI RMF Integration

		  **MEASURE Function**:
		  - MEASURE-2.2: Confusion matrix provides foundation for measurement metrics
		  - MEASURE-2.3: Disaggregated confusion matrices assess performance across contexts
		  - Supports Valid and Reliable, Fair trustworthiness characteristics

		  ## Related Terms

		  - [[Model Performance]]: Confusion matrix fundamental to performance assessment
		  - [[Accuracy]]: Derived from confusion matrix
		  - [[Precision]]: Calculated from confusion matrix columns
		  - [[Recall]]: Calculated from confusion matrix rows
		  - [[F1 Score]]: Derived from confusion matrix
		  - [[True Positive]]: Confusion matrix cell
		  - [[False Positive]]: Confusion matrix cell
		  - [[True Negative]]: Confusion matrix cell
		  - [[False Negative]]: Confusion matrix cell
		  - [[ROC Curve]]: Uses confusion matrix values across thresholds

- ### Provenance
  - sources:: [[ISO/IEC 25059]], [[ISO/IEC 25024]], [[NIST AI RMF]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z