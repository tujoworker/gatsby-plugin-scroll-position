export function onRenderBody({ setPostBodyComponents }, pluginOptions) {
  setPostBodyComponents([
    <script
      key="gatsby-plugin-scroll-position"
      dangerouslySetInnerHTML={{
        __html: `window.__SP_ELEMENTS__=${JSON.stringify(
          pluginOptions.elements
        )};${String(globalThis.__SP_SCRIPT__)}`,
      }}
    />,
  ])
}
