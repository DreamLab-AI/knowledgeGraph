public:: true

# One Hot Encoding

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:one-hot-encoding",
  "@type": "Page",
  "title": "One Hot Encoding",
  "vc:slug": "one-hot-encoding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:one-hot-encoding",
  "@type": "Class",
  "label": "One Hot Encoding",
  "definition": "One hot encoding is a representation technique that converts categorical variables into binary vectors, where each category is mapped to a vector containing a single high (1) value and all other positions set to zero. It removes any implied ordinal relationship between categories, allowing machine learning models that operate on numeric input to consume nominal data without inferring spurious magnitude. The dimensionality of the encoding equals the cardinality of the category set, which can become sparse and high-dimensional for variables with many levels.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:feature-engineering",
      "label": "Feature Engineering"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:token-embedding",
        "label": "Token Embedding"
      },
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - One hot encoding is a representation technique that converts categorical variables into binary vectors, where each category is mapped to a vector containing a single high (1) value and all other positions set to zero. It removes any implied ordinal relationship between categories, allowing machine learning models that operate on numeric input to consume nominal data without inferring spurious magnitude. The dimensionality of the encoding equals the cardinality of the category set, which can become sparse and high-dimensional for variables with many levels.
  - Related core concepts: [[Feature Engineering]], [[Embedding]], [[Data Preprocessing]], [[Neural Network]].
- ### Overview
  - As the simplest and most interpretable encoding for nominal categorical features, one hot encoding underpins a large share of classical and deep learning pipelines. Each level of a categorical field becomes its own indicator column, so a colour field with values red, green and blue yields three mutually exclusive binary columns. The technique avoids the false assumption that adjacent integer codes carry meaningful distance, which would otherwise distort distance-based and gradient-based learners.
  - It is modelled as a subclass of [[Feature Engineering]] within the artificial-intelligence domain.
  - The choice between one hot encoding and learned embeddings is a classic representational trade-off. One hot vectors are exact, interpretable and require no training, but they grow linearly with vocabulary size and treat every category as equidistant from every other. Learned embeddings compress categories into a dense low-dimensional space where similar categories sit close together, at the cost of interpretability and a training stage.
  - In practice, encoders fit on training data record the observed category set, so a deployed pipeline must decide how to treat categories that never appeared during fitting. Common strategies reserve an explicit unknown slot, hash categories into a fixed number of buckets, or drop the row, each with different robustness and leakage characteristics.
- ### Key aspects
  - Cardinality drives dimensionality: a field with k levels produces k indicator columns, so high-cardinality fields can cause a combinatorial blow-up.
  - Sparsity: encoded vectors are mostly zeros, which favours sparse storage formats and can interact poorly with dense neural layers.
  - Reference category handling: dropping one column (dummy encoding) avoids the dummy-variable trap in linear models with an intercept.
  - Out-of-vocabulary handling: unseen categories at inference need an explicit fallback or reserved slot.
- ### Applications
  - Preparing nominal features for logistic regression, gradient-boosted trees and linear models.
  - Encoding discrete tokens before feeding them into the input layer of a neural network, often as a precursor to a learned embedding.
  - Representing categorical state in tabular reinforcement learning and recommendation systems.
- ### Considerations
  - High-cardinality identifiers such as user or product IDs are poor candidates because the encoding explodes; target, frequency or embedding encodings usually serve better.
  - Tree-based models can tolerate label (integer) encoding directly, so one hot encoding is most valuable for linear and distance-based learners.
  - Multicollinearity from the full set of indicators can destabilise linear models with an intercept, motivating dropping a reference level.
- ### Relationships
  - subClassOf:: [[Feature Engineering]]
  - contrastsWith:: [[Token Embedding]]
  - contrastsWith:: [[Embedding]]
  - partOf:: [[Feature Engineering]]
  - uses:: [[Linear Algebra]]
  - enables:: [[Neural Network]]
  - enables:: [[Recommendation System]]
  - supports:: [[Deep Learning]]
  - requires:: [[Data Preprocessing]]
  - relatedTo:: [[Data Preprocessing]]
  - relatedTo:: [[Recommendation System]]
  - bridgesTo:: [[Embedding]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
