Interactive Connectivity Establishment (ICE) is an IETF framework that enables two peers behind network address translators (NATs) or firewalls to discover and negotiate the best path for direct media and data connections. It gathers candidate transport addresses via STUN and TURN servers, then performs connectivity checks to select a working candidate pair. ICE is a foundational component of real-time peer-to-peer communication.

### Content

- ICE collects host, server-reflexive, and relayed candidates, exchanges them via signalling, and runs prioritised connectivity checks to converge on the lowest-latency viable path. When direct paths fail, it falls back to TURN relaying, guaranteeing connectivity at the cost of an extra hop.

