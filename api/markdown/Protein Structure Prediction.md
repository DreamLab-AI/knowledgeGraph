public:: true

# Protein Structure Prediction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:protein-structure-prediction",
  "@type": "Page",
  "vc:slug": "protein-structure-prediction",
  "title": "Protein Structure Prediction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:protein-structure-prediction",
  "@type": "Class",
  "label": "Protein Structure Prediction",
  "definition": "Protein structure prediction is the computational determination of a protein's three-dimensional folded structure from its amino-acid sequence. Deep-learning systems such as AlphaFold, built on attention-based architectures, achieved near-experimental accuracy and transformed structural biology. It is a landmark AI application with deep impact on drug discovery and molecular biology.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:transformers", "label": "Transformers"},
      {"@id": "urn:ngm:class:attention", "label": "Attention"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Protein structure prediction infers a protein's 3D fold from its amino-acid sequence. It is enabled by [[Transformers]] architectures and supported by [[Attention]] mechanisms that capture long-range residue interactions and evolutionary co-variation.
- ### Content
  - Modern systems combine multiple-sequence-alignment features with attention-based networks that reason jointly over residue pairs and geometry, predicting inter-residue distances and orientations and refining full atomic coordinates. The resulting structures, released at proteome scale, accelerate hypothesis generation in biology, enable structure-based drug design, and have extended to predicting complexes and protein-ligand interactions.
