Precise Point Positioning, or PPP, estimates position from precise satellite orbit and clock products together with undifferenced pseudorange and carrier-phase observations at a single user receiver. It does not need a surveyed reference station close to that user, although global reference networks and processing centres are still required to generate the precise products.[^1]

## Estimation

Conventional dual-frequency PPP removes most first-order ionospheric delay by combining frequencies. The estimator solves for receiver coordinates, receiver clock, tropospheric delay and carrier-phase ambiguities. Implementations may add constellations, frequencies, atmospheric corrections or ambiguity resolution.

PPP differs from local differential GNSS and real-time kinematic positioning. Those methods form relative solutions tied to one or more nearby surveyed stations; PPP corrections can serve users over much wider areas. Hybrid PPP-RTK services add regional atmospheric information, so service names and correction content should be examined rather than inferred from a label.

## Performance and delivery

PPP can provide centimetre-to-decimetre positioning under suitable conditions, with static post-processing capable of better results. Standard PPP often needs many tens of minutes to converge, and obstructed sky view, multipath or poor measurements can degrade or prevent a solution.[^1] Accuracy figures therefore need a stated mode, environment, convergence state and confidence level.

Real-time PPP also needs a channel for corrections. Galileo's High Accuracy Service distributes precise orbit, clock and bias corrections through the E6-B signal and the internet, with a stated decimetre-level service and no direct user charge.[^2] Compatible receivers and processing are still required. The International GNSS Service works on cross-validating and combining clock and phase-bias products for PPP with ambiguity resolution.[^3]

## Development and UK context

Zumberge and colleagues' 1997 PPP formulation separated global estimation of satellite positions and clocks from receiver-specific estimation, reducing the burden of analysing large GPS networks.[^4] Modern services extend that approach to multiple constellations and real-time delivery.

UK policy considers combined PPP and SBAS capability for high-trust, high-precision applications.[^5] The current policy and UKSBAS material describe options, development and trials; they do not establish a certified national operational PPP-SBAS service.

## References

[^1]: European Space Agency Navipedia, [Precise Point Positioning](https://gssc.esa.int/navipedia/index.php/Precise_Point_Positioning).
[^2]: EU Agency for the Space Programme, [Galileo High Accuracy Service](https://www.euspa.europa.eu/galileo-has).
[^3]: International GNSS Service, [PPP with Ambiguity Resolution Working Group](https://igs.org/wg/ppp-ar/).
[^4]: Zumberge et al., [Precise point positioning for the efficient and robust analysis of GPS data from large networks](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/96JB03860). <!-- slop-ignore -->
[^5]: UK Government, [Positioning, Navigation and Timing: Overview](https://www.gov.uk/guidance/positioning-navigation-and-timing-overview).

