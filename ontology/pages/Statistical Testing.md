public:: true

# Statistical Testing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:statistical-testing", "@type":"Page", "title":"Statistical Testing", "vc:slug":"statistical-testing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:statistical-testing",
  "@type":"Class",
  "label":"Statistical Testing",
  "definition":"Statistical testing is the practice of using sample data to assess evidence for or against a hypothesis about a population or process. It formalises a null and alternative hypothesis, computes a test statistic and an associated significance level, and decides whether observed effects are likely to be genuine rather than due to chance. It underpins rigorous evaluation of models, experiments and measurements.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:statistical-analysis","label":"Statistical Analysis"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:statistical-analysis","label":"Statistical Analysis"},
      {"@id":"urn:ngm:class:experimental-design","label":"Experimental Design"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"},
      {"@id":"urn:ngm:class:experimental-design","label":"Experimental Design"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},
      {"@id":"urn:ngm:class:a-b-testing","label":"A/B Testing"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"},
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"},
      {"@id":"urn:ngm:class:central-limit-theorem","label":"Central Limit Theorem"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},
      {"@id":"urn:ngm:class:uncertainty-quantification","label":"Uncertainty Quantification"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:a-b-testing","label":"A/B Testing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:statistical-analysis","label":"Statistical Analysis"},
      {"@id":"urn:ngm:class:experimental-design","label":"Experimental Design"},
      {"@id":"urn:ngm:class:uncertainty-quantification","label":"Uncertainty Quantification"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Statistical testing, a branch of [[Statistical Analysis]], uses [[Random Sampling]] and a [[Probability Distribution]] to judge whether observed effects are real or due to chance.
  - It frames a null and alternative hypothesis and supports rigorous [[Model Evaluation]] and [[Experimental Design]].

- ### Overview
  - A test posits a null hypothesis representing no effect, then asks how surprising the observed data would be if the null were true.
  - The significance level controls the rate of false positives, while statistical power governs the chance of detecting a true effect.
  - Frequentist testing complements Bayesian approaches, which instead update beliefs as probabilities.

- ### Key aspects
  - Hypothesis formulation and choice of an appropriate test statistic.
  - Significance levels, p-values and confidence intervals.
  - Power analysis and sample-size planning under [[Experimental Design]].
  - Corrections for multiple comparisons to control false discoveries.

- ### Applications
  - Validating model improvements during [[Model Evaluation]] and benchmarking.
  - Online experimentation and [[A/B Testing]] of product changes.
  - Quality control and scientific measurement under [[Uncertainty Quantification]].

- ### Relationships
  - subClassOf:: [[Statistical Analysis]]
  - partOf:: [[Experimental Design]]
  - requires:: [[Random Sampling]]
  - requires:: [[Experimental Design]]
  - enables:: [[Model Evaluation]]
  - enables:: [[A/B Testing]]
  - dependsOn:: [[Probability Distribution]]
  - uses:: [[Central Limit Theorem]]
  - supports:: [[Model Evaluation]]
  - supports:: [[Uncertainty Quantification]]
  - contrastsWith:: [[Bayesian Inference]]
  - bridgesTo:: [[A/B Testing]]
  - relatedTo:: [[Uncertainty Quantification]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
