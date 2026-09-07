```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b1744cbd5f15f80edf95b3f906b315e2edd5b3ce4fb2a083174f0dfae98545a",
  "@type": "Page",
  "vc:slug": "virtual-world",
  "title": "Virtual World",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:client-application",
      "vc:label": "Client Application"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-work",
      "vc:label": "Collaborative Work"
    },
    {
      "@id": "urn:visionflow:linked:content-delivery-network",
      "vc:label": "Content Delivery Network"
    },
    {
      "@id": "urn:visionflow:linked:creative-expression",
      "vc:label": "Creative Expression"
    },
    {
      "@id": "urn:visionflow:linked:economic-system",
      "vc:label": "Economic System"
    },
    {
      "@id": "urn:visionflow:linked:ieee-vr-standards",
      "vc:label": "IEEE VR Standards"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23005",
      "vc:label": "ISO/IEC 23005"
    },
    {
      "@id": "urn:visionflow:linked:object-persistence",
      "vc:label": "Object Persistence"
    },
    {
      "@id": "urn:visionflow:linked:server-infrastructure",
      "vc:label": "Server Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:social-interaction",
      "vc:label": "Social Interaction"
    },
    {
      "@id": "urn:visionflow:linked:social-system",
      "vc:label": "Social System"
    },
    {
      "@id": "urn:visionflow:linked:user-representation",
      "vc:label": "User Representation"
    },
    {
      "@id": "urn:visionflow:linked:world-space",
      "vc:label": "World Space"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-rendering-engine",
      "vc:label": "3D Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-management",
      "vc:label": "Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:authentication-service",
      "vc:label": "Authentication Service"
    },
    {
      "@id": "urn:visionflow:owl:class:database-system",
      "vc:label": "Database System"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-economy",
      "vc:label": "Digital Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-real-estate",
      "vc:label": "Digital Real Estate"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-platform",
      "vc:label": "Metaverse Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:physics-engine",
      "vc:label": "Physics Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:scene-graph",
      "vc:label": "Scene Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:tourism-metaverse",
      "vc:label": "Tourism Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "Virtual Society"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20314"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual World"
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
  "@id": "urn:ngm:class:virtual-world",
  "@type": "Class",
  "label": "Virtual World",
  "definition": "A self-contained digital environment with persistent state, spatial properties, user interaction capabilities, and internal rules that simulate physical or fantastical worlds, providing a shared space for multiple users to interact with each other and digital objects.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:economic-systems",
        "label": "Economic Systems"
      },
      {
        "@id": "urn:ngm:class:social-system",
        "label": "Social System"
      },
      {
        "@id": "urn:ngm:class:user-representation",
        "label": "User Representation"
      },
      {
        "@id": "urn:ngm:class:digital-real-estate",
        "label": "Digital Real Estate"
      },
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      },
      {
        "@id": "urn:ngm:class:tourism-metaverse",
        "label": "Tourism Metaverse"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      },
      {
        "@id": "urn:ngm:class:authentication-service",
        "label": "Authentication Service"
      },
      {
        "@id": "urn:ngm:class:database-system",
        "label": "Database System"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality",
        "label": "Collaborative Work"
      },
      {
        "@id": "urn:ngm:class:creative-expression",
        "label": "Creative Expression"
      },
      {
        "@id": "urn:ngm:class:social-interaction",
        "label": "Social Interaction"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-society",
        "label": "Virtual Society"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:metaverse-platform",
        "label": "Metaverse Platform"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - A self-contained digital environment with persistent state, spatial properties, user interaction capabilities, and internal rules that simulate physical or fantastical worlds, providing a shared space for multiple users to interact with each other and digital objects.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualWorld
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[World Space]], [[Physics Engine]], [[User Representation]], [[Object Persistence]], [[Social System]], [[Economic System]], [[Scene Graph]], [[Tourism Metaverse]], [[Digital Real Estate]]
  - is-part-of:: [[Metaverse Platform]], [[Metaverse]]
  - requires:: [[3D Rendering Engine]], [[Network Protocol]], [[Database System]], [[Authentication Service]], [[Asset Management]]
  - enables:: [[Virtual Society]], [[Digital Economy]], [[Social Interaction]], [[Creative Expression]], [[Collaborative Work]]
  - depends-on:: [[Client Application]], [[Server Infrastructure]], [[Content Delivery Network]]

- ### Content
  Virtual World — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE VR Standards]], [[ISO/IEC 23005]]
  - migration-date:: 2026-04-26T00:00:00Z
