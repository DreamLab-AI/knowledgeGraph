schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ControlledVocabularies
legacy_uri:: urn:visionclaw:concept:spatial-computing:controlled-vocabularies
public:: true

# Controlled Vocabularies
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a3aa00ebb89fd0092dd6583838215a743f7ce8af2b355cd6dd65571019a4388",
  "@type": "Page",
  "vc:slug": "controlled-vocabularies",
  "title": "Controlled Vocabularies",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consistent-indexing",
      "vc:label": "Consistent Indexing"
    },
    {
      "@id": "urn:visionflow:linked:governance-process",
      "vc:label": "Governance Process"
    },
    {
      "@id": "urn:visionflow:linked:semantic-interoperability",
      "vc:label": "Semantic Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:taxonomy-development",
      "vc:label": "Taxonomy Development"
    },
    {
      "@id": "urn:visionflow:owl:class:information-retrieval",
      "vc:label": "Information Retrieval"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-organization",
      "vc:label": "Knowledge Organization"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-standards",
      "vc:label": "Metadata Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
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
      "vc:value": "sha256-12-f5292a8b8d96"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ControlledVocabularies"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9832"
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
      "vc:value": "Controlled Vocabularies"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:controlled-vocabularies"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:controlled-vocabularies"
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
    "@id": "urn:visionflow:page:1a3aa00ebb89fd0092dd6583838215a743f7ce8af2b355cd6dd65571019a4388@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:controlled-vocabularies",
  "@type": "Class",
  "label": "Controlled Vocabularies",
  "definition": "Standardized sets of terms, phrases, and hierarchical relationships used to describe and organize information within knowledge management systems, databases, and metadata schemas, ensuring consistent indexing, retrieval, and interoperability across digital platforms and virtual environments.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-organization",
      "label": "Knowledge Organization"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:governance-process",
        "label": "Governance Process"
      },
      {
        "@id": "urn:ngm:class:taxonomy-development",
        "label": "Taxonomy Development"
      },
      {
        "@id": "urn:ngm:class:metadata-standards",
        "label": "Metadata Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consistent-indexing",
        "label": "Consistent Indexing"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:controlled-vocabularies:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a3aa00ebb89fd0092dd6583838215a743f7ce8af2b355cd6dd65571019a4388"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consistent Indexing]]",
      "resolved": "urn:visionflow:linked:consistent-indexing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Process]]",
      "resolved": "urn:visionflow:linked:governance-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Interoperability]]",
      "resolved": "urn:visionflow:linked:semantic-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Taxonomy Development]]",
      "resolved": "urn:visionflow:linked:taxonomy-development",
      "kind": "StubLink"
    },
    {
      "raw": "[[Information Retrieval]]",
      "resolved": "urn:visionflow:owl:class:information-retrieval",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Organization]]",
      "resolved": "urn:visionflow:owl:class:knowledge-organization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Standards]]",
      "resolved": "urn:visionflow:owl:class:metadata-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:1a3aa00ebb89fd0092dd6583838215a743f7ce8af2b355cd6dd65571019a4388@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Standardized sets of terms, phrases, and hierarchical relationships used to describe and organize information within knowledge management systems, databases, and metadata schemas, ensuring consistent indexing, retrieval, and interoperability across digital platforms and virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ControlledVocabularies
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - is-subclass-of:: [[Knowledge Organization]]
  - requires:: [[Taxonomy Development]], [[Metadata Standards]], [[Governance Process]]
  - enables:: [[Consistent Indexing]], [[Information Retrieval]], [[Semantic Interoperability]]

- ### Content

  - ## Technical Details
  - **Vocabulary Types** (increasing complexity):
		- **Term Lists/Pick Lists**: Simple agreed-upon word lists
		- **Taxonomies**: Hierarchical broader/narrower structures
		- **Thesauri**: Include synonyms, acronyms, and associations
		- **Ontologies**: Formal description logic with OWL encoding
  - **Business Value**:
		- Enables reuse of existing knowledge assets
		- Shortens critical process cycle times
		- Reduces costs through faster retrieval
		- Supports better decision making
  - **2024 Developments**:
		- Taxonomy Boot Camp 2024 (Washington DC, November 18-19)
		- AI and NLP for auto-tagging and classification
		- Integration across enterprise applications
		- CKO-led systematic taxonomy management
  - **Challenges**: Balancing human cognition with automated AI/NLP capabilities in taxonomic classification
  - ## Applications
  - Enterprise content management
  - Digital asset indexing
  - Search engine optimization
  - Knowledge graph construction
  - Cross-platform metadata alignment

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
