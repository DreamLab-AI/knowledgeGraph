public:: true

# Environmental Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d9d2e2288661ed59bbc49cd6573038dd08ff2c289435d6796438d48dd5723e9",
  "@type": "Page",
  "vc:slug": "environmental-registry",
  "title": "Environmental Registry",
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
      "vc:value": "MV-9604"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental Registry"
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
  "@id": "urn:ngm:class:environmental-registry",
  "@type": "Class",
  "label": "Environmental Registry",
  "definition": "A catalogued, authoritative store of descriptors for physical or virtual environments, recording their spatial bounds, safety parameters, hazard zones, and compliance status. XR systems query the environmental registry during session initialisation to validate that the current space meets operational and safety requirements before permitting immersive interactions.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:spatial-anchor",
        "label": "Spatial Anchor"
      },
      {
        "@id": "urn:ngm:class:room-scale",
        "label": "Room Scale"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:calibration-tools",
        "label": "Calibration Tools"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:environmental-verification",
        "label": "Environmental Verification"
      },
      {
        "@id": "urn:ngm:class:xr-runtime-environment",
        "label": "XR Runtime Environment"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5d9d2e2288661ed59bbc49cd6573038dd08ff2c289435d6796438d48dd5723e9"
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
  - A catalogued, authoritative store of descriptors for physical or virtual environments, recording their spatial bounds, safety parameters, hazard zones, and compliance status. XR systems query the environmental registry during session initialisation to validate that the current space meets operational and safety requirements before permitting immersive interactions.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalRegistry
  - owl-role:: concept

- ### Relationships
  - Has Part [[Spatial Anchor]]
  - Has Part [[Room Scale]]
  - Supports [[Environmental Verification]]
  - Supports [[XR Runtime Environment]]
  - Uses [[Database Query]]
  - Uses [[Data Management]]
  - Related To [[Calibration Tools]]

- ### Content

  ## Overview

  Environmental registries act as the spatial counterpart to identity registries — each registered environment carries a canonical descriptor including boundary geometry, permissible interaction modes, and safety classification. When an XR session starts, the runtime queries the registry to match the detected space and enforce appropriate guardian boundaries and content restrictions.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
