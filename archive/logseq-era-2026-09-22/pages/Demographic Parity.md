public:: true

# Demographic Parity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:demographic-parity", "@type":"Page", "title":"Demographic Parity", "vc:slug":"demographic-parity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:demographic-parity",
  "@type":"Class",
  "label":"Demographic Parity",
  "definition":"Demographic parity is a group-fairness criterion requiring that a model's positive prediction rate be equal across protected groups, independent of the true label. Also called statistical parity, it is satisfied when the probability of a favourable decision does not depend on membership of a protected attribute such as gender or ethnicity. It is one of several formal, often mutually incompatible, definitions of algorithmic fairness.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:algorithmic-fairness","label":"Algorithmic Fairness"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:classification","label":"Classification"}],
    "relatedTo":[{"@id":"urn:ngm:class:disparate-impact","label":"Disparate Impact"},{"@id":"urn:ngm:class:bias","label":"Bias"},{"@id":"urn:ngm:class:responsible-ai","label":"Responsible AI"},{"@id":"urn:ngm:class:transparency","label":"Transparency"}],
    "partOf":[{"@id":"urn:ngm:class:fairness","label":"Fairness"}],
    "contrastsWith":[{"@id":"urn:ngm:class:accuracy","label":"Accuracy"}],
    "supports":[{"@id":"urn:ngm:class:fairness","label":"Fairness"}],
    "uses":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
    "implements":[{"@id":"urn:ngm:class:algorithmic-fairness","label":"Algorithmic Fairness"}],
    "dependsOn":[{"@id":"urn:ngm:class:classification","label":"Classification"}],
    "requires":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:disparate-impact","label":"Disparate Impact"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- **Demographic Parity**, also called statistical parity, is a group-[[Fairness]] criterion requiring that a model assign favourable outcomes at equal rates across protected groups. It is a concrete instance of [[Algorithmic Fairness]] and is closely tied to the legal notion of [[Disparate Impact]].
	- Formally, demographic parity holds when the positive prediction rate is independent of the protected attribute, regardless of the true label. It is computed during [[Model Evaluation]] over a [[Classification]] system and is one lens for diagnosing [[Bias]].
- ### Overview
	- Demographic parity targets equality of outcomes: every group should receive positive decisions at the same rate. This appeals directly to anti-discrimination policy and maps onto the four-fifths rule used to flag disparate impact.
	- Crucially, demographic parity ignores the ground-truth label. If the underlying base rates of the positive class genuinely differ between groups, enforcing parity can reduce accuracy and may conflict with other fairness criteria such as equalised odds. Impossibility results show these criteria generally cannot all hold at once except in degenerate cases.
	- Practitioners enforce it through pre-processing (re-weighting or re-sampling data), in-processing (fairness-constrained training objectives), or post-processing (group-specific decision thresholds).
- ### Key aspects
	- Requires equal positive prediction rates across protected groups.
	- Label-independent: does not condition on the true outcome.
	- Operationalises the legal concept of [[Disparate Impact]] and the four-fifths rule.
	- Often trades off against [[Accuracy]] and against label-conditional fairness criteria.
	- Enforceable via pre-, in-, or post-processing interventions.
- ### Applications
	- Auditing hiring, lending, and admissions models for unequal selection rates.
	- Setting group-aware thresholds to equalise approval rates in [[Classification]] pipelines.
	- Regulatory compliance reporting where outcome equality is mandated.
	- Comparative fairness dashboards that surface [[Bias]] across demographic segments.
- ### Relationships
	- hasPart:: [[Classification]]
	- relatedTo:: [[Disparate Impact]]
	- relatedTo:: [[Bias]]
	- relatedTo:: [[Responsible AI]]
	- relatedTo:: [[Transparency]]
	- partOf:: [[Fairness]]
	- contrastsWith:: [[Accuracy]]
	- supports:: [[Fairness]]
	- uses:: [[Model Evaluation]]
	- implements:: [[Algorithmic Fairness]]
	- dependsOn:: [[Classification]]
	- requires:: [[Model Evaluation]]
	- bridgesTo:: [[Disparate Impact]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
