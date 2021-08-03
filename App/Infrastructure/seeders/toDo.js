const { Seeder } = require("mongoose-data-seed");
const faker = require("faker");
const uuidv4 = require("uuid/v4");
import todoList from "../../Infrastructure/database/models/mongoose/todo";

const data = [];

for (var i = 0; i < 100; i++) {
    data.push({
        id: uuidv4(),
        name: faker.name.findName(),
        description: faker.lorem.paragraph(),
        priority: faker.lorem.word,
        status: faker.lorem.word
    });
}

class ToDoSeeder extends Seeder {
    async run() {
        return todoList.create(data);
    }
}

module.exports = ToDoSeeder;
