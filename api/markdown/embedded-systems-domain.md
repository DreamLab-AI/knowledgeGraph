- ### Definition
  - The Embedded Systems Domain covers computing systems built into devices to perform dedicated functions under constraints on power, memory and timing. Its scope includes microcontrollers, real-time operating systems, firmware and hardware-software co-design. It is a sub-area of the Robotics Domain that provides the computational substrate for physical machines. The boundary excludes general-purpose server and cloud computing, which belongs to the Infrastructure Domain.

- ### Semantic Classification
  - owl-class:: embed:EmbeddedSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Robotics Domain]], [[Control Theory Domain]], [[Infrastructure Domain]]
  - has-part:: [[Microcontroller]], [[Real-Time Operating System]], [[Firmware]], [[Sensor Interface]], [[Hardware-Software Co-Design]]
  - requires:: [[Digital Electronics]], [[Control Theory Domain]], [[Compute Layer]]
  - enables:: [[Edge Computing]], [[Device Control]], [[Real-Time Sensing]]

- ### Content
  - The Embedded Systems Domain concerns dedicated computing integrated into physical devices, where resources and timing are tightly constrained. Its scope spans the microcontroller and its peripherals, real-time operating systems that guarantee deadlines, firmware that implements device behaviour and the co-design of hardware and software. The boundary separates resource-constrained dedicated computing from elastic general-purpose computing in the Infrastructure Domain.
  - Member concepts include the Microcontroller, Real-Time Operating System, Firmware, Sensor Interface and Hardware-Software Co-Design. These depend on digital electronics for the underlying hardware, control theory for closed-loop behaviour and the Compute Layer at the device scale.
  - The domain bridges to the Robotics Domain as its computational foundation, to the Control Theory Domain for real-time control loops, and to the Infrastructure Domain at the edge boundary. It enables edge computing, device control and real-time sensing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z