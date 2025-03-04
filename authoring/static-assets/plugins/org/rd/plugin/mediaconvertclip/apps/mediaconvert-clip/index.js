const React = craftercms.libs.React;
const { useState, useEffect, useRef } = craftercms.libs.React;
const React__default = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const { useDispatch } = craftercms.libs.ReactRedux;
const SearchUI = craftercms.components.SearchUI && Object.prototype.hasOwnProperty.call(craftercms.components.SearchUI, 'default') ? craftercms.components.SearchUI['default'] : craftercms.components.SearchUI;
const Slider = craftercms.libs.MaterialUI.Slider && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Slider, 'default') ? craftercms.libs.MaterialUI.Slider['default'] : craftercms.libs.MaterialUI.Slider;
const DialogBody = craftercms.components.DialogBody && Object.prototype.hasOwnProperty.call(craftercms.components.DialogBody, 'default') ? craftercms.components.DialogBody['default'] : craftercms.components.DialogBody;
const DialogFooter = craftercms.components.DialogFooter && Object.prototype.hasOwnProperty.call(craftercms.components.DialogFooter, 'default') ? craftercms.components.DialogFooter['default'] : craftercms.components.DialogFooter;
const PrimaryButton = craftercms.components.PrimaryButton && Object.prototype.hasOwnProperty.call(craftercms.components.PrimaryButton, 'default') ? craftercms.components.PrimaryButton['default'] : craftercms.components.PrimaryButton;
const { createAction } = craftercms.libs.ReduxToolkit;
const { getGlobalHeaders } = craftercms.utils.ajax;

function OpenSearchDialogButton(props) {
    var searchLabel = props.title ? props.title : 'Clip Videos';
    var searchIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentCutRounded';
    var searchQs = props.searchParams ? props.searchParams : '';
    props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
    var _a = useState(); _a[0]; var setSearchParams = _a[1];
    var dispatch = useDispatch();
    useEffect(function () {
        setSearchParams(searchQs);
    }, []);
    return (React.createElement(ToolsPanelListItemButton, { icon: { id: searchIcon }, title: searchLabel, onClick: function () {
            props.openInNewBrowserTab ? props.openInNewBrowserTab : true;
            props.initialParameters;
            dispatch({
                type: 'SHOW_WIDGET_DIALOG',
                payload: {
                    title: 'Clip Video',
                    widget: {
                        id: 'craftercms.components.Search',
                        configuration: {
                            embedded: true,
                            initialParameters: {
                                filters: {
                                    "mime-type": ["video/mp4"]
                                }
                            },
                            mode: 'select',
                            onAcceptSelection: function (selectedItems) {
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
                                                onClose: function () {
                                                    console.log('onClose');
                                                },
                                                selectedItems: selectedItems
                                            }
                                        }
                                    }
                                });
                            },
                            onClose: function () {
                                console.log('onClose');
                            }
                        }
                    }
                }
            });
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function SearchDialog(props) {
    var searchUIProps = {};
    return React__default.createElement(SearchUI, __assign({}, searchUIProps));
}

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
const showSystemNotification = /*#__PURE__*/ createAction('SHOW_SYSTEM_NOTIFICATION');

var pluginBaseUrl = '/api/2/plugin/script/plugins/org/rd/plugin/mediaconvertclip';
var createFetchUrl = function (authoringBase, url) { return "".concat(authoringBase).concat(pluginBaseUrl, "/").concat(url); };
function createClip(videoPath, startTime, endTime) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var state, siteId, authoringBase, headers, response, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    state = window.craftercms.getStore().getState();
                    siteId = state.sites.active;
                    authoringBase = state.env.authoringBase;
                    headers = (_a = getGlobalHeaders()) !== null && _a !== void 0 ? _a : {};
                    return [4 /*yield*/, fetch(createFetchUrl(authoringBase, "clip?siteId=".concat(siteId)), {
                            method: 'POST',
                            headers: __assign({ 'Content-Type': 'application/json' }, headers),
                            body: JSON.stringify({
                                videoPath: videoPath,
                                startTime: startTime,
                                endTime: endTime
                            })
                        })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error('Failed to create clip');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    return [2 /*return*/, data.result];
            }
        });
    });
}

var ClipDialog = function (props) {
    var dispatch = useDispatch();
    var _a = useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = useState([0, 0]), value = _b[0], setValue = _b[1];
    var _c = useState(0), duration = _c[0], setDuration = _c[1];
    var _d = useState([]), marks = _d[0], setMarks = _d[1];
    var videoRef = useRef(null);
    var selectedItems = props.selectedItems;
    var videoPath = selectedItems[0];
    useEffect(function () {
        var video = videoRef.current;
        if (video) {
            video.onloadedmetadata = function () {
                setDuration(video.duration);
                setMarks([
                    { value: 0, label: '0s' },
                    { value: "".concat(Math.round(video.duration * 0.2)), label: "".concat(Math.round(video.duration * 0.2), "s") },
                    { value: "".concat(Math.round(video.duration * 0.4)), label: "".concat(Math.round(video.duration * 0.4), "s") },
                    { value: "".concat(Math.round(video.duration * 0.6)), label: "".concat(Math.round(video.duration * 0.6), "s") },
                    { value: "".concat(Math.round(video.duration * 0.8)), label: "".concat(Math.round(video.duration * 0.8), "s") },
                    { value: video.duration, label: "".concat(Math.round(video.duration), "s") },
                ]);
                setValue([Math.round(video.duration * 0.2), Math.round(video.duration * 0.37)]);
            };
            video.ontimeupdate = function () {
                if (video.currentTime >= value[1]) {
                    video.pause();
                }
            };
            video.onplay = function () {
                if (video.currentTime < value[0] || video.currentTime > value[1]) {
                    video.currentTime = value[0];
                }
            };
        }
    }, [value]);
    function valuetext(value) {
        return "".concat(value);
    }
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var handleClip = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, createClip(videoPath, value[0], value[1])];
                case 2:
                    response = _a.sent();
                    if (response) {
                        dispatch(showSystemNotification({
                            message: "MediaConvert job id: ".concat(response)
                        }));
                    }
                    else {
                        dispatch(showSystemNotification({
                            message: 'Clip failed'
                        }));
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    dispatch(showSystemNotification({
                        message: 'Clip failed'
                    }));
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(DialogBody, null,
            React__default.createElement("video", { ref: videoRef, controls: true, style: { height: '71.5vh' } },
                React__default.createElement("source", { src: "".concat(videoPath), type: "video/mp4" })),
            React__default.createElement(Slider, { getAriaLabel: function () { return 'Temperature range'; }, min: 0, max: duration, value: value, marks: marks, onChange: handleChange, valueLabelDisplay: "auto", getAriaValueText: valuetext, style: {
                    margin: '5px',
                    width: '98%',
                    paddingLeft: '5px',
                    paddingRight: '5px'
                } })),
        React__default.createElement(DialogFooter, null,
            React__default.createElement(PrimaryButton, { onClick: handleClip, loading: isSubmitting }, "Clip Video"))));
};

var plugin = {
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

export { ClipDialog, OpenSearchDialogButton, SearchDialog, plugin as default };
