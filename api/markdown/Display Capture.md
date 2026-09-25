Display capture is the acquisition of the live pixel contents of a screen, window, or application surface as a video stream for recording or transmission. On the web it is exposed through the Screen Capture API's getDisplayMedia method, which prompts the user to choose a surface and returns a media stream subject to permission. It is the foundational capability behind screen recording and real-time screen sharing.

### Content

- The captured MediaStream can be saved locally (recording) or sent over WebRTC (sharing), with the OS and browser enforcing per-surface permission and privacy indicators. Implementations must handle frame-rate and resolution constraints, audio capture options, and the security risk of exposing sensitive on-screen content.

