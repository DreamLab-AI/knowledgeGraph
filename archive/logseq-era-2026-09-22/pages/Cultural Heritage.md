public:: true

# Cultural Heritage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:296535f674bfacc36d6a6669e7a94d6cc6a6c37dcad10d5164913e636bc84acf",
  "@type": "Page",
  "vc:slug": "cultural-heritage",
  "title": "Cultural Heritage",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:creative-industries", "vc:label": "Creative Industries"},
    {"@id": "urn:visionflow:linked:digital-preservation", "vc:label": "Digital Preservation"},
    {"@id": "urn:visionflow:linked:virtual-tourism", "vc:label": "Virtual Tourism"},
    {"@id": "urn:visionflow:linked:digital-objects", "vc:label": "Digital Objects"},
    {"@id": "urn:visionflow:linked:digital-twin", "vc:label": "Digital Twin"},
    {"@id": "urn:visionflow:linked:immersive-experience", "vc:label": "Immersive Experience"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cultural-heritage",
  "@type": "Class",
  "label": "Cultural Heritage",
  "definition": "The legacy of tangible artefacts (monuments, buildings, artworks, archives) and intangible attributes (language, performance, craft, ritual) inherited from past generations, maintained in the present, and safeguarded for future ones. In digital ecosystems, cultural heritage is increasingly captured, preserved, and re-presented through 3D scanning, digital twins, and immersive experiences, making it a foundational content domain for virtual tourism and the creative industries.",
  "domain": "metaverse",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:creative-industries",
    "label": "Creative Industries"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:digital-preservation", "label": "Digital Preservation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-tourism", "label": "Virtual Tourism"},
      {"@id": "urn:ngm:class:education", "label": "Education"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-objects", "label": "Digital Objects"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The legacy of tangible artefacts (monuments, buildings, artworks, archives) and intangible attributes (language, performance, craft, ritual) inherited from past generations, maintained in the present, and safeguarded for future ones. In digital ecosystems, cultural heritage is increasingly captured, preserved, and re-presented through 3D scanning, digital twins, and immersive experiences, making it a foundational content domain for virtual tourism and the creative industries."

- ### Semantic Classification
  - owl-class:: metaverse:CulturalHeritage
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Creative Industries]]
  - depends-on:: [[Digital Preservation]]
  - enables:: [[Virtual Tourism]]
  - related-to:: [[Digital Twin]]

- ### Content

  ## Definition

  **Cultural heritage** encompasses everything a society regards as worth inheriting: tangible heritage such as monuments, historic buildings, artworks, manuscripts, and archaeological sites; intangible heritage such as language, music, performance, craft skills, and ritual practice; and, increasingly, born-digital heritage such as early software, games, and web culture. UNESCO's World Heritage Convention (1972) and the Convention for the Safeguarding of the Intangible Cultural Heritage (2003) provide the principal international frameworks for identifying and protecting it.

  Within this knowledge graph, cultural heritage functions as a content domain that digital technologies act upon. Photogrammetry, LiDAR scanning, and Gaussian splatting turn physical sites into [[Digital Objects]] and [[Digital Twin]] representations; [[Digital Preservation]] disciplines keep those representations legible across format and platform change; and immersive delivery channels turn them into [[Virtual Tourism]] and education experiences that reach audiences who will never visit the physical site. The [[Creative Industries]] draw on heritage collections as raw material for games, film, and location-based entertainment.

  Digitisation also carries governance weight. Projects such as Scan the World, Google Arts & Culture, and the EU's common European data space for cultural heritage confront questions of ownership, indigenous consent, repatriation, and the risk that a high-fidelity scan becomes the only surviving record of a site lost to conflict or climate change — as with the digital reconstructions of Palmyra and Notre-Dame de Paris.

  ## Current Landscape

  - **Capture at scale**: national institutions (the British Museum, Rijksmuseum, Smithsonian) publish millions of digitised objects under open licences; 3D capture has moved from specialist rigs to smartphone photogrammetry.
  - **Immersive access**: museums deploy VR and AR reconstructions of sites and collections; virtual tourism platforms offer photorealistic walk-throughs of heritage sites rendered from scan data.
  - **Preservation urgency**: conflict, climate change, and mass tourism drive "digital ark" initiatives (CyArk, Iconem) that scan at-risk sites pre-emptively.
  - **UK context**: Historic England and the National Heritage Lottery Fund finance digitisation programmes; the GLAM sector (galleries, libraries, archives, museums) is a recognised component of the UK creative economy.
  - **Open questions**: rights management for scanned artefacts, standards for 3D heritage metadata (e.g. CIDOC CRM), and equitable access for source communities remain unresolved.

  Recent developments (2025-2026):

  - **EU data-space strategy**: the European Commission and Europeana Foundation published the *Common European Data Space for Cultural Heritage – Strategy 2025-2030* (announced January 2026), built around three priorities — interoperable infrastructure, wider access and reuse, and sector digital transformation — with AI, 3D and extended reality as cross-cutting themes.
  - **3D digitisation targets**: the Commission's Recommendation asks Member States to digitise in 3D, by 2030, all monuments and sites at risk of degradation and 50% of the most-visited heritage sites; the data space is funded under the Digital Europe Programme and built on Europeana's infrastructure.
  - **Twin it! campaign**: the EU/Europeana "Twin it! 3D for Europe's Culture" campaign ran a second phase from June 2025 with a sharper focus on reuse intent, culminating in its final event on 12 May 2026, adding emblematic 3D models from all 27 Member States to the data space.
  - **Sector baseline**: as of the data space's launch, Europeana offered access to ~52 million cultural-heritage assets, of which only ~0.03% were 3D — the gap that Twin it! and projects such as EUreka3D-XR (2025-2026) are designed to close.

  **Sources**:
  - https://digital-strategy.ec.europa.eu/en/library/common-european-data-space-cultural-heritage-strategy-2025-2030
  - https://digital-strategy.ec.europa.eu/en/policies/twin-it
