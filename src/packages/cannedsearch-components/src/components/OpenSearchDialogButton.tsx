import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSearchDialogButton(props) {
  const searchLabel = props.title ? props.title : 'Search';
  const searchIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/SavedSearchRounded';
  const searchQs = props.searchParams ? props.searchParams : '';

  const openInNewBrowserTab = props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
  const [searchParams, setSearchParams] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams(searchQs);
  }, []);

  return (
    <ToolsPanelListItemButton
      icon={{ id: searchIcon }}
      title={searchLabel}
      onClick={() => {
        if (openInNewBrowserTab === "true") {
          var urlRoot = window.location.protocol + '//' + window.location.host;

          var windowUrl = urlRoot + '/studio/search#/';

          if (searchParams != '') {
            windowUrl += '?' + searchParams;
          }
          window.open(windowUrl, '_studioSearch');
        } else {
          const openInNewBrowserTab = props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
          let initialParams = props.initialParameters;
             
          dispatch(
            showWidgetDialog({
              id: 'CannedSearchDialog',
              title: searchLabel,
              widget: {
                id: 'craftercms.components.Search',
                configuration: {
                  embedded: true,
                  initialParameters: initialParams
                }
              }
            })
          );
        }
      }}
    />
  );
}

export default OpenSearchDialogButton;
