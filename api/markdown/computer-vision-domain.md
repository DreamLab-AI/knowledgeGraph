- ### Definition
  - The Computer Vision Domain covers the extraction of structured information from images, video and other visual signals. Its scope includes image formation, feature detection, recognition, segmentation and three-dimensional scene understanding. It is an application sub-area of the Artificial Intelligence Domain and relies heavily on the methods of the Machine Learning Domain. The boundary excludes the generation of imagery for display purposes, which belongs to the Computer Graphics Domain.

- ### Semantic Classification
  - owl-class:: cv:ComputerVisionDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Computer Graphics Domain]], [[Robotics Domain]], [[Deep Learning Domain]]
  - has-part:: [[Image Classification]], [[Object Detection]], [[Image Segmentation]], [[Optical Flow]], [[3D Reconstruction]]
  - requires:: [[Machine Learning Domain]], [[Linear Algebra]], [[Signal Processing]]
  - enables:: [[Autonomous Navigation]], [[Visual Inspection]], [[Augmented Reality]]

- ### Content
  - The Computer Vision Domain is concerned with interpreting visual data, mapping pixels to semantic and geometric descriptions of a scene. Its scope runs from low-level operations such as edge and corner detection through to high-level tasks such as recognition and scene reconstruction. The boundary separates analysis from synthesis, so producing a rendered frame is graphics work whereas inferring depth from a frame is vision work.
  - Member concepts include Image Classification, Object Detection and Image Segmentation, which assign labels at the image, instance and pixel level respectively, alongside Optical Flow for motion estimation and 3D Reconstruction for geometric inference. These tasks share dependence on machine learning methods, linear algebra for geometric transforms and signal processing for filtering and sampling.
  - The domain bridges to the Computer Graphics Domain through shared geometric and photometric models and to the Robotics Domain where perception drives action. Its modern methods are largely supplied by the Deep Learning Domain, and its outputs enable autonomous navigation, automated visual inspection and augmented reality overlays.

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]]
  - migration-date:: 2026-05-29T00:00:00Z