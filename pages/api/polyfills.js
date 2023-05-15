const polyfillLibrary = require("polyfill-library");

export default async function handler(req, res) {
  const polyfillBundle = await polyfillLibrary.getPolyfillString({
    uaString: req.headers["user-agent"],
    minify: true,
    features: {
      Intl: {},
      "Intl.RelativeTimeFormat": {}
    }
  });

  const buf = Buffer.from(polyfillBundle, "utf-8");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/javascript");
  res.setHeader("Content-Length", buf.byteLength);
  res.end(buf);
}
