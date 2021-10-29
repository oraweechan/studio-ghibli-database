# Project Overview

## Project Links

- [https://github.com/oraweechan/project-2-react](https://github.com/oraweechan/project-2-react)
- [add your deployment link]()

## Project Description

For this project, I plan to create a Studio Ghibli database. All movie details will be populated using an API call. This database will showcase all films and individual film details. It will also have a feature to save favorite movies. The project is created using React's Link and Router.

## API



[https://ghibliapi.herokuapp.com/films](https://ghibliapi.herokuapp.com/films)

```
{
"id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
"title": "Castle in the Sky",
"image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
"movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
"description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
"director": "Hayao Miyazaki",
"producer": "Isao Takahata",
"release_date": "1986",
"running_time": "124"
}
```


## Wireframes

- [Mobile Wireframe #1](https://res.cloudinary.com/orawee/image/upload/v1635530586/StudioGhibli/X_-_1_nknprr.png)
- [Desktop Wireframe #1](https://res.cloudinary.com/orawee/image/upload/v1635530596/StudioGhibli/Studio_Ghibli_3_nxjcax.jpg)
- [Mobile Wireframe #2](https://res.cloudinary.com/orawee/image/upload/v1635530596/StudioGhibli/Studio_Ghibli_1_fftkxx.jpg)
- [Desktop Wireframe #2](https://res.cloudinary.com/orawee/image/upload/v1635530596/StudioGhibli/Studio_Ghibli_2_ra7c8v.jpg)
- [React Architecture](https://res.cloudinary.com/orawee/image/upload/v1635533557/StudioGhibli/Studio_Ghibli_4_qvdnz9.jpg)


### MVP/PostMVP - 5min


#### MVP 
- Find and use external api 
- Render data on page to show all films
- Render data on page to show individual film selected.
- Implement save and remove interaction for film.

#### PostMVP 

- Populate auto-fill on search bar
- Add additional features 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up App with React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 
| Movies | This will render all films from data requested from API | 
| Movie | This will render individual film clicked | 
| Favorites | This will render saved films | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components| H | 6hrs| 0 | 0 |
| Working with API | H | 3hrs| 0 | 0 |
| Adding Save function | H | 2hrs| 0 | 0 |
| Adding Remove function | H | 2hrs| 0 | 0 |
| Styling of homepage| M | 5hrs| 0 | 0 |
| Styling of individual page| M | 3hrs| 0 | 0 |
| Styling of favorites page| M | 3hrs| 0 | 0 |
| Adding Search | M | 3hrs| 0 | 0 |
| Adding styling animations| L | 6hrs| 0 | 0 |
| Total | H | 33hrs| 0hrs | 0hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
