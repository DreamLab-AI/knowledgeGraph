- ### Definition
  - [[NeRF]] (Neural Radiance Field) is an [[Implicit Neural Representation]] of a 3D scene, in which a [[Multilayer Perceptron]] maps continuous spatial coordinates and viewing directions to colour and volumetric density. At render time, [[Volumetric Ray Marching]] integrates colour and transmittance along camera rays through the implicit field, producing pixel colours that are differentiable with respect to network weights. Optimisation minimises photometric reconstruction loss across a set of posed training images produced via [[Camera Calibration]] and [[Structure from Motion]], requiring no explicit geometry. The resulting scene model supports [[Novel View Synthesis]] and [[3D Reconstruction]] at photorealistic fidelity and has been foundational to modern [[Neural Rendering]].

- ### Overview
  - NeRF was introduced in the ECCV 2020 paper "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis" by Mildenhall, Tancik, Barron, Ramamoorthi, and Ng. It departed from prior [[Photogrammetry]] and multi-view stereo pipelines by encoding geometry and appearance entirely within the weights of an MLP, eliminating the need for explicit [[Polygon Mesh]] or [[Point Cloud]] representations.
  - The architecture maps a 5D input (x, y, z, azimuth θ, elevation φ) to (RGB, σ) — colour and density. A hierarchical two-network coarse-to-fine sampling scheme improves efficiency. [[Positional Encoding]] via sinusoidal Fourier features is applied to inputs to overcome the spectral bias of MLPs, enabling the network to represent high-frequency detail such as sharp edges and fine textures.
  - Training requires only a collection of posed photographs of a static scene; camera poses are estimated externally using [[Structure from Motion]] tools (e.g. COLMAP). The per-scene optimisation originally required hours on a GPU, a bottleneck addressed by many successor methods.
  - NeRF has catalysed hundreds of follow-on papers and shaped the trajectory of [[Spatial Computing]], [[Augmented Reality]], and AI-driven content creation pipelines.

- ### Key Components
  - **Multilayer Perceptron (MLP)** — The core network [[Multilayer Perceptron]] encodes continuous scene appearance and geometry into network weights. Typically 8 fully-connected ReLU layers with 256 units each.
  - **Positional Encoding** — [[Positional Encoding]] via sinusoidal Fourier features lifts low-dimensional coordinates to high-frequency feature vectors, allowing the MLP to represent fine detail despite spectral bias.
  - **Volumetric Ray Marching** — [[Volumetric Ray Marching]] numerically integrates colour and opacity along each camera ray using the predicted σ and RGB values at sampled 3D points.
  - **Differentiable Rendering** — [[Differentiable Rendering]] connects rendered pixel colours to network weights via a differentiable volume-rendering equation, enabling gradient-based optimisation from photometric loss alone.
  - **Hierarchical Sampling** — A coarse network proposes sample locations; a fine network densely samples near predicted surfaces, improving sample efficiency during ray integration.
  - **Camera Calibration & Pose Estimation** — Intrinsic and extrinsic [[Camera Calibration]] must be known; poses are typically recovered by [[Structure from Motion]] pipelines applied to the input image set.

- ### Mechanisms
  - **Volume Rendering Equation** — The expected colour C(r) of a ray r(t) = o + td is computed as the integral of colour c(r(t), d) weighted by transmittance T(t) = exp(-∫σ(r(s))ds) and differential opacity 1-exp(-σδ), discretised over sampled points.
  - **Photometric Loss** — Training minimises mean-squared error between rendered pixel colours and ground-truth pixel colours across all training rays. No depth supervision or semantic labels are needed.
  - **Scene Representation** — The MLP is the sole scene representation; no explicit voxel grid, mesh, or point cloud is stored. This allows continuous, resolution-independent queries.
  - **View-Dependent Appearance** — Colour c is conditioned on viewing direction d (in addition to position x), enabling view-dependent effects such as specularity and reflections.

- ### Variants and Successors
  - **Instant-NGP** — Instant Neural Graphics Primitives (2022, Müller et al.) replaces the deep MLP with a multi-resolution hash-encoded feature grid, reducing training from hours to seconds while preserving quality.
  - **Nerfacto / Nerfstudio** — A modular research framework combining best practices from the literature into an accessible, well-engineered baseline for [[Neural Rendering]] research.
  - **Mip-NeRF** — Addresses aliasing by representing rays as frustum cones rather than infinitesimal lines, improving quality at varying scales.
  - **Block-NeRF / Mega-NeRF** — Extends NeRF to large-scale outdoor environments by partitioning scenes into composable sub-networks, enabling city-scale [[Scene Understanding]] and [[Digital Twin]] construction.
  - **Dynamic NeRF / D-NeRF** — Adds a deformation field to model time-varying scenes, extending NeRF to video and dynamic capture.
  - **pixelNeRF / ZeroNeRF** — Generalised NeRFs conditioned on image features, enabling single-image or few-shot 3D reconstruction without per-scene optimisation.
  - **3D Gaussian Splatting** — [[3D Gaussian Splatting]] (Kerbl et al., 2023) replaces the implicit MLP with explicit differentiable Gaussian primitives, achieving real-time rendering at competitive quality and largely superseding NeRF for interactive applications.
  - **NeRF + Diffusion** — Integration with [[Diffusion Model]] priors (e.g. DreamFusion, Zero-1-to-3) enables text- or image-conditioned 3D generation, blurring the boundary between reconstruction and generative synthesis.

- ### Applications
  - **Visual Effects (VFX)** — Major film productions use NeRF-derived pipelines for relightable actor capture, set reconstruction, and background plate generation, replacing time-consuming manual modelling.
  - **Augmented Reality** — NeRF-based scene capture underpins photorealistic [[Augmented Reality]] overlays, telepresence avatars, and spatial anchoring for [[Metaverse]] experiences.
  - **Robotics Navigation** — Implicit radiance field maps provide compact, continuous environment representations for [[Robotics Navigation]], supporting simultaneous localisation and mapping (SLAM) and collision-free path planning.
  - **Digital Twins** — NeRF pipelines reconstruct real-world assets, buildings, and infrastructure into [[Digital Twin]] models for inspection, simulation, and operations management.
  - **Heritage Preservation** — Photorealistic NeRF reconstructions of cultural heritage sites and artefacts provide high-fidelity digital archives accessible without physical access.
  - **Medical Imaging** — Adaptations of NeRF apply neural rendering principles to CT/MRI reconstruction, reducing required projections and improving image quality under sparse measurement conditions.
  - **E-commerce & Product Visualisation** — NeRF-generated 360-degree product models enable interactive 3D viewing in online retail without dedicated 3D modelling pipelines.
  - **Autonomous Driving Simulation** — NeRF-based scene reconstruction from sensor logs generates photorealistic simulation environments for training and evaluating perception systems.

- ### Relationships
  - uses:: [[Multilayer Perceptron]]
  - uses:: [[Differentiable Rendering]]
  - uses:: [[Volumetric Ray Marching]]
  - uses:: [[Positional Encoding]]
  - uses:: [[Deep Learning]]
  - enables:: [[Novel View Synthesis]]
  - enables:: [[3D Reconstruction]]
  - enables:: [[Photorealistic Rendering]]
  - enables:: [[Digital Twin]]
  - enables:: [[Scene Understanding]]
  - requires:: [[Multi-View Imagery]]
  - requires:: [[Camera Calibration]]
  - requires:: [[GPU Compute]]
  - contrastsWith:: [[3D Gaussian Splatting]]
  - contrastsWith:: [[Photogrammetry]]
  - contrastsWith:: [[Point Cloud]]
  - contrastsWith:: [[Polygon Mesh]]
  - relatedTo:: [[Volumetric Capture]]
  - relatedTo:: [[Neural Rendering]]
  - relatedTo:: [[Structure from Motion]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Metaverse]]
  - bridges-to:: [[Robotics Navigation]]
  - bridges-to:: [[Diffusion Model]]

- ### Standards & Context
  - NeRF does not correspond to a formal standards specification; it is an academic technique originating from ECCV 2020 and iterated through open-source communities. Key reference implementations include the original TensorFlow code released by Mildenhall et al., and the community-maintained Nerfstudio framework.
  - Adoption by major technology vendors (Meta, Apple, Google, NVIDIA) has driven rapid maturation. Apple's Object Capture API (introduced in iOS 17) incorporates photogrammetry and NeRF-adjacent reconstruction for LiDAR-assisted 3D capture on iPhone and iPad.
  - The technique is closely monitored by the [[Spatial Computing]] and [[Augmented Reality]] industry, where it underpins emerging standards discussions in the Khronos Group and OpenXR ecosystems for volumetric content delivery.
  - Intersection with [[Diffusion Model]]-based generation is an active area in AI research with implications for [[Metaverse]] content pipelines.

- ### Provenance
  - sources:: Mildenhall et al. "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis", ECCV 2020. Müller et al. "Instant Neural Graphics Primitives", SIGGRAPH 2022. Kerbl et al. "3D Gaussian Splatting for Real-Time Radiance Field Rendering", SIGGRAPH 2023.
  - updated:: 2026-06-13