- ### Definition
  - Electric motor converts electrical energy into rotational mechanical power through electromagnetic forces, forming the most widespread actuation technology in modern robotics. Motors operate across a spectrum of designs—from simple brush DC motors to complex brushless variants and AC induction motors—each offering different efficiency, control characteristics, and power-to-weight performance trade-offs suitable for varied robotic applications.

- ### Semantic Classification
  - owl-class:: robotics:ElectricMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Electric Actuator]], [[Rotating Machinery]]
  - has-part:: [[Stator]], [[Rotor]], [[Bearings]], [[Shaft]], [[Power Terminals]]
  - requires:: [[Electrical Power Supply]], [[Motor Driver Electronics]], [[Mechanical Load]], [[Heat Dissipation]]
  - enables:: [[Rotational Motion]], [[Speed Control]], [[Torque Generation]], [[Joint Actuation]]
  - depends-on:: [[Electromagnetic Theory]], [[Power Electronics]]

- ### Content
  Electrical motors operate by applying current-carrying conductors within magnetic fields, generating Lorentz forces that produce rotational torque. [[Brush DC Motors]] maintain brushes in contact with a rotating commutator to reverse current direction and maintain constant torque direction; this simple mechanism enabled early robot development but requires brush maintenance. [[Brushless DC Motors]] (BLDCs) employ electronic commutation via Hall sensors or back-EMF feedback, eliminating brush wear and enabling higher speeds and efficiency, making them the dominant choice in contemporary robotics.

  Motor selection depends on application requirements: slow, high-torque applications favour large-diameter, low-speed (LSHS) direct-drive motors; fast, light-load applications employ small, high-speed motors with gearbox reduction. [[Stepper Motors]] provide open-loop positioning for discrete motion without encoders, suitable for simple manipulation tasks. [[Servo Motors]] integrate feedback control electronics enabling precise position or velocity tracking. [[Linear Motors]] eliminate mechanical power transmission, directly producing linear rather than rotary motion at the expense of higher cost and complexity.

  Modern electric motors in robotics emphasise integration: embedded encoders provide position feedback, integrated drivers enable communication via [[CAN Bus]] or Ethernet fieldbus reducing wiring complexity, and active thermal management preserves performance under continuous high-power operation. Research advances include direct-drive motors reducing transmission losses, in-wheel motors for [[Mobile Robots]] eliminating intermediate mechanics, and soft motors using electroactive polymers for compliant interaction. Control innovations exploit motor back-EMF for sensorless speed feedback, model-based current control enabling rapid force changes, and machine learning-based efficiency optimisation that adapts motor operation to varying loads.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z