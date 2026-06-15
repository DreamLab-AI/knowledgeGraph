- ### Definition
  - Medical Image Analysis applies [[Computer Vision]] and [[Deep Learning]] to images from [[Medical Imaging]], performing [[Image Segmentation]] and [[Image Classification]] to support [[Radiology]] and diagnosis.

- ### Overview
  - Medical image analysis turns the rich visual data of clinical imaging into structured, quantitative information. It addresses tasks such as delineating organs and lesions, detecting and grading abnormalities, aligning images over time and across modalities, and measuring clinically meaningful features.
  - Deep learning, particularly convolutional and increasingly transformer-based architectures, has become the dominant approach, learning hierarchical features directly from annotated clinical datasets and frequently exploiting transfer learning to cope with limited labelled data.

- ### Mechanisms
  - Preprocessing normalises intensities, corrects artefacts and standardises resolution across scanners.
  - Segmentation networks assign each voxel or pixel to anatomical or pathological classes.
  - Detection and classification models localise and characterise abnormalities such as nodules or tumours.
  - Registration aligns images so changes can be tracked and information fused, while uncertainty estimation and explainability methods build clinician trust.

- ### Applications
  - Radiological screening and triage, for example in chest, mammography and neuroimaging.
  - Tumour detection, delineation and response assessment in oncology.
  - Surgical and radiotherapy planning from volumetric scans.
  - Digital pathology analysis of whole-slide images.

- ### Relationships
  - subClassOf:: [[Computer Vision]]
  - hasPart:: [[Image Segmentation]]
  - hasPart:: [[Image Classification]]
  - uses:: [[Convolutional Neural Network]]
  - uses:: [[Deep Learning]]
  - requires:: [[Medical Imaging]]
  - requires:: [[Annotated Data]]
  - enables:: [[Computer-Aided Diagnosis]]
  - enables:: [[Diagnostic Imaging]]
  - supports:: [[Radiology]]
  - supports:: [[Treatment Planning]]
  - dependsOn:: [[Transfer Learning]]
  - bridgesTo:: [[Healthcare AI]]
  - bridgesTo:: [[Precision Medicine]]
  - relatedTo:: [[Object Detection]]
  - relatedTo:: [[Image Registration]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation