schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NamespaceDeclarations
legacy_uri:: urn:visionclaw:concept:spatial-computing:namespace-declarations
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8247a6f5114b"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NamespaceDeclarations"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9977"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Namespace Declarations"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:namespace-declarations"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:namespace-declarations"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:06c9959e5fc2149c3ae14f9539bfa8b4b18f9f66349e80f3d67b7ffdd8700f6a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:06c9959e5fc2149c3ae14f9539bfa8b4b18f9f66349e80f3d67b7ffdd8700f6a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
