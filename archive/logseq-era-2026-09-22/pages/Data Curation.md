public:: true

# Data Curation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-curation", "@type":"Page", "title":"Data Curation", "vc:slug":"data-curation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-curation",
  "@type": "Class",
  "label": "Data Curation",
  "definition": "Data curation is the process of collecting, filtering, cleaning, annotating and organising raw data into a coherent, high-quality dataset suitable for training or evaluating machine learning models. It includes deduplication, removal of low-quality or harmful content, balancing of class or source distributions, and documentation of provenance and licensing. Rigorous data curation has a substantial effect on downstream model quality and is increasingly recognised as being as important as model architecture in large-scale AI systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-preprocessing",
      "label": "Data Preprocessing"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:common-crawl",
        "label": "Common Crawl"
      },
      {
        "@id": "urn:ngm:class:ade20-k",
        "label": "ADE20K"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Data curation is the process of collecting, filtering, cleaning, annotating and organising raw data into a coherent, high-quality dataset suitable for training or evaluating machine learning models. It includes deduplication, removal of low-quality or harmful content, balancing of class or source distributions, and documentation of provenance and licensing. Rigorous data curation has a substantial effect on downstream model quality and is increasingly recognised as being as important as model architecture in large-scale AI systems.
- ### Relationships
	- partOf:: [[Data Preprocessing]]
	- relatedTo:: [[Common Crawl]]
	- relatedTo:: [[ADE20K]]
