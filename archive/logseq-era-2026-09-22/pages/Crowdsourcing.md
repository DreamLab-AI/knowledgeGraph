public:: true

# Crowdsourcing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:crowdsourcing", "@type":"Page", "title":"Crowdsourcing", "vc:slug":"crowdsourcing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:crowdsourcing",
  "@type":"Class",
  "label":"Crowdsourcing",
  "definition":"Crowdsourcing is the practice of obtaining contributions, labour or judgements from a large distributed group of people, typically through an open call mediated by an online platform. In machine learning it is widely used to collect, label and validate training data by decomposing work into microtasks distributed across many contributors. Effective crowdsourcing combines incentive design with quality-control mechanisms to aggregate noisy individual inputs into reliable results.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
    "hasPart":[{"@id":"urn:ngm:class:incentive-mechanism","label":"Incentive Mechanism"},{"@id":"urn:ngm:class:quality-control","label":"Quality Control"}],
    "uses":[{"@id":"urn:ngm:class:human-in-the-loop","label":"Human-in-the-Loop"},{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "enables":[{"@id":"urn:ngm:class:training","label":"Training"},{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}],
    "requires":[{"@id":"urn:ngm:class:quality-control","label":"Quality Control"},{"@id":"urn:ngm:class:reputation-system","label":"Reputation System"}],
    "supports":[{"@id":"urn:ngm:class:data-collection","label":"Data Collection"}],
    "dependsOn":[{"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:collective-intelligence","label":"Collective Intelligence"}],
    "relatedTo":[{"@id":"urn:ngm:class:incentive-mechanism","label":"Incentive Mechanism"},{"@id":"urn:ngm:class:reputation-system","label":"Reputation System"}],
    "contrastsWith":[{"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Crowdsourcing obtains contributions from a large distributed group via an open call, often to label or validate data. It is a form of [[Data Collection]] that draws on [[Human-in-the-Loop]] effort and [[Collective Intelligence]] to feed [[Machine Learning]].
- ### Overview
- Many tasks remain easier for humans than machines; crowdsourcing harnesses distributed human judgement at scale to perform them economically.
- Work is decomposed into small microtasks dispatched to many contributors, whose individual, noisy outputs are aggregated into reliable results.
- Quality depends as much on incentive and reputation design as on the task itself, since misaligned incentives produce low-quality or adversarial contributions.
- ### Mechanisms
- Task decomposition into microtasks suitable for non-experts.
- Redundant assignment with consensus or majority aggregation.
- Quality control through gold standards, screening and reputation.
- Incentive design to reward accurate, timely contributions.
- ### Applications
- Labelling training datasets for machine learning.
- Content moderation, transcription and translation.
- Human evaluation and preference collection for model alignment.
- ### Relationships
- partOf:: [[Data Collection]]
- hasPart:: [[Incentive Mechanism]]
- hasPart:: [[Quality Control]]
- uses:: [[Human-in-the-Loop]]
- uses:: [[Consensus]]
- enables:: [[Training]]
- enables:: [[Machine Learning]]
- requires:: [[Quality Control]]
- requires:: [[Reputation System]]
- supports:: [[Data Collection]]
- dependsOn:: [[Distributed Computing]]
- bridgesTo:: [[Collective Intelligence]]
- relatedTo:: [[Incentive Mechanism]]
- relatedTo:: [[Reputation System]]
- contrastsWith:: [[Distributed Computing]]
- ### Provenance
- updated:: 2026-06-15
