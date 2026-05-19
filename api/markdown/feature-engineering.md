- ### Definition
  - Feature Engineering is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureEngineering
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Data Preprocessing]]
  - bridges-to:: [[Autonomous Robot]], [[Digital Twin]]

- ### Content

  ### Definition
  Feature engineering is the process of using domain knowledge and creativity to transform raw data into meaningful features (input variables) that better represent the underlying problem to predictive models, thereby improving model accuracy. It involves creating new features, transforming existing ones, selecting relevant variables, and encoding information in ways that make patterns more apparent to machine learning algorithms.

  ### Importance
  - Often the difference between good and great models
  - Can improve accuracy more than algorithm tuning
  - Domain knowledge crucial for insights
  - "Applied machine learning is basically feature engineering" - Andrew Ng
  - Automated feature engineering emerging but human expertise still critical

  ### Core Techniques
  **Creating New Features:**
  - Polynomial features (x², x³, x×y)
  - Interaction terms (combining features)
  - Aggregations (sum, mean, max, count)
  - Statistical measures (rolling mean, std)
  - Ratios and differences
  - Domain-specific calculations

  **Feature Transformation:**
  - Normalization/standardization
  - Log/square root/box-cox transforms
  - Binning/discretization
  - One-hot encoding (categorical → binary)
  - Target encoding (mean encoding)
  - Frequency encoding

  **Temporal Features:**
  - Date decomposition (year, month, day, weekday)
  - Time since event
  - Time between events
  - Cyclical encoding (sin/cos for hours, months)
  - Lag features
  - Rolling statistics

  **Text Features:**
  - Bag of words
  - TF-IDF
  - N-grams
  - Word embeddings (Word2Vec, GloVe)
  - Text statistics (length, word count)
  - Sentiment scores

  **Geospatial Features:**
  - Distance calculations
  - Clustering locations
  - Proximity to points of interest
  - Geographic binning
  - Coordinate transformations

  ### Encoding Categorical Variables
  **Nominal Categories:**
  - One-hot encoding (binary columns)
  - Binary encoding
  - Hash encoding
  - Leave-one-out encoding

  **Ordinal Categories:**
  - Label encoding (ordered integers)
  - Custom mapping based on domain

  **High-Cardinality Categories:**
  - Target encoding (mean of target per category)
  - Frequency encoding
  - Embedding layers (deep learning)
  - Grouping rare categories

  ### Feature Extraction from Complex Data
  **Images:**
  - Edge detection
  - Color histograms
  - Texture features (GLCM)
  - Deep learning embeddings (CNN features)
  - Object detection outputs

  **Time Series:**
  - Fourier transforms (frequency domain)
  - Autocorrelation
  - Seasonality decomposition
  - Statistical features (tsfresh library)

  **Graphs/Networks:**
  - Node degree
  - Centrality measures
  - Community detection
  - Path-based features

  ### Feature Selection
  **Filter Methods:**
  - Correlation with target
  - Mutual information
  - Chi-square test
  - ANOVA F-test

  **Wrapper Methods:**
  - Forward selection
  - Backward elimination
  - Recursive feature elimination (RFE)

  **Embedded Methods:**
  - L1 regularization (Lasso)
  - Tree-based feature importance
  - Elastic Net

  **Dimensionality Reduction:**
  - PCA (Principal Component Analysis)
  - LDA (Linear Discriminant Analysis)
  - t-SNE, UMAP (visualization)
  - Autoencoders

  ### Domain-Specific Examples
  **E-commerce:**
  - Customer lifetime value
  - Days since last purchase
  - Purchase frequency
  - Category preferences
  - Price sensitivity

  **Finance:**
  - Moving averages
  - RSI, MACD indicators
  - Volatility measures
  - Debt-to-income ratio
  - Credit utilization

  **Healthcare:**
  - BMI (from height/weight)
  - Age groups
  - Risk scores
  - Treatment response indicators
  - Symptom combinations

  **NLP:**
  - Word embeddings
  - Part-of-speech tags
  - Named entity features
  - Syntax tree features
  - Readability scores

  ### Automated Feature Engineering
  **Tools:**
  - Featuretools (automated generation)
  - tsfresh (time series)
  - AutoFeat (polynomial)
  - H2O Driverless AI

  **Deep Learning:**
  - Representation learning
  - Autoencoders
  - Embedding layers
  - End-to-end learning

  ### Best Practices
  1. **Start with domain knowledge**
   - Consult experts
   - Understand business logic
   - Research domain literature

  2. **Exploratory Data Analysis**
   - Visualize distributions
   - Correlation analysis
   - Identify patterns

  3. **Iterate and validate**
   - Cross-validation
   - Monitor performance
   - A/B testing in production

  4. **Handle data leakage**
   - No future information
   - Separate train/test properly
   - Fit transformers on training only

  5. **Document features**
   - Clear naming conventions
   - Feature definitions
   - Transformation logic

  6. **Consider scalability**
   - Computation time
   - Memory usage
   - Real-time vs batch

  ### Common Pitfalls
  - **Data leakage:** Using target information
  - **Overfitting:** Too many engineered features
  - **Complexity:** Hard to maintain/interpret
  - **Computational cost:** Expensive calculations
  - **Ignoring interactions:** Missing synergies
  - **Not standardizing:** Different scales cause issues

  ### Feature Engineering Pipeline
  ```python
  # Typical workflow
  1. Load raw data
  2. Handle missing values
  3. Encode categorical variables
  4. Create domain-specific features
  5. Generate interaction terms
  6. Scale/normalize
  7. Select features
  8. Validate on holdout set
  9. Deploy with same transformations
  ```

  ### Evaluation
  **Feature Importance:**
  - Permutation importance
  - SHAP values
  - Tree-based importance
  - Correlation analysis

  **Performance Metrics:**
  - Model accuracy improvement
  - Cross-validation scores
  - Learning curves
  - Ablation studies (remove features)

  ### Modern Trends
  - Automated ML (AutoML) includes automated feature engineering
  - Deep learning reduces need (learns features)
  - Graph neural networks (relational features)
  - Transfer learning (pre-trained embeddings)
  - Feature stores (centralized feature management)

  ### Impact on Different Models
  - **Linear models:** Benefit greatly (need explicit features)
  - **Tree-based:** Less critical (handle interactions)
  - **Neural networks:** Can learn features but good engineering helps
  - **Distance-based:** Critical (KNN, SVM sensitive to scale)

  Feature engineering remains an art and science combining domain expertise, creativity, statistical knowledge, and iterative experimentation to unlock the full potential of machine learning models.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z