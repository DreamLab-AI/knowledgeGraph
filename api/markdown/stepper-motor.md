- ### Definition
  A stepper motor is an electromechanical actuator that divides a full rotation into a fixed number of discrete angular steps, enabling precise open-loop position control without requiring feedback sensors. By energising coils in a predetermined sequence, the rotor advances one step per electrical pulse, making stepper motors indispensable wherever repeatable, quantifiable positioning is required. Common variants include permanent-magnet, variable-reluctance, and hybrid designs, with step resolutions ranging from 1.8° (200 steps/rev) to sub-degree microstepping configurations.

- ### Semantic Classification
  - owl-class:: robotics:StepperMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Motor]]
  - requires:: [[Motion Control]], [[Open-Loop Control]], [[Embedded Systems]]
  - enables:: [[Robotics Control]], [[Robotics Process]]
  - uses:: [[Actuator]], [[Electric Actuator]]
  - hasPart:: [[Encoder]], [[Rotary Encoder]]
  - contrastsWith:: [[Servo Motor]], [[DC Servo Motor]]
  - relatedTo:: [[Robotics]], [[Robot Actuator]]

- ### Content
  Stepper motors translate electrical pulses directly into precise mechanical movement, with each pulse rotating the shaft by one fixed angular increment. Unlike servo motors, which rely on closed-loop feedback to correct positioning errors, stepper motors operate open-loop: the controller issues a pulse sequence and assumes the rotor follows without verification. This simplicity reduces system cost and complexity, but means that missed steps — caused by excessive load or acceleration — accumulate undetected.

  The motor's internal construction determines step resolution. Permanent-magnet steppers use a magnetised rotor that aligns with successive stator poles. Variable-reluctance designs exploit differences in magnetic reluctance across rotor teeth. Hybrid steppers combine both principles to achieve the fine step angles (1.8° or 0.9°) dominant in industrial and consumer applications. Driver ICs implement microstepping by proportionally energising two adjacent phases simultaneously, dividing a full step into 8, 16, or 32 microsteps to smooth motion and reduce resonance.

  In robotics and automation, stepper motors are used extensively in CNC machines, 3D printer extruder and axis drives, pick-and-place equipment, and camera pan/tilt mechanisms. Their torque-speed curve — high holding torque at standstill, diminishing torque at higher speeds — makes them well-suited for low-to-medium speed positioning tasks. Embedded system microcontrollers (Raspberry Pi, Arduino, STM32) generate step pulses through PWM or GPIO, while dedicated driver chips (DRV8825, A4988, TMC2209) handle current regulation and microstepping.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z