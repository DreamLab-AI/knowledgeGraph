A reaction wheel is a motor-driven flywheel used to exchange angular momentum with a spacecraft. Accelerating the rotor produces an opposing torque on the spacecraft about the wheel's spin axis; decelerating it reverses that exchange. The wheel changes orientation without expelling propellant, but it provides no net external torque to the combined wheel-spacecraft system.[^1]

## Torque, momentum and saturation

Torque capacity and momentum storage answer different design questions. Torque limits angular acceleration and slew response. Momentum capacity determines how much separation tip-off or persistent disturbance momentum the wheel can absorb. Selection therefore depends on spacecraft inertia, required slew rate, disturbance environment and the time available between unloading opportunities.[^1]

Sustained external torque drives wheel speed towards an operational limit. At that limit the wheel is saturated: it cannot accept the requested additional momentum in the same direction and loses control authority for that command. Desaturation, also called momentum unloading, applies an external counter-torque with magnetorquers or thrusters while commanding the wheel back towards its usable speed range.[^1] ESA's Proba-2 provides a flight architecture example in which four reaction wheels are unloaded through magnetorquers.[^6]

Published product figures should retain their units and evidence status. AAC Clyde Space gives its Trillian-1 a maximum torque of 47.1 mN m, momentum storage of ±1.2 N m s and maximum rotation rate of 6500 rpm, and states that it has flown since 2019.[^2] These are manufacturer specifications and heritage claims. SSTL states that its GEO wheel was qualified in 2018 and that flight units launched on Eutelsat Quantum in July 2021; its data sheet separately reports reaction torque, stored momentum, speed range, jitter and imbalance.[^5]

## Geometry and redundancy

Three independent wheel axes provide direct nominal three-axis control. Spacecraft often add wheels for fault tolerance. A four-wheel skewed or pyramidal arrangement can retain reduced torque authority after one failure, while larger spacecraft may use separate backup units.[^1] The geometry, torque allocation and failed component determine what capability remains; “four wheels” alone is not a complete redundancy claim.

Two-wheel control can be possible as a recovery case. University of Surrey researchers reported in-orbit three-axis stability using two control torques and nonlinear quaternion feedback under a zero-momentum assumption.[^3] That result demonstrates a specific underactuated controller. It does not give two wheels the independent instantaneous torque authority of an intact three-axis set, and the retained performance and allowed manoeuvres must be assessed for the mission.

## Jitter, accommodation and validation

Rotor imbalance, bearing imperfections, motor commutation and structural coupling can turn a precision actuator into a disturbance source. A Surrey peer-reviewed study describes reaction-wheel assemblies as a major source of satellite microvibration and compares a bearing model with physical test data.[^4] These high-frequency disturbances can move a payload line of sight beyond the useful bandwidth of the attitude controller. Pointing accuracy and jitter should therefore be specified and tested separately.

Wheel accommodation also affects magnetic and mechanical interference. NASA notes that wheels may contain ferrous material and electromagnetic drives, so magnetometers and other sensitive instruments need suitable separation.[^1] Qualification should cover launch load, thermal-vacuum operation, lifetime, exported forces and torques, speed-dependent vibration, zero-speed crossing, command and telemetry behaviour, and failure response. Flight heritage belongs to the named model and configuration rather than every wheel made by the supplier.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/).
[^2]: AAC Clyde Space, [Trillian-1 reaction wheel](https://www.aac-clyde.space/what-we-do/space-products-components/adcs/trillian-1).
[^3]: N. M. Horri and P. L. Palmer, [Practical implementation of attitude control algorithms for an underactuated satellite](https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Practical-implementation-of-attitude-control-algorithms/99515857702346), *Journal of Guidance, Control, and Dynamics* 35(1), 2012.
[^4]: M. M. Longato et al., [Microvibration simulation of reaction wheel ball bearings](https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Microvibration-simulation-of-reaction-wheel-ball/99822132402346), *Journal of Sound and Vibration* 567, 2023.
[^5]: Surrey Satellite Technology Ltd, [SSTL GEO Wheel data sheet](https://www.sstl.co.uk/getmedia/75583aad-183e-4130-9139-f71786b45a00/SSTL-GEO-Wheel-Datasheet-v2-2021.pdf).
[^6]: European Space Agency, [Proba-2 spacecraft](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/Proba-2_Spacecraft).

