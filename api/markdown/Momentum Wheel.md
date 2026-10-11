
A momentum wheel is a motor-driven flywheel operated with a deliberate, substantial spin bias. Its stored angular momentum gives the spacecraft a preferred momentum axis and gyroscopic stiffness. Small changes in wheel speed produce control torque around that axis.[^nasa-wheel-reference]

Momentum wheels are mechanically close to [[Reaction Wheel|reaction wheels]]. In the conventional distinction, a reaction wheel operates around a low or near-zero nominal momentum and accelerates in either direction, while a momentum wheel remains at high speed and varies about its bias. The same motor-flywheel design may support both modes, so operational state matters more than a product label.[^nasa-actuators-2024]

## Momentum and torque

For a fixed wheel axis with rotor inertia Jw and spin rate omega-w, stored angular momentum is approximately hw = Jw omega-w. Changing that momentum produces a spacecraft torque of opposite sign, tau-body = -d(hw)/dt, subject to the chosen axis convention. Bearings, motor ripple and structural flexibility are absent from this rigid-body expression.[^nasa-actuators-2024]

Momentum capacity, stated in N m s, sets how much angular impulse the wheel can store. Torque, stated in N m, sets how rapidly that state can change. Maximum speed, motor current, bus voltage, temperature and the torque-speed curve constrain both. A high-capacity wheel may still provide modest instantaneous torque.

Bias can avoid control irregularities around zero crossing and provide passive stiffness, but it consumes usable momentum range on one side of the operating point. NASA's small-spacecraft review notes that some missions bias reaction wheels for finer control and lower zero-crossing jitter, at the cost of effective storage capacity.[^nasa-smallsat-gnc]

Persistent external torque still changes the wheel's momentum. [[Momentum Management]] predicts this accumulation and commands unloading through an external actuator such as a thruster or magnetorquer. A momentum wheel cannot unload itself by slowing alone: without external torque, the spacecraft body receives the opposite momentum change.

## Bearings, jitter and lifetime

Rotor mass imbalance produces synchronous force and moment disturbances. Ball-bearing geometry, preload and imperfections add harmonics and broadband microvibration, while motor commutation and control electronics contribute further spectral lines. These disturbances travel through the mounting and flexible spacecraft structure to a payload's line of sight. A wheel-level force spectrum therefore cannot be converted directly into pointing performance without the structural transfer function.

A peer-reviewed Surrey repository record describes finite-element modelling of reaction-wheel ball-bearing microvibration and comparison with physical test data. The study varied bearing preload and component geometry to relate them to disturbance frequency and amplitude.[^surrey-bearing-microvibration] Cassini operations also treated bearing lubrication as a speed-dependent constraint: its optimiser avoided both excessive speed and a low-speed regime where the lubrication film became ineffective.[^nasa-cassini-wheel-bias]

ESA has proposed a sealed, pumped gas bearing to reduce friction and transmitted vibration. The associated page is a patent and licensing record. Its claimed 10–100-times noise reduction is development evidence; ESA states that the concept would be attractive if successfully qualified.[^esa-gas-bearing]

## UK flight example

Surrey Satellite Technology Ltd's GEO wheel provides bounded UK product evidence. SSTL states that the wheel was qualified in 2018 and that flight units launched on Eutelsat Quantum in July 2021 and were operational. Its data sheet gives 12 N m s at ±5,000 rpm, 200 mN m reaction torque under a stated voltage condition, imbalance limits and environmental qualification levels.[^sstl-geo-wheel]

Those values apply to the named model and interface envelope. The stated 15.25-year orbital life is a design target, while launch and operation establish a separate flight-status claim. Selection for another mission still requires disturbance testing across speed, mounting and thermal conditions, plus system-level pointing verification.

[^nasa-wheel-reference]: NASA, spacecraft design reference publication (1993), momentum- and reaction-wheel discussion, https://ntrs.nasa.gov/api/citations/19930009044/downloads/19930009044.pdf
[^nasa-actuators-2024]: NASA, *Spacecraft Modeling, Attitude Determination, and Control: Quaternion-Based Approach* (2024), Chapter 10, https://ntrs.nasa.gov/api/citations/20240009554/downloads/Space%20Attitude%20Development%20Control.pdf
[^nasa-smallsat-gnc]: NASA Small Spacecraft Systems Virtual Institute, “Guidance, Navigation, and Control”, https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/
[^surrey-bearing-microvibration]: M. M. Longato et al., “Microvibration simulation of reaction wheel ball bearings”, *Journal of Sound and Vibration* 567 (2023), https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Microvibration-simulation-of-reaction-wheel-ball/99822132402346
[^nasa-cassini-wheel-bias]: C. Lee and A. Lee, “Optimization of Angular-Momentum Biases of Reaction Wheels”, NASA Tech Brief (2008), https://ntrs.nasa.gov/search.jsp?R=20080048167
[^esa-gas-bearing]: ESA, “Gas bearing system”, patent and licensing record, https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Gas_bearing_system
[^sstl-geo-wheel]: Surrey Satellite Technology Ltd, *SSTL GEO Wheel* data sheet (2021), https://www.sstl.co.uk/getmedia/75583aad-183e-4130-9139-f71786b45a00/SSTL-GEO-Wheel-Datasheet-v2-2021.pdf

