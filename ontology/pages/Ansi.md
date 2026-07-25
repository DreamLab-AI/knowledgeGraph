public:: true

# Ansi

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ansi", "@type":"Page", "title":"Ansi", "vc:slug":"ansi", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ansi",
  "@type": "Class",
  "label": "Ansi",
  "definition": "ANSI, the American National Standards Institute, is a private non-profit organisation that oversees the development of voluntary consensus standards for products, services, processes, and systems in the United States. It does not write most standards itself but accredits standards developers and approves their output as American National Standards, and it represents the United States in international bodies such as ISO and IEC. In computing it is associated with standards such as ANSI C, ANSI SQL, and the ASCII character encoding.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      },
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:protocol",
        "label": "Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
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
- [[Ansi]] is a [[Standards Body]] that accredits and approves American National Standards, coordinating with [[ISO]] and [[IEEE]] and underpinning specifications such as [[SQL]].
- ### Overview
- ANSI accredits standards-developing organisations and approves their work as American National Standards.
- It facilitates consensus among industry, government, and consumer stakeholders rather than authoring most standards directly.
- It is the official US member body of ISO and the US National Committee of the IEC.
- Its remit spans countless sectors, with notable computing standards in languages, databases, and character encoding.
- ### Key aspects
- Accreditation: vetting standards developers against due-process requirements.
- Consensus process: openness, balance of interests, and appeals.
- International representation: carrying US positions into ISO and IEC.
- Conformity assessment: accrediting certification and testing bodies.
- Notable IT standards: ANSI C, ANSI SQL, and ASCII.
- ### Applications
- Establishing portable language and database standards for industry.
- Coordinating US input into international standardisation.
- Underpinning conformity assessment and certification schemes.
- Providing reference encodings and specifications for software interoperability.
- ### Relationships
- standardizedBy:: [[Standards]]
- relatedTo:: [[ISO]]
- relatedTo:: [[IEEE]]
- relatedTo:: [[NIST]]
- relatedTo:: [[SQL]]
- enables:: [[Data Format]]
- enables:: [[Interoperability]]
- supports:: [[Standards]]
- supports:: [[Protocol]]
- contrastsWith:: [[ISO]]
- contrastsWith:: [[IETF]]
- bridgesTo:: [[ISO]]
- bridgesTo:: [[IEEE]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
