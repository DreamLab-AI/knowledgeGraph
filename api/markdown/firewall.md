- ### Definition
  - A firewall is a [[Network Security]] control that filters traffic against a rule set to enforce a boundary between trusted and untrusted networks, a core part of [[Cybersecurity]].
  - It applies [[Access Control]] policy to permit or deny packets, and supports [[Network Segmentation]].

- ### Overview
  - Firewalls inspect traffic at the perimeter or between internal zones and decide, per packet or per connection, whether it conforms to policy.
  - They evolved from simple packet filters to stateful inspection, which tracks connection state, and to next-generation firewalls that understand applications and users.
  - Firewalls are deployed as dedicated hardware, virtual appliances or host-based software.

- ### Key aspects
  - Packet filtering on addresses, ports and protocols.
  - Stateful inspection that correlates packets to established sessions.
  - Deep packet inspection and application-layer awareness in next-generation devices.
  - Integration with [[VPN]] termination, logging and threat intelligence feeds.

- ### Applications
  - Perimeter defence between an organisation and the public internet.
  - Internal [[Network Segmentation]] to contain lateral movement.
  - Host-based protection on servers and endpoints.
  - Cloud security groups and virtual firewalls in [[Cybersecurity]] architectures.

- ### Relationships
  - subClassOf:: [[Network Security]]
  - hasPart:: [[Access Control]]
  - hasPart:: [[Network Segmentation]]
  - partOf:: [[Cybersecurity]]
  - requires:: [[Access Control]]
  - requires:: [[TCP/IP]]
  - enables:: [[Network Segmentation]]
  - uses:: [[Access Control]]
  - supports:: [[Intrusion Detection System]]
  - supports:: [[VPN]]
  - contrastsWith:: [[Intrusion Detection System]]
  - bridgesTo:: [[Web Application Firewall]]
  - relatedTo:: [[Cybersecurity]]
  - relatedTo:: [[VPN]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation