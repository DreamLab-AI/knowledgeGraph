public:: true

# Firewall
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:firewall", "@type":"Page", "title":"Firewall", "vc:slug":"firewall", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:firewall",
  "@type":"Class",
  "label":"Firewall",
  "definition":"A firewall is a network security control that monitors and filters incoming and outgoing traffic according to a defined rule set, allowing or blocking packets and connections to enforce a security boundary. Firewalls range from stateless packet filters to stateful inspection devices and next-generation appliances that perform deep packet inspection and application awareness. They are a foundational component for segmenting trusted and untrusted networks.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-security","label":"Network Security"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:network-segmentation","label":"Network Segmentation"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:network-security","label":"Network Security"},
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:network-segmentation","label":"Network Segmentation"},
      {"@id":"urn:ngm:class:network-security","label":"Network Security"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"},
      {"@id":"urn:ngm:class:vpn","label":"VPN"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:intrusion-detection-system","label":"Intrusion Detection System"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:web-application-firewall","label":"Web Application Firewall"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:network-security","label":"Network Security"},
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"},
      {"@id":"urn:ngm:class:vpn","label":"VPN"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

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
