public:: true

# Data Type

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-type", "@type":"Page", "title":"Data Type", "vc:slug":"data-type", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:data-type", "@type": "Class", "label": "Data Type", "definition": "A data type is a classification that specifies which values a piece of data may hold and which operations may be performed on it, such as integer, string, boolean, or array. Type declarations allow compilers, interpreters, and schema validators to catch category errors before or during execution, and inform how data is stored and serialised. Data types are the atomic building blocks from which composite structures such as records and schemas are constructed.", "domain": "data", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:type-system", "label": "Type System"}], "relations": {"partOf": [{"@id": "urn:ngm:class:type-system", "label": "Type System"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- A data type is a classification that specifies which values a piece of data may hold and which operations may be performed on it, such as integer, string, boolean, or array. Type declarations allow compilers, interpreters, and schema validators to catch category errors before or during execution, and inform how data is stored and serialised. Data types are the atomic building blocks from which composite structures such as records and schemas are constructed.
- ### Relationships
	- subClassOf:: [[Type System]]
	- partOf:: [[Type System]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
