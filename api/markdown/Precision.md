public:: true

# Precision
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0831dc4ef9ad114d3206f40d232ec0f6e234b1024aa2017e9c8ff9ef0de96909",
  "@type": "Page",
  "vc:slug": "precision",
  "title": "Precision",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:false-positive",
      "vc:label": "False Positive"
    },
    {
      "@id": "urn:visionflow:linked:positive-predictive-value",
      "vc:label": "Positive Predictive Value"
    },
    {
      "@id": "urn:visionflow:linked:precision-recall-curve",
      "vc:label": "Precision-Recall Curve"
    },
    {
      "@id": "urn:visionflow:linked:specificity",
      "vc:label": "Specificity"
    },
    {
      "@id": "urn:visionflow:linked:true-positive",
      "vc:label": "True Positive"
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
      "@id": "urn:visionflow:owl:class:recall",
      "vc:label": "Recall"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0108"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Precision"
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
  "@id": "urn:ngm:class:precision",
  "@type": "Class",
  "label": "Precision",
  "definition": "A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important in applications where the cost or consequence of false positive errors is significant.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-technique",
    "label": "AI Technique"
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:positive-predictive-value",
      "label": "Positive Predictive Value"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:true-positive",
        "label": "True Positive"
      },
      {
        "@id": "urn:ngm:class:false-positive",
        "label": "False Positive"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:binary-classification",
        "label": "Binary Classification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:threshold-optimisation",
        "label": "Threshold Optimisation"
      },
      {
        "@id": "urn:ngm:class:false-positive-minimisation",
        "label": "False Positive Minimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:classification-threshold",
        "label": "Classification Threshold"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:performance-measurement",
        "label": "Performance Measurement"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:precision-recall-curve",
        "label": "Precision-Recall Curve"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:fairness-assessment",
        "label": "Fairness Assessment"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-25059",
        "label": "ISO/IEC 25059"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      },
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      },
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-performance",
        "label": "Model Performance"
      },
      {
        "@id": "urn:ngm:class:class-imbalance",
        "label": "Class Imbalance"
      },
      {
        "@id": "urn:ngm:class:model-card",
        "label": "Model Card"
      },
      {
        "@id": "urn:ngm:class:classification-metric",
        "label": "Classification Metric"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:precision:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0831dc4ef9ad114d3206f40d232ec0f6e234b1024aa2017e9c8ff9ef0de96909"
  },
  "vc:resolutions": [
    {
      "raw": "[[False Positive]]",
      "resolved": "urn:visionflow:linked:false-positive",
      "kind": "StubLink"
    },
    {
      "raw": "[[Positive Predictive Value]]",
      "resolved": "urn:visionflow:linked:positive-predictive-value",
      "kind": "StubLink"
    },
    {
      "raw": "[[Precision-Recall Curve]]",
      "resolved": "urn:visionflow:linked:precision-recall-curve",
      "kind": "StubLink"
    },
    {
      "raw": "[[Specificity]]",
      "resolved": "urn:visionflow:linked:specificity",
      "kind": "StubLink"
    },
    {
      "raw": "[[True Positive]]",
      "resolved": "urn:visionflow:linked:true-positive",
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
      "raw": "[[Recall]]",
      "resolved": "urn:visionflow:owl:class:recall",
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
  - A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important in applications where the cost or consequence of false positive errors is significant.
- ### Semantic Classification
  - owl-class:: spatial-computing:Precision
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important in applications where the cost or consequence of false positive errors is significant.
  - ### Benefits of Quantization
		- **Memory Efficiency**: Reduces the model size, enabling it to fit in the limited memory of small devices.
		- **Computational Efficiency**: Lower precision operations are faster and consume less power.
		- **Bandwidth Reduction**: Smaller models require less data to be transferred when downloaded or updated.
		- #### Removal of Least Significant Bits (LSB)
	 - **Description**: This strategy involves truncating the least significant bits from the weights' binary representation.
	 - **Approach**:
				- Fixed-Point Quantization: Converts floating-point numbers to fixed-point format, removing the least significant bits.
				- Dynamic Quantization: Adjusts the quantization parameters dynamically based on the distribution of the parameters.
	 - **Benefits**:
				- Reduces the precision of weights with minimal impact on accuracy.
				- Simplifies the hardware implementation of mathematical operations.
	 - **References**:
				- [Post-Training Quantization](https://www.tensorflow.org/lite/performance/post_training_quantization)
  - ### Benefits of QNNs
		- **Smaller model sizes:** Ideal for memory-constrained devices.
		- **Faster inference:** Lower precision often leads to faster computations.
		- **Reduced power consumption:** Benefits embedded systems and mobile devices.
		- Mobile and edge devices
		- Real-time applications
		- Resource-constrained environments
		- ### Code Snippets
		- Rust is predominantly used for defining schemas and interfaces within the RGB ecosystem. The following snippet outlines a basic schema definition:
		- This schema defines two states: one for the asset's name as a global state and another for its precision as an own state.
		- ```rust
		  const ASSET_NAME: GlobalState = 1;
		  const ASSET_PRECISION: OwnState = 2;
		  - let schema = ContractSchema {
		    global_types: Map::new()
		        .insert(ASSET_NAME, "String"),
		    own_types: Map::new()
		        .insert(ASSET_PRECISION, "u8"),
		    // Additional schema setup...
		  };
		  ```
  - ### Benefits of Quantization
		- **Memory Efficiency**: Reduces the model size, enabling it to fit in the limited memory of small devices.
		- **Computational Efficiency**: Lower precision operations are faster and consume less power.
		- **Bandwidth Reduction**: Smaller models require less data to be transferred when downloaded or updated.
		- #### Removal of Least Significant Bits (LSB)
	 - **Description**: This strategy involves truncating the least significant bits from the weights' binary representation.
	 - **Approach**:
				- Fixed-Point Quantization: Converts floating-point numbers to fixed-point format, removing the least significant bits.
				- Dynamic Quantization: Adjusts the quantization parameters dynamically based on the distribution of the parameters.
	 - **Benefits**:
				- Reduces the precision of weights with minimal impact on accuracy.
				- Simplifies the hardware implementation of mathematical operations.
	 - **References**:
				- [Post-Training Quantization](https://www.tensorflow.org/lite/performance/post_training_quantization)
  - ### Benefits of QNNs
		- **Smaller model sizes:** Ideal for memory-constrained devices.
		- **Faster inference:** Lower precision often leads to faster computations.
		- **Reduced power consumption:** Benefits embedded systems and mobile devices.
		- Mobile and edge devices
		- Real-time applications
		- Resource-constrained environments
		- ### Code Snippets
		- Rust is predominantly used for defining schemas and interfaces within the RGB ecosystem. The following snippet outlines a basic schema definition:
		- This schema defines two states: one for the asset's name as a global state and another for its precision as an own state.
		- ```rust
		  const ASSET_NAME: GlobalState = 1;
		  const ASSET_PRECISION: OwnState = 2;
		  - let schema = ContractSchema {
		    global_types: Map::new()
		        .insert(ASSET_NAME, "String"),
		    own_types: Map::new()
		        .insert(ASSET_PRECISION, "u8"),
		    // Additional schema setup...
		  };
		  ```
		- ### Code Snippets
		- Rust is predominantly used for defining schemas and interfaces within the RGB ecosystem. The following snippet outlines a basic schema definition:
		- This schema defines two states: one for the asset's name as a global state and another for its precision as an own state.
		  ```
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
  - ### Original Content
		- ```
  # Precision
		  **Term ID**: AI-0108
		  **Category**: Foundational Concept - Performance Metric
		  **Ontology**: AI-Grounded Ontology
		  **Last Updated**: 2025-10-27
		  ## Definition
		  A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important in applications where the cost or consequence of false positive errors is significant.
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
		  ```
  #### Key Characteristics
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
  ## Mathematical Definition
  $$\text{Precision} = \frac{TP}{TP + FP} = \frac{TP}{\text{All Positive Predictions}}$$
  Where:
  - **TP** (True Positives): Correct positive predictions
  - **FP** (False Positives): Incorrect positive predictions (Type I errors)
  Also known as **Positive Predictive Value (PPV)** in medical and statistical contexts.
  ## Context and Significance
  Precision answers the question: "When the model predicts positive, how often is it correct?" This metric is crucial in scenarios where false positives carry significant costs—such as spam filtering (legitimate emails incorrectly flagged), fraud detection (legitimate transactions blocked), or medical testing (healthy patients undergoing unnecessary procedures). High precision indicates that positive predictions are trustworthy, though it says nothing about how many actual positives the model identifies (that's recall).
  Precision and recall exist in tension: increasing precision typically decreases recall and vice versa. This fundamental trade-off requires careful balancing based on application requirements, with the F1 score providing one approach to harmonising both metrics.
  #### Current Landscape
  - Industry adoption and implementations
  - Precision is a standard metric in the evaluation of AI models across various sectors, including healthcare, finance, and e-commerce.
  - Notable organisations and platforms
		- Google, Amazon, and Microsoft use precision in their recommendation systems and search engines.
		- UK-based companies like Ocado and Deliveroo employ precision to optimise their logistics and delivery algorithms.
  - UK and North England examples where relevant
		- In Manchester, the AI-driven healthcare platform Babylon Health uses precision to ensure accurate diagnosis recommendations.
		- Leeds-based financial technology firms leverage precision to minimise false positives in fraud detection systems.
		- Newcastle and Sheffield have seen the adoption of precision in smart city initiatives, such as traffic management and public safety.
  - Technical capabilities and limitations
  - Precision is highly effective in scenarios where false positives are costly, but it does not account for false negatives.
  - In imbalanced datasets, precision can be misleading if the number of actual positives is very low.
  - Standards and frameworks
  - Precision is included in major machine learning frameworks such as TensorFlow, PyTorch, and scikit-learn.
  - It is also a key metric in industry standards for model evaluation, such as those set by the British Standards Institution (BSI).
  #### Academic Context
  - Brief contextual overview
  - Precision is a foundational metric in machine learning and information retrieval, quantifying the reliability of positive predictions made by a model.
  - It is widely used in binary and multi-class classification tasks, especially where the cost of false positives is high.
  - Key developments and current state
  - The concept of precision has remained stable since its introduction, but its application has expanded with advances in deep learning and large-scale data systems.
  - Modern research often combines precision with recall and the F1 score to provide a more balanced evaluation of model performance.
  - Academic foundations
  - Precision is rooted in statistical decision theory and has been formalised in numerous textbooks and academic papers on machine learning and pattern recognition.
  #### UK Context
  - British contributions and implementations
  - The UK has been at the forefront of AI research, with institutions like the Alan Turing Institute and the University of Cambridge contributing to the development and application of precision in machine learning.
  - British companies and startups are increasingly adopting precision as a key metric in their AI-driven products and services.
  - North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield have established themselves as innovation hubs for AI and data science.
  - These cities host numerous research centres and startups that are actively working on improving the precision of AI models in various domains.
  - Regional case studies
  - In Manchester, the AI-driven healthcare platform Babylon Health has reported significant improvements in diagnostic accuracy by focusing on precision.
  - Leeds-based financial technology firms have seen a reduction in false positives in fraud detection systems, leading to better customer trust and satisfaction.
  - Newcastle and Sheffield have implemented precision-based algorithms in smart city initiatives, resulting in more efficient traffic management and public safety.
  #### Future Directions
  - Emerging trends and developments
  - The integration of precision with other metrics and the development of new evaluation frameworks are expected to continue.
  - Advances in deep learning and large-scale data systems will likely lead to more sophisticated methods for handling imbalanced datasets.
  - Anticipated challenges
  - Ensuring the robustness of precision in real-world applications, especially in highly imbalanced datasets, remains a significant challenge.
  - Balancing precision with other metrics to provide a more comprehensive evaluation of model performance is an ongoing area of research.
  - Research priorities
  - Developing new methods to handle imbalanced datasets and to improve the robustness of precision in real-world applications.
  - Exploring the integration of precision with other metrics to provide a more comprehensive evaluation of model performance.
  #### Research & Literature
  - Key academic papers and sources
  - Sokolova, M., & Lapalme, G. (2009). A systematic analysis of performance measures for classification tasks. Information Processing & Management, 45(4), 427-437. https://doi.org/10.1016/j.ipm.2009.03.002
  - Powers, D. M. W. (2011). Evaluation: from precision, recall and F-measure to ROC, informedness, markedness and correlation. Journal of Machine Learning Technologies, 2(1), 37-63. https://doi.org/10.5121/jmlt.2011.2103
  - Flach, P. A. (2012). Machine Learning: The Art and Science of Algorithms that Make Sense of Data. Cambridge University Press. https://doi.org/10.1017/CBO9781139017271
  - Ongoing research directions
  - Researchers are exploring the integration of precision with other metrics to provide a more comprehensive evaluation of model performance.
  - There is ongoing work on developing new methods to handle imbalanced datasets and to improve the robustness of precision in real-world applications.
  #### References
  1. Sokolova, M., & Lapalme, G. (2009). A systematic analysis of performance measures for classification tasks. Information Processing & Management, 45(4), 427-437. https://doi.org/10.1016/j.ipm.2009.03.002
  2. Powers, D. M. W. (2011). Evaluation: from precision, recall and F-measure to ROC, informedness, markedness and correlation. Journal of Machine Learning Technologies, 2(1), 37-63. https://doi.org/10.5121/jmlt.2011.2103
  3. Flach, P. A. (2012). Machine Learning: The Art and Science of Algorithms that Make Sense of Data. Cambridge University Press. https://doi.org/10.1017/CBO9781139017271
  4. British Standards Institution. (2025). BS 8484:2025 - Specification for the provision of remote video monitoring services. https://www.bsigroup.com/en-GB/standards/bs-8484-2025/
  5. Alan Turing Institute. (2025). AI and Data Science Research. https://www.turing.ac.uk/research/ai-and-data-science
  6. University of Cambridge. (2025). Machine Learning and Pattern Recognition. https://www.cs.cam.ac.uk/research/machine-learning-and-pattern-recognition
  7. Babylon Health. (2025). AI-Driven Healthcare Platform. https://www.babylonhealth.com/
  8. Ocado. (2025). AI in Logistics and Delivery. https://www.ocado.com/
  9. Deliveroo. (2025). AI in Food Delivery. https://www.deliveroo.co.uk/
  10. Google. (2025). Machine Learning and AI. https://ai.google/
  11. Amazon. (2025). Machine Learning and AI. https://aws.amazon.com/machine-learning/
  12. Microsoft. (2025). Machine Learning and AI. https://azure.microsoft.com/en-gb/services/machine-learning/
  13. TensorFlow. (2025). Machine Learning Framework. https://www.tensorflow.org/
  14. PyTorch. (2025). Machine Learning Framework. https://pytorch.org/
  15. scikit-learn. (2025). Machine Learning Library. https://scikit-learn.org/
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
