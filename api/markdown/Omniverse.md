public:: true

# Omniverse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:589115cda5f3dc880ef4e297961b7ed72dac1c3fd9ec11ecc7f018e9244aa2d9",
  "@type": "Page",
  "vc:slug": "omniverse",
  "title": "Omniverse",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:simulation",
      "vc:label": "Simulation"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:nvidia",
      "vc:label": "NVIDIA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Omniverse"
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
  "@id": "urn:ngm:class:omniverse",
  "@type": "Class",
  "label": "Omniverse",
  "definition": "A platform developed by NVIDIA for building and operating three-dimensional simulation and collaboration applications, based on the Universal Scene Description framework. It is used for digital twins and physically accurate simulation.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simulation",
      "label": "Simulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
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
  "@id": "urn:visionflow:annotation:link-resolutions:omniverse:060fe270ca8b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:589115cda5f3dc880ef4e297961b7ed72dac1c3fd9ec11ecc7f018e9244aa2d9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Simulation]]",
      "resolved": "urn:visionflow:linked:simulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NVIDIA]]",
      "resolved": "urn:visionflow:linked:nvidia",
      "kind": "ResolvedLink"
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
  - A platform developed by NVIDIA for building and operating three-dimensional simulation and collaboration applications, based on the Universal Scene Description framework. It is used for digital twins and physically accurate simulation.

- ### Semantic Classification
  - owl-class:: metaverse:Omniverse
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Simulation]]
  - bridges-to:: [[NVIDIA]]
  - requires:: [[Simulation]]
  - enables:: [[Metaverse]]

- ### Content
  - NVIDIA Omniverse is a platform for developing three-dimensional workflows and applications that lets multiple users and tools collaborate on shared virtual scenes. It uses the Universal Scene Description format originally developed by Pixar as a common data model.
  - Omniverse is applied to digital twins, robotics simulation, and synthetic data generation, providing physically based rendering and physics simulation across connected applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
