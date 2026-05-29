- ### Definition
  - Medical imaging encompasses the acquisition, processing, and AI-assisted analysis of visual representations of the human body—including X-ray, CT, MRI, ultrasound, PET, and histopathology slides—for clinical diagnosis, treatment planning, and disease monitoring. Deep learning models, particularly convolutional neural networks and vision transformers, have achieved clinician-level performance on specific image classification and segmentation tasks. The field is governed by standards such as DICOM for data interchange and requires regulatory clearance (e.g., FDA 510(k) or CE marking) for clinical-decision software.

- ### Semantic Classification
  - owl-class:: medical-imaging:Medical Imaging
  - owl-role:: Concept

- ### Relationships
  - uses [[Computer Vision]]
  - uses [[Deep Learning]]
  - uses [[Image Segmentation]]
  - enables [[Clinical Decision Support]]
  - enables [[Radiology AI]]
  - relatedTo [[Healthcare AI]]

- ### Content
  Medical imaging AI sits at the confluence of Computer Vision, clinical domain expertise, and regulatory science. Convolutional Neural Networks (CNNs) such as U-Net architectures have become standard for organ and lesion segmentation tasks in CT and MRI; vision transformer variants extend attention mechanisms to volumetric data. Object Detection models applied to chest radiographs identify pneumonia, nodules, and pneumothorax with sensitivities comparable to radiologists under controlled conditions.

  Image Segmentation is particularly critical for treatment planning: radiotherapy systems require precise delineation of tumour boundaries and organs-at-risk, a task where deep learning reduces inter-observer variability. DICOM (Digital Imaging and Communications in Medicine) is the ubiquitous standard for image storage and transfer, with the DICOM SR (Structured Reporting) extension enabling structured AI-output integration into picture archiving and communication systems (PACS).

  Clinical Decision Support systems embed medical imaging AI as a worklist triage or second-read tool, flagging high-priority cases for urgent review. Radiology AI covers the subspecialty application in diagnostic radiology and is a principal commercialisation pathway. Pathology AI extends similar techniques to digitised histology slides via whole-slide imaging scanners. Healthcare AI governance frameworks require prospective clinical validation studies and post-market performance monitoring, and regulatory bodies including the FDA and MHRA have published specific guidance frameworks for AI/ML-based medical devices.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z