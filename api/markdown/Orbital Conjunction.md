An orbital conjunction is a predicted close approach between two orbiting objects at a stated time, based on their estimated trajectories.

## Screening and assessment

Conjunction screening flags predicted close approaches for further assessment. A screening alert indicates proximity in the predicted trajectories; it does not establish that a collision will occur or quantify the risk by itself.[^1]

Assessment combines relative motion with uncertainty in both orbit estimates and the objects’ combined hard-body radius. The probability of collision (Pc) is conditional on the nominal states, covariance information, object-size assumptions and probability model. Miss distance alone can mislead when trajectory uncertainty is large.[^2][^3]

A Conjunction Data Message (CDM) provides a standard format for exchanging conjunction information among assessment providers, satellite operators and authorised recipients.[^4] The format supports consistent communication; it does not guarantee that providers used identical observations, covariance treatments or risk algorithms.

## Thresholds and decisions

Thresholds are operational rules, not physical constants. NASA CARA identifies Pc above 1E-07 as deserving operational attention and above 1E-04 as requiring mitigation in its service. NASA NPR 8079.1 sets a baseline for Earth-orbit close approaches of Pc above 1E-04 at the mitigation commitment point or a miss distance smaller than the combined hard-body radius.[^1][^2]

These values must not be generalised to every operator or orbit. The NASA procedure treats non-Earth-orbit decisions separately, and ESA describes use of a mission-designated tolerable probability threshold.[^2][^5] The responsible mission authority makes the mitigation decision. A provider can refine an event, notify an operator, support a manoeuvre plan and screen the proposed post-manoeuvre trajectory; it does not command the spacecraft by issuing an alert.[^2][^5]

Pc is a likelihood measure, not a complete measure of consequence. Mission loss, relative speed, object mass, debris generation, manoeuvre hazards and other simultaneous conjunctions can affect the operational response.[^1][^3]

## References

[^1]: NASA CARA, [Close-approach risk assessment](https://www.nasa.gov/cara/step-2-close-approach-risk-assessment/).
[^2]: NASA, [NPR 8079.1, Chapter 5](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_8079_0001_&page_name=Chapter5).
[^3]: NASA CARA, [Conjunction Assessment Best Practices Handbook](https://www.nasa.gov/wp-content/uploads/2023/07/oce-51.pdf?emrc=c0a365%3Femrc%3Dc0a365).
[^4]: CCSDS, [Conjunction Data Message catalogue record](https://ccsds.org/publications/bluebooks/entry/3064/).
[^5]: ESA, [Re-entry and collision avoidance](https://www.esa.int/content/view/full/413425).

