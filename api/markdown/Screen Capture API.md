
The Screen Capture API is a W3C web platform interface, centred on getDisplayMedia, that lets web applications obtain a live media stream of a user-selected screen, window, or browser tab. It exposes the captured display as a MediaStream usable for recording, sharing, or processing, gated by an explicit user-selection prompt. It is the standard browser foundation for screen sharing and recording features.

- ### Content
  - Through getDisplayMedia, applications request a MediaStream and the browser presents a chooser for the surface to capture. The resulting tracks can be piped into WebRTC for sharing or the MediaRecorder API for recording, with constraints controlling frame rate, resolution, and whether the cursor or system audio is included.

