
A control moment gyroscope (CMG) is a spacecraft torque actuator that steers the angular-momentum vector of a spinning rotor. Its rotor normally keeps a large, approximately constant spin momentum while a motor rotates the rotor assembly about one or more gimbal axes. The spacecraft experiences the opposing torque associated with the change in that momentum vector.[^nasa-actuators-2024]

This distinguishes a conventional CMG from a [[Reaction Wheel]]. A reaction wheel is fixed to the spacecraft and produces torque mainly by changing rotor speed. A fixed-speed CMG changes the direction of its rotor momentum instead. A variable-speed CMG can change both direction and magnitude. The often-used description “torque amplifier” refers to the large gyroscopic torque obtained from a relatively small gimbal-motor torque; it does not imply creation of energy.[^surrey-cmg]

## Torque allocation and steering

For a cluster, the body torque is related to the vector of gimbal rates through a Jacobian whose entries depend on the current gimbal angles and installation geometry. Steering software converts a commanded spacecraft torque into admissible gimbal rates. A pseudoinverse gives one solution for a redundant cluster, but a flight law also has to respect gimbal-rate, travel, motor-current and structural limits.[^nasa-double-gimbal-steering]

A **singularity** occurs when this Jacobian loses rank. At that configuration the cluster cannot generate torque in at least one direction, even though the rotors may still store substantial momentum. Close to a singularity, a naive inverse can request unbounded or physically impossible gimbal rates. Steering laws therefore monitor conditioning and trade torque accuracy against rate margin.

Redundant clusters can sometimes use **null motion**: gimbal movement that changes the internal configuration without producing net commanded spacecraft torque. This can move the cluster away from some singularities, but no single null-motion rule guarantees escape from every singular state. The manoeuvre set, momentum envelope, actuator failures and steering law must be analysed together.[^nasa-singularity-analysis]

Four single-gimbal CMGs are a common arrangement for three-axis torque with redundancy or null-space freedom, although the number is not a universal rule. Double-gimbal and variable-speed devices alter the degrees of freedom and their failure cases. CMG sizing therefore covers rotor momentum, gimbal-rate and travel limits, peak and sustained torque, launch locks, power, heat rejection and controller latency.

## Pointing and integration limits

High slew torque does not guarantee fine pointing. Rotor imbalance, bearings, gimbal drives and control activity inject microvibration into the spacecraft structure. Flexible modes can couple back into the steering loop and set an accuracy limit, especially for high-resolution optical payloads. ESA's variable-speed study modelled this coupling and numerically tested steering laws; it was research evidence rather than qualification of a flight unit.[^esa-vscmg]

An ESA Micro-CMG engineering qualification model underwent functional, microvibration, vibration, shock and thermal-vacuum testing and was reported at technology readiness level 5–6. ESA stated that further development was needed for full qualification and market readiness.[^esa-micro-cmg]

ESA reported a later compact Veoware CMG commissioned in a commercial constellation in 2026. In the cited in-orbit test, manoeuvres completed about 2.5 times faster than reaction-wheel operation. That ratio belongs to the named product, spacecraft and test; it is not a general conversion between CMG and wheel performance. The same report described follow-on work on coordinated control algorithms.[^esa-veoware-flight]

UK evidence includes University of Surrey CMG research and a two-CMG payload on BILSAT-1. Surrey's 2006 ESA presentation described single-gimbal, double-gimbal and variable-speed designs while also identifying mechanical complexity, singularities and size as disadvantages.[^surrey-cmg] These records establish specific research and payload heritage, rather than blanket qualification of all Surrey CMG designs.

[^nasa-actuators-2024]: NASA, *Spacecraft Modeling, Attitude Determination, and Control: Quaternion-Based Approach* (2024), Chapter 10, https://ntrs.nasa.gov/api/citations/20240009554/downloads/Space%20Attitude%20Development%20Control.pdf
[^nasa-double-gimbal-steering]: S. W. Winder, “Steering Laws for Double-Gimbal Control-Moment Gyros”, in NASA-CP-007 (1978), https://ntrs.nasa.gov/api/citations/19780015067/downloads/19780015067.pdf
[^nasa-singularity-analysis]: N. S. Bedrossian et al., “Redundant Single Gimbal Control Moment Gyroscope Singularity Analysis” (journal reprint, 1990), NASA NTRS, https://ntrs.nasa.gov/search.jsp?R=19910034404
[^esa-vscmg]: ESA Advanced Concepts Team, “Variable Speed Control Moment Gyroscopes” (2007), https://www.esa.int/gsp/ACT/projects/vscmg/
[^esa-veoware-flight]: ESA, “New satellite control reaches commercialisation” (9 September 2026), https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/New_satellite_control_reaches_commercialisation
[^esa-micro-cmg]: ESA Nebula, “Development of a CMG”, https://nebula.esa.int/content/development-cmg
[^surrey-cmg]: V. Lappas, University of Surrey, “Attitude Control for Planetary Missions” (ESA ACT workshop, 2006), https://www.esa.int/gsp/ACT/doc/MAD/ACT-PRE-MAD-InnSys-Lappas.pdf

