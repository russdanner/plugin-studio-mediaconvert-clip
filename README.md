# Canned Search Crafter Studio 
- Add as many pre-configured search short cuts to your sidebar as you like

# Installation

Install the plugin via Studio's Plugin Management UI under `Site Tools` > `Plugin Management`.
You will need the following information:

## Configuring the widget
Modify ui.xml: `config/studio/ui.xml` to contain one or more Canned Search widgets
```
            <widget id="org.rd.plugin.cannedsearch.openSearchButton">
               <plugin id="org.rd.plugin.cannedsearch"
                       site="{site}"
                       type="apps"
                       name="cannedsearch"
                       file="index.js"/>
               <configuration>
                  <title>Artlicles By Last Edit</title>
                  <icon id="@mui/icons-material/DescriptionRounded"/> <!-- optional tag -->
                  <searchParams><![CDATA[filters=%7B"content-type"%3A%5B"%2Fpage%2Farticle"%5D%7D&sortBy=last-edit-date&sortOrder=desc]]></searchParams>
               </configuration>
            </widget>
```
