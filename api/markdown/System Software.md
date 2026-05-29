public:: true

# System Software
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7f3d8f325af960467504a33bfec82c01e04759c1f548402c4f4d38297622597d",
  "@type": "Page",
  "vc:slug": "system-software",
  "title": "System Software",
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
      "vc:value": "MV-9702"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "System Software"
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
  "@id": "urn:ngm:class:system-software",
  "@type": "Class",
  "label": "System Software",
  "definition": "Low-level software that directly manages hardware resources and provides foundational services upon which application software operates. In XR and spatial computing contexts, system software encompasses device drivers, operating system kernels, firmware, and hardware abstraction layers that expose display, tracking, and input peripherals to higher-level runtimes.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
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
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:hardware-abstraction",
        "label": "Hardware Abstraction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:xr-runtime-environment",
        "label": "XR Runtime Environment"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:technology-stack",
        "label": "Technology Stack"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:system-software:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7f3d8f325af960467504a33bfec82c01e04759c1f548402c4f4d38297622597d"
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
  - Low-level software that directly manages hardware resources and provides foundational services upon which application software operates. In XR and spatial computing contexts, system software encompasses device drivers, operating system kernels, firmware, and hardware abstraction layers that expose display, tracking, and input peripherals to higher-level runtimes.

- ### Semantic Classification
  - owl-class:: spatial-computing:SystemSoftware
  - owl-role:: concept

- ### Relationships
  - Has Part [[Operating System]]
  - Has Part [[Hardware Abstraction]]
  - Part Of [[Technology Stack]]
  - Enables [[XR Runtime Environment]]
  - Enables [[Rendering Pipeline]]
  - Supports [[Middleware]]

- ### Content

  ## Overview

  System software forms the lowest addressable layer of the XR technology stack. Drivers translate raw hardware signals from IMUs, cameras, and displays into normalised data streams consumed by XR runtimes. The operating system kernel schedules processes, manages memory, and enforces security boundaries, whilst firmware provides immutable device configuration at the silicon level.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
