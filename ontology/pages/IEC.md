public:: true

# IEC

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:iec",
  "@type": "Page",
  "title": "IEC",
  "vc:slug": "iec",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iec",
  "@type": "Class",
  "label": "IEC",
  "definition": "The International Electrotechnical Commission (IEC) is the leading global standards organisation that prepares and publishes international standards for all electrical, electronic and related technologies, collectively known as electrotechnology. Its standards cover areas such as industrial automation, machinery safety, programmable controllers and functional safety, and are frequently adopted jointly with ISO. IEC standards are widely referenced in robotics and industrial systems to ensure interoperability, safety and regulatory compliance.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-organization",
      "label": "Standards Organization"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-organization",
        "label": "Standards Organization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      },
      {
        "@id": "urn:ngm:class:safety-standard",
        "label": "Safety Standard"
      },
      {
        "@id": "urn:ngm:class:robot-safety",
        "label": "Robot Safety"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:safety-standard",
        "label": "Safety Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The International Electrotechnical Commission (IEC) is the leading global standards organisation that prepares and publishes international standards for all electrical, electronic and related technologies, collectively known as electrotechnology. Its standards cover areas such as industrial automation, machinery safety, programmable controllers and functional safety, and are frequently adopted jointly with ISO. IEC standards are widely referenced in robotics and industrial systems to ensure interoperability, safety and regulatory compliance.
  - Related concepts: [[Standards Organization]] [[ISO]] [[Safety Standard]] [[IndustrialAutomation]] [[Interoperability]]
- ### Overview
  - The International Electrotechnical Commission coordinates the worldwide development of standards for electrotechnology.
  - Its national-committee structure lets countries participate in consensus-based standard creation.
  - Many IEC standards are published jointly with [[ISO]] where electrical and mechanical domains overlap.
- ### Key aspects
  - Functional-safety standards define risk-reduction requirements for electrical and electronic systems.
  - Programmable-controller and automation standards specify languages and interfaces for industrial equipment.
  - Conformity-assessment schemes certify products against IEC requirements.
  - Standards promote [[Interoperability]] and [[Compliance]] across vendors and borders.
- ### Applications
  - Machinery and [[Robot Safety]] requirements in industrial settings.
  - Specification of controllers and devices in [[IndustrialAutomation]].
  - Electrical-equipment safety and performance baselines.
  - Regulatory [[Compliance]] frameworks referencing IEC publications.
- ### Relationships
  - subClassOf:: [[Standards Organization]]
  - standardizedBy:: [[Standards Organization]]
  - relatedTo:: [[ISO]]
  - relatedTo:: [[Standards Body]]
  - relatedTo:: [[Safety Standard]]
  - relatedTo:: [[Robot Safety]]
  - relatedTo:: [[Interoperability]]
  - supports:: [[IndustrialAutomation]]
  - supports:: [[Compliance]]
  - supports:: [[Safety Standard]]
  - enables:: [[Interoperability]]
  - enables:: [[Compliance]]
  - bridgesTo:: [[ISO]]
  - contrastsWith:: [[Standards Body]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
