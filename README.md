# Asian-paints
Asian Paints wants the users to be able to preview and compare how different colours will look on their walls. They also decided that limiting it to 9 walls is the best bet to not confuse the users and still give them ample colours and shades to compare.

You are a developer at Asian Paints and have decided to build a feature for this.

You designed the feature in such a way that users will be able to see 9 walls on their screen. There will be 2 input boxes and 2 buttons.

Each wall will have an id associated with it. The first input box will take the id of the wall. The second input box will take the colour from the users. The Apply button will apply the colour to the wall. The Reset button will reset the colour of the walls to transparent

Acceptance Criteria:
Create 9 walls, 2 input fields, and 2 buttons.

Each block should have a unique id corresponding to it in 1-9 and the same value. For example, the first wall will have <div id="1" value="1"></div>

The first input box that accepts the id of the wall should have id="wall_id"

The first input box that accepts the colour of the wall should have id="wall_color"

The Apply button should have id="apply"

The Reset button should have id="reset"

If Apply button is pressed, take the colour from the input#wall_color and the wall from the input #wall_id and set the colour as the background-color of the wall wall. The background-color for all other walls should turn transparent.

If Reset button is pressed, the background-color for all the blocks should turn transparent
