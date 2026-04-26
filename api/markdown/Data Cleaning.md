iri:: http://narrativegoldmine.com/artificial-intelligence#DataCleaning
uri:: urn:visionclaw:concept:artificial-intelligence:data-cleaning
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:data-cleaning
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Data Cleaning
content-hash:: sha256-12-90b30898e5ff
legacy-term-id:: AI-1018
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true
bridges-to:: [[Digital Asset]]

- ### Definition
  - Data Cleaning is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataCleaning
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Data Preprocessing]]
  - enables:: [[Data Analysis]]

- ### Content

  ### Definition
  Data cleaning (or data cleansing) is the process of detecting and correcting or removing inaccurate, incomplete, irrelevant, duplicated, or improperly formatted data from datasets. It is a critical preprocessing step that ensures data quality and reliability, directly impacting the accuracy and validity of machine learning models and analytical insights, often consuming 50-80% of data scientists' time.

  ### Common Data Quality Issues
  **Missing Values:**
  - Incomplete records
  - NULL, NA, NaN values
  - Empty strings
  - Placeholder values (999, -1, etc.)

  **Duplicates:**
  - Exact duplicates (identical rows)
  - Near-duplicates (similar records)
  - Multiple representations of same entity

  **Inconsistencies:**
  - Contradictory information
  - Different formats (dates, names)
  - Spelling variations
  - Encoding issues

  **Outliers:**
  - Data entry errors
  - Measurement errors
  - True extreme values
  - Statistical anomalies

  **Invalid Data:**
  - Out-of-range values
  - Wrong data types
  - Invalid categories
  - Impossible combinations

  **Structural Issues:**
  - Incorrect schema
  - Column misalignment
  - Mixed data types in columns

  ### Handling Missing Data
  **Deletion Methods:**
  - Listwise deletion (remove entire row)
  - Pairwise deletion (use available data)
  - Column deletion (if >50% missing)

  **Imputation Methods:**
  - Mean/median/mode imputation
  - Forward/backward fill (time series)
  - Interpolation
  - K-nearest neighbors imputation
  - Regression imputation
  - Multiple imputation
  - Model-based (EM algorithm)
  - Deep learning imputation

  **Special Indicators:**
  - Create "missing" category
  - Binary indicator variable
  - Preserve missingness information

  ### Outlier Detection
  **Statistical Methods:**
  - Z-score (> 3 standard deviations)
  - IQR method (Q1 - 1.5×IQR, Q3 + 1.5×IQR)
  - Percentile-based

  **Distance-Based:**
  - K-nearest neighbors
  - DBSCAN clustering
  - Local outlier factor

  **Model-Based:**
  - Isolation Forest
  - One-class SVM
  - Autoencoders

  **Domain Knowledge:**
  - Business rules
  - Physical constraints
  - Expert judgment

  ### Data Standardization
  **Text Cleaning:**
  - Remove whitespace
  - Lowercase conversion
  - Remove special characters
  - Handle unicode/encoding
  - Standardize abbreviations

  **Format Standardization:**
  - Date formats (ISO 8601)
  - Phone numbers
  - Addresses
  - Names (first/last)
  - Units of measurement

  **Categorical Variables:**
  - Consistent labeling
  - Merge similar categories
  - Handle typos
  - Standardize case

  ### Duplicate Handling
  **Exact Duplicates:**
  - Drop duplicate rows
  - Keep first/last/aggregation

  **Fuzzy Matching:**
  - Levenshtein distance
  - Phonetic matching (Soundex)
  - Token-based similarity
  - Record linkage algorithms

  **Entity Resolution:**
  - Identify same real-world entities
  - Merge records
  - Master data management

  ### Data Validation
  **Type Validation:**
  - Correct data types
  - Date parsing
  - Numeric validation

  **Range Validation:**
  - Min/max constraints
  - Business rules
  - Referential integrity

  **Consistency Checks:**
  - Cross-field validation
  - Temporal consistency
  - Logical constraints

  ### Tools and Libraries
  **Python:**
  - pandas (primary data manipulation)
  - numpy (numerical operations)
  - missingno (visualize missing data)
  - ftfy (fix text encoding)
  - dedupe (deduplication)

  **R:**
  - tidyverse (dplyr, tidyr)
  - naniar (missing data)
  - janitor (data cleaning)

  **Platforms:**
  - OpenRefine (interactive cleaning)
  - Trifacta (data wrangling)
  - Talend (ETL with cleaning)

  ### Best Practices
  1. **Document Everything:**
   - Track all cleaning steps
   - Maintain data lineage
   - Version control

  2. **Understand Your Data:**
   - Exploratory data analysis
   - Consult domain experts
   - Investigate anomalies

  3. **Preserve Raw Data:**
   - Never modify original data
   - Keep backup copies
   - Reproducible pipeline

  4. **Validate Results:**
   - Check distributions before/after
   - Verify business logic
   - Sample manual review

  5. **Automate When Possible:**
   - Scripted pipelines
   - Reusable functions
   - Scheduled jobs

  6. **Iterate:**
   - Clean, analyze, identify issues
   - Refine cleaning rules
   - Continuous improvement

  ### Impact on Machine Learning
  **Critical Importance:**
  - "Garbage in, garbage out"
  - Can improve model accuracy 5-30%
  - Prevents spurious correlations
  - Reduces overfitting
  - Improves generalization

  **Model-Specific Considerations:**
  - Tree-based: robust to some issues
  - Linear models: sensitive to outliers
  - Neural networks: need normalized data
  - Distance-based: need consistent scales

  ### Common Pitfalls
  - Over-cleaning (removing true signal)
  - Data leakage (using test set info)
  - Arbitrary imputation without justification
  - Ignoring domain knowledge
  - Not documenting cleaning decisions
  - Cleaning test set differently than training

  ### Validation Metrics
  - Completeness (% non-missing)
  - Consistency (% passing rules)
  - Accuracy (validated against source)
  - Uniqueness (% duplicates removed)
  - Validity (% within constraints)

  ### Time Investment
  Industry estimates:
  - 50-80% of data science project time
  - 60% of data engineers' time
  - Critical for project success
  - Often underestimated in planning

- ### Provenance
  - sources:: [[ISO 8601]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
