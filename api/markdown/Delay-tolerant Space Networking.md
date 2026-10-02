Delay-tolerant space networking is an overlay architecture for communication where end-to-end connectivity cannot be assumed. Space links may be unavailable because of orbital geometry, occultation, weather, scheduling or equipment state; they may also have long or variable delays and very different data rates in each direction. The term is also expanded as *disruption-tolerant networking* to reflect this wider problem.

## Store, carry and forward

Bundle Protocol version 7 packages application data into bundles and operates above the constituent networks that carry them. A node forwards a bundle immediately when a suitable next hop is available, or stores it until a planned or recovered contact appears.[^1] Only the next hop needs to be reachable at that moment. Persistent onboard and ground storage therefore replaces the continuous end-to-end path assumed by many terrestrial applications.

This design does not create unlimited reliability. A node can exhaust its storage, a bundle can expire, a contact plan can be wrong and a destination can remain unreachable. Mission implementations must set bundle lifetimes, priorities, custody or retransmission policy, storage allocation and congestion controls. The older DTN architecture explicitly assumes that storage is sufficiently persistent and distributed to retain bundles until forwarding can occur.[^2]

Bundle Protocol itself does not select routes. CCSDS Schedule-Aware Bundle Routing covers forwarding over known future contacts, while other environments may need different policies.[^3] Bundle Protocol Security adds integrity and confidentiality services, but deployment still requires sound key management and configuration.[^4]

## Standards and deployment

BPv7 is an IETF Standards Track specification. CCSDS 734.20-O-1 adapts BPv7 for space applications as an *Experimental Specification* and explicitly leaves routing algorithms and contact-plan population outside its scope.[^5] These publication statuses should not be conflated.

NASA states that DTN became an operational service in its Near Space Network and Deep Space Network in January 2026, with operational mission use including PACE and International Space Station payloads.[^6] This establishes deployment within named NASA systems, rather than adoption across every space network.

UK work is earlier in the service chain. A UK Space Agency-backed project at Goonhilly is developing antenna interface equipment for the LunaNet interoperability specification.[^7] It is funded development, not evidence that the UK already operates a national DTN service.

## References

[^1]: IETF, [RFC 9171: Bundle Protocol Version 7](https://datatracker.ietf.org/doc/rfc9171/).
[^2]: IRTF, [RFC 4838: Delay-Tolerant Networking Architecture](https://datatracker.ietf.org/doc/rfc4838/).
[^3]: CCSDS, [Schedule-Aware Bundle Routing](https://ccsds.org/publications/allpubs/entry/3167/).
[^4]: IETF, [RFC 9172: Bundle Protocol Security](https://datatracker.ietf.org/doc/rfc9172/).
[^5]: CCSDS, [Bundle Protocol Version 7 Experimental Specification](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/06/734x20o1.pdf).
[^6]: NASA, [Delay/Disruption Tolerant Networking](https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/).
[^7]: UK Space Agency, [UK backs next-generation satellite communications](https://www.gov.uk/government/news/uk-backs-next-generation-satellite-communications-with-69-million-investment).

