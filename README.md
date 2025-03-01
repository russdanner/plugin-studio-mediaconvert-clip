# AWS MediaConvert Video Clipping Console for Crafter Studio 
- Add the ability to clip video using AWS MediaCovert to Crafter Studio
  - Configure the icon, title, visibility roles, and search presets for each shortcut

# Installation

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.
You will need the following information:

## Configuring the widget
Modify ui.xml: `config/studio/ui.xml` to contain one or more Canned Search widgets
```
            <widget id="org.rd.plugin.mediaconvert-clip-components.openSearchButton">
               <plugin id="org.rd.plugin.mediaconvertclip"
                       site="{site}"
                       type="apps"
                       name="mediaconvertclip"
                       file="index.js"/>
            </widget>
```
