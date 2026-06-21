- ### Definition
  - **Dropout** is a regularisation technique that randomly deactivates (drops) a fraction of neurons during each training iteration, preventing co-adaptation and reducing overfitting. Dropout rate (typically 0.2–0.5) controls the fraction of neurons dropped. At inference time, all neurons are active but their outputs are scaled by the retention probability, approximating an ensemble of exponentially many sub-networks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Dropout
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]]
  - partOf [[Regularisation]]
  - requires [[Neural Network]]
  - requires [[Training]]
  - contrastsWith [[Overfitting]]
  - enables [[Deep Learning]]

- ### Content
  - **Dropout** is a regularisation technique that randomly deactivates (drops) a fraction of neurons during each training iteration, preventing co-adaptation and reducing overfitting. Dropout rate (typically 0.2–0.5) controls the fraction of neurons dropped.

  ## Standards Alignment

  ### ISO/IEC Standards
  - **[[ISO/IEC 22989:2022]]**: Training and regularisation

  ### NIST AI RMF
  - **Function**: MAP (Training techniques)

  ## Related Terms
  - **Regularisation** (AI-0056): Parent category
  - **Overfitting** (AI-0054): Prevented by dropout
  - **Training** (AI-0041): Applies dropout
  - **Neural Network**: Uses dropout layers

  ## References
  1. Srivastava et al. - "Dropout: A Simple Way to Prevent Neural Networks from Overfitting" - JMLR, 2014
  2. [[ISO/IEC 22989:2022]] - Training techniques
  3. [[NIST AI RMF]] - MAP function mapping

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]], [[NIST AI RMF]]
  - migration-date:: 2026-04-26T00:00:00Z