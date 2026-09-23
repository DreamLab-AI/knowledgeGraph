---
okf_version: "0.2"
type: Class
title: Gaussian Splatting
resource: urn:ngm:class:gaussian-splatting
domain: spatial-computing
description: Novel view synthesis and 3D scene representation technique introduced by Kerbl, Kopanas, Leimkühler and Drettakis at SIGGRAPH 2023 (INRIA Sophia Antlis), representing scenes as explicit collections of s of anisotropic 3D Gaussian primitives — each defined by a 3D mean position μ ∈ ℝ³, a 3×3 covar...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:gaussian-primitive
  - urn:ngm:class:point-cloud
  - urn:ngm:class:spherical-harmonics
  - urn:ngm:class:differentiable-rasterizer
  - urn:ngm:class:adaptive-densification
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-sorting
  - urn:ngm:class:alpha-compositing
  - urn:ngm:class:tile-based-renderer
requires:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:colmap
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:multi-view-photography
  - urn:ngm:class:ssim-loss
  - urn:ngm:class:structure-from-motion
enables:
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:augmented-reality-ar
  - urn:ngm:class:digital-twin
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:volumetric-capture
  - urn:ngm:class:spatial-computing-paradigm
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:point-cloud
  - urn:ngm:class:deep-learning
  - urn:ngm:class:rasterization
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:gaussian-distribution
implements:
  - urn:ngm:class:alpha-blending
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:spherical-harmonics
  - urn:ngm:class:ewa-splatting
  - urn:ngm:class:tile-rasterisation
  - urn:ngm:class:covariance-decomposition
contrastsWith:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:mesh-based-rendering
  - urn:ngm:class:voxel-grid-representation
bridgesTo:
  - urn:ngm:class:differentiable-rendering
uses:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:colmap
  - urn:ngm:class:cuda
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:spherical-harmonics
  - urn:ngm:class:structure-from-motion
supports:
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:ar-technology
  - urn:ngm:class:avatar-creation
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:apple-inc-technology-corporation-mixed-reality-headset
  - urn:ngm:class:spatial-computing-system
standardizedBy:
  - urn:ngm:class:siggraph
  - urn:ngm:class:cvpr
  - urn:ngm:class:iccv
  - urn:ngm:class:siggraph
  - urn:ngm:class:cvpr
  - urn:ngm:class:iccv
relatedTo:
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:3d-modelling
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:ar-frame
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
  - urn:ngm:class:volumetric-capture
---

# Gaussian Splatting

Novel view synthesis and 3D scene representation technique introduced by Kerbl, Kopanas, Leimkühler and Drettakis at SIGGRAPH 2023 (INRIA Sophia Antlis), representing scenes as explicit collections of s of anisotropic 3D Gaussian primitives — each defined by a 3D mean position μ ∈ ℝ³, a 3×3 covar...
