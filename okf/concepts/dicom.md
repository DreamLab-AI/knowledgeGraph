---
okf_version: "0.2"
type: Class
title: DICOM
resource: urn:ngm:class:dicom
domain: artificial-intelligence
description: DICOM (Digital Imaging and Communications in Medicine) is the international standard for storing, transmitting, and managing medical images and associated metadata. It defines both a file format that binds pixel data to rich patient, study, and acquisition attributes, and network services for exchanging images between modalities, archives, and viewing workstations. DICOM enables interoperability a
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:interoperability-standard
  - urn:ngm:class:healthcare-data-standard
hasPart:
  - urn:ngm:class:dicom-file-format
  - urn:ngm:class:dicom-network-services
  - urn:ngm:class:dicom-sop-classes
  - urn:ngm:class:dicom-structured-reporting
  - urn:ngm:class:dicomweb
  - urn:ngm:class:dicom-segmentation-iod
  - urn:ngm:class:dicom-rt-plan
  - urn:ngm:class:dicom-data-dictionary
requires:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-protection
  - urn:ngm:class:privacy
  - urn:ngm:class:security
  - urn:ngm:class:picture-archiving-and-communication-system
enables:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:medical-imaging-ai
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:telehealth
  - urn:ngm:class:federated-learning
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:data-annotation
  - urn:ngm:class:drug-discovery
dependsOn:
  - urn:ngm:class:standards-body
  - urn:ngm:class:picture-archiving-and-communication-system
implements:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:data-governance
contrastsWith:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:nifti-format
  - urn:ngm:class:proprietary-imaging-format
bridgesTo:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:electronic-health-record
  - urn:ngm:class:interoperability-framework
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:snomed-ct
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:dataset
standardizedBy:
  - urn:ngm:class:standards-body
partOf:
  - urn:ngm:class:interoperability-standard
relatedTo:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:computer-vision
  - urn:ngm:class:digital-health
  - urn:ngm:class:data-governance
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:electronic-health-record
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:artificial-intelligence
---

# DICOM

DICOM (Digital Imaging and Communications in Medicine) is the international standard for storing, transmitting, and managing medical images and associated metadata. It defines both a file format that binds pixel data to rich patient, study, and acquisition attributes, and network services for exchanging images between modalities, archives, and viewing workstations. DICOM enables interoperability across radiology, cardiology, and other imaging-intensive specialities, and serves as the canonical data substrate for medical imaging artificial intelligence.
