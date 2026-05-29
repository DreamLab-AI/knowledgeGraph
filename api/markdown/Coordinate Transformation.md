public:: true

# Coordinate Transformation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:coordinate-transformation",
  "@type": "Page",
  "vc:slug": "coordinate-transformation",
  "title": "Coordinate Transformation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:coordinate-transformation",
  "@type": "Class",
  "label": "Coordinate Transformation",
  "definition": "A coordinate transformation is a mathematical mapping that converts the representation of a point, vector, or geometric object from one coordinate system or reference frame to another, preserving geometric relationships while expressing them in a new basis. In robotics and computer graphics, transformations are represented as homogeneous matrices, quaternions, or dual quaternions encoding rotation, translation, and scaling operations.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:coordinate-system", "label": "Coordinate System"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reference-frames", "label": "Reference Frames"},
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:quaternion-math", "label": "Quaternion Math"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A coordinate transformation converts the mathematical representation of geometric entities between different [[Reference Frames]] or [[Coordinate System]] bases, a fundamental operation in [[Kinematics]], computer graphics, and sensor data processing, typically implemented using rotation matrices, Euler angles, or [[Quaternion Math]].

- ### Relationships
  - Coordinate transformations are essential in [[Kinematics]] for computing end-effector poses from joint angles via Denavit-Hartenberg parameters. They operate on [[Reference Frames]] defined relative to robot links, sensors, and world coordinates. [[Rigid Body Dynamics]] simulations compose successive transformations along kinematic chains. [[Quaternion Math]] provides the numerically stable, singularity-free representation of rotation, and the resulting pose estimates enable [[Sensor Fusion]] by expressing measurements from heterogeneous sensors in a common frame.

- ### Content
  - The mathematical theory of coordinate transformations descends from Euler's work on rotation (1776), where he proved that any rigid-body rotation about a fixed point can be described as a single rotation about an axis (Euler's theorem). Cauchy, Hamilton (quaternion algebra, 1843), and Cayley (matrix theory) provided the algebraic foundations. In robotics, Denavit and Hartenberg (1955) proposed a systematic 4x4 homogeneous transformation matrix convention for describing kinematic chains of rigid links, which became the standard in serial manipulator analysis. In computer graphics, affine transformation matrices were codified into the OpenGL pipeline during the 1990s.

  - A 3D rigid-body transformation is represented by a 4x4 homogeneous matrix combining a 3x3 rotation matrix R and a 3x1 translation vector t in a single compact form, enabling composition of multiple transformations by matrix multiplication. Rotation matrices must satisfy R^T R = I and det(R) = +1 (they form the SO(3) Lie group). Euler angles (roll-pitch-yaw or ZYX convention) are intuitive but suffer from gimbal lock at singularities. Unit quaternions (elements of S^3) avoid gimbal lock and provide efficient interpolation (SLERP) for animation. Dual quaternions unify rotation and translation into a single algebraic object and are increasingly used in robotics for screw motion representation. The tf (transform) library in ROS manages a tree of time-stamped coordinate frames for heterogeneous sensor integration.

  - Coordinate transformations matter because autonomous systems perceive their environment through sensors mounted at various locations on the robot body, each reporting data in its own local frame. Fusing lidar, camera, IMU, and GPS data requires expressing all measurements in a consistent global or body frame. In computer vision, camera projection matrices encode the perspective transformation from 3D world coordinates to 2D pixel coordinates. In augmented reality, real-time tracking maintains the transformation between device, world, and virtual content frames to achieve pixel-accurate overlay. In simulation, physics engines apply transformation trees to propagate forces and constraints through articulated body chains.

  - In 2024-2025, differentiable coordinate transformations are central to neural 3D representations such as NeRF and Gaussian Splatting, where the rendering pipeline requires differentiable camera pose transformations for gradient-based optimisation of scene parameters. Learned pose estimation networks (PoseCNN, FoundPose) directly regress transformation parameters from images. Equivariant neural networks exploit coordinate transformation symmetries to build models whose outputs transform predictably with input pose, improving sample efficiency in robotics learning. SE(3)-equivariant networks for molecular property prediction in computational chemistry rely on the same mathematical foundations as robotics coordinate transforms.