public:: true

# Versioning System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:versioning-system",
  "@type": "Page",
  "vc:slug": "versioning-system",
  "title": "Versioning System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:versioning-system",
  "@type": "Class",
  "label": "Versioning System",
  "definition": "A versioning system is a mechanism that tracks, identifies and manages successive states of an artefact such as code, data, documents or taxonomy entries over time. It records changes, supports retrieval of historical versions, and resolves concurrent edits, enabling reproducibility, auditability and rollback. In curation and registry contexts it ensures controlled evolution of records while preserving provenance.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-taxonomy-registry", "label": "Digital Taxonomy Registry"}, {"@id": "urn:ngm:class:digital-curation-platform", "label": "Digital Curation Platform"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A versioning system tracks successive states of an artefact and preserves provenance, forming part of a [[Digital Taxonomy Registry]] and a [[Digital Curation Platform]].
- ### Content
  - Versioning may be linear, branched or content-addressed, using semantic version numbers, timestamps or hashes as identifiers. It underpins reproducibility and audit by retaining historical states, recording authorship, and supporting diffing, merging and controlled deprecation.
