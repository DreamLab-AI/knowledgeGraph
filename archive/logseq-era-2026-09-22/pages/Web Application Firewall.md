public:: true

# Web Application Firewall
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:web-application-firewall", "@type":"Page", "title":"Web Application Firewall", "vc:slug":"web-application-firewall", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:web-application-firewall",
  "@type":"Class",
  "label":"Web Application Firewall",
  "definition":"A web application firewall is a security control that inspects and filters HTTP and HTTPS traffic between clients and a web application to detect and block application-layer attacks. Operating at layer seven, it applies signature, rule and behavioural policies to mitigate threats such as injection, cross-site scripting and automated abuse that traditional network firewalls cannot see. It is commonly deployed as a reverse proxy, an inline appliance or a cloud service in front of the protected application.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-security","label":"Network Security"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:reverse-proxy","label":"Reverse Proxy"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:network-security","label":"Network Security"},
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:reverse-proxy","label":"Reverse Proxy"},
      {"@id":"urn:ngm:class:http","label":"HTTP"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"},
      {"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:network-security","label":"Network Security"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:firewall","label":"Firewall"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"},
      {"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:firewall","label":"Firewall"},
      {"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"},
      {"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

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
