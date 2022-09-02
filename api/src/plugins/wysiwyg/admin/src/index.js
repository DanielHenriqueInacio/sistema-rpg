import pluginPkg from "../../package.json";
import Editor from "./components/Editor";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addFields({ type: 'wysiwyg', Component: Editor });

    app.registerPlugin({
      id: pluginId,
      isReady: true,
      name,
    });
  },
  bootstrap() {},
};
