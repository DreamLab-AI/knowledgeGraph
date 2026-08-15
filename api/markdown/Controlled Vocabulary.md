public:: true

# Controlled Vocabulary
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:998223d0181c56e2f1503bf76e43d9755ecf80345aa4e184355f35e19a80570a",
  "@type": "Page",
  "vc:slug": "controlled-vocabulary",
  "title": "Controlled Vocabulary",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:accurate-retrieval",
      "vc:label": "Accurate Retrieval"
    },
    {
      "@id": "urn:visionflow:linked:content-discovery",
      "vc:label": "Content Discovery"
    },
    {
      "@id": "urn:visionflow:linked:data-standardization",
      "vc:label": "Data Standardization"
    },
    {
      "@id": "urn:visionflow:linked:domain-expertise",
      "vc:label": "Domain Expertise"
    },
    {
      "@id": "urn:visionflow:linked:maintenance-process",
      "vc:label": "Maintenance Process"
    },
    {
      "@id": "urn:visionflow:linked:term-governance",
      "vc:label": "Term Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:information-architecture",
      "vc:label": "Information Architecture"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9833"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Controlled Vocabulary"
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
  "@id": "urn:ngm:class:controlled-vocabulary",
  "@type": "Class",
  "label": "Controlled Vocabulary",
  "definition": "A restricted list of standardized terms or phrases used within a specific domain for consistent cataloging, tagging, and indexing, where users may only apply terms from the approved list to ensure uniform description and enable reliable information retrieval across systems and platforms.",
  "domain": "data",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:information-architecture",
    "label": "Information Architecture"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:knowledge-organization-system",
        "label": "Knowledge Organization System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:process",
        "label": "Maintenance Process"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Accurate Retrieval"
      },
      {
        "@id": "urn:ngm:class:content-discovery",
        "label": "Content Discovery"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:faceted-classification",
        "label": "Faceted Classification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:skos-vocabulary",
        "label": "SKOS"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:thesaurus",
        "label": "Thesaurus"
      },
      {
        "@id": "urn:ngm:class:taxonomy",
        "label": "Taxonomy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-25964",
        "label": "ISO 25964 Thesaurus Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:free-text-search",
        "label": "Free Text Search"
      },
      {
        "@id": "urn:ngm:class:folksonomy",
        "label": "Folksonomy"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:dublin-core",
        "label": "Dublin Core"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:authority-file",
      "label": "Authority File"
    },
    {
      "@id": "urn:ngm:class:subject-heading-list",
      "label": "Subject Heading List"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:controlled-vocabulary:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:998223d0181c56e2f1503bf76e43d9755ecf80345aa4e184355f35e19a80570a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Accurate Retrieval]]",
      "resolved": "urn:visionflow:linked:accurate-retrieval",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Discovery]]",
      "resolved": "urn:visionflow:linked:content-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Standardization]]",
      "resolved": "urn:visionflow:linked:data-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Domain Expertise]]",
      "resolved": "urn:visionflow:linked:domain-expertise",
      "kind": "StubLink"
    },
    {
      "raw": "[[Maintenance Process]]",
      "resolved": "urn:visionflow:linked:maintenance-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Term Governance]]",
      "resolved": "urn:visionflow:linked:term-governance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Architecture]]",
      "resolved": "urn:visionflow:owl:class:information-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A restricted list of standardized terms or phrases used within a specific domain for consistent cataloging, tagging, and indexing, where users may only apply terms from the approved list to ensure uniform description and enable reliable information retrieval across systems and platforms.

- ### Semantic Classification
  - owl-class:: spatial-computing:ControlledVocabulary
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Information Architecture]]
  - requires:: [[Term Governance]], [[Domain Expertise]], [[Maintenance Process]]
  - enables:: [[Accurate Retrieval]], [[Content Discovery]], [[Data Standardization]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Definition**: A controlled vocabulary is a restricted list of words or terms used for descriptive cataloging, tagging, or indexing, where only approved terms may be applied
  - **Related Terms**:
		- Often used interchangeably with "ontology" or "taxonomy"
		- Each has slightly different technical definitions
  - **Purpose in Classification**:
		- Classification is the logical arranging of information for quick retrieval
		- Structure represented as taxonomy; item information as metadata
		- Enables systematic knowledge retrieval and streamlined access
  - **Implementation Considerations**:
		- Balance between human expertise and AI automation
		- Consistent terminology establishment critical for KM excellence
		- Requires investment in systematic taxonomy management
  - ## Applications
  - Library cataloging systems
  - Document management tagging
  - Scientific data description
  - E-commerce product attributes
  - Research database indexing

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
