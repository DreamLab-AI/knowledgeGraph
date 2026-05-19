schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Perplexity
legacy_uri:: urn:visionclaw:concept:infrastructure:perplexity
public:: true

# perplexity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712",
  "@type": "Page",
  "vc:slug": "perplexity",
  "title": "perplexity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-032b6c484097"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#Perplexity"
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
      "vc:value": "perplexity"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:perplexity"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:perplexity"
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
    "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:perplexity",
  "@type": "OntologyClass",
  "label": "perplexity",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "perplexity is a technology infrastructure concept and a type of infrastructure.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:perplexity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - perplexity is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Perplexity
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [Introducing Perplexity Pages](https://www.perplexity.ai/hub/blog/perplexity-pages)
  - ```
  curl --request POST \
    --url https://api.perplexity.ai/chat/completions \
    --header 'Authorization: Bearer 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' \
    --header 'Content-Type: application/json' \
    --data '{
    "max_tokens": 4096,
    "messages": [
      {
        "content": "How many stars are there in the galaxy?",
        "role": "user"
      },
      {
        "content": "The number of stars in the Milky Way galaxy is estimated to be between 100 billion and 400 billion stars. The most recent estimates from the Gaia mission suggest that there are approximately 100 to 400 billion stars in the Milky Way, with significant uncertainties remaining due to the difficulty in detecting faint red dwarfs and brown dwarfs.",
        "role": "assistant"
      },
      {
        "role": "user",
        "content": "What is their average density?"
      }
    ],
    "temperature": 0.5,
    "top_p": 0.9,
    "return_citations": false,
    "search_domain_filter": [
      "perplexity.ai"
    ],
    "return_images": false,
    "return_related_questions": false,
    "search_recency_filter": "year",
    "top_k": 0,
    "stream": false,
    "presence_penalty": 0,
    "frequency_penalty": 1,
    "model": "llama-3.1-sonar-small-128k-online"
  }'

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
