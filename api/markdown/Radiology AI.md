public:: true

# Radiology AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63b42a56676e08723d3fef6d0ee243bacfd99ad6caf8cdb6df0fdbfeebda08e3",
  "@type": "Page",
  "vc:slug": "radiology-ai",
  "title": "Radiology AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dicom",
      "vc:label": "DICOM"
    },
    {
      "@id": "urn:visionflow:owl:class:medical-imaging-ai",
      "vc:label": "Medical Imaging AI"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:pathology-ai",
      "vc:label": "Pathology AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0339"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Radiology AI"
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
  "@id": "urn:ngm:class:radiology-ai",
  "@type": "Class",
  "label": "Radiology AI",
  "definition": "Radiology AI comprises artificial intelligence systems designed for automated interpretation and quantitative analysis of radiological imaging modalities — X-ray, CT, MRI, and ultrasound. These systems perform lesion detection, organ segmentation, and structured reporting at radiologist-level accuracy, integrating with PACS workflows and validated through prospective clinical trials.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    },
    {
      "@id": "urn:ngm:class:medical-imaging-ai",
      "label": "Medical Imaging AI"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:medical-imaging",
        "label": "Medical Imaging"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:image-segmentation",
        "label": "Image Segmentation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:radiology-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63b42a56676e08723d3fef6d0ee243bacfd99ad6caf8cdb6df0fdbfeebda08e3"
  },
  "vc:resolutions": [
    {
      "raw": "[[DICOM]]",
      "resolved": "urn:visionflow:linked:dicom",
      "kind": "StubLink"
    },
    {
      "raw": "[[Medical Imaging AI]]",
      "resolved": "urn:visionflow:owl:class:medical-imaging-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pathology AI]]",
      "resolved": "urn:visionflow:owl:class:pathology-ai",
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
  - Radiology AI refers to artificial intelligence systems specifically designed for the interpretation and analysis of radiological imaging modalities including X-ray, computed tomography (CT), magnetic resonance imaging (MRI), and ultrasound. These systems automate detection, classification, and quantification tasks whilst integrating with PACS workflows and providing radiologist-level diagnostic performance validated through clinical trials.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:RadiologyAI
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Uses [[Convolutional Neural Network]] as the primary architectural backbone for image analysis
  - Uses [[Image Segmentation]] for organ and lesion delineation
  - Requires [[Medical Imaging]] as the source data domain
  - Related to [[Computer Vision]] as the foundational technical discipline
  - Related to [[Object Detection]] for nodule and anomaly localisation

- ### Content
  - Radiology AI refers to artificial intelligence systems specifically designed for the interpretation and analysis of radiological imaging modalities including X-ray, computed tomography (CT), magnetic resonance imaging (MRI), and ultrasound. These systems automate detection, classification, and quantification tasks whilst integrating with PACS workflows and providing radiologist-level diagnostic performance validated through clinical trials.

			- ### AI in Broadcasting and Content Creation
				- **RadioGPT**: The world’s first AI-driven radio station ([Interesting Engineering Article](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)).

			- ### AI in Broadcasting and Content Creation
				- **RadioGPT**: The world’s first AI-driven radio station ([Interesting Engineering Article](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)).

			- ### AI in Broadcasting and Content Creation
				- **RadioGPT**: The world’s first AI-driven radio station ([Interesting Engineering Article](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)).

  ## Core Characteristics

  - **Multi-Modality Support**: X-ray, CT, MRI, ultrasound, PET imaging
  - **Real-Time Analysis**: Integration with PACS for immediate results
  - **Radiologist-Grade Performance**: Validated diagnostic accuracy
  - **Worklist Prioritisation**: Automated triage of urgent findings
  - **Quantitative Reporting**: Structured reporting with measurements

  ## Relationships

  - **Superclass**: Medical Imaging AI
  - **Related**: PACS Integration, DICOM Processing, Computer Vision
  - **Standards**: DICOM, HL7 FHIR, IHE IRWF

  ## Key Literature

  1. Hosny, A., et al. (2018). "Artificial intelligence in radiology." *Nature Reviews Cancer*, 18(8), 500-510.

  2. Topol, E. J. (2019). "High-performance medicine: the convergence of human and artificial intelligence." *Nature Medicine*, 25(1), 44-56.

  ## See Also

  - [[Medical Imaging AI]]
  - [[Pathology AI]]
  - [[DICOM]]

  ## Core Characteristics

  - **Multi-Modality Support**: X-ray, CT, MRI, ultrasound, PET imaging
  - **Real-Time Analysis**: Integration with PACS for immediate results
  - **Radiologist-Grade Performance**: Validated diagnostic accuracy
  - **Worklist Prioritisation**: Automated triage of urgent findings
  - **Quantitative Reporting**: Structured reporting with measurements

  ## Relationships

  - **Superclass**: Medical Imaging AI
  - **Related**: PACS Integration, DICOM Processing, Computer Vision
  - **Standards**: DICOM, HL7 FHIR, IHE IRWF

  ## Key Literature

  1. Hosny, A., et al. (2018). "Artificial intelligence in radiology." *Nature Reviews Cancer*, 18(8), 500-510.

  2. Topol, E. J. (2019). "High-performance medicine: the convergence of human and artificial intelligence." *Nature Medicine*, 25(1), 44-56.

  ## See Also

  - [[Medical Imaging AI]]
  - [[Pathology AI]]
  - [[DICOM]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
