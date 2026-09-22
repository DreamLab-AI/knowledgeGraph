public:: true

# Least Privilege
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:least-privilege", "@type":"Page", "title":"Least Privilege", "vc:slug":"least-privilege", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:least-privilege",
  "@type":"Class",
  "label":"Least Privilege",
  "definition":"Least privilege is a security principle stating that every user, process or component should be granted only the minimum access rights necessary to perform its function, and no more. By limiting permissions to what is strictly required, the principle reduces the attack surface and confines the damage that a compromised account or faulty component can cause. It is a cornerstone of access control and underpins modern approaches such as zero-trust architecture and defence in depth.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:access-control","label":"Access Control"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:defense-in-depth","label":"Defence in Depth"},
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:role-based-access-control","label":"Role-Based Access Control"},
      {"@id":"urn:ngm:class:identity-and-access-management","label":"Identity and Access Management"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:authorization","label":"Authorisation"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:role-based-access-control","label":"Role-Based Access Control"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:privilege-escalation","label":"Privilege Escalation"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:endpoint-security","label":"Endpoint Security"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:identity-and-access-management","label":"Identity and Access Management"},
      {"@id":"urn:ngm:class:authorization","label":"Authorisation"},
      {"@id":"urn:ngm:class:defense-in-depth","label":"Defence in Depth"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Least privilege is the [[Access Control]] principle that each user or process receives only the minimum permissions needed for its task. It works hand in hand with [[Authorisation]] and [[Role-Based Access Control]] to shrink the attack surface and is the opposite of unchecked [[Privilege Escalation]].

- ### Overview
  - The least-privilege principle treats every additional permission as a liability: the fewer rights an account holds, the less an attacker gains by compromising it and the less damage a buggy process can do.
  - Applying it well means granting access narrowly and temporarily, revoking rights when no longer needed, and separating duties so that no single identity accumulates excessive power.
  - It is foundational to defence in depth and zero-trust models, where access is never assumed and is continually scoped to the specific operation being performed.

- ### Key aspects
  - Permissions are scoped to the minimum required for a defined function.
  - Just-in-time and time-bounded access reduce standing privileges.
  - Separation of duties prevents concentration of powerful rights in one identity.
  - Regular review and revocation counter privilege creep over time.

- ### Applications
  - Designing role-based and attribute-based access-control policies.
  - Hardening service accounts and automated processes in cloud and CI/CD systems.
  - Implementing zero-trust access where each request is authorised narrowly.
  - Limiting administrative rights on endpoints to contain malware impact.

- ### Relationships
  - subClassOf:: [[Access Control]]
  - enables:: [[Defence in Depth]]
  - enables:: [[Access Control]]
  - supports:: [[Role-Based Access Control]]
  - supports:: [[Identity and Access Management]]
  - requires:: [[Authorisation]]
  - requires:: [[Authentication]]
  - uses:: [[Role-Based Access Control]]
  - contrastsWith:: [[Privilege Escalation]]
  - bridgesTo:: [[Endpoint Security]]
  - dependsOn:: [[Access Control]]
  - relatedTo:: [[Identity and Access Management]]
  - relatedTo:: [[Authorisation]]
  - relatedTo:: [[Defence in Depth]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
