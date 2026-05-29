public:: true

# Cross-Validation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-validation",
  "@type": "Page",
  "vc:slug": "cross-validation",
  "title": "Cross-Validation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-validation",
  "@type": "Class",
  "label": "Cross-Validation",
  "definition": "Cross-validation is a statistical resampling technique for evaluating machine learning model performance by partitioning available data into complementary training and validation subsets, training the model on each partition in turn, and averaging the resulting error estimates. It provides a less optimistic and more generalisable estimate of out-of-sample predictive performance than a single train–test split.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-machine-learning", "label": "AI Machine Learning"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:benign-overfitting", "label": "Benign Overfitting"},
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:applied-machine-learning", "label": "Applied Machine Learning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:annotated-training-data", "label": "Annotated Training Data"}
    ]
  },
  "quality": 0.85
}
```

- ### Definition
  - Cross-validation is a resampling method that evaluates [[AI Machine Learning]] model generalisation by repeatedly splitting a dataset into training and held-out validation folds, measuring predictive error across each split, and combining results to produce a reliable performance estimate.

- ### Relationships
  - Cross-validation directly addresses [[Benign Overfitting]] by exposing the model to multiple held-out partitions rather than a single test set. It is widely applied when evaluating [[Convolutional Neural Network]] architectures and other models within [[Applied Machine Learning]] workflows, where access to large independent test corpora is limited. It contrasts with simple holdout methods built around fixed [[Annotated Training Data]] splits.

- ### Content
  - Cross-validation traces to early statistical literature on model evaluation. Seymour Geisser formalised predictive sample reuse in 1975, and Kohavi's 1995 study of k-fold and leave-one-out variants became foundational. The technique became essential in machine learning as researchers sought reliable performance estimates with limited labelled datasets, predating the era of internet-scale corpora.
  - In k-fold cross-validation the dataset is divided into k roughly equal folds. The model is trained k times; each time k-1 folds form the training set and the remaining fold serves as the validation set. Performance metrics — accuracy, F1-score, AUC — are recorded for each fold and then averaged. Variants include stratified k-fold (preserving class ratios), repeated k-fold, leave-one-out (k equals n), and nested cross-validation for simultaneous hyperparameter selection and model evaluation.
  - Cross-validation is essential when labelled data is expensive or scarce, providing a statistically sound basis for comparing competing architectures, feature sets, or preprocessing pipelines. It guards against selecting models that perform well on a particular arbitrary split by chance. Nested cross-validation, where an inner loop tunes hyperparameters and an outer loop estimates generalisation error, is the gold standard for unbiased model selection.
  - As of 2024–2025, cross-validation remains the default evaluation protocol in classical machine learning benchmarks. For large deep learning models, computational cost makes full k-fold impractical; practitioners use single or repeated holdout splits, or rely on benchmark datasets with fixed splits. Toolkits such as scikit-learn, PyTorch Lightning, and Hugging Face Evaluate all provide first-class cross-validation utilities. Research continues into optimal strategies for small medical and scientific datasets where every sample matters.
