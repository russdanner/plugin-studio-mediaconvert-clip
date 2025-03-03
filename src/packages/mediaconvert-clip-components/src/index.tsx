import { PluginDescriptor } from '@craftercms/studio-ui';
import OpenSearchDialogButton from './components/OpenSearchDialogButton';
import SearchDialog from './components/SearchDialog';
import ClipDialog from './components/ClipDialog';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.mediaconvertclip',
  widgets: {
    'org.rd.plugin.mediaconvertclip.openSearchButton': OpenSearchDialogButton,
    'org.rd.plugin.mediaconvertclip.search': SearchDialog,
    'org.rd.plugin.mediaconvertclip.clip': ClipDialog
  }
};

export { OpenSearchDialogButton, SearchDialog, ClipDialog };

export default plugin;
