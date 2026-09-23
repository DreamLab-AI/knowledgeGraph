
Feature detection is the programmatic technique of querying a runtime environment to determine whether a specific capability, API, or behaviour is available before invoking it, rather than inferring support from user-agent strings or version numbers. In computer vision, it also denotes the algorithmic identification of salient points, edges, or regions within images that carry discriminative information for downstream tasks.

- ### Content
  - The web development meaning of feature detection was popularised by the Modernizr library (circa 2009), which replaced brittle browser-sniffing patterns with direct API existence checks. The technique aligns with the principle of progressive enhancement: serve a baseline experience to all, then augment for capable environments. Standardised approaches such as CSS `@supports` and JavaScript `typeof` checks formalised the pattern.

  - In computer vision, feature detection has deep roots in signal processing. Algorithms such as Harris corner detection (1988), SIFT (2004), and ORB (2011) identify keypoints robust to scale, rotation, and illumination changes. Deep convolutional networks later replaced hand-crafted detectors with learned representations, integrating detection and description into unified architectures such as SuperPoint.

  - Across both domains, feature detection underpins interoperability and robustness. WebXR device capability detection, for instance, uses feature detection to decide whether to present immersive or flat UI, whilst visual feature matching drives augmented-reality tracking and simultaneous localisation and mapping. Libraries like Modernizr (web) and OpenCV (vision) package detection utilities for broad adoption.

  - In 2024–2025, the convergence of neural feature extractors with edge deployment has intensified interest in lightweight detectors suitable for mobile and embedded hardware. On the web side, the Baseline project from the Web DX Community Group formalises browser feature availability across engines, reducing dependence on bespoke detection scripts and moving the ecosystem toward declarative capability querying.

