public:: true

# W3C PROV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-prov",
  "@type": "Page",
  "vc:slug": "w3-c-prov",
  "title": "W3C PROV",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-prov",
  "@type": "Class",
  "label": "W3C PROV",
  "definition": "W3C PROV is a family of W3C Recommendations that define a domain-agnostic data model and serialisations for representing provenance, the records of entities, activities, and agents involved in producing or influencing a piece of data. Centred on the PROV-DM data model and PROV-O OWL ontology, it enables interoperable description of how artefacts came to be, supporting trust, reproducibility, and auditing. It is widely used in scientific workflows, data catalogues, and metadata management systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}, {"@id": "urn:ngm:class:data-management", "label": "Data Management"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - W3C PROV is a standardised model for expressing data provenance, used by [[Metadata Management]] and broader [[Data Management]] systems to record how artefacts were produced, derived, and attributed.
- ### Content
  - The PROV-O ontology maps the core PROV-DM concepts (Entity, Activity, Agent and relations such as wasDerivedFrom, wasGeneratedBy, wasAttributedTo) into RDF/OWL, enabling provenance graphs queryable via SPARQL. Adoption supports reproducible pipelines and regulatory auditability, though capturing fine-grained provenance imposes instrumentation overhead and storage cost.
