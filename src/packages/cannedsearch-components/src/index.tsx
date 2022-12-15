import { PluginDescriptor } from '@craftercms/studio-ui';
import OpenSearchDialogButton from './components/OpenSearchDialogButton';
import SearchDialog from './components/SearchDialog';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.cannedsearch',
  widgets: {
    'org.rd.plugin.cannedsearch.openSearchButton': OpenSearchDialogButton,
    'org.rd.plugin.cannedsearch.search': SearchDialog
  }
};

export { OpenSearchDialogButton, SearchDialog };

export default plugin;
