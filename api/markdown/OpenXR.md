OpenXR is the Khronos Group's open, royalty-free API standard for cross-platform access to extended reality (XR) hardware — encompassing virtual reality (VR) headsets, augmented reality (AR) glasses, and mixed reality (MR) devices — that defines a unified application-to-runtime interface, elimina...

### Semantic Classification

### Content

Before OpenXR, XR application developers faced a painful matrix of platform SDKs: Oculus SDK for Meta Quest, SteamVR's OpenVR for PC VR, Windows Mixed Reality, ARKit for Apple, ARCore for Android. Each SDK had distinct coordinate systems, input models, and lifecycle APIs, making cross-platform XR development costly. The Khronos Group — the standards body behind OpenGL, Vulkan, and OpenCL — convened the OpenXR working group in 2017 with participation from Valve, Microsoft, Oculus, Sony, HTC, Qualcomm, and NVIDIA. OpenXR 1.0 was released in July 2019 and has since become the dominant XR API standard, implemented by all major platform vendors.
#### Key Characteristics

- **Loader Architecture**: OpenXR applications link against a lightweight loader library that dynamically resolves calls to the active runtime (Meta OpenXR runtime, SteamVR runtime, Windows Mixed Reality, Monado open-source runtime). Applications carry no vendor-specific code.
- **Action System**: Input from controllers, hands, eyes, and face is modelled as abstract "actions" (boolean, float, pose, haptic) bound to physical device inputs through a user-configurable interaction profile. The same action `grab_object` works with an Oculus Touch controller, a Valve Index finger sensor, or hand tracking, without application changes.
- **Reference Spaces**: OpenXR defines standardised spatial reference frames — `LOCAL` (relative to player's head at session start), `STAGE` (relative to physical play area floor), `VIEW` (head-relative) — ensuring consistent spatial semantics across runtimes.
- **Swapchain Management**: Applications create OpenXR swapchains backed by the compositor; the application renders into these textures, and the runtime handles display warping, timewarp, and display synchronisation. This decouples rendering from display pipelines, enabling ATW (Asynchronous TimeWarp) and foveated rendering.
- **Extension Ecosystem**: Over 100 vendor and multi-vendor extensions cover hand tracking (XR_EXT_hand_tracking), eye tracking (XR_EXT_eye_gaze_interaction), passthrough AR (XR_FB_passthrough, XR_HTC_passthrough), spatial anchors (XR_MSFT_spatial_anchor), and body tracking (XR_FB_body_tracking).
  #### How It Works
  An OpenXR application follows a lifecycle: create an `XrInstance` (connecting to the loader), enumerate `XrSystemId` (finding the connected HMD), create an `XrSession` (graphics-API-bound rendering context), configure reference spaces and swapchains, then enter the main loop. Each frame, the application calls `xrWaitFrame` (blocks until the optimal time to begin rendering), `xrBeginFrame`, renders into the swapchain image, and calls `xrEndFrame` with a list of `XrCompositionLayerProjection` structures describing what to display in each eye. The runtime composites, warps, and displays the result at the headset's native refresh rate (72–120 Hz).
  Input is polled via `xrSyncActions` and `xrGetActionState*` calls each frame. Spatial queries (is this object within reach?) use `xrLocateSpace` to compute relative poses between reference spaces, returning position and orientation with validity flags.
  Within [[VisionClaw Agentic Container]], OpenXR runtimes expose spatial state as data streams consumable by [[Model Context Protocol]] servers. An agent skill can query the user's hand pose, gaze direction, and active application context to provide spatially-aware assistance — surfacing relevant knowledge graph content when the user reaches towards a physical object, for example.
  #### Current Landscape
  OpenXR 1.1 (released 2024) adds multi-vendor extensions for composition layers and performance metrics. Meta's OpenXR runtime on Quest 3 supports the full 1.1 feature set, and Unity and Unreal Engine have fully migrated their XR backends from proprietary SDKs to OpenXR. The Monado open-source runtime (Collabora) provides OpenXR on Linux, enabling [[Robot Operating System]] visualisation workflows in RViz with XR headset support. Apple's visionOS introduced OpenXR runtime support via the PolySpatial layer, bridging Unity applications to the visionOS compositor. In 2025, the OpenXR Mixed Reality Capture working group is standardising passthrough and real-world geometry access APIs, critical for the next generation of AR glasses (Meta Orion, Google Project Astra hardware).
  #### Cross-Domain Applications
  In the [[Robotics Domain]], OpenXR is used for robot tele-operation interfaces and RViz XR visualisation of [[Robot Operating System]] sensor streams. In the [[Telecollaboration Domain]], [[WebRTC]] carries the compressed XR view streams between users in collaborative virtual environments, with OpenXR providing the local spatial tracking. In the [[NGM Domain]], [[WebAssembly]] is used to implement OpenXR extension layers that inject custom spatial overlays without modifying the core application binary. In the [[AI Domain]], [[AutoML]]-trained scene understanding models run inside OpenXR applications to provide real-time semantic annotations of the physical environment viewed through passthrough cameras.
  #### Standards and References
- Khronos Group. (2019). *OpenXR 1.0 Specification*. https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html
- Khronos Group. (2024). *OpenXR 1.1 Specification*. https://registry.khronos.org/OpenXR/specs/1.1/
- Buss, M., et al. (2021). "OpenXR: A Standard for XR Platforms." *IEEE VR 2021 Proceedings*.
- Collabora. (2024). *Monado — Open Source OpenXR Runtime*. https://monado.freedesktop.org/
- Unity Technologies. (2024). *Unity OpenXR Plugin Documentation*. https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest/

### Provenance

## Merged from OpenXR Standard (needs reconciliation)
A royalty-free open standard from the Khronos Group defining a common application programming interface between XR applications and virtual, augmented, and mixed reality hardware, covering device tracking, input actions, frame timing, and composition, so that an application written once against the OpenXR runtime interface runs across headsets from different vendors without engine-specific porting.

### Semantic Classification

### Content

## Definition

The **OpenXR standard** is the Khronos Group's answer to the early fragmentation of XR development, when every headset shipped its own proprietary SDK — Oculus, SteamVR/OpenVR, Windows Mixed Reality — and applications had to be ported to each. Ratified at version 1.0 in 2019, OpenXR defines a single C API sitting between the application (or game engine) and a vendor-supplied runtime. The application expresses what it needs — tracked poses, controller and hand input as abstract "actions", swapchain images, frame timing — and the runtime maps those requests onto whatever display hardware and trackers are present.

The specification covers session lifecycle, reference spaces (view, local, stage), input action systems with rebindable profiles, compositor layers, and a formal extension mechanism through which vendors expose capabilities such as hand tracking, eye tracking, passthrough, foveated rendering, and spatial anchors before they are standardised in the core. This extension pipeline is how the standard has absorbed successive waves of hardware innovation without breaking application compatibility.

As a distinct, named standard, OpenXR is a specialisation of the generic [[Open Standard]] concept: it is the concrete specification that XR headsets implement and against which display hardware is standardised, rather than the abstract idea of openly governed specifications.

## Current Landscape

OpenXR has effectively won its category. Meta retired its proprietary native VR API in favour of OpenXR on Quest; SteamVR, Windows Mixed Reality, Varjo, HTC, Pico, and Magic Leap all ship conformant runtimes; and Unity and Unreal Engine target OpenXR as their default XR backend. Apple's visionOS remains the notable holdout, though engine-level abstraction layers paper over the gap for most developers.

Version 1.1, ratified in April 2024, folded widely adopted extensions (such as `XR_KHR_locate_spaces`, `XR_EXT_local_floor` and `XR_EXT_palm_pose`) into the core specification and tightened conformance requirements, reducing the divergence between runtimes. In the browser, the separate but related [[WebXR]] Device API plays the same interoperability role for web content, and browser implementations commonly sit on top of a native OpenXR runtime — making the two standards complementary layers of the same portability story. For enterprise and telepresence deployments, OpenXR conformance is now a routine procurement requirement, since it decouples content investment from any single headset vendor's fortunes.

## Current Landscape

- The specification is under active point-release development: version 1.1.52 was published on 19 September 2025, following 1.1.51 (28 August 2025) and a steady cadence of roughly monthly maintenance releases through 2025 (1.1.45–1.1.47 landed February–April 2025).
- OpenXR 1.1 remains the current major line; Khronos continues to promote proven multi-vendor and vendor extensions into ratified core and KHR status rather than issuing a 2.0, keeping application compatibility stable.
- The 1.1.52 release added a new ratified Khronos extension defining a fallback interaction profile, illustrating the ongoing consolidation of input handling across heterogeneous controllers.
- Conformance is gated by the Adopter Programme: implementers must be Khronos Adopters and pay the Adopter Fee to use the OpenXR trademark, though the Conformance Test Suite source is openly available.
- Runtime adoption is effectively universal across the non-Apple ecosystem — Meta Quest, SteamVR, Windows Mixed Reality, Varjo, HTC, Pico and Magic Leap all ship conformant runtimes, with Unity and Unreal Engine defaulting to OpenXR back ends.
- **Sources**:
  - https://github.com/KhronosGroup/OpenXR-Registry/releases
  - https://github.com/KhronosGroup/OpenXR-Docs/blob/main/CHANGELOG.Docs.md
  - https://www.khronos.org/openxr/
  - https://registry.khronos.org/OpenXR/

### Provenance

