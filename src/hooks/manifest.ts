import favicons from "./favicons";

const Manifest = (): string => {
  const url: string = "https://weather-testing-app.vercel.app";
  return JSON.stringify({
    name: "Погода на день",
    short_name: "Погода",
    description: "Погодные условия",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    icons: [
      {
        src: url + favicons.faviconManifest36,
        type: "image/png",
        sizes: "36x36",
      },
      {
        src: url + favicons.faviconManifest48,
        type: "image/png",
        sizes: "48x48",
      },
      {
        src: url + favicons.faviconManifest72,
        type: "image/png",
        sizes: "72x72",
      },
      {
        src: url + favicons.faviconManifest144,
        type: "image/png",
        sizes: "144x144",
      },
      {
        src: url + favicons.faviconManifest192,
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: url + favicons.faviconManifest512,
        type: "image/png",
        sizes: "512x512",
      },
    ],
  });
};

export default Manifest;
