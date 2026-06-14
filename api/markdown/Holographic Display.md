public:: true

# Holographic Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94a025ea4f813303847aa93ac454245fba45a7d12a9af4cd6ee011ab381c8322",
  "@type": "Page",
  "vc:slug": "holographic-display",
  "title": "Holographic Display",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:holography",
      "vc:label": "Holography"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:display-technology",
      "vc:label": "Display Technology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Holographic Display"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:holographic-display",
  "@type": "Class",
  "label": "Holographic Display",
  "definition": "A holographic display is a display system that reconstructs the full optical wavefront of a three-dimensional scene, enabling viewers to perceive genuine depth cues — including motion parallax, focus accommodation, and binocular disparity — without wearing specialised eyewear. It achieves this by encoding scenes as holograms (interference fringe patterns) and illuminating them with coherent or structured light to recreate the original light field. Unlike stereoscopic or autostereoscopic displays, holographic displays avoid the vergence-accommodation conflict because the eye can naturally refocus at different depths within the reconstructed scene. Practical implementations typically use spatial light modulators, diffractive optical elements, or photopolymer recording media to shape wavefronts, placing extreme demands on computational throughput and optical bandwidth.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:display-technology",
      "label": "Display Technology"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:holographic-screen",
      "label": "Holographic Screen"
    },
    {
      "@id": "urn:ngm:class:light-field-display",
      "label": "Light Field Display"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:holography",
        "label": "Holography"
      },
      {
        "@id": "urn:ngm:class:spatial-light-modulator",
        "label": "Spatial Light Modulator"
      },
      {
        "@id": "urn:ngm:class:coherent-light-source",
        "label": "Coherent Light Source"
      },
      {
        "@id": "urn:ngm:class:computer-generated-holography",
        "label": "Computer-Generated Holography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:diffractive-optical-element",
        "label": "Diffractive Optical Element"
      },
      {
        "@id": "urn:ngm:class:wavefront-reconstruction",
        "label": "Wavefront Reconstruction"
      },
      {
        "@id": "urn:ngm:class:hologram-rendering-pipeline",
        "label": "Hologram Rendering Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:volumetric-display",
        "label": "Volumetric Display"
      },
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:light-field",
        "label": "Light Field"
      },
      {
        "@id": "urn:ngm:class:diffraction",
        "label": "Diffraction"
      },
      {
        "@id": "urn:ngm:class:interference",
        "label": "Interference"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stereoscopic-display",
        "label": "Stereoscopic Display"
      },
      {
        "@id": "urn:ngm:class:autostereoscopic-display",
        "label": "Autostereoscopic Display"
      },
      {
        "@id": "urn:ngm:class:flat-panel-display",
        "label": "Flat Panel Display"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:photonics",
        "label": "Photonics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:optical-see-through",
        "label": "Optical See-Through"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:holographic-display:51c26b8afd40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94a025ea4f813303847aa93ac454245fba45a7d12a9af4cd6ee011ab381c8322"
  },
  "vc:resolutions": [
    {
      "raw": "[[Holography]]",
      "resolved": "urn:visionflow:linked:holography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Display Technology]]",
      "resolved": "urn:visionflow:linked:display-technology",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A holographic display reconstructs the full optical wavefront of a three-dimensional scene so that viewers perceive genuine depth — including motion [[Parallax]], focus accommodation, and binocular disparity — without specialised eyewear. Encoded as interference fringe patterns (holograms), scenes are illuminated with coherent or structured light to recreate the original [[Light Field]]. Because the eye can refocus naturally at different depths within the reconstructed scene, holographic displays avoid the [[Vergence-Accommodation Conflict]] that plagues [[Stereoscopic Display]] and most [[Head-Mounted Display]] systems. Practical realisations rely on [[Spatial Light Modulator]] arrays, [[Diffractive Optical Element]] stacks, or photopolymer recording media, placing extreme demands on [[GPU Compute]] throughput and optical bandwidth.

- ### Overview
  - Holographic displays are widely regarded as the theoretical end-point of [[Display Technology]] evolution: a system that presents spatial light indistinguishable from the real scene. Their significance for [[Spatial Computing]] is profound — they would enable collaborative 3-D workspaces, surgical visualisation, and volumetric communication without the form-factor burden of [[Head-Mounted Display]] devices.
  - The fundamental principle derives from [[Holography]], discovered by Dennis Gabor in 1948. A hologram records both the amplitude and phase of a reflected or scattered wavefront on a photosensitive medium. When suitably illuminated, the medium diffracts light to recreate the original wavefront, producing a fully three-dimensional image at the original spatial location.
  - Commercial-grade, room-scale holographic displays remain a frontier technology as of 2026. However, near-field holographic effects are increasingly embedded in [[Augmented Reality]] optics, waveguide combiners, and purpose-built research rigs.
  - Key challenges:
    - Computational load — encoding a large scene as a hologram (computer-generated holography) requires solving a massive diffraction integral per frame
    - Pixel pitch — SLM pixel pitches must be sub-micrometre to achieve wide viewing angles; current LCOS panels achieve viewing angles of a few degrees at best
    - Speckle noise — coherent illumination inherently produces speckle artefacts that degrade perceived image quality
    - Étendue — optical throughput constraints limit simultaneous field-of-view and resolution

- ### Key Components
  - **[[Spatial Light Modulator]] (SLM)** — the core active element, typically a liquid-crystal-on-silicon (LCOS) or micro-electro-mechanical (MEMS) device that imparts the computed holographic fringe pattern onto a coherent beam. Phase-only SLMs are preferred as they maximise diffraction efficiency.
  - **[[Coherent Light Source]]** — laser or laser-pumped coherent illumination is required to maintain phase relationships across the SLM aperture. Visible-spectrum RGB lasers or laser-LED hybrids are used.
  - **[[Computer-Generated Holography]] (CGH) engine** — a dedicated compute pipeline (GPU or custom ASIC) that solves the wave propagation equation, typically using the angular spectrum method or iterative Fourier-transform algorithms (IFTA/FICA), to derive the SLM phase map from a 3-D scene.
  - **[[Wavefront Reconstruction]] optics** — relay lenses, beam expanders, and Fourier-plane filters that project the SLM plane to the correct observation distance and suppress unwanted diffraction orders.
  - **[[Diffractive Optical Element]]s** — static or reconfigurable gratings and lenses that steer and shape diffracted wavefronts; increasingly fabricated via nanoimprint lithography for integration into thin-form devices.
  - **Eye-tracking / gaze contingency** — modern systems couple [[Eye Tracking]] to dynamically redirect reconstructed light towards the viewer's current pupil position (gaze-contingent holography), dramatically reducing the SLM resolution burden.
  - **Hologram recording medium** (for static holograms) — silver-halide emulsions, dichromated gelatin, or photopolymers (e.g. Bayfol HX) for mass-produced diffractive labels and decorative holograms.

- ### Mechanisms
  - **Interference and diffraction** — a hologram is an interference pattern between a reference beam and an object beam. When the reference beam illuminates the developed pattern, [[Diffraction]] reconstructs the object beam's wavefront, including all depth cues.
  - **Phase encoding** — phase-only holograms encode information in the complex exponential of the wavefront, not intensity, enabling near-100 % diffraction efficiency from a reflective SLM.
  - **Angular spectrum propagation** — the preferred numerical method for near-field CGH; the scene is decomposed into plane waves across a range of angles and propagated to the hologram plane via fast Fourier transforms.
  - **Colour multiplexing** — RGB channels are either time-multiplexed (sequential laser switching), spatially interleaved on sub-aperture SLM regions, or handled by wavelength-division multiplexing in the optical path.
  - **Speckle reduction** — time-averaged random phase diversity, wavelength diversity, or spatial coherence reduction using rotating diffusers or VCSEL arrays minimises speckle without eliminating the coherence needed for holography.
  - **Gaze-contingent optimisation** — by restricting the full-resolution reconstruction to the foveated region around the tracked gaze point, CGH computation can be reduced by one to two orders of magnitude, enabling near-real-time frame rates on current GPU hardware.

- ### Applications / Use Cases
  - **Medical visualisation** — holographic surgical planning and intra-operative navigation render patient-specific anatomy in true three dimensions without requiring the surgeon to wear headgear, preserving situational awareness.
  - **Defence and command-and-control** — large-format holographic tables display real-time terrain models and sensor feeds for collaborative mission planning; BAE Systems and Ostendo have demonstrated prototype systems.
  - **[[Telepresence]] and remote collaboration** — holographic video conferencing (e.g. the Portl and Proto volumetric teleportation booths use light-field-adjacent approaches) aims to convey full spatial presence of remote participants.
  - **[[Augmented Reality]] waveguide combiners** — although not full holograms, the diffractive waveguides in Microsoft HoloLens and similar devices exploit holographic optical elements (HOEs) recorded in photopolymer to couple display light into and out of the waveguide; this is the largest current deployment of holographic optics in consumer hardware.
  - **Automotive head-up displays (HUDs)** — holographic optical elements project high-brightness imagery onto the windscreen, enabling wider field-of-view and better off-axis performance than conventional HUDs.
  - **Retail and entertainment** — pepper's ghost and rear-projection pyramidal displays are colloquially (though incorrectly) called holographic; genuine diffractive displays are beginning to appear in high-value retail contexts.
  - **Data visualisation** — scientific and engineering workflows benefit from spatially accurate volumetric rendering of simulation data (computational fluid dynamics, crystallography, genomic interaction maps).
  - **Education and training** — volumetric anatomy models, historical reconstruction, and immersive simulation without wearables lower the barrier for classroom deployment.

- ### Relationships
  - subClassOf:: [[Display Technology]]
  - requires:: [[Holography]]
  - requires:: [[Spatial Light Modulator]]
  - requires:: [[Coherent Light Source]]
  - requires:: [[Computer-Generated Holography]]
  - hasPart:: [[Diffractive Optical Element]]
  - hasPart:: [[Wavefront Reconstruction]]
  - hasPart:: [[Hologram Rendering Pipeline]]
  - enables:: [[Spatial Computing]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Volumetric Display]]
  - enables:: [[Telepresence]]
  - uses:: [[Light Field]]
  - uses:: [[Diffraction]]
  - uses:: [[Interference]]
  - uses:: [[GPU Compute]]
  - dependsOn:: [[Real-Time Rendering]]
  - dependsOn:: [[Photonics]]
  - contrastsWith:: [[Stereoscopic Display]]
  - contrastsWith:: [[Autostereoscopic Display]]
  - contrastsWith:: [[Flat Panel Display]]
  - bridges-to:: [[Extended Reality]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Metaverse]]
  - relatedTo:: [[Head-Mounted Display]]
  - relatedTo:: [[Mixed Reality]]
  - relatedTo:: [[Optical See-Through]]

- ### Standards & Context
  - **ICDM (International Committee for Display Metrology)** — the ICDM's IDMS standard (Information Display Measurements Standard) is progressively extending its test-method coverage to volumetric and light-field displays, including holographic prototypes.
  - **ISO/TC 159/SC 4** (ergonomics of human-system interaction) develops perceptual comfort and flicker standards applicable to novel 3-D displays, including holographic systems.
  - **IEEE VR and SIGGRAPH** communities define the informal state of the art; the SIGGRAPH Emerging Technologies track has repeatedly been the venue of first public demonstration for research holographic display systems.
  - **Photonics21 (EU)** and analogous national roadmaps (UK Photonics Leadership Group) identify holographic displays as a priority application for integrated photonics investment.
  - **Related standards**: IEC 62977 series (electronic displays), ITU-T SG16 (visual coding and immersive media), and the JPEG Pleno standard address light-field capture and compression upstream of display.
  - **Key academic venues**: ACM SIGGRAPH, IEEE VR, Optics Express, Nature Photonics, and the Journal of the SID publish the dominant body of research on computational holography and display prototypes.
  - Dominant research groups include MIT Media Lab (Camera Culture / Wearable Computing), Stanford Computational Imaging Lab, University of Cambridge Photonics Group, and Samsung Advanced Institute of Technology.

- ### Provenance
  - sources:: Gabor (1948) Nobel lecture; MIT holographic display research; ICDM IDMS documentation; IEEE VR proceedings; Optics Express holographic display literature
  - updated:: 2026-06-13
