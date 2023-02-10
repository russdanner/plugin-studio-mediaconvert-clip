const React = craftercms.libs.React;
const { useState, useEffect } = craftercms.libs.React;
const React__default = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const { createAction } = craftercms.libs.ReduxToolkit;
const { useDispatch } = craftercms.libs.ReactRedux;
const SearchUI = craftercms.components.SearchUI && Object.prototype.hasOwnProperty.call(craftercms.components.SearchUI, 'default') ? craftercms.components.SearchUI['default'] : craftercms.components.SearchUI;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
// endregion
// region Widget Dialog
const showWidgetDialog = /*#__PURE__*/ createAction('SHOW_WIDGET_DIALOG');
// endregion

function OpenSearchDialogButton(props) {
    var searchLabel = props.title ? props.title : 'Search';
    var searchIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/SavedSearchRounded';
    var searchQs = props.searchParams ? props.searchParams : '';
    var openInNewBrowserTab = props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
    var _a = useState(), searchParams = _a[0], setSearchParams = _a[1];
    var dispatch = useDispatch();
    useEffect(function () {
        setSearchParams(searchQs);
    }, []);
    return (React.createElement(ToolsPanelListItemButton, { icon: { id: searchIcon }, title: searchLabel, onClick: function () {
            if (openInNewBrowserTab === "true") {
                var urlRoot = window.location.protocol + '//' + window.location.host;
                var windowUrl = urlRoot + '/studio/search#/';
                if (searchParams != '') {
                    windowUrl += '?' + searchParams;
                }
                window.open(windowUrl, '_studioSearch');
            }
            else {
                props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
                var initialParams = props.initialParameters;
                dispatch(showWidgetDialog({
                    id: 'CannedSearchDialog',
                    title: searchLabel,
                    widget: {
                        id: 'craftercms.components.Search',
                        configuration: {
                            embedded: true,
                            initialParameters: initialParams
                        }
                    }
                }));
            }
        } }));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function SearchDialog(props) {
    var searchUIProps = {};
    return React__default.createElement(SearchUI, __assign({}, searchUIProps));
}

var plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    id: 'org.rd.plugin.cannedsearch',
    widgets: {
        'org.rd.plugin.cannedsearch.openSearchButton': OpenSearchDialogButton,
        'org.rd.plugin.cannedsearch.search': SearchDialog
    }
};

export { OpenSearchDialogButton, SearchDialog, plugin as default };
