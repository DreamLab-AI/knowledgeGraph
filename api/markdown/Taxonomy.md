public:: true

# Taxonomy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:taxonomy",
  "@type": "Page",
  "vc:slug": "taxonomy",
  "title": "Taxonomy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:taxonomy",
  "@type": "Class",
  "label": "Taxonomy",
  "definition": "A taxonomy is a hierarchical classification scheme that organises concepts or entities into nested categories based on shared characteristics, typically expressing broader-than and narrower-than relationships. It provides a controlled vocabulary that supports consistent naming, navigation, and retrieval within a domain. Taxonomies are a simpler precursor to fuller ontologies, which add richer relations and formal axioms.",
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
        "@id": "urn:ngm:class:classification",
        "label": "Classification Scheme"
      },
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      },
      {
        "@id": "urn:ngm:class:category-hierarchies",
        "label": "Hierarchical Category"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:knowledge-organization-system",
        "label": "Knowledge Organisation System"
      },
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-retrieval",
        "label": "Knowledge Retrieval"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:skos-vocabulary",
        "label": "SKOS"
      },
      {
        "@id": "urn:ngm:class:thesaurus",
        "label": "Thesaurus"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:folksonomy",
        "label": "Folksonomy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
        "label": "Etsi Metaverse Domain Taxonomy"
      },
      {
        "@id": "urn:ngm:class:domain-ontology",
        "label": "Domain Ontology"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hierarchical-classification",
      "label": "Hierarchical Classification"
    },
    {
      "@id": "urn:ngm:class:classification-system",
      "label": "Classification System"
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
  - A taxonomy is a hierarchical classification of concepts using broader and narrower relationships, providing a controlled vocabulary that underpins schemes such as the [[ETSI Metaverse Domain Taxonomy]] and relates closely to a [[Domain Ontology]].
- ### Content
  - Each node in a taxonomy is a category positioned by an is-a or part-of relation to its parent, producing a tree or shallow polyhierarchy that aids browsing and tagging. Taxonomies enforce naming consistency and let systems roll up or drill down across levels of abstraction. They differ from ontologies in expressiveness: a taxonomy captures hierarchy alone, whereas an ontology adds arbitrary typed relations, constraints, and inference rules.
