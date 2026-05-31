public:: true

# Validation Constraints
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:validation-constraints",
  "@type": "Page",
  "vc:slug": "validation-constraints",
  "title": "Validation Constraints",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:validation-constraints",
  "@type": "Class",
  "label": "Validation Constraints",
  "definition": "Validation constraints are the formally specified rules that data or metadata must satisfy to be considered valid against a schema, covering datatypes, cardinality, value ranges, required fields and structural relationships. Expressed through languages such as SHACL, JSON Schema or XSD, they let systems automatically verify conformance and reject malformed input. They are an integral part of metadata standards and ontology schemas.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"}, {"@id": "urn:ngm:class:metaverse-ontology-schema", "label": "Metaverse Ontology Schema"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Validation constraints define the rules that data must satisfy to conform to a schema, forming part of a [[Metadata Standard]] and a [[Metaverse Ontology Schema]].
- ### Content
  - Constraint languages such as SHACL and JSON Schema express closed-world checks on shape, datatype and cardinality. Validators apply these rules to assert conformance, surface violations with diagnostics, and gate data ingestion or publication pipelines.
