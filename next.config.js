const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "3000",
          },
        ],
      },
    };
  } else {
    return {
      images: {
        remotePatterns: [
          {
            protocol: process.env.IMAGE_PROTOCOL ?? "https",
            hostname: process.env.VERCEL_PROJECT_PRODUCTION_URL,
            port: process.env.IMAGE_PORT ?? "",
          },
        ],
      },
    };
  }
};
