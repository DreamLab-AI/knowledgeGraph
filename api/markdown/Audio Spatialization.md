Audio Spatialization is the technique of positioning sounds in three-dimensional space using Head-Related Transfer Functions (HRTFs), binaural processing, and ambisonics to create realistic 3D audio experiences that respond to listener position and head movement in virtual reality and immersive applications.

### Semantic Classification

### Content

### Technical Details
Key components include:

- **HRTF (Head-Related Transfer Functions)**: Filters encoding how sound reaches ears based on head/ear geometry and source direction
- **Binaural Audio**: Two-channel synthesis enabling 3D sound perception through headphones
- **Interaural Differences**: ILD (level) and ITD (time) cues used by brain for localization
- **Ambisonics**: 3D audio rendering treating HRTFs as virtual loudspeakers around the head

  ### HRTF Capture
  Most accurate method involves placing microphones in ears, playing sounds from all directions in anechoic chamber, and computing transfer functions from recorded differences.

  ### Standards
  AES69-2022 (SOFA 2.1) provides standardized file format for exchanging spatial acoustic data.

  ### Applications
  VR/AR immersion, gaming, music production, and communication technologies benefit from precise spatial audio corresponding to real-world sound localization.

### Current Landscape (2026)

- At WWDC 2025 (June) Apple introduced the Apple Spatial Audio Format (ASAF) and its delivery codec APAC (Apple Positional Audio Codec), an environment-aware, head-tracked format that extends beyond Dolby Atmos by adapting reverb, volume and distance to the virtual scene; APAC is mandated for all Apple Immersive Video titles on Vision Pro and runs at 64–768 kbps.
- Google and Samsung launched Eclipsa Audio at CES 2025 (January) as an open, royalty-free spatial format built on the Alliance for Open Media's IAMF (Immersive Audio Model and Formats) specification, supporting up to 28 input channels plus binaural rendering, and shipped natively across Samsung's entire 2025 TV and soundbar lineup with YouTube upload support and a free AVID Pro Tools plug-in.
- The industry is bifurcating into a royalty-free open camp (IAMF/Eclipsa, positioned as the "AV1 of audio") versus proprietary ecosystems (Dolby Atmos, DTS:X and Apple's closed ASAF/APAC); by 2026 LG had added IAMF support across its 2026 range plus firmware updates for select 2025 models, and Google committed to OS-level Eclipsa playback in Android 16, Chrome and Google TV.
- MPEG-I Immersive Audio (ISO/IEC 23090-4) was technically completed as a Final Draft International Standard in early 2025, with the reference software (ISO/IEC 23090-34) promoted to FDIS at the 150th MPEG meeting in April 2025 and the full International Standard scheduled for end of 2025, delivering true 6DoF navigation (x/y/z movement plus yaw/pitch/roll) with modelled reverberation, occlusion, diffraction and Doppler for VR/AR/MR.
- On-device capture matured: iOS 26 lets apps record spatial audio as First Order Ambisonics via AVAssetWriter/AVCaptureMovieFileOutput, and the iPhone 16 can capture ASAF, lowering the barrier to user-generated immersive content.
- Next Generation Audio (NGA) frameworks using Dolby AC-4 and MPEG-H Audio are now embedded in broadcast standards ATSC 3.0 (US, South Korea, Brazil's TV 3.0) and DVB (Europe), making object/scene-based spatial audio a broadcast baseline rather than a premium add-on.
- Open challenges as of 2026 include fragmentation across incompatible open and proprietary formats, sparse content catalogues outside flagship devices, the perceptual quality gap in headphone binauralisation (HRTF personalisation, MagLS/OBR rendering), and the compute and metadata cost of real-time 6DoF acoustic simulation.

### References

- 1. TechRadar (2025). Apple quietly just unveiled a new spatial audio format that expands on Dolby Atmos, and that rivals Google and Samsung's Eclipsa Audio. https://www.techradar.com/audio/apple-quietly-just-unveiled-a-new-spatial-audio-format-that-expands-on-dolby-atmos-and-that-rivals-google-and-samsungs-eclipsa-audio
- 2. Google Open Source Blog (2025). Introducing Eclipsa Audio: immersive audio for everyone. https://opensource.googleblog.com/2025/01/introducing-eclipsa-audio-immersive-audio-for-everyone.html
- 3. Fraunhofer IIS / AES (2025). MPEG-I Immersive Audio (AES Convention Paper 10234). https://www.iis.fraunhofer.de/content/dam/iis/en/doc/ame/Whitepaper/mpeg-i/MPEG-I_Immersive_Audio_AES_Convention_Paper.pdf
- 4. SMPTE (2026). Immersive Sound Is No Longer a Differentiator: It's Table Stakes for Media & Entertainment. https://www.smpte.org/blog/immersive-sound-is-no-longer-a-differentiator-its-table-stakes-for-media-entertainment
- 5. Apple Developer (2025). Enhance your app's audio recording capabilities — WWDC25 (session 251). https://developer.apple.com/videos/play/wwdc2025/251/

### Provenance

