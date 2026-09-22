public:: true

# Human Development Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:human-development-index",
  "@type": "Page",
  "vc:slug": "human-development-index",
  "title": "Human Development Index",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:human-development-index",
  "@type": "Class",
  "label": "Human Development Index",
  "definition": "The Human Development Index (HDI) is a composite statistic published by the United Nations Development Programme that ranks countries by aggregating life expectancy, education (mean and expected years of schooling), and gross national income per capita. It measures human wellbeing beyond purely economic output and is used to compare development levels and to track progress over time. The HDI underpins many analyses of inequality and policy effectiveness.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:global-inequality", "label": "Global Inequality"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Human Development Index is a composite measure of national wellbeing aggregating health, education, and income, used to study [[Global Inequality]] and development outcomes.
- ### Content
  - Computed as the geometric mean of normalised indices for the three dimensions, the HDI ranges from 0 to 1, with higher values indicating greater development. Derivative measures such as the Inequality-adjusted HDI and the Gender Development Index extend it to capture distributional and demographic disparities.
