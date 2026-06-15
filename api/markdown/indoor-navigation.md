- ### Definition
  - [[Indoor Navigation]] provides positioning and routing within buildings where [[GPS]] satellite signals are blocked, using [[Bluetooth Low Energy]] beacons, [[Wi-Fi]] fingerprinting, [[Ultra-Wideband]], and [[Spatial Mapping]].
  - Systems typically fuse multiple signal sources through [[Sensor Fusion]] algorithms to achieve sub-metre accuracy adequate for turn-by-turn wayfinding.
  - Applications span airports, hospitals, campuses, retail environments, and smart warehouses.

- ### Overview
  - GPS accuracy degrades dramatically indoors due to signal attenuation through building materials; indoor positioning systems (IPS) fill this gap.
  - Bluetooth Low Energy (BLE) beacons are the most widely deployed indoor positioning infrastructure due to low cost and ubiquitous smartphone support.
  - Ultra-Wideband (UWB) time-of-flight ranging achieves 10–30 cm accuracy for precision use cases such as industrial robot guidance and contact tracing.
  - Standards such as IPS (Indoor Positioning System) and the W3C Geolocation API are converging to improve cross-vendor interoperability.

- ### Key aspects
  - Multi-technology fusion: BLE + inertial measurement unit (IMU) dead reckoning is a common hybrid approach.
  - Floor-level disambiguation remains challenging; barometric pressure sensors and visual markers assist.
  - Map data must be kept current as building layouts change.
  - Privacy considerations arise when tracking individuals; consent and anonymisation are required.
  - AR overlays via head-mounted displays or smartphone cameras augment turn-by-turn navigation.

- ### Mechanisms
  - Wi-Fi fingerprinting: compares received signal strength patterns against a pre-recorded map of radio signatures.
  - UWB time-difference-of-arrival (TDOA): measures sub-nanosecond pulse arrival times between anchors and tags.
  - Pedestrian dead reckoning (PDR): integrates step count and heading from IMU sensors to propagate position.
  - Lidar SLAM: builds and localises within a 2D or 3D floor plan in real time.

- ### Applications
  - Hospital staff and equipment tracking to reduce search time.
  - Airport terminal wayfinding for passengers with flight connections.
  - Warehouse pick-path optimisation for logistics operators.
  - Museum and gallery exhibit discovery for visitors.
  - Emergency responder positioning inside fire-affected buildings.

- ### Relationships
  - enables:: [[Wayfinding]]
  - enables:: [[Asset Tracking]]
  - enables:: [[Augmented Reality]]
  - uses:: [[Bluetooth Low Energy]]
  - uses:: [[Ultra-Wideband]]
  - uses:: [[LiDAR]]
  - uses:: [[Spatial Mapping]]
  - dependsOn:: [[Sensor Fusion]]
  - relatedTo:: [[GPS]]
  - relatedTo:: [[Location Services]]
  - relatedTo:: [[Simultaneous Localisation and Mapping]]
  - supports:: [[Smart Building]]
  - supports:: [[Robotics]]
  - bridgesTo:: [[Digital Twin]]

- ### Provenance
  - updated:: 2026-06-15