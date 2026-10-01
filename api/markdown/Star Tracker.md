A star tracker is an optical [[Sensor|sensor]] that estimates a spacecraft's absolute three-axis orientation by imaging stars and matching their pattern to an on-board catalogue.[^1] It measures attitude relative to the celestial reference field. It does not, by itself, provide the spacecraft's orbital position.

## Measurement process

A lens and image sensor capture a star field. Processing removes background and defective pixels, identifies bright points, calculates their centroids and compares the observed angular pattern with catalogue entries. Once stars are identified, an attitude algorithm solves for the rotation between the camera frame and the catalogue frame and reports a quaternion or equivalent attitude representation.

A tracker may begin **lost in space**, with no useful prior attitude, or operate in tracking mode using an earlier solution to narrow the search. Several identified stars are needed for a reliable three-axis solution. The spacecraft attitude-control system commonly combines tracker measurements with gyroscopes: the gyro propagates attitude at high rate, while the star tracker corrects its drift.

## Performance and integration

Useful performance measures include field of view, limiting star magnitude, acquisition time, update rate, angular-rate range, cross-axis and roll accuracy, mass, power and radiation tolerance. Accuracy figures must use the same statistical convention; NASA's supplier tables, for example, mix one-sigma and three-sigma values.[^1]

A clear star field is essential. Sun, Earth or Moon light, reflections from spacecraft surfaces, thruster contamination and high rotation rates can corrupt a solution. Placement, baffles and exclusion angles are therefore part of spacecraft design. Multiple trackers can provide sky coverage and redundancy, while an inertial measurement unit can bridge short losses of the stellar solution.

Star trackers are often among the more expensive attitude sensors on a small spacecraft. Coarser Sun sensors and magnetometers may be adequate for safe mode or low-accuracy missions, but precise imaging, communications and scientific pointing generally need the absolute accuracy that a tracker provides.

## Qualification

Testing covers optical accuracy, false matches, acquisition, angular-rate limits and recovery from blinding. Hardware qualification also addresses vibration, thermal vacuum, radiation and electromagnetic compatibility. ECSS-E-ST-10-03 provides general European test planning, margins and measurement-uncertainty requirements, with tailoring to the mission and equipment.[^2]

ESA has investigated whether star trackers can support spacecraft safe mode under high angular rate and radiation conditions. The reported work verified a particular reference architecture at technology-readiness level 4; it should not be turned into a claim that every tracker is suitable for safe mode.[^3]

## UK experience

Surrey Satellite Technology Ltd records UK engineering heritage in designing, building and testing star trackers for the Disaster Monitoring Constellation and Dragon spacecraft.[^4] The University of Surrey's SME-SAT programme also integrated a star-sensor payload, but the project closed after limited qualification and without a verified launch.[^5] It is evidence of integration work, not flight heritage for that instrument.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation and Control: Star Trackers](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-10-03C Rev.1: Testing](https://ecss.nl/standard/ecss-e-st-10-03c-rev-1-testing-31-may-2022/).
[^3]: European Space Agency, [Safeguarding safe mode with star trackers](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Safeguarding_Safe_Mode_with_Star_Trackers).
[^4]: Surrey Satellite Technology Ltd, [Pierre Oosthuizen: our team through time](https://www.sstl.co.uk/media-hub/latest-news/2025/pierre-oosthuizen-our-team-through-time).
[^5]: University of Surrey, [SME-SAT](https://www.surrey.ac.uk/surrey-space-centre/missions/sme-sat).

