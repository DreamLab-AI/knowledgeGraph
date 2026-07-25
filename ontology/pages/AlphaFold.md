public:: true

# AlphaFold

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:alphafold", "@type":"Page", "title":"AlphaFold", "vc:slug":"alphafold", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:alphafold",
  "@type": "Class",
  "label": "AlphaFold",
  "definition": "AlphaFold is a deep learning system developed by DeepMind that predicts the three-dimensional structure of a protein from its amino acid sequence with accuracy approaching that of experimental methods such as X-ray crystallography, a problem known as the protein folding problem. It uses an attention-based neural network architecture trained on known protein structures and evolutionary sequence data to output per-residue coordinates along with a confidence estimate. AlphaFold's predictions are widely used in computational biology and genomics research, and its structure database has substantially accelerated work in drug discovery and molecular biology.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:deep-learning",
      "label": "Deep Learning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computational-biology",
        "label": "Computational Biology"
      },
      {
        "@id": "urn:ngm:class:genomics",
        "label": "Genomics"
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
	- AlphaFold is a deep learning system developed by DeepMind that predicts the three-dimensional structure of a protein from its amino acid sequence with accuracy approaching that of experimental methods such as X-ray crystallography, a problem known as the protein folding problem. It uses an attention-based neural network architecture trained on known protein structures and evolutionary sequence data to output per-residue coordinates along with a confidence estimate. AlphaFold's predictions are widely used in computational biology and genomics research, and its structure database has substantially accelerated work in drug discovery and molecular biology.
- ### Relationships
	- partOf:: [[Deep Learning]]
	- relatedTo:: [[Computational Biology]]
	- relatedTo:: [[Genomics]]
