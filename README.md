# Color Palettes Generator | Rainbow B.F.F. | aykutsoyuk@gmail.com | www.linkedin.com/in/aykutsoyuk

Rainbow’s B.F.F. is the first project that i contributed to. In this writing, you will be informed of some topics about that process. 
-Which technologies did I use? 
-What did I learn while working on the project? 
-How did I contribute?

## Features
- This is a full-stack web application project with API support for authentication, and storage of desired color palettes generated.
- Rainbow's B.F.F. generates color palettes consist of 5 colors according to the method chosen by the user.
- The user can generate colors either using the space bar or generate button.
- Each color shows their hex codes and names. Also, RGB codes can be reached at editor modal for signed in user.
- Not signed in users can use Rainbow's B.F.F., however, when signed in, generated colors can be saved in user's palette library. The user can delete or update their saved palettes.
- Editor modal provides range inputs for each color's Red, Green, and Blue values, the user can edit the colors by the inputs and updated the color. Once a color is updated, it can be reached in users palettes sidebar.
- Previously created palettes can be reached with undo button. 
- The user can copy by clicking the hex code.

### Which technologies did I use?
- HTML5, CSS3, JavaScript, Jquery, Bootstrap, GitHub, Git and thecolorAPI.

### What did I learn while working on the project?
- Focussing on project planning and building production-ready.
- Reading an open-source, finding a way how to contribute to it.
- Development strategies with using GitHub. 
- How to be a good team player? 
- How to connect to an API in JavaScript? How is it work, and how is the API structured?
- Basic knowledge about API support for authentication.

### How did I contribute?
- I started by making some design changes to the UI. 
- I stored all the generated palettes in the history. By using the undo & redo buttons user can reach previously created palettes or return the next one.
- When the brightness and saturation of the created color exceeded a certain value, the hex code was being less visible. I wrote a function to fix this problem and make hex code compatible.
- I added copy to clipboard function by clicking on the hex code. 
- I used “thecolorAPI” to get the names of generated colors. In this way, I made the colors more catchy. 
- The first version of the project was creating palettes with randomly generated colors. While researching how to achieve color harmony in palettes, I realized that I could solve this situation with a few formulas. I wrote six methods by using this formulas. (complementary, analagous, tetradic, triadic, splitComplementary, monochromatic). And I added this methods to user interface. Now the user can choose the generate method to create beautiful harmonized colors. 

-----------------------------------

Many thanks to macitege, for encouraging me to get into the source files of the project.

https://camo.githubusercontent.com/a615c7e1ef9a850f5427cdc153186763305bb853/68747470733a2f2f692e696d6775722e636f6d2f4472386a3569762e676966
