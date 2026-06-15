public:: true

# Open Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-data",
  "@type": "Page",
  "vc:slug": "open-data",
  "title": "Open Data",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-data",
  "@type": "Class",
  "label": "Open Data",
  "definition": "Open Data is data that is freely available for anyone to access, use, modify, and share, subject at most to attribution and share-alike requirements. It is typically published in machine-readable formats with open licenses to maximize reuse, transparency, and interoperability across organizations. Open Data underpins public-sector transparency, research reproducibility, and decentralized web ecosystems built on user-controlled data stores.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:open-license",
        "label": "Open License"
      },
      {
        "@id": "urn:ngm:class:metadata-standard",
        "label": "Metadata Standard"
      },
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-government",
        "label": "Open Government"
      },
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:open-license",
        "label": "Open License"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      },
      {
        "@id": "urn:ngm:class:reproducible-research",
        "label": "Reproducible Research"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:creative-commons",
        "label": "Creative Commons"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:decentralised-web",
        "label": "Decentralised Web"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:solid",
        "label": "Solid"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:solid",
        "label": "Solid"
      },
      {
        "@id": "urn:ngm:class:fair-data-principles",
        "label": "FAIR Data Principles"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:freely-available-data",
      "label": "Freely Available Data"
    },
    {
      "@id": "urn:ngm:class:publicly-accessible-data",
      "label": "Publicly Accessible Data"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Open Data is openly licensed, machine-readable data that anyone may reuse and redistribute, enabling transparency and interoperable ecosystems such as [[Solid]] that put data under user control.
- ### Content
  - Best practice publishes Open Data in standard formats with clear provenance and permissive licenses. It powers reproducible research, civic transparency, and decentralized web architectures where applications query portable, user-owned datasets rather than siloed proprietary stores.
