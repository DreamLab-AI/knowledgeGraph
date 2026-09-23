---
okf_version: "0.2"
type: Class
title: Medical Imaging
resource: urn:ngm:class:medical-imaging
domain: ai
description: Medical imaging is the acquisition, reconstruction, processing, and computational analysis of visual representations of human anatomy and physiology — including X-ray, computed tomography (CT), magnetic resonance imaging (MRI), ultrasound, positron emission tomography (PET), single-photon emission computed tomography (SPECT), and digital pathology — for the purposes of clinical diagnosis, treatmen
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:healthcare-ai
hasPart:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-reconstruction
requires:
  - urn:ngm:class:dicom
  - urn:ngm:class:data-annotation
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:radiology-ai
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:precision-medicine
contrastsWith:
  - urn:ngm:class:natural-language-processing
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:federated-learning
standardizedBy:
  - urn:ngm:class:dicom
  - urn:ngm:class:hl7-fhir
relatedTo:
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:electronic-health-record
  - urn:ngm:class:digital-pathology
  - urn:ngm:class:radiomics
---

# Medical Imaging

Medical imaging is the acquisition, reconstruction, processing, and computational analysis of visual representations of human anatomy and physiology — including X-ray, computed tomography (CT), magnetic resonance imaging (MRI), ultrasound, positron emission tomography (PET), single-photon emission computed tomography (SPECT), and digital pathology — for the purposes of clinical diagnosis, treatment planning, surgical guidance, and longitudinal disease monitoring. The field has undergone a fundamental shift with the integration of deep learning methods, particularly convolutional neural networks, vision transformers, and diffusion-based models, which now perform organ segmentation, lesion detection, and disease classification at or near radiologist-level accuracy on constrained benchmarks. Data interoperability is standardised by DICOM (Digital Imaging and Communications in Medicine) for image storage and transfer, and by HL7 FHIR for clinical report integration; AI-based clinical decision software requires regulatory clearance such as FDA 510(k) premarket notification, EU MDR/IVDR conformity assessment, or UKCA marking.
