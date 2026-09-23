---
okf_version: "0.2"
type: Class
title: Ready Player Me
resource: urn:ngm:class:ready-player-me
domain: metaverse
description: Ready Player Me (RPM) is a cross-application avatar platform that enables users to create a single personalised 3D humanoid avatar and deploy it across hundreds of games, social VR environments, and virtual worlds via an open SDK and REST API. Founded in 2021 by Wolf3D, it provides a browser-based avatar creator, glTF-compliant avatar meshes, morph-target facial animation, and an OAuth-based ident
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:avatar
  - urn:ngm:class:avatar-creator
  - urn:ngm:class:morph-target
requires:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:oauth
  - urn:ngm:class:rest-api
  - urn:ngm:class:gltf-standard
enables:
  - urn:ngm:class:cross-platform-identity
  - urn:ngm:class:social-vr
  - urn:ngm:class:avatar-interoperability
dependsOn:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:cloud-storage
contrastsWith:
  - urn:ngm:class:vroid-studio
  - urn:ngm:class:metahuman-creator
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:nft
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:3-d-scanning
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:skeletal-animation
supports:
  - urn:ngm:class:metaverse
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
partOf:
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:open-metaverse-interoperability
  - urn:ngm:class:wolf3d
  - urn:ngm:class:avatar-sdk
---

# Ready Player Me

Ready Player Me (RPM) is a cross-application avatar platform that enables users to create a single personalised 3D humanoid avatar and deploy it across hundreds of games, social VR environments, and virtual worlds via an open SDK and REST API. Founded in 2021 by Wolf3D, it provides a browser-based avatar creator, glTF-compliant avatar meshes, morph-target facial animation, and an OAuth-based identity layer so that the same avatar persona persists across compatible applications. By decoupling avatar creation from any single platform, RPM acts as a shared identity infrastructure for the emerging spatial internet, addressing avatar fragmentation across [[Metaverse]] ecosystems.
