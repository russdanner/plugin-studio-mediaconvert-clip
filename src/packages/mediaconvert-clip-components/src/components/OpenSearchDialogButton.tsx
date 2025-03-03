import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSearchDialogButton(props) {
  const searchLabel = props.title ? props.title : 'Clip Videos';
  const searchIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentCutRounded';
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

          const openInNewBrowserTab = props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
          let initialParams = props.initialParameters;

          dispatch({
            type: 'SHOW_WIDGET_DIALOG',
            payload: {
              title: 'Clip Video',
              widget: {
                id: 'craftercms.components.Search',
                configuration: {
                  embedded: true,
                  initialParameters: {
                    "content-type": "/component/video-on-demand"
                  },
                  mode: 'select',
                  onAcceptSelection(selectedItems) {

                    dispatch({
                      type: 'SHOW_WIDGET_DIALOG',
                      payload: {
                        title: 'Clip Video',
                        widget: {
                          id: 'org.rd.plugin.mediaconvertclip.clip',
                          configuration: {
                            embedded: true,
                            initialParameters: {},
                            mode: 'select',
                            onClose() {
                              console.log('onClose');
                            },
                            selectedItems
                          }
                        }
                      }
                    });

                  },
                  onClose() {
                    console.log('onClose');
                  }
                }
              }
            }
          });

      }}
    />
  );
}

export default OpenSearchDialogButton;
