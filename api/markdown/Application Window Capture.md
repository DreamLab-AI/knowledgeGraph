
Application Window Capture is a screen-capture technique that grabs the pixels of a single specified application window rather than the entire display or a region. It lets users share or record one program while keeping other windows, notifications, and private content off-screen. Operating systems expose it through window-enumeration and per-window framebuffer APIs used by recording and conferencing software.

- ### Content
  - The OS provides window handles and per-window framebuffers so capture follows the window as it moves or resizes, excluding overlapping windows and system overlays. This isolation is valued for privacy and clarity in demos and conferences, though it must handle occlusion, GPU-composited surfaces, and protected-content windows that may render as blank.

