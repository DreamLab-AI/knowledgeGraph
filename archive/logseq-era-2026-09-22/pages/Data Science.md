public:: true

# Data Science

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-science", "@type":"Page", "title":"Data Science", "vc:slug":"data-science", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-science",
  "@type":"Class",
  "label":"Data Science",
  "definition":"Data science is an interdisciplinary field that combines statistics, programming, and domain knowledge to extract insight and build predictive models from data. It spans the full lifecycle from data acquisition and cleaning through exploratory analysis, modelling, and communication of results. Data science underpins evidence-based decision-making and supplies the analytical foundation for applied machine learning.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:statistics","label":"Statistics"},{"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"}],
    "partOf":[{"@id":"urn:ngm:class:data-analytics","label":"Data Analytics"}],
    "requires":[{"@id":"urn:ngm:class:statistics","label":"Statistics"},{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "enables":[{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"},{"@id":"urn:ngm:class:decision-support","label":"Decision Support"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "uses":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:python","label":"Python"}],
    "supports":[{"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"},{"@id":"urn:ngm:class:decision-support","label":"Decision Support"}],
    "implements":[{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}],
    "contrastsWith":[{"@id":"urn:ngm:class:data-engineering","label":"Data Engineering"}],
    "relatedTo":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"},{"@id":"urn:ngm:class:unsupervised-learning","label":"Unsupervised Learning"}],
    "bridgesTo":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Data science combines [[Statistics]], programming and domain knowledge to extract insight and build predictive models, spanning acquisition, cleaning, analysis and communication.
- It is a specialisation of [[Data Analytics]] and supplies the analytical foundation that [[Machine Learning]] applies in practice.
- ### Overview
- Data science treats data as the raw material of discovery: practitioners frame questions, gather and clean data, explore it, model relationships, and translate findings into decisions.
- Statistical reasoning anchors the discipline, ensuring conclusions account for uncertainty, bias and sampling.
- Programming — commonly in [[Python]] — operationalises analysis at scale, while [[Feature Engineering]] turns raw inputs into informative model variables.
- The field overlaps heavily with [[Machine Learning]] but emphasises the whole workflow and the communication of results to support [[Decision Support]].
- ### Key aspects
- Statistical foundation: inference, estimation and hypothesis testing rooted in [[Statistics]].
- Data preparation: cleaning and shaping inputs, relying on upstream [[Data Engineering]].
- Modelling: applying [[Supervised Learning]] and [[Unsupervised Learning]] to find structure and make predictions.
- Communication: presenting results through [[Data Visualisation]] for non-technical stakeholders.
- ### Mechanisms
- Exploratory analysis surfaces structure and anomalies before modelling.
- [[Feature Engineering]] transforms raw data into predictors that improve model performance.
- Cross-validation and statistical testing guard against overfitting and spurious findings.
- Pipelines built in [[Python]] reproduce analyses and feed [[Predictive Analytics]].
- ### Applications
- Forecasting and [[Predictive Analytics]] across commerce, health and science.
- [[Business Intelligence]] and [[Decision Support]] grounded in quantitative evidence.
- Experimentation and causal analysis to evaluate interventions.
- Powering applied [[Deep Learning]] and broader [[Machine Learning]] systems.
- ### Relationships
- hasPart:: [[Statistics]]
- hasPart:: [[Feature Engineering]]
- partOf:: [[Data Analytics]]
- requires:: [[Statistics]]
- requires:: [[Data Engineering]]
- enables:: [[Predictive Analytics]]
- enables:: [[Decision Support]]
- dependsOn:: [[Data Engineering]]
- uses:: [[Machine Learning]]
- uses:: [[Python]]
- supports:: [[Business Intelligence]]
- supports:: [[Decision Support]]
- implements:: [[Supervised Learning]]
- contrastsWith:: [[Data Engineering]]
- relatedTo:: [[Deep Learning]]
- relatedTo:: [[Data Visualisation]]
- relatedTo:: [[Unsupervised Learning]]
- bridgesTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
- inferenceRule:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
