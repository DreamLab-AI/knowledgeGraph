---
okf_version: "0.2"
type: Class
title: Failover
resource: urn:ngm:class:failover
domain: infrastructure
description: Failover is the automatic switching of operation to a standby system, server, or network path when the active component fails or becomes unreachable, minimising service disruption. It is a core mechanism for achieving high availability, typically implemented through health checks, heartbeat monitoring, and standby replicas that can assume traffic within seconds. Failover strategies range from acti
maturity: established
quality: 0
is-a:
  - urn:ngm:class:high-availability
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Failover

Failover is the automatic switching of operation to a standby system, server, or network path when the active component fails or becomes unreachable, minimising service disruption. It is a core mechanism for achieving high availability, typically implemented through health checks, heartbeat monitoring, and standby replicas that can assume traffic within seconds. Failover strategies range from active-passive, where a standby remains idle until needed, to active-active, where multiple nodes share load and absorb failures without a distinct switchover step. Anycast routing achieves failover at the network layer by withdrawing route advertisements for unreachable nodes.
