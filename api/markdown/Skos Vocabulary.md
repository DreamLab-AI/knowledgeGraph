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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10045"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Skos Vocabulary"
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
  "@id": "urn:ngm:class:skos-vocabulary",
  "@type": "Class",
  "label": "Skos Vocabulary",
  "definition": "A W3C recommendation providing an RDF-based data model for representing thesauri, taxonomies, classification schemes, and other structured controlled vocabularies, enabling publication and linking of knowledge organization systems on the semantic web through standardized concepts and relationships.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
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
