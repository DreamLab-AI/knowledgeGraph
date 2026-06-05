public:: true

# Display Metrology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5e96c9328022741c3e9040b15f72a9d6ea5d376ee40925f5af6d7b456c00141b",
  "@type": "Page",
  "vc:slug": "display-metrology",
  "title": "Display Metrology",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:colorimeter",
      "vc:label": "Colorimeter"
    },
    {
      "@id": "urn:visionflow:linked:compliance-testing",
      "vc:label": "Compliance Testing"
    },
    {
      "@id": "urn:visionflow:linked:contrast-ratio-meter",
      "vc:label": "Contrast Ratio Meter"
    },
    {
      "@id": "urn:visionflow:linked:display-calibration",
      "vc:label": "Display Calibration"
    },
    {
      "@id": "urn:visionflow:linked:environmental-control",
      "vc:label": "Environmental Control"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-303",
      "vc:label": "ISO 9241-303"
    },
    {
      "@id": "urn:visionflow:linked:luminance-meter",
      "vc:label": "Luminance Meter"
    },
    {
      "@id": "urn:visionflow:linked:measurement-protocols",
      "vc:label": "Measurement Protocols"
    },
    {
      "@id": "urn:visionflow:linked:performance-validation",
      "vc:label": "Performance Validation"
    },
    {
      "@id": "urn:visionflow:linked:photometer",
      "vc:label": "Photometer"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:linked:visual-quality-assessment",
      "vc:label": "Visual Quality Assessment"
    },
    {
      "@id": "urn:visionflow:owl:class:calibration-standards",
      "vc:label": "Calibration Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:ieee-p2733-standards",
      "vc:label": "IEEE P2733 Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "NetworkLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:resolution-test-chart",
      "vc:label": "Resolution Test Chart"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-testing-infrastructure",
      "vc:label": "XR Testing Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20156"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Display Metrology"
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
  "@id": "urn:ngm:class:display-metrology",
  "@type": "Class",
  "label": "Display Metrology",
  "definition": "Standardized measurement equipment and instruments for assessing visual performance parameters of XR displays, including colorimeters, photometers, and specialised testing hardware.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:colorimeter",
        "label": "Colorimeter"
      },
      {
        "@id": "urn:ngm:class:contrast-ratio-meter",
        "label": "Contrast Ratio Meter"
      },
      {
        "@id": "urn:ngm:class:luminance-meter",
        "label": "Luminance Meter"
      },
      {
        "@id": "urn:ngm:class:photometer",
        "label": "Photometer"
      },
      {
        "@id": "urn:ngm:class:resolution-test-chart",
        "label": "Resolution Test Chart"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:environmental-control",
        "label": "Environmental Control"
      },
      {
        "@id": "urn:ngm:class:measurement-protocols",
        "label": "Measurement Protocols"
      },
      {
        "@id": "urn:ngm:class:calibration-standards",
        "label": "Calibration Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance-testing",
        "label": "Compliance Testing"
      },
      {
        "@id": "urn:ngm:class:display-calibration",
        "label": "Display Calibration"
      },
      {
        "@id": "urn:ngm:class:performance-validation",
        "label": "Performance Validation"
      },
      {
        "@id": "urn:ngm:class:visual-quality-assessment",
        "label": "Visual Quality Assessment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:xr-testing-infrastructure",
        "label": "XR Testing Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:display-metrology:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5e96c9328022741c3e9040b15f72a9d6ea5d376ee40925f5af6d7b456c00141b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Colorimeter]]",
      "resolved": "urn:visionflow:linked:colorimeter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Testing]]",
      "resolved": "urn:visionflow:linked:compliance-testing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Contrast Ratio Meter]]",
      "resolved": "urn:visionflow:linked:contrast-ratio-meter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Display Calibration]]",
      "resolved": "urn:visionflow:linked:display-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Control]]",
      "resolved": "urn:visionflow:linked:environmental-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-303]]",
      "resolved": "urn:visionflow:linked:iso-9241-303",
      "kind": "StubLink"
    },
    {
      "raw": "[[Luminance Meter]]",
      "resolved": "urn:visionflow:linked:luminance-meter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Protocols]]",
      "resolved": "urn:visionflow:linked:measurement-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Performance Validation]]",
      "resolved": "urn:visionflow:linked:performance-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Photometer]]",
      "resolved": "urn:visionflow:linked:photometer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Quality Assessment]]",
      "resolved": "urn:visionflow:linked:visual-quality-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calibration Standards]]",
      "resolved": "urn:visionflow:owl:class:calibration-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IEEE P2733 Standards]]",
      "resolved": "urn:visionflow:owl:class:ieee-p2733-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkLayer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Resolution Test Chart]]",
      "resolved": "urn:visionflow:owl:class:resolution-test-chart",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Testing Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:xr-testing-infrastructure",
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
  - Standardized measurement equipment and instruments for assessing visual performance parameters of XR displays, including colorimeters, photometers, and specialised testing hardware.

- ### Bridge-To
  - bridges-to:: [[Sensor Input]] (rb)

- ### Semantic Classification
  - owl-class:: spatial-computing:DisplayMetrology
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]]

- ### Relationships
  - has-part:: [[Colorimeter]], [[Photometer]], [[Contrast Ratio Meter]], [[Resolution Test Chart]], [[Luminance Meter]]
  - is-part-of:: [[XR Testing Infrastructure]]
  - requires:: [[Calibration Standards]], [[Measurement Protocols]], [[Environmental Control]]
  - enables:: [[Display Calibration]], [[Visual Quality Assessment]], [[Performance Validation]], [[Compliance Testing]]
  - depends-on:: [[ISO 9241-303]], [[IEEE P2733 Standards]]

- ### Content
  Display Metrology — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
