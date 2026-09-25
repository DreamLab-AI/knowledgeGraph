Loop closure detection is the process by which a SLAM or mapping system recognises that it has returned to a previously visited location. By identifying these revisits, it adds constraints that correct accumulated odometry drift and produce globally consistent maps. It is a critical component of robust simultaneous localisation and mapping, typically implemented via appearance-based place recognition or geometric matching.

### Content

- Appearance-based methods such as bag-of-visual-words and learned descriptors compare current observations against a database of past keyframes. False positives can corrupt a map catastrophically, so detection is paired with geometric verification and robust back-end optimisation before a closure is accepted.

