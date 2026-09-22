public:: true
alias:: PositionSensor

# Position Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:position-sensor",
  "@type": "Page",
  "vc:slug": "position-sensor",
  "title": "Position Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:position-sensor",
  "@type": "Class",
  "label": "Position Sensor",
  "definition": "A position sensor is a transducer that measures the displacement, angle, or spatial location of an object or joint relative to a reference frame, converting mechanical position into an electrical signal suitable for control system feedback. Position sensors are fundamental to closed-loop robotic and mechatronic systems, enabling precise joint control, end-effector placement, and localisation. They span a wide range of physical measurement principles including optical encoding, magnetic hall-effect sensing, capacitive displacement, and inductive resolver techniques.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"},
      {"@id": "urn:ngm:class:rotary-encoder", "label": "Rotary Encoder"},
      {"@id": "urn:ngm:class:linear-encoder", "label": "Linear Encoder"},
      {"@id": "urn:ngm:class:proprioceptive-sensor", "label": "Proprioceptive Sensor"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:localisation", "label": "Localization"},
      {"@id": "urn:ngm:class:robot-manipulation", "label": "Robot Manipulation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"},
      {"@id": "urn:ngm:class:robotic-control", "label": "Robotic Control"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Position Sensor]] is a [[Sensor]] that converts the physical displacement or angular position of a mechanical element into an electrical signal, serving as the primary feedback element in closed-loop control systems for [[Robot Manipulation]] and [[Robotic Control]].

- ### Relationships
  - Position sensors encompass the [[Encoder]], [[Rotary Encoder]], and [[Linear Encoder]] families as principal implementations, and function as [[Proprioceptive Sensor]] devices within robot joint assemblies. Combined with [[IMU]] data, they support full-body [[Localisation]] and provide the joint-angle measurements required for accurate [[Robot Kinematics]] computations that underpin precise [[Robot Manipulation]].

- ### Content
  - Position sensing in mechanical systems dates to 19th-century potentiometric devices used in telegraph and early industrial automation. The introduction of optical incremental encoders in the 1960s transformed precision motion control, providing digital quadrature signals with resolutions in the thousands of counts per revolution. Absolute encoders, which encode absolute position as a multi-track Gray code pattern, eliminated the homing requirement that limited incremental designs, becoming standard in CNC machining and industrial robotics from the 1980s onward.

  - Modern position sensors operate on four principal physical principles. Optical encoders illuminate a patterned disc or linear scale with an LED and detect light/dark transitions with a photodetector array; resolutions of 100,000+ counts per revolution are achievable. Magnetic encoders use Hall-effect or magnetoresistive elements to detect periodic magnetic patterns on a pole wheel, offering robustness in contaminated environments. Capacitive sensors detect displacement through capacitance changes in planar or cylindrical geometries, providing sub-micrometre resolution. Resolvers are wound transformers whose output voltage ratio encodes shaft angle, prized for high-temperature industrial and aerospace applications.

  - In robotics, each degree-of-freedom joint typically carries a position sensor — commonly an incremental or absolute encoder on the motor shaft — that feeds the motor controller's position loop running at 1–10 kHz. High-performance collaborative robots additionally use dual encoders (motor-side and link-side) to detect joint compliance and implement torque-transparent control. Mobile robots combine wheel encoders with IMUs and exteroceptive sensors such as LiDAR for odometry and SLAM-based localisation.

  - By 2024-2025, miniaturised magnetic encoders with embedded microcontrollers (e.g., AS5048A, MA730) have become the default choice for compact robot joints due to low cost, high reliability, and SPI/I2C digital interfaces. Capacitive MEMS position sensors are being integrated into surgical robotic tools where space is critical. The fusion of position sensor data with learned neural network models for proprioceptive state estimation is an active research direction, enabling more accurate contact-rich manipulation in unstructured environments.

