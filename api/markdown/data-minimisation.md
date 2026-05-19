- ### Definition
  - Data Minimisation is a privacy principle and GDPR requirement (Article 5(1)(c)) mandating that personal data collection and processing be limited to what is adequate, relevant, and necessary for specified purposes, reducing privacy risks by avoiding accumulation of excessive data that could be misused, breached, or enable function creep. This principle implements practical strategies including purpose-bound collection where data requirements are determined by explicitly defined processing purposes with only necessary attributes collected, feature selection applying machine learning techniques identifying minimal feature sets achieving acceptable model performance without extraneous predictors, dimensionality reduction using methods like principal component analysis or autoencoders compressing high-dimensional data while preserving essential information, data aggregation combining detailed records into summary statistics suitable for analysis without individual-level granularity, statistical sampling training models on representative subsets rather than entire populations when full datasets unnecessary, and retention limitation automatically deleting data when no longer needed for original purposes or legal obligations. Implementation in AI systems involves analyzing feature importance to identify and remove low-contribution attributes, applying regularization techniques (L1 lasso) that inherently perform feature selection by driving irrelevant coefficients to zero, using early stopping in training to prevent models from learning unnecessarily complex patterns requiring excessive data, and implementing privacy-preserving alternatives like federated learning avoiding data centralization or differential privacy enabling aggregate statistics without raw data collection. Benefits include reduced privacy risk with smaller attack surface for breaches or misuse, compliance demonstration satisfying GDPR data minimization requirements, storage savings from reduced data volumes particularly for large-scale AI applications, processing efficiency with smaller datasets enabling faster training and inference, and improved model generalization as minimization reduces overfitting risks from irrelevant features. Challenges include tension with AI performance where models often improve with more data across more dimensions creating direct conflict with minimization principle, difficulty predicting future uses as strictly minimized data may preclude valuable secondary analyses, and technical complexity of feature selection requiring domain expertise and careful validation that minimization doesn't eliminate critical predictive information, though techniques like model distillation and knowledge transfer enable training on comprehensive data then compressing to minimal representations for deployment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataMinimisation
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  0426 Data Minimisation — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR Article 5(1)(c)]], [[GDPR Article 25]], [[ISO 29100]]
  - migration-date:: 2026-04-26T00:00:00Z