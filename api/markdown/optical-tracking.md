- ### Definition
  - A sensing technology that uses camera-based systems and computer vision algorithms to determine the position and orientation of objects or users within physical space. Implementations range from marker-based infrared systems achieving sub-millimetre accuracy to markerless inside-out tracking using SLAM, enabling motion capture, hand tracking, and environmental mapping for XR applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:OpticalTracking
  - owl-role:: Concept

- ### Relationships
  - Uses [[Computer Vision]]
  - Uses [[SLAM]]
  - Uses [[Pose Estimation]]
  - Enables [[Motion Capture]]
  - Enables [[Hand Tracking]]
  - Enables [[XR Runtime Environment]]
  - Depends On [[Photogrammetry]]
  - Depends On [[Structure-from-Motion]]

- ### Content
  # OpticalTracking
  OpticalTracking utilizes camera-based systems to monitor user position, orientation, and movement within physical space for accurate representation in virtual environments. Technologies span marker-based tracking using printed fiducial markers or infrared-reflective spheres with known geometry, to advanced markerless systems employing computer vision, feature detection, and SLAM (Simultaneous Localization and Mapping) algorithms. Modern systems deploy infrared LEDs creating active tracking constellations, structured light patterns for depth perception, or passive visual feature tracking using natural environmental points. Commercial implementations achieve sub-millimeter positional accuracy and sub-degree rotational precision at update rates exceeding 1000Hz. Applications include inside-out tracking for standalone VR headsets using onboard cameras scanning the environment, outside-in tracking with external sensor arrays for room-scale experiences, full-body motion capture systems with 40+ optical markers for avatar animation, hand tracking enabling natural gesture interaction without controllers, and environmental mapping generating spatial meshes for accurate AR content placement and occlusion.
  - https://developer.oculus.com/documentation/native/ps-tracking/ - Meta Quest optical tracking system
  - https://docs.microsoft.com/en-us/windows/mixed-reality/design/tracking-systems - HoloLens spatial tracking
  - https://optitrack.com/ - OptiTrack precision motion capture
  - https://www.vicon.com/ - Vicon optical tracking technology

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z