Attitude control changes or maintains a spacecraft's orientation. A guidance function supplies the desired orientation, attitude determination estimates the current one, and a controller commands actuators to reduce the error. This loop supports payload pointing, communications, thermal management and solar-array illumination while rejecting disturbances such as aerodynamic drag, gravity-gradient torque and solar radiation pressure.[^1][^3]

## Frames and performance

An attitude command is a rotation between named frames. The spacecraft body frame may be commanded relative to an inertial, Earth-oriented, orbital or target frame. ECSS therefore requires the reference frames used for measurement, guidance and control to be defined unambiguously.[^2] A quaternion or angle set without its source and destination frames, axis convention and time reference does not specify a reproducible command.

Pointing knowledge and achieved pointing are separate measures. Knowledge error concerns the estimate of orientation; pointing error concerns the physical line of sight that the spacecraft achieves. Absolute pointing performance can include both estimation and control errors, while payload-to-body alignment and structural deformation may add further error at spacecraft level.[^2] SSTL's 2025 Precision platform data sheet illustrates the distinction by publishing off-pointing range, absolute pointing error, geolocation pointing knowledge and slew rate as separate specifications.[^5] These are manufacturer specifications for that platform rather than general ADCS limits.

## Modes and actuators

Control authority comes from reaction wheels, magnetic torquers, thrusters or passive environmental interactions. Wheels provide smooth internal momentum exchange for fine pointing but accumulate momentum from persistent external disturbances. Magnetorquers provide external torque in a planetary magnetic field, though not along every axis at each instant. Thrusters can provide stronger external torque in a wider range of environments but consume propellant and can disturb translation.[^1]

One spacecraft can use different combinations in different modes. Detumbling after separation may use a magnetometer and magnetorquers; a safe mode may favour simple Sun and magnetic sensing; nominal fine pointing may use star trackers, gyroscopes and reaction wheels. ESA's Proba-2 description gives a flight example: four reaction wheels provide turning moments, magnetorquers unload them, and a two-head star tracker, GPS sensors and a three-axis magnetometer provide determination inputs.[^6] Installed hardware does not by itself establish accuracy; controller tuning, estimator performance, alignment, disturbance environment and flexible-body dynamics also matter.

## Calibration, failure handling and evidence

Calibration must include sensor and actuator parameters and the alignment between sensor, spacecraft and payload frames. Thermal change and launch loading can shift a boresight from its surveyed ground position. NASA consequently recommends designing small-spacecraft ADCS for on-orbit calibration rather than assuming pre-flight alignment remains exact.[^4] ECSS also requires missions to identify in-flight calibration needs, operational constraints, tools and procedures.[^2]

Redundancy is an architecture rather than a component count. A design should state which failure it tolerates, which sensors and actuators remain usable, how safe mode avoids common failures, and what pointing performance is retained. Calibration manoeuvres, recovery logic and telemetry are part of that evidence. Component data sheets and design analyses support selection; integrated testing and flight telemetry support system performance. A proposed or simulated controller should not be described as flight-demonstrated without mission evidence.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf).
[^3]: European Space Agency, [About Control Systems](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/About_Control_Systems).
[^4]: NASA Small Spacecraft Reliability Initiative, [Attitude Determination and Control](https://s3vi.ndc.nasa.gov/ssri-kb/topics/28/).
[^5]: Surrey Satellite Technology Ltd, [SSTL Precision platform data sheet 2025](https://www.sstl.co.uk/getmedia/b40f8df8-5b74-470c-8de5-52adf5b2c1cc/SSTL-Precision-Data-Sheet-2025_2pages.pdf).
[^6]: European Space Agency, [Proba-2 spacecraft](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/Proba-2_Spacecraft).

