RTAB-Map (Real-Time Appearance-Based Mapping) is an open-source library for RGB-D, stereo, and lidar graph-based SLAM with a memory-management scheme that bounds computation for large-scale, long-term operation. Its core is an appearance-based loop-closure detector that recognises previously visited places to correct accumulated drift. It is widely used on ground robots to build consistent metric and topological maps.

### Content

- Its memory management retains recent and salient locations in working memory while moving older nodes to long-term memory, keeping loop-closure detection real-time even over large areas. Recognising revisited places lets it correct drift and produce globally consistent maps.

