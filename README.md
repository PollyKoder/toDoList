# This weeks assigment:
- make a to do list
// check repository for further instructions



# My Notes:
- Start by making basic html with elements needed to construct the To-do list. Elements will in this case be: semantic setup(body, header, main and section), div, form, input and button. Accompanied by relevant text.
- Have added some simple css and a background picture. Picture is collected from Unsplash.
- Started on the js to manipulate the html, tried to write the code in a manner that I find more organized, but now I don't know if that's why the code doesn't seem to work, will have to do some console logs to see if I can find the point where the code stops functioning. What's odd is that it doesn't give me an error in the  console i dev tool.
- Found the issue: there was a typo in my html and the onclick call lacked parentheses. Also there was a dot instead of a comma on line 40 in js.
- Have now added css to make it more responsive, biggest challenge was the background image. There has to be a better way to adjust it better...
- Next challenge: how to make a reactive checkbox!
- I've found a couple of ways to create a checkbox, but noticed with a bit of testing that the css may need more adjusting first, possibly it may need to be adjusted with js: the list becomes messy, or looks less in order, if the text length varies because the delete button looks like it's attached directly to the text at the moment. I would like the delete button to appear fixed to one side and the checkbox fixed to the other side.
- The messy-look issue was simpler to fix than I though, just needed a justify-content and space-between in css under the li element.
- Got the checkboxes and they react when clicked, but their position is off, I would like them to be at the front of each task. And I have so far not been able to style them in any way, much less have them adjust the text style of the tasks themselves... They also don't seems to get saved in saveData when they are checked or not, if I refresh the page all the checked boxes go blank.
- Sidenote: I feel like my code has become a mess by now, in particular since I've not got the checkbox'es to work properly yet.