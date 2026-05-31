public:: true

# NVIDIA Isaac Sim
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:637bb23a06a6365f40d6c181d3791f9da9b4a64bfbe1dbab0be42ec14d22b734",
  "@type": "Page",
  "vc:slug": "nvidia-isaac-sim",
  "title": "NVIDIA Isaac Sim",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:physics-simulation-engine",
      "vc:label": "Physics Simulation Engine"
    },
    {
      "@id": "urn:visionflow:linked:robot-control",
      "vc:label": "Robot Control"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-data",
      "vc:label": "Synthetic Data"
    },
    {
      "@id": "urn:visionflow:linked:simulation-environment",
      "vc:label": "Simulation Environment"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-nvidia-com-isaac-sim",
      "vc:label": "https://developer.nvidia.com/isaac/sim"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-isaacsim-omniverse-nvidia-com",
      "vc:label": "https://docs.isaacsim.omniverse.nvidia.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NVIDIA Isaac Sim"
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
  "@id": "urn:ngm:class:nvidia-isaac-sim",
  "@type": "Class",
  "label": "NVIDIA Isaac Sim",
  "definition": "NVIDIA Isaac Sim is a robotics simulation application built on the Omniverse platform for designing, testing, and training robots in virtual environments. It is developed by NVIDIA.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simulation-environment",
      "label": "Simulation Environment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:physics-simulation-engine",
        "label": "Physics Simulation Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nvidia-isaac-sim:7e368a84455b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:637bb23a06a6365f40d6c181d3791f9da9b4a64bfbe1dbab0be42ec14d22b734"
  },
  "vc:resolutions": [
    {
      "raw": "[[Physics Simulation Engine]]",
      "resolved": "urn:visionflow:linked:physics-simulation-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:linked:robot-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Synthetic Data]]",
      "resolved": "urn:visionflow:linked:synthetic-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Simulation Environment]]",
      "resolved": "urn:visionflow:linked:simulation-environment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://developer.nvidia.com/isaac/sim]]",
      "resolved": "urn:visionflow:linked:https-developer-nvidia-com-isaac-sim",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.isaacsim.omniverse.nvidia.com]]",
      "resolved": "urn:visionflow:linked:https-docs-isaacsim-omniverse-nvidia-com",
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
  - NVIDIA Isaac Sim is a robotics simulation application built on the Omniverse platform for designing, testing, and training robots in virtual environments. It is developed by NVIDIA.

- ### Semantic Classification
  - owl-class:: robotics:NVIDIAIsaacSim
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Simulation Environment]]
  - bridges-to:: [[Synthetic Data]]
  - requires:: [[Physics Simulation Engine]]
  - enables:: [[Robot Control]]

- ### Content
  - Isaac Sim provides physically based simulation of robots and their environments, allowing developers to test control software and generate training data without physical hardware. It models sensors, dynamics, and rendering to approximate real conditions.
  - The application supports generation of synthetic data for perception models and the training of policies that can be transferred to real robots. It integrates with robotics frameworks and runs on NVIDIA graphics hardware.

- ### Provenance
  - sources:: [[https://developer.nvidia.com/isaac/sim]], [[https://docs.isaacsim.omniverse.nvidia.com]]
  - migration-date:: 2026-05-29T00:00:00Z
