public:: true

# Simulation Software
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d553d354890772d8f4f305b72b43e70314c530909401d17824663e7e657af4ce",
  "@type": "Page",
  "vc:slug": "simulation-software",
  "title": "Simulation Software",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9685"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Simulation Software"
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
  "@id": "urn:ngm:class:simulation-software",
  "@type": "Class",
  "label": "Simulation Software",
  "definition": "Application software that constructs and executes computational models of physical, biological, or social systems, allowing experimental manipulation of parameters to study behaviour over time. Simulation software spans physics engines, agent-based frameworks, and digital twin environments, and is used across engineering, scientific research, training, and metaverse development.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:simulation-engine",
        "label": "Simulation Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-computing-paradigm",
        "label": "Spatial Computing"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:simulation-software:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d553d354890772d8f4f305b72b43e70314c530909401d17824663e7e657af4ce"
  },
  "vc:resolutions": [
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
  - Application software that constructs and executes computational models of physical, biological, or social systems, allowing experimental manipulation of parameters to study behaviour over time. Simulation software spans physics engines, agent-based frameworks, and digital twin environments, and is used across engineering, scientific research, training, and metaverse development.

- ### Semantic Classification
  - owl-class:: spatial-computing:SimulationSoftware
  - owl-role:: concept

- ### Relationships
  - Has Part [[Simulation Engine]]
  - Uses [[GPU Compute]]
  - Uses [[Rendering Engine]]
  - Enables [[Digital Twin]]
  - Related To [[Spatial Computing Paradigm]]

- ### Content

  ## Overview

  Simulation Software represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
