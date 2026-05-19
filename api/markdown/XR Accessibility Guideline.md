public:: true

# XR Accessibility Guideline
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c2e592fb3fc0602faf9e8f047f7772ae8fa46892b683b5d70ee156eb01f7fc3",
  "@type": "Page",
  "vc:slug": "xr-accessibility-guideline",
  "title": "XR Accessibility Guideline",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:accessibility-testing",
      "vc:label": "Accessibility Testing"
    },
    {
      "@id": "urn:visionflow:linked:assistive-technology-integration",
      "vc:label": "Assistive Technology Integration"
    },
    {
      "@id": "urn:visionflow:linked:best-practice",
      "vc:label": "Best Practice"
    },
    {
      "@id": "urn:visionflow:linked:design-recommendation",
      "vc:label": "Design Recommendation"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:implementation-example",
      "vc:label": "Implementation Example"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-112",
      "vc:label": "ISO 9241-112"
    },
    {
      "@id": "urn:visionflow:linked:universal-access",
      "vc:label": "Universal Access"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-xr-accessibility-ur",
      "vc:label": "W3C XR Accessibility UR"
    },
    {
      "@id": "urn:visionflow:owl:class:accessibility-standard",
      "vc:label": "Accessibility Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:inclusive-xr-design",
      "vc:label": "Inclusive XR Design"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:user-research",
      "vc:label": "User Research"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Accessibility Guideline"
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
  "@id": "urn:ngm:class:xr-accessibility-guideline",
  "@type": "Class",
  "label": "XR Accessibility Guideline",
  "definition": "Design recommendations and best practices ensuring XR applications and immersive experiences are usable by people with diverse abilities and disabilities.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:accessibility-standard",
      "label": "Accessibility Standard"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:best-practice",
        "label": "Best Practice"
      },
      {
        "@id": "urn:ngm:class:design-recommendation",
        "label": "Design Recommendation"
      },
      {
        "@id": "urn:ngm:class:implementation-example",
        "label": "Implementation Example"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:accessibility-testing",
        "label": "Accessibility Testing"
      },
      {
        "@id": "urn:ngm:class:user-research",
        "label": "User Research"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:assistive-technology-integration",
        "label": "Assistive Technology Integration"
      },
      {
        "@id": "urn:ngm:class:universal-access",
        "label": "Universal Access"
      },
      {
        "@id": "urn:ngm:class:inclusive-xr-design",
        "label": "Inclusive XR Design"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:accessibility-standard",
        "label": "Accessibility Standard"
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
  "@id": "urn:visionflow:annotation:link-resolutions:xr-accessibility-guideline:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c2e592fb3fc0602faf9e8f047f7772ae8fa46892b683b5d70ee156eb01f7fc3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Accessibility Testing]]",
      "resolved": "urn:visionflow:linked:accessibility-testing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Assistive Technology Integration]]",
      "resolved": "urn:visionflow:linked:assistive-technology-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Best Practice]]",
      "resolved": "urn:visionflow:linked:best-practice",
      "kind": "StubLink"
    },
    {
      "raw": "[[Design Recommendation]]",
      "resolved": "urn:visionflow:linked:design-recommendation",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Implementation Example]]",
      "resolved": "urn:visionflow:linked:implementation-example",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-112]]",
      "resolved": "urn:visionflow:linked:iso-9241-112",
      "kind": "StubLink"
    },
    {
      "raw": "[[Universal Access]]",
      "resolved": "urn:visionflow:linked:universal-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C XR Accessibility UR]]",
      "resolved": "urn:visionflow:linked:w3-c-xr-accessibility-ur",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessibility Standard]]",
      "resolved": "urn:visionflow:owl:class:accessibility-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inclusive XR Design]]",
      "resolved": "urn:visionflow:owl:class:inclusive-xr-design",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Research]]",
      "resolved": "urn:visionflow:owl:class:user-research",
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
  - Design recommendations and best practices ensuring XR applications and immersive experiences are usable by people with diverse abilities and disabilities.

- ### Semantic Classification
  - owl-class:: spatial-computing:XRAccessibilityGuideline
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Design Recommendation]], [[Best Practice]], [[Implementation Example]]
  - is-part-of:: [[Accessibility Standard]]
  - requires:: [[User Research]], [[Accessibility Testing]]
  - enables:: [[Inclusive XR Design]], [[Assistive Technology Integration]], [[Universal Access]]

- ### Content
  XR Accessibility Guideline — content pending enrichment.

- ### Provenance
  - sources:: [[W3C XR Accessibility UR]], [[ISO 9241-112]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
