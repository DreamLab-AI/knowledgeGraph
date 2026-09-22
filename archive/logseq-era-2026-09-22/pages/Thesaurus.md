public:: true

# Thesaurus
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:thesaurus", "@type":"Page", "title":"Thesaurus", "vc:slug":"thesaurus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:thesaurus",
  "@type":"Class",
  "label":"Thesaurus",
  "definition":"A thesaurus is a controlled vocabulary that organises preferred terms together with their synonyms and structured semantic relationships, principally broader, narrower and related-term links. By mapping non-preferred synonyms onto a single preferred descriptor, it enforces consistent indexing and improves retrieval by reconciling the many ways people express the same concept. Thesauri underpin information retrieval, library cataloguing and knowledge organisation, and are formalised by standards such as ISO 25964 and expressible in SKOS.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:controlled-vocabulary","label":"Controlled Vocabulary"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:knowledge-organization","label":"Knowledge Organization"}],
    "uses":[{"@id":"urn:ngm:class:vocabulary","label":"Vocabulary"},{"@id":"urn:ngm:class:classification","label":"Classification"}],
    "supports":[{"@id":"urn:ngm:class:information-retrieval","label":"Information Retrieval"},{"@id":"urn:ngm:class:indexing","label":"Indexing"}],
    "enables":[{"@id":"urn:ngm:class:information-retrieval","label":"Information Retrieval"},{"@id":"urn:ngm:class:search-engine","label":"Search Engine"}],
    "requires":[{"@id":"urn:ngm:class:vocabulary","label":"Vocabulary"}],
    "implements":[{"@id":"urn:ngm:class:controlled-vocabulary","label":"Controlled Vocabulary"}],
    "contrastsWith":[{"@id":"urn:ngm:class:ontology","label":"Ontology"}],
    "bridgesTo":[{"@id":"urn:ngm:class:semantic-web","label":"Semantic Web"}],
    "relatedTo":[{"@id":"urn:ngm:class:ontology","label":"Ontology"},{"@id":"urn:ngm:class:indexing","label":"Indexing"},{"@id":"urn:ngm:class:metadata","label":"Metadata"}],
    "dependsOn":[{"@id":"urn:ngm:class:knowledge-organization","label":"Knowledge Organization"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Thesaurus]] is a [[Controlled Vocabulary]] that links preferred terms to their synonyms and to broader, narrower and related terms.
  - It maps non-preferred synonyms onto a single descriptor, enforcing consistent [[Indexing]].
  - It underpins [[Information Retrieval]] and [[Knowledge Organization]], standardised by ISO 25964 and expressible in SKOS.
- ### Overview
  - People describe the same concept in many ways; uncontrolled, this fragments retrieval across synonymous terms.
  - A thesaurus designates one preferred term per concept and routes all variants to it, unifying how content is indexed and found.
  - Beyond synonymy, it encodes hierarchy (broader and narrower terms) and association (related terms), giving structured navigation.
  - It is richer than a flat term list but lighter than a formal ontology, occupying a middle layer of knowledge organisation.
- ### Key aspects
  - Preferred and non-preferred terms: a descriptor plus its mapped synonyms reconcile vocabulary variation.
  - Semantic relationships: broader-term, narrower-term and related-term links structure the concept space.
  - Scope notes: definitions and usage guidance disambiguate terms for indexers and searchers.
  - Standardisation: ISO 25964 and SKOS provide interoperable models for thesaurus construction and publishing.
- ### Applications
  - Library and archive cataloguing with subject headings and descriptors.
  - Enterprise search and content management, improving recall through synonym control.
  - Indexing scholarly and medical literature, as with subject thesauri in databases.
  - Linked-data and semantic-web vocabularies published as SKOS concept schemes.
- ### Relationships
  - partOf:: [[Knowledge Organization]]
  - uses:: [[Vocabulary]]
  - uses:: [[Classification]]
  - supports:: [[Information Retrieval]]
  - supports:: [[Indexing]]
  - enables:: [[Search Engine]]
  - requires:: [[Vocabulary]]
  - implements:: [[Controlled Vocabulary]]
  - contrastsWith:: [[Ontology]]
  - bridgesTo:: [[Semantic Web]]
  - relatedTo:: [[Metadata]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
