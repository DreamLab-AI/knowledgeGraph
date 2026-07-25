public:: true

# Failover

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:failover", "@type":"Page", "title":"Failover", "vc:slug":"failover", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:failover",
  "@type":"Class",
  "label":"Failover",
  "definition":"Failover is the automatic switching of operation to a standby system, server, or network path when the active component fails or becomes unreachable, minimising service disruption. It is a core mechanism for achieving high availability, typically implemented through health checks, heartbeat monitoring, and standby replicas that can assume traffic within seconds. Failover strategies range from active-passive, where a standby remains idle until needed, to active-active, where multiple nodes share load and absorb failures without a distinct switchover step. Anycast routing achieves failover at the network layer by withdrawing route advertisements for unreachable nodes.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:high-availability","label":"High Availability"}],
  "relations":{}
}
```

- ### Definition
	- Failover is the automatic switching of operation to a standby system, server, or network path when the active component fails or becomes unreachable, minimising service disruption. It is a core mechanism for achieving high availability, typically implemented through health checks, heartbeat monitoring, and standby replicas that can assume traffic within seconds. Failover strategies range from active-passive, where a standby remains idle until needed, to active-active, where multiple nodes share load and absorb failures without a distinct switchover step. Anycast routing achieves failover at the network layer by withdrawing route advertisements for unreachable nodes.
- ### Relationships
	- subClassOf:: [[High Availability]]
