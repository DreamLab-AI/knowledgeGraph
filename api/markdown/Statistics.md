public:: true

# Statistics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a57a2dc7fed8ea46a932f38c9333e961f4699394db4cb59c1e1abd0f3c8bcf9",
  "@type": "Page",
  "vc:slug": "statistics",
  "title": "Statistics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:statistical-learning-theory",
      "vc:label": "Statistical Learning Theory"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Statistics"
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
  "@id": "urn:ngm:class:statistics",
  "@type": "Class",
  "label": "Statistics",
  "definition": "The discipline concerned with collecting, analysing, interpreting, and drawing conclusions from data under uncertainty, encompassing both frequentist and Bayesian frameworks for inference, estimation, and hypothesis testing.",
  "domain": "data",
  "maturity": "mature",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:probability-theory",
    "label": "Probability Theory"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:calculus",
        "label": "Calculus"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hypothesis-testing",
        "label": "Hypothesis Testing"
      },
      {
        "@id": "urn:ngm:class:estimation-theory",
        "label": "Estimation Theory"
      },
      {
        "@id": "urn:ngm:class:regression-analysis",
        "label": "Regression Analysis"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:descriptive-statistics",
        "label": "Descriptive Statistics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:statistical-learning-theory",
        "label": "Statistical Learning Theory"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:data-analysis",
        "label": "Data Analysis"
      },
      {
        "@id": "urn:ngm:class:experimental-design",
        "label": "Experimental Design"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      },
      {
        "@id": "urn:ngm:class:sampling-theory",
        "label": "Sampling Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:frequentist-inference",
        "label": "Frequentist Inference"
      },
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:confidence-intervals",
        "label": "Confidence Intervals"
      },
      {
        "@id": "urn:ngm:class:p-values",
        "label": "P-Values"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:empirical-science",
        "label": "Empirical Science"
      },
      {
        "@id": "urn:ngm:class:causal-inference",
        "label": "Causal Inference"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:deterministic-modelling",
        "label": "Deterministic Modelling"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:financial-modelling",
        "label": "Financial Modelling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-science",
        "label": "Data Science"
      },
      {
        "@id": "urn:ngm:class:stochastic-processes",
        "label": "Stochastic Processes"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mathematical-statistics",
      "label": "Mathematical Statistics"
    },
    {
      "@id": "urn:ngm:class:statistical-science",
      "label": "Statistical Science"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:statistics:49d4843163a7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a57a2dc7fed8ea46a932f38c9333e961f4699394db4cb59c1e1abd0f3c8bcf9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistical Learning Theory]]",
      "resolved": "urn:visionflow:linked:statistical-learning-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bayesian Inference]]",
      "resolved": "urn:visionflow:linked:bayesian-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - The discipline concerned with collecting, analysing, interpreting, and drawing conclusions from data under uncertainty.

- ### Semantic Classification
  - owl-class:: mathematics:Statistics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Probability Theory]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[Probability Theory]]
  - enables:: [[Statistical Learning Theory]], [[Bayesian Inference]]

- ### Content
  - Statistics provides methods for inferring properties of a population from a sample, quantifying uncertainty through estimates, confidence intervals, and hypothesis tests. It encompasses both frequentist and Bayesian approaches to inference.
  - It supplies the theoretical groundwork for empirical science and for data-driven methods in machine learning and statistical learning theory.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
