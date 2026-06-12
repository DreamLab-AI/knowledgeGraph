public:: true

# Digital Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0cfaa2c93db0215c5b6383860795cbf21bad6a03d663cd41d48e01e987393efe",
  "@type": "Page",
  "vc:slug": "digital-model",
  "title": "Digital Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9583"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Model"
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
  "@id": "urn:ngm:class:digital-model",
  "@type": "Class",
  "label": "Digital Model",
  "definition": "A Digital Model is a structured computational representation of a real-world or conceptual entity, capturing geometry, behaviour, and semantic attributes for use in simulation, visualisation, or analysis. Digital models underpin virtual environments, digital twins, and spatial computing applications by providing machine-readable, interoperable representations of physical or abstract objects.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:spatial-computing-paradigm", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:digital-modeling", "label": "Digital Modeling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"},
      {"@id": "urn:ngm:class:digital-twin-infrastructure", "label": "Digital Twin Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0cfaa2c93db0215c5b6383860795cbf21bad6a03d663cd41d48e01e987393efe"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Digital Model is a structured computational representation of a real-world or conceptual entity, capturing geometry, behaviour, and semantic attributes for use in simulation, visualisation, or analysis. Digital models underpin virtual environments, digital twins, and spatial computing applications by providing machine-readable, interoperable representations of physical or abstract objects.

bridges-to:: [[Computer Vision]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalModel
  - owl-role:: concept

- ### Relationships
  - **uses**: [[Spatial Computing Paradigm]], [[Digital Modeling]]
  - **enables**: [[Virtual Environment]], [[Digital Twin Infrastructure]]
  - **relatedTo**: [[Digital Asset]], [[Immersive Experience]]

- ### Content

  ## Overview

  Digital Model represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
