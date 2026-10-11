
Link margin is the available link performance above a required threshold under stated assumptions, commonly expressed in decibels.

For a data link, one definition is available Eb/N0 minus required Eb/N0, with any implementation allowance subtracted separately if it is not already included in the threshold. A budget should name its metric and reference plane and state whether coding loss, pointing, atmospheric effects, availability, fade reserve or other allowances are already included. NASA's worked example reports 3.93 dB available Eb/N0, a required value of 0.65 dB and 3.28 dB margin.[^1]

Margin allows for uncertain or changing received signal and noise; it is not an extra transmitter-power term and does not guarantee error-free delivery. A deterministic surplus and a statistical fade or confidence allowance are related design choices but should not be conflated. NASA describes 3 dB as a rule of thumb for many S- and X-band links, while higher-frequency weather-sensitive links can need a more explicit statistical treatment.[^2]

No single margin value applies to every mission. NASA's small-spacecraft chapter gives 3 dB for a stated 1,500 km LEO slant-range example and notes that a distant spacecraft may operate at 1 dB or less when link closure is difficult. JPL's Cassini Ka-band study recommends 4 dB for its specified 32 GHz, elevation and weather assumptions. These examples have different conditions and are not universal policy or current performance guarantees.[^3][^4]

[^1]: https://ntrs.nasa.gov/api/citations/20040066071/downloads/20040066071.pdf?attachment=true
[^2]: https://ntrs.nasa.gov/citations/20160009671
[^3]: https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/
[^4]: https://tmo.jpl.nasa.gov/2010-2019/progress_report/42-208/208B.pdf

