
Avatar System is the integrated technical architecture for creating, customizing, animating, and rendering digital representations of users in virtual environments, encompassing character models, animation systems, facial expression rigs, physics simulations, and real-time rendering pipelines.

- ### Semantic Classification

- ### Content

  ### Technical Details
  Key components include:
  - **Character Model**: 3D mesh with skeleton hierarchy and blend shapes
  - **Animation Controller**: State machine managing movement, gestures, and transitions
  - **Expression System**: Facial rig with blend shapes for emotions and lip sync
  - **Physics Simulation**: Cloth, hair, and accessory dynamics

  ### Input Integration
  - **Motion Capture**: Full-body tracking from VR controllers or external systems
  - **Facial Tracking**: Webcam or headset-based expression capture
  - **Eye Tracking**: Gaze direction and pupil data for realistic eye contact
  - **Voice Input**: Audio-driven lip sync and emotion detection

  ### Rendering Pipeline
  Real-time rendering with physically-based materials, subsurface scattering for skin, dynamic lighting, and level-of-detail optimization for performance across devices.

  ### Platform Examples
  Unity Avatar System, Unreal MetaHuman, Ready Player Me SDK, and VRChat avatar framework provide comprehensive avatar system implementations.

- ### Current Landscape (2026)
  - Photorealistic avatar systems moved from studio-only capture toward on-device rendering: Meta Reality Labs demonstrated full-body Codec Avatars running three simultaneously at 72fps on a standalone Quest 3 via its SqueezeMe compression pipeline, and shipped datasets/reference models (Ava-256, 256 subjects) to the research community.
  - Gaussian splatting became the dominant representation for relightable head avatars, driving a wave of 2025 research including URAvatar (universal relightable), LUCAS (layered face/hair disentanglement), HairCUP (swappable hairstyles without re-scanning), Avat3r, Vid2Avatar-Pro (full-body from smartphone video, released 3 March 2025) and Gaussian Pixel Codec Avatars (mesh + anisotropic Gaussian hybrid for mobile).
  - Apple shipped the first mainstream Gaussian-splatting avatars: visionOS 26 (announced WWDC June 2025) upgraded Personas to markedly more realistic, less "ghostly" renderings, giving Apple a shipping-product lead even as Meta's research quality still edges ahead.
  - Avatar interoperability standardisation consolidated on glTF 2.0 as the ISO/IEC baseline, with the Metaverse Standards Forum's Interoperable Characters/Avatars Working Group advancing an Avatar and Character Translation Framework and the VRM Consortium and Khronos collaborating (announced October 2024) to converge VRM into glTF.
  - MPEG's dedicated avatar standard, ISO/IEC 23090-39 (MPEG-I Part 39, Avatar Representation Format / ARF), progressed toward its Phase 1 (CG-based) international standard around Q1 2026, with an AI-based Phase 2 slated to begin Q2 2026; an IEEE TSC survey (May-Jun 2026) framed the emerging "Avatar-as-a-Service" ecosystem around it.
  - Likeness and deepfake regulation tightened sharply: Denmark's amendment to its Copyright Act (proposed 26 June 2025) treats a person's face, body and voice as protected, with takedown rights lasting 50 years post-mortem and extending to foreign nationals, entering into force in 2026; France's 2024 criminal-code update and the pending US NO FAKES Act (S.1367/H.R.2794) point the same direction.
  - Open challenges as of 2026 remain the on-device compute and eye/face-tracking gap (neither Quest 3 nor 3S has face tracking; Quest Pro was discontinued), one-hour server-GPU processing for full-quality avatar generation, robust hair/clothing and relighting fidelity, and true cross-platform portability of identity, rigging and licensing metadata.

- ### References
  - 1. UploadVR (2025). Meta's Photorealistic 'Codec Avatars' Now Have Changeable Hairstyles (HairCUP). https://www.uploadvr.com/meta-codec-avatars-haircup-research-changeable-hairstyles/
  - 2. Antaeus AR / Medium (2025). Meta's Codec Avatars Just Leveled Up: Avat3r, Vid2Avatar-Pro, and URAvatar Explained. https://medium.com/antaeus-ar/metas-codec-avatars-just-leveled-up-avat3r-vid2avatar-pro-and-uravatar-explained-c2feea449ab5
  - 3. SkarredGhost (2025). The XR Week Peek (2025.06.09): Apple announces visionOS 26 updates (Personas). https://skarredghost.com/2025/06/09/apple-wwdc-visionos-26-meta/amp/
  - 4. Metaverse Standards Forum (2024). Interoperable Characters/Avatars Working Group and the Avatar and Character Translation Framework. https://metaverse-standards.org/news/blog/metaverse-standards-forum-announces-the-formation-of-interoperable-characters-avatars-working-group/
  - 5. IEEE Transactions on Services Computing (2026). Avatar Standardization Efforts for Interoperable Metaverse Services: Toward a Seamless Avatar-as-a-Service Ecosystem (ISO/IEC 23090-39 ARF). https://www.computer.org/csdl/journal/sc/2026/03/11417742/2ex5J5KuNK8
  - 6. European Parliamentary Research Service (2026). The Danish approach to copyright and deepfakes. https://www.europarl.europa.eu/RegData/etudes/ATAG/2026/782611/EPRS_ATA(2026)782611_EN.pdf

- ### Provenance

