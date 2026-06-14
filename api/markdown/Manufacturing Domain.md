public:: true

# Manufacturing Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:309027d44cedb6ec0fa01e68b6f0db9ce7bb0eb50668e0430c95d877dfdb9ca6",
  "@type": "Page",
  "vc:slug": "manufacturing-domain",
  "title": "Manufacturing Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:process-automation",
      "vc:label": "Process Automation"
    },
    {
      "@id": "urn:visionflow:linked:industrial-robotics",
      "vc:label": "Industrial Robotics"
    },
    {
      "@id": "urn:visionflow:linked:quality-control",
      "vc:label": "Quality Control"
    },
    {
      "@id": "urn:visionflow:linked:predictive-maintenance",
      "vc:label": "Predictive Maintenance"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain-integration",
      "vc:label": "Supply Chain Integration"
    },
    {
      "@id": "urn:visionflow:linked:robotics-domain",
      "vc:label": "Robotics Domain"
    },
    {
      "@id": "urn:visionflow:linked:control-theory-domain",
      "vc:label": "Control Theory Domain"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems-domain",
      "vc:label": "Embedded Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:automated-production",
      "vc:label": "Automated Production"
    },
    {
      "@id": "urn:visionflow:linked:defect-detection",
      "vc:label": "Defect Detection"
    },
    {
      "@id": "urn:visionflow:linked:operational-efficiency",
      "vc:label": "Operational Efficiency"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-domain",
      "vc:label": "Computer Vision Domain"
    },
    {
      "@id": "urn:visionflow:linked:isa-95",
      "vc:label": "ISA-95"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Manufacturing Domain"
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
  "@id": "urn:ngm:class:manufacturing-domain",
  "@type": "Class",
  "label": "Manufacturing Domain",
  "definition": "The Manufacturing Domain covers the design and operation of systems that produce physical goods at scale. Its scope includes process automation, industrial robotics, quality control and supply chain integration. It is a sub-area of the Robotics Domain concerned with production. The boundary excludes the financial analysis of production economics, which belongs to the Financial Markets Domain.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics-domain",
      "label": "Robotics Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:process-automation",
        "label": "Process Automation"
      },
      {
        "@id": "urn:ngm:class:industrial-robotics",
        "label": "Industrial Robotics"
      },
      {
        "@id": "urn:ngm:class:quality-control",
        "label": "Quality Control"
      },
      {
        "@id": "urn:ngm:class:predictive-maintenance",
        "label": "Predictive Maintenance"
      },
      {
        "@id": "urn:ngm:class:supply-chain-integration",
        "label": "Supply Chain Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:robotics-domain",
        "label": "Robotics Domain"
      },
      {
        "@id": "urn:ngm:class:control-theory-domain",
        "label": "Control Theory Domain"
      },
      {
        "@id": "urn:ngm:class:embedded-systems-domain",
        "label": "Embedded Systems Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-production",
        "label": "Automated Production"
      },
      {
        "@id": "urn:ngm:class:defect-detection",
        "label": "Defect Detection"
      },
      {
        "@id": "urn:ngm:class:operational-efficiency",
        "label": "Operational Efficiency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:manufacturing-domain:c96ddbe8309d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:309027d44cedb6ec0fa01e68b6f0db9ce7bb0eb50668e0430c95d877dfdb9ca6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Process Automation]]",
      "resolved": "urn:visionflow:linked:process-automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Industrial Robotics]]",
      "resolved": "urn:visionflow:linked:industrial-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quality Control]]",
      "resolved": "urn:visionflow:linked:quality-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Predictive Maintenance]]",
      "resolved": "urn:visionflow:linked:predictive-maintenance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain Integration]]",
      "resolved": "urn:visionflow:linked:supply-chain-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory Domain]]",
      "resolved": "urn:visionflow:linked:control-theory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems Domain]]",
      "resolved": "urn:visionflow:linked:embedded-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Production]]",
      "resolved": "urn:visionflow:linked:automated-production",
      "kind": "StubLink"
    },
    {
      "raw": "[[Defect Detection]]",
      "resolved": "urn:visionflow:linked:defect-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Operational Efficiency]]",
      "resolved": "urn:visionflow:linked:operational-efficiency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISA-95]]",
      "resolved": "urn:visionflow:linked:isa-95",
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
  - The Manufacturing Domain covers the design and operation of systems that produce physical goods at scale. Its scope includes process automation, industrial robotics, quality control and supply chain integration. It is a sub-area of the Robotics Domain concerned with production. The boundary excludes the financial analysis of production economics, which belongs to the Financial Markets Domain.

- ### Semantic Classification
  - owl-class:: mfg:ManufacturingDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Robotics Domain]], [[Computer Vision Domain]], [[Embedded Systems Domain]]
  - has-part:: [[Process Automation]], [[Industrial Robotics]], [[Quality Control]], [[Predictive Maintenance]], [[Supply Chain Integration]]
  - requires:: [[Robotics Domain]], [[Control Theory Domain]], [[Embedded Systems Domain]]
  - enables:: [[Automated Production]], [[Defect Detection]], [[Operational Efficiency]]

- ### Content
  - The Manufacturing Domain concerns the engineering of production systems that convert materials into finished goods reliably and at scale. Its scope spans the automation of processes, the deployment of industrial robots, the control of quality, the prediction of maintenance needs and the integration of supply chains. The boundary is physical production and its operation; the economics of production belong to the Financial Markets Domain.
  - Member concepts include Process Automation, Industrial Robotics, Quality Control, Predictive Maintenance and Supply Chain Integration. These depend on the Robotics Domain for actuation, the Control Theory Domain for process regulation and the Embedded Systems Domain for machine control.
  - The domain bridges to the Robotics Domain as its parent, to the Computer Vision Domain through automated inspection, and to the Embedded Systems Domain through on-machine computing. It enables automated production, defect detection and operational efficiency.

- ### Provenance
  - sources:: [[ISA-95]]
  - migration-date:: 2026-05-29T00:00:00Z
