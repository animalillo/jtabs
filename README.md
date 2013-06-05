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


 This program is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
