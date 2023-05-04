import logo72 from "../img/logo-72x72.png"
import logo96 from "../img/logo-96x96.png"
import logo128 from "../img/logo-128x128.png"
import logo144 from "../img/logo-144x144.png"
import logo152 from "../img/logo-152x152.png"
import logo192 from "../img/logo-192x192.png"
import logo384 from "../img/logo-384x384.png"
import logo512 from "../img/logo-512x512.png"

const Manifest = () : string => {
  const url: string = "https://weather-testing-app.vercel.app/"
  return JSON.stringify({
    name: "Погода на день",
    short_name: "Погода",
    description: "Погодные условия",
    start_url: url,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    icons: [
      {
        src: url+logo72.src,
        type: "image/png",
        sizes: "72x72"
      },
      {
        src: url+logo96.src,
        type: "image/png",
        sizes: "96x96"
      },
      {
        src: url+logo128.src,
        type: "image/png",
        sizes: "128x128"
      },
      {
        src: url+logo144.src,
        type: "image/png",
        sizes: "144x144"
      },
      {
        src: url+logo152.src,
        type: "image/png",
        sizes: "152x152"
      },
      {
        src: url+logo192.src,
        type: "image/png",
        sizes: "192x192"
      },
      {
        src: url+logo384.src,
        type: "image/png",
        sizes: "384x384"
      },
      {
        src: url+logo512.src,
        type: "image/png",
        sizes: "512x512"
      }
    ]
  })
}

export default Manifest