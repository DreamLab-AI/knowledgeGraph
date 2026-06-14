public:: true

# Classification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5c45178c43b76c30317ddc6d0694a249aea4ed273e14741b63fe7d4cea56655",
  "@type": "Page",
  "vc:slug": "classification",
  "title": "Classification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:linked:statistical-learning-theory",
      "vc:label": "Statistical Learning Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Classification"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:classification",
  "@type": "Class",
  "label": "Classification",
  "definition": "Classification is a supervised machine learning task in which a model learns a mapping from input features to a discrete set of predefined category labels, using labelled training examples to optimise decision boundaries. At inference time the model assigns each unseen input to one or more categories by applying a learned discriminant function or probabilistic scoring rule. The task encompasses binary, multi-class, and multi-label variants, and underpins applications ranging from image recognition and natural language understanding to medical diagnosis and fraud detection. Performance is evaluated with metrics such as accuracy, precision, recall, F1-score, and the area under the receiver-operating-characteristic curve, selected according to class imbalance and the relative cost of false positives versus false negatives.",
  "domain": "machine-learning",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:labelled-dataset",
        "label": "Labelled Dataset"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:sentiment-analysis",
        "label": "Sentiment Analysis"
      },
      {
        "@id": "urn:ngm:class:image-recognition",
        "label": "Image Recognition"
      },
      {
        "@id": "urn:ngm:class:spam-filtering",
        "label": "Spam Filtering"
      },
      {
        "@id": "urn:ngm:class:medical-diagnosis",
        "label": "Medical Diagnosis"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decision-tree",
        "label": "Decision Tree"
      },
      {
        "@id": "urn:ngm:class:support-vector-machine",
        "label": "Support Vector Machine"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:naive-bayes",
        "label": "Naive Bayes"
      },
      {
        "@id": "urn:ngm:class:logistic-regression",
        "label": "Logistic Regression"
      },
      {
        "@id": "urn:ngm:class:random-forest",
        "label": "Random Forest"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      },
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:statistical-learning-theory",
        "label": "Statistical Learning Theory"
      },
      {
        "@id": "urn:ngm:class:probabilistic-inference",
        "label": "Probabilistic Inference"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:robotic-perception",
        "label": "Robotic Perception"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pattern-classification",
      "label": "Pattern Classification"
    },
    {
      "@id": "urn:ngm:class:categorical-prediction",
      "label": "Categorical Prediction"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:classification:9f0c8aa52657",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5c45178c43b76c30317ddc6d0694a249aea4ed273e14741b63fe7d4cea56655"
  },
  "vc:resolutions": [
    {
      "raw": "[[Supervised Learning]]",
      "resolved": "urn:visionflow:linked:supervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Object Detection]]",
      "resolved": "urn:visionflow:linked:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistical Learning Theory]]",
      "resolved": "urn:visionflow:linked:statistical-learning-theory",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Classification is a core [[Supervised Learning]] task in which a model learns a mapping from input feature vectors to a finite set of discrete category labels, using a labelled training corpus to optimise decision boundaries or probabilistic scoring rules. It is one of the oldest and most well-studied problems in [[Statistical Learning Theory]], with mature theoretical foundations in [[Probabilistic Inference]] and [[PAC Learning]]. Classification underpins virtually all applied [[Machine Learning]] systems that produce categorical outputs, distinguishing it fundamentally from [[Regression]] (which predicts continuous values) and [[Clustering]] (which assigns categories without labels).

- ### Overview
  - Classification formalises the problem of assigning an observation to one of K discrete classes. A classifier is a function f: X → Y that maps an input space X to a label space Y = {y₁, y₂, …, yK}. The function is learned from a training set of (input, label) pairs by minimising a [[Loss Function]] — typically cross-entropy for probabilistic classifiers or hinge loss for margin-based models.
  - **Why it matters:** categorical decisions pervade real systems — an email is spam or not, a tumour is malignant or benign, a spoken word is one of thousands of vocabulary items. Classification provides the formal machinery to automate such decisions at scale and to quantify their reliability.
  - **How it works:**
    - A labelled dataset is assembled, cleaned, and split into training, validation, and test partitions.
    - [[Feature Engineering]] or a [[Deep Learning]] representation layer converts raw inputs into numerical vectors.
    - A model class (e.g. [[Logistic Regression]], [[Support Vector Machine]], [[Decision Tree]], [[Neural Network]]) is chosen and fitted via [[Optimisation]] on the training split.
    - [[Hyperparameter Tuning]] and [[Cross Validation]] select the best model configuration.
    - The final model is evaluated on the held-out test set with task-appropriate metrics.

- ### Key Variants
  - **Binary classification** — two classes (positive / negative). Foundational case; logistic regression and SVMs were developed primarily here.
  - **Multi-class classification** — K > 2 mutually exclusive classes. Handled natively by [[Softmax]] outputs in [[Neural Network]] models, or via one-vs-rest / one-vs-one decompositions for binary classifiers.
  - **Multi-label classification** — each input may belong to multiple classes simultaneously (e.g. a document tagged with several topics). Requires sigmoid outputs per class and threshold tuning.
  - **Ordinal classification** — classes carry an ordering (e.g. severity ratings), requiring monotonicity constraints during learning.
  - **Hierarchical classification** — classes are organised in a taxonomy; predictions at lower levels must be consistent with parent nodes. Relevant to [[Knowledge Graph]] annotation and biological taxonomy.

- ### Core Algorithms
  - [[Logistic Regression]] — linear log-odds model; produces calibrated probabilities; interpretable coefficients; widely used as a baseline.
  - [[Support Vector Machine]] — finds maximum-margin hyperplane; kernel trick extends to non-linear boundaries; strong theoretical guarantees from [[Statistical Learning Theory]].
  - [[Decision Tree]] — axis-aligned recursive partitioning; human-interpretable; prone to overfitting without pruning.
  - [[Random Forest]] — ensemble of decision trees via bootstrap aggregation; robust; handles mixed feature types.
  - [[Gradient Boosting]] (XGBoost, LightGBM, CatBoost) — sequential additive models that minimise residuals; dominant on tabular data benchmarks.
  - [[Naive Bayes]] — probabilistic model assuming feature independence; fast; effective for [[Text Classification]] with high-dimensional sparse features.
  - [[K-Nearest Neighbours]] — non-parametric; classifies by majority vote among k nearest training points; no training phase; sensitive to feature scaling.
  - [[Neural Network]] classifiers — convolutional, recurrent, and transformer architectures achieve state-of-the-art on image, audio, and text tasks via end-to-end [[Representation Learning]].

- ### Applications
  - **Natural language processing:** [[Spam Filtering]], [[Sentiment Analysis]], topic categorisation, intent detection in dialogue systems, named-entity classification.
  - **Computer vision:** [[Image Recognition]], [[Object Detection]] (combines classification with localisation), scene classification, medical image analysis.
  - **Healthcare:** [[Medical Diagnosis]] — classifying pathology from imaging, genomic variant interpretation, disease risk stratification.
  - **Finance:** credit scoring, fraud detection, transaction classification, churn prediction.
  - **Cybersecurity:** malware classification, intrusion detection, phishing URL detection — often deployed in streaming pipelines requiring low latency.
  - **Robotics and autonomous systems:** [[Robotic Perception]] — classifying objects, terrain types, or human gestures to inform navigation and manipulation.
  - **Information retrieval:** document routing, question classification, query intent classification.

- ### Evaluation Metrics
  - **Accuracy** — fraction of correctly classified instances; misleading under class imbalance.
  - **Precision & Recall** — trade-off controlled by decision threshold; summarised as F1-score (harmonic mean).
  - **Area Under ROC Curve (AUC-ROC)** — threshold-independent ranking quality; standard for binary tasks.
  - **Matthews Correlation Coefficient (MCC)** — balanced metric robust to imbalance.
  - **Confusion matrix** — full breakdown of true/false positives and negatives per class; essential for diagnosing error patterns.
  - **Log-loss (cross-entropy)** — penalises overconfident wrong predictions; evaluates probabilistic calibration.
  - Selection of metrics depends on the asymmetry of error costs: in medical diagnosis, recall (sensitivity) is typically prioritised over precision to minimise missed cases.

- ### Challenges and Active Research
  - **Class imbalance** — rare classes are underrepresented in training data. Addressed via oversampling (SMOTE), undersampling, cost-sensitive learning, or [[Anomaly Detection]] framings.
  - **Distribution shift** — training and deployment distributions differ (covariate shift, label shift). Mitigated through [[Domain Adaptation]] and [[Transfer Learning]].
  - **Calibration** — model confidence scores should reflect true class probabilities. Techniques include Platt scaling, isotonic regression, and temperature scaling.
  - **Explainability** — complex models such as deep [[Neural Network]] classifiers are opaque; [[Explainable AI]] methods (LIME, SHAP) provide post-hoc feature attributions.
  - **Long-tail recognition** — many real-world class distributions are power-law; rare classes receive insufficient training signal.
  - **Few-shot and zero-shot classification** — classifying under scarce labelled data using [[Transfer Learning]], [[Prompt Engineering]], or [[Meta-Learning]].
  - **Adversarial robustness** — small, imperceptible input perturbations can cause misclassification; an active research area intersecting [[Security]] and [[Robustness]].

- ### Relationships
  - subClassOf:: [[Supervised Learning]]
  - requires:: [[Supervised Learning]]
  - requires:: [[Labelled Dataset]]
  - requires:: [[Feature Engineering]]
  - requires:: [[Loss Function]]
  - enables:: [[Object Detection]]
  - enables:: [[Sentiment Analysis]]
  - enables:: [[Image Recognition]]
  - enables:: [[Spam Filtering]]
  - enables:: [[Medical Diagnosis]]
  - uses:: [[Decision Tree]]
  - uses:: [[Support Vector Machine]]
  - uses:: [[Neural Network]]
  - uses:: [[Naive Bayes]]
  - uses:: [[Logistic Regression]]
  - uses:: [[Random Forest]]
  - dependsOn:: [[Training Data]]
  - dependsOn:: [[Cross Validation]]
  - dependsOn:: [[Hyperparameter Tuning]]
  - contrastsWith:: [[Regression]]
  - contrastsWith:: [[Clustering]]
  - contrastsWith:: [[Anomaly Detection]]
  - relatedTo:: [[Statistical Learning Theory]]
  - relatedTo:: [[Probabilistic Inference]]
  - relatedTo:: [[Transfer Learning]]
  - bridges-to:: [[Knowledge Graph]]
  - bridges-to:: [[Robotic Perception]]

- ### Standards and Context
  - Classification algorithms are standardised in library interfaces such as scikit-learn's `BaseClassifier` API (Python), which defines `fit`, `predict`, and `predict_proba` methods used across the ecosystem.
  - The [[NIST]] AI Risk Management Framework (AI RMF 1.0, 2023) identifies automated classification as a high-risk AI function requiring documentation of training data, performance metrics, and failure modes.
  - ISO/IEC 22989:2022 (AI Concepts and Terminology) defines classification as a form of supervised machine learning. ISO/IEC 23053 (Framework for AI Systems using ML) provides guidance on model lifecycle for classifiers.
  - Benchmark datasets such as ImageNet (vision), GLUE/SuperGLUE ([[Natural Language Processing]]), and UCI ML Repository (tabular) provide standardised performance reference points for comparing classification algorithms.
  - In regulated domains (healthcare, finance), classifiers must satisfy explainability or auditability requirements under GDPR Article 22, the EU AI Act, and sector-specific guidance (e.g. FDA Software as a Medical Device framework).

- ### Provenance
  - sources:: Bishop, C.M. — Pattern Recognition and Machine Learning (2006); Hastie, Tibshirani, Friedman — The Elements of Statistical Learning (2009); ISO/IEC 22989:2022; scikit-learn documentation
  - updated:: 2026-06-13
