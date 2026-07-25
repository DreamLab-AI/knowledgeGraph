public:: true

# Sampling Theory
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:sampling-theory", "@type":"Page", "title":"Sampling Theory", "vc:slug":"sampling-theory", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:sampling-theory",
  "@type":"Class",
  "label":"Sampling Theory",
  "definition":"Sampling theory is the body of statistical and signal-processing principles governing how a subset of observations is selected from a larger population or continuous signal so that valid inferences can be drawn about the whole. In statistics it formalises how representative samples are drawn, how estimator variance and bias behave, and how confidence in conclusions scales with sample size. In signal processing it specifies the conditions under which a continuous signal can be reconstructed without loss from discrete samples. The discipline underpins survey design, experimental design, digital signal acquisition, and Monte Carlo estimation.",
  "domain":"data",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:statistics","label":"Statistics"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:probability-theory","label":"Probability Theory"},
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:central-limit-theorem","label":"Central Limit Theorem"},
      {"@id":"urn:ngm:class:probability-theory","label":"Probability Theory"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"},
      {"@id":"urn:ngm:class:sampling","label":"Sampling"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:data-collection","label":"Data Collection"},
      {"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"},
      {"@id":"urn:ngm:class:data-quality","label":"Data Quality"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:probability-theory","label":"Probability Theory"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:bias","label":"Bias"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:central-limit-theorem","label":"Central Limit Theorem"},
      {"@id":"urn:ngm:class:data-quality","label":"Data Quality"},
      {"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Sampling theory studies how observations are drawn from a population or continuous signal so that conclusions about the whole remain valid. It bridges [[Statistics]], [[Probability Theory]], and [[Signal Processing]].
- It underwrites both inferential statistics and the conversion of continuous phenomena into discrete data through [[Random Sampling]].
- ### Overview
- In the statistical tradition, sampling theory describes how a representative subset is selected, how estimator properties such as variance and bias depend on the sampling scheme, and how confidence scales with sample size.
- In the signal-processing tradition, it states the conditions under which a band-limited continuous signal can be reconstructed exactly from discrete samples, the foundation of all analogue-to-digital acquisition.
- The two traditions share a common concern: extracting maximal information from a finite, discrete subset of an effectively infinite whole.
- ### Key aspects
- Probability sampling designs: simple random, stratified, cluster, and systematic schemes.
- Estimator behaviour: unbiasedness, consistency, and the convergence guaranteed by the [[Central Limit Theorem]].
- Sample-size determination and the trade-off between cost and precision.
- The sampling rate and reconstruction conditions that prevent information loss in discretised signals.
- ### Applications
- Survey research, opinion polling, and official statistics.
- Quality control and acceptance sampling in manufacturing.
- Digital audio, imaging, and sensor acquisition pipelines.
- Monte Carlo integration and stochastic simulation.
- ### Relationships
- subClassOf:: [[Statistics]]
- requires:: [[Probability Theory]]
- requires:: [[Random Sampling]]
- dependsOn:: [[Central Limit Theorem]]
- hasPart:: [[Random Sampling]]
- hasPart:: [[Sampling]]
- enables:: [[Data Collection]]
- enables:: [[Signal Processing]]
- supports:: [[Data Quality]]
- contrastsWith:: [[Bias]]
- relatedTo:: [[Data Quality]]
- ### Provenance
- updated:: 2026-06-15
