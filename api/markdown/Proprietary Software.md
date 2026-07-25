public:: true

# Proprietary Software

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:proprietary-software", "@type":"Page", "title":"Proprietary Software", "vc:slug":"proprietary-software", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:proprietary-software",
  "@type":"Class",
  "label":"Proprietary Software",
  "definition":"Proprietary software is software whose source code and usage rights are owned and controlled by a vendor, distributed under restrictive licences that limit copying, modification and redistribution. Users typically receive only compiled binaries and a licence granting specified use, while the owner retains the underlying intellectual property. It contrasts with open source, where source code is freely available under permissive or copyleft terms, and is often associated with commercial licensing and vendor control.",
  "domain":"distributed-collaboration",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:software-development","label":"Software Development"}],
  "relations":{
    "contrastsWith":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"},
      {"@id":"urn:ngm:class:open-source-licence","label":"Open Source Licence"},
      {"@id":"urn:ngm:class:inner-source","label":"Inner Source"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:vendor-lock-in","label":"Vendor Lock-in"},
      {"@id":"urn:ngm:class:proprietary-format","label":"Proprietary Format"},
      {"@id":"urn:ngm:class:software-engineering","label":"Software Engineering"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:software-development","label":"Software Development"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:vendor-lock-in","label":"Vendor Lock-in"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Proprietary software is owned and licence-controlled by a vendor, restricting modification and redistribution, in direct contrast with [[Open Source]] and the terms of an [[Open Source Licence]].
- It is a model of [[Software Development]] governed by commercial [[Licensing]].
- ### Overview
- Under the proprietary model, the vendor retains the source code and intellectual property, distributing compiled binaries with a usage licence.
- Revenue typically derives from licence fees, subscriptions or support, and the vendor controls the roadmap and distribution.
- The model trades user freedom and transparency for warranties, support commitments and concentrated stewardship.
- ### Key aspects
- Closed source code retained by the owning vendor.
- Restrictive licences limiting copying, modification and redistribution.
- Commercial terms such as per-seat, subscription or enterprise licensing.
- Vendor control of releases, support and end-of-life decisions.
- Intellectual-property protection as the core business asset.
- ### Mechanisms
- Licences define and enforce permitted use and prohibitions.
- Distribution of binaries rather than source preserves secrecy.
- Activation, keys and entitlement systems enforce licensing.
- Support and maintenance contracts complement the licence.
- ### Applications
- Commercial desktop and enterprise applications.
- Specialised industry and engineering software.
- Embedded firmware in commercial products.
- Software-as-a-service offerings building on proprietary cores.
- ### Relationships
- subClassOf:: [[Software Development]]
- contrastsWith:: [[Open Source]]
- contrastsWith:: [[Open Source Licence]]
- contrastsWith:: [[Inner Source]]
- uses:: [[Licensing]]
- requires:: [[Licensing]]
- supports:: [[Software Development]]
- enables:: [[Vendor Lock-in]]
- dependsOn:: [[Licensing]]
- relatedTo:: [[Vendor Lock-in]]
- relatedTo:: [[Proprietary Format]]
- relatedTo:: [[Software Engineering]]
- bridgesTo:: [[Open Source]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
