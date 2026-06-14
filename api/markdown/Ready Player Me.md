public:: true

# Ready Player Me
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c380ca49d001b6b2a8b0e751e53a3139a077813123c2cd062293a52c2377d19",
  "@type": "Page",
  "vc:slug": "ready-player-me",
  "title": "Ready Player Me",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar",
      "vc:label": "Avatar"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ready Player Me"
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
  "@id": "urn:ngm:class:ready-player-me",
  "@type": "Class",
  "label": "Ready Player Me",
  "definition": "Ready Player Me (RPM) is a cross-application avatar platform that enables users to create a single personalised 3D humanoid avatar and deploy it across hundreds of games, social VR environments, and virtual worlds via an open SDK and REST API. Founded in 2021 by Wolf3D, it provides a browser-based avatar creator, glTF-compliant avatar meshes, morph-target facial animation, and an OAuth-based identity layer so that the same avatar persona persists across compatible applications. By decoupling avatar creation from any single platform, RPM acts as a shared identity infrastructure for the emerging spatial internet, addressing avatar fragmentation across [[Metaverse]] ecosystems.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Sc Platform And Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      },
      {
        "@id": "urn:ngm:class:avatar-creator",
        "label": "Avatar Creator"
      },
      {
        "@id": "urn:ngm:class:morph-target",
        "label": "Morph Target"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gltf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-identity",
        "label": "Cross-Platform Identity"
      },
      {
        "@id": "urn:ngm:class:social-vr",
        "label": "Social VR"
      },
      {
        "@id": "urn:ngm:class:avatar-interoperability",
        "label": "Avatar Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:3d-scanning",
        "label": "3D Scanning"
      },
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Cloud Storage"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vroid-studio",
        "label": "VRoid Studio"
      },
      {
        "@id": "urn:ngm:class:metahuman-creator",
        "label": "MetaHuman Creator"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wolf3d",
        "label": "Wolf3D"
      },
      {
        "@id": "urn:ngm:class:open-metaverse-interoperability",
        "label": "Open Metaverse Interoperability"
      },
      {
        "@id": "urn:ngm:class:avatar-sdk",
        "label": "Avatar SDK"
      },
      {
        "@id": "urn:ngm:class:avatar-platform",
        "label": "Avatar Platform"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rpm",
      "label": "RPM"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ready-player-me:59cd1f0c108c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c380ca49d001b6b2a8b0e751e53a3139a077813123c2cd062293a52c2377d19"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:linked:avatar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
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
  - Ready Player Me (RPM) is a cross-application [[Avatar]] creation and hosting platform that provides users with a single persistent 3D humanoid avatar deployable across hundreds of games, [[Social VR]] spaces, and [[Metaverse]] environments. Built on [[glTF]] open standards and distributed via a REST API and Unity/Unreal SDK, RPM decouples [[Digital Identity]] from individual platform silos, establishing a shared avatar layer for the spatial internet. Operated by [[Wolf3D]], it occupies a position analogous to OAuth in web identity — a neutral third-party credential service, but for embodied presence rather than authentication tokens.

- ### Overview
  - Ready Player Me was launched publicly in 2021 as a spin-off identity product from Wolf3D, which had pioneered photorealistic avatar creation from selfie photographs since 2014.
  - The core value proposition is **avatar portability**: a user creates their avatar once and can use it without modification in any compatible application, eliminating the per-game avatar-creation friction.
  - Developers integrate RPM via a lightweight SDK (Unity, Unreal Engine, WebGL, native iOS/Android) and a REST API that returns a glTF URL for the avatar mesh on demand.
  - The platform serves both consumer users (who want a consistent digital persona) and B2B developer partners (who gain an avatar system without building one from scratch).
  - By 2024 RPM had integrated with over 7,000 applications and claimed tens of millions of user-created avatars, making it one of the largest cross-platform avatar ecosystems.
  - RPM's architecture deliberately separates the **identity layer** (OAuth-based user account) from the **rendering layer** (glTF asset), enabling the same avatar to be stylised differently (realistic, cartoonish, low-poly) per application while retaining recognisable facial features.

- ### Key Components
  - **Browser-Based Avatar Creator**
    - A hosted web interface accessible at readyplayer.me where users customise skin tone, facial features, hair, clothing, and accessories via sliders and selectors.
    - Supports selfie-based face generation: users upload or take a photo; RPM's [[Facial Recognition]] and [[3D Scanning]] pipeline maps 2D facial geometry to the avatar's blend shapes.
    - The creator can be white-labelled and embedded in partner applications via an iframe or deep-link, maintaining brand consistency for the partner.
  - **Avatar Mesh (glTF / GLB)**
    - All avatars export as [[glTF]] 2.0 binary (GLB) files, the Khronos Group's open standard for 3D assets, ensuring broad engine compatibility.
    - Meshes follow a standardised bone hierarchy compatible with [[Skeletal Animation]] systems in Unity and Unreal Engine, enabling retargeting of motion-capture animations.
    - [[Morph Target]] (blend shape) support for 52 ARKit-compatible facial expressions, enabling lip sync, eye blink, and emotional expression in real time.
    - [[Physically Based Rendering]] (PBR) material maps (albedo, normal, roughness/metallic) allow the avatar to look consistent across different lighting environments.
  - **SDK and API**
    - A REST endpoint returns a signed CDN URL for the user's current avatar GLB given an OAuth token; developers poll this or cache it.
    - Native Unity and Unreal plugins handle avatar loading, LOD switching, and animation integration out of the box.
    - WebGL JavaScript SDK for browser-based [[Virtual Reality]] and [[Augmented Reality]] experiences.
  - **OAuth Identity Layer**
    - Users authenticate via email, Google, or Apple ID and receive an RPM account that persists their avatar preferences.
    - Partner applications use OAuth scopes to request read access to the user's avatar URL, analogous to requesting a profile picture scope.
    - This identity mechanism is the foundation for [[Cross-Platform Identity]] within the RPM ecosystem.
  - **Outfit and Accessory Marketplace**
    - A growing catalogue of clothing, hairstyles, and accessories, some provided by fashion and gaming brand partners.
    - Items are linked to the RPM account and travel with the avatar across applications, enabling [[Digital Wearables]] as a revenue model.

- ### Applications and Use Cases
  - **Gaming and Esports**
    - Players bring a consistent avatar into compatible titles rather than creating a new character per game, reducing onboarding friction.
    - Esports organisations use branded RPM avatars for player representation in virtual broadcast overlays.
  - **Social VR and Virtual Worlds**
    - Platforms such as VRChat, AltspaceVR (formerly), and various web-based social spaces integrate RPM to lower the barrier for new users who arrive with an avatar already configured.
    - Enables [[Social VR]] events where attendees' avatars reflect their real-world appearance preferences across multiple co-located virtual spaces.
  - **Enterprise and Remote Collaboration**
    - Virtual office platforms (e.g. MeetinVR, Teamflow integrations) use RPM avatars to give remote workers a personalised spatial presence without requiring dedicated avatar tools.
    - Consistent professional appearance across different [[Distributed Collaboration]] tools reinforces identity coherence in remote-first organisations.
  - **Education and Training**
    - E-learning platforms and virtual training simulators incorporate RPM avatars to increase learner engagement and presence.
    - Avatars with realistic facial expressions support social learning dynamics in virtual classrooms.
  - **Brand and Marketing Activations**
    - Brands deploy RPM-integrated experiences where users dress their avatar in branded clothing, creating aspirational [[Digital Wearables]] marketing.
    - Film and media IP owners (e.g. Star Trek partnership) offer licensed avatar items to engage fan communities.
  - **Developer Prototyping**
    - Game and XR studios use RPM during early development to populate scenes with believable human avatars before investing in custom character pipelines.
    - Accelerates iteration on [[Virtual Reality]] and [[Augmented Reality]] prototypes by providing production-ready humanoid meshes.

- ### Relationships
  - partOf:: [[Metaverse]] ecosystem
  - hasPart:: [[Avatar]]
  - hasPart:: [[Avatar Creator]]
  - hasPart:: [[Morph Target]]
  - requires:: [[glTF]]
  - requires:: [[OAuth]]
  - requires:: [[REST API]]
  - enables:: [[Cross-Platform Identity]]
  - enables:: [[Social VR]]
  - enables:: [[Avatar Interoperability]]
  - uses:: [[3D Scanning]]
  - uses:: [[Facial Recognition]]
  - uses:: [[Physically Based Rendering]]
  - uses:: [[Skeletal Animation]]
  - supports:: [[Metaverse]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]
  - dependsOn:: [[Digital Identity]]
  - dependsOn:: [[Cloud Storage]]
  - contrastsWith:: [[VRoid Studio]]
  - contrastsWith:: [[MetaHuman Creator]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[NFT]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Wolf3D]]
  - relatedTo:: [[Open Metaverse Interoperability]]
  - relatedTo:: [[Avatar SDK]]

- ### Standards and Context
  - **glTF 2.0 (Khronos Group)** — the open 3D transmission format underpinning all RPM avatar meshes; ensures cross-engine portability.
  - **ARKit Blend Shapes** — Apple's 52-morph-target facial expression specification, adopted by RPM to guarantee lip-sync and expression fidelity on iOS devices using [[Augmented Reality]] frameworks.
  - **OAuth 2.0** — the authorisation framework used by RPM's identity layer, enabling partner applications to request scoped access to a user's avatar without storing credentials.
  - **Open Metaverse Interoperability (OMI) Group** — community standards body working on avatar and asset portability specs; RPM's cross-platform model aligns with OMI's goals even where formal membership varies.
  - **VRM standard** — a competing avatar interoperability format popular in Japan (used by VRoid Studio); RPM and VRM represent parallel approaches to the same portability problem, with RPM targeting Western game developers and VRM targeting anime-styled virtual YouTuber (VTuber) communities.
  - **W3C Decentralised Identifiers (DIDs)** — emerging standard that could eventually underpin RPM-style avatar identity in a self-sovereign manner, bridging RPM's centralised OAuth approach towards [[Self-Sovereign Identity]].

- ### Competitive Landscape
  - [[MetaHuman Creator]] (Epic Games) — high-fidelity photorealistic avatars tightly integrated with Unreal Engine; not cross-platform by design.
  - [[VRoid Studio]] (Pixiv) — anime-styled avatars in VRM format; strong in VTuber and Japanese social VR communities; open format but different aesthetic.
  - [[Avaturn]] — photorealistic selfie-to-avatar conversion targeting enterprise; direct RPM competitor in the developer SDK space.
  - [[Genies]] — celebrity-focused avatar platform with NFT wearables; targets Web3 and entertainment verticals.
  - Platform-native avatar systems (Roblox, Fortnite, Horizon Worlds) — closed ecosystems that retain avatar data internally; RPM's open SDK model contrasts directly with these walled gardens.

- ### Technical Architecture Notes
  - Avatar assets are stored on RPM's CDN and served as signed URLs; partners do not self-host avatar meshes, creating a dependency on RPM's infrastructure uptime.
  - Level-of-Detail (LOD) variants are generated server-side: full-detail (game use), medium (social), and low (background/crowd) meshes, reducing runtime polygon counts for performance.
  - The avatar pipeline uses a parametric 3D head model with blend-shape customisation rather than free-form sculpting, enabling deterministic output and fast generation but limiting extreme stylisation.
  - Server-side avatar generation means updates to the RPM avatar (e.g. a new haircut) propagate automatically to all integrated apps on next fetch, without any developer-side asset update.

- ### Provenance
  - sources:: Wolf3D corporate documentation; Khronos Group glTF 2.0 specification; ARKit Face Tracking documentation; Open Metaverse Interoperability Group community notes
  - updated:: 2026-06-13
