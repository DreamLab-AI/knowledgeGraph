public:: true

# Common Crawl
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:afa5254885f1174b1014f388b0f8e2d3d55a7e2217f6bc721dc7019c7648e7d3",
  "@type": "Page",
  "vc:slug": "common-crawl",
  "title": "Common Crawl",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-training",
      "vc:label": "Model Training"
    },
    {
      "@id": "urn:visionflow:linked:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-data",
      "vc:label": "Synthetic Data"
    },
    {
      "@id": "urn:visionflow:linked:https-commoncrawl-org",
      "vc:label": "https://commoncrawl.org"
    },
    {
      "@id": "urn:visionflow:linked:https-commoncrawl-org-the-data",
      "vc:label": "https://commoncrawl.org/the-data"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Common Crawl"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:common-crawl",
  "@type": "Class",
  "label": "Common Crawl",
  "definition": "Common Crawl is a non-profit organisation that maintains a large, freely available archive of web page data collected by crawling the internet. The data is widely used to train language models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:synthetic-data",
      "label": "Synthetic Data"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:common-crawl:c5588b3d1007",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:afa5254885f1174b1014f388b0f8e2d3d55a7e2217f6bc721dc7019c7648e7d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Model Training]]",
      "resolved": "urn:visionflow:linked:model-training",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:linked:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Synthetic Data]]",
      "resolved": "urn:visionflow:linked:synthetic-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://commoncrawl.org]]",
      "resolved": "urn:visionflow:linked:https-commoncrawl-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://commoncrawl.org/the-data]]",
      "resolved": "urn:visionflow:linked:https-commoncrawl-org-the-data",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Common Crawl is a non-profit organisation that maintains a large, freely available archive of web page data collected by crawling the internet. The data is widely used to train language models.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CommonCrawl
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Synthetic Data]]
  - bridges-to:: [[Machine Learning Discipline]]
  - enables:: [[Model Training]], [[GPT]]

- ### Content
  - Common Crawl publishes regular snapshots of web content as openly accessible datasets, including raw page data and extracted text. The archive spans billions of pages collected over many years.
  - The corpus is a common source of training data for large language models and for research in natural language processing and information retrieval. Users typically filter and clean the data before use because of its scale and variability.

- ### Provenance
  - sources:: [[https://commoncrawl.org]], [[https://commoncrawl.org/the-data]]
  - migration-date:: 2026-05-29T00:00:00Z
