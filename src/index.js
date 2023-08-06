const { faker } = require('@faker-js/faker');
const { writeFileSync } = require('fs');

const chats = [];

for (let i = 1; i <= 12; i++) {
  const user = {
    name: faker.person.fullName(),
    phone: faker.phone.number("###########"),
    lastSeen: faker.date.anytime(),
  };

  let messages = [];
  for (let j = 1; j <= 6; j++) {
    messages.push({
      id: j,
      sent: faker.date.anytime(),
      sender: {
        id: (Math.random() * 10) + 1,
        name: faker.person.fullName(),
        phone: faker.phone.number("###########"),
      },
      text: faker.lorem.sentences((Math.random() * 3) + 1, "<br>"),
    });
  }

  chats.push({ id: i, user, messages });
}

try {
  writeFileSync('chats.json', JSON.stringify(chats));
} catch (err) {
  console.error(err);
}
