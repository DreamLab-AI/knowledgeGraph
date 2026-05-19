public:: true

# Namespace Declarations
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:06c9959e5fc2149c3ae14f9539bfa8b4b18f9f66349e80f3d67b7ffdd8700f6a",
  "@type": "Page",
  "vc:slug": "namespace-declarations",
  "title": "Namespace Declarations",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ontology-interoperability",
      "vc:label": "Ontology Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-web-standards",
      "vc:label": "Semantic Web Standards"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9977"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Namespace Declarations"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:namespace-declarations",
  "@type": "Class",
  "label": "Namespace Declarations",
  "definition": "XML and RDF syntax constructs that associate short prefix identifiers with full namespace URIs, enabling the use of qualified names (QNames) to abbreviate long IRIs into human-readable yet machine-processable references in semantic web documents.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:semantic-web-standards",
      "label": "Semantic Web Standards"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ontology-interoperability",
        "label": "Ontology Interoperability"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:namespace-declarations:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:06c9959e5fc2149c3ae14f9539bfa8b4b18f9f66349e80f3d67b7ffdd8700f6a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ontology Interoperability]]",
      "resolved": "urn:visionflow:linked:ontology-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Standards]]",
      "resolved": "urn:visionflow:owl:class:semantic-web-standards",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - XML and RDF syntax constructs that associate short prefix identifiers with full namespace URIs, enabling the use of qualified names (QNames) to abbreviate long IRIs into human-readable yet machine-processable references in semantic web documents.

- ### Semantic Classification
  - owl-class:: spatial-computing:NamespaceDeclarations
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Semantic Web Standards]]
  - enables:: [[Ontology Interoperability]]

- ### Content

  - #### Technical Details
		- Declared using xmlns:prefix syntax in XML documents
		- RDF namespace IRI: http://www.w3.org/1999/02/22-rdf-syntax-ns#
		- QNames consist of namespace prefix and local name
		- Prefixed Names (PNames) extend QNames with more flexible abbreviation
		- INamespaceMapper interface manages prefix-to-URI mappings
  - #### Standard Namespaces
		- rdf: for RDF syntax elements
		- rdfs: for RDF Schema vocabulary
		- owl: for OWL ontology language
		- xsd: for XML Schema datatypes
		- Custom namespaces for domain-specific vocabularies

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
