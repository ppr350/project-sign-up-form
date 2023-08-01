# The Odin Project: Sign Up Form

## The Project
- The objective of this sign up form is to put all I have learned so far from The Odin Project Intermediate HTML and CSS Course into practice.
- I also learn new skills on the fly
- The form should be able to fit nicely in all screen size
- A logo made by me and a photograph taken by me will be used to in this project 

## How it should behave
- As mentioned above, the sign up form should be a responsive design 
- All the inputs live in the fieldset
- The input entries are coded to be validated in Javascript and give useful feedback when needed
- The “First Name” and “Last Name” use “text” as input type
- The “email” input uses “email” input type and uses Regex to check the format 
- The “Phone Number” input uses “number” input type, and uses Regex to validate the phone number
- The “Password” input gives user info to enter a acceptable password 
- The “Confirm Password” input checks if the user enters same password as the “Password” input

## How it's made :
### CSS Pseudo-classes
- Pseudo-classes will be widely used in this project 
- The :valid and :invalid pseudo-classes are used to validate the user entries and give feedback when needed 
- The :active pseudo-class is used to highlight the input box currently selected

### Button
- A submit button lives inside the form tag but outside of the fieldset
- It should reject the request to submit form if the form is not yet completed

### Custom properties 
- Custom properties can be used to declare the form inputs CSS values such as border colour and text colour
- Custom properties also be used for font size and font weight in this project 

### Online font libraries 
- This project uses Adobe fonts and Google fonts
