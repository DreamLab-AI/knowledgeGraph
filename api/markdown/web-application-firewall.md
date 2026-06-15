- ### Definition
  - A web application firewall filters [[HTTP]] traffic to a web application to block application-layer attacks, a specialised form of [[Network Security]].
  - Unlike a packet-level [[Firewall]], it understands requests and payloads at layer seven and applies [[Access Control]] policy to them.
  - It is typically fronted by a [[Reverse Proxy]] and contributes to overall [[Cybersecurity]].

- ### Overview
  - The WAF sits between users and the application, examining each request and response against a policy set before passing it through.
  - Policies combine signature matching for known attack patterns with rule logic and behavioural scoring for anomalous traffic.
  - Deployment models include inline appliances, embedded reverse proxies and managed cloud services close to the network edge.

- ### Key aspects
  - Layer-seven inspection of headers, parameters and bodies.
  - Signature, rule-based and behavioural detection working together.
  - Positive and negative security models, allow-listing and block-listing.
  - Virtual patching that shields known vulnerabilities until code is fixed.

- ### Applications
  - Protecting public web applications and APIs from common exploits.
  - Mitigating automated bot abuse and credential stuffing.
  - Augmenting an [[Intrusion Detection System]] with active blocking.
  - Edge protection paired with a [[Content Delivery Network]] and [[Load Balancer]].

- ### Relationships
  - subClassOf:: [[Network Security]]
  - hasPart:: [[Access Control]]
  - hasPart:: [[Reverse Proxy]]
  - partOf:: [[Network Security]]
  - partOf:: [[Cybersecurity]]
  - uses:: [[HTTP]]
  - uses:: [[Access Control]]
  - requires:: [[Reverse Proxy]]
  - requires:: [[HTTP]]
  - supports:: [[Cybersecurity]]
  - supports:: [[Intrusion Detection System]]
  - enables:: [[Network Security]]
  - contrastsWith:: [[Firewall]]
  - bridgesTo:: [[API Gateway]]
  - bridgesTo:: [[Content Delivery Network]]
  - relatedTo:: [[Firewall]]
  - relatedTo:: [[Load Balancer]]
  - relatedTo:: [[Intrusion Detection System]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation