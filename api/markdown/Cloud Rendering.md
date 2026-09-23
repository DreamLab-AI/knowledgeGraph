
Cloud rendering is the practice of generating images or interactive 3D frames on remote, GPU-equipped servers and streaming the results to a client device, rather than rendering locally. It decouples visual fidelity from the client's hardware, enabling thin clients to display high-quality graphics by offloading computation to data centers. It powers cloud gaming, remote visualisation, and immersive metaverse experiences, but depends on low-latency networking and efficient video streaming to remain responsive.

- Cloud rendering generates images or interactive 3D frames on remote [[GPU]]-equipped servers and streams the result to a client, instead of rendering locally.
- A form of [[Remote Rendering]], it decouples visual fidelity from client hardware so a [[Thin Client]] can display high-quality graphics.
- It powers [[Cloud Gaming]], remote visualisation, and immersive [[Metaverse]] experiences, depending on low [[Latency]].
- ### Overview
- By moving heavy [[GPU Rendering]] into the data center, cloud rendering lets modest devices access graphics that would otherwise need expensive local hardware.
- The trade-off is a hard dependency on network performance: every frame must traverse the network, so latency and bandwidth dominate the experience.
- Edge computing brings render nodes physically closer to users to keep interactive workloads responsive.
- The approach is foundational for streaming-first immersive platforms where consistency across devices matters more than local capability.
- ### Mechanisms
- Server-side rendering: GPU clusters produce frames on demand.
- Encoding and streaming: rendered output is compressed and transported, often via WebRTC, as low-latency video.
- Input round-trip: client input is sent upstream and reflected in the next rendered frame.
- Edge placement: render nodes are distributed to minimise round-trip time.
- Adaptive quality: bitrate and resolution adjust to network conditions.
- ### Applications
- Cloud gaming services delivering console-grade play to any screen.
- Remote visualisation of large CAD, scientific, and medical datasets.
- Streaming immersive metaverse and XR experiences to lightweight headsets.
- Collaborative design review with consistent rendering across participants.
- ### Provenance

