Real-time kinematic positioning (RTK) is a carrier-phase differential GNSS method in which a reference receiver supplies contemporaneous observations or corrections to a rover for relative positioning.[^1][^2]

An RTK base and rover process observations to estimate their relative position. For short baselines, double differences formed from common satellites can remove receiver and satellite clock terms; under the applicable model, the remaining carrier-phase ambiguities have integer structure. These cancellations rely on compatible signals and epochs, and may not hold unchanged when signal-specific biases remain.[^1][^2]

An RTK rover estimates float ambiguities, searches integer candidates and validates a candidate before forming a fixed solution. Reporting a fixed state alone does not independently prove it is correct. A wrong fix can produce a large position error, so solution status and validation information matter.[^1][^2][^5]

RTK needs a real-time communication path between reference and rover, but a transport such as NTRIP carries data rather than defining the positioning method. Performance depends on baseline length, shared satellite visibility, atmospheric conditions, signal continuity, antenna environment, correction latency and receiver implementation. Historical short-range and centimetre-level examples are explanatory cases, not universal service limits.[^2][^3][^4]

[^1]: ESA, *GNSS Data Processing, Volume I: Fundamentals and Algorithms*. https://gssc.esa.int/navipedia/GNSS_Book/ESA_GNSS-Book_TM-23_Vol_I.pdf
[^2]: ESA Navipedia, “Carrier Phase Ambiguity Fixing”. https://gssc.esa.int/navipedia/index.php/Carrier_Phase_Ambiguity_Fixing
[^3]: ESA Navipedia, “RTK Fundamentals”. https://gssc.esa.int/navipedia/index.php/RTK_Fundamentals
[^4]: ESA Navipedia, “Differential GNSS”. https://gssc.esa.int/navipedia/index.php?title=DGNSS
[^5]: Yin, Teunissen and Tiberius, “Performance of ambiguity-resolved detector for GNSS mixed-integer model”. https://pure.tudelft.nl/ws/portalfiles/portal/240662638/s10291-024-01806-4.pdf

