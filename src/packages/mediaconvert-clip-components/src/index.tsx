import { PluginDescriptor } from '@craftercms/studio-ui';
import OpenSearchDialogButton from './components/OpenSearchDialogButton';
import SearchDialog from './components/SearchDialog';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.mediaconvertclip',
  widgets: {
    'org.rd.plugin.mediaconvertclip.openSearchButton': OpenSearchDialogButton,
    'org.rd.plugin.mediaconvertclip.search': SearchDialog
  }
};

export { OpenSearchDialogButton, SearchDialog };

export default plugin;
