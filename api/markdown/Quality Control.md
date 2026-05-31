public:: true

# Quality Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quality-control",
  "@type": "Page",
  "vc:slug": "quality-control",
  "title": "Quality Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quality-control",
  "@type": "Class",
  "label": "Quality Control",
  "definition": "Quality control is the operational process of inspecting, testing, and verifying products or outputs against defined specifications to detect and remove defects before delivery. In manufacturing it spans dimensional inspection, surface-defect detection, and statistical process control, increasingly automated through machine vision. It reduces scrap, ensures conformance, and provides feedback for process improvement.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:manufacturing-domain", "label": "Manufacturing Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Quality control is the inspection and verification of outputs against specifications to detect defects. It is increasingly enabled by [[Computer Vision]] and forms a core part of the [[Manufacturing Domain]] value chain.
- ### Content
  - Automated visual quality control uses cameras and convolutional models to detect surface flaws, missing components, or dimensional deviations at production speed. Combined with statistical process control, it shifts inspection from sampling-based to in-line 100% coverage, lowering defect escape rates and feeding anomaly signals back into manufacturing process tuning.
