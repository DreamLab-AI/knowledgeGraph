schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SkosVocabulary
legacy_uri:: urn:visionclaw:concept:spatial-computing:skos-vocabulary
public:: true

# Skos Vocabulary
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e389cdf30dee4a4a1d9475cfd035769d53c2373f744d52417a3e4493f1701743",
  "@type": "Page",
  "vc:slug": "skos-vocabulary",
  "title": "Skos Vocabulary",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:linked-vocabulary-publishing",
      "vc:label": "Linked Vocabulary Publishing"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-organization-system",
      "vc:label": "Knowledge Organization System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-f7c0d4bf13c7"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SkosVocabulary"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10045"
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
      "vc:value": "Skos Vocabulary"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:skos-vocabulary"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:skos-vocabulary"
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
    "@id": "urn:visionflow:page:e389cdf30dee4a4a1d9475cfd035769d53c2373f744d52417a3e4493f1701743@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:skos-vocabulary",
  "@type": "Class",
  "label": "Skos Vocabulary",
  "definition": "A W3C recommendation providing an RDF-based data model for representing thesauri, taxonomies, classification schemes, and other structured controlled vocabularies, enabling publication and linking of knowledge organization systems on the semantic web through standardized concepts and relationships.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-organization-system",
      "label": "Knowledge Organization System"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:linked-vocabulary-publishing",
        "label": "Linked Vocabulary Publishing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:skos-vocabulary:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e389cdf30dee4a4a1d9475cfd035769d53c2373f744d52417a3e4493f1701743"
  },
  "vc:resolutions": [
    {
      "raw": "[[Linked Vocabulary Publishing]]",
      "resolved": "urn:visionflow:linked:linked-vocabulary-publishing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Organization System]]",
      "resolved": "urn:visionflow:owl:class:knowledge-organization-system",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e389cdf30dee4a4a1d9475cfd035769d53c2373f744d52417a3e4493f1701743@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A W3C recommendation providing an RDF-based data model for representing thesauri, taxonomies, classification schemes, and other structured controlled vocabularies, enabling publication and linking of knowledge organization systems on the semantic web through standardized concepts and relationships.

- ### Semantic Classification
  - owl-class:: spatial-computing:SkosVocabulary
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Knowledge Organization System]]
  - enables:: [[Linked Vocabulary Publishing]]

- ### Content

  - #### Core Components
		- skos:Concept for vocabulary terms
		- skos:prefLabel for preferred labels
		- skos:broader and skos:narrower hierarchies
		- skos:related for associative relationships
		- skos:ConceptScheme for vocabulary grouping
  - #### Implementations
		- EuroVoc multilingual thesaurus
		- AGROVOC agricultural vocabulary
		- Library of Congress Subject Headings
		- GEMET environmental thesaurus
		- DBpedia concept mappings

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
