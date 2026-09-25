Edge detection is a computer vision technique that identifies points in a digital image where brightness changes sharply, marking the boundaries of objects, surfaces and textures. It typically computes image gradients and applies thresholding to produce a binary or magnitude map of edges. As a low-level feature operator it underpins higher-level tasks such as segmentation, object detection and shape analysis.

- [[Edge Detection]] is a [[Feature Detection]] technique that locates sharp intensity changes marking object boundaries in an image.
- It computes image [[Gradient]] responses, usually via [[Convolution]] with derivative kernels, followed by thresholding.
- As a foundational operation in [[Computer Vision]] it feeds [[Image Segmentation]] and [[Object Detection]].

### Overview

- Edges correspond to discontinuities in image brightness caused by depth, surface orientation, material or illumination changes.
- Classical detectors estimate first or second derivatives of the image to highlight regions of rapid change.
- Robust pipelines combine smoothing, gradient computation, non-maximum suppression and hysteresis thresholding.
- Learned convolutional features have largely subsumed hand-crafted edge operators in deep vision systems, but the concept remains foundational.

### Mechanisms

- Gradient-based operators such as Sobel and Prewitt approximate spatial derivatives with small convolution kernels.
- Laplacian-of-Gaussian methods detect zero crossings of the second derivative.
- The Canny approach adds Gaussian smoothing, non-maximum suppression and dual-threshold hysteresis for clean, connected edges.
- Pre-smoothing controls sensitivity to noise versus localisation accuracy.

### Applications

- Pre-processing for [[Image Segmentation]] and contour extraction.
- Spatial conditioning signals for controllable image generation.
- Feature input for [[Machine Vision]] inspection and measurement.

### Provenance

