import { getGlobalHeaders } from '@craftercms/studio-ui/utils/ajax';

export const pluginBaseUrl = '/api/2/plugin/script/plugins/org/rd/plugin/mediaconvertclip';
export const createFetchUrl = (authoringBase, url) => `${authoringBase}${pluginBaseUrl}/${url}`;

export async function createClip(videoPath: string, startTime: number, endTime: number) {
    const state = window.craftercms.getStore().getState();
    const siteId = state.sites.active;
    const authoringBase = state.env.authoringBase;
    const headers = getGlobalHeaders() ?? {};
    const response = await fetch(createFetchUrl(authoringBase, `clip?siteId=${siteId}`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        videoPath,
        startTime,
        endTime
      })
    });

    return response.json();
  }