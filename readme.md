# Project Description:
## Problem Area:
Our project aims to assist individuals, who are entering a college environment, to develop good habits. With such a big shift, individuals may struggle to find new methods or maintain old strategies for establishing habits in the new setting. We believe addressing this issue is important as facilitating the development of habits will aid individuals with the major life transition into college life, cultivating a sense of independence and responsibility.
### Importance:
The transition into a college environment can be a stressful and overwhelming time for many people, and as such, developing good habits can hold many benefits and can improve a student’s university experience. For example, a study from 2013 showed that in cases where people are unable to exert self control, such as when they are tired or stressed, they often revert to habitual behavior (Neal et al., 2013). This can be good or bad, and we hope to encourage students to develop good habitual behaviors as a college environment can often be tiring and stressful, so having established behaviors should help students manage the workload. There are also other long term benefits. Training habit formation has been shown to improve self control (de Ridder et at., 2019), and adoption of positive habits is associated with longer life and lower risk of chronic diseases (Pereira M.V.G., 2024).
### Novelty:
Our app aims to give users a more detailed method of tracking their progress than other systems by encouraging them to write notes or attach images to an instance of completing a habit. We hope that this increased amount of detail and record keeping will motivate users by giving a detailed view of how much they have improved over time. Planned features and decisions to forgo features of similar habit tracking apps were made to mitigate pressure on users for a stress-free experience, distinguishing our app from others that incorporate things such as to-do list-esque elements in their design for accountability. Social features such as adding friends and sharing analytics were also purposefully avoided to decrease competitiveness and stress.
## Implementation Details:
### Framework, Platform, and Language:	
We used the React Native framework and Expo platform for mobile development. We chose these tools because they both are commonly used for app development, integrate well together, and have easily accessible documentation. React Native uses concepts that we were familiar with to make apps for several ecosystems (IOS and Android) concurrently without having to write different code. React pages are structured similarly to HTML, and use Typescript, this allowed us to start developing fairly quickly in spite of not having experience with these tools. The Expo platform also comes with a system for running the app on an emulator or directly on a phone, which allows us to see our changes and test our app quickly. It also streamlines the package installation process and comes with some packages that are very useful. Github was used for version control and so we could keep our work backed up and up to date with each other. We were all already familiar with Github’s version control which made it an easy choice.
To organize our implementation we first created a list of all the features that we wanted to include and a priority ranking on each feature. This guided our implementation as we were unable to implement everything on our limited time frame.
 
### Libraries:
#### D3 and react-native-svg:
These libraries were used to visualize the amount of time a user has spent on a habit. D3 can automatically generate a line that matches an array of data, and svg can draw shapes to construct the rest of the graph easily. This saved a lot of time compared to building something from the ground up.
#### react-native-calendars:
This library generates a calendar which can display marks on different days  to show when habits were completed. It provides more calendar functionality than we would be able to implement in a reasonable amount of time.
#### expo-router:
This is a built in navigator for the expo framework, it automatically provides a consistent header to each page, and gives us more ways to navigate between pages.
#### react-hook-form:
This react library allows for user inputs to be managed by controllers and a submit handler function. It allows all form fields to be submitted at the same time via one submit handler.
#### expo-image-picker:
This expo library allows for simplified media access, it provides a way to easily select an image from files and access that image within the application. The image uri value is passed to the return object which can be used to view the image.
### Assets:
#### Ionicons:
Provides generic symbols in an svg format that can be used for buttons. It’s faster to get good looking icons from this library than making them in-house.
#### SVGR Playground:
Converts Svg code from Ionicons to a React Native compatible component to streamline the process of getting the icons to display in the app. Doing this manually would be tedious and have no visible difference for the user. It would also likely make the code harder to read.
### Features:
#### Calendar:
Displays what days habits were completed on. An instance of a habit is represented by a small colored dot underneath a day, the color of the dots correspond to the color of a habit as shown in the Activity List. These dots are generated dynamically from an array.

#### Activity List:
This displays a series of buttons which navigate to a page that displays information about a habit. The buttons are generated from an array of habits. They pass the name of the habit to the Activity Page which then populates itself with relevant data.
#### Gallery:
The first image in an array of habits is displayed at the top of the page, below it is a scrollable list that displays the rest of the images in the array. These are pressable and clicking on them will move the pressed image up into the larger frame at the top of the page.

#### Analytics:
This displays numerical information about the habit the page corresponds to, such as time spent during the current month. Time spent during the current week is mapped to a line graph with svg and d3. All the analytics are passed to the components via various data structures and objects.

#### Notes:
Notes are provided through the same array as the images for the Gallery component. The list of notes is implemented in the same way as the list of images but in a vertical fashion.

#### Create New Activity Form: 
This form utilizes the react-hook-form library tools to include a string input for the activity name text input and checkbox inputs for the boolean values of hours, media and notes. All of these inputs are wrapped in a controller sequence so that they are all submitted as one form when the submit button is pressed.

#### Log Activity Form:
This form once again utilizes the react-hook-form library. It includes text inputs for the activity name, hours, minutes, and notes. React does not have a number input type so the hours and minute fields are limited to only accept numeric characters. The select image input uses the expo-image-picker to access images on the device and visualize a preview. Once again the submit button allows for these individual input controllers to be submitted all at the same time when clicked.
			
## Challenges:
### Idea Generation:
- Desktop vs Mobile Considerations.
- Focus on novelty (Many similar systems exist).
- Short time frame to find people in the target demographic for need-finding.
- Lack of actual experience in interviews and need-finding techniques at this point in the quarter made getting useful information difficult.
- Subjects have a wide variety of needs and wants, some of which might be opposed to each other making choosing which view to cater to in our implementation difficult.
- Deciding what types of habits that our app should be designed for (daily vs weekly, scheduled or unscheduled, fun hobbies vs mundane tasks).
- Lack of experience in mobile development meant that we had to rethink how people use their phones and what can fit into a smaller mobile display.
- React js and expo learning curve (web vs mobile compatible versions) timeframe.
- Lack of experience and learning curve with Firebase along with conflicts with existing code led to difficulties with creating error-free database functionality with the app. Due to time constraints, user account features were dropped from the implementation.
With multiple people implementing and pushing code to the repository we encountered git version control issues and merge conflicts that needed to be resolved. We utilized git’s merge conflict tools and were able to locate and resolve each merge issue. We also communicated extensively about when we were editing code and which files to mitigate the risk of creating new merge conflicts.

## Areas of Improvement:
### Vision Impairment:
Our final implementation had very little accessibility consideration for people with vision impairments. There are many places we could improve this, but the most obvious would be to provide voice-to-text and text-to-voice features that could be used to read information off the page, or fill in fields for the submissions without typing. This voice feature would also make the app more accessible for people who struggle with fine motor control, as typing could be difficult. Increasing the size of the habit dots on the calendar would also be an important step, as right now they are very small and will be difficult to see on a small screen. We could also allow users to customize the size of buttons or replace word labels with symbols that might be easier to identify.
### Color Blindness:
When conceptualizing the app we planned on including a feature for users to customize the color of various features. We were unable to implement that feature but if we did it would improve usability for colorblind people as it would allow them to pick colors that they can distinguish for buttons and habits. This would likely also make the app more appealing for all users, since customizability is often appealing.
### Accounts:
To make the app more usable and long-lasting we could allow users to attach their data to an account. This would allow them to keep using our system if their phone stops working.
### Optional Notifications:
Adding notifications was a feature that we discussed heavily and decided not to add to minimize any pressure on the user. Upon further consideration it could make the app more effective for some users if we gave an option to schedule notifications for a certain habit. We would not want this to be mandatory, since some users might find it annoying and it could cause them to stop using the app.
### Retroactive Habit Logging:
We were not able to implement a feature for the user to input a date when logging a habit, this means that they need to log a habit the day they complete it. Allowing them to log habits after the day they completed it would improve usability since they do not need to also remember to log it in our app on top of performing the actual habit.
### Edit Created Habit:
We were unable to implement editing features onto created habits. Editing features such as renaming a habit, or retroactively deciding to have notes for that habit would allow users to recover from errors such as typos in the name and provides extra flexibility for users. It would also be beneficial to have the option to delete a created habit if a user no longer wants it.
### Edit Habit Logs:
We were unable to implement editing features onto logged instances of habits. Editing features on logs such as changing the date, swapping out photos, or editing the notes would allow users to gracefully recover from any errors. The option to delete a log would also help users recover from error.
### Help and Settings Pages:
We were unable to construct a help and settings page due to their low priority on our list of features. Neither is essential to the base functionality of our app so we instead focused on implementing the page layout, calendar, user inputs, and other features that were related to the novelty of our design.
### Aesthetic Design:
Refining the styling of app design with improvements to aspects such as color scheme, button and page appearance, text, and addition of other visual details would improve the aesthetics of our project for a more entertaining experience using the app. Considering a primary focus of our project was prioritizing features that created a stress-free system to track habits, aesthetic improvements can be made to further cultivate this feeling to create a relaxing app design. 
