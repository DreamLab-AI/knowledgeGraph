An H-bridge is a power-electronics circuit of four switching elements arranged in an 'H' around a load, enabling voltage of either polarity to be applied from a single supply. It is the core stage of DC motor drivers: diagonal switch pairs drive the motor forward or reverse, pulse-width modulation of the switches regulates speed and torque, and shorting or opening both legs provides braking or coasting. Implemented with MOSFETs or IGBTs plus gate drivers and protection, H-bridges power robotics actuators, servo drives, inverters, and battery-powered traction.

### Semantic Classification

### Content

## Definition

An **H-bridge** takes its name from its schematic: two half-bridge legs, each a pair of switches between the supply rail and ground, with the load — typically a DC motor winding — forming the horizontal bar of the "H" between the leg midpoints. Closing one high-side switch and the diagonally opposite low-side switch drives current through the load in one direction; closing the other diagonal reverses it. This lets a single unipolar supply, such as a robot's battery, produce bidirectional drive, which is why the topology is the standard output stage of a [[Motor Driver]].

Speed and torque control come from switching rather than dissipation. The bridge is driven with [[Pulse Width Modulation]] at frequencies typically between a few kilohertz and tens of kilohertz: the duty cycle sets the average voltage across the winding, and the motor's inductance smooths the chopped waveform into near-DC current. Beyond forward and reverse, the four-switch topology yields two further useful states — closing both low-side (or both high-side) switches shorts the winding for dynamic braking, while opening all switches lets the motor coast through the freewheel diodes. Two timing hazards dominate practical design: shoot-through, where both switches in one leg conduct simultaneously and short the supply (prevented by enforced dead-time between transitions), and inductive fly-back at switch-off, absorbed by the diodes intrinsic or added across each switch.

The H-bridge concept scales far beyond small robots. Half of it — a single leg — is the half-bridge building block; three legs form the three-phase inverter that drives brushless DC and induction motors; and full bridges at kilowatt-to-megawatt scale, built from IGBT or SiC modules, appear in traction drives, solar inverters, and Class-D amplifiers. As a class it is unrelated to blockchain "bridges": the shared name reflects circuit topology, not cross-system interoperability.

## Technical Details

- **Switch technology**: bipolar transistors in classic ICs (L293, L298); power MOSFETs in modern integrated drivers (DRV8871, BTS7960, TB6612FNG); IGBT and SiC/GaN devices at high voltage and power. On-resistance and switching loss set efficiency and heatsinking needs.
- **Gate drive**: high-side N-channel switches need gate voltages above the supply rail, provided by bootstrap or charge-pump gate drivers; driver ICs also enforce dead-time and undervoltage lockout.
- **Control interface**: two direction inputs plus a PWM enable (or PWM applied per leg) from a [[Microcontroller]]; locked-antiphase and sign-magnitude are the common modulation schemes, trading ripple against zero-crossing linearity.
- **Protection and sensing**: current sensing via shunt resistors or integrated mirrors supports torque control and stall detection; thermal shutdown, overcurrent limits, and reverse-polarity protection are standard in integrated bridges.
- **Typical applications**: differential-drive mobile robots, DC servo positioning, stepper drivers (two bridges, one per phase), electric vehicle traction, solenoid and Peltier drive, and DC-AC inversion.

  ## Current Landscape

- **Integrated smart gate drivers**: modern parts fold dead-time generation, protection and current sensing into the IC. TI's DRV8871 integrates dual N-channel MOSFETs (~565 mΩ RDS(on), 6.5-45 V, 3.6 A peak) with internal current regulation and a fixed ~220 ns dead time; the automotive DRV8706-Q1 smart gate driver runs external MOSFETs with an integrated charge pump and register-selectable insertable dead-time (0-4 µs), driven by a single PWM input.
- **Wide-bandgap adoption (2025-2026)**: GaN and SiC devices push switching frequencies higher and cut losses; TI's GaN motor drivers advertise sub-150 ns dead time and propagation delay for lower current distortion and better acoustics, and vendors recommend negative gate bias plus active Miller clamp when driving GaN/SiC to suppress shoot-through.
- **Design practice**: typical silicon-MOSFET dead time is ~100-300 ns (e.g. LM5106 adjustable 100-600 ns via a resistor); PWM is commonly 20-100 kHz (25 kHz sits just above the audible band), and designers simulate transients in LTspice/QSPICE before prototyping.
- **Protection is standard**: undervoltage lockout, overcurrent limit, thermal shutdown and configurable interlock/dead-time now come built into mainstream integrated bridges and gate-driver families (TI, Infineon EiceDRIVER).

  **Sources**:

- https://www.ti.com/lit/gpn/DRV8871
- https://www.ti.com/lit/ds/symlink/drv8706-q1.pdf
- https://www.wevolver.com/article/h-bridge-motor-control-a-complete-guide-for-engineers-2025

