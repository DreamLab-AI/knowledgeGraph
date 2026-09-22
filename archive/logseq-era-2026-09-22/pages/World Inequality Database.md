public:: true

# World Inequality Database
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:world-inequality-database",
  "@type": "Page",
  "vc:slug": "world-inequality-database",
  "title": "World Inequality Database",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:world-inequality-database",
  "@type": "Class",
  "label": "World Inequality Database",
  "definition": "The World Inequality Database (WID.world) is an open, collaboratively maintained data resource that compiles harmonised series on the distribution of income and wealth within and between countries over long historical periods. It combines national accounts, tax records, surveys, and estimation methods to produce comparable inequality statistics, and underpins the World Inequality Report. It is a primary reference for empirical research on global inequality.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:global-inequality", "label": "Global Inequality"}, {"@id": "urn:ngm:class:economics", "label": "Economics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The World Inequality Database is an open repository of harmonised income- and wealth-distribution series, the primary empirical source for research on [[Global Inequality]] and distributional [[Economics]].
- ### Content
  - WID combines fiscal data, national accounts, and surveys using the Distributional National Accounts methodology to reconcile macro totals with micro distributions, yielding consistent top-share and percentile series across countries and decades. Its open access and methodological transparency make it a benchmark dataset, while coverage gaps in low-data regions and reliance on modelling assumptions are recognised limitations.
