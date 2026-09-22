public:: true

# Exploratory Data Analysis

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:exploratory-data-analysis", "@type":"Page", "title":"Exploratory Data Analysis", "vc:slug":"exploratory-data-analysis", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:exploratory-data-analysis",
  "@type":"Class",
  "label":"Exploratory Data Analysis",
  "definition":"Exploratory data analysis (EDA) is the practice of summarising, visualising, and interrogating a dataset to understand its structure, distributions, relationships, and anomalies before formal modelling. Introduced as a discipline by John Tukey, it emphasises graphical methods and descriptive statistics to generate hypotheses rather than confirm them. EDA is an early, iterative phase of the data-science workflow that informs data cleaning, feature engineering, and model selection.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-analysis","label":"Data Analysis"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-science","label":"Data Science"}],
    "requires":[{"@id":"urn:ngm:class:data-preprocessing","label":"Data Preprocessing"},{"@id":"urn:ngm:class:data-cleaning","label":"Data Cleaning"}],
    "enables":[{"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"},{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"}],
    "uses":[{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"},{"@id":"urn:ngm:class:dimensionality-reduction","label":"Dimensionality Reduction"}],
    "supports":[{"@id":"urn:ngm:class:unsupervised-learning","label":"Unsupervised Learning"},{"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-cleaning","label":"Data Cleaning"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-visualisation","label":"Data Visualisation"},{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"},{"@id":"urn:ngm:class:data-science","label":"Data Science"}],
    "bridgesTo":[{"@id":"urn:ngm:class:unsupervised-learning","label":"Unsupervised Learning"}],
    "contrastsWith":[{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- **Exploratory Data Analysis** (EDA) is the [[Data Analysis]] phase in which an analyst summarises and visualises a dataset to understand it before modelling.
- It draws on [[Data Visualisation]] and descriptive statistics to surface distributions, relationships, and anomalies.
- It is an early stage of [[Data Science]] that informs [[Data Cleaning]], [[Feature Engineering]], and model choice.
- ### Overview
- EDA was formalised by John Tukey, who argued that looking at data openly and graphically should precede confirmatory inference.
- Rather than testing a fixed hypothesis, EDA is hypothesis-generating: it asks what the data can reveal about its own shape, quality, and structure.
- A typical EDA pass computes summary statistics, plots univariate distributions, examines pairwise relationships, identifies outliers and missing values, and probes for patterns or clusters.
- The insights gained guide downstream decisions — which features to construct, which transformations to apply, which models are plausible, and where the data may mislead.
- EDA is inherently iterative and interactive, often performed in notebook environments that interleave code, output, and narrative.
- ### Key aspects
- Descriptive statistics: central tendency, spread, and distribution shape.
- Visualisation: histograms, box plots, scatter plots, and correlation views via [[Data Visualisation]].
- Outlier and anomaly detection: spotting values that distort analysis.
- Missingness assessment: understanding gaps that drive [[Data Cleaning]].
- Structure discovery: clustering and [[Dimensionality Reduction]] to reveal latent structure.
- ### Applications
- Preparing data for supervised and [[Unsupervised Learning]] models.
- Validating data quality before building a [[Feature Engineering]] pipeline.
- Informing [[Predictive Analytics]] by revealing relationships and confounders.
- Communicating dataset characteristics to stakeholders early in a project.
- ### Relationships
- partOf:: [[Data Science]]
- requires:: [[Data Preprocessing]]
- requires:: [[Data Cleaning]]
- enables:: [[Feature Engineering]]
- enables:: [[Predictive Analytics]]
- uses:: [[Data Visualisation]]
- uses:: [[Dimensionality Reduction]]
- supports:: [[Unsupervised Learning]]
- supports:: [[Feature Engineering]]
- dependsOn:: [[Data Cleaning]]
- relatedTo:: [[Data Visualisation]]
- relatedTo:: [[Predictive Analytics]]
- relatedTo:: [[Data Science]]
- bridgesTo:: [[Unsupervised Learning]]
- contrastsWith:: [[Predictive Analytics]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
