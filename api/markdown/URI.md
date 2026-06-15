public:: true

# URI
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:uri",
  "@type": "Page",
  "title": "URI",
  "vc:slug": "uri",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uri",
  "@type": "Class",
  "label": "URI",
  "definition": "A URI (Uniform Resource Identifier) is a compact sequence of characters that uniquely identifies an abstract or physical resource on a network or within a namespace. It generalises both locators, which describe how to access a resource, and names, which identify a resource independently of access, under a single syntactic framework of scheme, authority, path, query and fragment. URIs are foundational to the architecture of the World Wide Web and the Semantic Web, where they serve as globally unique identifiers for documents, data and entities.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-standard",
      "label": "Web Standard"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:persistent-identifier",
        "label": "Persistent Identifier"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:did",
        "label": "DID"
      },
      {
        "@id": "urn:ngm:class:solid",
        "label": "Solid"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[URI]] is a [[Web Standard]] identifier that names or locates a resource, underpinning [[Linked Data]], [[REST API]] design and the addressing model of [[HTTP]].
- ### Overview
  - The URI provides the single, uniform way to refer to anything on the web, whether a document to be fetched, an abstract concept, or a real-world entity. By distinguishing scheme, authority, path, query and fragment, the URI syntax accommodates locators such as web addresses and pure names such as URNs within one framework.
  - URIs are the connective tissue of the Semantic Web: every resource, property and class in linked data is named by a URI, allowing independently published datasets to interlink globally.
- ### Key aspects
  - Generality: a URI may be a locator (URL), a name (URN), or both, depending on its scheme.
  - Global uniqueness: hierarchical scheme and authority components prevent collisions across the network.
  - Dereferenceability: many URIs can be resolved to a representation, while others serve purely as identifiers.
  - Stability: persistent URIs are designed to remain valid over long timescales.
- ### Mechanisms
  - The scheme selects an interpretation and, for locators, an access protocol.
  - Authority, path and query components address the resource within the scheme's namespace.
  - Fragment identifiers select a part of, or a secondary resource related to, the primary resource.
- ### Applications
  - Web addressing, REST API resource design, linked data and RDF triples, decentralised identifiers and persistent scholarly identifiers.
- ### Relationships
  - partOf:: [[Web Standard]]
  - uses:: [[HTTP]]
  - implements:: [[Persistent Identifier]]
  - requires:: [[Network Protocol]]
  - enables:: [[Linked Data]]
  - enables:: [[REST API]]
  - enables:: [[Interoperability]]
  - supports:: [[RDF]]
  - supports:: [[Digital Identity]]
  - relatedTo:: [[DID]]
  - relatedTo:: [[Solid]]
  - bridgesTo:: [[Ontology]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: mature
