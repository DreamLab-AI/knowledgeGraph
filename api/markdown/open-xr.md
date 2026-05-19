- ### Definition
  - OpenXR is the Khronos Group's open, royalty-free API standard for cross-platform access to extended reality (XR) hardware — encompassing virtual reality (VR) headsets, augmented reality (AR) glasses, and mixed reality (MR) devices — that defines a unified application-to-runtime interface, eliminating the fragmentation previously imposed by proprietary vendor SDKs (Oculus SDK, SteamVR, Windows Mixed Reality), so that an XR application written against OpenXR runs on any conformant runtime without source code changes, and enabling [[VisionClaw Agentic Container]] agents to interact with spatial computing environments through a standardised sensory and actuation surface.
- ### Semantic Classification
  - owl-class:: spatial-computing:OpenXR
  - owl-role:: Object
  - owl-inferred:: spatial-computing:XRStandard
  - belongs-to-domain:: [[Metaverse Domain]]
  - implemented-in-layer:: [[ApplicationLayer]], [[HardwareAbstractionLayer]]
- ### Relationships
  - is-subclass-of:: [[Extended Reality API]], [[Khronos Group Standard]]
  - has-part:: [[OpenXR Session]], [[OpenXR Action System]], [[OpenXR Space]], [[OpenXR Swapchain]], [[OpenXR Extension]], [[OpenXR Loader]]
  - is-part-of:: [[XR Technology Stack]], [[Metaverse Infrastructure]]
  - requires:: [[XR Runtime]], [[XR Hardware Device]], [[Vulkan API]], [[OpenGL ES]]
  - enables:: [[Hardware-Agnostic XR Development]], [[Spatial Computing]], [[Hand Tracking]], [[Eye Tracking]], [[Passthrough AR]]
  - implements:: [[Khronos OpenXR 1.0 Specification]], [[OpenXR Extension Registry]]
  - bridges-to:: [[WebAssembly]] (domain: ngm), [[Robot Operating System]] (domain: rb), [[WebRTC]] (domain: tc), [[Gazebo Simulator]] (domain: rb)
  - depends-on:: [[Vulkan Graphics API]], [[OpenGL ES]], [[Android Platform]], [[Windows Mixed Reality Runtime]]
- ### Content
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
- ### Provenance
  - sources:: [[Khronos OpenXR 1.0 Specification]], [[Khronos OpenXR 1.1 Specification]], [[Monado Open Source Runtime]], [[Unity OpenXR Plugin]]
  - migration-date:: 2026-04-26T00:00:00Z