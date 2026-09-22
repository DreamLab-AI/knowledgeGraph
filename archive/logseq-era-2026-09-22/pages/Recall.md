public:: true

# Recall
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:699159fc8acc24a521cafef8b3aaf53c7a6c1e1fa75578839fd75cb1972ad823",
  "@type": "Page",
  "vc:slug": "recall",
  "title": "Recall",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:false-negative",
      "vc:label": "False Negative"
    },
    {
      "@id": "urn:visionflow:linked:precision-recall-curve",
      "vc:label": "Precision-Recall Curve"
    },
    {
      "@id": "urn:visionflow:linked:sensitivity",
      "vc:label": "Sensitivity"
    },
    {
      "@id": "urn:visionflow:linked:specificity",
      "vc:label": "Specificity"
    },
    {
      "@id": "urn:visionflow:linked:true-positive-rate",
      "vc:label": "True Positive Rate"
    },
    {
      "@id": "urn:visionflow:owl:class:accuracy",
      "vc:label": "Accuracy"
    },
    {
      "@id": "urn:visionflow:owl:class:confusion-matrix",
      "vc:label": "Confusion Matrix"
    },
    {
      "@id": "urn:visionflow:owl:class:f1-score",
      "vc:label": "F1 Score"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:model-performance",
      "vc:label": "Model Performance"
    },
    {
      "@id": "urn:visionflow:owl:class:precision",
      "vc:label": "Precision"
    },
    {
      "@id": "urn:visionflow:owl:class:roc-curve",
      "vc:label": "ROC Curve"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0109"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Recall"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:recall",
  "@type": "Class",
  "label": "Recall",
  "definition": "A classification performance metric representing the proportion of actual positive instances that an artificial intelligence model correctly identifies, calculated as the ratio of true positives to all actual positives (true positives plus false negatives), measuring the model's completeness in detecting positive cases, particularly critical in applications where missing positive instances (false negatives) carries significant cost or consequences.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:model-performance",
    "label": "Model Performance"
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:sensitivity",
      "label": "Sensitivity"
    },
    {
      "@id": "urn:ngm:class:true-positive-rate",
      "label": "True Positive Rate"
    },
    {
      "@id": "urn:ngm:class:hit-rate",
      "label": "Hit Rate"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:true-positive",
        "label": "True Positive"
      },
      {
        "@id": "urn:ngm:class:false-negative",
        "label": "False Negative"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      },
      {
        "@id": "urn:ngm:class:classification-evaluation",
        "label": "Classification Evaluation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth Labels"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:threshold-selection",
        "label": "Threshold Selection"
      },
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:precision-recall-curve",
        "label": "Precision-Recall Curve"
      },
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Model Fairness"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-25059",
        "label": "ISO-IEC 25059"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:imbalanced-classification",
        "label": "Imbalanced Classification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:recall:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:699159fc8acc24a521cafef8b3aaf53c7a6c1e1fa75578839fd75cb1972ad823"
  },
  "vc:resolutions": [
    {
      "raw": "[[False Negative]]",
      "resolved": "urn:visionflow:linked:false-negative",
      "kind": "StubLink"
    },
    {
      "raw": "[[Precision-Recall Curve]]",
      "resolved": "urn:visionflow:linked:precision-recall-curve",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensitivity]]",
      "resolved": "urn:visionflow:linked:sensitivity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Specificity]]",
      "resolved": "urn:visionflow:linked:specificity",
      "kind": "StubLink"
    },
    {
      "raw": "[[True Positive Rate]]",
      "resolved": "urn:visionflow:linked:true-positive-rate",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accuracy]]",
      "resolved": "urn:visionflow:owl:class:accuracy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Confusion Matrix]]",
      "resolved": "urn:visionflow:owl:class:confusion-matrix",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[F1 Score]]",
      "resolved": "urn:visionflow:owl:class:f1-score",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Performance]]",
      "resolved": "urn:visionflow:owl:class:model-performance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Precision]]",
      "resolved": "urn:visionflow:owl:class:precision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ROC Curve]]",
      "resolved": "urn:visionflow:owl:class:roc-curve",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A classification performance metric representing the proportion of actual positive instances that an artificial intelligence model correctly identifies, calculated as the ratio of true positives to all actual positives (true positives plus false negatives), measuring the model's completeness in detecting positive cases, particularly critical in applications where missing positive instances (false negatives) carries significant cost or consequences.
- ### Semantic Classification
  - owl-class:: spatial-computing:Recall
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  ## Mathematical Definition
  $$\text{Recall} = \frac{TP}{TP + FN} = \frac{TP}{\text{All Actual Positives}}$$
  Where:
  - **TP** (True Positives): Correctly identified positive instances
  - **FN** (False Negatives): Missed positive instances (Type II errors)
  Also known as **Sensitivity**, **True Positive Rate (TPR)**, or **Hit Rate**.
  ## Context and Significance
  Recall answers the question: "Out of all actual positive cases, how many did the model find?" This metric is essential in scenarios where missing positive cases is particularly costly or dangerous—such as disease screening (missing cancer cases), security threat detection (missing threats), or quality control (missing defects). High recall ensures comprehensive detection of positive instances, though it says nothing about how many negative instances are incorrectly flagged (that's related to precision and specificity).
  Recall trades off with precision: achieving 100% recall is trivial (predict every instance as positive) but results in terrible precision. The challenge lies in maintaining high recall whilst managing false positive rates, with application-specific requirements determining the appropriate balance.
  #### Key Characteristics
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
  ## Academic Context
  - Brief contextual overview
  - Recall, also known as sensitivity or true positive rate, is a foundational metric in classification tasks, measuring the proportion of actual positive instances that a model correctly identifies
  - It is especially relevant in domains where missing positive cases (false negatives) can have serious consequences, such as healthcare or fraud detection
  - Key developments and current state
  - Recall remains a core component of model evaluation, often used alongside precision and the F1-score to provide a balanced view of performance
  - Recent advances in machine learning have led to more nuanced applications, including multi-label and hierarchical classification, where recall is adapted to suit complex data structures
  - Academic foundations
  - The concept of recall is rooted in statistical decision theory and has been formalised in the context of information retrieval and pattern recognition since the mid-20th century
  ## Current Landscape (2025)
  - Industry adoption and implementations
  - Recall is widely used in sectors such as healthcare, finance, and cybersecurity, where the cost of missing positive instances is high
  - Notable organisations and platforms
		- Google Cloud AI and Amazon SageMaker incorporate recall as a standard metric in their model evaluation suites
		- UK-based companies like eMed Healthcare UK (formerly Babylon Health, which collapsed in 2023) and Revolut use recall to optimise their diagnostic and fraud detection systems
  - UK and North England examples where relevant
		- In Manchester, NHS England's digital teams (formerly NHS Digital, which merged into NHS England in 2023) employ recall to evaluate AI-driven diagnostic tools for early disease detection
		- Leeds City Council uses recall metrics in its smart city initiatives to identify and respond to public safety incidents
		- Newcastle University’s Institute for Data Science applies recall in research on predictive maintenance for industrial systems
		- Sheffield’s Advanced Manufacturing Research Centre (AMRC) leverages recall to ensure the reliability of AI models in manufacturing quality control
  - Technical capabilities and limitations
  - Recall is effective in identifying the completeness of positive case detection but can be misleading in imbalanced datasets if used in isolation
  - High recall often comes at the cost of increased false positives, which can be problematic in applications where precision is also critical
  - Standards and frameworks
  - Recall is included in major machine learning evaluation frameworks such as scikit-learn, TensorFlow, and PyTorch
  - The UK’s National Institute for Health and Care Excellence (NICE) recommends the use of recall in the evaluation of AI models for clinical decision support
  ## Research & Literature
  - Key academic papers and sources
  - Sokolova, M., & Lapalme, G. (2009). A systematic analysis of performance measures for classification tasks. Information Processing & Management, 45(4), 427-437. https://doi.org/10.1016/j.ipm.2009.03.002
  - Powers, D. M. W. (2011). Evaluation: From precision, recall and F-measure to ROC, informedness, markedness and correlation. Journal of Machine Learning Technologies, 2(1), 37-63. https://doi.org/10.5121/jmlt.2011.2103
  - Saito, T., & Rehmsmeier, M. (2015). The precision-recall plot is more informative than the ROC plot when evaluating binary classifiers on imbalanced datasets. PLOS ONE, 10(3), e0118432. https://doi.org/10.1371/journal.pone.0118432
  - Ongoing research directions
  - Researchers are exploring the integration of recall with other metrics to provide a more comprehensive evaluation of model performance
  - There is growing interest in developing adaptive recall metrics for dynamic and evolving datasets
  ## UK Context
  - British contributions and implementations
  - The UK has been at the forefront of integrating recall into AI-driven healthcare and public sector applications
  - The Alan Turing Institute has published several studies on the use of recall in evaluating AI models for social good
  - North England innovation hubs (if relevant)
  - Manchester’s Digital Health Enterprise Zone is a leader in applying recall to improve the accuracy of AI diagnostics
  - Leeds’ Data City initiative uses recall to enhance the reliability of data-driven decision-making in urban planning
  - Newcastle’s Centre for Urban and Regional Development Studies (CURDS) applies recall in research on smart city technologies
  - Sheffield’s AMRC is pioneering the use of recall in advanced manufacturing and industrial AI
  - Regional case studies
  - A recent study by the University of Manchester demonstrated the effectiveness of recall in reducing false negatives in AI-driven cancer screening
  - Leeds City Council’s use of recall in its smart city platform has led to a significant improvement in the detection of public safety incidents
  ## Future Directions
  - Emerging trends and developments
  - The integration of recall with other metrics to provide a more holistic view of model performance
  - The development of adaptive recall metrics for dynamic and evolving datasets
  - Anticipated challenges
  - Balancing recall with precision in imbalanced datasets
  - Ensuring the interpretability and transparency of recall-based evaluations
  - Research priorities
  - Developing new methods to optimise recall in multi-label and hierarchical classification tasks
  - Exploring the use of recall in real-time and streaming data environments
  ## References
  1. Sokolova, M., & Lapalme, G. (2009). A systematic analysis of performance measures for classification tasks. Information Processing & Management, 45(4), 427-437. https://doi.org/10.1016/j.ipm.2009.03.002
  2. Powers, D. M. W. (2011). Evaluation: From precision, recall and F-measure to ROC, informedness, markedness and correlation. Journal of Machine Learning Technologies, 2(1), 37-63. https://doi.org/10.5121/jmlt.2011.2103
  3. Saito, T., & Rehmsmeier, M. (2015). The precision-recall plot is more informative than the ROC plot when evaluating binary classifiers on imbalanced datasets. PLOS ONE, 10(3), e0118432. https://doi.org/10.1371/journal.pone.0118432
  4. Coralogix. (2025). Recall: A Key Metric for Evaluating Model Performance. https://coralogix.com/ai-blog/recall-a-key-metric-for-evaluating-model-performance/
  5. Marqo.ai. (2025). What is Recall in Machine Learning? https://www.marqo.ai/blog/what-is-recall-in-machine-learning
  6. Wikipedia. (2025). Precision and recall. https://en.wikipedia.org/wiki/Precision_and_recall
  7. Moon Technolabs. (2025). What is Recall in Machine Learning? https://www.moontechnolabs.com/qanda/recall-in-machine-learning/
  8. Google Developers. (2025). Classification: Accuracy, recall, precision, and related metrics. https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
  9. GeeksforGeeks. (2025). Precision and Recall in Machine Learning. https://www.geeksforgeeks.org/machine-learning/precision-and-recall-in-machine-learning/
  10. Ultralytics. (2025). What is Accuracy vs. Precision vs. Recall in Machine Learning. https://www.ultralytics.com/blog/accuracy-precision-recall
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
