public:: true

# Open Source Licence
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-source-licence", "@type":"Page", "title":"Open Source Licence", "vc:slug":"open-source-licence", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-source-licence",
  "@type": "Class",
  "label": "Open Source Licence",
  "definition": "An open source licence is a legal instrument that grants users the rights to use, study, modify, and redistribute software source code, subject to conditions defined by the licence. Such licences fall broadly into permissive families, which impose few obligations, and copyleft families, which require derivative works to remain under compatible terms. Recognition typically follows the Open Source Initiative's definition, and licences are identified by standard SPDX identifiers to support automated compliance.",
  "domain": "distributed-collaboration",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-licence",
      "label": "Software Licence"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:copyleft",
        "label": "Copyleft"
      },
      {
        "@id": "urn:ngm:class:permissive-licence",
        "label": "Permissive Licence"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:free-software",
        "label": "Free Software"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-source-initiative",
        "label": "Open Source Initiative"
      },
      {
        "@id": "urn:ngm:class:spdx",
        "label": "SPDX"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:licence-compliance",
        "label": "Licence Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mit-licence",
        "label": "MIT Licence"
      },
      {
        "@id": "urn:ngm:class:apache-licence",
        "label": "Apache Licence"
      },
      {
        "@id": "urn:ngm:class:gnu-general-public-license",
        "label": "GNU General Public License"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:intellectual-property-rights",
        "label": "Intellectual Property"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An open source licence is a [[Software Licence]] granting the rights to use, study, modify, and redistribute source code.
  - It rests on [[Copyright]] law, which the licensor uses to grant rather than restrict freedoms.
  - Licences divide into [[Permissive Licence]] and [[Copyleft]] families with different obligations on derivative works.
- ### Overview
  - Open source licences make [[Open Source Software]] legally shareable, turning copyright into a tool for collaboration.
  - Permissive licences such as the [[MIT Licence]] and [[Apache Licence]] impose minimal conditions, while copyleft licences such as the [[GNU General Public License]] require derivatives to stay open.
  - Recognition by the [[Open Source Initiative]] and identification via [[SPDX]] identifiers underpin licence interoperability and compliance.
- ### Key aspects
  - Grant of the four core freedoms balanced against conditions and obligations.
  - Permissive versus copyleft trade-off between adoption and reciprocity.
  - Compatibility rules governing how differently licensed code can be combined.
- ### Mechanisms
  - The licensor, holding copyright, publishes terms that downstream users accept by using the code.
  - Copyleft provisions propagate obligations to derivative works to keep them open.
  - Standard identifiers enable automated [[Licence Compliance]] scanning across dependencies.
- ### Applications
  - Distributing libraries, frameworks, and applications to a global developer base.
  - Governing contributions and forks in collaborative repositories.
  - Managing legal risk in software supply chains.
- ### Relationships
  - subClassOf:: [[Software Licence]]
  - hasPart:: [[Copyleft]]
  - hasPart:: [[Permissive Licence]]
  - partOf:: [[Open Source Software]]
  - enables:: [[Open Source]]
  - enables:: [[Free Software]]
  - requires:: [[Copyright]]
  - standardizedBy:: [[Open Source Initiative]]
  - standardizedBy:: [[SPDX]]
  - supports:: [[Licence Compliance]]
  - relatedTo:: [[MIT Licence]]
  - relatedTo:: [[Apache Licence]]
  - relatedTo:: [[GNU General Public License]]
  - bridgesTo:: [[Intellectual Property]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
