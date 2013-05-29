jtabs
=====

The usage of this javascript + jquery library its pretty simple: 

1. Import the script ritght after the jquery plugin and the corresponding css.
      - tabbedContent.js
      - tabbedContent.css

2. Edit the global script variables (are documented and explained on the code) or use the given ones
3. Use the script:

      - To show a tab:                        TabbedContent.show(tab identifier)
      - To hide all tabs:                     TabbedContent.hideAll()
      - To change the active tab to another:  TabbedContent.changeTo(tab identifier)
      - To add a tab:                         TabbedContent.addTab(tab identifier, tab title, tab content, [change to it(true/false)], [callback_function()])
      - To delete a tab:                      TabbedContent.deleteTab(tab identifier)

