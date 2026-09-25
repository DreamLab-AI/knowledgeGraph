Peak Signal-to-Noise Ratio (PSNR) is an objective image- and video-quality metric expressing the ratio between the maximum possible signal power and the power of distorting noise, computed from the mean squared error between a reference and a degraded signal. Measured in decibels, higher PSNR values indicate closer fidelity to the original. It is widely used to benchmark lossy compression, restoration, and reconstruction algorithms despite its known weak correlation with perceived quality.

### Content

- PSNR is cheap to compute and monotonic with MSE, making it a default reporting figure for compression and denoising. However, it treats all pixel errors equally and ignores human visual sensitivity, so it is often reported alongside perceptual metrics such as SSIM or LPIPS for a more complete quality assessment.

