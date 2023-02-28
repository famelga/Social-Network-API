# Social-Network-API

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
|  Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| MongoDB   | [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/) |
| Mongoose    | [https://mongoosejs.com/docs/guide.html](https://mongoosejs.com/docs/guide.html) |
| npm    | [https://docs.npmjs.com/](https://docs.npmjs.com/) | 

## Description 


Connecting with friends is easier to do with social networks! Users can add friends, share their thoughts, and even have their friends react to those thoughts. 

All of this is done using MongoDb , Mongoose ODM, and Express.js. I began by creating the User, Thought, and Reaction models using the required information from the project description. From there, the routes and controllers were coded. 

Since there was no seeded data, I began creating user, their thoughts, friend list, and reactions using Insomnia based on the routes that I created.

Video: https://watch.screencastify.com/v/INXrcy1GFZAWoPq7qlBz
<iframe src="https://drive.google.com/file/d/19rYALZGjxyFkNIHyrMKq6GPxbLq31H-E/preview" width="640" height="480"></iframe>

![Walk Through Video](/assests/videos/Social%20Network%20API%20Video.webm)

## Portfolio Example

Since this project required the use of Mongoose instead of Sequelize, I needed to reference the documentation for how proper validation syntax with Mongoose. While the concepts were the same, the were sligt differences between Mongoose and Sequelize. For example, uses the syntax "allowNull: false," to indicate that a field must have content, whereas Mongoose uses the syntax "required: true". Additionally, Sequelize utilizes DataTypes, while Mongoose does not.


Sequelize

```
 username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

```

Mongoose

```
  username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

```


## Usage 

Use Insomnia to view and interact with information using the routes.


## Learning Points 

This was my firest experience with MongoDB and Mongoose for creating a social network. I found the syntax for creating controllers and routes to be simpler and easier to navigate through than Sequelize. It is also more readable.


## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga




## License

MIT License

Copyright (c) 2023 Fayven Amelga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2023 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.