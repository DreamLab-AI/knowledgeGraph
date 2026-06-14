public:: true

# Data Lineage Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-lineage-tracking",
  "@type": "Page",
  "vc:slug": "data-lineage-tracking",
  "title": "Data Lineage Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-lineage-tracking",
  "@type": "Class",
  "label": "Data Lineage Tracking",
  "definition": "Data lineage tracking is the automated capture and maintenance of provenance metadata as data is created, transformed and moved across pipelines and platforms. It instruments transformations and queries to build a continuously updated lineage graph rather than a static map. Often expressed using provenance vocabularies such as PROV-O, it underpins reproducibility, trust and governance in data fabric architectures.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:provenance-ontology-prov-o", "label": "Provenance Ontology (PROV-O)"},
      {"@id": "urn:ngm:class:data-fabric-architecture", "label": "Data Fabric Architecture"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data lineage tracking automatically captures provenance metadata across pipelines, often modelled with the [[Provenance Ontology PROV-O]] and embedded in a [[Data Fabric Architecture]].
- ### Content
  - Tracking instruments ETL jobs, SQL engines and orchestration tools to emit lineage events that assemble into a live graph of derivations. This continuous record enables reproducibility of analyses, automated impact assessment and standards-based interchange of provenance.
