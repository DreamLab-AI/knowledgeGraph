
A computational environment in which multiple participants — human or agent — share, manipulate, and observe a common simulation state in real time. It combines networked synchronisation with physics or behavioural modelling to support joint exploration, training, or design activities across distributed locations.

- ### Content
  - Collaborative simulation emerged from military and aerospace training in the 1980s, where Distributed Interactive Simulation (DIS) standards allowed geographically separated units to share a common synthetic battlespace over low-bandwidth networks. Early systems required specialised hardware and proprietary protocols, limiting adoption to well-funded defence programmes.

  - The technical core involves a networked state-synchronisation layer — often using dead-reckoning or operational transform algorithms — that reconciles divergent local states arising from network latency. Physics fidelity, role-based access control (who can manipulate which objects), and deterministic replay are further requirements that distinguish collaborative simulation from simple shared virtual spaces. Modern implementations frequently layer WebRTC or dedicated UDP transports beneath high-level simulation middleware.

  - The ecosystem spans defence training platforms (VBS4, VSTARS), industrial design tools (Siemens Teamcenter, PTC Creo in collaborative mode), and cloud-hosted digital-twin platforms from vendors such as NVIDIA Omniverse. Open standards like OpenUSD and glTF enable asset interchange across these toolchains, while WebXR APIs are bringing lightweight collaborative simulation to browser-based contexts without proprietary runtimes.

  - As of 2024–2025, AI-driven non-player agents within collaborative simulations are maturing rapidly, allowing human teams to rehearse interactions with synthetic counterparts before real-world deployment. Cloud rendering advances (GPU-accelerated remote rendering at sub-20 ms latency) are removing the requirement for local high-end hardware, making professional-grade collaborative simulation accessible to small engineering teams and educators alike.

