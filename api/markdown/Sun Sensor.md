
A sun sensor measures the direction of the Sun relative to a spacecraft.

Its output is a line of sight in the sensor frame. A calibrated mounting transform places that vector in the spacecraft body frame, and a solar ephemeris supplies the corresponding reference direction. One vector constrains two attitude degrees of freedom; rotation about the Sun line remains unobservable. Three-axis attitude needs a second non-collinear reference, rate information or a dynamic estimator.[^nasa-smallsat-gnc]

## Coarse and fine sensing

Coarse sensors favour broad acquisition coverage, low mass and simple electronics. A cosine sensor measures photocurrent that is approximately proportional to the cosine of the incidence angle. Several heads on different faces can extend spacecraft coverage, although structure and appendages may shadow them. Cosine response, cell mismatch, temperature and analogue conversion need calibration.[^nasa-sun-sensor-monograph]

Quadrant sensors admit sunlight through an aperture onto four photodiodes and derive two angles from differential currents. Coded-slit digital sensors infer angle from an illumination pattern. Camera-based units attenuate the intense solar image and estimate its centroid. “Fine” and “coarse” describe performance in a mission context; they do not identify one universal detector design.[^nasa-smallsat-gnc]

Fine sensors usually deliver lower local angle error within a narrower acquisition field. A NASA study describes two nominally perpendicular single-axis channels over a typical ±32-degree field. Detector counts map to angle through a nonlinear transfer function that includes cross-axis terms, and on-orbit calibration improved performance across the field.[^nasa-fine-calibration] Accuracy should therefore be quoted with field angle, axes, update rate, temperature range, alignment and confidence level.

## Observability and failure conditions

Albedo from Earth or a moon, glint from spacecraft surfaces and another bright object can corrupt a Sun direction. Raising a brightness threshold rejects some false measurements but also shrinks the effective field. Eclipse removes the observation entirely. Contamination, radiation ageing, thermal drift, baffle damage and changed appendage geometry can alter response or coverage.[^nasa-smallsat-gnc][^nasa-sun-sensor-monograph]

Sun-acquisition and safe modes combine validity checks with wider sensor coverage and lower pointing demands. Lunar Reconnaissance Orbiter used coarse Sun sensors, an inertial reference unit and reaction wheels for Sun-safe pointing. Its gyroless fallback also used wheel momentum because the Sun sensors alone could not observe rate about the target Sun line. The design had to cover eclipse, momentum limits, sensor placement and loss of rate data.[^nasa-lro-safe]

A verification record should include transfer-function residuals across field angle, sensor-to-body alignment, stray-light and eclipse logic, update latency, thermal and radiation tests, vibration, shock and system-level coverage. Component accuracy does not equal spacecraft pointing accuracy: estimator error, structural alignment and actuator response also contribute.

## UK hardware evidence

AAC Clyde Space's SS200 provides a bounded commercial example. Its data sheet states a 110-degree total field of view, below 0.3-degree one-sigma accuracy over ±45 degrees, an adjustable sampling rate up to 100 Hz, pre-delivery calibration and units flying since 2018.[^aac-ss200] These are supplier claims for the named product. They do not establish full-sky coverage, estimator performance or pointing accuracy for a particular installation.

[^nasa-smallsat-gnc]: NASA Small Spacecraft Systems Virtual Institute, “Guidance, Navigation, and Control”, https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/
[^nasa-sun-sensor-monograph]: NASA, *Spacecraft Sun Sensors*, NASA SP-8047 (1970), https://ntrs.nasa.gov/api/citations/19710008281/downloads/19710008281.pdf
[^nasa-fine-calibration]: J. E. Sedlak, J. Hashmall and R. Harman, “Fine Sun Sensor Field of View Calibration” (2002), https://ntrs.nasa.gov/citations/20020060733
[^nasa-lro-safe]: NASA, “Lunar Reconnaissance Orbiter Sun Safe Mode” (2010), https://ntrs.nasa.gov/citations/20100014251
[^aac-ss200]: AAC Clyde Space, *SS200 Sun Sensors* data sheet, https://www.aac-clyde.space/wp-content/uploads/2021/11/SS200.pdf

