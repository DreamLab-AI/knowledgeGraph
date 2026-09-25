Monocular depth estimation is the task of inferring the distance of scene points from a single image, recovering a depth map without the explicit stereo disparity available from multiple cameras. Because depth from one view is inherently ambiguous, modern approaches learn statistical and contextual cues such as texture gradients, object size, and perspective, typically using deep convolutional or transformer networks trained on labelled or self-supervised data. It contrasts with stereo and active depth sensing while offering a low-cost route to three-dimensional perception.

### Overview

- Depth is estimated from a single view rather than disparity between cameras.
- The single-view problem is geometrically ill-posed and resolved with learned priors.
- Networks exploit monocular cues like texture, occlusion, and perspective.
- Self-supervised training uses view synthesis as a learning signal.

### Mechanisms

- Encoder-decoder networks regress per-pixel depth.
- Scale ambiguity is intrinsic to monocular cues.
- Self-supervision exploits photometric reprojection between frames.
- Edge-aware losses sharpen depth discontinuities.
- Evaluation uses error metrics against ground-truth depth.

### Applications

- Augmented reality on single-camera devices.
- Obstacle awareness for low-cost robots and drones.
- Scene reconstruction from ordinary photographs.
- Driver-assistance perception where stereo is unavailable.

### Provenance

