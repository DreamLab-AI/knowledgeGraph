- ### Definition
  - Perimeter Security is rooted in Network Security and relates to [[Cybersecurity]], [[Access Control]], [[Zero Trust Architecture]]. Perimeter security is a network defence model that establishes a fortified boundary between a trusted internal network and untrusted external networks, concentrating controls such as firewalls and gateways at that boundary.

- ### Overview
  - Perimeter security organises defences around a clearly delineated boundary, often likened to a castle wall protecting the interior from external threats.
  - Traffic entering or leaving the protected zone passes through chokepoints such as firewalls, gateways and proxies where it can be inspected, filtered and logged.
  - The model presumes that internal hosts are relatively trusted, which simplifies internal communication but creates risk if an attacker breaches the boundary.

- ### Mechanisms
  - Boundary firewalls enforce rules that permit or deny traffic based on source, destination, port and protocol.
  - Gateways and proxies terminate and re-establish connections so that external traffic never directly reaches internal hosts.
  - Intrusion detection and prevention sensors monitor crossing traffic for malicious signatures and anomalies.
  - Demilitarised zones isolate externally facing services from the most sensitive internal assets.

- ### Applications
  - Enterprise network protection separating corporate intranets from the public internet.
  - Data centre defence guarding application and database tiers behind layered boundaries.
  - Industrial control networks isolating operational technology from corporate IT.
  - Cloud virtual private networks enforcing boundary controls around hosted workloads.

- ### Relationships
  - subClassOf:: [[Network Security]]
  - requires:: [[Access Control]]
  - requires:: [[Security Architecture]]
  - uses:: [[Cryptographic Protocol]]
  - uses:: [[Threat Detection]]
  - enables:: [[Data Loss Prevention]]
  - enables:: [[Secure Communication]]
  - supports:: [[Cybersecurity]]
  - supports:: [[Authorization]]
  - dependsOn:: [[Authentication]]
  - dependsOn:: [[Network Layer]]
  - contrastsWith:: [[Zero Trust Architecture]]
  - bridgesTo:: [[Identity and Access Management]]
  - relatedTo:: [[Data Breach]]
  - relatedTo:: [[Network Protocol]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation