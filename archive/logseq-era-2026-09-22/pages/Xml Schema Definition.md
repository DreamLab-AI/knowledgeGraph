public:: true

# Xml Schema Definition

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:xml-schema-definition", "@type":"Page", "title":"Xml Schema Definition", "vc:slug":"xml-schema-definition", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:xml-schema-definition",
  "@type":"Class",
  "label":"Xml Schema Definition",
  "definition":"XML Schema Definition (XSD) is a W3C-recommended language for describing and constraining the structure, content and data types of XML documents. An XSD declares permitted elements, attributes, ordering, cardinality and strongly typed values, enabling validators to confirm that an instance document conforms to an agreed contract. It supersedes the older Document Type Definition (DTD) by adding namespace awareness, a rich built-in type system and support for derivation, making it foundational to many enterprise, document and messaging standards.",
  "domain":"data",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:data-schema","label":"Data Schema"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:xml","label":"XML"}],
    "uses":[{"@id":"urn:ngm:class:xml","label":"XML"}],
    "enables":[{"@id":"urn:ngm:class:data-validation","label":"Data Validation"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "supports":[{"@id":"urn:ngm:class:soap","label":"SOAP"},{"@id":"urn:ngm:class:data-serialization","label":"Data Serialization"}],
    "requires":[{"@id":"urn:ngm:class:xml","label":"XML"}],
    "implements":[{"@id":"urn:ngm:class:data-schema","label":"Data Schema"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards-organization","label":"Standards Organization"}],
    "contrastsWith":[{"@id":"urn:ngm:class:rdf","label":"RDF"},{"@id":"urn:ngm:class:owl","label":"OWL"}],
    "dependsOn":[{"@id":"urn:ngm:class:xml","label":"XML"}],
    "bridgesTo":[{"@id":"urn:ngm:class:schema-registry","label":"Schema Registry"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-schema","label":"Data Schema"},{"@id":"urn:ngm:class:schema","label":"Schema"},{"@id":"urn:ngm:class:graph-ql","label":"GraphQL"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- XML Schema Definition ([[XML]] [[Schema]]) is the W3C language for formally constraining the structure and datatypes of [[XML]] documents.
- It provides a machine-readable contract that drives [[Data Validation]] and underpins [[Interoperability]] across systems exchanging structured documents.
- An XSD declares element and attribute declarations, complex and simple types, namespaces and cardinality, replacing the weaker [[Data Schema]] expressiveness of legacy DTDs.
- ### Overview
- XSD was published as a W3C Recommendation to give XML a strongly typed, namespace-aware schema language. A schema document is itself well-formed XML, allowing schemas to be authored, validated and transformed with the same tooling as the instance documents they describe.
- The type system distinguishes simple types (atomic values such as integers, dates and constrained strings) from complex types (elements containing other elements or attributes), and supports derivation by extension and restriction.
- Validation against an XSD answers two questions: is the document well-formed XML, and does it satisfy the structural and datatype constraints declared in the schema.
- ### Key aspects
- Strong datatyping with a comprehensive set of built-in primitive and derived types.
- First-class namespace support enabling composition of vocabularies from multiple authorities.
- Constraint facets (pattern, enumeration, length, range) for fine-grained value validation.
- Type derivation, substitution groups and abstract types for reuse and polymorphism.
- Identity constraints (key, keyref, unique) expressing referential integrity within a document.
- ### Applications
- Contract definition for [[SOAP]] web services and enterprise messaging payloads.
- Validation of configuration, financial and document interchange formats.
- Code generation and data binding in many programming languages.
- Schema governance through a [[Schema Registry]] in regulated and high-integrity domains.
- ### Relationships
- partOf:: [[XML]]
- uses:: [[XML]]
- enables:: [[Data Validation]]
- enables:: [[Interoperability]]
- supports:: [[SOAP]]
- supports:: [[Data Serialization]]
- requires:: [[XML]]
- implements:: [[Data Schema]]
- standardizedBy:: [[Standards Organization]]
- contrastsWith:: [[RDF]]
- contrastsWith:: [[OWL]]
- dependsOn:: [[XML]]
- bridgesTo:: [[Schema Registry]]
- relatedTo:: [[Data Schema]]
- relatedTo:: [[Schema]]
- relatedTo:: [[GraphQL]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
