A real-time control loop is a cyclic sense-compute-actuate process that runs at a fixed, deterministic frequency to regulate a physical or cyber-physical system within strict timing deadlines. Missing a deadline can cause instability or unsafe behaviour, so loops require real-time scheduling and bounded computation. They are the operational core of robotics, motion control, and industrial automation.

### Content

- Loop rates range from hundreds of hertz for joint control to kilohertz for current and force loops. Determinism is achieved with real-time operating systems, priority scheduling, and bounded-latency I/O. Jitter and missed deadlines degrade stability, so worst-case execution time analysis and isolation from non-real-time tasks are essential.

