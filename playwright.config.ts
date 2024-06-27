import type {PlaywrightTestConfig} from "@playwright/test";

export default {
  projects: [
    {
      name: "chromium",
      use: {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.26 Safari/537.36",
        viewport: {width: 1280, height: 720},
        screen: {width: 1920, height: 1080},
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: "chromium",
      },
    },
  ],
} satisfies PlaywrightTestConfig;
