public:: true

# OpenLineage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-lineage",
  "@type": "Page",
  "vc:slug": "open-lineage",
  "title": "OpenLineage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-lineage",
  "@type": "Class",
  "label": "OpenLineage",
  "definition": "OpenLineage is an open standard and specification for collecting data-lineage metadata from data pipelines as they run. It defines a common event model describing jobs, runs, datasets, and their input/output relationships, emitted by instrumented orchestration and processing tools. This enables consistent tracking of how data is produced and transformed across heterogeneous platforms for governance, debugging, and impact analysis.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - OpenLineage is an open specification for capturing data-lineage events from pipelines, providing the standardized metadata that systems for [[Metadata Management]] consume to trace data provenance.
- ### Content
  - Its event model describes jobs, runs, and datasets with their input/output edges, emitted by instrumented orchestrators and engines. By unifying lineage collection across diverse platforms, OpenLineage supports governance, root-cause analysis, and impact assessment over complex data ecosystems.
