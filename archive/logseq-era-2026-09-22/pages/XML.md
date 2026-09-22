public:: true

# XML

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:xml", "@type":"Page", "title":"XML", "vc:slug":"xml", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:xml",
  "@type":"Class",
  "label":"XML",
  "definition":"XML (Extensible Markup Language) is a W3C-standardised, text-based markup language for encoding documents and structured data in a format that is both human-readable and machine-processable. It defines a strict syntax of nested, attributed elements and supports schema languages (DTD, XML Schema, RELAX NG) for validation, plus a family of related standards for querying, transforming and namespacing. Once dominant for data interchange and configuration, it remains foundational to many enterprise, financial and document standards even as JSON has overtaken it for lightweight web interchange.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:data-serialization","label":"Data Serialization"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:data-serialization","label":"Data Serialization"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "uses":[{"@id":"urn:ngm:class:schema","label":"Schema"}],
    "requires":[{"@id":"urn:ngm:class:schema","label":"Schema"}],
    "supports":[{"@id":"urn:ngm:class:soap","label":"SOAP"},{"@id":"urn:ngm:class:rdf","label":"RDF"},{"@id":"urn:ngm:class:owl","label":"OWL"}],
    "implements":[{"@id":"urn:ngm:class:rdf-schema","label":"RDF Schema"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-serialization","label":"Data Serialization"}],
    "contrastsWith":[{"@id":"urn:ngm:class:yaml","label":"YAML"},{"@id":"urn:ngm:class:html","label":"HTML"}],
    "relatedTo":[{"@id":"urn:ngm:class:rest","label":"REST"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"},{"@id":"urn:ngm:class:ontology","label":"Ontology"}],
    "bridgesTo":[{"@id":"urn:ngm:class:api","label":"API"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[XML]] is a W3C markup language for structured, validatable data and documents, a form of [[Data Serialization]] that enables [[Interoperability]] and underpins standards such as [[SOAP]], [[RDF]] and [[OWL]].
  - Its strict element-and-attribute syntax is both human-readable and machine-processable.
- ### Overview
  - XML documents are trees of nested elements with attributes and text content, governed by well-formedness rules and optional schema validation.
  - Schema languages (DTD, XML Schema, RELAX NG) constrain structure and types, enabling contract-based exchange between systems.
  - A surrounding family of standards — XPath, XSLT, XQuery and namespaces — supports querying, transformation and modular vocabularies.
  - Although JSON now dominates lightweight web interchange, XML remains entrenched in document, financial and enterprise messaging standards.
- ### Key aspects
  - Strict, verifiable syntax with explicit schemas.
  - Namespaces allow mixing of independent vocabularies.
  - Rich transformation and query ecosystem.
  - Verbosity relative to JSON and YAML is a frequent trade-off.
- ### Applications
  - Document formats such as office and publishing standards.
  - Financial messaging standards including ISO 20022.
  - Semantic web serialisations for RDF and OWL.
  - Configuration files and legacy web-service payloads.
- ### Relationships
  - enables:: [[Data Serialization]]
  - enables:: [[Interoperability]]
  - uses:: [[Schema]]
  - requires:: [[Schema]]
  - supports:: [[SOAP]]
  - supports:: [[RDF]]
  - supports:: [[OWL]]
  - implements:: [[RDF Schema]]
  - dependsOn:: [[Data Serialization]]
  - contrastsWith:: [[YAML]]
  - contrastsWith:: [[HTML]]
  - relatedTo:: [[REST]]
  - relatedTo:: [[Interoperability]]
  - relatedTo:: [[Ontology]]
  - bridgesTo:: [[API]]
- ### Provenance
  - updated:: 2026-06-15
