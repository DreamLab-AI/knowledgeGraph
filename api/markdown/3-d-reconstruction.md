- ### Definition
  - 3D Reconstruction is the computational process of recovering three-dimensional geometric and structural information from multiple 2D images or sensor data (such as LiDAR or depth cameras) using techniques including [[Computer Vision]], photogrammetry, and Structure-from-Motion (SfM). This technology enables digital capture of real-world objects and environments for [[Digital Twin]] creation and immersive environment mapping.

- ### Semantic Classification
  - owl-class:: spatial-computing:3DReconstruction
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: [[Computer Vision]]
  - bridges-to:: [[Computer Vision]], [[Photogrammetry]], [[Digital Twin]]
  - requires:: [[Image Processing]], [[Camera Calibration]], [[Feature Matching]]
  - enables:: [[Real-world Digitisation]], [[Environmental Mapping]], [[Point Cloud Generation]]

- ### Content

  ## Overview

  3D Reconstruction bridges the physical and digital worlds by algorithmically deriving 3D structure from 2D observations. Key methodologies include Structure-from-Motion (recovering both structure and camera motion from video), multi-view stereo (dense depth estimation), and sensor fusion combining multiple data streams.

  ## Primary Techniques
  - **Structure-from-Motion**: Extracting 3D geometry from overlapping photographs and calculating camera trajectories
  - **Multi-View Stereo (MVS)**: Dense depth estimation by analysing matching pixels across multiple images
  - **Photogrammetry**: Professional 3D capture using calibrated imaging workflows
  - **LiDAR Scanning**: Direct depth measurement using laser time-of-flight sensors
  - **Depth Sensors**: Real-time 3D acquisition via structured light or time-of-flight cameras

  ## Applications
  - **Heritage Digitisation**: Preserving cultural artefacts and archaeological sites
  - **Architectural Scanning**: Creating as-built models of buildings
  - **Industrial Inspection**: Quality control through precise dimensional analysis
  - **Real Estate**: Virtual property tours via captured environments

  #### Related Concepts
  - [[Computer Vision]], [[Photogrammetry]], [[Point Cloud]], [[Digital Twin]], [[Structure-from-Motion]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z