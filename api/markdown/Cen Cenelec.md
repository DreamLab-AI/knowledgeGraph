public:: true

# Cen Cenelec
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:cen-cenelec", "@type": "Page", "title": "Cen Cenelec", "vc:slug": "cen-cenelec", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cen-cenelec",
  "@type": "Class",
  "label": "Cen Cenelec",
  "definition": "CEN-CENELEC refers to the joint operation of the European Committee for Standardization (CEN) and the European Committee for Electrotechnical Standardization (CENELEC), the recognised European Standardisation Organisations responsible for developing voluntary European Standards (EN). Together with ETSI they produce harmonised standards that support the EU single market and underpin presumption of conformity with European legislation. CEN covers general and mechanical sectors while CENELEC covers electrotechnical fields.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:iec",
        "label": "IEC"
      },
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:technical-standard",
        "label": "Technical Standard"
      },
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:standardization",
        "label": "Standardisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:standardization",
        "label": "Standardisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:iec",
        "label": "IEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:technical-standard",
        "label": "Technical Standard"
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
  - [[Cen Cenelec]] is defined in relation to [[Standards Body]], [[ISO]], [[IEC]], [[ETSI]], building on [[Standards Body]].
  - CEN-CENELEC refers to the joint operation of the European Committee for Standardization (CEN) and the European Committee for Electrotechnical Standardization (CENELEC), the recognised European Standardisation Organisations responsible for developing voluntary European Standards (EN). Together with ETSI they produce harmonised standards that support the EU single market and underpin presumption of conformity with European legislation. CEN covers general and mechanical sectors while CENELEC covers electrotechnical fields.

- ### Overview
  - CEN and CENELEC are private, non-profit associations of national standards bodies from European countries. They develop European Standards (EN) through consensus among national members, who are then obliged to adopt them as national standards and withdraw conflicting ones, creating a single set of standards across the membership.
  - Through formal cooperation agreements (the Vienna and Frankfurt/Dresden Agreements) CEN and CENELEC align much of their work with ISO and IEC respectively, avoiding duplication. Harmonised standards cited in the EU Official Journal give manufacturers a presumption of conformity with applicable directives and regulations.

- ### Key aspects
  - Consensus-based development of European Standards (EN) adopted nationally by members.
  - Division of scope: CEN for general sectors, CENELEC for electrotechnical, ETSI for telecommunications.
  - Harmonised standards conferring presumption of conformity with EU legislation.

- ### Applications
  - CE marking and conformity assessment for products placed on the EU market.
  - Sectoral standards for machinery, construction, medical devices, and electrical equipment.
  - Alignment of European practice with international ISO and IEC standards.

- ### Relationships
  - subClassOf:: [[Standards Body]]
  - relatedTo:: [[ISO]]
  - relatedTo:: [[IEC]]
  - relatedTo:: [[ETSI]]
  - relatedTo:: [[Interoperability]]
  - standardizedBy:: [[Standards Body]]
  - partOf:: [[Standards Body]]
  - enables:: [[Interoperability]]
  - enables:: [[Conformity Assessment]]
  - supports:: [[Technical Standard]]
  - supports:: [[Conformity Assessment]]
  - uses:: [[Standardisation]]
  - implements:: [[Standardisation]]
  - bridgesTo:: [[ISO]]
  - bridgesTo:: [[IEC]]
  - contrastsWith:: [[ETSI]]
  - requires:: [[Technical Standard]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
