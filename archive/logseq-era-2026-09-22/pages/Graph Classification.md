public:: true

# Graph Classification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:graph-classification", "@type":"Page", "title":"Graph Classification", "vc:slug":"graph-classification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-classification",
  "@type": "Class",
  "label": "Graph Classification",
  "definition": "Graph classification is the machine learning task of assigning a label to an entire graph, such as a molecule, social network or program dependency graph, based on its structure and node or edge attributes, in contrast to node classification which labels individual vertices. It is typically performed by a graph neural network that repeatedly aggregates neighbourhood information through message passing before pooling node representations into a single graph-level embedding for classification. Graph classification is applied to problems such as molecular property prediction, protein function prediction and program analysis.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:classification",
      "label": "Classification"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graph-neural-network",
        "label": "Graph Neural Network"
      },
      {
        "@id": "urn:ngm:class:node-classification",
        "label": "Node Classification"
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
	- Graph classification is the machine learning task of assigning a label to an entire graph, such as a molecule, social network or program dependency graph, based on its structure and node or edge attributes, in contrast to node classification which labels individual vertices. It is typically performed by a graph neural network that repeatedly aggregates neighbourhood information through message passing before pooling node representations into a single graph-level embedding for classification. Graph classification is applied to problems such as molecular property prediction, protein function prediction and program analysis.
- ### Relationships
	- partOf:: [[Classification]]
	- relatedTo:: [[Graph Neural Network]]
	- relatedTo:: [[Node Classification]]
