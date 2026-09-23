
SMPL (Skinned Multi-Person Linear model) is a parametric 3D human body model that represents body shape and pose with a low-dimensional set of parameters driving a deformable triangle mesh. It separates identity-dependent shape blend shapes from pose-dependent corrective deformations, enabling realistic articulated bodies that fit motion capture and image data. It is a foundational representation in human pose and shape estimation pipelines.

- ### Content
  - SMPL decomposes a body into identity shape blend shapes and pose-dependent corrective blend shapes applied via linear blend skinning over a fixed-topology mesh. This factorisation lets it be fitted to [[Motion Capture]] markers, depth scans, or monocular images, making it a standard intermediary for reconstructing and re-animating human bodies in graphics and vision research.

