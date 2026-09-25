Browser-based screen capture is the in-browser acquisition of screen, window, or tab video using web APIs such as the Screen Capture API (getDisplayMedia), without installing native software. The captured MediaStream can be recorded locally, encoded, or streamed in real time over WebRTC, making it the foundation for web conferencing, asynchronous video messaging, and screen recording tools. It runs under explicit user permission and within the browser's security sandbox.

### Content

- The getDisplayMedia API returns a permissioned MediaStream of a chosen screen, window, or tab, which the MediaRecorder API can save or WebRTC can transmit live. Operating inside the browser sandbox, it removes the need for native clients while constraining capture to user-granted sources.

