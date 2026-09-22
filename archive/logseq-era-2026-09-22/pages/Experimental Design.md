public:: true

# Experimental Design
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:experimental-design", "@type":"Page", "title":"Experimental Design", "vc:slug":"experimental-design", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:experimental-design",
  "@type":"Class",
  "label":"Experimental Design",
  "definition":"Experimental design is the systematic planning of investigations so that the resulting data can support valid, efficient, and unbiased inferences about cause and effect. It specifies the treatments, controls, randomisation, replication, and blocking that isolate the effect of manipulated variables from confounders and noise. Grounded in the scientific method and statistical theory, it governs how hypotheses are tested, how sample sizes and power are determined, and how variability is controlled, and it underpins disciplined experimentation from laboratory trials to large-scale online A/B tests.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:scientific-method","label":"Scientific Method"},{"@id":"urn:ngm:class:ai-research-area","label":"AI Research Area"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:scientific-method","label":"Scientific Method"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:hypothesis-testing","label":"Hypothesis Testing"},
      {"@id":"urn:ngm:class:sampling","label":"Sampling"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"},
      {"@id":"urn:ngm:class:data-collection","label":"Data Collection"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:causal-inference","label":"Causal Inference"},
      {"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:a-b-testing","label":"A/B Testing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:data-analysis","label":"Data Analysis"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:scientific-method","label":"Scientific Method"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"},
      {"@id":"urn:ngm:class:causal-inference","label":"Causal Inference"},
      {"@id":"urn:ngm:class:a-b-testing","label":"A/B Testing"},
      {"@id":"urn:ngm:class:data-analysis","label":"Data Analysis"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Experimental design is the planning of studies so their data yield valid, efficient, unbiased causal inferences.
	- It is the planning arm of the [[Scientific Method]], drawing on [[Statistics]] for rigour.
	- It specifies controls, randomisation, and replication to separate signal from confounders.
	- It enables credible [[Causal Inference]] and supports [[Reproducibility]].
- ### Overview
	- Good design decides what is varied, what is held constant, and how observations are allocated before data are gathered.
	- Randomisation balances unknown confounders across treatment groups, while blocking removes known nuisance variation.
	- Replication and adequate power ensure effects can be detected and estimated precisely.
	- The same principles scale from controlled lab experiments to online experimentation at internet scale.
- ### Mechanisms
	- Randomised assignment of units to treatment and control conditions.
	- Blocking and stratification to control identifiable sources of variability.
	- Factorial structures to study multiple factors and their interactions efficiently.
	- Power and sample-size analysis to set the scale of the study.
- ### Applications
	- Clinical and laboratory trials testing interventions.
	- [[A/B Testing]] of product and interface changes.
	- Machine-learning ablations and benchmark comparisons.
	- Agricultural, industrial, and social-science field experiments.
- ### Relationships
	- subClassOf:: [[Scientific Method]]
	- subClassOf:: [[AI Research Area]]
	- partOf:: [[Scientific Method]]
	- requires:: [[Hypothesis Testing]]
	- requires:: [[Sampling]]
	- dependsOn:: [[Statistics]]
	- dependsOn:: [[Data Collection]]
	- enables:: [[Causal Inference]]
	- enables:: [[Reproducibility]]
	- uses:: [[A/B Testing]]
	- supports:: [[Data Analysis]]
	- implements:: [[Scientific Method]]
	- relatedTo:: [[Statistics]]
	- relatedTo:: [[Causal Inference]]
	- relatedTo:: [[A/B Testing]]
	- relatedTo:: [[Data Analysis]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
