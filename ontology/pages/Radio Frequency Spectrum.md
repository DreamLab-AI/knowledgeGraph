public:: true

# Radio Frequency Spectrum
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:radio-frequency-spectrum", "@type":"Page", "title":"Radio Frequency Spectrum", "vc:slug":"radio-frequency-spectrum", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:radio-frequency-spectrum",
  "@type":"Class",
  "label":"Radio Frequency Spectrum",
  "definition":"The radio frequency spectrum is the range of electromagnetic frequencies used to transmit information wirelessly, conventionally spanning roughly three kilohertz to three hundred gigahertz. It is a finite, shared natural resource divided into bands that are allocated and licensed by regulators to services such as broadcasting, mobile telephony, and wireless data, with propagation characteristics and capacity varying systematically with frequency.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:wireless-communication","label":"Wireless Communication"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:spectrum-allocation","label":"Spectrum Allocation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:wi-fi","label":"Wi-Fi"},
      {"@id":"urn:ngm:class:cellular-network","label":"Cellular Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:wireless-communication","label":"Wireless Communication"},
      {"@id":"urn:ngm:class:telecommunications","label":"Telecommunications"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:telecommunications","label":"Telecommunications"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:spectrum-allocation","label":"Spectrum Allocation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},
      {"@id":"urn:ngm:class:spectrum-management","label":"Spectrum Management"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:spectrum-management","label":"Spectrum Management"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- The [[Radio Frequency Spectrum]] is the range of electromagnetic frequencies used for wireless transmission. A finite shared resource, it is divided into bands governed by [[Spectrum Allocation]] and [[Spectrum Management]] and underpins [[Wi-Fi]], [[Cellular Network]] services, and broader [[Telecommunications]].
- ### Overview
- Because the spectrum is finite and signals interfere when they overlap, access must be coordinated. Regulators partition it into bands and assign rights to use them, balancing competing demands from broadcasting, mobile, satellite, and unlicensed uses.
- Propagation physics make different bands suited to different roles: lower frequencies travel far and penetrate obstacles, while higher frequencies offer more [[Bandwidth]] but shorter range.
- ### Key aspects
- The usable spectrum spans from very low frequencies up into the millimetre-wave range.
- Frequency determines the trade-off between range, penetration, and available bandwidth.
- Bands are allocated and licensed to prevent harmful interference between services.
- Some bands are reserved for unlicensed use, enabling technologies such as [[Wi-Fi]].
- ### Applications
- Mobile telephony and data over a [[Cellular Network]].
- Unlicensed wireless networking via [[Wi-Fi]].
- Broadcasting, radar, satellite links, and other [[Telecommunications]] services.
- ### Relationships
- subClassOf:: [[Wireless Communication]]
- requires:: [[Spectrum Allocation]]
- enables:: [[Wi-Fi]]
- enables:: [[Cellular Network]]
- supports:: [[Wireless Communication]]
- supports:: [[Telecommunications]]
- uses:: [[Signal Processing]]
- partOf:: [[Telecommunications]]
- dependsOn:: [[Spectrum Allocation]]
- relatedTo:: [[Bandwidth]]
- relatedTo:: [[Spectrum Management]]
- standardizedBy:: [[Spectrum Management]]
- contrastsWith:: [[Bandwidth]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
