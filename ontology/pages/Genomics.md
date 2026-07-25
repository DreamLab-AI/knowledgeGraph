public:: true

# Genomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:genomics",
  "@type": "Page",
  "title": "Genomics",
  "vc:slug": "genomics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:genomics",
  "@type": "Class",
  "label": "Genomics",
  "definition": "Genomics is the study of the complete set of genetic material in organisms, encompassing the structure, function, evolution, and editing of genomes. It combines high-throughput DNA sequencing with computational analysis to interpret vast quantities of genetic data. Genomics underpins precision medicine, evolutionary biology, agriculture, and the increasing application of machine learning to biological sequence interpretation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computational-biology",
      "label": "Computational Biology"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:precision-medicine",
        "label": "Precision Medicine"
      },
      {
        "@id": "urn:ngm:class:drug-discovery",
        "label": "Drug Discovery"
      },
      {
        "@id": "urn:ngm:class:healthcare",
        "label": "Healthcare"
      },
      {
        "@id": "urn:ngm:class:precision-agriculture",
        "label": "Precision Agriculture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-science",
        "label": "Data Science"
      },
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      },
      {
        "@id": "urn:ngm:class:big-data",
        "label": "Big Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bioinformatics",
        "label": "Bioinformatics"
      },
      {
        "@id": "urn:ngm:class:computational-biology",
        "label": "Computational Biology"
      },
      {
        "@id": "urn:ngm:class:protein-structure-prediction",
        "label": "Protein Structure Prediction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:alphafold",
        "label": "AlphaFold"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Genomics is the study of the complete set of genetic material in organisms, encompassing the structure, function, evolution, and editing of genomes. It combines high-throughput DNA sequencing with computational analysis to interpret vast quantities of genetic data. Genomics underpins precision medicine, evolutionary biology, agriculture, and the increasing application of machine learning to biological sequence interpretation.
  - Related concepts: [[Computational Biology]] [[Bioinformatics]] [[Precision Medicine]] [[Machine Learning]]
- ### Overview
  - Genomics expanded from the study of individual genes to the analysis of entire genomes once high-throughput sequencing made large-scale data generation feasible. The field is intrinsically data-intensive: a single genome comprises billions of base pairs, and population-scale studies generate datasets that demand specialised storage, alignment, and statistical methods. Machine learning increasingly drives variant interpretation, functional annotation, and the prediction of biological structure and function from sequence.
- ### Key aspects
  - High-throughput sequencing produces raw reads that are aligned and assembled into genomes.
  - Variant calling identifies differences between an individual genome and a reference.
  - Functional genomics links sequence to gene expression and biological function.
  - Computational pipelines and learned models annotate and interpret genomic features at scale.
- ### Applications
  - Precision medicine tailoring treatment to an individual's genetic profile.
  - Accelerating drug discovery by identifying disease-associated targets.
  - Crop and livestock improvement through genomic selection.
  - Tracing evolutionary relationships and pathogen surveillance.
- ### Relationships
  - subClassOf:: [[Computational Biology]]
  - supports:: [[Precision Medicine]]
  - supports:: [[Drug Discovery]]
  - supports:: [[Healthcare]]
  - supports:: [[Precision Agriculture]]
  - requires:: [[Data Science]]
  - requires:: [[Scientific Computing]]
  - requires:: [[Big Data]]
  - relatedTo:: [[Bioinformatics]]
  - relatedTo:: [[Computational Biology]]
  - relatedTo:: [[Protein Structure Prediction]]
  - bridgesTo:: [[Machine Learning]]
  - bridgesTo:: [[Artificial Intelligence]]
  - uses:: [[AlphaFold]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
