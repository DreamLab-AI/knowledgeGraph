public:: true

# ETSI Domain: Creative Media
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7406c7e648a5c68ee3132b7914015a88a4dc746dd785d11f3a4bb0d71413c9c2",
  "@type": "Page",
  "vc:slug": "etsi-domain-creative-media",
  "title": "ETSI Domain: Creative Media",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-content-creation",
      "vc:label": "3D Content Creation"
    },
    {
      "@id": "urn:visionflow:linked:content-pipeline",
      "vc:label": "Content Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:creative-tools",
      "vc:label": "Creative Tools"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-mec-032",
      "vc:label": "ETSI GR MEC 032"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    },
    {
      "@id": "urn:visionflow:linked:multimedia-authoring",
      "vc:label": "Multimedia Authoring"
    },
    {
      "@id": "urn:visionflow:linked:scene-design",
      "vc:label": "Scene Design"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-format-standards",
      "vc:label": "Asset Format Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-management",
      "vc:label": "Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:avatar-customization",
      "vc:label": "Avatar Customization"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "vc:label": "ETSI Metaverse Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-pipeline",
      "vc:label": "Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world-building",
      "vc:label": "Virtual World Building"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20340"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain: Creative Media"
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
  "@id": "urn:ngm:class:etsi-domain-creative-media",
  "@type": "Class",
  "label": "ETSI Domain: Creative Media",
  "definition": "Domain marker for ETSI metaverse categorisation covering creative content production, 3D modelling, rendering, and multimedia authoring for virtual environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
      "label": "ETSI Metaverse Domain Taxonomy"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:3-d-content-creation",
        "label": "3D Content Creation"
      },
      {
        "@id": "urn:ngm:class:multimedia-authoring",
        "label": "Multimedia Authoring"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-pipeline",
        "label": "Content Pipeline"
      },
      {
        "@id": "urn:ngm:class:creative-tools",
        "label": "Creative Tools"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scene-design",
        "label": "Scene Design"
      },
      {
        "@id": "urn:ngm:class:avatar-customization",
        "label": "Avatar Customization"
      },
      {
        "@id": "urn:ngm:class:virtual-world-building",
        "label": "Virtual World Building"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
        "label": "ETSI Metaverse Domain Taxonomy"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-creative-media:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7406c7e648a5c68ee3132b7914015a88a4dc746dd785d11f3a4bb0d71413c9c2"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Content Creation]]",
      "resolved": "urn:visionflow:linked:3-d-content-creation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Pipeline]]",
      "resolved": "urn:visionflow:linked:content-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creative Tools]]",
      "resolved": "urn:visionflow:linked:creative-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR MEC 032]]",
      "resolved": "urn:visionflow:linked:etsi-gr-mec-032",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multimedia Authoring]]",
      "resolved": "urn:visionflow:linked:multimedia-authoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scene Design]]",
      "resolved": "urn:visionflow:linked:scene-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Format Standards]]",
      "resolved": "urn:visionflow:owl:class:asset-format-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Management]]",
      "resolved": "urn:visionflow:owl:class:asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar Customization]]",
      "resolved": "urn:visionflow:owl:class:avatar-customization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Metaverse Domain Taxonomy]]",
      "resolved": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Pipeline]]",
      "resolved": "urn:visionflow:owl:class:rendering-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World Building]]",
      "resolved": "urn:visionflow:owl:class:virtual-world-building",
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
  - Domain marker for ETSI metaverse categorisation covering creative content production, 3D modelling, rendering, and multimedia authoring for virtual environments.
- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomain_CreativeMedia
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - has-part:: [[3D Content Creation]], [[Rendering Pipeline]], [[Asset Management]], [[Multimedia Authoring]]
  - is-part-of:: [[ETSI Metaverse Domain Taxonomy]]
  - requires:: [[Creative Tools]], [[Content Pipeline]]
  - enables:: [[Virtual World Building]], [[Avatar Customization]], [[Scene Design]]
  - depends-on:: [[Graphics Processing]], [[Asset Format Standards]]
- ### Content
  ETSI Domain: Creative Media — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GR MEC 032]]
  - migration-date:: 2026-04-26T00:00:00Z
