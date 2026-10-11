Optical spacecraft navigation uses images or active optical measurements to observe the direction, apparent shape or range of celestial bodies, surface features or another spacecraft. The sensor supplies measurements such as pixel coordinates, line-of-sight angles, a lidar time of flight or an image-feature displacement. It does not supply a complete spacecraft position merely by taking a picture. Camera calibration, attitude, target geometry, a time tag and a navigation estimator are needed to convert the observation into a state estimate.[^1][^4][^5]

## Observables across a mission

Useful image features change with distance and image scale. During cruise, an unresolved planet, moon or asteroid may appear as a point or small disc against a star field. Its measured direction relative to catalogue stars gives an angular observation. Deep Space 1's AutoNav took weekly images of asteroids and stars, estimated the spacecraft's location onboard and used that estimate to plan and command ion-propulsion corrections. This was a flight demonstration of a particular end-to-end autonomous architecture, rather than evidence that any camera can recover range from one image.[^2]

As a target becomes resolved, its limb, the apparent boundary between the visible body and space, can constrain its centre and angular size. A shape model and camera geometry can then relate the measured limb to the spacecraft-to-body line of sight. Illumination complicates this: the terminator is a lighting boundary, not the geometric limb, and a phase-dependent brightness centre need not coincide with the centre of figure. Public navigation summaries often describe limb and centroid processing together, but their error sources differ.[^3][^5]

At closer range, navigation can use mapped landmarks such as craters and boulders. A landmark has a position in a body-fixed frame; its predicted image location requires the body's orientation, the camera pose and a transformation into a common inertial frame at the observation epoch. Terrain-relative navigation associates observed features with a reference map. Feature tracking without an absolute map instead follows the same texture through successive images and chiefly constrains relative motion. Lighting, albedo, foreshortening, shadows, surface change and map error can all bias an association.[^3][^5]

Stars normally provide an inertial attitude reference or angular baseline. A single bearing does not determine three-dimensional position and range. Those components become observable through changing geometry over time, multiple targets or observers, dynamics, apparent angular size with a trusted shape model, or a separate range source. A numerically converged image solution can still be weak along an unobserved direction.

## Camera, frames and time

Radiometric and geometric calibration begin the measurement chain. Focal length, principal point, distortion, detector alignment, exposure timing and optical stability determine how a pixel maps to a ray in the camera frame. Spacecraft attitude then rotates that ray into an inertial or target-relative frame. Motion during an exposure, stray light, saturation, radiation damage and thermal focus changes can alter the effective measurement uncertainty.[^4][^5]

Frame and epoch conventions are part of the result. A surface landmark is constant only in its body's rotating frame. Its inertial direction depends on the body's pole, rotation model and observation time. High-accuracy processing may also require light-time and aberration treatment because the image records photons emitted or reflected before the labelled reception epoch. A navigation product should therefore identify the camera model, target ephemeris and orientation model, reference frame, time system and covariance or weighting used for each observation.

Image processing also has association risk. A centroiding algorithm can lock to the wrong body or star; a landmark matcher can accept a similar-looking feature; a limb detector can follow the terminator or a plume. Residual checks, geometric consistency, catalogue screening and cross-sensor comparison help reject bad observations, but an aggressive rejection rule can conceal a calibration or model error.

## Mode transitions and sensor fusion

No single optical mode covers cruise, approach and close proximity without limits. ESA's 2019 Hera ground test used the roughly spherical primary asteroid to estimate a centroid and line-of-sight distance, but stated that the mode became unavailable inside about 8 km because the target filled the field of view. The concept then changed to tracking boulders and craters between images, combined with accelerometers and thermal-infrared imagery.[^6] That is a mode transition driven by geometry, rather than simply a software preference.

Optical measurements are often fused with star trackers, inertial sensors, altimetry or radio tracking. Hera's design combines framing-camera features, a laser rangefinder, inertial measurements and star-tracker attitude. The instruments constrain different state directions and fail differently: visible cameras depend on illumination and texture; lidar supplies active range over a finite working envelope; inertial propagation bridges gaps but drifts; star trackers can be blinded or lose acquisition.[^7][^8] Fusion helps only when the estimator represents their biases, correlations and timing.

## Ground processing, autonomy and evidence status

“Optical navigation” does not specify where processing occurs. Ground teams can downlink images, calibrate them, measure features and solve an orbit with large computing resources and human review. An onboard system must meet processor, memory, power and latency constraints and must recognise loss of validity without waiting for Earth. Autonomy may cover image processing alone, state estimation, manoeuvre planning or closed-loop control; those levels should be stated separately.

NASA's GIANT software has evidence from processing OSIRIS-REx imagery around Bennu, including particle tracking. NASA's account separately describes a smaller package being developed for broader onboard autonomous use.[^1] Ground-processing heritage should therefore not be reported as flight heritage for that later onboard package.

Hera illustrates another status boundary. ESA records launch in October 2024 and a Didymos rendezvous scheduled for November 2026.[^7] Its FAQ says the spacecraft is designed to be operated manually from the ground and that the novel autonomy is to be tested after the core mission tasks.[^8] The multisensor design and ground tests are substantial engineering evidence, but the retained sources do not yet establish completed autonomous close-asteroid operation.

## References

[^1]: NASA, [NASA Improves GIANT Optical Navigation Technology for Future Missions](https://www.nasa.gov/technology/giant-optical-navigation/).
[^2]: NASA Jet Propulsion Laboratory, [Deep Space 1: Autonomous Navigation](https://www.jpl.nasa.gov/nmp/ds1/tech/autonav.html).
[^3]: NASA, [NASA Engineers Analyze Navigation Needs of Artemis Moon Missions](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/nasa-engineers-analyze-navigation-needs-of-artemis-moon-missions/).
[^4]: NASA Engineering and Safety Center Academy, [Fundamentals of Vision Based Navigation](https://nescacademy.nasa.gov/video/b96ec21b3f9747a1a2c50275c324fe851d).
[^5]: William M. Owen Jr, [Spacecraft Optical Navigation](https://descanso.jpl.nasa.gov/monograph/series15/Spacecraft-Optical-Navigation.pdf), JPL DESCANSO Design and Performance Summary Series, 2011.
[^6]: European Space Agency, [Hera spacecraft self-driving navigation test](https://www.esa.int/ESA_Multimedia/Videos/2019/04/Hera_spacecraft_self-driving_navigation_test), 5 April 2019.
[^7]: European Space Agency, [The Hera Spacecraft](https://www.esa.int/content/view/full/502241).
[^8]: European Space Agency, [Hera Frequently Asked Questions](https://www.esa.int/Space_Safety/Hera/Hera_Frequently_Asked_Questions).

