public:: true

elevatedFrom:: [[perplexity]]
# Perplexity AI Search Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58f79508e988421186a0ec3806c21caa8a3c7369077245fb7a6467cffec7d712",
  "@type": "Page",
  "vc:slug": "perplexity-ai-search-platform",
  "title": "Perplexity AI Search Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "perplexity"
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
  "@id": "urn:ngm:class:perplexity-ai-search-platform",
  "@type": "Class",
  "label": "Perplexity AI Search Platform",
  "definition": "Perplexity AI is a conversational search platform that combines large language models with live web retrieval to produce cited, synthesised answers to natural-language queries. Offered through consumer applications and an API, it applies retrieval-augmented generation to web-scale content, sitting between traditional search engines and generative AI assistants.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:technology-infrastructure",
        "label": "Technology Infrastructure"
      },
      {
        "@id": "urn:ngm:class:search-engine",
        "label": "Search Engine"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ]
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Perplexity AI is a conversational search platform that combines large language models with live web retrieval to produce cited, synthesised answers to natural-language queries. Offered through consumer applications and an API, it applies retrieval-augmented generation to web-scale content, sitting between traditional search engines and generative AI assistants.

- ### Semantic Classification
  - owl-class:: infrastructure:Perplexity
  - owl-role:: Concept

- ### Relationships
  - related-to:: [[Search Engine]], [[Large Language Models]], [[Retrieval-Augmented Generation]]

- ### Content
  - [Introducing Perplexity Pages](https://www.perplexity.ai/hub/blog/perplexity-pages)
  - ```
  curl --request POST \
    --url https://api.perplexity.ai/chat/completions \
    --header 'Authorization: Bearer $PERPLEXITY_API_KEY' \
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
