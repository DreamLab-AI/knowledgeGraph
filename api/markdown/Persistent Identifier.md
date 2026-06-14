public:: true

# Persistent Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:persistent-identifier",
  "@type": "Page",
  "vc:slug": "persistent-identifier",
  "title": "Persistent Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:persistent-identifier",
  "@type": "Class",
  "label": "Persistent Identifier",
  "definition": "A persistent identifier (PID) is a long-lasting, globally unique reference to a digital object that remains stable even as the object's location or custodian changes. PIDs such as DOIs, Handles, and ARKs are resolved through a managed indirection service that maps the identifier to current metadata and access endpoints. They are foundational to citation, provenance, and interoperability in scholarly and digital-object infrastructure.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-objects", "label": "Digital Objects"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A persistent identifier is a stable, resolvable, globally unique reference that decouples a [[Digital Objects]] identity from its storage location.
- ### Content
  - PID systems separate identity from address through a resolver that maps the opaque identifier to current metadata and access URLs, so links survive relocation and avoid reference rot. Schemes including DOI, Handle, ARK, and ORCID layer governance, metadata, and resolution policies on top of this indirection, making PIDs the backbone of reliable citation and machine-readable provenance.
