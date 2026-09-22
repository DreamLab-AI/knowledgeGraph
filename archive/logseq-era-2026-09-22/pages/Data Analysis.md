public:: true

# Data Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-analysis",
  "@type": "Page",
  "vc:slug": "data-analysis",
  "title": "Data Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-analysis",
  "@type": "Class",
  "label": "Data Analysis",
  "definition": "Data analysis is the systematic process of inspecting, cleaning, transforming, and modelling data to extract useful information, support decision-making, and test hypotheses. It encompasses descriptive summarisation, exploratory analysis to surface structure and anomalies, inferential statistics to generalise from samples, and predictive modelling. Data analysis spans manual statistical work through to automated analytics pipelines, and it is the disciplinary core from which data science, business intelligence, and machine-learning workflows draw. Rigorous analysis attends to data quality, sampling bias, and the validity of inferential assumptions.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:process", "label": "Process"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:statistics", "label": "Statistics"},
      {"@id": "urn:ngm:class:data-analytics", "label": "Data Analytics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:time-series-analysis", "label": "Time-Series Analysis"},
      {"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"}
    ]
  },
  "quality": 0.78
}
```

- ### Definition
  - [[Data Analysis]] is the systematic process of inspecting, cleaning, transforming, and modelling data to extract information and support decisions. It is a [[Process]] that ranges from descriptive summarisation through exploratory work to inferential and predictive modelling.
- ### Relationships
  - Data analysis applies [[Statistics]] as its methodological foundation and is operationalised at scale through [[Data Analytics]] tooling. Specialised branches include [[Time-Series Analysis]] for temporally ordered data and [[Predictive Analytics]] for forward-looking inference.
- ### Content
  - The analysis workflow typically proceeds through problem framing, data acquisition and cleaning, exploratory analysis, modelling, validation, and communication of findings. Each stage shapes the credibility of the conclusions; in particular, data cleaning and assumption checking often consume the majority of analytical effort.

  - The distinction between confirmatory and exploratory analysis is methodologically important: exploratory work generates hypotheses and must not be presented as if it tested them, while confirmatory analysis pre-specifies hypotheses and procedures to preserve the validity of inferential statistics.
