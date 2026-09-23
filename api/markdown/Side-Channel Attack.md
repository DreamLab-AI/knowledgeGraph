
A side-channel attack recovers secret information by observing physical or behavioural artefacts of a cryptographic implementation rather than breaking its underlying mathematics. Exploitable channels include timing variation, power consumption, electromagnetic emissions, cache access patterns, and acoustic emanations. It is a critical implementation-level threat that motivates constant-time code and masking countermeasures.

- ### Content
  - Classic examples include timing attacks on modular exponentiation, differential power analysis, and cache-timing attacks such as those underlying Spectre-class vulnerabilities. Defences include constant-time execution, blinding, masking, and noise injection, none of which are visible at the level of the mathematical specification.

