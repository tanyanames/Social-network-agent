export const SOCIAL_CHANNELS = Object.freeze(["instagram", "facebook", "telegram"]);

export const CHANNEL_CAPABILITIES = Object.freeze({
  instagram: Object.freeze({
    captionLimit: 2200,
    preferredAspectRatios: ["9:16", "4:5", "1:1"],
  }),
  facebook: Object.freeze({
    captionLimit: 5000,
    preferredAspectRatios: ["4:5", "1:1", "16:9"],
  }),
  telegram: Object.freeze({
    captionLimit: 4096,
    preferredAspectRatios: ["1:1", "4:5", "16:9"],
  }),
});

export function assertChannels(channels) {
  if (!Array.isArray(channels) || channels.length === 0) {
    throw new Error("At least one social channel is required");
  }
  for (const channel of channels) {
    if (!SOCIAL_CHANNELS.includes(channel)) {
      throw new Error(`Unsupported social channel: ${channel}`);
    }
  }
}
