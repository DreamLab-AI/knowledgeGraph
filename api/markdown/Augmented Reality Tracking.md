
Augmented reality tracking is the continuous estimation of a device's position and orientation relative to the physical environment so that virtual content can be registered and rendered as if anchored in the real world. It fuses camera imagery, inertial measurements and depth or feature data to maintain a stable six-degree-of-freedom pose at interactive rates. Robust tracking is the foundation of believable spatial overlay, addressing drift, occlusion and relocalisation.

- ### Overview
  - AR tracking answers the question "where is the device, and where is the world?" so rendered objects stay glued to physical surfaces as the user moves.
  - It combines marker-based fiducials, markerless feature tracking and inertial odometry, typically fused with a Kalman or extended Kalman filter to smooth pose under noise.
- ### Mechanisms
  - Visual feature extraction and matching against a map built via SLAM.
  - Inertial measurement integration to bridge fast motion and visual dropouts.
  - Relocalisation and loop closure to recover from tracking loss and bound drift.
- ### Applications
  - Mobile and headset AR experiences placing persistent virtual objects.
  - Industrial guidance overlays for assembly, maintenance and inspection.
  - Robotics navigation and human-robot shared spatial understanding.
- ### Provenance

