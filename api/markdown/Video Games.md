public:: true

# Video Games
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:video-games",
  "@type": "Page",
  "vc:slug": "video-games",
  "title": "Video Games",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:video-games",
  "@type": "Class",
  "label": "Video Games",
  "definition": "Video games are interactive electronic entertainment software in which players engage with a virtual environment through input devices, receiving real-time audiovisual feedback rendered by a game engine. They span genres from narrative role-playing games to competitive multiplayer shooters, sports simulations, and puzzle games, delivered across platforms including dedicated consoles, personal computers, mobile devices, and cloud streaming services. Video games are the largest entertainment sector by revenue globally, intersecting with AI, virtual reality, blockchain-based asset ownership, and esports as a spectator sport.",
  "domain": "graphics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-entertainment", "label": "Digital Entertainment"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:procedural-generation", "label": "Procedural Generation"},
      {"@id": "urn:ngm:class:ai-in-games", "label": "AI in Games"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:immersive-gaming", "label": "Immersive Gaming"},
      {"@id": "urn:ngm:class:digital-gaming", "label": "Digital Gaming"},
      {"@id": "urn:ngm:class:blockchain-gaming", "label": "Blockchain Gaming"},
      {"@id": "urn:ngm:class:virtual-world", "label": "Virtual World"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:game-development", "label": "Game Development"},
      {"@id": "urn:ngm:class:immersive-entertainment", "label": "Immersive Entertainment"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Video Games]] are interactive software systems in which players manipulate virtual environments rendered in real time by a [[Game Engine]], spanning arcade, console, PC, mobile, and cloud-streamed delivery platforms, and constituting the largest segment of [[Digital Entertainment]] with deep intersections with [[AI in Games]], [[Blockchain Gaming]], and [[Virtual World]] metaverse architectures.

- ### Relationships
  - [[Video Games]] are technically realised through [[Game Engine]] platforms (Unity, Unreal Engine, Godot) that handle rendering, physics, audio, and input abstraction, enabling [[Game Development]] across hardware targets. [[Procedural Generation]] techniques use algorithmic content creation to extend game worlds beyond manually authored content. [[AI in Games]] is advancing from scripted NPC behaviour toward LLM-driven conversational characters. [[Blockchain Gaming]] introduces on-chain asset ownership through non-fungible tokens, while [[Virtual World]] platforms such as Roblox and Fortnite blur the boundary between game and persistent social space, driving [[Immersive Gaming]] and eventually [[Immersive Entertainment]] modalities.

- ### Content
  - Video games emerged from academic computer science experiments in the 1950s-60s (Spacewar!, 1962; Tennis for Two, 1958), transitioning to commercial arcade machines with Pong (Atari, 1972) and the first generation of home consoles with the Atari 2600 (1977). The industry nearly collapsed in the 1983 North American video game crash due to market saturation and low-quality software, then revived with Nintendo's NES in 1985, which established the console market model of hardware subsidised by software licensing. The 1990s PC gaming era, 3D graphics revolution (Quake, 1996; Tomb Raider, 1996), and Sony PlayStation established the medium's cultural legitimacy.

  - Modern video game development at triple-A scale involves teams of hundreds to thousands over development cycles of 3-7 years, budgets exceeding $300 million for flagship titles, and sophisticated technology stacks: Unreal Engine 5's Nanite geometry virtualisation and Lumen global illumination system push real-time rendering toward cinematic quality; NVIDIA DLSS and AMD FSR AI-based upscaling techniques allow photorealistic rendering at playable frame rates; online services infrastructure handles millions of concurrent players. Indie development has democratised the medium through accessible engines, digital storefronts (Steam, itch.io), and social media marketing, enabling small teams to achieve commercial success.

  - Video games generated approximately $184 billion in global revenue in 2023, exceeding the combined revenues of the film and music industries. Mobile gaming accounts for approximately 50% of the total, driven by free-to-play monetisation models with in-app purchases. The medium has cultural influence beyond entertainment: games like Minecraft have been integrated into educational curricula for teaching programming and spatial reasoning; simulation games are used for military training (VBS, Steel Beasts) and surgical skills development; and esports — competitive gaming events — draw live audiences of tens of thousands and streaming audiences of millions, with prize pools exceeding $40 million for top tournaments.

  - By 2024-2025, AI is reshaping video game production and play in multiple dimensions: generative AI tools for concept art, texture generation, and dialogue writing are accelerating content production; procedural AI-driven narrative systems are being integrated into games to allow player-driven story branches that no longer require each line to be pre-authored. Cloud gaming services (Xbox Cloud Gaming, NVIDIA GeForce NOW, PlayStation Remote Play) are reducing hardware barriers by streaming rendered frames from data centres. The metaverse convergence is blurring the distinction between games and social platforms, with Fortnite hosting live concerts for tens of millions of players simultaneously. [[Blockchain Gaming]] and play-to-earn models proved volatile in 2021-22 but are being re-examined with more sustainable tokenomics in 2024-25.

