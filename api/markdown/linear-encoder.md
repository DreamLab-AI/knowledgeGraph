- ### Definition
  A Linear Encoder is a position sensing device that measures linear (translational) displacement along a single axis by converting physical motion into an electrical signal — typically a series of digital pulses or an analogue waveform — that a controller can interpret as position, velocity, or acceleration data. Linear encoders may be optical (using a diffraction grating or glass scale), magnetic (using a magnetised tape), or capacitive, with resolution ranging from micrometres to nanometres in precision metrology applications. They are essential feedback elements in CNC machine tools, semiconductor lithography stages, and high-precision robotic manipulators where closed-loop positional accuracy is required.

- ### Relationships
  - hasPart:: [[Sensor]], [[Sensor Technology]]
  - partOf:: [[Robot Hardware]], [[Control System]]
  - requires:: [[Feedback Control]], [[Calibration]]
  - enables:: [[Motion Control]], [[PositionControl]], [[Servo Control]]
  - uses:: [[Feedback Loop]], [[Feedback Mechanism]]
  - relatedTo:: [[Robot Sensor]], [[Robot Joint]], [[Servo Motor]], [[Industrial Robot]], [[Kinematics]]

- ### Content
  Linear encoders produce position feedback through two primary operating principles: incremental encoders output a periodic signal (typically quadrature A/B pulses with an optional index Z channel) whose edge count accumulates to track position relative to a reference home position; absolute encoders output a unique binary code for every position along their travel range, retaining position knowledge across power cycles without requiring a homing sequence.

  In robotic and machine tool applications, a linear encoder is mounted so that its reading head traverses a fixed graduated scale. The scale's pitch and the interpolation factor of the signal processor determine the achievable resolution. Sub-nanometre resolution encoders are used in electron-beam lithography and atomic force microscopy stages, while micrometre-resolution encoders are common in industrial coordinate measuring machines.

  The interface between a linear encoder and a motion controller uses standardised protocols such as EnDat, BiSS-C, or SSI for absolute position data, and differential line-driver signals (RS-422) for incremental quadrature. The controller samples encoder position within a servo loop running at frequencies from 1 kHz to 20 kHz, computing velocity via differentiation and feeding error signals to current amplifiers driving linear or rotary motors.

  Error sources in linear encoders include thermal expansion of the scale material, contamination of the reading gap, and signal interpolation nonlinearity. Temperature-compensated glass ceramic scales (Zerodur, Invar) are used in metrology applications to minimise thermal drift, and cleanroom or sealed encoder designs prevent particulate intrusion in semiconductor manufacturing environments.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z