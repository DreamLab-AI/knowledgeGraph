public:: true

# MLCommons
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mlcommons",
  "@type": "Page",
  "vc:slug": "mlcommons",
  "title": "MLCommons",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mlcommons",
  "@type": "Class",
  "label": "MLCommons",
  "definition": "MLCommons is an open engineering consortium that builds benchmarks, datasets, and best practices to accelerate machine learning innovation in a fair and reproducible way. It is best known for the MLPerf benchmark suites, which measure training and inference performance across hardware and software stacks. Membership includes major chip vendors, cloud providers, and research institutions.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"},
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation Benchmarks and Leaderboards"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - MLCommons is an open consortium producing ML benchmarks and datasets, most notably MLPerf. It standardises measurement of [[Compute Infrastructure]] and contributes to [[Evaluation Benchmarks and Leaderboards]].
- ### Content
  - MLPerf defines tightly specified training and inference tasks with rules ensuring comparable, audited submissions, giving the industry a neutral basis for hardware and system claims. Beyond benchmarks, MLCommons curates large open datasets and develops standards for safety and data quality.
