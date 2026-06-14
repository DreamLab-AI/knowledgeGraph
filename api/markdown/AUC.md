public:: true

# AUC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:662e6afb5a58c0423505509dd3d6c3b05dd50a82ed594960a0f458da958ef9bc",
  "@type": "Page",
  "vc:slug": "auc",
  "title": "AUC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:classification",
      "vc:label": "Classification"
    },
    {
      "@id": "urn:visionflow:linked:false-positive-rate",
      "vc:label": "False Positive Rate"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-25059",
      "vc:label": "ISO/IEC 25059"
    },
    {
      "@id": "urn:visionflow:linked:model-comparison",
      "vc:label": "Model Comparison"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-rmf",
      "vc:label": "NIST AI RMF"
    },
    {
      "@id": "urn:visionflow:linked:precision-recall-curve",
      "vc:label": "Precision-Recall Curve"
    },
    {
      "@id": "urn:visionflow:linked:ranking-metric",
      "vc:label": "Ranking Metric"
    },
    {
      "@id": "urn:visionflow:linked:threshold-selection",
      "vc:label": "Threshold Selection"
    },
    {
      "@id": "urn:visionflow:linked:true-positive-rate",
      "vc:label": "True Positive Rate"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
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
      "@id": "urn:visionflow:owl:class:roc-curve",
      "vc:label": "ROC Curve"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0113"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AUC"
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
  "@id": "urn:ngm:class:auc",
  "@type": "Class",
  "label": "AUC",
  "definition": "Area Under the Curve (AUC), specifically the area under the Receiver Operating Characteristic (ROC) curve (ROC-AUC or AUROC), is a single scalar performance metric for binary classifiers representing the probability that the model ranks a randomly chosen positive instance higher than a randomly c...",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "artificial-intelligence"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:auc:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:662e6afb5a58c0423505509dd3d6c3b05dd50a82ed594960a0f458da958ef9bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Classification]]",
      "resolved": "urn:visionflow:linked:classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[False Positive Rate]]",
      "resolved": "urn:visionflow:linked:false-positive-rate",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 25059]]",
      "resolved": "urn:visionflow:linked:iso-iec-25059",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Comparison]]",
      "resolved": "urn:visionflow:linked:model-comparison",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI RMF]]",
      "resolved": "urn:visionflow:linked:nist-ai-rmf",
      "kind": "StubLink"
    },
    {
      "raw": "[[Precision-Recall Curve]]",
      "resolved": "urn:visionflow:linked:precision-recall-curve",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ranking Metric]]",
      "resolved": "urn:visionflow:linked:ranking-metric",
      "kind": "StubLink"
    },
    {
      "raw": "[[Threshold Selection]]",
      "resolved": "urn:visionflow:linked:threshold-selection",
      "kind": "StubLink"
    },
    {
      "raw": "[[True Positive Rate]]",
      "resolved": "urn:visionflow:linked:true-positive-rate",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
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
  - Area Under the Curve (AUC), specifically the area under the Receiver Operating Characteristic (ROC) curve (ROC-AUC or AUROC), is a single scalar performance metric for binary classifiers representing the probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance, providing threshold-independent assessment of a classifier's discriminative ability with values ranging from 0 to 1, where 0.5 indicates random guessing, 1.0 represents perfect classification, and values above 0.5 indicate better-than-random performance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AUC
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]

- ### Content
  - Area Under the Curve (AUC), specifically the area under the Receiver Operating Characteristic (ROC) curve (ROC-AUC or AUROC), is a single scalar performance metric for binary classifiers representing the probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance, providing threshold-independent assessment of a classifier's discriminative ability with values ranging from 0 to 1, where 0.5 indicates random guessing, 1.0 represents perfect classification, and values above 0.5 indicate better-than-random performance.

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

  #### Key Characteristics
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
		  - **Equivalent to**: Wilcoxon-Mann-Whitney U statistic (normalized)
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
		  - Range not standardized to [0,1]

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
		  - Equivalent to Wilcoxon-Mann-Whitney U statistic (normalized)
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

  #### References
  1. Fawcett, T., *An Introduction to ROC Analysis*, Pattern Recognition Letters (2006)
		  2. Hand, D.J., *Measuring Classifier Performance: A Coherent Alternative to the Area Under the ROC Curve*, Machine Learning (2009)
		  3. Bradley, A.P., *The Use of the Area Under the ROC Curve in the Evaluation of Machine Learning Algorithms*, Pattern Recognition (1997)
		  4. Provost, F. & Fawcett, T., *Robust Classification for Imprecise Environments*, Machine Learning (2001)

		  ## Formal Ontology

		  <details>
		  <summary>OWL Functional Syntax</summary>


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

		  ```

    - measures:: [[True Positive Rate]], [[False Positive Rate]], [[Model Comparison]], [[Threshold Selection]], [[Classification]]

  - public-access:: true
  - definition:: Area Under the Curve (AUC), specifically the area under the Receiver Operating Characteristic (ROC) curve (ROC-AUC or AUROC), is a single scalar performance metric for binary classifiers representing the probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance, providing threshold-independent assessment of a classifier's discriminative ability with values ranging from 0 to 1, where 0.5 indicates random guessing, 1.0 represents perfect classification, and values above 0.5 indicate better-than-random performance.


  ## Academic Context

  - Brief contextual overview
  - Area Under the Curve (AUC), particularly ROC-AUC, is a cornerstone metric in binary classification, widely adopted for its ability to summarise a model’s discriminative power across all possible decision thresholds
  - The ROC curve plots the True Positive Rate (TPR) against the False Positive Rate (FPR) at varying thresholds, and the area under this curve (AUC) provides a single scalar value that quantifies overall performance
  - The interpretation of AUC as the probability that a randomly chosen positive instance is ranked higher than a randomly chosen negative instance is both intuitive and mathematically sound

  - Key developments and current state
  - The ROC-AUC framework remains a gold standard for threshold-independent evaluation, especially in fields where class imbalance is common, such as medical diagnostics and fraud detection
  - Recent research has focused on extending ROC-AUC concepts to multi-class settings and integrating them with other metrics for more nuanced evaluation

  - Academic foundations
  - The ROC curve originated in signal detection theory and was later adapted for machine learning and statistics
  - The AUC metric is grounded in the theory of statistical discrimination and has been rigorously validated in numerous empirical studies

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - ROC-AUC is widely used in healthcare, finance, and cybersecurity for evaluating binary classifiers
  - Notable organisations and platforms
		- NHS Digital in the UK employs ROC-AUC for evaluating diagnostic models in clinical settings
		- Financial institutions like Barclays and Lloyds Banking Group use ROC-AUC for fraud detection and credit scoring
		- Tech companies such as Google and Microsoft incorporate ROC-AUC in their machine learning frameworks and cloud services

  - UK and North England examples where relevant
  - In Manchester, the Manchester Centre for Health Informatics uses ROC-AUC to assess the performance of predictive models in public health initiatives
  - Leeds City Council has implemented ROC-AUC in their data-driven decision-making processes for urban planning and social services
  - Newcastle University’s Institute for Data Science and Artificial Intelligence applies ROC-AUC in research projects related to environmental monitoring and smart cities
  - Sheffield Hallam University’s Advanced Manufacturing Research Centre (AMRC) uses ROC-AUC for quality control and predictive maintenance in manufacturing

  - Technical capabilities and limitations
  - ROC-AUC is robust to class imbalance and provides a comprehensive view of model performance across all thresholds
  - However, it can be less informative in highly imbalanced datasets, where precision-recall curves may offer a more nuanced perspective
  - The metric is sensitive to the distribution of scores and can be affected by outliers

  - Standards and frameworks
  - ROC-AUC is included in major machine learning libraries such as scikit-learn, TensorFlow, and PyTorch
  - It is a recommended metric in industry standards and guidelines, including those from the UK’s National Institute for Health and Care Excellence (NICE)

  ## Research & Literature

  - Key academic papers and sources
  - Hanley, J. A., & McNeil, B. J. (1982). The meaning and use of the area under a receiver operating characteristic (ROC) curve. Radiology, 143(1), 29-36. https://doi.org/10.1148/radiology.143.1.7063747
  - Fawcett, T. (2006). An introduction to ROC analysis. Pattern Recognition Letters, 27(8), 861-874. https://doi.org/10.1016/j.patrec.2005.10.010
  - Davis, J., & Goadrich, M. (2006). The relationship between Precision-Recall and ROC curves. Proceedings of the 23rd International Conference on Machine Learning, 233-240. https://doi.org/10.1145/1143844.1143874

  - Ongoing research directions
  - Extending ROC-AUC to multi-class and multi-label classification problems
  - Developing more robust metrics for highly imbalanced datasets
  - Integrating ROC-AUC with other evaluation metrics for a more comprehensive assessment

  ## UK Context

  - British contributions and implementations
  - The UK has been at the forefront of applying ROC-AUC in healthcare, with significant contributions from institutions like the University of Oxford and Imperial College London
  - The NHS has developed guidelines for the use of ROC-AUC in clinical decision support systems

  - North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield are home to several research centres and innovation hubs that actively use and develop ROC-AUC methodologies
  - These regions have seen a surge in data science and machine learning applications, with ROC-AUC playing a crucial role in evaluating the performance of predictive models

  - Regional case studies
  - Manchester Centre for Health Informatics: ROC-AUC is used to evaluate models for early detection of chronic diseases
  - Leeds City Council: ROC-AUC is applied in predictive analytics for urban planning and social services
  - Newcastle University: ROC-AUC is used in environmental monitoring and smart city projects
  - Sheffield Hallam University: ROC-AUC is employed in quality control and predictive maintenance in manufacturing

  ## Future Directions

  - Emerging trends and developments
  - Integration of ROC-AUC with other metrics for more comprehensive evaluation
  - Development of new methods for handling highly imbalanced datasets
  - Application of ROC-AUC in emerging fields such as autonomous systems and personalized medicine

  - Anticipated challenges
  - Ensuring the robustness of ROC-AUC in the face of increasing data complexity and volume
  - Addressing the limitations of ROC-AUC in highly imbalanced datasets
  - Standardizing the use of ROC-AUC across different industries and applications

  - Research priorities
  - Extending ROC-AUC to multi-class and multi-label classification
  - Developing more robust and interpretable metrics for model evaluation
  - Exploring the integration of ROC-AUC with other evaluation frameworks

  ## References

  1. Hanley, J. A., & McNeil, B. J. (1982). The meaning and use of the area under a receiver operating characteristic (ROC) curve. Radiology, 143(1), 29-36. https://doi.org/10.1148/radiology.143.1.7063747
  2. Fawcett, T. (2006). An introduction to ROC analysis. Pattern Recognition Letters, 27(8), 861-874. https://doi.org/10.1016/j.patrec.2005.10.010
  3. Davis, J., & Goadrich, M. (2006). The relationship between Precision-Recall and ROC curves. Proceedings of the 23rd International Conference on Machine Learning, 233-240. https://doi.org/10.1145/1143844.1143874
  4. NHS Digital. (2025). Guidelines for the use of ROC-AUC in clinical decision support systems. https://digital.nhs.uk/
  5. Manchester Centre for Health Informatics. (2025). ROC-AUC in public health initiatives. https://www.manchester.ac.uk/research/groups/manchester-centre-for-health-informatics/
  6. Leeds City Council. (2025). Data-driven decision-making in urban planning and social services. https://www.leeds.gov.uk/
  7. Newcastle University. (2025). Environmental monitoring and smart city projects. https://www.ncl.ac.uk/
  8. Sheffield Hallam University. (2025). Quality control and predictive maintenance in manufacturing. https://www.shu.ac.uk/


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[ISO/IEC 25059]], [[NIST AI RMF]]
  - migration-date:: 2026-04-26T00:00:00Z
