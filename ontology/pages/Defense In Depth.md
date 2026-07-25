public:: true

# Defense In Depth
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:defense-in-depth", "@type":"Page", "title":"Defense In Depth", "vc:slug":"defense-in-depth", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:defense-in-depth",
  "@type":"Class",
  "label":"Defense In Depth",
  "definition":"Defense in depth is a security strategy that layers multiple, independent controls across an environment so that the failure or bypass of any single control does not lead to compromise. Adapted from military doctrine, it spans physical, network, host, application, and data layers, combining preventive, detective, and responsive measures to slow attackers, increase the cost of intrusion, and provide redundancy. It assumes no control is infallible and complements modern paradigms such as zero trust by ensuring that defences are distributed rather than concentrated at a single perimeter.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security-architecture","label":"Security Architecture"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:security-architecture","label":"Security Architecture"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:risk-mitigation","label":"Risk Mitigation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:firewall","label":"Firewall"},
      {"@id":"urn:ngm:class:encryption","label":"Encryption"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:intrusion-detection","label":"Intrusion Detection"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:risk-mitigation","label":"Risk Mitigation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:endpoint-security","label":"Endpoint Security"},
      {"@id":"urn:ngm:class:network-security","label":"Network Security"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:perimeter-security","label":"Perimeter Security"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"},
      {"@id":"urn:ngm:class:network-security","label":"Network Security"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Defense in depth layers independent security controls so no single failure causes compromise.
	- It is a strategy within [[Security Architecture]] that distributes protection across many tiers.
	- It implements [[Risk Mitigation]] by adding redundancy and raising attacker cost.
	- It contrasts with single-boundary [[Perimeter Security]] models.
- ### Overview
	- The principle assumes every control can eventually fail, so overlapping defences provide resilience.
	- Controls span physical, network, host, application, identity, and data layers.
	- Each layer adds preventive, detective, and responsive capability, slowing and exposing attackers.
	- It complements zero-trust thinking by ensuring defences are not concentrated at one point.
- ### Mechanisms
	- Network segmentation and [[Firewall]] rules limit lateral movement.
	- [[Access Control]] and least privilege constrain what compromised credentials can reach.
	- [[Encryption]] protects data at rest and in transit even if other layers fail.
	- [[Intrusion Detection]] and monitoring surface activity that bypasses prevention.
- ### Applications
	- Enterprise network and data-centre protection.
	- Cloud workload hardening across identity, network, and workload layers.
	- Critical-infrastructure and industrial control system security.
	- Endpoint and application protection programmes.
- ### Relationships
	- subClassOf:: [[Security Architecture]]
	- partOf:: [[Security Architecture]]
	- implements:: [[Risk Mitigation]]
	- uses:: [[Firewall]]
	- uses:: [[Encryption]]
	- uses:: [[Access Control]]
	- requires:: [[Intrusion Detection]]
	- enables:: [[Risk Mitigation]]
	- supports:: [[Endpoint Security]]
	- supports:: [[Network Security]]
	- contrastsWith:: [[Perimeter Security]]
	- relatedTo:: [[Cybersecurity]]
	- relatedTo:: [[Network Security]]
	- relatedTo:: [[Access Control]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
