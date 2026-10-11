Differential GNSS (DGNSS) is a family of positioning methods in which one or more reference receivers at known coordinates provide observations, corrections or other information for a rover’s GNSS solution.[^1]

A reference receiver can compare its measured pseudoranges with values predicted from its known position and satellite states, then derive corrections for the rover. This works best for errors shared over the baseline: satellite clock and orbit effects often transfer well over short distances, while atmospheric errors vary with location and time. Local multipath and receiver noise are not reliably removed by a nearby reference.[^1]

DGNSS names both the broader family and, in narrower contexts, code-based differential services. Carrier-phase RTK is one member of the wider family and adds carrier tracking and integer ambiguity processing. Naming the correction type and method avoids treating these approaches as interchangeable.[^1]

RTCM lists standards for Differential GNSS Services and for NTRIP, a way to transport correction streams. A message format or transport connection does not establish that corrections are current, valid or suitable for a particular use. Generic DGNSS corrections also do not provide aviation integrity assurance; GBAS has separate monitoring, equipment and operational requirements.[^2][^3]

[^1]: ESA Navipedia, “Differential GNSS”. https://gssc.esa.int/navipedia/index.php?title=DGNSS
[^2]: Radio Technical Commission for Maritime Services, “RTCM Standards”. https://www.rtcm.org/rtcm-standards
[^3]: US Federal Aviation Administration, “Satellite Navigation - GBAS - How It Works”. https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/laas/howitworks

