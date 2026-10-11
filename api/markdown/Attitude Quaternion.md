An attitude quaternion is a four-component representation of a three-dimensional rotation. For spacecraft work it normally expresses the orientation of one declared reference frame relative to another at an epoch. The four components are constrained to unit norm, so they contain three independent degrees of freedom. A quaternion without its frames, rotation direction, component order and time context is not a complete attitude state.[^1][^2]

## Convention and rotation mapping

In the CCSDS convention, the vector part comes first and the scalar component comes last: `q = (q1, q2, q3, qc)`, with `q1² + q2² + q3² + qc² = 1`. A rotation by angle `φ` about unit axis `e` is represented as the vector part `e sin(φ/2)` and scalar part `cos(φ/2)`.[^2] This ordering is not universal. NASA's SPICE toolkit uses scalar-first quaternions and documents differences among popular multiplication and vector-mapping conventions.[^5]

An interface therefore needs more than the words `Hamilton quaternion` or `scalar-last`. It should declare component order, multiplication rule, whether the mapping is active or passive, and which frame is transformed into which. Reversing the mapping requires the inverse quaternion; for a unit quaternion this is its conjugate. Applying a correct four-number value under the wrong convention can produce a plausible but incorrect orientation.[^2][^5]

## Double covering and sign

Both `q` and `-q` represent the same physical rotation. This double covering has practical consequences: a stored sequence can change sign without any change in [[Spacecraft Attitude]], and direct component subtraction can then suggest a large false jump. A processing chain may choose signs to keep consecutive samples continuous, but the selected sign has no physical meaning.[^3]

Matrix-to-quaternion conversion likewise permits either sign. CCSDS notes the customary choice of a non-negative scalar component as a canonical form.[^2] That convention does not remove the underlying equivalence and becomes discontinuous at rotations of 180°, where the scalar component is zero. Rotation-aware comparisons should use the relative rotation rather than treat the four components as unconstrained Cartesian coordinates.[^2][^3]

## Frames, epochs and exchange

Current CCSDS Attitude Data Messages identify the start and end reference frames, time system and interval for each attitude segment. Each state record has an epoch, and an angular-velocity record can use its own declared frame. The attitude at an intermediate time depends on the specified interpolation method and, where present, the rate data.[^1] UTC-tagged records also require leap-second-aware time handling.[^1][^2]

The January 2024 CCSDS Blue Book fixes the component layout used in the current message format. Older ADM guidance allowed metadata to select whether the scalar component came first or last. Archived files therefore need a version-aware parser; the retired option should not be described as a current CCSDS choice.[^1]

## Propagation, estimation and covariance

Numerical integration and additive estimator updates can move the components away from unit norm. Implementations use normalisation, constraint-preserving propagation or a multiplicative formulation to maintain a valid rotation. A NASA comparison found normalisation necessary to prevent divergence in one tested multiplicative extended Kalman filter, but its result does not establish one correction method for every estimator and operating condition.[^3][^4]

Covariance needs similar care. Four quaternion components are constrained and the two signs denote one attitude, so they are not four independent physical error coordinates. A common multiplicative filter carries a unit reference quaternion and represents its small attitude error with three local parameters; the estimator then maps that error back onto the rotation.[^3][^6] The covariance is meaningful only with the stated local error definition, frame and linearisation point.[^3]

## Verification and use

Tests should include identity, small-angle and near-180° rotations; inverse and composition checks; sign changes; interpolation across records; propagation over long intervals; and round trips among matrices, quaternions and any Euler-angle interface. Exchange tests should deliberately cross scalar-first and scalar-last software boundaries, because equal norms do not reveal a convention mismatch.[^1][^2][^5]

For a reported quaternion, preserve the epoch, time system, source and destination frames, component labels, rotation sense, normalisation method and interpolation rule. These fields allow another system to reconstruct the intended orientation and distinguish a genuine attitude change from a representation or timing artefact.[^1][^2]

## References

[^1]: Consultative Committee for Space Data Systems, [CCSDS 504.0-B-2: Attitude Data Messages](https://ccsds.org/Pubs/504x0b2.pdf), January 2024.
[^2]: Consultative Committee for Space Data Systems, [CCSDS 500.0-G-4: Navigation Data—Definitions and Conventions](https://ccsds.org/Pubs/500x0g4.pdf), November 2019.
[^3]: F. Landis Markley, NASA, [Attitude Error Representations for Kalman Filtering](https://ntrs.nasa.gov/api/citations/20010067774/downloads/20010067774.pdf).
[^4]: NASA, [Quaternion normalization in spacecraft attitude determination](https://ntrs.nasa.gov/citations/19920069431), 1992.
[^5]: NASA Jet Propulsion Laboratory, [SPICE quaternion multiplication conventions](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/IDL/icy/cspice_qxq.html).
[^6]: NASA NESC Academy, [Spacecraft Attitude Estimation and Control](https://nescacademy.nasa.gov/video/bdeb764e048940a6b2ae05c3cfdf5d261d), updated 16 August 2024.

