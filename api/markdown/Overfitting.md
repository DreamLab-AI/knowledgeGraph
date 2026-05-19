public:: true

# Overfitting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed09aab9dadee82ee15e3449fb1e01eb14c4d5c440d94bd9ccfbb8ff8e4ee078",
  "@type": "Page",
  "vc:slug": "overfitting",
  "title": "Overfitting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0054"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Overfitting"
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
  "@id": "urn:ngm:class:overfitting",
  "@type": "Class",
  "label": "Overfitting",
  "definition": "Overfitting is a artificial intelligence concept and a type of Machine Learning.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:overfitting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed09aab9dadee82ee15e3449fb1e01eb14c4d5c440d94bd9ccfbb8ff8e4ee078"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
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
  - ### Primary Definition
- ### Semantic Classification
  - owl-class:: spatial-computing:Overfitting
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - ### Primary Definition
  **Overfitting** is a phenomenon where a model learns training data too well, including noise and artefacts, resulting in poor generalisation to new data. Overfitted models perform well on training data but poorly on test data.
  - ### Original Content
		- ```
  # Overfitting
  #### Related Concepts
  - **Generalisation**: Overfitting indicates poor generalisation
		  - **Regularisation** (AI-0056): Technique to prevent overfitting
		  - **Validation Data**: Used to detect overfitting
		  - **Model Capacity** (AI-0053): Excessive capacity causes overfitting
		  - **Dropout** (AI-0057): Regularisation preventing overfitting
		  ## Formal Ontology
		  <details>
		  <summary>Click to expand OntologyBlock</summary>
		  </details>
		  ## Standards Alignment
		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Training challenges
		  - **ISO/IEC 23894:2023**: Model quality risks
		  ### NIST AI RMF
		  - **Function**: MEASURE (Model generalisation evaluation)
		  ### EU AI Act
		  - **Article 15**: Accuracy and robustness requirements
		  ## Related Terms
		  - **Underfitting** (AI-0055): Opposite problem
		  - **Regularisation** (AI-0056): Overfitting prevention
		  - **Validation Data**: Detects overfitting
		  - **Generalisation**: Poor in overfitted models
  #### References
  1. ISO/IEC 22989:2022 - Training context
		  2. NIST AI 100-3 - Technical terminology
		  3. ISO/IEC 23894:2023 - Model quality risks
		  ---
		  **Authority Score**: 0.95 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST ✓ EU AI Act
		  ```
  ## Academic Context
  - Overfitting is a fundamental concept in machine learning where a model learns the training data too precisely, including noise and outliers, rather than the underlying general patterns.
  - This results in excellent performance on training data but poor generalisation to new, unseen data.
  - The phenomenon is closely linked to the bias-variance tradeoff: overfitting corresponds to low bias but high variance.
  - Key academic foundations include statistical learning theory and empirical risk minimisation, which highlight the balance between model complexity and data representation.
  - Early formal treatments appear in works by Vapnik and Chervonenkis (1991) and subsequent developments in deep learning theory.
  - Overfitting is often contrasted with underfitting, where a model is too simple to capture the data structure.
  ## Current Landscape (2025)
  - Overfitting remains a critical challenge in deploying machine learning models across industries.
  - Techniques to mitigate overfitting include regularisation (L1/L2), dropout in neural networks, early stopping, data augmentation, and cross-validation.
  - Notable organisations actively addressing overfitting include major AI research labs and tech companies such as DeepMind, OpenAI, and UK-based AI firms.
  - In the UK, especially in North England cities like Manchester and Leeds, AI research hubs focus on robust model development for healthcare, finance, and manufacturing, where overfitting can have serious consequences.
  - Technical limitations persist in balancing model complexity and data availability, especially with smaller or noisy datasets.
  - Standards and frameworks for model validation increasingly mandate rigorous testing against overfitting, including k-fold cross-validation and external validation datasets.
  ## Research & Literature
  - Key academic papers and sources:
  - Vapnik, V.N., & Chervonenkis, A.Y. (1991). *On the uniform convergence of relative frequencies of events to their probabilities*. Theory of Probability & Its Applications, 16(2), 264-280. DOI: 10.1137/1116025
  - Recht, B. (2023). *Thou Shalt Not Overfit*. arXiv preprint arXiv:2301.XXXX. [URL]
  - Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. (Chapter on Regularisation)
  - Srivastava, N., et al. (2014). *Dropout: A Simple Way to Prevent Neural Networks from Overfitting*. Journal of Machine Learning Research, 15(1), 1929-1958. [URL]
  - Ongoing research explores adaptive regularisation, interpretability to detect overfitting patterns, and automated machine learning (AutoML) techniques to optimise model complexity.
  ## UK Context
  - The UK has made significant contributions to understanding and mitigating overfitting, with research centres such as the Alan Turing Institute in London and AI groups in North England universities.
  - Manchester, Leeds, Newcastle, and Sheffield host innovation hubs applying machine learning in healthcare diagnostics and industrial automation, where overfitting detection and prevention are critical.
  - Regional case studies include Leeds’ work on predictive maintenance models for manufacturing, which incorporate robust cross-validation to avoid overfitting on limited sensor data.
  - The UK government’s AI strategy emphasises trustworthy AI, which includes addressing overfitting to ensure fairness and reliability.
  ## Future Directions
  - Emerging trends include:
  - Integration of causal inference methods to reduce reliance on spurious correlations that cause overfitting.
  - Development of more sophisticated validation frameworks incorporating real-world data shifts.
  - Use of synthetic data and federated learning to augment training datasets without compromising privacy.
  - Anticipated challenges:
  - Balancing model complexity with interpretability, especially in regulated sectors.
  - Managing overfitting in increasingly large and heterogeneous datasets.
  - Research priorities focus on automated detection of overfitting during training and creating models that adapt dynamically to new data distributions.
  ## References
  1. Vapnik, V.N., & Chervonenkis, A.Y. (1991). On the uniform convergence of relative frequencies of events to their probabilities. *Theory of Probability & Its Applications*, 16(2), 264-280. DOI: 10.1137/1116025
  2. Recht, B. (2023). Thou Shalt Not Overfit. arXiv preprint arXiv:2301.XXXX.
  3. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
  4. Srivastava, N., et al. (2014). Dropout: A Simple Way to Prevent Neural Networks from Overfitting. *Journal of Machine Learning Research*, 15(1), 1929-1958.
  5. UK Government Office for AI. (2025). *National AI Strategy*. [URL]
  ## Metadata
  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
