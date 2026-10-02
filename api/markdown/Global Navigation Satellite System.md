A global navigation satellite system, or GNSS, provides positioning, navigation and timing from constellations of satellites. The complete system includes a space segment, a control segment and user receivers; an individual navigation satellite cannot provide a full position solution by itself.[^1]

## Position and time solution

Each satellite broadcasts a coded radio signal and navigation data describing its orbit and clock correction. A receiver compares the received code with a locally generated replica to estimate signal travel time, forming a pseudorange. Measurements from several satellites allow the receiver to solve for three-dimensional position and its own clock offset.[^2]

A pseudorange is not a direct geometric distance. Satellite and receiver clocks, orbit prediction, the ionosphere and troposphere, multipath and receiver noise all affect the observation. Dual-frequency measurements, augmentation services and precise orbit and clock products can reduce some errors, while buildings, terrain and interference can reduce visibility or corrupt signals.

GNSS also distributes precise time for telecommunications, energy networks, finance, transport and scientific measurement. These uses can remain dependent on satellite time even when no map position is displayed.

## Systems and resilience

Operational constellations include the United States' GPS, Europe's Galileo, China's BeiDou and Russia's GLONASS. Regional systems and augmentation services add coverage or performance. Multi-constellation receivers can improve geometry and availability, but shared dependencies such as weak radio signals and common receiver software mean that more satellites do not remove every failure mode.

Jamming overwhelms the authentic signal; spoofing supplies false signals or navigation data that can yield a plausible but wrong solution. Space weather, equipment faults, cyber attack and local radio interference are further concerns.

## UK context

UK government guidance says the country's PNT is supplied almost entirely by GNSS, primarily GPS.[^3] Current policy therefore calls for layered satellite, terrestrial and emerging quantum capabilities that do not share the same vulnerabilities.[^4] Ordnance Survey's OS Net provides a complementary ground reference network of about 120 multi-constellation stations across Great Britain for real-time and post-processed high-precision positioning.[^5]

## References

[^1]: EU Agency for the Space Programme, [What does Galileo consist of?](https://www.euspa.europa.eu/eu-space-programme/galileo/faqs/what-does-galileo-consist).
[^2]: European Space Agency Navipedia, [GNSS basic observables](https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables).
[^3]: UK Government, [Positioning, Navigation and Timing: Overview](https://www.gov.uk/guidance/positioning-navigation-and-timing-overview).
[^4]: UK Government, [UK Space Strategy: Building resilient positioning, navigation and timing](https://www.gov.uk/government/publications/uk-space-strategy/uk-space-strategy).
[^5]: Ordnance Survey, [OS Net positioning data](https://www.ordnancesurvey.co.uk/geodesy-positioning/os-net).

