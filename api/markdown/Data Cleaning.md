schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#DataCleaning
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:data-cleaning
public:: true

# Data Cleaning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d5a04c899063c22a82a9a70c87e8fe5d722410ba018d53d4402ddda38f8d3d35",
  "@type": "Page",
  "vc:slug": "data-cleaning",
  "title": "Data Cleaning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-analysis",
      "vc:label": "Data Analysis"
    },
    {
      "@id": "urn:visionflow:linked:data-preprocessing",
      "vc:label": "Data Preprocessing"
    },
    {
      "@id": "urn:visionflow:linked:iso-8601",
      "vc:label": "ISO 8601"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Digital Asset]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-90b30898e5ff"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#DataCleaning"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1018"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Cleaning"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:data-cleaning"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:data-cleaning"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d5a04c899063c22a82a9a70c87e8fe5d722410ba018d53d4402ddda38f8d3d35@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:data-cleaning",
  "@type": "Class",
  "label": "Data Cleaning",
  "definition": "Data Cleaning is a artificial intelligence concept and a type of Data Preprocessing. that enables Data Analysis.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-preprocessing",
      "label": "Data Preprocessing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:data-analysis",
        "label": "Data Analysis"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-cleaning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d5a04c899063c22a82a9a70c87e8fe5d722410ba018d53d4402ddda38f8d3d35"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Analysis]]",
      "resolved": "urn:visionflow:linked:data-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Preprocessing]]",
      "resolved": "urn:visionflow:linked:data-preprocessing",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 8601]]",
      "resolved": "urn:visionflow:linked:iso-8601",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d5a04c899063c22a82a9a70c87e8fe5d722410ba018d53d4402ddda38f8d3d35@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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
