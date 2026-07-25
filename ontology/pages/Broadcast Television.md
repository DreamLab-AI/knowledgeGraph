public:: true

# Broadcast Television

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:broadcast-television", "@type":"Page", "title":"Broadcast Television", "vc:slug":"broadcast-television", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:broadcast-television",
  "@type":"Class",
  "label":"Broadcast Television",
  "definition":"Broadcast television is the distribution of moving-image and audio content to a general audience over terrestrial, satellite, or cable channels, in which a single signal is transmitted simultaneously to many passive receivers. It evolved from analogue standards such as PAL and NTSC to digital systems like DVB and ATSC that carry compressed video over the same spectrum. As a one-to-many medium with scheduled programming, it contrasts with on-demand internet streaming.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"},{"@id":"urn:ngm:class:infra-network-and-comms","label":"Network and Communication"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:video-codec","label":"Video Codec"},{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}],
    "uses":[{"@id":"urn:ngm:class:video-compression","label":"Video Compression"},{"@id":"urn:ngm:class:video-codec","label":"Video Codec"},{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}],
    "enables":[{"@id":"urn:ngm:class:bitrate","label":"Bitrate"}],
    "requires":[{"@id":"urn:ngm:class:video-compression","label":"Video Compression"},{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
    "dependsOn":[{"@id":"urn:ngm:class:hevc","label":"HEVC"},{"@id":"urn:ngm:class:video-compression","label":"Video Compression"}],
    "supports":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "relatedTo":[{"@id":"urn:ngm:class:codec","label":"Codec"},{"@id":"urn:ngm:class:bitrate","label":"Bitrate"},{"@id":"urn:ngm:class:motion-estimation","label":"Motion Estimation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:metaverse","label":"Metaverse"}],
    "bridgesTo":[{"@id":"urn:ngm:class:entropy-coding","label":"Entropy Coding"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Broadcast Television is an [[Infrastructure]] medium that transmits a single audiovisual [[Signal Processing|signal]] to many receivers at once, relying on [[Video Compression]] and a [[Video Codec]] for digital delivery.
- It is a scheduled one-to-many service, distinct from individualised on-demand delivery.
- ### Overview
- Broadcast television delivers programming over a shared transmission medium so that every receiver tuned to a channel sees the same content simultaneously. Terrestrial broadcasting uses radio-frequency spectrum from transmitter masts; satellite and cable extend reach with different physical layers.
- The transition from analogue to digital broadcasting replaced continuous waveforms with compressed digital bitstreams, freeing spectrum and enabling more channels, higher definition, and richer metadata. Digital standards such as DVB in Europe and ATSC in North America define how compressed video is multiplexed and modulated for transmission.
- As a mass medium it is characterised by scheduling, simultaneous reach, and limited interactivity, distinguishing it from the personalised, packet-switched model of internet streaming.
- ### Key aspects
- One-to-many transmission delivers identical content to an unbounded audience from a single source.
- Spectrum and channel allocation are tightly regulated and standardised by national and international bodies.
- Digital broadcasting carries compressed video, multiplexed audio, and data services in a single transport stream.
- Scheduled linear programming organises content into a fixed timeline rather than on-demand catalogues.
- Compression efficiency governs how many channels and what quality fit within a fixed bandwidth.
- ### Applications
- Free-to-air terrestrial channels reaching households without subscription.
- Satellite and cable platforms bundling many channels over wide areas.
- Live events such as news and sport where simultaneous mass reach is essential.
- Emergency and public-information broadcasting that depends on universal coverage.
- ### Relationships
- hasPart:: [[Video Codec]]
- hasPart:: [[Signal Processing]]
- uses:: [[Video Compression]]
- uses:: [[Video Codec]]
- uses:: [[Signal Processing]]
- enables:: [[Bitrate]]
- requires:: [[Video Compression]]
- requires:: [[Infrastructure]]
- dependsOn:: [[HEVC]]
- dependsOn:: [[Video Compression]]
- supports:: [[Standards]]
- standardizedBy:: [[Standards]]
- relatedTo:: [[Codec]]
- relatedTo:: [[Bitrate]]
- relatedTo:: [[Motion Estimation]]
- contrastsWith:: [[Metaverse]]
- bridgesTo:: [[Entropy Coding]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
