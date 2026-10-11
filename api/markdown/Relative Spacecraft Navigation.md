Relative spacecraft navigation estimates the motion and orientation of one spacecraft with respect to another object. For rendezvous this normally means relative position and velocity; close approach and docking may also require relative attitude, angular rate and full six-degree-of-freedom pose. The estimate is expressed in a declared frame, such as target body axes or a local-vertical/local-horizontal orbital frame, at a stated epoch. A range, bearing or image feature is an input measurement, rather than the complete relative state.[^1][^3][^4]

## Measurements and target cooperation

A cooperative target can carry retroreflectors, fiducial patterns, transponders or navigation-data links. These features simplify association and make the target geometry known. ESA's Automated Transfer Vehicle (ATV) used passive reflector patterns near the International Space Station docking port. Its primary Videometer projected a diverging laser beam, imaged the returned pattern and derived range and line-of-sight angles; inside 30 m, the pattern shape also supported relative-attitude angles.[^1]

The ATV architecture also carried an independent Telegoniometer. It scanned collimated laser pulses across reflectors, used time of flight for range and steering-mirror positions for line of sight, and supplied the monitoring chain rather than the active guidance loop.[^1] Redundant sensors serving independent control and supervision roles should not be described as simple averaging of two equivalent measurements.

An uncooperative target has no designed marker or link. A camera may track its silhouette or natural surface features; lidar may return a sparse or dense set of ranges; radio or GNSS can sometimes support far-range operations when both spacecraft cooperate at the communications level. Unknown shape, specular surfaces, tumbling motion, self-shadowing and changing illumination create data-association and pose ambiguities that a prepared docking target avoids.[^3][^4]

Lidar is active: it illuminates the target and estimates distance from signal time of flight. Scanning lidar samples successive directions, whereas flash lidar illuminates a field and forms a depth image. Field of view, range, update rate, point density, eye safety, power, detector saturation and surface reflectance affect the usable envelope.[^3] A point cloud still has to be associated with a shape or features before an estimator can recover pose.

## Frames, time and observability

Relative position must name its origin and axes. A vector in the target body frame rotates with the target; a local orbital frame rotates along the reference orbit; an inertial difference between two absolute states has different dynamics. Combining measurements or commanding guidance across mismatched frames can create a coherent-looking but unsafe solution.

Time alignment is equally important. Camera exposure mid-time, lidar scan time, radio integration time, inertial propagation and actuator telemetry may not coincide. During close approach, even a small latency becomes a position error proportional to closing speed. An estimator should either propagate each observation to a common epoch or model the measurement at its own time.

Observability varies with geometry. A bearing constrains two angular directions but not instantaneous range. A scalar range says little about transverse direction. Relative attitude can be ambiguous when the target is symmetric or its visible features occupy a small image region. Target and chaser motion, multiple sensors, known target dimensions and changing viewpoints add information, but a filter covariance must retain weak directions rather than imply isotropic knowledge.

## Rendezvous safety and closed-loop operation

Relative navigation feeds guidance, which selects a path and hold points, and control, which commands actuators. Safe rendezvous also needs keep-out zones, approach corridors, retreat and escape trajectories, independent monitoring, fault detection and clear ground or crew authority. Sensor performance by itself does not establish a safe closed-loop system.

ATV used an approach ellipsoid and a 200 m keep-out zone, with a passively safe path to the 250 m hold point. From there, the optical navigation loop guided a staged approach. The 31 March 2008 Jules Verne flight log records Videometer navigation from 249 m, optical guidance to 19 m, automated docking-port tracking at 11 m and subsequent commanded retreat and escape.[^1][^2] This is operational evidence for the complete ATV architecture and its cooperative ISS target, not a universal accuracy claim for optical rendezvous.

Small-spacecraft demonstrations show why status must include failures as well as achieved measurements. NASA's 2026 review records successful angles-only relative-navigation and other flight results, alongside propulsion, power and control anomalies that prevented some missions from completing planned docking objectives.[^4] Relative navigation can work while the wider rendezvous mission remains incomplete.

## Autonomy and validation

Autonomy should be described by function. A system may detect a target onboard but estimate state on the ground; it may estimate state onboard while ground operators approve every manoeuvre; or it may close the guidance and control loop without real-time approval. Validation should progress through calibrated sensor tests, synthetic and recorded imagery, processor-in-the-loop and hardware-in-the-loop cases, representative illumination and motion, Monte Carlo dispersions, fault injection and flight demonstrations.

Astroscale's ELSA-d operator account reports a handover from absolute navigation to an onboard relative-navigation sensor and an autonomous home-position hold lasting more than seven hours. It also says anomalous spacecraft conditions stopped the planned autonomous capture attempt; later operations achieved controlled close approaches despite losing four of eight thrusters.[^5] The evidence supports relative navigation and proximity operations, while the autonomous capture remained uncompleted.

## UK evidence and programme status

The University of Surrey's RemoveDEBRIS mission carried a conventional camera and flash lidar for a vision-based-navigation experiment involving a released CubeSat. The sensors acquired data in flight and returned it to the ground, where the navigation algorithms processed it.[^7] This is valuable representative flight-data evidence. It is not validation of onboard autonomous navigation or closed-loop capture.

The UK Space Agency's 2025-26 annual report describes earlier COSMIC and CLEAR concept work and a £75.6 million tender for a mission to remove two defunct UK satellites. It states that the anticipated contract award had been delayed to summer 2026.[^6] Procurement and concept design demonstrate programme intent and industrial development; they do not establish an awarded, launched or operational UK active-debris-removal service.

## References

[^1]: European Space Agency, [Automated Transfer Vehicle rendezvous and docking](https://www.esa.int/esapub/onstation/os11.pdf), *on Station*, no. 11, December 2002.
[^2]: European Space Agency, [Jules Verne ATV Demonstration Day 2](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/Jules_Verne_ATV_Demonstration_Day_2), 31 March 2008.
[^3]: John A. Christian and Scott P. Cryan, [A Survey of LIDAR Technology and Its Use in Spacecraft Relative Navigation](https://ntrs.nasa.gov/citations/20140000616), AIAA Guidance, Navigation and Control Conference, 2013.
[^4]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/), 2026.
[^5]: Astroscale, [ELSA-d Finalizes De-Orbit Operations Marking Successful Mission Conclusion](https://www.astroscale.com/en/news/astroscales-elsa-d-finalizes-de-orbit-operations-marking-successful-mission-conclusion).
[^6]: UK Space Agency, [Annual Report and Accounts 2025-2026](https://www.gov.uk/government/publications/uk-space-agency-annual-report-and-accounts-2025-2026/uk-space-agency-annual-report-2025-2026).
[^7]: University of Surrey, [RemoveDEBRIS mission](https://www.surrey.ac.uk/surrey-space-centre/missions/removedebris).

