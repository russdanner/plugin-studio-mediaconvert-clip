import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSearchDialogButton(props) {
  const searchLabel = props.title ? props.title : 'Search';
  const searchIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/SavedSearchRounded';
  const searchQs = props.searchParams ? props.searchParams : '';

  const [searchParams, setSearchParams] = useState();


  const dispatch = useDispatch();
  
  useEffect(() => {
    setSearchParams(searchQs)
  }, []);

  return (
    <ToolsPanelListItemButton
      icon={{ id: searchIcon }}
      title={searchLabel}
      onClick={() => {
        var urlRoot = window.location.protocol + '//' + window.location.host
        
        // if( window.location.port != "80" 
        // &&  window.location.port != "443") {
        //    urlRoot += ":"+window.location.port
        // }

        var windowUrl = urlRoot+'/studio/search#/'

        if(searchParams != '') {
          windowUrl += "?" + searchParams
        }

        window.open(windowUrl, "_studioSearch")
      }
  }/>)
}

export default OpenSearchDialogButton;
