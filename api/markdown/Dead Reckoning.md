
Dead reckoning is a navigation technique that estimates an entity's current position by applying its known speed, heading, and elapsed time to a previously determined position. It relies on relative motion measurements from sensors such as inertial measurement units and wheel encoders rather than external position fixes. Because errors accumulate over time as drift, dead reckoning is typically fused with absolute references like GPS to maintain accuracy.

- **Dead Reckoning** is a [[Localisation]] technique that estimates current position from a prior position plus measured [[Velocity]], heading, and elapsed time.
- It depends on relative-motion sensors such as an [[Inertial Measurement Unit]] and [[Odometry]] rather than external fixes.
- Because errors accumulate as drift, it is usually fused with absolute references like [[GPS]].
- ### Overview
- Dead reckoning answers "where am I now?" by integrating motion forward from a last-known location, without needing to observe external landmarks or signals.
- A mobile robot or vehicle reads its speed and heading from wheel encoders, an [[Accelerometer]], and a [[Gyroscope]], then integrates these over time to update an estimated pose.
- The technique is fast, self-contained, and works where external positioning is unavailable — indoors, underwater, underground, or during GPS outages.
- Its central weakness is unbounded error growth: small measurement biases integrate into ever-larger drift, so dead reckoning is almost always combined with periodic absolute corrections through [[Sensor Fusion]].
- ### Mechanisms
- Integration: velocity and heading are integrated over time to propagate position.
- Inertial sensing: an [[Accelerometer]] and [[Gyroscope]] measure linear and angular motion.
- Wheel odometry: encoder counts estimate distance travelled by a [[Mobile Robot]].
- Drift management: bias and noise cause cumulative error requiring correction.
- Fusion: a [[Kalman Filter]] blends dead reckoning with absolute fixes for [[State Estimation]].
- ### Applications
- Indoor and GPS-denied robot [[Autonomous Navigation]].
- Inertial navigation for aircraft, ships, and submarines.
- Pedestrian and vehicle positioning during signal loss.
- Front-end motion prediction within [[Simultaneous Localisation and Mapping]].
- ### Provenance

