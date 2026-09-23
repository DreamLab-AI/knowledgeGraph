
Floating-point arithmetic is a method of representing and computing with real numbers on digital hardware using a sign, a fixed-precision significand, and an exponent, most commonly standardised by IEEE 754. It trades exactness for a wide dynamic range, so operations introduce rounding error, and properties such as associativity no longer hold exactly. Understanding its precision limits, rounding modes, and special values is essential for numerically reliable simulation, graphics, and machine learning.

- ### Content
  - Common formats range from 64-bit double and 32-bit single precision down to 16-bit and 8-bit formats used to accelerate neural-network training and inference. Reduced precision boosts throughput and lowers memory use but amplifies rounding and overflow risks, so practitioners manage numerical stability through careful scaling, mixed-precision schemes, and awareness of catastrophic cancellation and non-associativity.

