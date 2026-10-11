Fault detection, isolation and recovery is the onboard capability by which a spacecraft monitors its own condition, limits the effect of a fault and works to restore function or communication, which NASA sources describe under the heading of fault protection and safing.[^1][^2]

The JPL account gives the reason for placing this logic on the spacecraft: ground teams also monitor and control it, but light time prevents an immediate response and tracking schedules are tightly constrained. Fault protection algorithms therefore run in one or more subsystems and can request action from the command and data subsystem. The same text says a spacecraft may run many such algorithms at once.[^1]

Safing is one response a routine can request, shutting down or reconfiguring components to prevent damage. A command-loss timer is given as a worked example: it is reset whenever a command arrives, and if it runs down the spacecraft assumes a failure in its receiver or command path and may swap to redundant hardware. A minimal set of safing instructions is described as sitting in read-only memory, with more elaborate routines held in updatable memory. These are descriptions of JPL practice, not a general specification.[^1]

A later NASA survey of small-spacecraft avionics names watchdog timers, selective power cycling and software-based fault isolation as mitigation strategies, and notes that designs which improve fault tolerance add complexity and verification effort. Neither source defines the three-part term as a standard, so the exact boundary between detection, isolation and recovery varies by programme.[^2][^1]

[^1]: NASA Science, *Basics of Space Flight*, chapter 11. https://science.nasa.gov/learn/basics-of-space-flight/chapter11-1/
[^2]: NASA Small Spacecraft Systems Virtual Institute, *State-of-the-Art of Small Spacecraft Technology*, “Small Spacecraft Avionics”. https://www.nasa.gov/smallsat-institute/sst-soa/small-spacecraft-avionics

