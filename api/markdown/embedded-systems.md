## Embedded Systems

Embedded Systems are purpose-built computing platforms integrated into host devices to perform dedicated functions — sensing, actuation, communication, and control — under real-time constraints and resource limitations. Unlike general-purpose computers, embedded systems are optimised for a specific task: a microcontroller in a motor drive, an FPGA implementing a signal-processing pipeline, or an ARM SoC running sensor-fusion firmware in a robotic joint. They form the hardware-software boundary in robotics, connecting high-level planning algorithms to physical actuators and sensors. Edge computing increasingly co-locates AI inference on embedded hardware, enabling low-latency decision-making without cloud round-trips. Design considerations include power budgets, thermal management, real-time scheduling, functional safety (IEC 61508, ISO 26262), and hardware security to prevent firmware tampering.

- ### Relationships
  - uses [[Sensor]]
  - uses [[Actuator]]
  - uses [[FPGA]]
  - enables [[Robotics]]
  - enables [[Internet of Things]]
  - relatedTo [[Edge Computing]]
  - relatedTo [[Control System]]